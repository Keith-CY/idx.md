---
stable_id: skills/skills-sh-assistant-ui-skills-assistant-ui
type: skills
title: skills-sh-assistant-ui-skills-assistant-ui
summary: >-
  # assistant-ui Architecture

  ## Layers

  Each layer depends only on the layers below it.

  ### UI: elements and primitives

  Primitives from `@assistant-ui/react` are unstyled, Radix-style parts
  (`ThreadPrimitive.Root`, `ComposerPrimitive.Input`, `MessagePrimitive.Parts`,
  ...) that read and write through the aui client, never against the backend
  directly. Elements are styled compositions of those primitives that the CLI
  copies into `components/assistant-ui/elements/`; runtime-connected ones carry
  the `.aui.tsx` suffix and standalone ones take props.

  ### The aui client

  `useAui()` returns an `AssistantClient`: one property accessor per registered
  scope plus `subscribe` and `on`. Application code uses it instead of the
  runtime object.

  ```tsx

  import { useAui, useAuiState, useAuiEvent } from "@assistant-ui/react";

  const aui = useAui();
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/assistant-ui/skills/HEAD/assistant-ui/skills/assistant-ui/references/architecture.md
license: ""
upstream_ref: https://skills.sh/assistant-ui/skills/assistant-ui
github_stars: 5
github_forks: 2
github_is_organization: true
retrieved_at: 2026-09-06T11:27:29.881Z
content_sha256: 00cee1aff4625b7865384ede0fc064e9915f640dfc3df70f2916c1677382a56c
---
