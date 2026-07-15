---
stable_id: skills/skills-sh-microsoft-github-copilot-for-azure-microsoft-foundry
type: skills
title: skills-sh-microsoft-github-copilot-for-azure-microsoft-foundry
summary: >-
  # Deploy a Foundry Agent

  Provision Azure resources when needed, deploy the agent, and smoke-test it.

  For **hosted agents** (custom container or code), use `azd deploy`. Prefer
  **direct code deployment through azd** (no Docker/ACR required): the agent's
  `azure.yaml` service block must contain `codeConfiguration:`, so `azd deploy`
  will use direct code deployment and zip the source and let Foundry build it.
  Use container/ACR deployment only when the agent truly needs a Dockerfile,
  custom system packages, or a pre-built image.

  For **prompt agents** (LLM + instructions, no custom code), use the Foundry
  MCP `agent_update` tool.

  ## Quick Reference

  | Property | Value |

  |----------|-------|

  | Hosted (recommended) | `azd provision` when needed, direct code deployment
  via `azd deploy` (`codeConfiguration` present), `azd ai agent invoke` |

  | Hosted (container) | `azd provision` when needed, container/ACR deployment
  via `azd deploy` (requires Docker/Podman + ACR, no `codeConfiguration:` in the
  `azure.yaml` service block) |

  | Prompt MCP | `agent_definition_schema_get`, `agent_update`, `agent_get`,
  `agent_delete` |
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/microsoft/github-copilot-for-azure/HEAD/plugin/skills/microsoft-foundry/foundry-agent/deploy/deploy.md
license: ""
upstream_ref: https://skills.sh/microsoft/github-copilot-for-azure/microsoft-foundry
github_stars: 160
github_forks: 103
github_is_organization: true
retrieved_at: 2026-07-15T09:10:24.561Z
content_sha256: aa488f157a7bd62076f11f9aca3da6015807d13bc61d79817f35c0dc2aea25a9
---
