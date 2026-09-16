---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.273

  - Added a `usage_report` sibling (`SDKUsageReport`: session totals, the plan's
  usage rows as the server sends them, extra usage) on the assistant message
  that delivers a headless `/usage` result

  - Added `reason: "worker_restart"` to `task_notification` messages when a
  background task was stopped by a worker process restart

  - Added a one-line transcript notice when the SDK host's `Stop` or
  `SessionStart` hook callback times out, shown once until the host answers
  again

  - Fixed a `Stop`, `SubagentStop` or `SessionStart` hook callback that exceeds
  its timeout being reported as a hook failure and discarding other hooks'
  decisions; it now counts as no decision

  - Fixed the browser SSE transport dropping the live slash-command list update
  (`system/commands_changed`)

  - Updated to parity with Claude Code v2.1.273

  ## 0.3.272

  - Updated to parity with Claude Code v2.1.272
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-09-16T12:20:41.151Z
content_sha256: 25639e59ecfed65f90e6bbfff62b53b66bfecb6629477514653edd4c36004a24
---
