---
stable_id: skills/skills-sh-vuejs-ai-skills-vue-pinia-best-practices
type: skills
title: skills-sh-vuejs-ai-skills-vue-pinia-best-practices
summary: >-
  ---

  title: Fix "No Active Pinia" Error - Store Setup Timing

  impact: HIGH

  impactDescription: Using Pinia stores before app.use(pinia) causes
  "getActivePinia was called but there was no active Pinia" error

  type: gotcha

  tags: [vue3, pinia, state-management, setup, initialization, error]

  ---

  # Fix "No Active Pinia" Error - Store Setup Timing

  **Impact: HIGH** - The error "getActivePinia() was called but there was no
  active Pinia" is one of the most common Pinia errors. It occurs when you try
  to use a store before Pinia has been installed on the Vue app, causing your
  application to crash.

  ## Task Checklist
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/vuejs-ai/skills/main/skills/vue-pinia-best-practices/reference/pinia-no-active-pinia-error.md
license: ""
upstream_ref: https://skills.sh/vuejs-ai/skills/vue-pinia-best-practices
retrieved_at: 2026-02-06T05:30:00.110Z
content_sha256: fa4d1c2f6d76301532f93607be12ebbb8bee0617df28048897a0024f1045aeaf
---
