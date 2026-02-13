---
stable_id: skills/skills-sh-inference-sh-agent-skills-javascript-sdk
type: skills
title: skills-sh-inference-sh-agent-skills-javascript-sdk
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
source_url: https://raw.githubusercontent.com/inference-sh/agent-skills/HEAD/skills/javascript-sdk/references/agent-patterns.md
license: ""
upstream_ref: https://skills.sh/inference-sh/agent-skills/javascript-sdk
retrieved_at: 2026-02-13T04:46:31.762Z
content_sha256: 81d7e3e42f5803e8e820edf19ca4b5e54c54ad18afa3c0be98b7d3949b8adbd8
---
