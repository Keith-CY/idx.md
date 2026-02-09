---
stable_id: skills/skills-sh-davila7-claude-code-templates-autogpt-agents
type: skills
title: skills-sh-davila7-claude-code-templates-autogpt-agents
summary: |-
  # AutoGPT Advanced Usage Guide
  ## Custom Block Development
  ### Block structure
  ```python
  from backend.data.block import Block, BlockSchema, BlockType
  from pydantic import BaseModel
  class MyBlockInput(BaseModel):
      """Input schema for the block."""
      query: str
      max_results: int = 10
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/davila7/claude-code-templates/main/cli-tool/components/skills/ai-research/agents-autogpt/references/advanced-usage.md
license: ""
upstream_ref: https://skills.sh/davila7/claude-code-templates/autogpt-agents
retrieved_at: 2026-02-09T18:16:33.663Z
content_sha256: e0b9f472e7487061b5123f1a507ebd1fa19bb0e91f95de5931c7a5b6279b104b
---
