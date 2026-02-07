---
stable_id: skills/openai-curated-security-ownership-map
type: skills
title: openai-curated-security-ownership-map
summary: >-
  ---

  name: "security-ownership-map"

  description: "Analyze git repositories to build a security ownership topology
  (people-to-file), compute bus factor and sensitive-code ownership, and export
  CSV/JSON for graph databases and visualization. Trigger only when the user
  explicitly wants a security-oriented ownership or bus-factor analysis grounded
  in git history (for example: orphaned sensitive code, security maintainers,
  CODEOWNERS reality checks for risk, sensitive hotspots, or ownership
  clusters). Do not trigger for general maintainer lists or non-security
  ownership questions."

  ---

  # Security Ownership Map

  ## Overview

  Build a bipartite graph of people and files from git history, then compute
  ownership risk and export graph artifacts for Neo4j/Gephi. Also build a file
  co-change graph (Jaccard similarity on shared commits) to cluster files by how
  they move together while ignoring large, noisy commits.

  ## Requirements

  - Python 3

  - `networkx` (required; community detection is enabled by default)
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/security-ownership-map/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/security-ownership-map/SKILL.md
retrieved_at: 2026-02-07T06:47:30.958Z
content_sha256: f06c1a59247569326702c945f397af163ea96cf2ecfdf2dde280605bf89a3ec8
---
