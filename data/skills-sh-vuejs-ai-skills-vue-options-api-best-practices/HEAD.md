---
stable_id: skills/skills-sh-vuejs-ai-skills-vue-options-api-best-practices
type: skills
title: skills-sh-vuejs-ai-skills-vue-options-api-best-practices
summary: >-
  ---

  title: Always Use defineComponent for TypeScript Type Inference

  impact: HIGH

  impactDescription: Without defineComponent, TypeScript cannot infer types for
  props, computed properties, methods, or the 'this' context in Options API
  components

  type: best-practice

  tags: [vue3, typescript, options-api, defineComponent, type-inference]

  ---

  # Always Use defineComponent for TypeScript Type Inference

  **Impact: HIGH** - When using TypeScript with Vue's Options API, you MUST wrap
  your component definition with `defineComponent()` to enable proper type
  inference. Without it, `this` is typed as `any`, losing all TypeScript
  benefits.

  ## Task Checklist
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/vuejs-ai/skills/main/skills/vue-options-api-best-practices/reference/ts-options-api-use-definecomponent.md
license: ""
upstream_ref: https://skills.sh/vuejs-ai/skills/vue-options-api-best-practices
retrieved_at: 2026-02-05T19:13:52.283Z
content_sha256: 7430211d979c775b3b4578438447a1d4c4b02c3ec925908041ae4f808eb7d788
---
