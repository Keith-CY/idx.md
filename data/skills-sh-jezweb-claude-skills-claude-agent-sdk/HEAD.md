---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.237

  - Updated to parity with Claude Code v2.1.237

  ## 0.3.236

  - `PostToolUse` hooks can return `hookSpecificOutput.classifierContext`, a
  short host-asserted note about a tool call's result that the auto mode
  permission classifier reads alongside that result

  ## 0.3.235

  - Updated to parity with Claude Code v2.1.235

  ## 0.3.234

  - Removed unused `bypass_permissions_disabled` from `ExitReason` type; the
  value was never emitted — TypeScript consumers with an explicit `case` branch
  get a compile error on upgrade (runtime unaffected)

  - Updated the `ApiKeySource` type to include the values `system/init` actually
  reports (`ANTHROPIC_API_KEY`, `apiKeyHelper`, `/login managed key`, `none`)
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-08-20T07:33:04.156Z
content_sha256: c7217eb208a4116f1f437e88a3e1fc07436b09b209bf709cb7249aa4546fd4d0
---
