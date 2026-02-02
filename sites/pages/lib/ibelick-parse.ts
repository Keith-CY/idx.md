type TreeEntry = { path: string; type: string };

const SKILL_FILE_REGEX = /^skills\/.+\/(?:SKILL|skill)\.md$/;

export function filterSkillPaths(tree: TreeEntry[]): string[] {
  const results: string[] = [];
  for (const entry of tree) {
    if (entry.type !== "blob") {
      continue;
    }
    if (!SKILL_FILE_REGEX.test(entry.path)) {
      continue;
    }
    results.push(entry.path);
  }
  return results;
}

export function buildRawUrl(branch: string, path: string): string {
  return `https://raw.githubusercontent.com/ibelick/ui-skills/${branch}/${path}`;
}

export function buildSlugParts(path: string): string[] | null {
  const segments = path.split("/").filter(Boolean);
  if (segments.length < 3) {
    return null;
  }
  if (segments[0] !== "skills") {
    return null;
  }
  const parts = segments.slice(1, -1);
  if (parts.length === 0) {
    return null;
  }
  return parts;
}

export function buildSlug(parts: string[]): string {
  return `ibelick-${parts.join("-")}`
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, "-")
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}
