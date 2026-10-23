---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.309

  - Fixed host-supplied `managedSettings` dropping `disableAllHooks`,
  `disableSkillShellExecution` and empty `allowedHttpHookUrls` /
  `httpHookAllowedEnvVars` lists

  - Changed `extractFromBunfs()` to extract the embedded CLI into its own
  per-user temp directory (`claude-agent-sdk-<uid>`, or `claude-agent-sdk` on
  Windows) instead of Claude Code's temp root

  - Changed `extractFromBunfs()` to reuse an already-extracted file only when
  its bytes match the embedded binary, replacing it otherwise

  - Updated to parity with Claude Code v2.1.309

  ## 0.3.308

  - Updated to parity with Claude Code v2.1.308

  ## 0.3.307

  - Added `wakeup_source` to the `command_lifecycle` `started` frame of a
  scheduled wakeup or task, and `scheduled_for` for a wakeup (capability
  `lifecycle_wakeup_source_v1`), so a host can tell which one fired
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-10-23T12:18:46.424Z
content_sha256: 02b679b22bc23c79c03a0f4a05a53a13df2c76330b2cd814f2941303eee89e97
---
