import { describe, expect, test } from "bun:test";
import { mkdtemp, writeFile } from "fs/promises";
import { tmpdir } from "os";
import { join, resolve } from "path";
import { fileURLToPath, pathToFileURL } from "url";
import {
  GENERAL_SOURCES_PATH,
  getSourcesRegistryPaths,
  loadSources,
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

  test("accepts optional GitHub repository metadata fields", async () => {
    const url = await writeRegistry(
      [
        "- type: skills",
        "  slug: ok",
        "  source_url: https://raw.githubusercontent.com/org/repo/main/README.md",
        "  github_stars: 42",
        "  github_forks: 7",
        "  github_is_organization: true",
        "",
      ].join("\n"),
    );
    const result = await loadSources(url);
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.sources[0]).toMatchObject({
        github_stars: 42,
        github_forks: 7,
        github_is_organization: true,
      });
    }
  });

  test("rejects invalid GitHub repository metadata field types", async () => {
    const url = await writeRegistry(
      [
        "- type: skills",
        "  slug: bad-meta",
        "  source_url: https://raw.githubusercontent.com/org/repo/main/README.md",
        "  github_stars: nope",
        "",
      ].join("\n"),
    );
    const result = await loadSources(url);
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(
        result.errors.some(
          (error) =>
            error.includes("github_stars") ||
            error.includes("github_forks") ||
            error.includes("github_is_organization"),
        ),
      ).toBe(true);
    }
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
  test("general registry lives under sources/", () => {
    expect(fileURLToPath(GENERAL_SOURCES_PATH)).toBe(
      resolve(repoRoot, "sources", "general.yml"),
    );
  });

  test("registry list includes general and only yml files", async () => {
    const paths = await getSourcesRegistryPaths();
    const pathnames = paths.map((path) => fileURLToPath(path));
    expect(pathnames).toContain(resolve(repoRoot, "sources", "general.yml"));
    expect(pathnames.every((path) => path.endsWith(".yml"))).toBe(true);
  });
});
