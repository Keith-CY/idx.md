---
stable_id: skills/skills-sh-microsoft-github-copilot-for-azure-azure-prepare
type: skills
title: skills-sh-microsoft-github-copilot-for-azure-azure-prepare
summary: >-
  # Azure Context (Subscription & Location)

  Detect and confirm Azure subscription and location before generating
  artifacts. Run region capacity check for customer selected location

  ---

  ## Step 1: Check for Existing AZD Environment

  If the project already uses AZD, check for an existing environment with values
  already set:

  ```bash

  azd env list

  ```

  **If an environment is selected** (marked with `*`), check its values:

  ```bash
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/microsoft/github-copilot-for-azure/HEAD/plugin/skills/azure-prepare/references/azure-context.md
license: ""
upstream_ref: https://skills.sh/microsoft/github-copilot-for-azure/azure-prepare
github_stars: 160
github_forks: 103
github_is_organization: true
retrieved_at: 2026-04-17T07:35:04.071Z
content_sha256: 3ae05082397ac3c615a4114343e69f42d9d75034fcfdad3ad2826351c04b289c
---
