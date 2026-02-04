import { createHash } from "crypto";
import type { SourceEntry } from "./registry";

export type UrlCheckResult = { ok: boolean; status: number | null };

export function diffRemovedByUrl(
  previous: SourceEntry[],
  next: SourceEntry[],
): SourceEntry[] {
  const nextUrls = new Set(next.map((entry) => entry.source_url));
  return previous.filter((entry) => !nextUrls.has(entry.source_url));
}

function shortHash(value: string): string {
  return createHash("sha256").update(value).digest("hex").slice(0, 8);
}

function uniqueSlug(
  base: string,
  url: string,
  used: Map<string, string>,
): string {
  const existing = used.get(base);
  if (!existing) {
    used.set(base, url);
    return base;
  }
  if (existing === url) {
    return base;
  }
  const hash = shortHash(url);
  let candidate = `${base}-${hash}`;
  let counter = 2;
  while (used.has(candidate)) {
    candidate = `${base}-${hash}-${counter}`;
    counter += 1;
  }
  used.set(candidate, url);
  return candidate;
}

export async function planGeneralMigration(opts: {
  removed: SourceEntry[];
  generalEntries: SourceEntry[];
  existingUrls: Set<string>;
  checkUrl: (url: string) => Promise<UrlCheckResult>;
}): Promise<{
  added: SourceEntry[];
  updatedGeneral: SourceEntry[];
  stats: {
    removedTotal: number;
    reachable: number;
    migrated: number;
    duplicatesSkipped: number;
    slugCollisions: number;
    curlFailed: number;
  };
}> {
  const usedSlugs = new Map<string, string>();
  for (const entry of opts.generalEntries) {
    usedSlugs.set(entry.slug, entry.source_url);
  }

  const added: SourceEntry[] = [];
  const stats = {
    removedTotal: opts.removed.length,
    reachable: 0,
    migrated: 0,
    duplicatesSkipped: 0,
    slugCollisions: 0,
    curlFailed: 0,
  };

  for (const entry of opts.removed) {
    if (opts.existingUrls.has(entry.source_url)) {
      stats.duplicatesSkipped += 1;
      continue;
    }

    const check = await opts.checkUrl(entry.source_url);
    if (!check.ok) {
      stats.curlFailed += 1;
      continue;
    }

    stats.reachable += 1;
    const slugKey = entry.slug;
    let newSlug = entry.slug;
    if (usedSlugs.has(slugKey)) {
      const unique = uniqueSlug(entry.slug, entry.source_url, usedSlugs);
      if (unique !== entry.slug) {
        stats.slugCollisions += 1;
        newSlug = unique;
      }
    } else {
      usedSlugs.set(slugKey, entry.source_url);
    }

    const migrated: SourceEntry = { ...entry, slug: newSlug };
    added.push(migrated);
    opts.existingUrls.add(entry.source_url);
    usedSlugs.set(migrated.slug, entry.source_url);
    stats.migrated += 1;
  }

  return {
    added,
    updatedGeneral: [...opts.generalEntries, ...added],
    stats,
  };
}
