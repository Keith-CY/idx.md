---
stable_id: skills/skills-sh-onmax-nuxt-skills-nuxthub
type: skills
title: skills-sh-onmax-nuxt-skills-nuxthub
summary: >-
  # Wrangler Configuration for NuxtHub v0.10.6

  **Default (Recommended):** NuxtHub auto-generates `wrangler.json` from your
  `hub` config in `nuxt.config.ts`. No manual wrangler.jsonc required.

  **Note:** Node.js compatibility (`nodejs_compat`) is automatically enabled for
  Cloudflare Workers in v0.10.5+.

  **Manual wrangler.jsonc:** Use when you need features not auto-generated
  (observability, migrations config, etc.) or prefer explicit file-based
  configuration.

  ## Minimal (Database Only)

  ```jsonc

  {
    "$schema": "node_modules/wrangler/config-schema.json",
    "name": "my-app",
    "compatibility_flags": ["nodejs_compat"],
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/onmax/nuxt-skills/main/skills/nuxthub/references/wrangler-templates.md
license: ""
upstream_ref: https://skills.sh/onmax/nuxt-skills/nuxthub
retrieved_at: 2026-02-06T12:00:05.442Z
content_sha256: 1df7576b8c23b52e21dc0dd36dc3b586257f66bdaa36acc8d8a48eec872add8f
---
