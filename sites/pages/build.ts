import { createHash } from "crypto";
import { mkdir, rm } from "fs/promises";
import { isAbsolute, relative, resolve } from "path";
import { stringify } from "yaml";
import { loadSources, type SourceEntry } from "./lib/registry";
import {
  DATA_ROOT,
  INDEX_PATH,
  bodyPath,
  formatIndexEntry,
  headPath,
  topicDir,
} from "./lib/data-layout";
import { repoRoot } from "./lib/paths";

const result = await loadSources();

type Rejection = { url: string; reason: string };

const SUMMARY_MAX_LINES = 10;
const TEXT_DECODER = new TextDecoder("utf-8");
const IDX_SOURCE_PATH = resolve(repoRoot, "sites", "pages", "IDX.md");
const IDX_TARGET_PATH = resolve(DATA_ROOT, "IDX.md");

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

async function writeIdxDoc(): Promise<void> {
  try {
    const content = await Bun.file(IDX_SOURCE_PATH).text();
    const normalized = content.endsWith("\n") ? content : `${content}\n`;
    await Bun.write(IDX_TARGET_PATH, normalized);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`Failed to write IDX.md (${message})`);
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
const indexEntries: Array<{ topic: string; headContent: string }> = [];

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
      retrieved_at: retrievedAt,
      content_sha256: computeSha256(bytes),
    };
    const yaml = stringify(frontmatter).trimEnd();

    await mkdir(entryDirPath, { recursive: true });
    await Bun.write(bodyPath(topic), bytes);

    const headContent = `---\n${yaml}\n---\n`;
    await Bun.write(headPath(topic), headContent);
    indexEntries.push({ topic, headContent });

    accepted.push({ source, retrievedAt });
  }
} finally {
  await writeRejectedReport();
}

const sortedIndexEntries = indexEntries.sort((a, b) =>
  a.topic.localeCompare(b.topic),
);
const indexSections = sortedIndexEntries.map((entry) =>
  formatIndexEntry(entry.topic, entry.headContent).trimEnd(),
);
const indexContent = indexSections.join("\n\n");
await Bun.write(INDEX_PATH, indexContent ? `${indexContent}\n` : "");
await writeIdxDoc();

if (rejected.length > 0) {
  console.warn(`Rejected: ${rejected.length}`);
  for (const entry of rejected) {
    console.warn(`- ${entry.reason}: ${entry.url}`);
  }
}

console.log(`Sources: ${result.sources.length} (accepted ${accepted.length})`);
