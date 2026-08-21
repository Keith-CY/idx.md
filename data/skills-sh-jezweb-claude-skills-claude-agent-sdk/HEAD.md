---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.238

  - Added `is_backgrounded` and `spawn_depth` to `task_started` events for
  subagent tasks (`is_backgrounded` also on background Bash tasks)

  - Added `suppressOriginalPrompt` to `UserPromptExpansion` hook output,
  matching `UserPromptSubmit`

  - Added `command_lifecycle` state `refused`: a cross-session peer message the
  session's receive-side policy declines now reports this terminal state instead
  of producing no lifecycle frames

  - Fixed SDK hook callbacks silently not applying after a host re-sends
  `initialize` to an already-running CLI; the response now reports
  `hooks_applied`

  - Fixed `CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION=true` not keeping
  `prompt_suggestion` messages on when the account is near, but not over, its
  usage limit

  - Changed `vcs_state_changed` push events to emit one event per pushed branch

  ## 0.3.237

  - Updated to parity with Claude Code v2.1.237
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-08-21T07:35:08.839Z
content_sha256: 200ba0bd1590802b8ea16e3f043dad135610b4b3de77125a1210f132673d1271
---
