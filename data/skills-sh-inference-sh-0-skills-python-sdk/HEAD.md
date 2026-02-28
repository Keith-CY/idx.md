---
stable_id: skills/skills-sh-inference-sh-0-skills-python-sdk
type: skills
title: skills-sh-inference-sh-0-skills-python-sdk
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
source_url: https://raw.githubusercontent.com/inference-sh-0/skills/HEAD/skills/python-sdk/references/agent-patterns.md
license: ""
upstream_ref: https://skills.sh/inference-sh-0/skills/python-sdk
github_stars: 30
github_forks: 6
github_is_organization: true
retrieved_at: 2026-02-28T14:45:33.205Z
content_sha256: 85c91b4d772be3d2d10d017f83892b00940941174989adccc5a8752f56f44ec4
---
