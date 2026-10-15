---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.300

  - Fixed `importSessionToStore` skipping transcript rows that contain a Unicode
  line or paragraph separator (U+2028, U+2029) on Node 24 and Bun

  - Fixed a background subagent's final report in auto mode being joined into
  one turn with another message from the same subagent; the report now always
  runs as its own turn

  - Fixed `rewind_conversation` with `interrupt_if_running` stopping the running
  turn before refusing with "unseen later turn"

  - Reverted `canUseTool` options carrying `suppressAlwaysAllowRule: true` for
  connector tools that an organization set to require approval (added in
  0.3.292)

  - Improved the browser SDK bundle (`@anthropic-ai/claude-agent-sdk/browser`):
  40% smaller to download, by no longer bundling a Node `crypto` polyfill

  - Changed `thinking: { type: 'disabled' }` and `maxThinkingTokens: 0` to run
  as adaptive thinking on models that can't turn thinking off

  - Changed `updatedInput` from PreToolUse and PermissionRequest hook callbacks:
  it is now validated like Claude's own input and unknown keys are dropped;
  `canUseTool` is unchanged

  - Updated to parity with Claude Code v2.1.300
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-10-15T12:20:03.009Z
content_sha256: 681f5f3a583c9c2c03b06ec9a9255a39dd48587c6d8d78d517859807efdd6bd3
---
