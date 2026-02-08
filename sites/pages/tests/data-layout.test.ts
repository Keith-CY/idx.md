import { describe, expect, test } from "bun:test";
import { resolve } from "path";
import {
  CATEGORY_INDEX_PATH,
  DATA_ROOT,
  INDUSTRY_INDEX_PATH,
  SCENARIO_INDEX_PATH,
  bodyPath,
  categoryIndexPath,
  formatIndexEntry,
  headPath,
  industryIndexPath,
  scenarioIndexPath,
} from "../lib/data-layout";
import { repoRoot } from "../lib/paths";

describe("data layout", () => {
  test("writes head/body under data/{topic}", () => {
    expect(DATA_ROOT).toBe(resolve(repoRoot, "data"));
    expect(headPath("mintlify")).toBe(
      resolve(repoRoot, "data", "mintlify", "HEAD.md"),
    );
    expect(bodyPath("mintlify")).toBe(
      resolve(repoRoot, "data", "mintlify", "BODY.md"),
    );
  });

  test("formats index entry with frontmatter and directory path", () => {
    const head = ["---", "title: Mintlify", "---", ""].join("\n");
    const output = formatIndexEntry("mintlify", head);
    expect(output).toContain("---\ntitle: Mintlify\n---");
    expect(output).toContain("|/data/mintlify|");
  });

  test("writes category indexes under data/category", () => {
    expect(CATEGORY_INDEX_PATH).toBe(
      resolve(repoRoot, "data", "category", "index.md"),
    );
    expect(categoryIndexPath("coding-agents-ides")).toBe(
      resolve(repoRoot, "data", "category", "coding-agents-ides", "index.md"),
    );
  });

  test("writes scenario indexes under data/scenario", () => {
    expect(SCENARIO_INDEX_PATH).toBe(resolve(repoRoot, "data", "scenario", "index.md"));
    expect(scenarioIndexPath("customer-support")).toBe(
      resolve(repoRoot, "data", "scenario", "customer-support", "index.md"),
    );
  });

  test("writes industry indexes under data/industry", () => {
    expect(INDUSTRY_INDEX_PATH).toBe(resolve(repoRoot, "data", "industry", "index.md"));
    expect(industryIndexPath("finance")).toBe(
      resolve(repoRoot, "data", "industry", "finance", "index.md"),
    );
  });
});
