---
stable_id: skills/skills-sh-supercent-io-skills-template-ralphmode
type: skills
title: skills-sh-supercent-io-skills-template-ralphmode
summary: >-
  # Ralphmode Permission Profiles

  This file contains the concrete presets referenced by `ralphmode/SKILL.md`.

  Read only the section for the platform you are configuring.

  ## Shared safety baseline

  Apply these rules regardless of platform:

  - Scope automation to one repo or disposable sandbox.

  - Block secrets by default: `.env*`, `secrets/**`, credential exports,
  production config.

  - Block destructive shell by default: `rm -rf`, `sudo`, blind remote scripts.

  - Keep verification outside the permission shortcut itself.

  ## Claude Code
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/supercent-io/skills-template/HEAD/.agent-skills/ralphmode/references/permission-profiles.md
license: ""
upstream_ref: https://skills.sh/supercent-io/skills-template/ralphmode
github_stars: 50
github_forks: 11
github_is_organization: true
retrieved_at: 2026-03-17T07:25:59.746Z
content_sha256: 34ee8e1fa13bacb2fad5a9215874981731947136fa53abb790d0f0a343240eca
---
