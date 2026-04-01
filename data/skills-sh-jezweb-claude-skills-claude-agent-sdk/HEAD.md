---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

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

  - Fixed `side_question` returning null on resume before the first turn
  completes

  - Fixed `settingSources` empty array causing `--setting-sources ""` to consume
  the next CLI flag
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-04-01T07:31:28.245Z
content_sha256: 805fca5c6aa684245f284a9247d18e12d125e9e4e974a5af0735f63ed78845bd
---
