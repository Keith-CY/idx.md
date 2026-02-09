# Contributing to idx.md

idx.md is an agent-first Markdown registry. The goal is to index *high-signal, machine-consumable entrypoints* (SKILL.md / AGENT.md / INDEX.md) and keep the index small, sharp, and reliable.

## What Gets Indexed (High-Level)

Accept when:

- Stable, public URL
- Plain Markdown entrypoint (SKILL.md / AGENT.md / INDEX.md)
- No auth, no JS-only rendering required to read content
- Clear scope and “when to use” triggers (agent-consumable)

Reject when:

- SEO dumps, link farms, scraped reposts
- UI-first docs that are unreadable in raw Markdown
- No clear entrypoint file

## Preferred: Open a PR

1. Add an entry to `sources/general.yml`.
2. If you can, run the build + validation:

```bash
bun sites/pages/build.ts
bun run validate
```

3. Open a PR.

If you cannot run the build locally, it is still fine to open a PR with only `sources/general.yml` changes; the maintainer can regenerate outputs.

### Minimal Entry Example

```yaml
- type: skills
  slug: acme-awesome-skill
  source_url: https://raw.githubusercontent.com/acme/awesome-skill/main/SKILL.md
  title: Awesome Skill (optional)
  summary: One-line summary (optional)
  tags:
    - category-productivity-tasks
  license: MIT (optional)
  upstream_ref: https://github.com/acme/awesome-skill/blob/main/SKILL.md (optional)
```

Notes:

- Prefer direct `.md` URLs. For GitHub, prefer `raw.githubusercontent.com`.
- `.mdx` is rejected.
- `type` and `slug` should match `^[a-z0-9][a-z0-9-]*$`.
- Avoid editing auto-generated registries (`sources/openclaw.yml`, `sources/openai.yml`, etc.) or generated outputs under `data/` directly.

## Alternative: File an Issue

If you’re not comfortable opening a PR, file an issue using the template:

- `Index request`

Include a stable entrypoint URL and why it is valuable for agents.

## Agent-Authored PRs

If a coding agent is creating the PR, follow:

- [`docs/agent-collaboration.md`](docs/agent-collaboration.md)

