import { parse } from "yaml";
import { z } from "zod";

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
  sourcesPath = new URL("../../data/sources.yml", import.meta.url),
): Promise<RegistryParseResult> {
  const errors: string[] = [];

  try {
    const raw = await Bun.file(sourcesPath).text();
    const parsed = parse(raw);
    const result = SourcesSchema.safeParse(parsed);

    if (!result.success) {
      for (const issue of result.error.issues) {
        const path = issue.path.length ? issue.path.join(".") : "(root)";
        errors.push(`${path}: ${issue.message}`);
      }
      return { ok: false, errors };
    }

    return { ok: true, sources: result.data };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    errors.push(`Failed to read or parse data/sources.yml: ${message}`);
    return { ok: false, errors };
  }
}
