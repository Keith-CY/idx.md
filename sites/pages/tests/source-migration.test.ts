import { describe, expect, test } from "bun:test";
import { mkdtemp, mkdir, writeFile } from "fs/promises";
import { tmpdir } from "os";
import { join } from "path";
import { stringify } from "yaml";
import {
  diffRemovedByUrl,
  migrateRemovedSourcesFromFiles,
  planGeneralMigration,
  readSourcesFile,
} from "../lib/source-migration";

const baseEntry = (overrides = {}) => ({
  type: "skills",
  slug: "openclaw-test",
  source_url: "https://example.com/skill.md",
  ...overrides,
});

const HEADER = `# Schema: list of source entries\n# - type: string\n#   slug: string\n#   source_url: string\n#   title: string (optional)\n#   summary: string (optional)\n#   tags: [string] (optional)\n#   license: string (optional)\n#   upstream_ref: string (optional)\n`;

describe("source migration", () => {
  test("diffRemovedByUrl returns entries missing in next set", () => {
    const previous = [
      baseEntry({ source_url: "https://a.com/skill.md", slug: "a" }),
      baseEntry({ source_url: "https://b.com/skill.md", slug: "b" }),
    ];
    const next = [baseEntry({ source_url: "https://b.com/skill.md", slug: "b" })];
    const removed = diffRemovedByUrl(previous, next);
    expect(removed.map((entry) => entry.source_url)).toEqual([
      "https://a.com/skill.md",
    ]);
  });

  test("planGeneralMigration skips urls already present", async () => {
    const removed = [
      baseEntry({ source_url: "https://a.com/skill.md", slug: "a" }),
    ];
    const result = await planGeneralMigration({
      removed,
      generalEntries: [],
      existingUrls: new Set(["https://a.com/skill.md"]),
      checkUrl: async () => ({ ok: true, status: 200 }),
    });
    expect(result.added).toHaveLength(0);
    expect(result.stats.duplicatesSkipped).toBe(1);
  });

  test("planGeneralMigration treats checkUrl throws as curlFailed", async () => {
    const removed = [
      baseEntry({ source_url: "https://fail.com/skill.md", slug: "fail" }),
      baseEntry({ source_url: "https://ok.com/skill.md", slug: "ok" }),
    ];
    const result = await planGeneralMigration({
      removed,
      generalEntries: [],
      existingUrls: new Set(),
      checkUrl: async (url) => {
        if (url.includes("fail")) {
          throw new Error("network error");
        }
        return { ok: true, status: 200 };
      },
    });
    expect(result.stats.curlFailed).toBe(1);
    expect(result.stats.reachable).toBe(1);
    expect(result.added).toHaveLength(1);
    expect(result.added[0]?.source_url).toBe("https://ok.com/skill.md");
  });

  test("planGeneralMigration resolves slug collisions with hash suffix", async () => {
    const removed = [
      baseEntry({ source_url: "https://c.com/skill.md", slug: "dupe" }),
    ];
    const generalEntries = [
      baseEntry({ source_url: "https://existing.com/skill.md", slug: "dupe" }),
    ];
    const result = await planGeneralMigration({
      removed,
      generalEntries,
      existingUrls: new Set(),
      checkUrl: async () => ({ ok: true, status: 200 }),
    });
    expect(result.added).toHaveLength(1);
    expect(result.added[0]?.slug).not.toBe("dupe");
    expect(result.added[0]?.slug).toMatch(/^dupe-[0-9a-f]{8}$/);
  });

  test("migrateRemovedSourcesFromFiles appends reachable entries and skips duplicates", async () => {
    const root = await mkdtemp(join(tmpdir(), "idx-source-migrate-"));
    const sourcesDir = join(root, "sources");
    await mkdir(sourcesDir);
    const generalPath = join(sourcesDir, "general.yml");
    const otherPath = join(sourcesDir, "other.yml");
    const previousPath = join(sourcesDir, "openai.yml");

    const generalEntries = [
      baseEntry({
        slug: "general",
        source_url: "https://general.com/skill.md",
      }),
    ];
    const otherEntries = [
      baseEntry({
        slug: "other",
        source_url: "https://other.com/skill.md",
      }),
    ];
    const previousEntries = [
      baseEntry({
        slug: "removed",
        source_url: "https://removed.com/skill.md",
      }),
      baseEntry({
        slug: "duplicate",
        source_url: "https://other.com/skill.md",
      }),
      baseEntry({
        slug: "kept",
        source_url: "https://kept.com/skill.md",
      }),
    ];

    await writeFile(generalPath, `${HEADER}${stringify(generalEntries)}`);
    await writeFile(otherPath, `${HEADER}${stringify(otherEntries)}`);
    await writeFile(previousPath, `${HEADER}${stringify(previousEntries)}`);

    const nextEntries = [
      baseEntry({
        slug: "kept",
        source_url: "https://kept.com/skill.md",
      }),
    ];

    const result = await migrateRemovedSourcesFromFiles({
      previousPath,
      nextEntries,
      generalPath,
      sourcesDir,
      checkUrl: async () => ({ ok: true, status: 200 }),
    });

    expect(result.added).toHaveLength(1);
    expect(result.added[0]?.source_url).toBe("https://removed.com/skill.md");
    expect(result.stats.duplicatesSkipped).toBe(1);
    expect(result.stats.migrated).toBe(1);

    const updated = await readSourcesFile(generalPath);
    expect(updated).not.toBeNull();
    expect(updated?.[updated.length - 1]?.source_url).toBe(
      "https://removed.com/skill.md",
    );

    const raw = await Bun.file(generalPath).text();
    expect(raw.startsWith(HEADER)).toBe(true);
  });
});
