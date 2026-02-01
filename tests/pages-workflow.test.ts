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

  test("copies site index into output", async () => {
    const text = await readText(".github/workflows/pages.yml");
    expect(text.includes("site/index.md")).toBe(true);
  });

  test("site index exists", async () => {
    const exists = await Bun.file("site/index.md").exists();
    expect(exists).toBe(true);
  });
});
