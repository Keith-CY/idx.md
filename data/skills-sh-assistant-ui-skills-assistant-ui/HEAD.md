---
stable_id: skills/skills-sh-assistant-ui-skills-assistant-ui
type: skills
title: skills-sh-assistant-ui-skills-assistant-ui
summary: >-
  # assistant-ui Architecture

  ## Layered System

  assistant-ui follows a 4-layer architecture where each layer depends only on
  layers below it.

  ### Layer 1: RuntimeCore (Internal)

  Internal implementations that manage state:

  - `LocalRuntimeCore` - In-browser state

  - `ExternalStoreRuntimeCore` - External state sync

  - `ThreadListRuntimeCore` - Thread management

  ```typescript

  // Internal - not directly used
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/assistant-ui/skills/HEAD/assistant-ui/skills/assistant-ui/references/architecture.md
license: ""
upstream_ref: https://skills.sh/assistant-ui/skills/assistant-ui
github_stars: 5
github_forks: 2
github_is_organization: true
retrieved_at: 2026-07-06T11:22:26.898Z
content_sha256: 4f878825755030b24727f1b66e432c6502db0dfec211f000621e5357ed32adb7
---
