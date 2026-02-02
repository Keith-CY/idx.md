# Skills.sh Ingest Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add an automated skills.sh All-Time Top 1000 ingest that preserves ranking order, discovers `.md` files, and writes `sources/skills-sh.yml` plus a report.

**Architecture:** A new ingest script fetches skills.sh (sitemap or homepage fallback), parses ranked skill links, visits each skill page to find direct `.md` URLs (or GitHub blob/tree URLs), and normalizes them to raw `.md` URLs. If no direct `.md` is found, probe a minimal set of raw paths (`SKILL.md`, `skill.md`, `docs/SKILL.md`, `docs/skill.md`) on `main` then `master`; successful probes are appended to `sources/general.yml` and skipped from `sources/skills-sh.yml` to avoid duplicates. A markdown report is written under `data/reports/ingest-skills-sh.md` and uploaded as a workflow artifact.

**Tech Stack:** Bun, TypeScript, YAML, Zod

---

### Task 1: Parse skills.sh lists (sitemap + homepage)

**Files:**
- Create: `sites/pages/lib/skills-sh-parse.ts`
- Create: `sites/pages/tests/skills-sh-parse.test.ts`

**Step 1: Write the failing tests**

```ts
import { describe, expect, test } from "bun:test";
import {
  extractSkillLinksFromSitemap,
  extractSkillLinksFromHtml,
  parseSkillPath,
} from "../lib/skills-sh-parse";

const XML = `<?xml version="1.0"?><urlset>
  <url><loc>https://skills.sh/acme/skillbox/landing-page-guide</loc></url>
  <url><loc>https://skills.sh/about</loc></url>
</urlset>`;

const HTML = `
  <a href="https://skills.sh/acme/skillbox/landing-page-guide">Skill</a>
  <a href="https://skills.sh/about">About</a>
  <a href="/acme/skillbox/landing-page-guide">Relative</a>
`;

describe("skills.sh parsing", () => {
  test("extracts skill links from sitemap", () => {
    expect(extractSkillLinksFromSitemap(XML)).toEqual([
      "https://skills.sh/acme/skillbox/landing-page-guide",
    ]);
  });

  test("extracts skill links from html", () => {
    expect(extractSkillLinksFromHtml(HTML)).toEqual([
      "https://skills.sh/acme/skillbox/landing-page-guide",
    ]);
  });

  test("parses skill path", () => {
    expect(parseSkillPath("https://skills.sh/acme/skillbox/landing-page-guide"))
      .toEqual({ owner: "acme", repo: "skillbox", skill: "landing-page-guide" });
  });
});
```

**Step 2: Run test to verify it fails**

Run: `bun test sites/pages/tests/skills-sh-parse.test.ts`  
Expected: FAIL (module not found / functions not implemented)

**Step 3: Write minimal implementation**

```ts
export function extractSkillLinksFromSitemap(xml: string): string[] {
  // parse <loc> entries and keep only /owner/repo/skill links (3 segments)
}

export function extractSkillLinksFromHtml(html: string): string[] {
  // scan hrefs, normalize relative /owner/repo/skill to absolute
}

export function parseSkillPath(input: string): {
  owner: string;
  repo: string;
  skill: string;
} | null {
  // parse and validate 3 segments
}
```

**Step 4: Run test to verify it passes**

Run: `bun test sites/pages/tests/skills-sh-parse.test.ts`  
Expected: PASS

**Step 5: Commit**

```bash
git add sites/pages/lib/skills-sh-parse.ts sites/pages/tests/skills-sh-parse.test.ts
git commit -m "feat: add skills.sh parser utilities"
```

---

### Task 2: Parse skill pages for markdown URLs + probe candidates

**Files:**
- Modify: `sites/pages/lib/skills-sh-parse.ts`
- Modify: `sites/pages/tests/skills-sh-parse.test.ts`

**Step 1: Write the failing tests**

```ts
import {
  extractMarkdownUrls,
  extractGithubRepo,
  buildProbeUrls,
} from "../lib/skills-sh-parse";

const PAGE = `
  <a href="https://raw.githubusercontent.com/acme/skillbox/main/SKILL.md">raw</a>
  <a href="https://github.com/acme/skillbox/blob/main/SKILL.md">blob</a>
  <a href="https://github.com/acme/skillbox">repo</a>
`;

test("extracts markdown urls (normalized)", () => {
  expect(extractMarkdownUrls(PAGE)).toEqual([
    "https://raw.githubusercontent.com/acme/skillbox/main/SKILL.md",
    "https://raw.githubusercontent.com/acme/skillbox/main/SKILL.md",
  ]);
});

test("extracts github repo", () => {
  expect(extractGithubRepo(PAGE)).toEqual({ owner: "acme", repo: "skillbox" });
});

test("builds probe urls", () => {
  expect(buildProbeUrls("acme", "skillbox", ["main"], [
    "SKILL.md",
    "docs/skill.md",
  ])).toEqual([
    "https://raw.githubusercontent.com/acme/skillbox/main/SKILL.md",
    "https://raw.githubusercontent.com/acme/skillbox/main/docs/skill.md",
  ]);
});
```

**Step 2: Run test to verify it fails**

Run: `bun test sites/pages/tests/skills-sh-parse.test.ts`  
Expected: FAIL (new exports missing)

**Step 3: Write minimal implementation**

```ts
export function extractMarkdownUrls(html: string): string[] {
  // find .md urls, normalize github blob/tree -> raw
}

export function extractGithubRepo(html: string): { owner: string; repo: string } | null {
  // parse https://github.com/<owner>/<repo> links
}

export function buildProbeUrls(
  owner: string,
  repo: string,
  branches: string[],
  paths: string[],
): string[] {
  // build raw.githubusercontent.com urls
}
```

**Step 4: Run test to verify it passes**

Run: `bun test sites/pages/tests/skills-sh-parse.test.ts`  
Expected: PASS

**Step 5: Commit**

```bash
git add sites/pages/lib/skills-sh-parse.ts sites/pages/tests/skills-sh-parse.test.ts
git commit -m "feat: add skills.sh page parsing helpers"
```

---

### Task 3: Add skills.sh ingest script + report + tooling test

**Files:**
- Create: `sites/pages/ingest-skills-sh.ts`
- Modify: `sites/pages/tests/tooling-paths.test.ts`
- Modify: `sources/general.yml` (append probed entries at end)
- Create/Modify: `sources/skills-sh.yml`
- Output: `data/reports/ingest-skills-sh.md`

**Step 1: Write the failing test**

Add to `sites/pages/tests/tooling-paths.test.ts`:

```ts
test("skills.sh ingest writes to sources and data reports", async () => {
  const text = await readText("sites/pages/ingest-skills-sh.ts");
  expect(text.includes('resolve(repoRoot, "sources", "skills-sh.yml")')).toBe(true);
  expect(text.includes('resolve(DATA_ROOT, "reports", "ingest-skills-sh.md")')).toBe(true);
});
```

**Step 2: Run test to verify it fails**

Run: `bun test sites/pages/tests/tooling-paths.test.ts`  
Expected: FAIL (ingest script missing)

**Step 3: Write minimal implementation**

Key behavior for `sites/pages/ingest-skills-sh.ts`:
- Fetch skills.sh All-Time list: try `https://skills.sh/sitemap.xml`; if not ok, fetch `https://skills.sh/` and parse links.
- Keep first **1000** links in the order encountered.
- For each skill link:
  - Fetch the skill page HTML.
  - Use `extractMarkdownUrls` for direct `.md` URLs; normalize with `normalizeGithubRawUrl`.
  - If none, use `extractGithubRepo` and probe:
    - branches: `["main", "master"]`
    - paths: `["SKILL.md", "skill.md", "docs/SKILL.md", "docs/skill.md"]`
  - First valid `.md` wins.
- Create `SourceEntry` with:
  - `type: "skills"`
  - `slug: "skills-sh-<owner>-<repo>-<skill>"`
  - `source_url: <raw .md>`
  - `upstream_ref: <skills.sh page>`
  - tags: `["skills-sh", "skills-sh-all-time"]`
- If `.md` was found only via probe, append to `sources/general.yml` (tag `skills-sh-probed`) and **skip** adding to `sources/skills-sh.yml`.
- Write report `data/reports/ingest-skills-sh.md` with counts and failures.

**Step 4: Run test to verify it passes**

Run: `bun test sites/pages/tests/tooling-paths.test.ts`  
Expected: PASS

**Step 5: Commit**

```bash
git add sites/pages/ingest-skills-sh.ts sites/pages/tests/tooling-paths.test.ts sources/skills-sh.yml sources/general.yml
git commit -m "feat: add skills.sh ingest script"
```

---

### Task 4: Add GitHub Actions workflow for skills.sh ingest

**Files:**
- Create: `.github/workflows/skills-sh-ingest.yml`
- Modify: `sites/pages/tests/pages-workflow.test.ts`

**Step 1: Write the failing test**

Add a test that asserts the workflow uploads `data/reports/ingest-skills-sh.md` and uses pinned actions.

**Step 2: Run test to verify it fails**

Run: `bun test sites/pages/tests/pages-workflow.test.ts`  
Expected: FAIL (workflow not present)

**Step 3: Write minimal implementation**

Create `skills-sh-ingest.yml` modeled after openclaw:
- Schedule daily (e.g. `0 3 * * *`) and allow `workflow_dispatch`.
- Run `bun sites/pages/ingest-skills-sh.ts`.
- Upload artifact `skills-sh-ingest-report` with `data/reports/ingest-skills-sh.md`.
- Create PR with changes to:
  - `sources/skills-sh.yml`
  - `sources/general.yml` (if probed entries added)

**Step 4: Run test to verify it passes**

Run: `bun test sites/pages/tests/pages-workflow.test.ts`  
Expected: PASS

**Step 5: Commit**

```bash
git add .github/workflows/skills-sh-ingest.yml sites/pages/tests/pages-workflow.test.ts
git commit -m "ci: add skills.sh ingest workflow"
```

---

### Task 5: Update agent skill guide

**Files:**
- Modify: `sites/pages/index.md`

**Step 1: Write the failing test**

Add to `sites/pages/tests/links.test.ts` or `tooling-paths.test.ts` a check for the new script mention (if needed).

**Step 2: Run test to verify it fails**

Run: `bun test sites/pages/tests/tooling-paths.test.ts`  
Expected: FAIL (skills.sh ingest not documented)

**Step 3: Write minimal implementation**

Update `sites/pages/index.md`:
- Add `sources/skills-sh.yml` to the registry list.
- Add instructions to run `bun sites/pages/ingest-skills-sh.ts`.
- Mention probed additions go to `sources/general.yml`.

**Step 4: Run test to verify it passes**

Run: `bun test sites/pages/tests/tooling-paths.test.ts`  
Expected: PASS

**Step 5: Commit**

```bash
git add sites/pages/index.md sites/pages/tests/tooling-paths.test.ts
git commit -m "docs: document skills.sh ingest"
```

---

### Task 6: Final verification

**Step 1: Run full test suite**

Run: `bun test`  
Expected: PASS

**Step 2: Run ingest (optional, network)**

Run: `bun sites/pages/ingest-skills-sh.ts`  
Expected: Report written to `data/reports/ingest-skills-sh.md`, sources updated.

**Step 3: Commit (if ingest run)**

```bash
git add sources/skills-sh.yml sources/general.yml data/reports/ingest-skills-sh.md
git commit -m "data: refresh skills.sh registry"
```
