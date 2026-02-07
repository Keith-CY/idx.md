# idx.md

Markdown registry for AI agent libraries with indexed HEAD/BODY content.

![idx.md cover](assets/og.jpg)

OG image: [https://raw.githubusercontent.com/Keith-CY/idx.md/main/assets/og.jpg](https://raw.githubusercontent.com/Keith-CY/idx.md/main/assets/og.jpg)

## What this repo provides
- A markdown-only index at `https://idx.md/index.md`
- Category indexes at `https://idx.md/category/index.md` and `https://idx.md/category/{category}/index.md`
- One topic per directory: `https://idx.md/{topic}` (HEAD) and `https://idx.md/{topic}/BODY.md`
- Integrity fields in HEAD frontmatter (`content_sha256`, `retrieved_at`)

## How to use
1. Read the index: `https://idx.md/index.md`
2. (Optional) Browse categories: `https://idx.md/category/index.md`
3. Pick a topic from the `|/data/{topic}|` line.
4. Fetch HEAD: `https://idx.md/{topic}`
5. Fetch BODY: `https://idx.md/{topic}/BODY.md`

## Registry inputs
- `sources/general.yml` (manual)
- `sources/openclaw.yml`, `sources/openai.yml`, `sources/skills-sh.yml`, `sources/obra.yml`, `sources/ibelick.yml` (auto-generated)

## Build + sync
- Build data locally: `bun sites/pages/build.ts`
- Sync to R2 and commit data: GitHub Actions `Sync R2 Data`

## Contributing
- Add sources to `sources/general.yml` or run an ingest script under `sites/pages/`
- Rebuild with `bun sites/pages/build.ts`
- Agent contribution checklist: `docs/agent-collaboration.md`

## Repo topics (suggested)
`ai-agents`, `agent-skills`, `markdown`, `index`, `registry`, `cloudflare`, `r2`, `worker`, `github-actions`, `openclaw`
