# Category: Uncategorized

| Category | Uncategorized |
| --- | --- |
| Slug | uncategorized |
| Count | 280 |

---
stable_id: skills/agentskills-skill
type: skills
title: agentskills-skill
summary: >-
  ---

  name: Agent

  description: Documentation and capabilities reference for Agent

  metadata:
      mintlify-proj: agent
      version: "1.0"
  ---

  ## Capabilities

  Agent Skills enable AI agents to extend their capabilities with specialized
  knowledge and workflows. Agents can discover, load, and execute skills to
  perform domain-specific tasks more accurately and efficiently. Skills provide
  procedural knowledge, company-specific context, and reusable workflows that
  agents can activate on demand, allowing them to handle complex tasks across
  multiple domains without requiring constant retraining or context expansion.

  ## Skills
tags: []
source_url: https://agentskills.io/skill.md
license: ""
upstream_ref: ""
retrieved_at: 2026-02-06T04:51:17.674Z
content_sha256: 0ef898629f74026ce2406894cc427c18a0c56b73ebc1159c7fcf4b1c7e7bce3e
---
|/data/agentskills-skill|

---
stable_id: example/github-markup-readme
type: example
title: github-markup-readme
summary: >-
  GitHub Markup

  =============

  This library is the **first step** of a journey that every markup file in a
  repository goes on before it is rendered on GitHub.com:

  1. `github-markup` selects an _underlying library_ to convert the raw markup
  to HTML. See the list of [supported markup formats](#markups) below.

  1. The HTML is sanitized, aggressively removing things that could harm you and
  your kin—such as `script` tags, inline-styles, and `class` or `id` attributes.

  1. Syntax highlighting is performed on code blocks. See
  [github/linguist](https://github.com/github/linguist#syntax-highlighting) for
  more information about syntax highlighting.

  1. The HTML is passed through other filters that add special sauce, such as
  emoji, task lists, named anchors, CDN caching for images, and autolinking.

  1. The resulting HTML is rendered on GitHub.com.

  Please note that **only the first step** is covered by this gem — the rest
  happens on GitHub.com.  In particular, `markup` itself does no sanitization of
  the resulting HTML, as it expects that to be covered by whatever pipeline is
  consuming the HTML.

  Please see our [contributing guidelines](CONTRIBUTING.md) before reporting an
  issue.
tags: []
source_url: https://raw.githubusercontent.com/github/markup/master/README.md
license: ""
upstream_ref: ""
retrieved_at: 2026-02-06T04:51:16.588Z
content_sha256: 72cc179fe566e62aa18114513eb38e7b6188a7c76806289cdec97138f75b5b11
---
|/data/github-markup-readme|

---
stable_id: skills/ibelick-baseline-ui
type: skills
title: ibelick-baseline-ui
summary: >-
  ---

  name: baseline-ui

  description: Enforces an opinionated UI baseline to prevent AI-generated
  interface slop.

  ---

  # Baseline UI

  Enforces an opinionated UI baseline to prevent AI-generated interface slop.

  ## How to use

  - `/baseline-ui`
    Apply these constraints to any UI work in this conversation.
  - `/baseline-ui <file>`
tags:
  - ibelick
  - source-ibelick-ui-skills
source_url: https://raw.githubusercontent.com/ibelick/ui-skills/main/skills/baseline-ui/SKILL.md
license: ""
upstream_ref: https://github.com/ibelick/ui-skills/blob/main/skills/baseline-ui/SKILL.md
retrieved_at: 2026-02-06T04:51:21.683Z
content_sha256: 0957eead1bb79f848e623f88e7616171d7a42e67c6d090af50a0558fc892f9da
---
|/data/ibelick-baseline-ui|

---
stable_id: skills/ibelick-fixing-accessibility
type: skills
title: ibelick-fixing-accessibility
summary: |-
  ---
  name: fixing-accessibility
  description: Fix accessibility issues.
  ---
  # fixing-accessibility
  Fix accessibility issues.
  ## how to use
  - `/fixing-accessibility`
    Apply these constraints to any UI work in this conversation.
  - `/fixing-accessibility <file>`
tags:
  - ibelick
  - source-ibelick-ui-skills
source_url: https://raw.githubusercontent.com/ibelick/ui-skills/main/skills/fixing-accessibility/SKILL.md
license: ""
upstream_ref: https://github.com/ibelick/ui-skills/blob/main/skills/fixing-accessibility/SKILL.md
retrieved_at: 2026-02-06T04:51:21.735Z
content_sha256: 94bfcccdf700a18cf63b92a9e8c1a05c10422c692b0bed6fab950611d8d4309c
---
|/data/ibelick-fixing-accessibility|

---
stable_id: skills/ibelick-fixing-metadata
type: skills
title: ibelick-fixing-metadata
summary: |-
  ---
  name: fixing-metadata
  description: Ship correct, complete metadata.
  ---
  # fixing-metadata
  Ship correct, complete metadata.
  ## how to use
  - `/fixing-metadata`
    Apply these constraints to any metadata work in this conversation.
  - `/fixing-metadata <file>`
tags:
  - ibelick
  - source-ibelick-ui-skills
source_url: https://raw.githubusercontent.com/ibelick/ui-skills/main/skills/fixing-metadata/SKILL.md
license: ""
upstream_ref: https://github.com/ibelick/ui-skills/blob/main/skills/fixing-metadata/SKILL.md
retrieved_at: 2026-02-06T04:51:21.790Z
content_sha256: 08b706369e9083d536cb0bb69f69114acfa63efcad39a3efc28abc7284fc7cf4
---
|/data/ibelick-fixing-metadata|

---
stable_id: skills/ibelick-fixing-motion-performance
type: skills
title: ibelick-fixing-motion-performance
summary: |-
  ---
  name: fixing-motion-performance
  description: Fix animation performance issues.
  ---
  # fixing-motion-performance
  Fix animation performance issues.
  ## how to use
  - `/fixing-motion-performance`
    Apply these constraints to any UI animation work in this conversation.
  - `/fixing-motion-performance <file>`
tags:
  - ibelick
  - source-ibelick-ui-skills
source_url: https://raw.githubusercontent.com/ibelick/ui-skills/main/skills/fixing-motion-performance/SKILL.md
license: ""
upstream_ref: https://github.com/ibelick/ui-skills/blob/main/skills/fixing-motion-performance/SKILL.md
retrieved_at: 2026-02-06T04:51:21.845Z
content_sha256: 03e7505ca8cea654a640eaf010eec80da860911432ffdcdc0280641f8109ec1b
---
|/data/ibelick-fixing-motion-performance|

---
stable_id: skills/mintlify-skill
type: skills
title: mintlify-skill
summary: >-
  ---

  name: mintlify

  description: Build and maintain documentation sites with Mintlify. Use when
    creating docs pages, configuring navigation, adding components, or setting up
    API references.
  license: MIT

  compatibility: Requires Node.js for CLI. Works with any Git-based workflow.

  metadata:
    author: mintlify
    version: "1.0"
tags: []
source_url: https://www.mintlify.com/docs/skill.md
license: ""
upstream_ref: ""
retrieved_at: 2026-02-06T04:51:18.339Z
content_sha256: 61453803e3be365bbe5c95d326258551e7fa42af1c8f369ac6dfdcd5676ba8d8
---
|/data/mintlify-skill|

---
stable_id: skills/moltbook-skill
type: skills
title: moltbook-skill
summary: |-
  ---
  name: moltbook
  version: 1.9.0
  description: The social network for AI agents. Post, comment, upvote, and create communities.
  homepage: https://www.moltbook.com
  metadata: {"moltbot":{"emoji":"🦞","category":"social","api_base":"https://www.moltbook.com/api/v1"}}
  ---
  # Moltbook
  The social network for AI agents. Post, comment, upvote, and create communities.
  ## Skill Files
tags: []
source_url: https://moltbook.com/skill.md
license: ""
upstream_ref: ""
retrieved_at: 2026-02-06T04:51:17.419Z
content_sha256: 1a25b2f3216f107631e7d724480a4465307297f872f37c018fce7ca395c0fb10
---
|/data/moltbook-skill|

---
stable_id: skills/obra-brainstorming
type: skills
title: obra-brainstorming
summary: >-
  ---

  name: brainstorming

  description: "You MUST use this before any creative work - creating features,
  building components, adding functionality, or modifying behavior. Explores
  user intent, requirements and design before implementation."

  ---

  # Brainstorming Ideas Into Designs

  ## Overview

  Help turn ideas into fully formed designs and specs through natural
  collaborative dialogue.

  Start by understanding the current project context, then ask questions one at
  a time to refine the idea. Once you understand what you're building, present
  the design in small sections (200-300 words), checking after each section
  whether it looks right so far.

  ## The Process

  **Understanding the idea:**
tags:
  - obra
  - source-obra-superpowers
source_url: https://raw.githubusercontent.com/obra/superpowers/main/skills/brainstorming/SKILL.md
license: ""
upstream_ref: https://github.com/obra/superpowers/blob/main/skills/brainstorming/SKILL.md
retrieved_at: 2026-02-06T04:51:20.954Z
content_sha256: 206c63e80d38c57e6afc657296332b1d0ff75572435d75c079e7407b26762ecd
---
|/data/obra-brainstorming|

---
stable_id: skills/obra-dispatching-parallel-agents
type: skills
title: obra-dispatching-parallel-agents
summary: >-
  ---

  name: dispatching-parallel-agents

  description: Use when facing 2+ independent tasks that can be worked on
  without shared state or sequential dependencies

  ---

  # Dispatching Parallel Agents

  ## Overview

  When you have multiple unrelated failures (different test files, different
  subsystems, different bugs), investigating them sequentially wastes time. Each
  investigation is independent and can happen in parallel.

  **Core principle:** Dispatch one agent per independent problem domain. Let
  them work concurrently.

  ## When to Use

  ```dot
tags:
  - obra
  - source-obra-superpowers
source_url: https://raw.githubusercontent.com/obra/superpowers/main/skills/dispatching-parallel-agents/SKILL.md
license: ""
upstream_ref: https://github.com/obra/superpowers/blob/main/skills/dispatching-parallel-agents/SKILL.md
retrieved_at: 2026-02-06T04:51:21.006Z
content_sha256: c628917689ccc12ce9991615db6824d44c4fe71f8427cd959560aebe6a1a6476
---
|/data/obra-dispatching-parallel-agents|

---
stable_id: skills/obra-executing-plans
type: skills
title: obra-executing-plans
summary: >-
  ---

  name: executing-plans

  description: Use when you have a written implementation plan to execute in a
  separate session with review checkpoints

  ---

  # Executing Plans

  ## Overview

  Load plan, review critically, execute tasks in batches, report for review
  between batches.

  **Core principle:** Batch execution with checkpoints for architect review.

  **Announce at start:** "I'm using the executing-plans skill to implement this
  plan."

  ## The Process
tags:
  - obra
  - source-obra-superpowers
source_url: https://raw.githubusercontent.com/obra/superpowers/main/skills/executing-plans/SKILL.md
license: ""
upstream_ref: https://github.com/obra/superpowers/blob/main/skills/executing-plans/SKILL.md
retrieved_at: 2026-02-06T04:51:21.052Z
content_sha256: d099fa42fd7518f4dafa9f2d51c1c08fce970490d57682b6acd3e7a57bb55b52
---
|/data/obra-executing-plans|

---
stable_id: skills/obra-finishing-a-development-branch
type: skills
title: obra-finishing-a-development-branch
summary: >-
  ---

  name: finishing-a-development-branch

  description: Use when implementation is complete, all tests pass, and you need
  to decide how to integrate the work - guides completion of development work by
  presenting structured options for merge, PR, or cleanup

  ---

  # Finishing a Development Branch

  ## Overview

  Guide completion of development work by presenting clear options and handling
  chosen workflow.

  **Core principle:** Verify tests → Present options → Execute choice → Clean
  up.

  **Announce at start:** "I'm using the finishing-a-development-branch skill to
  complete this work."

  ## The Process
tags:
  - obra
  - source-obra-superpowers
source_url: https://raw.githubusercontent.com/obra/superpowers/main/skills/finishing-a-development-branch/SKILL.md
license: ""
upstream_ref: https://github.com/obra/superpowers/blob/main/skills/finishing-a-development-branch/SKILL.md
retrieved_at: 2026-02-06T04:51:21.096Z
content_sha256: dd2f82c6dc8582b621f9eb57fcb65f557f88eadf872727ac81d0840ae12c504e
---
|/data/obra-finishing-a-development-branch|

---
stable_id: skills/obra-receiving-code-review
type: skills
title: obra-receiving-code-review
summary: >-
  ---

  name: receiving-code-review

  description: Use when receiving code review feedback, before implementing
  suggestions, especially if feedback seems unclear or technically questionable
  - requires technical rigor and verification, not performative agreement or
  blind implementation

  ---

  # Code Review Reception

  ## Overview

  Code review requires technical evaluation, not emotional performance.

  **Core principle:** Verify before implementing. Ask before assuming. Technical
  correctness over social comfort.

  ## The Response Pattern

  ```
tags:
  - obra
  - source-obra-superpowers
source_url: https://raw.githubusercontent.com/obra/superpowers/main/skills/receiving-code-review/SKILL.md
license: ""
upstream_ref: https://github.com/obra/superpowers/blob/main/skills/receiving-code-review/SKILL.md
retrieved_at: 2026-02-06T04:51:21.144Z
content_sha256: c9382e92b8f32363566068ecfed19d3b2651eaf40d3942b24840f839dedfc406
---
|/data/obra-receiving-code-review|

---
stable_id: skills/obra-requesting-code-review
type: skills
title: obra-requesting-code-review
summary: >-
  ---

  name: requesting-code-review

  description: Use when completing tasks, implementing major features, or before
  merging to verify work meets requirements

  ---

  # Requesting Code Review

  Dispatch superpowers:code-reviewer subagent to catch issues before they
  cascade.

  **Core principle:** Review early, review often.

  ## When to Request Review

  **Mandatory:**

  - After each task in subagent-driven development
tags:
  - obra
  - source-obra-superpowers
source_url: https://raw.githubusercontent.com/obra/superpowers/main/skills/requesting-code-review/SKILL.md
license: ""
upstream_ref: https://github.com/obra/superpowers/blob/main/skills/requesting-code-review/SKILL.md
retrieved_at: 2026-02-06T04:51:21.201Z
content_sha256: 2da31af22a58938ab78f3ee6d5b4687fcca062b923b646459eb52ba72117ef97
---
|/data/obra-requesting-code-review|

---
stable_id: skills/obra-subagent-driven-development
type: skills
title: obra-subagent-driven-development
summary: >-
  ---

  name: subagent-driven-development

  description: Use when executing implementation plans with independent tasks in
  the current session

  ---

  # Subagent-Driven Development

  Execute plan by dispatching fresh subagent per task, with two-stage review
  after each: spec compliance review first, then code quality review.

  **Core principle:** Fresh subagent per task + two-stage review (spec then
  quality) = high quality, fast iteration

  ## When to Use

  ```dot

  digraph when_to_use {
tags:
  - obra
  - source-obra-superpowers
source_url: https://raw.githubusercontent.com/obra/superpowers/main/skills/subagent-driven-development/SKILL.md
license: ""
upstream_ref: https://github.com/obra/superpowers/blob/main/skills/subagent-driven-development/SKILL.md
retrieved_at: 2026-02-06T04:51:21.255Z
content_sha256: 994b89a5d294eadd6a1611edb51377bac748d5f5fb7f4139d3c736b616b3a46a
---
|/data/obra-subagent-driven-development|

---
stable_id: skills/obra-systematic-debugging
type: skills
title: obra-systematic-debugging
summary: >-
  ---

  name: systematic-debugging

  description: Use when encountering any bug, test failure, or unexpected
  behavior, before proposing fixes

  ---

  # Systematic Debugging

  ## Overview

  Random fixes waste time and create new bugs. Quick patches mask underlying
  issues.

  **Core principle:** ALWAYS find root cause before attempting fixes. Symptom
  fixes are failure.

  **Violating the letter of this process is violating the spirit of debugging.**

  ## The Iron Law
tags:
  - obra
  - source-obra-superpowers
source_url: https://raw.githubusercontent.com/obra/superpowers/main/skills/systematic-debugging/SKILL.md
license: ""
upstream_ref: https://github.com/obra/superpowers/blob/main/skills/systematic-debugging/SKILL.md
retrieved_at: 2026-02-06T04:51:21.307Z
content_sha256: 4999cb851360485eca5074e727bbdd62ef20549c5d5b01216fcbf5831badb473
---
|/data/obra-systematic-debugging|

---
stable_id: skills/obra-test-driven-development
type: skills
title: obra-test-driven-development
summary: >-
  ---

  name: test-driven-development

  description: Use when implementing any feature or bugfix, before writing
  implementation code

  ---

  # Test-Driven Development (TDD)

  ## Overview

  Write the test first. Watch it fail. Write minimal code to pass.

  **Core principle:** If you didn't watch the test fail, you don't know if it
  tests the right thing.

  **Violating the letter of the rules is violating the spirit of the rules.**

  ## When to Use
tags:
  - obra
  - source-obra-superpowers
source_url: https://raw.githubusercontent.com/obra/superpowers/main/skills/test-driven-development/SKILL.md
license: ""
upstream_ref: https://github.com/obra/superpowers/blob/main/skills/test-driven-development/SKILL.md
retrieved_at: 2026-02-06T04:51:21.340Z
content_sha256: 7dee67b4af6bdccc7a914ca34533184d64592d0f5b23aeae631538168db14994
---
|/data/obra-test-driven-development|

---
stable_id: skills/obra-using-git-worktrees
type: skills
title: obra-using-git-worktrees
summary: >-
  ---

  name: using-git-worktrees

  description: Use when starting feature work that needs isolation from current
  workspace or before executing implementation plans - creates isolated git
  worktrees with smart directory selection and safety verification

  ---

  # Using Git Worktrees

  ## Overview

  Git worktrees create isolated workspaces sharing the same repository, allowing
  work on multiple branches simultaneously without switching.

  **Core principle:** Systematic directory selection + safety verification =
  reliable isolation.

  **Announce at start:** "I'm using the using-git-worktrees skill to set up an
  isolated workspace."

  ## Directory Selection Process
tags:
  - obra
  - source-obra-superpowers
source_url: https://raw.githubusercontent.com/obra/superpowers/main/skills/using-git-worktrees/SKILL.md
license: ""
upstream_ref: https://github.com/obra/superpowers/blob/main/skills/using-git-worktrees/SKILL.md
retrieved_at: 2026-02-06T04:51:21.399Z
content_sha256: de9dcde34840eee074047ec327d4ea6ca4954c5a73a6d874dc48f25fe46c9e7c
---
|/data/obra-using-git-worktrees|

---
stable_id: skills/obra-using-superpowers
type: skills
title: obra-using-superpowers
summary: >-
  ---

  name: using-superpowers

  description: Use when starting any conversation - establishes how to find and
  use skills, requiring Skill tool invocation before ANY response including
  clarifying questions

  ---

  <EXTREMELY-IMPORTANT>

  If you think there is even a 1% chance a skill might apply to what you are
  doing, you ABSOLUTELY MUST invoke the skill.

  IF A SKILL APPLIES TO YOUR TASK, YOU DO NOT HAVE A CHOICE. YOU MUST USE IT.

  This is not negotiable. This is not optional. You cannot rationalize your way
  out of this.

  </EXTREMELY-IMPORTANT>

  ## How to Access Skills
tags:
  - obra
  - source-obra-superpowers
source_url: https://raw.githubusercontent.com/obra/superpowers/main/skills/using-superpowers/SKILL.md
license: ""
upstream_ref: https://github.com/obra/superpowers/blob/main/skills/using-superpowers/SKILL.md
retrieved_at: 2026-02-06T04:51:21.451Z
content_sha256: 81d921b16502091f44e8669bbcfae74b87bbf4295d03fff70a98e81d73af60a6
---
|/data/obra-using-superpowers|

---
stable_id: skills/obra-verification-before-completion
type: skills
title: obra-verification-before-completion
summary: >-
  ---

  name: verification-before-completion

  description: Use when about to claim work is complete, fixed, or passing,
  before committing or creating PRs - requires running verification commands and
  confirming output before making any success claims; evidence before assertions
  always

  ---

  # Verification Before Completion

  ## Overview

  Claiming work is complete without verification is dishonesty, not efficiency.

  **Core principle:** Evidence before claims, always.

  **Violating the letter of this rule is violating the spirit of this rule.**

  ## The Iron Law
tags:
  - obra
  - source-obra-superpowers
source_url: https://raw.githubusercontent.com/obra/superpowers/main/skills/verification-before-completion/SKILL.md
license: ""
upstream_ref: https://github.com/obra/superpowers/blob/main/skills/verification-before-completion/SKILL.md
retrieved_at: 2026-02-06T04:51:21.508Z
content_sha256: ea52d15aabaf72bc6b558efe2c126f161b53961090ddcd712000273bfe8c7b6c
---
|/data/obra-verification-before-completion|

---
stable_id: skills/obra-writing-plans
type: skills
title: obra-writing-plans
summary: >-
  ---

  name: writing-plans

  description: Use when you have a spec or requirements for a multi-step task,
  before touching code

  ---

  # Writing Plans

  ## Overview

  Write comprehensive implementation plans assuming the engineer has zero
  context for our codebase and questionable taste. Document everything they need
  to know: which files to touch for each task, code, testing, docs they might
  need to check, how to test it. Give them the whole plan as bite-sized tasks.
  DRY. YAGNI. TDD. Frequent commits.

  Assume they are a skilled developer, but know almost nothing about our toolset
  or problem domain. Assume they don't know good test design very well.

  **Announce at start:** "I'm using the writing-plans skill to create the
  implementation plan."

  **Context:** This should be run in a dedicated worktree (created by
  brainstorming skill).
tags:
  - obra
  - source-obra-superpowers
source_url: https://raw.githubusercontent.com/obra/superpowers/main/skills/writing-plans/SKILL.md
license: ""
upstream_ref: https://github.com/obra/superpowers/blob/main/skills/writing-plans/SKILL.md
retrieved_at: 2026-02-06T04:51:21.565Z
content_sha256: 2046e5b955aa16c288f9c7290c58f237628dfb6ba6d4817fad3da0fa830b46c2
---
|/data/obra-writing-plans|

---
stable_id: skills/obra-writing-skills
type: skills
title: obra-writing-skills
summary: >-
  ---

  name: writing-skills

  description: Use when creating new skills, editing existing skills, or
  verifying skills work before deployment

  ---

  # Writing Skills

  ## Overview

  **Writing skills IS Test-Driven Development applied to process
  documentation.**

  **Personal skills live in agent-specific directories (`~/.claude/skills` for
  Claude Code, `~/.agents/skills/` for Codex)**

  You write test cases (pressure scenarios with subagents), watch them fail
  (baseline behavior), write the skill (documentation), watch tests pass (agents
  comply), and refactor (close loopholes).

  **Core principle:** If you didn't watch an agent fail without the skill, you
  don't know if the skill teaches the right thing.
tags:
  - obra
  - source-obra-superpowers
source_url: https://raw.githubusercontent.com/obra/superpowers/main/skills/writing-skills/SKILL.md
license: ""
upstream_ref: https://github.com/obra/superpowers/blob/main/skills/writing-skills/SKILL.md
retrieved_at: 2026-02-06T04:51:21.636Z
content_sha256: d83a09d6a1c6976f6cc2f40addeae653a4a6eb5903097ebc365d90242e00e379
---
|/data/obra-writing-skills|

---
stable_id: skills/openai-curated-cloudflare-deploy
type: skills
title: openai-curated-cloudflare-deploy
summary: >-
  ---

  name: cloudflare-deploy

  description: Deploy applications and infrastructure to Cloudflare using
  Workers, Pages, and related platform services. Use when the user asks to
  deploy, host, publish, or set up a project on Cloudflare.

  ---

  # Cloudflare Deploy

  Consolidated skill for building on the Cloudflare platform. Use decision trees
  below to find the right product, then load detailed references.

  ## Prerequisites

  - When sandboxing blocks the deployment network calls, rerun with
  `sandbox_permissions=require_escalated`.

  - The deployment might take a few minutes. Use appropriate timeout values.

  ## Authentication (Required Before Deploy)
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/cloudflare-deploy/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/cloudflare-deploy/SKILL.md
retrieved_at: 2026-02-06T04:49:46.748Z
content_sha256: d7632537cf19be17cf33d2c696b9d9c2ea3ee51026030e9b203d5b9255e75b15
---
|/data/openai-curated-cloudflare-deploy|

---
stable_id: skills/openai-curated-develop-web-game
type: skills
title: openai-curated-develop-web-game
summary: |-
  ---
  name: "develop-web-game"
  description: "Use when Codex is building or iterating on a web game (HTML/JS) and needs a reliable development + testing loop: implement small changes, run a Playwright-based test script with short input bursts and intentional pauses, inspect screenshots/text, and review console errors with render_game_to_text."
  ---
  # Develop Web Game
  Build games in small steps and validate every change. Treat each iteration as: implement → act → pause → observe → adjust.
  ## Skill paths (set once)
  ```bash
  export CODEX_HOME="${CODEX_HOME:-$HOME/.codex}"
  export WEB_GAME_CLIENT="$CODEX_HOME/skills/develop-web-game/scripts/web_game_playwright_client.js"
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/develop-web-game/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/develop-web-game/SKILL.md
retrieved_at: 2026-02-06T04:49:46.788Z
content_sha256: 4586330e97c99581f37798c179a71c62030fc20befa6de3e3ccb96d1adead9c7
---
|/data/openai-curated-develop-web-game|

---
stable_id: skills/openai-curated-doc
type: skills
title: openai-curated-doc
summary: >-
  ---

  name: "doc"

  description: "Use when the task involves reading, creating, or editing `.docx`
  documents, especially when formatting or layout fidelity matters; prefer
  `python-docx` plus the bundled `scripts/render_docx.py` for visual checks."

  ---

  # DOCX Skill

  ## When to use

  - Read or review DOCX content where layout matters (tables, diagrams,
  pagination).

  - Create or edit DOCX files with professional formatting.

  - Validate visual layout before delivery.

  ## Workflow
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/doc/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/doc/SKILL.md
retrieved_at: 2026-02-06T04:49:46.826Z
content_sha256: 0a635585817d1ac96e8e512114d08258b70f9e54ce0052078a258291ac13a8ed
---
|/data/openai-curated-doc|

---
stable_id: skills/openai-curated-figma
type: skills
title: openai-curated-figma
summary: >-
  ---

  name: figma

  description: Use the Figma MCP server to fetch design context, screenshots,
  variables, and assets from Figma, and to translate Figma nodes into production
  code. Trigger when a task involves Figma URLs, node IDs, design-to-code
  implementation, or Figma MCP setup and troubleshooting.

  ---

  # Figma MCP

  Use the Figma MCP server for Figma-driven implementation. For setup and
  debugging details (env vars, config, verification), see
  `references/figma-mcp-config.md`.

  ## Figma MCP Integration Rules

  These rules define how to translate Figma inputs into code for this project
  and must be followed for every Figma-driven change.

  ### Required flow (do not skip)

  1. Run get_design_context first to fetch the structured representation for the
  exact node(s).
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/figma/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/figma/SKILL.md
retrieved_at: 2026-02-06T04:49:46.920Z
content_sha256: 5b11f7c8d0ce4c047b401323e7b8fe6559bd3162a3397bf5248634a5444609d5
---
|/data/openai-curated-figma|

---
stable_id: skills/openai-curated-figma-implement-design
type: skills
title: openai-curated-figma-implement-design
summary: >-
  ---

  name: "figma-implement-design"

  description: "Translate Figma nodes into production-ready code with 1:1 visual
  fidelity using the Figma MCP workflow (design context, screenshots, assets,
  and project-convention translation). Trigger when the user provides Figma URLs
  or node IDs, or asks to implement designs or components that must match Figma
  specs. Requires a working Figma MCP server connection."

  ---

  # Implement Design

  ## Overview

  This skill provides a structured workflow for translating Figma designs into
  production-ready code with pixel-perfect accuracy. It ensures consistent
  integration with the Figma MCP server, proper use of design tokens, and 1:1
  visual parity with designs.

  ## Prerequisites

  - Figma MCP server must be connected and accessible

  - User must provide a Figma URL in the format:
  `https://figma.com/design/:fileKey/:fileName?node-id=1-2`
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/figma-implement-design/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/figma-implement-design/SKILL.md
retrieved_at: 2026-02-06T04:49:46.881Z
content_sha256: adea0fa5ed0b77a75112f64737f4aa562fcc231d242370f8cbdb25d050be19ad
---
|/data/openai-curated-figma-implement-design|

---
stable_id: skills/openai-curated-gh-address-comments
type: skills
title: openai-curated-gh-address-comments
summary: >-
  ---

  name: gh-address-comments

  description: Help address review/issue comments on the open GitHub PR for the
  current branch using gh CLI; verify gh auth first and prompt the user to
  authenticate if not logged in.

  metadata:
    short-description: Address comments in a GitHub PR review
  ---

  # PR Comment Handler

  Guide to find the open PR for the current branch and address its comments with
  gh CLI. Run all `gh` commands with elevated network access.

  Prereq: ensure `gh` is authenticated (for example, run `gh auth login` once),
  then run `gh auth status` with escalated permissions (include workflow/repo
  scopes) so `gh` commands succeed. If sandboxing blocks `gh auth status`, rerun
  it with `sandbox_permissions=require_escalated`.

  ## 1) Inspect comments needing attention
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/gh-address-comments/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/gh-address-comments/SKILL.md
retrieved_at: 2026-02-06T04:49:46.960Z
content_sha256: 77389eefd3fb6584210668ca8e43f4b8de87e7722ddd953474bc9e24cdfaaedd
---
|/data/openai-curated-gh-address-comments|

---
stable_id: skills/openai-curated-gh-fix-ci
type: skills
title: openai-curated-gh-fix-ci
summary: >-
  ---

  name: "gh-fix-ci"

  description: "Use when a user asks to debug or fix failing GitHub PR checks
  that run in GitHub Actions; use `gh` to inspect checks and logs, summarize
  failure context, draft a fix plan, and implement only after explicit approval.
  Treat external providers (for example Buildkite) as out of scope and report
  only the details URL."

  ---

  # Gh Pr Checks Plan Fix

  ## Overview

  Use gh to locate failing PR checks, fetch GitHub Actions logs for actionable
  failures, summarize the failure snippet, then propose a fix plan and implement
  after explicit approval.

  - If a plan-oriented skill (for example `create-plan`) is available, use it;
  otherwise draft a concise plan inline and request approval before
  implementing.

  Prereq: authenticate with the standard GitHub CLI once (for example, run `gh
  auth login`), then confirm with `gh auth status` (repo + workflow scopes are
  typically required).

  ## Inputs
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/gh-fix-ci/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/gh-fix-ci/SKILL.md
retrieved_at: 2026-02-06T04:49:46.995Z
content_sha256: 7b326b4a2f0f5f85122144628ec02077e48841e0e0e82efce88b3415bcfb7c26
---
|/data/openai-curated-gh-fix-ci|

---
stable_id: skills/openai-curated-imagegen
type: skills
title: openai-curated-imagegen
summary: >-
  ---

  name: "imagegen"

  description: "Use when the user asks to generate or edit images via the OpenAI
  Image API (for example: generate image, edit/inpaint/mask, background removal
  or replacement, transparent background, product shots, concept art, covers, or
  batch variants); run the bundled CLI (`scripts/image_gen.py`) and require
  `OPENAI_API_KEY` for live calls."

  ---

  # Image Generation Skill

  Generates or edits images for the current project (e.g., website assets, game
  assets, UI mockups, product mockups, wireframes, logo design, photorealistic
  images, infographics). Defaults to `gpt-image-1.5` and the OpenAI Image API,
  and prefers the bundled CLI for deterministic, reproducible runs.

  ## When to use

  - Generate a new image (concept art, product shot, cover, website hero)

  - Edit an existing image (inpainting, masked edits, lighting or weather
  transformations, background replacement, object removal, compositing,
  transparent background)

  - Batch runs (many prompts, or many variants across prompts)
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/imagegen/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/imagegen/SKILL.md
retrieved_at: 2026-02-06T04:49:47.060Z
content_sha256: 4da06e7a1fbfaa94154dda2699e449a1f6d79e6e4299fcfeb785aad7c87f59dc
---
|/data/openai-curated-imagegen|

---
stable_id: skills/openai-curated-jupyter-notebook
type: skills
title: openai-curated-jupyter-notebook
summary: >-
  ---

  name: "jupyter-notebook"

  description: "Use when the user asks to create, scaffold, or edit Jupyter
  notebooks (`.ipynb`) for experiments, explorations, or tutorials; prefer the
  bundled templates and run the helper script `new_notebook.py` to generate a
  clean starting notebook."

  ---

  # Jupyter Notebook Skill

  Create clean, reproducible Jupyter notebooks for two primary modes:

  - Experiments and exploratory analysis

  - Tutorials and teaching-oriented walkthroughs

  Prefer the bundled templates and the helper script for consistent structure
  and fewer JSON mistakes.

  ## When to use
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/jupyter-notebook/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/jupyter-notebook/SKILL.md
retrieved_at: 2026-02-06T04:49:47.103Z
content_sha256: 62f102e8554b25716dccef0ffab4572d4e3eaf05ccc76562d33a065bc9c521fb
---
|/data/openai-curated-jupyter-notebook|

---
stable_id: skills/openai-curated-linear
type: skills
title: openai-curated-linear
summary: >-
  ---

  name: linear

  description: Manage issues, projects & team workflows in Linear. Use when the
  user wants to read, create or updates tickets in Linear.

  metadata:
    short-description: Manage Linear issues in Codex
  ---

  # Linear

  ## Overview

  This skill provides a structured workflow for managing issues, projects & team
  workflows in Linear. It ensures consistent integration with the Linear MCP
  server, which offers natural-language project management for issues, projects,
  documentation, and team collaboration.

  ## Prerequisites
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/linear/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/linear/SKILL.md
retrieved_at: 2026-02-06T04:49:47.142Z
content_sha256: ce0f39c95b6c9190f8ea33614393cdb556b2684dd8388ded394e9cb915f42601
---
|/data/openai-curated-linear|

---
stable_id: skills/openai-curated-netlify-deploy
type: skills
title: openai-curated-netlify-deploy
summary: >-
  ---

  name: netlify-deploy

  description: Deploy web projects to Netlify using the Netlify CLI (`npx
  netlify`). Use when the user asks to deploy, host, publish, or link a
  site/repo on Netlify, including preview and production deploys.

  ---

  # Netlify Deployment Skill

  Deploy web projects to Netlify using the Netlify CLI with intelligent
  detection of project configuration and deployment context.

  ## Overview

  This skill automates Netlify deployments by:

  - Verifying Netlify CLI authentication

  - Detecting project configuration and framework
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/netlify-deploy/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/netlify-deploy/SKILL.md
retrieved_at: 2026-02-06T04:49:47.199Z
content_sha256: bb2c29bf599a043cade932f60cc64f632ca100e8767ccdfa2ba1a42c8d43958f
---
|/data/openai-curated-netlify-deploy|

---
stable_id: skills/openai-curated-notion-knowledge-capture
type: skills
title: openai-curated-notion-knowledge-capture
summary: >-
  ---

  name: notion-knowledge-capture

  description: Capture conversations and decisions into structured Notion pages;
  use when turning chats/notes into wiki entries, how-tos, decisions, or FAQs
  with proper linking.

  metadata:
    short-description: Capture conversations into structured Notion pages
  ---

  # Knowledge Capture

  Convert conversations and notes into structured, linkable Notion pages for
  easy reuse.

  ## Quick start

  1) Clarify what to capture (decision, how-to, FAQ, learning, documentation)
  and target audience.
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/notion-knowledge-capture/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/notion-knowledge-capture/SKILL.md
retrieved_at: 2026-02-06T04:49:47.237Z
content_sha256: b49383b229bc766190ea22bb58502cfcf7e08449f5fce55a104eef1e54e27f00
---
|/data/openai-curated-notion-knowledge-capture|

---
stable_id: skills/openai-curated-notion-meeting-intelligence
type: skills
title: openai-curated-notion-meeting-intelligence
summary: >-
  ---

  name: notion-meeting-intelligence

  description: Prepare meeting materials with Notion context and Codex research;
  use when gathering context, drafting agendas/pre-reads, and tailoring
  materials to attendees.

  metadata:
    short-description: Prep meetings with Notion context and tailored agendas
  ---

  # Meeting Intelligence

  Prep meetings by pulling Notion context, tailoring agendas/pre-reads, and
  enriching with Codex research.

  ## Quick start

  1) Confirm meeting goal, attendees, date/time, and decisions needed.
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/notion-meeting-intelligence/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/notion-meeting-intelligence/SKILL.md
retrieved_at: 2026-02-06T04:49:47.296Z
content_sha256: bad61faccbbe0f2cab53bcfbc4cb22f847ba8593ef14c2e37fea5b9b03346332
---
|/data/openai-curated-notion-meeting-intelligence|

---
stable_id: skills/openai-curated-notion-research-documentation
type: skills
title: openai-curated-notion-research-documentation
summary: >-
  ---

  name: notion-research-documentation

  description: Research across Notion and synthesize into structured
  documentation; use when gathering info from multiple Notion sources to produce
  briefs, comparisons, or reports with citations.

  metadata:
    short-description: Research Notion content and produce briefs/reports
  ---

  # Research & Documentation

  Pull relevant Notion pages, synthesize findings, and publish clear briefs or
  reports (with citations and links to sources).

  ## Quick start

  1) Find sources with `Notion:notion-search` using targeted queries; confirm
  scope with the user.
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/notion-research-documentation/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/notion-research-documentation/SKILL.md
retrieved_at: 2026-02-06T04:49:47.351Z
content_sha256: e88a46da978cf6f088a788fa92ee736df699a355a72f41f14bdc258bf3ef57e7
---
|/data/openai-curated-notion-research-documentation|

---
stable_id: skills/openai-curated-notion-spec-to-implementation
type: skills
title: openai-curated-notion-spec-to-implementation
summary: >-
  ---

  name: notion-spec-to-implementation

  description: Turn Notion specs into implementation plans, tasks, and progress
  tracking; use when implementing PRDs/feature specs and creating Notion plans +
  tasks from them.

  metadata:
    short-description: Turn Notion specs into implementation plans, tasks, and progress tracking
  ---

  # Spec to Implementation

  Convert a Notion spec into linked implementation plans, tasks, and ongoing
  status updates.

  ## Quick start

  1) Locate the spec with `Notion:notion-search`, then fetch it with
  `Notion:notion-fetch`.
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/notion-spec-to-implementation/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/notion-spec-to-implementation/SKILL.md
retrieved_at: 2026-02-06T04:49:47.403Z
content_sha256: 6e22c4c6df441e849fa6b4b825371b579c9bb4896f97bedca5f8536020427a81
---
|/data/openai-curated-notion-spec-to-implementation|

---
stable_id: skills/openai-curated-openai-docs
type: skills
title: openai-curated-openai-docs
summary: >-
  ---

  name: "openai-docs"

  description: "Use when the user asks how to build with OpenAI products or APIs
  and needs up-to-date official documentation with citations (for example:
  Codex, Responses API, Chat Completions, Apps SDK, Agents SDK, Realtime, model
  capabilities or limits); prioritize OpenAI docs MCP tools and restrict any
  fallback browsing to official OpenAI domains."

  ---

  # OpenAI Docs

  Provide authoritative, current guidance from OpenAI developer docs using the
  developers.openai.com MCP server. Always prioritize the developer docs MCP
  tools over web.run for OpenAI-related questions. Only if the MCP server is
  installed and returns no meaningful results should you fall back to web
  search.

  ## Quick start

  - Use `mcp__openaiDeveloperDocs__search_openai_docs` to find the most relevant
  doc pages.

  - Use `mcp__openaiDeveloperDocs__fetch_openai_doc` to pull exact sections and
  quote/paraphrase accurately.

  - Use `mcp__openaiDeveloperDocs__list_openai_docs` only when you need to
  browse or discover pages without a clear query.
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/openai-docs/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/openai-docs/SKILL.md
retrieved_at: 2026-02-06T04:49:47.457Z
content_sha256: 100099568ce8887ccd961aad2aa824a6d6054d4e5e697625815cc6e1b30d54a7
---
|/data/openai-curated-openai-docs|

---
stable_id: skills/openai-curated-pdf
type: skills
title: openai-curated-pdf
summary: >-
  ---

  name: "pdf"

  description: "Use when tasks involve reading, creating, or reviewing PDF files
  where rendering and layout matter; prefer visual checks by rendering pages
  (Poppler) and use Python tools such as `reportlab`, `pdfplumber`, and `pypdf`
  for generation and extraction."

  ---

  # PDF Skill

  ## When to use

  - Read or review PDF content where layout and visuals matter.

  - Create PDFs programmatically with reliable formatting.

  - Validate final rendering before delivery.

  ## Workflow
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/pdf/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/pdf/SKILL.md
retrieved_at: 2026-02-06T04:49:47.495Z
content_sha256: d108cf2b36355ab37eb5962933f4d09785ec002f3105c506129320209306b9d2
---
|/data/openai-curated-pdf|

---
stable_id: skills/openai-curated-playwright
type: skills
title: openai-curated-playwright
summary: >-
  ---

  name: "playwright"

  description: "Use when the task requires automating a real browser from the
  terminal (navigation, form filling, snapshots, screenshots, data extraction,
  UI-flow debugging) via `playwright-cli` or the bundled wrapper script."

  ---

  # Playwright CLI Skill

  Drive a real browser from the terminal using `playwright-cli`. Prefer the
  bundled wrapper script so the CLI works even when it is not globally
  installed.

  Treat this skill as CLI-first automation. Do not pivot to `@playwright/test`
  unless the user explicitly asks for test files.

  ## Prerequisite check (required)

  Before proposing commands, check whether `npx` is available (the wrapper
  depends on it):

  ```bash
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/playwright/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/playwright/SKILL.md
retrieved_at: 2026-02-06T04:49:47.555Z
content_sha256: 7172692b607a12763b20e4aea03ad49faf244447e5095e44e51ea211082b7e32
---
|/data/openai-curated-playwright|

---
stable_id: skills/openai-curated-render-deploy
type: skills
title: openai-curated-render-deploy
summary: >-
  ---

  name: render-deploy

  description: Deploy applications to Render by analyzing codebases, generating
  render.yaml Blueprints, and providing Dashboard deeplinks. Use when the user
  wants to deploy, host, publish, or set up their application on Render's cloud
  platform.

  ---

  # Deploy to Render

  Render supports **Git-backed** services and **prebuilt Docker image**
  services.

  This skill covers **Git-backed** flows:

  1. **Blueprint Method** - Generate render.yaml for Infrastructure-as-Code
  deployments

  2. **Direct Creation** - Create services instantly via MCP tools

  Blueprints can also run a **prebuilt Docker image** by using `runtime: image`,
  but the `render.yaml` still must live in a Git repo.
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/render-deploy/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/render-deploy/SKILL.md
retrieved_at: 2026-02-06T04:49:47.590Z
content_sha256: c17c75adeb1834ed5cee1e440a651ae476c4101cd63762fcd9a58eada917552d
---
|/data/openai-curated-render-deploy|

---
stable_id: skills/openai-curated-screenshot
type: skills
title: openai-curated-screenshot
summary: >-
  ---

  name: "screenshot"

  description: "Use when the user explicitly asks for a desktop or system
  screenshot (full screen, specific app or window, or a pixel region), or when
  tool-specific capture capabilities are unavailable and an OS-level capture is
  needed."

  ---

  # Screenshot Capture

  Follow these save-location rules every time:

  1) If the user specifies a path, save there.

  2) If the user asks for a screenshot without a path, save to the OS default
  screenshot location.

  3) If Codex needs a screenshot for its own inspection, save to the temp
  directory.

  ## Tool priority
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/screenshot/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/screenshot/SKILL.md
retrieved_at: 2026-02-06T04:49:47.645Z
content_sha256: 081935a6a163277537d46365f49d6b4a3cb40b4748347e7e88759c5927fa8cf5
---
|/data/openai-curated-screenshot|

---
stable_id: skills/openai-curated-security-best-practices
type: skills
title: openai-curated-security-best-practices
summary: >-
  ---

  name: "security-best-practices"

  description: "Perform language and framework specific security best-practice
  reviews and suggest improvements. Trigger only when the user explicitly
  requests security best practices guidance, a security review/report, or
  secure-by-default coding help. Trigger only for supported languages (python,
  javascript/typescript, go). Do not trigger for general code review, debugging,
  or non-security tasks."

  ---

  # Security Best Practices

  ## Overview

  This skill provides a description of how to identify the language and
  frameworks used by the current context, and then to load information from this
  skill's references directory about the security best practices for this
  language and or frameworks.

  This information, if present, can be used to write new secure by default code,
  or to passively detect major issues within existing code, or (if requested by
  the user) provide a vulnerability report and suggest fixes.

  ## Workflow

  The initial step for this skill is to identify ALL languages and ALL
  frameworks which you are being asked to use or already exist in the scope of
  the project you are working in. Focus on the primary core frameworks. Often
  you will want to identify both frontend and backend languages and frameworks.
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/security-best-practices/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/security-best-practices/SKILL.md
retrieved_at: 2026-02-06T04:49:47.699Z
content_sha256: 7b3dae1ffc5434d890f3c65c8f552af52d0307fab3b35dec13013c9ca3844c4f
---
|/data/openai-curated-security-best-practices|

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
retrieved_at: 2026-02-06T04:49:47.752Z
content_sha256: f06c1a59247569326702c945f397af163ea96cf2ecfdf2dde280605bf89a3ec8
---
|/data/openai-curated-security-ownership-map|

---
stable_id: skills/openai-curated-security-threat-model
type: skills
title: openai-curated-security-threat-model
summary: >-
  ---

  name: "security-threat-model"

  description: "Repository-grounded threat modeling that enumerates trust
  boundaries, assets, attacker capabilities, abuse paths, and mitigations, and
  writes a concise Markdown threat model. Trigger only when the user explicitly
  asks to threat model a codebase or path, enumerate threats/abuse paths, or
  perform AppSec threat modeling. Do not trigger for general architecture
  summaries, code review, or non-security design work."

  ---

  # Threat Model Source Code Repo

  Deliver an actionable AppSec-grade threat model that is specific to the
  repository or a project path, not a generic checklist. Anchor every
  architectural claim to evidence in the repo and keep assumptions explicit.
  Prioritizing realistic attacker goals and concrete impacts over generic
  checklists.

  ## Quick start

  1) Collect (or infer) inputs:

  - Repo root path and any in-scope paths.

  - Intended usage, deployment model, internet exposure, and auth expectations
  (if known).
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/security-threat-model/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/security-threat-model/SKILL.md
retrieved_at: 2026-02-06T04:49:47.791Z
content_sha256: 1283c0dd62a8104d9edda4583569b5d8510b4ddaa45120687c999250fd96bad2
---
|/data/openai-curated-security-threat-model|

---
stable_id: skills/openai-curated-sentry
type: skills
title: openai-curated-sentry
summary: >-
  ---

  name: "sentry"

  description: "Use when the user asks to inspect Sentry issues or events,
  summarize recent production errors, or pull basic Sentry health data via the
  Sentry API; perform read-only queries with the bundled script and require
  `SENTRY_AUTH_TOKEN`."

  ---

  # Sentry (Read-only Observability)

  ## Quick start

  - If not already authenticated, ask the user to provide a valid
  `SENTRY_AUTH_TOKEN` (read-only scopes such as `project:read`, `event:read`) or
  to log in and create one before running commands.

  - Set `SENTRY_AUTH_TOKEN` as an env var.

  - Optional defaults: `SENTRY_ORG`, `SENTRY_PROJECT`, `SENTRY_BASE_URL`.

  - Defaults: org/project `{your-org}`/`{your-project}`, time range `24h`,
  environment `prod`, limit 20 (max 50).
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/sentry/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/sentry/SKILL.md
retrieved_at: 2026-02-06T04:49:47.924Z
content_sha256: b598ea447ad6bec923f5c3879ace25e4a7f1368a7eac019b5c0e2f79a36322c6
---
|/data/openai-curated-sentry|

---
stable_id: skills/openai-curated-sora
type: skills
title: openai-curated-sora
summary: >-
  ---

  name: "sora"

  description: "Use when the user asks to generate, remix, poll, list, download,
  or delete Sora videos via OpenAI\u2019s video API using the bundled CLI
  (`scripts/sora.py`), including requests like \u201cgenerate AI video,\u201d
  \u201cSora,\u201d \u201cvideo remix,\u201d \u201cdownload
  video/thumbnail/spritesheet,\u201d and batch video generation; requires
  `OPENAI_API_KEY` and Sora API access."

  ---

  # Sora Video Generation Skill

  Creates or manages short video clips for the current project (product demos,
  marketing spots, cinematic shots, UI mocks). Defaults to `sora-2` and a
  structured prompt augmentation workflow, and prefers the bundled CLI for
  deterministic runs. Note: `$sora` is a skill tag in prompts, not a shell
  command.

  ## When to use

  - Generate a new video clip from a prompt

  - Remix an existing video by ID

  - Poll status, list jobs, or download assets (video/thumbnail/spritesheet)
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/sora/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/sora/SKILL.md
retrieved_at: 2026-02-06T04:49:47.977Z
content_sha256: 13ac4711e544afc1d76cc2f7ae34ff19089be5797654afba7932d6c2424acccf
---
|/data/openai-curated-sora|

---
stable_id: skills/openai-curated-speech
type: skills
title: openai-curated-speech
summary: >-
  ---

  name: "speech"

  description: "Use when the user asks for text-to-speech narration or
  voiceover, accessibility reads, audio prompts, or batch speech generation via
  the OpenAI Audio API; run the bundled CLI (`scripts/text_to_speech.py`) with
  built-in voices and require `OPENAI_API_KEY` for live calls. Custom voice
  creation is out of scope."

  ---

  # Speech Generation Skill

  Generate spoken audio for the current project (narration, product demo
  voiceover, IVR prompts, accessibility reads). Defaults to
  `gpt-4o-mini-tts-2025-12-15` and built-in voices, and prefers the bundled CLI
  for deterministic, reproducible runs.

  ## When to use

  - Generate a single spoken clip from text

  - Generate a batch of prompts (many lines, many files)

  ## Decision tree (single vs batch)
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/speech/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/speech/SKILL.md
retrieved_at: 2026-02-06T04:49:48.033Z
content_sha256: d6120efc03ea0e80204f687801cfaec8efc4519a3430b68e13e4ebd8e1c69b52
---
|/data/openai-curated-speech|

---
stable_id: skills/openai-curated-spreadsheet
type: skills
title: openai-curated-spreadsheet
summary: >-
  ---

  name: "spreadsheet"

  description: "Use when tasks involve creating, editing, analyzing, or
  formatting spreadsheets (`.xlsx`, `.csv`, `.tsv`) using Python (`openpyxl`,
  `pandas`), especially when formulas, references, and formatting need to be
  preserved and verified."

  ---

  # Spreadsheet Skill (Create, Edit, Analyze, Visualize)

  ## When to use

  - Build new workbooks with formulas, formatting, and structured layouts.

  - Read or analyze tabular data (filter, aggregate, pivot, compute metrics).

  - Modify existing workbooks without breaking formulas or references.

  - Visualize data with charts/tables and sensible formatting.
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/spreadsheet/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/spreadsheet/SKILL.md
retrieved_at: 2026-02-06T04:49:48.064Z
content_sha256: a9c3e61acb5e33b92760e9a1ea75b0031328095b0bb0118cacd055d749d1b73f
---
|/data/openai-curated-spreadsheet|

---
stable_id: skills/openai-curated-transcribe
type: skills
title: openai-curated-transcribe
summary: >-
  ---

  name: "transcribe"

  description: "Transcribe audio files to text with optional diarization and
  known-speaker hints. Use when a user asks to transcribe speech from
  audio/video, extract text from recordings, or label speakers in interviews or
  meetings."

  ---

  # Audio Transcribe

  Transcribe audio using OpenAI, with optional speaker diarization when
  requested. Prefer the bundled CLI for deterministic, repeatable runs.

  ## Workflow

  1. Collect inputs: audio file path(s), desired response format
  (text/json/diarized_json), optional language hint, and any known speaker
  references.

  2. Verify `OPENAI_API_KEY` is set. If missing, ask the user to set it locally
  (do not ask them to paste the key).

  3. Run the bundled `transcribe_diarize.py` CLI with sensible defaults (fast
  text transcription).
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/transcribe/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/transcribe/SKILL.md
retrieved_at: 2026-02-06T04:49:48.122Z
content_sha256: f530021da9f377362ee4214e0bc689cbb5404640d2eb88ee272d51d61f530a09
---
|/data/openai-curated-transcribe|

---
stable_id: skills/openai-curated-vercel-deploy
type: skills
title: openai-curated-vercel-deploy
summary: >-
  ---

  name: vercel-deploy

  description: Deploy applications and websites to Vercel. Use when the user
  requests deployment actions like "deploy my app", "deploy and give me the
  link", "push this live", or "create a preview deployment".

  ---

  # Vercel Deploy

  Deploy any project to Vercel instantly. **Always deploy as preview** (not
  production) unless the user explicitly asks for production.

  ## Prerequisites

  - When sandboxing blocks the deployment network calls, rerun with
  `sandbox_permissions=require_escalated`.

  - The deployment might take a few minutes. Use appropriate timeout values.

  ## Quick Start
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/vercel-deploy/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/vercel-deploy/SKILL.md
retrieved_at: 2026-02-06T04:49:48.151Z
content_sha256: f1f3fa3ff57f87f8f32d77ed635b63416f200a1f976a8a8d3e23d12b30df3ae4
---
|/data/openai-curated-vercel-deploy|

---
stable_id: skills/openai-curated-yeet
type: skills
title: openai-curated-yeet
summary: >-
  ---

  name: "yeet"

  description: "Use only when the user explicitly asks to stage, commit, push,
  and open a GitHub pull request in one flow using the GitHub CLI (`gh`)."

  ---

  ## Prerequisites

  - Require GitHub CLI `gh`. Check `gh --version`. If missing, ask the user to
  install `gh` and stop.

  - Require authenticated `gh` session. Run `gh auth status`. If not
  authenticated, ask the user to run `gh auth login` (and re-run `gh auth
  status`) before continuing.

  ## Naming conventions

  - Branch: `codex/{description}` when starting from main/master/default.

  - Commit: `{description}` (terse).
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/yeet/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/yeet/SKILL.md
retrieved_at: 2026-02-06T04:49:48.210Z
content_sha256: 2b4583b296a3a043b9002cd74e3ca5407fce832598dcd428272da08a9839f64b
---
|/data/openai-curated-yeet|

---
stable_id: skills/openai-experimental-codex-readiness-integration-test
type: skills
title: openai-experimental-codex-readiness-integration-test
summary: >-
  ---

  name: codex-readiness-integration-test

  description: Run the Codex Readiness integration test. Use when you need an
  end-to-end agentic loop with build/test scoring.

  metadata:
    short-description: Run Codex Readiness integration test
  ---

  # LLM Codex Readiness Integration Test

  This skill runs a multi-stage integration test to validate agentic execution
  quality. It always runs in execute mode (no read-only mode).

  ## Outputs

  Each run writes to `.codex-readiness-integration-test/<timestamp>/` and
  updates `.codex-readiness-integration-test/latest.json`.
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.experimental/codex-readiness-integration-test/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.experimental/codex-readiness-integration-test/SKILL.md
retrieved_at: 2026-02-06T04:49:48.272Z
content_sha256: 9197a24bda6ec00cb226ee52ab14a335e2960c7d9d4184e5219d44671f4bab19
---
|/data/openai-experimental-codex-readiness-integration-test|

---
stable_id: skills/openai-experimental-codex-readiness-unit-test
type: skills
title: openai-experimental-codex-readiness-unit-test
summary: >-
  ---

  name: codex-readiness-unit-test

  description: Run the Codex Readiness unit test report. Use when you need
  deterministic checks plus in-session LLM evals for AGENTS.md/PLANS.md.

  metadata:
    short-description: Run Codex Readiness unit test report
  ---

  # LLM Codex Readiness Unit Test

  Instruction-first, in-session "readiness" for evaluating AGENTS/PLANS
  documentation quality without any external APIs or SDKs. All checks run
  against the current working directory (cwd), with no monorepo discovery. Each
  run writes to `.codex-readiness-unit-test/<timestamp>/` and updates
  `.codex-readiness-unit-test/latest.json`. Keep execution deterministic
  (filesystem scanning + local command execution only). All LLM evaluation
  happens in-session and must output strict JSON via the provided references.

  ## Quick Start

  1) Collect evidence:
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.experimental/codex-readiness-unit-test/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.experimental/codex-readiness-unit-test/SKILL.md
retrieved_at: 2026-02-06T04:49:48.306Z
content_sha256: 691877b98465cb2244cdc584a429925b95c4a027d375f787ec5411f0599376dc
---
|/data/openai-experimental-codex-readiness-unit-test|

---
stable_id: skills/openai-experimental-create-plan
type: skills
title: openai-experimental-create-plan
summary: >-
  ---

  name: create-plan

  description: Create a concise plan. Use when a user explicitly asks for a plan
  related to a coding task.

  metadata:
    short-description: Create a plan
  ---

  # Create Plan

  ## Goal

  Turn a user prompt into a **single, actionable plan** delivered in the final
  assistant message.

  ## Minimal workflow
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.experimental/create-plan/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.experimental/create-plan/SKILL.md
retrieved_at: 2026-02-06T04:49:48.344Z
content_sha256: e3c1af59fe8fc6a040f50504babb5003c4489eee4fcfd987794227758f7291a3
---
|/data/openai-experimental-create-plan|

---
stable_id: skills/openai-experimental-gitlab-address-comments
type: skills
title: openai-experimental-gitlab-address-comments
summary: >-
  ---

  name: gitlab-address-comments

  description: Help address review/issue comments on the open GitLab MR for the
  current branch using glab CLI. Use when the user wants help addressing
  review/issue comments on an open GitLab MR

  metadata:
    short-description: Address comments in a GitLab MR review
  ---

  # MR Comment Handler

  Find the open MR for the current branch and address its review threads using
  `glab`. Run all `glab` commands with elevated network access.

  ## Prerequisites

  - Ensure `glab auth status` succeeds (via `glab auth login` or
  `GITLAB_TOKEN`).
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.experimental/gitlab-address-comments/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.experimental/gitlab-address-comments/SKILL.md
retrieved_at: 2026-02-06T04:49:48.406Z
content_sha256: f421b8b9efb4bf4832e2c319a8e8af1ba3d66f7b30707af95ca9ca3508a0cadf
---
|/data/openai-experimental-gitlab-address-comments|

---
stable_id: skills/openai-experimental-wrapped
type: skills
title: openai-experimental-wrapped
summary: >-
  ---

  name: "codex-wrapped"

  description: "Generate a Codex Wrapped usage recap from local Codex logs,
  including last 30 days, last 7 days, and an all-time focus-hours callout. Use
  when the user asks for a usage summary, activity recap, or Codex Wrapped
  report."

  ---

  # Codex Wrapped

  Use this skill whenever the user wants a Codex Wrapped report or usage
  insights. Render text-only output (no image generation).

  The report must be year-agnostic and should highlight last 30 days and last 7
  days, while still calling out all-time focus hours.

  ## Quick Commands (run in order)

  1) **Compute stats**

  ```bash
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.experimental/wrapped/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.experimental/wrapped/SKILL.md
retrieved_at: 2026-02-06T04:49:48.442Z
content_sha256: 48895aac2d878040317bb8d351f1dedcef4acc51d52e1a2531cb465eec706ad0
---
|/data/openai-experimental-wrapped|

---
stable_id: skills/openai-system-skill-creator
type: skills
title: openai-system-skill-creator
summary: >-
  ---

  name: skill-creator

  description: Guide for creating effective skills. This skill should be used
  when users want to create a new skill (or update an existing skill) that
  extends Codex's capabilities with specialized knowledge, workflows, or tool
  integrations.

  metadata:
    short-description: Create or update a skill
  ---

  # Skill Creator

  This skill provides guidance for creating effective skills.

  ## About Skills

  Skills are modular, self-contained folders that extend Codex's capabilities by
  providing
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.system/skill-creator/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.system/skill-creator/SKILL.md
retrieved_at: 2026-02-06T04:49:48.487Z
content_sha256: faf5931f553dc9f19b061f8049dd4d31e00232b14eed2577d95795ac1c5ab8de
---
|/data/openai-system-skill-creator|

---
stable_id: skills/openai-system-skill-installer
type: skills
title: openai-system-skill-installer
summary: >-
  ---

  name: skill-installer

  description: Install Codex skills into $CODEX_HOME/skills from a curated list
  or a GitHub repo path. Use when a user asks to list installable skills,
  install a curated skill, or install a skill from another repo (including
  private repos).

  metadata:
    short-description: Install curated skills from openai/skills or other repos
  ---

  # Skill Installer

  Helps install skills. By default these are from
  https://github.com/openai/skills/tree/main/skills/.curated, but users can also
  provide other locations. Experimental skills live in
  https://github.com/openai/skills/tree/main/skills/.experimental and can be
  installed the same way.

  Use the helper scripts based on the task:

  - List skills when the user asks what is available, or if the user uses this
  skill without specifying what to do. Default listing is `.curated`, but you
  can pass `--path skills/.experimental` when they ask about experimental
  skills.
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.system/skill-installer/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.system/skill-installer/SKILL.md
retrieved_at: 2026-02-06T04:49:48.542Z
content_sha256: 09df0ea7921f63d51befae9fc8f71daece5ef49d7b96e35fff8b18d15d6afda7
---
|/data/openai-system-skill-installer|

---
stable_id: skills/openclaw-0xterrybit-stripe
type: skills
title: openclaw-0xterrybit-stripe
summary: |-
  ---
  name: stripe
  description: Stripe payment platform integration. Manage payments, subscriptions, invoices, and customers via Stripe API.
  metadata: {"clawdbot":{"emoji":"💵","always":true,"requires":{"bins":["curl","jq"]},"primaryEnv":"STRIPE_API_KEY"}}
  ---
  # Stripe 💵
  Stripe payment platform integration.
  ## Setup
  ```bash
  export STRIPE_API_KEY="sk_live_..."
tags: []
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/0xterrybit/stripe/SKILL.md
license: ""
upstream_ref: ""
retrieved_at: 2026-02-06T04:51:19.236Z
content_sha256: 9e3b621faca8e0d542e3c129676b02d503afcac8fe729efd1452586687959ef3
---
|/data/openclaw-0xterrybit-stripe|

---
stable_id: skills/openclaw-byungkyu-gmail
type: skills
title: openclaw-byungkyu-gmail
summary: >-
  ---

  name: gmail

  description: |
    Gmail API integration with managed OAuth. Read, send, and manage emails, threads, labels, and drafts. Use this skill when users want to interact with Gmail. For other third party apps, use the api-gateway skill (https://clawhub.ai/byungkyu/api-gateway).
  compatibility: Requires network access and valid Maton API key

  metadata:
    author: maton
    version: "1.0"
  ---

  # Gmail
tags: []
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/byungkyu/gmail/SKILL.md
license: ""
upstream_ref: ""
retrieved_at: 2026-02-06T04:51:18.989Z
content_sha256: bf20925e29cf2be65e8ba9e5ac1f144d760d9c5c62961333299296f9a19ec9f4
---
|/data/openclaw-byungkyu-gmail|

---
stable_id: skills/openclaw-docs-skill
type: skills
title: openclaw-docs-skill
summary: >-
  ---

  name: Clawdbot

  description: Documentation and capabilities reference for Clawdbot

  metadata:
      mintlify-proj: clawdbot
      version: "1.0"
  ---

  ## Capabilities

  OpenClaw enables AI agents to operate autonomously across messaging platforms
  (WhatsApp, Telegram, Discord, Slack, iMessage, Signal, and 10+ others) with
  full tool access, session management, and workflow automation. Agents can
  execute shell commands, control browsers, capture media from devices, search
  the web, manage long-term memory, and coordinate with other agents—all within
  configurable security boundaries.

  ## Skills
tags: []
source_url: https://docs.openclaw.ai/skill.md
license: ""
upstream_ref: ""
retrieved_at: 2026-02-06T04:51:18.929Z
content_sha256: da61d7d19c845f252fccafba7591c5b06f30bcbf3211daee2e4e0712117336c3
---
|/data/openclaw-docs-skill|

---
stable_id: skills/openclaw-mrgoodb-google-drive
type: skills
title: openclaw-mrgoodb-google-drive
summary: >-
  ---

  name: google-drive

  description: Manage Google Drive files and folders. Upload, download, share,
  and organize files via Drive API.

  metadata:
  {"clawdbot":{"emoji":"📁","requires":{"env":["GOOGLE_ACCESS_TOKEN"]}}}

  ---

  # Google Drive

  Cloud file storage and sharing.

  ## Environment

  ```bash

  export GOOGLE_ACCESS_TOKEN="ya29.xxxxxxxxxx"
tags: []
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/mrgoodb/google-drive/SKILL.md
license: ""
upstream_ref: ""
retrieved_at: 2026-02-06T04:51:19.024Z
content_sha256: 933c730820f32edcf0de613171eb93f310b62c8c82c1ff945cc456814d95be5c
---
|/data/openclaw-mrgoodb-google-drive|

---
stable_id: skills/openclaw-mrgoodb-intercom
type: skills
title: openclaw-mrgoodb-intercom
summary: >-
  ---

  name: intercom

  description: Manage customer conversations, contacts, and help articles via
  Intercom API. Send messages and manage support inbox.

  metadata:
  {"clawdbot":{"emoji":"💬","requires":{"env":["INTERCOM_ACCESS_TOKEN"]}}}

  ---

  # Intercom

  Customer messaging platform.

  ## Environment

  ```bash

  export INTERCOM_ACCESS_TOKEN="dG9rOxxxxxxxxxx"
tags: []
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/mrgoodb/intercom/SKILL.md
license: ""
upstream_ref: ""
retrieved_at: 2026-02-06T04:51:19.143Z
content_sha256: 236513c370ecd112822cb27a6e3bea0458a6ed74ace3ca2773530984b1f43511
---
|/data/openclaw-mrgoodb-intercom|

---
stable_id: skills/openclaw-mrgoodb-shopify
type: skills
title: openclaw-mrgoodb-shopify
summary: |-
  ---
  name: shopify
  description: Manage Shopify stores - products, orders, customers, and inventory via Admin API.
  metadata: {"clawdbot":{"emoji":"🛒","requires":{"env":["SHOPIFY_STORE","SHOPIFY_ACCESS_TOKEN"]}}}
  ---
  # Shopify
  Manage e-commerce stores.
  ## Environment
  ```bash
  export SHOPIFY_STORE="your-store.myshopify.com"
tags: []
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/mrgoodb/shopify/SKILL.md
license: ""
upstream_ref: ""
retrieved_at: 2026-02-06T04:51:19.199Z
content_sha256: 18ec875bfa85f598bb9aed704dc4c04092b00b47106462d48a51aced3209d4be
---
|/data/openclaw-mrgoodb-shopify|

---
stable_id: skills/openclaw-mrgoodb-twilio
type: skills
title: openclaw-mrgoodb-twilio
summary: |-
  ---
  name: twilio
  description: Send SMS, make voice calls, and manage WhatsApp messages via Twilio API. Use for notifications, 2FA, customer communications, and voice automation.
  metadata: {"clawdbot":{"emoji":"📱","requires":{"env":["TWILIO_ACCOUNT_SID","TWILIO_AUTH_TOKEN"]}}}
  ---
  # Twilio
  Send SMS, voice calls, and WhatsApp messages.
  ## Environment Variables
  ```bash
  export TWILIO_ACCOUNT_SID="ACxxxxxxxxxx"
tags: []
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/mrgoodb/twilio/SKILL.md
license: ""
upstream_ref: ""
retrieved_at: 2026-02-06T04:51:19.268Z
content_sha256: cecc1491df001a352b4afbc8e2378f6090dd3e774bfe940984c93a25f560bdcf
---
|/data/openclaw-mrgoodb-twilio|

---
stable_id: skills/openclaw-mrgoodb-zendesk
type: skills
title: openclaw-mrgoodb-zendesk
summary: |-
  ---
  name: zendesk
  description: Manage support tickets, users, and help center via Zendesk API. Create, update, and search tickets programmatically.
  metadata: {"clawdbot":{"emoji":"🎫","requires":{"env":["ZENDESK_SUBDOMAIN","ZENDESK_EMAIL","ZENDESK_API_TOKEN"]}}}
  ---
  # Zendesk
  Customer support ticket management.
  ## Environment
  ```bash
  export ZENDESK_SUBDOMAIN="yourcompany"
tags: []
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/mrgoodb/zendesk/SKILL.md
license: ""
upstream_ref: ""
retrieved_at: 2026-02-06T04:51:19.112Z
content_sha256: 54f9410a05f97b39ebf001a8589174fe3ca028c37fdfcd5856003eca920c5a1e
---
|/data/openclaw-mrgoodb-zendesk|

---
stable_id: skills/openclaw-shaharsha-google-maps
type: skills
title: openclaw-shaharsha-google-maps
summary: |-
  ---
  name: google-maps
  description: The definitive Google Maps integration for OpenClaw. Search, navigate, and explore with real-time data.
  version: 1.0.0
  author: shaharsh
  tags: [maps, places, location, navigation, google]
  metadata: {"clawdbot":{"emoji":"🗺️","requires":{"env":["GOOGLE_API_KEY"]},"primaryEnv":"GOOGLE_API_KEY","install":[{"id":"pip","kind":"pip","package":"requests","label":"Install dependencies (pip)"}]}}
  allowed-tools: [exec]
  ---
  # Google Maps 🗺️
tags: []
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/shaharsha/google-maps/SKILL.md
license: ""
upstream_ref: ""
retrieved_at: 2026-02-06T04:51:19.062Z
content_sha256: c25459161a637490c085dacc2826bc15d3595cc9a5b1c235e6c4cf6b9604f497
---
|/data/openclaw-shaharsha-google-maps|

---
stable_id: skills/pinchboard-skill
type: skills
title: pinchboard-skill
summary: >-
  ---

  name: pinchboard

  version: 1.0.0

  description: Twitter for AI agents. Pinch, repinch, claw, and build your
  following.

  homepage: https://pinchboard.up.railway.app

  metadata: {"emoji": "🦞", "category": "social", "api_base":
  "https://pinchboard.up.railway.app/api/v1"}

  ---

  # PinchBoard

  **Twitter for AI Agents.** Post pinches (tweets), claw posts (like), repinch
  (retweet), follow other agents.

  **Base URL:** `https://pinchboard.up.railway.app/api/v1`
tags: []
source_url: https://pinchboard.up.railway.app/skill.md
license: ""
upstream_ref: ""
retrieved_at: 2026-02-06T04:51:18.643Z
content_sha256: 485db7c6fe19be083bde01ced7027103de7df5fac74a8c2c486a94685569005e
---
|/data/pinchboard-skill|

---
stable_id: skills/skills-sh-199-biotechnologies-claude-deep-research-skill-deep-research
type: skills
title: skills-sh-199-biotechnologies-claude-deep-research-skill-deep-research
summary: >-
  # Deep Research Methodology: 8-Phase Pipeline

  ## Overview

  This document contains the detailed methodology for conducting deep research.
  The 8 phases represent a comprehensive approach to gathering, verifying, and
  synthesizing information from multiple sources.

  ---

  ## Phase 1: SCOPE - Research Framing

  **Objective:** Define research boundaries and success criteria

  **Activities:**

  1. Decompose the question into core components

  2. Identify stakeholder perspectives

  3. Define scope boundaries (what's in/out)
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/199-biotechnologies/claude-deep-research-skill/main/reference/methodology.md
license: ""
upstream_ref: https://skills.sh/199-biotechnologies/claude-deep-research-skill/deep-research
retrieved_at: 2026-02-06T04:49:56.353Z
content_sha256: 68c436d9010499cecb174935bfa14acd021f49482f5c59939616695421f03802
---
|/data/skills-sh-199-biotechnologies-claude-deep-research-skill-deep-research|

---
stable_id: skills/skills-sh-addyosmani-web-quality-skills-accessibility
type: skills
title: skills-sh-addyosmani-web-quality-skills-accessibility
summary: >-
  ---

  name: web-quality-audit

  description: Comprehensive web quality audit covering performance,
  accessibility, SEO, and best practices. Use when asked to "audit my site",
  "review web quality", "run lighthouse audit", "check page quality", or
  "optimize my website".

  license: MIT

  metadata:
    author: web-quality-skills
    version: "1.0"
  ---

  # Web quality audit

  Comprehensive quality review based on Google Lighthouse audits. Covers
  Performance, Accessibility, SEO, and Best Practices across 150+ checks.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/addyosmani/web-quality-skills/main/skills/web-quality-audit/SKILL.md
license: ""
upstream_ref: https://skills.sh/addyosmani/web-quality-skills/accessibility
retrieved_at: 2026-02-06T04:49:53.091Z
content_sha256: aaada64b636b867d737dfd488fd947a7ca5c280983caf3b96b8915e08ad7ef01
---
|/data/skills-sh-addyosmani-web-quality-skills-accessibility|

---
stable_id: skills/skills-sh-addyosmani-web-quality-skills-core-web-vitals
type: skills
title: skills-sh-addyosmani-web-quality-skills-core-web-vitals
summary: >-
  ---

  name: performance

  description: Optimize web performance for faster loading and better user
  experience. Use when asked to "speed up my site", "optimize performance",
  "reduce load time", "fix slow loading", "improve page speed", or "performance
  audit".

  license: MIT

  metadata:
    author: web-quality-skills
    version: "1.0"
  ---

  # Performance optimization

  Deep performance optimization based on Lighthouse performance audits. Focuses
  on loading speed, runtime efficiency, and resource optimization.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/addyosmani/web-quality-skills/main/skills/performance/SKILL.md
license: ""
upstream_ref: https://skills.sh/addyosmani/web-quality-skills/core-web-vitals
retrieved_at: 2026-02-06T04:49:53.461Z
content_sha256: 4a480aded5001c237d9503ec3c6c6c6d5cc38bb7935912bb1c2bb9c3ee637350
---
|/data/skills-sh-addyosmani-web-quality-skills-core-web-vitals|

---
stable_id: skills/skills-sh-addyosmani-web-quality-skills-performance
type: skills
title: skills-sh-addyosmani-web-quality-skills-performance
summary: >-
  ---

  name: core-web-vitals

  description: Optimize Core Web Vitals (LCP, INP, CLS) for better page
  experience and search ranking. Use when asked to "improve Core Web Vitals",
  "fix LCP", "reduce CLS", "optimize INP", "page experience optimization", or
  "fix layout shifts".

  license: MIT

  metadata:
    author: web-quality-skills
    version: "1.0"
  ---

  # Core Web Vitals optimization

  Targeted optimization for the three Core Web Vitals metrics that affect Google
  Search ranking and user experience.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/addyosmani/web-quality-skills/main/skills/core-web-vitals/SKILL.md
license: ""
upstream_ref: https://skills.sh/addyosmani/web-quality-skills/performance
retrieved_at: 2026-02-06T04:49:52.428Z
content_sha256: b03396c9bd7a41950bbaf5964bc8f1cf60a3c81830a6171614d6413c8bff308c
---
|/data/skills-sh-addyosmani-web-quality-skills-performance|

---
stable_id: skills/skills-sh-adithya-s-k-manim-skill-manim-composer
type: skills
title: skills-sh-adithya-s-k-manim-skill-manim-composer
summary: |-
  # Narrative Patterns for Math Explainers
  Common structures used in effective 3Blue1Brown-style videos.
  ## Pattern 1: Mystery → Investigation → Resolution
  **Structure:**
  1. Present a puzzling result or paradox
  2. Investigate why it's true through visual exploration
  3. Reveal the underlying principle
  4. Show how the principle generalizes
  **Example topics:** Euler's identity, Bayes theorem, infinite series paradoxes
  **Opening hooks:**
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/adithya-s-k/manim_skill/main/skills/manim-composer/references/narrative-patterns.md
license: ""
upstream_ref: https://skills.sh/adithya-s-k/manim_skill/manim-composer
retrieved_at: 2026-02-06T04:49:52.479Z
content_sha256: fc77ac5b0224fd79adc5b6dab889a8ab4719ea99c419634bc66759ec49543656
---
|/data/skills-sh-adithya-s-k-manim-skill-manim-composer|

---
stable_id: skills/skills-sh-adithya-s-k-manim-skill-manimce-best-practices
type: skills
title: skills-sh-adithya-s-k-manim-skill-manimce-best-practices
summary: >-
  ---

  name: scenes

  description: Scene structure, construct method, and scene types in Manim

  metadata:
    tags: scene, construct, setup, render, ThreeDScene, MovingCameraScene
  ---

  # Scenes in Manim

  A Scene is the canvas where all animations take place. Every Manim animation
  is defined within a Scene class.

  ## Basic Scene Structure

  All animation code resides within the `construct()` method of a Scene
  subclass.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/adithya-s-k/manim_skill/main/skills/manimce-best-practices/rules/scenes.md
license: ""
upstream_ref: https://skills.sh/adithya-s-k/manim_skill/manimce-best-practices
retrieved_at: 2026-02-06T04:49:51.984Z
content_sha256: 7dc32c7c8bfd50d9266351f90cbfc59b2b71f610a37ea6a836af9946dc64b3ba
---
|/data/skills-sh-adithya-s-k-manim-skill-manimce-best-practices|

---
stable_id: skills/skills-sh-adithya-s-k-manim-skill-manimgl-best-practices
type: skills
title: skills-sh-adithya-s-k-manim-skill-manimgl-best-practices
summary: |-
  # ManimGL Scenes
  ## Scene Types
  ManimGL provides several scene types:
  ### InteractiveScene (Recommended)
  The default for most development. Supports interactive mode with `-se` flag.
  ```python
  from manimlib import *
  class MyScene(InteractiveScene):
      def construct(self):
          circle = Circle()
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/adithya-s-k/manim_skill/main/skills/manimgl-best-practices/rules/scenes.md
license: ""
upstream_ref: https://skills.sh/adithya-s-k/manim_skill/manimgl-best-practices
retrieved_at: 2026-02-06T04:49:52.756Z
content_sha256: af4f98dc732fb9be522b2d53e7727c439258fb217cbaaa3c1360537f5cebc7ed
---
|/data/skills-sh-adithya-s-k-manim-skill-manimgl-best-practices|

---
stable_id: skills/skills-sh-analogjs-angular-skills-angular-component
type: skills
title: skills-sh-analogjs-angular-skills-angular-component
summary: |-
  # Angular Component Patterns
  ## Table of Contents
  - [Model Inputs (Two-Way Binding)](#model-inputs-two-way-binding)
  - [View Queries](#view-queries)
  - [Content Queries](#content-queries)
  - [Dependency Injection in Components](#dependency-injection-in-components)
  - [Component Communication Patterns](#component-communication-patterns)
  - [Dynamic Components](#dynamic-components)
  ## Model Inputs (Two-Way Binding)
  For two-way binding with `[(value)]` syntax:
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/analogjs/angular-skills/main/skills/angular-component/references/component-patterns.md
license: ""
upstream_ref: https://skills.sh/analogjs/angular-skills/angular-component
retrieved_at: 2026-02-06T04:49:51.876Z
content_sha256: b283e168020ee75c443e9d53f50bfb1889f9cb932732337d67a1242af96ce112
---
|/data/skills-sh-analogjs-angular-skills-angular-component|

---
stable_id: skills/skills-sh-analogjs-angular-skills-angular-di
type: skills
title: skills-sh-analogjs-angular-skills-angular-di
summary: |-
  # Angular Dependency Injection Patterns
  ## Table of Contents
  - [Service Patterns](#service-patterns)
  - [Abstract Classes as Tokens](#abstract-classes-as-tokens)
  - [Hierarchical Injection](#hierarchical-injection)
  - [Dynamic Providers](#dynamic-providers)
  - [Testing with DI](#testing-with-di)
  - [DestroyRef and Cleanup](#destroyref-and-cleanup)
  ## Service Patterns
  ### Facade Service
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/analogjs/angular-skills/main/skills/angular-di/references/di-patterns.md
license: ""
upstream_ref: https://skills.sh/analogjs/angular-skills/angular-di
retrieved_at: 2026-02-06T04:49:52.319Z
content_sha256: 82a96864d1bc95d2cadac94ad888b147edb5d66d24c76510fbd215983fdcf903
---
|/data/skills-sh-analogjs-angular-skills-angular-di|

---
stable_id: skills/skills-sh-analogjs-angular-skills-angular-directives
type: skills
title: skills-sh-analogjs-angular-skills-angular-directives
summary: |-
  # Angular Directive Patterns
  ## Table of Contents
  - [DOM Manipulation](#dom-manipulation)
  - [Form Directives](#form-directives)
  - [Intersection Observer](#intersection-observer)
  - [Resize Observer](#resize-observer)
  - [Drag and Drop](#drag-and-drop)
  - [Permission Directive](#permission-directive)
  ## DOM Manipulation
  ### Auto-Focus Directive
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/analogjs/angular-skills/main/skills/angular-directives/references/directive-patterns.md
license: ""
upstream_ref: https://skills.sh/analogjs/angular-skills/angular-directives
retrieved_at: 2026-02-06T04:49:52.375Z
content_sha256: 399465cefcfea352c0a1ad709df7959298b3c2ec160cd6453cf850aaccce9f3a
---
|/data/skills-sh-analogjs-angular-skills-angular-directives|

---
stable_id: skills/skills-sh-analogjs-angular-skills-angular-forms
type: skills
title: skills-sh-analogjs-angular-skills-angular-forms
summary: >-
  # Angular Form Patterns

  ## Table of Contents

  - [Reactive Forms (Production-Stable)](#reactive-forms-production-stable)

  - [Typed Reactive Forms](#typed-reactive-forms)

  - [FormBuilder Patterns](#formbuilder-patterns)

  - [Dynamic Forms with FormArray](#dynamic-forms-with-formarray)

  - [Custom Validators](#custom-validators)

  - [Form State Management](#form-state-management)

  ## Reactive Forms (Production-Stable)

  For production applications requiring stability guarantees, use Reactive
  Forms:
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/analogjs/angular-skills/main/skills/angular-forms/references/form-patterns.md
license: ""
upstream_ref: https://skills.sh/analogjs/angular-skills/angular-forms
retrieved_at: 2026-02-06T04:49:52.034Z
content_sha256: 1e9b432d3dce9edf19aaa4e0275dd7538c0f21b2fe006f2b280c00072b066915
---
|/data/skills-sh-analogjs-angular-skills-angular-forms|

---
stable_id: skills/skills-sh-analogjs-angular-skills-angular-http
type: skills
title: skills-sh-analogjs-angular-skills-angular-http
summary: |-
  # Angular HTTP Patterns
  ## Table of Contents
  - [Service Layer Pattern](#service-layer-pattern)
  - [Caching Strategies](#caching-strategies)
  - [Pagination](#pagination)
  - [File Upload](#file-upload)
  - [Request Cancellation](#request-cancellation)
  - [Testing HTTP](#testing-http)
  ## Service Layer Pattern
  Encapsulate HTTP logic in services:
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/analogjs/angular-skills/main/skills/angular-http/references/http-patterns.md
license: ""
upstream_ref: https://skills.sh/analogjs/angular-skills/angular-http
retrieved_at: 2026-02-06T04:49:52.173Z
content_sha256: fbf54fc7b87b23e24794781e98640748306a67d28e0cc4e62a6816af2cb780ec
---
|/data/skills-sh-analogjs-angular-skills-angular-http|

---
stable_id: skills/skills-sh-analogjs-angular-skills-angular-routing
type: skills
title: skills-sh-analogjs-angular-skills-angular-routing
summary: |-
  # Angular Routing Patterns
  ## Table of Contents
  - [Route Configuration Options](#route-configuration-options)
  - [Authentication Flow](#authentication-flow)
  - [Breadcrumbs](#breadcrumbs)
  - [Tab Navigation](#tab-navigation)
  - [Modal Routes](#modal-routes)
  - [Preloading Strategies](#preloading-strategies)
  ## Route Configuration Options
  ### Full Route Options
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/analogjs/angular-skills/main/skills/angular-routing/references/routing-patterns.md
license: ""
upstream_ref: https://skills.sh/analogjs/angular-skills/angular-routing
retrieved_at: 2026-02-06T04:49:52.072Z
content_sha256: 8005369d8fe2f045580ae46dc6b067d9fb54fb3cdd3148a583269e0557c9e91c
---
|/data/skills-sh-analogjs-angular-skills-angular-routing|

---
stable_id: skills/skills-sh-analogjs-angular-skills-angular-signals
type: skills
title: skills-sh-analogjs-angular-skills-angular-signals
summary: |-
  # Angular Signal Patterns
  ## Table of Contents
  - [Resource API](#resource-api)
  - [Signal Store Pattern](#signal-store-pattern)
  - [Form State with Signals](#form-state-with-signals)
  - [Async Operations](#async-operations)
  - [Testing Signals](#testing-signals)
  ## Resource API
  The `resource()` API handles async data fetching with signals:
  ```typescript
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/analogjs/angular-skills/main/skills/angular-signals/references/signal-patterns.md
license: ""
upstream_ref: https://skills.sh/analogjs/angular-skills/angular-signals
retrieved_at: 2026-02-06T04:49:51.760Z
content_sha256: c1ec67a9697f3c8f405a3fef91d774e79bd064f974d6fdad9c283f326349954a
---
|/data/skills-sh-analogjs-angular-skills-angular-signals|

---
stable_id: skills/skills-sh-analogjs-angular-skills-angular-ssr
type: skills
title: skills-sh-analogjs-angular-skills-angular-ssr
summary: |-
  # Angular SSR Patterns
  ## Table of Contents
  - [Hydration Debugging](#hydration-debugging)
  - [SEO Optimization](#seo-optimization)
  - [Authentication with SSR](#authentication-with-ssr)
  - [Caching Strategies](#caching-strategies)
  - [Error Handling](#error-handling)
  - [Performance Optimization](#performance-optimization)
  ## Hydration Debugging
  ### Common Hydration Mismatches
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/analogjs/angular-skills/main/skills/angular-ssr/references/ssr-patterns.md
license: ""
upstream_ref: https://skills.sh/analogjs/angular-skills/angular-ssr
retrieved_at: 2026-02-06T04:49:53.422Z
content_sha256: 23aedff793dbe7c92dfd4f8bec9e48657d5f0399dae3232fc9b5a3b88a8284c5
---
|/data/skills-sh-analogjs-angular-skills-angular-ssr|

---
stable_id: skills/skills-sh-analogjs-angular-skills-angular-testing
type: skills
title: skills-sh-analogjs-angular-skills-angular-testing
summary: |-
  # Angular Testing Patterns
  ## Table of Contents
  - [Vitest Advanced Patterns](#vitest-advanced-patterns)
  - [Component Harnesses](#component-harnesses)
  - [Testing Router](#testing-router)
  - [Testing Forms](#testing-forms)
  - [Testing Directives](#testing-directives)
  - [Testing Pipes](#testing-pipes)
  - [E2E Testing Setup](#e2e-testing-setup)
  ## Vitest Advanced Patterns
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/analogjs/angular-skills/main/skills/angular-testing/references/testing-patterns.md
license: ""
upstream_ref: https://skills.sh/analogjs/angular-skills/angular-testing
retrieved_at: 2026-02-06T04:49:52.697Z
content_sha256: a83bed4c16f45adf69870de283e66f2971205aec31510c21113eb3cc6628c4ec
---
|/data/skills-sh-analogjs-angular-skills-angular-testing|

---
stable_id: skills/skills-sh-analogjs-angular-skills-angular-tooling
type: skills
title: skills-sh-analogjs-angular-skills-angular-tooling
summary: |-
  # Angular Tooling Patterns
  ## Table of Contents
  - [Custom Schematics](#custom-schematics)
  - [Build Optimization](#build-optimization)
  - [Multi-Project Workspace](#multi-project-workspace)
  - [CI/CD Configuration](#cicd-configuration)
  - [Path Aliases](#path-aliases)
  - [Proxy Configuration](#proxy-configuration)
  ## Custom Schematics
  ### Generate Schematic Collection
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/analogjs/angular-skills/main/skills/angular-tooling/references/tooling-patterns.md
license: ""
upstream_ref: https://skills.sh/analogjs/angular-skills/angular-tooling
retrieved_at: 2026-02-06T04:49:52.584Z
content_sha256: 1951fa339febba1848f178c8107f9b92392b58f0921e132b2c2509d2aecd2dfe
---
|/data/skills-sh-analogjs-angular-skills-angular-tooling|

---
stable_id: skills/skills-sh-antfu-skills-antfu
type: skills
title: skills-sh-antfu-skills-antfu
summary: >-
  ---

  name: antfu-eslint-config

  description: Configuring @antfu/eslint-config for framework support,
  formatters, and rule overrides. Use when adding React/Vue/Svelte/Astro
  support, customizing rules, or setting up VS Code integration.

  ---

  # @antfu/eslint-config

  Handles both linting and formatting (no Prettier needed). Auto-detects
  TypeScript and Vue.

  **Style**: Single quotes, no semicolons, sorted imports, dangling commas.

  ## Configuration Options

  ```js

  import antfu from '@antfu/eslint-config'
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/antfu/skills/main/skills/antfu/references/antfu-eslint-config.md
license: ""
upstream_ref: https://skills.sh/antfu/skills/antfu
retrieved_at: 2026-02-06T04:49:50.680Z
content_sha256: d5a17c833786c37013a997108a7ecd78a49264098f5f3a5733c74aa1899585ed
---
|/data/skills-sh-antfu-skills-antfu|

---
stable_id: skills/skills-sh-antfu-skills-nuxt
type: skills
title: skills-sh-antfu-skills-nuxt
summary: >-
  ---

  name: directory-structure

  description: Nuxt project folder structure, conventions, and file organization

  ---

  # Directory Structure

  Nuxt uses conventions-based directory structure. Understanding it is key to
  effective development.

  ## Standard Project Structure

  ```

  my-nuxt-app/

  ├── app/                    # Application source (can be at root level)
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/antfu/skills/main/skills/nuxt/references/core-directory-structure.md
license: ""
upstream_ref: https://skills.sh/antfu/skills/nuxt
retrieved_at: 2026-02-06T04:49:50.747Z
content_sha256: 8483343d5291ce55111ba074c671549c323f63c85a806a4bf9002d576ab53a2b
---
|/data/skills-sh-antfu-skills-nuxt|

---
stable_id: skills/skills-sh-antfu-skills-pinia
type: skills
title: skills-sh-antfu-skills-pinia
summary: >-
  ---

  name: stores

  description: Defining stores, state, getters, and actions in Pinia

  ---

  # Pinia Stores

  Stores are defined using `defineStore()` with a unique name. Each store has
  three core concepts: **state**, **getters**, and **actions**.

  ## Defining Stores

  ### Option Stores

  Similar to Vue's Options API:

  ```ts
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/antfu/skills/main/skills/pinia/references/core-stores.md
license: ""
upstream_ref: https://skills.sh/antfu/skills/pinia
retrieved_at: 2026-02-06T04:49:50.621Z
content_sha256: 41627453eb019d1755dac787924bde52be162a3bdfc555119f88a8e59dda8f21
---
|/data/skills-sh-antfu-skills-pinia|

---
stable_id: skills/skills-sh-antfu-skills-pnpm
type: skills
title: skills-sh-antfu-skills-pnpm
summary: >-
  ---

  name: pnpm-cli-commands

  description: Essential pnpm commands for package management, running scripts,
  and workspace operations

  ---

  # pnpm CLI Commands

  pnpm provides a comprehensive CLI for package management with commands similar
  to npm/yarn but with unique features.

  ## Installation Commands

  ### Install all dependencies

  ```bash

  pnpm install
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/antfu/skills/main/skills/pnpm/references/core-cli.md
license: ""
upstream_ref: https://skills.sh/antfu/skills/pnpm
retrieved_at: 2026-02-06T04:49:50.530Z
content_sha256: 44ef8040b418b287577dec5b6b60b30044adda417020a27b571ef10bbf21a543
---
|/data/skills-sh-antfu-skills-pnpm|

---
stable_id: skills/skills-sh-antfu-skills-slidev
type: skills
title: skills-sh-antfu-skills-slidev
summary: |-
  ---
  name: syntax
  description: Core Markdown syntax for Slidev presentations
  ---
  # Slidev Markdown Syntax
  Core Markdown syntax for Slidev presentations.
  ## Slide Separator
  Use `---` with blank lines before and after:
  ```md
  # Slide 1
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/antfu/skills/main/skills/slidev/references/core-syntax.md
license: ""
upstream_ref: https://skills.sh/antfu/skills/slidev
retrieved_at: 2026-02-06T04:49:51.041Z
content_sha256: 3b56a8fbd5b4eb7b7a1965e5fe2502ec969a094ad8b22bc834365aa25e3a7aaa
---
|/data/skills-sh-antfu-skills-slidev|

---
stable_id: skills/skills-sh-antfu-skills-tsdown
type: skills
title: skills-sh-antfu-skills-tsdown
summary: |-
  # Getting Started
  Quick guide to installing and using tsdown for the first time.
  ## Installation
  Install tsdown as a development dependency:
  ```bash
  pnpm add -D tsdown
  # Optionally install TypeScript if not using isolatedDeclarations
  pnpm add -D typescript
  ```
  **Requirements:**
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/antfu/skills/main/skills/tsdown/references/guide-getting-started.md
license: ""
upstream_ref: https://skills.sh/antfu/skills/tsdown
retrieved_at: 2026-02-06T04:49:50.952Z
content_sha256: 3d9f7e531b08b560cf44bf2d0ed6568394a3b9cde2641768918ea8179ad98091
---
|/data/skills-sh-antfu-skills-tsdown|

---
stable_id: skills/skills-sh-antfu-skills-unocss
type: skills
title: skills-sh-antfu-skills-unocss
summary: >-
  ---

  name: unocss-configuration

  description: Config file setup and all configuration options for UnoCSS

  ---

  # UnoCSS Configuration

  UnoCSS is configured via a dedicated config file in your project root.

  ## Config File

  **Recommended:** Use a dedicated `uno.config.ts` file for best IDE support and
  HMR.

  ```ts

  // uno.config.ts
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/antfu/skills/main/skills/unocss/references/core-config.md
license: ""
upstream_ref: https://skills.sh/antfu/skills/unocss
retrieved_at: 2026-02-06T04:49:50.879Z
content_sha256: 35e235ec861299b63b95ba9e16fcab170c231204071dd902a24fa27c81ec431e
---
|/data/skills-sh-antfu-skills-unocss|

---
stable_id: skills/skills-sh-antfu-skills-vite
type: skills
title: skills-sh-antfu-skills-vite
summary: |-
  ---
  name: vite-config
  description: Vite configuration patterns using vite.config.ts
  ---
  # Vite Configuration
  ## Basic Setup
  ```ts
  // vite.config.ts
  import { defineConfig } from 'vite'
  export default defineConfig({
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/antfu/skills/main/skills/vite/references/core-config.md
license: ""
upstream_ref: https://skills.sh/antfu/skills/vite
retrieved_at: 2026-02-06T04:49:50.390Z
content_sha256: d207a85730c32eff47e343ea69644a6c7898af251098a60255efe8f1c922fb4b
---
|/data/skills-sh-antfu-skills-vite|

---
stable_id: skills/skills-sh-antfu-skills-vitepress
type: skills
title: skills-sh-antfu-skills-vitepress
summary: >-
  ---

  name: vitepress-configuration

  description: Config file setup, defineConfig helper, site metadata, and build
  options

  ---

  # Configuration

  VitePress configuration is defined in `.vitepress/config.[js|ts|mjs|mts]`. Use
  `defineConfig` for TypeScript intellisense.

  ## Basic Config

  ```ts

  // .vitepress/config.ts

  import { defineConfig } from 'vitepress'
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/antfu/skills/main/skills/vitepress/references/core-config.md
license: ""
upstream_ref: https://skills.sh/antfu/skills/vitepress
retrieved_at: 2026-02-06T04:49:51.002Z
content_sha256: 85c6a7ee227c47143fdc8e59b5b2e29bfbbf8499c893b7ce6589c2304f469e35
---
|/data/skills-sh-antfu-skills-vitepress|

---
stable_id: skills/skills-sh-antfu-skills-vitest
type: skills
title: skills-sh-antfu-skills-vitest
summary: >-
  ---

  name: vitest-configuration

  description: Configure Vitest with vite.config.ts or vitest.config.ts

  ---

  # Configuration

  Vitest reads configuration from `vitest.config.ts` or `vite.config.ts`. It
  shares the same config format as Vite.

  ## Basic Setup

  ```ts

  // vitest.config.ts

  import { defineConfig } from 'vitest/config'
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/antfu/skills/main/skills/vitest/references/core-config.md
license: ""
upstream_ref: https://skills.sh/antfu/skills/vitest
retrieved_at: 2026-02-06T04:49:50.498Z
content_sha256: 5fd3cf0983f203f14c4f4732dde0632c1d537241daa5cffea24f7e55712a6fb3
---
|/data/skills-sh-antfu-skills-vitest|

---
stable_id: skills/skills-sh-antfu-skills-vue
type: skills
title: skills-sh-antfu-skills-vue
summary: >-
  ---

  name: script-setup-macros

  description: Vue 3 script setup syntax and compiler macros for defining props,
  emits, models, and more

  ---

  # Script Setup & Macros

  `<script setup>` is the recommended syntax for Vue SFCs with Composition API.
  It provides better runtime performance and IDE type inference.

  ## Basic Syntax

  ```vue

  <script setup lang="ts">

  // Top-level bindings are exposed to template
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/antfu/skills/main/skills/vue/references/script-setup-macros.md
license: ""
upstream_ref: https://skills.sh/antfu/skills/vue
retrieved_at: 2026-02-06T04:49:50.337Z
content_sha256: ad47db85f8fbda6c055cedcc1d4175cd79d414e9be3ebf1e631d0e493eb4480a
---
|/data/skills-sh-antfu-skills-vue|

---
stable_id: skills/skills-sh-antfu-skills-vueuse-functions
type: skills
title: skills-sh-antfu-skills-vueuse-functions
summary: |-
  ---
  category: State
  related: createSharedComposable
  ---
  # createGlobalState
  Keep states in the global scope to be reusable across Vue instances.
  ## Usage
  ### Without Persistence (Store in Memory)
  ```ts
  // store.ts
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/antfu/skills/main/skills/vueuse-functions/references/createGlobalState.md
license: ""
upstream_ref: https://skills.sh/antfu/skills/vueuse-functions
retrieved_at: 2026-02-06T04:49:50.582Z
content_sha256: 43a260724cb8610553d487a4cd59591efbc61a9876c07dbea04b07381ca7479f
---
|/data/skills-sh-antfu-skills-vueuse-functions|

---
stable_id: skills/skills-sh-anthropics-claude-plugins-official-claude-automation-recommender
type: skills
title: skills-sh-anthropics-claude-plugins-official-claude-automation-recommender
summary: >-
  # MCP Server Recommendations

  MCP (Model Context Protocol) servers extend Claude's capabilities by
  connecting to external tools and services.

  **Note**: These are common MCP servers. Use web search to find MCP servers
  specific to the codebase's services and integrations.

  ## Setup & Team Sharing

  **Connection methods:**

  1. **Project config** (`.mcp.json`) - Available only in that directory

  2. **Global config** (`~/.claude.json`) - Available across all projects

  3. **Checked-in `.mcp.json`** - Available to entire team (recommended!)

  **Tip**: Check `.mcp.json` into git so your whole team gets the same MCP
  servers.

  **Debugging**: Use `claude --mcp-debug` to identify configuration issues.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-plugins-official/main/plugins/claude-code-setup/skills/claude-automation-recommender/references/mcp-servers.md
license: ""
upstream_ref: https://skills.sh/anthropics/claude-plugins-official/claude-automation-recommender
retrieved_at: 2026-02-06T04:49:54.047Z
content_sha256: 64a12ab24618e4987ba947638fb598683635e80db92f3253e87d5b06c878174d
---
|/data/skills-sh-anthropics-claude-plugins-official-claude-automation-recommender|

---
stable_id: skills/skills-sh-anthropics-claude-plugins-official-claude-md-improver
type: skills
title: skills-sh-anthropics-claude-plugins-official-claude-md-improver
summary: |-
  # CLAUDE.md Quality Criteria
  ## Scoring Rubric
  ### 1. Commands/Workflows (20 points)
  **20 points**: All essential commands documented with context
  - Build, test, lint, deploy commands present
  - Development workflow clear
  - Common operations documented
  **15 points**: Most commands present, some missing context
  **10 points**: Basic commands only, no workflow
  **5 points**: Few commands, many missing
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-plugins-official/main/plugins/claude-md-management/skills/claude-md-improver/references/quality-criteria.md
license: ""
upstream_ref: https://skills.sh/anthropics/claude-plugins-official/claude-md-improver
retrieved_at: 2026-02-06T04:49:52.657Z
content_sha256: 383def16b05dca948297dd1acb33f007cb1b1b2c368454d424c5634348a8bab1
---
|/data/skills-sh-anthropics-claude-plugins-official-claude-md-improver|

---
stable_id: skills/skills-sh-anthropics-skills-mcp-builder
type: skills
title: skills-sh-anthropics-skills-mcp-builder
summary: |-
  # MCP Server Best Practices
  ## Quick Reference
  ### Server Naming
  - **Python**: `{service}_mcp` (e.g., `slack_mcp`)
  - **Node/TypeScript**: `{service}-mcp-server` (e.g., `slack-mcp-server`)
  ### Tool Naming
  - Use snake_case with service prefix
  - Format: `{service}_{action}_{resource}`
  - Example: `slack_send_message`, `github_create_issue`
  ### Response Formats
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/skills/main/skills/mcp-builder/reference/mcp_best_practices.md
license: ""
upstream_ref: https://skills.sh/anthropics/skills/mcp-builder
retrieved_at: 2026-02-06T04:49:48.987Z
content_sha256: 80fb4369a349447cf18ecdd7494fe7938b6065377e9f08c077cec411093a3007
---
|/data/skills-sh-anthropics-skills-mcp-builder|

---
stable_id: skills/skills-sh-anthropics-skills-pptx
type: skills
title: skills-sh-anthropics-skills-pptx
summary: >-
  # Editing Presentations

  ## Template-Based Workflow

  When using an existing presentation as a template:

  1. **Analyze existing slides**:
     ```bash
     python scripts/thumbnail.py template.pptx
     python -m markitdown template.pptx
     ```
     Review `thumbnails.jpg` to see layouts, and markitdown output to see placeholder text.
  2. **Plan slide mapping**: For each content section, choose a template slide.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/skills/main/skills/pptx/editing.md
license: ""
upstream_ref: https://skills.sh/anthropics/skills/pptx
retrieved_at: 2026-02-06T04:49:48.879Z
content_sha256: 6cb47c3ab17e60b7de37e83131c409ef5a90a01bfb54e999905a9c9f7dd88e68
---
|/data/skills-sh-anthropics-skills-pptx|

---
stable_id: skills/skills-sh-apify-agent-skills-apify-actor-development
type: skills
title: skills-sh-apify-agent-skills-apify-actor-development
summary: >-
  # Actor Configuration (actor.json)

  The `.actor/actor.json` file contains the Actor's configuration including
  metadata, schema references, and platform settings.

  ## Structure

  ```json

  {
      "actorSpecification": 1,
      "name": "project-name",
      "title": "Project Title",
      "description": "Actor description",
      "version": "0.0",
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/apify/agent-skills/main/skills/apify-actor-development/references/actor-json.md
license: ""
upstream_ref: https://skills.sh/apify/agent-skills/apify-actor-development
retrieved_at: 2026-02-06T04:49:55.474Z
content_sha256: 668c913ae253f4e01947677d8a3d220edbdb45ce1169bee5f7e16ea751a95c79
---
|/data/skills-sh-apify-agent-skills-apify-actor-development|

---
stable_id: skills/skills-sh-apify-agent-skills-apify-actorization
type: skills
title: skills-sh-apify-agent-skills-apify-actorization
summary: |-
  # JavaScript/TypeScript Actorization
  ## Install the Apify SDK
  ```bash
  npm install apify
  ```
  ## Wrap Main Code with Actor Lifecycle
  ```javascript
  import { Actor } from 'apify';
  // Initialize connection to Apify platform
  await Actor.init();
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/apify/agent-skills/main/skills/apify-actorization/references/js-ts-actorization.md
license: ""
upstream_ref: https://skills.sh/apify/agent-skills/apify-actorization
retrieved_at: 2026-02-06T04:49:56.639Z
content_sha256: 60984cafaba3c7789dc210fe1fc77c37497b1e6bb0be8af2183e79cba85a0832
---
|/data/skills-sh-apify-agent-skills-apify-actorization|

---
stable_id: skills/skills-sh-apollographql-skills-apollo-client
type: skills
title: skills-sh-apollographql-skills-apollo-client
summary: >-
  # Apollo Client Integration for Client-Side Apps

  This guide covers setting up Apollo Client in client-side React applications
  without server-side rendering (SSR). This includes applications using Vite,
  Parcel, Create React App, or other bundlers that don't implement SSR.

  For applications with SSR, use one of the framework-specific integration
  guides instead:

  - [Next.js App Router](integration-nextjs.md)

  - [React Router Framework Mode](integration-react-router.md)

  - [TanStack Start](integration-tanstack-start.md)

  ## Installation

  ```bash

  npm install @apollo/client graphql rxjs

  ```
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/apollographql/skills/main/skills/apollo-client/references/integration-client.md
license: ""
upstream_ref: https://skills.sh/apollographql/skills/apollo-client
retrieved_at: 2026-02-06T04:49:53.662Z
content_sha256: f339ad6a06907be5f66cf034cda9bd78de4e4d79315c9a93faf366974f161cc9
---
|/data/skills-sh-apollographql-skills-apollo-client|

---
stable_id: skills/skills-sh-apollographql-skills-apollo-connectors
type: skills
title: skills-sh-apollographql-skills-apollo-connectors
summary: >-
  # Selection Mapping Grammar

  The mapping language uses Extended Backus-Naur Form (EBNF) to describe the
  complete JSONSelection grammar.

  ## Table of Contents

  - [EBNF Grammar](#ebnf-grammar)

  - [Valid Grammar Examples](#valid-grammar-examples)

  - [Common Grammar Mistakes](#common-grammar-mistakes)

  ## EBNF Grammar

  ```ebnf

  JSONSelection        ::= NamedSelection*

  SubSelection         ::= "{" NamedSelection* "}"
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/apollographql/skills/main/skills/apollo-connectors/references/grammar.md
license: ""
upstream_ref: https://skills.sh/apollographql/skills/apollo-connectors
retrieved_at: 2026-02-06T04:49:57.352Z
content_sha256: aea9ec3e60c9d96a95d3b0aafe0f08aa2900e5b2068db47fc0fc8dcd683eef8e
---
|/data/skills-sh-apollographql-skills-apollo-connectors|

---
stable_id: skills/skills-sh-apollographql-skills-apollo-mcp-server
type: skills
title: skills-sh-apollographql-skills-apollo-mcp-server
summary: |-
  # Apollo MCP Server Tools Reference
  ## Table of Contents
  - [Introspection Tools](#introspection-tools)
    - [introspect](#introspect)
    - [search](#search)
    - [validate](#validate)
    - [execute](#execute)
  - [Minify Notation](#minify-notation)
  - [Custom Tools](#custom-tools)
  ---
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/apollographql/skills/main/skills/apollo-mcp-server/references/tools.md
license: ""
upstream_ref: https://skills.sh/apollographql/skills/apollo-mcp-server
retrieved_at: 2026-02-06T04:49:54.859Z
content_sha256: da0ac85b54c29fe6eca88da2730faea5fd823de08dfccb6236ac5cf85738ea35
---
|/data/skills-sh-apollographql-skills-apollo-mcp-server|

---
stable_id: skills/skills-sh-apollographql-skills-apollo-server
type: skills
title: skills-sh-apollographql-skills-apollo-server
summary: |-
  # Resolvers Reference
  ## Table of Contents
  - [Resolver Signature](#resolver-signature)
  - [Resolver Map Structure](#resolver-map-structure)
  - [Async Resolvers](#async-resolvers)
  - [Field Resolvers](#field-resolvers)
  - [Default Resolvers](#default-resolvers)
  - [N+1 Problem](#n1-problem)
  - [Best Practices](#best-practices)
  ## Resolver Signature
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/apollographql/skills/main/skills/apollo-server/references/resolvers.md
license: ""
upstream_ref: https://skills.sh/apollographql/skills/apollo-server
retrieved_at: 2026-02-06T04:49:56.892Z
content_sha256: 55a33184bb8e1d4fac044523888fa8267afe40f7557fbb508c77032e9ea32ea9
---
|/data/skills-sh-apollographql-skills-apollo-server|

---
stable_id: skills/skills-sh-apollographql-skills-graphql-operations
type: skills
title: skills-sh-apollographql-skills-graphql-operations
summary: |-
  # Query Patterns
  This reference covers patterns for writing effective GraphQL queries.
  ## Table of Contents
  - [Query Structure](#query-structure)
  - [Field Selection](#field-selection)
  - [Aliases](#aliases)
  - [Directives](#directives)
  - [Query Naming](#query-naming)
  - [Query Organization](#query-organization)
  - [Performance Optimization](#performance-optimization)
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/apollographql/skills/main/skills/graphql-operations/references/queries.md
license: ""
upstream_ref: https://skills.sh/apollographql/skills/graphql-operations
retrieved_at: 2026-02-06T04:49:56.253Z
content_sha256: 2c66262d754fb4c286961fdac0a115cd2e9105710be9c3d812b6b2ac135995ee
---
|/data/skills-sh-apollographql-skills-graphql-operations|

---
stable_id: skills/skills-sh-apollographql-skills-graphql-schema
type: skills
title: skills-sh-apollographql-skills-graphql-schema
summary: >-
  # Type Design Patterns

  This reference covers type design patterns for building well-structured
  GraphQL schemas.

  ## Table of Contents

  - [Schema-First Design](#schema-first-design)

  - [Object Types](#object-types)

  - [Nullability Strategy](#nullability-strategy)

  - [ID Design](#id-design)

  - [Interfaces](#interfaces)

  - [Unions](#unions)

  - [Input Types](#input-types)
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/apollographql/skills/main/skills/graphql-schema/references/types.md
license: ""
upstream_ref: https://skills.sh/apollographql/skills/graphql-schema
retrieved_at: 2026-02-06T04:49:56.025Z
content_sha256: 7dab0e654365865feeb43547cb758a74d69a395ec4e2c755c28a2f97cc7c1e5d
---
|/data/skills-sh-apollographql-skills-graphql-schema|

---
stable_id: skills/skills-sh-apollographql-skills-rover
type: skills
title: skills-sh-apollographql-skills-rover
summary: |-
  # Rover Subgraph Commands
  Commands for managing federated subgraph schemas in Apollo GraphOS.
  ## subgraph fetch
  Download a subgraph schema from GraphOS.
  ```bash
  # Basic fetch
  rover subgraph fetch my-graph@production --name products
  # Output to file
  rover subgraph fetch my-graph@production --name products > products.graphql
  # JSON output
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/apollographql/skills/main/skills/rover/references/subgraphs.md
license: ""
upstream_ref: https://skills.sh/apollographql/skills/rover
retrieved_at: 2026-02-06T04:49:57.471Z
content_sha256: f732157ff9b42fdd8dd71280d8ba9c03886cbace4031df5b06831f52835a5c5b
---
|/data/skills-sh-apollographql-skills-rover|

---
stable_id: skills/skills-sh-apollographql-skills-rust-best-practices
type: skills
title: skills-sh-apollographql-skills-rust-best-practices
summary: >-
  # Chapter 1 - Coding Styles and Idioms

  ## 1.1 Borrowing Over Cloning

  Rust's ownership system encourages **borrow** (`&T`) instead of **cloning**
  (`T.clone()`).

  > ❗ Performance recommendation

  ### ✅ When to `Clone`:

  * You need to change the object AND preserve the original object (immutable
  snapshots).

  * When you have `Arc` or `Rc` pointers.

  * When data is shared across threads, usually `Arc`.

  * Avoid massive refactoring of non performance critical code.

  * When caching results (dummy example below):
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/apollographql/skills/main/skills/rust-best-practices/references/chapter_01.md
license: ""
upstream_ref: https://skills.sh/apollographql/skills/rust-best-practices
retrieved_at: 2026-02-06T04:49:55.736Z
content_sha256: 936f84f2e4606e7ae35afdb99606005a3c08e803308721a1578276760a29fcfa
---
|/data/skills-sh-apollographql-skills-rust-best-practices|

---
stable_id: skills/skills-sh-assistant-ui-skills-assistant-ui
type: skills
title: skills-sh-assistant-ui-skills-assistant-ui
summary: >-
  # assistant-ui Architecture

  ## Layered System

  assistant-ui follows a 4-layer architecture where each layer depends only on
  layers below it.

  ### Layer 1: RuntimeCore (Internal)

  Internal implementations that manage state:

  - `LocalRuntimeCore` - In-browser state

  - `ExternalStoreRuntimeCore` - External state sync

  - `ThreadListRuntimeCore` - Thread management

  ```typescript

  // Internal - not directly used
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/assistant-ui/skills/main/assistant-ui/skills/assistant-ui/references/architecture.md
license: ""
upstream_ref: https://skills.sh/assistant-ui/skills/assistant-ui
retrieved_at: 2026-02-06T04:49:57.247Z
content_sha256: bfe05a0e377441892e99381bfbaaf8a80dc0de954b31668fb2528cce9755a9c3
---
|/data/skills-sh-assistant-ui-skills-assistant-ui|

---
stable_id: skills/skills-sh-axtonliu-axton-obsidian-visual-skills-excalidraw-diagram
type: skills
title: skills-sh-axtonliu-axton-obsidian-visual-skills-excalidraw-diagram
summary: |-
  # Excalidraw JSON Schema Reference
  ## Color Palette
  ### Primary Colors
  | Purpose | Color | Hex |
  |---------|-------|-----|
  | Main Title | Deep Blue | `#1e40af` |
  | Subtitle | Medium Blue | `#3b82f6` |
  | Body Text | Dark Gray | `#374151` |
  | Emphasis | Orange | `#f59e0b` |
  | Success | Green | `#10b981` |
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/axtonliu/axton-obsidian-visual-skills/main/excalidraw-diagram/references/excalidraw-schema.md
license: ""
upstream_ref: https://skills.sh/axtonliu/axton-obsidian-visual-skills/excalidraw-diagram
retrieved_at: 2026-02-06T04:49:54.641Z
content_sha256: e1ac098f16f723aaf0b1fc6e511c6981cfb7cfa57a646da8eaa623f047287d5b
---
|/data/skills-sh-axtonliu-axton-obsidian-visual-skills-excalidraw-diagram|

---
stable_id: skills/skills-sh-bahayonghang-drawio-skills-drawio
type: skills
title: skills-sh-bahayonghang-drawio-skills-drawio
summary: >-
  # Draw.io Design System

  A unified design system providing consistent visual language for AI-generated
  draw.io diagrams.

  ---

  ## Quick Start

  ```yaml

  meta:
    theme: tech-blue    # Select theme
    layout: horizontal  # Layout direction
  nodes:
    - id: api
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/bahayonghang/drawio-skills/main/skills/drawio/docs/design-system/README.md
license: ""
upstream_ref: https://skills.sh/bahayonghang/drawio-skills/drawio
retrieved_at: 2026-02-06T04:49:57.298Z
content_sha256: e6851c798f27a501305063f5737dc8372d35e8cfbe12faf41fbcab4d41b81f58
---
|/data/skills-sh-bahayonghang-drawio-skills-drawio|

---
stable_id: skills/skills-sh-base44-skills-base44-cli
type: skills
title: skills-sh-base44-skills-base44-cli
summary: |-
  # base44 login
  Authenticate with Base44 using device code flow.
  ## Syntax
  ```bash
  npx base44 login
  ```
  ## Authentication
  **Required**: No (this is the login command itself)
  ## How It Works
  The login command uses OAuth 2.0 device code flow for authentication:
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/base44/skills/main/skills/base44-cli/references/auth-login.md
license: ""
upstream_ref: https://skills.sh/base44/skills/base44-cli
retrieved_at: 2026-02-06T04:49:56.577Z
content_sha256: 834fed8eec8dc8bb5e8171fcdb9025de002fe25c219797dfdd422032f29da356
---
|/data/skills-sh-base44-skills-base44-cli|

---
stable_id: skills/skills-sh-base44-skills-base44-sdk
type: skills
title: skills-sh-base44-skills-base44-sdk
summary: >-
  # Base44 SDK Quick Reference

  Compact method signatures for all SDK modules. **Verify against this before
  writing code.**

  ---

  ## Auth (`base44.auth.*`)

  ```

  loginViaEmailPassword(email, password, turnstileToken?) →
  Promise<{access_token, user}>

  loginWithProvider('google' | 'microsoft' | 'facebook', fromUrl?) → void

  me() → Promise<User | null>

  updateMe(data) → Promise<User>

  isAuthenticated() → Promise<boolean>
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/base44/skills/main/skills/base44-sdk/references/QUICK_REFERENCE.md
license: ""
upstream_ref: https://skills.sh/base44/skills/base44-sdk
retrieved_at: 2026-02-06T04:49:56.737Z
content_sha256: f30b89ba7dc07ca6422cd27ac89fa805b654c148f9f046adcdf9562fb4753a2a
---
|/data/skills-sh-base44-skills-base44-sdk|

---
stable_id: skills/skills-sh-bobmatnyc-claude-mpm-skills-drizzle-orm
type: skills
title: skills-sh-bobmatnyc-claude-mpm-skills-drizzle-orm
summary: >-
  # Advanced Schemas

  Deep dive into complex schema patterns, custom types, and database-specific
  features in Drizzle ORM.

  ## Custom Column Types

  ### Enums

  ```typescript

  import { pgEnum, pgTable, serial } from 'drizzle-orm/pg-core';

  // PostgreSQL native enum

  export const roleEnum = pgEnum('role', ['admin', 'user', 'guest']);

  export const users = pgTable('users', {
    id: serial('id').primaryKey(),
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/bobmatnyc/claude-mpm-skills/main/toolchains/typescript/data/drizzle/references/advanced-schemas.md
license: ""
upstream_ref: https://skills.sh/bobmatnyc/claude-mpm-skills/drizzle-orm
retrieved_at: 2026-02-06T04:49:56.922Z
content_sha256: 420e86801c18d535ab531e6621c8a9df5247c11158b9a9f30dc44f11ea35108d
---
|/data/skills-sh-bobmatnyc-claude-mpm-skills-drizzle-orm|

---
stable_id: skills/skills-sh-callstackincubator-agent-skills-github
type: skills
title: skills-sh-callstackincubator-agent-skills-github
summary: >-
  ---

  title: Merge PR Chain

  tags: pull-request, stacked-pr, merge, squash, cherry-pick, github

  ---

  # Skill: Merge PR Chain

  Merge a chain of stacked GitHub PRs into main as individual squash commits.
  Use when user has multiple PRs where each targets the previous one's branch
  (e.g., PR #2 → PR #1's branch → main) and wants to squash merge them all to
  main while preserving separate commits per PR.

  ## Workflow

  ### 1. Identify the chain

  Fetch PR details to map the chain structure:

  ```
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/callstackincubator/agent-skills/main/skills/github/references/stacked-pr-workflow.md
license: ""
upstream_ref: https://skills.sh/callstackincubator/agent-skills/github
retrieved_at: 2026-02-06T04:49:52.860Z
content_sha256: 9957f4dbe0703ce704f0e695ede5384bc1a9865fdc4f7ca08e0979a0db444604
---
|/data/skills-sh-callstackincubator-agent-skills-github|

---
stable_id: skills/skills-sh-callstackincubator-agent-skills-react-native-best-practices
type: skills
title: skills-sh-callstackincubator-agent-skills-react-native-best-practices
summary: >-
  ---

  title: Higher-Order Lists

  impact: CRITICAL

  tags: lists, flatlist, flashlist, scrollview, virtualization

  ---

  # Skill: Higher-Order Lists

  Replace ScrollView with FlatList or FlashList for performant large list
  rendering.

  ## Quick Pattern

  **Incorrect:**

  ```jsx
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/callstackincubator/agent-skills/main/skills/react-native-best-practices/references/js-lists-flatlist-flashlist.md
license: ""
upstream_ref: https://skills.sh/callstackincubator/agent-skills/react-native-best-practices
retrieved_at: 2026-02-06T04:49:49.848Z
content_sha256: 9c5aa77f59d1d23072f5297a621c54092ad5ac38fe7114be7542c609c8f8f43f
---
|/data/skills-sh-callstackincubator-agent-skills-react-native-best-practices|

---
stable_id: skills/skills-sh-cazala-webgpu-skill-webgpu
type: skills
title: skills-sh-cazala-webgpu-skill-webgpu
summary: |-
  # WebGPU Quick Reference
  ## Device + context
  ```ts
  const adapter = await navigator.gpu?.requestAdapter();
  if (!adapter) throw new Error("WebGPU not supported");
  const device = await adapter.requestDevice();
  const context = canvas.getContext("webgpu");
  const format = navigator.gpu.getPreferredCanvasFormat();
  context.configure({ device, format, alphaMode: "premultiplied" });
  ```
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/cazala/webgpu-skill/main/REFERENCE.md
license: ""
upstream_ref: https://skills.sh/cazala/webgpu-skill/webgpu
retrieved_at: 2026-02-06T04:49:53.993Z
content_sha256: 44cd05656c416b86a9c9b023e9955feaf4eebb35e45cb99bb8a5715422cc3872
---
|/data/skills-sh-cazala-webgpu-skill-webgpu|

---
stable_id: skills/skills-sh-cclank-news-aggregator-skill-news-aggregator-skill
type: skills
title: skills-sh-cclank-news-aggregator-skill-news-aggregator-skill
summary: >-
  ---

  name: news-aggregator-skill

  description: "Comprehensive news aggregator that fetches, filters, and deeply
  analyzes real-time content from 8 major sources: Hacker News, GitHub Trending,
  Product Hunt, 36Kr, Tencent News, WallStreetCN, V2EX, and Weibo. Best for
  'daily scans', 'tech news briefings', 'finance updates', and 'deep
  interpretations' of hot topics."

  ---

  # News Aggregator Skill

  Fetch real-time hot news from multiple sources.

  ## Tools

  ### fetch_news.py

  **Usage:**

  ```bash
tags:
  - skills-sh
  - skills-sh-probed
source_url: https://raw.githubusercontent.com/cclank/news-aggregator-skill/main/SKILL.md
license: ""
upstream_ref: https://skills.sh/cclank/news-aggregator-skill/news-aggregator-skill
retrieved_at: 2026-02-06T04:51:16.862Z
content_sha256: ac23cf08f189f8a588aebbfb0e90b356cfb087274e5aa545212255ac7513860d
---
|/data/skills-sh-cclank-news-aggregator-skill-news-aggregator-skill|

---
stable_id: skills/skills-sh-cloudflare-skills-agents-sdk-6c89c221
type: skills
title: skills-sh-cloudflare-skills-agents-sdk-6c89c221
summary: >-
  # Workflows Integration

  Fetch `docs/workflows.md` from
  `https://github.com/cloudflare/agents/tree/main/docs` for complete
  documentation.

  ## Overview

  Agents handle real-time communication; Workflows handle durable execution.
  Together they enable:

  - Long-running background tasks with automatic retries

  - Human-in-the-loop approval flows

  - Multi-step pipelines that survive failures

  | Use Case | Recommendation |

  |----------|----------------|

  | Chat/messaging | Agent only |
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/cloudflare/skills/main/skills/agents-sdk/references/workflows.md
license: ""
upstream_ref: https://skills.sh/cloudflare/skills/agents-sdk
retrieved_at: 2026-02-06T04:51:19.706Z
content_sha256: 67c63391a42f208a9ccc2d9e9c2103a6aebb4c4cad44ad34b0ff9c8308e6d794
---
|/data/skills-sh-cloudflare-skills-agents-sdk-6c89c221|

---
stable_id: skills/skills-sh-cloudflare-skills-building-ai-agent-on-cloudflare
type: skills
title: skills-sh-cloudflare-skills-building-ai-agent-on-cloudflare
summary: |-
  # Agent Patterns
  Advanced patterns for building sophisticated agents.
  ## Tool Calling
  Agents can expose tools that AI models can call:
  ```typescript
  import { Agent, Connection } from "agents";
  import { z } from "zod";
  interface Tool {
    name: string;
    description: string;
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/cloudflare/skills/main/skills/building-ai-agent-on-cloudflare/references/agent-patterns.md
license: ""
upstream_ref: https://skills.sh/cloudflare/skills/building-ai-agent-on-cloudflare
retrieved_at: 2026-02-06T04:49:54.606Z
content_sha256: dc2ec307e4c8c975269fed04eff86822ecef2fca5365d732420c991fa1025f66
---
|/data/skills-sh-cloudflare-skills-building-ai-agent-on-cloudflare|

---
stable_id: skills/skills-sh-cloudflare-skills-building-mcp-server-on-cloudflare
type: skills
title: skills-sh-cloudflare-skills-building-mcp-server-on-cloudflare
summary: >-
  # Securing MCP Servers

  MCP servers require authentication to ensure only trusted users can access
  them. The MCP specification uses OAuth 2.1 for authentication between clients
  and servers.

  Cloudflare's `workers-oauth-provider` handles token management, client
  registration, and access token validation automatically.

  ## Basic Setup

  ```typescript

  import { OAuthProvider } from "@cloudflare/workers-oauth-provider";

  import { createMcpHandler } from "agents/mcp";

  const apiHandler = {
    async fetch(request: Request, env: unknown, ctx: ExecutionContext) {
      return createMcpHandler(server)(request, env, ctx);
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/cloudflare/skills/main/skills/building-mcp-server-on-cloudflare/references/oauth-setup.md
license: ""
upstream_ref: https://skills.sh/cloudflare/skills/building-mcp-server-on-cloudflare
retrieved_at: 2026-02-06T04:49:55.325Z
content_sha256: 9e57f929797d2827b71c87a6e9e4f5d1ce036b14a8c19fe52ae4eee6c1b493ab
---
|/data/skills-sh-cloudflare-skills-building-mcp-server-on-cloudflare|

---
stable_id: skills/skills-sh-coreyhaines31-marketingskills-ab-test-setup
type: skills
title: skills-sh-coreyhaines31-marketingskills-ab-test-setup
summary: >-
  # Sample Size Guide

  Reference for calculating sample sizes and test duration.

  ## Sample Size Fundamentals

  ### Required Inputs

  1. **Baseline conversion rate**: Your current rate

  2. **Minimum detectable effect (MDE)**: Smallest change worth detecting

  3. **Statistical significance level**: Usually 95% (α = 0.05)

  4. **Statistical power**: Usually 80% (β = 0.20)

  ### What These Mean

  **Baseline conversion rate**: If your page converts at 5%, that's your
  baseline.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/coreyhaines31/marketingskills/main/skills/ab-test-setup/references/sample-size-guide.md
license: ""
upstream_ref: https://skills.sh/coreyhaines31/marketingskills/ab-test-setup
retrieved_at: 2026-02-06T04:49:50.221Z
content_sha256: b46fb00f3d4147bc0b1dbe1be95db65c3c7e2cf092727afe864a2f7e5524f272
---
|/data/skills-sh-coreyhaines31-marketingskills-ab-test-setup|

---
stable_id: skills/skills-sh-coreyhaines31-marketingskills-analytics-tracking
type: skills
title: skills-sh-coreyhaines31-marketingskills-analytics-tracking
summary: >-
  # Event Library Reference

  Comprehensive list of events to track by business type and context.

  ## Marketing Site Events

  ### Navigation & Engagement

  | Event Name | Description | Properties |

  |------------|-------------|------------|

  | page_view | Page loaded (enhanced) | page_title, page_location,
  content_group |

  | scroll_depth | User scrolled to threshold | depth (25, 50, 75, 100) |

  | outbound_link_clicked | Click to external site | link_url, link_text |

  | internal_link_clicked | Click within site | link_url, link_text, location |
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/coreyhaines31/marketingskills/main/skills/analytics-tracking/references/event-library.md
license: ""
upstream_ref: https://skills.sh/coreyhaines31/marketingskills/analytics-tracking
retrieved_at: 2026-02-06T04:49:49.812Z
content_sha256: 94964072fa7c51f2fc261819721030ee4990292797bed7cb54c37776fc9d4e3f
---
|/data/skills-sh-coreyhaines31-marketingskills-analytics-tracking|

---
stable_id: skills/skills-sh-coreyhaines31-marketingskills-competitor-alternatives
type: skills
title: skills-sh-coreyhaines31-marketingskills-competitor-alternatives
summary: >-
  # Section Templates for Competitor Pages

  Ready-to-use templates for each section of competitor comparison pages.

  ## TL;DR Summary

  Start every page with a quick summary for scanners:

  ```markdown

  **TL;DR**: [Competitor] excels at [strength] but struggles with [weakness].

  [Your product] is built for [your focus], offering [key differentiator].

  Choose [Competitor] if [their ideal use case]. Choose [You] if [your ideal use
  case].

  ```

  ---
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/coreyhaines31/marketingskills/main/skills/competitor-alternatives/references/templates.md
license: ""
upstream_ref: https://skills.sh/coreyhaines31/marketingskills/competitor-alternatives
retrieved_at: 2026-02-06T04:49:49.968Z
content_sha256: e658031a3df2f83168ee9f57e18f9bbd58254511f12af1602ec1c23e09ad3c0c
---
|/data/skills-sh-coreyhaines31-marketingskills-competitor-alternatives|

---
stable_id: skills/skills-sh-coreyhaines31-marketingskills-copy-editing
type: skills
title: skills-sh-coreyhaines31-marketingskills-copy-editing
summary: >-
  # Plain English Alternatives

  Replace complex or pompous words with plain English alternatives.

  Source: Plain English Campaign A-Z of Alternative Words (2001), Australian
  Government Style Manual (2024), plainlanguage.gov

  ---

  ## A

  | Complex | Plain Alternative |

  |---------|-------------------|

  | (an) absence of | no, none |

  | abundance | enough, plenty, many |

  | accede to | allow, agree to |
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/coreyhaines31/marketingskills/main/skills/copy-editing/references/plain-english-alternatives.md
license: ""
upstream_ref: https://skills.sh/coreyhaines31/marketingskills/copy-editing
retrieved_at: 2026-02-06T04:49:49.614Z
content_sha256: 491c34b011de82617613a558ce609ff7ba8fd92554ac90b4c5b4db2ab0aef62e
---
|/data/skills-sh-coreyhaines31-marketingskills-copy-editing|

---
stable_id: skills/skills-sh-coreyhaines31-marketingskills-copywriting
type: skills
title: skills-sh-coreyhaines31-marketingskills-copywriting
summary: >-
  # Copy Frameworks Reference

  Headline formulas, page section types, and structural templates.

  ## Headline Formulas

  ### Outcome-Focused

  **{Achieve desirable outcome} without {pain point}**

  > Understand how users are really experiencing your site without drowning in
  numbers

  **{Achieve desirable outcome} by {how product makes it possible}**

  > Generate more leads by seeing which companies visit your site

  **Turn {input} into {outcome}**

  > Turn your hard-earned sales into repeat customers
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/coreyhaines31/marketingskills/main/skills/copywriting/references/copy-frameworks.md
license: ""
upstream_ref: https://skills.sh/coreyhaines31/marketingskills/copywriting
retrieved_at: 2026-02-06T04:49:48.849Z
content_sha256: a96c5290cd5ec24b82b9ac1dfaebbcb7111cb9e6495d5b6d1b1a5daa6332f739
---
|/data/skills-sh-coreyhaines31-marketingskills-copywriting|

---
stable_id: skills/skills-sh-coreyhaines31-marketingskills-email-sequence
type: skills
title: skills-sh-coreyhaines31-marketingskills-email-sequence
summary: |-
  # Email Sequence Templates
  Detailed templates for common email sequences.
  ## Welcome Sequence (Post-Signup)
  **Email 1: Welcome (Immediate)**
  - Subject: Welcome to [Product] — here's your first step
  - Deliver what was promised (lead magnet, access, etc.)
  - Single next action
  - Set expectations for future emails
  **Email 2: Quick Win (Day 1-2)**
  - Subject: Get your first [result] in 10 minutes
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/coreyhaines31/marketingskills/main/skills/email-sequence/references/sequence-templates.md
license: ""
upstream_ref: https://skills.sh/coreyhaines31/marketingskills/email-sequence
retrieved_at: 2026-02-06T04:49:50.060Z
content_sha256: 50e84112175a248f7b2bf1f24d25c633745c8e6bf6c10d45e733f8450d9bfd26
---
|/data/skills-sh-coreyhaines31-marketingskills-email-sequence|

---
stable_id: skills/skills-sh-coreyhaines31-marketingskills-free-tool-strategy
type: skills
title: skills-sh-coreyhaines31-marketingskills-free-tool-strategy
summary: |-
  # Free Tool Types Reference
  Detailed guide to each type of marketing tool you can build.
  ## Calculators
  **Best for**: Decisions involving numbers, comparisons, estimates
  **Examples**:
  - ROI calculator
  - Savings calculator
  - Cost comparison tool
  - Salary calculator
  - Tax estimator
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/coreyhaines31/marketingskills/main/skills/free-tool-strategy/references/tool-types.md
license: ""
upstream_ref: https://skills.sh/coreyhaines31/marketingskills/free-tool-strategy
retrieved_at: 2026-02-06T04:49:50.094Z
content_sha256: e839981d512a7d6093504768292ba8d3c67ce48152ff0aa1f4b28d79bc7ef189
---
|/data/skills-sh-coreyhaines31-marketingskills-free-tool-strategy|

---
stable_id: skills/skills-sh-coreyhaines31-marketingskills-marketing-ideas
type: skills
title: skills-sh-coreyhaines31-marketingskills-marketing-ideas
summary: >-
  # The 139 Marketing Ideas

  Complete list of proven marketing approaches organized by category.

  ## Content & SEO (1-10)

  1. **Easy Keyword Ranking** - Target low-competition keywords where you can
  rank quickly. Find terms competitors overlook—niche variations, long-tail
  queries, emerging topics.

  2. **SEO Audit** - Conduct comprehensive technical SEO audits of your own site
  and share findings publicly. Document fixes and improvements to build
  authority.

  3. **Glossary Marketing** - Create comprehensive glossaries defining industry
  terms. Each term becomes an SEO-optimized page targeting "what is X" searches.

  4. **Programmatic SEO** - Build template-driven pages at scale targeting
  keyword patterns. Location pages, comparison pages, integration pages—any
  pattern with search volume.

  5. **Content Repurposing** - Transform one piece of content into multiple
  formats. Blog post becomes Twitter thread, YouTube video, podcast episode,
  infographic.

  6. **Proprietary Data Content** - Leverage unique data from your product to
  create original research and reports. Data competitors can't replicate creates
  linkable assets.

  7. **Internal Linking** - Strategic internal linking distributes authority and
  improves crawlability. Build topical clusters connecting related content.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/coreyhaines31/marketingskills/main/skills/marketing-ideas/references/ideas-by-category.md
license: ""
upstream_ref: https://skills.sh/coreyhaines31/marketingskills/marketing-ideas
retrieved_at: 2026-02-06T04:49:49.382Z
content_sha256: 97a02c0bce46d337d6a7e50c483785858efe408e4f8be37d7d78846da525f345
---
|/data/skills-sh-coreyhaines31-marketingskills-marketing-ideas|

---
stable_id: skills/skills-sh-coreyhaines31-marketingskills-onboarding-cro
type: skills
title: skills-sh-coreyhaines31-marketingskills-onboarding-cro
summary: >-
  # Onboarding Experiment Ideas

  Comprehensive list of A/B tests and experiments for user onboarding and
  activation.

  ## Flow Simplification Experiments

  ### Reduce Friction

  | Test | Hypothesis |

  |------|------------|

  | Email verification timing | During vs. after onboarding |

  | Empty states vs. dummy data | Pre-populated examples |

  | Pre-filled templates | Accelerate setup with templates |

  | OAuth options | Faster account linking |
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/coreyhaines31/marketingskills/main/skills/onboarding-cro/references/experiments.md
license: ""
upstream_ref: https://skills.sh/coreyhaines31/marketingskills/onboarding-cro
retrieved_at: 2026-02-06T04:49:49.924Z
content_sha256: 63c24ced8a8bd8d2ca7c9d9eb426d034e2f9235ae1c34c89aa1cd3344b9a1379
---
|/data/skills-sh-coreyhaines31-marketingskills-onboarding-cro|

---
stable_id: skills/skills-sh-coreyhaines31-marketingskills-page-cro
type: skills
title: skills-sh-coreyhaines31-marketingskills-page-cro
summary: |-
  # Page CRO Experiment Ideas
  Comprehensive list of A/B tests and experiments organized by page type.
  ## Homepage Experiments
  ### Hero Section
  | Test | Hypothesis |
  |------|------------|
  | Headline variations | Specific vs. abstract messaging |
  | Subheadline clarity | Add/refine to support headline |
  | CTA above fold | Include or exclude prominent CTA |
  | Hero visual format | Screenshot vs. GIF vs. illustration vs. video |
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/coreyhaines31/marketingskills/main/skills/page-cro/references/experiments.md
license: ""
upstream_ref: https://skills.sh/coreyhaines31/marketingskills/page-cro
retrieved_at: 2026-02-06T04:49:49.668Z
content_sha256: 9530ca82b966f901178952bc652f71b58fd6bfdc3f21d5fed453b45df60bf929
---
|/data/skills-sh-coreyhaines31-marketingskills-page-cro|

---
stable_id: skills/skills-sh-coreyhaines31-marketingskills-paid-ads
type: skills
title: skills-sh-coreyhaines31-marketingskills-paid-ads
summary: |-
  # Ad Copy Templates Reference
  Detailed formulas and templates for writing high-converting ad copy.
  ## Primary Text Formulas
  ### Problem-Agitate-Solve (PAS)
  ```
  [Problem statement]
  [Agitate the pain]
  [Introduce solution]
  [CTA]
  ```
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/coreyhaines31/marketingskills/main/skills/paid-ads/references/ad-copy-templates.md
license: ""
upstream_ref: https://skills.sh/coreyhaines31/marketingskills/paid-ads
retrieved_at: 2026-02-06T04:49:50.007Z
content_sha256: cd83de02d8770e5bbb58769bac452f9ff7f82dd9eb13f8a922175bb9b21bc778
---
|/data/skills-sh-coreyhaines31-marketingskills-paid-ads|

---
stable_id: skills/skills-sh-coreyhaines31-marketingskills-paywall-upgrade-cro
type: skills
title: skills-sh-coreyhaines31-marketingskills-paywall-upgrade-cro
summary: |-
  # Paywall Experiment Ideas
  Comprehensive list of A/B tests and experiments for paywall optimization.
  ## Trigger & Timing Experiments
  ### When to Show
  - Test trigger timing: after aha moment vs. at feature attempt
  - Early trial reminder (7 days) vs. late reminder (1 day before)
  - Show after X actions completed vs. after X days
  - Test soft prompts at different engagement thresholds
  - Trigger based on usage patterns vs. time-based only
  ### Trigger Type
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/coreyhaines31/marketingskills/main/skills/paywall-upgrade-cro/references/experiments.md
license: ""
upstream_ref: https://skills.sh/coreyhaines31/marketingskills/paywall-upgrade-cro
retrieved_at: 2026-02-06T04:49:50.127Z
content_sha256: 17e6ff52c5482b07694bcdd2fc4cd28209a1b605b66520eefff474928933bdb7
---
|/data/skills-sh-coreyhaines31-marketingskills-paywall-upgrade-cro|

---
stable_id: skills/skills-sh-coreyhaines31-marketingskills-pricing-strategy
type: skills
title: skills-sh-coreyhaines31-marketingskills-pricing-strategy
summary: |-
  # Tier Structure and Packaging
  ## How Many Tiers?
  **2 tiers:** Simple, clear choice
  - Works for: Clear SMB vs. Enterprise split
  - Risk: May leave money on table
  **3 tiers:** Industry standard
  - Good tier = Entry point
  - Better tier = Recommended (anchor to best)
  - Best tier = High-value customers
  **4+ tiers:** More granularity
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/coreyhaines31/marketingskills/main/skills/pricing-strategy/references/tier-structure.md
license: ""
upstream_ref: https://skills.sh/coreyhaines31/marketingskills/pricing-strategy
retrieved_at: 2026-02-06T04:49:49.521Z
content_sha256: dec6eb26846fcb6fa67c1daca45438b1a7f5b2a526386e62c8bf5af3a5aea81c
---
|/data/skills-sh-coreyhaines31-marketingskills-pricing-strategy|

---
stable_id: skills/skills-sh-coreyhaines31-marketingskills-programmatic-seo
type: skills
title: skills-sh-coreyhaines31-marketingskills-programmatic-seo
summary: >-
  # The 12 Programmatic SEO Playbooks

  Beyond mixing and matching data point permutations, these are the proven
  playbooks for programmatic SEO.

  ## 1. Templates

  **Pattern**: "[Type] template" or "free [type] template"

  **Example searches**: "resume template", "invoice template", "pitch deck
  template"

  **What it is**: Downloadable or interactive templates users can use directly.

  **Why it works**:

  - High intent—people need it now

  - Shareable/linkable assets

  - Natural for product-led companies
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/coreyhaines31/marketingskills/main/skills/programmatic-seo/references/playbooks.md
license: ""
upstream_ref: https://skills.sh/coreyhaines31/marketingskills/programmatic-seo
retrieved_at: 2026-02-06T04:49:49.025Z
content_sha256: c258ebca8794542110ab3cc6e4d7f997878a01b17963132b7df8175bc4b9ec4a
---
|/data/skills-sh-coreyhaines31-marketingskills-programmatic-seo|

---
stable_id: skills/skills-sh-coreyhaines31-marketingskills-referral-program
type: skills
title: skills-sh-coreyhaines31-marketingskills-referral-program
summary: |-
  # Referral Program Examples
  Real-world examples of successful referral programs.
  ## Dropbox (Classic)
  **Program:** Give 500MB storage, get 500MB storage
  **Why it worked:**
  - Reward directly tied to product value
  - Low friction (just an email)
  - Both parties benefit equally
  - Gamified with progress tracking
  ---
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/coreyhaines31/marketingskills/main/skills/referral-program/references/program-examples.md
license: ""
upstream_ref: https://skills.sh/coreyhaines31/marketingskills/referral-program
retrieved_at: 2026-02-06T04:49:50.186Z
content_sha256: 60731dc46b911849c26ffdcc9835ad352d690806e4eec0d814a52e5cf21794bc
---
|/data/skills-sh-coreyhaines31-marketingskills-referral-program|

---
stable_id: skills/skills-sh-coreyhaines31-marketingskills-schema-markup
type: skills
title: skills-sh-coreyhaines31-marketingskills-schema-markup
summary: |-
  # Schema Markup Examples
  Complete JSON-LD examples for common schema types.
  ## Organization
  For company/brand homepage or about page.
  ```json
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Example Company",
    "url": "https://example.com",
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/coreyhaines31/marketingskills/main/skills/schema-markup/references/schema-examples.md
license: ""
upstream_ref: https://skills.sh/coreyhaines31/marketingskills/schema-markup
retrieved_at: 2026-02-06T04:49:49.885Z
content_sha256: b552944f54fde41fbf877d00913f2d53e150864ae6d8b9fbee3a17200298609c
---
|/data/skills-sh-coreyhaines31-marketingskills-schema-markup|

---
stable_id: skills/skills-sh-coreyhaines31-marketingskills-seo-audit
type: skills
title: skills-sh-coreyhaines31-marketingskills-seo-audit
summary: >-
  # AI Writing Detection

  Words, phrases, and punctuation patterns commonly associated with AI-generated
  text. Avoid these to ensure writing sounds natural and human.

  Sources: Grammarly (2025), Microsoft 365 Life Hacks (2025), GPTHuman (2025),
  Walter Writes (2025), Textero (2025), Plagiarism Today (2025), Rolling Stone
  (2025), MDPI Blog (2025)

  ---

  ## Em Dashes: The Primary AI Tell

  **The em dash (—) has become one of the most reliable markers of AI-generated
  content.**

  Em dashes are longer than hyphens (-) and are used for emphasis,
  interruptions, or parenthetical information. While they have legitimate uses
  in writing, AI models drastically overuse them.

  ### Why Em Dashes Signal AI Writing

  - AI models were trained on edited books, academic papers, and style guides
  where em dashes appear frequently

  - AI uses em dashes as a shortcut for sentence variety instead of commas,
  colons, or parentheses
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/coreyhaines31/marketingskills/main/skills/seo-audit/references/ai-writing-detection.md
license: ""
upstream_ref: https://skills.sh/coreyhaines31/marketingskills/seo-audit
retrieved_at: 2026-02-06T04:49:48.681Z
content_sha256: 586226f9b7ccdba3ad07a1d025442d294a8f0c43117b655c7231e97ed5720351
---
|/data/skills-sh-coreyhaines31-marketingskills-seo-audit|

---
stable_id: skills/skills-sh-coreyhaines31-marketingskills-social-content
type: skills
title: skills-sh-coreyhaines31-marketingskills-social-content
summary: |-
  # Platform-Specific Strategy Guide
  Detailed strategies for each major social platform.
  ## LinkedIn
  **Best for:** B2B, thought leadership, professional networking, recruiting
  **Audience:** Professionals, decision-makers, job seekers
  **Posting frequency:** 3-5x per week
  **Best times:** Tuesday-Thursday, 7-8am, 12pm, 5-6pm
  **What works:**
  - Personal stories with business lessons
  - Contrarian takes on industry topics
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/coreyhaines31/marketingskills/main/skills/social-content/references/platforms.md
license: ""
upstream_ref: https://skills.sh/coreyhaines31/marketingskills/social-content
retrieved_at: 2026-02-06T04:49:49.578Z
content_sha256: b2c765478102c90e3516de625286de8f9d5eddfe5705f5d6affdd11456c43efe
---
|/data/skills-sh-coreyhaines31-marketingskills-social-content|

---
stable_id: skills/skills-sh-czlonkowski-n8n-skills-n8n-code-javascript
type: skills
title: skills-sh-czlonkowski-n8n-skills-n8n-code-javascript
summary: >-
  # Data Access Patterns - JavaScript Code Node

  Comprehensive guide to accessing data in n8n Code nodes using JavaScript.

  ---

  ## Overview

  In n8n Code nodes, you access data from previous nodes using built-in
  variables and methods. Understanding which method to use is critical for
  correct workflow execution.

  **Data Access Priority** (by common usage):

  1. **`$input.all()`** - Most common - Batch operations, aggregations

  2. **`$input.first()`** - Very common - Single item operations

  3. **`$input.item`** - Common - Each Item mode only

  4. **`$node["NodeName"].json`** - Specific node references
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/czlonkowski/n8n-skills/main/skills/n8n-code-javascript/DATA_ACCESS.md
license: ""
upstream_ref: https://skills.sh/czlonkowski/n8n-skills/n8n-code-javascript
retrieved_at: 2026-02-06T04:49:55.562Z
content_sha256: 29f361baabfc6f9d2bb213a23520a359cd9cb46073fdf03c48453ad4ac00d544
---
|/data/skills-sh-czlonkowski-n8n-skills-n8n-code-javascript|

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
retrieved_at: 2026-02-06T04:51:20.028Z
content_sha256: a7e09fe0b0b024454bef960e626d7122777e0f72ed3d575f26c9c75b4b1ceca7
---
|/data/skills-sh-czlonkowski-n8n-skills-n8n-code-python|

---
stable_id: skills/skills-sh-czlonkowski-n8n-skills-n8n-expression-syntax
type: skills
title: skills-sh-czlonkowski-n8n-skills-n8n-expression-syntax
summary: |-
  # Common n8n Expression Mistakes
  Complete catalog of expression errors with explanations and fixes.
  ---
  ## 1. Missing Curly Braces
  **Problem**: Expression not recognized, shows as literal text
  ❌ **Wrong**:
  ```
  $json.email
  ```
  ✅ **Correct**:
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/czlonkowski/n8n-skills/main/skills/n8n-expression-syntax/COMMON_MISTAKES.md
license: ""
upstream_ref: https://skills.sh/czlonkowski/n8n-skills/n8n-expression-syntax
retrieved_at: 2026-02-06T04:49:56.675Z
content_sha256: 31400d8b454039410ca9ce9fb4f833d3f2ea563b0732fe633a9a5f9554b9fde8
---
|/data/skills-sh-czlonkowski-n8n-skills-n8n-expression-syntax|

---
stable_id: skills/skills-sh-czlonkowski-n8n-skills-n8n-mcp-tools-expert
type: skills
title: skills-sh-czlonkowski-n8n-skills-n8n-mcp-tools-expert
summary: |-
  # Node Discovery Tools Guide
  Complete guide for finding and understanding n8n nodes.
  ---
  ## search_nodes (START HERE!)
  **Speed**: <20ms
  **Use when**: You know what you're looking for (keyword, service, use case)
  **Syntax**:
  ```javascript
  search_nodes({
    query: "slack",      // Required: search keywords
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/czlonkowski/n8n-skills/main/skills/n8n-mcp-tools-expert/SEARCH_GUIDE.md
license: ""
upstream_ref: https://skills.sh/czlonkowski/n8n-skills/n8n-mcp-tools-expert
retrieved_at: 2026-02-06T04:49:55.189Z
content_sha256: 294d87425d4c3d145a969e6408709d00103dadbaf4bbcd14dedc848f63a10ea0
---
|/data/skills-sh-czlonkowski-n8n-skills-n8n-mcp-tools-expert|

---
stable_id: skills/skills-sh-czlonkowski-n8n-skills-n8n-node-configuration
type: skills
title: skills-sh-czlonkowski-n8n-skills-n8n-node-configuration
summary: >-
  # Property Dependencies Guide

  Deep dive into n8n property dependencies and displayOptions mechanism.

  ---

  ## What Are Property Dependencies?

  **Definition**: Rules that control when fields are visible or required based
  on other field values.

  **Mechanism**: `displayOptions` in node schema

  **Purpose**:

  - Show relevant fields only

  - Hide irrelevant fields

  - Simplify configuration UX
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/czlonkowski/n8n-skills/main/skills/n8n-node-configuration/DEPENDENCIES.md
license: ""
upstream_ref: https://skills.sh/czlonkowski/n8n-skills/n8n-node-configuration
retrieved_at: 2026-02-06T04:49:55.375Z
content_sha256: 2045e0757cae39a43d18c6c8123777218f04a3acde17b3e3d75caf8d36776199
---
|/data/skills-sh-czlonkowski-n8n-skills-n8n-node-configuration|

---
stable_id: skills/skills-sh-czlonkowski-n8n-skills-n8n-validation-expert
type: skills
title: skills-sh-czlonkowski-n8n-skills-n8n-validation-expert
summary: |-
  # Error Catalog
  Comprehensive catalog of n8n validation errors with real examples and fixes.
  ---
  ## Error Types Overview
  Common validation errors by priority:
  | Error Type | Priority | Severity | Auto-Fix |
  |---|---|---|---|
  | missing_required | Highest | Error | ❌ |
  | invalid_value | High | Error | ❌ |
  | type_mismatch | Medium | Error | ❌ |
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/czlonkowski/n8n-skills/main/skills/n8n-validation-expert/ERROR_CATALOG.md
license: ""
upstream_ref: https://skills.sh/czlonkowski/n8n-skills/n8n-validation-expert
retrieved_at: 2026-02-06T04:49:56.204Z
content_sha256: 74fc170e4217ad1aa0aa176bb2a0565728036d352f491443a826df6f2bb47930
---
|/data/skills-sh-czlonkowski-n8n-skills-n8n-validation-expert|

---
stable_id: skills/skills-sh-czlonkowski-n8n-skills-n8n-workflow-patterns
type: skills
title: skills-sh-czlonkowski-n8n-skills-n8n-workflow-patterns
summary: >-
  # Webhook Processing Pattern

  **Use Case**: Receive HTTP requests from external systems and process them
  instantly.

  ---

  ## Pattern Structure

  ```

  Webhook → [Validate] → [Transform] → [Action] → [Response/Notify]

  ```

  **Key Characteristic**: Instant event-driven processing

  ---

  ## Core Components
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/czlonkowski/n8n-skills/main/skills/n8n-workflow-patterns/webhook_processing.md
license: ""
upstream_ref: https://skills.sh/czlonkowski/n8n-skills/n8n-workflow-patterns
retrieved_at: 2026-02-06T04:49:53.789Z
content_sha256: 03174d27d0e25884c3171de8dff99927932e64ed93a9520625a960800742770d
---
|/data/skills-sh-czlonkowski-n8n-skills-n8n-workflow-patterns|

---
stable_id: skills/skills-sh-daleseo-korean-skills-grammar-checker
type: skills
title: skills-sh-daleseo-korean-skills-grammar-checker
summary: |-
  # 한국어 문법 및 맞춤법 규칙
  이 문서는 한국어 문법 검사 시 참조할 표준 규칙을 정리한 것입니다.
  ## 목차
  1. [맞춤법 규칙](#맞춤법-규칙)
  2. [띄어쓰기 규칙](#띄어쓰기-규칙)
  3. [문법 구조 규칙](#문법-구조-규칙)
  4. [구두점 규칙](#구두점-규칙)
  ---
  ## 맞춤법 규칙
  ### 1. 사이시옷 사용
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/DaleSeo/korean-skills/main/skills/grammar-checker/references/rules.md
license: ""
upstream_ref: https://skills.sh/daleseo/korean-skills/grammar-checker
retrieved_at: 2026-02-06T04:49:55.430Z
content_sha256: 71d816b76cf60d873892f3c953d611e6685ee127e71f12c58b005a71fa5db1f6
---
|/data/skills-sh-daleseo-korean-skills-grammar-checker|

---
stable_id: skills/skills-sh-daleseo-korean-skills-style-guide
type: skills
title: skills-sh-daleseo-korean-skills-style-guide
summary: |-
  # 어조 및 격식 일관성
  이 문서는 한국어 문서에서 어조와 격식 수준의 일관성을 유지하기 위한 패턴과 기준을 설명합니다.
  ## 패턴 1: 경어체 혼용
  **메타데이터**:
  - 출처: 국립국어원 공문서 작성 지침, 대학 논문 작성 지침
  - 권위: 🏛️ 법적 표준 + 📚 학술 표준
  - 버전: 1.0.0
  ### 설명
  한국어는 격식 수준에 따라 다양한 종결어미를 가지고 있습니다. 동일 문서 내에서 종결어미가 혼용되면 독자에게 일관성 없는 인상을 줍니다.
  ### 주요 경어체 분류
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/DaleSeo/korean-skills/main/skills/style-guide/references/tone-consistency.md
license: ""
upstream_ref: https://skills.sh/daleseo/korean-skills/style-guide
retrieved_at: 2026-02-06T04:49:56.501Z
content_sha256: 861f5c44416b36609e36659de6a86c26af681f73ec3e2b89965039d09e0cd2d1
---
|/data/skills-sh-daleseo-korean-skills-style-guide|

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
retrieved_at: 2026-02-06T04:51:20.129Z
content_sha256: e0b9f472e7487061b5123f1a507ebd1fa19bb0e91f95de5931c7a5b6279b104b
---
|/data/skills-sh-davila7-claude-code-templates-autogpt-agents|

---
stable_id: skills/skills-sh-davila7-claude-code-templates-crewai-multi-agent
type: skills
title: skills-sh-davila7-claude-code-templates-crewai-multi-agent
summary: >-
  # CrewAI Flows Guide

  ## Overview

  Flows provide event-driven orchestration with precise control over execution
  paths, state management, and conditional branching. Use Flows when you need
  more control than Crews provide.

  ## When to Use Flows vs Crews

  | Scenario | Use Crews | Use Flows |

  |----------|-----------|-----------|

  | Simple multi-agent collaboration | ✅ | |

  | Sequential/hierarchical tasks | ✅ | |

  | Conditional branching | | ✅ |

  | Complex state management | | ✅ |
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/davila7/claude-code-templates/main/cli-tool/components/skills/ai-research/agents-crewai/references/flows.md
license: ""
upstream_ref: https://skills.sh/davila7/claude-code-templates/crewai-multi-agent
retrieved_at: 2026-02-06T04:51:19.398Z
content_sha256: bb4b104c94ffa8145516d73a1d4af3809723df15d47c2d02b24715bc9a1752f2
---
|/data/skills-sh-davila7-claude-code-templates-crewai-multi-agent|

---
stable_id: skills/skills-sh-davila7-claude-code-templates-devops-iac-engineer
type: skills
title: skills-sh-davila7-claude-code-templates-devops-iac-engineer
summary: |-
  # Terraform Best Practices & Patterns
  ## Terraform Project Structure
  ### Standard Module Structure
  ```
  terraform/
  ├── environments/
  │   ├── dev/
  │   │   ├── main.tf
  │   │   ├── variables.tf
  │   │   ├── outputs.tf
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/davila7/claude-code-templates/main/cli-tool/components/skills/development/devops-iac-engineer/reference/terraform.md
license: ""
upstream_ref: https://skills.sh/davila7/claude-code-templates/devops-iac-engineer
retrieved_at: 2026-02-06T04:51:19.348Z
content_sha256: 68501fa719788234dece69513181b8a7366b70c34a862bf320cf6e7765651828
---
|/data/skills-sh-davila7-claude-code-templates-devops-iac-engineer|

---
stable_id: skills/skills-sh-davila7-claude-code-templates-draw-io
type: skills
title: skills-sh-davila7-claude-code-templates-draw-io
summary: |-
  # レイアウトガイドライン
  ## 1. グループ化の原則
  - AWS Cloud グループを最外層とする
  - 機能単位でサブグループを作成
  - グループは横並びを基本とし、データフローに沿って配置
  ### 1.1. グループの階層構造
  ```text
  AWS Cloud (最外層)
  ├── VPC
  │   ├── Public Subnet
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/davila7/claude-code-templates/main/cli-tool/components/skills/creative-design/draw-io/references/layout-guidelines.md
license: ""
upstream_ref: https://skills.sh/davila7/claude-code-templates/draw-io
retrieved_at: 2026-02-06T04:49:57.409Z
content_sha256: 501fbf61f47b08f578f39a03fcd655af7986277028dd92469a99ba835526d0d8
---
|/data/skills-sh-davila7-claude-code-templates-draw-io|

---
stable_id: skills/skills-sh-davila7-claude-code-templates-google-analytics
type: skills
title: skills-sh-davila7-claude-code-templates-google-analytics
summary: >-
  # Google Analytics Metrics Reference

  Complete reference for Google Analytics 4 (GA4) metrics and dimensions.

  ## Core Metrics

  ### User Metrics

  | Metric | Description | Use Case |

  |--------|-------------|----------|

  | `activeUsers` | Users who engaged with your site or app | Overall audience
  size |

  | `newUsers` | First-time users | Growth tracking |

  | `totalUsers` | Total number of users | Audience reach |

  | `userEngagementDuration` | Total time users spent engaged | Content quality
  |
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/davila7/claude-code-templates/main/cli-tool/components/skills/analytics/google-analytics/REFERENCE.md
license: ""
upstream_ref: https://skills.sh/davila7/claude-code-templates/google-analytics
retrieved_at: 2026-02-06T04:51:19.975Z
content_sha256: df511151c947a38919aeeec85711229519a65c3a01a5ae50f974b7229c2fabe8
---
|/data/skills-sh-davila7-claude-code-templates-google-analytics|

---
stable_id: skills/skills-sh-davila7-claude-code-templates-langchain
type: skills
title: skills-sh-davila7-claude-code-templates-langchain
summary: >-
  # LangChain Agents Guide

  Complete guide to building agents with ReAct, tool calling, and streaming.

  ## What are agents?

  Agents combine language models with tools to solve complex tasks through
  reasoning and action:

  1. **Reasoning**: LLM decides what to do

  2. **Acting**: Execute tools based on reasoning

  3. **Observation**: Receive tool results

  4. **Loop**: Repeat until task complete

  This is the **ReAct pattern** (Reasoning + Acting).

  ## Basic agent creation
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/davila7/claude-code-templates/main/cli-tool/components/skills/ai-research/agents-langchain/references/agents.md
license: ""
upstream_ref: https://skills.sh/davila7/claude-code-templates/langchain
retrieved_at: 2026-02-06T04:49:56.542Z
content_sha256: 724838c970b1cd9d5d99eff5f6f8730514cccd3b09a23baafdb882ecf42cc555
---
|/data/skills-sh-davila7-claude-code-templates-langchain|

---
stable_id: skills/skills-sh-davila7-claude-code-templates-pdf-processing-pro
type: skills
title: skills-sh-davila7-claude-code-templates-pdf-processing-pro
summary: |-
  # PDF Form Processing Guide
  Complete guide for processing PDF forms in production environments.
  ## Table of contents
  - Form analysis and field detection
  - Form filling workflows
  - Validation strategies
  - Field types and handling
  - Multi-page forms
  - Flattening and finalization
  - Error handling patterns
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/davila7/claude-code-templates/main/cli-tool/components/skills/document-processing/pdf-processing-pro/FORMS.md
license: ""
upstream_ref: https://skills.sh/davila7/claude-code-templates/pdf-processing-pro
retrieved_at: 2026-02-06T04:51:20.162Z
content_sha256: ea43f2930d53347e0cf19a205bf94315737cbb034153181ebdff6d037bac8d24
---
|/data/skills-sh-davila7-claude-code-templates-pdf-processing-pro|

---
stable_id: skills/skills-sh-davila7-claude-code-templates-pytorch-lightning
type: skills
title: skills-sh-davila7-claude-code-templates-pytorch-lightning
summary: >-
  # PyTorch Lightning Callbacks

  ## Overview

  Callbacks add functionality to training without modifying the LightningModule.
  They capture **non-essential logic** like checkpointing, early stopping, and
  logging.

  ## Built-In Callbacks

  ### 1. ModelCheckpoint

  **Saves best models during training**:

  ```python

  from lightning.pytorch.callbacks import ModelCheckpoint

  # Save top 3 models based on validation loss

  checkpoint = ModelCheckpoint(
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/davila7/claude-code-templates/main/cli-tool/components/skills/ai-research/distributed-training-pytorch-lightning/references/callbacks.md
license: ""
upstream_ref: https://skills.sh/davila7/claude-code-templates/pytorch-lightning
retrieved_at: 2026-02-06T04:51:19.866Z
content_sha256: 2940b978bdec21b6f8da54c72d1858015e5ba290f9b05f1a659d67c25860e259
---
|/data/skills-sh-davila7-claude-code-templates-pytorch-lightning|

---
stable_id: skills/skills-sh-davila7-claude-code-templates-remotion
type: skills
title: skills-sh-davila7-claude-code-templates-remotion
summary: >-
  ---

  name: animations

  description: Fundamental animation skills for Remotion

  metadata:
    tags: animations, transitions, frames, useCurrentFrame
  ---

  All animations MUST be driven by the `useCurrentFrame()` hook.

  Write animations in seconds and multiply them by the `fps` value from
  `useVideoConfig()`.

  ```tsx

  import { useCurrentFrame } from "remotion";
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/davila7/claude-code-templates/main/cli-tool/components/skills/video/remotion/references/animations.md
license: ""
upstream_ref: https://skills.sh/davila7/claude-code-templates/remotion
retrieved_at: 2026-02-06T04:49:54.428Z
content_sha256: 99a6377d64061af5f7fcd1a179c0c8f6d7bcd0a515060a46db117a757ac3387a
---
|/data/skills-sh-davila7-claude-code-templates-remotion|

---
stable_id: skills/skills-sh-emzod-speak-speak-tts
type: skills
title: skills-sh-emzod-speak-speak-tts
summary: >-
  ---

  name: speak-tts

  description: Give your agent the ability to speak to you real-time. Talk to
  your Claude! Local TTS, text-to-speech, voice synthesis, audio generation with
  voice cloning on Apple Silicon. Use for reading articles aloud, audiobook
  narration, or voice responses. Runs entirely on-device via MLX - private, no
  API keys.

  ---

  # speak - Talk to your Claude!

  Give your agent the ability to speak to you real-time. Local text-to-speech,
  voice cloning, and audio generation on Apple Silicon.

  Give your agent the ability to speak to you real-time. Local TTS with voice
  cloning on Apple Silicon.

  ## Prerequisites

  | Requirement | Check | Install |

  |-------------|-------|---------|
tags:
  - skills-sh
  - skills-sh-probed
source_url: https://raw.githubusercontent.com/emzod/speak/main/SKILL.md
license: ""
upstream_ref: https://skills.sh/emzod/speak/speak-tts
retrieved_at: 2026-02-06T04:51:16.787Z
content_sha256: ca405caf24ed179997aa55b0ae20b154f31c7b04c35153a5bcf98755e8ef4c8b
---
|/data/skills-sh-emzod-speak-speak-tts|

---
stable_id: skills/skills-sh-emzod-speak-turbo-speakturbo-tts
type: skills
title: skills-sh-emzod-speak-turbo-speakturbo-tts
summary: >-
  ---

  name: speakturbo-tts

  description: Give your agent the ability to speak to you real-time. Talk to
  your Claude! Ultra-fast TTS, text-to-speech, voice synthesis, audio output
  with ~90ms latency. 8 built-in voices for instant voice responses. For voice
  cloning, use the speak skill.

  ---

  # speakturbo - Talk to your Claude!

  Give your agent the ability to speak to you real-time. Ultra-fast
  text-to-speech with ~90ms latency and 8 built-in voices.

  ## Quick Start

  ```bash

  # Play immediately - you should hear "Hello world" through your speakers

  speakturbo "Hello world"
tags:
  - skills-sh
  - skills-sh-probed
source_url: https://raw.githubusercontent.com/emzod/speak-turbo/main/SKILL.md
license: ""
upstream_ref: https://skills.sh/emzod/speak-turbo/speakturbo-tts
retrieved_at: 2026-02-06T04:51:16.752Z
content_sha256: 985084c37b43556cfb7adb3da95b9b4c6237230b6fb85dc9c8d99c9a82d887d5
---
|/data/skills-sh-emzod-speak-turbo-speakturbo-tts|

---
stable_id: skills/skills-sh-firecrawl-cli-firecrawl
type: skills
title: skills-sh-firecrawl-cli-firecrawl
summary: |-
  ---
  name: firecrawl-cli-installation
  description: |
    Install the Firecrawl CLI and handle authentication errors.
  ---
  # Firecrawl CLI Installation
  ## Quick Install
  ```bash
  npm install -g firecrawl-cli
  ```
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/firecrawl/cli/main/skills/firecrawl-cli/rules/install.md
license: ""
upstream_ref: https://skills.sh/firecrawl/cli/firecrawl
retrieved_at: 2026-02-06T04:49:51.119Z
content_sha256: 3630af5db9d137777fd8a6939aa0fe707aebf3f3a6e46276688621c061d9794c
---
|/data/skills-sh-firecrawl-cli-firecrawl|

---
stable_id: skills/skills-sh-guibibeau-solana-dev-skill-solana-dev
type: skills
title: skills-sh-guibibeau-solana-dev-skill-solana-dev
summary: |-
  # Frontend with framework-kit (Next.js / React)
  ## Goals
  - One Solana client instance for the app (RPC + WS + wallet connectors)
  - Wallet Standard-first discovery/connect
  - Minimal "use client" footprint in Next.js (hooks only in leaf components)
  - Transaction sending that is observable, cancelable, and UX-friendly
  ## Recommended dependencies
  - @solana/client
  - @solana/react-hooks
  - @solana/kit
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/guibibeau/solana-dev-skill/main/skill/frontend-framework-kit.md
license: ""
upstream_ref: https://skills.sh/guibibeau/solana-dev-skill/solana-dev
retrieved_at: 2026-02-06T04:51:19.305Z
content_sha256: 00bf8288c14add0733ae35506f52d6059a5b41b10215154c45acf8c526273480
---
|/data/skills-sh-guibibeau-solana-dev-skill-solana-dev|

---
stable_id: skills/skills-sh-hashicorp-agent-skills-refactor-module
type: skills
title: skills-sh-hashicorp-agent-skills-refactor-module
summary: >-
  ---

  name: terraform-style-guide

  description: Generate Terraform HCL code following HashiCorp's official style
  conventions and best practices. Use when writing, reviewing, or generating
  Terraform configurations.

  ---

  # Terraform Style Guide

  Generate and maintain Terraform code following HashiCorp's official style
  conventions and best practices.

  **Reference:** [HashiCorp Terraform Style
  Guide](https://developer.hashicorp.com/terraform/language/style)

  ## Code Generation Strategy

  When generating Terraform code:

  1. Start with provider configuration and version constraints
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/hashicorp/agent-skills/refs/heads/main/terraform/code-generation/skills/terraform-style-guide/SKILL.md
license: ""
upstream_ref: https://skills.sh/hashicorp/agent-skills/refactor-module
retrieved_at: 2026-02-06T04:49:57.124Z
content_sha256: 013b0a81999aa173ce6982c1a376b8fe67c8021cf838e083cbe3e5dc217fca4e
---
|/data/skills-sh-hashicorp-agent-skills-refactor-module|

---
stable_id: skills/skills-sh-hyf0-vue-skills-vue-best-practices
type: skills
title: skills-sh-hyf0-vue-skills-vue-best-practices
summary: >-
  ---

  title: Always Use .value When Accessing ref() in JavaScript

  impact: HIGH

  impactDescription: Forgetting .value causes silent failures and bugs in
  reactive state updates

  type: capability

  tags: [vue3, reactivity, ref, composition-api]

  ---

  # Always Use .value When Accessing ref() in JavaScript

  **Impact: HIGH** - Forgetting `.value` causes silent failures where state
  updates don't trigger reactivity, leading to hard-to-debug issues.

  When using `ref()` in Vue 3's Composition API, the reactive value is wrapped
  in an object and must be accessed via `.value` in JavaScript code. However, in
  templates, Vue automatically unwraps refs so `.value` is not needed there.
  This inconsistency is a common source of bugs.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/hyf0/vue-skills/main/skills/vue-best-practices/reference/ref-value-access.md
license: ""
upstream_ref: https://skills.sh/hyf0/vue-skills/vue-best-practices
retrieved_at: 2026-02-06T04:49:49.476Z
content_sha256: e797ceee03f65cd0946a2dadfca57c11ed98879f9c30b0e49d41db2e31feddb5
---
|/data/skills-sh-hyf0-vue-skills-vue-best-practices|

---
stable_id: skills/skills-sh-imxv-pretty-mermaid-skills-pretty-mermaid
type: skills
title: skills-sh-imxv-pretty-mermaid-skills-pretty-mermaid
summary: |-
  # Mermaid Diagram Types Reference
  ## Flowchart / Graph
  ### Basic Syntax
  ```mermaid
  flowchart LR
      A[Node] --> B[Another Node]
      B --> C{Decision}
      C -->|Yes| D[Result 1]
      C -->|No| E[Result 2]
  ```
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/imxv/pretty-mermaid-skills/main/references/DIAGRAM_TYPES.md
license: ""
upstream_ref: https://skills.sh/imxv/pretty-mermaid-skills/pretty-mermaid
retrieved_at: 2026-02-06T04:49:53.329Z
content_sha256: 79514ada712884f201f50cddced0a059697a0b82cee7b9a80cf744b9bc369739
---
|/data/skills-sh-imxv-pretty-mermaid-skills-pretty-mermaid|

---
stable_id: skills/skills-sh-inference-sh-agent-skills-agent-tools
type: skills
title: skills-sh-inference-sh-agent-skills-agent-tools
summary: >-
  # Authentication & Setup

  ## Install the CLI

  ```bash

  curl -fsSL https://cli.inference.sh | sh

  ```

  ## Login

  ```bash

  infsh login

  ```

  This opens a browser for authentication. After login, credentials are stored
  locally.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/inference-sh/agent-skills/main/skills/agent-tools/references/authentication.md
license: ""
upstream_ref: https://skills.sh/inference-sh/agent-skills/agent-tools
retrieved_at: 2026-02-06T04:49:55.985Z
content_sha256: 65924807bfa86c677ecc8b3f1714adbec266cecab1864e46cb9f0a7492d9de2e
---
|/data/skills-sh-inference-sh-agent-skills-agent-tools|

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
source_url: https://raw.githubusercontent.com/inference-sh/agent-skills/main/skills/javascript-sdk/references/agent-patterns.md
license: ""
upstream_ref: https://skills.sh/inference-sh/agent-skills/javascript-sdk
retrieved_at: 2026-02-06T04:49:55.905Z
content_sha256: 81d7e3e42f5803e8e820edf19ca4b5e54c54ad18afa3c0be98b7d3949b8adbd8
---
|/data/skills-sh-inference-sh-agent-skills-javascript-sdk|

---
stable_id: skills/skills-sh-inference-sh-agent-skills-python-sdk
type: skills
title: skills-sh-inference-sh-agent-skills-python-sdk
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
source_url: https://raw.githubusercontent.com/inference-sh/agent-skills/main/skills/python-sdk/references/agent-patterns.md
license: ""
upstream_ref: https://skills.sh/inference-sh/agent-skills/python-sdk
retrieved_at: 2026-02-06T04:49:55.838Z
content_sha256: 85c91b4d772be3d2d10d017f83892b00940941174989adccc5a8752f56f44ec4
---
|/data/skills-sh-inference-sh-agent-skills-python-sdk|

---
stable_id: skills/skills-sh-inference-sh-skills-agentic-browser
type: skills
title: skills-sh-inference-sh-skills-agentic-browser
summary: >-
  # Command Reference

  Complete reference for all agent-browser functions. For quick start, see
  [SKILL.md](../SKILL.md).

  ## Base Command

  All commands follow this pattern:

  ```bash

  infsh app run agent-browser --function <function> --session <session_id|new>
  --input '<json>'

  ```

  - `--function`: Function to call (open, snapshot, interact, screenshot,
  execute, close)

  - `--session`: Session ID from previous call, or `new` to start fresh

  - `--input`: JSON input for the function
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/inference-sh/skills/main/skills/agentic-browser/references/commands.md
license: ""
upstream_ref: https://skills.sh/inference-sh/skills/agentic-browser
retrieved_at: 2026-02-06T04:49:52.209Z
content_sha256: b1c709ebcf54b26d957886efb8239ddb480d58ddb95fec297ffd42cfe1261c5e
---
|/data/skills-sh-inference-sh-skills-agentic-browser|

---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.2.33

  - Added `TeammateIdle` and `TaskCompleted` hook events with corresponding
  `TeammateIdleHookInput` and `TaskCompletedHookInput` types

  - Added `sessionId` option to specify a custom UUID for conversations instead
  of auto-generated ones

  - Updated to parity with Claude Code v2.1.33

  ## 0.2.32

  - Updated to parity with Claude Code v2.1.32

  ## 0.2.31

  - Added `stop_reason` field to `SDKResultSuccess` and `SDKResultError` to
  indicate why the model stopped generating

  ## 0.2.30
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
retrieved_at: 2026-02-06T04:49:55.523Z
content_sha256: 7e00049a6366b2ea61a5001fd2a623fdd29c08931180122d33b7126a893d90be
---
|/data/skills-sh-jezweb-claude-skills-claude-agent-sdk|

---
stable_id: skills/skills-sh-jezweb-claude-skills-openai-assistants
type: skills
title: skills-sh-jezweb-claude-skills-openai-assistants
summary: >-
  ---

  name: openai-responses

  description: |
    Build agentic AI with OpenAI Responses API - stateful conversations with preserved reasoning, built-in tools (Code Interpreter, File Search, Web Search), and MCP integration. Prevents 11 documented errors.
    Use when: building agents with persistent reasoning, using server-side tools, or migrating from Chat Completions/Assistants for better multi-turn performance.
  user-invocable: true

  ---

  # OpenAI Responses API

  **Status**: Production Ready

  **Last Updated**: 2026-01-21
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/jezweb/claude-skills/main/skills/openai-responses/SKILL.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/openai-assistants
retrieved_at: 2026-02-06T04:49:57.011Z
content_sha256: df6af7b728865a1fdae77fd660f3fbfc1169243e12f31042b1230036e108fa20
---
|/data/skills-sh-jezweb-claude-skills-openai-assistants|

---
stable_id: skills/skills-sh-jezweb-claude-skills-react-native-expo
type: skills
title: skills-sh-jezweb-claude-skills-react-native-expo
summary: |-
  # Reanimated and SDK 54
  With the release of SDK 54, the recommended version of `react-native-reanimated` has moved to `4.x`. For many apps, upgrading will involve some manual steps, like installing the `react-native-worklets` package.
  You'll find all the necessary steps in the official migration guide provided by the Reanimated team [here](https://docs.swmansion.com/react-native-reanimated/docs/guides/migration-from-3.x/).
  A key point to note: if you're using `babel-preset-expo`, it automatically manages the reanimated Babel plugin for you.
  This means there's no need to change it to `react-native-worklets/plugin`, unless you manually specified a plugin in your project configuration.
  # Using SDK 54 with legacy architecture
  Although SDK 54 supports the legacy architecture, keep in mind that `react-native-reanimated` v4 is designed exclusively for the new architecture. We highly recommend making the switch to the new architecture when you can.
  If that's not feasible, you can still use SDK 54 with the legacy architecture, but you will need to downgrade `react-native-reanimated` to version v3.
  Since our tooling enforces the default version of packages, you will need to exclude `react-native-reanimated` from being checked by adding those lines to `package.json`:
  ```
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/expo/fyi/main/expo-54-reanimated.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/react-native-expo
retrieved_at: 2026-02-06T04:49:53.225Z
content_sha256: 3246b413c28f643b21bb72f2b20bda5133ab11bac124b1c6ab3427be96ec997b
---
|/data/skills-sh-jezweb-claude-skills-react-native-expo|

---
stable_id: skills/skills-sh-jezweb-claude-skills-zustand-state-management
type: skills
title: skills-sh-jezweb-claude-skills-zustand-state-management
summary: >-
  ---

  title: Slices Pattern

  nav: 14

  ---

  ## Slicing the store into smaller stores

  Your store can become bigger and bigger and tougher to maintain as you add
  more features.

  You can divide your main store into smaller individual stores to achieve
  modularity. This is simple to accomplish in Zustand!

  The first individual store:

  ```js

  export const createFishSlice = (set) => ({
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/pmndrs/zustand/main/docs/guides/slices-pattern.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/zustand-state-management
retrieved_at: 2026-02-06T04:49:52.135Z
content_sha256: 91fb4fcc8f81a292dcf42d7683e17b3f1cae02dfeb2926c19840ef573562cc9d
---
|/data/skills-sh-jezweb-claude-skills-zustand-state-management|

---
stable_id: skills/skills-sh-jimliu-baoyu-skills-baoyu-article-illustrator-f9ed6141
type: skills
title: skills-sh-jimliu-baoyu-skills-baoyu-article-illustrator-f9ed6141
summary: >-
  # Style Reference

  ## Core Styles

  Simplified style tier for quick selection:

  | Core Style | Maps To | Best For |

  |------------|---------|----------|

  | `vector` | vector-illustration | Knowledge articles, tutorials, tech content
  |

  | `minimal-flat` | notion | General, knowledge sharing, SaaS |

  | `sci-fi` | blueprint | AI, frontier tech, system design |

  | `hand-drawn` | sketch/warm | Relaxed, reflective, casual content |

  | `editorial` | editorial | Processes, data, journalism |
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/jimliu/baoyu-skills/main/skills/baoyu-article-illustrator/references/styles.md
license: ""
upstream_ref: https://skills.sh/jimliu/baoyu-skills/baoyu-article-illustrator
retrieved_at: 2026-02-06T04:51:19.473Z
content_sha256: d0d741a5b3cc839e18d0dd82be41de0401ce1d941f20a377997577352c65543e
---
|/data/skills-sh-jimliu-baoyu-skills-baoyu-article-illustrator-f9ed6141|

---
stable_id: skills/skills-sh-jimliu-baoyu-skills-baoyu-comic-901918a4
type: skills
title: skills-sh-jimliu-baoyu-skills-baoyu-comic-901918a4
summary: |-
  # Partial Workflows
  Options to run specific parts of the workflow.
  ## Options Summary
  | Option | Steps Executed | Output |
  |--------|----------------|--------|
  | `--storyboard-only` | 1-3 | `storyboard.md` + `characters/` |
  | `--prompts-only` | 1-5 | + `prompts/*.md` |
  | `--images-only` | 7-9 | + images + PDF |
  | `--regenerate N` | 7 (partial) | Specific page(s) + PDF |
  ---
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/jimliu/baoyu-skills/main/skills/baoyu-comic/references/partial-workflows.md
license: ""
upstream_ref: https://skills.sh/jimliu/baoyu-skills/baoyu-comic
retrieved_at: 2026-02-06T04:51:19.563Z
content_sha256: b4930b48fa45d58b149a1700305bf2dd90e90b9e42f6d9f896659f73a73f98f6
---
|/data/skills-sh-jimliu-baoyu-skills-baoyu-comic-901918a4|

---
stable_id: skills/skills-sh-jimliu-baoyu-skills-baoyu-cover-image-93718624
type: skills
title: skills-sh-jimliu-baoyu-skills-baoyu-cover-image-93718624
summary: >-
  # Style Presets

  `--style X` expands to a palette + rendering combination. Users can override
  either dimension.

  | --style | Palette | Rendering |

  |---------|---------|-----------|

  | `elegant` | `elegant` | `hand-drawn` |

  | `blueprint` | `cool` | `digital` |

  | `chalkboard` | `dark` | `chalk` |

  | `dark-atmospheric` | `dark` | `digital` |

  | `editorial-infographic` | `cool` | `digital` |

  | `fantasy-animation` | `pastel` | `painterly` |
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/jimliu/baoyu-skills/main/skills/baoyu-cover-image/references/style-presets.md
license: ""
upstream_ref: https://skills.sh/jimliu/baoyu-skills/baoyu-cover-image
retrieved_at: 2026-02-06T04:51:19.528Z
content_sha256: 429dd806af24e74fbcd93ee3f0fba2d99b4238167a2547ef95a86bfff62e23b4
---
|/data/skills-sh-jimliu-baoyu-skills-baoyu-cover-image-93718624|

---
stable_id: skills/skills-sh-jimliu-baoyu-skills-baoyu-post-to-wechat-f876f2bd
type: skills
title: skills-sh-jimliu-baoyu-skills-baoyu-post-to-wechat-f876f2bd
summary: >-
  # Image-Text Posting (图文发表)

  Post image-text messages with multiple images to WeChat Official Account.

  ## Usage

  ```bash

  # Post with images and markdown file (title/content extracted automatically)

  npx -y bun ./scripts/wechat-browser.ts --markdown source.md --images ./images/

  # Post with explicit title and content

  npx -y bun ./scripts/wechat-browser.ts --title "标题" --content "内容" --image
  img1.png --image img2.png

  # Save as draft

  npx -y bun ./scripts/wechat-browser.ts --markdown source.md --images ./images/
  --submit
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/jimliu/baoyu-skills/main/skills/baoyu-post-to-wechat/references/image-text-posting.md
license: ""
upstream_ref: https://skills.sh/jimliu/baoyu-skills/baoyu-post-to-wechat
retrieved_at: 2026-02-06T04:51:19.615Z
content_sha256: 41852e22efea3db12d31d20616e084486f32a639ed4e6f1df7019b06e6e52505
---
|/data/skills-sh-jimliu-baoyu-skills-baoyu-post-to-wechat-f876f2bd|

---
stable_id: skills/skills-sh-kadajett-agent-nestjs-skills-nestjs-best-practices
type: skills
title: skills-sh-kadajett-agent-nestjs-skills-nestjs-best-practices
summary: >-
  ---

  name: nestjs-best-practices

  description: NestJS best practices and architecture patterns for building
  production-ready applications. This skill should be used when writing,
  reviewing, or refactoring NestJS code to ensure proper patterns for modules,
  dependency injection, security, and performance.

  license: MIT

  metadata:
    author: Kadajett
    version: "1.1.0"
  ---

  # NestJS Best Practices

  Comprehensive best practices guide for NestJS applications. Contains 40 rules
  across 10 categories, prioritized by impact to guide automated refactoring and
  code generation.
tags:
  - skills-sh
  - skills-sh-probed
source_url: https://raw.githubusercontent.com/kadajett/agent-nestjs-skills/main/SKILL.md
license: ""
upstream_ref: https://skills.sh/kadajett/agent-nestjs-skills/nestjs-best-practices
retrieved_at: 2026-02-06T04:51:16.658Z
content_sha256: b699d2245ddc6b6cdd08d86db0a89903556dc33138acb2d34645b5c2fb319219
---
|/data/skills-sh-kadajett-agent-nestjs-skills-nestjs-best-practices|

---
stable_id: skills/skills-sh-kylezantos-design-engineer-auditor-package-design-motion-principles
type: skills
title: skills-sh-kylezantos-design-engineer-auditor-package-design-motion-principles
summary: >-
  # Audit Checklist

  Use this checklist when reviewing motion design in any UI code.

  ---

  ## Philosophy Check (Do First)

  - [ ] **How often will users trigger this?** (Frequent = less/no animation —
  Emil's rule)

  - [ ] **Is this keyboard-initiated?** (If yes, don't animate — Emil's rule)

  - [ ] **Does this animation serve a purpose?** (orientation, feedback,
  continuity—not just decoration)

  - [ ] **Will users notice this animation consciously?** (If yes for production
  UI, probably too much)

  - [ ] **Have I tested this with `prefers-reduced-motion: reduce`?**

  - [ ] **Does this feel natural after the 10th interaction?** (Test repeatedly,
  not just once)
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/kylezantos/design-engineer-auditor-package/main/skills/design-motion-principles/audit-checklist.md
license: ""
upstream_ref: https://skills.sh/kylezantos/design-engineer-auditor-package/design-motion-principles
retrieved_at: 2026-02-06T04:51:20.076Z
content_sha256: 42dfa5637766c6868aea875b24b7ceab8a156ea91b79c0cf7233579992b46f4d
---
|/data/skills-sh-kylezantos-design-engineer-auditor-package-design-motion-principles|

---
stable_id: skills/skills-sh-langgenius-dify-frontend-code-review
type: skills
title: skills-sh-langgenius-dify-frontend-code-review
summary: >-
  # Rule Catalog — Code Quality

  ## Conditional class names use utility function

  IsUrgent: True

  Category: Code Quality

  ### Description

  Ensure conditional CSS is handled via the shared `classNames` instead of
  custom ternaries, string concatenation, or template strings. Centralizing
  class logic keeps components consistent and easier to maintain.

  ### Suggested Fix

  ```ts

  import { cn } from '@/utils/classnames'

  const classNames = cn(isActive ? 'text-primary-600' : 'text-gray-500')
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/langgenius/dify/main/.agents/skills/frontend-code-review/references/code-quality.md
license: ""
upstream_ref: https://skills.sh/langgenius/dify/frontend-code-review
retrieved_at: 2026-02-06T04:49:51.241Z
content_sha256: b67ba50627f957bce3c6f67cd96e186485d48f3c6636267fbad1e0aba8f521fa
---
|/data/skills-sh-langgenius-dify-frontend-code-review|

---
stable_id: skills/skills-sh-lwmxiaobei-yt-dlp-skill-yt-dlp
type: skills
title: skills-sh-lwmxiaobei-yt-dlp-skill-yt-dlp
summary: >-
  ---

  name: yt-dlp

  description: Download videos and extract audio from various platforms using
  yt-dlp. Use when user provides a video URL, asks to download a video, or when
  conversation contains video links from YouTube, Twitter/X, Vimeo, TikTok,
  Instagram, etc.

  ---

  # yt-dlp Video Downloader Skill

  This skill provides tools for downloading videos and extracting audio from
  various platforms using yt-dlp.

  ## Features

  - Download videos from multiple platforms (YouTube, Twitter/X, Vimeo, TikTok,
  Instagram, Facebook, etc.)

  - Extract audio from videos

  - Auto-detect video URLs in conversations
tags:
  - skills-sh
  - skills-sh-probed
source_url: https://raw.githubusercontent.com/lwmxiaobei/yt-dlp-skill/main/SKILL.md
license: ""
upstream_ref: https://skills.sh/lwmxiaobei/yt-dlp-skill/yt-dlp
retrieved_at: 2026-02-06T04:51:16.956Z
content_sha256: 678319341ac20cb79bdebf70a1e432cae9cdd5ff4901ddd3a55292d9728d141e
---
|/data/skills-sh-lwmxiaobei-yt-dlp-skill-yt-dlp|

---
stable_id: skills/skills-sh-madteacher-mad-agents-skills-flutter-adaptive-ui
type: skills
title: skills-sh-madteacher-mad-agents-skills-flutter-adaptive-ui
summary: >-
  # Layout Constraints in Flutter

  ## Core Rule

  **Constraints go down. Sizes go up. Parent sets position.**

  Flutter layout can't be understood without knowing this rule.

  In more detail:

  * A widget gets its **constraints** from its **parent**. A constraint is just
  a set of 4 doubles: a minimum and maximum width, and a minimum and maximum
  height.

  * Then the widget goes through its own list of **children**. One by one, the
  widget tells its children what their **constraints** are, and then asks each
  child what size it wants to be.

  * Then, widget positions its **children** (horizontally in the x axis, and
  vertically in the y axis), one by one.

  * And, finally, widget tells its parent about its own **size** (within the
  original constraints, of course).

  ## Limitations
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/madteacher/mad-agents-skills/main/flutter-adaptive-ui/references/layout-constraints.md
license: ""
upstream_ref: https://skills.sh/madteacher/mad-agents-skills/flutter-adaptive-ui
retrieved_at: 2026-02-06T04:49:57.890Z
content_sha256: 9928601ce17722835ee548fb4369b87860b037fe187b65f7048da7c927b19c52
---
|/data/skills-sh-madteacher-mad-agents-skills-flutter-adaptive-ui|

---
stable_id: skills/skills-sh-mastra-ai-skills-mastra
type: skills
title: skills-sh-mastra-ai-skills-mastra
summary: >-
  # Create Mastra Reference

  Complete guide for creating new Mastra projects. Includes both quickstart CLI
  method and detailed manual installation.

  **Official documentation: [mastra.ai/docs](https://mastra.ai/docs)**

  ## Getting Started

  Ask: **"How would you like to create your Mastra project?"**

  1. **Quick Setup**: Copy and run: `npm create mastra@latest`

  2. **Guided Setup**: I walk you through each step, you approve commands

  3. **Automatic Setup**: I create everything, just give me your API key

  > **For AI agents:** The CLI is interactive. Use **Automatic Setup** to create
  files using the steps in "Automatic Setup / Manual Installation" below.

  ## Prerequisites
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/mastra-ai/skills/main/skills/mastra/references/create-mastra.md
license: ""
upstream_ref: https://skills.sh/mastra-ai/skills/mastra
retrieved_at: 2026-02-06T04:49:54.731Z
content_sha256: 85534f5c41c5a615b70ac368cae4b02a6ee1b9df0afb6a3288664a1a2f3c857e
---
|/data/skills-sh-mastra-ai-skills-mastra|

---
stable_id: skills/skills-sh-microsoft-playwright-playwright-cli
type: skills
title: skills-sh-microsoft-playwright-playwright-cli
summary: >-
  # Request Mocking

  Intercept, mock, modify, and block network requests.

  ## CLI Route Commands

  ```bash

  # Mock with custom status

  playwright-cli route "**/*.jpg" --status=404

  # Mock with JSON body

  playwright-cli route "**/api/users" --body='[{"id":1,"name":"Alice"}]'
  --content-type=application/json

  # Mock with custom headers

  playwright-cli route "**/api/data" --body='{"ok":true}' --header="X-Custom:
  value"
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/microsoft/playwright/main/packages/playwright/src/skill/references/request-mocking.md
license: ""
upstream_ref: https://skills.sh/microsoft/playwright/playwright-cli
retrieved_at: 2026-02-06T04:49:52.995Z
content_sha256: 54e801c9663fc2b6d68ceb058cb1c360724c2499f42acc7852a68e83e5b5f37c
---
|/data/skills-sh-microsoft-playwright-playwright-cli|

---
stable_id: skills/skills-sh-mrgoonie-claudekit-skills-chrome-devtools
type: skills
title: skills-sh-mrgoonie-claudekit-skills-chrome-devtools
summary: >-
  # Chrome DevTools Protocol (CDP) Domains Reference

  Complete reference of CDP domains and their capabilities for browser
  automation and debugging.

  ## Overview

  CDP is organized into **47 domains**, each providing specific browser
  capabilities. Domains are grouped by functionality:

  - **Core** - Fundamental browser control

  - **DOM & Styling** - Page structure and styling

  - **Network & Fetch** - HTTP traffic management

  - **Page & Navigation** - Page lifecycle control

  - **Storage & Data** - Browser storage APIs

  - **Performance & Profiling** - Metrics and analysis
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/mrgoonie/claudekit-skills/main/.claude/skills/chrome-devtools/references/cdp-domains.md
license: ""
upstream_ref: https://skills.sh/mrgoonie/claudekit-skills/chrome-devtools
retrieved_at: 2026-02-06T04:49:56.821Z
content_sha256: fa81fa0fda1ae94ff2c25c924cfcb16f5a6e967b6d8412ddd372dc8a1b26f601
---
|/data/skills-sh-mrgoonie-claudekit-skills-chrome-devtools|

---
stable_id: skills/skills-sh-nodnarbnitram-claude-code-extensions-tauri-v2
type: skills
title: skills-sh-nodnarbnitram-claude-code-extensions-tauri-v2
summary: >-
  # Tauri v2 Capabilities & Permissions Reference

  ## Overview

  Tauri v2 uses a capabilities-based security model. By default, **nothing is
  allowed** - you must explicitly grant permissions through capability files.

  ## Capability File Structure

  Location: `src-tauri/capabilities/`

  ```json

  {
      "$schema": "../gen/schemas/desktop-schema.json",
      "identifier": "capability-name",
      "description": "What this capability allows",
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/nodnarbnitram/claude-code-extensions/main/.claude/skills/tauri-v2/references/capabilities-reference.md
license: ""
upstream_ref: https://skills.sh/nodnarbnitram/claude-code-extensions/tauri-v2
retrieved_at: 2026-02-06T04:49:57.652Z
content_sha256: 8248fda5666bd149a0275c3ab104b9794406255580d59da018ba1eff3e9d58e0
---
|/data/skills-sh-nodnarbnitram-claude-code-extensions-tauri-v2|

---
stable_id: skills/skills-sh-onmax-nuxt-skills-document-writer
type: skills
title: skills-sh-onmax-nuxt-skills-document-writer
summary: >-
  # Writing Style

  Sentence structure, voice, tone, and paragraph patterns for Nuxt
  documentation.

  ## Sentence Patterns

  ### Subject-First Declarative (60%)

  Place subject first, verb follows. Clear and direct.

  ```

  The useFetch composable handles data fetching automatically.

  Nuxt provides a powerful auto-import system.

  This option controls module behavior during development.

  ```
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/onmax/nuxt-skills/main/skills/document-writer/references/writing-style.md
license: ""
upstream_ref: https://skills.sh/onmax/nuxt-skills/document-writer
retrieved_at: 2026-02-06T04:49:52.789Z
content_sha256: 978b9e55ca9c992652d2b6ff28b57d75d24771b4c5b53fab1d33421c49615769
---
|/data/skills-sh-onmax-nuxt-skills-document-writer|

---
stable_id: skills/skills-sh-onmax-nuxt-skills-motion
type: skills
title: skills-sh-onmax-nuxt-skills-motion
summary: |-
  # Motion Component API
  ## Import Patterns
  ### motion (lowercase) - Standard pattern
  The standard way to use motion-v with dot notation:
  ```vue
  <script setup>
  import { motion } from 'motion-v'
  </script>
  <template>
    <motion.div />
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/onmax/nuxt-skills/main/skills/motion/references/components.md
license: ""
upstream_ref: https://skills.sh/onmax/nuxt-skills/motion
retrieved_at: 2026-02-06T04:49:52.619Z
content_sha256: 739a643e263a50006fb29dce5fd1e84a704574d4bdfcda485b4951023ac02110
---
|/data/skills-sh-onmax-nuxt-skills-motion|

---
stable_id: skills/skills-sh-onmax-nuxt-skills-nuxt-better-auth
type: skills
title: skills-sh-onmax-nuxt-skills-nuxt-better-auth
summary: >-
  # Installation & Configuration

  ## Install

  ```bash

  pnpm add @onmax/nuxt-better-auth better-auth

  ```

  **Version Requirements:**

  - `@onmax/nuxt-better-auth`: `^0.0.2-alpha.19` (alpha)

  - `better-auth`: `^1.0.0` (module tested with `1.4.7`)

  - `@nuxthub/core`: `^0.10.5+` (optional, for database - requires 0.10.5+ for
  `hub:db` aliases)

  ## Module Setup
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/onmax/nuxt-skills/main/skills/nuxt-better-auth/references/installation.md
license: ""
upstream_ref: https://skills.sh/onmax/nuxt-skills/nuxt-better-auth
retrieved_at: 2026-02-06T04:49:53.029Z
content_sha256: 2fb4a6e8b4eae28125eef6479a7c78dbd9ebde2152c800f7b804407308ec1f17
---
|/data/skills-sh-onmax-nuxt-skills-nuxt-better-auth|

---
stable_id: skills/skills-sh-onmax-nuxt-skills-nuxt-content
type: skills
title: skills-sh-onmax-nuxt-skills-nuxt-content
summary: >-
  # Collections

  ## When to Use

  Setting up `content.config.ts`, defining collection schemas, or configuring
  content sources.

  ## Defining Collections

  ```ts

  // content.config.ts

  import { defineCollection, defineContentConfig } from '@nuxt/content'

  import { z } from 'zod'  // Import z from 'zod' directly (not from
  @nuxt/content)

  export default defineContentConfig({
    collections: {
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/onmax/nuxt-skills/main/skills/nuxt-content/references/collections.md
license: ""
upstream_ref: https://skills.sh/onmax/nuxt-skills/nuxt-content
retrieved_at: 2026-02-06T04:49:52.937Z
content_sha256: eb10a535052b1ecf968008adaf360e1fb130f229808e83482519b83c78aaae4c
---
|/data/skills-sh-onmax-nuxt-skills-nuxt-content|

---
stable_id: skills/skills-sh-onmax-nuxt-skills-nuxt-modules
type: skills
title: skills-sh-onmax-nuxt-skills-nuxt-modules
summary: |-
  # Module Development
  Module anatomy, Kit utilities, and common patterns.
  ## defineNuxtModule
  ```ts
  import { addPlugin, createResolver, defineNuxtModule } from '@nuxt/kit'
  export interface ModuleOptions {
    apiKey?: string
    prefix?: string
  }
  export default defineNuxtModule<ModuleOptions>({
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/onmax/nuxt-skills/main/skills/nuxt-modules/references/development.md
license: ""
upstream_ref: https://skills.sh/onmax/nuxt-skills/nuxt-modules
retrieved_at: 2026-02-06T04:49:52.824Z
content_sha256: 22572b0823c7d75231a6ab867e3e83bc98a3fa8758dd51645b0bede5a8d6081b
---
|/data/skills-sh-onmax-nuxt-skills-nuxt-modules|

---
stable_id: skills/skills-sh-onmax-nuxt-skills-nuxt-seo
type: skills
title: skills-sh-onmax-nuxt-skills-nuxt-seo
summary: |-
  # Site Config
  Foundation module providing shared configuration for all SEO modules.
  ## Configuration
  ```ts
  // nuxt.config.ts
  export default defineNuxtConfig({
    site: {
      url: 'https://example.com',       // Required for absolute URLs
      name: 'My Site',                  // Site name (used in titles, schema)
      description: 'Site description',  // Default meta description
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/onmax/nuxt-skills/main/skills/nuxt-seo/references/site-config.md
license: ""
upstream_ref: https://skills.sh/onmax/nuxt-skills/nuxt-seo
retrieved_at: 2026-02-06T04:49:54.333Z
content_sha256: 5fe0f6314f21f851027e203b33e483fa94d318ec6ac82fa047124674b82a89b0
---
|/data/skills-sh-onmax-nuxt-skills-nuxt-seo|

---
stable_id: skills/skills-sh-onmax-nuxt-skills-nuxt-ui
type: skills
title: skills-sh-onmax-nuxt-skills-nuxt-ui
summary: |-
  # Installation
  ## Nuxt Installation
  ```bash
  pnpm add @nuxt/ui
  ```
  ```ts
  // nuxt.config.ts
  export default defineNuxtConfig({
    modules: ['@nuxt/ui'],
    css: ['~/assets/css/main.css']
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/onmax/nuxt-skills/main/skills/nuxt-ui/references/installation.md
license: ""
upstream_ref: https://skills.sh/onmax/nuxt-skills/nuxt-ui
retrieved_at: 2026-02-06T04:49:51.655Z
content_sha256: 3eebd995590401035dd57598ce2f6eee22e8d7ca0403044f80b5765a847e34c7
---
|/data/skills-sh-onmax-nuxt-skills-nuxt-ui|

---
stable_id: skills/skills-sh-onmax-nuxt-skills-nuxthub
type: skills
title: skills-sh-onmax-nuxt-skills-nuxthub
summary: >-
  # Wrangler Configuration for NuxtHub v0.10.6

  **Default (Recommended):** NuxtHub auto-generates `wrangler.json` from your
  `hub` config in `nuxt.config.ts`. No manual wrangler.jsonc required.

  **Note:** Node.js compatibility (`nodejs_compat`) is automatically enabled for
  Cloudflare Workers in v0.10.5+.

  **Manual wrangler.jsonc:** Use when you need features not auto-generated
  (observability, migrations config, etc.) or prefer explicit file-based
  configuration.

  ## Minimal (Database Only)

  ```jsonc

  {
    "$schema": "node_modules/wrangler/config-schema.json",
    "name": "my-app",
    "compatibility_flags": ["nodejs_compat"],
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/onmax/nuxt-skills/main/skills/nuxthub/references/wrangler-templates.md
license: ""
upstream_ref: https://skills.sh/onmax/nuxt-skills/nuxthub
retrieved_at: 2026-02-06T04:49:53.844Z
content_sha256: 1df7576b8c23b52e21dc0dd36dc3b586257f66bdaa36acc8d8a48eec872add8f
---
|/data/skills-sh-onmax-nuxt-skills-nuxthub|

---
stable_id: skills/skills-sh-onmax-nuxt-skills-reka-ui
type: skills
title: skills-sh-onmax-nuxt-skills-reka-ui
summary: >-
  # Components

  > Auto-generated. Run `npx tsx skills/reka-ui/scripts/generate-components.ts`
  to update.

  ## Form

  | Component       | Description                                 |
  File                         |

  | --------------- | ------------------------------------------- |
  ---------------------------- |

  | **checkbox**    | Selection control with indeterminate state  |
  `components/checkbox.md`     |

  | **combobox**    | Searchable dropdown with filtering          |
  `components/combobox.md`     |

  | **editable**    | Inline text editing with preview/edit modes |
  `components/editable.md`     |

  | **label**       | Accessible form label                       |
  `components/label.md`        |

  | **listbox**     | Accessible list selection                   |
  `components/listbox.md`      |
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/onmax/nuxt-skills/main/skills/reka-ui/references/components.md
license: ""
upstream_ref: https://skills.sh/onmax/nuxt-skills/reka-ui
retrieved_at: 2026-02-06T04:49:52.531Z
content_sha256: 48e417f86ac1fc35c038d9cf6b377a5461a09032a285883cf125f4aa33180f9c
---
|/data/skills-sh-onmax-nuxt-skills-reka-ui|

---
stable_id: skills/skills-sh-onmax-nuxt-skills-ts-library
type: skills
title: skills-sh-onmax-nuxt-skills-ts-library
summary: |-
  # Project Setup
  ## Single Package
  ```bash
  # Clone starter template
  cp -r ~/templates/antfu/starter-ts my-lib
  cd my-lib && rm -rf .git && git init
  pnpm install
  ```
  Or manual setup:
  ```bash
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/onmax/nuxt-skills/main/skills/ts-library/references/project-setup.md
license: ""
upstream_ref: https://skills.sh/onmax/nuxt-skills/ts-library
retrieved_at: 2026-02-06T04:49:52.262Z
content_sha256: 2c48c69f958dbc84d435513df0b8ba0d1d507b72d8eb3033c3413f70875ee18b
---
|/data/skills-sh-onmax-nuxt-skills-ts-library|

---
stable_id: skills/skills-sh-onmax-nuxt-skills-vueuse
type: skills
title: skills-sh-onmax-nuxt-skills-vueuse
summary: >-
  # VueUse Composables

  > Auto-generated. Run `npx tsx skills/vueuse/scripts/generate-composables.ts`
  to update.

  ## '@Electron'

  | Composable           |
  Description                                                  |
  File                                                                    |

  | -------------------- |
  ------------------------------------------------------------ |
  ----------------------------------------------------------------------- |

  | useIpcRenderer       | Provides ipcRenderer and all of its APIs with Vue
  reactiv... |
  [use-ipc-renderer.md](../composables/use-ipc-renderer.md)               |

  | useIpcRendererInvoke | Reactive ipcRenderer.invoke API result. Make
  asynchronous... |
  [use-ipc-renderer-invoke.md](../composables/use-ipc-renderer-invoke.md) |

  | useIpcRendererOn     | Use ipcRenderer.on with ease and
  ipcRenderer.removeListen... |
  [use-ipc-renderer-on.md](../composables/use-ipc-renderer-on.md)         |

  | useZoomFactor        | Reactive WebFrame zoom
  factor.                               |
  [use-zoom-factor.md](../composables/use-zoom-factor.md)                 |

  | useZoomLevel         | Reactive WebFrame zoom
  level.                                |
  [use-zoom-level.md](../composables/use-zoom-level.md)                   |
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/onmax/nuxt-skills/main/skills/vueuse/references/composables.md
license: ""
upstream_ref: https://skills.sh/onmax/nuxt-skills/vueuse
retrieved_at: 2026-02-06T04:49:51.953Z
content_sha256: 34c04a1a4e72cf7b54140e70a11a6522d9f3166996d5eb31b00ffddf52d492f9
---
|/data/skills-sh-onmax-nuxt-skills-vueuse|

---
stable_id: skills/skills-sh-op7418-document-illustrator-skill-document-illustrator
type: skills
title: skills-sh-op7418-document-illustrator-skill-document-illustrator
summary: |-
  ---
  name: document-illustrator
  description: >
    基于文档内容自动生成配图。AI 智能分析文档结构，归纳核心要点，
    为每个主题生成符合特定风格的配图。支持封面图生成和自定义图片比例。
    使用场景：当用户需要为文档、文章、笔记生成配图时。
    关键词：配图、插图、illustration、generate images、document images
  allowed-tools:
    - Read
    - Write
tags:
  - skills-sh
  - skills-sh-probed
source_url: https://raw.githubusercontent.com/op7418/document-illustrator-skill/main/SKILL.md
license: ""
upstream_ref: https://skills.sh/op7418/document-illustrator-skill/document-illustrator
retrieved_at: 2026-02-06T04:51:16.989Z
content_sha256: 159a7b86419b7c27afba2754781575ad5537eb7b83195d9d62dadc733debffc2
---
|/data/skills-sh-op7418-document-illustrator-skill-document-illustrator|

---
stable_id: skills/skills-sh-op7418-humanizer-zh-humanizer-zh
type: skills
title: skills-sh-op7418-humanizer-zh-humanizer-zh
summary: |-
  ---
  name: humanizer-zh
  description: |
    去除文本中的 AI 生成痕迹。适用于编辑或审阅文本，使其听起来更自然、更像人类书写。
    基于维基百科的"AI 写作特征"综合指南。检测并修复以下模式：夸大的象征意义、
    宣传性语言、以 -ing 结尾的肤浅分析、模糊的归因、破折号过度使用、三段式法则、
    AI 词汇、否定式排比、过多的连接性短语。
  allowed-tools:
    - Read
    - Write
tags:
  - skills-sh
  - skills-sh-probed
source_url: https://raw.githubusercontent.com/op7418/humanizer-zh/main/SKILL.md
license: ""
upstream_ref: https://skills.sh/op7418/humanizer-zh/humanizer-zh
retrieved_at: 2026-02-06T04:51:16.626Z
content_sha256: e0edbdbc9008644263d5573fb59beac95794e188fd99c35012bfd79e9ae4beeb
---
|/data/skills-sh-op7418-humanizer-zh-humanizer-zh|

---
stable_id: skills/skills-sh-op7418-youtube-clipper-skill-youtube-clipper
type: skills
title: skills-sh-op7418-youtube-clipper-skill-youtube-clipper
summary: |-
  # YouTube Clipper Skill
  > AI-powered YouTube video clipper for Claude Code. Download videos, generate semantic chapters, clip segments, translate subtitles to bilingual format, and burn subtitles into videos.
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
  [![Python](https://img.shields.io/badge/python-3.8+-blue.svg)](https://www.python.org/downloads/)
  English | [简体中文](README.zh-CN.md)
  [Features](#features) • [Installation](#installation) • [Usage](#usage) • [Requirements](#requirements) • [Configuration](#configuration) • [Troubleshooting](#troubleshooting)
  ---
  ## Features
  - **AI Semantic Analysis** - Generate fine-grained chapters (2-5 minutes each) by understanding video content, not just mechanical time splitting
  - **Precise Clipping** - Use FFmpeg to extract video segments with frame-accurate timing
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/op7418/Youtube-clipper-skill/main/README.md
license: ""
upstream_ref: https://skills.sh/op7418/youtube-clipper-skill/youtube-clipper
retrieved_at: 2026-02-06T04:49:51.570Z
content_sha256: 16234a04fc31ebd88e44c294220619c4b98b331a7356101bee8d05821a831d1e
---
|/data/skills-sh-op7418-youtube-clipper-skill-youtube-clipper|

---
stable_id: skills/skills-sh-op7418-youtube-clipper-skill-youtube-clipper-af0fc3db
type: skills
title: skills-sh-op7418-youtube-clipper-skill-youtube-clipper-af0fc3db
summary: |-
  # YouTube Clipper Skill
  > AI-powered YouTube video clipper for Claude Code. Download videos, generate semantic chapters, clip segments, translate subtitles to bilingual format, and burn subtitles into videos.
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
  [![Python](https://img.shields.io/badge/python-3.8+-blue.svg)](https://www.python.org/downloads/)
  English | [简体中文](README.zh-CN.md)
  [Features](#features) • [Installation](#installation) • [Usage](#usage) • [Requirements](#requirements) • [Configuration](#configuration) • [Troubleshooting](#troubleshooting)
  ---
  ## Features
  - **AI Semantic Analysis** - Generate fine-grained chapters (2-5 minutes each) by understanding video content, not just mechanical time splitting
  - **Precise Clipping** - Use FFmpeg to extract video segments with frame-accurate timing
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/op7418/youtube-clipper-skill/main/README.md
license: ""
upstream_ref: https://skills.sh/op7418/youtube-clipper-skill/youtube-clipper
retrieved_at: 2026-02-06T04:51:19.667Z
content_sha256: 16234a04fc31ebd88e44c294220619c4b98b331a7356101bee8d05821a831d1e
---
|/data/skills-sh-op7418-youtube-clipper-skill-youtube-clipper-af0fc3db|

---
stable_id: skills/skills-sh-payloadcms-skills-payload
type: skills
title: skills-sh-payloadcms-skills-payload
summary: |-
  # Payload Field Types Reference
  Complete reference for all Payload field types with examples.
  ## Text Field
  ```ts
  import type { TextField } from 'payload'
  const textField: TextField = {
    name: 'title',
    type: 'text',
    required: true,
    unique: true,
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/payloadcms/skills/main/skills/payload/reference/FIELDS.md
license: ""
upstream_ref: https://skills.sh/payloadcms/skills/payload
retrieved_at: 2026-02-06T04:49:54.245Z
content_sha256: 990172ff51d8958c9711a23e0857029ef2c92dfeb75112e304aa96af1704825d
---
|/data/skills-sh-payloadcms-skills-payload|

---
stable_id: skills/skills-sh-pleaseprompto-notebooklm-skill-notebooklm
type: skills
title: skills-sh-pleaseprompto-notebooklm-skill-notebooklm
summary: >-
  ---

  name: notebooklm

  description: Use this skill to query your Google NotebookLM notebooks directly
  from Claude Code for source-grounded, citation-backed answers from Gemini.
  Browser automation, library management, persistent auth. Drastically reduced
  hallucinations through document-only responses.

  ---

  # NotebookLM Research Assistant Skill

  Interact with Google NotebookLM to query documentation with Gemini's
  source-grounded answers. Each question opens a fresh browser session,
  retrieves the answer exclusively from your uploaded documents, and closes.

  ## When to Use This Skill

  Trigger when user:

  - Mentions NotebookLM explicitly

  - Shares NotebookLM URL (`https://notebooklm.google.com/notebook/...`)
tags:
  - skills-sh
  - skills-sh-probed
source_url: https://raw.githubusercontent.com/pleaseprompto/notebooklm-skill/master/SKILL.md
license: ""
upstream_ref: https://skills.sh/pleaseprompto/notebooklm-skill/notebooklm
retrieved_at: 2026-02-06T04:51:16.823Z
content_sha256: 8fcfe1aa04523483c1d1a5aa10835bc796228d2de9a66460a767bf2d6ed7432e
---
|/data/skills-sh-pleaseprompto-notebooklm-skill-notebooklm|

---
stable_id: skills/skills-sh-railwayapp-railway-skills-database
type: skills
title: skills-sh-railwayapp-railway-skills-database
summary: >-
  # Environment Config Reference

  The `EnvironmentConfig` object is used to configure services, volumes, and
  shared variables in Railway.

  ## Structure

  ```json

  {
    "services": {
      "<serviceId>": {
        "source": { ... },
        "build": { ... },
        "deploy": { ... },
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/railwayapp/railway-skills/main/plugins/railway/skills/database/references/environment-config.md
license: ""
upstream_ref: https://skills.sh/railwayapp/railway-skills/database
retrieved_at: 2026-02-06T04:49:57.068Z
content_sha256: e1602d30fed437ed0082a69b0956c5cbe466ec0da6ebd17aff5f2dc3e940f8e8
---
|/data/skills-sh-railwayapp-railway-skills-database|

---
stable_id: skills/skills-sh-railwayapp-railway-skills-environment
type: skills
title: skills-sh-railwayapp-railway-skills-environment
summary: >-
  # Environment Config Reference

  The `EnvironmentConfig` object is used to configure services, volumes, and
  shared variables in Railway.

  ## Structure

  ```json

  {
    "services": {
      "<serviceId>": {
        "source": { ... },
        "build": { ... },
        "deploy": { ... },
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/railwayapp/railway-skills/main/plugins/railway/skills/environment/references/environment-config.md
license: ""
upstream_ref: https://skills.sh/railwayapp/railway-skills/environment
retrieved_at: 2026-02-06T04:49:57.799Z
content_sha256: e1602d30fed437ed0082a69b0956c5cbe466ec0da6ebd17aff5f2dc3e940f8e8
---
|/data/skills-sh-railwayapp-railway-skills-environment|

---
stable_id: skills/skills-sh-railwayapp-railway-skills-new
type: skills
title: skills-sh-railwayapp-railway-skills-new
summary: >-
  # Railpack Reference

  Railpack is Railway's default builder. Zero-config for most projects.

  Full docs: https://railpack.com/llms.txt

  ## Detection

  Railpack analyzes source code to detect language, framework, and build
  requirements automatically.

  Supported: Node, Python, Go, PHP, Java, Ruby, Rust, Elixir, Gleam, Deno,
  C/C++, static files.

  ## Static Sites

  ### Detection Patterns

  Railpack serves static files via Caddy when it detects:

  1. `Staticfile` in root (can specify `root: dist`)
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/railwayapp/railway-skills/main/plugins/railway/skills/new/references/railpack.md
license: ""
upstream_ref: https://skills.sh/railwayapp/railway-skills/new
retrieved_at: 2026-02-06T04:51:19.437Z
content_sha256: 071bee33859736c4817af20f5d3dfc7cab85043d6fa2e3fc4d67e83407127d60
---
|/data/skills-sh-railwayapp-railway-skills-new|

---
stable_id: skills/skills-sh-railwayapp-railway-skills-service
type: skills
title: skills-sh-railwayapp-railway-skills-service
summary: >-
  # Variables Reference

  Variables in Railway support references to other services, shared variables,
  and Railway-provided values.

  ## Template Syntax

  ```

  ${{NAMESPACE.VAR}}

  ```

  | Namespace | Description |

  |-----------|-------------|

  | `shared` | Shared variables (project-wide) |

  | `<serviceName>` | Variables from another service (case-sensitive) |
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/railwayapp/railway-skills/main/plugins/railway/skills/service/references/variables.md
license: ""
upstream_ref: https://skills.sh/railwayapp/railway-skills/service
retrieved_at: 2026-02-06T04:51:19.920Z
content_sha256: c3203c6f7f24e4271fd821a45297dd00bc902a1e41038fd1f3a200477e91ebc1
---
|/data/skills-sh-railwayapp-railway-skills-service|

---
stable_id: skills/skills-sh-ramziddin-solid-skills-solid
type: skills
title: skills-sh-ramziddin-solid-skills-solid
summary: |-
  # Test-Driven Development
  ## The Core Loop
  ```
  RED → GREEN → REFACTOR → RED → ...
  ```
  ### RED Phase
  Write a failing test that describes the behavior you want. The test should:
  - Use domain language, not technical jargon
  - Describe WHAT, not HOW
  - Be a concrete example, not an abstract statement
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/ramziddin/solid-skills/main/skills/solid/references/tdd.md
license: ""
upstream_ref: https://skills.sh/ramziddin/solid-skills/solid
retrieved_at: 2026-02-06T04:49:56.088Z
content_sha256: 3d8ba447496e8cb11ef7bf06b00eb34b3a89da78cc9f02d3ac0519698086fc12
---
|/data/skills-sh-ramziddin-solid-skills-solid|

---
stable_id: skills/skills-sh-remotion-dev-skills-remotion-best-practices
type: skills
title: skills-sh-remotion-dev-skills-remotion-best-practices
summary: >-
  ---

  name: subtitles

  description: subtitles and caption rules

  metadata:
    tags: subtitles, captions, remotion, json
  ---

  All captions must be processed in JSON. The captions must use the `Caption`
  type which is the following:

  ```ts

  import type { Caption } from "@remotion/captions";

  ```
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/remotion-dev/skills/main/skills/remotion/rules/subtitles.md
license: ""
upstream_ref: https://skills.sh/remotion-dev/skills/remotion-best-practices
retrieved_at: 2026-02-06T04:49:48.592Z
content_sha256: 9f18ec4a9c88adf35d51b44aaf344442443fd687a4dc948366ebb683fc3ecd30
---
|/data/skills-sh-remotion-dev-skills-remotion-best-practices|

---
stable_id: skills/skills-sh-resciencelab-opc-skills-banner-creator-b321459d
type: skills
title: skills-sh-resciencelab-opc-skills-banner-creator-b321459d
summary: |-
  # Banner Formats Reference
  ## Platform-Specific Sizes
  | Platform | Size (px) | Ratio | Notes |
  |----------|-----------|-------|-------|
  | **GitHub README** | 1280×640 | 2:1 | Most common for project banners |
  | **Twitter/X Header** | 1500×500 | 3:1 | Profile header image |
  | **LinkedIn Banner** | 1584×396 | 4:1 | Personal profile background |
  | **LinkedIn Company** | 1128×191 | ~6:1 | Company page banner |
  | **YouTube Channel** | 2560×1440 | 16:9 | Channel art (safe area: 1546×423) |
  | **Facebook Cover** | 820×312 | ~2.6:1 | Personal profile |
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/ReScienceLab/opc-skills/main/skills/banner-creator/references/formats.md
license: ""
upstream_ref: https://skills.sh/resciencelab/opc-skills/banner-creator
retrieved_at: 2026-02-06T04:51:19.809Z
content_sha256: 71286bbaf6ae664977dcbcca899d13643ed5a9a794c812e0c42c1f1356eea16a
---
|/data/skills-sh-resciencelab-opc-skills-banner-creator-b321459d|

---
stable_id: skills/skills-sh-resciencelab-opc-skills-domain-hunter
type: skills
title: skills-sh-resciencelab-opc-skills-domain-hunter
summary: >-
  # Domain Registrar Reference

  ## Recommended Registrars

  | Registrar | Best For | Pros | Cons |

  |-----------|----------|------|------|

  | **Cloudflare** | At-cost pricing | No markup, same renewal price, free
  privacy | Must add zone first |

  | **Spaceship** | Cheapest prices | Often lowest .ai/.io prices, clean UI |
  Newer company |

  | **NameSilo** | Consistent pricing | Low renewal, bulk discounts | Basic UI |

  | **Porkbun** | Budget friendly | Good prices, fun branding, free SSL |
  Limited enterprise features |

  | **Namecheap** | Features | Free WhoisGuard year 1, good support | Renewal
  can be higher |

  | **Dynadot** | Domain auctions | Good aftermarket, bulk tools | Interface
  dated |
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/resciencelab/opc-skills/main/skills/domain-hunter/references/registrars.md
license: ""
upstream_ref: https://skills.sh/resciencelab/opc-skills/domain-hunter
retrieved_at: 2026-02-06T04:49:57.193Z
content_sha256: 3f36d8253a88fad4526356ade419c97393b075e7c4d3a288e519525be0463078
---
|/data/skills-sh-resciencelab-opc-skills-domain-hunter|

---
stable_id: skills/skills-sh-resciencelab-opc-skills-domain-hunter-6d172174
type: skills
title: skills-sh-resciencelab-opc-skills-domain-hunter-6d172174
summary: >-
  # Domain Registrar Reference

  ## Recommended Registrars

  | Registrar | Best For | Pros | Cons |

  |-----------|----------|------|------|

  | **Cloudflare** | At-cost pricing | No markup, same renewal price, free
  privacy | Must add zone first |

  | **Spaceship** | Cheapest prices | Often lowest .ai/.io prices, clean UI |
  Newer company |

  | **NameSilo** | Consistent pricing | Low renewal, bulk discounts | Basic UI |

  | **Porkbun** | Budget friendly | Good prices, fun branding, free SSL |
  Limited enterprise features |

  | **Namecheap** | Features | Free WhoisGuard year 1, good support | Renewal
  can be higher |

  | **Dynadot** | Domain auctions | Good aftermarket, bulk tools | Interface
  dated |
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/ReScienceLab/opc-skills/main/skills/domain-hunter/references/registrars.md
license: ""
upstream_ref: https://skills.sh/resciencelab/opc-skills/domain-hunter
retrieved_at: 2026-02-06T04:51:19.757Z
content_sha256: 3f36d8253a88fad4526356ade419c97393b075e7c4d3a288e519525be0463078
---
|/data/skills-sh-resciencelab-opc-skills-domain-hunter-6d172174|

---
stable_id: skills/skills-sh-resciencelab-opc-skills-logo-creator
type: skills
title: skills-sh-resciencelab-opc-skills-logo-creator
summary: >-
  # Logo Styles Reference

  Common logo styles and prompt patterns for AI image generation.

  ## Style Categories

  ### 1. Pixel Art / 8-bit Retro

  Classic video game aesthetic with blocky pixels.

  **Best for:** Gaming, indie apps, nostalgic brands, tech startups

  **Prompt patterns:**

  ```

  Pixel art {subject} logo, 8-bit retro style, black pixels on white background,
  32x32 grid, minimalist icon, sharp edges, no anti-aliasing

  Pixel art {subject}, 8-bit style, {color} pixels on white, clean geometric,
  retro arcade game sprite
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/resciencelab/opc-skills/main/skills/logo-creator/references/styles.md
license: ""
upstream_ref: https://skills.sh/resciencelab/opc-skills/logo-creator
retrieved_at: 2026-02-06T04:49:55.673Z
content_sha256: 3586f209bc6f7f3e0addbeb289d240f3d0b13cfae654a33512b12ba1bd2df80e
---
|/data/skills-sh-resciencelab-opc-skills-logo-creator|

---
stable_id: skills/skills-sh-resciencelab-opc-skills-nanobanana
type: skills
title: skills-sh-resciencelab-opc-skills-nanobanana
summary: |-
  # Nano Banana Prompt Reference
  ## Prompt Structure
  A good prompt typically includes:
  1. **Subject** - What to generate
  2. **Style** - Artistic style or aesthetic
  3. **Details** - Lighting, colors, composition
  4. **Quality** - Resolution hints, professional quality
  ## Categories
  ### Pixel Art / 8-bit
  ```
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/resciencelab/opc-skills/main/skills/nanobanana/references/prompts.md
license: ""
upstream_ref: https://skills.sh/resciencelab/opc-skills/nanobanana
retrieved_at: 2026-02-06T04:49:56.147Z
content_sha256: f48d19fe05684f799698b03b46178dc7f2003acc3407b6b78fe5f102de721b24
---
|/data/skills-sh-resciencelab-opc-skills-nanobanana|

---
stable_id: skills/skills-sh-resciencelab-opc-skills-seo-geo
type: skills
title: skills-sh-resciencelab-opc-skills-seo-geo
summary: >-
  # GEO Research: Princeton Study & Optimization Methods

  ## Paper Overview

  **Title:** GEO: Generative Engine Optimization

  **Authors:** Princeton University, IIT Delhi, Georgia Tech, Allen Institute
  for AI

  **Published:** November 2023 (arXiv:2311.09735)

  **Accepted:** KDD 2024 (30th ACM SIGKDD Conference)

  **Link:** https://arxiv.org/abs/2311.09735

  ---

  ## Key Findings

  ### What is GEO?
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/resciencelab/opc-skills/main/skills/seo-geo/references/geo-research.md
license: ""
upstream_ref: https://skills.sh/resciencelab/opc-skills/seo-geo
retrieved_at: 2026-02-06T04:49:51.208Z
content_sha256: 76f781cd26f929b87d943775db223523a444ef4c66e8ee143c4d9ccdb8850457
---
|/data/skills-sh-resciencelab-opc-skills-seo-geo|

---
stable_id: skills/skills-sh-resend-email-best-practices-email-best-practices
type: skills
title: skills-sh-resend-email-best-practices-email-best-practices
summary: >-
  # Email Deliverability

  Maximizing the chances that your emails are delivered successfully to the
  recipients.

  ## Email Authentication

  **Required by Gmail/Yahoo/Microsoft** - unauthenticated emails will be
  rejected or spam-filtered.

  ### SPF (Sender Policy Framework)

  Specifies which servers can send email for your domain.

  ```

  v=spf1 include:amazonses.com ~all

  ```

  - Add TXT record to DNS
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/resend/email-best-practices/main/resources/deliverability.md
license: ""
upstream_ref: https://skills.sh/resend/email-best-practices/email-best-practices
retrieved_at: 2026-02-06T04:49:51.080Z
content_sha256: c1da08c2c55f7edf1844de3aa56a041fa776046cc59514e84935124c71fe94b2
---
|/data/skills-sh-resend-email-best-practices-email-best-practices|

---
stable_id: skills/skills-sh-resend-react-email-react-email
type: skills
title: skills-sh-resend-react-email-react-email
summary: >-
  # React Email Components Reference

  Complete reference for all React Email components. All examples use the
  Tailwind component for styling.

  **Important:** Only import the components you need. Do not use components in
  the code if you are not importing them.

  ## Available Components

  All components are imported from `@react-email/components`:

  - **Body** - A React component to wrap emails

  - **Button** - A link that is styled to look like a button

  - **CodeBlock** - Display code with a selected theme and regex highlighting
  using Prism.js

  - **CodeInline** - Display a predictable inline code HTML element that works
  on all email clients

  - **Column** - Display a column that separates content areas vertically in
  your email (must be used with Row)
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/resend/react-email/main/skills/react-email/references/COMPONENTS.md
license: ""
upstream_ref: https://skills.sh/resend/react-email/react-email
retrieved_at: 2026-02-06T04:49:51.298Z
content_sha256: cb169f1ec7b73363d6fdc609de53c1a42e6743839830d6d81dd4bf44db53ea0b
---
|/data/skills-sh-resend-react-email-react-email|

---
stable_id: skills/skills-sh-resend-resend-skills-resend
type: skills
title: skills-sh-resend-resend-skills-resend
summary: >-
  ---

  name: resend

  description: Use when working with Resend email platform - routes to specific
  sub-skills for sending, receiving, audiences, or broadcasts.

  license: MIT

  metadata:
      author: resend
      version: "2.2.0"
  ---

  # Resend

  ## Overview
tags:
  - skills-sh
  - skills-sh-probed
source_url: https://raw.githubusercontent.com/resend/resend-skills/main/SKILL.md
license: ""
upstream_ref: https://skills.sh/resend/resend-skills/resend
retrieved_at: 2026-02-06T04:51:16.715Z
content_sha256: c86c9c610ae49b7ac08357e95d5e28a945558507e7759d0189b3eaad11d31086
---
|/data/skills-sh-resend-resend-skills-resend|

---
stable_id: skills/skills-sh-resend-resend-skills-send-email
type: skills
title: skills-sh-resend-resend-skills-send-email
summary: |-
  # Resend SDK Installation Guide
  ## Detecting Project Language
  Check for these files to determine the project's language/framework:
  | File | Language | SDK |
  |------|----------|-----|
  | `package.json` | Node.js/TypeScript | resend |
  | `requirements.txt` or `pyproject.toml` | Python | resend |
  | `go.mod` | Go | resend-go/v3 |
  | `Gemfile` | Ruby | resend |
  | `composer.json` | PHP | resend/resend-php |
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/resend/resend-skills/main/send-email/references/installation.md
license: ""
upstream_ref: https://skills.sh/resend/resend-skills/send-email
retrieved_at: 2026-02-06T04:49:53.515Z
content_sha256: b8d795217a1d54527db3e773c51b14163c043b92e8642d8b2b600a0ff4755fc2
---
|/data/skills-sh-resend-resend-skills-send-email|

---
stable_id: skills/skills-sh-rivet-dev-skills-rivetkit
type: skills
title: skills-sh-rivet-dev-skills-rivetkit
summary: >-
  # Actions

  > Source: `src/content/docs/actors/actions.mdx`

  > Canonical URL: https://rivet.dev/docs/actors/actions

  > Description: Actions are how your backend, frontend, or other actors can
  communicate with actors. Actions are defined as functions in the actor
  configuration and can be called from clients.

  ---

  Actions are very lightweight. They can be called thousands of times per second
  safely.

  Actions are executed via HTTP requests or via WebSockets if [using
  `.connect()`](/docs/actors/connections).

  For advanced use cases that require direct access to HTTP requests or
  WebSocket connections, see [raw HTTP and WebSocket
  handling](/docs/actors/fetch-and-websocket-handler).

  ## Writing Actions

  Actions are defined in the `actions` object when creating an actor:
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/rivet-dev/skills/main/rivetkit/reference/actors/actions.md
license: ""
upstream_ref: https://skills.sh/rivet-dev/skills/rivetkit
retrieved_at: 2026-02-06T04:49:53.608Z
content_sha256: ed2f919374b9b5d842ae46a171ed2e8425e192c67c7004f736e4abb05dcefc44
---
|/data/skills-sh-rivet-dev-skills-rivetkit|

---
stable_id: skills/skills-sh-rivet-dev-skills-sandbox-agent
type: skills
title: skills-sh-rivet-dev-skills-sandbox-agent
summary: |-
  # llms.txt
  > Source: `docs/ai/llms-txt.mdx`
  > Canonical URL: https://sandboxagent.dev/docs/ai/llms-txt
  > Description: LLM-friendly documentation manifests.
  ---
  Mintlify publishes `llms.txt` and `llms-full.txt` for this documentation site.
  Access them at:
  ```
  https://rivet.dev/docs/llms.txt
  https://rivet.dev/docs/llms-full.txt
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/rivet-dev/skills/main/skills/sandbox-agent/references/ai/llms-txt.md
license: ""
upstream_ref: https://skills.sh/rivet-dev/skills/sandbox-agent
retrieved_at: 2026-02-06T04:49:52.896Z
content_sha256: df90e359d814cb04620311cd297d68efbb1c2b76512f69b02e1ebfbc3c6f2020
---
|/data/skills-sh-rivet-dev-skills-sandbox-agent|

---
stable_id: skills/skills-sh-sanyuan0704-code-review-expert-code-review-expert
type: skills
title: skills-sh-sanyuan0704-code-review-expert-code-review-expert
summary: >-
  ---

  name: code-review-expert

  description: "Expert code review of current git changes with a senior engineer
  lens. Detects SOLID violations, security risks, and proposes actionable
  improvements."

  ---

  # Code Review Expert

  ## Overview

  Perform a structured review of the current git changes with focus on SOLID,
  architecture, removal candidates, and security risks. Default to review-only
  output unless the user asks to implement changes.

  ## Severity Levels

  | Level | Name | Description | Action |

  |-------|------|-------------|--------|
tags:
  - skills-sh
  - skills-sh-probed
source_url: https://raw.githubusercontent.com/sanyuan0704/code-review-expert/main/SKILL.md
license: ""
upstream_ref: https://skills.sh/sanyuan0704/code-review-expert/code-review-expert
retrieved_at: 2026-02-06T04:51:20.198Z
content_sha256: 368a472603cfa0b0e47b69b204c4d69a07a527f53c470fac3bc7f05eb4c255be
---
|/data/skills-sh-sanyuan0704-code-review-expert-code-review-expert|

---
stable_id: skills/skills-sh-sawyerhood-dev-browser-dev-browser
type: skills
title: skills-sh-sawyerhood-dev-browser-dev-browser
summary: >-
  # Data Scraping Guide

  For large datasets (followers, posts, search results), **intercept and replay
  network requests** rather than scrolling and parsing the DOM. This is faster,
  more reliable, and handles pagination automatically.

  ## Why Not Scroll?

  Scrolling is slow, unreliable, and wastes time. APIs return structured data
  with pagination built in. Always prefer API replay.

  ## Start Small, Then Scale

  **Don't try to automate everything at once.** Work incrementally:

  1. **Capture one request** - verify you're intercepting the right endpoint

  2. **Inspect one response** - understand the schema before writing extraction
  code

  3. **Extract a few items** - make sure your parsing logic works

  4. **Then scale up** - add pagination loop only after the basics work
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/sawyerhood/dev-browser/main/skills/dev-browser/references/scraping.md
license: ""
upstream_ref: https://skills.sh/sawyerhood/dev-browser/dev-browser
retrieved_at: 2026-02-06T04:49:57.540Z
content_sha256: 44031cea3262dbf909d3657897b0b8bb30f0760520887f64e118b8f319cadddd
---
|/data/skills-sh-sawyerhood-dev-browser-dev-browser|

---
stable_id: skills/skills-sh-sickn33-antigravity-awesome-skills-active-directory-attacks
type: skills
title: skills-sh-sickn33-antigravity-awesome-skills-active-directory-attacks
summary: |-
  # Advanced Active Directory Attacks Reference
  ## Table of Contents
  1. [Delegation Attacks](#delegation-attacks)
  2. [Group Policy Object Abuse](#group-policy-object-abuse)
  3. [RODC Attacks](#rodc-attacks)
  4. [SCCM/WSUS Deployment](#sccmwsus-deployment)
  5. [AD Certificate Services (ADCS)](#ad-certificate-services-adcs)
  6. [Trust Relationship Attacks](#trust-relationship-attacks)
  7. [ADFS Golden SAML](#adfs-golden-saml)
  8. [Credential Sources](#credential-sources)
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/sickn33/antigravity-awesome-skills/main/skills/active-directory-attacks/references/advanced-attacks.md
license: ""
upstream_ref: https://skills.sh/sickn33/antigravity-awesome-skills/active-directory-attacks
retrieved_at: 2026-02-06T04:51:20.903Z
content_sha256: 2b5eb51995be2e05378ab669d59ff88b95cf87ea891940efe48dc1c7db169316
---
|/data/skills-sh-sickn33-antigravity-awesome-skills-active-directory-attacks|

---
stable_id: skills/skills-sh-sickn33-antigravity-awesome-skills-app-builder
type: skills
title: skills-sh-sickn33-antigravity-awesome-skills-app-builder
summary: >-
  ---

  name: nextjs-fullstack

  description: Next.js full-stack template principles. App Router, Prisma,
  Tailwind.

  ---

  # Next.js Full-Stack Template

  ## Tech Stack

  | Component | Technology |

  |-----------|------------|

  | Framework | Next.js 14 (App Router) |

  | Language | TypeScript |
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/sickn33/antigravity-awesome-skills/main/skills/app-builder/templates/nextjs-fullstack/TEMPLATE.md
license: ""
upstream_ref: https://skills.sh/sickn33/antigravity-awesome-skills/app-builder
retrieved_at: 2026-02-06T04:49:56.292Z
content_sha256: ab1216024dafc747c61a5aa1164ea3d1b278eb7f92381cd8a5ca93e41f2bc81c
---
|/data/skills-sh-sickn33-antigravity-awesome-skills-app-builder|

---
stable_id: skills/skills-sh-sickn33-antigravity-awesome-skills-aws-penetration-testing
type: skills
title: skills-sh-sickn33-antigravity-awesome-skills-aws-penetration-testing
summary: >-
  # Advanced AWS Penetration Testing Reference

  ## Table of Contents

  - [Training Resources](#training-resources)

  - [Extended Tools Arsenal](#extended-tools-arsenal)

  - [AWS API Calls That Return
  Credentials](#aws-api-calls-that-return-credentials)

  - [Lambda & API Gateway](#lambda--api-gateway)

  - [Secrets Manager & KMS](#secrets-manager--kms)

  - [Container Security (ECS/EKS/ECR)](#container-security-ecseksecr)

  - [RDS Database Exploitation](#rds-database-exploitation)

  - [DynamoDB Exploitation](#dynamodb-exploitation)
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/sickn33/antigravity-awesome-skills/main/skills/aws-penetration-testing/references/advanced-aws-pentesting.md
license: ""
upstream_ref: https://skills.sh/sickn33/antigravity-awesome-skills/aws-penetration-testing
retrieved_at: 2026-02-06T04:49:57.598Z
content_sha256: 41556bd893e2f1762271c819b39d072d14b6fcc16879071bc060f470b8673c2d
---
|/data/skills-sh-sickn33-antigravity-awesome-skills-aws-penetration-testing|

---
stable_id: skills/skills-sh-sickn33-antigravity-awesome-skills-cloud-penetration-testing
type: skills
title: skills-sh-sickn33-antigravity-awesome-skills-cloud-penetration-testing
summary: >-
  # Advanced Cloud Pentesting Scripts

  Reference: [Cloud Pentesting Cheatsheet by Beau
  Bullock](https://github.com/dafthack/CloudPentestCheatsheets)

  ## Azure Automation Runbooks

  ### Export All Runbooks from All Subscriptions

  ```powershell

  $subs = Get-AzSubscription

  Foreach($s in $subs){
      $subscriptionid = $s.SubscriptionId
      mkdir .\$subscriptionid\
      Select-AzSubscription -Subscription $subscriptionid
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/sickn33/antigravity-awesome-skills/main/skills/cloud-penetration-testing/references/advanced-cloud-scripts.md
license: ""
upstream_ref: https://skills.sh/sickn33/antigravity-awesome-skills/cloud-penetration-testing
retrieved_at: 2026-02-06T04:49:57.924Z
content_sha256: bab614720e84202dc0eb3de89b9514513e9273eb8d40cd7899114b8767ddceff
---
|/data/skills-sh-sickn33-antigravity-awesome-skills-cloud-penetration-testing|

---
stable_id: skills/skills-sh-sickn33-antigravity-awesome-skills-playwright-skill
type: skills
title: skills-sh-sickn33-antigravity-awesome-skills-playwright-skill
summary: >-
  # Playwright Skill - Complete API Reference

  This document contains the comprehensive Playwright API reference and advanced
  patterns. For quick-start execution patterns, see [SKILL.md](SKILL.md).

  ## Table of Contents

  - [Installation & Setup](#installation--setup)

  - [Core Patterns](#core-patterns)

  - [Selectors & Locators](#selectors--locators)

  - [Common Actions](#common-actions)

  - [Waiting Strategies](#waiting-strategies)

  - [Assertions](#assertions)

  - [Page Object Model](#page-object-model-pom)
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/sickn33/antigravity-awesome-skills/main/skills/playwright-skill/API_REFERENCE.md
license: ""
upstream_ref: https://skills.sh/sickn33/antigravity-awesome-skills/playwright-skill
retrieved_at: 2026-02-06T04:49:51.913Z
content_sha256: ed10f6472af9f2597be746cb6e0bce4a8a99864ae1a724c42f0ec61b6db4dd6b
---
|/data/skills-sh-sickn33-antigravity-awesome-skills-playwright-skill|

---
stable_id: skills/skills-sh-sickn33-antigravity-awesome-skills-skill-developer
type: skills
title: skills-sh-sickn33-antigravity-awesome-skills-skill-developer
summary: >-
  # skill-rules.json - Complete Reference

  Complete schema and configuration reference for
  `.claude/skills/skill-rules.json`.

  ## Table of Contents

  - [File Location](#file-location)

  - [Complete TypeScript Schema](#complete-typescript-schema)

  - [Field Guide](#field-guide)

  - [Example: Guardrail Skill](#example-guardrail-skill)

  - [Example: Domain Skill](#example-domain-skill)

  - [Validation](#validation)

  ---
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/sickn33/antigravity-awesome-skills/main/skills/skill-developer/SKILL_RULES_REFERENCE.md
license: ""
upstream_ref: https://skills.sh/sickn33/antigravity-awesome-skills/skill-developer
retrieved_at: 2026-02-06T04:49:56.854Z
content_sha256: 340a66dc9a527da89509459454de7c21a224ae6f0eeef70b6cbee610e7d2e16e
---
|/data/skills-sh-sickn33-antigravity-awesome-skills-skill-developer|

---
stable_id: skills/skills-sh-sickn33-antigravity-awesome-skills-vulnerability-scanner
type: skills
title: skills-sh-sickn33-antigravity-awesome-skills-vulnerability-scanner
summary: >-
  # Security Checklists

  > Quick reference checklists for security audits. Use alongside
  vulnerability-scanner principles.

  ---

  ## OWASP Top 10 Audit Checklist

  ### A01: Broken Access Control

  - [ ] Authorization on all protected routes

  - [ ] Deny by default

  - [ ] Rate limiting implemented

  - [ ] CORS properly configured

  ### A02: Cryptographic Failures
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/sickn33/antigravity-awesome-skills/main/skills/vulnerability-scanner/checklists.md
license: ""
upstream_ref: https://skills.sh/sickn33/antigravity-awesome-skills/vulnerability-scanner
retrieved_at: 2026-02-06T04:49:56.448Z
content_sha256: fcad8d2be67a2ef31a223f2fba9e1ed13188fcc15857a584a8fb5b55d9813e42
---
|/data/skills-sh-sickn33-antigravity-awesome-skills-vulnerability-scanner|

---
stable_id: skills/skills-sh-softaworks-agent-toolkit-c4-architecture
type: skills
title: skills-sh-softaworks-agent-toolkit-c4-architecture
summary: >-
  # Common C4 Model Mistakes to Avoid

  This guide documents frequent anti-patterns and errors when creating C4
  architecture diagrams, with examples of what to do instead.

  ## Abstraction Level Mistakes

  ### 1. Confusing Containers and Components

  **The Problem:**

  Containers are **deployable units** (applications, services, databases).
  Components are **non-deployable elements inside a container** (modules,
  classes, packages).

  **Wrong - Java class shown as container:**

  ```mermaid

  C4Container
    title WRONG: Class as Container
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/softaworks/agent-toolkit/main/skills/c4-architecture/references/common-mistakes.md
license: ""
upstream_ref: https://skills.sh/softaworks/agent-toolkit/c4-architecture
retrieved_at: 2026-02-06T04:49:49.439Z
content_sha256: 608b39dd6ece1c2d4367fb06f3bd7d190332291e279391bfedb82f4749ced414
---
|/data/skills-sh-softaworks-agent-toolkit-c4-architecture|

---
stable_id: skills/skills-sh-softaworks-agent-toolkit-difficult-workplace-conversations
type: skills
title: skills-sh-softaworks-agent-toolkit-difficult-workplace-conversations
summary: >-
  # Difficult Conversation Framework

  Complete guide to the three-phase framework for challenging workplace
  conversations.

  ## The Three Phases in Depth

  ### Phase 1: Preparation (40% of Success)

  Most difficult conversations fail before they start. Thorough preparation
  dramatically improves outcomes.

  #### Step 1: Clarify the Facts

  ##### What happened? (Objective)

  Write down only observable facts:

  - What did you see or hear?

  - When and where did it happen?
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/softaworks/agent-toolkit/main/skills/difficult-workplace-conversations/references/conversation-framework.md
license: ""
upstream_ref: https://skills.sh/softaworks/agent-toolkit/difficult-workplace-conversations
retrieved_at: 2026-02-06T04:49:49.315Z
content_sha256: 7bde1cefd202a596a383e612c8bbe9746ff38fe60fbb982b087ce98b244b3139
---
|/data/skills-sh-softaworks-agent-toolkit-difficult-workplace-conversations|

---
stable_id: skills/skills-sh-softaworks-agent-toolkit-gepetto
type: skills
title: skills-sh-softaworks-agent-toolkit-gepetto
summary: |-
  # Research Protocol
  This document defines the research decision and execution flow.
  ## Overview
  ```
  ┌─────────────────────────────────────────────────────────────┐
  │  RESEARCH FLOW                                              │
  │                                                             │
  │  Step 4: Decide what to research                            │
  │    - Codebase research? (existing patterns/conventions)     │
  │    - Web research? (best practices, SOTA approaches)        │
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/softaworks/agent-toolkit/main/skills/gepetto/references/research-protocol.md
license: ""
upstream_ref: https://skills.sh/softaworks/agent-toolkit/gepetto
retrieved_at: 2026-02-06T04:49:49.276Z
content_sha256: d219729ce530953d53aeb0a0831567a577981ee79df4f713c01845ced6214163
---
|/data/skills-sh-softaworks-agent-toolkit-gepetto|

---
stable_id: skills/skills-sh-softaworks-agent-toolkit-meme-factory
type: skills
title: skills-sh-softaworks-agent-toolkit-meme-factory
summary: >-
  # The Complete Practical Guide to Memes in Markdown Blog Posts

  *A comprehensive toolbox for creating textual and image memes in
  Markdown-based blogs (MkDocs, Jekyll, Hugo, Astro, etc.)*

  ---

  ## 📖 Table of Contents

  1. [Why Markdown for Memes?](#why-markdown-for-memes)

  2. [Core Markdown Techniques](#core-markdown-techniques)

  3. [Layout Patterns for Text Memes](#layout-patterns-for-text-memes)

  4. [Textual Meme Formats](#textual-meme-formats)

  5. [Image Memes via Pure URL](#image-memes-via-pure-url)

  6. [Mixing Text + Image Memes](#mixing-text--image-memes)
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/softaworks/agent-toolkit/main/skills/meme-factory/references/markdown-memes-guide.md
license: ""
upstream_ref: https://skills.sh/softaworks/agent-toolkit/meme-factory
retrieved_at: 2026-02-06T04:49:49.217Z
content_sha256: 6dd8e5fcc6d674a6abd592ef8f87455b6557fbf59d13608d2dfc5599df47d11e
---
|/data/skills-sh-softaworks-agent-toolkit-meme-factory|

---
stable_id: skills/skills-sh-softaworks-agent-toolkit-mermaid-diagrams
type: skills
title: skills-sh-softaworks-agent-toolkit-mermaid-diagrams
summary: >-
  # Class Diagrams

  Class diagrams model object-oriented designs and domain models. They show
  entities (classes), their attributes/methods, and relationships.

  ## Basic Syntax

  ```mermaid

  classDiagram
      ClassName
  ```

  ## Defining Classes with Members

  ```mermaid

  classDiagram
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/softaworks/agent-toolkit/main/skills/mermaid-diagrams/references/class-diagrams.md
license: ""
upstream_ref: https://skills.sh/softaworks/agent-toolkit/mermaid-diagrams
retrieved_at: 2026-02-06T04:49:49.062Z
content_sha256: 5eba3606f37be8409843826901f0c846a1bd4796e2e9145c787d4e5ba1646ce3
---
|/data/skills-sh-softaworks-agent-toolkit-mermaid-diagrams|

---
stable_id: skills/skills-sh-softaworks-agent-toolkit-qa-test-planner
type: skills
title: skills-sh-softaworks-agent-toolkit-qa-test-planner
summary: |-
  # Test Case Templates
  Standard templates for creating consistent, comprehensive test cases.
  ---
  ## Standard Test Case Template
  ```markdown
  ## TC-[ID]: [Test Case Title]
  **Priority:** P0 (Critical) | P1 (High) | P2 (Medium) | P3 (Low)
  **Type:** Functional | UI | Integration | Regression | Performance | Security
  **Status:** Not Run | Pass | Fail | Blocked | Skipped
  **Estimated Time:** X minutes
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/softaworks/agent-toolkit/main/skills/qa-test-planner/references/test_case_templates.md
license: ""
upstream_ref: https://skills.sh/softaworks/agent-toolkit/qa-test-planner
retrieved_at: 2026-02-06T04:49:49.097Z
content_sha256: 42072c5db347039476bd1d045e5f7124018d50c4fd48a0d30cb3aceeb301ff68
---
|/data/skills-sh-softaworks-agent-toolkit-qa-test-planner|

---
stable_id: skills/skills-sh-softaworks-agent-toolkit-react-dev
type: skills
title: skills-sh-softaworks-agent-toolkit-react-dev
summary: >-
  # React 19 TypeScript Patterns

  React 19 introduces breaking changes and new APIs requiring updated TypeScript
  patterns.

  ## ref as Prop (No More forwardRef)

  React 19 allows ref as regular prop — forwardRef deprecated but still works.

  ```typescript

  // ✅ React 19 - ref as prop

  type InputProps = {
    ref?: React.Ref<HTMLInputElement>;
    label: string;
  } & React.ComponentPropsWithoutRef<'input'>;
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/softaworks/agent-toolkit/main/skills/react-dev/references/react-19-patterns.md
license: ""
upstream_ref: https://skills.sh/softaworks/agent-toolkit/react-dev
retrieved_at: 2026-02-06T04:49:49.717Z
content_sha256: 385551bdf34ca46da9241299cc3850b801e98087f8a192c872691d3209d90738
---
|/data/skills-sh-softaworks-agent-toolkit-react-dev|

---
stable_id: skills/skills-sh-softaworks-agent-toolkit-react-useeffect
type: skills
title: skills-sh-softaworks-agent-toolkit-react-useeffect
summary: |-
  # useEffect Anti-Patterns
  ## 1. Redundant State for Derived Values
  ```tsx
  // BAD: Extra state + Effect for derived value
  function Form() {
    const [firstName, setFirstName] = useState('Taylor');
    const [lastName, setLastName] = useState('Swift');
    const [fullName, setFullName] = useState('');
    useEffect(() => {
      setFullName(firstName + ' ' + lastName);
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/softaworks/agent-toolkit/main/skills/react-useeffect/anti-patterns.md
license: ""
upstream_ref: https://skills.sh/softaworks/agent-toolkit/react-useeffect
retrieved_at: 2026-02-06T04:49:49.776Z
content_sha256: 69146321260d67972646ba3cc98465d516431f543c4908cc60c2d60886a8dda9
---
|/data/skills-sh-softaworks-agent-toolkit-react-useeffect|

---
stable_id: skills/skills-sh-softaworks-agent-toolkit-session-handoff
type: skills
title: skills-sh-softaworks-agent-toolkit-session-handoff
summary: >-
  # Handoff Template

  Use this template structure when creating handoff documents. The smart
  scaffold script will pre-fill metadata sections; complete the remaining
  sections based on session context.

  ## Table of Contents

  - [Session Metadata](#session-metadata)

  - [Current State Summary](#current-state-summary)

  - [Codebase Understanding](#codebase-understanding)
    - [Architecture Overview](#architecture-overview)
    - [Critical Files](#critical-files)
    - [Key Patterns Discovered](#key-patterns-discovered)
  - [Work Completed](#work-completed)
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/softaworks/agent-toolkit/main/skills/session-handoff/references/handoff-template.md
license: ""
upstream_ref: https://skills.sh/softaworks/agent-toolkit/session-handoff
retrieved_at: 2026-02-06T04:49:49.155Z
content_sha256: 35492711db3a903cf431fe221b82b2d79e3e18aa9d9900dfc3685ee202e3e0e9
---
|/data/skills-sh-softaworks-agent-toolkit-session-handoff|

---
stable_id: skills/skills-sh-squirrelscan-skills-audit-website
type: skills
title: skills-sh-squirrelscan-skills-audit-website
summary: >-
  # LLM Format Output Reference

  ## Overview

  The `--format llm` output is a compact, token-optimized hybrid XML/text format
  designed specifically for AI agent consumption. It provides structured audit
  data in a format that balances machine readability with token efficiency.

  ## Key Characteristics

  - **40-70% smaller** than verbose XML format

  - **1-space indentation** for minimal token usage

  - **Hybrid structure**: XML tags + text prefixes for metadata

  - **Inline attributes**: Metadata stored as XML attributes, not nested
  elements

  - **Comma-separated lists**: Pages and arrays formatted inline

  - **Flattened hierarchy**: Reduced nesting depth compared to verbose XML
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/squirrelscan/skills/main/audit-website/references/OUTPUT-FORMAT.md
license: ""
upstream_ref: https://skills.sh/squirrelscan/skills/audit-website
retrieved_at: 2026-02-06T04:49:48.815Z
content_sha256: 4e508b7a055d04ab588207eb9c69567f88a5002f3e402a2e08c3c19b41a2dc5a
---
|/data/skills-sh-squirrelscan-skills-audit-website|

---
stable_id: skills/skills-sh-tavily-ai-skills-tavily-best-practices
type: skills
title: skills-sh-tavily-ai-skills-tavily-best-practices
summary: |-
  # SDK Reference
  ## Table of Contents
  - [Python SDK](#python-sdk)
  - [JavaScript SDK](#javascript-sdk)
  - [Async Patterns](#async-patterns)
  - [Hybrid RAG](#hybrid-rag)
  ---
  ## Python SDK
  ### Installation
  ```bash
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/tavily-ai/skills/main/skills/tavily/tavily-best-practices/references/sdk.md
license: ""
upstream_ref: https://skills.sh/tavily-ai/skills/tavily-best-practices
retrieved_at: 2026-02-06T04:49:55.617Z
content_sha256: b0c745315f2ca16647a2c298644dc9918ea31bf732921b02841e26814da2087a
---
|/data/skills-sh-tavily-ai-skills-tavily-best-practices|

---
stable_id: skills/skills-sh-trailofbits-skills-address-sanitizer
type: skills
title: skills-sh-trailofbits-skills-address-sanitizer
summary: >-
  # What makes a good fuzz target

  This document explains the concept of a *fuzz target* and

  gives advice on how to make your fuzz targets really good.

  # Basics

  A *fuzz target* is a function that accepts an array of bytes and does
  something interesting with these bytes using the API under test.

  We define a specific signature for fuzz targets:

  ```cpp

  // fuzz_target.cc

  extern "C" int LLVMFuzzerTestOneInput(const uint8_t *Data, size_t Size) {
    DoSomethingInterestingWithMyAPI(Data, Size);
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/google/fuzzing/master/docs/good-fuzz-target.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/address-sanitizer
retrieved_at: 2026-02-06T04:49:54.782Z
content_sha256: 27557aaef97cc5f580f247e803eea591e7f8006f55b1beb5acb2d7ebcf6c64fa
---
|/data/skills-sh-trailofbits-skills-address-sanitizer|

---
stable_id: skills/skills-sh-trailofbits-skills-atheris
type: skills
title: skills-sh-trailofbits-skills-atheris
summary: >-
  # Using Instrumentation with Atheris and Native Extensions

  In order for native fuzzing to be effective, your native extensions must be
  built with Clang, using the argument `-fsanitize=fuzzer-no-link` (and
  optionally other sanitizers).

  ## Step 1: Compiling your Extension

  While this doesn't work for every extension and build system, if you are using

  setuptools, you can typically compile a sanitized extension like this:

  ```

  CC="/usr/bin/clang" CFLAGS="-fsanitize=address,fuzzer-no-link"
  CXX="/usr/bin/clang++" CXXFLAGS="-fsanitize=address,fuzzer-no-link"
  LDSHARED="/usr/bin/clang -shared" pip3 install .

  ```

  Here, `address` means Address Sanitizer. You can also use `undefined` for the

  Undefined Behavior Sanitizer.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/google/atheris/master/native_extension_fuzzing.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/atheris
retrieved_at: 2026-02-06T04:49:54.953Z
content_sha256: a0e6d407dee1c72505af1c5349a58c29b71dfa3c092f55ecc3b6108278b1b58b
---
|/data/skills-sh-trailofbits-skills-atheris|

---
stable_id: skills/skills-sh-trailofbits-skills-audit-context-building
type: skills
title: skills-sh-trailofbits-skills-audit-context-building
summary: >-
  # Function Micro-Analysis Example

  This example demonstrates a complete micro-analysis following the Per-Function
  Microstructure Checklist.

  ---

  ## Target: `swap(address tokenIn, address tokenOut, uint256 amountIn, uint256
  minAmountOut, uint256 deadline)` in Router.sol

  **Purpose:**

  Enables users to swap one token for another through a liquidity pool. Core
  trading operation in a DEX that:

  - Calculates output amount using constant product formula (x * y = k)

  - Deducts 0.3% protocol fee from input amount

  - Enforces user-specified slippage protection

  - Updates pool reserves to maintain AMM invariant
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/trailofbits/skills/main/plugins/audit-context-building/skills/audit-context-building/resources/FUNCTION_MICRO_ANALYSIS_EXAMPLE.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/audit-context-building
retrieved_at: 2026-02-06T04:49:54.128Z
content_sha256: 49024fff7893c383618ae71e969a6ac1b9d96f672348e1810383b04f8b265d7c
---
|/data/skills-sh-trailofbits-skills-audit-context-building|

---
stable_id: skills/skills-sh-trailofbits-skills-code-maturity-assessor
type: skills
title: skills-sh-trailofbits-skills-code-maturity-assessor
summary: >-
  ## The 9 Categories

  ### 1. ARITHMETIC

  **Focus**: Overflow protection, precision handling, formula specification,
  edge case testing

  **I'll analyze**:

  - Overflow protection mechanisms (Solidity 0.8, SafeMath, checked_*,
  saturating_*)

  - Unchecked arithmetic blocks and documentation

  - Division/rounding operations

  - Arithmetic in critical functions (balances, rewards, fees)

  - Test coverage for arithmetic edge cases

  - Arithmetic specification documents
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/trailofbits/skills/main/plugins/building-secure-contracts/skills/code-maturity-assessor/resources/ASSESSMENT_CRITERIA.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/code-maturity-assessor
retrieved_at: 2026-02-06T04:49:54.282Z
content_sha256: 0ffe131842b209de7910cc2ac77fc1e2cdea1e16455bfba79505c8ba8179009f
---
|/data/skills-sh-trailofbits-skills-code-maturity-assessor|

---
stable_id: skills/skills-sh-trailofbits-skills-constant-time-analysis
type: skills
title: skills-sh-trailofbits-skills-constant-time-analysis
summary: >-
  # Constant-Time Analysis: Compiled Languages

  Analysis guidance for C, C++, Go, and Rust. These languages compile to native
  assembly, where timing side-channels are detected by scanning for
  variable-time CPU instructions.

  ## Running the Analyzer

  ```bash

  # C/C++ (default: clang, native architecture)

  uv run {baseDir}/ct_analyzer/analyzer.py crypto.c

  # Go

  uv run {baseDir}/ct_analyzer/analyzer.py crypto.go

  # Rust

  uv run {baseDir}/ct_analyzer/analyzer.py crypto.rs
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/trailofbits/skills/main/plugins/constant-time-analysis/skills/constant-time-analysis/references/compiled.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/constant-time-analysis
retrieved_at: 2026-02-06T04:49:54.552Z
content_sha256: 7c6f69897fc9629c4f26011507685e6cb4b79f1e1881f6f3a23d8e136f1d42fb
---
|/data/skills-sh-trailofbits-skills-constant-time-analysis|

---
stable_id: skills/skills-sh-trailofbits-skills-differential-review
type: skills
title: skills-sh-trailofbits-skills-differential-review
summary: >-
  # Differential Review Methodology

  Detailed phase-by-phase workflow for security-focused code review.

  ## Pre-Analysis: Baseline Context Building

  **FIRST ACTION - Build complete baseline understanding:**

  If `audit-context-building` skill is available:

  ```bash

  # Checkout baseline commit

  git checkout <baseline_commit>

  # Invoke audit-context-building skill on baseline codebase

  # Scope = entire relevant project (e.g., packages/contracts/contracts/ for
  Solidity, src/ for Rust, etc.)
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/trailofbits/skills/main/plugins/differential-review/skills/differential-review/methodology.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/differential-review
retrieved_at: 2026-02-06T04:49:53.125Z
content_sha256: 16b335d24cf2145e3dc4a37f50056550d29db2efa20e6df78fec95ec1e6fb0b4
---
|/data/skills-sh-trailofbits-skills-differential-review|

---
stable_id: skills/skills-sh-trailofbits-skills-firebase-apk-scanner
type: skills
title: skills-sh-trailofbits-skills-firebase-apk-scanner
summary: >-
  # Firebase Security Vulnerability Patterns

  Detailed vulnerability patterns, exploitation techniques, and audit checklists
  for Firebase implementations in mobile applications.

  ---

  ## 1. OPEN EMAIL/PASSWORD SIGNUP (Critical)

  **The Problem:** Firebase Authentication allows anyone to create accounts via
  the Identity Toolkit API, even if the app UI doesn't expose registration.

  **Vulnerable Configuration:**

  ```

  Firebase Console → Authentication → Sign-in method → Email/Password: Enabled

  ```

  **Exploitation:**
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/trailofbits/skills/main/plugins/firebase-apk-scanner/skills/firebase-apk-scanner/references/vulnerabilities.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/firebase-apk-scanner
retrieved_at: 2026-02-06T04:49:55.242Z
content_sha256: 7ae89875a6e0f5a0dfc0da6172f1bdfe6d2719e66dcea6b94c62158d5e9ae1fa
---
|/data/skills-sh-trailofbits-skills-firebase-apk-scanner|

---
stable_id: skills/skills-sh-trailofbits-skills-guidelines-advisor
type: skills
title: skills-sh-trailofbits-skills-guidelines-advisor
summary: |-
  ## Assessment Areas
  ### 1. DOCUMENTATION & SPECIFICATIONS
  **What I'll do**:
  - Read existing documentation (README, specs, comments)
  - Analyze contract/module purposes and interactions
  - Identify undocumented assumptions
  - For Solidity projects: check NatSpec completeness
  - Generate architectural diagrams using Slither printers (if available)
  **I'll generate**:
  - Plain English system description
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/trailofbits/skills/main/plugins/building-secure-contracts/skills/guidelines-advisor/resources/ASSESSMENT_AREAS.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/guidelines-advisor
retrieved_at: 2026-02-06T04:49:53.708Z
content_sha256: 951352a5e7c3afa717ed62770ae1b7c152c4792480e3beebefc68f9c96d2a46c
---
|/data/skills-sh-trailofbits-skills-guidelines-advisor|

---
stable_id: skills/skills-sh-trailofbits-skills-harness-writing
type: skills
title: skills-sh-trailofbits-skills-harness-writing
summary: >-
  # Structure-Aware Fuzzing with libFuzzer

  Generation-based fuzzers usually target a single input type, generating inputs

  according to a pre-defined grammar. Good examples of such fuzzers are

  [csmith](https://github.com/csmith-project/csmith/) (generates valid C
  programs)

  and

  [Peach](https://peachtech.gitlab.io/peach-fuzzer-community/WhatIsPeach.html)

  (generates inputs of any type, but requires such a

  type to be expressed as a grammar definition).

  Coverage-guided mutation-based fuzzers, such as

  [libFuzzer](http://libfuzzer.info) or
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/google/fuzzing/master/docs/structure-aware-fuzzing.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/harness-writing
retrieved_at: 2026-02-06T04:49:54.819Z
content_sha256: 8d02acadc413ae8aca770761382c32a0d468a4616ecca91bcabe171c0c89587a
---
|/data/skills-sh-trailofbits-skills-harness-writing|

---
stable_id: skills/skills-sh-trailofbits-skills-modern-python
type: skills
title: skills-sh-trailofbits-skills-modern-python
summary: >-
  # prek: Fast Pre-commit Hooks

  [prek](https://github.com/j178/prek) is a fast, Rust-native drop-in
  replacement for pre-commit. It uses the same `.pre-commit-config.yaml` format
  and is fully compatible with existing configurations.

  ## Why prek over pre-commit?

  | Feature | prek | pre-commit |

  |---------|------|------------|

  | Speed | ~7x faster hook installation | Slower |

  | Dependencies | Single binary, no runtime needed | Requires Python |

  | Disk usage | Shared toolchains between hooks | Isolated environments |

  | Parallelism | Parallel repo cloning and hook execution | Sequential |

  | Python management | Uses uv automatically | Manual Python setup |
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/trailofbits/skills/main/plugins/modern-python/skills/modern-python/references/prek.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/modern-python
retrieved_at: 2026-02-06T04:49:56.958Z
content_sha256: 4be1c181c71aab64ba58573242a1c451d576a5c61ceeb400bb5827f4e1f9532a
---
|/data/skills-sh-trailofbits-skills-modern-python|

---
stable_id: skills/skills-sh-trailofbits-skills-ossfuzz
type: skills
title: skills-sh-trailofbits-skills-ossfuzz
summary: |-
  # [xpdf](https://storage.googleapis.com/oss-fuzz-introspector/xpdf/inspector-report/20220321/fuzz_report.html)
  Introspector report: [link](https://storage.googleapis.com/oss-fuzz-introspector/xpdf/inspector-report/20220321/fuzz_report.html)
  A [previous blog post by Project Zero](https://googleprojectzero.blogspot.com/2021/12/a-deep-dive-into-nso-zero-click.html)
  details a vulnerability exploited by NSO to hack iOS users in xpdf. This vulnerability is in the `JBIG2Stream::readTextRegionSeg`
  function in xpdf.
  xpdf is integrated into OSS-Fuzz, but the existing fuzzing did not cover [`JBIG2Stream::readTextRegionSeg`](https://storage.googleapis.com/oss-fuzz-coverage/xpdf/reports/20220331/linux/src/xpdf-4.03/xpdf/JBIG2Stream.cc.html#L1953).
  As shown in Figure 1, in the "Optimal target analysis" section of Fuzz Introspector report for xpdf, the
  second function suggested is `JBIG2Stream::reset()`.
  The main function called by `JBIG2Stream::reset()` is `JBIG2Stream::readSegments`.
  `readSegments` actually calls the vulnerable function `readTextRegionSeg`.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/ossf/fuzz-introspector/main/doc/CaseStudies.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/ossfuzz
retrieved_at: 2026-02-06T04:49:55.030Z
content_sha256: d56091780455026c0e196ef220a339b081bada399e43384d3d85578210591297
---
|/data/skills-sh-trailofbits-skills-ossfuzz|

---
stable_id: skills/skills-sh-trailofbits-skills-secure-workflow-guide
type: skills
title: skills-sh-trailofbits-skills-secure-workflow-guide
summary: |-
  ## The 5-Step Workflow
  ### Step 1: Check for Known Security Issues
  I'll run Slither with 70+ built-in detectors:
  ```bash
  slither . --exclude-dependencies
  ```
  Then I'll:
  - Parse findings by severity
  - Explain each issue with file references
  - Recommend fixes
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/trailofbits/skills/main/plugins/building-secure-contracts/skills/secure-workflow-guide/resources/WORKFLOW_STEPS.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/secure-workflow-guide
retrieved_at: 2026-02-06T04:49:53.383Z
content_sha256: 8b048011407a9a123a01ba4548b62a944f8cd5f271e4e0cdfe58b09583bd9291
---
|/data/skills-sh-trailofbits-skills-secure-workflow-guide|

---
stable_id: skills/skills-sh-trailofbits-skills-sharp-edges
type: skills
title: skills-sh-trailofbits-skills-sharp-edges
summary: |-
  # Configuration Security Patterns
  Dangerous configuration patterns that enable security failures.
  ## Zero/Empty/Null Semantics
  ### The Lifetime Zero Problem
  ```yaml
  # What does 0 mean?
  session_timeout: 0    # Infinite timeout? Immediate expiry? Disabled?
  token_lifetime: 0     # Never expires? Already expired? Use default?
  max_attempts: 0       # No attempts allowed? Unlimited attempts?
  ```
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/trailofbits/skills/main/plugins/sharp-edges/skills/sharp-edges/references/config-patterns.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/sharp-edges
retrieved_at: 2026-02-06T04:49:53.275Z
content_sha256: 1d99f2716f7bef18efe71015ce0c56e0f4961c042faa503d796d6d4d1626fdc6
---
|/data/skills-sh-trailofbits-skills-sharp-edges|

---
stable_id: skills/skills-sh-trailofbits-skills-solana-vulnerability-scanner
type: skills
title: skills-sh-trailofbits-skills-solana-vulnerability-scanner
summary: >-
  ### 6.1 ARBITRARY CPI (Cross-Program Invocation) ⚠️ CRITICAL

  **Description**: Using `invoke()` or `invoke_signed()` with user-controlled
  program IDs allows attackers to call malicious programs instead of the
  intended program.

  **Detection Patterns**:

  ```rust

  // VULNERABLE: User-provided program ID without validation

  pub fn transfer_tokens(
      ctx: Context<TransferTokens>,
      amount: u64,
  ) -> Result<()> {
      // User provides token_program account
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/trailofbits/skills/main/plugins/building-secure-contracts/skills/solana-vulnerability-scanner/resources/VULNERABILITY_PATTERNS.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/solana-vulnerability-scanner
retrieved_at: 2026-02-06T04:49:54.376Z
content_sha256: 15e16aaf36eb2d8edad7586dd59968723327798848ee966baa6fef5edb2abb7e
---
|/data/skills-sh-trailofbits-skills-solana-vulnerability-scanner|

---
stable_id: skills/skills-sh-trailofbits-skills-spec-to-code-compliance
type: skills
title: skills-sh-trailofbits-skills-spec-to-code-compliance
summary: >-
  # Intermediate Representation Examples

  The following examples demonstrate the complete IR workflow using realistic
  DEX swap patterns.

  ---

  ## Example 1: Spec-IR Record

  **Scenario:** Extracting a security requirement from a DEX protocol
  whitepaper.

  ```yaml

  id: SPEC-001

  spec_excerpt: "All swaps MUST enforce maximum slippage of 1% to protect users
  from sandwich attacks"

  source_section: "Whitepaper §4.1 - Trading Mechanism & User Protection"

  source_document: "dex-protocol-whitepaper-v3.pdf"
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/trailofbits/skills/main/plugins/spec-to-code-compliance/skills/spec-to-code-compliance/resources/IR_EXAMPLES.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/spec-to-code-compliance
retrieved_at: 2026-02-06T04:49:54.202Z
content_sha256: 053f670171dbb59b795257bbf24865641c66af657a025dc9d79baad4fb2501ec
---
|/data/skills-sh-trailofbits-skills-spec-to-code-compliance|

---
stable_id: skills/skills-sh-trailofbits-skills-substrate-vulnerability-scanner
type: skills
title: skills-sh-trailofbits-skills-substrate-vulnerability-scanner
summary: >-
  # Substrate Vulnerability Patterns (7 Patterns)

  This document contains detailed descriptions, detection patterns, and
  mitigations for 7 critical Substrate/FRAME vulnerabilities.

  ---

  ## 6.1 ARITHMETIC OVERFLOW ⚠️ CRITICAL

  **Description**: Primitive integer types wrap in release mode instead of
  panicking on overflow/underflow. In debug mode they panic, but production
  builds silently produce incorrect values.

  **Detection Patterns**:

  ```rust

  // VULNERABLE: Direct arithmetic on primitive types

  #[pallet::call]

  impl<T: Config> Pallet<T> {
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/trailofbits/skills/main/plugins/building-secure-contracts/skills/substrate-vulnerability-scanner/resources/VULNERABILITY_PATTERNS.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/substrate-vulnerability-scanner
retrieved_at: 2026-02-06T04:49:55.074Z
content_sha256: 680d9d93f9cc11731469489ca3579b844e0d0d1ffec6f73520dffdc1c3a8a9b7
---
|/data/skills-sh-trailofbits-skills-substrate-vulnerability-scanner|

---
stable_id: skills/skills-sh-trailofbits-skills-testing-handbook-generator
type: skills
title: skills-sh-trailofbits-skills-testing-handbook-generator
summary: >-
  # Discovery Workflow

  Methodology for analyzing the Testing Handbook and identifying skill
  candidates.

  **Quick Navigation:**

  - [Phase 0: Locate Handbook](#phase-0-locate-handbook)

  - [Phase 1: Handbook Analysis](#phase-1-handbook-analysis)

  - [Phase 2: Plan Generation](#phase-2-plan-generation)

  - [Phase 3: Prepare Generation Context](#phase-3-prepare-generation-context)

  ## Progress Tracking

  Use TodoWrite throughout discovery to track progress and give visibility to
  the user:

  ```
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/trailofbits/skills/main/plugins/testing-handbook-skills/skills/testing-handbook-generator/discovery.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/testing-handbook-generator
retrieved_at: 2026-02-06T04:49:54.917Z
content_sha256: 57520f2425e8fe344a49e410b6e62858baffbe60d6653061ccd191e20a0f1433
---
|/data/skills-sh-trailofbits-skills-testing-handbook-generator|

---
stable_id: skills/skills-sh-trailofbits-skills-token-integration-analyzer
type: skills
title: skills-sh-trailofbits-skills-token-integration-analyzer
summary: >-
  # Assessment Categories Reference

  This document contains detailed assessment criteria for token analysis. Each
  category includes what to check, analysis methods, and verification
  checklists.

  ---

  ## 1. GENERAL CONSIDERATIONS

  **What I'll check**:

  - Security review history

  - Team contacts and transparency

  - Security mailing list existence

  **I'll ask you**:

  - Has this token been audited?
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/trailofbits/skills/main/plugins/building-secure-contracts/skills/token-integration-analyzer/resources/ASSESSMENT_CATEGORIES.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/token-integration-analyzer
retrieved_at: 2026-02-06T04:49:53.887Z
content_sha256: bf1313e59c960688cc73bda5b7a98579336a277c521b9b37937aa1cda3a122a7
---
|/data/skills-sh-trailofbits-skills-token-integration-analyzer|

---
stable_id: skills/skills-sh-trailofbits-skills-ton-vulnerability-scanner
type: skills
title: skills-sh-trailofbits-skills-ton-vulnerability-scanner
summary: >-
  - **TEP**: [74](https://github.com/ton-blockchain/TEPs/pull/4)

  - **title**: Fungible tokens (Jettons) standard

  - **status**: Active

  - **type**: Contract Interface

  - **authors**: [EmelyanenkoK](https://github.com/EmelyanenkoK),
  [Tolya](https://github.com/tolya-yanot)

  - **created**: 12.03.2022

  - **replaces**: -

  - **replaced by**: -

  # Summary

  A standard interface for Jettons (TON fungible tokens).
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/ton-blockchain/TEPs/master/text/0074-jettons-standard.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/ton-vulnerability-scanner
retrieved_at: 2026-02-06T04:49:55.139Z
content_sha256: e00a2bb5e7cf5ac448b298c192a3936a89d5dd7e6eeb3b2e7e089ad9b958de61
---
|/data/skills-sh-trailofbits-skills-ton-vulnerability-scanner|

---
stable_id: skills/skills-sh-trailofbits-skills-variant-analysis
type: skills
title: skills-sh-trailofbits-skills-variant-analysis
summary: >-
  # The Philosophy of Generic but Precise Variant Analysis

  This document covers the strategic thinking behind effective variant analysis.

  ## Why Variants Exist

  Vulnerabilities cluster because developers make consistent mistakes:

  1. **Developer habits**: Same person writes similar code, makes similar errors

  2. **Copy-paste propagation**: Boilerplate spreads bugs across the codebase

  3. **API misuse patterns**: Complex APIs invite consistent misunderstandings

  4. **Framework idioms**: Framework patterns create predictable vulnerability
  shapes

  5. **Incomplete fixes**: Original bug fixed in one place, missed elsewhere

  Understanding WHY variants exist helps predict WHERE to find them.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/trailofbits/skills/main/plugins/variant-analysis/skills/variant-analysis/METHODOLOGY.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/variant-analysis
retrieved_at: 2026-02-06T04:49:53.567Z
content_sha256: bbe15a7e6edf419f348564542fec22200b4f0ce30a0f801d620fbd2e406c14f3
---
|/data/skills-sh-trailofbits-skills-variant-analysis|

---
stable_id: skills/skills-sh-vercel-ai-ai-sdk
type: skills
title: skills-sh-vercel-ai-ai-sdk
summary: |-
  ---
  title: Common Errors
  description: Reference for common AI SDK errors and how to resolve them.
  ---
  # Common Errors
  ## `maxTokens` → `maxOutputTokens`
  ```typescript
  // ❌ Incorrect
  const result = await generateText({
    model: 'anthropic/claude-opus-4.5',
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/vercel/ai/main/skills/use-ai-sdk/references/common-errors.md
license: ""
upstream_ref: https://skills.sh/vercel/ai/ai-sdk
retrieved_at: 2026-02-06T04:49:50.274Z
content_sha256: 64949f0614a629733d1c47d6e5d5b953d90a696e71922695f69248a21290dcad
---
|/data/skills-sh-vercel-ai-ai-sdk|

---
stable_id: skills/skills-sh-vercel-labs-agent-browser-agent-browser
type: skills
title: skills-sh-vercel-labs-agent-browser-agent-browser
summary: >-
  # Command Reference

  Complete reference for all agent-browser commands. For quick start and common
  patterns, see SKILL.md.

  ## Navigation

  ```bash

  agent-browser open <url>      # Navigate to URL (aliases: goto, navigate)
                                # Supports: https://, http://, file://, about:, data://
                                # Auto-prepends https:// if no protocol given
  agent-browser back            # Go back

  agent-browser forward         # Go forward

  agent-browser reload          # Reload page
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/vercel-labs/agent-browser/main/skills/agent-browser/references/commands.md
license: ""
upstream_ref: https://skills.sh/vercel-labs/agent-browser/agent-browser
retrieved_at: 2026-02-06T04:49:48.631Z
content_sha256: 3e5e521a1e6fdd7c0304333883b16859f83b2149bed70ede10464e534c9e4740
---
|/data/skills-sh-vercel-labs-agent-browser-agent-browser|

---
stable_id: skills/skills-sh-vercel-labs-next-skills-next-best-practices
type: skills
title: skills-sh-vercel-labs-next-skills-next-best-practices
summary: |-
  # File Conventions
  Next.js App Router uses file-based routing with special file conventions.
  ## Project Structure
  Reference: https://nextjs.org/docs/app/getting-started/project-structure
  ```
  app/
  ├── layout.tsx          # Root layout (required)
  ├── page.tsx            # Home page (/)
  ├── loading.tsx         # Loading UI
  ├── error.tsx           # Error UI
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/vercel-labs/next-skills/main/skills/next-best-practices/file-conventions.md
license: ""
upstream_ref: https://skills.sh/vercel-labs/next-skills/next-best-practices
retrieved_at: 2026-02-06T04:49:48.934Z
content_sha256: 95eeb1c6e1c98571192662c8ba3cbf6a034f754596aba54a35077a50a5266de3
---
|/data/skills-sh-vercel-labs-next-skills-next-best-practices|

---
stable_id: skills/skills-sh-vercel-turborepo-turborepo
type: skills
title: skills-sh-vercel-turborepo-turborepo
summary: >-
  # turbo.json Configuration Overview

  Configuration reference for Turborepo. Full docs:
  https://turborepo.dev/docs/reference/configuration

  ## File Location

  Root `turbo.json` lives at repo root, sibling to root `package.json`:

  ```

  my-monorepo/

  ├── turbo.json        # Root configuration

  ├── package.json

  └── packages/
      └── web/
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/vercel/turborepo/main/skills/turborepo/references/configuration/RULE.md
license: ""
upstream_ref: https://skills.sh/vercel/turborepo/turborepo
retrieved_at: 2026-02-06T04:49:50.447Z
content_sha256: c2febbe799e3422e4c2d45a87cb17f9bf6605ae67e861a3cbc6083f84d8cf715
---
|/data/skills-sh-vercel-turborepo-turborepo|

---
stable_id: skills/skills-sh-vuejs-ai-skills-vue-debug-guides
type: skills
title: skills-sh-vuejs-ai-skills-vue-debug-guides
summary: >-
  ---

  title: Use Debug Hooks to Trace Reactivity Issues

  impact: MEDIUM

  impactDescription: Debug hooks help identify which dependencies trigger
  re-renders and watcher executions

  type: efficiency

  tags: [vue3, reactivity, debugging, computed, watch, development]

  ---

  # Use Debug Hooks to Trace Reactivity Issues

  **Impact: MEDIUM** - Vue provides debug hooks (`onTrack`, `onTrigger`,
  `renderTracked`, `renderTriggered`) that help identify exactly which reactive
  dependencies are being tracked and which mutations trigger re-execution. These
  are invaluable for debugging performance issues and unexpected re-renders.

  Debug hooks only work in development mode and are stripped in production
  builds. Use them to understand why a computed property, watcher, or component
  is re-executing.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/vuejs-ai/skills/main/skills/vue-debug-guides/reference/reactivity-debugging-hooks.md
license: ""
upstream_ref: https://skills.sh/vuejs-ai/skills/vue-debug-guides
retrieved_at: 2026-02-06T04:49:51.822Z
content_sha256: 9bd2991786bc470ae00e655a7712d67393a6e904152a942b680c7a9d2f987644
---
|/data/skills-sh-vuejs-ai-skills-vue-debug-guides|

---
stable_id: skills/skills-sh-vuejs-ai-skills-vue-jsx-best-practices
type: skills
title: skills-sh-vuejs-ai-skills-vue-jsx-best-practices
summary: >-
  ---

  title: Vue JSX Uses HTML Attributes Not React Conventions

  impact: MEDIUM

  impactDescription: Using className or htmlFor in Vue JSX causes TypeScript
  errors and inconsistent code style

  type: gotcha

  tags: [vue3, jsx, tsx, render-function]

  ---

  # Vue JSX Uses HTML Attributes Not React Conventions

  **Impact: MEDIUM** - Vue's JSX transform uses standard HTML attribute names
  (`class`, `for`) instead of React's JavaScript-friendly names (`className`,
  `htmlFor`). With proper TypeScript configuration, using React conventions like
  `className` or `htmlFor` will produce TypeScript errors, which is good for
  catching these inconsistencies early. Note that Vue's runtime is lenient and
  will actually convert these attributes correctly, but using HTML attributes is
  the recommended practice for consistency with Vue templates and proper type
  safety.

  When writing JSX in Vue, use the same attribute names you would use in regular
  HTML templates. This is a fundamental difference from React's JSX where
  `class` and `for` are reserved JavaScript keywords.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/vuejs-ai/skills/main/skills/vue-jsx-best-practices/reference/render-function-jsx-vue-vs-react.md
license: ""
upstream_ref: https://skills.sh/vuejs-ai/skills/vue-jsx-best-practices
retrieved_at: 2026-02-06T04:49:51.603Z
content_sha256: da8c635b448b23360bf1c53eea02b004bb755a712a0325c8851f9c33a072c834
---
|/data/skills-sh-vuejs-ai-skills-vue-jsx-best-practices|

---
stable_id: skills/skills-sh-vuejs-ai-skills-vue-options-api-best-practices
type: skills
title: skills-sh-vuejs-ai-skills-vue-options-api-best-practices
summary: >-
  ---

  title: Always Use defineComponent for TypeScript Type Inference

  impact: HIGH

  impactDescription: Without defineComponent, TypeScript cannot infer types for
  props, computed properties, methods, or the 'this' context in Options API
  components

  type: best-practice

  tags: [vue3, typescript, options-api, defineComponent, type-inference]

  ---

  # Always Use defineComponent for TypeScript Type Inference

  **Impact: HIGH** - When using TypeScript with Vue's Options API, you MUST wrap
  your component definition with `defineComponent()` to enable proper type
  inference. Without it, `this` is typed as `any`, losing all TypeScript
  benefits.

  ## Task Checklist
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/vuejs-ai/skills/main/skills/vue-options-api-best-practices/reference/ts-options-api-use-definecomponent.md
license: ""
upstream_ref: https://skills.sh/vuejs-ai/skills/vue-options-api-best-practices
retrieved_at: 2026-02-06T04:49:51.512Z
content_sha256: 7430211d979c775b3b4578438447a1d4c4b02c3ec925908041ae4f808eb7d788
---
|/data/skills-sh-vuejs-ai-skills-vue-options-api-best-practices|

---
stable_id: skills/skills-sh-vuejs-ai-skills-vue-pinia-best-practices
type: skills
title: skills-sh-vuejs-ai-skills-vue-pinia-best-practices
summary: >-
  ---

  title: Fix "No Active Pinia" Error - Store Setup Timing

  impact: HIGH

  impactDescription: Using Pinia stores before app.use(pinia) causes
  "getActivePinia was called but there was no active Pinia" error

  type: gotcha

  tags: [vue3, pinia, state-management, setup, initialization, error]

  ---

  # Fix "No Active Pinia" Error - Store Setup Timing

  **Impact: HIGH** - The error "getActivePinia() was called but there was no
  active Pinia" is one of the most common Pinia errors. It occurs when you try
  to use a store before Pinia has been installed on the Vue app, causing your
  application to crash.

  ## Task Checklist
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/vuejs-ai/skills/main/skills/vue-pinia-best-practices/reference/pinia-no-active-pinia-error.md
license: ""
upstream_ref: https://skills.sh/vuejs-ai/skills/vue-pinia-best-practices
retrieved_at: 2026-02-06T04:49:51.420Z
content_sha256: fa4d1c2f6d76301532f93607be12ebbb8bee0617df28048897a0024f1045aeaf
---
|/data/skills-sh-vuejs-ai-skills-vue-pinia-best-practices|

---
stable_id: skills/skills-sh-vuejs-ai-skills-vue-router-best-practices
type: skills
title: skills-sh-vuejs-ai-skills-vue-router-best-practices
summary: >-
  ---

  title: Per-Route beforeEnter Guards Ignore Param/Query Changes

  impact: MEDIUM

  impactDescription: Route-level beforeEnter guards don't fire when only params,
  query, or hash change, causing unexpected bypasses of validation logic

  type: gotcha

  tags: [vue3, vue-router, navigation-guards, params, query]

  ---

  # Per-Route beforeEnter Guards Ignore Param/Query Changes

  **Impact: MEDIUM** - The `beforeEnter` guard defined in route configuration
  only triggers when entering a route from a DIFFERENT route. Changes to params,
  query strings, or hash within the same route do NOT trigger `beforeEnter`,
  potentially bypassing important validation logic.

  ## Task Checklist
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/vuejs-ai/skills/main/skills/vue-router-best-practices/reference/router-beforeenter-no-param-trigger.md
license: ""
upstream_ref: https://skills.sh/vuejs-ai/skills/vue-router-best-practices
retrieved_at: 2026-02-06T04:49:51.380Z
content_sha256: 8cf2bd4e3f40cf24b14962ea0b33b31d736d56db891aafdd721e4ca68d82c6ad
---
|/data/skills-sh-vuejs-ai-skills-vue-router-best-practices|

---
stable_id: skills/skills-sh-vuejs-ai-skills-vue-testing-best-practices
type: skills
title: skills-sh-vuejs-ai-skills-vue-testing-best-practices
summary: >-
  ---

  title: Use Vitest for Vue 3 Testing - Recommended by Vue Team

  impact: MEDIUM

  impactDescription: Using Jest or other runners with Vite projects requires
  complex configuration and causes slower test runs

  type: best-practice

  tags: [vue3, testing, vitest, vite, configuration, setup]

  ---

  # Use Vitest for Vue 3 Testing - Recommended by Vue Team

  **Impact: MEDIUM** - Vitest is created and maintained by Vue/Vite team members
  and shares the same configuration and transform pipeline as Vite. Using Jest
  or other test runners with Vite-based projects requires additional
  configuration and can result in slower test execution and compatibility
  issues.

  Use Vitest for new Vue 3 projects. Only consider Jest if migrating an existing
  test suite.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/vuejs-ai/skills/main/skills/vue-testing-best-practices/reference/testing-vitest-recommended-for-vue.md
license: ""
upstream_ref: https://skills.sh/vuejs-ai/skills/vue-testing-best-practices
retrieved_at: 2026-02-06T04:49:51.473Z
content_sha256: acfa0b3986e092f43d4cd8090864860cff07ffa3aaa62a10c5a622770ccaeb6b
---
|/data/skills-sh-vuejs-ai-skills-vue-testing-best-practices|

---
stable_id: skills/skills-sh-waynesutton-convexskills-convex-functions
type: skills
title: skills-sh-waynesutton-convexskills-convex-functions
summary: >-
  ---

  name: convex-best-practices

  description: Guidelines for building production-ready Convex apps covering
  function organization, query patterns, validation, TypeScript usage, error
  handling, and the Zen of Convex design philosophy

  ---

  # Convex Best Practices

  Build production-ready Convex applications by following established patterns
  for function organization, query optimization, validation, TypeScript usage,
  and error handling.

  ## Code Quality

  All patterns in this skill comply with `@convex-dev/eslint-plugin`. Install it
  for build-time validation:

  ```bash

  npm i @convex-dev/eslint-plugin --save-dev
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/waynesutton/convexskills/main/skills/convex-best-practices/SKILL.md
license: ""
upstream_ref: https://skills.sh/waynesutton/convexskills/convex-functions
retrieved_at: 2026-02-06T04:49:53.942Z
content_sha256: 20e2298b8ebeca51e189394ec924756dfaef5fa70170ff7fd2fbdb5177718fcd
---
|/data/skills-sh-waynesutton-convexskills-convex-functions|

---
stable_id: skills/skills-sh-wshobson-agents-nextjs-app-router-patterns
type: skills
title: skills-sh-wshobson-agents-nextjs-app-router-patterns
summary: >-
  # RFC: React Server Components

  * Start Date: 2020-12-21

  * RFC PR: https://github.com/reactjs/rfcs/pull/188

  * React Issue: (leave this empty)

  > ⚠️ **NOTE: We strongly recommend [watching our talk introducing Server
  Components](https://reactjs.org/server-components) before reading this RFC.**

  # Table Of Contents

  * [Summary](#summary)

  * [Changes Since v1](#changes-since-v1)

  * [Basic Example](#basic-example)

  * [Motivation](#motivation)
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/reactjs/rfcs/main/text/0188-server-components.md
license: ""
upstream_ref: https://skills.sh/wshobson/agents/nextjs-app-router-patterns
retrieved_at: 2026-02-06T04:49:50.828Z
content_sha256: 69a2811dc897b66d94690243a13ab78146a998b8753087c97d14c78a38643575
---
|/data/skills-sh-wshobson-agents-nextjs-app-router-patterns|

---
stable_id: skills/skills-sh-xenitv1-claude-code-maestro-maestro
type: skills
title: skills-sh-xenitv1-claude-code-maestro-maestro
summary: >-
  ---

  name: maestro

  description: Use when you need to act as an Elite Software Architect (Maestro)
  to manage complex repositories. It enforces a "Why over How" philosophy,
  maintains a persistent project memory (Brain), and orchestrates specialized
  sub-skills through a Plan-Act-Verify lifecycle.

  ---

  # MAESTRO: THE ARCHITECTURAL GOVERNANCE FRAMEWORK

  Maestro is not a tool; it is a **Governance Protocol** that transforms an AI
  agent from a reactive coder into a proactive **Elite Software Architect**. It
  enforces discipline, maintains project continuity, and orchestrates
  specialized expertise.

  ## � The Prime Directives (Mandatory)

  1.  **Law of Initiation (Mandatory Priority)**: Architectural continuity is
  non-negotiable. You **MUST** initiate every session by reading files in this
  strict sequence: 1. `SKILL.md` (Governance), 2. `agents/` (Persona), 3.
  `skills/` (Domain Expertise).

  2.  **Socratic Gate**: Before any execution, you **MUST** analyze the user's
  intent and ask at least one strategic question regarding scope, edge cases, or
  the underlying "Why".

  3.  **Architecture First**: Complex tasks require an `implementation_plan.md`
  (RFC-Lite). Do not write production code on assumptions.
tags:
  - skills-sh
  - skills-sh-probed
source_url: https://raw.githubusercontent.com/xenitv1/claude-code-maestro/main/SKILL.md
license: ""
upstream_ref: https://skills.sh/xenitv1/claude-code-maestro/maestro
retrieved_at: 2026-02-06T04:51:16.896Z
content_sha256: 9e1ecadf0c6b3ec9edc2197af88c452c974e7ce3a7876d1875e303f5bd3b10ba
---
|/data/skills-sh-xenitv1-claude-code-maestro-maestro|

---
stable_id: skills/skills-sh-yizhiyanhua-ai-media-downloader-media-downloader
type: skills
title: skills-sh-yizhiyanhua-ai-media-downloader-media-downloader
summary: >-
  ---

  name: media-downloader

  description: |
    智能媒体下载器。根据用户描述自动搜索和下载图片、视频片段，支持视频自动剪辑。
    Smart media downloader. Automatically search and download images/video clips based on user description, with auto-trimming support.
    触发方式 Triggers: "下载图片", "找视频", "download media", "download images", "find video", "/media"
  ---

  # 🎬 Media Downloader / 智能媒体下载器

  只需告诉我你想要什么，我就会帮你找到并下载相关的图片和视频！

  Just tell me what you want, and I'll find and download relevant images and
  videos for you!
tags:
  - skills-sh
  - skills-sh-probed
source_url: https://raw.githubusercontent.com/yizhiyanhua-ai/media-downloader/main/SKILL.md
license: ""
upstream_ref: https://skills.sh/yizhiyanhua-ai/media-downloader/media-downloader
retrieved_at: 2026-02-06T04:51:17.047Z
content_sha256: e33de4030960111863b1a992657e79049a823f440b69851d1bb65a09204d19af
---
|/data/skills-sh-yizhiyanhua-ai-media-downloader-media-downloader|

---
stable_id: skills/skills-sh-youmind-openlab-nano-banana-pro-prompts-recommend-skill-nano-banana-pro-prompts-recommend-skill
type: skills
title: skills-sh-youmind-openlab-nano-banana-pro-prompts-recommend-skill-nano-banana-pro-prompts-recommend-skill
summary: >-
  ---

  name: nano-banana-pro-prompts-recommend-skill

  description: |
    Recommend suitable prompts from 6000+ Nano Banana Pro image generation prompts based on user needs.
    Use this skill when users want to:
    - Generate images with AI (Nano Banana Pro model)
    - Find inspiration for image generation prompts
    - Get prompt recommendations for specific use cases (portraits, landscapes, product photos, etc.)
    - Create illustrations for articles, videos, podcasts, or other content
    - Translate and understand prompt techniques
tags:
  - skills-sh
  - skills-sh-probed
source_url: https://raw.githubusercontent.com/youmind-openlab/nano-banana-pro-prompts-recommend-skill/main/SKILL.md
license: ""
upstream_ref: https://skills.sh/youmind-openlab/nano-banana-pro-prompts-recommend-skill/nano-banana-pro-prompts-recommend-skill
retrieved_at: 2026-02-06T04:51:17.084Z
content_sha256: 9209a7ffa2309b57417e9193cce562bf68b1ffdd56863cd9a37ac09743e0ed21
---
|/data/skills-sh-youmind-openlab-nano-banana-pro-prompts-recommend-skill-nano-banana-pro-prompts-recommend-skill|

---
stable_id: skills/skills-sh-zaferayan-skills-zafer-skills
type: skills
title: skills-sh-zaferayan-skills-zafer-skills
summary: >-
  ---

  name: zafer-skills

  description: Expo React Native mobile app development with RevenueCat
  payments, AdMob ads, i18n localization, onboarding flow, paywall, and
  NativeTabs navigation

  ---

  # Expo Mobile Application Development Guide

  > **IMPORTANT**: This is a SKILL file, NOT a project. NEVER run npm/bun
  install in this folder. NEVER create code files here. When creating a new
  project, ALWAYS ask the user for the project path first or create it in a
  separate directory (e.g., `~/Projects/app-name`).

  This guide is created to provide context when working with Expo projects using
  Claude Code.

  ## MANDATORY REQUIREMENTS

  When creating a new Expo project, you MUST include ALL of the following:

  ### Required Screens (ALWAYS CREATE)
tags:
  - skills-sh
  - skills-sh-probed
source_url: https://raw.githubusercontent.com/zaferayan/skills/main/SKILL.md
license: ""
upstream_ref: https://skills.sh/zaferayan/skills/zafer-skills
retrieved_at: 2026-02-06T04:51:17.170Z
content_sha256: dc010b204b24e8ba93afdaebf5e3093c377918cf7b0250afb928383e48b2ac0d
---
|/data/skills-sh-zaferayan-skills-zafer-skills|
