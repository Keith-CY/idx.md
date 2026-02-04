import { createHash } from "crypto";
import { mkdir } from "fs/promises";
import { stringify } from "yaml";
import { resolve } from "path";
import type { SourceEntry } from "./lib/registry";
import { normalizeGithubRawUrl } from "./lib/source-url";
import { DATA_ROOT } from "./lib/data-layout";
import { repoRoot } from "./lib/paths";
import {
  migrateRemovedSourcesFromFiles,
  readSourcesFileResult,
} from "./lib/source-migration";
import {
  type OpenClawCategory,
  parseOpenClawCategories,
} from "./lib/openclaw-parse";

const README_URL =
  "https://raw.githubusercontent.com/VoltAgent/awesome-openclaw-skills/refs/heads/main/README.md";
const README_BASE_URL =
  "https://github.com/VoltAgent/awesome-openclaw-skills/blob/main/README.md";
const SOURCES_DIR = resolve(repoRoot, "sources");
const OUTPUT_PATH = resolve(SOURCES_DIR, "openclaw.yml");
const GENERAL_PATH = resolve(SOURCES_DIR, "general.yml");
const REPORT_PATH = resolve(DATA_ROOT, "reports", "ingest-openclaw.md");
const REPORT_DIR = resolve(DATA_ROOT, "reports");
const SOURCE_TYPE = "skills";
const BASE_TAGS = ["openclaw", "source-awesome-openclaw-skills"] as const;
const HEADER = `# Schema: list of source entries\n# - type: string\n#   slug: string\n#   source_url: string\n#   title: string (optional)\n#   summary: string (optional)\n#   tags: [string] (optional)\n#   license: string (optional)\n#   upstream_ref: string (optional)\n`;

type ConvertedUrl = {
  rawUrl: string;
  owner: string;
  skillFolder: string;
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
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function shortHash(value: string): string {
  return createHash("sha256").update(value).digest("hex").slice(0, 8);
}


function convertToRawSkillUrl(value: string): ConvertedUrl | null {
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    try {
      url = new URL(value, README_BASE_URL);
    } catch {
      return null;
    }
  }

  const normalizedRaw = normalizeGithubRawUrl(url.toString());
  if (normalizedRaw) {
    url = new URL(normalizedRaw);
  }

  if (url.hostname === "raw.githubusercontent.com") {
    const parts = url.pathname.split("/").filter(Boolean);
    if (parts.length < 4) {
      return null;
    }
    const owner = parts[0] ?? "";
    const repo = parts[1] ?? "";
    const pathParts = parts.slice(3);
    const last = pathParts[pathParts.length - 1]?.toLowerCase();
    if (last !== "skill.md") {
      return null;
    }
    const skillFolder =
      decodeURIComponent(pathParts[pathParts.length - 2] ?? "") ||
      decodeURIComponent(repo);
    if (!owner || !skillFolder) {
      return null;
    }
    return { rawUrl: url.toString(), owner, skillFolder };
  }

  if (url.hostname !== "github.com" && url.hostname !== "www.github.com") {
    return null;
  }

  const parts = url.pathname.split("/").filter(Boolean);
  if (parts.length < 5) {
    return null;
  }

  const owner = parts[0] ?? "";
  const repo = parts[1] ?? "";
  const mode = parts[2] ?? "";
  const branch = parts[3] ?? "";
  const pathParts = parts.slice(4);

  if (!owner || !repo || !branch) {
    return null;
  }

  if (mode !== "tree" && mode !== "blob") {
    return null;
  }

  if (pathParts.length === 0 && mode === "blob") {
    return null;
  }

  if (pathParts[pathParts.length - 1]?.toLowerCase() !== "skill.md") {
    if (mode === "tree") {
      pathParts.push("SKILL.md");
    } else {
      return null;
    }
  }

  const skillFolder =
    decodeURIComponent(pathParts[pathParts.length - 2] ?? "") ||
    decodeURIComponent(repo);
  if (!skillFolder) {
    return null;
  }

  const rawUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${pathParts.join("/")}`;
  return { rawUrl, owner, skillFolder };
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

function buildEntry(
  title: string,
  description: string | undefined,
  rawUrl: string,
  slug: string,
  categorySlug: string,
): SourceEntry {
  const entry: SourceEntry = {
    type: SOURCE_TYPE,
    slug,
    source_url: rawUrl,
  };

  const trimmedTitle = title.trim();
  if (trimmedTitle) {
    entry.title = trimmedTitle;
  }

  const trimmedSummary = description?.trim();
  if (trimmedSummary) {
    entry.summary = trimmedSummary;
  }

  entry.tags = [...BASE_TAGS, `category-${categorySlug}`];

  return entry;
}

function formatReport(stats: {
  categories: number;
  itemsScanned: number;
  entriesWritten: number;
  duplicatesSkipped: number;
  itemsSkipped: number;
  slugCollisions: number;
}, migration: MigrationStats): string {
  const timestamp = new Date().toISOString();
  return [
    "# OpenClaw ingest report",
    "",
    `- Timestamp (UTC): ${timestamp}`,
    `- Categories: ${stats.categories}`,
    `- Items scanned: ${stats.itemsScanned}`,
    `- Entries written: ${stats.entriesWritten}`,
    `- Duplicates skipped: ${stats.duplicatesSkipped}`,
    `- Items skipped: ${stats.itemsSkipped}`,
    `- Slug collisions resolved: ${stats.slugCollisions}`,
    `- Migration removed: ${migration.removedTotal}`,
    `- Migration reachable: ${migration.reachable}`,
    `- Migration migrated: ${migration.migrated}`,
    `- Migration duplicates skipped: ${migration.duplicatesSkipped}`,
    `- Migration curl failed: ${migration.curlFailed}`,
    `- Migration slug collisions resolved: ${migration.slugCollisions}`,
    "",
  ].join("\n");
}

async function fetchReadme(): Promise<string | null> {
  let response: Response;
  try {
    response = await fetch(README_URL);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`Failed to fetch README: ${message}`);
    return null;
  }

  if (!response.ok) {
    console.error(
      `Failed to fetch README: ${response.status} ${response.statusText}`,
    );
    return null;
  }

  return response.text();
}

const previousResult = await readSourcesFileResult(OUTPUT_PATH);
if (!previousResult.ok && !previousResult.missing) {
  throw new Error(previousResult.errors.join("\n"));
}

const readme = await fetchReadme();
if (!readme) {
  process.exit(1);
}

const categories: OpenClawCategory[] = parseOpenClawCategories(readme);
const seenUrls = new Set<string>();
const usedSlugs = new Map<string, string>();
const entries: SourceEntry[] = [];
let totalItems = 0;
let skipped = 0;
let duplicates = 0;
let slugCollisions = 0;

for (const category of categories) {
  for (const item of category.items) {
    totalItems += 1;
    const converted = convertToRawSkillUrl(item.url);
    if (!converted) {
      skipped += 1;
      continue;
    }

    if (seenUrls.has(converted.rawUrl)) {
      duplicates += 1;
      continue;
    }

    seenUrls.add(converted.rawUrl);
    const ownerSlug = slugify(converted.owner);
    const folderSlug = slugify(converted.skillFolder);
    if (!ownerSlug || !folderSlug) {
      skipped += 1;
      continue;
    }

    const baseSlug = `openclaw-${ownerSlug}-${folderSlug}`;
    const unique = uniqueSlug(baseSlug, converted.rawUrl, usedSlugs);
    if (unique !== baseSlug) {
      slugCollisions += 1;
    }

    const entry = buildEntry(
      item.title,
      item.description,
      converted.rawUrl,
      unique,
      category.slug,
    );
    entries.push(entry);
  }
}

if (entries.length === 0) {
  console.error("No skills extracted; refusing to overwrite registry.");
  process.exit(1);
}

entries.sort((a, b) => {
  const slugSort = a.slug.localeCompare(b.slug);
  if (slugSort !== 0) {
    return slugSort;
  }
  return a.source_url.localeCompare(b.source_url);
});

const migration = await migrateRemovedSourcesFromFiles({
  previousPath: OUTPUT_PATH,
  nextEntries: entries,
  generalPath: GENERAL_PATH,
  sourcesDir: SOURCES_DIR,
});

const yamlBody = stringify(entries, { lineWidth: 0 }).trimEnd();
const output = `${HEADER}${yamlBody}\n`;
await Bun.write(OUTPUT_PATH, output);

await mkdir(REPORT_DIR, { recursive: true });
await Bun.write(
  REPORT_PATH,
  formatReport({
    categories: categories.length,
    itemsScanned: totalItems,
    entriesWritten: entries.length,
    duplicatesSkipped: duplicates,
    itemsSkipped: skipped,
    slugCollisions,
  }, migration.stats),
);

console.log(`OpenClaw categories: ${categories.length}`);
console.log(`OpenClaw items scanned: ${totalItems}`);
console.log(`OpenClaw entries written: ${entries.length}`);
console.log(`OpenClaw duplicates skipped: ${duplicates}`);
console.log(`OpenClaw items skipped: ${skipped}`);
console.log(`OpenClaw slug collisions resolved: ${slugCollisions}`);
