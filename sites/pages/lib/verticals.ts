import { formatIndexEntry } from "./data-layout";
import { getIndustryCuration, getScenarioCuration, type VerticalCuration } from "./vertical-curation";

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

type VerticalParseResult = {
  slugs: string[];
  unknown: string[];
};

function renderCurationSection(curation: VerticalCuration): string[] {
  const fit = curation.fit.map((line) => `- ${line}`);
  const noFit = curation.noFit.map((line) => `- ${line}`);
  const goldPath = curation.goldPathTopics.map(
    (topic, index) => `${index + 1}. |/data/${topic}|`,
  );
  const nextHops = curation.nextHops.map((path) => `- ${path}`);

  return [
    "## Fit / No Fit",
    "",
    "**Fit**",
    ...fit,
    "",
    "**No fit**",
    ...noFit,
    "",
    "## Gold Path",
    ...goldPath,
    "",
    "## Playbook",
    `|/data/${curation.playbookTopic}|`,
    "",
    "## Next Hops",
    ...nextHops,
  ];
}

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

function parseVerticalFromTags(
  tags: readonly string[] | undefined,
  params: {
    prefix: string;
    aliases: ReadonlyMap<string, string>;
    known: ReadonlySet<string>;
    uncategorizedSlug: string;
  },
): VerticalParseResult {
  const known = new Set<string>();
  const unknown = new Set<string>();

  for (const tag of tags ?? []) {
    const normalized = normalizeTag(tag);
    if (!normalized.startsWith(params.prefix)) {
      continue;
    }
    const rawSlug = normalized.slice(params.prefix.length);
    if (!rawSlug) {
      continue;
    }
    const knownSlug = toKnownSlug(rawSlug, params.aliases, params.known);
    if (knownSlug) {
      known.add(knownSlug);
      continue;
    }
    unknown.add(rawSlug);
  }

  if (unknown.size > 0) {
    known.add(params.uncategorizedSlug);
  }

  return {
    slugs: [...known].sort(),
    unknown: [...unknown].sort(),
  };
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
  const parsed = parseVerticalFromTags(tags, {
    prefix: SCENARIO_PREFIX,
    aliases: SCENARIO_ALIASES,
    known: SCENARIO_SLUGS,
    uncategorizedSlug: "uncategorized",
  });

  return {
    scenarios: parsed.slugs,
    unknown: parsed.unknown,
  };
}

export function parseIndustryFromTags(
  tags: readonly string[] | undefined,
): IndustryParseResult {
  const parsed = parseVerticalFromTags(tags, {
    prefix: INDUSTRY_PREFIX,
    aliases: INDUSTRY_ALIASES,
    known: INDUSTRY_SLUGS,
    uncategorizedSlug: "uncategorized",
  });

  return {
    industries: parsed.slugs,
    unknown: parsed.unknown,
  };
}

function buildVerticalIndexes<Entry extends { topic: string; headContent: string }>(
  entries: readonly Entry[],
  params: {
    kind: string;
    rootPath: string;
    definitions: readonly VerticalDefinition[];
    knownSlugs: ReadonlySet<string>;
    titleForSlug: (slug: string) => string;
    slugsForEntry: (entry: Entry) => readonly string[];
    curationForSlug: (slug: string) => VerticalCuration | undefined;
  },
): VerticalBuildOutput {
  const grouped = new Map<string, Map<string, Entry>>(
    params.definitions.map((def) => [def.slug, new Map()]),
  );

  for (const entry of entries) {
    for (const slug of params.slugsForEntry(entry)) {
      if (!params.knownSlugs.has(slug)) {
        continue;
      }
      grouped.get(slug)?.set(entry.topic, entry);
    }
  }

  const pages: VerticalPage[] = params.definitions.map((def) => {
    const byTopic = grouped.get(def.slug) ?? new Map<string, Entry>();
    const entrySections = [...byTopic.values()]
      .sort((a, b) => a.topic.localeCompare(b.topic))
      .map((entry) => formatIndexEntry(entry.topic, entry.headContent).trimEnd())
      .join("\n\n");
    const title = params.titleForSlug(def.slug);
    const count = byTopic.size;
    const lines: string[] = [
      `# ${params.kind}: ${title}`,
      "",
      `| ${params.kind} | ${title} |`,
      "| --- | --- |",
      `| Slug | ${def.slug} |`,
      `| Count | ${count} |`,
      "",
    ];

    const curation = params.curationForSlug(def.slug);
    if (curation) {
      lines.push(...renderCurationSection(curation), "");
    }

    lines.push("## Full Listing", "", entrySections || "_No entries yet._", "");
    const content = lines.join("\n");
    return { slug: def.slug, title, count, content };
  });

  const hubRows = pages.map(
    (page) =>
      `| ${page.title} | ${page.count} | ${params.rootPath}/${page.slug}/index.md |`,
  );

  const hubContent = [
    `# ${params.kind} Index`,
    "",
    `| ${params.kind} | Count | Path |`,
    "| --- | ---: | --- |",
    ...hubRows,
    "",
  ].join("\n");

  return { hubContent, pages };
}

export function buildScenarioIndexes(
  entries: readonly ScenarioIndexEntry[],
): VerticalBuildOutput {
  return buildVerticalIndexes(entries, {
    kind: "Scenario",
    rootPath: "/scenario",
    definitions: SCENARIO_DEFINITIONS,
    knownSlugs: SCENARIO_SLUGS,
    titleForSlug: scenarioTitle,
    slugsForEntry: (entry) => entry.scenarios,
    curationForSlug: (slug) => getScenarioCuration(slug),
  });
}

export function buildIndustryIndexes(
  entries: readonly IndustryIndexEntry[],
): VerticalBuildOutput {
  return buildVerticalIndexes(entries, {
    kind: "Industry",
    rootPath: "/industry",
    definitions: INDUSTRY_DEFINITIONS,
    knownSlugs: INDUSTRY_SLUGS,
    titleForSlug: industryTitle,
    slugsForEntry: (entry) => entry.industries,
    curationForSlug: (slug) => getIndustryCuration(slug),
  });
}
