const SKILLS_HOST = "skills.sh";
const SKILLS_ORIGIN = `https://${SKILLS_HOST}`;

function normalizeSkillUrl(owner: string, repo: string, skill: string): string {
  return `${SKILLS_ORIGIN}/${owner}/${repo}/${skill}`;
}

export function parseSkillPath(input: string):
  | { owner: string; repo: string; skill: string }
  | null {
  let url: URL;
  try {
    url = new URL(input, SKILLS_ORIGIN);
  } catch {
    return null;
  }

  if (url.hostname !== SKILLS_HOST && url.hostname !== `www.${SKILLS_HOST}`) {
    return null;
  }

  const segments = url.pathname.split("/").filter(Boolean);
  if (segments.length !== 3) {
    return null;
  }

  const [owner, repo, skill] = segments;
  if (!owner || !repo || !skill) {
    return null;
  }

  return { owner, repo, skill };
}

export function extractSkillLinksFromSitemap(xml: string): string[] {
  const links: string[] = [];
  const seen = new Set<string>();
  const regex = /<loc>\s*([^<]+)\s*<\/loc>/gi;

  for (const match of xml.matchAll(regex)) {
    const raw = match[1]?.trim();
    if (!raw) {
      continue;
    }
    const parsed = parseSkillPath(raw);
    if (!parsed) {
      continue;
    }
    const normalized = normalizeSkillUrl(
      parsed.owner,
      parsed.repo,
      parsed.skill,
    );
    if (seen.has(normalized)) {
      continue;
    }
    seen.add(normalized);
    links.push(normalized);
  }

  return links;
}

export function extractSkillLinksFromHtml(html: string): string[] {
  const links: string[] = [];
  const seen = new Set<string>();
  const regex = /href\s*=\s*["']([^"']+)["']/gi;

  for (const match of html.matchAll(regex)) {
    const raw = match[1]?.trim();
    if (!raw) {
      continue;
    }
    let url: URL;
    try {
      url = new URL(raw, SKILLS_ORIGIN);
    } catch {
      continue;
    }

    const parsed = parseSkillPath(url.toString());
    if (!parsed) {
      continue;
    }
    const normalized = normalizeSkillUrl(
      parsed.owner,
      parsed.repo,
      parsed.skill,
    );
    if (seen.has(normalized)) {
      continue;
    }
    seen.add(normalized);
    links.push(normalized);
  }

  return links;
}

function normalizeMarkdownUrl(raw: string): string | null {
  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    return null;
  }

  if (!url.pathname.toLowerCase().endsWith(".md")) {
    return null;
  }

  if (url.hostname === "raw.githubusercontent.com") {
    return url.toString();
  }

  if (url.hostname !== "github.com" && url.hostname !== "www.github.com") {
    return null;
  }

  const parts = url.pathname.split("/").filter(Boolean);
  if (parts.length < 5) {
    return null;
  }

  const [owner, repo, mode, branch, ...pathParts] = parts;
  if (!owner || !repo || !branch || pathParts.length === 0) {
    return null;
  }

  if (mode !== "blob" && mode !== "raw") {
    return null;
  }

  return `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${pathParts.join(
    "/",
  )}`;
}

export function extractMarkdownUrls(html: string): string[] {
  const urls: string[] = [];
  const regex = /href\s*=\s*["']([^"']+)["']/gi;

  for (const match of html.matchAll(regex)) {
    const raw = match[1]?.trim();
    if (!raw) {
      continue;
    }
    const normalized = normalizeMarkdownUrl(raw);
    if (!normalized) {
      continue;
    }
    urls.push(normalized);
  }

  return urls;
}

export function extractGithubRepo(html: string):
  | { owner: string; repo: string }
  | null {
  const regex = /https?:\/\/github\.com\/[^"'\s)]+/gi;

  for (const match of html.matchAll(regex)) {
    const raw = match[0];
    if (!raw) {
      continue;
    }
    let url: URL;
    try {
      url = new URL(raw);
    } catch {
      continue;
    }

    const segments = url.pathname.split("/").filter(Boolean);
    if (segments.length < 2) {
      continue;
    }

    const owner = segments[0] ?? "";
    let repo = segments[1] ?? "";
    if (!owner || !repo) {
      continue;
    }

    repo = repo.replace(/\.git$/i, "");
    return { owner, repo };
  }

  return null;
}

export function buildProbeUrls(
  owner: string,
  repo: string,
  branches: string[],
  paths: string[],
): string[] {
  const urls: string[] = [];
  for (const branch of branches) {
    for (const path of paths) {
      urls.push(
        `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${path}`,
      );
    }
  }
  return urls;
}
