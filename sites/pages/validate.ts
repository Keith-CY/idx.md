import { createHash } from "crypto";
import { readdir, stat } from "fs/promises";
import { join, resolve } from "path";
import { parse } from "yaml";
import { fileURLToPath } from "url";
import { loadSources, SOURCES_REGISTRY_PATHS } from "./lib/registry";

const ENTRIES_ROOT = new URL("../entries/", import.meta.url);
const ENTRIES_ROOT_PATH = resolve(fileURLToPath(ENTRIES_ROOT));

const REQUIRED_HEAD_FIELDS = [
  "stable_id",
  "type",
  "title",
  "summary",
  "tags",
  "source_url",
  "license",
  "upstream_ref",
  "retrieved_at",
  "content_sha256",
];

type Frontmatter = Record<string, unknown>;

function computeSha256(bytes: Uint8Array): string {
  return createHash("sha256").update(bytes).digest("hex");
}

function isRecord(value: unknown): value is Frontmatter {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function stripFrontmatterPreamble(text: string): string {
  let output = text;
  if (output.charCodeAt(0) === 0xfeff) {
    output = output.slice(1);
  }
  output = output.replace(/^(?:\s*\r?\n)+/, "");
  return output;
}

function parseFrontmatter(text: string): {
  ok: true;
  frontmatter: Frontmatter;
} | { ok: false; error: string } {
  const normalized = stripFrontmatterPreamble(text);
  const lines = normalized.split(/\r?\n/);
  if (lines[0] !== "---") {
    return { ok: false, error: "HEAD.md must start with --- frontmatter" };
  }

  let endIndex = -1;
  for (let index = 1; index < lines.length; index += 1) {
    if (lines[index] === "---") {
      endIndex = index;
      break;
    }
  }

  if (endIndex === -1) {
    return { ok: false, error: "HEAD.md frontmatter is missing closing ---" };
  }

  const yamlText = lines.slice(1, endIndex).join("\n");
  try {
    const parsed = parse(yamlText);
    if (!isRecord(parsed)) {
      return { ok: false, error: "HEAD.md frontmatter must be a mapping" };
    }
    return { ok: true, frontmatter: parsed };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return { ok: false, error: `Failed to parse frontmatter: ${message}` };
  }
}

async function fileExists(path: string): Promise<boolean> {
  try {
    const stats = await stat(path);
    return stats.isFile();
  } catch {
    return false;
  }
}

async function dirExists(path: string): Promise<boolean> {
  try {
    const stats = await stat(path);
    return stats.isDirectory();
  } catch {
    return false;
  }
}

const errors: string[] = [];

const registry = await loadSources(SOURCES_REGISTRY_PATHS);
if (!registry.ok) {
  errors.push("Source registry validation errors:");
  for (const error of registry.errors) {
    errors.push(`- ${error}`);
  }
} else {
  console.log(`Sources: ${registry.sources.length}`);
}

if (!(await dirExists(ENTRIES_ROOT_PATH))) {
  console.warn("No entries directory found; skipping entry validation.");
  if (errors.length > 0) {
    for (const error of errors) {
      console.error(error);
    }
    process.exit(1);
  }
  process.exit(0);
}

const typeDirs = await readdir(ENTRIES_ROOT_PATH, { withFileTypes: true });
if (typeDirs.length === 0) {
  console.warn("No entry types found; skipping entry validation.");
}

for (const typeDir of typeDirs) {
  if (!typeDir.isDirectory()) {
    continue;
  }
  const typeName = typeDir.name;
  const typePath = join(ENTRIES_ROOT_PATH, typeName);
  const slugDirs = await readdir(typePath, { withFileTypes: true });

  for (const slugDir of slugDirs) {
    if (!slugDir.isDirectory()) {
      continue;
    }
    const slugName = slugDir.name;
    const entryPath = join(typePath, slugName);
    const headPath = join(entryPath, "HEAD.md");
    const bodyPath = join(entryPath, "BODY.md");

    if (!(await fileExists(headPath))) {
      errors.push(`Missing HEAD.md for ${typeName}/${slugName}`);
      continue;
    }
    if (!(await fileExists(bodyPath))) {
      errors.push(`Missing BODY.md for ${typeName}/${slugName}`);
      continue;
    }

    const headText = await Bun.file(headPath).text();
    const parsed = parseFrontmatter(headText);
    if (!parsed.ok) {
      errors.push(`Invalid HEAD.md for ${typeName}/${slugName}: ${parsed.error}`);
      continue;
    }

    const frontmatter = parsed.frontmatter;
    for (const field of REQUIRED_HEAD_FIELDS) {
      if (!(field in frontmatter)) {
        errors.push(
          `HEAD.md missing required field "${field}" for ${typeName}/${slugName}`,
        );
      }
    }

    if (typeof frontmatter.stable_id !== "string" || !frontmatter.stable_id) {
      errors.push(`HEAD.md stable_id must be a string for ${typeName}/${slugName}`);
    }
    if (typeof frontmatter.type !== "string" || !frontmatter.type) {
      errors.push(`HEAD.md type must be a string for ${typeName}/${slugName}`);
    }
    if (typeof frontmatter.title !== "string") {
      errors.push(`HEAD.md title must be a string for ${typeName}/${slugName}`);
    }
    if (typeof frontmatter.summary !== "string") {
      errors.push(`HEAD.md summary must be a string for ${typeName}/${slugName}`);
    }
    if (!Array.isArray(frontmatter.tags)) {
      errors.push(`HEAD.md tags must be an array for ${typeName}/${slugName}`);
    } else if (!frontmatter.tags.every((tag) => typeof tag === "string")) {
      errors.push(`HEAD.md tags must be strings for ${typeName}/${slugName}`);
    }
    if (typeof frontmatter.source_url !== "string") {
      errors.push(`HEAD.md source_url must be a string for ${typeName}/${slugName}`);
    }
    if (typeof frontmatter.license !== "string") {
      errors.push(`HEAD.md license must be a string for ${typeName}/${slugName}`);
    }
    if (typeof frontmatter.upstream_ref !== "string") {
      errors.push(`HEAD.md upstream_ref must be a string for ${typeName}/${slugName}`);
    }
    if (typeof frontmatter.retrieved_at !== "string") {
      errors.push(
        `HEAD.md retrieved_at must be a string for ${typeName}/${slugName}`,
      );
    }

    const bodyBytes = new Uint8Array(await Bun.file(bodyPath).arrayBuffer());
    const computed = computeSha256(bodyBytes);
    const recorded =
      typeof frontmatter.content_sha256 === "string"
        ? frontmatter.content_sha256.toLowerCase()
        : "";

    if (!recorded) {
      errors.push(
        `HEAD.md content_sha256 must be a string for ${typeName}/${slugName}`,
      );
    } else if (!/^[a-f0-9]{64}$/.test(recorded)) {
      errors.push(
        `HEAD.md content_sha256 must be 64 hex chars for ${typeName}/${slugName}`,
      );
    } else if (computed !== recorded) {
      errors.push(
        `content_sha256 mismatch for ${typeName}/${slugName} (expected ${recorded}, got ${computed})`,
      );
    }

  }
}

if (errors.length > 0) {
  for (const error of errors) {
    console.error(error);
  }
  process.exit(1);
}

console.log("OK");
