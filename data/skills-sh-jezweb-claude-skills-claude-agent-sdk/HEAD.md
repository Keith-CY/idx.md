---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.2.86

  - Added `getContextUsage()` control method to retrieve a breakdown of context
  window usage by category

  - Made `session_id` optional in `SDKUserMessage` type — callers no longer need
  to provide a session ID when sending user messages, as the SDK assigns one
  automatically

  - Fixed TypeScript types resolving to `any` by adding `@anthropic-ai/sdk` and
  `@modelcontextprotocol/sdk` as dependencies

  - Updated to parity with Claude Code v2.1.86

  ## 0.2.85

  - Added `reloadPlugins()` SDK method to reload plugins and receive refreshed
  commands, agents, and MCP server status

  - Fixed PreToolUse hooks with `permissionDecision: "ask"` being ignored in SDK
  mode

  - Updated to parity with Claude Code v2.1.85
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-28T07:19:20.826Z
content_sha256: d78fa8c8d6b8aa6633d71e6480e1fe8c465369194745abe3663b60e073992cf3
---
