import { parse } from "yaml";
import { createHash } from "crypto";

function slugify(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, "-")
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function stripFrontmatterPreamble(text: string): string {
  let output = text;
  if (output.charCodeAt(0) === 0xfeff) {
    output = output.slice(1);
  }
  output = output.replace(/^(?:\s*\r?\n)+/, "");
  return output;
}

export function matchesSkillMarkdownFilename(filename: string): boolean {
  const base = filename.split("/").pop() ?? filename;
  const normalized = base.trim().toLowerCase();
  return normalized === "skill.md" || normalized === "skills.md";
}

export type RequiredSkillFrontmatterResult =
  | { ok: true; name: string; description: string }
  | { ok: false; reason: string };

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function parseRequiredSkillFrontmatter(
  markdown: string,
): RequiredSkillFrontmatterResult {
  const normalized = stripFrontmatterPreamble(markdown);
  const lines = normalized.split(/\r?\n/);
  if (lines[0] !== "---") {
    return {
      ok: false,
      reason: "Missing frontmatter: markdown must start with ---",
    };
  }

  let endIndex = -1;
  for (let index = 1; index < lines.length; index += 1) {
    if (lines[index] === "---") {
      endIndex = index;
      break;
    }
  }

  if (endIndex === -1) {
    return { ok: false, reason: "Invalid frontmatter: missing closing ---" };
  }

  const yamlText = lines.slice(1, endIndex).join("\n");
  let parsed: unknown;
  try {
    parsed = parse(yamlText);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return { ok: false, reason: `Invalid frontmatter: ${message}` };
  }

  if (!isRecord(parsed)) {
    return { ok: false, reason: "Invalid frontmatter: must be a mapping" };
  }

  const name = typeof parsed.name === "string" ? parsed.name.trim() : "";
  const description =
    typeof parsed.description === "string" ? parsed.description.trim() : "";

  if (!name) {
    return { ok: false, reason: 'Invalid frontmatter: missing "name" string' };
  }
  if (!description) {
    return {
      ok: false,
      reason: 'Invalid frontmatter: missing "description" string',
    };
  }

  return { ok: true, name, description };
}

export function classifyCategorySlug(params: {
  name: string;
  description: string;
  repoFullName: string;
  path: string;
}): string {
  const haystack = [
    params.name,
    params.description,
    params.repoFullName,
    params.path,
  ]
    .join(" ")
    .toLowerCase();

  if (
    haystack.includes("notion") ||
    haystack.includes("obsidian") ||
    haystack.includes("logseq") ||
    haystack.includes("roam")
  ) {
    return "notes-pkm";
  }

  if (
    haystack.includes("slack") ||
    haystack.includes("discord") ||
    haystack.includes("telegram") ||
    haystack.includes("whatsapp") ||
    haystack.includes("wechat") ||
    haystack.includes("signal") ||
    haystack.includes("twilio") ||
    haystack.includes("sms")
  ) {
    return "communication";
  }

  if (
    haystack.includes("gmail") ||
    haystack.includes("email") ||
    haystack.includes("outlook")
  ) {
    return "communication";
  }

  if (
    haystack.includes("calendar") ||
    haystack.includes("schedule") ||
    haystack.includes("scheduling") ||
    haystack.includes("calendly")
  ) {
    return "calendar-scheduling";
  }

  if (
    haystack.includes("jira") ||
    haystack.includes("confluence") ||
    haystack.includes("trello") ||
    haystack.includes("asana") ||
    haystack.includes("linear") ||
    haystack.includes("task") ||
    haystack.includes("ticket")
  ) {
    return "productivity-tasks";
  }

  if (haystack.includes("github") || haystack.includes("gitlab")) {
    return "git-github";
  }

  if (
    haystack.includes("stripe") ||
    haystack.includes("invoice") ||
    haystack.includes("billing") ||
    haystack.includes("payment")
  ) {
    return "finance";
  }

  if (haystack.includes("shopify") || haystack.includes("e-commerce")) {
    return "shopping-e-commerce";
  }

  if (haystack.includes("drive") || haystack.includes("dropbox")) {
    return "productivity-tasks";
  }

  if (haystack.includes("maps") || haystack.includes("geocode")) {
    return "transportation";
  }

  return "uncategorized";
}

export function buildGithubSkillBaseSlug(params: {
  owner: string;
  repo: string;
  name: string;
}): string {
  const ownerSlug = slugify(params.owner);
  const repoSlug = slugify(params.repo);
  const nameSlug = slugify(params.name) || "skill";
  return `github-skill-${ownerSlug}-${repoSlug}-${nameSlug}`;
}

export function buildGithubRawUrl(params: {
  owner: string;
  repo: string;
  defaultBranch: string;
  path: string;
}): string {
  return `https://raw.githubusercontent.com/${params.owner}/${params.repo}/${params.defaultBranch}/${params.path}`;
}

export function buildGithubBlobUrl(params: {
  owner: string;
  repo: string;
  defaultBranch: string;
  path: string;
}): string {
  return `https://github.com/${params.owner}/${params.repo}/blob/${params.defaultBranch}/${params.path}`;
}

function shortHash(value: string): string {
  return createHash("sha256").update(value).digest("hex").slice(0, 8);
}

export function ensureUniqueSlug(params: {
  type: string;
  baseSlug: string;
  url: string;
  seenIds: Map<string, string>;
}): string {
  const type = params.type;
  const base = params.baseSlug;
  const key = `${type}/${base}`;
  const existing = params.seenIds.get(key);
  if (!existing) {
    params.seenIds.set(key, params.url);
    return base;
  }
  if (existing === params.url) {
    return base;
  }

  const hash = shortHash(params.url);
  let candidate = `${base}-${hash}`;
  let counter = 2;
  while (params.seenIds.has(`${type}/${candidate}`)) {
    candidate = `${base}-${hash}-${counter}`;
    counter += 1;
  }
  params.seenIds.set(`${type}/${candidate}`, params.url);
  return candidate;
}

export function escapeMarkdownTableCell(value: string): string {
  return value
    .replaceAll("\r\n", " ")
    .replaceAll("\n", " ")
    .replaceAll("\r", " ")
    .replaceAll("|", "\\|");
}

export type SearchRepositoryLike = {
  full_name?: string | null;
  name?: string | null;
  owner?: { login?: string | null } | null;
  default_branch?: string | null;
  stargazers_count?: number | null;
  archived?: boolean | null;
  fork?: boolean | null;
  url?: string | null;
};

export type ResolvedRepoInfo = {
  owner: string;
  repo: string;
  fullName: string;
  defaultBranch: string;
  stars: number;
  archived: boolean;
  fork: boolean;
  apiUrl: string;
};

function resolveRepoInfoFromRepoPayload(payload: unknown): ResolvedRepoInfo | null {
  if (!isRecord(payload)) {
    return null;
  }

  const apiUrl = typeof payload.url === "string" ? payload.url.trim() : "";
  const fullName =
    typeof payload.full_name === "string" ? payload.full_name.trim() : "";
  const repo = typeof payload.name === "string" ? payload.name.trim() : "";
  const owner =
    isRecord(payload.owner) && typeof payload.owner.login === "string"
      ? payload.owner.login.trim()
      : "";

  const defaultBranch =
    typeof payload.default_branch === "string" ? payload.default_branch.trim() : "";
  const stars = typeof payload.stargazers_count === "number" ? payload.stargazers_count : null;
  const archived = typeof payload.archived === "boolean" ? payload.archived : null;
  const fork = typeof payload.fork === "boolean" ? payload.fork : null;

  if (
    !apiUrl ||
    !owner ||
    !repo ||
    !fullName ||
    !defaultBranch ||
    stars === null ||
    archived === null ||
    fork === null
  ) {
    return null;
  }

  return {
    owner,
    repo,
    fullName,
    defaultBranch,
    stars,
    archived,
    fork,
    apiUrl,
  };
}

export async function resolveRepoInfoFromSearchRepository(
  repo: SearchRepositoryLike,
  fetchRepo: (url: string) => Promise<unknown | null>,
): Promise<ResolvedRepoInfo | null> {
  const resolved = resolveRepoInfoFromRepoPayload(repo);
  if (resolved) {
    return resolved;
  }

  const apiUrl = typeof repo?.url === "string" ? repo.url.trim() : "";
  if (!apiUrl) {
    return null;
  }

  const fetched = await fetchRepo(apiUrl);
  if (!fetched) {
    return null;
  }
  return resolveRepoInfoFromRepoPayload(fetched);
}
