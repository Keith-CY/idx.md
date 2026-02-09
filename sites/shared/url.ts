export function normalizeOrigin(origin: string): string {
  return origin.trim().replace(/\/+$/, "");
}

