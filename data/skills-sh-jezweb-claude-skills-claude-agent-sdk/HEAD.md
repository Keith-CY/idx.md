---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

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

  ## 0.3.268

  - Added `result_index` to result messages: the result's position in delivery
  order within the run, from 0
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-09-12T11:24:56.104Z
content_sha256: b8e76eaff583ccb7729321a28bad3354e3012d8b3a66b63756b80bac3271441a
---
