import { describe, expect, test } from "bun:test";
import { resolve } from "path";
import { repoRoot, siteRoot, buildOut } from "../lib/paths";

describe("site path helpers", () => {
  test("repoRoot is parent of sites", () => {
    expect(resolve(siteRoot, "..", "..")).toBe(repoRoot);
  });

  test("siteRoot lives under repoRoot/sites/pages", () => {
    expect(siteRoot).toBe(`${repoRoot}/sites/pages`);
  });

  test("buildOut points to sites/pages/out", () => {
    expect(buildOut).toBe(`${siteRoot}/out`);
  });
});
