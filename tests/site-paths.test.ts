import { describe, expect, test } from "bun:test";
import { repoRoot, siteRoot, buildOut } from "../site/lib/paths";

describe("site path helpers", () => {
  test("repoRoot resolves to project root", () => {
    expect(repoRoot.endsWith("/idx.md")).toBe(true);
  });

  test("siteRoot lives under repoRoot/site", () => {
    expect(siteRoot).toBe(`${repoRoot}/site`);
  });

  test("buildOut points to site/out", () => {
    expect(buildOut).toBe(`${siteRoot}/out`);
  });
});
