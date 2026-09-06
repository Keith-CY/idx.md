---
stable_id: skills/openai-curated-vercel-deploy
type: skills
title: openai-curated-vercel-deploy
summary: >-
  ---

  name: vercel-deploy

  description: Deploy applications and websites to Vercel. Use when the user
  requests deployment actions like "deploy my app", "deploy and give me the
  link", "push this live", or "create a preview deployment".

  ---

  # Vercel Deploy

  Deploy any project to Vercel instantly. **Always deploy as preview** (not
  production) unless the user explicitly asks for production.

  ## Prerequisites

  - Check whether the Vercel CLI is installed **without** escalated permissions
  (for example, `command -v vercel`).

  - Only escalate the actual deploy command if sandboxing blocks the deployment
  network calls (`sandbox_permissions=require_escalated`).

  - The deployment might take a few minutes. Use appropriate timeout values.
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/vercel-deploy/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/vercel-deploy/SKILL.md
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-09-06T11:27:14.627Z
content_sha256: f4a6cbfbb378a320fae179a79f727a881d19677e9b3db96ed49d2dc02a74fa46
---
