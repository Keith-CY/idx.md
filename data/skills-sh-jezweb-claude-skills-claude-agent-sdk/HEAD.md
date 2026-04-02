---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.2.90

  - Updated to parity with Claude Code v2.1.90

  ## 0.2.89

  - Added `startup()` to pre-warm the CLI subprocess before `query()`, making
  the first query ~20x faster when startup cost can be paid upfront

  - Added `includeSystemMessages` option to `getSessionMessages()` to optionally
  include system messages in session history

  - Added `listSubagents()` and `getSubagentMessages()` functions to retrieve
  subagent conversation history from sessions

  - Added `includeHookEvents` option to enable hook lifecycle messages
  (`hook_started`, `hook_progress`, `hook_response`) for all hook event types

  - Fixed `ERR_STREAM_WRITE_AFTER_END` errors when single-turn queries with SDK
  MCP servers or hooks have control responses arriving after the result message

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
retrieved_at: 2026-04-02T07:29:35.244Z
content_sha256: 3941c5f5f65f9dbf697ad0b7a75934d9e6e78940df72d722b000cb4531f3cab6
---
