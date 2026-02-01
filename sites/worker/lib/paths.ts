export function toR2Key(pathname: string): string {
  const trimmed = pathname.trim();
  if (!trimmed || trimmed === "/") {
    return "index.md";
  }

  const withoutLeading = trimmed.startsWith("/")
    ? trimmed.slice(1)
    : trimmed;

  if (withoutLeading.endsWith("/")) {
    return `${withoutLeading}index.md`;
  }

  if (withoutLeading.toLowerCase().endsWith(".md")) {
    return withoutLeading;
  }

  return `${withoutLeading}.md`;
}
