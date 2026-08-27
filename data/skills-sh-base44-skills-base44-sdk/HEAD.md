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
retrieved_at: 2026-08-27T17:59:23.195Z
content_sha256: 81cc3883867d8fa8fbc31a72c27f32fbb20e2464643fd3088e53345461355930
---
