---
stable_id: skills/skills-sh-microsoft-github-copilot-for-azure-azure-resource-visualizer
type: skills
title: skills-sh-microsoft-github-copilot-for-azure-azure-resource-visualizer
summary: >-
  # Azure Resource Graph Queries for Resource Discovery

  Azure Resource Graph (ARG) enables fast, cross-subscription resource querying
  using KQL via `az graph query`. Use it for bulk resource discovery and
  relationship mapping.

  ## How to Query

  Use the `extension_cli_generate` MCP tool to generate `az graph query`
  commands:

  ```yaml

  mcp_azure_mcp_extension_cli_generate
    intent: "query Azure Resource Graph to <describe what you want to find>"
    cli-type: "az"
  ```

  Or construct directly:
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/microsoft/github-copilot-for-azure/HEAD/plugin/skills/azure-resource-visualizer/references/azure-resource-graph.md
license: ""
upstream_ref: https://skills.sh/microsoft/github-copilot-for-azure/azure-resource-visualizer
github_stars: 160
github_forks: 103
github_is_organization: true
retrieved_at: 2026-03-23T07:34:24.667Z
content_sha256: fb7c11feca04a1ad967a4eb83ad823ac25d0b8e1252a39bada62d4b91159597c
---
