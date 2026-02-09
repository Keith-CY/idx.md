---
stable_id: skills/skills-sh-vuejs-ai-skills-vue-debug-guides
type: skills
title: skills-sh-vuejs-ai-skills-vue-debug-guides
summary: >-
  ---

  title: Use Debug Hooks to Trace Reactivity Issues

  impact: MEDIUM

  impactDescription: Debug hooks help identify which dependencies trigger
  re-renders and watcher executions

  type: efficiency

  tags: [vue3, reactivity, debugging, computed, watch, development]

  ---

  # Use Debug Hooks to Trace Reactivity Issues

  **Impact: MEDIUM** - Vue provides debug hooks (`onTrack`, `onTrigger`,
  `renderTracked`, `renderTriggered`) that help identify exactly which reactive
  dependencies are being tracked and which mutations trigger re-execution. These
  are invaluable for debugging performance issues and unexpected re-renders.

  Debug hooks only work in development mode and are stripped in production
  builds. Use them to understand why a computed property, watcher, or component
  is re-executing.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/vuejs-ai/skills/HEAD/skills/vue-debug-guides/reference/reactivity-debugging-hooks.md
license: ""
upstream_ref: https://skills.sh/vuejs-ai/skills/vue-debug-guides
retrieved_at: 2026-02-09T18:13:55.902Z
content_sha256: 9bd2991786bc470ae00e655a7712d67393a6e904152a942b680c7a9d2f987644
---
