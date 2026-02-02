# idx.md

Markdown registry for AI agent libraries with indexed HEAD/BODY content.

## What this repo provides
- A markdown-only index at `https://idx.md/index.md`
- One topic per directory: `https://idx.md/{topic}` (HEAD) and `https://idx.md/{topic}/BODY.md`
- Integrity fields in HEAD frontmatter (`content_sha256`, `retrieved_at`)

## How to use
1. Read the index: `https://idx.md/index.md`
2. Pick a topic from the `|/data/{topic}|` line.
3. Fetch HEAD: `https://idx.md/{topic}`
4. Fetch BODY: `https://idx.md/{topic}/BODY.md`

## Registry inputs
- `sources/general.yml` (manual)
- `sources/openclaw.yml`, `sources/openai.yml`, `sources/skills-sh.yml`, `sources/obra.yml`, `sources/ibelick.yml` (auto-generated)

## Build + sync
- Build data locally: `bun sites/pages/build.ts`
- Sync to R2 and commit data: GitHub Actions `Sync R2 Data`

## Contributing
- Add sources to `sources/general.yml` or run an ingest script under `sites/pages/`
- Rebuild with `bun sites/pages/build.ts`

## Repo topics (suggested)
`ai-agents`, `agent-skills`, `markdown`, `index`, `registry`, `cloudflare`, `r2`, `worker`, `github-actions`, `openclaw`
