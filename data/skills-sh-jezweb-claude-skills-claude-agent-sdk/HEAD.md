---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.270

  - Updated to parity with Claude Code v2.1.270

  ## 0.3.269

  - Changed `user_message_uuid`, `user_message_uuids` and `resume_reason` to be
  stamped on a turn's first complete assistant message as well as its first
  stream event when partial messages are on

  - Fixed `result.permission_denials` omitting Read, Edit and Write calls
  blocked by a path-scoped deny rule

  - Fixed interrupts and permission responses being delayed while a host-started
  MCP server OAuth sign-in waited on a slow authorization server

  - Fixed missing `tool_use_id` on `task_started` / `task_notification` when the
  CLI resumes a background subagent on its own; they now carry the agent's last
  call id

  - Changed plan mode to route writes through `canUseTool` even when
  `allowDangerouslySkipPermissions` is set; the flag now only enables switching
  to `bypassPermissions` later

  - Updated to parity with Claude Code v2.1.269
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-09-14T13:30:48.244Z
content_sha256: f108b7730cdd2047005572046c61a3cb7675ab15fc3c37037ba10195de5b614a
---
