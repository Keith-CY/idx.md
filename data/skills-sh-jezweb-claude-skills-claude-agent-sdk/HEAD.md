---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.280

  - Added optional `fireReason` to the task-notification `SDKMessageOrigin`; a
  local host's declared scheduled-task fire is honored only in a process it
  started with `CLAUDE_CODE_HOST_SCHEDULED_RUN=1`

  - Added `verbatimPrompts` option: prompts are delivered as written — no
  `@path` expansion, no slash-command dispatch and, on current CLIs, no ambient
  attachments with the prompt (Claude Code 2.1.248+)

  - Added `_meta` to `mcpServerStatus()` tool entries, carrying a tool's MCP
  Apps `ui` metadata so a host can find its `ui://` resource

  - Added `readMcpResource()` (alpha) to read an MCP Apps `ui://` resource from
  an MCP server that Claude Code connected

  - Improved `askSideQuestion()`: asked while a turn is running, it now sees
  that turn (its prompt, replies and finished tool results so far) instead of
  only the last completed turn

  - Improved unattended retry (`CLAUDE_CODE_RETRY_WATCHDOG`): a usage-limit wait
  emits `rate_limit_event` (`rejected`, `resetsAt`) as it begins; `api_retry`
  heartbeats continue while sub-agent work waits

  - Changed `session_state_changed` events
  (`CLAUDE_CODE_EMIT_SESSION_STATE_EVENTS=1`) to report `requires_action` while
  an MCP elicitation waits on the user, as for permission prompts

  - Changed headless sessions to cancel an MCP server's pending form question
  when the tool call that drew it ends
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-09-23T12:27:57.692Z
content_sha256: 8c7d01eff2fb98a2199d6844d30a1e8c6e903a82e299795763f231b72361f740
---
