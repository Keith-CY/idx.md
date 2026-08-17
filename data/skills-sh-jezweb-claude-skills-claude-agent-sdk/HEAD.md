---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.233

  - Notification hooks now fire for pending permission prompts on the SDK path,
  matching the interactive REPL behavior

  - Todo/task-tracking tools (`TaskCreate`/`TaskGet`/`TaskUpdate`/`TaskList`,
  `TodoWrite`) are no longer in the default tool surface on Opus 4.8, Sonnet 5,
  Fable 5, Mythos 5, and newer models; name them in the `tools` option or
  reference them in `allowedTools` (or set `CLAUDE_CODE_ENABLE_TODO_TOOLS=1`) to
  keep them

  ## 0.3.232

  - Subagent MCP `tool_result` frames whose result carries `_meta` now emit
  `tool_use_result` as `{ content, _meta }` (matching main-loop frames) instead
  of a bare value

  - `/context` result messages now carry a structured `context_usage` payload
  (new `SDKContextUsage` type), so consumers can render the context-usage card
  without parsing the markdown table

  - `vcs_state_changed` events now populate the `branch` field for push
  operations, sourced from the pushed ref

  ## 0.3.231

  - Updated to parity with Claude Code v2.1.231
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-08-17T07:44:02.885Z
content_sha256: 1b582d238219eae32cff799240dffeb89ad3d04a28919c713fad135a92045faa
---
