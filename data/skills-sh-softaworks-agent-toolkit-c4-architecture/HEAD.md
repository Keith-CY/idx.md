---
stable_id: skills/skills-sh-softaworks-agent-toolkit-c4-architecture
type: skills
title: skills-sh-softaworks-agent-toolkit-c4-architecture
summary: >-
  # Common C4 Model Mistakes to Avoid

  This guide documents frequent anti-patterns and errors when creating C4
  architecture diagrams, with examples of what to do instead.

  ## Abstraction Level Mistakes

  ### 1. Confusing Containers and Components

  **The Problem:**

  Containers are **deployable units** (applications, services, databases).
  Components are **non-deployable elements inside a container** (modules,
  classes, packages).

  **Wrong - Java class shown as container:**

  ```mermaid

  C4Container
    title WRONG: Class as Container
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/softaworks/agent-toolkit/HEAD/skills/c4-architecture/references/common-mistakes.md
license: ""
upstream_ref: https://skills.sh/softaworks/agent-toolkit/c4-architecture
retrieved_at: 2026-02-09T05:30:57.115Z
content_sha256: 608b39dd6ece1c2d4367fb06f3bd7d190332291e279391bfedb82f4749ced414
---
