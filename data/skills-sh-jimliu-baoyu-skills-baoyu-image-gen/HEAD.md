---
stable_id: skills/skills-sh-jimliu-baoyu-skills-baoyu-image-gen
type: skills
title: skills-sh-jimliu-baoyu-skills-baoyu-image-gen
summary: >-
  ---

  name: first-time-setup

  description: First-time setup and default model selection flow for
  baoyu-image-gen

  ---

  # First-Time Setup

  Triggered when:

  1. No EXTEND.md found → full setup (Flow 1), create EXTEND.md

  2. EXTEND.md found but `default_model.[provider]` is null → model question
  only (Flow 2), update EXTEND.md

  Then continue with generation. Ask in the user's input language or saved
  language preference.

  ## Flow 1: Full Setup
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/jimliu/baoyu-skills/HEAD/skills/baoyu-image-gen/references/config/first-time-setup.md
license: ""
upstream_ref: https://skills.sh/jimliu/baoyu-skills/baoyu-image-gen
github_stars: 9795
github_forks: 1111
github_is_organization: false
retrieved_at: 2026-11-09T16:59:18.102Z
content_sha256: 31752a4bdb7d106bca9eb91f158e8c6caaf42303671ad65373575d255ce5f91e
---
