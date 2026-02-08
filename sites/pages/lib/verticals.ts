import { formatIndexEntry } from "./data-layout";

export type VerticalDefinition = {
  slug: string;
  title: string;
};

export type ScenarioParseResult = {
  scenarios: string[];
  unknown: string[];
};

export type IndustryParseResult = {
  industries: string[];
  unknown: string[];
};

export type ScenarioIndexEntry = {
  topic: string;
  headContent: string;
  scenarios: readonly string[];
};

export type IndustryIndexEntry = {
  topic: string;
  headContent: string;
  industries: readonly string[];
};

export type VerticalPage = {
  slug: string;
  title: string;
  count: number;
  content: string;
};

export type VerticalBuildOutput = {
  hubContent: string;
  pages: VerticalPage[];
};

const SCENARIO_PREFIX = "scenario-";
const INDUSTRY_PREFIX = "industry-";

export const SCENARIO_DEFINITIONS: readonly VerticalDefinition[] = [
  { slug: "customer-support", title: "Customer Support" },
  { slug: "content-marketing", title: "Content Marketing" },
  { slug: "uncategorized", title: "Uncategorized" },
] as const;

export const INDUSTRY_DEFINITIONS: readonly VerticalDefinition[] = [
  { slug: "finance", title: "Finance" },
  { slug: "uncategorized", title: "Uncategorized" },
] as const;

const SCENARIO_SLUGS = new Set(SCENARIO_DEFINITIONS.map((item) => item.slug));
const SCENARIO_TITLES = new Map(
  SCENARIO_DEFINITIONS.map((item) => [item.slug, item.title]),
);

const INDUSTRY_SLUGS = new Set(INDUSTRY_DEFINITIONS.map((item) => item.slug));
const INDUSTRY_TITLES = new Map(
  INDUSTRY_DEFINITIONS.map((item) => [item.slug, item.title]),
);

const SCENARIO_ALIASES = new Map<string, string>([
  ["support", "customer-support"],
  ["cs", "customer-support"],
  ["marketing", "content-marketing"],
  ["content", "content-marketing"],
  ["uncategorized", "uncategorized"],
]);

const INDUSTRY_ALIASES = new Map<string, string>([
  ["fin", "finance"],
  ["uncategorized", "uncategorized"],
]);

function normalizeTag(tag: string): string {
  return tag.trim().toLowerCase();
}

function toKnownSlug(
  rawSlug: string,
  aliases: ReadonlyMap<string, string>,
  known: ReadonlySet<string>,
): string | null {
  const mapped = aliases.get(rawSlug) ?? rawSlug;
  return known.has(mapped) ? mapped : null;
}

function scenarioTitle(slug: string): string {
  return SCENARIO_TITLES.get(slug) ?? slug;
}

function industryTitle(slug: string): string {
  return INDUSTRY_TITLES.get(slug) ?? slug;
}

export function parseScenarioFromTags(
  tags: readonly string[] | undefined,
): ScenarioParseResult {
  const known = new Set<string>();
  const unknown = new Set<string>();

  for (const tag of tags ?? []) {
    const normalized = normalizeTag(tag);
    if (!normalized.startsWith(SCENARIO_PREFIX)) {
      continue;
    }
    const rawSlug = normalized.slice(SCENARIO_PREFIX.length);
    if (!rawSlug) {
      continue;
    }
    const knownSlug = toKnownSlug(rawSlug, SCENARIO_ALIASES, SCENARIO_SLUGS);
    if (knownSlug) {
      known.add(knownSlug);
      continue;
    }
    unknown.add(rawSlug);
  }

  if (unknown.size > 0) {
    known.add("uncategorized");
  }

  return {
    scenarios: [...known].sort(),
    unknown: [...unknown].sort(),
  };
}

export function parseIndustryFromTags(
  tags: readonly string[] | undefined,
): IndustryParseResult {
  const known = new Set<string>();
  const unknown = new Set<string>();

  for (const tag of tags ?? []) {
    const normalized = normalizeTag(tag);
    if (!normalized.startsWith(INDUSTRY_PREFIX)) {
      continue;
    }
    const rawSlug = normalized.slice(INDUSTRY_PREFIX.length);
    if (!rawSlug) {
      continue;
    }
    const knownSlug = toKnownSlug(rawSlug, INDUSTRY_ALIASES, INDUSTRY_SLUGS);
    if (knownSlug) {
      known.add(knownSlug);
      continue;
    }
    unknown.add(rawSlug);
  }

  if (unknown.size > 0) {
    known.add("uncategorized");
  }

  return {
    industries: [...known].sort(),
    unknown: [...unknown].sort(),
  };
}

export function buildScenarioIndexes(
  entries: readonly ScenarioIndexEntry[],
): VerticalBuildOutput {
  const grouped = new Map<string, Map<string, ScenarioIndexEntry>>(
    SCENARIO_DEFINITIONS.map((def) => [def.slug, new Map()]),
  );

  for (const entry of entries) {
    for (const slug of entry.scenarios) {
      if (!SCENARIO_SLUGS.has(slug)) {
        continue;
      }
      grouped.get(slug)?.set(entry.topic, entry);
    }
  }

  const pages: VerticalPage[] = SCENARIO_DEFINITIONS.map((def) => {
    const byTopic = grouped.get(def.slug) ?? new Map<string, ScenarioIndexEntry>();
    const entrySections = [...byTopic.values()]
      .sort((a, b) => a.topic.localeCompare(b.topic))
      .map((entry) => formatIndexEntry(entry.topic, entry.headContent).trimEnd())
      .join("\n\n");
    const title = scenarioTitle(def.slug);
    const count = byTopic.size;
    const content = [
      `# Scenario: ${title}`,
      "",
      `| Scenario | ${title} |`,
      "| --- | --- |",
      `| Slug | ${def.slug} |`,
      `| Count | ${count} |`,
      "",
      entrySections || "_No entries yet._",
      "",
    ].join("\n");
    return { slug: def.slug, title, count, content };
  });

  const hubRows = pages.map(
    (page) => `| ${page.title} | ${page.count} | /scenario/${page.slug}/index.md |`,
  );

  const hubContent = [
    "# Scenario Index",
    "",
    "| Scenario | Count | Path |",
    "| --- | ---: | --- |",
    ...hubRows,
    "",
  ].join("\n");

  return { hubContent, pages };
}

export function buildIndustryIndexes(
  entries: readonly IndustryIndexEntry[],
): VerticalBuildOutput {
  const grouped = new Map<string, Map<string, IndustryIndexEntry>>(
    INDUSTRY_DEFINITIONS.map((def) => [def.slug, new Map()]),
  );

  for (const entry of entries) {
    for (const slug of entry.industries) {
      if (!INDUSTRY_SLUGS.has(slug)) {
        continue;
      }
      grouped.get(slug)?.set(entry.topic, entry);
    }
  }

  const pages: VerticalPage[] = INDUSTRY_DEFINITIONS.map((def) => {
    const byTopic = grouped.get(def.slug) ?? new Map<string, IndustryIndexEntry>();
    const entrySections = [...byTopic.values()]
      .sort((a, b) => a.topic.localeCompare(b.topic))
      .map((entry) => formatIndexEntry(entry.topic, entry.headContent).trimEnd())
      .join("\n\n");
    const title = industryTitle(def.slug);
    const count = byTopic.size;
    const content = [
      `# Industry: ${title}`,
      "",
      `| Industry | ${title} |`,
      "| --- | --- |",
      `| Slug | ${def.slug} |`,
      `| Count | ${count} |`,
      "",
      entrySections || "_No entries yet._",
      "",
    ].join("\n");
    return { slug: def.slug, title, count, content };
  });

  const hubRows = pages.map(
    (page) => `| ${page.title} | ${page.count} | /industry/${page.slug}/index.md |`,
  );

  const hubContent = [
    "# Industry Index",
    "",
    "| Industry | Count | Path |",
    "| --- | ---: | --- |",
    ...hubRows,
    "",
  ].join("\n");

  return { hubContent, pages };
}

