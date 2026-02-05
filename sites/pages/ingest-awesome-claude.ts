import { createHash } from "crypto";
import { mkdtemp, rm } from "fs/promises";
import { resolve } from "path";
import { parse } from "yaml";
import type { SourceEntry } from "./lib/registry";
import { repoRoot } from "./lib/paths";
import {
  collectExistingUrls,
  readSourcesFileResult,
  writeSourcesFile,
} from "./lib/source-migration";

const REPOS = [
  { owner: "ComposioHQ", repo: "awesome-claude-skills" },
  { owner: "nextlevelbuilder", repo: "ui-ux-pro-max-skill" },
] as const;

const SOURCES_DIR = resolve(repoRoot, "sources");
const GENERAL_PATH = resolve(SOURCES_DIR, "general.yml");
const OUTPUT_PATH = GENERAL_PATH;
const SOURCE_TYPE = "skills";

type Frontmatter = Record<string, unknown>;

function slugify(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, "-")
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function shortHash(value: string): string {
  return createHash("sha256").update(value).digest("hex").slice(0, 8);
}

function uniqueSlug(
  base: string,
  rawUrl: string,
  used: Map<string, string>,
): string {
  const existing = used.get(base);
  if (!existing) {
    used.set(base, rawUrl);
    return base;
  }
  if (existing === rawUrl) {
    return base;
  }
  const hash = shortHash(rawUrl);
  let candidate = `${base}-${hash}`;
  if (!used.has(candidate)) {
    used.set(candidate, rawUrl);
    return candidate;
  }
  let counter = 2;
  while (used.has(candidate)) {
    candidate = `${base}-${hash}-${counter}`;
    counter += 1;
  }
  used.set(candidate, rawUrl);
  return candidate;
}

function isRecord(value: unknown): value is Frontmatter {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function normalizePreamble(text: string): string {
  let output = text;
  if (output.charCodeAt(0) === 0xfeff) {
    output = output.slice(1);
  }
  return output.replace(/^(?:\s*\r?\n)+/, "");
}

function extractFrontmatter(text: string): Frontmatter | null {
  const normalized = normalizePreamble(text);
  if (!normalized.startsWith("---")) {
    return null;
  }
  const match = /^---\s*\n([\s\S]*?)\n---\s*\n?/.exec(normalized);
  if (!match) {
    return null;
  }
  try {
    const parsed = parse(match[1] ?? "");
    if (!isRecord(parsed)) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

function normalizeTags(value: unknown): string[] | null {
  if (!Array.isArray(value)) {
    return null;
  }
  const tags = value
    .filter((tag) => typeof tag === "string")
    .map((tag) => tag.trim())
    .filter((tag) => tag.length > 0);
  if (tags.length !== value.length) {
    return null;
  }
  return tags;
}

function buildSlug(repo: string, relativePath: string): string {
  const normalizedPath = relativePath
    .replace(/\\/g, "/")
    .replace(/\.md$/i, "");
  const base = slugify(`${repo}-${normalizedPath}`);
  return base || slugify(repo);
}

async function runCommand(
  args: string[],
  cwd?: string,
): Promise<{ stdout: string; stderr: string }> {
  const process = Bun.spawn(args, {
    cwd,
    stdout: "pipe",
    stderr: "pipe",
  });
  const [stdout, stderr, exitCode] = await Promise.all([
    new Response(process.stdout).text(),
    new Response(process.stderr).text(),
    process.exited,
  ]);
  if (exitCode !== 0) {
    throw new Error(
      `Command failed (${args.join(" ")}): ${stderr.trim() || stdout.trim()}`,
    );
  }
  return { stdout, stderr };
}

async function cloneRepo(
  owner: string,
  repo: string,
  targetDir: string,
): Promise<void> {
  const repoUrl = `https://github.com/${owner}/${repo}.git`;
  await runCommand(["git", "clone", "--depth", "1", repoUrl, targetDir]);
}

async function getDefaultBranch(repoDir: string): Promise<string> {
  const { stdout } = await runCommand(
    ["git", "-C", repoDir, "symbolic-ref", "--short", "HEAD"],
    repoDir,
  );
  const branch = stdout.trim();
  return branch.length > 0 ? branch : "main";
}

async function listMarkdownFiles(repoDir: string): Promise<string[]> {
  const glob = new Bun.Glob("**/*.md");
  const paths: string[] = [];
  for await (const filePath of glob.scan({ cwd: repoDir, onlyFiles: true })) {
    const normalized = filePath.replace(/\\/g, "/");
    if (normalized.startsWith(".git/")) {
      continue;
    }
    paths.push(normalized);
  }
  return paths;
}

const previousResult = await readSourcesFileResult(OUTPUT_PATH);
if (!previousResult.ok && !previousResult.missing) {
  throw new Error(previousResult.errors.join("\n"));
}

const existingEntries = previousResult.ok ? previousResult.sources : [];
const existingUrls = await collectExistingUrls(
  SOURCES_DIR,
  OUTPUT_PATH,
  existingEntries,
);
const usedSlugs = new Map<string, string>();
for (const entry of existingEntries) {
  usedSlugs.set(entry.slug, entry.source_url);
}

const nextEntries: SourceEntry[] = [...existingEntries];
const tempRoot = await mkdtemp(resolve("/tmp", "awesome-claude-"));

try {
  for (const repo of REPOS) {
    const repoDir = resolve(tempRoot, `${repo.owner}-${repo.repo}`);
    await cloneRepo(repo.owner, repo.repo, repoDir);
    const branch = await getDefaultBranch(repoDir);
    const markdownFiles = await listMarkdownFiles(repoDir);

    for (const relativePath of markdownFiles) {
      const absolutePath = resolve(repoDir, relativePath);
      let text: string;
      try {
        text = await Bun.file(absolutePath).text();
      } catch {
        continue;
      }

      const frontmatter = extractFrontmatter(text);
      if (!frontmatter) {
        continue;
      }

      const title = typeof frontmatter.title === "string" ? frontmatter.title : null;
      const summary =
        typeof frontmatter.summary === "string" ? frontmatter.summary : null;
      const tags = normalizeTags(frontmatter.tags);

      if (!title?.trim() || !summary?.trim() || !tags) {
        continue;
      }

      const pathForUrl = relativePath.replace(/\\/g, "/");
      const sourceUrl = `https://raw.githubusercontent.com/${repo.owner}/${repo.repo}/${branch}/${pathForUrl}`;
      if (existingUrls.has(sourceUrl)) {
        continue;
      }

      const upstreamRef = `https://github.com/${repo.owner}/${repo.repo}/blob/${branch}/${pathForUrl}`;
      const baseSlug = buildSlug(repo.repo, pathForUrl);
      const slug = uniqueSlug(baseSlug, sourceUrl, usedSlugs);

      const entry: SourceEntry = {
        type: SOURCE_TYPE,
        slug,
        source_url: sourceUrl,
        title: title.trim(),
        summary: summary.trim(),
        tags,
        upstream_ref: upstreamRef,
      };

      nextEntries.push(entry);
      existingUrls.add(sourceUrl);
    }
  }
} finally {
  await rm(tempRoot, { recursive: true, force: true });
}

await writeSourcesFile(OUTPUT_PATH, nextEntries, previousResult.header ?? "");
