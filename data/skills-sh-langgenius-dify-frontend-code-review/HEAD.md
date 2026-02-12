---
stable_id: skills/skills-sh-langgenius-dify-frontend-code-review
type: skills
title: skills-sh-langgenius-dify-frontend-code-review
summary: >-
  # Rule Catalog — Code Quality

  ## Conditional class names use utility function

  IsUrgent: True

  Category: Code Quality

  ### Description

  Ensure conditional CSS is handled via the shared `classNames` instead of
  custom ternaries, string concatenation, or template strings. Centralizing
  class logic keeps components consistent and easier to maintain.

  ### Suggested Fix

  ```ts

  import { cn } from '@/utils/classnames'

  const classNames = cn(isActive ? 'text-primary-600' : 'text-gray-500')
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/langgenius/dify/HEAD/.agents/skills/frontend-code-review/references/code-quality.md
license: ""
upstream_ref: https://skills.sh/langgenius/dify/frontend-code-review
retrieved_at: 2026-02-12T05:36:48.971Z
content_sha256: b67ba50627f957bce3c6f67cd96e186485d48f3c6636267fbad1e0aba8f521fa
---
