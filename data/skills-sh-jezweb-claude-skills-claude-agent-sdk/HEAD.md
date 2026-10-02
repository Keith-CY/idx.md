---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.287

  - Added optional remote-session latency fields
  (`first_text_post_queue_wait_ms`, `first_text_post_queued_behind`) to the
  success result message

  - Fixed `includePartialMessages` streams sending a cut-short reply's
  `message_stop` late or never, so apps could show the reply as still in
  progress

  - Fixed the error for a revoked claude.ai login, which now reads "Failed to
  authenticate: OAuth token revoked" instead of a generic or "does not have
  access" message

  - Fixed a tool call to an in-process MCP server being left waiting after
  `toggleMcpServer()` disabled the server or `setMcpServers()` removed it

  - Fixed `commands_changed` arriving before `init`, or twice, at session start:
  the `initialize` response now includes commands registered at startup

  - Changed `tool_use_result` for a WebFetch or WebSearch call that steps aside
  for a priority "now" message to `{ detachedToolCall: true }`; the result
  follows in a later turn

  - Changed `tool_use_result` for MCP tools: `structuredContent` over 1,048,576
  JSON characters is left off and `structuredContentOmitted: true` set, except
  for SDK-server and MCP Apps tools

  - Updated to parity with Claude Code v2.1.287
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-10-02T13:24:00.501Z
content_sha256: 8237245c0939b39ce9e3026c7ca145732fd53eb0e02ad294ab3528d0ee334094
---
