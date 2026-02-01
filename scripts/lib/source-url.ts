export type UrlValidationResult =
  | { ok: true; url: URL }
  | { ok: false; reason: string };

export function validateSourceUrl(value: string): UrlValidationResult {
  let url: URL;
  try {
    url = new URL(value);
  } catch (error) {
    return {
      ok: false,
      reason: `Invalid URL (${error instanceof Error ? error.message : String(error)})`,
    };
  }

  const pathname = url.pathname.toLowerCase();
  if (!pathname.endsWith(".md")) {
    return { ok: false, reason: "URL must end with .md" };
  }

  if (url.hostname === "github.com" || url.hostname === "www.github.com") {
    return { ok: false, reason: "GitHub URLs must use raw.githubusercontent.com" };
  }

  return { ok: true, url };
}

export function normalizeGithubRawUrl(value: string): string | null {
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    return null;
  }

  if (url.hostname !== "github.com" && url.hostname !== "www.github.com") {
    return null;
  }

  const parts = url.pathname.split("/").filter(Boolean);
  if (parts.length < 5) {
    return null;
  }

  const [owner, repo, mode, branch, ...pathParts] = parts;
  if (!owner || !repo || !branch || mode !== "raw") {
    return null;
  }

  if (pathParts.length === 0) {
    return null;
  }

  return `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${pathParts.join("/")}`;
}
