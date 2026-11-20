---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.329

  - Added a `system/informational` warning, tagged `managed_hooks_not_loaded`,
  when hooks in managed settings fail to load

  - Added `permissions.workingDirectoriesExclude` to the `Settings` type: paths,
  read only from `--settings` and settings the host sends, that the
  working-directory read and write blocks treat as outside

  - Fixed sessions bound with `SpareProcess.claim()` ignoring
  `autoCompactWindow` from the folder's settings or the claim's `settings`

  - Fixed retained memory when an in-process MCP server does not answer its
  start-up handshake

  - Fixed memory growth in long sessions that use `--replay-user-messages`: the
  SDK no longer keeps echoes of its own tool results and permission answers

  - Fixed an MCP server that a plugin started at launch staying connected after
  the plugin was disabled or uninstalled and `reload_plugins` ran, in headless
  and SDK sessions

  - Fixed `rewind_conversation` removing history under a message sent right
  after a model change: the request is now refused with "commands queued", and
  callers can send it again

  - Improved memory use of idle SDK sessions: after 30 seconds idle, large tool
  result data that no model request reads is released, except while Remote
  Control is on
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-11-20T15:51:10.307Z
content_sha256: 130740a89cc43c87ca8a2be7f47f43458bed07d25755411f908e263dbf4ae1f0
---
