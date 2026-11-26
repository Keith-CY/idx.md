---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.332

  - Added `tool_result_meta[].rewritten_by_plugin`, set when a mod's
  `session.append` hook changed a tool result

  - Added the `PreSkillShellCommand` hook event with its input and output types

  - Fixed auto mode missing mid-turn user messages where feature flags aren't
  fetched, as on clouds or with telemetry off, from Opus 4.8 on. They count as
  the user's: mark other text `isSynthetic: true`

  - Changed `Query.setPermissionMode()` to resolve with `{ mode }`, the mode now
  in effect, or `undefined`; code that holds its promise as `Promise<void>` no
  longer compiles

  - Updated to parity with Claude Code v2.1.332

  ## 0.3.331

  - Added `sideload_flags_disabled` to `startup_failure_reason`, for a start
  that managed `disableSideloadFlags` refuses over a flag or launch option

  - Added `processing_at` to `getCcrEvent()`, and fixed browser SDK `sse`
  queries dropping the server's queued notices
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-11-26T17:26:26.309Z
content_sha256: 11ef46252890750b64644ee7dcb48e8c51e2cc32b281e56ea2415a552dc57bdd
---
