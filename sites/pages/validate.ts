import { createHash } from "crypto";
import { readdir, stat } from "fs/promises";
import { join, resolve } from "path";
import { parse } from "yaml";
import { loadSources } from "./lib/registry";
import { DATA_ROOT } from "./lib/data-layout";

const DATA_ROOT_PATH = resolve(DATA_ROOT);
const INDEX_PATH = resolve(DATA_ROOT, "index.md");

const REQUIRED_HEAD_FIELDS = [
  "stable_id",
  "type",
  "title",
  "summary",
  "tags",
  "source_url",
  "license",
  "upstream_ref",
  "github_stars",
  "github_forks",
  "github_is_organization",
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

const registry = await loadSources();
if (!registry.ok) {
  errors.push("Source registry validation errors:");
  for (const error of registry.errors) {
    errors.push(`- ${error}`);
  }
} else {
  console.log(`Sources: ${registry.sources.length}`);
}

if (!(await dirExists(DATA_ROOT_PATH))) {
  console.warn("No data directory found; skipping entry validation.");
  if (errors.length > 0) {
    for (const error of errors) {
      console.error(error);
    }
    process.exit(1);
  }
  process.exit(0);
}

const indexExists = await fileExists(INDEX_PATH);
if (!indexExists) {
  errors.push(`Missing data index: ${INDEX_PATH}`);
}

const RESERVED_DATA_DIRS = new Set(["reports", "category", "scenario", "industry"]);

const topicDirs = await readdir(DATA_ROOT_PATH, { withFileTypes: true });
const topics = topicDirs
  .filter(
    (dirent) =>
      dirent.isDirectory() &&
      !dirent.name.startsWith(".") &&
      !RESERVED_DATA_DIRS.has(dirent.name),
  )
  .map((dirent) => dirent.name);

if (topics.length === 0) {
  console.warn("No data topics found; skipping entry validation.");
}

for (const topic of topics) {
  const entryPath = join(DATA_ROOT_PATH, topic);
  const headPath = join(entryPath, "HEAD.md");
  const bodyPath = join(entryPath, "BODY.md");

  if (!(await fileExists(headPath))) {
    errors.push(`Missing HEAD.md for ${topic}`);
    continue;
  }
  if (!(await fileExists(bodyPath))) {
    errors.push(`Missing BODY.md for ${topic}`);
    continue;
  }

  const headText = await Bun.file(headPath).text();
  const parsed = parseFrontmatter(headText);
  if (!parsed.ok) {
    errors.push(`Invalid HEAD.md for ${topic}: ${parsed.error}`);
    continue;
  }

  const frontmatter = parsed.frontmatter;
  for (const field of REQUIRED_HEAD_FIELDS) {
    if (!(field in frontmatter)) {
      errors.push(`HEAD.md missing required field "${field}" for ${topic}`);
    }
  }

  if (typeof frontmatter.stable_id !== "string" || !frontmatter.stable_id) {
    errors.push(`HEAD.md stable_id must be a string for ${topic}`);
  }
  if (typeof frontmatter.type !== "string" || !frontmatter.type) {
    errors.push(`HEAD.md type must be a string for ${topic}`);
  }
  if (typeof frontmatter.title !== "string") {
    errors.push(`HEAD.md title must be a string for ${topic}`);
  }
  if (typeof frontmatter.summary !== "string") {
    errors.push(`HEAD.md summary must be a string for ${topic}`);
  }
  if (!Array.isArray(frontmatter.tags)) {
    errors.push(`HEAD.md tags must be an array for ${topic}`);
  } else if (!frontmatter.tags.every((tag) => typeof tag === "string")) {
    errors.push(`HEAD.md tags must be strings for ${topic}`);
  }
  if (typeof frontmatter.source_url !== "string") {
    errors.push(`HEAD.md source_url must be a string for ${topic}`);
  }
  if (typeof frontmatter.license !== "string") {
    errors.push(`HEAD.md license must be a string for ${topic}`);
  }
  if (typeof frontmatter.upstream_ref !== "string") {
    errors.push(`HEAD.md upstream_ref must be a string for ${topic}`);
  }
  if (
    frontmatter.github_stars !== null &&
    (typeof frontmatter.github_stars !== "number" ||
      !Number.isInteger(frontmatter.github_stars) ||
      frontmatter.github_stars < 0)
  ) {
    errors.push(
      `HEAD.md github_stars must be a non-negative integer or null for ${topic}`,
    );
  }
  if (
    frontmatter.github_forks !== null &&
    (typeof frontmatter.github_forks !== "number" ||
      !Number.isInteger(frontmatter.github_forks) ||
      frontmatter.github_forks < 0)
  ) {
    errors.push(
      `HEAD.md github_forks must be a non-negative integer or null for ${topic}`,
    );
  }
  if (
    frontmatter.github_is_organization !== null &&
    typeof frontmatter.github_is_organization !== "boolean"
  ) {
    errors.push(`HEAD.md github_is_organization must be a boolean or null for ${topic}`);
  }
  if (typeof frontmatter.retrieved_at !== "string") {
    errors.push(`HEAD.md retrieved_at must be a string for ${topic}`);
  }

  const bodyBytes = new Uint8Array(await Bun.file(bodyPath).arrayBuffer());
  const computed = computeSha256(bodyBytes);
  const recorded =
    typeof frontmatter.content_sha256 === "string"
      ? frontmatter.content_sha256.toLowerCase()
      : "";

  if (!recorded) {
    errors.push(`HEAD.md content_sha256 must be a string for ${topic}`);
  } else if (!/^[a-f0-9]{64}$/.test(recorded)) {
    errors.push(`HEAD.md content_sha256 must be 64 hex chars for ${topic}`);
  } else if (computed !== recorded) {
    errors.push(
      `content_sha256 mismatch for ${topic} (expected ${recorded}, got ${computed})`,
    );
  }
}

if (errors.length > 0) {
  for (const error of errors) {
    console.error(error);
  }
  process.exit(1);
}

console.log("OK");
