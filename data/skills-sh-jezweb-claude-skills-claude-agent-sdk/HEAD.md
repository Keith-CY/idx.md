---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.327

  - Breaking: Changed `query()`, `startup()` and `prewarm()` to refuse options
  that can't be sent to Claude Code, such as an agent with a circular or BigInt
  field. Fix the named option.

  - Breaking: Changed hook options to require arrays: a hook event's value and a
  matcher's `hooks`. A Set, generator, plain object, `true` or number is now
  refused.

  - Fixed `task_started` sending Claude Code's own text, such as a task
  notification, as `prompt` when a background subagent is woken; such an event
  now has no `prompt`

  - Fixed Claude reporting a background agent as still running when its
  permission request had waited on `canUseTool` for 30 seconds or more

  - Reverted 0.3.326's fix for a tool result from an SDK MCP server being lost,
  or delivered to another call, after a reconnect

  - Changed the JSON-RPC `id` of requests to an SDK MCP server back from a
  string to a number

  - Changed background retries for most MCP servers on other machines, reached
  by hostname over https, to go on for about a day after a drop, up from at most
  about 27 minutes

  - Deprecated `createSdkMcpServer()` servers in an agent's `mcpServers`:
  ignored with a warning, and other options apply. Move them to top-level
  `mcpServers`, which gives the main session their tools.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-11-18T16:04:54.174Z
content_sha256: 5007c6ac3f64cce317f5e8f1b1270d47a9f5659d91f749aa19a2aebf9519df9c
---
