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
retrieved_at: 2026-02-09T15:45:44.490Z
content_sha256: bfe05a0e377441892e99381bfbaaf8a80dc0de954b31668fb2528cce9755a9c3
---
