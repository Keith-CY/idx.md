import { parse } from "yaml";
import { z } from "zod";

const SourceSchema = z.object({
  type: z.string().min(1),
  slug: z.string().min(1),
  source_url: z.string().min(1),
  title: z.string().min(1).optional(),
  summary: z.string().min(1).optional(),
  tags: z.array(z.string().min(1)).optional(),
  license: z.string().min(1).optional(),
  upstream_ref: z.string().min(1).optional(),
});

const SourcesSchema = z.array(SourceSchema);
const sourcesPath = new URL("../data/sources.yml", import.meta.url);

const errors: string[] = [];
let sources: z.infer<typeof SourcesSchema> = [];

try {
  const raw = await Bun.file(sourcesPath).text();
  const parsed = parse(raw);
  const result = SourcesSchema.safeParse(parsed);

  if (!result.success) {
    for (const issue of result.error.issues) {
      const path = issue.path.length ? issue.path.join(".") : "(root)";
      errors.push(`${path}: ${issue.message}`);
    }
  } else {
    sources = result.data;
  }
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  errors.push(`Failed to read or parse data/sources.yml: ${message}`);
}

if (errors.length > 0) {
  console.error("Source registry validation errors:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Sources: ${sources.length}`);
