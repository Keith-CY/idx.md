import { describe, expect, test } from "bun:test";
import { buildPilotPlaybooks } from "../lib/playbooks";

describe("pilot playbooks", () => {
  test("buildPilotPlaybooks returns deterministic topics with head/body", () => {
    const retrievedAt = "2026-02-08T00:00:00.000Z";
    const playbooks = buildPilotPlaybooks(retrievedAt);
    expect(playbooks.map((entry) => entry.topic)).toEqual([
      "playbook-industry-finance",
      "playbook-scenario-content-marketing",
      "playbook-scenario-customer-support",
    ]);
    expect(playbooks.map((entry) => entry.tags)).toEqual([
      ["playbooks", "industry-finance", "category-finance"],
      ["playbooks", "scenario-content-marketing", "category-marketing-sales"],
      ["playbooks", "scenario-customer-support", "category-communication"],
    ]);

    for (const playbook of playbooks) {
      expect(playbook.headContent.startsWith("---\n")).toBe(true);
      expect(playbook.headContent.includes("type: playbooks")).toBe(true);
      expect(playbook.headContent.includes(`stable_id: playbooks/${playbook.topic}`)).toBe(
        true,
      );
      expect(playbook.headContent.includes("content_sha256:")).toBe(true);
      expect(playbook.headContent.includes("github_stars: null")).toBe(true);
      expect(playbook.headContent.includes("github_forks: null")).toBe(true);
      expect(playbook.headContent.includes("github_is_organization: null")).toBe(
        true,
      );
      expect(playbook.bodyMarkdown.includes("|/data/")).toBe(true);
    }
  });
});
