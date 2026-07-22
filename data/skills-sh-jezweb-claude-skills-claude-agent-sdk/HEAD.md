---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.217

  - Changed subagents to no longer spawn nested subagents by default (depth cap
  lowered from 5 to 1); set `CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH` to allow
  deeper nesting

  - Added a cap on concurrently-running subagents (default 20, override with
  `CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS`)

  - Fixed Remote Control sessions not re-sending pending permission prompts to
  clients that connect after the prompt appeared

  ## 0.3.216

  - Added optional `skippedLinks` count to `rewindFiles` responses for paths the
  rewind safety guards refused to restore or delete

  - Added `tool_result_meta` sidecar to user messages (`non_execution_kind`,
  `user_feedback`) so consumers can classify denied, interrupted, or cancelled
  tool calls without string-matching result prose

  - Added optional `user_message_uuid` and `request_sent_wall_ms` fields to the
  success result message for cross-host request-latency correlation

  ## 0.3.215
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-07-22T09:22:51.359Z
content_sha256: 099b9f52167b517d225686b17da1cbe98be52c9964e65a57ae9c911352ddac68
---
