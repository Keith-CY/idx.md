import { describe, expect, test } from "bun:test";
import { buildIndustryIndexes, buildScenarioIndexes } from "../lib/verticals";

describe("vertical curation", () => {
  test("scenario pilots include curated top section", () => {
    const output = buildScenarioIndexes([]);
    const customerSupport = output.pages.find((page) => page.slug === "customer-support");
    expect(customerSupport).toBeDefined();
    expect(customerSupport?.content.includes("## Fit / No Fit")).toBe(true);
    expect(customerSupport?.content.includes("**Fit**")).toBe(true);
    expect(customerSupport?.content.includes("**No fit**")).toBe(true);
    expect(customerSupport?.content.includes("## Gold Path")).toBe(true);
    expect(customerSupport?.content.includes("|/data/playbook-scenario-customer-support|")).toBe(
      true,
    );
    expect(customerSupport?.content.includes("/category/communication/index.md")).toBe(true);

    const contentMarketing = output.pages.find((page) => page.slug === "content-marketing");
    expect(contentMarketing).toBeDefined();
    expect(contentMarketing?.content.includes("## Fit / No Fit")).toBe(true);
    expect(contentMarketing?.content.includes("## Gold Path")).toBe(true);
    expect(contentMarketing?.content.includes("|/data/playbook-scenario-content-marketing|")).toBe(
      true,
    );
    expect(contentMarketing?.content.includes("/category/marketing-sales/index.md")).toBe(true);
  });

  test("industry pilots include curated top section", () => {
    const output = buildIndustryIndexes([]);
    const finance = output.pages.find((page) => page.slug === "finance");
    expect(finance).toBeDefined();
    expect(finance?.content.includes("## Fit / No Fit")).toBe(true);
    expect(finance?.content.includes("## Gold Path")).toBe(true);
    expect(finance?.content.includes("|/data/playbook-industry-finance|")).toBe(true);
    expect(finance?.content.includes("/category/finance/index.md")).toBe(true);
  });
});

