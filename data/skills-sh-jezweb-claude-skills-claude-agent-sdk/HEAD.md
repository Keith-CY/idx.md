---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.331

  - Added `sideload_flags_disabled` to `startup_failure_reason`, for a start
  that managed `disableSideloadFlags` refuses over a flag or launch option

  - Added `processing_at` to `getCcrEvent()`, and fixed browser SDK `sse`
  queries dropping the server's queued notices

  - Fixed the browser SDK ignoring `Retry-After` when a session's event stream
  is refused

  - Fixed the Edit and Write tool results not reporting that `canUseTool`
  changed the text through `updatedInput`

  - Fixed `listSessions()` without a limit opening every transcript at once,
  which could leave sessions out when the open-file limit was reached

  - Changed `rewindFiles()` to refuse under a managed `fileCheckpointingEnabled:
  false`, and fixed it deleting files after a restore had failed

  - Changed `task_notification.output_file` to name a foreground subagent's
  output file, as it already does for background subagents

  - Updated to parity with Claude Code v2.1.331
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-11-24T18:29:10.554Z
content_sha256: 5bfc35ac085b29aaae48643db748b22f4454c21c9009018fed0b1727a250627c
---
