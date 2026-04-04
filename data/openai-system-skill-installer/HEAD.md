---
stable_id: skills/openai-system-skill-installer
type: skills
title: openai-system-skill-installer
summary: >-
  ---

  name: skill-installer

  description: Install Codex skills into $CODEX_HOME/skills from a curated list
  or a GitHub repo path. Use when a user asks to list installable skills,
  install a curated skill, or install a skill from another repo (including
  private repos).

  metadata:
    short-description: Install curated skills from openai/skills or other repos
  ---

  # Skill Installer

  Helps install skills. By default these are from
  https://github.com/openai/skills/tree/main/skills/.curated, but users can also
  provide other locations.

  Use the helper scripts based on the task:

  - List skills when the user asks what is available, or if the user uses this
  skill without specifying what to do. Default listing is `.curated`, but you
  can pass `--path skills/.experimental` when they ask about experimental
  skills.
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.system/skill-installer/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.system/skill-installer/SKILL.md
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-04-04T07:21:32.289Z
content_sha256: df58efeb75a6001d733701e7d73e24dd71b94a2a0016971f0bcfe097217888a5
---
