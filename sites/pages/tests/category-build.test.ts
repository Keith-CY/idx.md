import { describe, expect, test } from "bun:test";
import { buildCategoryIndexes } from "../lib/categories";

describe("category index generation", () => {
  test("generates category hub and per-category pages for multi-category entries", () => {
    const entries = [
      {
        topic: "alpha",
        headContent: ["---", "title: Alpha", "---", ""].join("\n"),
        categories: ["coding-agents-ides", "web-frontend-development"],
      },
      {
        topic: "beta",
        headContent: ["---", "title: Beta", "---", ""].join("\n"),
        categories: ["coding-agents-ides"],
      },
      {
        topic: "gamma",
        headContent: ["---", "title: Gamma", "---", ""].join("\n"),
        categories: ["uncategorized"],
      },
    ] as const;

    const output = buildCategoryIndexes(entries);
    expect(output.hubContent.includes("/category/coding-agents-ides/index.md")).toBe(
      true,
    );
    expect(
      output.hubContent.includes("/category/web-frontend-development/index.md"),
    ).toBe(true);
    expect(output.hubContent.includes("/category/uncategorized/index.md")).toBe(
      true,
    );

    const coding = output.pages.find((page) => page.slug === "coding-agents-ides");
    expect(coding).toBeDefined();
    expect(coding?.count).toBe(2);
    expect(coding?.content.includes("|/data/alpha|")).toBe(true);
    expect(coding?.content.includes("|/data/beta|")).toBe(true);

    const web = output.pages.find(
      (page) => page.slug === "web-frontend-development",
    );
    expect(web).toBeDefined();
    expect(web?.count).toBe(1);
    expect(web?.content.includes("|/data/alpha|")).toBe(true);

    const uncategorized = output.pages.find(
      (page) => page.slug === "uncategorized",
    );
    expect(uncategorized).toBeDefined();
    expect(uncategorized?.count).toBe(1);
    expect(uncategorized?.content.includes("|/data/gamma|")).toBe(true);
  });
});
