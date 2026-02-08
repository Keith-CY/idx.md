---
stable_id: skills/skills-sh-trailofbits-skills-codeql
type: skills
title: skills-sh-trailofbits-skills-codeql
summary: >-
  # Build Database Workflow

  Create high-quality CodeQL databases by trying build methods in sequence until
  one produces good results.

  ## Task System

  Create these tasks on workflow start:

  ```

  TaskCreate: "Detect language and configure" (Step 1)

  TaskCreate: "Build database" (Step 2) - blockedBy: Step 1

  TaskCreate: "Apply fixes if needed" (Step 3) - blockedBy: Step 2

  TaskCreate: "Assess quality" (Step 4) - blockedBy: Step 3

  TaskCreate: "Improve quality if needed" (Step 5) - blockedBy: Step 4
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/trailofbits/skills/HEAD/plugins/static-analysis/skills/codeql/workflows/build-database.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/codeql
retrieved_at: 2026-02-08T16:40:14.743Z
content_sha256: a2b6485dd56aa71ae8c9ef6c06143edac4949e41c711eaf81d2c3d06320be2ca
---
