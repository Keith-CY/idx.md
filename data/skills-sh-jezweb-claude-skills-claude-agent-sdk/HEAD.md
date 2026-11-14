---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.325

  - Added `archiveSession()` and `unarchiveSession()`, and an `archived` field
  on the sessions that `listSessions()` and `getSessionInfo()` return

  - Added `refuseIfBusy` to `Query.reloadPlugins()` so a host can have a reload
  refused while the session is busy

  - Added `managed_lock` to `plugin_errors` entries on `system/init`, naming the
  managed `enabledPlugins` entry that dropped a plugin copy

  - Added a `system/informational` warning, tagged `hook_no_verdict`, when a
  `PreToolUse` hook can't run or answer, or times out, without refusing its tool
  call

  - Added `invalid_config_file` to the `config_file_invalid` startup failure
  result: the broken config file's path and its backup's path as fields

  - Fixed deny rules (`disallowedTools`, `permissions.deny`, `always_deny`) that
  name an in-process SDK MCP tool or its server, or match it with a glob,
  leaving it in Claude's tool list and `system/init`

  - Fixed `supportedEffortLevels` in model info listing effort levels above the
  organization's effort cap or the `maxEffortLevel` setting

  - Changed the `sandbox` option: sandboxed Bash commands are no longer
  auto-approved unless `autoAllowBashIfSandboxed: true` is set
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-11-14T13:53:12.046Z
content_sha256: 05158c9086a0f3bf5ed6064490d2fd184af6693c2b178dbb9cb5e20be9ce7c37
---
