# Skills.sh Ingest Design (All-Time Top 1000)

## Goals
- Add an automated ingest for skills.sh All-Time Top 1000.
- Preserve ranking order for the skills.sh registry.
- Enforce “pure markdown only” sources (`.md` only, reject `.mdx`).
- Probe for missing `.md` files without using the GitHub API.
- Avoid duplicates by placing probed findings into `sources/general.yml`.

## Source Discovery
1) **Auto-detect** an endpoint:
   - Try `sitemap.xml` or any JSON/feeds (if present).
   - If none found, parse the skills.sh homepage leaderboard (All Time).
2) Collect up to **Top 1000** skill links in ranking order.
3) For each skill link:
   - Extract owner/repo/skill slug and the skill page URL.
   - Store the skill page URL as `upstream_ref`.

## Registry Output
- **`sources/skills-sh.yml`** (auto-generated, ranking order preserved):
  - Include entries with direct `.md` URLs (or normalized GitHub raw URLs).
  - Tag with `skills-sh`, `skills-sh-all-time`.
  - Slug format: `skills-sh-<owner>-<repo>-<skill>`.
- **`sources/general.yml`** (manual/curated):
  - For entries requiring probe-only detection, add discovered `.md` URLs.
  - Tag with `skills-sh-probed`.
  - Skip these entries in `sources/skills-sh.yml` to avoid duplicates.

## Probe-Only Discovery (No GitHub API)
Try raw paths against `main`, then `master`:
- `SKILL.md`
- `skill.md`
- `docs/SKILL.md`
- `docs/skill.md`

If a valid `.md` is found, add to `sources/general.yml`. Otherwise, record the miss.

## Script & Tests
- New script: `sites/pages/ingest-skills-sh.ts`.
- Parser logic in `sites/pages/lib/skills-sh-parse.ts`.
- Tests:
  - Parse leaderboard HTML into skill links.
  - Map skill link -> owner/repo/skill.
  - Generate probe candidates and normalize raw URLs.
  - Preserve ranking order.
  - Handle slug collisions with suffixes.

## Reporting & CI
- Write `data/reports/ingest-skills-sh.md` with counts and failures.
- Upload report as a GitHub Actions artifact (like existing ingest reports).
- Continue enforcing `.md`-only via `validateSourceUrl`.

## Non-Goals
- No GitHub API usage or token handling.
- No `.mdx` support.
