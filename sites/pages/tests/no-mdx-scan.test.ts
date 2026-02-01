import { describe, expect, test } from "bun:test";

async function readText(path: string): Promise<string> {
  return Bun.file(path).text();
}

describe("mdx scanning removal", () => {
  test("build script does not reference detectMdx", async () => {
    const text = await readText("sites/pages/build.ts");
    expect(text.includes("detectMdx")).toBe(false);
    expect(text.includes("./lib/mdx")).toBe(false);
  });

  test("validate script does not reference detectMdx", async () => {
    const text = await readText("sites/pages/validate.ts");
    expect(text.includes("detectMdx")).toBe(false);
    expect(text.includes("./lib/mdx")).toBe(false);
  });
});
