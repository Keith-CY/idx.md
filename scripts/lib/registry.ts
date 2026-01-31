import { parse } from "yaml";
import { z } from "zod";

export const SOURCES_REGISTRY_PATHS = [
  new URL("../../data/sources.yml", import.meta.url),
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

export async function loadSources(
  sourcesPaths: URL | URL[] = SOURCES_REGISTRY_PATHS,
): Promise<RegistryParseResult> {
  const paths = Array.isArray(sourcesPaths) ? sourcesPaths : [sourcesPaths];
  const merged: SourceEntry[] = [];
  const errors: string[] = [];

  for (const sourcesPath of paths) {
    const parseResult = await loadSourcesFile(sourcesPath);
    if (!parseResult.ok) {
      errors.push(...parseResult.errors);
      continue;
    }
    merged.push(...parseResult.sources);
  }

  if (errors.length > 0) {
    return { ok: false, errors };
  }

  return { ok: true, sources: merged };
}

async function loadSourcesFile(sourcesPath: URL): Promise<RegistryParseResult> {
  const errors: string[] = [];
  const label = sourcesPath.pathname || sourcesPath.toString();

  try {
    const raw = await Bun.file(sourcesPath).text();
    const parsed = parse(raw);
    const result = SourcesSchema.safeParse(parsed);

    if (!result.success) {
      for (const issue of result.error.issues) {
        const path = issue.path.length ? issue.path.join(".") : "(root)";
        errors.push(`${label} ${path}: ${issue.message}`);
      }
      return { ok: false, errors };
    }

    return { ok: true, sources: result.data };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    errors.push(`Failed to read or parse ${label}: ${message}`);
    return { ok: false, errors };
  }
}
