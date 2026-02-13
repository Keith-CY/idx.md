import { createHash } from "crypto";
import { mkdir, rm } from "fs/promises";
import { dirname, isAbsolute, relative, resolve } from "path";
import { stringify } from "yaml";
import {
  buildCategoryIndexes,
  formatUnknownCategoryReason,
  parseCategoriesFromTags,
} from "./lib/categories";
import { buildPilotPlaybooks } from "./lib/playbooks";
import { buildSitemapXml } from "./lib/sitemap";
import { buildLlmsTxt, buildRobotsTxt } from "./lib/well-known";
import {
  buildIndustryIndexes,
  buildScenarioIndexes,
  parseIndustryFromTags,
  parseScenarioFromTags,
} from "./lib/verticals";
import { loadSources, type SourceEntry } from "./lib/registry";
import {
  CATEGORY_INDEX_PATH,
  DATA_ROOT,
  INDUSTRY_INDEX_PATH,
  INDEX_PATH,
  SCENARIO_INDEX_PATH,
  bodyPath,
  categoryIndexPath,
  formatIndexEntry,
  headPath,
  industryIndexPath,
  scenarioIndexPath,
  topicDir,
  vectorsPath,
} from "./lib/data-layout";
import { repoRoot } from "./lib/paths";
import { SITE_ORIGIN } from "./lib/site-config";
import { buildHeadVectorShard, serializeVectorShard } from "./lib/vectors";

const result = await loadSources();

type Rejection = { url: string; reason: string };
type IndexEntry = {
  topic: string;
  headContent: string;
  categories: string[];
  scenarios: string[];
  industries: string[];
};

const SUMMARY_MAX_LINES = 10;
const TEXT_DECODER = new TextDecoder("utf-8");
const SKILL_SOURCE_PATH = resolve(repoRoot, "SKILL.md");
const SKILL_TARGET_PATH = resolve(DATA_ROOT, "SKILL.md");

const SITEMAP_PATH = resolve(DATA_ROOT, "sitemap.xml");
const LLMS_TXT_PATH = resolve(DATA_ROOT, "llms.txt");
const ROBOTS_TXT_PATH = resolve(DATA_ROOT, "robots.txt");

const REPORT_DIR = resolve(DATA_ROOT, "reports");
const REPORT_PATH = resolve(REPORT_DIR, "rejected.md");

function resolveTopicDir(topic: string): string {
  const entryPath = resolve(topicDir(topic));
  const rel = relative(DATA_ROOT, entryPath);
  if (rel.startsWith("..") || isAbsolute(rel)) {
    throw new Error(`Unsafe topic path: ${topic}`);
  }
  return entryPath;
}

function computeSha256(bytes: Uint8Array): string {
  return createHash("sha256").update(bytes).digest("hex");
}

function takeSummaryLines(text: string): string[] {
  const lines = text.split(/\r?\n/).map((line) => line.trimEnd());
  const nonEmpty = lines.filter((line) => line.trim().length > 0);
  return nonEmpty.slice(0, SUMMARY_MAX_LINES);
}

function buildSummaryLines(source: SourceEntry, markdown: string): string[] {
  const rawSummary = source.summary?.trim();
  if (rawSummary) {
    return takeSummaryLines(rawSummary);
  }
  return takeSummaryLines(markdown);
}

async function writeSkillDoc(): Promise<void> {
  try {
    const content = await Bun.file(SKILL_SOURCE_PATH).text();
    const normalized = content.endsWith("\n") ? content : `${content}\n`;
    await Bun.write(SKILL_TARGET_PATH, normalized);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`Failed to write SKILL.md (${message})`);
  }
}

function formatRejectedReport(rejections: Rejection[]): string {
  const lines: string[] = [
    "# Rejected sources",
    "",
    "| Reason | URL |",
    "| --- | --- |",
  ];

  if (rejections.length === 0) {
    lines.push("| None | |");
    lines.push("");
    return lines.join("\n");
  }

  for (const rejection of rejections) {
    const reason = rejection.reason.replaceAll("|", "\\|");
    const url = rejection.url.replaceAll("|", "\\|");
    lines.push(`| ${reason} | ${url} |`);
  }
  lines.push("");
  return lines.join("\n");
}

function formatUnknownVerticalReason(
  kind: "scenario" | "industry",
  unknownSlugs: readonly string[],
): string {
  const tags = unknownSlugs.map((slug) => `${kind}-${slug}`).join(", ");
  return `Unknown ${kind} tag(s): ${tags}; mapped to ${kind}-uncategorized`;
}

function pushUnknownTagRejections(
  rejections: Rejection[],
  params: {
    url: string;
    unknownSlugs: readonly string[];
    formatReason: (unknownSlugs: readonly string[]) => string;
  },
): void {
  if (params.unknownSlugs.length === 0) {
    return;
  }

  rejections.push({
    url: params.url,
    reason: params.formatReason(params.unknownSlugs),
  });
}

function processAndAddIndexEntry(
  entry: {
    topic: string;
    url: string;
    tags: readonly string[] | undefined;
    headContent: string;
  },
  rejections: Rejection[],
  indexEntries: IndexEntry[],
): void {
  const parsedCategories = parseCategoriesFromTags(entry.tags);
  pushUnknownTagRejections(rejections, {
    url: entry.url,
    unknownSlugs: parsedCategories.unknown,
    formatReason: formatUnknownCategoryReason,
  });

  const parsedScenarios = parseScenarioFromTags(entry.tags);
  pushUnknownTagRejections(rejections, {
    url: entry.url,
    unknownSlugs: parsedScenarios.unknown,
    formatReason: (unknownSlugs) =>
      formatUnknownVerticalReason("scenario", unknownSlugs),
  });

  const parsedIndustries = parseIndustryFromTags(entry.tags);
  pushUnknownTagRejections(rejections, {
    url: entry.url,
    unknownSlugs: parsedIndustries.unknown,
    formatReason: (unknownSlugs) =>
      formatUnknownVerticalReason("industry", unknownSlugs),
  });

  indexEntries.push({
    topic: entry.topic,
    headContent: entry.headContent,
    categories: parsedCategories.categories,
    scenarios: parsedScenarios.scenarios,
    industries: parsedIndustries.industries,
  });
}

type IndexPage = { slug: string; content: string };

async function writeIndexPages(params: {
  hubPath: string;
  hubContent: string;
  pages: readonly IndexPage[];
  pagePathForSlug: (slug: string) => string;
}): Promise<void> {
  await mkdir(dirname(params.hubPath), { recursive: true });
  await Bun.write(params.hubPath, params.hubContent);

  for (const page of params.pages) {
    const outputPath = params.pagePathForSlug(page.slug);
    await mkdir(dirname(outputPath), { recursive: true });
    await Bun.write(outputPath, page.content);
  }
}

type FetchResult = {
  markdown: string;
  bytes: Uint8Array;
  retrievedAt: string;
};

type AcceptedEntry = {
  source: SourceEntry;
  retrievedAt: string;
};

async function fetchMarkdown(
  source: SourceEntry,
  rejections: Rejection[],
): Promise<FetchResult | null> {
  let url: URL;
  try {
    url = new URL(source.source_url);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    rejections.push({
      url: source.source_url,
      reason: `Invalid URL (${message})`,
    });
    return null;
  }

  let response: Response;
  try {
    response = await fetch(url);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    rejections.push({
      url: source.source_url,
      reason: `Fetch failed (${message})`,
    });
    return null;
  }

  if (!response.ok) {
    rejections.push({
      url: source.source_url,
      reason: `Fetch failed (${response.status} ${response.statusText})`,
    });
    return null;
  }

  let buffer: ArrayBuffer;
  try {
    buffer = await response.arrayBuffer();
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    rejections.push({
      url: source.source_url,
      reason: `Read failed (${message})`,
    });
    return null;
  }
  const bytes = new Uint8Array(buffer);
  const markdown = TEXT_DECODER.decode(bytes);

  return { markdown, bytes, retrievedAt: new Date().toISOString() };
}

const accepted: AcceptedEntry[] = [];
const rejected: Rejection[] = [];
const indexEntries: IndexEntry[] = [];

const writeRejectedReport = async () => {
  try {
    await mkdir(REPORT_DIR, { recursive: true });
    await Bun.write(REPORT_PATH, formatRejectedReport(rejected));
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`Failed to write rejected report: ${message}`);
  }
};

if (!result.ok) {
  console.error("Source registry validation errors:");
  for (const error of result.errors) {
    console.error(`- ${error}`);
  }
  await writeRejectedReport();
  process.exit(1);
}

await rm(DATA_ROOT, { recursive: true, force: true });
await mkdir(DATA_ROOT, { recursive: true });

try {
  for (const source of result.sources) {
    const fetched = await fetchMarkdown(source, rejected);
    if (fetched === null) {
      continue;
    }
    const { markdown, bytes, retrievedAt } = fetched;
    const topic = source.slug;
    const entryDirPath = resolveTopicDir(topic);
    const summaryLines = buildSummaryLines(source, markdown);
    const summaryText = summaryLines.join("\n");
    const title = source.title?.trim() || source.slug;
    const frontmatter = {
      stable_id: `${source.type}/${source.slug}`,
      type: source.type,
      title,
      summary: summaryText,
      tags: source.tags ?? [],
      source_url: source.source_url,
      license: source.license ?? "",
      upstream_ref: source.upstream_ref ?? "",
      github_stars: source.github_stars ?? null,
      github_forks: source.github_forks ?? null,
      github_is_organization: source.github_is_organization ?? null,
      retrieved_at: retrievedAt,
      content_sha256: computeSha256(bytes),
    };
    const yaml = stringify(frontmatter).trimEnd();

    await mkdir(entryDirPath, { recursive: true });
    await Bun.write(bodyPath(topic), bytes);

    const headContent = `---\n${yaml}\n---\n`;
    await Bun.write(headPath(topic), headContent);
    await Bun.write(
      vectorsPath(topic),
      serializeVectorShard(
        buildHeadVectorShard({
          topic,
          stableId: frontmatter.stable_id,
          type: frontmatter.type,
          title: frontmatter.title,
          summary: frontmatter.summary,
          tags: frontmatter.tags,
          sourceUrl: frontmatter.source_url,
          retrievedAt: frontmatter.retrieved_at,
          contentSha256: frontmatter.content_sha256,
        }),
      ),
    );
    processAndAddIndexEntry(
      {
        topic,
        url: source.source_url,
        tags: source.tags,
        headContent,
      },
      rejected,
      indexEntries,
    );

    accepted.push({ source, retrievedAt });
  }
} finally {
  await writeRejectedReport();
}

const playbookRetrievedAt = new Date().toISOString();
for (const playbook of buildPilotPlaybooks(playbookRetrievedAt)) {
  const entryDirPath = resolveTopicDir(playbook.topic);
  await mkdir(entryDirPath, { recursive: true });
  await Bun.write(bodyPath(playbook.topic), playbook.bodyBytes);
  await Bun.write(headPath(playbook.topic), playbook.headContent);
  await Bun.write(
    vectorsPath(playbook.topic),
    serializeVectorShard(
      buildHeadVectorShard({
        topic: playbook.topic,
        stableId: playbook.frontmatter.stable_id,
        type: playbook.frontmatter.type,
        title: playbook.frontmatter.title,
        summary: playbook.frontmatter.summary,
        tags: playbook.frontmatter.tags,
        sourceUrl: playbook.frontmatter.source_url,
        retrievedAt: playbook.frontmatter.retrieved_at,
        contentSha256: playbook.frontmatter.content_sha256,
      }),
    ),
  );
  processAndAddIndexEntry(
    {
      topic: playbook.topic,
      url: `playbook:${playbook.topic}`,
      tags: playbook.tags,
      headContent: playbook.headContent,
    },
    rejected,
    indexEntries,
  );
}

const INDEX_PREAMBLE =
  "<!-- Contribute: open a PR to add new markdown sources to sources/general.yml -->";
const sortedIndexEntries = indexEntries.sort((a, b) =>
  a.topic.localeCompare(b.topic),
);
const indexSections = sortedIndexEntries.map((entry) =>
  formatIndexEntry(entry.topic, entry.headContent).trimEnd(),
);
const indexContent = indexSections.join("\n\n");
const indexOutput = indexContent
  ? `${INDEX_PREAMBLE}\n${indexContent}\n`
  : `${INDEX_PREAMBLE}\n`;
await Bun.write(INDEX_PATH, indexOutput);
const categoryOutput = buildCategoryIndexes(sortedIndexEntries);
await writeIndexPages({
  hubPath: CATEGORY_INDEX_PATH,
  hubContent: categoryOutput.hubContent,
  pages: categoryOutput.pages,
  pagePathForSlug: categoryIndexPath,
});
const scenarioOutput = buildScenarioIndexes(sortedIndexEntries);
await writeIndexPages({
  hubPath: SCENARIO_INDEX_PATH,
  hubContent: scenarioOutput.hubContent,
  pages: scenarioOutput.pages,
  pagePathForSlug: scenarioIndexPath,
});
const industryOutput = buildIndustryIndexes(sortedIndexEntries);
await writeIndexPages({
  hubPath: INDUSTRY_INDEX_PATH,
  hubContent: industryOutput.hubContent,
  pages: industryOutput.pages,
  pagePathForSlug: industryIndexPath,
});

const sitemapPaths = [
  "/",
  "/SKILL.md",
  "/data/index.md",
  "/category/index.md",
  "/scenario/index.md",
  "/industry/index.md",
  ...categoryOutput.pages.map((page) => `/category/${page.slug}/index.md`),
  ...scenarioOutput.pages.map((page) => `/scenario/${page.slug}/index.md`),
  ...industryOutput.pages.map((page) => `/industry/${page.slug}/index.md`),
  ...sortedIndexEntries.map((entry) => `/${entry.topic}/BODY.md`),
];
const sitemapXml = buildSitemapXml({ origin: SITE_ORIGIN, paths: sitemapPaths });
await Bun.write(SITEMAP_PATH, sitemapXml);
await Bun.write(LLMS_TXT_PATH, buildLlmsTxt(SITE_ORIGIN));
await Bun.write(ROBOTS_TXT_PATH, buildRobotsTxt(SITE_ORIGIN));
await writeSkillDoc();

if (rejected.length > 0) {
  console.warn(`Rejected: ${rejected.length}`);
  for (const entry of rejected) {
    console.warn(`- ${entry.reason}: ${entry.url}`);
  }
}

console.log(`Sources: ${result.sources.length} (accepted ${accepted.length})`);
