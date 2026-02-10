import { describe, expect, test } from "bun:test";
import { mkdir, mkdtemp } from "fs/promises";
import { join } from "path";
import { tmpdir } from "os";
import { compareContentHashes, loadContentHashes } from "../lib/content-hash";

async function writeHead(
  root: string,
  topic: string,
  frontmatter: Record<string, string>,
): Promise<void> {
  const dir = join(root, topic);
  await mkdir(dir, { recursive: true });
  const yaml = Object.entries(frontmatter)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");
  const content = `---\n${yaml}\n---\n`;
  await Bun.write(join(dir, "HEAD.md"), content);
}

describe("content hash compare", () => {
  test("reports no changes when hashes match", async () => {
    const prev = await mkdtemp(join(tmpdir(), "idx-prev-"));
    const next = await mkdtemp(join(tmpdir(), "idx-next-"));

    await writeHead(prev, "alpha", { content_sha256: "aaa" });
    await writeHead(next, "alpha", { content_sha256: "aaa" });

    const prevMap = await loadContentHashes(prev);
    const nextMap = await loadContentHashes(next);
    const diff = compareContentHashes(prevMap, nextMap);

    expect(diff.changed).toBe(false);
    expect(diff.added.length).toBe(0);
    expect(diff.removed.length).toBe(0);
    expect(diff.modified.length).toBe(0);
  });

  test("reports modified when hash differs", async () => {
    const prev = await mkdtemp(join(tmpdir(), "idx-prev-"));
    const next = await mkdtemp(join(tmpdir(), "idx-next-"));

    await writeHead(prev, "alpha", { content_sha256: "aaa" });
    await writeHead(next, "alpha", { content_sha256: "bbb" });

    const prevMap = await loadContentHashes(prev);
    const nextMap = await loadContentHashes(next);
    const diff = compareContentHashes(prevMap, nextMap);

    expect(diff.changed).toBe(true);
    expect(diff.modified).toEqual(["alpha"]);
  });

  test("reports added and removed topics", async () => {
    const prev = await mkdtemp(join(tmpdir(), "idx-prev-"));
    const next = await mkdtemp(join(tmpdir(), "idx-next-"));

    await writeHead(prev, "alpha", { content_sha256: "aaa" });
    await writeHead(next, "beta", { content_sha256: "bbb" });

    const prevMap = await loadContentHashes(prev);
    const nextMap = await loadContentHashes(next);
    const diff = compareContentHashes(prevMap, nextMap);

    expect(diff.changed).toBe(true);
    expect(diff.added).toEqual(["beta"]);
    expect(diff.removed).toEqual(["alpha"]);
  });

  test("reports modified when metadata differs even if body hash matches", async () => {
    const prev = await mkdtemp(join(tmpdir(), "idx-prev-"));
    const next = await mkdtemp(join(tmpdir(), "idx-next-"));

    await writeHead(prev, "alpha", {
      content_sha256: "aaa",
      source_url: "https://example.com/a",
    });
    await writeHead(next, "alpha", {
      content_sha256: "aaa",
      source_url: "https://example.com/b",
    });

    const prevMap = await loadContentHashes(prev);
    const nextMap = await loadContentHashes(next);
    const diff = compareContentHashes(prevMap, nextMap);

    expect(diff.changed).toBe(true);
    expect(diff.modified).toEqual(["alpha"]);
  });
});
