import { createHash } from "crypto";
import { parse } from "yaml";
import { resolve } from "path";

function extractFrontmatter(text: string): string | null {
  if (!text.startsWith("---")) {
    return null;
  }
  const match = /^---\s*\n([\s\S]*?)\n---\s*\n?/.exec(text);
  if (!match) {
    return null;
  }
  return match[1] ?? null;
}

function stableStringify(value: unknown): string {
  if (Array.isArray(value)) {
    return `[${value.map((entry) => stableStringify(entry)).join(",")}]`;
  }
  if (typeof value === "object" && value !== null) {
    const entries = Object.entries(value as Record<string, unknown>).sort(
      ([left], [right]) => left.localeCompare(right),
    );
    const body = entries
      .map(([key, entry]) => `${JSON.stringify(key)}:${stableStringify(entry)}`)
      .join(",");
    return `{${body}}`;
  }
  return JSON.stringify(value);
}

function computeSha256Hex(text: string): string {
  return createHash("sha256").update(text).digest("hex");
}

function extractContentHash(text: string): string | null {
  const frontmatter = extractFrontmatter(text);
  if (!frontmatter) {
    return null;
  }
  const data = parse(frontmatter) as Record<string, unknown> | null;
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return null;
  }

  // Ignore the volatile timestamp so sync logic only triggers on meaningful changes.
  delete data.retrieved_at;
  const comparable = stableStringify(data);
  return computeSha256Hex(comparable);
}

export async function loadContentHashes(rootDir: string): Promise<Map<string, string | null>> {
  const map = new Map<string, string | null>();
  const glob = new Bun.Glob("**/HEAD.md");
  for await (const relativePath of glob.scan({ cwd: rootDir, onlyFiles: true })) {
    const absolutePath = resolve(rootDir, relativePath);
    const text = await Bun.file(absolutePath).text();
    const hash = extractContentHash(text);
    const topic = relativePath.replace(/\\/g, "/").replace(/\/HEAD\.md$/, "");
    map.set(topic, hash);
  }
  return map;
}

export type ContentHashDiff = {
  changed: boolean;
  added: string[];
  removed: string[];
  modified: string[];
};

export function compareContentHashes(
  prev: Map<string, string | null>,
  next: Map<string, string | null>,
): ContentHashDiff {
  const added: string[] = [];
  const removed: string[] = [];
  const modified: string[] = [];

  for (const [topic, prevHash] of prev.entries()) {
    if (!next.has(topic)) {
      removed.push(topic);
      continue;
    }
    const nextHash = next.get(topic);
    if (!prevHash || !nextHash || prevHash !== nextHash) {
      modified.push(topic);
    }
  }

  for (const topic of next.keys()) {
    if (!prev.has(topic)) {
      added.push(topic);
    }
  }

  const changed = added.length > 0 || removed.length > 0 || modified.length > 0;
  return { changed, added, removed, modified };
}
