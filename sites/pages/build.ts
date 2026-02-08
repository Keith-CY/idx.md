import { createHash } from "crypto";
import { mkdir, rm } from "fs/promises";
import { dirname, isAbsolute, relative, resolve } from "path";
import { stringify } from "yaml";
import {
  buildCategoryIndexes,
  formatUnknownCategoryReason,
  parseCategoriesFromTags,
} from "./lib/categories";
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
} from "./lib/data-layout";
import { repoRoot } from "./lib/paths";

const result = await loadSources();

type Rejection = { url: string; reason: string };

const SUMMARY_MAX_LINES = 10;
const TEXT_DECODER = new TextDecoder("utf-8");
const SKILL_SOURCE_PATH = resolve(repoRoot, "SKILL.md");
const SKILL_TARGET_PATH = resolve(DATA_ROOT, "SKILL.md");

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
const indexEntries: Array<{
  topic: string;
  headContent: string;
  categories: string[];
  scenarios: string[];
  industries: string[];
}> = [];

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

    const parsedCategories = parseCategoriesFromTags(source.tags);
    if (parsedCategories.unknown.length > 0) {
      rejected.push({
        url: source.source_url,
        reason: formatUnknownCategoryReason(parsedCategories.unknown),
      });
    }

    const parsedScenarios = parseScenarioFromTags(source.tags);
    if (parsedScenarios.unknown.length > 0) {
      rejected.push({
        url: source.source_url,
        reason: `Unknown scenario tag(s): ${parsedScenarios.unknown
          .map((slug) => `scenario-${slug}`)
          .join(", ")}; mapped to scenario-uncategorized`,
      });
    }

    const parsedIndustries = parseIndustryFromTags(source.tags);
    if (parsedIndustries.unknown.length > 0) {
      rejected.push({
        url: source.source_url,
        reason: `Unknown industry tag(s): ${parsedIndustries.unknown
          .map((slug) => `industry-${slug}`)
          .join(", ")}; mapped to industry-uncategorized`,
      });
    }

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
      retrieved_at: retrievedAt,
      content_sha256: computeSha256(bytes),
    };
    const yaml = stringify(frontmatter).trimEnd();

    await mkdir(entryDirPath, { recursive: true });
    await Bun.write(bodyPath(topic), bytes);

    const headContent = `---\n${yaml}\n---\n`;
    await Bun.write(headPath(topic), headContent);
    indexEntries.push({
      topic,
      headContent,
      categories: parsedCategories.categories,
      scenarios: parsedScenarios.scenarios,
      industries: parsedIndustries.industries,
    });

    accepted.push({ source, retrievedAt });
  }
} finally {
  await writeRejectedReport();
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
await Bun.write(CATEGORY_INDEX_PATH, categoryOutput.hubContent);
await Promise.all(
  categoryOutput.pages.map(async (page) => {
    const outputPath = categoryIndexPath(page.slug);
    await mkdir(dirname(outputPath), { recursive: true });
    await Bun.write(outputPath, page.content);
  }),
);

const scenarioOutput = buildScenarioIndexes(sortedIndexEntries);
await Bun.write(SCENARIO_INDEX_PATH, scenarioOutput.hubContent);
await Promise.all(
  scenarioOutput.pages.map(async (page) => {
    const outputPath = scenarioIndexPath(page.slug);
    await mkdir(dirname(outputPath), { recursive: true });
    await Bun.write(outputPath, page.content);
  }),
);

const industryOutput = buildIndustryIndexes(sortedIndexEntries);
await Bun.write(INDUSTRY_INDEX_PATH, industryOutput.hubContent);
await Promise.all(
  industryOutput.pages.map(async (page) => {
    const outputPath = industryIndexPath(page.slug);
    await mkdir(dirname(outputPath), { recursive: true });
    await Bun.write(outputPath, page.content);
  }),
);

await writeSkillDoc();

if (rejected.length > 0) {
  console.warn(`Rejected: ${rejected.length}`);
  for (const entry of rejected) {
    console.warn(`- ${entry.reason}: ${entry.url}`);
  }
}

console.log(`Sources: ${result.sources.length} (accepted ${accepted.length})`);

