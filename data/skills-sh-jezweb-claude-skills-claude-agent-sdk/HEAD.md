---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.272

  - Updated to parity with Claude Code v2.1.272

  ## 0.3.271

  - Added optional `omitClaudeMd` to `AgentDefinition` in the `agents` option,
  so a subagent can run without user, project and local CLAUDE.md files; managed
  policy files still load

  - Fixed `listSessions`, `getSessionMessages` and `getSessionInfo` with `dir`
  on Windows not finding sessions for a directory on a mapped network drive or
  SUBST drive

  - Fixed `sessionStore` resume losing the global config when it is stored under
  the legacy `.config.json` name or an OAuth-suffixed file name

  - Removed `persistent` from the `MonitorInput` tool type

  - Updated to parity with Claude Code v2.1.271

  ## 0.3.270
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-09-15T12:23:05.285Z
content_sha256: 662e3c1702da81a7e3892728f6464e091076adb61962ed3291e18a038910b509
---
