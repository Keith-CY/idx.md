---
stable_id: skills/skills-sh-trailofbits-skills-firebase-apk-scanner
type: skills
title: skills-sh-trailofbits-skills-firebase-apk-scanner
summary: >-
  # Firebase Security Vulnerability Patterns

  Detailed vulnerability patterns, exploitation techniques, and audit checklists
  for Firebase implementations in mobile applications.

  ---

  ## 1. OPEN EMAIL/PASSWORD SIGNUP (Critical)

  **The Problem:** Firebase Authentication allows anyone to create accounts via
  the Identity Toolkit API, even if the app UI doesn't expose registration.

  **Vulnerable Configuration:**

  ```

  Firebase Console → Authentication → Sign-in method → Email/Password: Enabled

  ```

  **Exploitation:**
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/trailofbits/skills/main/plugins/firebase-apk-scanner/skills/firebase-apk-scanner/references/vulnerabilities.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/firebase-apk-scanner
retrieved_at: 2026-02-03T18:12:19.117Z
content_sha256: 7ae89875a6e0f5a0dfc0da6172f1bdfe6d2719e66dcea6b94c62158d5e9ae1fa
---
