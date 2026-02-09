---
stable_id: skills/skills-sh-hyf0-vue-skills-vue-best-practices
type: skills
title: skills-sh-hyf0-vue-skills-vue-best-practices
summary: >-
  ---

  title: Always Use .value When Accessing ref() in JavaScript

  impact: HIGH

  impactDescription: Forgetting .value causes silent failures and bugs in
  reactive state updates

  type: capability

  tags: [vue3, reactivity, ref, composition-api]

  ---

  # Always Use .value When Accessing ref() in JavaScript

  **Impact: HIGH** - Forgetting `.value` causes silent failures where state
  updates don't trigger reactivity, leading to hard-to-debug issues.

  When using `ref()` in Vue 3's Composition API, the reactive value is wrapped
  in an object and must be accessed via `.value` in JavaScript code. However, in
  templates, Vue automatically unwraps refs so `.value` is not needed there.
  This inconsistency is a common source of bugs.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/hyf0/vue-skills/HEAD/skills/vue-best-practices/reference/ref-value-access.md
license: ""
upstream_ref: https://skills.sh/hyf0/vue-skills/vue-best-practices
retrieved_at: 2026-02-09T07:01:27.030Z
content_sha256: e797ceee03f65cd0946a2dadfca57c11ed98879f9c30b0e49d41db2e31feddb5
---
