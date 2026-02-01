export function toR2Key(pathname: string): string {
  let path = pathname.trim().replace(/^\/+/, "");

  if (path === "" || path === "data" || path === "data/") {
    return "data/index.md";
  }

  if (!path.startsWith("data/")) {
    path = `data/${path}`;
  }

  if (path.endsWith("/")) {
    return `${path}HEAD.md`;
  }

  if (!path.toLowerCase().endsWith(".md")) {
    return `${path}/HEAD.md`;
  }

  return path;
}
