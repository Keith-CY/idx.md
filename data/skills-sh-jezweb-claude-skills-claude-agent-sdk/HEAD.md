---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.2.110

  - Fixed `unstable_v2_createSession` not respecting `cwd`, `settingSources`,
  and `allowDangerouslySkipPermissions` options

  - Added optional `shouldQuery` field to `SDKUserMessage` — set to `false` to
  append a user message without triggering an assistant turn; fixed
  `shouldQuery: false` messages incorrectly triggering auto-title generation,
  prompt suggestions, and `UserPromptSubmit` hooks

  - Auto session-title generation now respects
  `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC` and
  `CLAUDE_CODE_DISABLE_TERMINAL_TITLE`

  ## 0.2.109

  - Updated to parity with Claude Code v2.1.109

  ## 0.2.108

  - `SDKStatus` now includes `'requesting'`; when `includePartialMessages` is
  enabled, a `{type:'system', subtype:'status', status:'requesting'}` message is
  emitted before each API request in the stream

  ## 0.2.107
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-04-16T07:31:50.981Z
content_sha256: 2a58968db2468a9359bd59f1df1acb342071825331febe91384596c594f8de52
---
