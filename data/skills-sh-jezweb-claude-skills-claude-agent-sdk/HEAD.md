---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.294

  - Updated to parity with Claude Code v2.1.294

  ## 0.3.293

  - Added an optional `subagent_type` to `background_tasks_changed` task
  entries, so hosts can name each subagent's type without pairing with
  `task_started`

  - Updated to parity with Claude Code v2.1.293

  ## 0.3.292

  - Added `agent_id` to the `assistant` and `user` messages a subagent produces;
  it equals the `task_id` on that subagent's task events and stays the same when
  the subagent is resumed

  - Added `parent_task_id` to `task_started` events and
  `background_tasks_changed` entries, naming the subagent task that launched a
  task

  - Added `run_id` to background task events and `origin.runId` to task
  notifications, so a host can tell a resumed task's runs apart
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-10-08T14:15:10.560Z
content_sha256: adfe6e18149c66093a1a432c9b58a1efc817c788306c4feaa8aaf51310b064a5
---
