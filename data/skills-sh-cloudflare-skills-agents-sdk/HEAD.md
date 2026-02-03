---
stable_id: skills/skills-sh-cloudflare-skills-agents-sdk
type: skills
title: skills-sh-cloudflare-skills-agents-sdk
summary: >-
  # State & Scheduling

  Fetch `docs/state.md` and `docs/scheduling.md` from
  `https://github.com/cloudflare/agents/tree/main/docs` for complete
  documentation.

  ## State Management

  State persists to SQLite and broadcasts to connected clients automatically.

  ### Define Typed State

  ```typescript

  type State = {
    count: number;
    items: string[];
  };
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/cloudflare/skills/main/skills/agents-sdk/references/state-scheduling.md
license: ""
upstream_ref: https://skills.sh/cloudflare/skills/agents-sdk
retrieved_at: 2026-02-03T18:12:18.527Z
content_sha256: 98e4ca42fd60b71bba13f9eac42e4e720af11a21c5f5b100b5e7ee7affd48c50
---
