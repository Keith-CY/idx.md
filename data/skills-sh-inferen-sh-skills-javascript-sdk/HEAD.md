---
stable_id: skills/skills-sh-inferen-sh-skills-javascript-sdk
type: skills
title: skills-sh-inferen-sh-skills-javascript-sdk
summary: |-
  # Agent Patterns
  Common patterns for building agents with the JavaScript SDK.
  ## Multi-Agent Orchestration
  Delegate tasks to specialized sub-agents:
  ```typescript
  import { inference, agentTool, string } from '@inferencesh/sdk';
  const client = inference({ apiKey: 'inf_...' });
  // Define sub-agents as tools
  const researcher = agentTool('research', 'my-org/researcher@latest')
    .describe('Research a topic thoroughly')
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/inferen-sh/skills/HEAD/sdk/javascript-sdk/references/agent-patterns.md
license: ""
upstream_ref: https://skills.sh/inferen-sh/skills/javascript-sdk
github_stars: 169
github_forks: 24
github_is_organization: true
retrieved_at: 2026-04-25T07:32:04.209Z
content_sha256: 81d7e3e42f5803e8e820edf19ca4b5e54c54ad18afa3c0be98b7d3949b8adbd8
---
