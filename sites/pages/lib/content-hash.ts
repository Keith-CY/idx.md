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

function extractContentHash(text: string): string | null {
  const frontmatter = extractFrontmatter(text);
  if (!frontmatter) {
    return null;
  }
  const data = parse(frontmatter) as { content_sha256?: string } | null;
  const value = data?.content_sha256;
  return typeof value === "string" && value.length > 0 ? value : null;
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
