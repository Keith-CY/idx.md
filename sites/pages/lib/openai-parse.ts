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
  return `https://raw.githubusercontent.com/openai/skills/${branch}/${path}`;
}

export function buildSlugParts(
  path: string,
): { owner: string; skill: string } | null {
  const segments = path.split("/").filter(Boolean);
  if (segments.length < 3) {
    return null;
  }

  if (segments[0] !== "skills") {
    return null;
  }

  if (segments.length === 3) {
    return { owner: "openai", skill: segments[1] ?? "" };
  }

  if (segments.length >= 4) {
    return { owner: segments[1] ?? "", skill: segments[2] ?? "" };
  }

  return null;
}

export function buildSlug(parts: { owner: string; skill: string }): string {
  return `openai-${parts.owner}-${parts.skill}`
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, "-")
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}
