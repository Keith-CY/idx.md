---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.221

  - Improved `skills` option validation: malformed names (delimiters or control
  characters) and wildcard-form names are rejected with a clear error; use
  `skills: 'all'` to enable every skill

  - Fixed external MCP servers passed via the `mcpServers` option not being
  connected before the first turn, which caused the model to emit tool calls as
  literal text

  ## 0.3.220

  - Updated to parity with Claude Code v2.1.220

  ## 0.3.219

  - Added opt-in `cancel_queued` to the interrupt control request (capability
  `interrupt_cancel_queued_v1`): cancels queued and pending-dispatch messages
  alongside the abort

  - Added `fast_mode_disabled_reason` to result and init messages so SDK hosts
  can explain why fast mode is off

  - Added `DirectoryAdded` lifecycle hook event to the control protocol, fired
  when a new working directory is registered mid-session
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-08-04T09:34:47.473Z
content_sha256: 1072dec83d8ad556ed485a82848617a33ad287de8f19e7565d8d7a9676c7ef13
---
