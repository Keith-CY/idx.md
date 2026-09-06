---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.263

  - Updated to parity with Claude Code v2.1.263

  ## 0.3.262

  - Updated to parity with Claude Code v2.1.262

  ## 0.3.261

  - Added `pluginDelivery: 'initialize'` to send `plugins` over stdin so the
  launch command line no longer grows with the plugin count (fixes Windows start
  failures with many plugins)

  - Fixed `query()` throwing "Object not disposable" in runtimes without a
  native `Symbol.dispose`, such as Node ≤22 `vm` contexts (Jest's `node`
  environment, vitest `vmThreads`/`vmForks`) and Node <18.18

  - Updated to parity with Claude Code v2.1.261

  ## 0.3.260
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-09-06T11:27:31.571Z
content_sha256: b92fd4b97b0947b9e8dfaa859c8a39a925c7c4a929b37a6c0adfd8bca6250522
---
