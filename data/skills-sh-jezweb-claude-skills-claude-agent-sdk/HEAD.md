---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.306

  - Updated to parity with Claude Code v2.1.306

  ## 0.3.305

  - Added `recommendations` and `fix` to the `get_usage` response's behavior
  windows

  - Fixed servers set with `setMcpServers` being replaced later in the session
  by a same-named server from the user's own settings

  - Fixed `startup()` with `initializeTimeoutMs: null` counting time spent in
  SessionStart or Setup hooks against its 60-second limit; `null` now works like
  leaving the option out

  - Changed the `startup()` and `prewarm()` timeout error for a start with no
  open SessionStart or Setup hook: it lists possible causes and no longer says
  to check authentication and network

  - Updated to parity with Claude Code v2.1.305

  ## 0.3.304
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-10-21T12:36:23.349Z
content_sha256: 152185446133dd7627cb4d723fcb8d6c8eaf5b517a03e834d7175e3d58c301f9
---
