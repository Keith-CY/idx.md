---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.2.72

  - Added `agentProgressSummaries` option to enable periodic AI-generated
  progress summaries for running subagents (foreground and background), emitted
  on `task_progress` events via the new `summary` field

  - Added `getSettings()` `applied` section with runtime-resolved `model` and
  `effort` values

  - Fixed `toggleMcpServer` and `reconnectMcpServer` failing with "Server not
  found" for servers passed via `query({mcpServers})`

  - Updated to parity with Claude Code v2.1.72

  ## 0.2.71

  - Updated to parity with Claude Code v2.1.71

  ## 0.2.70

  - Fixed `type: "http"` MCP servers failing with HTTP 406 "Not Acceptable" on
  Streamable HTTP servers that strictly enforce the `Accept: application/json,
  text/event-stream` header
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-11T07:17:51.471Z
content_sha256: 0094cc4616192c57a2dca76b87bfa4813dfd5b0cf79455241f7714fd459cb148
---
