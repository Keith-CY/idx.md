---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.278

  - Updated to parity with Claude Code v2.1.278

  ## 0.3.277

  - Added an optional `builtin` field to `SlashCommand`, set when a command is
  built into Claude Code

  - Added `pasted_content` to `SDKUserMessage`: text the user pasted rather than
  typed, appended after the typed prompt

  - Added optional remote-session latency fields (`first_text_post_ms`,
  `first_text_post_wall_ms`, `first_stream_post_queue_wait_ms`,
  `first_stream_post_queued_behind`) to the success result message

  - Added `'userSettings'` as an `updateSettings()` source, accepting only
  `effortLevel`, which is saved for the session's current model as `/effort`
  saves it

  - Fixed a resumed or forked session's `total_cost_usd`, `modelUsage` and
  `get_usage` totals starting at zero instead of continuing from the earlier
  turns (`maxBudgetUsd` is unchanged)

  - Changed `SDKUsageReport` usage rows to always carry `severity` and
  `is_active`: the report relays only rows from a live server reply, and none
  while the usage fetch is failing
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-09-22T12:14:25.998Z
content_sha256: 9d46ff24dc9ebd11cbabdee3cef54556e9b5e53335f62877d8fe17710ad35d12
---
