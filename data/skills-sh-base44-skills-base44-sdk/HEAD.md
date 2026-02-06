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
source_url: https://raw.githubusercontent.com/base44/skills/main/skills/base44-sdk/references/QUICK_REFERENCE.md
license: ""
upstream_ref: https://skills.sh/base44/skills/base44-sdk
retrieved_at: 2026-02-06T04:00:21.624Z
content_sha256: f30b89ba7dc07ca6422cd27ac89fa805b654c148f9f046adcdf9562fb4753a2a
---
