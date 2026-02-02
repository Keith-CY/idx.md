# OpenAI Skills Ingest Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add an automated ingest for `openai/skills` that discovers SKILL.md/skill.md via GitHub API, writes `sources/openai.yml`, and ships a daily + manual workflow.

**Architecture:** A new ingest script calls the GitHub API to fetch the default branch and tree for `openai/skills`, filters paths under `skills/` that end with `SKILL.md` or `skill.md`, converts them to raw GitHub URLs, generates stable slugs, and writes a report. A new workflow runs daily + manual dispatch, uploads the report, and opens a PR with updated `sources/openai.yml`.

**Tech Stack:** Bun, TypeScript, YAML, Zod

---

### Task 1: Add OpenAI tree parsing helpers + tests

**Files:**
- Create: `sites/pages/lib/openai-parse.ts`
- Create: `sites/pages/tests/openai-parse.test.ts`

**Step 1: Write the failing tests**

```ts
import { describe, expect, test } from "bun:test";
import {
  filterSkillPaths,
  buildRawUrl,
  buildSlugParts,
  buildSlug,
} from "../lib/openai-parse";

const TREE = [
  { path: "skills/alpha/skill-one/SKILL.md", type: "blob" },
  { path: "skills/beta/skill-two/skill.md", type: "blob" },
  { path: "skills/gamma/README.md", type: "blob" },
  { path: "docs/skill.md", type: "blob" },
];

describe("openai parse", () => {
  test("filters SKILL.md and skill.md under skills/", () => {
    expect(filterSkillPaths(TREE)).toEqual([
      "skills/alpha/skill-one/SKILL.md",
      "skills/beta/skill-two/skill.md",
    ]);
  });

  test("builds raw url", () => {
    expect(buildRawUrl("main", "skills/a/b/SKILL.md")).toBe(
      "https://raw.githubusercontent.com/openai/skills/main/skills/a/b/SKILL.md",
    );
  });

  test("builds slug parts for two segment skill path", () => {
    expect(buildSlugParts("skills/alpha/skill-one/SKILL.md")).toEqual({
      owner: "alpha",
      skill: "skill-one",
    });
  });

  test("builds slug parts for single segment skill path", () => {
    expect(buildSlugParts("skills/skill-only/SKILL.md")).toEqual({
      owner: "openai",
      skill: "skill-only",
    });
  });

  test("builds slug string", () => {
    expect(buildSlug({ owner: "alpha", skill: "skill-one" })).toBe(
      "openai-alpha-skill-one",
    );
  });
});
```

**Step 2: Run test to verify it fails**

Run: `bun test ./sites/pages/tests/openai-parse.test.ts`  
Expected: FAIL (module not found / functions not implemented)

**Step 3: Write minimal implementation**

```ts
export function filterSkillPaths(tree: { path: string; type: string }[]): string[] {
  // only skills/**/(SKILL.md|skill.md)
}

export function buildRawUrl(branch: string, path: string): string {
  // raw.githubusercontent.com/openai/skills/{branch}/{path}
}

export function buildSlugParts(path: string): { owner: string; skill: string } | null {
  // skills/<owner>/<skill>/SKILL.md OR skills/<skill>/SKILL.md
}

export function buildSlug(parts: { owner: string; skill: string }): string {
  // openai-<owner>-<skill>
}
```

**Step 4: Run test to verify it passes**

Run: `bun test ./sites/pages/tests/openai-parse.test.ts`  
Expected: PASS

**Step 5: Commit**

```bash
git add sites/pages/lib/openai-parse.ts sites/pages/tests/openai-parse.test.ts
git commit -m "feat: add openai skills parse helpers"
```

---

### Task 2: Add OpenAI ingest script + tooling test

**Files:**
- Create: `sites/pages/ingest-openai.ts`
- Modify: `sites/pages/tests/tooling-paths.test.ts`
- Create: `sources/openai.yml`

**Step 1: Write the failing test**

Add to `sites/pages/tests/tooling-paths.test.ts`:

```ts
test("openai ingest writes to sources and data reports", async () => {
  const text = await readText("sites/pages/ingest-openai.ts");
  expect(text.includes('resolve(repoRoot, "sources", "openai.yml")')).toBe(true);
  expect(text.includes('resolve(DATA_ROOT, "reports", "ingest-openai.md")')).toBe(true);
});
```

**Step 2: Run test to verify it fails**

Run: `bun test ./sites/pages/tests/tooling-paths.test.ts`  
Expected: FAIL

**Step 3: Write minimal implementation**

Key behavior for `sites/pages/ingest-openai.ts`:
- Fetch repo metadata: `https://api.github.com/repos/openai/skills` to read `default_branch`.
- Fetch tree: `https://api.github.com/repos/openai/skills/git/trees/{branch}?recursive=1`.
- Filter via `filterSkillPaths`.
- For each path:
  - build raw URL via `buildRawUrl`
  - build slug via `buildSlugParts` + `buildSlug`
  - validate URL with `validateSourceUrl`
  - write `SourceEntry` with tags `["openai","source-openai-skills"]`
- Write `sources/openai.yml` with schema header.
- Write report `data/reports/ingest-openai.md` (counts + skips).

**Step 4: Run test to verify it passes**

Run: `bun test ./sites/pages/tests/tooling-paths.test.ts`  
Expected: PASS

**Step 5: Commit**

```bash
git add sites/pages/ingest-openai.ts sites/pages/tests/tooling-paths.test.ts sources/openai.yml
git commit -m "feat: add openai ingest script"
```

---

### Task 3: Add OpenAI ingest workflow + docs update

**Files:**
- Create: `.github/workflows/openai-ingest.yml`
- Modify: `sites/pages/tests/pages-workflow.test.ts`
- Modify: `sites/pages/index.md`

**Step 1: Write the failing tests**

Add to `sites/pages/tests/pages-workflow.test.ts`:

```ts
test("openai ingest workflow uploads report", async () => {
  const text = await readText(".github/workflows/openai-ingest.yml");
  expect(/actions\\/upload-artifact@/.test(text)).toBe(true);
  expect(text.includes("data/reports/ingest-openai.md")).toBe(true);
});
```

Add to `sites/pages/index.md`:
- `sources/openai.yml` in registry list
- `ingest-openai.ts` in tooling list
- Example for OpenAI ingest

**Step 2: Run test to verify it fails**

Run: `bun test ./sites/pages/tests/pages-workflow.test.ts`  
Expected: FAIL

**Step 3: Write minimal implementation**

Workflow `openai-ingest.yml`:
- Schedule daily + `workflow_dispatch`
- Run `bun sites/pages/ingest-openai.ts`
- Upload artifact `data/reports/ingest-openai.md`
- Create PR with `sources/openai.yml`

**Step 4: Run test to verify it passes**

Run: `bun test ./sites/pages/tests/pages-workflow.test.ts`  
Expected: PASS

**Step 5: Commit**

```bash
git add .github/workflows/openai-ingest.yml sites/pages/tests/pages-workflow.test.ts sites/pages/index.md
git commit -m "ci: add openai ingest workflow"
```

---

### Task 4: Final verification

**Step 1: Run full test suite**

Run: `bun test`  
Expected: PASS

**Step 2: Optional ingest**

Run: `bun sites/pages/ingest-openai.ts`  
Expected: `sources/openai.yml` updated and report written.

**Step 3: Commit if ingest run**

```bash
git add sources/openai.yml data/reports/ingest-openai.md
git commit -m "data: refresh openai skills registry"
```
