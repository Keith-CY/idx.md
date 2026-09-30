---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.285

  - Added an optional `read.title` (the artifact's stored title) to the Artifact
  tool's structured read result

  - Added `provider_not_allowed` to `startup_failure_reason` and
  `allowedProviders` to the `Settings` type

  - Fixed sessions with `CLAUDE_CODE_FORK_SUBAGENT=1`: a subagent's own Agent
  call now runs in the foreground, so the subagent gets the child's result

  - Fixed `getSessionMessages()` leaving out a message sent while Claude was
  working when the process stopped before the reply, or when another prompt
  followed it with no reply in between

  - Fixed `toggleMcpServer(name, false)` leaving the connection open for a
  server that had not yet connected when the session started, or whose config
  was edited after it connected

  - Fixed `rewind_conversation` leaving a backgrounded MCP tool call running
  after the message that started it was removed

  - Changed Bash/PowerShell `timeout` to bound a `run_in_background` command
  (was ignored; default 30 min, max 2 h); the `stopped` task notification for a
  stop at that limit says why

  - Changed `getSubagentMessages()` to also return the messages a subagent read
  while it ran, such as a message sent to it; `offset` and `limit` count these
  rows
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-09-30T13:12:28.763Z
content_sha256: 707a4e87ae88a78df4f74123643c82b49f3431feb862ed75160fed0fde2c4d2d
---
