---
stable_id: skills/skills-sh-vuejs-ai-skills-vue-router-best-practices
type: skills
title: skills-sh-vuejs-ai-skills-vue-router-best-practices
summary: >-
  ---

  title: Per-Route beforeEnter Guards Ignore Param/Query Changes

  impact: MEDIUM

  impactDescription: Route-level beforeEnter guards don't fire when only params,
  query, or hash change, causing unexpected bypasses of validation logic

  type: gotcha

  tags: [vue3, vue-router, navigation-guards, params, query]

  ---

  # Per-Route beforeEnter Guards Ignore Param/Query Changes

  **Impact: MEDIUM** - The `beforeEnter` guard defined in route configuration
  only triggers when entering a route from a DIFFERENT route. Changes to params,
  query strings, or hash within the same route do NOT trigger `beforeEnter`,
  potentially bypassing important validation logic.

  ## Task Checklist
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/vuejs-ai/skills/HEAD/skills/vue-router-best-practices/reference/router-beforeenter-no-param-trigger.md
license: ""
upstream_ref: https://skills.sh/vuejs-ai/skills/vue-router-best-practices
retrieved_at: 2026-02-08T09:06:47.844Z
content_sha256: 8cf2bd4e3f40cf24b14962ea0b33b31d736d56db891aafdd721e4ca68d82c6ad
---
