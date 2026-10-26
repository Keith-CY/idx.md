---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.310

  - Updated to parity with Claude Code v2.1.310

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
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-10-26T13:45:41.239Z
content_sha256: 5651d2bb9d784833bdbfccb7bb3e3c294c5fcecf7f9e84b6687610fc4515b565
---
