import { mkdir } from "fs/promises";
import { resolve } from "path";
import { stringify } from "yaml";
import type { SourceEntry } from "./lib/registry";
import { loadSources } from "./lib/registry";
import { DATA_ROOT } from "./lib/data-layout";
import { repoRoot } from "./lib/paths";
import { fetchTextWithCurlFallback } from "./lib/fetch-text";
import { validateSourceUrl } from "./lib/source-url";
import { readSourcesFileResult } from "./lib/source-migration";
import {
  buildGithubBlobUrl,
  buildGithubRawUrl,
  buildGithubSkillBaseSlug,
  classifyCategorySlug,
  escapeMarkdownTableCell,
  ensureUniqueSlug,
  matchesSkillMarkdownFilename,
  parseRequiredSkillFrontmatter,
  resolveRepoInfoFromSearchRepository,
  type ResolvedRepoInfo,
  type SearchRepositoryLike,
} from "./lib/github-skill-search";

const SOURCES_DIR = resolve(repoRoot, "sources");
const OUTPUT_PATH = resolve(SOURCES_DIR, "github-skill-search.yml");
const REPORT_DIR = resolve(DATA_ROOT, "reports");
const REPORT_PATH = resolve(DATA_ROOT, "reports", "ingest-github-skill-search.md");

const SOURCE_TYPE = "skills";
const BASE_TAGS = ["github-skill-search", "source-github-code-search"] as const;

const MAX_NEW_ENTRIES = Number(process.env.GITHUB_SKILL_MAX_NEW ?? "200");
const MIN_STARS_EXCLUSIVE = Number(process.env.GITHUB_SKILL_MIN_STARS ?? "500");
const PER_PAGE = 100;
const MAX_PAGES_PER_QUERY = 10;

const DEFAULT_EXCLUDED_REPOS = ["Keith-CY/idx.md"] as const;
const excludedRepos = (process.env.GITHUB_SKILL_EXCLUDED_REPOS ??
  DEFAULT_EXCLUDED_REPOS.join(","))
  .split(",")
  .map((repo) => repo.trim())
  .filter(Boolean);
const excludedRepoClauses = excludedRepos
  .map((repo) => `NOT repo:${repo}`)
  .join(" ")
  .trim();

const QUERIES = [
  `filename:SKILL.md NOT is:fork NOT is:archived ${excludedRepoClauses}`.trim(),
  `filename:SKILLS.md NOT is:fork NOT is:archived ${excludedRepoClauses}`.trim(),
];

const HEADER = `# Schema: list of source entries\n# - type: string\n#   slug: string\n#   source_url: string\n#   title: string (optional)\n#   summary: string (optional)\n#   tags: [string] (optional)\n#   license: string (optional)\n#   upstream_ref: string (optional)\n`;

type SearchItem = {
  path?: string | null;
  html_url?: string | null;
  repository?: SearchRepositoryLike | null;
};

type SearchResponse = {
  total_count?: number;
  items?: SearchItem[];
};

type Rejection = { url: string; reason: string };

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function exponentialBackoffMs(attempt: number): number {
  return 500 * Math.pow(2, Math.max(0, attempt - 1));
}

function parseSeconds(value: string | null): number | null {
  if (!value) return null;
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    return null;
  }
  return parsed;
}

function rateLimitRetryDelayMs(response: Response): number | null {
  const retryAfterSeconds = parseSeconds(response.headers.get("retry-after"));
  if (retryAfterSeconds !== null) {
    return retryAfterSeconds * 1000;
  }

  const remaining = response.headers.get("x-ratelimit-remaining");
  const resetSeconds = parseSeconds(response.headers.get("x-ratelimit-reset"));
  if (remaining === "0" && resetSeconds !== null) {
    const resetMs = resetSeconds * 1000;
    const now = Date.now();
    const delta = resetMs - now;
    if (delta <= 0) {
      return 1000;
    }
    // Add a small buffer so we're past the reset boundary.
    return delta + 1000;
  }

  return null;
}

function logJsonError(url: string, error: unknown): void {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`Failed to parse JSON from ${url}: ${message}`);
}

function authHeaders(): Record<string, string> {
  const token = process.env.GITHUB_TOKEN?.trim() || process.env.GH_TOKEN?.trim();
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": "idx-md github-skill-search ingester",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return headers;
}

async function fetchGitHubJson(url: string): Promise<unknown | null> {
  const headers = authHeaders();
  let attempt = 1;
  while (attempt <= 3) {
    let response: Response;
    try {
      response = await fetch(url, { headers });
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.error(`Fetch failed (${url}): ${message}`);
      await sleep(exponentialBackoffMs(attempt));
      attempt += 1;
      continue;
    }

    if (response.status >= 500) {
      console.error(`GitHub API error (${url}): ${response.status}`);
      await sleep(exponentialBackoffMs(attempt));
      attempt += 1;
      continue;
    }

    if (response.status === 403 || response.status === 429) {
      const delayMs = rateLimitRetryDelayMs(response);
      if (delayMs !== null && attempt < 3) {
        console.error(
          `GitHub API rate limited (${url}): ${response.status} - backing off for ${Math.round(delayMs / 1000)}s`,
        );
        await sleep(delayMs);
        attempt += 1;
        continue;
      }
    }

    if (!response.ok) {
      const text = await response.text().catch(() => "");
      console.error(
        `GitHub API request failed (${url}): ${response.status} ${response.statusText} ${text}`,
      );
      return null;
    }

    try {
      return await response.json();
    } catch (error) {
      logJsonError(url, error);
      return null;
    }
  }
  return null;
}

async function searchCode(
  query: string,
  page: number,
): Promise<SearchResponse | null> {
  const url = new URL("https://api.github.com/search/code");
  url.searchParams.set("q", query);
  url.searchParams.set("per_page", String(PER_PAGE));
  url.searchParams.set("page", String(page));
  const raw = await fetchGitHubJson(url.toString());
  if (!raw || typeof raw !== "object") {
    return null;
  }
  return raw as SearchResponse;
}

function formatReport(params: {
  scanned: number;
  queries: number;
  pages: number;
  filteredStars: number;
  duplicatesSkipped: number;
  invalidSkipped: number;
  fetchFailed: number;
  frontmatterRejected: number;
  entriesWritten: number;
  rejections: Rejection[];
}): string {
  const timestamp = new Date().toISOString();
  const lines: string[] = [
    "# GitHub SKILL search ingest report",
    "",
    `- Timestamp (UTC): ${timestamp}`,
    `- Queries: ${params.queries}`,
    `- Pages fetched: ${params.pages}`,
    `- Items scanned: ${params.scanned}`,
    `- Filtered by stars (<=${MIN_STARS_EXCLUSIVE}): ${params.filteredStars}`,
    `- Duplicates skipped: ${params.duplicatesSkipped}`,
    `- Invalid skipped: ${params.invalidSkipped}`,
    `- Fetch failed: ${params.fetchFailed}`,
    `- Frontmatter rejected: ${params.frontmatterRejected}`,
    `- Entries written (new): ${params.entriesWritten}`,
    "",
    "## Rejections",
    "",
    "| Reason | URL |",
    "| --- | --- |",
  ];

  if (params.rejections.length === 0) {
    lines.push("| None | |");
    lines.push("");
    return lines.join("\n");
  }

  for (const rejection of params.rejections.slice(0, 200)) {
    const reason = escapeMarkdownTableCell(rejection.reason);
    const url = escapeMarkdownTableCell(rejection.url);
    lines.push(`| ${reason} | ${url} |`);
  }
  if (params.rejections.length > 200) {
    lines.push(`| ...and ${params.rejections.length - 200} more | |`);
  }
  lines.push("");
  return lines.join("\n");
}

const previousResult = await readSourcesFileResult(OUTPUT_PATH);
if (!previousResult.ok && !previousResult.missing) {
  throw new Error(previousResult.errors.join("\n"));
}

const previousEntries: SourceEntry[] = previousResult.ok ? previousResult.sources : [];

const registry = await loadSources();
if (!registry.ok) {
  throw new Error(registry.errors.join("\n"));
}

const seenIds = new Map<string, string>();
const existingUrls = new Set<string>();
for (const source of registry.sources) {
  seenIds.set(`${source.type}/${source.slug}`, source.source_url);
  existingUrls.add(source.source_url);
}

const usedUrls = new Set<string>(previousEntries.map((entry) => entry.source_url));
const newEntries: SourceEntry[] = [];
const rejections: Rejection[] = [];

let pagesFetched = 0;
let scanned = 0;
let filteredStars = 0;
let duplicatesSkipped = 0;
let invalidSkipped = 0;
let fetchFailed = 0;
let frontmatterRejected = 0;

const repoInfoCache = new Map<string, ResolvedRepoInfo | null>();
function repoCacheKey(repo: SearchRepositoryLike): string | null {
  const apiUrl = typeof repo.url === "string" ? repo.url.trim() : "";
  if (apiUrl) return apiUrl;
  const fullName = typeof repo.full_name === "string" ? repo.full_name.trim() : "";
  if (fullName) return `full:${fullName}`;
  return null;
}

async function resolveRepoInfo(
  repo: SearchRepositoryLike,
): Promise<ResolvedRepoInfo | null> {
  const key = repoCacheKey(repo);
  if (key && repoInfoCache.has(key)) {
    return repoInfoCache.get(key) ?? null;
  }

  const info = await resolveRepoInfoFromSearchRepository(repo, fetchGitHubJson);
  if (key) {
    repoInfoCache.set(key, info);
  }
  return info;
}

for (const query of QUERIES) {
  for (let page = 1; page <= MAX_PAGES_PER_QUERY; page += 1) {
    const response = await searchCode(query, page);
    pagesFetched += 1;
    if (!response?.items || response.items.length === 0) {
      break;
    }

    for (const item of response.items) {
      if (newEntries.length >= MAX_NEW_ENTRIES) {
        break;
      }

      scanned += 1;
      const path = item.path ?? "";
      if (!matchesSkillMarkdownFilename(path)) {
        invalidSkipped += 1;
        continue;
      }

      const repo = item.repository;
      if (!repo) {
        invalidSkipped += 1;
        continue;
      }

      const info = await resolveRepoInfo(repo);
      if (!info || info.archived || info.fork) {
        invalidSkipped += 1;
        continue;
      }

      if (info.stars <= MIN_STARS_EXCLUSIVE) {
        filteredStars += 1;
        continue;
      }

      const owner = info.owner;
      const repoName = info.repo;
      const defaultBranch = info.defaultBranch;
      const repoFullName = info.fullName;
      const rawUrl = buildGithubRawUrl({
        owner,
        repo: repoName,
        defaultBranch,
        path,
      });

      if (usedUrls.has(rawUrl) || existingUrls.has(rawUrl)) {
        duplicatesSkipped += 1;
        continue;
      }

      const urlValidation = validateSourceUrl(rawUrl);
      if (!urlValidation.ok) {
        invalidSkipped += 1;
        rejections.push({ url: rawUrl, reason: urlValidation.reason });
        continue;
      }

      const markdown = await fetchTextWithCurlFallback(rawUrl);
      if (markdown === null) {
        fetchFailed += 1;
        rejections.push({ url: rawUrl, reason: "Fetch failed" });
        continue;
      }

      const fm = parseRequiredSkillFrontmatter(markdown);
      if (!fm.ok) {
        frontmatterRejected += 1;
        rejections.push({ url: rawUrl, reason: fm.reason });
        continue;
      }

      const categorySlug = classifyCategorySlug({
        name: fm.name,
        description: fm.description,
        repoFullName,
        path,
      });

      const baseSlug = buildGithubSkillBaseSlug({
        owner,
        repo: repoName,
        name: fm.name,
      });
      const slug = ensureUniqueSlug({
        type: SOURCE_TYPE,
        baseSlug,
        url: rawUrl,
        seenIds,
      });

      const entry: SourceEntry = {
        type: SOURCE_TYPE,
        slug,
        source_url: rawUrl,
        title: fm.name,
        summary: fm.description,
        tags: [
          ...BASE_TAGS,
          `category-${categorySlug}`,
          `github-owner-${owner.toLowerCase()}`,
          `github-repo-${repoName.toLowerCase()}`,
        ],
        upstream_ref: buildGithubBlobUrl({
          owner,
          repo: repoName,
          defaultBranch,
          path,
        }),
      };

      newEntries.push(entry);
      usedUrls.add(rawUrl);
      existingUrls.add(rawUrl);
    }

    if (newEntries.length >= MAX_NEW_ENTRIES) {
      break;
    }
  }

  if (newEntries.length >= MAX_NEW_ENTRIES) {
    break;
  }
}

const merged = [...previousEntries, ...newEntries];
merged.sort((a, b) => {
  const slugSort = a.slug.localeCompare(b.slug);
  if (slugSort !== 0) {
    return slugSort;
  }
  return a.source_url.localeCompare(b.source_url);
});

const yaml = stringify(merged, { lineWidth: 0 }).trimEnd();
await Bun.write(OUTPUT_PATH, `${HEADER}${yaml}\n`);

await mkdir(REPORT_DIR, { recursive: true });
await Bun.write(
  REPORT_PATH,
  formatReport({
    scanned,
    queries: QUERIES.length,
    pages: pagesFetched,
    filteredStars,
    duplicatesSkipped,
    invalidSkipped,
    fetchFailed,
    frontmatterRejected,
    entriesWritten: newEntries.length,
    rejections,
  }),
);

console.log(`GitHub queries: ${QUERIES.length}`);
console.log(`GitHub pages fetched: ${pagesFetched}`);
console.log(`GitHub items scanned: ${scanned}`);
console.log(`GitHub filtered by stars: ${filteredStars}`);
console.log(`GitHub duplicates skipped: ${duplicatesSkipped}`);
console.log(`GitHub invalid skipped: ${invalidSkipped}`);
console.log(`GitHub fetch failed: ${fetchFailed}`);
console.log(`GitHub frontmatter rejected: ${frontmatterRejected}`);
console.log(`GitHub new entries written: ${newEntries.length}`);
