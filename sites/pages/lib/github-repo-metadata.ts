function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function toNonNegativeInteger(value: unknown): number | null {
  if (typeof value !== "number" || !Number.isInteger(value) || value < 0) {
    return null;
  }
  return value;
}

export type GithubRepoMetadata = {
  github_stars: number;
  github_forks: number;
  github_is_organization: boolean;
};

export type GithubRepoRef = {
  owner: string;
  repo: string;
};

type FetchLike = (input: string, init?: RequestInit) => Promise<Response>;

function normalizeRefSegment(value: string): string | null {
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

export function extractGithubRepoMetadata(
  repoJson: unknown,
): GithubRepoMetadata | null {
  if (!isRecord(repoJson)) {
    return null;
  }

  const github_stars = toNonNegativeInteger(repoJson.stargazers_count);
  const github_forks = toNonNegativeInteger(repoJson.forks_count);
  const owner = repoJson.owner;

  if (github_stars === null || github_forks === null || !isRecord(owner)) {
    return null;
  }

  const ownerType = owner.type;
  if (typeof ownerType !== "string") {
    return null;
  }

  return {
    github_stars,
    github_forks,
    github_is_organization: ownerType.toLowerCase() === "organization",
  };
}

export function extractGithubRepoRefFromRawUrl(
  rawUrl: string,
): GithubRepoRef | null {
  let url: URL;
  try {
    url = new URL(rawUrl);
  } catch {
    return null;
  }

  if (url.hostname !== "raw.githubusercontent.com") {
    return null;
  }

  const parts = url.pathname.split("/").filter(Boolean);
  if (parts.length < 2) {
    return null;
  }

  const owner = normalizeRefSegment(decodeURIComponent(parts[0] ?? ""));
  const repo = normalizeRefSegment(
    decodeURIComponent((parts[1] ?? "").replace(/\.git$/i, "")),
  );
  if (!owner || !repo) {
    return null;
  }

  return { owner, repo };
}

async function fetchGithubRepoMetadata(
  repoRef: GithubRepoRef,
  fetchImpl: FetchLike,
): Promise<GithubRepoMetadata | null> {
  try {
    const response = await fetchImpl(
      `https://api.github.com/repos/${repoRef.owner}/${repoRef.repo}`,
      {
        headers: {
          Accept: "application/vnd.github+json",
        },
      },
    );
    if (!response.ok) {
      return null;
    }
    const body = await response.text();
    let parsed: unknown;
    try {
      parsed = JSON.parse(body);
    } catch {
      return null;
    }
    return extractGithubRepoMetadata(parsed);
  } catch {
    return null;
  }
}

export function createGithubRepoMetadataFetcher(
  fetchImpl: FetchLike = fetch,
): (repoRef: GithubRepoRef | null | undefined) => Promise<GithubRepoMetadata | null> {
  const cache = new Map<string, Promise<GithubRepoMetadata | null>>();

  return async (repoRef) => {
    if (!repoRef) {
      return null;
    }

    const owner = normalizeRefSegment(repoRef.owner);
    const repo = normalizeRefSegment(repoRef.repo);
    if (!owner || !repo) {
      return null;
    }

    const key = `${owner.toLowerCase()}/${repo.toLowerCase()}`;
    const cached = cache.get(key);
    if (cached) {
      return cached;
    }

    const pending = fetchGithubRepoMetadata({ owner, repo }, fetchImpl);
    cache.set(key, pending);
    return pending;
  };
}
