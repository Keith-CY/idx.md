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
