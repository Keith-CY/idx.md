import { describe, expect, test } from "bun:test";

async function readText(path: string): Promise<string> {
  return Bun.file(path).text();
}

describe("pages workflow", () => {
  test("pins pages actions by SHA", async () => {
    const text = await readText(".github/workflows/pages.yml");
    expect(/actions\/configure-pages@[0-9a-f]{40}/.test(text)).toBe(true);
    expect(/actions\/upload-pages-artifact@[0-9a-f]{40}/.test(text)).toBe(true);
    expect(/actions\/deploy-pages@[0-9a-f]{40}/.test(text)).toBe(true);
  });

  test("copies data index into output", async () => {
    const text = await readText(".github/workflows/pages.yml");
    expect(text.includes("data/index.md")).toBe(true);
  });

  test("ingest workflow uploads report", async () => {
    const text = await readText(".github/workflows/openclaw-ingest.yml");
    expect(/actions\/upload-artifact@/.test(text)).toBe(true);
    expect(text.includes("data/reports/ingest-openclaw.md")).toBe(true);
  });

  test("skills.sh workflow uploads report", async () => {
    const text = await readText(".github/workflows/skills-sh-ingest.yml");
    expect(/actions\/upload-artifact@/.test(text)).toBe(true);
    expect(text.includes("data/reports/ingest-skills-sh.md")).toBe(true);
  });

  test("openai ingest workflow uploads report", async () => {
    const text = await readText(".github/workflows/openai-ingest.yml");
    expect(/actions\/upload-artifact@/.test(text)).toBe(true);
    expect(text.includes("data/reports/ingest-openai.md")).toBe(true);
  });

  test("obra ingest workflow uploads report", async () => {
    const text = await readText(".github/workflows/obra-ingest.yml");
    expect(/actions\/upload-artifact@/.test(text)).toBe(true);
    expect(text.includes("data/reports/ingest-obra.md")).toBe(true);
  });

  test("pages workflow uploads rejected report", async () => {
    const text = await readText(".github/workflows/pages.yml");
    expect(/actions\/upload-artifact@/.test(text)).toBe(true);
    expect(text.includes("data/reports/rejected.md")).toBe(true);
  });
});
