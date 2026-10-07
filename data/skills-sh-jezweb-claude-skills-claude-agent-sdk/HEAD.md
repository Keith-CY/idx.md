---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.292

  - Added `agent_id` to the `assistant` and `user` messages a subagent produces;
  it equals the `task_id` on that subagent's task events and stays the same when
  the subagent is resumed

  - Added `parent_task_id` to `task_started` events and
  `background_tasks_changed` entries, naming the subagent task that launched a
  task

  - Added `run_id` to background task events and `origin.runId` to task
  notifications, so a host can tell a resumed task's runs apart

  - Added typed `sections` and `notes` to the `ListAgents` tool's
  `tool_use_result`, so hosts can list agents without parsing its text

  - Added `recipient_kind` to SendMessage `tool_use` inputs on assistant
  messages, and their top-level `approve` is now always a boolean, so hosts no
  longer infer them from the raw input

  - Added two optional fields to the `ReadNotifications` tool output: `read_at`,
  when the tool read the session's queued notifications, and `arrived_at` on
  each notification, when it reached the session

  - Fixed subagents with a declared auto permission mode having their tool calls
  decided by the auto-mode classifier instead of the canUseTool callback when
  auto mode is unavailable

  - Changed `background_tasks_changed` for a finishing background task to arrive
  after that task's `task_updated` and `task_notification`
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-10-07T14:04:50.419Z
content_sha256: 3be530a0692692517c8585bc9f1b6af2cb26ad932133bbc0ace410e991f86837
---
