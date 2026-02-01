# OpenClaw ingest updates

## Purpose
Keep the OpenClaw skills registry and generated entries in sync with the upstream awesome list.

## Manual update steps
1. Run the ingest script:
   ```bash
   bun sites/pages/ingest-openclaw.ts
   ```
2. Run the build script:
   ```bash
   bun sites/pages/build.ts
   ```

## Expected outputs
After the ingest step:
- `data/sources-openclaw.yml` is rewritten with the latest OpenClaw entries.
- `reports/ingest-openclaw.md` is regenerated with counts and a UTC timestamp.

After the build step:
- `entries/skills/openclaw-*/*` is regenerated (`HEAD.md` + `BODY.md`).
- `types/skills.md`, `tags/*.md`, `recent.md`, and `catalog.md` are regenerated.
- `reports/rejected.md` is updated with any fetch or validation failures.

## Network notes
- Ingest fetches the upstream README from GitHub (raw.githubusercontent.com).
- Build fetches every `source_url` in the registry (core + OpenClaw), so it needs outbound HTTPS and can be slow or rate-limited.
- If a fetch fails, check `reports/rejected.md` and rerun when network access is stable.
