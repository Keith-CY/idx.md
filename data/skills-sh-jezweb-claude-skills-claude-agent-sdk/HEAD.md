---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.2.70

  - Fixed `type: "http"` MCP servers failing with HTTP 406 "Not Acceptable" on
  Streamable HTTP servers that strictly enforce the `Accept: application/json,
  text/event-stream` header

  - Changed `AgentToolInput.subagent_type` to optional — defaults to the
  `general-purpose` agent when omitted

  - Updated to parity with Claude Code v2.1.70

  ## 0.2.69

  - Added `toolConfig.askUserQuestion.previewFormat` option to configure the
  content format (`'markdown'` or `'html'`) for the `preview` field on
  AskUserQuestion tool options. The `preview` field and `annotations` output are
  now exposed in the public SDK types.

  - Added `supportsFastMode` field to `ModelInfo` indicating whether a model
  supports fast mode

  - Added `agent_id` (for subagents) and `agent_type` (for subagents and
  `--agent`) fields to hook events

  - Fixed SDK-mode MCP servers (registered via `sdkMcpServers` in the
  `initialize` control request) getting disconnected when background plugin
  installation refreshes project MCP config
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-06T07:16:37.860Z
content_sha256: 4eddcd83aec00db68ba4e33aa44bef6dd4a2088442c1d7930bd1f07861dfa966
---
