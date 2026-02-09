---
stable_id: skills/skills-sh-pproenca-dot-skills-clean-architecture
type: skills
title: skills-sh-pproenca-dot-skills-clean-architecture
summary: >-
  ---

  title: Source Dependencies Point Inward Only

  impact: CRITICAL

  impactDescription: prevents cascade failures across all layers

  tags: dep, dependency-rule, layers, architecture

  ---

  ## Source Dependencies Point Inward Only

  The Dependency Rule states that source code dependencies can only point inward
  toward higher-level policies. Inner circles must never reference outer
  circles.

  **Incorrect (inner layer imports from outer layer):**

  ```typescript
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/pproenca/dot-skills/HEAD/skills/.experimental/clean-architecture/references/dep-inward-only.md
license: ""
upstream_ref: https://skills.sh/pproenca/dot-skills/clean-architecture
retrieved_at: 2026-02-09T07:01:40.193Z
content_sha256: f7c28c5d06988ac8103107c643864bbf8fbdb4710379cc04099970ca7be1a54f
---
