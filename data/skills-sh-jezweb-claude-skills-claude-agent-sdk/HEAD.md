---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.330

  - Added a `system/informational` warning, tagged `settings_not_in_effect`,
  when `settings` or a user, project or local settings file fails validation and
  is not in effect

  - Fixed Claude still waiting for a background agent that `stopTask()` stopped
  just as it finished

  - Fixed variables that a `SessionStart` hook writes to `CLAUDE_ENV_FILE` not
  reaching the Bash tool with the `continue` option

  - Fixed Google Cloud's Agent Platform sessions ignoring `fastMode` in
  `settings` when the model comes from `ANTHROPIC_MODEL` or a settings file;
  such sessions now bill at the fast mode price

  - Fixed the initialize response's `fast_mode_state` describing the default
  model instead of the model the session runs

  - Fixed a lost or swapped tool result from an SDK MCP server when a call
  overlapped a reconnect; while an earlier request is unanswered, a new one can
  carry an `id` of 1,048,576 or more

  - Changed the TypeScript SDK's `query()` to fail with an error when `settings`
  is a JSON string that doesn't parse

  - Updated to parity with Claude Code v2.1.330
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-11-21T15:00:40.237Z
content_sha256: 3aa03285b0f26e5274af02a6ae41c06df0a2e5f8ab7aceb7d2b43cf5e911762b
---
