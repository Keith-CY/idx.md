---
stable_id: skills/agentskills-skill
type: skills
title: agentskills-skill
summary: >-
  ---

  name: Agent

  description: Use when creating, authoring, or integrating Agent Skills —
  reusable instruction packages that extend agent capabilities. Reach for this
  skill when building skill directories, writing SKILL.md files, bundling
  scripts, validating skills, or adding skills support to an agent platform.

  metadata:
      mintlify-proj: agent
      version: "1.0"
  ---

  # Agent Skills

  ## Product summary

  Agent Skills is an open standard for packaging reusable instructions, scripts,
  and resources that agents can discover and execute. A skill is a folder
  containing a required `SKILL.md` file (with YAML frontmatter and Markdown
  instructions) plus optional `scripts/`, `references/`, and `assets/`
  directories. Skills enable agents to extend capabilities on demand using
  progressive disclosure: metadata loads at startup, full instructions load when
  activated, and bundled resources load only when needed. The primary
  documentation is at https://agentskills.io. Key files: `SKILL.md` (required
  frontmatter + instructions), `scripts/` (executable code), `references/`
  (supporting docs), `assets/` (templates). Key tools: `skills-ref validate`
  (validate skill format), `skills-ref to-prompt` (generate XML for agent
  prompts).
tags: []
source_url: https://agentskills.io/skill.md
license: ""
upstream_ref: ""
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-02T07:20:21.436Z
content_sha256: 1cae72783c9b5dc6de77a79554f5a89bb827526ba001d8f255c3df23830dadbd
---
