---
stable_id: skills/openai-curated-sentry
type: skills
title: openai-curated-sentry
summary: >-
  ---

  name: "sentry"

  description: "Use when the user asks to inspect Sentry issues or events,
  summarize recent production errors, or pull basic Sentry health data via the
  Sentry API; perform read-only queries with the bundled script and require
  `SENTRY_AUTH_TOKEN`."

  ---

  # Sentry (Read-only Observability)

  ## Quick start

  - If not already authenticated, ask the user to provide a valid
  `SENTRY_AUTH_TOKEN` (read-only scopes such as `project:read`, `event:read`) or
  to log in and create one before running commands.

  - Set `SENTRY_AUTH_TOKEN` as an env var.

  - Optional defaults: `SENTRY_ORG`, `SENTRY_PROJECT`, `SENTRY_BASE_URL`.

  - Defaults: org/project `{your-org}`/`{your-project}`, time range `24h`,
  environment `prod`, limit 20 (max 50).
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/sentry/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/sentry/SKILL.md
retrieved_at: 2026-02-05T06:07:16.379Z
content_sha256: b598ea447ad6bec923f5c3879ace25e4a7f1368a7eac019b5c0e2f79a36322c6
---
