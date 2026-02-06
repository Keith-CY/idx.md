import { formatIndexEntry } from "./data-layout";

export type CategoryDefinition = {
  slug: string;
  title: string;
};

export type CategoryParseResult = {
  categories: string[];
  unknown: string[];
};

export type CategoryIndexEntry = {
  topic: string;
  headContent: string;
  categories: readonly string[];
};

export type CategoryPage = {
  slug: string;
  title: string;
  count: number;
  content: string;
};

export type CategoryBuildOutput = {
  hubContent: string;
  pages: CategoryPage[];
};

const CATEGORY_PREFIX = "category-";

const CATEGORY_DEFINITIONS: readonly CategoryDefinition[] = [
  { slug: "ai-llms", title: "AI & LLMs" },
  { slug: "apple-apps-services", title: "Apple Apps & Services" },
  { slug: "browser-automation", title: "Browser Automation" },
  { slug: "calendar-scheduling", title: "Calendar & Scheduling" },
  { slug: "clawdbot-tools", title: "Clawdbot Tools" },
  { slug: "cli-utilities", title: "CLI Utilities" },
  { slug: "coding-agents-ides", title: "Coding Agents & IDEs" },
  { slug: "communication", title: "Communication" },
  { slug: "data-analytics", title: "Data & Analytics" },
  { slug: "devops-cloud", title: "DevOps & Cloud" },
  { slug: "finance", title: "Finance" },
  { slug: "gaming", title: "Gaming" },
  { slug: "git-github", title: "Git & GitHub" },
  { slug: "health-fitness", title: "Health & Fitness" },
  { slug: "image-video-generation", title: "Image & Video Generation" },
  { slug: "ios-macos-development", title: "iOS & macOS Development" },
  { slug: "marketing-sales", title: "Marketing & Sales" },
  { slug: "media-streaming", title: "Media & Streaming" },
  { slug: "moltbook", title: "Moltbook" },
  { slug: "notes-pkm", title: "Notes & PKM" },
  { slug: "pdf-documents", title: "PDF & Documents" },
  { slug: "personal-development", title: "Personal Development" },
  { slug: "productivity-tasks", title: "Productivity Tasks" },
  { slug: "search-research", title: "Search & Research" },
  { slug: "security-passwords", title: "Security & Passwords" },
  { slug: "self-hosted-automation", title: "Self-Hosted Automation" },
  { slug: "shopping-e-commerce", title: "Shopping & E-Commerce" },
  { slug: "smart-home-iot", title: "Smart Home & IoT" },
  { slug: "speech-transcription", title: "Speech & Transcription" },
  { slug: "transportation", title: "Transportation" },
  { slug: "web-frontend-development", title: "Web Frontend Development" },
  { slug: "uncategorized", title: "Uncategorized" },
] as const;

const CATEGORY_SLUGS = new Set(CATEGORY_DEFINITIONS.map((item) => item.slug));
const CATEGORY_TITLES = new Map(
  CATEGORY_DEFINITIONS.map((item) => [item.slug, item.title]),
);

const CATEGORY_ALIASES = new Map<string, string>([
  ["ai", "ai-llms"],
  ["llm", "ai-llms"],
  ["llms", "ai-llms"],
  ["apple", "apple-apps-services"],
  ["coding", "coding-agents-ides"],
  ["code", "coding-agents-ides"],
  ["github", "git-github"],
  ["git", "git-github"],
  ["devops", "devops-cloud"],
  ["cloud", "devops-cloud"],
  ["frontend", "web-frontend-development"],
  ["web", "web-frontend-development"],
  ["web-dev", "web-frontend-development"],
  ["research", "search-research"],
  ["search", "search-research"],
  ["security", "security-passwords"],
  ["ios", "ios-macos-development"],
  ["macos", "ios-macos-development"],
  ["documents", "pdf-documents"],
  ["productivity", "productivity-tasks"],
]);

function normalizeTag(tag: string): string {
  return tag.trim().toLowerCase();
}

function toKnownSlug(tagSlug: string): string | null {
  const mapped = CATEGORY_ALIASES.get(tagSlug) ?? tagSlug;
  return CATEGORY_SLUGS.has(mapped) ? mapped : null;
}

function categoryTitle(slug: string): string {
  return CATEGORY_TITLES.get(slug) ?? slug;
}

export function parseCategoriesFromTags(
  tags: readonly string[] | undefined,
): CategoryParseResult {
  const known = new Set<string>();
  const unknown = new Set<string>();

  for (const tag of tags ?? []) {
    const normalized = normalizeTag(tag);
    if (!normalized.startsWith(CATEGORY_PREFIX)) {
      continue;
    }
    const rawSlug = normalized.slice(CATEGORY_PREFIX.length);
    if (!rawSlug) {
      continue;
    }
    const knownSlug = toKnownSlug(rawSlug);
    if (knownSlug) {
      known.add(knownSlug);
      continue;
    }
    unknown.add(rawSlug);
  }

  if (known.size === 0 || unknown.size > 0) {
    known.add("uncategorized");
  }

  return {
    categories: [...known].sort(),
    unknown: [...unknown].sort(),
  };
}

export function formatUnknownCategoryReason(unknownSlugs: readonly string[]): string {
  const tags = unknownSlugs.map((slug) => `${CATEGORY_PREFIX}${slug}`).join(", ");
  return `Unknown category tag(s): ${tags}; mapped to ${CATEGORY_PREFIX}uncategorized`;
}

export function buildCategoryIndexes(
  entries: readonly CategoryIndexEntry[],
): CategoryBuildOutput {
  const grouped = new Map<string, Map<string, CategoryIndexEntry>>();

  for (const entry of entries) {
    for (const categorySlug of entry.categories) {
      let byTopic = grouped.get(categorySlug);
      if (!byTopic) {
        byTopic = new Map();
        grouped.set(categorySlug, byTopic);
      }
      byTopic.set(entry.topic, entry);
    }
  }

  const pages: CategoryPage[] = [...grouped.entries()]
    .map(([slug, byTopic]) => {
      const entrySections = [...byTopic.values()]
        .sort((a, b) => a.topic.localeCompare(b.topic))
        .map((entry) => formatIndexEntry(entry.topic, entry.headContent).trimEnd())
        .join("\n\n");
      const title = categoryTitle(slug);
      const count = byTopic.size;
      const content = [
        `# Category: ${title}`,
        "",
        `| Category | ${title} |`,
        "| --- | --- |",
        `| Slug | ${slug} |`,
        `| Count | ${count} |`,
        "",
        entrySections,
        "",
      ].join("\n");
      return { slug, title, count, content };
    })
    .sort((a, b) => a.slug.localeCompare(b.slug));

  const hubRows =
    pages.length > 0
      ? pages.map(
          (page) =>
            `| ${page.title} | ${page.count} | /category/${page.slug}/index.md |`,
        )
      : ["| None | 0 | |"];

  const hubContent = [
    "# Category Index",
    "",
    "| Category | Count | Path |",
    "| --- | ---: | --- |",
    ...hubRows,
    "",
  ].join("\n");

  return { hubContent, pages };
}
