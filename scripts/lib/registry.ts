import { parse } from "yaml";
import { z } from "zod";

export const SOURCES_REGISTRY_PATH = new URL(
  "../../data/sources.yml",
  import.meta.url,
);
export const SOURCES_REGISTRY_PATHS = [
  SOURCES_REGISTRY_PATH,
  new URL("../../data/sources-openclaw.yml", import.meta.url),
];

const PathSegmentSchema = z
  .string()
  .min(1)
  .regex(/^[a-z0-9][a-z0-9-]*$/, "Invalid path segment");

const SourceSchema = z
  .object({
    type: PathSegmentSchema,
    slug: PathSegmentSchema,
    source_url: z.string().url(),
    title: z.string().min(1).optional(),
    summary: z.string().min(1).optional(),
    tags: z.array(z.string().min(1)).optional(),
    license: z.string().min(1).optional(),
    upstream_ref: z.string().min(1).optional(),
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

export async function loadSources(
  sourcesPaths: URL | URL[] = SOURCES_REGISTRY_PATHS,
): Promise<RegistryParseResult> {
  const paths = Array.isArray(sourcesPaths) ? sourcesPaths : [sourcesPaths];
  const merged: SourceEntry[] = [];
  const errors: string[] = [];
  const seen = new Map<string, string>();

  for (const [index, sourcesPath] of paths.entries()) {
    const parseResult = await loadSourcesFile(sourcesPath);
    if (!parseResult.ok) {
      const isOptional =
        sourcesPath.href === SOURCES_REGISTRY_PATHS[1]?.href || index > 0;
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
  const errors: string[] = [];
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
    const parsed = parse(raw);
    const result = SourcesSchema.safeParse(parsed);

    if (!result.success) {
      for (const issue of result.error.issues) {
        const path = issue.path.length ? issue.path.join(".") : "(root)";
        errors.push(`${label} ${path}: ${issue.message}`);
      }
      return { ok: false, errors, missing: false, label };
    }

    return { ok: true, sources: result.data, label };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    errors.push(`Failed to read or parse ${label}: ${message}`);
    return { ok: false, errors, missing: false, label };
  }
}
