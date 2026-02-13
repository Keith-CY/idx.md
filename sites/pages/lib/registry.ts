import { readdir } from "fs/promises";
import { resolve } from "path";
import { parse } from "yaml";
import { pathToFileURL } from "url";
import { z } from "zod";
import { repoRoot } from "./paths";
import { validateSourceUrl } from "./source-url";

export const SOURCES_DIR = resolve(repoRoot, "sources");
export const GENERAL_SOURCES_PATH = pathToFileURL(
  resolve(SOURCES_DIR, "general.yml"),
);

export async function getSourcesRegistryPaths(): Promise<URL[]> {
  let entries: string[] = [];
  try {
    const dirents = await readdir(SOURCES_DIR, { withFileTypes: true });
    entries = dirents
      .filter((dirent) => dirent.isFile() && dirent.name.endsWith(".yml"))
      .map((dirent) => resolve(SOURCES_DIR, dirent.name));
  } catch (error) {
    if ((error as { code?: string })?.code !== "ENOENT") {
      console.warn(
        `Warning: could not read sources directory '${SOURCES_DIR}'`,
        error,
      );
    }
    entries = [];
  }

  const paths = entries.map((entry) => pathToFileURL(entry));
  const hasGeneral = paths.some(
    (path) => path.href === GENERAL_SOURCES_PATH.href,
  );
  if (!hasGeneral) {
    paths.unshift(GENERAL_SOURCES_PATH);
  }
  return paths;
}

const PathSegmentSchema = z
  .string()
  .min(1)
  .regex(/^[a-z0-9][a-z0-9-]*$/, "Invalid path segment");

const SourceUrlSchema = z.string().superRefine((value, ctx) => {
  const result = validateSourceUrl(value);
  if (!result.ok) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, message: result.reason });
  }
});

const SourceSchema = z
  .object({
    type: PathSegmentSchema,
    slug: PathSegmentSchema,
    source_url: SourceUrlSchema,
    title: z.string().min(1).optional(),
    summary: z.string().min(1).optional(),
    tags: z.array(z.string().min(1)).optional(),
    license: z.string().min(1).optional(),
    upstream_ref: z.string().min(1).optional(),
    github_stars: z.number().int().min(0).optional(),
    github_forks: z.number().int().min(0).optional(),
    github_is_organization: z.boolean().optional(),
  })
  .strict();

const SourcesSchema = z.array(SourceSchema);

export type SourceEntry = z.infer<typeof SourceSchema>;

export type RegistryParseResult =
  | { ok: true; sources: SourceEntry[] }
  | { ok: false; errors: string[] };

type RegistryFileResult =
  | { ok: true; sources: SourceEntry[]; label: string }
  | { ok: false; errors: string[]; missing: boolean; label: string };

export function parseSourcesText(
  raw: string,
  label: string,
): RegistryParseResult {
  try {
    const parsed = parse(raw);
    const result = SourcesSchema.safeParse(parsed);
    if (!result.success) {
      const errors = result.error.issues.map((issue) => {
        const path = issue.path.length ? issue.path.join(".") : "(root)";
        return `${label} ${path}: ${issue.message}`;
      });
      return { ok: false, errors };
    }
    return { ok: true, sources: result.data };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return {
      ok: false,
      errors: [`Failed to read or parse ${label}: ${message}`],
    };
  }
}

export async function loadSources(
  sourcesPaths?: URL | URL[],
): Promise<RegistryParseResult> {
  const resolvedPaths =
    sourcesPaths === undefined
      ? await getSourcesRegistryPaths()
      : Array.isArray(sourcesPaths)
        ? sourcesPaths
        : [sourcesPaths];
  const paths = resolvedPaths;
  const merged: SourceEntry[] = [];
  const errors: string[] = [];
  const seen = new Map<string, string>();

  for (const [index, sourcesPath] of paths.entries()) {
    const parseResult = await loadSourcesFile(sourcesPath);
    if (!parseResult.ok) {
      const isOptional = sourcesPath.href !== GENERAL_SOURCES_PATH.href;
      if (parseResult.missing && isOptional) {
        console.warn(`Skipping missing optional registry: ${parseResult.label}`);
        continue;
      }
      errors.push(...parseResult.errors);
      continue;
    }

    for (const source of parseResult.sources) {
      const id = `${source.type}/${source.slug}`;
      const existing = seen.get(id);
      if (existing) {
        errors.push(
          `Duplicate entry ${id} found in ${parseResult.label}; already defined in ${existing}`,
        );
        continue;
      }
      seen.set(id, parseResult.label);
      merged.push(source);
    }
  }

  if (errors.length > 0) {
    return { ok: false, errors };
  }

  return { ok: true, sources: merged };
}

async function loadSourcesFile(sourcesPath: URL): Promise<RegistryFileResult> {
  const label = sourcesPath.pathname || sourcesPath.toString();

  try {
    const file = Bun.file(sourcesPath);
    const exists = await file.exists();
    if (!exists) {
      return {
        ok: false,
        errors: [`Missing registry file: ${label}`],
        missing: true,
        label,
      };
    }

    const raw = await file.text();
    const result = parseSourcesText(raw, label);
    if (!result.ok) {
      return { ok: false, errors: result.errors, missing: false, label };
    }

    return { ok: true, sources: result.sources, label };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return {
      ok: false,
      errors: [`Failed to read or parse ${label}: ${message}`],
      missing: false,
      label,
    };
  }
}
