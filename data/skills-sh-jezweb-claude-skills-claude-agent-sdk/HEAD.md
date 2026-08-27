---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.247

  - Added an optional `ambient` flag to `task_started`, `task_notification` and
  `background_tasks_changed` task entries so hosts can exclude housekeeping
  tasks from activity indicators

  - Fixed the `permissionMode` on per-turn `system/init` frames reporting the
  mode at turn start instead of the live mode, so a mode switch right after
  submitting no longer sends a stale value

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
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-08-27T17:59:23.527Z
content_sha256: 7a7824e0c69e4c824f57ec1368f201f7f6cc2b5db6f6c8c781198c989e094f08
---
