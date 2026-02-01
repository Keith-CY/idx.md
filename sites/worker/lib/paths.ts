export function toR2Key(pathname: string): string {
  const trimmed = pathname.trim();
  if (!trimmed || trimmed === "/") {
    return "data/index.md";
  }

  const withoutLeading = trimmed.startsWith("/")
    ? trimmed.slice(1)
    : trimmed;

  if (withoutLeading === "data" || withoutLeading === "data/") {
    return "data/index.md";
  }

  if (withoutLeading.startsWith("data/")) {
    const rest = withoutLeading.slice("data/".length);
    if (!rest) {
      return "data/index.md";
    }
    if (rest.endsWith("/")) {
      return `data/${rest}HEAD.md`;
    }
    return withoutLeading;
  }

  if (withoutLeading.endsWith("/")) {
    return `data/${withoutLeading}HEAD.md`;
  }

  if (withoutLeading.toLowerCase().endsWith(".md")) {
    return `data/${withoutLeading}`;
  }

  return `data/${withoutLeading}/HEAD.md`;
}
