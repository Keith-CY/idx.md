import { describe, expect, test } from "bun:test";

async function readText(path: string): Promise<string> {
  return Bun.file(path).text();
}

describe("pages tooling paths", () => {
  const migrationCall = /\bawait\s+migrateRemovedSourcesFromFiles\s*\(/;

  test("build writes outputs under data/", async () => {
    const text = await readText("sites/pages/build.ts");
    expect(text.includes('resolve(DATA_ROOT, "reports")')).toBe(true);
    expect(text.includes('resolve(REPORT_DIR, "rejected.md")')).toBe(true);
    expect(text.includes("INDEX_PATH")).toBe(true);
    expect(text.includes("SCENARIO_INDEX_PATH")).toBe(true);
    expect(text.includes("INDUSTRY_INDEX_PATH")).toBe(true);
    expect(text.includes("buildPilotPlaybooks")).toBe(true);
    expect(text.includes("SKILL.md")).toBe(true);
  });

  test("validate reads data topics", async () => {
    const text = await readText("sites/pages/validate.ts");
    expect(text.includes("DATA_ROOT")).toBe(true);
    expect(text.includes("HEAD.md")).toBe(true);
    expect(text.includes("BODY.md")).toBe(true);
  });

  test("ingest writes to sources and data reports", async () => {
    const text = await readText("sites/pages/ingest-openclaw.ts");
    expect(text.includes('resolve(SOURCES_DIR, "openclaw.yml")')).toBe(
      true,
    );
    expect(
      text.includes('resolve(DATA_ROOT, "reports", "ingest-openclaw.md")'),
    ).toBe(true);
    expect(text.includes('resolve(DATA_ROOT, "reports")')).toBe(true);
    expect(migrationCall.test(text)).toBe(true);
  });

  test("skills.sh ingest writes to sources and data reports", async () => {
    const text = await readText("sites/pages/ingest-skills-sh.ts");
    expect(text.includes('resolve(SOURCES_DIR, "skills-sh.yml")')).toBe(
      true,
    );
    expect(
      text.includes('resolve(DATA_ROOT, "reports", "ingest-skills-sh.md")'),
    ).toBe(true);
    expect(migrationCall.test(text)).toBe(true);
  });

  test("openai ingest writes to sources and data reports", async () => {
    const text = await readText("sites/pages/ingest-openai.ts");
    expect(text.includes('resolve(SOURCES_DIR, "openai.yml")')).toBe(
      true,
    );
    expect(text.includes('resolve(DATA_ROOT, "reports", "ingest-openai.md")')).toBe(
      true,
    );
    expect(migrationCall.test(text)).toBe(true);
  });

  test("obra ingest writes to sources and data reports", async () => {
    const text = await readText("sites/pages/ingest-obra.ts");
    expect(text.includes('resolve(SOURCES_DIR, "obra.yml")')).toBe(
      true,
    );
    expect(text.includes('resolve(DATA_ROOT, "reports", "ingest-obra.md")')).toBe(
      true,
    );
    expect(migrationCall.test(text)).toBe(true);
  });

  test("ibelick ingest writes to sources and data reports", async () => {
    const text = await readText("sites/pages/ingest-ibelick.ts");
    expect(text.includes('resolve(SOURCES_DIR, "ibelick.yml")')).toBe(
      true,
    );
    expect(
      text.includes('resolve(DATA_ROOT, "reports", "ingest-ibelick.md")'),
    ).toBe(true);
    expect(migrationCall.test(text)).toBe(true);
  });

  test("awesome-claude ingest writes to general source", async () => {
    const text = await readText("sites/pages/ingest-awesome-claude.ts");
    expect(text.includes('resolve(SOURCES_DIR, "general.yml")')).toBe(true);
  });

  test("agent skill onboarding mentions index and body paths", async () => {
    const text = await readText("SKILL.md");
    expect(text.includes("https://idx.md/index.md")).toBe(true);
    expect(text.includes("https://idx.md/category/index.md")).toBe(true);
    expect(text.includes("https://idx.md/scenario/index.md")).toBe(true);
    expect(text.includes("https://idx.md/industry/index.md")).toBe(true);
    expect(text.includes("/{topic}/BODY.md")).toBe(true);
  });

  test("gitignore ignores data reports", async () => {
    const text = await readText(".gitignore");
    expect(text.includes("data/reports/")).toBe(true);
  });
});
