---
stable_id: skills/skills-sh-trailofbits-skills-insecure-defaults
type: skills
title: skills-sh-trailofbits-skills-insecure-defaults
summary: >-
  # Insecure Defaults: Examples and Counter-Examples

  This document provides detailed examples for each category in the Quick
  Verification Checklist, showing both vulnerable patterns (report these) and
  secure patterns (skip these).

  ## Fallback Secrets

  ### ❌ VULNERABLE - Report These

  **Python: Environment variable with fallback**

  ```python

  # File: src/auth/jwt.py

  SECRET_KEY = os.environ.get('SECRET_KEY', 'dev-secret-key-123')

  # Used in security context

  def create_token(user_id):
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/trailofbits/skills/HEAD/plugins/insecure-defaults/skills/insecure-defaults/references/examples.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/insecure-defaults
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-27T07:57:03.945Z
content_sha256: 1d47703f84b6c5866e299e46f7f797c6178c2896fe37e02759fec5bfbf5b8d1f
---
