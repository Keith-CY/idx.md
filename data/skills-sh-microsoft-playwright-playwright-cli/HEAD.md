---
stable_id: skills/skills-sh-microsoft-playwright-playwright-cli
type: skills
title: skills-sh-microsoft-playwright-playwright-cli
summary: >-
  # Request Mocking

  Intercept, mock, modify, and block network requests.

  ## CLI Route Commands

  ```bash

  # Mock with custom status

  playwright-cli route "**/*.jpg" --status=404

  # Mock with JSON body

  playwright-cli route "**/api/users" --body='[{"id":1,"name":"Alice"}]'
  --content-type=application/json

  # Mock with custom headers

  playwright-cli route "**/api/data" --body='{"ok":true}' --header="X-Custom:
  value"
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/microsoft/playwright/main/packages/playwright/src/skill/references/request-mocking.md
license: ""
upstream_ref: https://skills.sh/microsoft/playwright/playwright-cli
retrieved_at: 2026-02-03T18:12:16.473Z
content_sha256: 54e801c9663fc2b6d68ceb058cb1c360724c2499f42acc7852a68e83e5b5f37c
---
