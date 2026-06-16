---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.178

  - Spawn failures on an existing native binary now explain the likely libc
  mismatch (musl binary on a glibc host) and suggest
  `options.pathToClaudeCodeExecutable`

  - Permission-denied advisory messages now carry typed denial reasons
  (`safetyCheck`, `asyncAgent`), enabling SDK consumers to programmatically
  match denial causes

  - Fixed `UserPromptSubmit` hook block feedback not being emitted to the SDK
  event stream — consumers can now see why a prompt was blocked by a hook
  instead of a silent hang

  - Remote Control workers now send a `worker_shutting_down` system message on
  graceful exit so remote clients can show why the session ended

  - Fixed MCP server-level specs (`mcp__server`, `mcp__server__*`) in
  `disallowedTools` being silently ignored — they now correctly remove all tools
  from the named server

  ## 0.3.177

  - Updated to parity with Claude Code v2.1.177

  ## 0.3.176
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-16T08:55:02.085Z
content_sha256: 215c3bd7ed97c293660b7ded993e0a87a962ec7745e68e3058635f2d0868443f
---
