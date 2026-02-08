import { describe, expect, test } from "bun:test";
import { buildIndustryIndexes, buildScenarioIndexes, parseIndustryFromTags, parseScenarioFromTags } from "../lib/verticals";

describe("scenario verticals", () => {
  test("parseScenarioFromTags returns empty when no scenario-* tags are present", () => {
    const parsed = parseScenarioFromTags(["skills-sh", "openclaw"]);
    expect(parsed.scenarios).toEqual([]);
    expect(parsed.unknown).toEqual([]);
  });

  test("parseScenarioFromTags maps aliases and deduplicates scenarios", () => {
    const parsed = parseScenarioFromTags([
      "scenario-support",
      "scenario-customer-support",
      "scenario-cs",
    ]);
    expect(parsed.scenarios).toEqual(["customer-support"]);
    expect(parsed.unknown).toEqual([]);
  });

  test("parseScenarioFromTags routes unknown scenario tags to uncategorized and reports unknown slugs", () => {
    const parsed = parseScenarioFromTags(["scenario-non-existent"]);
    expect(parsed.scenarios).toEqual(["uncategorized"]);
    expect(parsed.unknown).toEqual(["non-existent"]);
  });

  test("parseScenarioFromTags keeps known scenarios and also routes unknown tags to uncategorized", () => {
    const parsed = parseScenarioFromTags([
      "scenario-customer-support",
      "scenario-typo-scnario",
    ]);
    expect(parsed.scenarios).toEqual(["customer-support", "uncategorized"]);
    expect(parsed.unknown).toEqual(["typo-scnario"]);
  });

  test("buildScenarioIndexes generates hub and per-scenario pages", () => {
    const entries = [
      {
        topic: "alpha",
        headContent: ["---", "title: Alpha", "---", ""].join("\n"),
        scenarios: ["customer-support"],
      },
      {
        topic: "beta",
        headContent: ["---", "title: Beta", "---", ""].join("\n"),
        scenarios: ["customer-support"],
      },
      {
        topic: "gamma",
        headContent: ["---", "title: Gamma", "---", ""].join("\n"),
        scenarios: ["uncategorized"],
      },
      {
        topic: "delta",
        headContent: ["---", "title: Delta", "---", ""].join("\n"),
        scenarios: [],
      },
    ] as const;

    const output = buildScenarioIndexes(entries);
    expect(output.hubContent.includes("/scenario/customer-support/index.md")).toBe(
      true,
    );
    expect(output.hubContent.includes("/scenario/content-marketing/index.md")).toBe(
      true,
    );
    expect(output.hubContent.includes("/scenario/uncategorized/index.md")).toBe(
      true,
    );

    const customerSupport = output.pages.find(
      (page) => page.slug === "customer-support",
    );
    expect(customerSupport?.count).toBe(2);
    expect(customerSupport?.content.includes("|/data/alpha|")).toBe(true);
    expect(customerSupport?.content.includes("|/data/beta|")).toBe(true);
    expect(customerSupport?.content.includes("|/data/delta|")).toBe(false);

    const uncategorized = output.pages.find(
      (page) => page.slug === "uncategorized",
    );
    expect(uncategorized?.count).toBe(1);
    expect(uncategorized?.content.includes("|/data/gamma|")).toBe(true);
  });
});

describe("industry verticals", () => {
  test("parseIndustryFromTags returns empty when no industry-* tags are present", () => {
    const parsed = parseIndustryFromTags(["skills-sh", "openclaw"]);
    expect(parsed.industries).toEqual([]);
    expect(parsed.unknown).toEqual([]);
  });

  test("parseIndustryFromTags maps aliases and deduplicates industries", () => {
    const parsed = parseIndustryFromTags(["industry-fin", "industry-finance"]);
    expect(parsed.industries).toEqual(["finance"]);
    expect(parsed.unknown).toEqual([]);
  });

  test("parseIndustryFromTags routes unknown industry tags to uncategorized and reports unknown slugs", () => {
    const parsed = parseIndustryFromTags(["industry-non-existent"]);
    expect(parsed.industries).toEqual(["uncategorized"]);
    expect(parsed.unknown).toEqual(["non-existent"]);
  });

  test("buildIndustryIndexes generates hub and per-industry pages", () => {
    const entries = [
      {
        topic: "alpha",
        headContent: ["---", "title: Alpha", "---", ""].join("\n"),
        industries: ["finance"],
      },
      {
        topic: "beta",
        headContent: ["---", "title: Beta", "---", ""].join("\n"),
        industries: ["uncategorized"],
      },
    ] as const;

    const output = buildIndustryIndexes(entries);
    expect(output.hubContent.includes("/industry/finance/index.md")).toBe(true);
    expect(output.hubContent.includes("/industry/uncategorized/index.md")).toBe(
      true,
    );

    const finance = output.pages.find((page) => page.slug === "finance");
    expect(finance?.count).toBe(1);
    expect(finance?.content.includes("|/data/alpha|")).toBe(true);
  });
});

