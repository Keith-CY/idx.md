export function toR2Key(pathname: string): string {
  let path = pathname.trim().replace(/^\/+/, "");
  const lower = path.toLowerCase();

  if (path === "") {
    return "data/SKILL.md";
  }

  if (lower === "skill.md") {
    return "data/SKILL.md";
  }

  if (path === "data" || path === "data/") {
    return "data/index.md";
  }

  if (!path.startsWith("data/")) {
    path = `data/${path}`;
  }

  if (path.endsWith("/")) {
    return `${path}HEAD.md`;
  }

  const normalized = path.toLowerCase();
  if (!normalized.endsWith(".md") && !normalized.endsWith(".json")) {
    return `${path}/HEAD.md`;
  }

  return path;
}
