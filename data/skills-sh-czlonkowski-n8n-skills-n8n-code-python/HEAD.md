---
stable_id: skills/skills-sh-czlonkowski-n8n-skills-n8n-code-python
type: skills
title: skills-sh-czlonkowski-n8n-skills-n8n-code-python
summary: >-
  # Data Access Patterns - Python Code Node

  Complete guide to accessing data in n8n Code nodes using Python.

  ---

  ## Overview

  In n8n Python Code nodes, you access data using **underscore-prefixed**
  variables: `_input`, `_json`, `_node`.

  **Data Access Priority** (by common usage):

  1. **`_input.all()`** - Most common - Batch operations, aggregations

  2. **`_input.first()`** - Very common - Single item operations

  3. **`_input.item`** - Common - Each Item mode only

  4. **`_node["NodeName"]["json"]`** - Specific node references
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/czlonkowski/n8n-skills/main/skills/n8n-code-python/DATA_ACCESS.md
license: ""
upstream_ref: https://skills.sh/czlonkowski/n8n-skills/n8n-code-python
retrieved_at: 2026-02-07T06:48:39.259Z
content_sha256: a7e09fe0b0b024454bef960e626d7122777e0f72ed3d575f26c9c75b4b1ceca7
---
