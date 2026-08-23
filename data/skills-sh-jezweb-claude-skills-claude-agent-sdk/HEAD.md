---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.241

  - Updated to parity with Claude Code v2.1.241

  ## 0.3.240

  - Updated to parity with Claude Code v2.1.240

  ## 0.3.239

  - `total_cost_usd` / `modelUsage.costUSD` now include the 1.1×
  US-only-inference (data residency) multiplier when the response reports
  `inference_geo: "us"`

  - A result held back for background subagents in one-shot mode now reports
  `total_cost_usd`, `duration_api_ms` and `modelUsage` as of its release, not
  the turn-end snapshot

  - Fixed `SYSTEM_PROMPT_DYNAMIC_BOUNDARY` in an array `systemPrompt` being sent
  to the model as literal text on Bedrock, Vertex, Foundry, and gateway
  providers

  - A repeated `initialize` on a running process is now followed by a
  `background_tasks_changed` snapshot of the live background tasks, so
  reconnecting hosts see work that is still running
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-08-23T07:25:21.902Z
content_sha256: 0695b23e112469aa9d2894ce96d2145080e1575cc11179bf8b20fbf8f4a6696d
---
