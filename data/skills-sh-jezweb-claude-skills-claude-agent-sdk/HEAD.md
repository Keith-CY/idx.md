---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.2.83

  - Added `seed_read_state` control subtype to seed `readFileState` with `{path,
  mtime}` so `Edit` works after the originating `Read` was removed from context

  - Changed `session_state_changed` events to opt-in: set
  `CLAUDE_CODE_EMIT_SESSION_STATE_EVENTS=1` to receive them

  - Updated to parity with Claude Code v2.1.83

  ## 0.2.82

  - Updated to parity with Claude Code v2.1.82

  ## 0.2.81

  - Fixed `canUseTool` not providing a working `addRules` suggestion when a
  write under `.claude/skills/{name}/` hits the bypass-immune safety check

  - Updated to parity with Claude Code v2.1.81
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-25T07:22:35.572Z
content_sha256: 5a14303a619d670061618648c38eaafff980bcea1e96872b536fa4fbf75b1f8a
---
