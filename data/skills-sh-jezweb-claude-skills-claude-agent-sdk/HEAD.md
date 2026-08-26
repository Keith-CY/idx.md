---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.246

  - Added optional `user_message_uuid` to error result messages and to the first
  assistant message or `stream_event` of each turn, linking a reply or failure
  to the user message that triggered it

  - Added `modelUsage[*].costBasis` (`'list' | 'managed' | 'unknown'`) reporting
  which price table each model's `costUSD` was computed from

  - Added `modelPricing` support in the `managedSettings` option for hosts that
  set `CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST`; an admin-managed settings source
  that sets `modelPricing` still wins

  - Added `perTaskStopAffordance` option: when set, `interrupt()` aborts only
  the current turn and keeps background agents and workflows running; otherwise
  (and for one-shot string prompts) they stop

  ## 0.3.245

  - Updated to parity with Claude Code v2.1.245

  ## 0.3.244

  - Updated to parity with Claude Code v2.1.244
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-08-26T07:38:47.533Z
content_sha256: 1436c929ccbee3e822e181ef0219a74de5fd0ed506644b91cc966c6d9fea65a4
---
