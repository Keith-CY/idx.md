import { createHash } from "crypto";
import { mkdir } from "fs/promises";
import { resolve } from "path";
import { stringify } from "yaml";
import type { SourceEntry } from "./lib/registry";
import { DATA_ROOT } from "./lib/data-layout";
import { repoRoot } from "./lib/paths";
import { validateSourceUrl } from "./lib/source-url";
import {
  migrateRemovedSourcesFromFiles,
  readSourcesFileResult,
  writeSourcesFile,
} from "./lib/source-migration";
import {
  buildProbeUrls,
  extractGithubRepo,
  extractMarkdownUrls,
  extractSkillLinksFromHtml,
  extractSkillLinksFromSitemap,
  parseSkillPath,
} from "./lib/skills-sh-parse";

const SKILLS_HOME = "https://skills.sh/";
const SKILLS_SITEMAP = "https://skills.sh/sitemap.xml";
const SOURCES_DIR = resolve(repoRoot, "sources");
const OUTPUT_PATH = resolve(SOURCES_DIR, "skills-sh.yml");
const GENERAL_PATH = resolve(SOURCES_DIR, "general.yml");
const REPORT_DIR = resolve(DATA_ROOT, "reports");
const REPORT_PATH = resolve(DATA_ROOT, "reports", "ingest-skills-sh.md");
const SOURCE_TYPE = "skills";
const BASE_TAGS = ["skills-sh", "skills-sh-all-time"] as const;
const PROBE_TAGS = ["skills-sh", "skills-sh-probed"] as const;
const HEADER = `# Schema: list of source entries\n# - type: string\n#   slug: string\n#   source_url: string\n#   title: string (optional)\n#   summary: string (optional)\n#   tags: [string] (optional)\n#   license: string (optional)\n#   upstream_ref: string (optional)\n`;
const MAX_LINKS = 1000;
const PROBE_BRANCHES = ["main", "master"] as const;
const PROBE_PATHS = [
  "SKILL.md",
  "skill.md",
  "docs/SKILL.md",
  "docs/skill.md",
] as const;

const TEXT_DECODER = new TextDecoder("utf-8");

type Rejection = { url: string; reason: string };

type ReportStats = {
  totalLinks: number;
  entriesWritten: number;
  directMarkdown: number;
  probedAdded: number;
  probeHits: number;
  probeMisses: number;
  duplicatesSkipped: number;
  invalidSkipped: number;
};

type MigrationStats = {
  removedTotal: number;
  reachable: number;
  migrated: number;
  duplicatesSkipped: number;
  slugCollisions: number;
  curlFailed: number;
};

function slugify(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, "-")
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function shortHash(value: string): string {
  return createHash("sha256").update(value).digest("hex").slice(0, 8);
}

function uniqueSlug(
  base: string,
  rawUrl: string,
  used: Map<string, string>,
): string {
  const existing = used.get(base);
  if (!existing) {
    used.set(base, rawUrl);
    return base;
  }
  if (existing === rawUrl) {
    return base;
  }
  const hash = shortHash(rawUrl);
  let candidate = `${base}-${hash}`;
  if (!used.has(candidate)) {
    used.set(candidate, rawUrl);
    return candidate;
  }
  let counter = 2;
  while (used.has(candidate)) {
    candidate = `${base}-${hash}-${counter}`;
    counter += 1;
  }
  used.set(candidate, rawUrl);
  return candidate;
}

function buildEntry(params: {
  slug: string;
  sourceUrl: string;
  upstreamRef: string;
  tags: readonly string[];
}): SourceEntry {
  return {
    type: SOURCE_TYPE,
    slug: params.slug,
    source_url: params.sourceUrl,
    tags: [...params.tags],
    upstream_ref: params.upstreamRef,
  };
}

function validateMarkdownUrl(url: string): boolean {
  const result = validateSourceUrl(url);
  return result.ok;
}

async function fetchText(url: string): Promise<string | null> {
  let response: Response;
  try {
    response = await fetch(url);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`Fetch failed (${url}): ${message}`);
    return null;
  }

  if (!response.ok) {
    console.error(
      `Fetch failed (${url}): ${response.status} ${response.statusText}`,
    );
    return null;
  }

  const buffer = await response.arrayBuffer();
  return TEXT_DECODER.decode(buffer);
}

async function fetchSkillLinks(): Promise<string[]> {
  const sitemap = await fetchText(SKILLS_SITEMAP);
  if (sitemap) {
    const links = extractSkillLinksFromSitemap(sitemap);
    if (links.length > 0) {
      return links;
    }
  }

  const homepage = await fetchText(SKILLS_HOME);
  if (!homepage) {
    return [];
  }

  return extractSkillLinksFromHtml(homepage);
}

async function probeUrl(url: string): Promise<boolean> {
  let response: Response;
  try {
    response = await fetch(url, { method: "HEAD" });
  } catch {
    return false;
  }

  if (response.ok) {
    return true;
  }

  if (response.status !== 405) {
    return false;
  }

  try {
    response = await fetch(url, { method: "GET" });
  } catch {
    return false;
  }

  return response.ok;
}

function formatReport(
  stats: ReportStats,
  migration: MigrationStats,
  rejections: Rejection[],
): string {
  const timestamp = new Date().toISOString();
  const lines: string[] = [
    "# Skills.sh ingest report",
    "",
    `- Timestamp (UTC): ${timestamp}`,
    `- Total links scanned: ${stats.totalLinks}`,
    `- Entries written: ${stats.entriesWritten}`,
    `- Direct markdown hits: ${stats.directMarkdown}`,
    `- Probe hits: ${stats.probeHits}`,
    `- Probe misses: ${stats.probeMisses}`,
    `- Probed entries added to general: ${stats.probedAdded}`,
    `- Duplicates skipped: ${stats.duplicatesSkipped}`,
    `- Invalid/filtered skipped: ${stats.invalidSkipped}`,
    `- Migration removed: ${migration.removedTotal}`,
    `- Migration reachable: ${migration.reachable}`,
    `- Migration migrated: ${migration.migrated}`,
    `- Migration duplicates skipped: ${migration.duplicatesSkipped}`,
    `- Migration curl failed: ${migration.curlFailed}`,
    `- Migration slug collisions resolved: ${migration.slugCollisions}`,
    "",
    "## Rejections",
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

const previousResult = await readSourcesFileResult(OUTPUT_PATH);
if (!previousResult.ok && !previousResult.missing) {
  throw new Error(previousResult.errors.join("\n"));
}

const initialGeneralResult = await readSourcesFileResult(GENERAL_PATH);
if (!initialGeneralResult.ok && !initialGeneralResult.missing) {
  throw new Error(initialGeneralResult.errors.join("\n"));
}

const links = await fetchSkillLinks();
const rankedLinks = links.slice(0, MAX_LINKS);
const usedSlugs = new Map<string, string>();
const seenIds = new Set<string>();
const seenUrls = new Set<string>();
const rejections: Rejection[] = [];

const initialGeneralEntries = initialGeneralResult.ok
  ? initialGeneralResult.sources
  : [];
for (const entry of initialGeneralEntries) {
  if (entry && entry.type && entry.slug) {
    seenIds.add(`${entry.type}/${entry.slug}`);
  }
  if (entry && entry.source_url) {
    seenUrls.add(entry.source_url);
  }
}

const skillsEntries: SourceEntry[] = [];
const probedEntries: SourceEntry[] = [];
const stats: ReportStats = {
  totalLinks: rankedLinks.length,
  entriesWritten: 0,
  directMarkdown: 0,
  probedAdded: 0,
  probeHits: 0,
  probeMisses: 0,
  duplicatesSkipped: 0,
  invalidSkipped: 0,
};

for (const skillUrl of rankedLinks) {
  const parsed = parseSkillPath(skillUrl);
  if (!parsed) {
    stats.invalidSkipped += 1;
    rejections.push({ url: skillUrl, reason: "Invalid skill URL" });
    continue;
  }

  const baseSlug = slugify(
    `skills-sh-${parsed.owner}-${parsed.repo}-${parsed.skill}`,
  );
  const upstreamRef = skillUrl;
  const skillPage = await fetchText(skillUrl);
  if (!skillPage) {
    stats.invalidSkipped += 1;
    rejections.push({ url: skillUrl, reason: "Failed to fetch skill page" });
    continue;
  }

  const markdownCandidates = extractMarkdownUrls(skillPage).filter(
    validateMarkdownUrl,
  );

  if (markdownCandidates.length > 0) {
    const sourceUrl = markdownCandidates[0];
    if (seenUrls.has(sourceUrl)) {
      stats.duplicatesSkipped += 1;
      continue;
    }
    const slug = uniqueSlug(baseSlug, sourceUrl, usedSlugs);
    const id = `${SOURCE_TYPE}/${slug}`;
    if (seenIds.has(id)) {
      stats.duplicatesSkipped += 1;
      continue;
    }
    seenIds.add(id);
    seenUrls.add(sourceUrl);
    skillsEntries.push(
      buildEntry({
        slug,
        sourceUrl,
        upstreamRef,
        tags: BASE_TAGS,
      }),
    );
    stats.directMarkdown += 1;
    continue;
  }

  const repo = extractGithubRepo(skillPage);
  if (!repo) {
    stats.probeMisses += 1;
    rejections.push({
      url: skillUrl,
      reason: "No markdown URL or GitHub repo found",
    });
    continue;
  }

  const probeUrls = buildProbeUrls(
    repo.owner,
    repo.repo,
    [...PROBE_BRANCHES],
    [...PROBE_PATHS],
  );

  let probedUrl: string | null = null;
  for (const url of probeUrls) {
    if (!validateMarkdownUrl(url)) {
      continue;
    }
    const ok = await probeUrl(url);
    if (ok) {
      probedUrl = url;
      break;
    }
  }

  if (!probedUrl) {
    stats.probeMisses += 1;
    rejections.push({ url: skillUrl, reason: "Probe failed" });
    continue;
  }

  stats.probeHits += 1;
  if (seenUrls.has(probedUrl)) {
    stats.duplicatesSkipped += 1;
    continue;
  }

  const slug = uniqueSlug(baseSlug, probedUrl, usedSlugs);
  const id = `${SOURCE_TYPE}/${slug}`;
  if (seenIds.has(id)) {
    stats.duplicatesSkipped += 1;
    continue;
  }
  seenIds.add(id);
  seenUrls.add(probedUrl);

  probedEntries.push(
    buildEntry({
      slug,
      sourceUrl: probedUrl,
      upstreamRef,
      tags: PROBE_TAGS,
    }),
  );
}

const migration = await migrateRemovedSourcesFromFiles({
  previousPath: OUTPUT_PATH,
  nextEntries: skillsEntries,
  generalPath: GENERAL_PATH,
  sourcesDir: SOURCES_DIR,
});

const skillsYaml = stringify(skillsEntries).trimEnd();
await Bun.write(OUTPUT_PATH, `${HEADER}${skillsYaml}\n`);

if (probedEntries.length > 0) {
  const updatedGeneralResult = await readSourcesFileResult(GENERAL_PATH);
  if (!updatedGeneralResult.ok && !updatedGeneralResult.missing) {
    throw new Error(updatedGeneralResult.errors.join("\n"));
  }

  const updatedGeneralEntries = updatedGeneralResult.ok
    ? updatedGeneralResult.sources
    : [];
  const updatedHeader = updatedGeneralResult.header ?? HEADER;
  const updatedSeenIds = new Set<string>();
  const updatedSeenUrls = new Set<string>();
  const updatedSlugs = new Map<string, string>();

  for (const entry of updatedGeneralEntries) {
    if (entry && entry.type && entry.slug) {
      updatedSeenIds.add(`${entry.type}/${entry.slug}`);
      updatedSlugs.set(entry.slug, entry.source_url);
    }
    if (entry && entry.source_url) {
      updatedSeenUrls.add(entry.source_url);
    }
  }

  const reconciledProbed: SourceEntry[] = [];
  for (const entry of probedEntries) {
    if (updatedSeenUrls.has(entry.source_url)) {
      stats.duplicatesSkipped += 1;
      continue;
    }

    let nextSlug = entry.slug;
    const id = `${entry.type}/${nextSlug}`;
    if (updatedSeenIds.has(id)) {
      nextSlug = uniqueSlug(nextSlug, entry.source_url, updatedSlugs);
    } else if (!updatedSlugs.has(nextSlug)) {
      updatedSlugs.set(nextSlug, entry.source_url);
    }

    const resolvedId = `${entry.type}/${nextSlug}`;
    if (updatedSeenIds.has(resolvedId)) {
      const fallback = uniqueSlug(nextSlug, entry.source_url, updatedSlugs);
      if (fallback !== nextSlug) {
        nextSlug = fallback;
      }
    }

    updatedSeenIds.add(`${entry.type}/${nextSlug}`);
    updatedSeenUrls.add(entry.source_url);
    updatedSlugs.set(nextSlug, entry.source_url);

    if (nextSlug === entry.slug) {
      reconciledProbed.push(entry);
    } else {
      reconciledProbed.push({ ...entry, slug: nextSlug });
    }
  }

  if (reconciledProbed.length > 0) {
    const nextGeneral = [...updatedGeneralEntries, ...reconciledProbed];
    await writeSourcesFile(GENERAL_PATH, nextGeneral, updatedHeader);
    stats.probedAdded = reconciledProbed.length;
  }
}

stats.entriesWritten = skillsEntries.length;

await mkdir(REPORT_DIR, { recursive: true });
await Bun.write(REPORT_PATH, formatReport(stats, migration.stats, rejections));

console.log(`Skills.sh links scanned: ${stats.totalLinks}`);
console.log(`Skills.sh entries written: ${stats.entriesWritten}`);
console.log(`Skills.sh probed entries added: ${stats.probedAdded}`);
