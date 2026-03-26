---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.2.84

  - Added `taskBudget` option for API-side token budget awareness, allowing the
  model to pace tool use within a token limit

  - Added `enableChannel()` method and `capabilities` field on `McpServerStatus`
  for SDK-driven MCP channel activation

  - Exported `EffortLevel` type (`'low' | 'medium' | 'high' | 'max'`) for
  consumers to reference effort values directly

  - Fixed showing "[Request interrupted by user]" for errors that were not
  caused by user interruption

  - Updated to parity with Claude Code v2.1.84

  ## 0.2.83

  - Added `seed_read_state` control subtype to seed `readFileState` with `{path,
  mtime}` so `Edit` works after the originating `Read` was removed from context

  - Changed `session_state_changed` events to opt-in: set
  `CLAUDE_CODE_EMIT_SESSION_STATE_EVENTS=1` to receive them
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-26T07:27:34.924Z
content_sha256: 7cb77295eb3694039412ac51975e827356b8e4847d1198c4e145372cc5d9e687
---
