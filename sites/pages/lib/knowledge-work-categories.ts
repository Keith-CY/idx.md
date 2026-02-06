const PLUGIN_CATEGORY_BY_ROOT: Record<string, string> = {
  "bio-research": "search-research",
  "cowork-plugin-management": "coding-agents-ides",
  "customer-support": "communication",
  data: "data-analytics",
  "enterprise-search": "search-research",
  finance: "finance",
  legal: "uncategorized",
  marketing: "marketing-sales",
  "product-management": "productivity-tasks",
  productivity: "productivity-tasks",
  sales: "marketing-sales",
};

function normalizePathParts(relativePath: string): string[] {
  return relativePath
    .replace(/\\/g, "/")
    .split("/")
    .map((part) => part.trim().toLowerCase())
    .filter((part) => part.length > 0);
}

export function categoryTagForKnowledgeWorkPath(
  relativePath: string,
): string | null {
  const pluginRoot = normalizePathParts(relativePath)[0];
  if (!pluginRoot) {
    return null;
  }
  const categorySlug = PLUGIN_CATEGORY_BY_ROOT[pluginRoot];
  return categorySlug ? `category-${categorySlug}` : null;
}

export function categoryTagsForKnowledgeWorkPath(relativePath: string): string[] {
  const categoryTag = categoryTagForKnowledgeWorkPath(relativePath);
  return categoryTag ? [categoryTag] : [];
}
