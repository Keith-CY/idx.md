import { describe, expect, test } from "bun:test";
import { resolve } from "path";
import { repoRoot, siteRoot, buildOut } from "../site/lib/paths";

describe("site path helpers", () => {
  test("repoRoot is parent of siteRoot", () => {
    expect(resolve(siteRoot, "..")).toBe(repoRoot);
  });

  test("siteRoot lives under repoRoot/site", () => {
    expect(siteRoot).toBe(`${repoRoot}/site`);
  });

  test("buildOut points to site/out", () => {
    expect(buildOut).toBe(`${siteRoot}/out`);
  });
});
