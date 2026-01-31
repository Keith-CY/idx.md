import { loadSources, type SourceEntry } from "./lib/registry";

const result = await loadSources();

type Rejection = { url: string; reason: string };

const IMPORT_FROM = /^\s*import\s+.+\s+from\s+["'][^"']+["']\s*;?\s*$/m;
const EXPORT_DECL = /^\s*export\s+(const|function|class|default|\{)/m;
const JSX_TAG = /<\/?[A-Z][^>]*>/;
const JSX_FRAGMENT = /<\s*>|<\s*\/\s*>/;
const FENCE_LINE = /^\s*(?:>\s*)*(?:(?:[-*+]|\d+\.)\s+)?(```|~~~)/;

const REPORT_PATH = new URL("../reports/rejected.md", import.meta.url);

function stripInlineCode(line: string): string {
  let output = "";
  let fenceLength = 0;

  for (let index = 0; index < line.length; ) {
    if (line[index] === "`") {
      let count = 1;
      while (index + count < line.length && line[index + count] === "`") {
        count += 1;
      }
      if (fenceLength === 0) {
        fenceLength = count;
      } else if (fenceLength === count) {
        fenceLength = 0;
      }
      index += count;
      continue;
    }

    if (fenceLength === 0) {
      output += line[index];
    }
    index += 1;
  }

  return output;
}

function buildScanTarget(markdown: string): string {
  const lines = markdown.split(/\r?\n/);
  const kept: string[] = [];
  let inFence = false;

  for (const line of lines) {
    if (FENCE_LINE.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) {
      continue;
    }
    if (/^(?:\t| {4,})/.test(line)) {
      continue;
    }

    kept.push(stripInlineCode(line));
  }

  return kept.join("\n");
}

function hasExpressionBlock(scanTarget: string): boolean {
  return /(^|\s)\{[\s\S]*?\}/m.test(scanTarget);
}

function detectMdx(markdown: string): string | null {
  const scanTarget = buildScanTarget(markdown);

  if (IMPORT_FROM.test(scanTarget)) {
    return "Top-level import detected";
  }
  if (EXPORT_DECL.test(scanTarget)) {
    return "Top-level export detected";
  }
  if (JSX_FRAGMENT.test(scanTarget)) {
    return "JSX fragment detected";
  }
  if (JSX_TAG.test(scanTarget)) {
    return "JSX tag detected";
  }
  if (hasExpressionBlock(scanTarget)) {
    return "MDX expression block detected";
  }
  return null;
}

function urlIsMdx(sourceUrl: URL): boolean {
  return sourceUrl.pathname.toLowerCase().endsWith(".mdx");
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

async function fetchMarkdown(
  source: SourceEntry,
  rejections: Rejection[],
): Promise<string | null> {
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

  let markdown: string;
  try {
    markdown = await response.text();
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    rejections.push({
      url: source.source_url,
      reason: `Read failed (${message})`,
    });
    return null;
  }
  const mdxReason = detectMdx(markdown);

  if (mdxReason) {
    rejections.push({ url: source.source_url, reason: mdxReason });
    return null;
  }

  return markdown;
}

const accepted: SourceEntry[] = [];
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

try {
  for (const source of result.sources) {
    const markdown = await fetchMarkdown(source, rejected);
    if (markdown === null) {
      continue;
    }
    accepted.push(source);
  }
} finally {
  await writeRejectedReport();
}

if (rejected.length > 0) {
  console.warn(`Rejected: ${rejected.length}`);
  for (const entry of rejected) {
    console.warn(`- ${entry.reason}: ${entry.url}`);
  }
}

console.log(`Sources: ${result.sources.length} (accepted ${accepted.length})`);
