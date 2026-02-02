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

  test("skills.sh ingest writes to sources and data reports", async () => {
    const text = await readText("sites/pages/ingest-skills-sh.ts");
    expect(text.includes('resolve(repoRoot, "sources", "skills-sh.yml")')).toBe(
      true,
    );
    expect(
      text.includes('resolve(DATA_ROOT, "reports", "ingest-skills-sh.md")'),
    ).toBe(true);
  });

  test("openai ingest writes to sources and data reports", async () => {
    const text = await readText("sites/pages/ingest-openai.ts");
    expect(text.includes('resolve(repoRoot, "sources", "openai.yml")')).toBe(
      true,
    );
    expect(text.includes('resolve(DATA_ROOT, "reports", "ingest-openai.md")')).toBe(
      true,
    );
  });

  test("indexer skill mentions skills.sh ingest", async () => {
    const text = await readText("sites/pages/index.md");
    expect(text.includes("sources/skills-sh.yml")).toBe(true);
    expect(text.includes("ingest-skills-sh.ts")).toBe(true);
  });

  test("gitignore ignores data reports", async () => {
    const text = await readText(".gitignore");
    expect(text.includes("data/reports/")).toBe(true);
  });
});
