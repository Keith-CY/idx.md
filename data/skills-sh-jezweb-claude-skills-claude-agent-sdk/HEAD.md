---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.319

  - Added MCP task support in SDK sessions (not on Bedrock, Vertex or Foundry):
  with `CLAUDE_AUTO_BACKGROUND_TASKS=1` and streaming input, an MCP task runs in
  the background with `task_type` `"mcp_task"`

  - Fixed the OpenTelemetry `claude_code.session.count` metric counting
  `prewarm()` processes that were never claimed; a pre-started process now
  counts once, when `SpareProcess.claim()` succeeds

  - Fixed `session_writes_lost` listing the wrong session in
  `transcript_session_ids` after `/clear` in a session resumed from a transcript
  file outside the projects folder

  - Improved `deleteSession()` to reject with `ENOTEMPTY` if the session's
  folder could not be fully deleted

  - Changed `session_writes_lost` to be sent only when the CLI exits 0; a run
  that ends on an error result now gets only the stderr line

  - Updated to parity with Claude Code v2.1.319

  ## 0.3.318

  - Added an optional `credential_expires_at` field to result messages: when the
  stored claude.ai sign-in in use ends
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-11-09T17:00:48.136Z
content_sha256: 462dd97caf179d45f8603f29dc6921640509b03f393ecc651257939591684223
---
