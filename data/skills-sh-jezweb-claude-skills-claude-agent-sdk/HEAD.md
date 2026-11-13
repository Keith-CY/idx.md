---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.323

  - Added `machinePolicy.didNotLoad` (alpha) to `resolveSettings()`'s result,
  which tells a host when a machine policy source may be there and did not load

  - Added `matchDeniedModels()` (alpha), which tells a host which models a
  `deniedModels` list blocks, by Claude Code's own entry rules

  - Added the periodic `tool_progress` heartbeat while a turn waits on
  long-running hooks; `tool_name` is the hook event, `tool_use_id` begins
  `hook-`, `parent_tool_use_id` may name no tool call

  - Added `CLAUDE_CODE_DISABLE_AGENT_PROGRESS_SUMMARIES`: set to `1` to turn off
  subagent progress summaries even when `agentProgressSummaries` is `true`
  (available since 0.3.318)

  - Added `tool_use_result` to a subagent's WebSearch result message when the
  search did not run or found nothing

  - Fixed progress notifications from SDK MCP servers being dropped for tool
  calls that were still running when the set of SDK MCP servers changed

  - Fixed `resolveSettings()` keeping its first reading of a macOS MDM profile
  or Windows registry policy for the life of the process: it now re-reads after
  30 minutes, and sooner after a read that failed

  - Fixed `forkSession()` with `upToMessageId`: forking at a compaction summary
  no longer brings back the messages kept after it, and forking at a compaction
  boundary keeps the conversation before it
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-11-13T15:00:03.595Z
content_sha256: 2a93be6a977a70386c69c65134634a18b3c065c4efcecd4aa9a1c80ed9b23ac0
---
