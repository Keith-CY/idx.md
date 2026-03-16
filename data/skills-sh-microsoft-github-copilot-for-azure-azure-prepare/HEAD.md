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
github_stars: 155
github_forks: 101
github_is_organization: true
retrieved_at: 2026-03-16T17:31:22.894Z
content_sha256: 80dce2a24b8956959be4e50e90b69c109fb1b25fc1f2029ad9fc2c35e591731d
---
