---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.2.114

  - Updated to parity with Claude Code v2.1.114

  ## 0.2.113

  - Changed the SDK to spawn a native Claude Code binary (via a per-platform
  optional dependency) instead of bundled JavaScript

  - Added `sessionStore` option (alpha) to `query()` and session helpers for
  mirroring session transcripts to external storage, with
  `SessionStore`/`SessionKey`/`SessionStoreEntry` types, `InMemorySessionStore`
  reference implementation, and `importSessionToStore()` for migrating existing
  sessions

  - Added `deleteSession()` for removing a session from disk or a `SessionStore`

  - Added `SDKMirrorErrorMessage` (`subtype: 'mirror_error'`) to the
  `SDKMessage` union — emitted when a `sessionStore.append()` batch fails

  - **Breaking**: `options.env` once again replaces `process.env` for the CLI
  subprocess instead of overlaying it. To add or override individual variables,
  pass `env: { ...process.env, MY_VAR: "x" }`

  - Added `title` option to `query()` — sets the session title and skips
  auto-generation
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-04-18T07:25:37.922Z
content_sha256: c6eec7bba8596c7f87c31a91e90cbcd939b80357ebae628b85cffa11484f8953
---
