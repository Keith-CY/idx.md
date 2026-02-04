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
} from "./lib/source-migration";
import {
  buildRawUrl,
  buildSlug,
  buildSlugParts,
  filterSkillPaths,
} from "./lib/obra-parse";

const SOURCES_DIR = resolve(repoRoot, "sources");
const OUTPUT_PATH = resolve(SOURCES_DIR, "obra.yml");
const GENERAL_PATH = resolve(SOURCES_DIR, "general.yml");
const REPORT_DIR = resolve(DATA_ROOT, "reports");
const REPORT_PATH = resolve(DATA_ROOT, "reports", "ingest-obra.md");
const SOURCE_TYPE = "skills";
const BASE_TAGS = ["obra", "source-obra-superpowers"] as const;
const HEADER = `# Schema: list of source entries\n# - type: string\n#   slug: string\n#   source_url: string\n#   title: string (optional)\n#   summary: string (optional)\n#   tags: [string] (optional)\n#   license: string (optional)\n#   upstream_ref: string (optional)\n`;

const REPO_API = "https://api.github.com/repos/obra/superpowers";
const TREE_API = "https://api.github.com/repos/obra/superpowers/git/trees";
const REPO_HTML = "https://github.com/obra/superpowers";

const TEXT_DECODER = new TextDecoder("utf-8");

type TreeEntry = { path: string; type: string };

type ReportStats = {
  totalPaths: number;
  entriesWritten: number;
  duplicatesSkipped: number;
  invalidSkipped: number;
  slugCollisions: number;
};

type MigrationStats = {
  removedTotal: number;
  reachable: number;
  migrated: number;
  duplicatesSkipped: number;
  slugCollisions: number;
  curlFailed: number;
};

type Rejection = { path: string; reason: string };

function shortHash(value: string): string {
  return createHash("sha256").update(value).digest("hex").slice(0, 8);
}

function uniqueSlug(
  base: string,
  rawUrl: string,
  used: Map<string, string>,
): { slug: string; collision: boolean } {
  const existing = used.get(base);
  if (!existing) {
    used.set(base, rawUrl);
    return { slug: base, collision: false };
  }
  if (existing === rawUrl) {
    return { slug: base, collision: false };
  }
  const hash = shortHash(rawUrl);
  let candidate = `${base}-${hash}`;
  if (!used.has(candidate)) {
    used.set(candidate, rawUrl);
    return { slug: candidate, collision: true };
  }
  let counter = 2;
  while (used.has(candidate)) {
    candidate = `${base}-${hash}-${counter}`;
    counter += 1;
  }
  used.set(candidate, rawUrl);
  return { slug: candidate, collision: true };
}

async function fetchJson(url: string): Promise<unknown | null> {
  let response: Response;
  try {
    response = await fetch(url, {
      headers: {
        Accept: "application/vnd.github+json",
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`Failed to fetch ${url}: ${message}`);
    return null;
  }

  if (!response.ok) {
    console.error(`Failed to fetch ${url}: ${response.status}`);
    return null;
  }

  const buffer = await response.arrayBuffer();
  const text = TEXT_DECODER.decode(buffer);
  try {
    return JSON.parse(text);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`Failed to parse JSON from ${url}: ${message}`);
    return null;
  }
}

function formatReport(
  stats: ReportStats,
  migration: MigrationStats,
  rejections: Rejection[],
): string {
  const timestamp = new Date().toISOString();
  const lines: string[] = [
    "# Obra ingest report",
    "",
    `- Timestamp (UTC): ${timestamp}`,
    `- Paths scanned: ${stats.totalPaths}`,
    `- Entries written: ${stats.entriesWritten}`,
    `- Duplicates skipped: ${stats.duplicatesSkipped}`,
    `- Invalid skipped: ${stats.invalidSkipped}`,
    `- Slug collisions resolved: ${stats.slugCollisions}`,
    `- Migration removed: ${migration.removedTotal}`,
    `- Migration reachable: ${migration.reachable}`,
    `- Migration migrated: ${migration.migrated}`,
    `- Migration duplicates skipped: ${migration.duplicatesSkipped}`,
    `- Migration curl failed: ${migration.curlFailed}`,
    `- Migration slug collisions resolved: ${migration.slugCollisions}`,
    "",
    "## Rejections",
    "",
    "| Reason | Path |",
    "| --- | --- |",
  ];

  if (rejections.length === 0) {
    lines.push("| None | |");
    lines.push("");
    return lines.join("\n");
  }

  for (const rejection of rejections) {
    const reason = rejection.reason.replaceAll("|", "\\|");
    const path = rejection.path.replaceAll("|", "\\|");
    lines.push(`| ${reason} | ${path} |`);
  }
  lines.push("");
  return lines.join("\n");
}

const previousResult = await readSourcesFileResult(OUTPUT_PATH);
if (!previousResult.ok && !previousResult.missing) {
  throw new Error(previousResult.errors.join("\n"));
}

const repoJson = await fetchJson(REPO_API);
if (!repoJson || typeof repoJson !== "object") {
  process.exit(1);
}

const defaultBranch = (repoJson as { default_branch?: string }).default_branch;
if (!defaultBranch) {
  console.error("Missing default branch from GitHub API");
  process.exit(1);
}

const treeJson = await fetchJson(`${TREE_API}/${defaultBranch}?recursive=1`);
if (!treeJson || typeof treeJson !== "object") {
  process.exit(1);
}

const tree = (treeJson as { tree?: TreeEntry[] }).tree ?? [];
const paths = filterSkillPaths(tree);

const stats: ReportStats = {
  totalPaths: paths.length,
  entriesWritten: 0,
  duplicatesSkipped: 0,
  invalidSkipped: 0,
  slugCollisions: 0,
};

const usedSlugs = new Map<string, string>();
const seenUrls = new Set<string>();
const entries: SourceEntry[] = [];
const rejections: Rejection[] = [];

for (const path of paths) {
  const slugParts = buildSlugParts(path);
  if (!slugParts) {
    stats.invalidSkipped += 1;
    rejections.push({ path, reason: "Invalid skill path" });
    continue;
  }

  const rawUrl = buildRawUrl(defaultBranch, path);
  const validation = validateSourceUrl(rawUrl);
  if (!validation.ok) {
    stats.invalidSkipped += 1;
    rejections.push({ path, reason: validation.reason });
    continue;
  }

  if (seenUrls.has(rawUrl)) {
    stats.duplicatesSkipped += 1;
    continue;
  }

  const baseSlug = buildSlug(slugParts);
  const { slug, collision } = uniqueSlug(baseSlug, rawUrl, usedSlugs);
  if (collision) {
    stats.slugCollisions += 1;
  }

  seenUrls.add(rawUrl);
  entries.push({
    type: SOURCE_TYPE,
    slug,
    source_url: rawUrl,
    tags: [...BASE_TAGS],
    upstream_ref: `${REPO_HTML}/blob/${defaultBranch}/${path}`,
  });
}

const migration = await migrateRemovedSourcesFromFiles({
  previousPath: OUTPUT_PATH,
  nextEntries: entries,
  generalPath: GENERAL_PATH,
  sourcesDir: SOURCES_DIR,
});

const yaml = stringify(entries).trimEnd();
await Bun.write(OUTPUT_PATH, `${HEADER}${yaml}\n`);

await mkdir(REPORT_DIR, { recursive: true });
await Bun.write(REPORT_PATH, formatReport(stats, migration.stats, rejections));

console.log(`Obra paths scanned: ${stats.totalPaths}`);
console.log(`Obra entries written: ${entries.length}`);
