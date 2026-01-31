import { createHash } from "crypto";
import { mkdir, readdir, rm, stat } from "fs/promises";
import { isAbsolute, join, relative, resolve } from "path";
import { stringify } from "yaml";
import { fileURLToPath } from "url";
import { detectMdx } from "./lib/mdx";
import {
  loadSources,
  SOURCES_REGISTRY_PATHS,
  type SourceEntry,
} from "./lib/registry";

const result = await loadSources(SOURCES_REGISTRY_PATHS);

type Rejection = { url: string; reason: string };

const SUMMARY_MAX_LINES = 10;
const TEXT_DECODER = new TextDecoder("utf-8");

const REPORT_PATH = new URL("../reports/rejected.md", import.meta.url);
const ENTRIES_ROOT = new URL("../entries/", import.meta.url);
const ENTRIES_ROOT_PATH = resolve(fileURLToPath(ENTRIES_ROOT));
const CATALOG_PATH = new URL("../catalog.md", import.meta.url);
const TYPES_ROOT = new URL("../types/", import.meta.url);
const TYPES_ROOT_PATH = resolve(fileURLToPath(TYPES_ROOT));
const RECENT_PATH = new URL("../recent.md", import.meta.url);
const RECENT_PATH_VALUE = resolve(fileURLToPath(RECENT_PATH));
const TAGS_ROOT = new URL("../tags/", import.meta.url);
const TAGS_ROOT_PATH = resolve(fileURLToPath(TAGS_ROOT));
const BASE_URL = "https://idx.md";

function urlIsMdx(sourceUrl: URL): boolean {
  return sourceUrl.pathname.toLowerCase().endsWith(".mdx");
}

function resolveEntryDir(type: string, slug: string): string {
  const entryPath = resolve(ENTRIES_ROOT_PATH, type, slug);
  const rel = relative(ENTRIES_ROOT_PATH, entryPath);
  if (rel.startsWith("..") || isAbsolute(rel)) {
    throw new Error(`Unsafe entry path: ${type}/${slug}`);
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

function buildUrl(pathname: string): string {
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return new URL(normalized, BASE_URL).toString();
}

function typeIndexUrl(type: string): string {
  return buildUrl(`/types/${type}.md`);
}

function entryHeadUrl(type: string, slug: string): string {
  return buildUrl(`/entries/${type}/${slug}/HEAD.md`);
}

async function fileExists(path: string): Promise<boolean> {
  try {
    const stats = await stat(path);
    return stats.isFile();
  } catch {
    return false;
  }
}

async function dirExists(path: string): Promise<boolean> {
  try {
    const stats = await stat(path);
    return stats.isDirectory();
  } catch {
    return false;
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

type NormalizedTag = {
  slug: string;
  label: string;
};

function normalizeTag(tag: string): NormalizedTag | null {
  const trimmed = tag.trim();
  if (!trimmed) {
    console.warn("Skipping empty tag");
    return null;
  }

  const slug = trimmed
    .toLowerCase()
    .replace(/[\s_]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");

  if (!slug) {
    console.warn(`Skipping tag that normalizes to empty: "${trimmed}"`);
    return null;
  }

  return { slug, label: trimmed };
}

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

  if (urlIsMdx(url)) {
    rejections.push({
      url: source.source_url,
      reason: "URL ends with .mdx",
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
  const mdxReason = detectMdx(markdown);

  if (mdxReason) {
    rejections.push({ url: source.source_url, reason: mdxReason });
    return null;
  }

  return { markdown, bytes, retrievedAt: new Date().toISOString() };
}

const accepted: AcceptedEntry[] = [];
const rejected: Rejection[] = [];

const writeRejectedReport = async () => {
  try {
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

await rm(RECENT_PATH_VALUE, { force: true });
await rm(TAGS_ROOT_PATH, { recursive: true, force: true });

const registryTypes = new Set<string>();
for (const source of result.sources) {
  registryTypes.add(source.type);
}

try {
  for (const source of result.sources) {
    const fetched = await fetchMarkdown(source, rejected);
    if (fetched === null) {
      continue;
    }
    const { markdown, bytes, retrievedAt } = fetched;
    const entryDirPath = resolveEntryDir(source.type, source.slug);
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
    await Bun.write(join(entryDirPath, "BODY.md"), bytes);

    const headParts = ["---", yaml, "---"];
    if (summaryText) {
      headParts.push(summaryText);
    }
    const headContent = `${headParts.join("\n")}\n`;
    await Bun.write(join(entryDirPath, "HEAD.md"), headContent);

    accepted.push({ source, retrievedAt });
  }
} finally {
  await writeRejectedReport();
}

const typeToSlugs = new Map<string, Set<string>>();
for (const entry of accepted) {
  const source = entry.source;
  const existing = typeToSlugs.get(source.type);
  if (existing) {
    existing.add(source.slug);
  } else {
    typeToSlugs.set(source.type, new Set([source.slug]));
  }
}

const sortedTypes = Array.from(registryTypes).sort((a, b) =>
  a.localeCompare(b),
);

await rm(TYPES_ROOT_PATH, { recursive: true, force: true });
await mkdir(TYPES_ROOT_PATH, { recursive: true });
for (const type of sortedTypes) {
  const slugs = Array.from(typeToSlugs.get(type) ?? []).sort((a, b) =>
    a.localeCompare(b),
  );
  const lines = [`# ${type}`, ""];
  for (const slug of slugs) {
    lines.push(`- ${entryHeadUrl(type, slug)}`);
  }
  lines.push("");
  await Bun.write(join(TYPES_ROOT_PATH, `${type}.md`), lines.join("\n"));
}

const recentEntries = [...accepted].sort((a, b) => {
  const timeSort = b.retrievedAt.localeCompare(a.retrievedAt);
  if (timeSort !== 0) {
    return timeSort;
  }
  const typeSort = a.source.type.localeCompare(b.source.type);
  if (typeSort !== 0) {
    return typeSort;
  }
  return a.source.slug.localeCompare(b.source.slug);
});

if (recentEntries.length > 0) {
  const recentLines = ["# Recent", ""];
  for (const entry of recentEntries) {
    recentLines.push(
      `- ${entryHeadUrl(entry.source.type, entry.source.slug)}`,
    );
  }
  recentLines.push("");
  await Bun.write(RECENT_PATH, recentLines.join("\n"));
}

const tagIndex = new Map<string, { label: string; keys: Set<string> }>();
for (const entry of accepted) {
  const source = entry.source;
  for (const rawTag of source.tags ?? []) {
    const normalized = normalizeTag(rawTag);
    if (!normalized) {
      continue;
    }
    const key = `${source.type}/${source.slug}`;
    const existing = tagIndex.get(normalized.slug);
    if (existing) {
      if (existing.label !== normalized.label) {
        console.warn(
          `Tag slug collision "${normalized.slug}": "${normalized.label}" conflicts with "${existing.label}"`,
        );
      }
      existing.keys.add(key);
    } else {
      tagIndex.set(normalized.slug, {
        label: normalized.label,
        keys: new Set([key]),
      });
    }
  }
}

await mkdir(TAGS_ROOT_PATH, { recursive: true });
const sortedTags = Array.from(tagIndex.keys()).sort((a, b) =>
  a.localeCompare(b),
);
for (const tag of sortedTags) {
  const entry = tagIndex.get(tag);
  const label = entry?.label ?? tag;
  const keys = Array.from(entry?.keys ?? []).sort((a, b) =>
    a.localeCompare(b),
  );
  const tagLines = [`# Tag: ${label}`, ""];
  for (const key of keys) {
    const [type, slug] = key.split("/");
    tagLines.push(`- ${entryHeadUrl(type, slug)}`);
  }
  tagLines.push("");
  await Bun.write(join(TAGS_ROOT_PATH, `${tag}.md`), tagLines.join("\n"));
}

const catalogLines: string[] = ["# Catalog", "", "## Types", ""];
for (const type of sortedTypes) {
  catalogLines.push(`- ${typeIndexUrl(type)}`);
}
catalogLines.push("");

const wroteRecent = await fileExists(RECENT_PATH_VALUE);
if (wroteRecent) {
  catalogLines.push("## Recent", "", `- ${buildUrl("/recent.md")}`, "");
}

const wroteTags = await dirExists(TAGS_ROOT_PATH);
if (wroteTags) {
  const files = await readdir(TAGS_ROOT_PATH);
  const tags = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -3))
    .sort((a, b) => a.localeCompare(b));

  if (tags.length > 0) {
    catalogLines.push("## Tags", "");
    for (const tag of tags) {
      catalogLines.push(
        `- ${buildUrl(`/tags/${encodeURIComponent(tag)}.md`)}`,
      );
    }
    catalogLines.push("");
  }
}

await Bun.write(CATALOG_PATH, catalogLines.join("\n"));

if (rejected.length > 0) {
  console.warn(`Rejected: ${rejected.length}`);
  for (const entry of rejected) {
    console.warn(`- ${entry.reason}: ${entry.url}`);
  }
}

console.log(`Sources: ${result.sources.length} (accepted ${accepted.length})`);
