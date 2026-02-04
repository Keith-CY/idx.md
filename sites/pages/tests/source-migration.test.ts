import { describe, expect, test } from "bun:test";
import {
  diffRemovedByUrl,
  planGeneralMigration,
} from "../lib/source-migration";

const baseEntry = (overrides = {}) => ({
  type: "skills",
  slug: "openclaw-test",
  source_url: "https://example.com/skill.md",
  ...overrides,
});

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
});
