import { describe, expect, test } from "bun:test";

async function readText(path: string): Promise<string> {
  return Bun.file(path).text();
}

describe("pages tooling paths", () => {
  test("build writes outputs under data/", async () => {
    const text = await readText("sites/pages/build.ts");
    expect(text.includes('resolve(DATA_ROOT, "reports")')).toBe(true);
    expect(text.includes('resolve(REPORT_DIR, "rejected.md")')).toBe(true);
    expect(text.includes("INDEX_PATH")).toBe(true);
  });

  test("validate reads data topics", async () => {
    const text = await readText("sites/pages/validate.ts");
    expect(text.includes("DATA_ROOT")).toBe(true);
    expect(text.includes("HEAD.md")).toBe(true);
    expect(text.includes("BODY.md")).toBe(true);
  });

  test("ingest writes to sources and data reports", async () => {
    const text = await readText("sites/pages/ingest-openclaw.ts");
    expect(text.includes('resolve(repoRoot, "sources", "openclaw.yml")')).toBe(
      true,
    );
    expect(
      text.includes('resolve(DATA_ROOT, "reports", "ingest-openclaw.md")'),
    ).toBe(true);
    expect(text.includes('resolve(DATA_ROOT, "reports")')).toBe(true);
  });
});
