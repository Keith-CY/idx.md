---
stable_id: skills/skills-sh-github-awesome-copilot-terraform-azurerm-set-diff-analyzer
type: skills
title: skills-sh-github-awesome-copilot-terraform-azurerm-set-diff-analyzer
summary: >-
  # Terraform AzureRM Set Diff Analyzer Script

  A Python script that analyzes Terraform plan JSON and identifies
  "false-positive diffs" in AzureRM Set-type attributes.

  ## Overview

  AzureRM Provider's Set-type attributes (such as `backend_address_pool`,
  `security_rule`, etc.) don't guarantee order, so when adding or removing
  elements, all elements appear as "changed". This script distinguishes such
  "false-positive diffs" from actual changes.

  ### Use Cases

  - As an **Agent Skill** (recommended)

  - As a **CLI tool** for manual execution

  - For automated analysis in **CI/CD pipelines**

  ## Prerequisites

  - Python 3.8 or higher
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/github/awesome-copilot/HEAD/skills/terraform-azurerm-set-diff-analyzer/scripts/README.md
license: ""
upstream_ref: https://skills.sh/github/awesome-copilot/terraform-azurerm-set-diff-analyzer
github_stars: 26261
github_forks: 3023
github_is_organization: true
retrieved_at: 2026-08-25T07:37:36.788Z
content_sha256: fcabc67e277dbbc3d46b81edce7aae50e71da4f93dc0b1358e4c45737570e82c
---
