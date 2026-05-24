---
stable_id: skills/skills-sh-base44-skills-base44-sdk
type: skills
title: skills-sh-base44-skills-base44-sdk
summary: >-
  # Base44 SDK Quick Reference

  Compact method signatures for all SDK modules. **Verify against this before
  writing code.**

  ---

  ## Auth (`base44.auth.*`)

  ```

  loginViaEmailPassword(email, password, turnstileToken?) →
  Promise<{access_token, user}>

  loginWithProvider('google' | 'microsoft' | 'facebook', fromUrl?) → void

  me() → Promise<User | null>

  updateMe(data) → Promise<User>

  isAuthenticated() → Promise<boolean>
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/base44/skills/HEAD/skills/base44-sdk/references/QUICK_REFERENCE.md
license: ""
upstream_ref: https://skills.sh/base44/skills/base44-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-05-24T07:55:32.085Z
content_sha256: 0b78293c5672ed62901e902a51b1898b948f9f3d88e7c11569b3d796401cfdc8
---
