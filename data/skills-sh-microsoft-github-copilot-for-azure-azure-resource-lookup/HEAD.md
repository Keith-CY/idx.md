---
stable_id: skills/skills-sh-microsoft-github-copilot-for-azure-azure-resource-lookup
type: skills
title: skills-sh-microsoft-github-copilot-for-azure-azure-resource-lookup
summary: >-
  # Azure Resource Graph Query Patterns

  Azure Resource Graph (ARG) queries use a KQL subset against indexed Azure
  resource metadata. Results are near real-time across all subscriptions.

  ## Command Format

  ```bash

  az graph query -q "<KQL>" --query "data[].{col1:field1, col2:field2}" -o table

  ```

  | Flag | Purpose |

  |------|---------|

  | `-q` | KQL query string |

  | `--query` | JMESPath to shape output columns |
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/microsoft/github-copilot-for-azure/HEAD/plugin/skills/azure-resource-lookup/references/azure-resource-graph.md
license: ""
upstream_ref: https://skills.sh/microsoft/github-copilot-for-azure/azure-resource-lookup
github_stars: 160
github_forks: 103
github_is_organization: true
retrieved_at: 2026-07-02T08:04:22.246Z
content_sha256: 478e6a6d0ce9c515523548c2e4b44b71baedd3bd8c27e2af7f3bd3aa804060ea
---
