---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

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

  - Fixed breaking change: `system:init` and `result` events now emit `'Task'`
  as the Agent tool name again (reverted from `'Agent'`, which was an
  unintentional breaking change in a patch release). The wire name will migrate
  to `'Agent'` in the next minor release.

  - Fixed control responses with malformed `updatedPermissions` from SDK hosts
  blocking tool calls with a ZodError; the invalid field is now stripped and a
  warning is logged instead.

  - Improved memory usage of `getSessionMessages()` for large sessions with
  compacted history

  ## 0.2.68
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-05T07:17:21.532Z
content_sha256: 0d2222fcb2ff69d323e5e25e830f7c16d02f9e155a806a2e61ed39a25df3f1eb
---
