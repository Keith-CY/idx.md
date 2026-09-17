---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.274

  - Added `startup_failure_reason` to the error result a stream-json run writes
  before exiting on a known startup failure

  - Added `mcpServer: {name, source}` to `canUseTool` options, `mcp_server` to
  tool hook inputs, and `source` to MCP server status rows, so hosts can key
  trust on `source === "sdk"`

  - Added `CLAUDE_CODE_MCP_STARTUP_WAIT_MS` (pass via `env`) to bound or disable
  (`0`) the first-turn wait for connecting MCP servers

  - Added `CLAUDE_CODE_EMIT_STARTUP_TIMING=1` for stream-json hosts: the
  session's first `system/init` then carries the per-phase `startup_timing`
  breakdown that cloud sessions already emit

  - Fixed `getSessionMessages()` omitting a message the user sent while Claude
  was running a tool; it now comes back as a user message where Claude read it

  - Fixed missing `origin: {kind: 'task-notification'}` on the replayed user
  message when a background task finishes during a running turn
  (`--replay-user-messages`)

  - Improved startup: the first turn no longer waits up to 2s for connecting MCP
  servers from settings files or plugins whose tools tool search defers;
  `options.mcpServers` servers are still awaited

  - Changed queued background-task completions to share one model call: each
  still gets its own `result`, all but the last empty with `num_turns: 0`
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-09-17T12:20:14.781Z
content_sha256: 7c245aeb436b682ca7a12757ca35473dd2e8dbe67c01acdf0f9e45b794820db4
---
