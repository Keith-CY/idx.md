---
stable_id: skills/skills-sh-pskoett-self-improving-agent-self-improvement
type: skills
title: skills-sh-pskoett-self-improving-agent-self-improvement
summary: >-
  ---

  name: self-improvement

  description: "Captures learnings, errors, and corrections to enable continuous
  improvement. Use when: (1) A command or operation fails unexpectedly, (2) User
  corrects Claude ('No, that's wrong...', 'Actually...'), (3) User requests a
  capability that doesn't exist, (4) An external API or tool fails, (5) Claude
  realizes its knowledge is outdated or incorrect, (6) A better approach is
  discovered for a recurring task. Also review learnings before major tasks."

  ---

  # Self-Improvement Skill

  Log learnings and errors to markdown files for continuous improvement. Coding
  agents can later process these into fixes, and important learnings get
  promoted to project memory.

  ## First-Use Initialisation

  Before logging anything, ensure the `.learnings/` directory and files exist in
  the project or workspace root. If any are missing, create them:

  ```bash

  mkdir -p .learnings
tags:
  - skills-sh
  - skills-sh-probed
source_url: https://raw.githubusercontent.com/pskoett/self-improving-agent/master/SKILL.md
license: ""
upstream_ref: https://skills.sh/pskoett/self-improving-agent/self-improvement
github_stars: 5
github_forks: 2
github_is_organization: false
retrieved_at: 2026-04-12T07:31:30.604Z
content_sha256: a34d1c3407dbaa9a23fdf20f43f4f65c88f07f396cfbf8034c98bf518b8a2d69
---
