---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.210

  - Added `timedOutAfterMs` to `BashToolOutput`, set when a command is
  auto-backgrounded on timeout

  ## 0.3.209

  - Updated to parity with Claude Code v2.1.209

  ## 0.3.208

  - Fixed a caller abort during a pending SDK hook callback being converted into
  hook success, which let PreToolUse-gated tools execute after the abort

  - Fixed a per-query resource leak in the SDK's process tracking when spawning
  the CLI fails (nonexistent or inaccessible executable path)

  - Fixed an SDK `UserPromptSubmit` hook callback exceeding its timeout killing
  the entire query with an empty error; it now blocks the prompt with a clear
  timeout message and the session continues

  - Fixed `extraArgs` values that look like flags (e.g. `resume: '--version'`)
  being parsed as their own CLI flags; dash-leading values are now bound with
  equals-form argv
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-07-15T09:05:15.411Z
content_sha256: d51bd6965def57b42d109a1c93a67db1eb45faf9802f16b4e457cb4a41117b45
---
