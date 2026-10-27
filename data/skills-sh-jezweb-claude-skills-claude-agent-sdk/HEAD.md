---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.311

  - Added `cacheCreationEphemeral5mInputTokens` and
  `cacheCreationEphemeral1hInputTokens` to `ModelUsage`, splitting
  `cacheCreationInputTokens` by cache lifetime

  - Changed background start-up work to wait until the first model request is
  sent, for about 10 seconds at most, when the first message arrives during
  start-up

  - Changed the minimum supported Node.js version from 18.0.0 to 18.14.0

  - Updated to parity with Claude Code v2.1.311

  ## 0.3.310

  - Updated to parity with Claude Code v2.1.310

  ## 0.3.309

  - Fixed host-supplied `managedSettings` dropping `disableAllHooks`,
  `disableSkillShellExecution` and empty `allowedHttpHookUrls` /
  `httpHookAllowedEnvVars` lists
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-10-27T12:53:08.266Z
content_sha256: b633e76515939e41ca84ff2e284204f0ba6558c70c8bd6f3fcfbd4c452514af7
---
