import { describe, expect, test } from "bun:test";

async function readText(path: string): Promise<string> {
  return Bun.file(path).text();
}

describe("pages tooling paths", () => {
  test("build writes outputs under repo root", async () => {
    const text = await readText("sites/pages/build.ts");
    expect(text.includes('resolve(repoRoot, "reports", "rejected.md")')).toBe(
      true,
    );
    expect(text.includes('resolve(repoRoot, "entries")')).toBe(true);
    expect(text.includes('resolve(repoRoot, "catalog.md")')).toBe(true);
    expect(text.includes('resolve(repoRoot, "types")')).toBe(true);
    expect(text.includes('resolve(repoRoot, "recent.md")')).toBe(true);
    expect(text.includes('resolve(repoRoot, "tags")')).toBe(true);
  });

  test("validate reads entries under repo root", async () => {
    const text = await readText("sites/pages/validate.ts");
    expect(text.includes('resolve(repoRoot, "entries")')).toBe(true);
  });

  test("ingest writes to repo data and reports", async () => {
    const text = await readText("sites/pages/ingest-openclaw.ts");
    expect(text.includes('resolve(repoRoot, "data", "sources-openclaw.yml")')).toBe(
      true,
    );
    expect(text.includes('resolve(repoRoot, "reports", "ingest-openclaw.md")')).toBe(
      true,
    );
    expect(text.includes('resolve(repoRoot, "reports")')).toBe(true);
  });
});
