---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.2.88

  - Added `includeSystemMessages` option to `getSessionMessages()` to optionally
  include system messages in session history

  - Added `includeHookEvents` option to enable hook lifecycle messages
  (`hook_started`, `hook_progress`, `hook_response`) for all hook event types

  - Fixed error result messages (`error_during_execution`, `error_max_turns`,
  `error_max_budget_usd`) to correctly set `is_error: true` with descriptive
  messages

  - Fixed `side_question` returning null on resume before the first turn
  completes

  - Fixed MCP servers getting permanently stuck in a failed state after a
  connection race — they now retry on the next message

  - Fixed `StructuredOutput` schema cache bug causing ~50% failure rate in
  workflows with multiple schemas

  - Fixed `ERR_STREAM_WRITE_AFTER_END` errors when single-turn queries with MCP
  servers or hooks have control responses arriving after the result message

  - Fixed Zod v4 field `.describe()` metadata being dropped from
  `createSdkMcpServer` tool schemas
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:31:14.795Z
content_sha256: ccdf086e199677b3bb554b6c671c9dc21f2823cf96dca835b5a7ac83e5be4af7
---
