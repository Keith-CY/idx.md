---
stable_id: skills/skills-sh-inferen-sh-skills-python-sdk
type: skills
title: skills-sh-inferen-sh-skills-python-sdk
summary: |-
  # Agent Patterns
  Common patterns for building agents with the Python SDK.
  ## Multi-Agent Orchestration
  Delegate tasks to specialized sub-agents:
  ```python
  from inferencesh import inference, agent_tool, string
  client = inference(api_key="inf_...")
  # Define sub-agents as tools
  researcher = (
      agent_tool("research", "my-org/researcher@latest")
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/inferen-sh/skills/HEAD/sdk/python-sdk/references/agent-patterns.md
license: ""
upstream_ref: https://skills.sh/inferen-sh/skills/python-sdk
github_stars: 169
github_forks: 24
github_is_organization: true
retrieved_at: 2026-05-31T08:03:53.333Z
content_sha256: da24fe3d637d13163a570db4f0a25d840b7e61076662500826a10f80b4d4db4e
---
