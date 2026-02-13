---
stable_id: skills/skills-sh-vuejs-ai-skills-vue-jsx-best-practices
type: skills
title: skills-sh-vuejs-ai-skills-vue-jsx-best-practices
summary: >-
  ---

  title: Vue JSX Uses HTML Attributes Not React Conventions

  impact: MEDIUM

  impactDescription: Using className or htmlFor in Vue JSX causes TypeScript
  errors and inconsistent code style

  type: gotcha

  tags: [vue3, jsx, tsx, render-function]

  ---

  # Vue JSX Uses HTML Attributes Not React Conventions

  **Impact: MEDIUM** - Vue's JSX transform uses standard HTML attribute names
  (`class`, `for`) instead of React's JavaScript-friendly names (`className`,
  `htmlFor`). With proper TypeScript configuration, using React conventions like
  `className` or `htmlFor` will produce TypeScript errors, which is good for
  catching these inconsistencies early. Note that Vue's runtime is lenient and
  will actually convert these attributes correctly, but using HTML attributes is
  the recommended practice for consistency with Vue templates and proper type
  safety.

  When writing JSX in Vue, use the same attribute names you would use in regular
  HTML templates. This is a fundamental difference from React's JSX where
  `class` and `for` are reserved JavaScript keywords.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/vuejs-ai/skills/HEAD/skills/vue-jsx-best-practices/reference/render-function-jsx-vue-vs-react.md
license: ""
upstream_ref: https://skills.sh/vuejs-ai/skills/vue-jsx-best-practices
retrieved_at: 2026-02-13T04:46:34.399Z
content_sha256: da8c635b448b23360bf1c53eea02b004bb755a712a0325c8851f9c33a072c834
---
