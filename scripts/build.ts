import { loadSources, type SourceEntry } from "./lib/registry";

const result = await loadSources();

if (!result.ok) {
  console.error("Source registry validation errors:");
  for (const error of result.errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

type Rejection = { url: string; reason: string };

const TOP_LEVEL_MODULE = /^\s*(import|export)\s/m;
const JSX_TAG = /<\/?[A-Z][^>]*>/;

const REPORT_PATH = new URL("../reports/rejected.md", import.meta.url);

function stripFencedCodeBlocks(markdown: string): string {
  const lines = markdown.split(/\r?\n/);
  const kept: string[] = [];
  let inFence = false;

  for (const line of lines) {
    if (/^\s*```/.test(line) || /^\s*~~~/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (!inFence) {
      kept.push(line);
    }
  }

  return kept.join("\n");
}

function detectMdx(markdown: string): string | null {
  const scanTarget = stripFencedCodeBlocks(markdown);

  if (TOP_LEVEL_MODULE.test(scanTarget)) {
    return "Top-level import/export detected";
  }
  if (JSX_TAG.test(scanTarget)) {
    return "JSX tag detected";
  }
  return null;
}

function urlIsMdx(sourceUrl: URL): boolean {
  return sourceUrl.pathname.toLowerCase().endsWith(".mdx");
}

function formatRejectedReport(rejections: Rejection[]): string {
  const lines: string[] = ["# Rejected sources", ""];

  if (rejections.length === 0) {
    lines.push("- None.");
    lines.push("");
    return lines.join("\n");
  }

  for (const rejection of rejections) {
    lines.push(`- ${rejection.reason} (${rejection.url})`);
  }
  lines.push("");
  return lines.join("\n");
}

async function fetchMarkdown(
  source: SourceEntry,
  rejections: Rejection[],
): Promise<string | null> {
  const url = new URL(source.source_url);

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

  const markdown = await response.text();
  const mdxReason = detectMdx(markdown);

  if (mdxReason) {
    rejections.push({ url: source.source_url, reason: mdxReason });
    return null;
  }

  return markdown;
}

const accepted: SourceEntry[] = [];
const rejected: Rejection[] = [];

for (const source of result.sources) {
  const markdown = await fetchMarkdown(source, rejected);
  if (markdown === null) {
    continue;
  }
  accepted.push(source);
}

await Bun.write(REPORT_PATH, formatRejectedReport(rejected));

if (rejected.length > 0) {
  console.warn(`Rejected: ${rejected.length}`);
  for (const entry of rejected) {
    console.warn(`- ${entry.reason}: ${entry.url}`);
  }
}

console.log(`Sources: ${result.sources.length} (accepted ${accepted.length})`);
