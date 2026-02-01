import { describe, expect, test } from "bun:test";
import { mkdtemp, writeFile } from "fs/promises";
import { tmpdir } from "os";
import { join, resolve } from "path";
import { fileURLToPath, pathToFileURL } from "url";
import {
  loadSources,
  SOURCES_REGISTRY_PATH,
  SOURCES_REGISTRY_PATHS,
} from "../lib/registry";
import { repoRoot } from "../lib/paths";

async function writeRegistry(contents: string): Promise<URL> {
  const dir = await mkdtemp(join(tmpdir(), "idx-md-registry-"));
  const filePath = join(dir, "sources.yml");
  await writeFile(filePath, contents);
  return pathToFileURL(filePath);
}

describe("loadSources url validation", () => {
  test("accepts raw .md URLs", async () => {
    const url = await writeRegistry(`- type: skills\n  slug: ok\n  source_url: https://raw.githubusercontent.com/org/repo/main/README.md\n`);
    const result = await loadSources(url);
    expect(result.ok).toBe(true);
  });

  test("rejects non-.md URLs", async () => {
    const url = await writeRegistry(`- type: skills\n  slug: bad\n  source_url: https://example.com/docs/llms.txt\n`);
    const result = await loadSources(url);
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.errors.some((error) => error.includes("URL must end with .md"))).toBe(
        true,
      );
    }
  });

  test("rejects github.com html URLs", async () => {
    const url = await writeRegistry(`- type: skills\n  slug: bad\n  source_url: https://github.com/org/repo/blob/main/README.md\n`);
    const result = await loadSources(url);
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(
        result.errors.some((error) =>
          error.includes("GitHub URLs must use raw.githubusercontent.com"),
        ),
      ).toBe(true);
    }
  });
});

describe("registry paths", () => {
  test("resolve to repo data directory", () => {
    expect(fileURLToPath(SOURCES_REGISTRY_PATH)).toBe(
      resolve(repoRoot, "data", "sources.yml"),
    );
    expect(fileURLToPath(SOURCES_REGISTRY_PATHS[1])).toBe(
      resolve(repoRoot, "data", "sources-openclaw.yml"),
    );
  });
});
