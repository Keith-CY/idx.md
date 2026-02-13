import { createHash } from "crypto";
import { readdir } from "fs/promises";
import { resolve } from "path";
import { stringify } from "yaml";
import { parseSourcesText, type SourceEntry } from "./registry";

export type UrlCheckResult = { ok: boolean; status: number | null };

const DEFAULT_SCHEMA_HEADER = `# Schema: list of source entries\n# - type: string\n#   slug: string\n#   source_url: string\n#   title: string (optional)\n#   summary: string (optional)\n#   tags: [string] (optional)\n#   license: string (optional)\n#   upstream_ref: string (optional)\n#   github_stars: number (optional)\n#   github_forks: number (optional)\n#   github_is_organization: boolean (optional)\n`;

export function diffRemovedByUrl(
  previous: SourceEntry[],
  next: SourceEntry[],
): SourceEntry[] {
  const nextUrls = new Set(next.map((entry) => entry.source_url));
  const nextIds = new Set(next.map((entry) => `${entry.type}/${entry.slug}`));
  return previous.filter(
    (entry) =>
      !nextUrls.has(entry.source_url) &&
      !nextIds.has(`${entry.type}/${entry.slug}`),
  );
}

function shortHash(value: string): string {
  return createHash("sha256").update(value).digest("hex").slice(0, 8);
}

function uniqueSlug(
  type: string,
  base: string,
  url: string,
  used: Map<string, string>,
): string {
  const key = `${type}/${base}`;
  const existing = used.get(key);
  if (!existing) {
    used.set(key, url);
    return base;
  }
  if (existing === url) {
    return base;
  }
  const hash = shortHash(url);
  let candidate = `${base}-${hash}`;
  let counter = 2;
  while (used.has(`${type}/${candidate}`)) {
    candidate = `${base}-${hash}-${counter}`;
    counter += 1;
  }
  used.set(`${type}/${candidate}`, url);
  return candidate;
}

function extractHeader(raw: string): string | null {
  const lines = raw.split(/\r?\n/);
  const headerLines: string[] = [];
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed === "" || trimmed.startsWith("#")) {
      headerLines.push(line);
      continue;
    }
    break;
  }
  if (headerLines.length === 0) {
    return null;
  }
  return `${headerLines.join("\n")}\n`;
}

export type ReadSourcesFileResult = {
  ok: boolean;
  missing: boolean;
  sources: SourceEntry[];
  errors: string[];
  header: string | null;
};

export async function readSourcesFileResult(
  path: string,
): Promise<ReadSourcesFileResult> {
  try {
    const file = Bun.file(path);
    const exists = await file.exists();
    if (!exists) {
      return {
        ok: false,
        missing: true,
        sources: [],
        errors: [],
        header: null,
      };
    }
    const raw = await file.text();
    const header = extractHeader(raw);
    const result = parseSourcesText(raw, path);
    if (!result.ok) {
      return {
        ok: false,
        missing: false,
        sources: [],
        errors: result.errors,
        header,
      };
    }
    return {
      ok: true,
      missing: false,
      sources: result.sources,
      errors: [],
      header,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return {
      ok: false,
      missing: false,
      sources: [],
      errors: [`Failed to read or parse ${path}: ${message}`],
      header: null,
    };
  }
}

export async function readSourcesFile(
  path: string,
): Promise<SourceEntry[] | null> {
  const result = await readSourcesFileResult(path);
  if (result.ok) {
    return result.sources;
  }
  if (!result.missing) {
    for (const error of result.errors) {
      console.warn(error);
    }
  }
  return null;
}

export async function writeSourcesFile(
  path: string,
  entries: SourceEntry[],
  header: string,
): Promise<void> {
  const safeHeader = header.trim().length > 0 ? header : DEFAULT_SCHEMA_HEADER;
  const payload = `${safeHeader}${stringify(entries)}`;
  await Bun.write(path, payload);
}

export async function collectExistingUrls(
  sourcesDir: string,
  excludePath: string,
  nextEntries: SourceEntry[],
): Promise<Set<string>> {
  const urls = new Set(nextEntries.map((entry) => entry.source_url));
  let dirents: Array<{ name: string; isFile: () => boolean }> = [];
  try {
    dirents = await readdir(sourcesDir, { withFileTypes: true });
  } catch (error) {
    console.warn(`Warning: could not read sources directory '${sourcesDir}'`, error);
    return urls;
  }

  const exclude = resolve(excludePath);
  for (const dirent of dirents) {
    if (!dirent.isFile() || !dirent.name.endsWith(".yml")) {
      continue;
    }
    const filePath = resolve(sourcesDir, dirent.name);
    if (filePath === exclude) {
      continue;
    }
    const entries = await readSourcesFile(filePath);
    if (!entries) {
      continue;
    }
    for (const entry of entries) {
      urls.add(entry.source_url);
    }
  }

  return urls;
}

export async function checkUrlWithCurl(url: string): Promise<UrlCheckResult> {
  try {
    const process = Bun.spawn(
      [
        "curl",
        "-sS",
        "-L",
        "-o",
        "/dev/null",
        "-w",
        "%{http_code}",
        "--max-time",
        "15",
        "-r",
        "0-0",
        url,
      ],
      {
        stdout: "pipe",
        stderr: "pipe",
      },
    );
    const [statusText, exitCode] = await Promise.all([
      new Response(process.stdout).text(),
      process.exited,
    ]);
    if (exitCode !== 0) {
      return { ok: false, status: null };
    }
    const trimmed = statusText.trim();
    const status = Number(trimmed);
    if (!Number.isFinite(status) || status === 0) {
      return { ok: false, status: null };
    }
    return { ok: status === 200 || status === 206, status };
  } catch {
    return { ok: false, status: null };
  }
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
    usedSlugs.set(`${entry.type}/${entry.slug}`, entry.source_url);
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

    let check: UrlCheckResult;
    try {
      check = await opts.checkUrl(entry.source_url);
    } catch {
      stats.curlFailed += 1;
      continue;
    }
    if (!check.ok) {
      stats.curlFailed += 1;
      continue;
    }

    stats.reachable += 1;
    const slugKey = `${entry.type}/${entry.slug}`;
    let newSlug = entry.slug;
    if (usedSlugs.has(slugKey)) {
      const unique = uniqueSlug(
        entry.type,
        entry.slug,
        entry.source_url,
        usedSlugs,
      );
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
    usedSlugs.set(`${migrated.type}/${migrated.slug}`, entry.source_url);
    stats.migrated += 1;
  }

  return {
    added,
    updatedGeneral: [...opts.generalEntries, ...added],
    stats,
  };
}

export async function migrateRemovedSourcesFromFiles(opts: {
  previousPath: string;
  nextEntries: SourceEntry[];
  generalPath: string;
  sourcesDir: string;
  checkUrl?: (url: string) => Promise<UrlCheckResult>;
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
  const previousResult = await readSourcesFileResult(opts.previousPath);
  if (!previousResult.ok && !previousResult.missing) {
    throw new Error(previousResult.errors.join("\n"));
  }
  const generalResult = await readSourcesFileResult(opts.generalPath);
  if (!generalResult.ok && !generalResult.missing) {
    throw new Error(generalResult.errors.join("\n"));
  }

  const previousEntries = previousResult.ok ? previousResult.sources : [];
  const generalEntries = generalResult.ok ? generalResult.sources : [];
  const header = generalResult.header ?? DEFAULT_SCHEMA_HEADER;

  const removed = diffRemovedByUrl(previousEntries, opts.nextEntries);
  const existingUrls = await collectExistingUrls(
    opts.sourcesDir,
    opts.previousPath,
    opts.nextEntries,
  );
  const result = await planGeneralMigration({
    removed,
    generalEntries,
    existingUrls,
    checkUrl: opts.checkUrl ?? checkUrlWithCurl,
  });

  if (result.added.length > 0) {
    await writeSourcesFile(opts.generalPath, result.updatedGeneral, header);
  }

  return result;
}
