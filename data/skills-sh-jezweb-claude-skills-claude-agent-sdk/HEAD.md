---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.161

  - The `initialize` control request is now idempotent: a second `initialize`
  returns the same success payload instead of an `Already initialized` error.
  `ControlResponse` gains an optional `pending_permission_requests` field,
  mirroring `ControlErrorResponse`

  - `applyFlagSettings` now live-applies `agent` changes: switching the active
  agent (or passing `null` to reset) takes effect on the next turn in a running
  session

  ## 0.3.160

  - Fixed SDK hook callbacks swallowing abort signals: aborting during a
  PostToolUse hook now ends the turn with a final `result` message instead of
  hanging the calling process

  ## 0.3.159

  - Updated to parity with Claude Code v2.1.159

  ## 0.3.158

  - Updated to parity with Claude Code v2.1.158
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-03T08:38:07.170Z
content_sha256: f637fbad91f1e0a7b1f54ce3d07b380235b93b05afe1609c5b4b9f3a55bb0912
---
