---
stable_id: skills/openai-curated-sentry
type: skills
title: openai-curated-sentry
summary: >-
  ---

  name: "sentry"

  description: "Use when the user asks to inspect Sentry issues or events,
  summarize recent production errors, or pull basic Sentry health data via the
  Sentry CLI; perform read-only queries using the `sentry` command."

  ---

  # Sentry (Read-only Observability)

  ## Quick start

  - If not already authenticated, ask the user to run `sentry auth login` or set
  `SENTRY_AUTH_TOKEN` as an env var.

  - The CLI auto-detects org/project from DSNs in `.env` files, source code,
  config defaults, and directory names. Only specify `<org>/<project>` if
  auto-detection fails or picks the wrong target.

  - Defaults: time range `24h`, environment `production`, limit 20.

  - Always use `--json` when processing output programmatically. Use `--json
  --fields` to select specific fields and reduce output size.
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/sentry/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/sentry/SKILL.md
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-05-25T08:29:31.174Z
content_sha256: 508c6f5c100586c81a34397d30f00f4b8771b66d698a7ac1836998df925dd007
---
