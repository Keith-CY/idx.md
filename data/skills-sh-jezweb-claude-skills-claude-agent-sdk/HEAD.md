---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.312

  - Added `autoMode`, `skipAutoPermissionPrompt`, `useAutoModeDuringPlan` and
  `permissions.disableAutoMode` to the `Settings` type

  - Added `unanswered` (`skipped`, `replied_in_chat` or `dismissed`) to
  AskUserQuestion answers' per-question `annotations`; send it only when
  `system/init` lists the `ask_user_question_unanswered_v1` capability

  - Fixed `resolveSettings()` returning mistyped managed auto-mode settings,
  such as `permissions.disableAutoMode: true`, as written instead of reading
  them as the CLI does; a user or project settings file whose auto-mode keys
  hold an invalid value is now skipped, as in the CLI

  - Updated to parity with Claude Code v2.1.312

  ## 0.3.311

  - Added `cacheCreationEphemeral5mInputTokens` and
  `cacheCreationEphemeral1hInputTokens` to `ModelUsage`, splitting
  `cacheCreationInputTokens` by cache lifetime

  - Changed background start-up work to wait until the first model request is
  sent, for about 10 seconds at most, when the first message arrives during
  start-up

  - Changed the minimum supported Node.js version from 18.0.0 to 18.14.0
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-10-28T13:41:09.155Z
content_sha256: 62cb7638877cb67858cffa067a503aba102be64095546fd8184b627cd46e2f9e
---
