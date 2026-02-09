# Scenario + Industry Verticals Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add agent-first Scenario (`/scenario/*`) and Industry (`/industry/*`) hubs + per-vertical index pages with a curated “top section” plus an auto-generated full listing, and ship 3 pilot verticals with dedicated Playbook topics.

**Architecture:** Reuse the existing category pipeline pattern (parse `*-<slug>` tags from `tags`, controlled vocabulary + alias map, unknown -> `uncategorized` + rejected-report warning). Generate deterministic Markdown under `data/scenario/**` and `data/industry/**`. Add a small curated config for the 3 pilot verticals (fit/no-fit, gold path, next hops, playbook topic) and generate Playbook topics directly in the build step so they participate in the global index.

**Tech Stack:** Bun, TypeScript, existing `sites/pages` build pipeline, unit tests with `bun test`.

---

### Task 1: Add scenario/industry paths to the data layout (RED)

**Files:**
- Modify: `sites/pages/lib/data-layout.ts`
- Modify: `sites/pages/tests/data-layout.test.ts`

**Step 1: Write failing tests**
Update `sites/pages/tests/data-layout.test.ts` to assert:
- `data/scenario/index.md`
- `data/scenario/<slug>/index.md`
- `data/industry/index.md`
- `data/industry/<slug>/index.md`

**Step 2: Run test to verify it fails**
Run: `bun test sites/pages/tests/data-layout.test.ts`
Expected: FAIL (missing exports / wrong paths).

**Step 3: Implement minimal path helpers**
In `sites/pages/lib/data-layout.ts`, add:
- `SCENARIO_ROOT`, `SCENARIO_INDEX_PATH`, `scenarioIndexPath(slug)`
- `INDUSTRY_ROOT`, `INDUSTRY_INDEX_PATH`, `industryIndexPath(slug)`

**Step 4: Run test to verify it passes**
Run: `bun test sites/pages/tests/data-layout.test.ts`
Expected: PASS

**Step 5: Commit**
```bash
git add sites/pages/lib/data-layout.ts sites/pages/tests/data-layout.test.ts
git commit -m "feat(pages): add scenario/industry data paths"
```

---

### Task 2: Implement scenario/industry tag parsing + index generation (RED -> GREEN)

**Files:**
- Create: `sites/pages/lib/verticals.ts`
- Create: `sites/pages/tests/verticals.test.ts`

**Step 1: Write failing tests**
Create `sites/pages/tests/verticals.test.ts` to cover:
- `parseScenarioFromTags()` returns `[]` when no `scenario-*` tags present
- alias mapping + dedupe for scenarios
- unknown `scenario-*` returns `["uncategorized"]` and reports unknown slugs
- `parseIndustryFromTags()` enforces known slugs + unknown -> uncategorized; no-tags returns `[]`
- `buildScenarioIndexes()` and `buildIndustryIndexes()` produce:
  - hub content with stable `/scenario/<slug>/index.md` and `/industry/<slug>/index.md`
  - per-vertical pages including `|/data/<topic>|` lines for assigned entries

**Step 2: Run test to verify it fails**
Run: `bun test sites/pages/tests/verticals.test.ts`
Expected: FAIL (module/functions missing).

**Step 3: Implement minimal vertical helpers**
Create `sites/pages/lib/verticals.ts`:
- Controlled definitions:
  - Scenario: `customer-support`, `content-marketing`, `uncategorized`
  - Industry: `finance`, `uncategorized`
- Aliases (minimal):
  - Scenario: `support` -> `customer-support`, `cs` -> `customer-support`
  - Scenario: `marketing` -> `content-marketing`, `content` -> `content-marketing`
  - Industry: `fin` -> `finance`
- Parsing:
  - Only look at tags with prefix `scenario-` / `industry-`
  - If no matching tags: return `{ slugs: [], unknown: [] }`
  - If unknown exists: include `uncategorized`
- Index building:
  - Always generate pages for all definitions (count can be 0)
  - Per page: header + small metadata table + entry listing (standard `formatIndexEntry`)
  - Hub: table of all slugs with counts and stable paths

**Step 4: Run test to verify it passes**
Run: `bun test sites/pages/tests/verticals.test.ts`
Expected: PASS

**Step 5: Commit**
```bash
git add sites/pages/lib/verticals.ts sites/pages/tests/verticals.test.ts
git commit -m "feat(pages): add scenario/industry vertical generation"
```

---

### Task 3: Add curated config for pilot verticals + render hybrid top section (RED -> GREEN)

**Files:**
- Create: `sites/pages/lib/vertical-curation.ts`
- Create: `sites/pages/tests/vertical-curation.test.ts`
- Modify: `sites/pages/lib/verticals.ts`

**Step 1: Write failing tests**
Create `sites/pages/tests/vertical-curation.test.ts` to assert:
- Each pilot vertical has curated text:
  - Scenario `customer-support` and `content-marketing`
  - Industry `finance`
- Rendered per-vertical page content includes:
  - “Fit / No fit” block
  - Gold path list using `|/data/...|` lines
  - Playbook pointer topic `|/data/playbook-...|`
  - Next hop links to relevant `/category/*/index.md`

**Step 2: Run test to verify it fails**
Run: `bun test sites/pages/tests/vertical-curation.test.ts`
Expected: FAIL

**Step 3: Implement minimal curation**
Create `sites/pages/lib/vertical-curation.ts` exporting:
- `getScenarioCuration(slug)` and `getIndustryCuration(slug)` (return `null` when unknown)
- Data for pilots (keep copy short, agent-first).
- Gold paths should reference existing topics where possible (safe if they don’t exist yet; it’s just a link).

Update `sites/pages/lib/verticals.ts` to inject the curated “top section” above the auto-generated listing.

**Step 4: Run test to verify it passes**
Run: `bun test sites/pages/tests/vertical-curation.test.ts`
Expected: PASS

**Step 5: Commit**
```bash
git add sites/pages/lib/vertical-curation.ts sites/pages/tests/vertical-curation.test.ts sites/pages/lib/verticals.ts
git commit -m "feat(pages): add curated top sections for pilot verticals"
```

---

### Task 4: Generate scenario/industry outputs in the build pipeline (RED -> GREEN)

**Files:**
- Modify: `sites/pages/build.ts`
- Test: `sites/pages/tests/tooling-paths.test.ts` (if needed)

**Step 1: Write failing test**
Extend an existing test (or add a small new one) asserting `sites/pages/build.ts` writes:
- `data/scenario/index.md`
- `data/industry/index.md`

**Step 2: Run test to verify it fails**
Run: `bun test sites/pages/tests/tooling-paths.test.ts`
Expected: FAIL (no writes).

**Step 3: Implement build outputs**
In `sites/pages/build.ts`:
- While iterating sources, parse scenario + industry slugs from `source.tags` (via `parseScenarioFromTags` / `parseIndustryFromTags`).
- Append unknown-tag warnings to the rejected report (same pattern as categories).
- After `data/index.md` and `/category/*` are written:
  - write `SCENARIO_INDEX_PATH` and pages under `scenarioIndexPath()`
  - write `INDUSTRY_INDEX_PATH` and pages under `industryIndexPath()`

**Step 4: Run tests**
Run: `bun test sites/pages/tests/tooling-paths.test.ts`
Expected: PASS

**Step 5: Commit**
```bash
git add sites/pages/build.ts sites/pages/tests/tooling-paths.test.ts
git commit -m "feat(pages): emit scenario/industry indexes under data/"
```

---

### Task 5: Add Playbook topics (first-party, deterministic) (RED -> GREEN)

**Files:**
- Create: `sites/pages/lib/playbooks.ts`
- Create: `sites/pages/tests/playbooks.test.ts`
- Modify: `sites/pages/build.ts`

**Step 1: Write failing tests**
Create `sites/pages/tests/playbooks.test.ts` asserting:
- `buildPilotPlaybooks()` returns 3 entries with:
  - stable `topic` slugs:
    - `playbook-scenario-customer-support`
    - `playbook-industry-finance`
    - `playbook-scenario-content-marketing`
  - valid HEAD frontmatter string
  - BODY markdown containing `|/data/...|` references

**Step 2: Run test to verify it fails**
Run: `bun test sites/pages/tests/playbooks.test.ts`
Expected: FAIL

**Step 3: Implement playbook builder**
Create `sites/pages/lib/playbooks.ts` that renders:
- HEAD (frontmatter) with `type: playbooks`, `source_url: ""`, `retrieved_at: <build time>`, and `content_sha256` computed from BODY bytes.
- BODY template with:
  - short purpose
  - ordered steps (gold path)
  - next hops

Update `sites/pages/build.ts` to:
- generate these playbook topics after the fetch loop
- write them under `data/<topic>/{HEAD,BODY}.md`
- include them in `data/index.md` (append to `indexEntries`)

**Step 4: Run tests**
Run: `bun test sites/pages/tests/playbooks.test.ts`
Expected: PASS

**Step 5: Commit**
```bash
git add sites/pages/lib/playbooks.ts sites/pages/tests/playbooks.test.ts sites/pages/build.ts
git commit -m "feat(pages): generate pilot playbook topics"
```

---

### Task 6: Discoverability and docs (GREEN)

**Files:**
- Modify: `SKILL.md`
- (Optional) Modify: `README.md`

**Step 1: Update root skill doc**
Add explicit next-hop URLs for:
- `/category/index.md`
- `/scenario/index.md`
- `/industry/index.md`

**Step 2: Run unit tests**
Run: `bun test`
Expected: PASS

**Step 3: Commit**
```bash
git add SKILL.md README.md
git commit -m "docs: link scenario/industry hubs from root skill"
```

---

### Task 7: Verification pass

**Step 1: Run full suite**
Run: `bun test`
Expected: PASS

**Step 2: Summarize outcomes and residual risks**
- Confirm generated paths and pilot page structure.
- Note that taxonomy coverage depends on tagging (or future overlays).

