---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.2.101

  - Security: bumped `@anthropic-ai/sdk` to `^0.81.0` and
  `@modelcontextprotocol/sdk` to `^1.29.0` to resolve GHSA-5474-4w2j-mq4c and
  transitive hono advisories

  - Fixed resume-session temp directory leaking on Windows when subprocess file
  handles weren't released before cleanup, and on macOS/APFS when `await using`
  disposal raced its own cleanup callback

  - Fixed `MaxListenersExceededWarning` when running 11+ concurrent `query()`
  calls

  ## 0.2.100

  - Updated to parity with Claude Code v2.1.100

  ## 0.2.99

  - Updated to parity with Claude Code v2.1.99

  ## 0.2.98
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-04-12T07:29:27.114Z
content_sha256: 6c146f0961599c0efb7e88dfbc31a2fcc5b2e12e7ce89fec85c9c5cb8ab1807f
---
