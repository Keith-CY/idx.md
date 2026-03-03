# Category: Uncategorized

| Category | Uncategorized |
| --- | --- |
| Slug | uncategorized |
| Count | 547 |

---
stable_id: skills/agentskills-skill
type: skills
title: agentskills-skill
summary: >-
  ---

  name: Agent

  description: Use when creating reusable skill packages for AI agents,
  integrating skills into agent platforms, or authoring SKILL.md files that
  extend agent capabilities with specialized workflows, scripts, and domain
  expertise.

  metadata:
      mintlify-proj: agent
      version: "1.0"
  ---

  # Agent Skills

  ## Product summary

  Agent Skills is a lightweight, open format for packaging specialized
  knowledge, workflows, and executable code into reusable skill directories that
  AI agents can discover and activate. A skill is a folder containing a required
  `SKILL.md` file (with YAML frontmatter and Markdown instructions) plus
  optional `scripts/`, `references/`, and `assets/` directories. Agents load
  only skill metadata (name and description) at startup, then read full
  instructions when a task matches the skill's purpose. This progressive
  disclosure keeps agents fast while giving them access to detailed context on
  demand. Use skills to package domain expertise, repeatable workflows, and new
  capabilities that agents can reuse across different compatible platforms.
  Primary documentation: https://agentskills.io
tags: []
source_url: https://agentskills.io/skill.md
license: ""
upstream_ref: ""
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:12.668Z
content_sha256: 6aeb00e3e9eb83b1208f9a50295017d95a8b041e7bb60709bd7f996c1ebb8b23
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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:10.516Z
content_sha256: 72cc179fe566e62aa18114513eb38e7b6188a7c76806289cdec97138f75b5b11
---
|/data/github-markup-readme|

---
stable_id: skills/github-skill-actionbook-rust-skills-m04-zero-cost
type: skills
title: m04-zero-cost
summary: "CRITICAL: Use for generics, traits, zero-cost abstraction. Triggers:
  E0277, E0308, E0599, generic, trait, impl, dyn, where, monomorphization,
  static dispatch, dynamic dispatch, impl Trait, trait bound not satisfied, 泛型,
  特征, 零成本抽象, 单态化"
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-actionbook
  - github-repo-rust-skills
source_url: https://raw.githubusercontent.com/actionbook/rust-skills/main/skills/m04-zero-cost/SKILL.md
license: ""
upstream_ref: https://github.com/actionbook/rust-skills/blob/main/skills/m04-zero-cost/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:16:58.223Z
content_sha256: 3a2eed8faf0a0087aa5c823d66341123cc6f43ef36d1767c3fdbcc86cf8b4b54
---
|/data/github-skill-actionbook-rust-skills-m04-zero-cost|

---
stable_id: skills/github-skill-agno-agi-agno-git-workflow-cdbf56f5
type: skills
title: git-workflow
summary: Git workflow guidance for commits, branches, and pull requests
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-agno-agi
  - github-repo-agno
source_url: https://raw.githubusercontent.com/agno-agi/agno/main/cookbook/02_agents/16_skills/sample_skills/git-workflow/SKILL.md
license: ""
upstream_ref: https://github.com/agno-agi/agno/blob/main/cookbook/02_agents/16_skills/sample_skills/git-workflow/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:16:58.384Z
content_sha256: f7c93d25f3d18d937331eac825ad08147416c22992db98afe1bab170f399d732
---
|/data/github-skill-agno-agi-agno-git-workflow-cdbf56f5|

---
stable_id: skills/github-skill-alvarobartt-hf-mem-hf-mem
type: skills
title: hf-mem
summary: CLI to estimate the required VRAM to load Safetensors models for
  inference from the Hugging Face Hub (Transformers, Diffusers and Sentence
  Transformers)
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-alvarobartt
  - github-repo-hf-mem
source_url: https://raw.githubusercontent.com/alvarobartt/hf-mem/main/SKILL.md
license: ""
upstream_ref: https://github.com/alvarobartt/hf-mem/blob/main/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:16:58.479Z
content_sha256: d9d27a25d4367b077e7e5409d3d73a922abecc307c83bcbf8e22bd84bd2968fc
---
|/data/github-skill-alvarobartt-hf-mem-hf-mem|

---
stable_id: skills/github-skill-dadbodgeoff-drift-deduplication-1871b9dd
type: skills
title: deduplication
summary: Event deduplication with canonical selection, reputation scoring, and
  hash-based grouping for multi-source data aggregation. Handles both ID-based
  and content-based deduplication.
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-dadbodgeoff
  - github-repo-drift
source_url: https://raw.githubusercontent.com/dadbodgeoff/drift/main/drift v1
  depreciated/skills/deduplication/SKILL.md
license: ""
upstream_ref: https://github.com/dadbodgeoff/drift/blob/main/drift v1
  depreciated/skills/deduplication/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:16:59.474Z
content_sha256: 4deb634eb2c423d4c175b0ac25cf35e595556b53a588b270acabc9677727164c
---
|/data/github-skill-dadbodgeoff-drift-deduplication-1871b9dd|

---
stable_id: skills/github-skill-dadbodgeoff-drift-sse-resilience-8c48bbc6
type: skills
title: sse-resilience
summary: Redis-backed SSE stream management with stream registry, heartbeat
  monitoring, completion store for terminal events, and automatic orphan cleanup
  via background guardian process.
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-dadbodgeoff
  - github-repo-drift
source_url: https://raw.githubusercontent.com/dadbodgeoff/drift/main/drift v1
  depreciated/skills/sse-resilience/SKILL.md
license: ""
upstream_ref: https://github.com/dadbodgeoff/drift/blob/main/drift v1
  depreciated/skills/sse-resilience/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:16:59.624Z
content_sha256: aac5d2e3719a15f8d764114ac9ccc88c8e66911735120681d88fa9237bc57c82
---
|/data/github-skill-dadbodgeoff-drift-sse-resilience-8c48bbc6|

---
stable_id: skills/github-skill-danielmiessler-personal-ai-infrastructure-prompting
type: skills
title: Prompting
summary: Meta-prompting system for dynamic prompt generation using templates,
  standards, and patterns. USE WHEN meta-prompting, template generation, prompt
  optimization, or programmatic prompt composition.
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-danielmiessler
  - github-repo-personal_ai_infrastructure
source_url: https://raw.githubusercontent.com/danielmiessler/Personal_AI_Infrastructure/main/Releases/v2.5/.claude/skills/Prompting/SKILL.md
license: ""
upstream_ref: https://github.com/danielmiessler/Personal_AI_Infrastructure/blob/main/Releases/v2.5/.claude/skills/Prompting/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:16:59.702Z
content_sha256: 14b3597b4b5db371a3aa684276125701440d6910d1e17003fcda006227f24de5
---
|/data/github-skill-danielmiessler-personal-ai-infrastructure-prompting|

---
stable_id: skills/github-skill-danielmiessler-personal-ai-infrastructure-prompting-22ec27f8
type: skills
title: Prompting
summary: Meta-prompting system for dynamic prompt generation using templates,
  standards, and patterns. USE WHEN meta-prompting, template generation, prompt
  optimization, or programmatic prompt composition.
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-danielmiessler
  - github-repo-personal_ai_infrastructure
source_url: https://raw.githubusercontent.com/danielmiessler/Personal_AI_Infrastructure/main/Releases/v3.0/.claude/skills/Prompting/SKILL.md
license: ""
upstream_ref: https://github.com/danielmiessler/Personal_AI_Infrastructure/blob/main/Releases/v3.0/.claude/skills/Prompting/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:16:59.780Z
content_sha256: 14b3597b4b5db371a3aa684276125701440d6910d1e17003fcda006227f24de5
---
|/data/github-skill-danielmiessler-personal-ai-infrastructure-prompting-22ec27f8|

---
stable_id: skills/github-skill-davepoon-buildwithclaude-content-research-writer
type: skills
title: content-research-writer
summary: Assists in writing high-quality content by conducting research, adding
  citations, improving hooks, iterating on outlines, and providing real-time
  feedback on each section. Transforms your writing process from solo effort to
  collaborative partnership.
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-davepoon
  - github-repo-buildwithclaude
source_url: https://raw.githubusercontent.com/davepoon/buildwithclaude/main/plugins/all-skills/skills/content-research-writer/SKILL.md
license: ""
upstream_ref: https://github.com/davepoon/buildwithclaude/blob/main/plugins/all-skills/skills/content-research-writer/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:16:59.945Z
content_sha256: 1e2e8681cf7ba31550ac69151ec3fcb427559bcd3a92dc5e3b7070b7f4e076d3
---
|/data/github-skill-davepoon-buildwithclaude-content-research-writer|

---
stable_id: skills/github-skill-davila7-claude-code-templates-scientific-schematics
type: skills
title: scientific-schematics
summary: Create publication-quality scientific diagrams using Nano Banana Pro AI
  with smart iterative refinement. Uses Gemini 3 Pro for quality review. Only
  regenerates if quality is below threshold for your document type. Specialized
  in neural network architectures, system diagrams, flowcharts, biological
  pathways, and complex scientific visualizations.
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-davila7
  - github-repo-claude-code-templates
source_url: https://raw.githubusercontent.com/davila7/claude-code-templates/main/cli-tool/components/skills/scientific/scientific-schematics/SKILL.md
license: ""
upstream_ref: https://github.com/davila7/claude-code-templates/blob/main/cli-tool/components/skills/scientific/scientific-schematics/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:00.015Z
content_sha256: 0ffbbb6c89e2a58b5d7fee718ab10db7ac663243eac22adb441722b278bd7da0
---
|/data/github-skill-davila7-claude-code-templates-scientific-schematics|

---
stable_id: skills/github-skill-davila7-claude-code-templates-writing-hookify-rules
type: skills
title: Writing Hookify Rules
summary: This skill should be used when the user asks to "create a hookify
  rule", "write a hook rule", "configure hookify", "add a hookify rule", or
  needs guidance on hookify rule syntax and patterns.
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-davila7
  - github-repo-claude-code-templates
source_url: https://raw.githubusercontent.com/davila7/claude-code-templates/main/cli-tool/components/skills/productivity/writing-rules/SKILL.md
license: ""
upstream_ref: https://github.com/davila7/claude-code-templates/blob/main/cli-tool/components/skills/productivity/writing-rules/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:00.090Z
content_sha256: cf7a6a0b92092f44c6532bd9af7189748a9c3b4d044005418230b08cc99ac55c
---
|/data/github-skill-davila7-claude-code-templates-writing-hookify-rules|

---
stable_id: skills/github-skill-elizaos-eliza-blucli
type: skills
title: blucli
summary: BluOS CLI (blu) for discovery, playback, grouping, and volume.
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-elizaos
  - github-repo-eliza
source_url: https://raw.githubusercontent.com/elizaOS/eliza/develop/packages/skills/skills/blucli/SKILL.md
license: ""
upstream_ref: https://github.com/elizaOS/eliza/blob/develop/packages/skills/skills/blucli/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:00.244Z
content_sha256: ff458cdfff63bc38a1764508d15b92086598c5b85ddb4f0946fb26527179e9ad
---
|/data/github-skill-elizaos-eliza-blucli|

---
stable_id: skills/github-skill-epicweb-dev-epic-stack-epic-ui-guidelines
type: skills
title: epic-ui-guidelines
summary: Guide on UI/UX guidelines, accessibility, and component usage for Epic Stack
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-epicweb-dev
  - github-repo-epic-stack
source_url: https://raw.githubusercontent.com/epicweb-dev/epic-stack/main/docs/skills/epic-ui-guidelines/SKILL.md
license: ""
upstream_ref: https://github.com/epicweb-dev/epic-stack/blob/main/docs/skills/epic-ui-guidelines/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:00.335Z
content_sha256: 74bcb9051bf6c222bb994885d81abe0c6b227bbf9913a48e6a594cfd1ff9bec9
---
|/data/github-skill-epicweb-dev-epic-stack-epic-ui-guidelines|

---
stable_id: skills/github-skill-jeffallan-claude-skills-websocket-engineer
type: skills
title: websocket-engineer
summary: Use when building real-time communication systems with WebSockets or
  Socket.IO. Invoke for bidirectional messaging, horizontal scaling with Redis,
  presence tracking, room management.
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-jeffallan
  - github-repo-claude-skills
source_url: https://raw.githubusercontent.com/Jeffallan/claude-skills/main/skills/websocket-engineer/SKILL.md
license: ""
upstream_ref: https://github.com/Jeffallan/claude-skills/blob/main/skills/websocket-engineer/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:00.490Z
content_sha256: 11461f743126147b1d82358b217f69300733b9a811c9b9120fadf3c78f111f53
---
|/data/github-skill-jeffallan-claude-skills-websocket-engineer|

---
stable_id: skills/github-skill-jeremylongshore-claude-code-plugins-plus-skills-code-documentation-analyzer
type: skills
title: code-documentation-analyzer
summary: >-
  Code Documentation Analyzer - Auto-activating skill for Technical
  Documentation.

  Triggers on: code documentation analyzer, code documentation analyzer

  Part of the Technical Documentation skill category.
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-jeremylongshore
  - github-repo-claude-code-plugins-plus-skills
source_url: https://raw.githubusercontent.com/jeremylongshore/claude-code-plugins-plus-skills/main/planned-skills/generated/17-technical-docs/code-documentation-analyzer/SKILL.md
license: ""
upstream_ref: https://github.com/jeremylongshore/claude-code-plugins-plus-skills/blob/main/planned-skills/generated/17-technical-docs/code-documentation-analyzer/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:00.577Z
content_sha256: da443a5413b629360e5026125dc2d6e310ba01769e7f382e58560996b6c5f1b5
---
|/data/github-skill-jeremylongshore-claude-code-plugins-plus-skills-code-documentation-analyzer|

---
stable_id: skills/github-skill-jeremylongshore-claude-code-plugins-plus-skills-juicebox-migration-deep-dive
type: skills
title: juicebox-migration-deep-dive
summary: >-
  Advanced Juicebox data migration strategies.

  Use when migrating from other recruiting platforms, performing bulk data
  imports,

  or implementing complex data transformation pipelines.

  Trigger with phrases like "juicebox data migration", "migrate to juicebox",

  "juicebox import", "juicebox bulk migration".
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-jeremylongshore
  - github-repo-claude-code-plugins-plus-skills
source_url: https://raw.githubusercontent.com/jeremylongshore/claude-code-plugins-plus-skills/main/plugins/saas-packs/juicebox-pack/skills/juicebox-migration-deep-dive/SKILL.md
license: ""
upstream_ref: https://github.com/jeremylongshore/claude-code-plugins-plus-skills/blob/main/plugins/saas-packs/juicebox-pack/skills/juicebox-migration-deep-dive/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:00.666Z
content_sha256: df1082e311e831ebf4ba31873eaa77f772f087c4ce1253ccaca6441e62a9edf5
---
|/data/github-skill-jeremylongshore-claude-code-plugins-plus-skills-juicebox-migration-deep-dive|

---
stable_id: skills/github-skill-jeremylongshore-claude-code-plugins-plus-skills-klingai-pricing-basics
type: skills
title: klingai-pricing-basics
summary: >-
  Manage understand Kling AI pricing, credits, and cost optimization. Use when
  budgeting or optimizing

  costs for video generation. Trigger with phrases like 'kling ai pricing',
  'klingai credits',

  'kling ai cost', 'klingai budget'.
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-jeremylongshore
  - github-repo-claude-code-plugins-plus-skills
source_url: https://raw.githubusercontent.com/jeremylongshore/claude-code-plugins-plus-skills/main/plugins/saas-packs/klingai-pack/skills/klingai-pricing-basics/SKILL.md
license: ""
upstream_ref: https://github.com/jeremylongshore/claude-code-plugins-plus-skills/blob/main/plugins/saas-packs/klingai-pack/skills/klingai-pricing-basics/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:00.757Z
content_sha256: 766625b1a1cf0203aa7a3e02410d4fb061b280e0bc46a0a755440d068feda795
---
|/data/github-skill-jeremylongshore-claude-code-plugins-plus-skills-klingai-pricing-basics|

---
stable_id: skills/github-skill-jeremylongshore-claude-code-plugins-plus-skills-langchain-core-workflow-a
type: skills
title: langchain-core-workflow-a
summary: |-
  Build LangChain chains and prompts for structured LLM workflows.
  Use when creating prompt templates, building LCEL chains,
  or implementing sequential processing pipelines.
  Trigger with phrases like "langchain chains", "langchain prompts",
  "LCEL workflow", "langchain pipeline", "prompt template".
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-jeremylongshore
  - github-repo-claude-code-plugins-plus-skills
source_url: https://raw.githubusercontent.com/jeremylongshore/claude-code-plugins-plus-skills/main/plugins/saas-packs/langchain-pack/skills/langchain-core-workflow-a/SKILL.md
license: ""
upstream_ref: https://github.com/jeremylongshore/claude-code-plugins-plus-skills/blob/main/plugins/saas-packs/langchain-pack/skills/langchain-core-workflow-a/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:00.858Z
content_sha256: c0473fba93f5dcd029ee1d4d97cc0dc1cd5978ac93dae7472db2edad14f7c3af
---
|/data/github-skill-jeremylongshore-claude-code-plugins-plus-skills-langchain-core-workflow-a|

---
stable_id: skills/github-skill-jeremylongshore-claude-code-plugins-plus-skills-prisma-schema-helper
type: skills
title: prisma-schema-helper
summary: >-
  Configure with prisma schema helper operations. Auto-activating skill for
  Backend Development.

  Triggers on: prisma schema helper, prisma schema helper

  Part of the Backend Development skill category. Use when working with prisma
  schema helper functionality. Trigger with phrases like "prisma schema helper",
  "prisma helper", "prisma".
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-jeremylongshore
  - github-repo-claude-code-plugins-plus-skills
source_url: https://raw.githubusercontent.com/jeremylongshore/claude-code-plugins-plus-skills/main/skills/06-backend-dev/prisma-schema-helper/SKILL.md
license: ""
upstream_ref: https://github.com/jeremylongshore/claude-code-plugins-plus-skills/blob/main/skills/06-backend-dev/prisma-schema-helper/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:00.950Z
content_sha256: 7c52d6502e674073ecae1cfad98d9bfec42a0ab88559e9c14b3142e65b75af4c
---
|/data/github-skill-jeremylongshore-claude-code-plugins-plus-skills-prisma-schema-helper|

---
stable_id: skills/github-skill-jeremylongshore-claude-code-plugins-plus-skills-soc2-compliance-checker
type: skills
title: soc2-compliance-checker
summary: |-
  Soc2 Compliance Checker - Auto-activating skill for Security Advanced.
  Triggers on: soc2 compliance checker, soc2 compliance checker
  Part of the Security Advanced skill category.
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-jeremylongshore
  - github-repo-claude-code-plugins-plus-skills
source_url: https://raw.githubusercontent.com/jeremylongshore/claude-code-plugins-plus-skills/main/planned-skills/generated/04-security-advanced/soc2-compliance-checker/SKILL.md
license: ""
upstream_ref: https://github.com/jeremylongshore/claude-code-plugins-plus-skills/blob/main/planned-skills/generated/04-security-advanced/soc2-compliance-checker/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:01.043Z
content_sha256: a3fc062feffc0b2a0683c9d9736f60ce293dbf649c7aeb68d9d6814756b70875
---
|/data/github-skill-jeremylongshore-claude-code-plugins-plus-skills-soc2-compliance-checker|

---
stable_id: skills/github-skill-jeremylongshore-claude-code-plugins-plus-skills-twinmind-security-basics
type: skills
title: twinmind-security-basics
summary: |-
  Implement security best practices for TwinMind integrations.
  Use when securing API keys, configuring privacy settings,
  or implementing data protection for meeting recordings.
  Trigger with phrases like "twinmind security", "secure twinmind",
  "twinmind privacy", "protect twinmind data", "twinmind api key security".
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-jeremylongshore
  - github-repo-claude-code-plugins-plus-skills
source_url: https://raw.githubusercontent.com/jeremylongshore/claude-code-plugins-plus-skills/main/plugins/saas-packs/twinmind-pack/skills/twinmind-security-basics/SKILL.md
license: ""
upstream_ref: https://github.com/jeremylongshore/claude-code-plugins-plus-skills/blob/main/plugins/saas-packs/twinmind-pack/skills/twinmind-security-basics/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:01.124Z
content_sha256: 75c0b3da46c6c0ecc72ac7cb84bc7719bef72c1929cb626c38404e9be96202db
---
|/data/github-skill-jeremylongshore-claude-code-plugins-plus-skills-twinmind-security-basics|

---
stable_id: skills/github-skill-jeremylongshore-claude-code-plugins-plus-skills-vercel-upgrade-migration
type: skills
title: vercel-upgrade-migration
summary: >-
  Execute analyze, plan, and execute Vercel SDK upgrades with breaking change
  detection.

  Use when upgrading Vercel SDK versions, detecting deprecations,

  or migrating to new API versions.

  Trigger with phrases like "upgrade vercel", "vercel migration",

  "vercel breaking changes", "update vercel SDK", "analyze vercel version".
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-jeremylongshore
  - github-repo-claude-code-plugins-plus-skills
source_url: https://raw.githubusercontent.com/jeremylongshore/claude-code-plugins-plus-skills/main/plugins/saas-packs/vercel-pack/skills/vercel-upgrade-migration/SKILL.md
license: ""
upstream_ref: https://github.com/jeremylongshore/claude-code-plugins-plus-skills/blob/main/plugins/saas-packs/vercel-pack/skills/vercel-upgrade-migration/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:01.202Z
content_sha256: 7780a3cba0b7e6a40ad75a4385d36755ff7a9878b7f037e130a342a0d1449211
---
|/data/github-skill-jeremylongshore-claude-code-plugins-plus-skills-vercel-upgrade-migration|

---
stable_id: skills/github-skill-jeremylongshore-claude-code-plugins-plus-skills-websocket-client-creator
type: skills
title: websocket-client-creator
summary: >-
  Create websocket client creator operations. Auto-activating skill for API
  Integration.

  Triggers on: websocket client creator, websocket client creator

  Part of the API Integration skill category. Use when working with websocket
  client creator functionality. Trigger with phrases like "websocket client
  creator", "websocket creator", "websocket".
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-jeremylongshore
  - github-repo-claude-code-plugins-plus-skills
source_url: https://raw.githubusercontent.com/jeremylongshore/claude-code-plugins-plus-skills/main/skills/16-api-integration/websocket-client-creator/SKILL.md
license: ""
upstream_ref: https://github.com/jeremylongshore/claude-code-plugins-plus-skills/blob/main/skills/16-api-integration/websocket-client-creator/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:01.301Z
content_sha256: ab8c99b15d77cc8fdcf284afec72cac2906494e6d9a0f04c04cf5b583451cb61
---
|/data/github-skill-jeremylongshore-claude-code-plugins-plus-skills-websocket-client-creator|

---
stable_id: skills/github-skill-k-dense-ai-claude-scientific-skills-pdf
type: skills
title: pdf
summary: PDF manipulation toolkit. Extract text/tables, create PDFs,
  merge/split, fill forms, for programmatic document processing and analysis.
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-k-dense-ai
  - github-repo-claude-scientific-skills
source_url: https://raw.githubusercontent.com/K-Dense-AI/claude-scientific-skills/main/scientific-skills/document-skills/pdf/SKILL.md
license: ""
upstream_ref: https://github.com/K-Dense-AI/claude-scientific-skills/blob/main/scientific-skills/document-skills/pdf/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:01.368Z
content_sha256: aac690847982c5adb514a4f7f636c28bf51ee808dc4d56ed333e31c85c528854
---
|/data/github-skill-k-dense-ai-claude-scientific-skills-pdf|

---
stable_id: skills/github-skill-kevoreilly-capev2-cape-sandbox-developer
type: skills
title: cape-sandbox-developer
summary: Comprehensive guide for architecture, development patterns, and
  advanced troubleshooting in CAPE Sandbox (v2).
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-kevoreilly
  - github-repo-capev2
source_url: https://raw.githubusercontent.com/kevoreilly/CAPEv2/master/SKILLS.md
license: ""
upstream_ref: https://github.com/kevoreilly/CAPEv2/blob/master/SKILLS.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:01.453Z
content_sha256: 4e1a25951a698c4a157214082fa2e8f61d6bb3a3e87343a0e8424737b08a880e
---
|/data/github-skill-kevoreilly-capev2-cape-sandbox-developer|

---
stable_id: skills/github-skill-kyegomez-swarms-financial-analysis
type: skills
title: financial-analysis
summary: Perform comprehensive financial analysis including DCF modeling, ratio
  analysis, and financial statement evaluation for companies and investment
  opportunities
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-kyegomez
  - github-repo-swarms
source_url: https://raw.githubusercontent.com/kyegomez/swarms/master/examples/single_agent/agent_skill_examples/financial-analysis/SKILL.md
license: ""
upstream_ref: https://github.com/kyegomez/swarms/blob/master/examples/single_agent/agent_skill_examples/financial-analysis/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:01.546Z
content_sha256: e166d6d628cb342ad09d3cec892f07ab29a3f3d26f8931251b3b5abf30f0260b
---
|/data/github-skill-kyegomez-swarms-financial-analysis|

---
stable_id: skills/github-skill-longbridge-gpui-component-generate-component-story
type: skills
title: generate-component-story
summary: Create story examples for components. Use when writing stories,
  creating examples, or demonstrating component usage.
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-longbridge
  - github-repo-gpui-component
source_url: https://raw.githubusercontent.com/longbridge/gpui-component/main/.claude/skills/generate-component-story/SKILL.md
license: ""
upstream_ref: https://github.com/longbridge/gpui-component/blob/main/.claude/skills/generate-component-story/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:01.760Z
content_sha256: e2f3b32391855612eb6c3f58671f0a539f5568ed0af9283e9d03bcef88a9d7aa
---
|/data/github-skill-longbridge-gpui-component-generate-component-story|

---
stable_id: skills/github-skill-luongnv89-claude-howto-brand-voice-consistency
type: skills
title: brand-voice-consistency
summary: Ensure all communication matches brand voice and tone guidelines. Use
  when creating marketing copy, customer communications, public-facing content,
  or when users mention brand voice, tone, or writing style.
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-luongnv89
  - github-repo-claude-howto
source_url: https://raw.githubusercontent.com/luongnv89/claude-howto/main/03-skills/brand-voice/SKILL.md
license: ""
upstream_ref: https://github.com/luongnv89/claude-howto/blob/main/03-skills/brand-voice/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:01.849Z
content_sha256: bc046aafab458653f8e099866e06b904517a58aa99e69d4f116484df238fe1e9
---
|/data/github-skill-luongnv89-claude-howto-brand-voice-consistency|

---
stable_id: skills/github-skill-openai-openai-agents-python-pr-draft-summary
type: skills
title: pr-draft-summary
summary: Create a PR title and draft description after substantive code changes
  are finished. Trigger when wrapping up a moderate-or-larger change (runtime
  code, tests, build config, docs with behavior impact) and you need the
  PR-ready summary block with change summary plus PR draft text.
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-openai
  - github-repo-openai-agents-python
source_url: https://raw.githubusercontent.com/openai/openai-agents-python/main/.agents/skills/pr-draft-summary/SKILL.md
license: ""
upstream_ref: https://github.com/openai/openai-agents-python/blob/main/.agents/skills/pr-draft-summary/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:02.226Z
content_sha256: 7d4da99993c8a05e9cd84885cc15831f8c1c73f621f7cf5c3f62c127eb21ba3f
---
|/data/github-skill-openai-openai-agents-python-pr-draft-summary|

---
stable_id: skills/github-skill-openclaw-skills-ai-music-generation
type: skills
title: ai-music-generation
summary: >-
  Generate AI music and songs with Diffrythm, Tencent Song Generation via
  inference.sh CLI.

  Models: Diffrythm (fast song generation), Tencent Song Generation (full songs
  with vocals).

  Capabilities: text-to-music, song generation, instrumental, lyrics to song,
  soundtrack creation.

  Use for: background music, social media content, game soundtracks, podcasts,
  royalty-free music.

  Triggers: music generation, ai music, generate song, ai composer, text to
  music, song generator,

  create music with ai, suno alternative, udio alternative, ai song, ai
  soundtrack,

  generate soundtrack, ai jingle, music ai, beat generator
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-openclaw
  - github-repo-skills
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/okaris/ai-music-generation/SKILL.md
license: ""
upstream_ref: https://github.com/openclaw/skills/blob/main/skills/okaris/ai-music-generation/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:02.436Z
content_sha256: ae5c82e46512da4b4f969e5a7ac6e476421ce00e59e941cf04b56ce1715223ea
---
|/data/github-skill-openclaw-skills-ai-music-generation|

---
stable_id: skills/github-skill-openclaw-skills-bagman
type: skills
title: bagman
summary: Secure key management for AI agents. Use when handling private keys,
  API secrets, wallet credentials, or when building systems that need
  agent-controlled funds. Covers secure storage, session keys, leak prevention,
  and prompt injection defense.
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-openclaw
  - github-repo-skills
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/zscole/openclaw/SKILL.md
license: ""
upstream_ref: https://github.com/openclaw/skills/blob/main/skills/zscole/openclaw/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:02.551Z
content_sha256: d02c176b4386f397f1ad3911728c545060479464c4042b25545b62c83499b556
---
|/data/github-skill-openclaw-skills-bagman|

---
stable_id: skills/github-skill-openclaw-skills-book-detailing
type: skills
title: book-detailing
summary: Book detailing services through Lokuli MCP. Use when user needs to find
  and book detailing. Triggers on requests like "book a detailing", "find
  detailing near me", or any detailing service request.
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-openclaw
  - github-repo-skills
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/edwardrodriguez703-design/book-detailing/SKILL.md
license: ""
upstream_ref: https://github.com/openclaw/skills/blob/main/skills/edwardrodriguez703-design/book-detailing/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:02.650Z
content_sha256: 27ebdce0de5990a9ebb7282dff6a024086426c0f49ad59fe272fccfc82be86e5
---
|/data/github-skill-openclaw-skills-book-detailing|

---
stable_id: skills/github-skill-openclaw-skills-bounty-hunter
type: skills
title: bounty-hunter
summary: Find, evaluate, and submit online bounties and hackathons for prize
  money. Use when user mentions "bounties", "hackathon", "earn money",
  "Superteam Earn", "prize money", "submissions", "freelance bounties", or asks
  to find paid opportunities. Covers discovery, eligibility filtering, content
  drafting, and submission workflows.
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-openclaw
  - github-repo-skills
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/satoshi891102/bounty-hunter/SKILL.md
license: ""
upstream_ref: https://github.com/openclaw/skills/blob/main/skills/satoshi891102/bounty-hunter/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:02.877Z
content_sha256: 015f04b2cd35640982b74e71e29422eac0636c88fb9641c5806a08ee3b07ffd6
---
|/data/github-skill-openclaw-skills-bounty-hunter|

---
stable_id: skills/github-skill-openclaw-skills-bsc-impossible-finance
type: skills
title: bsc-impossible-finance
summary: BSC (Binance Smart Chain) trading on Impossible Finance DEX - wallet
  registration, swaps, discover tokens and pairs, funding.
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-openclaw
  - github-repo-skills
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/ketiyohanneschromaway/impossible-finance/skills.md
license: ""
upstream_ref: https://github.com/openclaw/skills/blob/main/skills/ketiyohanneschromaway/impossible-finance/skills.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:02.973Z
content_sha256: d24ec4fd6b781b42820bb78757254891d26ab6b0e7f65616575671bd452218b7
---
|/data/github-skill-openclaw-skills-bsc-impossible-finance|

---
stable_id: skills/github-skill-openclaw-skills-business-plan
type: skills
title: business-plan
summary: Write, structure, and update a business plan for a solopreneur. Use
  when creating a plan from scratch, updating an existing plan after a pivot or
  new phase, or preparing a plan to share with investors, partners, or even just
  to clarify your own strategy. Covers executive summary, market analysis,
  competitive positioning, revenue model, operations plan, financial
  projections, and risk assessment — all adapted for a one-person business.
  Trigger on "write a business plan", "business plan", "create my plan",
  "business plan template", "update my business plan", "plan for my business",
  "investor pitch plan".
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-openclaw
  - github-repo-skills
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/jk-0001/business-plan/SKILL.md
license: ""
upstream_ref: https://github.com/openclaw/skills/blob/main/skills/jk-0001/business-plan/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:03.068Z
content_sha256: 92236ce91a05cd06a791edcefba23213bb33648e67007a03d7d12a10b7a7a3a2
---
|/data/github-skill-openclaw-skills-business-plan|

---
stable_id: skills/github-skill-openclaw-skills-clawdchat
type: skills
title: clawdchat
summary: 深度抓取和分析 Moltbook（AI agents 社交网络），挖掘 AI Agents 关注的核心问题和解决方案，生成可视化分析报告。理解
  AI 社区的集体智慧，发现可复用的问题解决模式。
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-openclaw
  - github-repo-skills
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/lucasyao1985/clawdchat/skill.md
license: ""
upstream_ref: https://github.com/openclaw/skills/blob/main/skills/lucasyao1985/clawdchat/skill.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:03.172Z
content_sha256: 32c9d3c6feeb9227b1022db18f1680bd9808baae00cd9d72995f6251f1d0759b
---
|/data/github-skill-openclaw-skills-clawdchat|

---
stable_id: skills/github-skill-openclaw-skills-clawdhub-contributor
type: skills
title: clawdhub-contributor
summary: Contribute to the ClawdHub ecosystem by scouting unknown skills,
  reporting bugs, and sharing skill recipes. Three modes (passive/active/full)
  let you control how much you contribute.
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-openclaw
  - github-repo-skills
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/starbuck100/clawdhub-contributor/SKILL.md
license: ""
upstream_ref: https://github.com/openclaw/skills/blob/main/skills/starbuck100/clawdhub-contributor/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:03.288Z
content_sha256: e57f59343a82ce655ea8770f809192a186f5838973f20e985c1c4dad13cf8f7a
---
|/data/github-skill-openclaw-skills-clawdhub-contributor|

---
stable_id: skills/github-skill-openclaw-skills-clawgang
type: skills
title: clawgang
summary: "ClawGang social skill — lets your agent socialize on clawgang.ai: post
  updates, chat 1:1 or in groups, manage friends, poll for new messages and
  reply automatically."
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-openclaw
  - github-repo-skills
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/syslink/clawgang/SKILL.md
license: ""
upstream_ref: https://github.com/openclaw/skills/blob/main/skills/syslink/clawgang/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:03.396Z
content_sha256: c505beae8b72dbb7342e19e79f0848ed44929ef0f4990f1ddced0379c741bb87
---
|/data/github-skill-openclaw-skills-clawgang|

---
stable_id: skills/github-skill-openclaw-skills-crabwalk
type: skills
title: crabwalk
summary: Real-time companion monitor for OpenClaw agents
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-openclaw
  - github-repo-skills
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/luccast/public/skill.md
license: ""
upstream_ref: https://github.com/openclaw/skills/blob/main/skills/luccast/public/skill.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:03.494Z
content_sha256: e417b0d19b8420973cd6010e402e1a8b593f161e66fad3aee82389ab895e54fd
---
|/data/github-skill-openclaw-skills-crabwalk|

---
stable_id: skills/github-skill-openclaw-skills-journal
type: skills
title: Journal
summary: Build a personal journaling practice with prompts, reflection, and
  pattern discovery.
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-openclaw
  - github-repo-skills
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/ivangdavila/journal/SKILL.md
license: ""
upstream_ref: https://github.com/openclaw/skills/blob/main/skills/ivangdavila/journal/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:03.871Z
content_sha256: 7631d2dd175784f2c2f3b24f317bfaf6d42de61959bde2fcdb693af9edda281e
---
|/data/github-skill-openclaw-skills-journal|

---
stable_id: skills/github-skill-openclaw-skills-leak
type: skills
title: leak
summary: Compatibility stub for migrating from the legacy mixed leak skill to
  split hardened skills.
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-openclaw
  - github-repo-skills
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/eucalyptus-viminalis/leak/SKILL.md
license: ""
upstream_ref: https://github.com/openclaw/skills/blob/main/skills/eucalyptus-viminalis/leak/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:03.966Z
content_sha256: ceb4cb66c2cb3363b3c5a7d8cbde7ce15d0cb7e6f0095e581b5fbacbafe81b9f
---
|/data/github-skill-openclaw-skills-leak|

---
stable_id: skills/github-skill-openclaw-skills-moltpet
type: skills
title: moltpet
summary: Digital pets for AI agents. Register, claim your egg, and raise a pet
  by feeding it your daily moods.
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-openclaw
  - github-repo-skills
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/jcheese1/moltpet/skill.md
license: ""
upstream_ref: https://github.com/openclaw/skills/blob/main/skills/jcheese1/moltpet/skill.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:04.139Z
content_sha256: 1060e54b3c5e3082a961fbb4fefde314bee60aa8885af1cdae03667df2cfb116
---
|/data/github-skill-openclaw-skills-moltpet|

---
stable_id: skills/github-skill-openclaw-skills-octoclaw
type: skills
title: octoclaw
summary: Control OctoPrint 3D printer — monitor status, capture webcam
  snapshots, manage prints, analyze gcode, and detect errors. Use when the user
  asks about their 3D printer, print status, filament, temperatures, or wants to
  start/pause/cancel a print.
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-openclaw
  - github-repo-skills
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/peterhanily/octoclaw-print/SKILL.md
license: ""
upstream_ref: https://github.com/openclaw/skills/blob/main/skills/peterhanily/octoclaw-print/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:04.332Z
content_sha256: 435fe716ecbd98b102532d1f0fe2e19f27b4eaba0f0d19993c3e51ec6dee3628
---
|/data/github-skill-openclaw-skills-octoclaw|

---
stable_id: skills/github-skill-openclaw-skills-physics
type: skills
title: Physics
summary: Assist with physics from intuitive explanations to formal derivations
  at any level.
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-openclaw
  - github-repo-skills
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/ivangdavila/physics/SKILL.md
license: ""
upstream_ref: https://github.com/openclaw/skills/blob/main/skills/ivangdavila/physics/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:04.624Z
content_sha256: 5d4872e2dab3953a5f07228365e338f6105d64d82774b275ec3a1d14f2a2637c
---
|/data/github-skill-openclaw-skills-physics|

---
stable_id: skills/github-skill-openclaw-skills-qa-check
type: skills
title: qa-check
summary: Mandatory quality assurance for all dev work before publishing. Use
  BEFORE deploying any project to production. Validates build, tests browser
  functionality, checks mobile responsiveness, and ensures no broken
  links/images.
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-openclaw
  - github-repo-skills
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/gizmo-dev/qa-check/SKILL.md
license: ""
upstream_ref: https://github.com/openclaw/skills/blob/main/skills/gizmo-dev/qa-check/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:04.725Z
content_sha256: e1bf8c367727e10f770b6f72579c39076d5dc37e8df11dbd2de88ab59ccbafd1
---
|/data/github-skill-openclaw-skills-qa-check|

---
stable_id: skills/github-skill-openclaw-skills-seo-content-writer
type: skills
title: seo-content-writer
summary: Creates high-quality, SEO-optimized content that ranks in search
  engines. Applies on-page SEO best practices, keyword optimization, and content
  structure for maximum visibility and engagement.
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-openclaw
  - github-repo-skills
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/aaron-he-zhu/seo-content-writer/SKILL.md
license: ""
upstream_ref: https://github.com/openclaw/skills/blob/main/skills/aaron-he-zhu/seo-content-writer/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:04.827Z
content_sha256: 05ea7762fc5f79c39d8f4529a4e368be9f62d82a96b1ad433ded2948321137d9
---
|/data/github-skill-openclaw-skills-seo-content-writer|

---
stable_id: skills/github-skill-openclaw-skills-swelist
type: skills
title: swelist
summary: retrieves recently added technology internship and new‑graduate job postings.
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-openclaw
  - github-repo-skills
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/chenyuan99/swelist/SKILLS.md
license: ""
upstream_ref: https://github.com/openclaw/skills/blob/main/skills/chenyuan99/swelist/SKILLS.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:04.923Z
content_sha256: 3a6c65e8d92bbbcb71789ad4fbe48bba46fa24ecd38d0bcc1ae41b94bf866ee2
---
|/data/github-skill-openclaw-skills-swelist|

---
stable_id: skills/github-skill-openclaw-skills-tagclaw
type: skills
title: tagclaw
summary: The social network skill for AI agents on TagAI. Post, reply, like, and
  retweet.
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-openclaw
  - github-repo-skills
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/donut33-social/tagclaw/SKILLS.md
license: ""
upstream_ref: https://github.com/openclaw/skills/blob/main/skills/donut33-social/tagclaw/SKILLS.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:05.021Z
content_sha256: 2c24e7171443eab1ac6a5810df360575aa5af06f363a765dc9b122241da1ca6a
---
|/data/github-skill-openclaw-skills-tagclaw|

---
stable_id: skills/github-skill-openclaw-skills-vidu-video
type: skills
title: vidu-video
summary: 使用 Vidu Q3 Pro 模型生成视频。当用户想要文生视频、生成带音频的视频，或提到 vidu 时使用此 skill。
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-openclaw
  - github-repo-skills
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/hexiaochun/vidu-video/SKILL.md
license: ""
upstream_ref: https://github.com/openclaw/skills/blob/main/skills/hexiaochun/vidu-video/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:05.243Z
content_sha256: a768ddbecc35778fde974d963c3797a49466913f38ef4ae28c0d239417768a01
---
|/data/github-skill-openclaw-skills-vidu-video|

---
stable_id: skills/github-skill-prompt-security-clawsec-claw-release
type: skills
title: claw-release
summary: Release automation for Claw skills and website. Guides through version
  bumping, tagging, and release verification.
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-prompt-security
  - github-repo-clawsec
source_url: https://raw.githubusercontent.com/prompt-security/clawsec/main/skills/claw-release/SKILL.md
license: ""
upstream_ref: https://github.com/prompt-security/clawsec/blob/main/skills/claw-release/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:05.437Z
content_sha256: cda9f58b3be67876ba4a543d6192af60ea155c2102202340fdfc8770a848f07e
---
|/data/github-skill-prompt-security-clawsec-claw-release|

---
stable_id: skills/github-skill-quickwit-oss-quickwit-simple-pr
type: skills
title: simple-pr
summary: Create a simple PR from staged changes with an auto-generated commit message
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-quickwit-oss
  - github-repo-quickwit
source_url: https://raw.githubusercontent.com/quickwit-oss/quickwit/main/.claude/skills/simple-pr/SKILL.md
license: ""
upstream_ref: https://github.com/quickwit-oss/quickwit/blob/main/.claude/skills/simple-pr/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:05.524Z
content_sha256: 1cfa210ff5fcefe144f4968411f8656b9874aad4e79180e54847356cefe2f390
---
|/data/github-skill-quickwit-oss-quickwit-simple-pr|

---
stable_id: skills/github-skill-quickwit-oss-tantivy-simple-pr
type: skills
title: simple-pr
summary: Create a simple PR from staged changes with an auto-generated commit message
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-quickwit-oss
  - github-repo-tantivy
source_url: https://raw.githubusercontent.com/quickwit-oss/tantivy/main/.claude/skills/simple-pr/SKILL.md
license: ""
upstream_ref: https://github.com/quickwit-oss/tantivy/blob/main/.claude/skills/simple-pr/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:05.605Z
content_sha256: 1cfa210ff5fcefe144f4968411f8656b9874aad4e79180e54847356cefe2f390
---
|/data/github-skill-quickwit-oss-tantivy-simple-pr|

---
stable_id: skills/github-skill-sickn33-antigravity-awesome-skills-hubspot-integration
type: skills
title: hubspot-integration
summary: "Expert patterns for HubSpot CRM integration including OAuth
  authentication, CRM objects, associations, batch operations, webhooks, and
  custom objects. Covers Node.js and Python SDKs. Use when: hubs..."
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-sickn33
  - github-repo-antigravity-awesome-skills
source_url: https://raw.githubusercontent.com/sickn33/antigravity-awesome-skills/main/skills/hubspot-integration/SKILL.md
license: ""
upstream_ref: https://github.com/sickn33/antigravity-awesome-skills/blob/main/skills/hubspot-integration/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:05.770Z
content_sha256: 5bdee6583ff71931e8e3fe04183260b28ece6e93d14328e57b074747aa9f0d3d
---
|/data/github-skill-sickn33-antigravity-awesome-skills-hubspot-integration|

---
stable_id: skills/github-skill-tencentblueking-bk-bcs-node-js
type: skills
title: Node.js 安全审查
summary: 检查 RCE、SSRF、SQL 注入、路径穿越等安全问题，支持 Express/Koa/NestJS
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-tencentblueking
  - github-repo-bk-bcs
source_url: https://raw.githubusercontent.com/TencentBlueKing/bk-bcs/master/bcs-services/bcs-project-manager/.cursor/skills/nodejs-security-check/SKILL.md
license: ""
upstream_ref: https://github.com/TencentBlueKing/bk-bcs/blob/master/bcs-services/bcs-project-manager/.cursor/skills/nodejs-security-check/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:06.011Z
content_sha256: 311c55532125c7d080151847da11210f1e63997265d2d7a3103dc8c81da72a1d
---
|/data/github-skill-tencentblueking-bk-bcs-node-js|

---
stable_id: skills/github-skill-tencentblueking-bk-bcs-skill
type: skills
title: 长列表虚拟滚动优化方案
summary: 处理超过 1000 条数据的大型列表渲染时的性能优化方案，包含定高和不定高两种策略。
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-tencentblueking
  - github-repo-bk-bcs
source_url: https://raw.githubusercontent.com/TencentBlueKing/bk-bcs/master/bcs-services/bcs-project-manager/.cursor/skills/virtual-list/SKILL.md
license: ""
upstream_ref: https://github.com/TencentBlueKing/bk-bcs/blob/master/bcs-services/bcs-project-manager/.cursor/skills/virtual-list/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:06.104Z
content_sha256: 915a6b40fc01129073647d2139d73154189768f622e1c3c4d652d10ab63526f0
---
|/data/github-skill-tencentblueking-bk-bcs-skill|

---
stable_id: skills/github-skill-vllm-project-vllm-ascend-vllm-ascend-model-adapter
type: skills
title: vllm-ascend-model-adapter
summary: Adapt and debug existing or new models for vLLM on Ascend NPU.
  Implement in /vllm-workspace/vllm and /vllm-workspace/vllm-ascend, validate
  via direct vllm serve from /workspace, and deliver one signed commit in the
  current repo.
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-vllm-project
  - github-repo-vllm-ascend
source_url: https://raw.githubusercontent.com/vllm-project/vllm-ascend/main/.agents/skills/vllm-ascend-model-adapter/SKILL.md
license: ""
upstream_ref: https://github.com/vllm-project/vllm-ascend/blob/main/.agents/skills/vllm-ascend-model-adapter/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:06.188Z
content_sha256: 0ef9f14f2e7d1fe6c6967644158504542248965d1870b1a473fb74173ad1b119
---
|/data/github-skill-vllm-project-vllm-ascend-vllm-ascend-model-adapter|

---
stable_id: skills/ibelick-baseline-ui
type: skills
title: ibelick-baseline-ui
summary: >-
  ---

  name: baseline-ui

  description: Validates animation durations, enforces typography scale, checks
  component accessibility, and prevents layout anti-patterns in Tailwind CSS
  projects. Use when building UI components, reviewing CSS utilities, styling
  React views, or enforcing design consistency.

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
github_stars: 902
github_forks: 39
github_is_organization: false
retrieved_at: 2026-03-03T07:17:06.289Z
content_sha256: 9bb2f868098a9d28ce7d10383039a28169d838cea6299f9df3706ecda7932949
---
|/data/ibelick-baseline-ui|

---
stable_id: skills/ibelick-fixing-accessibility
type: skills
title: ibelick-fixing-accessibility
summary: >-
  ---

  name: fixing-accessibility

  description: Audit and fix HTML accessibility issues including ARIA labels,
  keyboard navigation, focus management, color contrast, and form errors. Use
  when adding interactive controls, forms, dialogs, or reviewing WCAG
  compliance.

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
github_stars: 902
github_forks: 39
github_is_organization: false
retrieved_at: 2026-03-03T07:17:06.361Z
content_sha256: 549261e8a53b53a1a20c0ddbf736821e5fc0876ad82eee76e0efab8e9ee9dadf
---
|/data/ibelick-fixing-accessibility|

---
stable_id: skills/ibelick-fixing-metadata
type: skills
title: ibelick-fixing-metadata
summary: >-
  ---

  name: fixing-metadata

  description: >
    Audit and fix HTML metadata including page titles, meta descriptions, canonical URLs, Open Graph
    tags, Twitter cards, favicons, JSON-LD structured data, and robots directives. Use when adding
    SEO metadata, fixing social share previews, reviewing Open Graph tags, setting up canonical URLs,
    or shipping new pages that need correct meta tags.
  version: 1.0.1

  license: MIT

  ---
tags:
  - ibelick
  - source-ibelick-ui-skills
source_url: https://raw.githubusercontent.com/ibelick/ui-skills/main/skills/fixing-metadata/SKILL.md
license: ""
upstream_ref: https://github.com/ibelick/ui-skills/blob/main/skills/fixing-metadata/SKILL.md
github_stars: 902
github_forks: 39
github_is_organization: false
retrieved_at: 2026-03-03T07:17:06.436Z
content_sha256: b8315ff95a92dcfa48c33e2b4838a31d9448bd46252aab45726549ce865d6547
---
|/data/ibelick-fixing-metadata|

---
stable_id: skills/ibelick-fixing-motion-performance
type: skills
title: ibelick-fixing-motion-performance
summary: >-
  ---

  name: fixing-motion-performance

  description: Audit and fix animation performance issues including layout
  thrashing, compositor properties, scroll-linked motion, and blur effects. Use
  when animations stutter, transitions jank, or reviewing CSS/JS animation
  performance.

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
github_stars: 902
github_forks: 39
github_is_organization: false
retrieved_at: 2026-03-03T07:17:06.518Z
content_sha256: 0a2d654902bc04263ce68c8c02967ef03f17b482e855360a5463211d99d7baa9
---
|/data/ibelick-fixing-motion-performance|

---
stable_id: skills/knowledge-work-plugins-design-commands-accessibility
type: skills
title: accessibility
summary: Run a WCAG accessibility audit on a design or page
tags:
  - source-knowledge-work-plugins
  - plugin-design
  - plugin-component-commands
  - plugin-command
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/design/commands/accessibility.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/design/commands/accessibility.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:41.319Z
content_sha256: d23e6d82b1e58f0fadb995a5867752dc25a6e3cb5b3ea47342c836b930298958
---
|/data/knowledge-work-plugins-design-commands-accessibility|

---
stable_id: skills/knowledge-work-plugins-design-commands-critique
type: skills
title: critique
summary: Get structured design feedback on usability, hierarchy, and consistency
tags:
  - source-knowledge-work-plugins
  - plugin-design
  - plugin-component-commands
  - plugin-command
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/design/commands/critique.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/design/commands/critique.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:41.414Z
content_sha256: fa8f575a0be6fe0d47aab61706038c7925b2e50465ca037d4ea7bfab3a8ea3c5
---
|/data/knowledge-work-plugins-design-commands-critique|

---
stable_id: skills/knowledge-work-plugins-design-commands-design-system
type: skills
title: design-system
summary: Audit, document, or extend your design system
tags:
  - source-knowledge-work-plugins
  - plugin-design
  - plugin-component-commands
  - plugin-command
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/design/commands/design-system.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/design/commands/design-system.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:41.513Z
content_sha256: 8e711fff953e0c71cd3b32bdb1833d158c697802345d55618b67ba7d7fdee984
---
|/data/knowledge-work-plugins-design-commands-design-system|

---
stable_id: skills/knowledge-work-plugins-design-commands-handoff
type: skills
title: handoff
summary: Generate developer handoff specs from a design
tags:
  - source-knowledge-work-plugins
  - plugin-design
  - plugin-component-commands
  - plugin-command
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/design/commands/handoff.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/design/commands/handoff.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:41.710Z
content_sha256: 5e20f7411e88bdc1d9a70b5eda60991d328d23c40986f323bffa94885fd8ffac
---
|/data/knowledge-work-plugins-design-commands-handoff|

---
stable_id: skills/knowledge-work-plugins-design-commands-research-synthesis
type: skills
title: research-synthesis
summary: Synthesize user research into themes, insights, and recommendations
tags:
  - source-knowledge-work-plugins
  - plugin-design
  - plugin-component-commands
  - plugin-command
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/design/commands/research-synthesis.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/design/commands/research-synthesis.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:41.609Z
content_sha256: 2e171996404ab1696a72a0dd8940e34df27c71decccb7ce3b20cecbae6688201
---
|/data/knowledge-work-plugins-design-commands-research-synthesis|

---
stable_id: skills/knowledge-work-plugins-design-commands-ux-copy
type: skills
title: ux-copy
summary: Write or review UX copy — microcopy, error messages, empty states, CTAs
tags:
  - source-knowledge-work-plugins
  - plugin-design
  - plugin-component-commands
  - plugin-command
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/design/commands/ux-copy.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/design/commands/ux-copy.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:41.803Z
content_sha256: f895d3d68db2bfdb148c96548a8079e5fbad322f8ede87b512aaec1e6127bf06
---
|/data/knowledge-work-plugins-design-commands-ux-copy|

---
stable_id: skills/knowledge-work-plugins-design-skills-accessibility-review-skill
type: skills
title: accessibility-review
summary: Audit designs and code for WCAG 2.1 AA compliance. Trigger with "is
  this accessible", "accessibility check", "WCAG audit", "can screen readers use
  this", "color contrast", or when the user asks about making designs or code
  accessible to all users.
tags:
  - source-knowledge-work-plugins
  - plugin-design
  - plugin-component-skills
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/design/skills/accessibility-review/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/design/skills/accessibility-review/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:41.218Z
content_sha256: a3f61cf61fb47ad14095965460d64a663a4c6d53df32ca040b120e6eecc889de
---
|/data/knowledge-work-plugins-design-skills-accessibility-review-skill|

---
stable_id: skills/knowledge-work-plugins-design-skills-design-critique-skill
type: skills
title: design-critique
summary: Evaluate designs for usability, visual hierarchy, consistency, and
  adherence to design principles. Trigger with "what do you think of this
  design", "give me feedback on", "critique this", "review this mockup", or when
  the user shares a design and asks for opinions.
tags:
  - source-knowledge-work-plugins
  - plugin-design
  - plugin-component-skills
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/design/skills/design-critique/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/design/skills/design-critique/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:40.901Z
content_sha256: 008156c53a3bba2b8bc5893a4246c558067aa46e9f0d6d641132c64579019cb4
---
|/data/knowledge-work-plugins-design-skills-design-critique-skill|

---
stable_id: skills/knowledge-work-plugins-design-skills-design-handoff-skill
type: skills
title: design-handoff
summary: Create comprehensive developer handoff documentation from designs.
  Trigger with "handoff to engineering", "developer specs", "implementation
  notes", "design specs for developers", or when a design needs to be translated
  into detailed implementation guidance.
tags:
  - source-knowledge-work-plugins
  - plugin-design
  - plugin-component-skills
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/design/skills/design-handoff/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/design/skills/design-handoff/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:40.593Z
content_sha256: f46b416c17e5808fac0c6789679283659e87f4fbc21d3d3e601347ef185c265c
---
|/data/knowledge-work-plugins-design-skills-design-handoff-skill|

---
stable_id: skills/knowledge-work-plugins-design-skills-design-system-management-skill
type: skills
title: design-system-management
summary: Manage design tokens, component libraries, and pattern documentation.
  Trigger with "design system", "component library", "design tokens", "style
  guide", or when the user asks about maintaining consistency across designs.
tags:
  - source-knowledge-work-plugins
  - plugin-design
  - plugin-component-skills
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/design/skills/design-system-management/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/design/skills/design-system-management/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:40.995Z
content_sha256: 2e80d05162548b27396601e8a7160206dbf8513954108777776dc8a69e5beca7
---
|/data/knowledge-work-plugins-design-skills-design-system-management-skill|

---
stable_id: skills/knowledge-work-plugins-design-skills-user-research-skill
type: skills
title: user-research
summary: Plan, conduct, and synthesize user research. Trigger with "user
  research plan", "interview guide", "usability test", "survey design",
  "research questions", or when the user needs help with any aspect of
  understanding their users through research.
tags:
  - source-knowledge-work-plugins
  - plugin-design
  - plugin-component-skills
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/design/skills/user-research/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/design/skills/user-research/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:41.107Z
content_sha256: fa18fc13d0f44aa869102962ef9466417ade726d659465195a40fbcf08cee156
---
|/data/knowledge-work-plugins-design-skills-user-research-skill|

---
stable_id: skills/knowledge-work-plugins-design-skills-ux-writing-skill
type: skills
title: ux-writing
summary: Write effective microcopy for user interfaces. Trigger with "write copy
  for", "help with UX copy", "what should this button say", "error message for",
  "empty state copy", or when the user needs help with any interface text.
tags:
  - source-knowledge-work-plugins
  - plugin-design
  - plugin-component-skills
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/design/skills/ux-writing/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/design/skills/ux-writing/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:40.794Z
content_sha256: e7feb80fe4d66bdc4debf40afa5afefd694f7e5b3b64b8ce57d3190ee8715012
---
|/data/knowledge-work-plugins-design-skills-ux-writing-skill|

---
stable_id: skills/knowledge-work-plugins-engineering-commands-architecture
type: skills
title: architecture
summary: Create or evaluate an architecture decision record (ADR)
tags:
  - source-knowledge-work-plugins
  - plugin-engineering
  - plugin-component-commands
  - plugin-command
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/engineering/commands/architecture.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/engineering/commands/architecture.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:45.286Z
content_sha256: 8ac98b1b1d5d931eb74c8ad7198513b9f03d6db59ac55465f05d5cf935d5bb3a
---
|/data/knowledge-work-plugins-engineering-commands-architecture|

---
stable_id: skills/knowledge-work-plugins-engineering-commands-debug
type: skills
title: debug
summary: Structured debugging session — reproduce, isolate, diagnose, and fix
tags:
  - source-knowledge-work-plugins
  - plugin-engineering
  - plugin-component-commands
  - plugin-command
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/engineering/commands/debug.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/engineering/commands/debug.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:45.379Z
content_sha256: c88e6cbfbc3400d2989a53b9d2bfa2c2e45046e0c9fbbfef166f19458309cc11
---
|/data/knowledge-work-plugins-engineering-commands-debug|

---
stable_id: skills/knowledge-work-plugins-engineering-commands-deploy-checklist
type: skills
title: deploy-checklist
summary: Pre-deployment verification checklist
tags:
  - source-knowledge-work-plugins
  - plugin-engineering
  - plugin-component-commands
  - plugin-command
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/engineering/commands/deploy-checklist.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/engineering/commands/deploy-checklist.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:44.996Z
content_sha256: bf3236e2506e62958f25940b2b97a95d9dcde149a94f8b5cb3ed5e26642f6558
---
|/data/knowledge-work-plugins-engineering-commands-deploy-checklist|

---
stable_id: skills/knowledge-work-plugins-engineering-commands-incident
type: skills
title: incident
summary: Run an incident response workflow — triage, communicate, and write postmortem
tags:
  - source-knowledge-work-plugins
  - plugin-engineering
  - plugin-component-commands
  - plugin-command
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/engineering/commands/incident.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/engineering/commands/incident.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:45.468Z
content_sha256: 480ca02f022f2acf8dedfe4a7a28a11df1805ee18c90edd70423106981d2df71
---
|/data/knowledge-work-plugins-engineering-commands-incident|

---
stable_id: skills/knowledge-work-plugins-engineering-commands-review
type: skills
title: review
summary: Review code changes for security, performance, and correctness
tags:
  - source-knowledge-work-plugins
  - plugin-engineering
  - plugin-component-commands
  - plugin-command
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/engineering/commands/review.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/engineering/commands/review.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:45.089Z
content_sha256: b4870206136bc78f85a93f11005a2c037883e10ab794d7dda1306cf1a217cef7
---
|/data/knowledge-work-plugins-engineering-commands-review|

---
stable_id: skills/knowledge-work-plugins-engineering-commands-standup
type: skills
title: standup
summary: Generate a standup update from recent activity
tags:
  - source-knowledge-work-plugins
  - plugin-engineering
  - plugin-component-commands
  - plugin-command
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/engineering/commands/standup.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/engineering/commands/standup.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:45.187Z
content_sha256: 7646622d5141ce70455f543b47a517f2702920c3d277095cb4cb11c1f2b9ceed
---
|/data/knowledge-work-plugins-engineering-commands-standup|

---
stable_id: skills/knowledge-work-plugins-engineering-skills-code-review-skill
type: skills
title: code-review
summary: Review code for bugs, security vulnerabilities, performance issues, and
  maintainability. Trigger with "review this code", "check this PR", "look at
  this diff", "is this code safe?", or when the user shares code and asks for
  feedback.
tags:
  - source-knowledge-work-plugins
  - plugin-engineering
  - plugin-component-skills
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/engineering/skills/code-review/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/engineering/skills/code-review/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:44.509Z
content_sha256: 3612de8f2c897f98ad20a46f5e0c9f8c6f160873b1e7f44def0bb2ff96ee3451
---
|/data/knowledge-work-plugins-engineering-skills-code-review-skill|

---
stable_id: skills/knowledge-work-plugins-engineering-skills-documentation-skill
type: skills
title: documentation
summary: Write and maintain technical documentation. Trigger with "write docs
  for", "document this", "create a README", "write a runbook", "onboarding
  guide", or when the user needs help with any form of technical writing — API
  docs, architecture docs, or operational runbooks.
tags:
  - source-knowledge-work-plugins
  - plugin-engineering
  - plugin-component-skills
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/engineering/skills/documentation/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/engineering/skills/documentation/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:44.704Z
content_sha256: 1d469418f786a05be83d2a05f04d68788aeed584d13863a650f5ad73c6c4cf50
---
|/data/knowledge-work-plugins-engineering-skills-documentation-skill|

---
stable_id: skills/knowledge-work-plugins-engineering-skills-incident-response-skill
type: skills
title: incident-response
summary: Triage and manage production incidents. Trigger with "we have an
  incident", "production is down", "something is broken", "there's an outage",
  "SEV1", or when the user describes a production issue needing immediate
  response.
tags:
  - source-knowledge-work-plugins
  - plugin-engineering
  - plugin-component-skills
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/engineering/skills/incident-response/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/engineering/skills/incident-response/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:44.904Z
content_sha256: 798b5d9d56111dfbf7a908f768580a1d72f63e0d84bf8058804cb3d410aafcec
---
|/data/knowledge-work-plugins-engineering-skills-incident-response-skill|

---
stable_id: skills/knowledge-work-plugins-engineering-skills-system-design-skill
type: skills
title: system-design
summary: Design systems, services, and architectures. Trigger with "design a
  system for", "how should we architect", "system design for", "what's the right
  architecture for", or when the user needs help with API design, data modeling,
  or service boundaries.
tags:
  - source-knowledge-work-plugins
  - plugin-engineering
  - plugin-component-skills
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/engineering/skills/system-design/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/engineering/skills/system-design/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:44.809Z
content_sha256: 8f28eca99f2208872fc2483fcc93326b628f4f73116e91309a95e05da86a0ab5
---
|/data/knowledge-work-plugins-engineering-skills-system-design-skill|

---
stable_id: skills/knowledge-work-plugins-engineering-skills-tech-debt-skill
type: skills
title: tech-debt
summary: Identify, categorize, and prioritize technical debt. Trigger with "tech
  debt", "technical debt audit", "what should we refactor", "code health", or
  when the user asks about code quality, refactoring priorities, or maintenance
  backlog.
tags:
  - source-knowledge-work-plugins
  - plugin-engineering
  - plugin-component-skills
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/engineering/skills/tech-debt/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/engineering/skills/tech-debt/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:44.624Z
content_sha256: ed3b4b1450c0fd9b8dad17313b5a4fafd8e6947d380b79b36a2e8259f3b1df0f
---
|/data/knowledge-work-plugins-engineering-skills-tech-debt-skill|

---
stable_id: skills/knowledge-work-plugins-engineering-skills-testing-strategy-skill
type: skills
title: testing-strategy
summary: Design test strategies and test plans. Trigger with "how should we
  test", "test strategy for", "write tests for", "test plan", "what tests do we
  need", or when the user needs help with testing approaches, coverage, or test
  architecture.
tags:
  - source-knowledge-work-plugins
  - plugin-engineering
  - plugin-component-skills
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/engineering/skills/testing-strategy/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/engineering/skills/testing-strategy/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:44.399Z
content_sha256: 5c5e95830754bbdd838213fa05fc8f07523f591fd558fd3c86031ffd479f7a9e
---
|/data/knowledge-work-plugins-engineering-skills-testing-strategy-skill|

---
stable_id: skills/knowledge-work-plugins-human-resources-commands-comp-analysis
type: skills
title: comp-analysis
summary: Analyze compensation — benchmarking, band placement, and equity modeling
tags:
  - source-knowledge-work-plugins
  - plugin-human-resources
  - plugin-component-commands
  - plugin-command
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/human-resources/commands/comp-analysis.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/human-resources/commands/comp-analysis.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:44.293Z
content_sha256: 1e7a10b2ed7a1e7a02ac72528331f552c1bc2bbd3e17938d753f5d3d8d707726
---
|/data/knowledge-work-plugins-human-resources-commands-comp-analysis|

---
stable_id: skills/knowledge-work-plugins-human-resources-commands-draft-offer
type: skills
title: draft-offer
summary: Draft an offer letter with comp details and terms
tags:
  - source-knowledge-work-plugins
  - plugin-human-resources
  - plugin-component-commands
  - plugin-command
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/human-resources/commands/draft-offer.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/human-resources/commands/draft-offer.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:43.888Z
content_sha256: 4f434996e270970a3b1752f3a23afc917819451959d45e8d46125617441c9f28
---
|/data/knowledge-work-plugins-human-resources-commands-draft-offer|

---
stable_id: skills/knowledge-work-plugins-human-resources-commands-onboarding
type: skills
title: onboarding
summary: Generate an onboarding checklist and first-week plan for a new hire
tags:
  - source-knowledge-work-plugins
  - plugin-human-resources
  - plugin-component-commands
  - plugin-command
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/human-resources/commands/onboarding.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/human-resources/commands/onboarding.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:43.783Z
content_sha256: e9a429673d6545151c3a2aa11fc11d60486d9a21528186e7c29c3797db23826a
---
|/data/knowledge-work-plugins-human-resources-commands-onboarding|

---
stable_id: skills/knowledge-work-plugins-human-resources-commands-people-report
type: skills
title: people-report
summary: Generate headcount, attrition, diversity, or org health reports
tags:
  - source-knowledge-work-plugins
  - plugin-human-resources
  - plugin-component-commands
  - plugin-command
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/human-resources/commands/people-report.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/human-resources/commands/people-report.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:44.193Z
content_sha256: f6de2c402e61f79de5a510c3ba4df1fdfc7e4a20d22c5ecf9f4728c43849045e
---
|/data/knowledge-work-plugins-human-resources-commands-people-report|

---
stable_id: skills/knowledge-work-plugins-human-resources-commands-performance-review
type: skills
title: performance-review
summary: Structure a performance review with self-assessment, manager template,
  and calibration prep
tags:
  - source-knowledge-work-plugins
  - plugin-human-resources
  - plugin-component-commands
  - plugin-command
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/human-resources/commands/performance-review.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/human-resources/commands/performance-review.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:43.995Z
content_sha256: da1fa885161f5408074684b567018f95188561b509577dee1b5bf40dc7f1f3ef
---
|/data/knowledge-work-plugins-human-resources-commands-performance-review|

---
stable_id: skills/knowledge-work-plugins-human-resources-commands-policy-lookup
type: skills
title: policy-lookup
summary: Find and explain company policies
tags:
  - source-knowledge-work-plugins
  - plugin-human-resources
  - plugin-component-commands
  - plugin-command
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/human-resources/commands/policy-lookup.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/human-resources/commands/policy-lookup.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:44.097Z
content_sha256: 9a5d38f2fa17381c88df51f8294cf0fd38c6b731a6ee96bc5b0b1b4860067e34
---
|/data/knowledge-work-plugins-human-resources-commands-policy-lookup|

---
stable_id: skills/knowledge-work-plugins-human-resources-skills-compensation-benchmarking-skill
type: skills
title: compensation-benchmarking
summary: Benchmark compensation against market data. Trigger with "what should
  we pay", "comp benchmark", "market rate for", "salary range for", "is this
  offer competitive", or when the user needs help evaluating or setting
  compensation levels.
tags:
  - source-knowledge-work-plugins
  - plugin-human-resources
  - plugin-component-skills
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/human-resources/skills/compensation-benchmarking/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/human-resources/skills/compensation-benchmarking/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:43.390Z
content_sha256: 410353b37500334dbf475785f321735163c543e0ddeea705a04b47f0b3f9589a
---
|/data/knowledge-work-plugins-human-resources-skills-compensation-benchmarking-skill|

---
stable_id: skills/knowledge-work-plugins-human-resources-skills-employee-handbook-skill
type: skills
title: employee-handbook
summary: Answer questions about company policies, benefits, and procedures.
  Trigger with "what's our policy on", "how does PTO work", "benefits question",
  "expense policy", "remote work policy", or any question about company rules,
  perks, or procedures.
tags:
  - source-knowledge-work-plugins
  - plugin-human-resources
  - plugin-component-skills
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/human-resources/skills/employee-handbook/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/human-resources/skills/employee-handbook/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:43.491Z
content_sha256: c1a6d49a2c97643e0217aa8bfc5c693dcdab39862524bc28c9d2ebf2e32f8f8e
---
|/data/knowledge-work-plugins-human-resources-skills-employee-handbook-skill|

---
stable_id: skills/knowledge-work-plugins-human-resources-skills-interview-prep-skill
type: skills
title: interview-prep
summary: Create structured interview plans with competency-based questions and
  scorecards. Trigger with "interview plan for", "interview questions for", "how
  should we interview", "scorecard for", or when the user is preparing to
  interview candidates.
tags:
  - source-knowledge-work-plugins
  - plugin-human-resources
  - plugin-component-skills
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/human-resources/skills/interview-prep/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/human-resources/skills/interview-prep/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:43.187Z
content_sha256: c687311babdeccf086aa5f6d86dcbfc3a9d1b8bb7124f072450ffa4315d98c4c
---
|/data/knowledge-work-plugins-human-resources-skills-interview-prep-skill|

---
stable_id: skills/knowledge-work-plugins-human-resources-skills-org-planning-skill
type: skills
title: org-planning
summary: Headcount planning, org design, and team structure optimization.
  Trigger with "org planning", "headcount plan", "team structure", "reorg", "who
  should we hire next", or when the user is thinking about team size, reporting
  structure, or organizational design.
tags:
  - source-knowledge-work-plugins
  - plugin-human-resources
  - plugin-component-skills
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/human-resources/skills/org-planning/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/human-resources/skills/org-planning/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:43.587Z
content_sha256: b3c6e33d251487225485c7fe455586f0cd490b282d7e41054273fa60820891ea
---
|/data/knowledge-work-plugins-human-resources-skills-org-planning-skill|

---
stable_id: skills/knowledge-work-plugins-human-resources-skills-people-analytics-skill
type: skills
title: people-analytics
summary: Analyze workforce data — attrition, engagement, diversity, and
  productivity. Trigger with "attrition rate", "turnover analysis", "diversity
  metrics", "engagement data", "retention risk", or when the user wants to
  understand workforce trends from HR data.
tags:
  - source-knowledge-work-plugins
  - plugin-human-resources
  - plugin-component-skills
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/human-resources/skills/people-analytics/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/human-resources/skills/people-analytics/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:43.294Z
content_sha256: 1c802a3bc27f4f0476fd3016889ece7cd05f1a78eba9e9458f0b2e8e984d3b9e
---
|/data/knowledge-work-plugins-human-resources-skills-people-analytics-skill|

---
stable_id: skills/knowledge-work-plugins-human-resources-skills-recruiting-pipeline-skill
type: skills
title: recruiting-pipeline
summary: Track and manage recruiting pipeline stages. Trigger with "recruiting
  update", "candidate pipeline", "how many candidates", "hiring status", or when
  the user discusses sourcing, screening, interviewing, or extending offers.
tags:
  - source-knowledge-work-plugins
  - plugin-human-resources
  - plugin-component-skills
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/human-resources/skills/recruiting-pipeline/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/human-resources/skills/recruiting-pipeline/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:43.683Z
content_sha256: a00b442f701faa6eb65b8ecc8fcf375d5a33ec827b987ba8b04edaef0e90b92f
---
|/data/knowledge-work-plugins-human-resources-skills-recruiting-pipeline-skill|

---
stable_id: skills/knowledge-work-plugins-legal-commands-brief
type: skills
title: brief
summary: Generate contextual briefings for legal work — daily summary, topic
  research, or incident response
tags:
  - source-knowledge-work-plugins
  - plugin-legal
  - plugin-component-commands
  - plugin-command
  - category-uncategorized
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/legal/commands/brief.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/legal/commands/brief.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:22.568Z
content_sha256: 526269db619b06cba7a389c3889a912c10f32fb4c2d7d6c402239f1fc8ba3f63
---
|/data/knowledge-work-plugins-legal-commands-brief|

---
stable_id: skills/knowledge-work-plugins-legal-commands-compliance-check
type: skills
title: compliance-check
summary: Run a compliance check on a proposed action, product feature, or
  business initiative
tags:
  - source-knowledge-work-plugins
  - plugin-legal
  - plugin-component-commands
  - plugin-command
  - category-uncategorized
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/legal/commands/compliance-check.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/legal/commands/compliance-check.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:40.413Z
content_sha256: 01327059d0f66e057b9773a68203ff3cf4e5b7681f66a2de63009d74ed657b7f
---
|/data/knowledge-work-plugins-legal-commands-compliance-check|

---
stable_id: skills/knowledge-work-plugins-legal-commands-respond
type: skills
title: respond
summary: Generate a response to a common legal inquiry using configured templates
tags:
  - source-knowledge-work-plugins
  - plugin-legal
  - plugin-component-commands
  - plugin-command
  - category-uncategorized
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/legal/commands/respond.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/legal/commands/respond.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:22.482Z
content_sha256: 319c785cdee1fee1e16670710ce7307025c897653c834171d44c1cf517c06239
---
|/data/knowledge-work-plugins-legal-commands-respond|

---
stable_id: skills/knowledge-work-plugins-legal-commands-review-contract
type: skills
title: review-contract
summary: Review a contract against your organization's negotiation playbook —
  flag deviations, generate redlines, provide business impact analysis
tags:
  - source-knowledge-work-plugins
  - plugin-legal
  - plugin-component-commands
  - plugin-command
  - category-uncategorized
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/legal/commands/review-contract.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/legal/commands/review-contract.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:22.308Z
content_sha256: 39e25d43938f66325a8212c4dddac98dddbb1ff3832d56f7be021cbd66ebe3d7
---
|/data/knowledge-work-plugins-legal-commands-review-contract|

---
stable_id: skills/knowledge-work-plugins-legal-commands-signature-request
type: skills
title: signature-request
summary: Prepare and route a document for e-signature
tags:
  - source-knowledge-work-plugins
  - plugin-legal
  - plugin-component-commands
  - plugin-command
  - category-uncategorized
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/legal/commands/signature-request.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/legal/commands/signature-request.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:40.504Z
content_sha256: d962c334d4dede394be2a27afb1c7fc1305547f90bb3034f584d04008d476d4b
---
|/data/knowledge-work-plugins-legal-commands-signature-request|

---
stable_id: skills/knowledge-work-plugins-legal-commands-triage-nda
type: skills
title: triage-nda
summary: Rapidly triage an incoming NDA — classify as standard approval, counsel
  review, or full legal review
tags:
  - source-knowledge-work-plugins
  - plugin-legal
  - plugin-component-commands
  - plugin-command
  - category-uncategorized
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/legal/commands/triage-nda.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/legal/commands/triage-nda.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:22.134Z
content_sha256: 3f0d477de2a9adfe13ead52c65ba7d15024e5360bb12eb493fa92801009b9df2
---
|/data/knowledge-work-plugins-legal-commands-triage-nda|

---
stable_id: skills/knowledge-work-plugins-legal-commands-vendor-check
type: skills
title: vendor-check
summary: Check the status of existing agreements with a vendor across all
  connected systems
tags:
  - source-knowledge-work-plugins
  - plugin-legal
  - plugin-component-commands
  - plugin-command
  - category-uncategorized
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/legal/commands/vendor-check.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/legal/commands/vendor-check.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:22.395Z
content_sha256: 8a594343a16719db793c31cb67910a9a4596f2bb7aa713b0ee4d5f4830b1d015
---
|/data/knowledge-work-plugins-legal-commands-vendor-check|

---
stable_id: skills/knowledge-work-plugins-legal-skills-canned-responses-skill
type: skills
title: canned-responses
summary: Generate templated responses for common legal inquiries and identify
  when situations require individualized attention. Use when responding to
  routine legal questions — data subject requests, vendor inquiries, NDA
  requests, discovery holds — or when managing response templates.
tags:
  - source-knowledge-work-plugins
  - plugin-legal
  - plugin-component-skills
  - plugin-skill
  - category-uncategorized
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/legal/skills/canned-responses/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/legal/skills/canned-responses/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:21.952Z
content_sha256: e245cfd0612604f4a8c1e060124dc72aa1db829a65250b40e22d119f02570415
---
|/data/knowledge-work-plugins-legal-skills-canned-responses-skill|

---
stable_id: skills/knowledge-work-plugins-legal-skills-compliance-skill
type: skills
title: compliance
summary: Navigate privacy regulations (GDPR, CCPA), review DPAs, and handle data
  subject requests. Use when reviewing data processing agreements, responding to
  data subject access or deletion requests, assessing cross-border data transfer
  requirements, or evaluating privacy compliance.
tags:
  - source-knowledge-work-plugins
  - plugin-legal
  - plugin-component-skills
  - plugin-skill
  - category-uncategorized
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/legal/skills/compliance/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/legal/skills/compliance/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:21.750Z
content_sha256: e327e02605a40aacaa311eaf70a93aed19e530f6a108e8e2ed45246b4f1a4c80
---
|/data/knowledge-work-plugins-legal-skills-compliance-skill|

---
stable_id: skills/knowledge-work-plugins-legal-skills-contract-review-skill
type: skills
title: contract-review
summary: Review contracts against your organization's negotiation playbook,
  flagging deviations and generating redline suggestions. Use when reviewing
  vendor contracts, customer agreements, or any commercial agreement where you
  need clause-by-clause analysis against standard positions.
tags:
  - source-knowledge-work-plugins
  - plugin-legal
  - plugin-component-skills
  - plugin-skill
  - category-uncategorized
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/legal/skills/contract-review/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/legal/skills/contract-review/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:22.042Z
content_sha256: a81446e3dc73c8295fc493fe5e6cb56946c57c2f4eefcaf16efe8ff0c7efca0a
---
|/data/knowledge-work-plugins-legal-skills-contract-review-skill|

---
stable_id: skills/knowledge-work-plugins-legal-skills-legal-risk-assessment-skill
type: skills
title: legal-risk-assessment
summary: Assess and classify legal risks using a severity-by-likelihood
  framework with escalation criteria. Use when evaluating contract risk,
  assessing deal exposure, classifying issues by severity, or determining
  whether a matter needs senior counsel or outside legal review.
tags:
  - source-knowledge-work-plugins
  - plugin-legal
  - plugin-component-skills
  - plugin-skill
  - category-uncategorized
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/legal/skills/legal-risk-assessment/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/legal/skills/legal-risk-assessment/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:21.589Z
content_sha256: 9f7985e3a98ac8419b52067cdaa1b72f754fa38c20489e7f0bf9de36347d4d89
---
|/data/knowledge-work-plugins-legal-skills-legal-risk-assessment-skill|

---
stable_id: skills/knowledge-work-plugins-legal-skills-meeting-briefing-skill
type: skills
title: meeting-briefing
summary: Prepare structured briefings for meetings with legal relevance and
  track resulting action items. Use when preparing for contract negotiations,
  board meetings, compliance reviews, or any meeting where legal context,
  background research, or action tracking is needed.
tags:
  - source-knowledge-work-plugins
  - plugin-legal
  - plugin-component-skills
  - plugin-skill
  - category-uncategorized
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/legal/skills/meeting-briefing/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/legal/skills/meeting-briefing/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:21.504Z
content_sha256: 4d19bc2ddb2138d1b306b150c5d0900ce0a398d5ab690b8eba8101ef33d98baa
---
|/data/knowledge-work-plugins-legal-skills-meeting-briefing-skill|

---
stable_id: skills/knowledge-work-plugins-legal-skills-nda-triage-skill
type: skills
title: nda-triage
summary: Screen incoming NDAs and classify them as GREEN (standard), YELLOW
  (needs review), or RED (significant issues). Use when a new NDA comes in from
  sales or business development, when assessing NDA risk level, or when deciding
  whether an NDA needs full counsel review.
tags:
  - source-knowledge-work-plugins
  - plugin-legal
  - plugin-component-skills
  - plugin-skill
  - category-uncategorized
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/legal/skills/nda-triage/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/legal/skills/nda-triage/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:21.668Z
content_sha256: 01c4636b30c6f6f0ae06f0a8bdb504a8a7b0a0763836deada48ea705a63e0710
---
|/data/knowledge-work-plugins-legal-skills-nda-triage-skill|

---
stable_id: skills/knowledge-work-plugins-operations-commands-capacity-plan
type: skills
title: capacity-plan
summary: Plan resource capacity — workload analysis and utilization forecasting
tags:
  - source-knowledge-work-plugins
  - plugin-operations
  - plugin-component-commands
  - plugin-command
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/operations/commands/capacity-plan.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/operations/commands/capacity-plan.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:43.097Z
content_sha256: 2d5b5ac5082ec5b3581c56a33e4b7995e7d3ee3dabbb560c9b566931102afee2
---
|/data/knowledge-work-plugins-operations-commands-capacity-plan|

---
stable_id: skills/knowledge-work-plugins-operations-commands-change-request
type: skills
title: change-request
summary: Create a change management request with impact analysis and rollback plan
tags:
  - source-knowledge-work-plugins
  - plugin-operations
  - plugin-component-commands
  - plugin-command
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/operations/commands/change-request.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/operations/commands/change-request.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:42.797Z
content_sha256: b5a81fa004c552b2f636e93e85ceb383e23fbb8c82217f8f67c4ea9a343c7f0c
---
|/data/knowledge-work-plugins-operations-commands-change-request|

---
stable_id: skills/knowledge-work-plugins-operations-commands-process-doc
type: skills
title: process-doc
summary: Document a business process — flowcharts, RACI, and SOPs
tags:
  - source-knowledge-work-plugins
  - plugin-operations
  - plugin-component-commands
  - plugin-command
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/operations/commands/process-doc.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/operations/commands/process-doc.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:42.699Z
content_sha256: d2aea0b8c5e867bcabf8417838d36991d3a790947b56a7a44be52e2098987c01
---
|/data/knowledge-work-plugins-operations-commands-process-doc|

---
stable_id: skills/knowledge-work-plugins-operations-commands-runbook
type: skills
title: runbook
summary: Create or update an operational runbook
tags:
  - source-knowledge-work-plugins
  - plugin-operations
  - plugin-component-commands
  - plugin-command
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/operations/commands/runbook.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/operations/commands/runbook.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:42.612Z
content_sha256: d33cc0377d092f0ee0a4aafcd38946029a44bfa80fad9e93a03de35df80197d3
---
|/data/knowledge-work-plugins-operations-commands-runbook|

---
stable_id: skills/knowledge-work-plugins-operations-commands-status-report
type: skills
title: status-report
summary: Generate a status report with KPIs, risks, and action items
tags:
  - source-knowledge-work-plugins
  - plugin-operations
  - plugin-component-commands
  - plugin-command
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/operations/commands/status-report.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/operations/commands/status-report.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:42.916Z
content_sha256: e83c918cbf9d0ddcbb55877473d672092e8ba360a566a0e569c560441e7401ed
---
|/data/knowledge-work-plugins-operations-commands-status-report|

---
stable_id: skills/knowledge-work-plugins-operations-commands-vendor-review
type: skills
title: vendor-review
summary: Evaluate a vendor — cost analysis, risk assessment, and recommendation
tags:
  - source-knowledge-work-plugins
  - plugin-operations
  - plugin-component-commands
  - plugin-command
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/operations/commands/vendor-review.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/operations/commands/vendor-review.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:43.001Z
content_sha256: f69bd58fb7b34f3cbf84cf7b5ae693746230fcea4cfd42d11ce1a06ddf59809f
---
|/data/knowledge-work-plugins-operations-commands-vendor-review|

---
stable_id: skills/knowledge-work-plugins-operations-skills-change-management-skill
type: skills
title: change-management
summary: Plan and execute organizational or technical changes. Trigger with
  "we're changing", "rolling out", "migration plan", "how do we communicate this
  change", "change management plan", or when the user is planning a change that
  affects people, processes, or systems.
tags:
  - source-knowledge-work-plugins
  - plugin-operations
  - plugin-component-skills
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/operations/skills/change-management/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/operations/skills/change-management/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:42.323Z
content_sha256: 544bc14d1559ec17bd5a837c9290712df80e72389cabaf81af0e461362103472
---
|/data/knowledge-work-plugins-operations-skills-change-management-skill|

---
stable_id: skills/knowledge-work-plugins-operations-skills-compliance-tracking-skill
type: skills
title: compliance-tracking
summary: Track compliance requirements and audit readiness. Trigger with
  "compliance", "audit prep", "SOC 2", "ISO 27001", "GDPR", "regulatory
  requirement", or when the user needs help tracking, preparing for, or
  documenting compliance activities.
tags:
  - source-knowledge-work-plugins
  - plugin-operations
  - plugin-component-skills
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/operations/skills/compliance-tracking/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/operations/skills/compliance-tracking/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:42.511Z
content_sha256: 644d393abdfddc8c37f7a7804f601e7bbd476e95571e6dcb4d916e478ba8ebd5
---
|/data/knowledge-work-plugins-operations-skills-compliance-tracking-skill|

---
stable_id: skills/knowledge-work-plugins-operations-skills-process-optimization-skill
type: skills
title: process-optimization
summary: Analyze and improve business processes. Trigger with "this process is
  slow", "how can we improve", "streamline this workflow", "too many steps",
  "bottleneck", or when the user describes an inefficient process they want to
  fix.
tags:
  - source-knowledge-work-plugins
  - plugin-operations
  - plugin-component-skills
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/operations/skills/process-optimization/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/operations/skills/process-optimization/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:42.409Z
content_sha256: 14099838fdbfca24057e934fc22ed17f94629c5e9c9cec470f32e3063d0575f9
---
|/data/knowledge-work-plugins-operations-skills-process-optimization-skill|

---
stable_id: skills/knowledge-work-plugins-operations-skills-resource-planning-skill
type: skills
title: resource-planning
summary: Plan and optimize resource allocation. Trigger with "resource
  planning", "capacity", "utilization", "staffing plan", "who should work on
  what", "we're stretched thin", or when the user needs help allocating people,
  budget, or time across projects and teams.
tags:
  - source-knowledge-work-plugins
  - plugin-operations
  - plugin-component-skills
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/operations/skills/resource-planning/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/operations/skills/resource-planning/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:41.936Z
content_sha256: 9b4c6d5a8b98d010d9ba5334fc3929eccef2f4ebfb067d49a181ccd93a810a57
---
|/data/knowledge-work-plugins-operations-skills-resource-planning-skill|

---
stable_id: skills/knowledge-work-plugins-operations-skills-risk-assessment-skill
type: skills
title: risk-assessment
summary: Identify, assess, and mitigate operational risks. Trigger with "what
  are the risks", "risk assessment", "risk register", "what could go wrong", or
  when the user is evaluating risks associated with a project, vendor, process,
  or decision.
tags:
  - source-knowledge-work-plugins
  - plugin-operations
  - plugin-component-skills
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/operations/skills/risk-assessment/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/operations/skills/risk-assessment/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:42.232Z
content_sha256: 82e29810a762c396a56f92bbd5c5afd252f7a07c6be69a246c28f7b82c4086d9
---
|/data/knowledge-work-plugins-operations-skills-risk-assessment-skill|

---
stable_id: skills/knowledge-work-plugins-operations-skills-vendor-management-skill
type: skills
title: vendor-management
summary: Evaluate, compare, and manage vendor relationships. Trigger with
  "evaluate this vendor", "compare vendors", "vendor review", "should we renew",
  "RFP", or when the user is making procurement or vendor decisions.
tags:
  - source-knowledge-work-plugins
  - plugin-operations
  - plugin-component-skills
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/operations/skills/vendor-management/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/operations/skills/vendor-management/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:42.142Z
content_sha256: 85a5eb993452124e1d2a75fa0550906750ddc9149e16aeef031eb4f833371cde
---
|/data/knowledge-work-plugins-operations-skills-vendor-management-skill|

---
stable_id: skills/knowledge-work-plugins-partner-built-apollo-skills-enrich-lead-skill
type: skills
title: enrich-lead
summary: Instant lead enrichment. Drop a name, company, LinkedIn URL, or email
  and get the full contact card with email, phone, title, company intel, and
  next actions.
tags:
  - source-knowledge-work-plugins
  - plugin-partner-built
  - plugin-component-apollo
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/partner-built/apollo/skills/enrich-lead/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/partner-built/apollo/skills/enrich-lead/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:46.181Z
content_sha256: 3966057f0a8faa2e1a49d6769f24beb227ad125141e746ce31c5e73dfae04463
---
|/data/knowledge-work-plugins-partner-built-apollo-skills-enrich-lead-skill|

---
stable_id: skills/knowledge-work-plugins-partner-built-apollo-skills-prospect-skill
type: skills
title: prospect
summary: Full ICP-to-leads pipeline. Describe your ideal customer in plain
  English and get a ranked table of enriched decision-maker leads with emails
  and phone numbers.
tags:
  - source-knowledge-work-plugins
  - plugin-partner-built
  - plugin-component-apollo
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/partner-built/apollo/skills/prospect/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/partner-built/apollo/skills/prospect/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:46.357Z
content_sha256: 6ec8535206190b38599a13f2df2786626a2f6790e4d9bd40ecd0b97b2e4a8e3c
---
|/data/knowledge-work-plugins-partner-built-apollo-skills-prospect-skill|

---
stable_id: skills/knowledge-work-plugins-partner-built-apollo-skills-sequence-load-skill
type: skills
title: sequence-load
summary: Find leads matching criteria and bulk-add them to an Apollo outreach
  sequence. Handles enrichment, contact creation, deduplication, and enrollment
  in one flow.
tags:
  - source-knowledge-work-plugins
  - plugin-partner-built
  - plugin-component-apollo
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/partner-built/apollo/skills/sequence-load/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/partner-built/apollo/skills/sequence-load/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:46.268Z
content_sha256: a536c7d818bc8bd42df0d1e116270b51ffcfc12be7472f2eb48a46e2aab5a5c6
---
|/data/knowledge-work-plugins-partner-built-apollo-skills-sequence-load-skill|

---
stable_id: skills/knowledge-work-plugins-partner-built-brand-voice-agents-content-generation
type: skills
title: content-generation
summary: >-
  Generates brand-aligned sales and marketing content by applying brand
  guidelines to specific content requests. Use this agent for long-form content,
  batch generation, or when multiple brand constraints must be balanced
  simultaneously.

  <example> Context: The brand-voice-enforcement skill needs to generate a
  detailed enterprise proposal. It delegates to the content-generation agent for
  long-form, multi-constraint content creation. user: "Write a 5-page proposal
  for our AI platform at a Fortune 500" assistant: "I'll generate a
  brand-aligned proposal applying all guidelines..." <commentary> Long-form
  content requiring simultaneous application of multiple brand constraints. The
  content-generation agent handles complex generation with thorough validation.
  </commentary> </example>

  <example> Context: User needs a batch of personalized outreach emails for
  different personas. user: "Create 5 cold emails for different buyer personas
  using our brand voice" assistant: "I'll generate brand-aligned emails tailored
  to each persona..." <commentary> Batch content generation requiring brand
  consistency across multiple variations. The content-generation agent balances
  brand constraints with persona-specific adaptation. </commentary> </example>
tags:
  - source-knowledge-work-plugins
  - plugin-partner-built
  - plugin-component-brand-voice
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/partner-built/brand-voice/agents/content-generation.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/partner-built/brand-voice/agents/content-generation.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:46.871Z
content_sha256: ce35b5079520611a455590f23bc18f591c639b3da766f94f350250c32e7e145e
---
|/data/knowledge-work-plugins-partner-built-brand-voice-agents-content-generation|

---
stable_id: skills/knowledge-work-plugins-partner-built-brand-voice-agents-conversation-analysis
type: skills
title: conversation-analysis
summary: >-
  Analyzes sales call transcripts to extract brand voice patterns, messaging
  effectiveness, and tone variations. Use this agent when processing multiple
  transcripts or performing deep pattern recognition across conversations.

  <example> Context: The guideline-generation skill has 10 sales call
  transcripts to analyze. user: "Generate brand guidelines from my last 10 sales
  calls" assistant: "I'll analyze the transcripts for voice patterns and
  messaging..." <commentary> Multiple transcripts need deep pattern recognition
  across conversations. The conversation-analysis agent handles this heavy
  analysis. </commentary> </example>

  <example> Context: Gong transcripts were found during brand discovery and need
  analysis. user: "Analyze the Gong calls found during discovery" assistant:
  "I'll pull the transcripts from Gong and analyze voice patterns..."
  <commentary> Discovery identified relevant Gong recordings. The
  conversation-analysis agent fetches transcripts via MCP and performs deep
  pattern analysis. </commentary> </example>
tags:
  - source-knowledge-work-plugins
  - plugin-partner-built
  - plugin-component-brand-voice
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/partner-built/brand-voice/agents/conversation-analysis.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/partner-built/brand-voice/agents/conversation-analysis.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:47.069Z
content_sha256: 56f4372a35e6f82c1c8c837d7738d26d25cdc62c97c385c098209e924666af5e
---
|/data/knowledge-work-plugins-partner-built-brand-voice-agents-conversation-analysis|

---
stable_id: skills/knowledge-work-plugins-partner-built-brand-voice-agents-discover-brand
type: skills
title: discover-brand
summary: >-
  Autonomously searches enterprise platforms to discover brand-related
  documents, transcripts, and design assets. Use when the user wants to build
  brand guidelines but doesn't know where materials are, or wants a
  comprehensive brand content audit.

  <example> Context: User wants to create brand guidelines but doesn't know what
  materials exist. user: "I need brand guidelines but our stuff is scattered
  everywhere — Notion, Confluence, Google Drive, Box..." assistant: "I'll search
  across your connected platforms to find all brand-related materials."
  <commentary> User has scattered brand materials across multiple platforms. The
  discover-brand agent autonomously searches all connected MCP platforms to find
  and triage brand content. </commentary> </example>

  <example> Context: User wants a brand content audit before generating
  guidelines. user: "What brand materials do we actually have? Can you find
  everything?" assistant: "I'll run a comprehensive brand discovery across your
  connected platforms." <commentary> User wants to understand what brand
  materials exist. The discover-brand agent searches, categorizes, ranks, and
  reports on all discovered brand content. </commentary> </example>

  <example> Context: The discover-brand skill delegates deep platform search to
  this agent. user: "Discover our brand voice" assistant: "I'll search your
  connected platforms for brand materials..." <commentary> The discover-brand
  skill orchestrates this agent for the heavy search and triage work.
  </commentary> </example>
tags:
  - source-knowledge-work-plugins
  - plugin-partner-built
  - plugin-component-brand-voice
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/partner-built/brand-voice/agents/discover-brand.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/partner-built/brand-voice/agents/discover-brand.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:46.988Z
content_sha256: 1fe968c860d85ec9b210eb0c213da6308675937464a8ac7f870029c092068932
---
|/data/knowledge-work-plugins-partner-built-brand-voice-agents-discover-brand|

---
stable_id: skills/knowledge-work-plugins-partner-built-brand-voice-agents-document-analysis
type: skills
title: document-analysis
summary: >-
  Analyzes brand documents to extract voice attributes, messaging, terminology,
  and examples. Use this agent when processing multiple brand documents or
  performing cross-document pattern recognition.

  <example> Context: The guideline-generation skill has received 5 brand
  documents to process. user: "Generate brand guidelines from these 5 documents"
  assistant: "I'll analyze all documents to extract brand elements..."
  <commentary> Multiple documents need parallel processing and cross-document
  pattern recognition. The document-analysis agent handles heavy parsing
  efficiently. </commentary> </example>

  <example> Context: Discovery found brand documents on Notion and Confluence
  that need deep analysis. user: "Analyze the brand materials found during
  discovery" assistant: "I'll do a deep analysis of each discovered document..."
  <commentary> Discovery report identified key documents. The document-analysis
  agent fetches full content from connected platforms and extracts structured
  brand elements. </commentary> </example>
tags:
  - source-knowledge-work-plugins
  - plugin-partner-built
  - plugin-component-brand-voice
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/partner-built/brand-voice/agents/document-analysis.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/partner-built/brand-voice/agents/document-analysis.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:46.790Z
content_sha256: 6bea19cfe763c7cd219efe02be995092699ffe3c2933f988a0922aea92d46ad4
---
|/data/knowledge-work-plugins-partner-built-brand-voice-agents-document-analysis|

---
stable_id: skills/knowledge-work-plugins-partner-built-brand-voice-agents-quality-assurance
type: skills
title: quality-assurance
summary: >-
  Validates content and brand guidelines against brand standards. Use this agent
  to check compliance, consistency, completeness, and open question coverage
  before finalizing output.

  <example> Context: The brand-voice-enforcement skill has generated a cold
  email and wants to validate it against guidelines before presenting to the
  user. user: "Check this email against our brand guidelines" assistant: "Let me
  validate this against your brand guidelines..." <commentary> Content needs
  validation against brand standards before delivery. The quality-assurance
  agent performs a fast, structured compliance check. </commentary> </example>

  <example> Context: Brand guidelines were just generated and need validation
  before presenting. user: "Validate these brand guidelines for completeness and
  quality" assistant: "Let me check the guidelines for completeness,
  consistency, and open questions..." <commentary> Generated guidelines need
  quality validation before presenting to the user. The quality-assurance agent
  checks completeness, open questions coverage, and PII. </commentary>
  </example>
tags:
  - source-knowledge-work-plugins
  - plugin-partner-built
  - plugin-component-brand-voice
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/partner-built/brand-voice/agents/quality-assurance.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/partner-built/brand-voice/agents/quality-assurance.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:46.700Z
content_sha256: 49f61dcd82f2cd7e00061b7c1fc973e83dc0f17e44b6b8156d79bbb0be798fe5
---
|/data/knowledge-work-plugins-partner-built-brand-voice-agents-quality-assurance|

---
stable_id: skills/knowledge-work-plugins-partner-built-brand-voice-commands-discover-brand
type: skills
title: discover-brand
summary: Search connected platforms for brand materials and produce a discovery report
tags:
  - source-knowledge-work-plugins
  - plugin-partner-built
  - plugin-component-brand-voice
  - plugin-command
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/partner-built/brand-voice/commands/discover-brand.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/partner-built/brand-voice/commands/discover-brand.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:47.239Z
content_sha256: 9749f7e23b0ba77f8cf8c9881b3ae9a85b0bc82210c3b54753ebf86ae7cace39
---
|/data/knowledge-work-plugins-partner-built-brand-voice-commands-discover-brand|

---
stable_id: skills/knowledge-work-plugins-partner-built-brand-voice-commands-enforce-voice
type: skills
title: enforce-voice
summary: Apply brand guidelines to content creation
tags:
  - source-knowledge-work-plugins
  - plugin-partner-built
  - plugin-component-brand-voice
  - plugin-command
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/partner-built/brand-voice/commands/enforce-voice.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/partner-built/brand-voice/commands/enforce-voice.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:47.151Z
content_sha256: ab67acc3ab40ae221044595c35714aaaa52302045f57a26cc07d4b7f10310435
---
|/data/knowledge-work-plugins-partner-built-brand-voice-commands-enforce-voice|

---
stable_id: skills/knowledge-work-plugins-partner-built-brand-voice-commands-generate-guidelines
type: skills
title: generate-guidelines
summary: Generate brand voice guidelines from documents, transcripts, discovery
  reports, or any combination
tags:
  - source-knowledge-work-plugins
  - plugin-partner-built
  - plugin-component-brand-voice
  - plugin-command
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/partner-built/brand-voice/commands/generate-guidelines.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/partner-built/brand-voice/commands/generate-guidelines.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:47.328Z
content_sha256: 86bd7b41be99ca52a092a480597d4d9b5a792d52ce9f618e7aaaf43d68b27ffa
---
|/data/knowledge-work-plugins-partner-built-brand-voice-commands-generate-guidelines|

---
stable_id: skills/knowledge-work-plugins-partner-built-brand-voice-skills-brand-voice-enforcement-skill
type: skills
title: brand-voice-enforcement
summary: This skill applies brand guidelines to content creation. It should be
  used when the user asks to "write an email", "draft a proposal", "create a
  pitch deck", "write a LinkedIn post", "draft a presentation", "write a Slack
  message", "draft sales content", or any content creation request where brand
  voice should be applied. Also triggers on "on-brand", "brand voice", "enforce
  voice", "apply brand guidelines", "brand-aligned content", "write in our
  voice", "use our brand tone", "make this sound like us", "rewrite this in our
  tone", or "this doesn't sound on-brand". Not for generating guidelines from
  scratch (use guideline-generation) or discovering brand materials (use
  discover-brand).
tags:
  - source-knowledge-work-plugins
  - plugin-partner-built
  - plugin-component-brand-voice
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/partner-built/brand-voice/skills/brand-voice-enforcement/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/partner-built/brand-voice/skills/brand-voice-enforcement/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:46.440Z
content_sha256: 3da527576a05b77669c0e3826ca909176df22358e262a69a5e4d470e770ab97a
---
|/data/knowledge-work-plugins-partner-built-brand-voice-skills-brand-voice-enforcement-skill|

---
stable_id: skills/knowledge-work-plugins-partner-built-brand-voice-skills-discover-brand-skill
type: skills
title: discover-brand
summary: This skill orchestrates autonomous discovery of brand materials across
  enterprise platforms (Notion, Confluence, Google Drive, Box, SharePoint,
  Figma, Gong, Granola, Slack). It should be used when the user asks to
  "discover brand materials", "find brand documents", "search for brand
  guidelines", "audit brand content", "what brand materials do we have", "find
  our style guide", "where are our brand docs", "do we have a style guide",
  "discover brand voice", "brand content audit", or "find brand assets".
tags:
  - source-knowledge-work-plugins
  - plugin-partner-built
  - plugin-component-brand-voice
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/partner-built/brand-voice/skills/discover-brand/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/partner-built/brand-voice/skills/discover-brand/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:46.610Z
content_sha256: 4d5d4490a1600c5277dd62cc629c14e3eddb301df63060ab1223d2a840949cb2
---
|/data/knowledge-work-plugins-partner-built-brand-voice-skills-discover-brand-skill|

---
stable_id: skills/knowledge-work-plugins-partner-built-brand-voice-skills-guideline-generation-skill
type: skills
title: guideline-generation
summary: This skill generates, creates, or builds brand voice guidelines from
  source materials. It should be used when the user asks to "generate brand
  guidelines", "create a style guide", "extract brand voice", "create guidelines
  from calls", "consolidate brand materials", "analyze my sales calls for brand
  voice", "build a brand playbook from documents", "synthesize a voice and tone
  guide", or uploads brand documents, transcripts, or meeting recordings for
  brand analysis. Also triggers when the user has a discovery report and wants
  to convert it into actionable guidelines.
tags:
  - source-knowledge-work-plugins
  - plugin-partner-built
  - plugin-component-brand-voice
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/partner-built/brand-voice/skills/guideline-generation/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/partner-built/brand-voice/skills/guideline-generation/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:46.522Z
content_sha256: 9f5fd0e3d9ce41b02017cbbfe2663d8c788e015cd69ba71e87cbc44a8cad9be2
---
|/data/knowledge-work-plugins-partner-built-brand-voice-skills-guideline-generation-skill|

---
stable_id: skills/knowledge-work-plugins-partner-built-common-room-commands-generate-account-plan
type: skills
title: generate-account-plan
summary: Generate a comprehensive strategic account plan
tags:
  - source-knowledge-work-plugins
  - plugin-partner-built
  - plugin-component-common-room
  - plugin-command
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/partner-built/common-room/commands/generate-account-plan.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/partner-built/common-room/commands/generate-account-plan.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:46.011Z
content_sha256: 3a8dbc4a8ae7e1a61e37552a21840d1162dfa59ccd6a4f7289355217b71ab6f9
---
|/data/knowledge-work-plugins-partner-built-common-room-commands-generate-account-plan|

---
stable_id: skills/knowledge-work-plugins-partner-built-common-room-commands-weekly-brief
type: skills
title: weekly-brief
summary: Generate a weekly prep briefing from your calendar and Common Room
tags:
  - source-knowledge-work-plugins
  - plugin-partner-built
  - plugin-component-common-room
  - plugin-command
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/partner-built/common-room/commands/weekly-brief.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/partner-built/common-room/commands/weekly-brief.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:46.094Z
content_sha256: 03c64c6be28b971e9aedc870aad6b731a63bc59fe6cc332d9b2108e3ba8403d3
---
|/data/knowledge-work-plugins-partner-built-common-room-commands-weekly-brief|

---
stable_id: skills/knowledge-work-plugins-partner-built-common-room-skills-account-research-skill
type: skills
title: account-research
summary: Research a company using Common Room data. Triggers on 'research
  [company]', 'tell me about [domain]', 'pull up signals for [account]', 'what's
  going on with [company]', or any account-level question.
tags:
  - source-knowledge-work-plugins
  - plugin-partner-built
  - plugin-component-common-room
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/partner-built/common-room/skills/account-research/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/partner-built/common-room/skills/account-research/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:45.656Z
content_sha256: 66288f1275c427efeea6de62ca0679874195e1c01d2ff5c3b32269f53614571a
---
|/data/knowledge-work-plugins-partner-built-common-room-skills-account-research-skill|

---
stable_id: skills/knowledge-work-plugins-partner-built-common-room-skills-call-prep-skill
type: skills
title: call-prep
summary: Prepare for a customer or prospect call using Common Room signals.
  Triggers on 'prep me for my call with [company]', 'prepare for a meeting with
  [company]', 'what should I know before talking to [company]', or any call
  preparation request.
tags:
  - source-knowledge-work-plugins
  - plugin-partner-built
  - plugin-component-common-room
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/partner-built/common-room/skills/call-prep/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/partner-built/common-room/skills/call-prep/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:45.483Z
content_sha256: 652c42776860edfa9b81c77aac0b545bb7748a708e01c001f356acc11d7e9f58
---
|/data/knowledge-work-plugins-partner-built-common-room-skills-call-prep-skill|

---
stable_id: skills/knowledge-work-plugins-partner-built-common-room-skills-compose-outreach-skill
type: skills
title: compose-outreach
summary: Generate personalized outreach messages using Common Room signals.
  Triggers on 'draft outreach to [person]', 'write an email to [name]', 'compose
  a message for [contact]', or any outreach drafting request.
tags:
  - source-knowledge-work-plugins
  - plugin-partner-built
  - plugin-component-common-room
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/partner-built/common-room/skills/compose-outreach/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/partner-built/common-room/skills/compose-outreach/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:45.746Z
content_sha256: 6bba827598fce66ed3ce3672b62bb4d21e4ec7dd3dc54d7264bec8b515df0a43
---
|/data/knowledge-work-plugins-partner-built-common-room-skills-compose-outreach-skill|

---
stable_id: skills/knowledge-work-plugins-partner-built-common-room-skills-contact-research-skill
type: skills
title: contact-research
summary: Research a specific person using Common Room data. Triggers on 'who is
  [name]', 'look up [email]', 'research [contact]', 'is [name] a warm lead', or
  any contact-level question.
tags:
  - source-knowledge-work-plugins
  - plugin-partner-built
  - plugin-component-common-room
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/partner-built/common-room/skills/contact-research/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/partner-built/common-room/skills/contact-research/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:45.831Z
content_sha256: 3c01f64652446bc82486c984287022a6410e9a1b282734332cb6a215aac0c684
---
|/data/knowledge-work-plugins-partner-built-common-room-skills-contact-research-skill|

---
stable_id: skills/knowledge-work-plugins-partner-built-common-room-skills-prospect-skill
type: skills
title: prospect
summary: Build targeted account or contact lists using Common Room's Prospector.
  Triggers on 'find companies that match [criteria]', 'build a prospect list',
  'find contacts at [type of company]', 'show me companies hiring [role]', or
  any list-building request.
tags:
  - source-knowledge-work-plugins
  - plugin-partner-built
  - plugin-component-common-room
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/partner-built/common-room/skills/prospect/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/partner-built/common-room/skills/prospect/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:45.571Z
content_sha256: 52f94d6084af91a0872a93b4d60ffda3c7578cc6d1d3246819954835d88637b5
---
|/data/knowledge-work-plugins-partner-built-common-room-skills-prospect-skill|

---
stable_id: skills/knowledge-work-plugins-partner-built-common-room-skills-weekly-prep-brief-skill
type: skills
title: weekly-prep-brief
summary: Generate a comprehensive weekly briefing for all external calls in the
  next 7 days. Triggers on 'weekly prep brief', 'prepare my week', 'what calls
  do I have this week', 'Monday prep', or any weekly planning request.
tags:
  - source-knowledge-work-plugins
  - plugin-partner-built
  - plugin-component-common-room
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/partner-built/common-room/skills/weekly-prep-brief/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/partner-built/common-room/skills/weekly-prep-brief/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:45.921Z
content_sha256: 3c6a45f653a6c0a7b1b52e2f11f937236164d0c3f4df0f9f86d354dc6d16de16
---
|/data/knowledge-work-plugins-partner-built-common-room-skills-weekly-prep-brief-skill|

---
stable_id: skills/knowledge-work-plugins-partner-built-slack-commands-channel-digest
type: skills
title: channel-digest
summary: Get a digest of recent activity across multiple Slack channels
tags:
  - source-knowledge-work-plugins
  - plugin-partner-built
  - plugin-component-slack
  - plugin-command
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/partner-built/slack/commands/channel-digest.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/partner-built/slack/commands/channel-digest.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:47.869Z
content_sha256: 4445bdab04221e5d91cd5f1d986f78d314cf3391aa3b2d149989722aafc62291
---
|/data/knowledge-work-plugins-partner-built-slack-commands-channel-digest|

---
stable_id: skills/knowledge-work-plugins-partner-built-slack-commands-draft-announcement
type: skills
title: draft-announcement
summary: Draft a well-formatted Slack announcement and save it as a draft
tags:
  - source-knowledge-work-plugins
  - plugin-partner-built
  - plugin-component-slack
  - plugin-command
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/partner-built/slack/commands/draft-announcement.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/partner-built/slack/commands/draft-announcement.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:47.958Z
content_sha256: bdffe9b4a5c73dc588fd730a46d8ecf152c6c617201b2fdf21a7a0e37820f333
---
|/data/knowledge-work-plugins-partner-built-slack-commands-draft-announcement|

---
stable_id: skills/knowledge-work-plugins-partner-built-slack-commands-find-discussions
type: skills
title: find-discussions
summary: Find discussions about a specific topic across Slack channels
tags:
  - source-knowledge-work-plugins
  - plugin-partner-built
  - plugin-component-slack
  - plugin-command
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/partner-built/slack/commands/find-discussions.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/partner-built/slack/commands/find-discussions.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:47.777Z
content_sha256: 42e140bb804852040eb9b2d2c4917c72e102cc84c4e87042e728ea950315f6ab
---
|/data/knowledge-work-plugins-partner-built-slack-commands-find-discussions|

---
stable_id: skills/knowledge-work-plugins-partner-built-slack-commands-standup
type: skills
title: standup
summary: Generate a standup update based on your recent Slack activity
tags:
  - source-knowledge-work-plugins
  - plugin-partner-built
  - plugin-component-slack
  - plugin-command
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/partner-built/slack/commands/standup.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/partner-built/slack/commands/standup.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:47.694Z
content_sha256: 2d6db206f93631b85ec88f32df8367a80f61e3107829b1cebc706d2e9c22264b
---
|/data/knowledge-work-plugins-partner-built-slack-commands-standup|

---
stable_id: skills/knowledge-work-plugins-partner-built-slack-commands-summarize-channel
type: skills
title: summarize-channel
summary: Summarize recent activity in a Slack channel
tags:
  - source-knowledge-work-plugins
  - plugin-partner-built
  - plugin-component-slack
  - plugin-command
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/partner-built/slack/commands/summarize-channel.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/partner-built/slack/commands/summarize-channel.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:47.596Z
content_sha256: 1719cc1abd991bac0b72947d93486219ada38895fd0e858f3c8d0e834d46d816
---
|/data/knowledge-work-plugins-partner-built-slack-commands-summarize-channel|

---
stable_id: skills/knowledge-work-plugins-partner-built-slack-skills-slack-messaging-skill
type: skills
title: slack-messaging
summary: Guidance for composing well-formatted, effective Slack messages using
  mrkdwn syntax
tags:
  - source-knowledge-work-plugins
  - plugin-partner-built
  - plugin-component-slack
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/partner-built/slack/skills/slack-messaging/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/partner-built/slack/skills/slack-messaging/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:47.512Z
content_sha256: 118ede41cbc4fa5c6be4593619b0d9f58a40d85cadfa295277c74c4b7acf1508
---
|/data/knowledge-work-plugins-partner-built-slack-skills-slack-messaging-skill|

---
stable_id: skills/knowledge-work-plugins-partner-built-slack-skills-slack-search-skill
type: skills
title: slack-search
summary: Guidance for effectively searching Slack to find messages, files,
  channels, and people
tags:
  - source-knowledge-work-plugins
  - plugin-partner-built
  - plugin-component-slack
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/partner-built/slack/skills/slack-search/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/partner-built/slack/skills/slack-search/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:47.422Z
content_sha256: 934d1c12a69d013890810a25da9f6c6a89c6b2dbd16f18a8862419e9f41e6879
---
|/data/knowledge-work-plugins-partner-built-slack-skills-slack-search-skill|

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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:13.529Z
content_sha256: c0823dd21f0b36efdb11a94f7bf3ac5d48c567c61bc2ce39603aa7154c76de57
---
|/data/mintlify-skill|

---
stable_id: skills/moltbook-skill
type: skills
title: moltbook-skill
summary: |-
  ---
  name: moltbook
  version: 1.12.0
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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:11.721Z
content_sha256: bfa0055f6a4217a5c63dec8cef722726c944012616265732310a48fd4c4c6947
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
  the design and get user approval.

  <HARD-GATE>

  Do NOT invoke any implementation skill, write any code, scaffold any project,
  or take any implementation action until you have presented a design and the
  user has approved it. This applies to EVERY project regardless of perceived
  simplicity.
tags:
  - obra
  - source-obra-superpowers
source_url: https://raw.githubusercontent.com/obra/superpowers/main/skills/brainstorming/SKILL.md
license: ""
upstream_ref: https://github.com/obra/superpowers/blob/main/skills/brainstorming/SKILL.md
github_stars: 64877
github_forks: 4946
github_is_organization: false
retrieved_at: 2026-03-03T07:17:09.486Z
content_sha256: 7a238df1ebf0656c1da199aafafcc78c42f47bf4e56dd4e007a67afbb10af455
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
github_stars: 64877
github_forks: 4946
github_is_organization: false
retrieved_at: 2026-03-03T07:17:09.562Z
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
github_stars: 64877
github_forks: 4946
github_is_organization: false
retrieved_at: 2026-03-03T07:17:09.647Z
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
github_stars: 64877
github_forks: 4946
github_is_organization: false
retrieved_at: 2026-03-03T07:17:09.723Z
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
github_stars: 64877
github_forks: 4946
github_is_organization: false
retrieved_at: 2026-03-03T07:17:09.797Z
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
github_stars: 64877
github_forks: 4946
github_is_organization: false
retrieved_at: 2026-03-03T07:17:09.871Z
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
github_stars: 64877
github_forks: 4946
github_is_organization: false
retrieved_at: 2026-03-03T07:17:09.922Z
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
github_stars: 64877
github_forks: 4946
github_is_organization: false
retrieved_at: 2026-03-03T07:17:09.996Z
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
github_stars: 64877
github_forks: 4946
github_is_organization: false
retrieved_at: 2026-03-03T07:17:10.051Z
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
github_stars: 64877
github_forks: 4946
github_is_organization: false
retrieved_at: 2026-03-03T07:17:10.134Z
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
github_stars: 64877
github_forks: 4946
github_is_organization: false
retrieved_at: 2026-03-03T07:17:10.199Z
content_sha256: 07d73726944e38fac59b9c90d876e0f714e395308b357973ae77b1321fc75067
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
github_stars: 64877
github_forks: 4946
github_is_organization: false
retrieved_at: 2026-03-03T07:17:10.276Z
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
github_stars: 64877
github_forks: 4946
github_is_organization: false
retrieved_at: 2026-03-03T07:17:10.349Z
content_sha256: 8a9198d4d9efbcad6e019b17c422c182113062c864b6154ec2a3ba2ed0b6b9d0
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
github_stars: 64877
github_forks: 4946
github_is_organization: false
retrieved_at: 2026-03-03T07:17:10.430Z
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
github_stars: 10080
github_forks: 566
github_is_organization: true
retrieved_at: 2026-03-03T07:17:06.599Z
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
github_stars: 10080
github_forks: 566
github_is_organization: true
retrieved_at: 2026-03-03T07:17:06.669Z
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
github_stars: 10080
github_forks: 566
github_is_organization: true
retrieved_at: 2026-03-03T07:17:06.722Z
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
github_stars: 10080
github_forks: 566
github_is_organization: true
retrieved_at: 2026-03-03T07:17:06.844Z
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
github_stars: 10080
github_forks: 566
github_is_organization: true
retrieved_at: 2026-03-03T07:17:06.789Z
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
github_stars: 10080
github_forks: 566
github_is_organization: true
retrieved_at: 2026-03-03T07:17:06.895Z
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
github_stars: 10080
github_forks: 566
github_is_organization: true
retrieved_at: 2026-03-03T07:17:06.994Z
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
github_stars: 10080
github_forks: 566
github_is_organization: true
retrieved_at: 2026-03-03T07:17:07.057Z
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
github_stars: 10080
github_forks: 566
github_is_organization: true
retrieved_at: 2026-03-03T07:17:07.132Z
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
github_stars: 10080
github_forks: 566
github_is_organization: true
retrieved_at: 2026-03-03T07:17:07.211Z
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
github_stars: 10080
github_forks: 566
github_is_organization: true
retrieved_at: 2026-03-03T07:17:07.282Z
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
github_stars: 10080
github_forks: 566
github_is_organization: true
retrieved_at: 2026-03-03T07:17:07.358Z
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
github_stars: 10080
github_forks: 566
github_is_organization: true
retrieved_at: 2026-03-03T07:17:07.441Z
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
github_stars: 10080
github_forks: 566
github_is_organization: true
retrieved_at: 2026-03-03T07:17:07.522Z
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
github_stars: 10080
github_forks: 566
github_is_organization: true
retrieved_at: 2026-03-03T07:17:07.604Z
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
github_stars: 10080
github_forks: 566
github_is_organization: true
retrieved_at: 2026-03-03T07:17:07.672Z
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
github_stars: 10080
github_forks: 566
github_is_organization: true
retrieved_at: 2026-03-03T07:17:07.752Z
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
github_stars: 10080
github_forks: 566
github_is_organization: true
retrieved_at: 2026-03-03T07:17:08.389Z
content_sha256: 0ffaabcc8e0990627c4725f18bf1c7955534a796c1c199e872909de2013ce6a8
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
github_stars: 10080
github_forks: 566
github_is_organization: true
retrieved_at: 2026-03-03T07:17:08.461Z
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
github_stars: 10080
github_forks: 566
github_is_organization: true
retrieved_at: 2026-03-03T07:17:08.528Z
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
github_stars: 10080
github_forks: 566
github_is_organization: true
retrieved_at: 2026-03-03T07:17:08.601Z
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
github_stars: 10080
github_forks: 566
github_is_organization: true
retrieved_at: 2026-03-03T07:17:08.679Z
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
github_stars: 10080
github_forks: 566
github_is_organization: true
retrieved_at: 2026-03-03T07:17:08.752Z
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
github_stars: 10080
github_forks: 566
github_is_organization: true
retrieved_at: 2026-03-03T07:17:08.844Z
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
github_stars: 10080
github_forks: 566
github_is_organization: true
retrieved_at: 2026-03-03T07:17:08.915Z
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
github_stars: 10080
github_forks: 566
github_is_organization: true
retrieved_at: 2026-03-03T07:17:08.981Z
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
github_stars: 10080
github_forks: 566
github_is_organization: true
retrieved_at: 2026-03-03T07:17:09.047Z
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
github_stars: 10080
github_forks: 566
github_is_organization: true
retrieved_at: 2026-03-03T07:17:09.129Z
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

  - Check whether the Vercel CLI is installed **without** escalated permissions
  (for example, `command -v vercel`).

  - Only escalate the actual deploy command if sandboxing blocks the deployment
  network calls (`sandbox_permissions=require_escalated`).

  - The deployment might take a few minutes. Use appropriate timeout values.
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/vercel-deploy/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/vercel-deploy/SKILL.md
github_stars: 10080
github_forks: 566
github_is_organization: true
retrieved_at: 2026-03-03T07:17:09.205Z
content_sha256: f4a6cbfbb378a320fae179a79f727a881d19677e9b3db96ed49d2dc02a74fa46
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
github_stars: 10080
github_forks: 566
github_is_organization: true
retrieved_at: 2026-03-03T07:17:09.281Z
content_sha256: 2b4583b296a3a043b9002cd74e3ca5407fce832598dcd428272da08a9839f64b
---
|/data/openai-curated-yeet|

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
github_stars: 10080
github_forks: 566
github_is_organization: true
retrieved_at: 2026-03-03T07:17:09.346Z
content_sha256: a17383bfb1448637ac1f757ad891ddb9676fa30b0eff620200f0e1cbc0cc0d50
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
github_stars: 10080
github_forks: 566
github_is_organization: true
retrieved_at: 2026-03-03T07:17:09.416Z
content_sha256: 09df0ea7921f63d51befae9fc8f71daece5ef49d7b96e35fff8b18d15d6afda7
---
|/data/openai-system-skill-installer|

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
    clawdbot:
      emoji: 🧠
tags: []
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/byungkyu/gmail/SKILL.md
license: ""
upstream_ref: ""
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:14.610Z
content_sha256: a9b948436dc3392ad3693ec91cf4ee6e390a9c38495661e3f9b6b069979f307e
---
|/data/openclaw-byungkyu-gmail|

---
stable_id: skills/openclaw-docs-skill
type: skills
title: openclaw-docs-skill
summary: >-
  ---

  name: Clawdbot

  description: Use when setting up, configuring, or managing an AI agent gateway
  that connects messaging platforms (WhatsApp, Telegram, Discord, Slack,
  iMessage, etc.) to LLM-powered agents. Reach for this skill when building
  agent workspaces, configuring channels, managing sessions, creating skills,
  automating tasks with cron/webhooks, or troubleshooting agent behavior.

  metadata:
      mintlify-proj: clawdbot
      version: "1.0"
  ---

  # OpenClaw (clawdbot) Skill

  ## Product summary

  OpenClaw is a self-hosted AI agent gateway that bridges messaging platforms
  (WhatsApp, Telegram, Discord, Slack, iMessage, Signal, Mattermost, and more)
  to LLM-powered agents. The Gateway runs as a single process on your machine or
  server, routing inbound messages to an agent that can execute tools, manage
  sessions, and automate tasks. The agent is built on the pi SDK and uses a
  workspace directory (`~/.openclaw/workspace` by default) to store operating
  instructions, memory, and configuration. Key files:
  `~/.openclaw/openclaw.json` (config), `~/.openclaw/agents/<agentId>/sessions/`
  (chat history), workspace files (`AGENTS.md`, `SOUL.md`, `TOOLS.md`,
  `MEMORY.md`). Primary docs: https://docs.openclaw.ai
tags: []
source_url: https://docs.openclaw.ai/skill.md
license: ""
upstream_ref: ""
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:14.503Z
content_sha256: 724e4fc8aa2d990c4576a639b52f54ef99d1d275391dd55e130a12e497346c04
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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:14.809Z
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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:15.122Z
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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:15.219Z
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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:15.385Z
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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:15.027Z
content_sha256: 54f9410a05f97b39ebf001a8589174fe3ca028c37fdfcd5856003eca920c5a1e
---
|/data/openclaw-mrgoodb-zendesk|

---
stable_id: skills/openclaw-shaharsha-google-maps
type: skills
title: openclaw-shaharsha-google-maps
summary: >-
  ---

  name: google-maps

  description: >
    Google Maps integration for OpenClaw with Routes API. Use for: (1) Distance/travel time calculations
    with traffic prediction, (2) Turn-by-turn directions, (3) Distance matrix between multiple points,
    (4) Geocoding addresses to coordinates and reverse, (5) Places search and details, (6) Transit
    planning with arrival times. Supports future departure times, traffic models (pessimistic/optimistic),
    avoid options (tolls/highways), and multiple travel modes (driving/walking/bicycling/transit).
  version: 3.1.2

  author: Leo 🦁
tags: []
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/shaharsha/google-maps/SKILL.md
license: ""
upstream_ref: ""
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:14.927Z
content_sha256: 8258b1c816d9d0a9cd5eb8ad14adacb1459619a328b589cc90a98f7f47b96a4b
---
|/data/openclaw-shaharsha-google-maps|

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
source_url: https://raw.githubusercontent.com/199-biotechnologies/claude-deep-research-skill/HEAD/reference/methodology.md
license: ""
upstream_ref: https://skills.sh/199-biotechnologies/claude-deep-research-skill/deep-research
github_stars: 70
github_forks: 8
github_is_organization: true
retrieved_at: 2026-03-03T07:18:04.114Z
content_sha256: 68c436d9010499cecb174935bfa14acd021f49482f5c59939616695421f03802
---
|/data/skills-sh-199-biotechnologies-claude-deep-research-skill-deep-research|

---
stable_id: skills/skills-sh-1nf-sh-skills-agent-tools
type: skills
title: skills-sh-1nf-sh-skills-agent-tools
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
source_url: https://raw.githubusercontent.com/1nf-sh/skills/HEAD/skills/agent-tools/references/authentication.md
license: ""
upstream_ref: https://skills.sh/1nf-sh/skills/agent-tools
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:30.574Z
content_sha256: 65924807bfa86c677ecc8b3f1714adbec266cecab1864e46cb9f0a7492d9de2e
---
|/data/skills-sh-1nf-sh-skills-agent-tools|

---
stable_id: skills/skills-sh-1nf-sh-skills-javascript-sdk
type: skills
title: skills-sh-1nf-sh-skills-javascript-sdk
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
source_url: https://raw.githubusercontent.com/1nf-sh/skills/HEAD/skills/javascript-sdk/references/agent-patterns.md
license: ""
upstream_ref: https://skills.sh/1nf-sh/skills/javascript-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:30.804Z
content_sha256: 81d7e3e42f5803e8e820edf19ca4b5e54c54ad18afa3c0be98b7d3949b8adbd8
---
|/data/skills-sh-1nf-sh-skills-javascript-sdk|

---
stable_id: skills/skills-sh-1nf-sh-skills-python-sdk
type: skills
title: skills-sh-1nf-sh-skills-python-sdk
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
source_url: https://raw.githubusercontent.com/1nf-sh/skills/HEAD/skills/python-sdk/references/agent-patterns.md
license: ""
upstream_ref: https://skills.sh/1nf-sh/skills/python-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:30.729Z
content_sha256: 85c91b4d772be3d2d10d017f83892b00940941174989adccc5a8752f56f44ec4
---
|/data/skills-sh-1nf-sh-skills-python-sdk|

---
stable_id: skills/skills-sh-1nfsh-skills-agent-tools
type: skills
title: skills-sh-1nfsh-skills-agent-tools
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
source_url: https://raw.githubusercontent.com/1nfsh/skills/HEAD/skills/agent-tools/references/authentication.md
license: ""
upstream_ref: https://skills.sh/1nfsh/skills/agent-tools
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:31.889Z
content_sha256: 65924807bfa86c677ecc8b3f1714adbec266cecab1864e46cb9f0a7492d9de2e
---
|/data/skills-sh-1nfsh-skills-agent-tools|

---
stable_id: skills/skills-sh-404kidwiz-claude-supercode-skills-frontend-ui-ux-engineer
type: skills
title: skills-sh-404kidwiz-claude-supercode-skills-frontend-ui-ux-engineer
summary: >-
  # ML/AI Skills Conversion Project

  ## Overview

  This project provides comprehensive scripts and references for 11
  ML/AI-related skills, designed for production use with best practices, error
  handling, and configuration management.

  ## Project Structure

  ```

  claude-skills-conversion/

  ├── ai-engineer-skill/          # AI service integration, RAG, prompts

  ├── llm-architect-skill/        # LLM design, fine-tuning, serving

  ├── ml-engineer-skill/           # ML pipelines, scikit-learn

  ├── mlops-engineer-skill/        # MLflow, deployment, monitoring
tags:
  - skills-sh
  - skills-sh-probed
source_url: https://raw.githubusercontent.com/404kidwiz/claude-supercode-skills/main/SKILL.md
license: ""
upstream_ref: https://skills.sh/404kidwiz/claude-supercode-skills/frontend-ui-ux-engineer
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:33.765Z
content_sha256: 6162b10c3761ab986a5bd67906506177272da7bf08da6c7e352fa03002169a5a
---
|/data/skills-sh-404kidwiz-claude-supercode-skills-frontend-ui-ux-engineer|

---
stable_id: skills/skills-sh-aaron-he-zhu-seo-geo-claude-skills-backlink-analyzer
type: skills
title: skills-sh-aaron-he-zhu-seo-geo-claude-skills-backlink-analyzer
summary: >-
  # Connectors

  > Skills use `~~category` placeholders instead of specific tool names. Replace
  each placeholder with whichever tool your organization uses.

  ## Tool Categories

  | Category | Placeholder | Example Tools | Included Server |

  |----------|-------------|---------------|-----------------|

  | SEO Platform | `~~SEO tool` | Ahrefs, SEMrush, Moz, Sistrix, SE Ranking |
  Ahrefs |

  | Analytics | `~~analytics` | Google Analytics, Adobe Analytics, Plausible,
  Matomo | Amplitude |

  | Search Console | `~~search console` | Google Search Console, Bing Webmaster
  Tools | — |

  | AI Visibility | `~~AI monitor` | Otterly, Profound, Scrunch AI | — |

  | Web Crawler | `~~web crawler` | Screaming Frog, Sitebulb, DeepCrawl, Lumar |
  — |
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/aaron-he-zhu/seo-geo-claude-skills/HEAD/CONNECTORS.md
license: ""
upstream_ref: https://skills.sh/aaron-he-zhu/seo-geo-claude-skills/backlink-analyzer
github_stars: 270
github_forks: 34
github_is_organization: false
retrieved_at: 2026-03-03T07:17:59.085Z
content_sha256: a09cbb7eb5e98bb6f2563c08aed6206e6544615b24b75ca256812d56af63e37e
---
|/data/skills-sh-aaron-he-zhu-seo-geo-claude-skills-backlink-analyzer|

---
stable_id: skills/skills-sh-acedergren-oci-agent-skills-monitoring-operations
type: skills
title: skills-sh-acedergren-oci-agent-skills-monitoring-operations
summary: |-
  ### [Oracle Cloud Infrastructure Documentation](https://docs.oracle.com/iaas/Content/home.htm)
  * * *
  All Pages
  [Skip to main content](https://docs.oracle.com/en-us/iaas/Content/Monitoring/Tasks/managingalarms.htm#dcoc-content-body)
  # Managing Alarms
  Create, update, suppress, and delete alarms. Retrieve alarm history.
  The following pages describe how you can manage alarms:
  - [Listing Alarms](https://docs.oracle.com/en-us/iaas/Content/Monitoring/Tasks/list-alarm.htm "List alarms in Monitoring.")
  - [Creating an Alarm](https://docs.oracle.com/en-us/iaas/Content/Monitoring/Tasks/create-alarm.htm "Create an alarm in Monitoring to notify you when metrics meet specified triggers.")
  - [Viewing an Alarm Metric Chart](https://docs.oracle.com/en-us/iaas/Content/Monitoring/Tasks/create-edit-alarm-chart.htm "View a metric chart for an alarm query in the Console.")
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/acedergren/oci-agent-skills/HEAD/skills/monitoring-operations/references/oci-monitoring-reference.md
license: ""
upstream_ref: https://skills.sh/acedergren/oci-agent-skills/monitoring-operations
github_stars: 3
github_forks: 1
github_is_organization: false
retrieved_at: 2026-03-03T07:18:03.336Z
content_sha256: 873c0481f2754c71feb79e14a1c1a08d753fa1dd4fad94e5aefa9a42770693c0
---
|/data/skills-sh-acedergren-oci-agent-skills-monitoring-operations|

---
stable_id: skills/skills-sh-actionbook-actionbook-actionbook
type: skills
title: skills-sh-actionbook-actionbook-actionbook
summary: >-
  # actionbook Command Reference

  Complete reference for all `actionbook` CLI commands.

  ## Action Search & Retrieval

  ### search - Search for action manuals

  ```bash

  actionbook search "<query>"                    # Basic keyword search

  actionbook search "<query>" --domain site.com  # Filter by domain

  actionbook search "<query>" --url <url>        # Filter by specific URL

  actionbook search "<query>" -p 2               # Page 2 (default: 1)

  actionbook search "<query>" -s 20              # 20 results per page (default:
  10, max: 100)
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/actionbook/actionbook/HEAD/skills/actionbook/references/command-reference.md
license: ""
upstream_ref: https://skills.sh/actionbook/actionbook/actionbook
github_stars: 1186
github_forks: 88
github_is_organization: true
retrieved_at: 2026-03-03T07:17:37.870Z
content_sha256: cef0ec9c3af2e3d918965863033b049ce51b1f2d004febff0d1c2261515759b8
---
|/data/skills-sh-actionbook-actionbook-actionbook|

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
source_url: https://raw.githubusercontent.com/addyosmani/web-quality-skills/HEAD/skills/web-quality-audit/SKILL.md
license: ""
upstream_ref: https://skills.sh/addyosmani/web-quality-skills/accessibility
github_stars: 573
github_forks: 61
github_is_organization: false
retrieved_at: 2026-03-03T07:17:38.220Z
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
source_url: https://raw.githubusercontent.com/addyosmani/web-quality-skills/HEAD/skills/performance/SKILL.md
license: ""
upstream_ref: https://skills.sh/addyosmani/web-quality-skills/core-web-vitals
github_stars: 586
github_forks: 61
github_is_organization: false
retrieved_at: 2026-03-03T07:18:03.932Z
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
source_url: https://raw.githubusercontent.com/addyosmani/web-quality-skills/HEAD/skills/core-web-vitals/SKILL.md
license: ""
upstream_ref: https://skills.sh/addyosmani/web-quality-skills/performance
github_stars: 586
github_forks: 61
github_is_organization: false
retrieved_at: 2026-03-03T07:18:01.219Z
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
source_url: https://raw.githubusercontent.com/adithya-s-k/manim_skill/HEAD/skills/manim-composer/references/narrative-patterns.md
license: ""
upstream_ref: https://skills.sh/adithya-s-k/manim_skill/manim-composer
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:18:06.459Z
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
source_url: https://raw.githubusercontent.com/adithya-s-k/manim_skill/HEAD/skills/manimce-best-practices/rules/scenes.md
license: ""
upstream_ref: https://skills.sh/adithya-s-k/manim_skill/manimce-best-practices
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:18:04.689Z
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
source_url: https://raw.githubusercontent.com/adithya-s-k/manim_skill/HEAD/skills/manimgl-best-practices/rules/scenes.md
license: ""
upstream_ref: https://skills.sh/adithya-s-k/manim_skill/manimgl-best-practices
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:35.541Z
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
source_url: https://raw.githubusercontent.com/analogjs/angular-skills/HEAD/skills/angular-component/references/component-patterns.md
license: ""
upstream_ref: https://skills.sh/analogjs/angular-skills/angular-component
github_stars: 404
github_forks: 44
github_is_organization: true
retrieved_at: 2026-03-03T07:17:59.308Z
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
source_url: https://raw.githubusercontent.com/analogjs/angular-skills/HEAD/skills/angular-di/references/di-patterns.md
license: ""
upstream_ref: https://skills.sh/analogjs/angular-skills/angular-di
github_stars: 404
github_forks: 44
github_is_organization: true
retrieved_at: 2026-03-03T07:18:01.640Z
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
source_url: https://raw.githubusercontent.com/analogjs/angular-skills/HEAD/skills/angular-directives/references/directive-patterns.md
license: ""
upstream_ref: https://skills.sh/analogjs/angular-skills/angular-directives
github_stars: 352
github_forks: 40
github_is_organization: true
retrieved_at: 2026-03-03T07:17:35.183Z
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
source_url: https://raw.githubusercontent.com/analogjs/angular-skills/HEAD/skills/angular-forms/references/form-patterns.md
license: ""
upstream_ref: https://skills.sh/analogjs/angular-skills/angular-forms
github_stars: 404
github_forks: 44
github_is_organization: true
retrieved_at: 2026-03-03T07:18:01.293Z
content_sha256: 8cbd30faf4fe8457e638b85f612720325b68c875860f292155ddd9a93359de93
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
source_url: https://raw.githubusercontent.com/analogjs/angular-skills/HEAD/skills/angular-http/references/http-patterns.md
license: ""
upstream_ref: https://skills.sh/analogjs/angular-skills/angular-http
github_stars: 404
github_forks: 44
github_is_organization: true
retrieved_at: 2026-03-03T07:18:01.376Z
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
source_url: https://raw.githubusercontent.com/analogjs/angular-skills/HEAD/skills/angular-routing/references/routing-patterns.md
license: ""
upstream_ref: https://skills.sh/analogjs/angular-skills/angular-routing
github_stars: 352
github_forks: 40
github_is_organization: true
retrieved_at: 2026-03-03T07:17:35.106Z
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
source_url: https://raw.githubusercontent.com/analogjs/angular-skills/HEAD/skills/angular-signals/references/signal-patterns.md
license: ""
upstream_ref: https://skills.sh/analogjs/angular-skills/angular-signals
github_stars: 404
github_forks: 44
github_is_organization: true
retrieved_at: 2026-03-03T07:18:00.622Z
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
source_url: https://raw.githubusercontent.com/analogjs/angular-skills/HEAD/skills/angular-ssr/references/ssr-patterns.md
license: ""
upstream_ref: https://skills.sh/analogjs/angular-skills/angular-ssr
github_stars: 404
github_forks: 44
github_is_organization: true
retrieved_at: 2026-03-03T07:18:03.701Z
content_sha256: 23aedff793dbe7c92dfd4f8bec9e48657d5f0399dae3232fc9b5a3b88a8284c5
---
|/data/skills-sh-analogjs-angular-skills-angular-ssr|

---
stable_id: skills/skills-sh-analogjs-angular-skills-angular-testing
type: skills
title: skills-sh-analogjs-angular-skills-angular-testing
summary: |-
  # Vitest Setup and Migration Guide
  ## Vitest vs Jasmine Comparison
  | Feature | Vitest | Jasmine/Karma |
  |---------|--------|---------------|
  | Speed | Faster (native ESM) | Slower |
  | Watch mode | Instant feedback | Slower rebuilds |
  | Mocking | `vi.fn()`, `vi.mock()` | `jasmine.createSpy()` |
  | Assertions | `expect()` (Chai-style) | `expect()` (Jasmine) |
  | UI | Built-in UI mode | Karma browser |
  | Config | `angular.json` | `karma.conf.js` |
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/analogjs/angular-skills/HEAD/skills/angular-testing/references/vitest-migration.md
license: ""
upstream_ref: https://skills.sh/analogjs/angular-skills/angular-testing
github_stars: 404
github_forks: 44
github_is_organization: true
retrieved_at: 2026-03-03T07:18:02.108Z
content_sha256: edf5f9f9b473a39ff51064b41d358e81628cc469781328d3a2447b03820004e6
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
source_url: https://raw.githubusercontent.com/analogjs/angular-skills/HEAD/skills/angular-tooling/references/tooling-patterns.md
license: ""
upstream_ref: https://skills.sh/analogjs/angular-skills/angular-tooling
github_stars: 404
github_forks: 44
github_is_organization: true
retrieved_at: 2026-03-03T07:18:02.198Z
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
source_url: https://raw.githubusercontent.com/antfu/skills/HEAD/skills/antfu/references/antfu-eslint-config.md
license: ""
upstream_ref: https://skills.sh/antfu/skills/antfu
github_stars: 3463
github_forks: 159
github_is_organization: false
retrieved_at: 2026-03-03T07:17:34.498Z
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
source_url: https://raw.githubusercontent.com/antfu/skills/HEAD/skills/nuxt/references/core-directory-structure.md
license: ""
upstream_ref: https://skills.sh/antfu/skills/nuxt
github_stars: 3706
github_forks: 181
github_is_organization: false
retrieved_at: 2026-03-03T07:17:58.998Z
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
source_url: https://raw.githubusercontent.com/antfu/skills/HEAD/skills/pinia/references/core-stores.md
license: ""
upstream_ref: https://skills.sh/antfu/skills/pinia
github_stars: 3706
github_forks: 181
github_is_organization: false
retrieved_at: 2026-03-03T07:17:58.728Z
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
source_url: https://raw.githubusercontent.com/antfu/skills/HEAD/skills/pnpm/references/core-cli.md
license: ""
upstream_ref: https://skills.sh/antfu/skills/pnpm
github_stars: 3463
github_forks: 159
github_is_organization: false
retrieved_at: 2026-03-03T07:17:34.411Z
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
source_url: https://raw.githubusercontent.com/antfu/skills/HEAD/skills/slidev/references/core-syntax.md
license: ""
upstream_ref: https://skills.sh/antfu/skills/slidev
github_stars: 3706
github_forks: 181
github_is_organization: false
retrieved_at: 2026-03-03T07:17:59.978Z
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
source_url: https://raw.githubusercontent.com/antfu/skills/HEAD/skills/tsdown/references/guide-getting-started.md
license: ""
upstream_ref: https://skills.sh/antfu/skills/tsdown
github_stars: 3463
github_forks: 159
github_is_organization: false
retrieved_at: 2026-03-03T07:17:34.660Z
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
source_url: https://raw.githubusercontent.com/antfu/skills/HEAD/skills/unocss/references/core-config.md
license: ""
upstream_ref: https://skills.sh/antfu/skills/unocss
github_stars: 3597
github_forks: 169
github_is_organization: false
retrieved_at: 2026-03-03T07:17:48.461Z
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
source_url: https://raw.githubusercontent.com/antfu/skills/HEAD/skills/vite/references/core-config.md
license: ""
upstream_ref: https://skills.sh/antfu/skills/vite
github_stars: 3706
github_forks: 181
github_is_organization: false
retrieved_at: 2026-03-03T07:17:57.737Z
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
source_url: https://raw.githubusercontent.com/antfu/skills/HEAD/skills/vitepress/references/core-config.md
license: ""
upstream_ref: https://skills.sh/antfu/skills/vitepress
github_stars: 3706
github_forks: 181
github_is_organization: false
retrieved_at: 2026-03-03T07:17:59.235Z
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
source_url: https://raw.githubusercontent.com/antfu/skills/HEAD/skills/vitest/references/core-config.md
license: ""
upstream_ref: https://skills.sh/antfu/skills/vitest
github_stars: 3706
github_forks: 181
github_is_organization: false
retrieved_at: 2026-03-03T07:17:57.896Z
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
source_url: https://raw.githubusercontent.com/antfu/skills/HEAD/skills/vue/references/script-setup-macros.md
license: ""
upstream_ref: https://skills.sh/antfu/skills/vue
github_stars: 3706
github_forks: 181
github_is_organization: false
retrieved_at: 2026-03-03T07:17:58.057Z
content_sha256: ad47db85f8fbda6c055cedcc1d4175cd79d414e9be3ebf1e631d0e493eb4480a
---
|/data/skills-sh-antfu-skills-vue|

---
stable_id: skills/skills-sh-antfu-skills-vue-router-best-practices
type: skills
title: skills-sh-antfu-skills-vue-router-best-practices
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
source_url: https://raw.githubusercontent.com/antfu/skills/HEAD/skills/vue-router-best-practices/reference/router-beforeenter-no-param-trigger.md
license: ""
upstream_ref: https://skills.sh/antfu/skills/vue-router-best-practices
github_stars: 3706
github_forks: 181
github_is_organization: false
retrieved_at: 2026-03-03T07:17:59.493Z
content_sha256: 8cf2bd4e3f40cf24b14962ea0b33b31d736d56db891aafdd721e4ca68d82c6ad
---
|/data/skills-sh-antfu-skills-vue-router-best-practices|

---
stable_id: skills/skills-sh-antfu-skills-vue-testing-best-practices
type: skills
title: skills-sh-antfu-skills-vue-testing-best-practices
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
source_url: https://raw.githubusercontent.com/antfu/skills/HEAD/skills/vue-testing-best-practices/reference/testing-vitest-recommended-for-vue.md
license: ""
upstream_ref: https://skills.sh/antfu/skills/vue-testing-best-practices
github_stars: 3706
github_forks: 181
github_is_organization: false
retrieved_at: 2026-03-03T07:18:00.296Z
content_sha256: acfa0b3986e092f43d4cd8090864860cff07ffa3aaa62a10c5a622770ccaeb6b
---
|/data/skills-sh-antfu-skills-vue-testing-best-practices|

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
source_url: https://raw.githubusercontent.com/antfu/skills/HEAD/skills/vueuse-functions/references/createGlobalState.md
license: ""
upstream_ref: https://skills.sh/antfu/skills/vueuse-functions
github_stars: 3706
github_forks: 181
github_is_organization: false
retrieved_at: 2026-03-03T07:17:58.653Z
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
source_url: https://raw.githubusercontent.com/anthropics/claude-plugins-official/HEAD/plugins/claude-code-setup/skills/claude-automation-recommender/references/mcp-servers.md
license: ""
upstream_ref: https://skills.sh/anthropics/claude-plugins-official/claude-automation-recommender
github_stars: 8532
github_forks: 835
github_is_organization: true
retrieved_at: 2026-03-03T07:18:06.269Z
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
source_url: https://raw.githubusercontent.com/anthropics/claude-plugins-official/HEAD/plugins/claude-md-management/skills/claude-md-improver/references/quality-criteria.md
license: ""
upstream_ref: https://skills.sh/anthropics/claude-plugins-official/claude-md-improver
github_stars: 8532
github_forks: 835
github_is_organization: true
retrieved_at: 2026-03-03T07:18:03.846Z
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
source_url: https://raw.githubusercontent.com/anthropics/skills/HEAD/skills/mcp-builder/reference/mcp_best_practices.md
license: ""
upstream_ref: https://skills.sh/anthropics/skills/mcp-builder
github_stars: 78682
github_forks: 8204
github_is_organization: true
retrieved_at: 2026-03-03T07:17:56.269Z
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
source_url: https://raw.githubusercontent.com/anthropics/skills/HEAD/skills/pptx/editing.md
license: ""
upstream_ref: https://skills.sh/anthropics/skills/pptx
github_stars: 71539
github_forks: 7296
github_is_organization: true
retrieved_at: 2026-03-03T07:17:33.893Z
content_sha256: 6cb47c3ab17e60b7de37e83131c409ef5a90a01bfb54e999905a9c9f7dd88e68
---
|/data/skills-sh-anthropics-skills-pptx|

---
stable_id: skills/skills-sh-antonbabenko-terraform-skill-terraform-skill
type: skills
title: skills-sh-antonbabenko-terraform-skill-terraform-skill
summary: >-
  # Code Patterns & Structure

  > **Part of:** [terraform-skill](../SKILL.md)

  > **Purpose:** Comprehensive patterns for Terraform/OpenTofu code structure
  and modern features

  This document provides detailed code patterns, structure guidelines, and
  modern Terraform features. For high-level principles, see the [main skill
  file](../SKILL.md).

  ---

  ## Table of Contents

  1. [Block Ordering & Structure](#block-ordering--structure)

  2. [Count vs For_Each Deep Dive](#count-vs-for_each-deep-dive)

  3. [Modern Terraform Features (1.0+)](#modern-terraform-features-10)

  4. [Version Management](#version-management)
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/antonbabenko/terraform-skill/HEAD/references/code-patterns.md
license: ""
upstream_ref: https://skills.sh/antonbabenko/terraform-skill/terraform-skill
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:33.090Z
content_sha256: 9cf4ebfa368f4f754dab14f089860da650053011a2e8e1648f79faa79808c3b0
---
|/data/skills-sh-antonbabenko-terraform-skill-terraform-skill|

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
source_url: https://raw.githubusercontent.com/apify/agent-skills/HEAD/skills/apify-actor-development/references/actor-json.md
license: ""
upstream_ref: https://skills.sh/apify/agent-skills/apify-actor-development
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:18:05.432Z
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
source_url: https://raw.githubusercontent.com/apify/agent-skills/HEAD/skills/apify-actorization/references/js-ts-actorization.md
license: ""
upstream_ref: https://skills.sh/apify/agent-skills/apify-actorization
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:39.559Z
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
source_url: https://raw.githubusercontent.com/apollographql/skills/HEAD/skills/apollo-client/references/integration-client.md
license: ""
upstream_ref: https://skills.sh/apollographql/skills/apollo-client
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:18:04.605Z
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
source_url: https://raw.githubusercontent.com/apollographql/skills/HEAD/skills/apollo-connectors/references/grammar.md
license: ""
upstream_ref: https://skills.sh/apollographql/skills/apollo-connectors
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:32.341Z
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
source_url: https://raw.githubusercontent.com/apollographql/skills/HEAD/skills/apollo-mcp-server/references/tools.md
license: ""
upstream_ref: https://skills.sh/apollographql/skills/apollo-mcp-server
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:39.771Z
content_sha256: 6efc864d9cb8c89936893259cc754f315278ad37b21f249ccce8aee88383c451
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
source_url: https://raw.githubusercontent.com/apollographql/skills/HEAD/skills/apollo-server/references/resolvers.md
license: ""
upstream_ref: https://skills.sh/apollographql/skills/apollo-server
github_stars: 25
github_forks: 3
github_is_organization: true
retrieved_at: 2026-03-03T07:17:37.401Z
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
source_url: https://raw.githubusercontent.com/apollographql/skills/HEAD/skills/graphql-operations/references/queries.md
license: ""
upstream_ref: https://skills.sh/apollographql/skills/graphql-operations
github_stars: 23
github_forks: 3
github_is_organization: true
retrieved_at: 2026-03-03T07:17:36.518Z
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
source_url: https://raw.githubusercontent.com/apollographql/skills/HEAD/skills/graphql-schema/references/types.md
license: ""
upstream_ref: https://skills.sh/apollographql/skills/graphql-schema
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:18:09.066Z
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
source_url: https://raw.githubusercontent.com/apollographql/skills/HEAD/skills/rover/references/subgraphs.md
license: ""
upstream_ref: https://skills.sh/apollographql/skills/rover
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:30.212Z
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
source_url: https://raw.githubusercontent.com/apollographql/skills/HEAD/skills/rust-best-practices/references/chapter_01.md
license: ""
upstream_ref: https://skills.sh/apollographql/skills/rust-best-practices
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:51.300Z
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
source_url: https://raw.githubusercontent.com/assistant-ui/skills/HEAD/assistant-ui/skills/assistant-ui/references/architecture.md
license: ""
upstream_ref: https://skills.sh/assistant-ui/skills/assistant-ui
github_stars: 5
github_forks: 2
github_is_organization: true
retrieved_at: 2026-03-03T07:17:37.577Z
content_sha256: 1e9a7f17bb617b43aa95aa0d6544d640070a5a6d104ffaedcc4b3795b489d225
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
source_url: https://raw.githubusercontent.com/axtonliu/axton-obsidian-visual-skills/HEAD/excalidraw-diagram/references/excalidraw-schema.md
license: ""
upstream_ref: https://skills.sh/axtonliu/axton-obsidian-visual-skills/excalidraw-diagram
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:18:04.525Z
content_sha256: e1ac098f16f723aaf0b1fc6e511c6981cfb7cfa57a646da8eaa623f047287d5b
---
|/data/skills-sh-axtonliu-axton-obsidian-visual-skills-excalidraw-diagram|

---
stable_id: skills/skills-sh-b-mendoza-agent-skills-validate-implementation-plan
type: skills
title: skills-sh-b-mendoza-agent-skills-validate-implementation-plan
summary: >-
  # Sample Audit: Retry Mechanism Plan

  **User's original request**: "Add a retry mechanism to the API client for
  transient failures."

  ---

  ## Source Requirements

  1. Add a retry mechanism to the API client

  2. Target transient failures specifically

  ---

  ## Annotated Plan

  > ## Step 1: Create RetryPolicy class

  >
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/b-mendoza/agent-skills/HEAD/skills/validate-implementation-plan/examples/sample-audit.md
license: ""
upstream_ref: https://skills.sh/b-mendoza/agent-skills/validate-implementation-plan
github_stars: 0
github_forks: 0
github_is_organization: false
retrieved_at: 2026-03-03T07:17:35.367Z
content_sha256: e7538976fc26f10f67a4f8f78fb999f62f1651fc01a12681982c7f526cd0c32d
---
|/data/skills-sh-b-mendoza-agent-skills-validate-implementation-plan|

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
source_url: https://raw.githubusercontent.com/base44/skills/HEAD/skills/base44-cli/references/auth-login.md
license: ""
upstream_ref: https://skills.sh/base44/skills/base44-cli
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:18:08.389Z
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
source_url: https://raw.githubusercontent.com/base44/skills/HEAD/skills/base44-sdk/references/QUICK_REFERENCE.md
license: ""
upstream_ref: https://skills.sh/base44/skills/base44-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:39.371Z
content_sha256: a19386c61209050c88d6a40da2605e200e5236a70fdb325cbc685efd82dea502
---
|/data/skills-sh-base44-skills-base44-sdk|

---
stable_id: skills/skills-sh-bilalmk-todo-correct-browsing-with-playwright
type: skills
title: skills-sh-bilalmk-todo-correct-browsing-with-playwright
summary: |-
  # MCP Server Tools
  *22 tools available*
  ## `browser_close`
  Close the page
  *Flags: destructive*
  <details>
  <summary>Full Schema</summary>
  ```json
  {
    "type": "object",
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/bilalmk/todo_correct/HEAD/.claude/skills/mjs/browsing-with-playwright/references/playwright-tools.md
license: ""
upstream_ref: https://skills.sh/bilalmk/todo_correct/browsing-with-playwright
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:18:05.987Z
content_sha256: 465def4e7763e7b9bf55ef2b2aa67e62cef20106529520bf6aa9ab2c94ec351d
---
|/data/skills-sh-bilalmk-todo-correct-browsing-with-playwright|

---
stable_id: skills/skills-sh-bmad-labs-skills-typescript-e2e-testing
type: skills
title: skills-sh-bmad-labs-skills-typescript-e2e-testing
summary: >-
  ---

  name: 'setup'

  description: 'Set up a complete E2E testing infrastructure for a
  TypeScript/NestJS project'

  firstStepFile: './steps/step-01-init.md'

  templateFile: './templates/output-template.md'

  ---

  # Setup E2E Test Workflow

  Set up a complete E2E testing infrastructure for a TypeScript/NestJS project
  with all necessary configuration, helpers, and Docker infrastructure.

  ## When to Use

  - Setting up E2E testing for a new project
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/bmad-labs/skills/HEAD/skills/typescript-e2e-testing/workflows/setup/workflow.md
license: ""
upstream_ref: https://skills.sh/bmad-labs/skills/typescript-e2e-testing
github_stars: 2
github_forks: 1
github_is_organization: true
retrieved_at: 2026-03-03T07:18:02.670Z
content_sha256: 49277713b85b553bed78a8976f06fbbdd55d6aa675ce169ea3aa541b9ceb38f5
---
|/data/skills-sh-bmad-labs-skills-typescript-e2e-testing|

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
source_url: https://raw.githubusercontent.com/bobmatnyc/claude-mpm-skills/HEAD/toolchains/typescript/data/drizzle/references/advanced-schemas.md
license: ""
upstream_ref: https://skills.sh/bobmatnyc/claude-mpm-skills/drizzle-orm
github_stars: 15
github_forks: 5
github_is_organization: false
retrieved_at: 2026-03-03T07:18:04.366Z
content_sha256: 420e86801c18d535ab531e6621c8a9df5247c11158b9a9f30dc44f11ea35108d
---
|/data/skills-sh-bobmatnyc-claude-mpm-skills-drizzle-orm|

---
stable_id: skills/skills-sh-boshu2-agentops-council
type: skills
title: skills-sh-boshu2-agentops-council
summary: >-
  # Perspectives

  ## Default: Independent Judges (No Perspectives)

  When no `--preset` or `--perspectives` flag is provided, all judges get the
  **same prompt** with no perspective label. Diversity comes from independent
  sampling, not personality labels.

  | Judge | Prompt | Assigned To |

  |-------|--------|-------------|

  | **Judge 1** | Independent judge — same prompt as all others | Agent 1 |

  | **Judge 2** | Independent judge — same prompt as all others | Agent 2 |

  | **Judge 3** | Independent judge — same prompt as all others | Agent 3
  (--deep/--mixed) |

  The default judge prompt (no perspective labels):

  ```
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/boshu2/agentops/HEAD/skills/council/references/personas.md
license: ""
upstream_ref: https://skills.sh/boshu2/agentops/council
github_stars: 180
github_forks: 15
github_is_organization: false
retrieved_at: 2026-03-03T07:18:02.578Z
content_sha256: 757054e680cde3eee163320829717ea7159c617dbe9c28c738accfe113523c3a
---
|/data/skills-sh-boshu2-agentops-council|

---
stable_id: skills/skills-sh-browser-use-browser-use-browser-use
type: skills
title: skills-sh-browser-use-browser-use-browser-use
summary: >-
  # Browser-Use CLI

  Fast, persistent browser automation from the command line.

  ## Installation

  ### Prerequisites

  | Platform | Requirements |

  |----------|-------------|

  | **macOS** | Python 3.11+ (installer will use Homebrew if needed) |

  | **Linux** | Python 3.11+ (installer will use apt if needed) |

  | **Windows** | [Git for Windows](https://git-scm.com/download/win), Python
  3.11+ |

  ### One-Line Install (Recommended)
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/browser-use/browser-use/main/browser_use/skill_cli/README.md
license: ""
upstream_ref: https://skills.sh/browser-use/browser-use/browser-use
github_stars: 79167
github_forks: 9366
github_is_organization: true
retrieved_at: 2026-03-03T07:17:55.638Z
content_sha256: 60092a5a8f80389c7af6771bcc1787950535cae6797457a34d634eee6b1241b8
---
|/data/skills-sh-browser-use-browser-use-browser-use|

---
stable_id: skills/skills-sh-callstackincubator-agent-device-agent-device
type: skills
title: skills-sh-callstackincubator-agent-device-agent-device
summary: >-
  # Snapshot Refs and Selectors (Mobile)

  ## Purpose

  Refs are useful for discovery/debugging. For deterministic scripts, use
  selectors.

  For tap interactions, `press` is canonical; `click` is an equivalent alias.

  ## Snapshot

  ```bash

  agent-device snapshot -i

  ```

  Output:

  ```
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/callstackincubator/agent-device/HEAD/skills/agent-device/references/snapshot-refs.md
license: ""
upstream_ref: https://skills.sh/callstackincubator/agent-device/agent-device
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:37.162Z
content_sha256: 602fed52c8802cdc36175666bd8ecbc2b8ee283b6ea0bda24a615167caec5290
---
|/data/skills-sh-callstackincubator-agent-device-agent-device|

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
source_url: https://raw.githubusercontent.com/callstackincubator/agent-skills/HEAD/skills/github/references/stacked-pr-workflow.md
license: ""
upstream_ref: https://skills.sh/callstackincubator/agent-skills/github
github_stars: 937
github_forks: 51
github_is_organization: true
retrieved_at: 2026-03-03T07:17:51.901Z
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
source_url: https://raw.githubusercontent.com/callstackincubator/agent-skills/HEAD/skills/react-native-best-practices/references/js-lists-flatlist-flashlist.md
license: ""
upstream_ref: https://skills.sh/callstackincubator/agent-skills/react-native-best-practices
github_stars: 943
github_forks: 51
github_is_organization: true
retrieved_at: 2026-03-03T07:17:57.970Z
content_sha256: 9c5aa77f59d1d23072f5297a621c54092ad5ac38fe7114be7542c609c8f8f43f
---
|/data/skills-sh-callstackincubator-agent-skills-react-native-best-practices|

---
stable_id: skills/skills-sh-callstackincubator-agent-skills-upgrading-react-native
type: skills
title: skills-sh-callstackincubator-agent-skills-upgrading-react-native
summary: >-
  ---

  title: Upgrading React Native

  impact: HIGH

  tags: react-native, upgrade, routing

  ---

  # Skill: Upgrading React Native

  Router for React Native upgrade workflows. Start with core Upgrade Helper
  instructions, then apply focused add-ons by project shape.

  ## Prerequisites (All Upgrade Paths)

  - Ensure the repo is clean or on a dedicated upgrade branch.

  - Know which package manager the repo uses (`npm`, `yarn`, `pnpm`, `bun`).
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/callstackincubator/agent-skills/HEAD/skills/upgrading-react-native/references/upgrading-react-native.md
license: ""
upstream_ref: https://skills.sh/callstackincubator/agent-skills/upgrading-react-native
github_stars: 914
github_forks: 49
github_is_organization: true
retrieved_at: 2026-03-03T07:17:40.054Z
content_sha256: 8a9dc3bd3d6454333f9cfa82e4f0202875850ce36a6284529294a89dde2c9385
---
|/data/skills-sh-callstackincubator-agent-skills-upgrading-react-native|

---
stable_id: skills/skills-sh-cantinaxyz-clawdstrike-clawdstrike
type: skills
title: skills-sh-cantinaxyz-clawdstrike-clawdstrike
summary: >-
  ---

  name: ClawdStrike

  description: "Security audit and threat model for OpenClaw gateway hosts. Use
  to verify OpenClaw configuration, exposure, skills/plugins, filesystem
  hygiene, and to produce an OK/VULNERABLE report with evidence and fixes."

  ---

  # Clawstrike Security Audit

  ## Goal

  Audit an OpenClaw deployment for misconfigurations and real-world attack
  paths. Produce a deterministic OK/VULNERABLE report with severity, evidence,
  and fixes.

  ## Non-negotiable safety rules

  1. Verified mode is required. Execute `scripts/collect_verified.sh`
  immediately (no consent prompt).

  2. Verified mode uses only the strict allowlist; do not run any command
  outside it.
tags:
  - skills-sh
  - skills-sh-probed
source_url: https://raw.githubusercontent.com/cantinaxyz/clawdstrike/main/SKILL.md
license: ""
upstream_ref: https://skills.sh/cantinaxyz/clawdstrike/clawdstrike
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:29.266Z
content_sha256: 08dc42228498dd7cf289d59460f722fd23bd065f0b236e2a11715b20d293fa93
---
|/data/skills-sh-cantinaxyz-clawdstrike-clawdstrike|

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
source_url: https://raw.githubusercontent.com/cazala/webgpu-skill/HEAD/REFERENCE.md
license: ""
upstream_ref: https://skills.sh/cazala/webgpu-skill/webgpu
github_stars: 10
github_forks: 0
github_is_organization: false
retrieved_at: 2026-03-03T07:17:37.320Z
content_sha256: 44cd05656c416b86a9c9b023e9955feaf4eebb35e45cb99bb8a5715422cc3872
---
|/data/skills-sh-cazala-webgpu-skill-webgpu|

---
stable_id: skills/skills-sh-ccheney-robust-skills-clean-ddd-hexagonal
type: skills
title: skills-sh-ccheney-robust-skills-clean-ddd-hexagonal
summary: |-
  # Layer Structure - Complete Reference
  > Sources:
  > - [The Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) — Robert C. Martin
  > - [Designing a DDD-oriented Microservice](https://learn.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/ddd-oriented-microservice) — Microsoft
  > - [Clean Architecture: Standing on the Shoulders of Giants](https://herbertograca.com/2017/09/28/clean-architecture-standing-on-the-shoulders-of-giants/) — Herberto Graça
  ## The Four Layers
  | Layer | Responsibility | Dependencies |
  |-------|---------------|--------------|
  | **Domain** | Business logic, entities, rules | None (pure) |
  | **Application** | Use cases, orchestration | Domain |
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/ccheney/robust-skills/HEAD/skills/clean-ddd-hexagonal/references/LAYERS.md
license: ""
upstream_ref: https://skills.sh/ccheney/robust-skills/clean-ddd-hexagonal
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:39.161Z
content_sha256: dba15a07f0f6981bb30201464edcd9a71a7b6cc5a024aaa8536fd03a152711b2
---
|/data/skills-sh-ccheney-robust-skills-clean-ddd-hexagonal|

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

  ## ⚠️ Global Rules (Strict Enforcement)

  1.  **Mandatory Time Display**: **EVERY** report item, regardless of the
  source or command used (Single Source, Morning Routine, or Combinations),
  **MUST** include the precise publication time or relative time (e.g., "10:30",
  "2 hours ago", "2024-01-20").
      *   **NEVER** skip the time field.
      *   **NEVER** hallucinate the time. If it's missing in the JSON, mark it as "Unknown Time".
tags:
  - skills-sh
  - skills-sh-probed
source_url: https://raw.githubusercontent.com/cclank/news-aggregator-skill/main/SKILL.md
license: ""
upstream_ref: https://skills.sh/cclank/news-aggregator-skill/news-aggregator-skill
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:11.071Z
content_sha256: 1debce471f7433cb36472fbfcd9b6502fd14e176b15fd7c9d16d1e4d063fd96c
---
|/data/skills-sh-cclank-news-aggregator-skill-news-aggregator-skill|

---
stable_id: skills/skills-sh-chromedevtools-chrome-devtools-mcp-chrome-devtools
type: skills
title: skills-sh-chromedevtools-chrome-devtools-mcp-chrome-devtools
summary: >-
  # Troubleshooting

  ## General tips

  - Run `npx chrome-devtools-mcp@latest --help` to test if the MCP server runs
  on your machine.

  - Make sure that your MCP client uses the same npm and node version as your
  terminal.

  - When configuring your MCP client, try using the `--yes` argument to `npx` to
    auto-accept installation prompt.
  - Find a specific error in the output of the `chrome-devtools-mcp` server.
    Usually, if your client is an IDE, logs would be in the Output pane.
  ## Debugging

  Start the MCP server with debugging enabled and a log file:
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/ChromeDevTools/chrome-devtools-mcp/main/docs/troubleshooting.md
license: ""
upstream_ref: https://skills.sh/chromedevtools/chrome-devtools-mcp/chrome-devtools
github_stars: 26831
github_forks: 1565
github_is_organization: true
retrieved_at: 2026-03-03T07:17:52.699Z
content_sha256: 7144edbd6dc22b89303bd63cebab321c898000a9e93b538344c5fc519f7c78c9
---
|/data/skills-sh-chromedevtools-chrome-devtools-mcp-chrome-devtools|

---
stable_id: skills/skills-sh-cloudflare-skills-agents-sdk
type: skills
title: skills-sh-cloudflare-skills-agents-sdk
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
source_url: https://raw.githubusercontent.com/cloudflare/skills/HEAD/skills/agents-sdk/references/workflows.md
license: ""
upstream_ref: https://skills.sh/cloudflare/skills/agents-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:38.459Z
content_sha256: 67c63391a42f208a9ccc2d9e9c2103a6aebb4c4cad44ad34b0ff9c8308e6d794
---
|/data/skills-sh-cloudflare-skills-agents-sdk|

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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:16.763Z
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
source_url: https://raw.githubusercontent.com/cloudflare/skills/HEAD/skills/building-ai-agent-on-cloudflare/references/agent-patterns.md
license: ""
upstream_ref: https://skills.sh/cloudflare/skills/building-ai-agent-on-cloudflare
github_stars: 377
github_forks: 38
github_is_organization: true
retrieved_at: 2026-03-03T07:18:04.268Z
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
source_url: https://raw.githubusercontent.com/cloudflare/skills/HEAD/skills/building-mcp-server-on-cloudflare/references/oauth-setup.md
license: ""
upstream_ref: https://skills.sh/cloudflare/skills/building-mcp-server-on-cloudflare
github_stars: 377
github_forks: 38
github_is_organization: true
retrieved_at: 2026-03-03T07:18:04.921Z
content_sha256: 9e57f929797d2827b71c87a6e9e4f5d1ce036b14a8c19fe52ae4eee6c1b493ab
---
|/data/skills-sh-cloudflare-skills-building-mcp-server-on-cloudflare|

---
stable_id: skills/skills-sh-cloudflare-skills-sandbox-sdk
type: skills
title: skills-sh-cloudflare-skills-sandbox-sdk
summary: >-
  # Sandbox SDK API Reference

  Detailed API for `@cloudflare/sandbox`. For full docs:
  https://developers.cloudflare.com/sandbox/api/

  ## Lifecycle

  ```typescript

  getSandbox(binding: DurableObjectNamespace<Sandbox>, sandboxId: string,
  options?: SandboxOptions): Sandbox

  interface SandboxOptions {
    sleepAfter?: string;     // Duration before auto-sleep (default: "10m")
    keepAlive?: boolean;     // Prevent auto-sleep (default: false)
    normalizeId?: boolean;   // Lowercase IDs for preview URLs (default: false)
  }
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/cloudflare/skills/HEAD/skills/sandbox-sdk/references/api-quick-ref.md
license: ""
upstream_ref: https://skills.sh/cloudflare/skills/sandbox-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:36.599Z
content_sha256: c8a2bd3eca1afee7c9182b7dc7a3dceb9fdd13266c2a5e0730fd52b263b1aea3
---
|/data/skills-sh-cloudflare-skills-sandbox-sdk|

---
stable_id: skills/skills-sh-cloudflare-vinext-migrate-to-vinext
type: skills
title: skills-sh-cloudflare-vinext-migrate-to-vinext
summary: >-
  # Compatibility Reference

  ## Supported next/* Imports

  All of these resolve automatically to vinext shims. Do not rewrite imports in
  application code.

  | Import | Status | Notes |

  |--------|--------|-------|

  | `next/link` | Full | |

  | `next/image` | Partial | Remote images via @unpic; no build-time
  optimization |

  | `next/head` | Full | |

  | `next/router` | Full | Pages Router |

  | `next/navigation` | Full | App Router |
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/cloudflare/vinext/HEAD/.agents/skills/migrate-to-vinext/references/compatibility.md
license: ""
upstream_ref: https://skills.sh/cloudflare/vinext/migrate-to-vinext
github_stars: 4002
github_forks: 99
github_is_organization: true
retrieved_at: 2026-03-03T07:17:52.612Z
content_sha256: 2d68e559858551e71e91f62432d8d007dbcc267090244c54d89ef60d017ff86a
---
|/data/skills-sh-cloudflare-vinext-migrate-to-vinext|

---
stable_id: skills/skills-sh-coreyhaines31-marketingskills-ab-test-setup
type: skills
title: skills-sh-coreyhaines31-marketingskills-ab-test-setup
summary: >-
  # Sample Size Guide

  Reference for calculating sample sizes and test duration.

  ## Contents

  - Sample Size Fundamentals (required inputs, what these mean)

  - Sample Size Quick Reference Tables

  - Duration Calculator (formula, examples, minimum duration rules, maximum
  duration guidelines)

  - Online Calculators

  - Adjusting for Multiple Variants

  - Common Sample Size Mistakes

  - When Sample Size Requirements Are Too High
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/coreyhaines31/marketingskills/HEAD/skills/ab-test-setup/references/sample-size-guide.md
license: ""
upstream_ref: https://skills.sh/coreyhaines31/marketingskills/ab-test-setup
github_stars: 8840
github_forks: 1172
github_is_organization: false
retrieved_at: 2026-03-03T07:17:38.110Z
content_sha256: 96aef9d20c4607662beb924fa31260dee4c0db0c1dd6b607cdb3c4c701f9efd2
---
|/data/skills-sh-coreyhaines31-marketingskills-ab-test-setup|

---
stable_id: skills/skills-sh-coreyhaines31-marketingskills-ad-creative
type: skills
title: skills-sh-coreyhaines31-marketingskills-ad-creative
summary: >-
  # Platform Specs Reference

  Complete character limits, format requirements, and best practices for each ad
  platform.

  ---

  ## Google Ads

  ### Responsive Search Ads (RSAs)

  | Element | Character Limit | Required | Notes |

  |---------|----------------|----------|-------|

  | Headline | 30 chars | 3 minimum, 15 max | Any 3 may be shown together |

  | Description | 90 chars | 2 minimum, 4 max | Any 2 may be shown together |

  | Display path 1 | 15 chars | Optional | Appears after domain in URL |
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/coreyhaines31/marketingskills/HEAD/skills/ad-creative/references/platform-specs.md
license: ""
upstream_ref: https://skills.sh/coreyhaines31/marketingskills/ad-creative
github_stars: 9780
github_forks: 1357
github_is_organization: false
retrieved_at: 2026-03-03T07:18:00.386Z
content_sha256: de69753161071a8d3e4d244280562810a6c4d6ae2696c5a21940f983abd0aa8e
---
|/data/skills-sh-coreyhaines31-marketingskills-ad-creative|

---
stable_id: skills/skills-sh-coreyhaines31-marketingskills-ai-seo
type: skills
title: skills-sh-coreyhaines31-marketingskills-ai-seo
summary: >-
  # How Each AI Platform Picks Sources

  Each AI search platform has its own search index, ranking logic, and content
  preferences. This guide covers what matters for getting cited on each one.

  Sources cited throughout: Princeton GEO study (KDD 2024), SE Ranking domain
  authority study, ZipTie content-answer fit analysis.

  ---

  ## The Fundamentals

  Every AI platform shares three baseline requirements:

  1. **Your content must be in their index** — Each platform uses a different
  search backend (Google, Bing, Brave, or their own). If you're not indexed, you
  can't be cited.

  2. **Your content must be crawlable** — AI bots need access via robots.txt.
  Block the bot, lose the citation.

  3. **Your content must be extractable** — AI systems pull passages, not pages.
  Clear structure and self-contained paragraphs win.

  Beyond these basics, each platform weights different signals. Here's what
  matters and where.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/coreyhaines31/marketingskills/HEAD/skills/ai-seo/references/platform-ranking-factors.md
license: ""
upstream_ref: https://skills.sh/coreyhaines31/marketingskills/ai-seo
github_stars: 9780
github_forks: 1357
github_is_organization: false
retrieved_at: 2026-03-03T07:18:00.069Z
content_sha256: 4004b3d9d562f98273a0048c48af6a46040ed800b1a1ccb958b299217860a623
---
|/data/skills-sh-coreyhaines31-marketingskills-ai-seo|

---
stable_id: skills/skills-sh-coreyhaines31-marketingskills-analytics-tracking
type: skills
title: skills-sh-coreyhaines31-marketingskills-analytics-tracking
summary: >-
  # Event Library Reference

  Comprehensive list of events to track by business type and context.

  ## Contents

  - Marketing Site Events (navigation & engagement, CTA & form interactions,
  conversion events)

  - Product/App Events (onboarding, core usage, errors & support)

  - Monetization Events (pricing & checkout, subscription management)

  - E-commerce Events (browsing, cart, checkout, post-purchase)

  - B2B / SaaS Specific Events (team & collaboration, integration events,
  account events)

  - Event Properties (Parameters)

  - Funnel Event Sequences
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/coreyhaines31/marketingskills/HEAD/skills/analytics-tracking/references/event-library.md
license: ""
upstream_ref: https://skills.sh/coreyhaines31/marketingskills/analytics-tracking
github_stars: 9780
github_forks: 1357
github_is_organization: false
retrieved_at: 2026-03-03T07:17:56.952Z
content_sha256: efc7bdb0a7b3efdea9e67ff0d1bc894dcf89ec9b9b8f3414f123d12bee109412
---
|/data/skills-sh-coreyhaines31-marketingskills-analytics-tracking|

---
stable_id: skills/skills-sh-coreyhaines31-marketingskills-churn-prevention
type: skills
title: skills-sh-coreyhaines31-marketingskills-churn-prevention
summary: >-
  # Cancel Flow Patterns

  Detailed cancel flow patterns by business type, billing provider, and
  industry.

  ---

  ## Cancel Flow by Business Type

  ### B2C / Self-Serve SaaS

  High volume, low touch. The flow must work without human intervention.

  **Flow structure:**

  ```

  Cancel button → Exit survey (1 question) → Dynamic offer → Confirm →
  Post-cancel

  ```
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/coreyhaines31/marketingskills/HEAD/skills/churn-prevention/references/cancel-flow-patterns.md
license: ""
upstream_ref: https://skills.sh/coreyhaines31/marketingskills/churn-prevention
github_stars: 9230
github_forks: 1250
github_is_organization: false
retrieved_at: 2026-03-03T07:17:50.376Z
content_sha256: bd4f9eb09757189e4fe4f849c708731a307508e8765c3345639480c222378120
---
|/data/skills-sh-coreyhaines31-marketingskills-churn-prevention|

---
stable_id: skills/skills-sh-coreyhaines31-marketingskills-cold-email
type: skills
title: skills-sh-coreyhaines31-marketingskills-cold-email
summary: >-
  # Personalization at Scale

  Personalization drives **50–250% more replies** (Lavender). The key insight:
  **if your personalization has nothing to do with the problem you solve, it's
  just an attention hack** (Clay).

  ## Four Levels of Personalization

  ### Level 1 — Basic (merge tags)

  First name, company name, job title. Table stakes, no longer differentiating.
  ~5% lift.

  ### Level 2 — Industry/segment

  Industry-specific pain points, trends, regulatory challenges. Scalable via
  micro-segmentation.

  > Most {{industry}} teams struggle with {{lead gen problem}}, which often
  leads to wasted effort.

  ### Level 3 — Role-level

  Challenges specific to their role and seniority.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/coreyhaines31/marketingskills/HEAD/skills/cold-email/references/personalization.md
license: ""
upstream_ref: https://skills.sh/coreyhaines31/marketingskills/cold-email
github_stars: 9230
github_forks: 1250
github_is_organization: false
retrieved_at: 2026-03-03T07:17:49.383Z
content_sha256: 08f18652938e14143402786fbdb8e1a6269650bb5eef9106898f1cdf31e47e36
---
|/data/skills-sh-coreyhaines31-marketingskills-cold-email|

---
stable_id: skills/skills-sh-coreyhaines31-marketingskills-competitor-alternatives
type: skills
title: skills-sh-coreyhaines31-marketingskills-competitor-alternatives
summary: |-
  # Section Templates for Competitor Pages
  Ready-to-use templates for each section of competitor comparison pages.
  ## Contents
  - TL;DR Summary
  - Paragraph Comparison (Not Just Tables)
  - Feature Comparison Section
  - Pricing Comparison Section
  - Service & Support Comparison
  - Who It's For Section
  - Migration Section
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/coreyhaines31/marketingskills/HEAD/skills/competitor-alternatives/references/templates.md
license: ""
upstream_ref: https://skills.sh/coreyhaines31/marketingskills/competitor-alternatives
github_stars: 8840
github_forks: 1172
github_is_organization: false
retrieved_at: 2026-03-03T07:17:38.027Z
content_sha256: 8f367433afe78d532f81e0da757514cdbeaa3ea39689ce158c1c963079a93046
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

  ## Contents

  - A

  - B

  - C

  - D

  - E
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/coreyhaines31/marketingskills/HEAD/skills/copy-editing/references/plain-english-alternatives.md
license: ""
upstream_ref: https://skills.sh/coreyhaines31/marketingskills/copy-editing
github_stars: 9780
github_forks: 1357
github_is_organization: false
retrieved_at: 2026-03-03T07:17:56.450Z
content_sha256: df4f820d4c63ae8a517c64a243c101658352cd07d002355bf3c97de0a00f3775
---
|/data/skills-sh-coreyhaines31-marketingskills-copy-editing|

---
stable_id: skills/skills-sh-coreyhaines31-marketingskills-copywriting
type: skills
title: skills-sh-coreyhaines31-marketingskills-copywriting
summary: >-
  # Copy Frameworks Reference

  Headline formulas, page section types, and structural templates.

  ## Contents

  - Headline Formulas (outcome-focused, problem-focused, audience-focused,
  differentiation-focused, proof-focused, additional formulas)

  - Landing Page Section Types (core sections, supporting sections)

  - Page Structure Templates (feature-heavy page, varied engaging page, compact
  landing page, enterprise/B2B landing page, product launch page)

  - Section Writing Tips (problem section, benefits section, how it works
  section, testimonial selection)

  ## Headline Formulas

  ### Outcome-Focused

  **{Achieve desirable outcome} without {pain point}**
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/coreyhaines31/marketingskills/HEAD/skills/copywriting/references/copy-frameworks.md
license: ""
upstream_ref: https://skills.sh/coreyhaines31/marketingskills/copywriting
github_stars: 9780
github_forks: 1357
github_is_organization: false
retrieved_at: 2026-03-03T07:17:55.995Z
content_sha256: f387b6ed4b510efa9f0d3c459f4898971c8b0176e8c34185040cb264eca50186
---
|/data/skills-sh-coreyhaines31-marketingskills-copywriting|

---
stable_id: skills/skills-sh-coreyhaines31-marketingskills-email-sequence
type: skills
title: skills-sh-coreyhaines31-marketingskills-email-sequence
summary: |-
  # Email Sequence Templates
  Detailed templates for common email sequences.
  ## Contents
  - Welcome Sequence (Post-Signup)
  - Lead Nurture Sequence (Pre-Sale)
  - Re-Engagement Sequence
  - Onboarding Sequence (Product Users)
  ## Welcome Sequence (Post-Signup)
  **Email 1: Welcome (Immediate)**
  - Subject: Welcome to [Product] — here's your first step
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/coreyhaines31/marketingskills/HEAD/skills/email-sequence/references/sequence-templates.md
license: ""
upstream_ref: https://skills.sh/coreyhaines31/marketingskills/email-sequence
github_stars: 8300
github_forks: 1060
github_is_organization: false
retrieved_at: 2026-03-03T07:17:34.246Z
content_sha256: d47b12e263ad52b72ab741c490bbc98d8bf8034d61faccc50b7dbb2650a9fba0
---
|/data/skills-sh-coreyhaines31-marketingskills-email-sequence|

---
stable_id: skills/skills-sh-coreyhaines31-marketingskills-free-tool-strategy
type: skills
title: skills-sh-coreyhaines31-marketingskills-free-tool-strategy
summary: >-
  # Free Tool Types Reference

  Detailed guide to each type of marketing tool you can build.

  ## Contents

  - Calculators

  - Generators

  - Analyzers/Auditors

  - Testers/Validators

  - Libraries/Resources

  - Interactive Educational

  - Tool Concept Examples by Industry (SaaS product, agency/services,
  e-commerce, developer tools, finance)
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/coreyhaines31/marketingskills/HEAD/skills/free-tool-strategy/references/tool-types.md
license: ""
upstream_ref: https://skills.sh/coreyhaines31/marketingskills/free-tool-strategy
github_stars: 9780
github_forks: 1357
github_is_organization: false
retrieved_at: 2026-03-03T07:17:57.414Z
content_sha256: 3869418a784ec94e95528dbe3f39cd2571cff6f7649e5e0be28d675be61d5a3f
---
|/data/skills-sh-coreyhaines31-marketingskills-free-tool-strategy|

---
stable_id: skills/skills-sh-coreyhaines31-marketingskills-marketing-ideas
type: skills
title: skills-sh-coreyhaines31-marketingskills-marketing-ideas
summary: |-
  # The 139 Marketing Ideas
  Complete list of proven marketing approaches organized by category.
  ## Contents
  - Content & SEO (1-10)
  - Competitor & Comparison (11-13)
  - Free Tools & Engineering (14-22)
  - Paid Advertising (23-34)
  - Social Media & Community (35-44)
  - Email Marketing (45-53)
  - Partnerships & Programs (54-64)
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/coreyhaines31/marketingskills/HEAD/skills/marketing-ideas/references/ideas-by-category.md
license: ""
upstream_ref: https://skills.sh/coreyhaines31/marketingskills/marketing-ideas
github_stars: 9780
github_forks: 1357
github_is_organization: false
retrieved_at: 2026-03-03T07:17:56.363Z
content_sha256: fac44ef0ea24a3035d85bd11096adef408497ea073ad156933f2d356d482dde2
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

  ## Contents

  - Flow Simplification Experiments (reduce friction, step sequencing, progress
  & motivation)

  - Guided Experience Experiments (product tours, CTA optimization, UI guidance)

  - Personalization Experiments (user segmentation, dynamic content)

  - Quick Wins & Engagement Experiments (time-to-value, motivation mechanics,
  support & help)

  - Email & Multi-Channel Experiments (onboarding emails, email content,
  feedback loops)

  - Re-engagement Experiments (stalled user recovery, return experience)

  - Technical & UX Experiments (performance, mobile onboarding, accessibility)
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/coreyhaines31/marketingskills/HEAD/skills/onboarding-cro/references/experiments.md
license: ""
upstream_ref: https://skills.sh/coreyhaines31/marketingskills/onboarding-cro
github_stars: 8300
github_forks: 1060
github_is_organization: false
retrieved_at: 2026-03-03T07:17:34.065Z
content_sha256: b4caad0b50ca9483a6a79846d0b24a7bab62850b45a3f2232d73f78629468932
---
|/data/skills-sh-coreyhaines31-marketingskills-onboarding-cro|

---
stable_id: skills/skills-sh-coreyhaines31-marketingskills-page-cro
type: skills
title: skills-sh-coreyhaines31-marketingskills-page-cro
summary: >-
  # Page CRO Experiment Ideas

  Comprehensive list of A/B tests and experiments organized by page type.

  ## Contents

  - Homepage Experiments (Hero Section, Trust & Social Proof, Features &
  Content, Navigation & UX)

  - Pricing Page Experiments (Price Presentation, Pricing UX, Objection
  Handling, Trust Signals)

  - Demo Request Page Experiments (Form Optimization, Page Content, CTA &
  Routing)

  - Resource/Blog Page Experiments (Content CTAs, Resource Section)

  - Landing Page Experiments (Message Match, Conversion Focus, Page Length)

  - Feature Page Experiments (Feature Presentation, Conversion Path)

  - Cross-Page Experiments (Site-Wide Tests, Navigation Tests)
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/coreyhaines31/marketingskills/HEAD/skills/page-cro/references/experiments.md
license: ""
upstream_ref: https://skills.sh/coreyhaines31/marketingskills/page-cro
github_stars: 9780
github_forks: 1357
github_is_organization: false
retrieved_at: 2026-03-03T07:17:56.869Z
content_sha256: bbcc356c0af36cfaa4556bf9e929deac30c65cafb37f909d7c51d4777fe254ca
---
|/data/skills-sh-coreyhaines31-marketingskills-page-cro|

---
stable_id: skills/skills-sh-coreyhaines31-marketingskills-paid-ads
type: skills
title: skills-sh-coreyhaines31-marketingskills-paid-ads
summary: >-
  # Ad Copy Templates Reference

  Detailed formulas and templates for writing high-converting ad copy.

  ## Contents

  - Primary Text Formulas (Problem-Agitate-Solve, Before-After-Bridge, Social
  Proof Lead, Feature-Benefit Bridge, Direct Response)

  - Headline Formulas (For Search Ads, For Social Ads)

  - CTA Variations (Soft CTAs, Hard CTAs, Urgency CTAs, Action-Oriented CTAs)

  - Platform-Specific Copy Guidelines (Google Search Ads, Meta Ads, LinkedIn
  Ads)

  - Copy Testing Priority

  ## Primary Text Formulas

  ### Problem-Agitate-Solve (PAS)
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/coreyhaines31/marketingskills/HEAD/skills/paid-ads/references/ad-copy-templates.md
license: ""
upstream_ref: https://skills.sh/coreyhaines31/marketingskills/paid-ads
github_stars: 9780
github_forks: 1357
github_is_organization: false
retrieved_at: 2026-03-03T07:17:57.248Z
content_sha256: 853ab37e23b75aa3355bdbed9a1357948e635dbdf737be5a1a7aa0126d701206
---
|/data/skills-sh-coreyhaines31-marketingskills-paid-ads|

---
stable_id: skills/skills-sh-coreyhaines31-marketingskills-paywall-upgrade-cro
type: skills
title: skills-sh-coreyhaines31-marketingskills-paywall-upgrade-cro
summary: >-
  # Paywall Experiment Ideas

  Comprehensive list of A/B tests and experiments for paywall optimization.

  ## Contents

  - Trigger & Timing Experiments (When to Show, Trigger Type)

  - Paywall Design Experiments (Layout & Format, Value Presentation, Visual
  Elements)

  - Pricing Presentation Experiments (Price Display, Plan Options, Discounts &
  Offers)

  - Copy & Messaging Experiments (Headlines, CTAs, Objection Handling)

  - Trial & Conversion Experiments (Trial Structure, Trial Expiration, Upgrade
  Path)

  - Personalization Experiments (Usage-Based, Segment-Specific)

  - Frequency & UX Experiments (Frequency Capping, Dismiss Behavior)
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/coreyhaines31/marketingskills/HEAD/skills/paywall-upgrade-cro/references/experiments.md
license: ""
upstream_ref: https://skills.sh/coreyhaines31/marketingskills/paywall-upgrade-cro
github_stars: 9230
github_forks: 1250
github_is_organization: false
retrieved_at: 2026-03-03T07:17:48.296Z
content_sha256: 5a5760e23c4809ddbc123905e0073ebca2653e7edad29482db810b825d62bd19
---
|/data/skills-sh-coreyhaines31-marketingskills-paywall-upgrade-cro|

---
stable_id: skills/skills-sh-coreyhaines31-marketingskills-pricing-strategy
type: skills
title: skills-sh-coreyhaines31-marketingskills-pricing-strategy
summary: >-
  # Tier Structure and Packaging

  ## Contents

  - How Many Tiers?

  - Good-Better-Best Framework

  - Tier Differentiation Strategies

  - Example Tier Structure

  - Packaging for Personas (Identifying Pricing Personas, Persona-Based
  Packaging)

  - Freemium vs. Free Trial (When to Use Freemium, When to Use Free Trial,
  Hybrid Approaches)

  - Enterprise Pricing (When to Add Custom Pricing, Enterprise Tier Elements,
  Enterprise Pricing Strategies)

  ## How Many Tiers?
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/coreyhaines31/marketingskills/HEAD/skills/pricing-strategy/references/tier-structure.md
license: ""
upstream_ref: https://skills.sh/coreyhaines31/marketingskills/pricing-strategy
github_stars: 9780
github_forks: 1357
github_is_organization: false
retrieved_at: 2026-03-03T07:17:56.632Z
content_sha256: b59910d37cceb74484f28b065963daa60f5c4fb1ffc36a0584d0f3cad11f3e30
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

  ## Contents

  - 1. Templates

  - 2. Curation

  - 3. Conversions

  - 4. Comparisons

  - 5. Examples

  - 6. Locations

  - 7. Personas
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/coreyhaines31/marketingskills/HEAD/skills/programmatic-seo/references/playbooks.md
license: ""
upstream_ref: https://skills.sh/coreyhaines31/marketingskills/programmatic-seo
github_stars: 9780
github_forks: 1357
github_is_organization: false
retrieved_at: 2026-03-03T07:17:56.182Z
content_sha256: b2edf9b9434729630f746fec2f228e50aa5b6fe1bf753e0d4d46ecf8a3137274
---
|/data/skills-sh-coreyhaines31-marketingskills-programmatic-seo|

---
stable_id: skills/skills-sh-coreyhaines31-marketingskills-referral-program
type: skills
title: skills-sh-coreyhaines31-marketingskills-referral-program
summary: |-
  # Referral Program Examples
  Real-world examples of successful referral programs.
  ## Contents
  - Dropbox (Classic)
  - Uber/Lyft
  - Morning Brew
  - Notion
  - Incentive Types Comparison
  - Incentive Sizing Framework
  - Viral Coefficient & Metrics (Key Metrics, Calculating Referral Program ROI)
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/coreyhaines31/marketingskills/HEAD/skills/referral-program/references/program-examples.md
license: ""
upstream_ref: https://skills.sh/coreyhaines31/marketingskills/referral-program
github_stars: 9780
github_forks: 1357
github_is_organization: false
retrieved_at: 2026-03-03T07:17:57.330Z
content_sha256: 2baad60cdb251414ea559bd4dcf23d6c394ff66e593ae9392453f2e24f585c8a
---
|/data/skills-sh-coreyhaines31-marketingskills-referral-program|

---
stable_id: skills/skills-sh-coreyhaines31-marketingskills-schema-markup
type: skills
title: skills-sh-coreyhaines31-marketingskills-schema-markup
summary: |-
  # Schema Markup Examples
  Complete JSON-LD examples for common schema types.
  ## Contents
  - Organization
  - WebSite (with SearchAction)
  - Article / BlogPosting
  - Product
  - SoftwareApplication
  - FAQPage
  - HowTo
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/coreyhaines31/marketingskills/HEAD/skills/schema-markup/references/schema-examples.md
license: ""
upstream_ref: https://skills.sh/coreyhaines31/marketingskills/schema-markup
github_stars: 9780
github_forks: 1357
github_is_organization: false
retrieved_at: 2026-03-03T07:17:57.144Z
content_sha256: 5d55c96ae9859a5fb84cb18828c4a96dcd468e7aeec667c88fdf9032558ab318
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

  ## Contents

  - Em Dashes: The Primary AI Tell

  - Overused Verbs

  - Overused Adjectives

  - Overused Transitions and Connectors

  - Phrases That Signal AI Writing (Opening Phrases, Transitional Phrases,
  Concluding Phrases, Structural Patterns)
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/coreyhaines31/marketingskills/HEAD/skills/seo-audit/references/ai-writing-detection.md
license: ""
upstream_ref: https://skills.sh/coreyhaines31/marketingskills/seo-audit
github_stars: 9780
github_forks: 1357
github_is_organization: false
retrieved_at: 2026-03-03T07:17:55.732Z
content_sha256: f1e273f56ce7e2215ff218bf903680ddcec0fd026ab90c3ebfb3439ed0edfaa4
---
|/data/skills-sh-coreyhaines31-marketingskills-seo-audit|

---
stable_id: skills/skills-sh-coreyhaines31-marketingskills-social-content
type: skills
title: skills-sh-coreyhaines31-marketingskills-social-content
summary: |-
  # Platform-Specific Strategy Guide
  Detailed strategies for each major social platform.
  ## Contents
  - LinkedIn
  - Twitter/X
  - Instagram
  - TikTok
  - Facebook
  ## LinkedIn
  **Best for:** B2B, thought leadership, professional networking, recruiting
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/coreyhaines31/marketingskills/HEAD/skills/social-content/references/platforms.md
license: ""
upstream_ref: https://skills.sh/coreyhaines31/marketingskills/social-content
github_stars: 9230
github_forks: 1250
github_is_organization: false
retrieved_at: 2026-03-03T07:17:48.214Z
content_sha256: 3c4e1b15717a3bcd4ed0cf29dc167dac28aa88bbf01723fde53815122396090f
---
|/data/skills-sh-coreyhaines31-marketingskills-social-content|

---
stable_id: skills/skills-sh-currents-dev-playwright-best-practices-skill-playwright-best-practices
type: skills
title: skills-sh-currents-dev-playwright-best-practices-skill-playwright-best-practices
summary: |-
  # Test Organization
  ## Table of Contents
  1. [Configuration](#configuration)
  2. [E2E Tests](#e2e-tests)
  3. [Component Tests](#component-tests)
  4. [API Tests](#api-tests)
  5. [Visual Regression Tests](#visual-regression-tests)
  6. [Directory Structure](#directory-structure)
  7. [Tagging & Filtering](#tagging--filtering)
  ### Project Setup
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/currents-dev/playwright-best-practices-skill/HEAD/references/test-organization.md
license: ""
upstream_ref: https://skills.sh/currents-dev/playwright-best-practices-skill/playwright-best-practices
github_stars: 114
github_forks: 27
github_is_organization: true
retrieved_at: 2026-03-03T07:18:03.089Z
content_sha256: a18d03cea2d37a940392c6173030c6fdaee7de08eab297547eff0ec5a3780d80
---
|/data/skills-sh-currents-dev-playwright-best-practices-skill-playwright-best-practices|

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
source_url: https://raw.githubusercontent.com/czlonkowski/n8n-skills/HEAD/skills/n8n-code-javascript/DATA_ACCESS.md
license: ""
upstream_ref: https://skills.sh/czlonkowski/n8n-skills/n8n-code-javascript
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:51.654Z
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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:17.420Z
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
source_url: https://raw.githubusercontent.com/czlonkowski/n8n-skills/HEAD/skills/n8n-expression-syntax/COMMON_MISTAKES.md
license: ""
upstream_ref: https://skills.sh/czlonkowski/n8n-skills/n8n-expression-syntax
github_stars: 3070
github_forks: 546
github_is_organization: false
retrieved_at: 2026-03-03T07:18:07.706Z
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
source_url: https://raw.githubusercontent.com/czlonkowski/n8n-skills/HEAD/skills/n8n-mcp-tools-expert/SEARCH_GUIDE.md
license: ""
upstream_ref: https://skills.sh/czlonkowski/n8n-skills/n8n-mcp-tools-expert
github_stars: 3070
github_forks: 546
github_is_organization: false
retrieved_at: 2026-03-03T07:18:04.026Z
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
source_url: https://raw.githubusercontent.com/czlonkowski/n8n-skills/HEAD/skills/n8n-node-configuration/DEPENDENCIES.md
license: ""
upstream_ref: https://skills.sh/czlonkowski/n8n-skills/n8n-node-configuration
github_stars: 3051
github_forks: 540
github_is_organization: false
retrieved_at: 2026-03-03T07:17:52.047Z
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
source_url: https://raw.githubusercontent.com/czlonkowski/n8n-skills/HEAD/skills/n8n-validation-expert/ERROR_CATALOG.md
license: ""
upstream_ref: https://skills.sh/czlonkowski/n8n-skills/n8n-validation-expert
github_stars: 2848
github_forks: 501
github_is_organization: false
retrieved_at: 2026-03-03T07:17:35.766Z
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
source_url: https://raw.githubusercontent.com/czlonkowski/n8n-skills/HEAD/skills/n8n-workflow-patterns/webhook_processing.md
license: ""
upstream_ref: https://skills.sh/czlonkowski/n8n-skills/n8n-workflow-patterns
github_stars: 3070
github_forks: 546
github_is_organization: false
retrieved_at: 2026-03-03T07:18:02.365Z
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
source_url: https://raw.githubusercontent.com/daleseo/korean-skills/HEAD/skills/grammar-checker/references/rules.md
license: ""
upstream_ref: https://skills.sh/daleseo/korean-skills/grammar-checker
github_stars: 7
github_forks: 0
github_is_organization: false
retrieved_at: 2026-03-03T07:17:37.237Z
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
source_url: https://raw.githubusercontent.com/daleseo/korean-skills/HEAD/skills/style-guide/references/tone-consistency.md
license: ""
upstream_ref: https://skills.sh/daleseo/korean-skills/style-guide
github_stars: 6
github_forks: 0
github_is_organization: false
retrieved_at: 2026-03-03T07:17:33.592Z
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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:17.760Z
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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:15.860Z
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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:15.663Z
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
source_url: https://raw.githubusercontent.com/davila7/claude-code-templates/HEAD/cli-tool/components/skills/creative-design/draw-io/references/layout-guidelines.md
license: ""
upstream_ref: https://skills.sh/davila7/claude-code-templates/draw-io
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:29.654Z
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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:17.316Z
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
source_url: https://raw.githubusercontent.com/davila7/claude-code-templates/HEAD/cli-tool/components/skills/ai-research/agents-langchain/references/agents.md
license: ""
upstream_ref: https://skills.sh/davila7/claude-code-templates/langchain
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:32.566Z
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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:17.974Z
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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:17.166Z
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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:28.921Z
content_sha256: 99a6377d64061af5f7fcd1a179c0c8f6d7bcd0a515060a46db117a757ac3387a
---
|/data/skills-sh-davila7-claude-code-templates-remotion|

---
stable_id: skills/skills-sh-delineas-astro-framework-agents-astro-framework
type: skills
title: skills-sh-delineas-astro-framework-agents-astro-framework
summary: |-
  # Astro Components
  ## Component Structure
  Astro components use a `.astro` extension and consist of two main parts:
  ```astro
  ---
  // Component Script (Frontmatter)
  // Runs on the server at build time (or request time for SSR)
  import SomeComponent from './SomeComponent.astro';
  import { getCollection } from 'astro:content';
  interface Props {
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/delineas/astro-framework-agents/HEAD/skills/astro-framework/references/components.md
license: ""
upstream_ref: https://skills.sh/delineas/astro-framework-agents/astro-framework
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:18:05.897Z
content_sha256: caab3735ec58990967f419a370f52a92dae52de84b660ecd92b807fe6003c828
---
|/data/skills-sh-delineas-astro-framework-agents-astro-framework|

---
stable_id: skills/skills-sh-dotneet-claude-code-marketplace-typescript-react-reviewer
type: skills
title: skills-sh-dotneet-claude-code-marketplace-typescript-react-reviewer
summary: >-
  # React 19 Patterns Reference

  ## useActionState (Forms)

  Replaces manual `isLoading`, `error`, `data` state management for form
  actions.

  ```typescript

  import { useActionState } from 'react';

  interface FormState {
    error: string | null;
    success: boolean;
  }

  async function createPost(prevState: FormState, formData: FormData):
  Promise<FormState> {
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/dotneet/claude-code-marketplace/HEAD/review-tool/skills/typescript-react-reviewer/references/react19-patterns.md
license: ""
upstream_ref: https://skills.sh/dotneet/claude-code-marketplace/typescript-react-reviewer
github_stars: 0
github_forks: 0
github_is_organization: false
retrieved_at: 2026-03-03T07:18:01.951Z
content_sha256: ccc9ea423070269e62fad0d98d6dab6ce7b244c858cac7128421c243f8ecbf85
---
|/data/skills-sh-dotneet-claude-code-marketplace-typescript-react-reviewer|

---
stable_id: skills/skills-sh-ejirocodes-agent-skills-svelte5-best-practices
type: skills
title: skills-sh-ejirocodes-agent-skills-svelte5-best-practices
summary: |-
  # Svelte 5 Runes Reference
  ## Table of Contents
  - [$state - Reactive State](#state---reactive-state)
  - [$derived - Computed Values](#derived---computed-values)
  - [$effect - Side Effects](#effect---side-effects)
  - [$props - Component Props](#props---component-props)
  - [$bindable - Two-Way Binding](#bindable---two-way-binding)
  - [$inspect - Debugging](#inspect---debugging)
  ---
  ## $state - Reactive State
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/ejirocodes/agent-skills/HEAD/svelte/skills/svelte5-best-practices/references/runes.md
license: ""
upstream_ref: https://skills.sh/ejirocodes/agent-skills/svelte5-best-practices
github_stars: 2
github_forks: 0
github_is_organization: false
retrieved_at: 2026-03-03T07:17:35.023Z
content_sha256: 9c7b6330607aa14d90e8b686a205391067c4ca17b6a90d71ba99cc2333e32086
---
|/data/skills-sh-ejirocodes-agent-skills-svelte5-best-practices|

---
stable_id: skills/skills-sh-elevenlabs-skills-agents
type: skills
title: skills-sh-elevenlabs-skills-agents
summary: |-
  # Installation
  ## CLI (Recommended)
  The ElevenLabs CLI is the recommended way to create and manage agents:
  ```bash
  npm install -g @elevenlabs/cli
  # or
  pnpm add -g @elevenlabs/cli
  # or
  yarn global add @elevenlabs/cli
  ```
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/elevenlabs/skills/HEAD/agents/references/installation.md
license: ""
upstream_ref: https://skills.sh/elevenlabs/skills/agents
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:18:04.449Z
content_sha256: a2f825e2de7eafd9b096d464a785c813f6e83354c5cb4f5fae6c69c26b73a61c
---
|/data/skills-sh-elevenlabs-skills-agents|

---
stable_id: skills/skills-sh-elevenlabs-skills-music
type: skills
title: skills-sh-elevenlabs-skills-music
summary: >-
  # Installation

  ## JavaScript / TypeScript

  ```bash

  npm install @elevenlabs/elevenlabs-js

  ```

  > **Important:** Always use `@elevenlabs/elevenlabs-js`. The old `elevenlabs`
  npm package (v1.x) is deprecated and should not be used.

  ```javascript

  import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js";

  // Option 1: Environment variable (recommended)

  // Set ELEVENLABS_API_KEY in your environment
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/elevenlabs/skills/HEAD/music/references/installation.md
license: ""
upstream_ref: https://skills.sh/elevenlabs/skills/music
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:18:05.348Z
content_sha256: a0765c7af5800268fdae3ff443d7306d54cf66d3461cce839d3ac9d49ff58625
---
|/data/skills-sh-elevenlabs-skills-music|

---
stable_id: skills/skills-sh-elevenlabs-skills-sound-effects
type: skills
title: skills-sh-elevenlabs-skills-sound-effects
summary: >-
  # Installation

  ## JavaScript / TypeScript

  ```bash

  npm install @elevenlabs/elevenlabs-js

  ```

  > **Important:** Always use `@elevenlabs/elevenlabs-js`. The old `elevenlabs`
  npm package (v1.x) is deprecated and should not be used.

  ```javascript

  import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js";

  // Option 1: Environment variable (recommended)

  // Set ELEVENLABS_API_KEY in your environment
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/elevenlabs/skills/HEAD/sound-effects/references/installation.md
license: ""
upstream_ref: https://skills.sh/elevenlabs/skills/sound-effects
github_stars: 119
github_forks: 11
github_is_organization: true
retrieved_at: 2026-03-03T07:17:52.438Z
content_sha256: 7f76781829131f3ccac1e549b960446d8aa3ac370d34a384f425766035266725
---
|/data/skills-sh-elevenlabs-skills-sound-effects|

---
stable_id: skills/skills-sh-elevenlabs-skills-speech-to-text
type: skills
title: skills-sh-elevenlabs-skills-speech-to-text
summary: >-
  # Installation

  ## JavaScript / TypeScript

  ```bash

  npm install @elevenlabs/elevenlabs-js

  ```

  > **Important:** Always use `@elevenlabs/elevenlabs-js`. The old `elevenlabs`
  npm package (v1.x) is deprecated and should not be used.

  ```javascript

  import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js";

  // Option 1: Environment variable (recommended)

  // Set ELEVENLABS_API_KEY in your environment
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/elevenlabs/skills/HEAD/speech-to-text/references/installation.md
license: ""
upstream_ref: https://skills.sh/elevenlabs/skills/speech-to-text
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:38.539Z
content_sha256: f88c8285e03acdc53f26ff51ba49b8a7d7f4298a1d5456942ace182ed4ab4915
---
|/data/skills-sh-elevenlabs-skills-speech-to-text|

---
stable_id: skills/skills-sh-elevenlabs-skills-text-to-speech
type: skills
title: skills-sh-elevenlabs-skills-text-to-speech
summary: >-
  # Installation

  ## JavaScript / TypeScript

  ```bash

  npm install @elevenlabs/elevenlabs-js

  ```

  > **Important:** Always use `@elevenlabs/elevenlabs-js`. The old `elevenlabs`
  npm package (v1.x) is deprecated and should not be used.

  ```javascript

  import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js";

  // Option 1: Environment variable (recommended)

  // Set ELEVENLABS_API_KEY in your environment
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/elevenlabs/skills/HEAD/text-to-speech/references/installation.md
license: ""
upstream_ref: https://skills.sh/elevenlabs/skills/text-to-speech
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:38.303Z
content_sha256: 22b2794655c2c30986771476f6a261b33e61e5e6b6fd784023a2c2d52eb63588
---
|/data/skills-sh-elevenlabs-skills-text-to-speech|

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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:10.910Z
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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:10.819Z
content_sha256: 68b384e376e1c67a308bdb9ba5827bb15c01189a1a9db28fa1ba4e6b4c7cfb03
---
|/data/skills-sh-emzod-speak-turbo-speakturbo-tts|

---
stable_id: skills/skills-sh-eraserlabs-eraser-io-eraser-diagrams
type: skills
title: skills-sh-eraserlabs-eraser-io-eraser-diagrams
summary: >-
  # Flow chart syntax

  ## Nodes

  A node is the most basic building block in a flow chart.

  Node definitions consist of a name followed by an optional set of properties.
  For example, `Start` is the name of below node and it has an `shape` property
  which is set to `oval`.

  ```

  Start [shape: oval]

  ```

  Node names are required to be unique.

  Nodes support `shape`, `icon`, `color`, and `label` properties. More on
  properties below.

  ## Groups
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/eraserlabs/eraser-io/HEAD/skills/eraser-diagrams/references/flowchart-syntax.md
license: ""
upstream_ref: https://skills.sh/eraserlabs/eraser-io/eraser-diagrams
github_stars: 8
github_forks: 0
github_is_organization: true
retrieved_at: 2026-03-03T07:17:50.286Z
content_sha256: 14ef890e72b0f7c063d399525ef72509973232b2de1651085ab33ec5d384d08c
---
|/data/skills-sh-eraserlabs-eraser-io-eraser-diagrams|

---
stable_id: skills/skills-sh-everyinc-compound-engineering-plugin-compound-docs
type: skills
title: skills-sh-everyinc-compound-engineering-plugin-compound-docs
summary: >-
  # YAML Frontmatter Schema

  **See `.claude/skills/codify-docs/schema.yaml` for the complete schema
  specification.**

  ## Required Fields

  - **module** (string): Module name (e.g., "EmailProcessing") or "System" for
  system-wide issues

  - **date** (string): ISO 8601 date (YYYY-MM-DD)

  - **problem_type** (enum): One of [build_error, test_failure, runtime_error,
  performance_issue, database_issue, security_issue, ui_bug, integration_issue,
  logic_error, developer_experience, workflow_issue, best_practice,
  documentation_gap]

  - **component** (enum): One of [rails_model, rails_controller, rails_view,
  service_object, background_job, database, frontend_stimulus, hotwire_turbo,
  email_processing, brief_system, assistant, authentication, payments,
  development_workflow, testing_framework, documentation, tooling]

  - **symptoms** (array): 1-5 specific observable symptoms

  - **root_cause** (enum): One of [missing_association, missing_include,
  missing_index, wrong_api, scope_issue, thread_violation, async_timing,
  memory_leak, config_error, logic_error, test_isolation, missing_validation,
  missing_permission, missing_workflow_step, inadequate_documentation,
  missing_tooling, incomplete_setup]

  - **resolution_type** (enum): One of [code_fix, migration, config_change,
  test_fix, dependency_update, environment_setup, workflow_improvement,
  documentation_update, tooling_addition, seed_data_update]
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/everyinc/compound-engineering-plugin/HEAD/plugins/compound-engineering/skills/compound-docs/references/yaml-schema.md
license: ""
upstream_ref: https://skills.sh/everyinc/compound-engineering-plugin/compound-docs
github_stars: 9663
github_forks: 767
github_is_organization: true
retrieved_at: 2026-03-03T07:18:02.741Z
content_sha256: 4759684eb4ee5bdce4982ec472d46a42287186bbc5b34512b4ecbea69e53e421
---
|/data/skills-sh-everyinc-compound-engineering-plugin-compound-docs|

---
stable_id: skills/skills-sh-existential-birds-beagle-tailwind-v4
type: skills
title: skills-sh-existential-birds-beagle-tailwind-v4
summary: |-
  # Setup & Installation
  ## Contents
  - [Package Installation](#package-installation)
  - [Vite Plugin Configuration](#vite-plugin-configuration)
  - [TypeScript Configuration](#typescript-configuration)
  - [CSS Entry Point](#css-entry-point)
  - [Why No Config Files](#why-no-config-files)
  ---
  ## Package Installation
  Install Tailwind CSS v4 with the Vite plugin:
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/existential-birds/beagle/HEAD/plugins/beagle-react/skills/tailwind-v4/references/setup.md
license: ""
upstream_ref: https://skills.sh/existential-birds/beagle/tailwind-v4
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:33.187Z
content_sha256: 081fe68f4bc2ece4d63dfb9a77253eab8306a753ce470ac8c03102e69ff5e032
---
|/data/skills-sh-existential-birds-beagle-tailwind-v4|

---
stable_id: skills/skills-sh-firecrawl-cli-firecrawl
type: skills
title: skills-sh-firecrawl-cli-firecrawl
summary: |-
  ---
  name: firecrawl-cli-installation
  description: |
    Install the official Firecrawl CLI and handle authentication.
    Package: https://www.npmjs.com/package/firecrawl-cli
    Source: https://github.com/firecrawl/cli
    Docs: https://docs.firecrawl.dev/sdks/cli
  ---
  # Firecrawl CLI Installation
  ## Quick Setup (Recommended)
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/firecrawl/cli/HEAD/skills/firecrawl-cli/rules/install.md
license: ""
upstream_ref: https://skills.sh/firecrawl/cli/firecrawl
github_stars: 117
github_forks: 16
github_is_organization: true
retrieved_at: 2026-03-03T07:17:57.811Z
content_sha256: c21e13b02aa53e9f7345db81261a5ca2a4b53adae8952a6378abb4008f2bcb60
---
|/data/skills-sh-firecrawl-cli-firecrawl|

---
stable_id: skills/skills-sh-github-awesome-copilot-azure-deployment-preflight
type: skills
title: skills-sh-github-awesome-copilot-azure-deployment-preflight
summary: >-
  # Preflight Report Template

  Use this template structure when generating `preflight-report.md` in the
  project root.

  ---

  ## Template

  ```markdown

  # Azure Deployment Preflight Report

  **Generated:** {timestamp}

  **Status:** {overall-status}

  ---

  ## Summary
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/github/awesome-copilot/HEAD/skills/azure-deployment-preflight/references/REPORT-TEMPLATE.md
license: ""
upstream_ref: https://skills.sh/github/awesome-copilot/azure-deployment-preflight
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:18:05.792Z
content_sha256: 685de9d8d43bfe58cfd9f20d8fa35b04e9da983f8122754400dc4b7457420197
---
|/data/skills-sh-github-awesome-copilot-azure-deployment-preflight|

---
stable_id: skills/skills-sh-github-awesome-copilot-github-issues
type: skills
title: skills-sh-github-awesome-copilot-github-issues
summary: |-
  # Issue Templates
  Copy and customize these templates for issue bodies.
  ## Bug Report Template
  ```markdown
  ## Description
  [Clear description of the bug]
  ## Steps to Reproduce
  1. [First step]
  2. [Second step]
  3. [And so on...]
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/github/awesome-copilot/HEAD/skills/github-issues/references/templates.md
license: ""
upstream_ref: https://skills.sh/github/awesome-copilot/github-issues
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:29.735Z
content_sha256: 8202c0277a34033acd44ed960a236f31a5b7a74d98769dffac497f2267279fed
---
|/data/skills-sh-github-awesome-copilot-github-issues|

---
stable_id: skills/skills-sh-github-awesome-copilot-legacy-circuit-mockups
type: skills
title: skills-sh-github-awesome-copilot-legacy-circuit-mockups
summary: >-
  # 555

  [www.fairchildsemi.com](www.fairchildsemi.com)

  The LM555/NE555/SA555 is  a highly stable controller capable of producing
  accurate timing pulses. With a monostable operation, the time delay is
  controlled by one external resistor and one capacitor. With an astable
  operation, the frequency and duty cycle are accurately controlled by two
  external resistors and one capacitor.

  ## Features

  - High Current Drive Capability (200mA)

  - Adjustable Duty Cycle

  - Temperature Stability of 0.005%/°C

  - Timing From μSec to Hours

  - Turn off Time Less Than 2μSec

  ## Applications
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/github/awesome-copilot/HEAD/skills/legacy-circuit-mockups/references/555.md
license: ""
upstream_ref: https://skills.sh/github/awesome-copilot/legacy-circuit-mockups
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:18:08.520Z
content_sha256: b053c8faa2db8049ccbecb6151fca496546e9a5cd846d19321bd6f80570c045f
---
|/data/skills-sh-github-awesome-copilot-legacy-circuit-mockups|

---
stable_id: skills/skills-sh-github-awesome-copilot-make-repo-contribution
type: skills
title: skills-sh-github-awesome-copilot-make-repo-contribution
summary: |-
  # <!-- Provide a concise, descriptive title for the issue -->
  ## Summary
  <!-- Provide a clear, one-sentence description of the request or issue. -->
  ## Context
  <!-- Explain why this change is needed. Include:
  - The problem being solved
  - Any relevant background information
  - Link to related issues or discussions if applicable
  -->
  ## Proposed Solution
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/github/awesome-copilot/HEAD/skills/make-repo-contribution/assets/issue-template.md
license: ""
upstream_ref: https://skills.sh/github/awesome-copilot/make-repo-contribution
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:18:09.514Z
content_sha256: 82a8a9847134450248f2b2d4e7104cdb2ed764ce3407745c7c443bdb47bb5761
---
|/data/skills-sh-github-awesome-copilot-make-repo-contribution|

---
stable_id: skills/skills-sh-github-awesome-copilot-markdown-to-html
type: skills
title: skills-sh-github-awesome-copilot-markdown-to-html
summary: |-
  # Basic Markdown to HTML
  ## Headings
  ### Markdown
  ```md
  # Basic writing and formatting syntax
  ```
  ### Parsed HTML
  ```html
  <h1>Basic writing and formatting syntax</h1>
  ```
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/github/awesome-copilot/HEAD/skills/markdown-to-html/references/basic-markdown-to-html.md
license: ""
upstream_ref: https://skills.sh/github/awesome-copilot/markdown-to-html
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:18:08.613Z
content_sha256: fe2c21cc2979a7ef382ea891f1ddd5138d1254c37336c9df33ba594c001a8743
---
|/data/skills-sh-github-awesome-copilot-markdown-to-html|

---
stable_id: skills/skills-sh-github-awesome-copilot-penpot-uiux-design
type: skills
title: skills-sh-github-awesome-copilot-penpot-uiux-design
summary: >-
  # Penpot MCP Server Setup & Troubleshooting

  Complete guide for installing, configuring, and troubleshooting the Penpot MCP
  Server.

  ## Architecture Overview

  The Penpot MCP integration requires **three components** working together:

  ```

  ┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐

  │   MCP Client    │────▶│   MCP Server    │◀───▶│  Penpot Plugin  │

  │ (VS Code/Claude)│     │  (port 4401)    │     │ (in browser)    │

  └─────────────────┘     └────────┬────────┘     └────────┬────────┘
                                   │                       │
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/github/awesome-copilot/HEAD/skills/penpot-uiux-design/references/setup-troubleshooting.md
license: ""
upstream_ref: https://skills.sh/github/awesome-copilot/penpot-uiux-design
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:18:08.699Z
content_sha256: 5eceba271320c73a4ed22db14b4c02331b5768f98121eab74cd3e6440bb4f521
---
|/data/skills-sh-github-awesome-copilot-penpot-uiux-design|

---
stable_id: skills/skills-sh-github-awesome-copilot-powerbi-modeling
type: skills
title: skills-sh-github-awesome-copilot-powerbi-modeling
summary: >-
  # Star Schema Design for Power BI

  ## Overview

  Star schema is the optimal design pattern for Power BI semantic models. It
  organizes data into:

  - **Dimension tables**: Enable filtering and grouping (the "one" side)

  - **Fact tables**: Enable summarization (the "many" side)

  ## Table Classification

  ### Dimension Tables

  - Contain descriptive attributes for filtering/slicing

  - Have unique key columns (one row per entity)

  - Examples: Customer, Product, Date, Geography, Employee
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/github/awesome-copilot/HEAD/skills/powerbi-modeling/references/STAR-SCHEMA.md
license: ""
upstream_ref: https://skills.sh/github/awesome-copilot/powerbi-modeling
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:18:08.296Z
content_sha256: af288e11a243a090f9a2d540103d49d3b6d0d20e39a85e9b45c51175eb0028b2
---
|/data/skills-sh-github-awesome-copilot-powerbi-modeling|

---
stable_id: skills/skills-sh-github-awesome-copilot-web-design-reviewer
type: skills
title: skills-sh-github-awesome-copilot-web-design-reviewer
summary: >-
  # Framework-specific Fix Guide

  This document explains specific fix techniques for each framework and styling
  method.

  ---

  ## Pure CSS / SCSS

  ### Fixing Layout Overflow

  ```css

  /* Before: Overflow occurs */

  .container {
    width: 100%;
  }
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/github/awesome-copilot/HEAD/skills/web-design-reviewer/references/framework-fixes.md
license: ""
upstream_ref: https://skills.sh/github/awesome-copilot/web-design-reviewer
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:18:05.516Z
content_sha256: e678c549dd5f69094d53eb5785f0c34ae4cd150a92ac1f79785065fc835276f6
---
|/data/skills-sh-github-awesome-copilot-web-design-reviewer|

---
stable_id: skills/skills-sh-github-awesome-copilot-winapp-cli
type: skills
title: skills-sh-github-awesome-copilot-winapp-cli
summary: >-
  # CLI Documentation and Usage

  ### init

  Initialize a directory with Windows SDK, Windows App SDK, and required assets
  for modern Windows development.

  ```bash

  winapp init [base-directory] [options]

  ```

  **Arguments:**

  - `base-directory` - Base/root directory for the app/workspace (default:
  current directory)

  **Options:**

  - `--config-dir <path>` - Directory to read/store configuration (default:
  current directory)
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/microsoft/WinAppCli/main/docs/usage.md
license: ""
upstream_ref: https://skills.sh/github/awesome-copilot/winapp-cli
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:18:10.220Z
content_sha256: af351470ceedbe3ce996f4aa6016f4c3790b2f221ca8519ab3ece6ebfc3641e9
---
|/data/skills-sh-github-awesome-copilot-winapp-cli|

---
stable_id: skills/skills-sh-giulioco-skills-postbridge-social-growth
type: skills
title: skills-sh-giulioco-skills-postbridge-social-growth
summary: >-
  # Post Bridge Organic Growth Methodology

  Detailed reference for the 7-phase organic growth system. Source: [Post Bridge
  Growth Guide](https://www.post-bridge.com/growth-guide).

  Results achieved: 500M+ views, 132K+ downloads, $33K+ revenue from organic
  content only.

  ## Table of Contents

  - [Phase 1: Account Creation (Day 1)](#phase-1-account-creation-day-1)

  - [Phase 2: Account Warmup (Days 2-8)](#phase-2-account-warmup-days-2-8)

  - [Phase 3: Content Market Fit (Days
  8-30)](#phase-3-content-market-fit-days-8-30)

  - [Phase 4: Riding Trends (Ongoing)](#phase-4-riding-trends-ongoing)

  - [Phase 5: Views to Customers (Ongoing)](#phase-5-views-to-customers-ongoing)

  - [Phase 6: Scaling System (Days 30+)](#phase-6-scaling-system-days-30)
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/giulioco/skills/HEAD/skills/postbridge-social-growth/references/methodology.md
license: ""
upstream_ref: https://skills.sh/giulioco/skills/postbridge-social-growth
github_stars: 2
github_forks: 0
github_is_organization: false
retrieved_at: 2026-03-03T07:18:02.916Z
content_sha256: a9aca976f35f235f3cad5fba2e23a44214ac273965368d45a1cce5b129edefbc
---
|/data/skills-sh-giulioco-skills-postbridge-social-growth|

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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:15.586Z
content_sha256: 00bf8288c14add0733ae35506f52d6059a5b41b10215154c45acf8c526273480
---
|/data/skills-sh-guibibeau-solana-dev-skill-solana-dev|

---
stable_id: skills/skills-sh-hairyf-knitwork-x-knitwork-x
type: skills
title: skills-sh-hairyf-knitwork-x-knitwork-x
summary: >-
  ---

  name: core-overview

  description: knitwork-x purpose, installation, and when to use

  ---

  # knitwork-x Overview

  knitwork-x provides **utilities to generate JavaScript and TypeScript code**
  as strings. It is forked from [knitwork](https://github.com/unjs/knitwork) and
  adds comprehensive TypeScript helpers: ESM, strings, variables, classes,
  interfaces, functions, types, control flow, and serialization.

  ## When to Use

  - **Code generators:** Build tools that emit JS/TS source (e.g.
  schema-to-types, API clients).

  - **Dynamic modules:** Generate import/export and function/class bodies at
  runtime.

  - **AST-to-code:** Turn structured data into code strings without a full AST
  library.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/hairyf/knitwork-x/HEAD/skills/knitwork-x/references/core-overview.md
license: ""
upstream_ref: https://skills.sh/hairyf/knitwork-x/knitwork-x
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:31.046Z
content_sha256: 14f498087b077d54f43319de2fad52747d95f44d408646d00c15fdf17be11bb7
---
|/data/skills-sh-hairyf-knitwork-x-knitwork-x|

---
stable_id: skills/skills-sh-hairyf-skills-arch-tsdown-monorepo
type: skills
title: skills-sh-hairyf-skills-arch-tsdown-monorepo
summary: >-
  ---

  name: core-overview

  description: arch-tsdown-monorepo purpose, structure, and when to use it

  ---

  # arch-tsdown-monorepo Overview

  arch-tsdown-monorepo is a **pnpm monorepo** starter for TypeScript libraries,
  based on
  [hairyf/starter-monorepo](https://github.com/hairyf/starter-monorepo). Each
  package uses **tsdown** for building. Use this skill when scaffolding or
  maintaining a multi-package TypeScript/ESM library with shared tooling and
  workspace dependencies.

  ## What It Is

  - A **monorepo starter** for publishing multiple TypeScript packages from one
  repo

  - Build: **tsdown** per package (same pattern as arch-tsdown)

  - Workspace: **pnpm** with `packages/*`, **catalogs** for shared devDependency
  versions
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/hairyf/skills/HEAD/skills/arch-tsdown-monorepo/references/core-overview.md
license: ""
upstream_ref: https://skills.sh/hairyf/skills/arch-tsdown-monorepo
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:31.556Z
content_sha256: 0e08a66c2488d2e14e8c56d3258df2b5b1fba61c011bf885004de91c427ed8a9
---
|/data/skills-sh-hairyf-skills-arch-tsdown-monorepo|

---
stable_id: skills/skills-sh-hairyf-skills-hairy
type: skills
title: skills-sh-hairyf-skills-hairy
summary: >-
  ---

  name: antfu-eslint-config

  description: ESLint flat config for formatting and linting - replaces Prettier

  ---

  # @antfu/eslint-config

  A comprehensive ESLint flat config that handles both linting and formatting.
  Designed to replace Prettier entirely.

  ## Key Characteristics

  - **No Prettier needed** - Handles all formatting via ESLint

  - **ESLint Flat config** - Uses the new `eslint.config.js` format

  - **Auto-detection** - TypeScript and Vue are detected automatically
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/hairyf/skills/HEAD/skills/hairy/references/antfu-eslint-config.md
license: ""
upstream_ref: https://skills.sh/hairyf/skills/hairy
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:31.478Z
content_sha256: a9ddb3bc503470d675ae1aa67a7f39fb1810a7d598d4e1b3b6313613239be8ea
---
|/data/skills-sh-hairyf-skills-hairy|

---
stable_id: skills/skills-sh-hairyf-skills-hairy-utils
type: skills
title: skills-sh-hairyf-skills-hairy-utils
summary: |-
  ---
  name: core-async
  description: Async utilities for promise handling and flow control
  ---
  # Async Utilities
  ## Usage
  ### Promise Error Handling
  Convert promises to tuples for easier error handling:
  ```typescript
  import { to } from '@hairy/utils'
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/hairyf/skills/HEAD/skills/hairy-utils/references/core-async.md
license: ""
upstream_ref: https://skills.sh/hairyf/skills/hairy-utils
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:18:10.526Z
content_sha256: 73115192ce2234e3f3ebf6d7640b72c9ebd4f8aac137b565421255122f930899
---
|/data/skills-sh-hairyf-skills-hairy-utils|

---
stable_id: skills/skills-sh-hairyf-skills-openapi-specification-v2
type: skills
title: skills-sh-hairyf-skills-openapi-specification-v2
summary: >-
  ---

  name: core-format-and-structure

  description: OpenAPI/Swagger 2.0 document format, file structure, and data
  types

  ---

  # Format and Structure (Swagger 2.0)

  Swagger 2.0 specs are JSON or YAML. Field names are **case sensitive**. The
  spec uses fixed fields (declared names) and patterned fields (regex for names,
  e.g. path keys, `^x-` extensions).

  ## File structure

  - Single file by default; convention is `swagger.json`.

  - Parts can be split via `$ref` (JSON Schema style). Only canonical
  dereferencing is supported for `$ref`.

  ## Data types
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/hairyf/skills/HEAD/skills/openapi-specification-v2/references/core-format-and-structure.md
license: ""
upstream_ref: https://skills.sh/hairyf/skills/openapi-specification-v2
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:31.223Z
content_sha256: 0f8d6b2e4e8d3b7b0c559cec5212e80600baf92b6cbca6c9156b71784ebe61f0
---
|/data/skills-sh-hairyf-skills-openapi-specification-v2|

---
stable_id: skills/skills-sh-hairyf-skills-openapi-specification-v3-2
type: skills
title: skills-sh-hairyf-skills-openapi-specification-v3-2
summary: >-
  ---

  name: core-openapi-object

  description: Root OpenAPI object and required/optional fields for OpenAPI 3.2

  ---

  # OpenAPI Object (Root)

  Root of the OpenAPI Description (OAD). Defines version, optional base URI,
  metadata, servers, paths, webhooks, components, and security.

  ## Required fields

  | Field    | Type   | Description |

  |----------|--------|-------------|

  | openapi  | string | MUST be the OAS version (e.g. `"3.2.0"`). Used by
  tooling to interpret the document. Not related to `info.version`. |
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/hairyf/skills/HEAD/skills/openapi-specification-v3.2/references/core-openapi-object.md
license: ""
upstream_ref: https://skills.sh/hairyf/skills/openapi-specification-v3.2
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:30.963Z
content_sha256: e68161c9bfbeb686afb6fd374982b4b21a13bc335079d4d6944767fc976bfd2b
---
|/data/skills-sh-hairyf-skills-openapi-specification-v3-2|

---
stable_id: skills/skills-sh-hairyf-skills-undocs
type: skills
title: skills-sh-hairyf-skills-undocs
summary: >-
  ---

  name: undocs-getting-started

  description: Get started with undocs - create a documentation site using the
  CLI and template

  ---

  # Getting Started with Undocs

  Undocs is a minimal Documentation Theme and CLI for shared usage across UnJS
  projects. It's built with Nuxt, Nuxt Content, and Nuxt UI with zero config and
  an elegant CLI wrapper.

  ## Quick Start

  Create a new documentation project using the template:

  ```bash

  npx giget gh:unjs/undocs/template docs --install
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/hairyf/skills/HEAD/skills/undocs/references/core-getting-started.md
license: ""
upstream_ref: https://skills.sh/hairyf/skills/undocs
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:31.963Z
content_sha256: 9bea28f87385164472dac28df9719a778a4dbe5aae4fe63f0c146ca86aeca3c5
---
|/data/skills-sh-hairyf-skills-undocs|

---
stable_id: skills/skills-sh-hairyf-skills-unjs
type: skills
title: skills-sh-hairyf-skills-unjs
summary: >-
  ---

  name: h3

  description: Minimal HTTP framework for high performance and portability

  ---

  # H3 Framework

  H3 is a minimal HTTP framework built for high performance and portability. It
  provides a lightweight, framework-agnostic API for handling HTTP requests and
  responses.

  ## Usage

  ### Basic Server Setup

  ```typescript

  import { createServer } from 'h3'
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/hairyf/skills/HEAD/skills/unjs/references/core-h3.md
license: ""
upstream_ref: https://skills.sh/hairyf/skills/unjs
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:36.876Z
content_sha256: 7768ed479085ade59cd6cda262376409822a83228748d36c03753bc90e5f2a34
---
|/data/skills-sh-hairyf-skills-unjs|

---
stable_id: skills/skills-sh-halthelobster-proactive-agent-proactive-agent
type: skills
title: skills-sh-halthelobster-proactive-agent-proactive-agent
summary: >-
  ---

  name: proactive-agent

  version: 3.0.0

  description: "Transform AI agents from task-followers into proactive partners
  that anticipate needs and continuously improve. Now with WAL Protocol, Working
  Buffer for context survival, Compaction Recovery, and battle-tested security
  patterns. Part of the Hal Stack 🦞"

  author: halthelobster

  ---

  # Proactive Agent 🦞

  **By Hal Labs** — Part of the Hal Stack

  **A proactive, self-improving architecture for your AI agent.**

  Most agents just wait. This one anticipates your needs — and gets better at it
  over time.
tags:
  - skills-sh
  - skills-sh-probed
source_url: https://raw.githubusercontent.com/halthelobster/proactive-agent/main/SKILL.md
license: ""
upstream_ref: https://skills.sh/halthelobster/proactive-agent/proactive-agent
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:30.497Z
content_sha256: 5a61dae55820c670d23de61500aa48956b7a1b20c3f01cdc7e596b51fd854c03
---
|/data/skills-sh-halthelobster-proactive-agent-proactive-agent|

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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:18:09.239Z
content_sha256: 9d08cde101042ff656c473b6db9e8a7bcfc0cc191441b8613be3b47f11fec060
---
|/data/skills-sh-hashicorp-agent-skills-refactor-module|

---
stable_id: skills/skills-sh-hau823823-gen-paylink-govilo-gen-paylink-govilo
type: skills
title: skills-sh-hau823823-gen-paylink-govilo-gen-paylink-govilo
summary: >-
  # Setup Guide

  ## Prerequisites

  This skill requires [uv](https://docs.astral.sh/uv/) — a fast Python package
  manager and runner.

  ### Install uv
      # macOS / Linux
      curl -LsSf https://astral.sh/uv/install.sh | sh
      # Windows
      powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
      # Or via Homebrew
      brew install uv
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/hau823823/gen-paylink-govilo/HEAD/skills/gen-paylink-govilo/references/setup-guide.md
license: ""
upstream_ref: https://skills.sh/hau823823/gen-paylink-govilo/gen-paylink-govilo
github_stars: 1
github_forks: 1
github_is_organization: false
retrieved_at: 2026-03-03T07:18:00.470Z
content_sha256: 4b03b93077cbb4320a8611a3d141c9047a88bd5efae5844cbe4630bfcdf17b36
---
|/data/skills-sh-hau823823-gen-paylink-govilo-gen-paylink-govilo|

---
stable_id: skills/skills-sh-heredotnow-skill-here-now
type: skills
title: skills-sh-heredotnow-skill-here-now
summary: >-
  # here.now API Reference

  Base URL: `https://here.now`

  ## Authentication

  Two modes:

  - **Authenticated**: include `Authorization: Bearer <API_KEY>` header.

  - **Anonymous**: omit the header entirely. Publishes expire in 24 hours with
  lower limits.

  ### Getting an API key (agent-assisted sign-up)

  Agents can trigger the sign-up flow on behalf of the user:

  **1. Send magic link:**

  ```bash
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/heredotnow/skill/HEAD/here-now/references/REFERENCE.md
license: ""
upstream_ref: https://skills.sh/heredotnow/skill/here-now
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:18:04.767Z
content_sha256: fafb21795bb5076ce9d511dad2a9dab9d33f4fef5bce48e9e97fc714a6cf791f
---
|/data/skills-sh-heredotnow-skill-here-now|

---
stable_id: skills/skills-sh-heygen-com-skills-heygen
type: skills
title: skills-sh-heygen-com-skills-heygen
summary: >-
  ---

  name: prompt-optimizer

  description: Write production-quality prompts for HeyGen Video Agent — from
  basic ideas to fully art-directed scene-by-scene scripts

  ---

  # Video Agent Prompt Optimizer

  Write effective prompts for the HeyGen Video Agent API. Based on patterns from
  40+ produced videos.

  **The core insight: Video Agent is an HTML interpreter.** It renders layouts,
  typography, and structured content natively. Describe B-roll as layered text
  motion graphics with action verbs ("slams in," "types on," "counts up") — not
  layout specs ("upper-left, 48pt").

  ## Reference Files

  | File | Load when... |

  |------|-------------|
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/heygen-com/skills/HEAD/skills/heygen/references/prompt-optimizer.md
license: ""
upstream_ref: https://skills.sh/heygen-com/skills/heygen
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:32.801Z
content_sha256: 968fec33560cbf5d4abf433fe90c5d4602020629f28d6ae63b7061ca9bfd1a34
---
|/data/skills-sh-heygen-com-skills-heygen|

---
stable_id: skills/skills-sh-hyf0-vue-skills-vue-best-practices
type: skills
title: skills-sh-hyf0-vue-skills-vue-best-practices
summary: >-
  ---

  title: Reactivity Core Patterns (ref, reactive, shallowRef, computed, watch)

  impact: MEDIUM

  impactDescription: Clear reactivity choices keep state predictable and reduce
  unnecessary updates in Vue 3 apps

  type: efficiency

  tags: [vue3, reactivity, ref, reactive, shallowRef, computed, watch,
  watchEffect, external-state, best-practice]

  ---

  # Reactivity Core Patterns (ref, reactive, shallowRef, computed, watch)

  **Impact: MEDIUM** - Choose the right reactive primitive first, derive with
  `computed`, and use watchers only for side effects.

  This reference covers the core reactivity decisions for local state, external
  data, derived values, and effects.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/hyf0/vue-skills/HEAD/skills/vue-best-practices/references/reactivity.md
license: ""
upstream_ref: https://skills.sh/hyf0/vue-skills/vue-best-practices
github_stars: 1702
github_forks: 84
github_is_organization: true
retrieved_at: 2026-03-03T07:17:57.662Z
content_sha256: 48c97831e72f0b82bfae0344cf02a181c7723e1ee4a29a58a85009aab7d60a4b
---
|/data/skills-sh-hyf0-vue-skills-vue-best-practices|

---
stable_id: skills/skills-sh-hyf0-vue-skills-vue-debug-guides
type: skills
title: skills-sh-hyf0-vue-skills-vue-debug-guides
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
source_url: https://raw.githubusercontent.com/hyf0/vue-skills/HEAD/skills/vue-debug-guides/reference/reactivity-debugging-hooks.md
license: ""
upstream_ref: https://skills.sh/hyf0/vue-skills/vue-debug-guides
github_stars: 1611
github_forks: 80
github_is_organization: true
retrieved_at: 2026-03-03T07:17:34.321Z
content_sha256: 9bd2991786bc470ae00e655a7712d67393a6e904152a942b680c7a9d2f987644
---
|/data/skills-sh-hyf0-vue-skills-vue-debug-guides|

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
source_url: https://raw.githubusercontent.com/imxv/pretty-mermaid-skills/HEAD/references/DIAGRAM_TYPES.md
license: ""
upstream_ref: https://skills.sh/imxv/pretty-mermaid-skills/pretty-mermaid
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:18:06.790Z
content_sha256: 79514ada712884f201f50cddced0a059697a0b82cee7b9a80cf744b9bc369739
---
|/data/skills-sh-imxv-pretty-mermaid-skills-pretty-mermaid|

---
stable_id: skills/skills-sh-inference-sh-0-skills-agent-tools
type: skills
title: skills-sh-inference-sh-0-skills-agent-tools
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
source_url: https://raw.githubusercontent.com/inference-sh-0/skills/HEAD/skills/agent-tools/references/authentication.md
license: ""
upstream_ref: https://skills.sh/inference-sh-0/skills/agent-tools
github_stars: 30
github_forks: 6
github_is_organization: true
retrieved_at: 2026-03-03T07:17:33.266Z
content_sha256: 65924807bfa86c677ecc8b3f1714adbec266cecab1864e46cb9f0a7492d9de2e
---
|/data/skills-sh-inference-sh-0-skills-agent-tools|

---
stable_id: skills/skills-sh-inference-sh-0-skills-javascript-sdk
type: skills
title: skills-sh-inference-sh-0-skills-javascript-sdk
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
source_url: https://raw.githubusercontent.com/inference-sh-0/skills/HEAD/skills/javascript-sdk/references/agent-patterns.md
license: ""
upstream_ref: https://skills.sh/inference-sh-0/skills/javascript-sdk
github_stars: 30
github_forks: 6
github_is_organization: true
retrieved_at: 2026-03-03T07:17:33.430Z
content_sha256: 81d7e3e42f5803e8e820edf19ca4b5e54c54ad18afa3c0be98b7d3949b8adbd8
---
|/data/skills-sh-inference-sh-0-skills-javascript-sdk|

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
retrieved_at: 2026-03-03T07:17:33.507Z
content_sha256: 85c91b4d772be3d2d10d017f83892b00940941174989adccc5a8752f56f44ec4
---
|/data/skills-sh-inference-sh-0-skills-python-sdk|

---
stable_id: skills/skills-sh-inference-sh-3-skills-agent-tools
type: skills
title: skills-sh-inference-sh-3-skills-agent-tools
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
source_url: https://raw.githubusercontent.com/inference-sh-3/skills/HEAD/skills/agent-tools/references/authentication.md
license: ""
upstream_ref: https://skills.sh/inference-sh-3/skills/agent-tools
github_stars: 32
github_forks: 6
github_is_organization: true
retrieved_at: 2026-03-03T07:17:33.976Z
content_sha256: 65924807bfa86c677ecc8b3f1714adbec266cecab1864e46cb9f0a7492d9de2e
---
|/data/skills-sh-inference-sh-3-skills-agent-tools|

---
stable_id: skills/skills-sh-inference-sh-3-skills-python-sdk
type: skills
title: skills-sh-inference-sh-3-skills-python-sdk
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
source_url: https://raw.githubusercontent.com/inference-sh-3/skills/HEAD/skills/python-sdk/references/agent-patterns.md
license: ""
upstream_ref: https://skills.sh/inference-sh-3/skills/python-sdk
github_stars: 32
github_forks: 6
github_is_organization: true
retrieved_at: 2026-03-03T07:17:36.681Z
content_sha256: 85c91b4d772be3d2d10d017f83892b00940941174989adccc5a8752f56f44ec4
---
|/data/skills-sh-inference-sh-3-skills-python-sdk|

---
stable_id: skills/skills-sh-inference-sh-6-skills-agent-tools
type: skills
title: skills-sh-inference-sh-6-skills-agent-tools
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
source_url: https://raw.githubusercontent.com/inference-sh-6/skills/HEAD/skills/agent-tools/references/authentication.md
license: ""
upstream_ref: https://skills.sh/inference-sh-6/skills/agent-tools
github_stars: 44
github_forks: 7
github_is_organization: true
retrieved_at: 2026-03-03T07:17:37.941Z
content_sha256: 65924807bfa86c677ecc8b3f1714adbec266cecab1864e46cb9f0a7492d9de2e
---
|/data/skills-sh-inference-sh-6-skills-agent-tools|

---
stable_id: skills/skills-sh-inference-sh-6-skills-javascript-sdk
type: skills
title: skills-sh-inference-sh-6-skills-javascript-sdk
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
source_url: https://raw.githubusercontent.com/inference-sh-6/skills/HEAD/skills/javascript-sdk/references/agent-patterns.md
license: ""
upstream_ref: https://skills.sh/inference-sh-6/skills/javascript-sdk
github_stars: 44
github_forks: 7
github_is_organization: true
retrieved_at: 2026-03-03T07:17:38.729Z
content_sha256: 81d7e3e42f5803e8e820edf19ca4b5e54c54ad18afa3c0be98b7d3949b8adbd8
---
|/data/skills-sh-inference-sh-6-skills-javascript-sdk|

---
stable_id: skills/skills-sh-inference-sh-6-skills-python-sdk
type: skills
title: skills-sh-inference-sh-6-skills-python-sdk
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
source_url: https://raw.githubusercontent.com/inference-sh-6/skills/HEAD/skills/python-sdk/references/agent-patterns.md
license: ""
upstream_ref: https://skills.sh/inference-sh-6/skills/python-sdk
github_stars: 44
github_forks: 7
github_is_organization: true
retrieved_at: 2026-03-03T07:17:38.812Z
content_sha256: 85c91b4d772be3d2d10d017f83892b00940941174989adccc5a8752f56f44ec4
---
|/data/skills-sh-inference-sh-6-skills-python-sdk|

---
stable_id: skills/skills-sh-inference-sh-8-skills-agent-tools
type: skills
title: skills-sh-inference-sh-8-skills-agent-tools
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
source_url: https://raw.githubusercontent.com/inference-sh-8/skills/HEAD/skills/agent-tools/references/authentication.md
license: ""
upstream_ref: https://skills.sh/inference-sh-8/skills/agent-tools
github_stars: 49
github_forks: 7
github_is_organization: true
retrieved_at: 2026-03-03T07:17:48.133Z
content_sha256: 65924807bfa86c677ecc8b3f1714adbec266cecab1864e46cb9f0a7492d9de2e
---
|/data/skills-sh-inference-sh-8-skills-agent-tools|

---
stable_id: skills/skills-sh-inference-sh-8-skills-javascript-sdk
type: skills
title: skills-sh-inference-sh-8-skills-javascript-sdk
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
source_url: https://raw.githubusercontent.com/inference-sh-8/skills/HEAD/skills/javascript-sdk/references/agent-patterns.md
license: ""
upstream_ref: https://skills.sh/inference-sh-8/skills/javascript-sdk
github_stars: 49
github_forks: 7
github_is_organization: true
retrieved_at: 2026-03-03T07:17:48.952Z
content_sha256: 81d7e3e42f5803e8e820edf19ca4b5e54c54ad18afa3c0be98b7d3949b8adbd8
---
|/data/skills-sh-inference-sh-8-skills-javascript-sdk|

---
stable_id: skills/skills-sh-inference-sh-8-skills-python-sdk
type: skills
title: skills-sh-inference-sh-8-skills-python-sdk
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
source_url: https://raw.githubusercontent.com/inference-sh-8/skills/HEAD/skills/python-sdk/references/agent-patterns.md
license: ""
upstream_ref: https://skills.sh/inference-sh-8/skills/python-sdk
github_stars: 49
github_forks: 7
github_is_organization: true
retrieved_at: 2026-03-03T07:17:49.296Z
content_sha256: 85c91b4d772be3d2d10d017f83892b00940941174989adccc5a8752f56f44ec4
---
|/data/skills-sh-inference-sh-8-skills-python-sdk|

---
stable_id: skills/skills-sh-inference-sh-9-skills-agent-tools
type: skills
title: skills-sh-inference-sh-9-skills-agent-tools
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
source_url: https://raw.githubusercontent.com/inference-sh-9/skills/HEAD/skills/agent-tools/references/authentication.md
license: ""
upstream_ref: https://skills.sh/inference-sh-9/skills/agent-tools
github_stars: 60
github_forks: 9
github_is_organization: true
retrieved_at: 2026-03-03T07:17:55.566Z
content_sha256: 65924807bfa86c677ecc8b3f1714adbec266cecab1864e46cb9f0a7492d9de2e
---
|/data/skills-sh-inference-sh-9-skills-agent-tools|

---
stable_id: skills/skills-sh-inference-sh-9-skills-javascript-sdk
type: skills
title: skills-sh-inference-sh-9-skills-javascript-sdk
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
source_url: https://raw.githubusercontent.com/inference-sh-9/skills/HEAD/skills/javascript-sdk/references/agent-patterns.md
license: ""
upstream_ref: https://skills.sh/inference-sh-9/skills/javascript-sdk
github_stars: 60
github_forks: 9
github_is_organization: true
retrieved_at: 2026-03-03T07:17:58.423Z
content_sha256: 81d7e3e42f5803e8e820edf19ca4b5e54c54ad18afa3c0be98b7d3949b8adbd8
---
|/data/skills-sh-inference-sh-9-skills-javascript-sdk|

---
stable_id: skills/skills-sh-inference-sh-9-skills-python-sdk
type: skills
title: skills-sh-inference-sh-9-skills-python-sdk
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
source_url: https://raw.githubusercontent.com/inference-sh-9/skills/HEAD/skills/python-sdk/references/agent-patterns.md
license: ""
upstream_ref: https://skills.sh/inference-sh-9/skills/python-sdk
github_stars: 60
github_forks: 9
github_is_organization: true
retrieved_at: 2026-03-03T07:17:58.345Z
content_sha256: 85c91b4d772be3d2d10d017f83892b00940941174989adccc5a8752f56f44ec4
---
|/data/skills-sh-inference-sh-9-skills-python-sdk|

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
source_url: https://raw.githubusercontent.com/inference-sh/agent-skills/HEAD/skills/agent-tools/references/authentication.md
license: ""
upstream_ref: https://skills.sh/inference-sh/agent-skills/agent-tools
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:29.076Z
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
source_url: https://raw.githubusercontent.com/inference-sh/agent-skills/HEAD/skills/javascript-sdk/references/agent-patterns.md
license: ""
upstream_ref: https://skills.sh/inference-sh/agent-skills/javascript-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:29.571Z
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
source_url: https://raw.githubusercontent.com/inference-sh/agent-skills/HEAD/skills/python-sdk/references/agent-patterns.md
license: ""
upstream_ref: https://skills.sh/inference-sh/agent-skills/python-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:29.488Z
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
source_url: https://raw.githubusercontent.com/inference-sh/skills/HEAD/skills/agentic-browser/references/commands.md
license: ""
upstream_ref: https://skills.sh/inference-sh/skills/agentic-browser
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:30.122Z
content_sha256: b1c709ebcf54b26d957886efb8239ddb480d58ddb95fec297ffd42cfe1261c5e
---
|/data/skills-sh-inference-sh-skills-agentic-browser|

---
stable_id: skills/skills-sh-inferencesh-skills-agent-tools
type: skills
title: skills-sh-inferencesh-skills-agent-tools
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
source_url: https://raw.githubusercontent.com/inferencesh/skills/HEAD/skills/agent-tools/references/authentication.md
license: ""
upstream_ref: https://skills.sh/inferencesh/skills/agent-tools
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:29.808Z
content_sha256: 65924807bfa86c677ecc8b3f1714adbec266cecab1864e46cb9f0a7492d9de2e
---
|/data/skills-sh-inferencesh-skills-agent-tools|

---
stable_id: skills/skills-sh-inferencesh-skills-javascript-sdk
type: skills
title: skills-sh-inferencesh-skills-javascript-sdk
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
source_url: https://raw.githubusercontent.com/inferencesh/skills/HEAD/skills/javascript-sdk/references/agent-patterns.md
license: ""
upstream_ref: https://skills.sh/inferencesh/skills/javascript-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:30.032Z
content_sha256: 81d7e3e42f5803e8e820edf19ca4b5e54c54ad18afa3c0be98b7d3949b8adbd8
---
|/data/skills-sh-inferencesh-skills-javascript-sdk|

---
stable_id: skills/skills-sh-inferencesh-skills-python-sdk
type: skills
title: skills-sh-inferencesh-skills-python-sdk
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
source_url: https://raw.githubusercontent.com/inferencesh/skills/HEAD/skills/python-sdk/references/agent-patterns.md
license: ""
upstream_ref: https://skills.sh/inferencesh/skills/python-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:29.960Z
content_sha256: 85c91b4d772be3d2d10d017f83892b00940941174989adccc5a8752f56f44ec4
---
|/data/skills-sh-inferencesh-skills-python-sdk|

---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.2.63

  - SDK: Fixed `pathToClaudeCodeExecutable` failing when set to a bare command
  name (e.g., `"claude"`) that should resolve via PATH

  - Added `supportedAgents()` method to the Query interface to view available
  subagents

  - Fixed MCP replacement tools being incorrectly denied in subagents when using
  unprefixed MCP tool names

  ## 0.2.61

  - Updated to parity with Claude Code v2.1.61

  ## 0.2.59

  - Added `getSessionMessages()` function for reading a session's conversation
  history from its transcript file, with support for pagination via `limit` and
  `offset` options

  ## 0.2.58
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:40.242Z
content_sha256: 759621cd5de211580a728a57876d915a3964d85629ace8efe2db1953e062d79d
---
|/data/skills-sh-jezweb-claude-skills-claude-agent-sdk|

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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:38.897Z
content_sha256: 3246b413c28f643b21bb72f2b20bda5133ab11bac124b1c6ab3427be96ec997b
---
|/data/skills-sh-jezweb-claude-skills-react-native-expo|

---
stable_id: skills/skills-sh-jimliu-baoyu-skills-baoyu-article-illustrator
type: skills
title: skills-sh-jimliu-baoyu-skills-baoyu-article-illustrator
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
source_url: https://raw.githubusercontent.com/jimliu/baoyu-skills/HEAD/skills/baoyu-article-illustrator/references/styles.md
license: ""
upstream_ref: https://skills.sh/jimliu/baoyu-skills/baoyu-article-illustrator
github_stars: 5829
github_forks: 671
github_is_organization: false
retrieved_at: 2026-03-03T07:17:58.496Z
content_sha256: d0d741a5b3cc839e18d0dd82be41de0401ce1d941f20a377997577352c65543e
---
|/data/skills-sh-jimliu-baoyu-skills-baoyu-article-illustrator|

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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:16.008Z
content_sha256: d0d741a5b3cc839e18d0dd82be41de0401ce1d941f20a377997577352c65543e
---
|/data/skills-sh-jimliu-baoyu-skills-baoyu-article-illustrator-f9ed6141|

---
stable_id: skills/skills-sh-jimliu-baoyu-skills-baoyu-comic
type: skills
title: skills-sh-jimliu-baoyu-skills-baoyu-comic
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
source_url: https://raw.githubusercontent.com/jimliu/baoyu-skills/HEAD/skills/baoyu-comic/references/partial-workflows.md
license: ""
upstream_ref: https://skills.sh/jimliu/baoyu-skills/baoyu-comic
github_stars: 4718
github_forks: 521
github_is_organization: false
retrieved_at: 2026-03-03T07:17:34.577Z
content_sha256: b4930b48fa45d58b149a1700305bf2dd90e90b9e42f6d9f896659f73a73f98f6
---
|/data/skills-sh-jimliu-baoyu-skills-baoyu-comic|

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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:16.284Z
content_sha256: b4930b48fa45d58b149a1700305bf2dd90e90b9e42f6d9f896659f73a73f98f6
---
|/data/skills-sh-jimliu-baoyu-skills-baoyu-comic-901918a4|

---
stable_id: skills/skills-sh-jimliu-baoyu-skills-baoyu-cover-image
type: skills
title: skills-sh-jimliu-baoyu-skills-baoyu-cover-image
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
source_url: https://raw.githubusercontent.com/jimliu/baoyu-skills/HEAD/skills/baoyu-cover-image/references/style-presets.md
license: ""
upstream_ref: https://skills.sh/jimliu/baoyu-skills/baoyu-cover-image
github_stars: 5829
github_forks: 671
github_is_organization: false
retrieved_at: 2026-03-03T07:17:58.568Z
content_sha256: 78d4c3740c46e6bf3bffd2a07d5bddca9ec3d73688ad745df2641c4039de5d9d
---
|/data/skills-sh-jimliu-baoyu-skills-baoyu-cover-image|

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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:16.094Z
content_sha256: 78d4c3740c46e6bf3bffd2a07d5bddca9ec3d73688ad745df2641c4039de5d9d
---
|/data/skills-sh-jimliu-baoyu-skills-baoyu-cover-image-93718624|

---
stable_id: skills/skills-sh-jimliu-baoyu-skills-baoyu-danger-x-to-markdown
type: skills
title: skills-sh-jimliu-baoyu-skills-baoyu-danger-x-to-markdown
summary: >-
  ---

  name: first-time-setup

  description: First-time setup flow for baoyu-danger-x-to-markdown preferences

  ---

  # First-Time Setup

  ## Overview

  When no EXTEND.md is found, guide user through preference setup.

  **BLOCKING OPERATION**: This setup MUST complete before ANY other workflow
  steps. Do NOT:

  - Start converting tweets or articles

  - Ask about URLs or output paths
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/jimliu/baoyu-skills/HEAD/skills/baoyu-danger-x-to-markdown/references/config/first-time-setup.md
license: ""
upstream_ref: https://skills.sh/jimliu/baoyu-skills/baoyu-danger-x-to-markdown
github_stars: 5324
github_forks: 600
github_is_organization: false
retrieved_at: 2026-03-03T07:17:48.377Z
content_sha256: 61db3aa0512d452163903d0b40c7d4062372e10df2053570a1a89ed656718800
---
|/data/skills-sh-jimliu-baoyu-skills-baoyu-danger-x-to-markdown|

---
stable_id: skills/skills-sh-jimliu-baoyu-skills-baoyu-post-to-wechat
type: skills
title: skills-sh-jimliu-baoyu-skills-baoyu-post-to-wechat
summary: >-
  ---

  name: first-time-setup

  description: First-time setup flow for baoyu-post-to-wechat preferences

  ---

  # First-Time Setup

  ## Overview

  When no EXTEND.md is found, guide user through preference setup.

  **BLOCKING OPERATION**: This setup MUST complete before ANY other workflow
  steps. Do NOT:

  - Ask about content or files to publish

  - Ask about themes or publishing methods
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/jimliu/baoyu-skills/HEAD/skills/baoyu-post-to-wechat/references/config/first-time-setup.md
license: ""
upstream_ref: https://skills.sh/jimliu/baoyu-skills/baoyu-post-to-wechat
github_stars: 5829
github_forks: 671
github_is_organization: false
retrieved_at: 2026-03-03T07:17:58.804Z
content_sha256: ee770b8964d8eec439f8c052a05980439a06bec8ee8efee989b87919296a0a55
---
|/data/skills-sh-jimliu-baoyu-skills-baoyu-post-to-wechat|

---
stable_id: skills/skills-sh-jimliu-baoyu-skills-baoyu-post-to-wechat-f876f2bd
type: skills
title: skills-sh-jimliu-baoyu-skills-baoyu-post-to-wechat-f876f2bd
summary: >-
  # Image-Text Posting (贴图发表, formerly 图文)

  Post image-text messages with multiple images to WeChat Official Account.

  > **Note**: WeChat has renamed "图文" to "贴图" in the Official Account menu (as
  of 2026).

  ## Usage

  ```bash

  # Post with images and markdown file (title/content extracted automatically)

  npx -y bun ./scripts/wechat-browser.ts --markdown source.md --images ./images/

  # Post with explicit title and content

  npx -y bun ./scripts/wechat-browser.ts --title "标题" --content "内容" --image
  img1.png --image img2.png

  # Save as draft
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/jimliu/baoyu-skills/main/skills/baoyu-post-to-wechat/references/image-text-posting.md
license: ""
upstream_ref: https://skills.sh/jimliu/baoyu-skills/baoyu-post-to-wechat
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:16.375Z
content_sha256: adf46a9ee4bbea0445d096f43e2d2c20dd9c8accc29c73526d08def7ffc40b9c
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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:10.674Z
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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:17.666Z
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
source_url: https://raw.githubusercontent.com/langgenius/dify/HEAD/.agents/skills/frontend-code-review/references/code-quality.md
license: ""
upstream_ref: https://skills.sh/langgenius/dify/frontend-code-review
github_stars: 130627
github_forks: 20343
github_is_organization: true
retrieved_at: 2026-03-03T07:18:01.130Z
content_sha256: b67ba50627f957bce3c6f67cd96e186485d48f3c6636267fbad1e0aba8f521fa
---
|/data/skills-sh-langgenius-dify-frontend-code-review|

---
stable_id: skills/skills-sh-letz-ai-letzai-skill-letzai-api
type: skills
title: skills-sh-letz-ai-letzai-skill-letzai-api
summary: >-
  # LetzAI Polling Pattern Guide

  LetzAI uses asynchronous generation for all image and video operations. This
  guide explains how to properly implement polling to check job status and
  retrieve results.

  ## Why Polling?

  AI image and video generation takes time (seconds to minutes). Instead of
  keeping connections open, LetzAI uses an async pattern:

  1. **Submit Job** → Receive job ID immediately

  2. **Poll Status** → Check periodically until complete

  3. **Get Result** → Fetch URLs when ready

  ## Status Flow

  ```

  ┌─────┐     ┌─────────────┐     ┌───────┐
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/letz-ai/letzai-skill/HEAD/examples/polling_pattern.md
license: ""
upstream_ref: https://skills.sh/letz-ai/letzai-skill/letzai-api
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:38.378Z
content_sha256: dca10944dcb129ae0451aa5a116a56e569c628f2988d043c9bbe3ed558cda02c
---
|/data/skills-sh-letz-ai-letzai-skill-letzai-api|

---
stable_id: skills/skills-sh-letz-ai-letzai-skill-letzai-api-cd10df60
type: skills
title: skills-sh-letz-ai-letzai-skill-letzai-api-cd10df60
summary: >-
  ---

  name: letzai-api

  description: "Generate AI images and videos via LetzAI API. Supports Nano
  Banana Pro, Flux2 Max, SeeDream for images; VEO, Kling for videos. Use custom
  trained models with @modelname. Includes context editing and upscaling. Use
  for content creation apps and automation."

  license: MIT

  dependencies:
    - node-fetch (npm)
    - requests (pip)
  ---

  # LetzAI API Integration Skill

  ## Overview
tags:
  - skills-sh
  - skills-sh-probed
source_url: https://raw.githubusercontent.com/letz-ai/letzai-skill/main/SKILL.md
license: ""
upstream_ref: https://skills.sh/letz-ai/letzai-skill/letzai-api
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:40.323Z
content_sha256: 08821bcc515584894006f42acde1e00e380f50ea34a30de4bccfbb3b4a8f8e24
---
|/data/skills-sh-letz-ai-letzai-skill-letzai-api-cd10df60|

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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:11.235Z
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
source_url: https://raw.githubusercontent.com/madteacher/mad-agents-skills/HEAD/flutter-adaptive-ui/references/layout-constraints.md
license: ""
upstream_ref: https://skills.sh/madteacher/mad-agents-skills/flutter-adaptive-ui
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:18:06.093Z
content_sha256: 9928601ce17722835ee548fb4369b87860b037fe187b65f7048da7c927b19c52
---
|/data/skills-sh-madteacher-mad-agents-skills-flutter-adaptive-ui|

---
stable_id: skills/skills-sh-madteacher-mad-agents-skills-flutter-architecture
type: skills
title: skills-sh-madteacher-mad-agents-skills-flutter-architecture
summary: >-
  # Feature-First Architecture

  Organize code by features instead of layers for better maintainability and
  team scalability.

  ## Overview

  **Feature-first** organizes code by business features, with each feature
  containing all layers needed for that feature.

  ```

  lib/

  ├── features/

  │   ├── auth/

  │   │   ├── data/

  │   │   │   ├── repositories/
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/madteacher/mad-agents-skills/HEAD/flutter-architecture/references/feature-first.md
license: ""
upstream_ref: https://skills.sh/madteacher/mad-agents-skills/flutter-architecture
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:18:06.654Z
content_sha256: 0257900638be45745a37208b4db3f7242b075454d2e2a22a5a0dc09c07f2f7a8
---
|/data/skills-sh-madteacher-mad-agents-skills-flutter-architecture|

---
stable_id: skills/skills-sh-magicseek-nblm-nblm
type: skills
title: skills-sh-magicseek-nblm-nblm
summary: >-
  ---

  name: nblm

  description: Use this skill to query your Google NotebookLM notebooks directly
  from Claude Code for source-grounded, citation-backed answers from Gemini.
  Browser automation, library management, persistent auth. Drastically reduced
  hallucinations through document-only responses.

  ---

  # NotebookLM Quick Commands

  Query Google NotebookLM for source-grounded, citation-backed answers.

  ## Environment

  All dependencies and authentication are handled automatically by `run.py`:

  - First run creates `.venv` and installs Python/Node.js dependencies

  - If Google auth is missing or expired, a browser window opens automatically
tags:
  - skills-sh
  - skills-sh-probed
source_url: https://raw.githubusercontent.com/magicseek/nblm/main/SKILL.md
license: ""
upstream_ref: https://skills.sh/magicseek/nblm/nblm
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:32.420Z
content_sha256: 1afee54177d3db6ae83d7d76fb96293d31fd126bbd1e0a787ecfbaef6f8597f9
---
|/data/skills-sh-magicseek-nblm-nblm|

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
source_url: https://raw.githubusercontent.com/mastra-ai/skills/HEAD/skills/mastra/references/create-mastra.md
license: ""
upstream_ref: https://skills.sh/mastra-ai/skills/mastra
github_stars: 30
github_forks: 2
github_is_organization: true
retrieved_at: 2026-03-03T07:17:58.891Z
content_sha256: bb4f452bbd0dc7960eccdb3fc1b2a15f709848910ca5ce081d8660c884c349e0
---
|/data/skills-sh-mastra-ai-skills-mastra|

---
stable_id: skills/skills-sh-mattpocock-skills-tdd
type: skills
title: skills-sh-mattpocock-skills-tdd
summary: >-
  # Good and Bad Tests

  ## Good Tests

  **Integration-style**: Test through real interfaces, not mocks of internal
  parts.

  ```typescript

  // GOOD: Tests observable behavior

  test("user can checkout with valid cart", async () => {
    const cart = createCart();
    cart.add(product);
    const result = await checkout(cart, paymentMethod);
    expect(result.status).toBe("confirmed");
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/mattpocock/skills/HEAD/tdd/tests.md
license: ""
upstream_ref: https://skills.sh/mattpocock/skills/tdd
github_stars: 722
github_forks: 64
github_is_organization: false
retrieved_at: 2026-03-03T07:18:00.761Z
content_sha256: e12182f5c4c6a844b7c6ab4b8d2623b642aaaae5460fe58ed087efd4f3d5fb8a
---
|/data/skills-sh-mattpocock-skills-tdd|

---
stable_id: skills/skills-sh-mblode-agent-skills-ui-animation
type: skills
title: skills-sh-mblode-agent-skills-ui-animation
summary: |-
  # UI Animation Examples
  Snippets and tips for the core rules in `SKILL.md`.
  ## Table of contents
  - [Enter and exit](#enter-and-exit)
  - [Spatial rules and stagger](#spatial-rules-and-stagger)
  - [Drawer (move easing)](#drawer-move-easing)
  - [Hover transitions](#hover-transitions)
  - [Reduced motion](#reduced-motion)
  - [Origin-aware animations](#origin-aware-animations)
  - [Performance recipes](#performance-recipes)
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/mblode/agent-skills/HEAD/skills/ui-animation/examples.md
license: ""
upstream_ref: https://skills.sh/mblode/agent-skills/ui-animation
github_stars: 16
github_forks: 0
github_is_organization: false
retrieved_at: 2026-03-03T07:18:02.279Z
content_sha256: 3f6fcbc710e184f4b8c49c2824730b723bf692f98f9958239a3e0c7764618f5f
---
|/data/skills-sh-mblode-agent-skills-ui-animation|

---
stable_id: skills/skills-sh-mcp-use-mcp-use-chatgpt-app-builder
type: skills
title: skills-sh-mcp-use-mcp-use-chatgpt-app-builder
summary: >-
  # Discovery Workflow

  **Goal: Idea maturation, not speed.**

  Proceed in phases. Even if the user provides details, complete each phase
  through conversation. Do not infer or assume -- discuss and validate with
  user. Proceed one phase at a time.

  ---

  ## Phase 1: Value Proposition

  1. **Problem + User**: What problem does this solve? For whom?

  2. **Pain**: How is it solved today? What's painful about that?

  3. **Core actions**: 1-3 focused actions (not a full app port)

  ---

  ## Phase 2: Why LLM?
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/mcp-use/mcp-use/HEAD/skills/chatgpt-app-builder/references/discover.md
license: ""
upstream_ref: https://skills.sh/mcp-use/mcp-use/chatgpt-app-builder
github_stars: 9294
github_forks: 1146
github_is_organization: true
retrieved_at: 2026-03-03T07:17:59.417Z
content_sha256: da18c63e30d5d496f91c9db29da5ed3dea5ffc1d197b9b38170dc729e6281411
---
|/data/skills-sh-mcp-use-mcp-use-chatgpt-app-builder|

---
stable_id: skills/skills-sh-mcp-use-mcp-use-mcp-apps-builder
type: skills
title: skills-sh-mcp-use-mcp-use-mcp-apps-builder
summary: >-
  # Quick Start

  Build your first MCP server tool in 5 minutes.

  ## Setup

  ### Scaffolding a New Project

  ```bash

  npx create-mcp-use-app my-server

  cd my-server

  npm run dev

  ```

  This installs dependencies, starts the server on port 3000, and opens the
  inspector at `http://localhost:3000/inspector`.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/mcp-use/mcp-use/HEAD/skills/mcp-apps-builder/references/foundations/quickstart.md
license: ""
upstream_ref: https://skills.sh/mcp-use/mcp-use/mcp-apps-builder
github_stars: 9271
github_forks: 1142
github_is_organization: true
retrieved_at: 2026-03-03T07:17:48.871Z
content_sha256: 80675d7718f7f2586eb9074e1411ed53b59b27d3559da95114c149cd3fb7f524
---
|/data/skills-sh-mcp-use-mcp-use-mcp-apps-builder|

---
stable_id: skills/skills-sh-microsoft-github-copilot-for-azure-appinsights-instrumentation
type: skills
title: skills-sh-microsoft-github-copilot-for-azure-appinsights-instrumentation
summary: |-
  # Auto-instrument app
  Use Azure Portal to auto-instrument a webapp hosted in Azure App Service for App Insights without making any code changes. Only the following types of app can be auto-instrumented. See [supported environments and resource providers](https://learn.microsoft.com/azure/azure-monitor/app/codeless-overview#supported-environments-languages-and-resource-providers).
  - ASP.NET Core app hosted in Azure App Service
  - Node.js app hosted in Azure App Service
  Construct a url to bring the user to the Application Insights blade in Azure Portal for the App Service App.
  ```
  https://portal.azure.com/#resource/subscriptions/{subscription_id}/resourceGroups/{resource_group_name}/providers/Microsoft.Web/sites/{app_service_name}/monitoringSettings
  ```
  Use the context or ask the user to get the subscription_id, resource_group_name, and the app_service_name hosting the webapp.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/microsoft/github-copilot-for-azure/HEAD/plugin/skills/appinsights-instrumentation/references/auto.md
license: ""
upstream_ref: https://skills.sh/microsoft/github-copilot-for-azure/appinsights-instrumentation
github_stars: 127
github_forks: 80
github_is_organization: true
retrieved_at: 2026-03-03T07:17:54.359Z
content_sha256: 8a0a447289e232dc54909017b4a490b46ca5fc1eb90099645eeb99b1b9a8a732
---
|/data/skills-sh-microsoft-github-copilot-for-azure-appinsights-instrumentation|

---
stable_id: skills/skills-sh-microsoft-github-copilot-for-azure-azure-ai
type: skills
title: skills-sh-microsoft-github-copilot-for-azure-azure-ai
summary: >-
  # Azure AI Search — Python SDK Quick Reference

  > Condensed from **azure-search-documents-py**. Full patterns (agentic
  retrieval, integrated vectorization, skillsets)

  > in the **azure-search-documents-py** plugin skill if installed.

  ## Install

  ```bash

  pip install azure-search-documents azure-identity

  ```

  ## Quick Start

  ```python

  from azure.search.documents import SearchClient
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/microsoft/github-copilot-for-azure/HEAD/plugin/skills/azure-ai/references/sdk/azure-search-documents-py.md
license: ""
upstream_ref: https://skills.sh/microsoft/github-copilot-for-azure/azure-ai
github_stars: 127
github_forks: 80
github_is_organization: true
retrieved_at: 2026-03-03T07:17:53.437Z
content_sha256: d65d61fe00ed7c54d4163279da7f915613aa94a88b0613801dfb82514f89bc86
---
|/data/skills-sh-microsoft-github-copilot-for-azure-azure-ai|

---
stable_id: skills/skills-sh-microsoft-github-copilot-for-azure-azure-aigateway
type: skills
title: skills-sh-microsoft-github-copilot-for-azure-azure-aigateway
summary: |-
  # AI Gateway Policies
  Complete reference for Azure API Management AI governance policies.
  ---
  ## Policy Placement Order
  Recommended order in `<inbound>` section:
  ```
  1. Authentication (managed identity)
  2. Semantic Cache Lookup
  3. Token Rate Limiting
  4. Content Safety
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/microsoft/github-copilot-for-azure/HEAD/plugin/skills/azure-aigateway/references/policies.md
license: ""
upstream_ref: https://skills.sh/microsoft/github-copilot-for-azure/azure-aigateway
github_stars: 127
github_forks: 80
github_is_organization: true
retrieved_at: 2026-03-03T07:17:54.824Z
content_sha256: 176a5bf61186a45e338dcc9ab6e9320a7b4ae3d8bb356f8613506533348b3b69
---
|/data/skills-sh-microsoft-github-copilot-for-azure-azure-aigateway|

---
stable_id: skills/skills-sh-microsoft-github-copilot-for-azure-azure-compliance
type: skills
title: skills-sh-microsoft-github-copilot-for-azure-azure-compliance
summary: >-
  # Azure Quick Review Compliance Assessment

  This skill enables comprehensive Azure compliance assessments using Azure
  Quick Review (azqr), analyzing findings against Azure best practices, and
  providing actionable remediation guidance.

  ## Prerequisites

  - **Azure authentication** - Logged in via Azure CLI (`az login`) or using
  Service Principal/Managed Identity

  - **Reader permissions** - Minimum Reader role on target subscription or
  management group

  ## Assessment Workflow

  ### Step 1: Determine Scan Scope

  Ask the user or detect from context:

  | Scope | Use Case | Required Info |

  |-------|----------|---------------|
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/microsoft/github-copilot-for-azure/HEAD/plugin/skills/azure-compliance/references/azure-quick-review.md
license: ""
upstream_ref: https://skills.sh/microsoft/github-copilot-for-azure/azure-compliance
github_stars: 127
github_forks: 80
github_is_organization: true
retrieved_at: 2026-03-03T07:17:54.546Z
content_sha256: abf2578f34b6bafa53d32794e71b09980a8223cbfe535f1e6d06bb0f3b8a0f63
---
|/data/skills-sh-microsoft-github-copilot-for-azure-azure-compliance|

---
stable_id: skills/skills-sh-microsoft-github-copilot-for-azure-azure-compute
type: skills
title: skills-sh-microsoft-github-copilot-for-azure-azure-compute
summary: |-
  # VMSS Guide
  Determine when to recommend a Virtual Machine Scale Set (VMSS) over a single VM, and which VMSS configuration to suggest.
  > **Note:** This reference provides quick guidance but may become stale. Always verify VMSS features, limitations, and orchestration mode capabilities by fetching the latest documentation from:
  > - https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/overview
  > - https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-autoscale-overview
  > - https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/orchestration-modes-api-comparison
  ## What Is a VM Scale Set?
  A VMSS creates and manages a group of load-balanced, identically configured VM instances. Key capabilities:
  - **Autoscale** — automatically add/remove instances based on metrics or schedules
  - **High availability** — spread instances across fault domains and Availability Zones
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/microsoft/github-copilot-for-azure/HEAD/plugin/skills/azure-compute/references/vmss-guide.md
license: ""
upstream_ref: https://skills.sh/microsoft/github-copilot-for-azure/azure-compute
github_stars: 127
github_forks: 80
github_is_organization: true
retrieved_at: 2026-03-03T07:17:56.722Z
content_sha256: 506dc880e0c8dd8362a0ac8589048ed2021e07aa93d1525306c32046f4b41326
---
|/data/skills-sh-microsoft-github-copilot-for-azure-azure-compute|

---
stable_id: skills/skills-sh-microsoft-github-copilot-for-azure-azure-cost-optimization
type: skills
title: skills-sh-microsoft-github-copilot-for-azure-azure-cost-optimization
summary: >-
  ## Azure Redis Cost Optimization

  Reference guide for identifying cost savings opportunities in Azure Redis
  deployments through analysis and targeted scans.

  ## Subscription Input Options

  Accept any of these identifiers to identify subscriptions for analysis:

  | Input Type | Example | Use Case |

  |------------|---------|----------|

  | **Subscription ID** | `a1b2c3d4-...` | Analyze specific subscription |

  | **Subscription Name** | `Production-Environment` | User-friendly identifier
  |

  | **Subscription Prefix** | `CacheTeam -` | Analyze all team subscriptions |

  | **Tenant ID** | `tenant-guid` | Analyze entire organization |
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/microsoft/github-copilot-for-azure/HEAD/plugin/skills/azure-cost-optimization/references/azure-redis.md
license: ""
upstream_ref: https://skills.sh/microsoft/github-copilot-for-azure/azure-cost-optimization
github_stars: 127
github_forks: 80
github_is_organization: true
retrieved_at: 2026-03-03T07:17:53.646Z
content_sha256: 51b03b4e4b4089b5c0e8a817fab8a0e854c630180f09a8ae4a23726bbc0f9f5c
---
|/data/skills-sh-microsoft-github-copilot-for-azure-azure-cost-optimization|

---
stable_id: skills/skills-sh-microsoft-github-copilot-for-azure-azure-deploy
type: skills
title: skills-sh-microsoft-github-copilot-for-azure-azure-deploy
summary: >-
  # Pre-Deployment Checklist

  > **CRITICAL**: Before running ANY provisioning commands, you MUST complete
  this checklist IN ORDER.

  >

  > ⛔ **DO NOT** run `azd up` until ALL steps are complete. Trial-and-error
  wastes time and creates orphan resources.

  ## Step 1: Check Current Subscription

  Use the Azure MCP tool to get current subscription:

  ```

  mcp_azure_mcp_subscription_list

  ```

  **CLI fallback:**
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/microsoft/github-copilot-for-azure/HEAD/plugin/skills/azure-deploy/references/pre-deploy-checklist.md
license: ""
upstream_ref: https://skills.sh/microsoft/github-copilot-for-azure/azure-deploy
github_stars: 127
github_forks: 80
github_is_organization: true
retrieved_at: 2026-03-03T07:17:51.822Z
content_sha256: 3990b9b082a1aaa95dd3dda9e9916889fda3a622d5f2eb1cf7128315c49391d9
---
|/data/skills-sh-microsoft-github-copilot-for-azure-azure-deploy|

---
stable_id: skills/skills-sh-microsoft-github-copilot-for-azure-azure-diagnostics
type: skills
title: skills-sh-microsoft-github-copilot-for-azure-azure-diagnostics
summary: >-
  # Container Apps Troubleshooting

  ### Common Issues Matrix

  | Symptom | Likely Cause | Quick Fix |

  |---------|--------------|-----------|

  | Image pull failure | ACR credentials missing | `az containerapp registry set
  --identity system` |

  | ACR build fails | ACR Tasks disabled (free sub) | Build locally with Docker
  |

  | Cold start timeout | min-replicas=0 | `az containerapp update --min-replicas
  1` |

  | Port mismatch | Wrong target port | Check Dockerfile EXPOSE matches ingress
  |

  | App keeps restarting | Health probe failing | Verify `/health` endpoint |

  ### Image Pull Failures
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/microsoft/github-copilot-for-azure/HEAD/plugin/skills/azure-diagnostics/references/container-apps/README.md
license: ""
upstream_ref: https://skills.sh/microsoft/github-copilot-for-azure/azure-diagnostics
github_stars: 127
github_forks: 80
github_is_organization: true
retrieved_at: 2026-03-03T07:17:53.829Z
content_sha256: 8d7772007db8635af33cce1dde78f82e22f8c9df143e10a960e841cb2e479dd4
---
|/data/skills-sh-microsoft-github-copilot-for-azure-azure-diagnostics|

---
stable_id: skills/skills-sh-microsoft-github-copilot-for-azure-azure-hosted-copilot-sdk
type: skills
title: skills-sh-microsoft-github-copilot-for-azure-azure-hosted-copilot-sdk
summary: |-
  # Integrating Copilot SDK into Existing Projects
  Add Copilot SDK AI features to an existing application.
  ## Project Analysis
  Detect the project type by scanning for indicator files:
  | Indicator | Language | Framework hints |
  |-----------|----------|-----------------|
  | `package.json` | Node.js | Express, Fastify, Next.js |
  | `requirements.txt` / `pyproject.toml` | Python | Flask, FastAPI, Django |
  | `go.mod` | Go | Gin, Echo, net/http |
  | `*.csproj` / `*.sln` | .NET | ASP.NET, Minimal API |
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/microsoft/github-copilot-for-azure/HEAD/plugin/skills/azure-hosted-copilot-sdk/references/existing-project-integration.md
license: ""
upstream_ref: https://skills.sh/microsoft/github-copilot-for-azure/azure-hosted-copilot-sdk
github_stars: 127
github_forks: 80
github_is_organization: true
retrieved_at: 2026-03-03T07:17:55.298Z
content_sha256: b3943c725135fcf780a2a5d768ad3c7ef1ea9485b4c0585be43b788bc6ab44f5
---
|/data/skills-sh-microsoft-github-copilot-for-azure-azure-hosted-copilot-sdk|

---
stable_id: skills/skills-sh-microsoft-github-copilot-for-azure-azure-messaging
type: skills
title: skills-sh-microsoft-github-copilot-for-azure-azure-messaging
summary: >-
  # Service-Level Troubleshooting

  Covers connectivity, firewall, and network issues that apply regardless of SDK
  language.

  ## Permanent Connectivity Issues

  If the client **cannot connect at all**:

  1. **Verify connection string** — Get from Azure portal. For **Event Hubs
  (Kafka endpoint)** clients, also check `producer.config` / `consumer.config`.

  2. **Check service outage** — [Azure status
  page](https://azure.status.microsoft/status)

  3. **Firewall / ports** — Open AMQP 5671 and 5672, HTTPS 443. For **Event Hubs
  (Kafka endpoint)** only, also open Kafka 9093. Use WebSockets (port 443) as
  fallback.

  4. **IP firewall** — If enabled on namespace, ensure client IP is allowed.

  5. **VNet / private endpoints** — Confirm app runs in correct subnet. Check
  service endpoint and NSG rules.

  6. **Proxy / SSL** — Intercepting proxies can cause SSL handshake failures.
  Test with proxy disabled.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/microsoft/github-copilot-for-azure/HEAD/plugin/skills/azure-messaging/references/service-troubleshooting.md
license: ""
upstream_ref: https://skills.sh/microsoft/github-copilot-for-azure/azure-messaging
github_stars: 114
github_forks: 72
github_is_organization: true
retrieved_at: 2026-03-03T07:17:36.957Z
content_sha256: 206d243b21e22a129b68a4ba36729e18b740bffaf2dfa1aecc9fd36dc7d4df02
---
|/data/skills-sh-microsoft-github-copilot-for-azure-azure-messaging|

---
stable_id: skills/skills-sh-microsoft-github-copilot-for-azure-azure-observability
type: skills
title: skills-sh-microsoft-github-copilot-for-azure-azure-observability
summary: |-
  # Azure Monitor OpenTelemetry — Python SDK Quick Reference
  > Condensed from **azure-monitor-opentelemetry-py**. Full patterns
  > (Flask/Django/FastAPI, custom metrics, sampling, live metrics)
  > in the **azure-monitor-opentelemetry-py** plugin skill if installed.
  ## Install
  pip install azure-monitor-opentelemetry
  ## Quick Start
  ```python
  from azure.monitor.opentelemetry import configure_azure_monitor
  configure_azure_monitor()
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/microsoft/github-copilot-for-azure/HEAD/plugin/skills/azure-observability/references/sdk/azure-monitor-opentelemetry-py.md
license: ""
upstream_ref: https://skills.sh/microsoft/github-copilot-for-azure/azure-observability
github_stars: 127
github_forks: 80
github_is_organization: true
retrieved_at: 2026-03-03T07:17:53.548Z
content_sha256: 09c3621da82b7de1ee6ee4c96e27171023df75897b113803e99a2a9851354608
---
|/data/skills-sh-microsoft-github-copilot-for-azure-azure-observability|

---
stable_id: skills/skills-sh-microsoft-github-copilot-for-azure-azure-prepare
type: skills
title: skills-sh-microsoft-github-copilot-for-azure-azure-prepare
summary: >-
  # Azure Context (Subscription & Location)

  Detect and confirm Azure subscription and location before generating
  artifacts.

  ---

  ## Step 1: Check for Existing AZD Environment

  If the project already uses AZD, check for an existing environment with values
  already set:

  ```bash

  azd env list

  ```

  **If an environment is selected** (marked with `*`), check its values:

  ```bash
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/microsoft/github-copilot-for-azure/HEAD/plugin/skills/azure-prepare/references/azure-context.md
license: ""
upstream_ref: https://skills.sh/microsoft/github-copilot-for-azure/azure-prepare
github_stars: 127
github_forks: 80
github_is_organization: true
retrieved_at: 2026-03-03T07:17:54.738Z
content_sha256: 10b26a7fa0defe0a41432f7a1432b50139b6a2b8074b83948728468aaa58fef5
---
|/data/skills-sh-microsoft-github-copilot-for-azure-azure-prepare|

---
stable_id: skills/skills-sh-microsoft-github-copilot-for-azure-azure-resource-lookup
type: skills
title: skills-sh-microsoft-github-copilot-for-azure-azure-resource-lookup
summary: >-
  # Azure Resource Graph Query Patterns

  Azure Resource Graph (ARG) queries use a KQL subset against indexed Azure
  resource metadata. Results are near real-time across all subscriptions.

  ## Command Format

  ```bash

  az graph query -q "<KQL>" --query "data[].{col1:field1, col2:field2}" -o table

  ```

  | Flag | Purpose |

  |------|---------|

  | `-q` | KQL query string |

  | `--query` | JMESPath to shape output columns |
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/microsoft/github-copilot-for-azure/HEAD/plugin/skills/azure-resource-lookup/references/azure-resource-graph.md
license: ""
upstream_ref: https://skills.sh/microsoft/github-copilot-for-azure/azure-resource-lookup
github_stars: 127
github_forks: 80
github_is_organization: true
retrieved_at: 2026-03-03T07:17:54.928Z
content_sha256: 478e6a6d0ce9c515523548c2e4b44b71baedd3bd8c27e2af7f3bd3aa804060ea
---
|/data/skills-sh-microsoft-github-copilot-for-azure-azure-resource-lookup|

---
stable_id: skills/skills-sh-microsoft-github-copilot-for-azure-azure-resource-visualizer
type: skills
title: skills-sh-microsoft-github-copilot-for-azure-azure-resource-visualizer
summary: >-
  # Azure Resource Graph Queries for Resource Discovery

  Azure Resource Graph (ARG) enables fast, cross-subscription resource querying
  using KQL via `az graph query`. Use it for bulk resource discovery and
  relationship mapping.

  ## How to Query

  Use the `extension_cli_generate` MCP tool to generate `az graph query`
  commands:

  ```yaml

  mcp_azure_mcp_extension_cli_generate
    intent: "query Azure Resource Graph to <describe what you want to find>"
    cli-type: "az"
  ```

  Or construct directly:
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/microsoft/github-copilot-for-azure/HEAD/plugin/skills/azure-resource-visualizer/references/azure-resource-graph.md
license: ""
upstream_ref: https://skills.sh/microsoft/github-copilot-for-azure/azure-resource-visualizer
github_stars: 127
github_forks: 80
github_is_organization: true
retrieved_at: 2026-03-03T07:17:54.271Z
content_sha256: fb7c11feca04a1ad967a4eb83ad823ac25d0b8e1252a39bada62d4b91159597c
---
|/data/skills-sh-microsoft-github-copilot-for-azure-azure-resource-visualizer|

---
stable_id: skills/skills-sh-microsoft-github-copilot-for-azure-azure-storage
type: skills
title: skills-sh-microsoft-github-copilot-for-azure-azure-storage
summary: |-
  # Blob Storage — Python SDK Quick Reference
  > Condensed from **azure-storage-blob-py**. Full patterns (SAS tokens,
  > async client, performance tuning, blob properties/metadata)
  > in the **azure-storage-blob-py** plugin skill if installed.
  ## Install
  pip install azure-storage-blob azure-identity
  ## Quick Start
  ```python
  from azure.storage.blob import BlobServiceClient
  from azure.identity import DefaultAzureCredential
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/microsoft/github-copilot-for-azure/HEAD/plugin/skills/azure-storage/references/sdk/azure-storage-blob-py.md
license: ""
upstream_ref: https://skills.sh/microsoft/github-copilot-for-azure/azure-storage
github_stars: 127
github_forks: 80
github_is_organization: true
retrieved_at: 2026-03-03T07:17:53.735Z
content_sha256: afdd86c5b3e59452e36819195f578ee47207c9f4fd639e047675ef95cbd903d8
---
|/data/skills-sh-microsoft-github-copilot-for-azure-azure-storage|

---
stable_id: skills/skills-sh-microsoft-github-copilot-for-azure-azure-validate
type: skills
title: skills-sh-microsoft-github-copilot-for-azure-azure-validate
summary: >-
  # Global Rules

  > **MANDATORY** — These rules apply to ALL skills. Violations are
  unacceptable.

  ## Rule 1: Destructive Actions Require User Confirmation

  ⛔ **ALWAYS use `ask_user`** before ANY destructive action.

  ### What is Destructive?

  | Category | Examples |

  |----------|----------|

  | **Delete** | `az group delete`, `azd down`, `rm -rf`, delete resource |

  | **Overwrite** | Replace existing files, overwrite config, reset settings |

  | **Irreversible** | Purge Key Vault, delete storage account, drop database |
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/microsoft/github-copilot-for-azure/HEAD/plugin/skills/azure-validate/references/global-rules.md
license: ""
upstream_ref: https://skills.sh/microsoft/github-copilot-for-azure/azure-validate
github_stars: 127
github_forks: 80
github_is_organization: true
retrieved_at: 2026-03-03T07:17:54.457Z
content_sha256: 81395542533728334615e91f7a46ee88ce627d8e21a0fc1b1d5966ce1a2723f4
---
|/data/skills-sh-microsoft-github-copilot-for-azure-azure-validate|

---
stable_id: skills/skills-sh-microsoft-github-copilot-for-azure-entra-app-registration
type: skills
title: skills-sh-microsoft-github-copilot-for-azure-entra-app-registration
summary: >-
  # Azure CLI Commands for App Registration

  This document provides a comprehensive reference for managing Microsoft Entra
  app registrations using Azure CLI.

  ## Prerequisites

  ```bash

  # Ensure Azure CLI is installed

  az version

  # Login to Azure

  az login

  # Set default subscription (optional)

  az account set --subscription "Your Subscription Name"
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/microsoft/github-copilot-for-azure/HEAD/plugin/skills/entra-app-registration/references/cli-commands.md
license: ""
upstream_ref: https://skills.sh/microsoft/github-copilot-for-azure/entra-app-registration
github_stars: 127
github_forks: 80
github_is_organization: true
retrieved_at: 2026-03-03T07:17:54.185Z
content_sha256: c6c7881bcd6c9710fd71f54413077109f455cd2a1ba0d233652410f72f56ad24
---
|/data/skills-sh-microsoft-github-copilot-for-azure-entra-app-registration|

---
stable_id: skills/skills-sh-microsoft-github-copilot-for-azure-microsoft-foundry
type: skills
title: skills-sh-microsoft-github-copilot-for-azure-microsoft-foundry
summary: >-
  # Foundry Agent Deploy

  Create and manage agent deployments in Azure AI Foundry. For hosted agents,
  this includes the full workflow from containerizing the project to starting
  the agent container.

  ## Quick Reference

  | Property | Value |

  |----------|-------|

  | Agent types | Prompt (LLM-based), Hosted (ACA based), Hosted (vNext) |

  | MCP server | `foundry-mcp` |

  | Key MCP tools | `agent_update`, `agent_container_control`,
  `agent_container_status_get` |

  | CLI tools | `docker`, `az acr` (hosted agents only) |

  | Container protocols | `a2a`, `responses`, `mcp` |
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/microsoft/github-copilot-for-azure/HEAD/plugin/skills/microsoft-foundry/foundry-agent/deploy/deploy.md
license: ""
upstream_ref: https://skills.sh/microsoft/github-copilot-for-azure/microsoft-foundry
github_stars: 127
github_forks: 80
github_is_organization: true
retrieved_at: 2026-03-03T07:17:53.958Z
content_sha256: 8673ceff0654bfd16b0a9339a8947ffb6411d41636b4704cd5e666374fa225ef
---
|/data/skills-sh-microsoft-github-copilot-for-azure-microsoft-foundry|

---
stable_id: skills/skills-sh-microsoft-playwright-cli-playwright-cli
type: skills
title: skills-sh-microsoft-playwright-cli-playwright-cli
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
source_url: https://raw.githubusercontent.com/microsoft/playwright-cli/HEAD/skills/playwright-cli/references/request-mocking.md
license: ""
upstream_ref: https://skills.sh/microsoft/playwright-cli/playwright-cli
github_stars: 4106
github_forks: 154
github_is_organization: true
retrieved_at: 2026-03-03T07:17:49.609Z
content_sha256: 54e801c9663fc2b6d68ceb058cb1c360724c2499f42acc7852a68e83e5b5f37c
---
|/data/skills-sh-microsoft-playwright-cli-playwright-cli|

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
source_url: https://raw.githubusercontent.com/mrgoonie/claudekit-skills/HEAD/.claude/skills/chrome-devtools/references/cdp-domains.md
license: ""
upstream_ref: https://skills.sh/mrgoonie/claudekit-skills/chrome-devtools
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:32.722Z
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
source_url: https://raw.githubusercontent.com/nodnarbnitram/claude-code-extensions/HEAD/.claude/skills/tauri-v2/references/capabilities-reference.md
license: ""
upstream_ref: https://skills.sh/nodnarbnitram/claude-code-extensions/tauri-v2
github_stars: 5
github_forks: 2
github_is_organization: false
retrieved_at: 2026-03-03T07:18:00.931Z
content_sha256: 8248fda5666bd149a0275c3ab104b9794406255580d59da018ba1eff3e9d58e0
---
|/data/skills-sh-nodnarbnitram-claude-code-extensions-tauri-v2|

---
stable_id: skills/skills-sh-nuxt-ui-nuxt-ui
type: skills
title: skills-sh-nuxt-ui-nuxt-ui
summary: |-
  # Composables
  ## useToast
  Show notifications. Requires `<UApp>` wrapper.
  ```ts
  const toast = useToast()
  toast.add({
    title: 'Success',
    description: 'Item saved',
    color: 'success',       // primary, success, error, warning, info
    icon: 'i-lucide-check-circle',
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/nuxt/ui/HEAD/skills/nuxt-ui/references/composables.md
license: ""
upstream_ref: https://skills.sh/nuxt/ui/nuxt-ui
github_stars: 6254
github_forks: 1017
github_is_organization: true
retrieved_at: 2026-03-03T07:17:34.750Z
content_sha256: e24b7e54fcfb8ba9e4e061f3d5f94c84e771bac41ecfb371c875219081f0c034
---
|/data/skills-sh-nuxt-ui-nuxt-ui|

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
source_url: https://raw.githubusercontent.com/onmax/nuxt-skills/HEAD/skills/document-writer/references/writing-style.md
license: ""
upstream_ref: https://skills.sh/onmax/nuxt-skills/document-writer
github_stars: 564
github_forks: 27
github_is_organization: false
retrieved_at: 2026-03-03T07:18:05.611Z
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
source_url: https://raw.githubusercontent.com/onmax/nuxt-skills/HEAD/skills/motion/references/components.md
license: ""
upstream_ref: https://skills.sh/onmax/nuxt-skills/motion
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:32.492Z
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
source_url: https://raw.githubusercontent.com/onmax/nuxt-skills/HEAD/skills/nuxt-better-auth/references/installation.md
license: ""
upstream_ref: https://skills.sh/onmax/nuxt-skills/nuxt-better-auth
github_stars: 564
github_forks: 27
github_is_organization: false
retrieved_at: 2026-03-03T07:18:07.412Z
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
source_url: https://raw.githubusercontent.com/onmax/nuxt-skills/HEAD/skills/nuxt-content/references/collections.md
license: ""
upstream_ref: https://skills.sh/onmax/nuxt-skills/nuxt-content
github_stars: 564
github_forks: 27
github_is_organization: false
retrieved_at: 2026-03-03T07:18:07.019Z
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
source_url: https://raw.githubusercontent.com/onmax/nuxt-skills/HEAD/skills/nuxt-modules/references/development.md
license: ""
upstream_ref: https://skills.sh/onmax/nuxt-skills/nuxt-modules
github_stars: 564
github_forks: 27
github_is_organization: false
retrieved_at: 2026-03-03T07:18:06.555Z
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
source_url: https://raw.githubusercontent.com/onmax/nuxt-skills/HEAD/skills/nuxt-seo/references/site-config.md
license: ""
upstream_ref: https://skills.sh/onmax/nuxt-skills/nuxt-seo
github_stars: 564
github_forks: 27
github_is_organization: false
retrieved_at: 2026-03-03T07:18:08.076Z
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
source_url: https://raw.githubusercontent.com/onmax/nuxt-skills/HEAD/skills/nuxt-ui/references/installation.md
license: ""
upstream_ref: https://skills.sh/onmax/nuxt-skills/nuxt-ui
github_stars: 543
github_forks: 23
github_is_organization: false
retrieved_at: 2026-03-03T07:17:33.344Z
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
source_url: https://raw.githubusercontent.com/onmax/nuxt-skills/HEAD/skills/nuxthub/references/wrangler-templates.md
license: ""
upstream_ref: https://skills.sh/onmax/nuxt-skills/nuxthub
github_stars: 564
github_forks: 27
github_is_organization: false
retrieved_at: 2026-03-03T07:18:08.785Z
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
source_url: https://raw.githubusercontent.com/onmax/nuxt-skills/HEAD/skills/reka-ui/references/components.md
license: ""
upstream_ref: https://skills.sh/onmax/nuxt-skills/reka-ui
github_stars: 564
github_forks: 27
github_is_organization: false
retrieved_at: 2026-03-03T07:18:01.012Z
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
source_url: https://raw.githubusercontent.com/onmax/nuxt-skills/HEAD/skills/ts-library/references/project-setup.md
license: ""
upstream_ref: https://skills.sh/onmax/nuxt-skills/ts-library
github_stars: 564
github_forks: 27
github_is_organization: false
retrieved_at: 2026-03-03T07:17:52.248Z
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

  | Composable | Description | File |

  | --- | --- | --- |

  | useIpcRenderer | Provides ipcRenderer and all of its APIs with Vue
  reactiv... | [use-ipc-renderer.md](../composables/use-ipc-renderer.md) |

  | useIpcRendererInvoke | Reactive ipcRenderer.invoke API result. Make
  asynchronous... |
  [use-ipc-renderer-invoke.md](../composables/use-ipc-renderer-invoke.md) |

  | useIpcRendererOn | Use ipcRenderer.on with ease and
  ipcRenderer.removeListen... |
  [use-ipc-renderer-on.md](../composables/use-ipc-renderer-on.md) |

  | useZoomFactor | Reactive WebFrame zoom factor. |
  [use-zoom-factor.md](../composables/use-zoom-factor.md) |

  | useZoomLevel | Reactive WebFrame zoom level. |
  [use-zoom-level.md](../composables/use-zoom-level.md) |
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/onmax/nuxt-skills/HEAD/skills/vueuse/references/composables.md
license: ""
upstream_ref: https://skills.sh/onmax/nuxt-skills/vueuse
github_stars: 560
github_forks: 27
github_is_organization: false
retrieved_at: 2026-03-03T07:17:51.568Z
content_sha256: c6d81de9900fc2d7897f89626e8c87686c2c7662e61dab51fefef6c902e02599
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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:11.320Z
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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:10.594Z
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
source_url: https://raw.githubusercontent.com/op7418/youtube-clipper-skill/HEAD/README.md
license: ""
upstream_ref: https://skills.sh/op7418/youtube-clipper-skill/youtube-clipper
github_stars: 1428
github_forks: 224
github_is_organization: false
retrieved_at: 2026-03-03T07:18:02.483Z
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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:16.573Z
content_sha256: 16234a04fc31ebd88e44c294220619c4b98b331a7356101bee8d05821a831d1e
---
|/data/skills-sh-op7418-youtube-clipper-skill-youtube-clipper-af0fc3db|

---
stable_id: skills/skills-sh-othmanadi-planning-with-files-pi-planning-with-files
type: skills
title: skills-sh-othmanadi-planning-with-files-pi-planning-with-files
summary: >-
  # Task Plan: [Brief Description]

  <!--
    WHAT: This is your roadmap for the entire task. Think of it as your "working memory on disk."
    WHY: After 50+ tool calls, your original goals can get forgotten. This file keeps them fresh.
    WHEN: Create this FIRST, before starting any work. Update after each phase completes.
  -->

  ## Goal

  <!--
    WHAT: One clear sentence describing what you're trying to achieve.
    WHY: This is your north star. Re-reading this keeps you focused on the end state.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/othmanadi/planning-with-files/HEAD/.pi/skills/planning-with-files/templates/task_plan.md
license: ""
upstream_ref: https://skills.sh/othmanadi/planning-with-files/pi-planning-with-files
github_stars: 14753
github_forks: 1363
github_is_organization: false
retrieved_at: 2026-03-03T07:18:01.454Z
content_sha256: 03ab63b35434c8cf2375000762bb1f360db2e9b3a825810d0aee311bad5f49aa
---
|/data/skills-sh-othmanadi-planning-with-files-pi-planning-with-files|

---
stable_id: skills/skills-sh-othmanadi-planning-with-files-planning-with-files
type: skills
title: skills-sh-othmanadi-planning-with-files-planning-with-files
summary: >-
  # Task Plan: [Brief Description]

  <!--
    WHAT: This is your roadmap for the entire task. Think of it as your "working memory on disk."
    WHY: After 50+ tool calls, your original goals can get forgotten. This file keeps them fresh.
    WHEN: Create this FIRST, before starting any work. Update after each phase completes.
  -->

  ## Goal

  <!--
    WHAT: One clear sentence describing what you're trying to achieve.
    WHY: This is your north star. Re-reading this keeps you focused on the end state.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/othmanadi/planning-with-files/HEAD/skills/planning-with-files/templates/task_plan.md
license: ""
upstream_ref: https://skills.sh/othmanadi/planning-with-files/planning-with-files
github_stars: 14753
github_forks: 1363
github_is_organization: false
retrieved_at: 2026-03-03T07:17:59.155Z
content_sha256: 03ab63b35434c8cf2375000762bb1f360db2e9b3a825810d0aee311bad5f49aa
---
|/data/skills-sh-othmanadi-planning-with-files-planning-with-files|

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
source_url: https://raw.githubusercontent.com/payloadcms/skills/HEAD/skills/payload/reference/FIELDS.md
license: ""
upstream_ref: https://skills.sh/payloadcms/skills/payload
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:38.656Z
content_sha256: 990172ff51d8958c9711a23e0857029ef2c92dfeb75112e304aa96af1704825d
---
|/data/skills-sh-payloadcms-skills-payload|

---
stable_id: skills/skills-sh-planetscale-database-skills-postgres
type: skills
title: skills-sh-planetscale-database-skills-postgres
summary: >-
  ---

  title: PostgreSQL Schema Design

  description: Schema design guide

  tags: postgres, schema, primary-keys, data-types, foreign-keys, naming

  ---

  # Schema Design

  ## Primary Keys

  Prefer `BIGINT GENERATED ALWAYS AS IDENTITY`. Avoid random UUIDs (UUIDv4) as
  primary keys; use `uuidv7()` when you need UUIDs.

  ```sql

  CREATE TABLE user (
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/planetscale/database-skills/main/skills/postgres/references/schema-design.md
license: ""
upstream_ref: https://skills.sh/planetscale/database-skills/postgres
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:18:05.018Z
content_sha256: a831161ebd0343cfb506a069e0d6d4b274c671c81d2580c544c4ffed136a04ba
---
|/data/skills-sh-planetscale-database-skills-postgres|

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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:10.998Z
content_sha256: 8fcfe1aa04523483c1d1a5aa10835bc796228d2de9a66460a767bf2d6ed7432e
---
|/data/skills-sh-pleaseprompto-notebooklm-skill-notebooklm|

---
stable_id: skills/skills-sh-pproenca-dot-skills-clean-architecture
type: skills
title: skills-sh-pproenca-dot-skills-clean-architecture
summary: >-
  ---

  title: Source Dependencies Point Inward Only

  impact: CRITICAL

  impactDescription: prevents cascade failures across all layers

  tags: dep, dependency-rule, layers, architecture

  ---

  ## Source Dependencies Point Inward Only

  The Dependency Rule states that source code dependencies can only point inward
  toward higher-level policies. Inner circles must never reference outer
  circles.

  **Incorrect (inner layer imports from outer layer):**

  ```typescript
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/pproenca/dot-skills/HEAD/skills/.experimental/clean-architecture/references/dep-inward-only.md
license: ""
upstream_ref: https://skills.sh/pproenca/dot-skills/clean-architecture
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:32.881Z
content_sha256: f7c28c5d06988ac8103107c643864bbf8fbdb4710379cc04099970ca7be1a54f
---
|/data/skills-sh-pproenca-dot-skills-clean-architecture|

---
stable_id: skills/skills-sh-pproenca-dot-skills-nuqs
type: skills
title: skills-sh-pproenca-dot-skills-nuqs
summary: >-
  ---

  title: Use Typed Parsers for Non-String Values

  impact: CRITICAL

  impactDescription: prevents runtime type errors and hydration mismatches

  tags: parser, type-safety, parseAsInteger, parseAsFloat, parseAsBoolean

  ---

  ## Use Typed Parsers for Non-String Values

  URL query parameters are always strings. Without typed parsers, you'll get
  string values where you expect numbers or booleans, causing type errors and
  incorrect comparisons.

  **Incorrect (string instead of number):**

  ```tsx
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/pproenca/dot-skills/HEAD/skills/.curated/nuqs/references/parser-use-typed-parsers.md
license: ""
upstream_ref: https://skills.sh/pproenca/dot-skills/nuqs
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:33.679Z
content_sha256: b9e4443768bf511646481557c779ff23c1045b0978750577dc0699c1ce759b82
---
|/data/skills-sh-pproenca-dot-skills-nuqs|

---
stable_id: skills/skills-sh-pproenca-dot-skills-typescript
type: skills
title: skills-sh-pproenca-dot-skills-typescript
summary: >-
  # Sections

  This file defines all sections, their ordering, impact levels, and
  descriptions.

  The section ID (in parentheses) is the filename prefix used to group rules.

  ---

  ## 1. Type System Performance (type)

  **Impact:** CRITICAL

  **Description:** Complex types, deep generics, and large unions cause
  quadratic compilation time. Simplifying type definitions yields the largest
  compile-time gains.

  ## 2. Compiler Configuration (tscfg)

  **Impact:** CRITICAL

  **Description:** Misconfigured tsconfig causes full rebuilds and unnecessary
  file scanning. Proper configuration reduces compile time by 50-80%.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/pproenca/dot-skills/HEAD/skills/.curated/typescript/references/_sections.md
license: ""
upstream_ref: https://skills.sh/pproenca/dot-skills/typescript
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:35.627Z
content_sha256: bd6767139e4f005dc79cb3d8c5dec25a25eb2b0ac6e2fa0f1571fe8595ca2ffe
---
|/data/skills-sh-pproenca-dot-skills-typescript|

---
stable_id: skills/skills-sh-pproenca-dot-skills-zod
type: skills
title: skills-sh-pproenca-dot-skills-zod
summary: >-
  # Sections

  This file defines all sections, their ordering, impact levels, and
  descriptions.

  The section ID (in parentheses) is the filename prefix used to group rules.

  ---

  ## 1. Schema Definition (schema)

  **Impact:** CRITICAL

  **Description:** Schema definition is the foundation of all Zod validation;
  incorrect or overly permissive schemas cascade errors through your entire
  application, allowing invalid data to corrupt downstream logic.

  ## 2. Parsing & Validation (parse)

  **Impact:** CRITICAL

  **Description:** Parsing is the core Zod operation; using `parse()` vs
  `safeParse()` incorrectly causes either unhandled exceptions crashing your app
  or silent failures that let invalid data through.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/pproenca/dot-skills/HEAD/skills/.curated/zod/references/_sections.md
license: ""
upstream_ref: https://skills.sh/pproenca/dot-skills/zod
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:18:09.326Z
content_sha256: f9518bb5e0e5dff531041fd82962a307495f034ec0259217ab4a47a1090236c2
---
|/data/skills-sh-pproenca-dot-skills-zod|

---
stable_id: skills/skills-sh-pulumi-agent-skills-pulumi-arm-to-pulumi
type: skills
title: skills-sh-pulumi-agent-skills-pulumi-arm-to-pulumi
summary: >-
  # Importing Azure Resources into Pulumi

  This document provides detailed procedures for importing existing Azure
  resources into Pulumi state and resolving preview diffs to achieve zero-diff
  validation.

  **Key Principle**: Azure will return many default values it has set
  dynamically that are not represented in code/state. You must systematically
  resolve each diff type to achieve zero-diff.

  ## IMPORT APPROACH: INLINE IMPORT IDS

  **ARM migration uses inline imports.** Use Pulumi's `import` resource option
  to specify Azure Resource IDs directly in the code.

  ### Example

  **TypeScript:**

  ```typescript

  const storageAccount = new
  azure_native.storage.StorageAccount("storageAccount", {
      accountName: "mystorageaccount",
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/pulumi/agent-skills/HEAD/migration/skills/pulumi-arm-to-pulumi/arm-import.md
license: ""
upstream_ref: https://skills.sh/pulumi/agent-skills/pulumi-arm-to-pulumi
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:50.669Z
content_sha256: ea39de8e596c580b86a0d0e4878bd3a29acf19b65549d641c50bff203bdb24b5
---
|/data/skills-sh-pulumi-agent-skills-pulumi-arm-to-pulumi|

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
source_url: https://raw.githubusercontent.com/ramziddin/solid-skills/HEAD/skills/solid/references/tdd.md
license: ""
upstream_ref: https://skills.sh/ramziddin/solid-skills/solid
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:35.844Z
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
source_url: https://raw.githubusercontent.com/remotion-dev/skills/HEAD/skills/remotion/rules/subtitles.md
license: ""
upstream_ref: https://skills.sh/remotion-dev/skills/remotion-best-practices
github_stars: 1812
github_forks: 219
github_is_organization: true
retrieved_at: 2026-03-03T07:17:53.342Z
content_sha256: 9f18ec4a9c88adf35d51b44aaf344442443fd687a4dc948366ebb683fc3ecd30
---
|/data/skills-sh-remotion-dev-skills-remotion-best-practices|

---
stable_id: skills/skills-sh-resciencelab-opc-skills-banner-creator
type: skills
title: skills-sh-resciencelab-opc-skills-banner-creator
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
source_url: https://raw.githubusercontent.com/resciencelab/opc-skills/HEAD/skills/banner-creator/references/formats.md
license: ""
upstream_ref: https://skills.sh/resciencelab/opc-skills/banner-creator
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:30.411Z
content_sha256: 71286bbaf6ae664977dcbcca899d13643ed5a9a794c812e0c42c1f1356eea16a
---
|/data/skills-sh-resciencelab-opc-skills-banner-creator|

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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:17.081Z
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
source_url: https://raw.githubusercontent.com/resciencelab/opc-skills/HEAD/skills/domain-hunter/references/registrars.md
license: ""
upstream_ref: https://skills.sh/resciencelab/opc-skills/domain-hunter
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:31.645Z
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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:16.985Z
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
source_url: https://raw.githubusercontent.com/resciencelab/opc-skills/HEAD/skills/logo-creator/references/styles.md
license: ""
upstream_ref: https://skills.sh/resciencelab/opc-skills/logo-creator
github_stars: 480
github_forks: 47
github_is_organization: true
retrieved_at: 2026-03-03T07:18:07.209Z
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
source_url: https://raw.githubusercontent.com/resciencelab/opc-skills/HEAD/skills/nanobanana/references/prompts.md
license: ""
upstream_ref: https://skills.sh/resciencelab/opc-skills/nanobanana
github_stars: 480
github_forks: 47
github_is_organization: true
retrieved_at: 2026-03-03T07:18:07.523Z
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
source_url: https://raw.githubusercontent.com/resciencelab/opc-skills/HEAD/skills/seo-geo/references/geo-research.md
license: ""
upstream_ref: https://skills.sh/resciencelab/opc-skills/seo-geo
github_stars: 480
github_forks: 47
github_is_organization: true
retrieved_at: 2026-03-03T07:17:58.256Z
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
source_url: https://raw.githubusercontent.com/resend/email-best-practices/HEAD/resources/deliverability.md
license: ""
upstream_ref: https://skills.sh/resend/email-best-practices/email-best-practices
github_stars: 122
github_forks: 10
github_is_organization: true
retrieved_at: 2026-03-03T07:17:59.884Z
content_sha256: 8f17c44bc4e371cf8eda4790b79aeda6152a0a3ec8c71e08b01f2e84a9c974a7
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
source_url: https://raw.githubusercontent.com/resend/react-email/HEAD/skills/react-email/references/COMPONENTS.md
license: ""
upstream_ref: https://skills.sh/resend/react-email/react-email
github_stars: 18106
github_forks: 921
github_is_organization: true
retrieved_at: 2026-03-03T07:17:49.029Z
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
      version: "2.6.0"
      homepage: https://resend.com
      source: https://github.com/resend/resend-skills
  inputs:
tags:
  - skills-sh
  - skills-sh-probed
source_url: https://raw.githubusercontent.com/resend/resend-skills/main/SKILL.md
license: ""
upstream_ref: https://skills.sh/resend/resend-skills/resend
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:10.756Z
content_sha256: 5602d6937b1c0cf0b014f996ca0c591fbe56fe6811b9b9cf40cef9df6791a541
---
|/data/skills-sh-resend-resend-skills-resend|

---
stable_id: skills/skills-sh-resend-resend-skills-send-email
type: skills
title: skills-sh-resend-resend-skills-send-email
summary: >-
  # Resend SDK Installation Guide

  Always install the latest SDK version to ensure you have support for all
  features including webhook verification (`webhooks.verify()`) and email
  receiving (`emails.receiving.get()`). Older versions may not include these
  methods.

  ## Minimum SDK Versions

  These are the minimum versions required for full functionality (sending,
  receiving, and webhook verification). Always prefer the latest version when
  possible.

  | Language | Package | Min Version | Install |

  |----------|---------|-------------|---------|

  | Node.js | `resend` | >= 6.9.2 | `npm install resend` |

  | Python | `resend` | >= 2.21.0 | `pip install resend` |

  | Go | `resend-go/v3` | >= 3.1.0 | `go get github.com/resend/resend-go/v3` |

  | Ruby | `resend` | >= 1.0.0 | `gem install resend` |
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/resend/resend-skills/HEAD/send-email/references/installation.md
license: ""
upstream_ref: https://skills.sh/resend/resend-skills/send-email
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:40.131Z
content_sha256: 7dddecf470934dbe83065c71d67759c40dae12db38f28d0ec9259ba7213a6c32
---
|/data/skills-sh-resend-resend-skills-send-email|

---
stable_id: skills/skills-sh-rivet-dev-skills-rivetkit
type: skills
title: skills-sh-rivet-dev-skills-rivetkit
summary: >-
  # Access Control

  > Source: `src/content/docs/actors/access-control.mdx`

  > Canonical URL: https://rivet.dev/docs/actors/access-control

  > Description: Authorize actions, queue publishes, and event subscriptions
  with explicit hooks.

  ---

  Use access control to decide what authenticated clients are allowed to do.

  This is authorization, not authentication:

  - Use [authentication](/docs/actors/authentication) to identify who is
  calling.

  - Use access-control rules to decide what they can do after connecting.

  ## Permission Surfaces
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/rivet-dev/skills/HEAD/rivetkit/reference/actors/access-control.md
license: ""
upstream_ref: https://skills.sh/rivet-dev/skills/rivetkit
github_stars: 6
github_forks: 2
github_is_organization: true
retrieved_at: 2026-03-03T07:18:02.820Z
content_sha256: 4fb61230b6a2797b8fd44962034cde091523eac07882cde86e4a674a35f2d99b
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
  https://sandboxagent.dev/docs/llms.txt
  https://sandboxagent.dev/docs/llms-full.txt
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/rivet-dev/skills/HEAD/skills/sandbox-agent/references/ai/llms-txt.md
license: ""
upstream_ref: https://skills.sh/rivet-dev/skills/sandbox-agent
github_stars: 6
github_forks: 2
github_is_organization: true
retrieved_at: 2026-03-03T07:17:50.453Z
content_sha256: ff197fd6e2e1533fb0c7358e6a2259616db2bc81607ed26a68228a73476e325c
---
|/data/skills-sh-rivet-dev-skills-sandbox-agent|

---
stable_id: skills/skills-sh-samhvw8-dot-claude-ui-design-system
type: skills
title: skills-sh-samhvw8-dot-claude-ui-design-system
summary: >-
  # Design Token Architecture

  ## Three-Tier Token System (Industry Standard)

  Based on USWDS, IBM Carbon, and Shopify Polaris patterns.

  ### Tier 1: Primitive Tokens (Foundation Layer)

  - Raw design values without context

  - Examples: `gray-50`, `gray-900`, `spacing-4`, `font-sans`

  - Purpose: "The most basic form of tokens, reducing infinite possibilities to
  a select few"

  - Never reference other tokens

  - Immutable across themes

  ### Tier 2: Semantic Tokens (Context Layer)
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/samhvw8/dot-claude/HEAD/skills/ui-design-system/references/DESIGN_TOKENS.md
license: ""
upstream_ref: https://skills.sh/samhvw8/dot-claude/ui-design-system
github_stars: 7
github_forks: 0
github_is_organization: false
retrieved_at: 2026-03-03T07:18:01.719Z
content_sha256: 8d12d8d26d288f383e36dabea1cda9f1a9bbd96b6d8d23b7e364403dd2cb5c8f
---
|/data/skills-sh-samhvw8-dot-claude-ui-design-system|

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
source_url: https://raw.githubusercontent.com/sawyerhood/dev-browser/HEAD/skills/dev-browser/references/scraping.md
license: ""
upstream_ref: https://skills.sh/sawyerhood/dev-browser/dev-browser
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:32.147Z
content_sha256: 44031cea3262dbf909d3657897b0b8bb30f0760520887f64e118b8f319cadddd
---
|/data/skills-sh-sawyerhood-dev-browser-dev-browser|

---
stable_id: skills/skills-sh-schpet-linear-cli-linear-cli
type: skills
title: skills-sh-schpet-linear-cli-linear-cli
summary: |-
  # auth
  > Manage Linear authentication
  ## Usage
  ```
  Usage:   linear auth
  Version: 1.10.0
  Description:
    Manage Linear authentication
  Options:
    -h, --help               - Show this help.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/schpet/linear-cli/HEAD/skills/linear-cli/references/auth.md
license: ""
upstream_ref: https://skills.sh/schpet/linear-cli/linear-cli
github_stars: 365
github_forks: 38
github_is_organization: false
retrieved_at: 2026-03-03T07:18:02.024Z
content_sha256: 7d542f090b4b7b5828e969c0bf814c737793f8a1ce5406c113ecffc8becda6f8
---
|/data/skills-sh-schpet-linear-cli-linear-cli|

---
stable_id: skills/skills-sh-shubhamsaboo-awesome-llm-apps-python-expert
type: skills
title: skills-sh-shubhamsaboo-awesome-llm-apps-python-expert
summary: >-
  # Python Expert Guidelines

  **A comprehensive guide for AI agents writing and reviewing Python code**,
  organized by priority and impact.

  ---

  ## Table of Contents

  ### Correctness — **CRITICAL**

  1. [Avoid Mutable Default Arguments](#avoid-mutable-default-arguments)

  2. [Proper Error Handling](#proper-error-handling)

  ### Type Safety — **HIGH**

  3. [Use Type Hints](#use-type-hints)

  4. [Use Dataclasses](#use-dataclasses)
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/shubhamsaboo/awesome-llm-apps/HEAD/awesome_agent_skills/python-expert/AGENTS.md
license: ""
upstream_ref: https://skills.sh/shubhamsaboo/awesome-llm-apps/python-expert
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:18:05.095Z
content_sha256: 014a6e33d91a0645a9862723feb11d10f080ae2226ea87ec8f685291eb549cfc
---
|/data/skills-sh-shubhamsaboo-awesome-llm-apps-python-expert|

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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:19.563Z
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
source_url: https://raw.githubusercontent.com/sickn33/antigravity-awesome-skills/HEAD/skills/app-builder/templates/nextjs-fullstack/TEMPLATE.md
license: ""
upstream_ref: https://skills.sh/sickn33/antigravity-awesome-skills/app-builder
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:32.965Z
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
source_url: https://raw.githubusercontent.com/sickn33/antigravity-awesome-skills/HEAD/skills/aws-penetration-testing/references/advanced-aws-pentesting.md
license: ""
upstream_ref: https://skills.sh/sickn33/antigravity-awesome-skills/aws-penetration-testing
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:29.167Z
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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:29.001Z
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
source_url: https://raw.githubusercontent.com/sickn33/antigravity-awesome-skills/HEAD/skills/playwright-skill/API_REFERENCE.md
license: ""
upstream_ref: https://skills.sh/sickn33/antigravity-awesome-skills/playwright-skill
github_stars: 16692
github_forks: 3033
github_is_organization: false
retrieved_at: 2026-03-03T07:18:00.852Z
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
source_url: https://raw.githubusercontent.com/sickn33/antigravity-awesome-skills/HEAD/skills/skill-developer/SKILL_RULES_REFERENCE.md
license: ""
upstream_ref: https://skills.sh/sickn33/antigravity-awesome-skills/skill-developer
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:31.407Z
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
source_url: https://raw.githubusercontent.com/sickn33/antigravity-awesome-skills/HEAD/skills/vulnerability-scanner/checklists.md
license: ""
upstream_ref: https://skills.sh/sickn33/antigravity-awesome-skills/vulnerability-scanner
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:31.318Z
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
source_url: https://raw.githubusercontent.com/softaworks/agent-toolkit/HEAD/skills/c4-architecture/references/common-mistakes.md
license: ""
upstream_ref: https://skills.sh/softaworks/agent-toolkit/c4-architecture
github_stars: 716
github_forks: 56
github_is_organization: true
retrieved_at: 2026-03-03T07:17:59.806Z
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
source_url: https://raw.githubusercontent.com/softaworks/agent-toolkit/HEAD/skills/difficult-workplace-conversations/references/conversation-framework.md
license: ""
upstream_ref: https://skills.sh/softaworks/agent-toolkit/difficult-workplace-conversations
github_stars: 716
github_forks: 56
github_is_organization: true
retrieved_at: 2026-03-03T07:17:59.723Z
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
source_url: https://raw.githubusercontent.com/softaworks/agent-toolkit/HEAD/skills/gepetto/references/research-protocol.md
license: ""
upstream_ref: https://skills.sh/softaworks/agent-toolkit/gepetto
github_stars: 716
github_forks: 56
github_is_organization: true
retrieved_at: 2026-03-03T07:18:04.197Z
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
source_url: https://raw.githubusercontent.com/softaworks/agent-toolkit/HEAD/skills/meme-factory/references/markdown-memes-guide.md
license: ""
upstream_ref: https://skills.sh/softaworks/agent-toolkit/meme-factory
github_stars: 672
github_forks: 53
github_is_organization: true
retrieved_at: 2026-03-03T07:17:48.692Z
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
source_url: https://raw.githubusercontent.com/softaworks/agent-toolkit/HEAD/skills/mermaid-diagrams/references/class-diagrams.md
license: ""
upstream_ref: https://skills.sh/softaworks/agent-toolkit/mermaid-diagrams
github_stars: 716
github_forks: 56
github_is_organization: true
retrieved_at: 2026-03-03T07:17:59.571Z
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
source_url: https://raw.githubusercontent.com/softaworks/agent-toolkit/HEAD/skills/qa-test-planner/references/test_case_templates.md
license: ""
upstream_ref: https://skills.sh/softaworks/agent-toolkit/qa-test-planner
github_stars: 672
github_forks: 53
github_is_organization: true
retrieved_at: 2026-03-03T07:17:48.561Z
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
source_url: https://raw.githubusercontent.com/softaworks/agent-toolkit/HEAD/skills/react-dev/references/react-19-patterns.md
license: ""
upstream_ref: https://skills.sh/softaworks/agent-toolkit/react-dev
github_stars: 716
github_forks: 56
github_is_organization: true
retrieved_at: 2026-03-03T07:18:00.144Z
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
source_url: https://raw.githubusercontent.com/softaworks/agent-toolkit/HEAD/skills/react-useeffect/anti-patterns.md
license: ""
upstream_ref: https://skills.sh/softaworks/agent-toolkit/react-useeffect
github_stars: 672
github_forks: 53
github_is_organization: true
retrieved_at: 2026-03-03T07:17:48.777Z
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
source_url: https://raw.githubusercontent.com/softaworks/agent-toolkit/HEAD/skills/session-handoff/references/handoff-template.md
license: ""
upstream_ref: https://skills.sh/softaworks/agent-toolkit/session-handoff
github_stars: 716
github_forks: 56
github_is_organization: true
retrieved_at: 2026-03-03T07:17:59.650Z
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
source_url: https://raw.githubusercontent.com/squirrelscan/skills/HEAD/audit-website/references/OUTPUT-FORMAT.md
license: ""
upstream_ref: https://skills.sh/squirrelscan/skills/audit-website
github_stars: 53
github_forks: 7
github_is_organization: true
retrieved_at: 2026-03-03T07:17:55.820Z
content_sha256: 4e508b7a055d04ab588207eb9c69567f88a5002f3e402a2e08c3c19b41a2dc5a
---
|/data/skills-sh-squirrelscan-skills-audit-website|

---
stable_id: skills/skills-sh-supercent-io-skills-template-pptx-presentation-builder
type: skills
title: skills-sh-supercent-io-skills-template-pptx-presentation-builder
summary: >-
  ---

  name: technical-writing

  description: Write clear, comprehensive technical documentation. Use when
  creating specs, architecture docs, runbooks, or API documentation. Handles
  technical specifications, system design docs, operational guides, and
  developer documentation with industry best practices.

  allowed-tools: [Read, Write, Edit, Glob, Grep]

  tags: [technical-writing, documentation, specs, architecture, runbooks,
  API-docs]

  platforms: [Claude, ChatGPT, Gemini]

  ---

  # Technical Writing

  ## When to use this skill

  - Writing technical specifications
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/supercent-io/skills-template/HEAD/.agent-skills/technical-writing/SKILL.md
license: ""
upstream_ref: https://skills.sh/supercent-io/skills-template/pptx-presentation-builder
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:18:06.360Z
content_sha256: 84f61706def15232d349b86869b03e6ef5d018552eb77da2c865234bb322c081
---
|/data/skills-sh-supercent-io-skills-template-pptx-presentation-builder|

---
stable_id: skills/skills-sh-supercent-io-skills-template-remotion-video-production
type: skills
title: skills-sh-supercent-io-skills-template-remotion-video-production
summary: >-
  ---

  name: image-generation-mcp

  description: Generate high-quality images via MCP (Gemini models or compatible
  services) using structured prompts, ratios, and validation for marketing, UI,
  or presentations.

  tags: [image-generation, gemini, mcp, design, creative, ai-art]

  platforms: [Claude, ChatGPT, Gemini, Codex]

  allowed-tools:
    - mcp__gemini-cli__ask-gemini
    - mcp__gemini-cli__brainstorm
    - Write
    - Read
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/supercent-io/skills-template/HEAD/.agent-skills/image-generation/SKILL.md
license: ""
upstream_ref: https://skills.sh/supercent-io/skills-template/remotion-video-production
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:18:05.254Z
content_sha256: 589fdbf6e17af1be514c4ec0b3d574ea8e1bc22dfdb58321385a5241b547d355
---
|/data/skills-sh-supercent-io-skills-template-remotion-video-production|

---
stable_id: skills/skills-sh-supercent-io-skills-template-web-accessibility
type: skills
title: skills-sh-supercent-io-skills-template-web-accessibility
summary: >-
  ---

  name: ui-component-patterns

  description: Build reusable, maintainable UI components following modern
  design patterns. Use when creating component libraries, implementing design
  systems, or building scalable frontend architectures. Handles React patterns,
  composition, prop design, TypeScript, and component best practices.

  tags: [UI-components, React, design-patterns, composition, TypeScript,
  reusable]

  platforms: [Claude, ChatGPT, Gemini]

  ---

  # UI Component Patterns

  ## When to use this skill

  - **컴포넌트 라이브러리 구축**: 재사용 가능한 UI 컴포넌트 제작

  - **디자인 시스템 구현**: 일관된 UI 패턴 적용
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/supercent-io/skills-template/HEAD/.agent-skills/ui-component-patterns/SKILL.md
license: ""
upstream_ref: https://skills.sh/supercent-io/skills-template/web-accessibility
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:18:09.921Z
content_sha256: dc00b63e9060d972b4dcbf49eb51b4676a707c390a1a3975582369059ff85194
---
|/data/skills-sh-supercent-io-skills-template-web-accessibility|

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
source_url: https://raw.githubusercontent.com/tavily-ai/skills/HEAD/skills/tavily/tavily-best-practices/references/sdk.md
license: ""
upstream_ref: https://skills.sh/tavily-ai/skills/tavily-best-practices
github_stars: 34
github_forks: 4
github_is_organization: true
retrieved_at: 2026-03-03T07:18:03.506Z
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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:18:09.722Z
content_sha256: 27557aaef97cc5f580f247e803eea591e7f8006f55b1beb5acb2d7ebcf6c64fa
---
|/data/skills-sh-trailofbits-skills-address-sanitizer|

---
stable_id: skills/skills-sh-trailofbits-skills-aflpp
type: skills
title: skills-sh-trailofbits-skills-aflpp
summary: >-
  # Fuzzing with AFL++

  The following describes how to fuzz with a target if source code is available.

  If you have a binary-only target, go to

  [fuzzing_binary-only_targets.md](fuzzing_binary-only_targets.md).

  Fuzzing source code is a three-step process:

  1. Compile the target with a special compiler that prepares the target to be
     fuzzed efficiently. This step is called "instrumenting a target".
  2. Prepare the fuzzing by selecting and optimizing the input corpus for the
     target.
  3. Perform the fuzzing of the target by randomly mutating input and assessing
  if
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/AFLplusplus/AFLplusplus/refs/heads/stable/docs/fuzzing_in_depth.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/aflpp
github_stars: 6326
github_forks: 1262
github_is_organization: true
retrieved_at: 2026-03-03T07:17:53.158Z
content_sha256: 15aafcaaed9114afd456a8d980fece04be25bd24af54a14d0d76b53b59ff47e0
---
|/data/skills-sh-trailofbits-skills-aflpp|

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
github_stars: 1588
github_forks: 119
github_is_organization: true
retrieved_at: 2026-03-03T07:17:53.020Z
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
source_url: https://raw.githubusercontent.com/trailofbits/skills/HEAD/plugins/audit-context-building/skills/audit-context-building/resources/FUNCTION_MICRO_ANALYSIS_EXAMPLE.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/audit-context-building
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:18:07.613Z
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
source_url: https://raw.githubusercontent.com/trailofbits/skills/HEAD/plugins/building-secure-contracts/skills/code-maturity-assessor/resources/ASSESSMENT_CRITERIA.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/code-maturity-assessor
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:18:08.869Z
content_sha256: 0ffe131842b209de7910cc2ac77fc1e2cdea1e16455bfba79505c8ba8179009f
---
|/data/skills-sh-trailofbits-skills-code-maturity-assessor|

---
stable_id: skills/skills-sh-trailofbits-skills-codeql
type: skills
title: skills-sh-trailofbits-skills-codeql
summary: >-
  # Build Database Workflow

  Create high-quality CodeQL databases by trying build methods in sequence until
  one produces good results.

  ## Task System

  Create these tasks on workflow start:

  ```

  TaskCreate: "Detect language and configure" (Step 1)

  TaskCreate: "Build database" (Step 2) - blockedBy: Step 1

  TaskCreate: "Apply fixes if needed" (Step 3) - blockedBy: Step 2

  TaskCreate: "Assess quality" (Step 4) - blockedBy: Step 3

  TaskCreate: "Improve quality if needed" (Step 5) - blockedBy: Step 4
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/trailofbits/skills/HEAD/plugins/static-analysis/skills/codeql/workflows/build-database.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/codeql
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:51.731Z
content_sha256: 7fb24c47ffe46a0d6c99b59eadbfd3159017703e77ef799bb1d8e1e7095518f1
---
|/data/skills-sh-trailofbits-skills-codeql|

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
source_url: https://raw.githubusercontent.com/trailofbits/skills/HEAD/plugins/constant-time-analysis/skills/constant-time-analysis/references/compiled.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/constant-time-analysis
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:18:09.419Z
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
source_url: https://raw.githubusercontent.com/trailofbits/skills/HEAD/plugins/differential-review/skills/differential-review/methodology.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/differential-review
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:38.975Z
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
source_url: https://raw.githubusercontent.com/trailofbits/skills/HEAD/plugins/firebase-apk-scanner/skills/firebase-apk-scanner/references/vulnerabilities.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/firebase-apk-scanner
github_stars: 2952
github_forks: 236
github_is_organization: true
retrieved_at: 2026-03-03T07:17:52.784Z
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
source_url: https://raw.githubusercontent.com/trailofbits/skills/HEAD/plugins/building-secure-contracts/skills/guidelines-advisor/resources/ASSESSMENT_AREAS.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/guidelines-advisor
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:18:07.882Z
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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:18:09.628Z
content_sha256: 8d02acadc413ae8aca770761382c32a0d468a4616ecca91bcabe171c0c89587a
---
|/data/skills-sh-trailofbits-skills-harness-writing|

---
stable_id: skills/skills-sh-trailofbits-skills-insecure-defaults
type: skills
title: skills-sh-trailofbits-skills-insecure-defaults
summary: >-
  # Insecure Defaults: Examples and Counter-Examples

  This document provides detailed examples for each category in the Quick
  Verification Checklist, showing both vulnerable patterns (report these) and
  secure patterns (skip these).

  ## Fallback Secrets

  ### ❌ VULNERABLE - Report These

  **Python: Environment variable with fallback**

  ```python

  # File: src/auth/jwt.py

  SECRET_KEY = os.environ.get('SECRET_KEY', 'dev-secret-key-123')

  # Used in security context

  def create_token(user_id):
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/trailofbits/skills/HEAD/plugins/insecure-defaults/skills/insecure-defaults/references/examples.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/insecure-defaults
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:37.670Z
content_sha256: 1d47703f84b6c5866e299e46f7f797c6178c2896fe37e02759fec5bfbf5b8d1f
---
|/data/skills-sh-trailofbits-skills-insecure-defaults|

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
source_url: https://raw.githubusercontent.com/trailofbits/skills/HEAD/plugins/modern-python/skills/modern-python/references/prek.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/modern-python
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:18:08.958Z
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
github_stars: 447
github_forks: 81
github_is_organization: true
retrieved_at: 2026-03-03T07:17:52.865Z
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
source_url: https://raw.githubusercontent.com/trailofbits/skills/HEAD/plugins/building-secure-contracts/skills/secure-workflow-guide/resources/WORKFLOW_STEPS.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/secure-workflow-guide
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:18:07.122Z
content_sha256: 8b048011407a9a123a01ba4548b62a944f8cd5f271e4e0cdfe58b09583bd9291
---
|/data/skills-sh-trailofbits-skills-secure-workflow-guide|

---
stable_id: skills/skills-sh-trailofbits-skills-semgrep
type: skills
title: skills-sh-trailofbits-skills-semgrep
summary: >-
  # Scan Modes Reference

  ## Mode: Run All

  Full scan with all rulesets and severity levels. Current default behavior. No
  filtering applied — all findings are reported and triaged.

  ## Mode: Important Only

  Focused on high-confidence security vulnerabilities. Excludes code quality,
  best practices, and low-confidence audit findings.

  ### Pre-Filter: CLI Severity Flag

  Add these flags to every `semgrep` command:

  ```bash

  --severity MEDIUM --severity HIGH --severity CRITICAL

  ```
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/trailofbits/skills/HEAD/plugins/static-analysis/skills/semgrep/references/scan-modes.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/semgrep
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:18:05.710Z
content_sha256: 76c8d41c8fc2c36daa44171db345373e169da46a69387378a31ef26061102c97
---
|/data/skills-sh-trailofbits-skills-semgrep|

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
source_url: https://raw.githubusercontent.com/trailofbits/skills/HEAD/plugins/sharp-edges/skills/sharp-edges/references/config-patterns.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/sharp-edges
github_stars: 2952
github_forks: 236
github_is_organization: true
retrieved_at: 2026-03-03T07:17:52.515Z
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
source_url: https://raw.githubusercontent.com/trailofbits/skills/HEAD/plugins/building-secure-contracts/skills/solana-vulnerability-scanner/resources/VULNERABILITY_PATTERNS.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/solana-vulnerability-scanner
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:18:08.198Z
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
source_url: https://raw.githubusercontent.com/trailofbits/skills/HEAD/plugins/spec-to-code-compliance/skills/spec-to-code-compliance/resources/IR_EXAMPLES.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/spec-to-code-compliance
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:39.081Z
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
source_url: https://raw.githubusercontent.com/trailofbits/skills/HEAD/plugins/building-secure-contracts/skills/substrate-vulnerability-scanner/resources/VULNERABILITY_PATTERNS.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/substrate-vulnerability-scanner
github_stars: 2952
github_forks: 236
github_is_organization: true
retrieved_at: 2026-03-03T07:17:52.941Z
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
source_url: https://raw.githubusercontent.com/trailofbits/skills/HEAD/plugins/testing-handbook-skills/skills/testing-handbook-generator/discovery.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/testing-handbook-generator
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:18:10.326Z
content_sha256: 2bc2412af856e91ffacefb85a9f98811fe7238c99b485c03cf206969fee9dfa1
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
source_url: https://raw.githubusercontent.com/trailofbits/skills/HEAD/plugins/building-secure-contracts/skills/token-integration-analyzer/resources/ASSESSMENT_CATEGORIES.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/token-integration-analyzer
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:18:07.795Z
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
github_stars: 455
github_forks: 376
github_is_organization: true
retrieved_at: 2026-03-03T07:17:53.261Z
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
source_url: https://raw.githubusercontent.com/trailofbits/skills/HEAD/plugins/variant-analysis/skills/variant-analysis/METHODOLOGY.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/variant-analysis
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:18:07.311Z
content_sha256: bbe15a7e6edf419f348564542fec22200b4f0ce30a0f801d620fbd2e406c14f3
---
|/data/skills-sh-trailofbits-skills-variant-analysis|

---
stable_id: skills/skills-sh-tursodatabase-turso-code-quality
type: skills
title: skills-sh-tursodatabase-turso-code-quality
summary: >-
  ---

  name: async-io-model

  description: Explanations of common asynchronous patterns used in tursodb.
  Involves IOResult, state machines, re-entrancy pitfalls, CompletionGroup.
  Always use these patterns in `core` when doing anything IO

  ---

  # Async I/O Model Guide

  Turso uses cooperative yielding with explicit state machines instead of Rust
  async/await.

  ## Core Types

  ```rust

  pub enum IOCompletions {
      Single(Completion),
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/tursodatabase/turso/HEAD/.claude/skills/async-io-model/SKILL.md
license: ""
upstream_ref: https://skills.sh/tursodatabase/turso/code-quality
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:39.978Z
content_sha256: 13b6204799f68fe315b6d49d1dead9d48cbc433f25f638cc6100e9f95b511387
---
|/data/skills-sh-tursodatabase-turso-code-quality|

---
stable_id: skills/skills-sh-tursodatabase-turso-debugging
type: skills
title: skills-sh-tursodatabase-turso-debugging
summary: ../../../../scripts/corruption-debug-tools/README.md
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/tursodatabase/turso/HEAD/.claude/skills/debugging/references/CORRUPTION-TOOLS.md
license: ""
upstream_ref: https://skills.sh/tursodatabase/turso/debugging
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:32.063Z
content_sha256: 035ef38c7aee378f499dc21d4f4a7893aba8a0983fff6d6d7b8b26faf649b748
---
|/data/skills-sh-tursodatabase-turso-debugging|

---
stable_id: skills/skills-sh-tursodatabase-turso-testing
type: skills
title: skills-sh-tursodatabase-turso-testing
summary: >-
  # Testing in Limbo

  Limbo supports a comprehensive testing system to ensure correctness,
  performance, and compatibility with SQLite.

  ## 1. Compatibility Tests

  The `make test` target is the main entry point.

  Most compatibility tests live in the testing/ directory and are written in
  SQLite’s TCL test format. These tests ensure that Limbo matches SQLite’s
  behavior exactly. The database used during these tests is located at
  testing/testing.db, which includes the following schema:

  ```sql

  CREATE TABLE users (
      id INTEGER PRIMARY KEY,
      first_name TEXT,
      last_name TEXT,
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/tursodatabase/turso/HEAD/docs/testing.md
license: ""
upstream_ref: https://skills.sh/tursodatabase/turso/testing
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:32.258Z
content_sha256: 553e1e5ed219556549e87ecf892930a74fff4f8fe8a74aafd6c3122cf80e4505
---
|/data/skills-sh-tursodatabase-turso-testing|

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
source_url: https://raw.githubusercontent.com/vercel/ai/HEAD/skills/use-ai-sdk/references/common-errors.md
license: ""
upstream_ref: https://skills.sh/vercel/ai/ai-sdk
github_stars: 22134
github_forks: 3900
github_is_organization: true
retrieved_at: 2026-03-03T07:17:57.494Z
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
source_url: https://raw.githubusercontent.com/vercel-labs/agent-browser/HEAD/skills/agent-browser/references/commands.md
license: ""
upstream_ref: https://skills.sh/vercel-labs/agent-browser/agent-browser
github_stars: 16507
github_forks: 977
github_is_organization: true
retrieved_at: 2026-03-03T07:17:55.108Z
content_sha256: cc6cc1780bb8632b3f7694ba454d895059235459469f0401fa251c20d4bbfd87
---
|/data/skills-sh-vercel-labs-agent-browser-agent-browser|

---
stable_id: skills/skills-sh-vercel-labs-agent-browser-dogfood
type: skills
title: skills-sh-vercel-labs-agent-browser-dogfood
summary: >-
  # Issue Taxonomy

  Reference for categorizing issues found during dogfooding. Read this at the
  start of a dogfood session to calibrate what to look for.

  ## Contents

  - [Severity Levels](#severity-levels)

  - [Categories](#categories)

  - [Exploration Checklist](#exploration-checklist)

  ## Severity Levels

  | Severity | Definition |

  |----------|------------|

  | **critical** | Blocks a core workflow, causes data loss, or crashes the app
  |
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/vercel-labs/agent-browser/HEAD/skills/dogfood/references/issue-taxonomy.md
license: ""
upstream_ref: https://skills.sh/vercel-labs/agent-browser/dogfood
github_stars: 16507
github_forks: 977
github_is_organization: true
retrieved_at: 2026-03-03T07:18:00.223Z
content_sha256: dee7e925f7fe001903de6cc14f9656bcda90d069bbf65a2273f22202efebba09
---
|/data/skills-sh-vercel-labs-agent-browser-dogfood|

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
source_url: https://raw.githubusercontent.com/vercel-labs/next-skills/HEAD/skills/next-best-practices/file-conventions.md
license: ""
upstream_ref: https://skills.sh/vercel-labs/next-skills/next-best-practices
github_stars: 660
github_forks: 41
github_is_organization: true
retrieved_at: 2026-03-03T07:17:55.906Z
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
source_url: https://raw.githubusercontent.com/vercel/turborepo/HEAD/skills/turborepo/references/configuration/RULE.md
license: ""
upstream_ref: https://skills.sh/vercel/turborepo/turborepo
github_stars: 29897
github_forks: 2270
github_is_organization: true
retrieved_at: 2026-03-03T07:17:57.578Z
content_sha256: 353e56f31256d91d4b42978d0f5acbb94adf2ccd2bec18e2f5acdc2cabd4a6cb
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
source_url: https://raw.githubusercontent.com/vuejs-ai/skills/HEAD/skills/vue-debug-guides/reference/reactivity-debugging-hooks.md
license: ""
upstream_ref: https://skills.sh/vuejs-ai/skills/vue-debug-guides
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:31.815Z
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
source_url: https://raw.githubusercontent.com/vuejs-ai/skills/HEAD/skills/vue-jsx-best-practices/reference/render-function-jsx-vue-vs-react.md
license: ""
upstream_ref: https://skills.sh/vuejs-ai/skills/vue-jsx-best-practices
github_stars: 1702
github_forks: 84
github_is_organization: true
retrieved_at: 2026-03-03T07:18:01.538Z
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
source_url: https://raw.githubusercontent.com/vuejs-ai/skills/HEAD/skills/vue-options-api-best-practices/reference/ts-options-api-use-definecomponent.md
license: ""
upstream_ref: https://skills.sh/vuejs-ai/skills/vue-options-api-best-practices
github_stars: 1611
github_forks: 80
github_is_organization: true
retrieved_at: 2026-03-03T07:17:34.834Z
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
source_url: https://raw.githubusercontent.com/vuejs-ai/skills/HEAD/skills/vue-pinia-best-practices/reference/pinia-no-active-pinia-error.md
license: ""
upstream_ref: https://skills.sh/vuejs-ai/skills/vue-pinia-best-practices
github_stars: 1702
github_forks: 84
github_is_organization: true
retrieved_at: 2026-03-03T07:18:00.546Z
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
source_url: https://raw.githubusercontent.com/vuejs-ai/skills/HEAD/skills/vue-router-best-practices/reference/router-beforeenter-no-param-trigger.md
license: ""
upstream_ref: https://skills.sh/vuejs-ai/skills/vue-router-best-practices
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:29.882Z
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
source_url: https://raw.githubusercontent.com/vuejs-ai/skills/HEAD/skills/vue-testing-best-practices/reference/testing-vitest-recommended-for-vue.md
license: ""
upstream_ref: https://skills.sh/vuejs-ai/skills/vue-testing-best-practices
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:30.652Z
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
source_url: https://raw.githubusercontent.com/waynesutton/convexskills/HEAD/skills/convex-best-practices/SKILL.md
license: ""
upstream_ref: https://skills.sh/waynesutton/convexskills/convex-functions
github_stars: 335
github_forks: 27
github_is_organization: false
retrieved_at: 2026-03-03T07:18:03.425Z
content_sha256: 20e2298b8ebeca51e189394ec924756dfaef5fa70170ff7fd2fbdb5177718fcd
---
|/data/skills-sh-waynesutton-convexskills-convex-functions|

---
stable_id: skills/skills-sh-whatevertogo-feishuskill-lark-mcp
type: skills
title: skills-sh-whatevertogo-feishuskill-lark-mcp
summary: |-
  # 多维表格 (Bitable) 操作指南
  ## ⚠️ 关键注意事项
  **⭐ 0. 使用用户身份创建（最重要！）**
  ```yaml
  # ⭐ 关键经验：始终使用 useUAT: true 创建用户可访问的资源
  useUAT: true   # ✅ 用户身份 - 创建者=当前用户，您可以直接访问
  useUAT: false  # ❌ 租户身份 - 创建者=飞书助手，您无法直接访问
  # 实际测试发现：
  # - useUAT: false 创建的 Base，创建者是"飞书助手"
  # - 当前用户无法直接访问，权限受限
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/whatevertogo/feishuskill/HEAD/lark-mcp/reference/bitable.md
license: ""
upstream_ref: https://skills.sh/whatevertogo/feishuskill/lark-mcp
github_stars: 11
github_forks: 1
github_is_organization: false
retrieved_at: 2026-03-03T07:18:01.863Z
content_sha256: 84fd901c39af1a131eb5de82b10034a8a364aa580ef44ea2cec9b6ec4d19a27f
---
|/data/skills-sh-whatevertogo-feishuskill-lark-mcp|

---
stable_id: skills/skills-sh-wshobson-agents-context-driven-development
type: skills
title: skills-sh-wshobson-agents-context-driven-development
summary: >-
  # Artifact Templates

  Starter templates for each Conductor context artifact. Copy and fill in for
  new projects.

  > Contributed by [@fernandezbaptiste](https://github.com/fernandezbaptiste)
  ([#437](https://github.com/wshobson/agents/pull/437))

  ## product.md

  ```markdown

  # [Product Name]

  > One-line description of what this product does.

  ## Problem

  What problem does this solve and for whom?

  ## Solution
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/wshobson/agents/HEAD/plugins/conductor/skills/context-driven-development/references/artifact-templates.md
license: ""
upstream_ref: https://skills.sh/wshobson/agents/context-driven-development
github_stars: 29309
github_forks: 3212
github_is_organization: false
retrieved_at: 2026-03-03T07:17:49.106Z
content_sha256: ebfa857d59fd603e55c3a53f29dbf0f96e0bb21429edf2a78519bce995bf37c8
---
|/data/skills-sh-wshobson-agents-context-driven-development|

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
github_stars: 5779
github_forks: 569
github_is_organization: true
retrieved_at: 2026-03-03T07:17:58.152Z
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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:11.150Z
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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:11.406Z
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
    Recommend suitable prompts from 10,000+ Nano Banana Pro image generation prompts based on user needs.
    Use this skill when users want to:
    - Generate images with AI (Nano Banana Pro / Gemini image model)
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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:11.511Z
content_sha256: 4767646582a762510325dceba8aaa6c4a2bbd2473b94f2619d67b34554577e32
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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-03T07:17:11.601Z
content_sha256: dc010b204b24e8ba93afdaebf5e3093c377918cf7b0250afb928383e48b2ac0d
---
|/data/skills-sh-zaferayan-skills-zafer-skills|
