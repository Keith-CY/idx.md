# Ingest Removed Source Migration Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** When a dedicated ingest drops a source, verify it with curl; if still reachable, migrate it into `sources/general.yml` with URL + slug dedup.

**Architecture:** Add a shared helper that diffs previous vs new entries by `source_url`, checks removed URLs via `curl`, and appends reachable entries to `sources/general.yml` while preserving metadata and resolving slug collisions. Update every ingest script to invoke the helper and report migration stats.

**Tech Stack:** Bun/TypeScript, YAML parsing, curl via `Bun.spawn`, existing registry helpers.

### Task 1: Add failing tests for migration behavior

**Files:**
- Create: `sites/pages/tests/source-migration.test.ts`

**Step 1: Write the failing tests**

```ts
import { describe, expect, test } from "bun:test";
import {
  diffRemovedByUrl,
  planGeneralMigration,
} from "../lib/source-migration";

const baseEntry = (overrides = {}) => ({
  type: "skills",
  slug: "openclaw-test",
  source_url: "https://example.com/skill.md",
  ...overrides,
});

describe("source migration", () => {
  test("diffRemovedByUrl returns entries missing in next set", () => {
    const previous = [
      baseEntry({ source_url: "https://a.com/skill.md", slug: "a" }),
      baseEntry({ source_url: "https://b.com/skill.md", slug: "b" }),
    ];
    const next = [baseEntry({ source_url: "https://b.com/skill.md", slug: "b" })];
    const removed = diffRemovedByUrl(previous, next);
    expect(removed.map((entry) => entry.source_url)).toEqual([
      "https://a.com/skill.md",
    ]);
  });

  test("planGeneralMigration skips urls already present", async () => {
    const removed = [
      baseEntry({ source_url: "https://a.com/skill.md", slug: "a" }),
    ];
    const result = await planGeneralMigration({
      removed,
      generalEntries: [],
      existingUrls: new Set(["https://a.com/skill.md"]),
      checkUrl: async () => ({ ok: true, status: 200 }),
    });
    expect(result.added).toHaveLength(0);
    expect(result.stats.duplicatesSkipped).toBe(1);
  });

  test("planGeneralMigration resolves slug collisions with hash suffix", async () => {
    const removed = [
      baseEntry({ source_url: "https://c.com/skill.md", slug: "dupe" }),
    ];
    const generalEntries = [
      baseEntry({ source_url: "https://existing.com/skill.md", slug: "dupe" }),
    ];
    const result = await planGeneralMigration({
      removed,
      generalEntries,
      existingUrls: new Set(),
      checkUrl: async () => ({ ok: true, status: 200 }),
    });
    expect(result.added).toHaveLength(1);
    expect(result.added[0]?.slug).not.toBe("dupe");
    expect(result.added[0]?.slug).toMatch(/^dupe-[0-9a-f]{8}$/);
  });
});
```

**Step 2: Run test to verify it fails**

Run: `bun test sites/pages/tests/source-migration.test.ts`
Expected: FAIL with missing module/functions.

**Step 3: Commit**

```bash
git add sites/pages/tests/source-migration.test.ts
git commit -m "test: add source migration coverage"
```

### Task 2: Implement shared migration helper

**Files:**
- Create: `sites/pages/lib/source-migration.ts`

**Step 1: Implement minimal helper to satisfy tests**

```ts
import { createHash } from "crypto";
import type { SourceEntry } from "./registry";

export type UrlCheckResult = { ok: boolean; status: number | null };

export function diffRemovedByUrl(
  previous: SourceEntry[],
  next: SourceEntry[],
): SourceEntry[] {
  const nextUrls = new Set(next.map((entry) => entry.source_url));
  return previous.filter((entry) => !nextUrls.has(entry.source_url));
}

function shortHash(value: string): string {
  return createHash("sha256").update(value).digest("hex").slice(0, 8);
}

function uniqueSlug(
  base: string,
  url: string,
  used: Map<string, string>,
): string {
  const existing = used.get(base);
  if (!existing) {
    used.set(base, url);
    return base;
  }
  if (existing === url) {
    return base;
  }
  const hash = shortHash(url);
  let candidate = `${base}-${hash}`;
  let counter = 2;
  while (used.has(candidate)) {
    candidate = `${base}-${hash}-${counter}`;
    counter += 1;
  }
  used.set(candidate, url);
  return candidate;
}

export async function planGeneralMigration(opts: {
  removed: SourceEntry[];
  generalEntries: SourceEntry[];
  existingUrls: Set<string>;
  checkUrl: (url: string) => Promise<UrlCheckResult>;
}): Promise<{
  added: SourceEntry[];
  updatedGeneral: SourceEntry[];
  stats: {
    removedTotal: number;
    reachable: number;
    migrated: number;
    duplicatesSkipped: number;
    slugCollisions: number;
    curlFailed: number;
  };
}> {
  const usedSlugs = new Map<string, string>();
  for (const entry of opts.generalEntries) {
    usedSlugs.set(`${entry.type}/${entry.slug}`, entry.source_url);
  }

  const added: SourceEntry[] = [];
  const stats = {
    removedTotal: opts.removed.length,
    reachable: 0,
    migrated: 0,
    duplicatesSkipped: 0,
    slugCollisions: 0,
    curlFailed: 0,
  };

  for (const entry of opts.removed) {
    if (opts.existingUrls.has(entry.source_url)) {
      stats.duplicatesSkipped += 1;
      continue;
    }

    const check = await opts.checkUrl(entry.source_url);
    if (!check.ok) {
      stats.curlFailed += 1;
      continue;
    }

    stats.reachable += 1;
    const slugKey = `${entry.type}/${entry.slug}`;
    let newSlug = entry.slug;
    if (usedSlugs.has(slugKey)) {
      const unique = uniqueSlug(entry.slug, entry.source_url, usedSlugs);
      if (unique !== entry.slug) {
        stats.slugCollisions += 1;
        newSlug = unique;
      }
    } else {
      usedSlugs.set(slugKey, entry.source_url);
    }

    const migrated: SourceEntry = { ...entry, slug: newSlug };
    added.push(migrated);
    opts.existingUrls.add(entry.source_url);
    usedSlugs.set(`${migrated.type}/${migrated.slug}`, entry.source_url);
    stats.migrated += 1;
  }

  return {
    added,
    updatedGeneral: [...opts.generalEntries, ...added],
    stats,
  };
}
```

**Step 2: Run test to verify it passes**

Run: `bun test sites/pages/tests/source-migration.test.ts`
Expected: PASS

**Step 3: Commit**

```bash
git add sites/pages/lib/source-migration.ts
git commit -m "feat: add source migration helper"
```

### Task 3: Add file-based migration with curl + dedup

**Files:**
- Modify: `sites/pages/lib/source-migration.ts`
- Modify: `sites/pages/lib/registry.ts` (export a helper to parse sources file, if needed)

**Step 1: Extend helper with file I/O + curl**

Add helpers:
- `readSourcesFile(path: string): Promise<SourceEntry[] | null>`
- `writeSourcesFile(path: string, entries: SourceEntry[], header: string)`
- `collectExistingUrls(sourcesDir: string, excludePath: string, nextEntries: SourceEntry[]): Promise<Set<string>>`
- `checkUrlWithCurl(url: string): Promise<UrlCheckResult>`
- `migrateRemovedSourcesFromFiles({ previousPath, nextEntries, generalPath, sourcesDir, checkUrl? })`

**Step 2: Run test to verify existing tests still pass**

Run: `bun test sites/pages/tests/source-migration.test.ts`
Expected: PASS

**Step 3: Commit**

```bash
git add sites/pages/lib/source-migration.ts sites/pages/lib/registry.ts
git commit -m "feat: add file-based migration with curl validation"
```

### Task 4: Wire migration into each ingest

**Files:**
- Modify: `sites/pages/ingest-openclaw.ts`
- Modify: `sites/pages/ingest-openai.ts`
- Modify: `sites/pages/ingest-skills-sh.ts`
- Modify: `sites/pages/ingest-obra.ts`
- Modify: `sites/pages/ingest-ibelick.ts`

**Step 1: Call migration helper before writing output**

For each ingest:
- Read previous entries from OUTPUT_PATH
- After new `entries` are computed, call `migrateRemovedSourcesFromFiles`
- Append migration stats into the report text (e.g. removed/migrated/duplicates/curl-failed)

**Step 2: Run targeted tests**

Run: `bun test sites/pages/tests/source-migration.test.ts`
Expected: PASS

**Step 3: Commit**

```bash
git add sites/pages/ingest-openclaw.ts sites/pages/ingest-openai.ts sites/pages/ingest-skills-sh.ts sites/pages/ingest-obra.ts sites/pages/ingest-ibelick.ts
git commit -m "feat: migrate removed sources into general registry"
```

### Task 5: Add lightweight guard test for ingest wiring

**Files:**
- Modify: `sites/pages/tests/tooling-paths.test.ts`

**Step 1: Add assertions that ingest scripts include migration helper**

```ts
expect(text.includes("migrateRemovedSourcesFromFiles")).toBe(true);
```

**Step 2: Run tests**

Run: `bun test sites/pages/tests/tooling-paths.test.ts`
Expected: PASS

**Step 3: Commit**

```bash
git add sites/pages/tests/tooling-paths.test.ts
git commit -m "test: ensure ingest migration hook present"
```

### Task 6: Full validation

**Step 1: Run full test suite**

Run: `bun test`
Expected: PASS

**Step 2: Run registry validation**

Run: `bun run validate`
Expected: `OK`

**Step 3: Commit if needed**

```bash
git add sources/general.yml
git commit -m "chore: update general registry from migration"
```
