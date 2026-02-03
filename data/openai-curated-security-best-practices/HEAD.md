---
stable_id: skills/openai-curated-security-best-practices
type: skills
title: openai-curated-security-best-practices
summary: >-
  ---

  name: "security-best-practices"

  description: "Perform language and framework specific security best-practice
  reviews and suggest improvements. Trigger only when the user explicitly
  requests security best practices guidance, a security review/report, or
  secure-by-default coding help. Trigger only for supported languages (python,
  javascript/typescript, go). Do not trigger for general code review, debugging,
  or non-security tasks."

  ---

  # Security Best Practices

  ## Overview

  This skill provides a description of how to identify the language and
  frameworks used by the current context, and then to load information from this
  skill's references directory about the security best practices for this
  language and or frameworks.

  This information, if present, can be used to write new secure by default code,
  or to passively detect major issues within existing code, or (if requested by
  the user) provide a vulnerability report and suggest fixes.

  ## Workflow

  The initial step for this skill is to identify ALL languages and ALL
  frameworks which you are being asked to use or already exist in the scope of
  the project you are working in. Focus on the primary core frameworks. Often
  you will want to identify both frontend and backend languages and frameworks.
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/security-best-practices/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/security-best-practices/SKILL.md
retrieved_at: 2026-02-03T18:12:11.057Z
content_sha256: 7b3dae1ffc5434d890f3c65c8f552af52d0307fab3b35dec13013c9ca3844c4f
---
