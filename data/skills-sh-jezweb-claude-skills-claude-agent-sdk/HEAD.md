---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.2.74

  - Added `renameSession(sessionId, title, opts?)` for renaming session files

  - Fixed `import type` from `@anthropic-ai/claude-agent-sdk/sdk-tools` failing
  under NodeNext/Bundler module resolution (missing exports map entry since
  v0.2.69)

  - Fixed skills with `user-invocable: false` being included in
  `supportedCommands()` and the `system:init` message's `slash_commands` /
  `skills` lists

  - Updated to parity with Claude Code v2.1.74

  ## 0.2.73

  - Fixed `options.env` being overridden by the `~/.claude/settings.json` env
  block when not using `user` as a `settingSources` option

  - Updated to parity with Claude Code v2.1.73

  ## 0.2.72
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-13T07:18:25.470Z
content_sha256: 73a67ceb690ec10b1a40c4ca3da2f7a8f59c982c44ba9b13540599a83f0d54a8
---
