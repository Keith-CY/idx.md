---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.227

  - Updated to parity with Claude Code v2.1.227

  ## 0.3.226

  - Updated to parity with Claude Code v2.1.226

  ## 0.3.225

  - Fixed background subagents in headless/SDK sessions never resuming when a
  background shell command or Monitor they left running completed, so the
  subagent never saw the result

  ## 0.3.224

  - Added `crossSessionInbound` and `dialogExpiry` settings: cross-session
  messages sent to a session running with bypassed permissions are held for your
  approval, and messages to other sessions auto-deliver

  - Added `subkind: 'peer-send-message'` to the `task-notification` member of
  `SDKMessageOrigin`, marking a notification raised by a cross-session
  `SendMessage`
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-08-11T08:04:40.330Z
content_sha256: dd59efbcaa5647134b06997afde5d30d8a24f9c1dfb4f9cf713426df012f68c9
---
