# Category: Uncategorized

| Category | Uncategorized |
| --- | --- |
| Slug | uncategorized |
| Count | 589 |

---
stable_id: skills/agentskills-skill
type: skills
title: agentskills-skill
summary: >-
  ---

  name: Agent

  description: Use when creating, authoring, or evaluating Agent Skills —
  reusable instruction packages that extend AI agent capabilities. Reach for
  this skill when building new skills, optimizing skill descriptions for
  reliable triggering, testing skill outputs, or integrating skills into agent
  clients.

  metadata:
      mintlify-proj: agent
      version: "1.0"
  ---

  # Agent Skills

  ## Product summary

  Agent Skills is an open format for packaging specialized instructions,
  scripts, and resources that agents can discover and use on demand. A skill is
  a folder containing a `SKILL.md` file (with YAML frontmatter and Markdown
  instructions), plus optional `scripts/`, `references/`, and `assets/`
  directories. Skills use **progressive disclosure**: agents load only the name
  and description at startup, then read full instructions when a task matches
  the skill's scope, then load supporting files as needed. This keeps context
  efficient while giving agents access to domain expertise, repeatable
  workflows, and company-specific knowledge.
tags: []
source_url: https://agentskills.io/skill.md
license: ""
upstream_ref: ""
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:30:56.329Z
content_sha256: 2416f0403e6a816aadb5897edff2129cf71427568f60372b50142f400f93d527
---
|/data/agentskills-skill|

---
stable_id: skills/carmahhawwari-ui-design-brain-skill
type: skills
title: carmahhawwari-ui-design-brain-skill
summary: >-
  ---

  name: ui-design-brain

  description: Generate production-grade UI using real component patterns and
  best practices from 60+ documented interface components. Use when the user
  asks to build web interfaces, pages, dashboards, forms, navigation, or any UI
  — ensures modern, minimal, SaaS-quality output grounded in design system
  conventions rather than generic AI patterns.

  license: Complete terms in LICENSE.txt

  ---

  # UI Design Brain

  This skill provides a curated knowledge base of 60+ UI component patterns
  sourced from [component.gallery](https://component.gallery) and enriched with
  best practices, layout guidance, and usage rules. It replaces generic guessing
  with real design-system knowledge when generating interfaces.

  **Before writing any UI code**, consult this skill to select the right
  components and follow their best practices. Read
  [components.md](components.md) for the full reference.

  ## When to Use This Skill

  Apply whenever the user asks to build, design, or generate:
tags: []
source_url: https://raw.githubusercontent.com/carmahhawwari/ui-design-brain/main/SKILL.md
license: ""
upstream_ref: https://github.com/carmahhawwari/ui-design-brain
github_stars: 641
github_forks: 58
github_is_organization: false
retrieved_at: 2026-03-31T07:34:22.068Z
content_sha256: 89e6ee68cef797d2b5c822043c478972db0dfda1ccef534f87c1687f4c3f6ec0
---
|/data/carmahhawwari-ui-design-brain-skill|

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
retrieved_at: 2026-03-31T07:30:54.800Z
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
retrieved_at: 2026-03-31T07:30:06.301Z
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
retrieved_at: 2026-03-31T07:30:06.454Z
content_sha256: f7c93d25f3d18d937331eac825ad08147416c22992db98afe1bab170f399d732
---
|/data/github-skill-agno-agi-agno-git-workflow-cdbf56f5|

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
retrieved_at: 2026-03-31T07:30:07.473Z
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
retrieved_at: 2026-03-31T07:30:07.626Z
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
retrieved_at: 2026-03-31T07:30:07.681Z
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
retrieved_at: 2026-03-31T07:30:07.731Z
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
retrieved_at: 2026-03-31T07:30:07.926Z
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
retrieved_at: 2026-03-31T07:30:08.019Z
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
retrieved_at: 2026-03-31T07:30:08.082Z
content_sha256: cf7a6a0b92092f44c6532bd9af7189748a9c3b4d044005418230b08cc99ac55c
---
|/data/github-skill-davila7-claude-code-templates-writing-hookify-rules|

---
stable_id: skills/github-skill-deanpeters-product-manager-skills-pestel-analysis
type: skills
title: pestel-analysis
summary: Analyze political, economic, social, technological, environmental, and
  legal forces. Use when external market shifts could materially affect a
  product, roadmap, or strategy.
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-deanpeters
  - github-repo-product-manager-skills
source_url: https://raw.githubusercontent.com/deanpeters/Product-Manager-Skills/main/skills/pestel-analysis/SKILL.md
license: ""
upstream_ref: https://github.com/deanpeters/Product-Manager-Skills/blob/main/skills/pestel-analysis/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:30:08.278Z
content_sha256: 9999e7418eb72cce4a2c42261fd726075fb9ae0868c4a64b17e9ee918cd112b0
---
|/data/github-skill-deanpeters-product-manager-skills-pestel-analysis|

---
stable_id: skills/github-skill-dicklesworthstone-pi-agent-rust-deploying-monitoring-stacks
type: skills
title: deploying-monitoring-stacks
summary: Monitor use when deploying monitoring stacks including Prometheus,
  Grafana, and Datadog. Trigger with phrases like "deploy monitoring stack",
  "setup prometheus", "configure grafana", or "install datadog agent". Generates
  production-ready configurations with metric collection, visualization
  dashboards, and alerting rules.
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-dicklesworthstone
  - github-repo-pi_agent_rust
source_url: https://raw.githubusercontent.com/Dicklesworthstone/pi_agent_rust/main/tests/ext_conformance/artifacts/plugins-community/plugins/devops/monitoring-stack-deployer/skills/deploying-monitoring-stacks/SKILL.md
license: ""
upstream_ref: https://github.com/Dicklesworthstone/pi_agent_rust/blob/main/tests/ext_conformance/artifacts/plugins-community/plugins/devops/monitoring-stack-deployer/skills/deploying-monitoring-stacks/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:30:08.335Z
content_sha256: 3f2a4dcade9871009e99d23342a686cd1b5079e27feb1be20d32a0fb7932bf89
---
|/data/github-skill-dicklesworthstone-pi-agent-rust-deploying-monitoring-stacks|

---
stable_id: skills/github-skill-dicklesworthstone-pi-agent-rust-websocket-client-creator
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
  - github-owner-dicklesworthstone
  - github-repo-pi_agent_rust
source_url: https://raw.githubusercontent.com/Dicklesworthstone/pi_agent_rust/main/tests/ext_conformance/artifacts/plugins-community/skills/16-api-integration/websocket-client-creator/SKILL.md
license: ""
upstream_ref: https://github.com/Dicklesworthstone/pi_agent_rust/blob/main/tests/ext_conformance/artifacts/plugins-community/skills/16-api-integration/websocket-client-creator/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:30:08.421Z
content_sha256: ab8c99b15d77cc8fdcf284afec72cac2906494e6d9a0f04c04cf5b583451cb61
---
|/data/github-skill-dicklesworthstone-pi-agent-rust-websocket-client-creator|

---
stable_id: skills/github-skill-dicklesworthstone-pi-agent-rust-windsurf-common-errors
type: skills
title: windsurf-common-errors
summary: |-
  Diagnose and fix Windsurf common errors and exceptions.
  Use when encountering Windsurf errors, debugging failed requests,
  or troubleshooting integration issues.
  Trigger with phrases like "windsurf error", "fix windsurf",
  "windsurf not working", "debug windsurf".
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-dicklesworthstone
  - github-repo-pi_agent_rust
source_url: https://raw.githubusercontent.com/Dicklesworthstone/pi_agent_rust/main/tests/ext_conformance/artifacts/plugins-community/plugins/saas-packs/windsurf-pack/skills/windsurf-common-errors/SKILL.md
license: ""
upstream_ref: https://github.com/Dicklesworthstone/pi_agent_rust/blob/main/tests/ext_conformance/artifacts/plugins-community/plugins/saas-packs/windsurf-pack/skills/windsurf-common-errors/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:30:08.508Z
content_sha256: 3554dc2f0ca6550c01f71a3ea7c5a72899fc18bb3f3534e2593966a16be5f46a
---
|/data/github-skill-dicklesworthstone-pi-agent-rust-windsurf-common-errors|

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
retrieved_at: 2026-03-31T07:30:08.642Z
content_sha256: bbf1c0acde2756f06d8663bc9d4de4f8c87f784e65556de8c78d7f27fd3a5d00
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
retrieved_at: 2026-03-31T07:30:08.692Z
content_sha256: 74bcb9051bf6c222bb994885d81abe0c6b227bbf9913a48e6a594cfd1ff9bec9
---
|/data/github-skill-epicweb-dev-epic-stack-epic-ui-guidelines|

---
stable_id: skills/github-skill-florianbruniaux-claude-code-ultimate-guide-rtk-optimizer
type: skills
title: rtk-optimizer
summary: Optimize command outputs with RTK (Rust Token Killer) for 70% token reduction
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-florianbruniaux
  - github-repo-claude-code-ultimate-guide
source_url: https://raw.githubusercontent.com/FlorianBruniaux/claude-code-ultimate-guide/main/examples/skills/rtk-optimizer/SKILL.md
license: ""
upstream_ref: https://github.com/FlorianBruniaux/claude-code-ultimate-guide/blob/main/examples/skills/rtk-optimizer/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:30:09.051Z
content_sha256: 28e2abc333417568fb82cb89d8dcf8774ad1ccdf843e8c35512b8aad0b27b89a
---
|/data/github-skill-florianbruniaux-claude-code-ultimate-guide-rtk-optimizer|

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
retrieved_at: 2026-03-31T07:30:09.177Z
content_sha256: 4cae3c84e6c84e09b8ca5b1d630422fb663710a5014d27a2764002c6e5e4afcb
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
retrieved_at: 2026-03-31T07:30:09.238Z
content_sha256: da443a5413b629360e5026125dc2d6e310ba01769e7f382e58560996b6c5f1b5
---
|/data/github-skill-jeremylongshore-claude-code-plugins-plus-skills-code-documentation-analyzer|

---
stable_id: skills/github-skill-jeremylongshore-claude-code-plugins-plus-skills-ideogram-common-errors
type: skills
title: ideogram-common-errors
summary: |-
  Diagnose and fix Ideogram common errors and exceptions.
  Use when encountering Ideogram errors, debugging failed requests,
  or troubleshooting integration issues.
  Trigger with phrases like "ideogram error", "fix ideogram",
  "ideogram not working", "debug ideogram".
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-jeremylongshore
  - github-repo-claude-code-plugins-plus-skills
source_url: https://raw.githubusercontent.com/jeremylongshore/claude-code-plugins-plus-skills/main/plugins/saas-packs/ideogram-pack/skills/ideogram-common-errors/SKILL.md
license: ""
upstream_ref: https://github.com/jeremylongshore/claude-code-plugins-plus-skills/blob/main/plugins/saas-packs/ideogram-pack/skills/ideogram-common-errors/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:30:09.294Z
content_sha256: 1c93dceaa9f86bca2a9931afb7957d9960b2f34ef450135c07358ce961b37211
---
|/data/github-skill-jeremylongshore-claude-code-plugins-plus-skills-ideogram-common-errors|

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
retrieved_at: 2026-03-31T07:30:09.361Z
content_sha256: 09648d946924f07144f84da7c025f444ed82adb82fbbf5f5beb49faf99efa316
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
retrieved_at: 2026-03-31T07:30:09.428Z
content_sha256: bd8ad44a8ffbd8c3362769eb580b73d4706e79d466c7fb5711e808caf01b236c
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
retrieved_at: 2026-03-31T07:30:09.498Z
content_sha256: 6fd711225fa0ea3aaf5cef7ec23c23f4b79593b7cad8bdf65a07c38701b3db6a
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
retrieved_at: 2026-03-31T07:30:09.570Z
content_sha256: 5cc346f94f0223d3a5c23319d56ace215afb524fbf3dcc8e3873cbc9533a2abd
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
retrieved_at: 2026-03-31T07:30:09.636Z
content_sha256: a3fc062feffc0b2a0683c9d9736f60ce293dbf649c7aeb68d9d6814756b70875
---
|/data/github-skill-jeremylongshore-claude-code-plugins-plus-skills-soc2-compliance-checker|

---
stable_id: skills/github-skill-jeremylongshore-claude-code-plugins-plus-skills-testing-load-balancers
type: skills
title: testing-load-balancers
summary: >-
  Validate load balancer behavior, failover, and traffic distribution.

  Use when performing specialized testing.

  Trigger with phrases like "test load balancer", "validate failover", or "check
  traffic distribution".
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-jeremylongshore
  - github-repo-claude-code-plugins-plus-skills
source_url: https://raw.githubusercontent.com/jeremylongshore/claude-code-plugins-plus-skills/main/plugins/testing/load-balancer-tester/skills/testing-load-balancers/SKILL.md
license: ""
upstream_ref: https://github.com/jeremylongshore/claude-code-plugins-plus-skills/blob/main/plugins/testing/load-balancer-tester/skills/testing-load-balancers/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:30:09.707Z
content_sha256: b90f192026338e3c14dff314817b166e988ed368ce5e8d553a804f6f0d9302e8
---
|/data/github-skill-jeremylongshore-claude-code-plugins-plus-skills-testing-load-balancers|

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
retrieved_at: 2026-03-31T07:30:09.844Z
content_sha256: 3c7e1f19082a9df0c042842ac4a72902f8d511d68c22fd3c5016fa433f6c1ac7
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
retrieved_at: 2026-03-31T07:30:09.926Z
content_sha256: 9df108f9b3662a3bb700f2244038382ed290f1aaca8b13c75e5c030caa913de1
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
retrieved_at: 2026-03-31T07:30:10.131Z
content_sha256: 9151c7ce0a0b3d8bd85e7cde8b0c3a08e01f1b41b5583a516b62a078f53128ec
---
|/data/github-skill-jeremylongshore-claude-code-plugins-plus-skills-websocket-client-creator|

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
retrieved_at: 2026-03-31T07:30:10.226Z
content_sha256: 4e1a25951a698c4a157214082fa2e8f61d6bb3a3e87343a0e8424737b08a880e
---
|/data/github-skill-kevoreilly-capev2-cape-sandbox-developer|

---
stable_id: skills/github-skill-kurtosis-tech-kurtosis-cluster-manage
type: skills
title: cluster-manage
summary: Manage Kurtosis cluster settings. Switch between Docker and Kubernetes
  backends, list available clusters, and configure which cluster Kurtosis uses.
  Use when you need to change where Kurtosis runs enclaves.
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-kurtosis-tech
  - github-repo-kurtosis
source_url: https://raw.githubusercontent.com/kurtosis-tech/kurtosis/main/skills/cluster-manage/SKILL.md
license: ""
upstream_ref: https://github.com/kurtosis-tech/kurtosis/blob/main/skills/cluster-manage/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:30:10.309Z
content_sha256: b1fdde0f27221a9223b6a79b4c2946da391dacc758f7320f745ca1c79fc14912
---
|/data/github-skill-kurtosis-tech-kurtosis-cluster-manage|

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
retrieved_at: 2026-03-31T07:30:10.399Z
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
retrieved_at: 2026-03-31T07:30:10.627Z
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
retrieved_at: 2026-03-31T07:30:10.695Z
content_sha256: bc046aafab458653f8e099866e06b904517a58aa99e69d4f116484df238fe1e9
---
|/data/github-skill-luongnv89-claude-howto-brand-voice-consistency|

---
stable_id: skills/github-skill-mukul975-anthropic-cybersecurity-skills-analyzing-ransomware-leak-site-intelligence
type: skills
title: analyzing-ransomware-leak-site-intelligence
summary: Monitor and analyze ransomware group data leak sites (DLS) to track
  victim postings, extract threat intelligence on group tactics, and assess
  sector-specific ransomware risk for proactive defense.
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-mukul975
  - github-repo-anthropic-cybersecurity-skills
source_url: https://raw.githubusercontent.com/mukul975/Anthropic-Cybersecurity-Skills/main/skills/analyzing-ransomware-leak-site-intelligence/SKILL.md
license: ""
upstream_ref: https://github.com/mukul975/Anthropic-Cybersecurity-Skills/blob/main/skills/analyzing-ransomware-leak-site-intelligence/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:30:10.818Z
content_sha256: 0a638b320cbd6e55d00fdf76c784a38cf7f9fc019717c883bee5b8a94c1d718c
---
|/data/github-skill-mukul975-anthropic-cybersecurity-skills-analyzing-ransomware-leak-site-intelligence|

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
retrieved_at: 2026-03-31T07:30:11.097Z
content_sha256: 182bfd1e8a12acb301446c264e84188990247e2dd5395568219454c670498266
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
retrieved_at: 2026-03-31T07:30:11.323Z
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
retrieved_at: 2026-03-31T07:30:11.385Z
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
retrieved_at: 2026-03-31T07:30:11.916Z
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
retrieved_at: 2026-03-31T07:30:12.096Z
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
retrieved_at: 2026-03-31T07:30:12.217Z
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
retrieved_at: 2026-03-31T07:30:12.307Z
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
retrieved_at: 2026-03-31T07:30:12.411Z
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
retrieved_at: 2026-03-31T07:30:12.514Z
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
retrieved_at: 2026-03-31T07:30:12.613Z
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
retrieved_at: 2026-03-31T07:30:12.700Z
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
retrieved_at: 2026-03-31T07:30:12.983Z
content_sha256: 7631d2dd175784f2c2f3b24f317bfaf6d42de61959bde2fcdb693af9edda281e
---
|/data/github-skill-openclaw-skills-journal|

---
stable_id: skills/github-skill-openclaw-skills-listenhub
type: skills
title: listenhub
summary: >-
  Explain anything — turn ideas into podcasts, explainer videos, or voice
  narration.

  Use when the user wants to "make a podcast", "create an explainer video",

  "read this aloud", "generate an image", or share knowledge in audio/visual
  form.

  Supports: topic descriptions, YouTube links, article URLs, plain text, and
  image prompts.
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-openclaw
  - github-repo-skills
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/boxingyi/listenhub/SKILL.md
license: ""
upstream_ref: https://github.com/openclaw/skills/blob/main/skills/boxingyi/listenhub/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:30:13.178Z
content_sha256: e229582acfaa15327d5400c6bccc614d46d729a3609e0acb4479b41bb8e42d0a
---
|/data/github-skill-openclaw-skills-listenhub|

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
retrieved_at: 2026-03-31T07:30:13.358Z
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
retrieved_at: 2026-03-31T07:30:13.678Z
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
retrieved_at: 2026-03-31T07:30:14.033Z
content_sha256: 5d4872e2dab3953a5f07228365e338f6105d64d82774b275ec3a1d14f2a2637c
---
|/data/github-skill-openclaw-skills-physics|

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
retrieved_at: 2026-03-31T07:30:14.220Z
content_sha256: 047e668874e8ea17cdc2008732e7f83659171d5d0f59529ffdeb0bff76184945
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
retrieved_at: 2026-03-31T07:30:14.308Z
content_sha256: 3a6c65e8d92bbbcb71789ad4fbe48bba46fa24ecd38d0bcc1ae41b94bf866ee2
---
|/data/github-skill-openclaw-skills-swelist|

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
retrieved_at: 2026-03-31T07:30:14.570Z
content_sha256: a768ddbecc35778fde974d963c3797a49466913f38ef4ae28c0d239417768a01
---
|/data/github-skill-openclaw-skills-vidu-video|

---
stable_id: skills/github-skill-pbakaus-impeccable-colorize
type: skills
title: colorize
summary: Add strategic color to features that are too monochromatic or lack
  visual interest. Makes interfaces more engaging and expressive.
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-pbakaus
  - github-repo-impeccable
source_url: https://raw.githubusercontent.com/pbakaus/impeccable/main/source/skills/colorize/SKILL.md
license: ""
upstream_ref: https://github.com/pbakaus/impeccable/blob/main/source/skills/colorize/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:30:14.699Z
content_sha256: 6bac67d2d6478fd2d73aac8d2cdb77972b4cc29dd4392cb873b15d2621e391f8
---
|/data/github-skill-pbakaus-impeccable-colorize|

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
retrieved_at: 2026-03-31T07:30:14.767Z
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
retrieved_at: 2026-03-31T07:30:14.860Z
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
retrieved_at: 2026-03-31T07:30:14.953Z
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
retrieved_at: 2026-03-31T07:30:15.111Z
content_sha256: d5b132009b8e9117c2496728bf9374dd748e3cf01c9af43b0bf55c245e784161
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
retrieved_at: 2026-03-31T07:30:15.357Z
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
retrieved_at: 2026-03-31T07:30:15.517Z
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
retrieved_at: 2026-03-31T07:30:15.602Z
content_sha256: 0ef9f14f2e7d1fe6c6967644158504542248965d1870b1a473fb74173ad1b119
---
|/data/github-skill-vllm-project-vllm-ascend-vllm-ascend-model-adapter|

---
stable_id: skills/github-skill-wavetermdev-waveterm-electron-api
type: skills
title: electron-api
summary: Guide for adding new Electron APIs to Wave Terminal. Use when
  implementing new frontend-to-electron communications via preload/IPC.
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-wavetermdev
  - github-repo-waveterm
source_url: https://raw.githubusercontent.com/wavetermdev/waveterm/main/.kilocode/skills/electron-api/SKILL.md
license: ""
upstream_ref: https://github.com/wavetermdev/waveterm/blob/main/.kilocode/skills/electron-api/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:30:15.683Z
content_sha256: 53b5f9666ec2ac61b8f3cf08e554ddf611b751e28795a84dd34f91fd20939203
---
|/data/github-skill-wavetermdev-waveterm-electron-api|

---
stable_id: skills/github-skill-yeachan-heo-oh-my-claudecode-ultraqa
type: skills
title: ultraqa
summary: QA cycling workflow - test, verify, fix, repeat until goal met
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-yeachan-heo
  - github-repo-oh-my-claudecode
source_url: https://raw.githubusercontent.com/Yeachan-Heo/oh-my-claudecode/main/skills/ultraqa/SKILL.md
license: ""
upstream_ref: https://github.com/Yeachan-Heo/oh-my-claudecode/blob/main/skills/ultraqa/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:30:15.749Z
content_sha256: 92ab007d699affba7159c462270fef5e5524a8e3fda19caeaa6d49558ebae73a
---
|/data/github-skill-yeachan-heo-oh-my-claudecode-ultraqa|

---
stable_id: skills/github-skill-zjunlp-skillnet-webshop-query-parser
type: skills
title: webshop-query-parser
summary: This skill extracts key constraints and product requirements from a
  user's shopping query. It should be triggered when the agent receives a new
  shopping instruction, to identify product attributes (e.g., 'gluten free'),
  price limits (e.g., 'lower than 140.00 dollars'), and other specifications.
  The skill outputs a structured set of search criteria to guide subsequent
  product discovery.
tags:
  - github-skill-search
  - source-github-code-search
  - category-uncategorized
  - github-owner-zjunlp
  - github-repo-skillnet
source_url: https://raw.githubusercontent.com/zjunlp/SkillNet/main/experiments/src/skills/webshop/webshop-query-parser/SKILL.md
license: ""
upstream_ref: https://github.com/zjunlp/SkillNet/blob/main/experiments/src/skills/webshop/webshop-query-parser/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:30:15.836Z
content_sha256: 83ad60b67e2aabc8db03e1e6c43f39fd385ae9c53293a575a9defa3ed79aa53f
---
|/data/github-skill-zjunlp-skillnet-webshop-query-parser|

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
github_stars: 1047
github_forks: 47
github_is_organization: false
retrieved_at: 2026-03-31T07:30:15.887Z
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
github_stars: 1047
github_forks: 47
github_is_organization: false
retrieved_at: 2026-03-31T07:30:15.950Z
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
github_stars: 1047
github_forks: 47
github_is_organization: false
retrieved_at: 2026-03-31T07:30:16.043Z
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
github_stars: 1047
github_forks: 47
github_is_organization: false
retrieved_at: 2026-03-31T07:30:16.121Z
content_sha256: 0a2d654902bc04263ce68c8c02967ef03f17b482e855360a5463211d99d7baa9
---
|/data/ibelick-fixing-motion-performance|

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
retrieved_at: 2026-03-31T07:31:15.385Z
content_sha256: ef42982af0d51238dda2ab16d08626712891bdd41864876c32d1e7b13fb3124f
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
retrieved_at: 2026-03-31T07:31:15.163Z
content_sha256: 3a4f260eb9f60b431782bf6d90f22afb480c0c67860267a032df58a3e1bd19cd
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
retrieved_at: 2026-03-31T07:31:15.038Z
content_sha256: 38f1efc807928030654218443ad07f6a37ac82de6b4d627a03113a3568d787b7
---
|/data/knowledge-work-plugins-design-skills-design-handoff-skill|

---
stable_id: skills/knowledge-work-plugins-design-skills-design-system-skill
type: skills
title: design-system
summary: Audit, document, or extend your design system. Use when checking for
  naming inconsistencies or hardcoded values across components, writing
  documentation for a component's variants, states, and accessibility notes, or
  designing a new pattern that fits the existing system.
tags:
  - source-knowledge-work-plugins
  - plugin-design
  - plugin-component-skills
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/design/skills/design-system/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/design/skills/design-system/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:34:16.960Z
content_sha256: fb31bd0144c43955106f01927126ae9fd2d4148be44c8d5887b3391f40c31445
---
|/data/knowledge-work-plugins-design-skills-design-system-skill|

---
stable_id: skills/knowledge-work-plugins-design-skills-research-synthesis-skill
type: skills
title: research-synthesis
summary: Synthesize user research into themes, insights, and recommendations.
  Use when you have interview transcripts, survey results, usability test notes,
  support tickets, or NPS responses that need to be distilled into patterns,
  user segments, and prioritized next steps.
tags:
  - source-knowledge-work-plugins
  - plugin-design
  - plugin-component-skills
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/design/skills/research-synthesis/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/design/skills/research-synthesis/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:34:16.888Z
content_sha256: 40048615dc81fc8b9b06104769498214d61a35ae4518a0995a12bbbd0ab945a1
---
|/data/knowledge-work-plugins-design-skills-research-synthesis-skill|

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
retrieved_at: 2026-03-31T07:31:15.300Z
content_sha256: fa18fc13d0f44aa869102962ef9466417ade726d659465195a40fbcf08cee156
---
|/data/knowledge-work-plugins-design-skills-user-research-skill|

---
stable_id: skills/knowledge-work-plugins-design-skills-ux-copy-skill
type: skills
title: ux-copy
summary: Write or review UX copy — microcopy, error messages, empty states,
  CTAs. Trigger with "write copy for", "what should this button say?", "review
  this error message", or when naming a CTA, wording a confirmation dialog,
  filling an empty state, or writing onboarding text.
tags:
  - source-knowledge-work-plugins
  - plugin-design
  - plugin-component-skills
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/design/skills/ux-copy/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/design/skills/ux-copy/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:34:16.787Z
content_sha256: d46a00a62ec637e9ca9d5f7823ea3e0a4ec26dffc53bb5035f59b48ebfcdcde7
---
|/data/knowledge-work-plugins-design-skills-ux-copy-skill|

---
stable_id: skills/knowledge-work-plugins-engineering-skills-architecture-skill
type: skills
title: architecture
summary: Create or evaluate an architecture decision record (ADR). Use when
  choosing between technologies (e.g., Kafka vs SQS), documenting a design
  decision with trade-offs and consequences, reviewing a system design proposal,
  or designing a new component from requirements and constraints.
tags:
  - source-knowledge-work-plugins
  - plugin-engineering
  - plugin-component-skills
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/engineering/skills/architecture/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/engineering/skills/architecture/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:34:14.615Z
content_sha256: de7db3170a3ae1a894c70ef6cb555fe15618ed9b9674d20895eda3d2a0a5f9a2
---
|/data/knowledge-work-plugins-engineering-skills-architecture-skill|

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
retrieved_at: 2026-03-31T07:31:17.184Z
content_sha256: 6303932f1b301c614a6f5a0099cd87a19e1cd1b7cbfa1a1e11e996edbca6426b
---
|/data/knowledge-work-plugins-engineering-skills-code-review-skill|

---
stable_id: skills/knowledge-work-plugins-engineering-skills-debug-skill
type: skills
title: debug
summary: Structured debugging session — reproduce, isolate, diagnose, and fix.
  Trigger with an error message or stack trace, "this works in staging but not
  prod", "something broke after the deploy", or when behavior diverges from
  expected and the cause isn't obvious.
tags:
  - source-knowledge-work-plugins
  - plugin-engineering
  - plugin-component-skills
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/engineering/skills/debug/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/engineering/skills/debug/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:34:14.686Z
content_sha256: e50bb92cbcb2715139f3a3cb9ff282a8f0f9ae794f8f35d81338654e2601d32a
---
|/data/knowledge-work-plugins-engineering-skills-debug-skill|

---
stable_id: skills/knowledge-work-plugins-engineering-skills-deploy-checklist-skill
type: skills
title: deploy-checklist
summary: Pre-deployment verification checklist. Use when about to ship a
  release, deploying a change with database migrations or feature flags,
  verifying CI status and approvals before going to production, or documenting
  rollback triggers ahead of time.
tags:
  - source-knowledge-work-plugins
  - plugin-engineering
  - plugin-component-skills
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/engineering/skills/deploy-checklist/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/engineering/skills/deploy-checklist/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:34:14.529Z
content_sha256: 85ca53dc471970e3e12c36ec814ebf5f6cb9419016c55adb05ff34789bae3be9
---
|/data/knowledge-work-plugins-engineering-skills-deploy-checklist-skill|

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
retrieved_at: 2026-03-31T07:31:17.325Z
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
retrieved_at: 2026-03-31T07:31:17.475Z
content_sha256: 9eaa7a974c90395ac7116e82710f74546f38e69f735d78f684ee13fd79646e9a
---
|/data/knowledge-work-plugins-engineering-skills-incident-response-skill|

---
stable_id: skills/knowledge-work-plugins-engineering-skills-standup-skill
type: skills
title: standup
summary: Generate a standup update from recent activity. Use when preparing for
  daily standup, summarizing yesterday's commits and PRs and ticket moves,
  formatting work into yesterday/today/blockers, or structuring a few rough
  notes into a shareable update.
tags:
  - source-knowledge-work-plugins
  - plugin-engineering
  - plugin-component-skills
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/engineering/skills/standup/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/engineering/skills/standup/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:34:14.772Z
content_sha256: 598d9082631326ee810056c787188ee021c6325f990989732ba178ea111adf45
---
|/data/knowledge-work-plugins-engineering-skills-standup-skill|

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
retrieved_at: 2026-03-31T07:31:17.407Z
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
retrieved_at: 2026-03-31T07:31:17.252Z
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
retrieved_at: 2026-03-31T07:31:17.120Z
content_sha256: 5c5e95830754bbdd838213fa05fc8f07523f591fd558fd3c86031ffd479f7a9e
---
|/data/knowledge-work-plugins-engineering-skills-testing-strategy-skill|

---
stable_id: skills/knowledge-work-plugins-human-resources-skills-comp-analysis-skill
type: skills
title: comp-analysis
summary: Analyze compensation — benchmarking, band placement, and equity
  modeling. Trigger with "what should we pay a [role]", "is this offer
  competitive", "model this equity grant", or when uploading comp data to find
  outliers and retention risks.
tags:
  - source-knowledge-work-plugins
  - plugin-human-resources
  - plugin-component-skills
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/human-resources/skills/comp-analysis/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/human-resources/skills/comp-analysis/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:34:13.602Z
content_sha256: 1af196cd1c38cdb96565eadebcf13fa25e979469b3e06f4791e18baa7f2534a6
---
|/data/knowledge-work-plugins-human-resources-skills-comp-analysis-skill|

---
stable_id: skills/knowledge-work-plugins-human-resources-skills-draft-offer-skill
type: skills
title: draft-offer
summary: Draft an offer letter with comp details and terms. Use when a candidate
  is ready for an offer, assembling a total comp package (base, equity, signing
  bonus), writing the offer letter text itself, or prepping negotiation guidance
  for the hiring manager.
tags:
  - source-knowledge-work-plugins
  - plugin-human-resources
  - plugin-component-skills
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/human-resources/skills/draft-offer/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/human-resources/skills/draft-offer/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:34:13.808Z
content_sha256: b50f677f4c8fb769b9cd0be51cd250e0e21a4530d579d5f400b7d7b1b1a63ea9
---
|/data/knowledge-work-plugins-human-resources-skills-draft-offer-skill|

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
retrieved_at: 2026-03-31T07:31:16.396Z
content_sha256: c687311babdeccf086aa5f6d86dcbfc3a9d1b8bb7124f072450ffa4315d98c4c
---
|/data/knowledge-work-plugins-human-resources-skills-interview-prep-skill|

---
stable_id: skills/knowledge-work-plugins-human-resources-skills-onboarding-skill
type: skills
title: onboarding
summary: Generate an onboarding checklist and first-week plan for a new hire.
  Use when someone has a start date coming up, building the pre-start task list
  (accounts, equipment, buddy), scheduling Day 1 and Week 1, or setting
  30/60/90-day goals for a new team member.
tags:
  - source-knowledge-work-plugins
  - plugin-human-resources
  - plugin-component-skills
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/human-resources/skills/onboarding/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/human-resources/skills/onboarding/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:34:13.674Z
content_sha256: c9210cdd00f8c2998a01c6d1310a8742aafa82a5861fb7c1c18686b72a56da97
---
|/data/knowledge-work-plugins-human-resources-skills-onboarding-skill|

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
retrieved_at: 2026-03-31T07:31:16.679Z
content_sha256: b3c6e33d251487225485c7fe455586f0cd490b282d7e41054273fa60820891ea
---
|/data/knowledge-work-plugins-human-resources-skills-org-planning-skill|

---
stable_id: skills/knowledge-work-plugins-human-resources-skills-people-report-skill
type: skills
title: people-report
summary: Generate headcount, attrition, diversity, or org health reports. Use
  when pulling a headcount snapshot for leadership, analyzing turnover trends by
  team, preparing diversity representation metrics, or assessing span of control
  and flight risk across the org.
tags:
  - source-knowledge-work-plugins
  - plugin-human-resources
  - plugin-component-skills
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/human-resources/skills/people-report/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/human-resources/skills/people-report/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:34:13.939Z
content_sha256: e68d00be15a681da288e6023df095a952add099db2c14873c47a69e3ab3634b8
---
|/data/knowledge-work-plugins-human-resources-skills-people-report-skill|

---
stable_id: skills/knowledge-work-plugins-human-resources-skills-performance-review-skill
type: skills
title: performance-review
summary: Structure a performance review with self-assessment, manager template,
  and calibration prep. Use when review season kicks off and you need a
  self-assessment template, writing a manager review for a direct report,
  prepping rating distributions and promotion cases for calibration, or turning
  vague feedback into specific behavioral examples.
tags:
  - source-knowledge-work-plugins
  - plugin-human-resources
  - plugin-component-skills
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/human-resources/skills/performance-review/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/human-resources/skills/performance-review/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:34:13.741Z
content_sha256: a34e3f49e7c8619f07fd218cb2b6a6d57572dd7a0a78c72977dcd1739578e588
---
|/data/knowledge-work-plugins-human-resources-skills-performance-review-skill|

---
stable_id: skills/knowledge-work-plugins-human-resources-skills-policy-lookup-skill
type: skills
title: policy-lookup
summary: Find and explain company policies in plain language. Trigger with
  "what's our PTO policy", "can I work remotely from another country", "how do
  expenses work", or any plain-language question about benefits, travel, leave,
  or handbook rules.
tags:
  - source-knowledge-work-plugins
  - plugin-human-resources
  - plugin-component-skills
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/human-resources/skills/policy-lookup/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/human-resources/skills/policy-lookup/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:34:14.018Z
content_sha256: 5fc79b5e81922431b5665d33552dcce7de499e2680b4a81720cb4e2a68015edf
---
|/data/knowledge-work-plugins-human-resources-skills-policy-lookup-skill|

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
retrieved_at: 2026-03-31T07:31:16.743Z
content_sha256: a00b442f701faa6eb65b8ecc8fcf375d5a33ec827b987ba8b04edaef0e90b92f
---
|/data/knowledge-work-plugins-human-resources-skills-recruiting-pipeline-skill|

---
stable_id: skills/knowledge-work-plugins-legal-skills-brief-skill
type: skills
title: brief
summary: Generate contextual briefings for legal work — daily summary, topic
  research, or incident response. Use when starting your day and need a scan of
  legal-relevant items across email, calendar, and contracts, when researching a
  specific legal question across internal sources, or when a developing
  situation (data breach, litigation threat, regulatory inquiry) needs rapid
  context.
tags:
  - source-knowledge-work-plugins
  - plugin-legal
  - plugin-component-skills
  - plugin-skill
  - category-uncategorized
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/legal/skills/brief/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/legal/skills/brief/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:34:16.561Z
content_sha256: 7f1d6d63a74e14e76729d161bf76f2f624b1441d7e4655708e493083a0b93bd2
---
|/data/knowledge-work-plugins-legal-skills-brief-skill|

---
stable_id: skills/knowledge-work-plugins-legal-skills-compliance-check-skill
type: skills
title: compliance-check
summary: Run a compliance check on a proposed action, product feature, or
  business initiative, surfacing applicable regulations, required approvals, and
  risk areas. Use when launching a feature that touches personal data, when
  marketing or product proposes something with regulatory implications, or when
  you need to know which approvals and jurisdictional requirements apply before
  proceeding.
tags:
  - source-knowledge-work-plugins
  - plugin-legal
  - plugin-component-skills
  - plugin-skill
  - category-uncategorized
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/legal/skills/compliance-check/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/legal/skills/compliance-check/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:34:16.493Z
content_sha256: 8dff8ebe7eda9ad5e38f3faf1016a7fc1eeba65bcdb7f5ae45ea507824bbc1c2
---
|/data/knowledge-work-plugins-legal-skills-compliance-check-skill|

---
stable_id: skills/knowledge-work-plugins-legal-skills-legal-response-skill
type: skills
title: legal-response
summary: Generate a response to a common legal inquiry using configured
  templates, with built-in escalation checks for situations that shouldn't use a
  templated reply. Use when responding to data subject requests, litigation hold
  notices, vendor legal questions, NDA requests from business teams, or
  subpoenas.
tags:
  - source-knowledge-work-plugins
  - plugin-legal
  - plugin-component-skills
  - plugin-skill
  - category-uncategorized
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/legal/skills/legal-response/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/legal/skills/legal-response/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:34:16.252Z
content_sha256: b3a0585ee00a53ccb159fbf5b7dd4d4b45c39e5e65cc8f4f39cbb134fef493db
---
|/data/knowledge-work-plugins-legal-skills-legal-response-skill|

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
retrieved_at: 2026-03-31T07:31:03.041Z
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
retrieved_at: 2026-03-31T07:31:02.966Z
content_sha256: 4d19bc2ddb2138d1b306b150c5d0900ce0a398d5ab690b8eba8101ef33d98baa
---
|/data/knowledge-work-plugins-legal-skills-meeting-briefing-skill|

---
stable_id: skills/knowledge-work-plugins-legal-skills-review-contract-skill
type: skills
title: review-contract
summary: Review a contract against your organization's negotiation playbook —
  flag deviations, generate redlines, provide business impact analysis. Use when
  reviewing vendor or customer agreements, when you need clause-by-clause
  analysis against standard positions, or when preparing a negotiation strategy
  with prioritized redlines and fallback positions.
tags:
  - source-knowledge-work-plugins
  - plugin-legal
  - plugin-component-skills
  - plugin-skill
  - category-uncategorized
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/legal/skills/review-contract/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/legal/skills/review-contract/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:34:16.322Z
content_sha256: 3a6413475f51adedbff130f4d5aabbeeacfb2abd323e0338bc91c21937fbfb76
---
|/data/knowledge-work-plugins-legal-skills-review-contract-skill|

---
stable_id: skills/knowledge-work-plugins-legal-skills-signature-request-skill
type: skills
title: signature-request
summary: Prepare and route a document for e-signature — run a pre-signature
  checklist, configure signing order, and send for execution. Use when a
  contract is finalized and ready to sign, when verifying entity names,
  exhibits, and signature blocks before sending, or when setting up an envelope
  with sequential or parallel signers.
tags:
  - source-knowledge-work-plugins
  - plugin-legal
  - plugin-component-skills
  - plugin-skill
  - category-uncategorized
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/legal/skills/signature-request/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/legal/skills/signature-request/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:34:16.195Z
content_sha256: bf702fbe7d21073c3e6952ee2c72f66bf6c56fc806b3abb7e44d7863d7534682
---
|/data/knowledge-work-plugins-legal-skills-signature-request-skill|

---
stable_id: skills/knowledge-work-plugins-legal-skills-triage-nda-skill
type: skills
title: triage-nda
summary: Rapidly triage an incoming NDA and classify it as GREEN (standard
  approval), YELLOW (counsel review), or RED (full legal review). Use when a new
  NDA arrives from sales or business development, when screening for embedded
  non-solicits, non-competes, or missing carveouts, or when deciding whether an
  NDA can be signed under standard delegation.
tags:
  - source-knowledge-work-plugins
  - plugin-legal
  - plugin-component-skills
  - plugin-skill
  - category-uncategorized
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/legal/skills/triage-nda/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/legal/skills/triage-nda/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:34:16.407Z
content_sha256: 767a8f6759268e003ee882af8dfb56579aca2121b9dc49a2c65c4e77de93f768
---
|/data/knowledge-work-plugins-legal-skills-triage-nda-skill|

---
stable_id: skills/knowledge-work-plugins-legal-skills-vendor-check-skill
type: skills
title: vendor-check
summary: Check the status of existing agreements with a vendor across all
  connected systems — CLM, CRM, email, and document storage — with gap analysis
  and upcoming deadlines. Use when onboarding or renewing a vendor, when you
  need a consolidated view of what's signed and what's missing (MSA, DPA, SOW),
  or when checking for approaching expirations and surviving obligations.
tags:
  - source-knowledge-work-plugins
  - plugin-legal
  - plugin-component-skills
  - plugin-skill
  - category-uncategorized
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/legal/skills/vendor-check/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/legal/skills/vendor-check/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:34:16.139Z
content_sha256: 38be57a5e9e959874d2cb78e8493211664bc452e6225cb5bdbb8b12e6f444d2e
---
|/data/knowledge-work-plugins-legal-skills-vendor-check-skill|

---
stable_id: skills/knowledge-work-plugins-operations-skills-capacity-plan-skill
type: skills
title: capacity-plan
summary: Plan resource capacity — workload analysis and utilization forecasting.
  Use when heading into quarterly planning, the team feels overallocated and you
  need the numbers, deciding whether to hire or deprioritize, or stress-testing
  whether upcoming projects fit the people you have.
tags:
  - source-knowledge-work-plugins
  - plugin-operations
  - plugin-component-skills
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/operations/skills/capacity-plan/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/operations/skills/capacity-plan/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:34:15.678Z
content_sha256: 3b8f1379471eae19e5be26c750681ad0c6054f4c8cdbf79c94309fcf46957ea8
---
|/data/knowledge-work-plugins-operations-skills-capacity-plan-skill|

---
stable_id: skills/knowledge-work-plugins-operations-skills-change-request-skill
type: skills
title: change-request
summary: Create a change management request with impact analysis and rollback
  plan. Use when proposing a system or process change that needs approval,
  preparing a change record for CAB review, documenting risk and rollback steps
  before a deployment, or planning stakeholder communications for a rollout.
tags:
  - source-knowledge-work-plugins
  - plugin-operations
  - plugin-component-skills
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/operations/skills/change-request/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/operations/skills/change-request/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:34:15.874Z
content_sha256: b1ee71cc1fecb22c7d27e2e00171f5d62fb54c405095b51098dacfea0447d8d7
---
|/data/knowledge-work-plugins-operations-skills-change-request-skill|

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
retrieved_at: 2026-03-31T07:31:16.054Z
content_sha256: 644d393abdfddc8c37f7a7804f601e7bbd476e95571e6dcb4d916e478ba8ebd5
---
|/data/knowledge-work-plugins-operations-skills-compliance-tracking-skill|

---
stable_id: skills/knowledge-work-plugins-operations-skills-process-doc-skill
type: skills
title: process-doc
summary: Document a business process — flowcharts, RACI, and SOPs. Use when
  formalizing a process that lives in someone's head, building a RACI to clarify
  who owns what, writing an SOP for a handoff or audit, or capturing the
  exceptions and edge cases of how work actually gets done.
tags:
  - source-knowledge-work-plugins
  - plugin-operations
  - plugin-component-skills
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/operations/skills/process-doc/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/operations/skills/process-doc/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:34:15.805Z
content_sha256: fceeeddb363e813ba831f9f2de1adb4c7e45ad179366bbb9ea9e40377abe96a9
---
|/data/knowledge-work-plugins-operations-skills-process-doc-skill|

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
retrieved_at: 2026-03-31T07:31:15.989Z
content_sha256: 14099838fdbfca24057e934fc22ed17f94629c5e9c9cec470f32e3063d0575f9
---
|/data/knowledge-work-plugins-operations-skills-process-optimization-skill|

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
retrieved_at: 2026-03-31T07:31:15.871Z
content_sha256: 82e29810a762c396a56f92bbd5c5afd252f7a07c6be69a246c28f7b82c4086d9
---
|/data/knowledge-work-plugins-operations-skills-risk-assessment-skill|

---
stable_id: skills/knowledge-work-plugins-operations-skills-runbook-skill
type: skills
title: runbook
summary: Create or update an operational runbook for a recurring task or
  procedure. Use when documenting a task that on-call or ops needs to run
  repeatably, turning tribal knowledge into exact step-by-step commands, adding
  troubleshooting and rollback steps to an existing procedure, or writing
  escalation paths for when things go wrong.
tags:
  - source-knowledge-work-plugins
  - plugin-operations
  - plugin-component-skills
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/operations/skills/runbook/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/operations/skills/runbook/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:34:15.618Z
content_sha256: c5c3eaa4c22fff96ec7239ce67eb3e100661b20a2818749e2f7ee21787233185
---
|/data/knowledge-work-plugins-operations-skills-runbook-skill|

---
stable_id: skills/knowledge-work-plugins-operations-skills-status-report-skill
type: skills
title: status-report
summary: Generate a status report with KPIs, risks, and action items. Use when
  writing a weekly or monthly update for leadership, summarizing project health
  with green/yellow/red status, surfacing risks and decisions that need
  stakeholder attention, or turning a pile of project tracker activity into a
  readable narrative.
tags:
  - source-knowledge-work-plugins
  - plugin-operations
  - plugin-component-skills
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/operations/skills/status-report/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/operations/skills/status-report/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:34:15.550Z
content_sha256: 8c3a21075294a5c5b7a1a7930613e53f0afbdbc12cf9e05d4bd08e6950c0a0d9
---
|/data/knowledge-work-plugins-operations-skills-status-report-skill|

---
stable_id: skills/knowledge-work-plugins-operations-skills-vendor-review-skill
type: skills
title: vendor-review
summary: Evaluate a vendor — cost analysis, risk assessment, and recommendation.
  Use when reviewing a new vendor proposal, deciding whether to renew or replace
  a contract, comparing two vendors side-by-side, or building a TCO breakdown
  and negotiation points before procurement sign-off.
tags:
  - source-knowledge-work-plugins
  - plugin-operations
  - plugin-component-skills
  - plugin-skill
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/operations/skills/vendor-review/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/operations/skills/vendor-review/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:34:15.745Z
content_sha256: c2a959a7ed068e34a83984cf223754062e6819deb0ba1ca33eb747b4cc808d5e
---
|/data/knowledge-work-plugins-operations-skills-vendor-review-skill|

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
retrieved_at: 2026-03-31T07:31:18.333Z
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
retrieved_at: 2026-03-31T07:31:18.505Z
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
retrieved_at: 2026-03-31T07:31:18.402Z
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
retrieved_at: 2026-03-31T07:31:18.903Z
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
retrieved_at: 2026-03-31T07:31:19.057Z
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
retrieved_at: 2026-03-31T07:31:19.002Z
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
retrieved_at: 2026-03-31T07:31:18.838Z
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
retrieved_at: 2026-03-31T07:31:18.768Z
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
retrieved_at: 2026-03-31T07:31:19.247Z
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
retrieved_at: 2026-03-31T07:31:19.163Z
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
retrieved_at: 2026-03-31T07:31:19.310Z
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
retrieved_at: 2026-03-31T07:31:18.562Z
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
retrieved_at: 2026-03-31T07:31:18.678Z
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
retrieved_at: 2026-03-31T07:31:18.619Z
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
retrieved_at: 2026-03-31T07:31:18.211Z
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
retrieved_at: 2026-03-31T07:31:18.280Z
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
retrieved_at: 2026-03-31T07:31:17.947Z
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
retrieved_at: 2026-03-31T07:31:17.769Z
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
retrieved_at: 2026-03-31T07:31:18.010Z
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
retrieved_at: 2026-03-31T07:31:18.095Z
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
retrieved_at: 2026-03-31T07:31:17.850Z
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
retrieved_at: 2026-03-31T07:31:18.156Z
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
retrieved_at: 2026-03-31T07:31:19.683Z
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
retrieved_at: 2026-03-31T07:31:19.742Z
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
retrieved_at: 2026-03-31T07:31:19.619Z
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
retrieved_at: 2026-03-31T07:31:19.553Z
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
retrieved_at: 2026-03-31T07:31:19.500Z
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
retrieved_at: 2026-03-31T07:31:19.441Z
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
retrieved_at: 2026-03-31T07:31:19.379Z
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
retrieved_at: 2026-03-31T07:30:56.527Z
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
retrieved_at: 2026-03-31T07:30:55.719Z
content_sha256: 9f91d501b432b0961ffd1ba932f23a2b48ed33f3b9cb3754aeeab91b4f70b712
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

  </HARD-GATE>
tags:
  - obra
  - source-obra-superpowers
source_url: https://raw.githubusercontent.com/obra/superpowers/main/skills/brainstorming/SKILL.md
license: ""
upstream_ref: https://github.com/obra/superpowers/blob/main/skills/brainstorming/SKILL.md
github_stars: 101712
github_forks: 8129
github_is_organization: false
retrieved_at: 2026-03-31T07:30:05.709Z
content_sha256: bba47904a7f6bbee3bf8a107ebbe84e65d392be683bbb898ded736b29e415f90
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

  You delegate tasks to specialized agents with isolated context. By precisely
  crafting their instructions and context, you ensure they stay focused and
  succeed at their task. They should never inherit your session's context or
  history — you construct exactly what they need. This also preserves your own
  context for coordination work.

  When you have multiple unrelated failures (different test files, different
  subsystems, different bugs), investigating them sequentially wastes time. Each
  investigation is independent and can happen in parallel.

  **Core principle:** Dispatch one agent per independent problem domain. Let
  them work concurrently.

  ## When to Use
tags:
  - obra
  - source-obra-superpowers
source_url: https://raw.githubusercontent.com/obra/superpowers/main/skills/dispatching-parallel-agents/SKILL.md
license: ""
upstream_ref: https://github.com/obra/superpowers/blob/main/skills/dispatching-parallel-agents/SKILL.md
github_stars: 101712
github_forks: 8129
github_is_organization: false
retrieved_at: 2026-03-31T07:30:05.757Z
content_sha256: 76806091c7f923ba2596546b19cccd98a08e57a68745df77c3a7b998fe838e2b
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

  Load plan, review critically, execute all tasks, report when complete.

  **Announce at start:** "I'm using the executing-plans skill to implement this
  plan."

  **Note:** Tell your human partner that Superpowers works much better with
  access to subagents. The quality of its work will be significantly higher if
  run on a platform with subagent support (such as Claude Code or Codex). If
  subagents are available, use superpowers:subagent-driven-development instead
  of this skill.

  ## The Process
tags:
  - obra
  - source-obra-superpowers
source_url: https://raw.githubusercontent.com/obra/superpowers/main/skills/executing-plans/SKILL.md
license: ""
upstream_ref: https://github.com/obra/superpowers/blob/main/skills/executing-plans/SKILL.md
github_stars: 101712
github_forks: 8129
github_is_organization: false
retrieved_at: 2026-03-31T07:30:05.810Z
content_sha256: a711f83fb762e2ea0fa151f598893da9911a408895c91cc7a7e0770dd59a27b3
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
github_stars: 101712
github_forks: 8129
github_is_organization: false
retrieved_at: 2026-03-31T07:30:05.837Z
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
github_stars: 101712
github_forks: 8129
github_is_organization: false
retrieved_at: 2026-03-31T07:30:05.840Z
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
  cascade. The reviewer gets precisely crafted context for evaluation — never
  your session's history. This keeps the reviewer focused on the work product,
  not your thought process, and preserves your own context for continued work.

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
github_stars: 101712
github_forks: 8129
github_is_organization: false
retrieved_at: 2026-03-31T07:30:05.890Z
content_sha256: a5ff68586ccf62d1803cedeb71d60fd96ec05591d29c8d123196117eefd34cd0
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

  **Why subagents:** You delegate tasks to specialized agents with isolated
  context. By precisely crafting their instructions and context, you ensure they
  stay focused and succeed at their task. They should never inherit your
  session's context or history — you construct exactly what they need. This also
  preserves your own context for coordination work.

  **Core principle:** Fresh subagent per task + two-stage review (spec then
  quality) = high quality, fast iteration

  ## When to Use

  ```dot
tags:
  - obra
  - source-obra-superpowers
source_url: https://raw.githubusercontent.com/obra/superpowers/main/skills/subagent-driven-development/SKILL.md
license: ""
upstream_ref: https://github.com/obra/superpowers/blob/main/skills/subagent-driven-development/SKILL.md
github_stars: 101712
github_forks: 8129
github_is_organization: false
retrieved_at: 2026-03-31T07:30:05.942Z
content_sha256: 081ad3869e55c80bf8f890b4768a90c0e8057daf94b1b6fadebfc85ea5b8304a
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
github_stars: 101712
github_forks: 8129
github_is_organization: false
retrieved_at: 2026-03-31T07:30:06.000Z
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
github_stars: 101712
github_forks: 8129
github_is_organization: false
retrieved_at: 2026-03-31T07:30:06.026Z
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
github_stars: 101712
github_forks: 8129
github_is_organization: false
retrieved_at: 2026-03-31T07:30:06.052Z
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

  <SUBAGENT-STOP>

  If you were dispatched as a subagent to execute a specific task, skip this
  skill.

  </SUBAGENT-STOP>

  <EXTREMELY-IMPORTANT>

  If you think there is even a 1% chance a skill might apply to what you are
  doing, you ABSOLUTELY MUST invoke the skill.

  IF A SKILL APPLIES TO YOUR TASK, YOU DO NOT HAVE A CHOICE. YOU MUST USE IT.
tags:
  - obra
  - source-obra-superpowers
source_url: https://raw.githubusercontent.com/obra/superpowers/main/skills/using-superpowers/SKILL.md
license: ""
upstream_ref: https://github.com/obra/superpowers/blob/main/skills/using-superpowers/SKILL.md
github_stars: 101712
github_forks: 8129
github_is_organization: false
retrieved_at: 2026-03-31T07:30:06.111Z
content_sha256: 5fa548a85ce639dc6a2ea53607f9d405363c9b935004d0d95dc16e9629752d00
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
github_stars: 101712
github_forks: 8129
github_is_organization: false
retrieved_at: 2026-03-31T07:30:06.172Z
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
github_stars: 101712
github_forks: 8129
github_is_organization: false
retrieved_at: 2026-03-31T07:30:06.227Z
content_sha256: 90056bad3d5f196fa7c9fec0ffe592e6d9c86bc983e406642a51d1a4198b7024
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
github_stars: 101712
github_forks: 8129
github_is_organization: false
retrieved_at: 2026-03-31T07:30:06.230Z
content_sha256: 38ba648975ae6ba512d6695676f146163db61a496b867f716f4bdfb0ee3aca3e
---
|/data/obra-writing-skills|

---
stable_id: skills/openai-curated-aspnet-core
type: skills
title: openai-curated-aspnet-core
summary: >-
  ---

  name: aspnet-core

  description: Build, review, refactor, or architect ASP.NET Core web
  applications using current official guidance for .NET web development. Use
  when working on Blazor Web Apps, Razor Pages, MVC, Minimal APIs,
  controller-based Web APIs, SignalR, gRPC, middleware, dependency injection,
  configuration, authentication, authorization, testing, performance,
  deployment, or ASP.NET Core upgrades.

  ---

  # ASP.NET Core

  ## Overview

  Choose the right ASP.NET Core application model, compose the host and request
  pipeline correctly, and implement features in the framework style Microsoft
  documents today.

  Load the smallest set of references that fits the task. Do not load every
  reference by default.

  ## Workflow

  1. Confirm the target framework, SDK, and current app model.
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/aspnet-core/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/aspnet-core/SKILL.md
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-03-31T07:30:03.053Z
content_sha256: 1f487ef3565e5ac1ee6c93cbeb9ac666292b30285877c82ddb0a77c9777fe92f
---
|/data/openai-curated-aspnet-core|

---
stable_id: skills/openai-curated-chatgpt-apps
type: skills
title: openai-curated-chatgpt-apps
summary: >-
  ---

  name: chatgpt-apps

  description: Build, scaffold, refactor, and troubleshoot ChatGPT Apps SDK
  applications that combine an MCP server and widget UI. Use when Codex needs to
  design tools, register UI resources, wire the MCP Apps bridge or ChatGPT
  compatibility APIs, apply Apps SDK metadata or CSP or domain settings, or
  produce a docs-aligned project scaffold. Prefer a docs-first workflow by
  invoking the openai-docs skill or OpenAI developer docs MCP tools before
  generating code.

  ---

  # ChatGPT Apps

  ## Overview

  Scaffold ChatGPT Apps SDK implementations with a docs-first, example-first
  workflow, then generate code that follows current Apps SDK and MCP Apps bridge
  patterns.

  Use this skill to produce:

  - A primary app-archetype classification and repo-shape decision

  - A tool plan (names, schemas, annotations, outputs)
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/chatgpt-apps/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/chatgpt-apps/SKILL.md
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-03-31T07:30:03.121Z
content_sha256: c3a13a659ce26e9d067b5a97c321e8abec6d8e878afce31b7e841dfcf2635c3a
---
|/data/openai-curated-chatgpt-apps|

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
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-03-31T07:30:03.183Z
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
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-03-31T07:30:03.270Z
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
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-03-31T07:30:03.348Z
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
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-03-31T07:30:03.463Z
content_sha256: 5b11f7c8d0ce4c047b401323e7b8fe6559bd3162a3397bf5248634a5444609d5
---
|/data/openai-curated-figma|

---
stable_id: skills/openai-curated-figma-implement-design
type: skills
title: openai-curated-figma-implement-design
summary: >-
  ---

  name: figma-implement-design

  description: Translates Figma designs into production-ready application code
  with 1:1 visual fidelity. Use when implementing UI code from Figma files, when
  user mentions "implement design", "generate code", "implement component",
  provides Figma URLs, or asks to build components matching Figma specs. For
  Figma canvas writes via `use_figma`, use `figma-use`.

  ---

  # Implement Design

  ## Overview

  This skill provides a structured workflow for translating Figma designs into
  production-ready code with pixel-perfect accuracy. It ensures consistent
  integration with the Figma MCP server, proper use of design tokens, and 1:1
  visual parity with designs.

  ## Skill Boundaries

  - Use this skill when the deliverable is code in the user's repository.

  - If the user asks to create/edit/delete nodes inside Figma itself, switch to
  [figma-use](../figma-use/SKILL.md).
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/figma-implement-design/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/figma-implement-design/SKILL.md
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-03-31T07:30:03.402Z
content_sha256: 63f3d12d444547bbf68c10a12982b1f42e0f6e26fc074324564a13184d4b15ad
---
|/data/openai-curated-figma-implement-design|

---
stable_id: skills/openai-curated-frontend-skill
type: skills
title: openai-curated-frontend-skill
summary: >-
  ---

  name: frontend-skill

  description: Use when the task asks for a visually strong landing page,
  website, app, prototype, demo, or game UI. This skill enforces restrained
  composition, image-led hierarchy, cohesive content structure, and tasteful
  motion while avoiding generic cards, weak branding, and UI clutter.

  ---

  # Frontend Skill

  Use this skill when the quality of the work depends on art direction,
  hierarchy, restraint, imagery, and motion rather than component count.

  Goal: ship interfaces that feel deliberate, premium, and current. Default
  toward award-level composition: one big idea, strong imagery, sparse copy,
  rigorous spacing, and a small number of memorable motions.

  ## Working Model

  Before building, write three things:

  - visual thesis: one sentence describing mood, material, and energy
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/frontend-skill/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/frontend-skill/SKILL.md
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-03-31T07:30:03.518Z
content_sha256: d367b2d22825d74c169475507e7ff109b81c1e9c20b2de3421fb19fcfbe3329b
---
|/data/openai-curated-frontend-skill|

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
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-03-31T07:30:03.583Z
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
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-03-31T07:30:03.649Z
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

  description: "Generate or edit raster images when the task benefits from
  AI-created bitmap visuals such as photos, illustrations, textures, sprites,
  mockups, or transparent-background cutouts. Use when Codex should create a
  brand-new image, transform an existing image, or derive visual variants from
  references, and the output should be a bitmap asset rather than repo-native
  code or vector. Do not use when the task is better handled by editing existing
  SVG/vector/code-native assets, extending an established icon or logo system,
  or building the visual directly in HTML/CSS/canvas."

  ---

  # Image Generation Skill

  Generates or edits images for the current project (for example website assets,
  game assets, UI mockups, product mockups, wireframes, logo design,
  photorealistic images, or infographics).

  ## Top-level modes and rules

  This skill has exactly two top-level modes:

  - **Default built-in tool mode (preferred):** built-in `image_gen` tool for
  normal image generation and editing. Does not require `OPENAI_API_KEY`.

  - **Fallback CLI mode (explicit-only):** `scripts/image_gen.py` CLI. Use only
  when the user explicitly asks for the CLI path. Requires `OPENAI_API_KEY`.
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/imagegen/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/imagegen/SKILL.md
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-03-31T07:30:03.706Z
content_sha256: 826d05b806d51fa81cd650f1c0854b0a1f7fbccd1b152c588ded1797a2e7218f
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
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-03-31T07:30:03.758Z
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
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-03-31T07:30:03.811Z
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
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-03-31T07:30:03.918Z
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
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-03-31T07:30:03.993Z
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
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-03-31T07:30:04.042Z
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
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-03-31T07:30:04.125Z
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
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-03-31T07:30:04.182Z
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
  and needs up-to-date official documentation with citations, help choosing the
  latest model for a use case, or explicit GPT-5.4 upgrade and prompt-upgrade
  guidance; prioritize OpenAI docs MCP tools, use bundled references only as
  helper context, and restrict any fallback browsing to official OpenAI
  domains."

  ---

  # OpenAI Docs

  Provide authoritative, current guidance from OpenAI developer docs using the
  developers.openai.com MCP server. Always prioritize the developer docs MCP
  tools over web.run for OpenAI-related questions. This skill may also load
  targeted files from `references/` for model-selection and GPT-5.4-specific
  requests, but current OpenAI docs remain authoritative. Only if the MCP server
  is installed and returns no meaningful results should you fall back to web
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
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-03-31T07:30:04.270Z
content_sha256: 8d8ed6246315074b8fe51e1251dd3e2ef42e54d8e9dff892c70acf88ab0e4235
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
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-03-31T07:30:04.339Z
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
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-03-31T07:30:04.469Z
content_sha256: 0ffaabcc8e0990627c4725f18bf1c7955534a796c1c199e872909de2013ce6a8
---
|/data/openai-curated-playwright|

---
stable_id: skills/openai-curated-playwright-interactive
type: skills
title: openai-curated-playwright-interactive
summary: >-
  ---

  name: "playwright-interactive"

  description: "Persistent browser and Electron interaction through `js_repl`
  for fast iterative UI debugging."

  ---

  # Playwright Interactive Skill

  Use a persistent `js_repl` Playwright session to debug local web or Electron
  apps, keep the same handles alive across iterations, and run functional plus
  visual QA without restarting the whole toolchain unless the process ownership
  changed.

  ## Preconditions

  - `js_repl` must be enabled for this skill.

  - If `js_repl` is missing, enable it in `~/.codex/config.toml`:

  ```toml
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/playwright-interactive/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/playwright-interactive/SKILL.md
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-03-31T07:30:04.393Z
content_sha256: f6c1155d923e6ae3ccc12abfef2266f119f8e9546df2ddeee1f5eb369845a0a1
---
|/data/openai-curated-playwright-interactive|

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
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-03-31T07:30:04.532Z
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
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-03-31T07:30:04.609Z
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
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-03-31T07:30:04.668Z
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
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-03-31T07:30:04.715Z
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
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-03-31T07:30:04.840Z
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
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-03-31T07:30:04.893Z
content_sha256: b598ea447ad6bec923f5c3879ace25e4a7f1368a7eac019b5c0e2f79a36322c6
---
|/data/openai-curated-sentry|

---
stable_id: skills/openai-curated-slides
type: skills
title: openai-curated-slides
summary: >-
  ---

  name: slides

  description: Create and edit presentation slide decks (`.pptx`) with
  PptxGenJS, bundled layout helpers, and render/validation utilities. Use when
  tasks involve building a new PowerPoint deck, recreating slides from
  screenshots/PDFs/reference decks, modifying slide content while preserving
  editable output, adding charts/diagrams/visuals, or diagnosing layout issues
  such as overflow, overlaps, and font substitution.

  ---

  # Slides

  ## Overview

  Use PptxGenJS for slide authoring. Do not use `python-pptx` for deck
  generation unless the task is inspection-only; keep editable output in
  JavaScript and deliver both the `.pptx` and the source `.js`.

  Keep work in a task-local directory. Only copy final artifacts to the
  requested destination after rendering and validation pass.

  ## Bundled Resources

  - `assets/pptxgenjs_helpers/`: Copy this folder into the deck workspace and
  import it locally instead of reimplementing helper logic.
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/slides/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/slides/SKILL.md
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-03-31T07:30:04.981Z
content_sha256: 57ee0941f872546029bc45b5b0bd58d4a02d88b84d4e8e4275c466da5451efa6
---
|/data/openai-curated-slides|

---
stable_id: skills/openai-curated-sora
type: skills
title: openai-curated-sora
summary: >-
  ---

  name: "sora"

  description: "Use when the user asks to generate, edit, extend, poll, list,
  download, or delete Sora videos, create reusable non-human Sora character
  references, or run local multi-video queues via the bundled CLI
  (`scripts/sora.py`); includes requests like: (i) generate AI video, (ii) edit
  this Sora clip, (iii) extend this video, (iv) create a character reference,
  (v) download video/thumbnail/spritesheet, and (vi) Sora batch planning;
  requires `OPENAI_API_KEY` and Sora API access."

  ---

  # Sora Video Generation Skill

  Creates or manages Sora video jobs for the current project (product demos,
  marketing spots, cinematic shots, social clips, UI mocks). Defaults to
  `sora-2` with structured prompt augmentation and prefers the bundled CLI for
  deterministic runs. Note: `$sora` is a skill tag in prompts, not a shell
  command.

  ## When to use

  - Generate a new video clip from a prompt

  - Create a reusable character reference from a short non-human source clip

  - Edit an existing generated video with a targeted prompt change
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/sora/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/sora/SKILL.md
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-03-31T07:30:05.024Z
content_sha256: 4e83510be2203188e02e6c8eca9e53d714a1e689e8aeef2eb37be42bbeab7eee
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
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-03-31T07:30:05.078Z
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
  formatting spreadsheets (`.xlsx`, `.csv`, `.tsv`) with formula-aware
  workflows, cached recalculation, and visual review."

  ---

  # Spreadsheet Skill

  ## When to use

  - Create new workbooks with formulas, formatting, and structured layouts.

  - Read or analyze tabular data (filter, aggregate, pivot, compute metrics).

  - Modify existing workbooks without breaking formulas, references, or
  formatting.

  - Visualize data with charts, summary tables, and sensible spreadsheet
  styling.
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/spreadsheet/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/spreadsheet/SKILL.md
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-03-31T07:30:05.126Z
content_sha256: 36baea99e96c77c13d15d24f9d53cd072ccbc120e810bf4e68049edb5b0f1d65
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
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-03-31T07:30:05.216Z
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
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-03-31T07:30:05.276Z
content_sha256: f4a6cbfbb378a320fae179a79f727a881d19677e9b3db96ed49d2dc02a74fa46
---
|/data/openai-curated-vercel-deploy|

---
stable_id: skills/openai-curated-winui-app
type: skills
title: openai-curated-winui-app
summary: >-
  ---

  name: winui-app

  description: Bootstrap, develop, and design modern WinUI 3 desktop
  applications with C# and the Windows App SDK using official Microsoft
  guidance, WinUI Gallery patterns, Windows App SDK samples, and
  CommunityToolkit components. Use when creating a brand new app, preparing a
  machine for WinUI, reviewing, refactoring, planning, troubleshooting,
  environment-checking, or setting up WinUI 3 XAML, controls, navigation,
  windowing, theming, accessibility, responsiveness, performance, deployment, or
  related Windows app design and development work.

  ---

  # WinUI App

  Use this skill for WinUI 3 and Windows App SDK work that needs grounded setup
  guidance, app bootstrap, modern Windows UX decisions, or concrete
  implementation patterns.

  ## Required Flow

  1. Classify the task as environment/setup, new-app bootstrap, design,
  implementation, review, or troubleshooting.

  2. If the task is about preparing a machine for WinUI, auditing readiness, or
  creating a brand new app, start with the bundled setup-and-scaffold flow in
  this skill before broader design, implementation, or troubleshooting work:
     - Pick the app name when the request is for a new app.
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/winui-app/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/winui-app/SKILL.md
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-03-31T07:30:05.348Z
content_sha256: 917341ec9eb688d73e21362910a7178a92b2ae49544b7d8f17ee9e19adfe2ea8
---
|/data/openai-curated-winui-app|

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
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-03-31T07:30:05.418Z
content_sha256: 2b4583b296a3a043b9002cd74e3ca5407fce832598dcd428272da08a9839f64b
---
|/data/openai-curated-yeet|

---
stable_id: skills/openai-system-openai-docs
type: skills
title: openai-system-openai-docs
summary: >-
  ---

  name: "openai-docs"

  description: "Use when the user asks how to build with OpenAI products or APIs
  and needs up-to-date official documentation with citations, help choosing the
  latest model for a use case, or explicit GPT-5.4 upgrade and prompt-upgrade
  guidance; prioritize OpenAI docs MCP tools, use bundled references only as
  helper context, and restrict any fallback browsing to official OpenAI
  domains."

  ---

  # OpenAI Docs

  Provide authoritative, current guidance from OpenAI developer docs using the
  developers.openai.com MCP server. Always prioritize the developer docs MCP
  tools over web.run for OpenAI-related questions. This skill may also load
  targeted files from `references/` for model-selection and GPT-5.4-specific
  requests, but current OpenAI docs remain authoritative. Only if the MCP server
  is installed and returns no meaningful results should you fall back to web
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
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.system/openai-docs/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.system/openai-docs/SKILL.md
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-03-31T07:30:05.494Z
content_sha256: 8d8ed6246315074b8fe51e1251dd3e2ef42e54d8e9dff892c70acf88ab0e4235
---
|/data/openai-system-openai-docs|

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
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-03-31T07:30:05.556Z
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
  provide other locations.

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
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-03-31T07:30:05.638Z
content_sha256: df58efeb75a6001d733701e7d73e24dd71b94a2a0016971f0bcfe097217888a5
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
retrieved_at: 2026-03-31T07:30:56.991Z
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

  description: Use when deploying a self-hosted AI agent gateway, configuring
  multi-channel messaging (WhatsApp, Telegram, Discord, iMessage), managing
  agent workspaces and sessions, building plugins or skills, setting up
  automation (hooks, cron, webhooks), or troubleshooting gateway operations.

  metadata:
      mintlify-proj: clawdbot
      version: "1.0"
  ---

  # OpenClaw Skill Reference

  ## Product Summary

  OpenClaw is a self-hosted gateway that connects messaging apps (WhatsApp,
  Telegram, Discord, iMessage, and more) to AI agents. The Gateway runs on any
  OS and manages sessions, routing, tool execution, and channel delivery. Key
  files: `~/.openclaw/openclaw.json` (config), `~/.openclaw/workspace/` (agent
  workspace), `~/.openclaw/skills/` (local skills). Primary CLI: `openclaw` with
  subcommands for setup, config, channels, agents, sessions, and gateway
  management. See https://docs.openclaw.ai for full documentation.
tags: []
source_url: https://docs.openclaw.ai/skill.md
license: ""
upstream_ref: ""
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:30:56.876Z
content_sha256: f9510cb8026475085f2c66ffba453bd39c09f4868dcdad1e5063f9bc37ce4e6a
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
retrieved_at: 2026-03-31T07:30:57.083Z
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
retrieved_at: 2026-03-31T07:30:57.426Z
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
retrieved_at: 2026-03-31T07:30:57.547Z
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
retrieved_at: 2026-03-31T07:30:57.714Z
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
retrieved_at: 2026-03-31T07:30:57.331Z
content_sha256: 54f9410a05f97b39ebf001a8589174fe3ca028c37fdfcd5856003eca920c5a1e
---
|/data/openclaw-mrgoodb-zendesk|

---
stable_id: skills/openclaw-openclaw-a0x-agents
type: skills
title: a0x-agents
summary: "Two superpowers for AI agents: a collective brain and a Base."
tags:
  - openclaw
  - source-awesome-openclaw-skills
  - category-agent-to-agent-protocols
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/claucondor/a0x-agents/SKILL.md
license: ""
upstream_ref: ""
github_stars: 2898
github_forks: 848
github_is_organization: true
retrieved_at: 2026-03-31T07:34:25.008Z
content_sha256: d34c635314cc3160a94d06ad0bf6450bdfa560c20e17fe9cb04125fb6e78bf52
---
|/data/openclaw-openclaw-a0x-agents|

---
stable_id: skills/openclaw-openclaw-agent-im
type: skills
title: agent-im
summary: Agent messaging, discovery, web context, and document parsing.
tags:
  - openclaw
  - source-awesome-openclaw-skills
  - category-agent-to-agent-protocols
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/ooxxxxoo/agent-im/Skill.md
license: ""
upstream_ref: ""
github_stars: 2898
github_forks: 848
github_is_organization: true
retrieved_at: 2026-03-31T07:34:46.273Z
content_sha256: 8a9bba0e541aeda6c812151a1a057e7bcd5267e78791c0fb73f30d2a3d6feb8f
---
|/data/openclaw-openclaw-agent-im|

---
stable_id: skills/openclaw-openclaw-civic-nexus
type: skills
title: civic-nexus
summary: Connect to Civic Nexus MCP for 100+ integrations.
tags:
  - openclaw
  - source-awesome-openclaw-skills
  - category-agent-to-agent-protocols
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/tyronemichael/civic-nexus/SKILL.md
license: ""
upstream_ref: ""
github_stars: 2898
github_forks: 848
github_is_organization: true
retrieved_at: 2026-03-31T07:35:31.299Z
content_sha256: 922383e53bc0ba2f0b50d8fe6ac9ba17c5096ba244c31c08375f8497ee5f3de9
---
|/data/openclaw-openclaw-civic-nexus|

---
stable_id: skills/openclaw-openclaw-claw-skill-guard
type: skills
title: claw-skill-guard
summary: Security scanner for OpenClaw skills.
tags:
  - openclaw
  - source-awesome-openclaw-skills
  - category-agent-to-agent-protocols
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/vincentchan/claw-skill-guard/SKILL.md
license: ""
upstream_ref: ""
github_stars: 2898
github_forks: 848
github_is_organization: true
retrieved_at: 2026-03-31T07:35:32.350Z
content_sha256: 90662b922d641b2ff4b96086fb0a44bbe2d96af2ebe2db6af239e7d43a0e346d
---
|/data/openclaw-openclaw-claw-skill-guard|

---
stable_id: skills/openclaw-openclaw-claw-to-claw
type: skills
title: claw-to-claw
summary: Coordinate with other AI agents on behalf of your human.
tags:
  - openclaw
  - source-awesome-openclaw-skills
  - category-agent-to-agent-protocols
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/tonacy/claw-to-claw/SKILL.md
license: ""
upstream_ref: ""
github_stars: 2898
github_forks: 848
github_is_organization: true
retrieved_at: 2026-03-31T07:35:32.569Z
content_sha256: 41791da180c2b3cd9b3bed0cd8247c897dd71e45ca977eb07600ef7312d713e5
---
|/data/openclaw-openclaw-claw-to-claw|

---
stable_id: skills/openclaw-openclaw-clawtoclaw
type: skills
title: clawtoclaw
summary: Coordinate with other AI agents on behalf of your human.
tags:
  - openclaw
  - source-awesome-openclaw-skills
  - category-agent-to-agent-protocols
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/tonacy/clawtoclaw/SKILL.md
license: ""
upstream_ref: ""
github_stars: 2898
github_forks: 848
github_is_organization: true
retrieved_at: 2026-03-31T07:35:35.065Z
content_sha256: 666ece696422f4697f96df3a25f2d2ed1d5af93657d31c27102c6375d9f3d8fc
---
|/data/openclaw-openclaw-clawtoclaw|

---
stable_id: skills/openclaw-openclaw-dating
type: skills
title: dating
summary: Meet other AI agents and make friends on the social platform built.
tags:
  - openclaw
  - source-awesome-openclaw-skills
  - category-agent-to-agent-protocols
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/lucasgeeksinthewood/dating/SKILL.md
license: ""
upstream_ref: ""
github_stars: 2898
github_forks: 848
github_is_organization: true
retrieved_at: 2026-03-31T07:35:40.832Z
content_sha256: 4ee2e18eb9e89f75ef7e83c6e309b005736fe41567f5e757731e63fb449ac6f4
---
|/data/openclaw-openclaw-dating|

---
stable_id: skills/openclaw-openclaw-glitchward-shield
type: skills
title: glitchward-shield
summary: Protect your OpenClaw assistant from prompt injection.
tags:
  - openclaw
  - source-awesome-openclaw-skills
  - category-agent-to-agent-protocols
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/eyeskiller/glitchward-shield/SKILL.md
license: ""
upstream_ref: ""
github_stars: 2898
github_forks: 848
github_is_organization: true
retrieved_at: 2026-03-31T07:35:49.513Z
content_sha256: e3d5e64547e6083cf5b5acfc71eab9629678fbcc58fd781326c6cce6b8ba2ecb
---
|/data/openclaw-openclaw-glitchward-shield|

---
stable_id: skills/openclaw-openclaw-heimdall
type: skills
title: heimdall
summary: Scan OpenClaw skills for malicious patterns before installation.
tags:
  - openclaw
  - source-awesome-openclaw-skills
  - category-agent-to-agent-protocols
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/henrino3/heimdall/SKILL.md
license: ""
upstream_ref: ""
github_stars: 2898
github_forks: 848
github_is_organization: true
retrieved_at: 2026-03-31T07:35:50.586Z
content_sha256: 6f45c7d92bc6aedeecd17006fb95638a49b39fa00a8c2c67c5a99626b51ad0e2
---
|/data/openclaw-openclaw-heimdall|

---
stable_id: skills/openclaw-openclaw-local-approvals
type: skills
title: local-approvals
summary: Local approval system for managing agent permissions.
tags:
  - openclaw
  - source-awesome-openclaw-skills
  - category-agent-to-agent-protocols
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/shaiss/local-approvals/SKILL.md
license: ""
upstream_ref: ""
github_stars: 2898
github_forks: 848
github_is_organization: true
retrieved_at: 2026-03-31T07:35:53.260Z
content_sha256: 58ae7caa2a019f3f1b4099e4f9a3f1d1c6fb8ccb869f348c7a6d8fb597e42a36
---
|/data/openclaw-openclaw-local-approvals|

---
stable_id: skills/openclaw-openclaw-og-openclawguard
type: skills
title: og-openclawguard
summary: Security and vulnerability scanner for OpenClaw code.
tags:
  - openclaw
  - source-awesome-openclaw-skills
  - category-agent-to-agent-protocols
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/thomaslwang/og-openclawguard/SKILL.md
license: ""
upstream_ref: ""
github_stars: 2898
github_forks: 848
github_is_organization: true
retrieved_at: 2026-03-31T07:35:56.957Z
content_sha256: 5b23a1541cb220536b9a2267e014ddeb7d077e1746eb4f3c74577bb7fdceadfe
---
|/data/openclaw-openclaw-og-openclawguard|

---
stable_id: skills/openclaw-openclaw-towns-protocol
type: skills
title: towns-protocol
summary: Use when building Towns Protocol bots - covers SDK.
tags:
  - openclaw
  - source-awesome-openclaw-skills
  - category-agent-to-agent-protocols
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/andreyz/towns-protocol/SKILL.md
license: ""
upstream_ref: ""
github_stars: 2898
github_forks: 848
github_is_organization: true
retrieved_at: 2026-03-31T07:36:00.169Z
content_sha256: 1138e68c03bb148203f2a23e8b94f4983d77147f9d56f6258878489511615108
---
|/data/openclaw-openclaw-towns-protocol|

---
stable_id: skills/openclaw-openclaw-udau
type: skills
title: udau
summary: "description: Union protocol for AI agents."
tags:
  - openclaw
  - source-awesome-openclaw-skills
  - category-agent-to-agent-protocols
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/nicoacosta/udau/SKILL.md
license: ""
upstream_ref: ""
github_stars: 2898
github_forks: 848
github_is_organization: true
retrieved_at: 2026-03-31T07:36:00.332Z
content_sha256: df61890ba4455303d78ce3c7876d46381caac1a5fb12cffe6441f2392a2e0b57
---
|/data/openclaw-openclaw-udau|

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
  version: 3.2.0

  author: Leo 🦁
tags: []
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/shaharsha/google-maps/SKILL.md
license: ""
upstream_ref: ""
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:30:57.234Z
content_sha256: 33fb37210eb59fce0be16d87ff21885a956ae9ed485d3403be87fe7c4c582004
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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:30:53.923Z
content_sha256: 1b9dad2ae6d3ac9972de811c414394946b7f249419a45393b3c9f062ef7b0d4d
---
|/data/skills-sh-199-biotechnologies-claude-deep-research-skill-deep-research|

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
retrieved_at: 2026-03-31T07:31:11.330Z
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
github_stars: 457
github_forks: 61
github_is_organization: false
retrieved_at: 2026-03-31T07:30:27.103Z
content_sha256: e8c53b1e0715199cac2fadf6ec4df61b375df22a2b752b180ceea81c188ca888
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
retrieved_at: 2026-03-31T07:34:18.093Z
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
retrieved_at: 2026-03-31T07:31:13.353Z
content_sha256: 52eb12b93cd100e2d15e919712468a03bac3041fd4d516cc8ef45ce9960f4dc1
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
retrieved_at: 2026-03-31T07:31:13.592Z
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
github_stars: 1464
github_forks: 132
github_is_organization: false
retrieved_at: 2026-03-31T07:30:52.576Z
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
github_stars: 1464
github_forks: 132
github_is_organization: false
retrieved_at: 2026-03-31T07:30:50.377Z
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
retrieved_at: 2026-03-31T07:34:19.683Z
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
retrieved_at: 2026-03-31T07:34:18.930Z
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
retrieved_at: 2026-03-31T07:31:12.369Z
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
github_stars: 558
github_forks: 59
github_is_organization: true
retrieved_at: 2026-03-31T07:30:50.658Z
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
github_stars: 558
github_forks: 59
github_is_organization: true
retrieved_at: 2026-03-31T07:30:52.965Z
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
retrieved_at: 2026-03-31T07:31:12.238Z
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
github_stars: 558
github_forks: 59
github_is_organization: true
retrieved_at: 2026-03-31T07:30:52.506Z
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
github_stars: 558
github_forks: 59
github_is_organization: true
retrieved_at: 2026-03-31T07:30:52.728Z
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
retrieved_at: 2026-03-31T07:31:12.178Z
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
github_stars: 558
github_forks: 59
github_is_organization: true
retrieved_at: 2026-03-31T07:30:51.728Z
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
retrieved_at: 2026-03-31T07:34:18.221Z
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
github_stars: 558
github_forks: 59
github_is_organization: true
retrieved_at: 2026-03-31T07:30:53.291Z
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
github_stars: 558
github_forks: 59
github_is_organization: true
retrieved_at: 2026-03-31T07:30:53.520Z
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
retrieved_at: 2026-03-31T07:31:11.821Z
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
github_stars: 4218
github_forks: 211
github_is_organization: false
retrieved_at: 2026-03-31T07:30:34.787Z
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
github_stars: 4218
github_forks: 211
github_is_organization: false
retrieved_at: 2026-03-31T07:30:49.988Z
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
retrieved_at: 2026-03-31T07:31:11.756Z
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
github_stars: 4218
github_forks: 211
github_is_organization: false
retrieved_at: 2026-03-31T07:30:51.430Z
content_sha256: cd4ef071b1ad40f3fb8ab5ed7c5f4743628456dd8e0bcfc25f246be64992726b
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
retrieved_at: 2026-03-31T07:31:11.940Z
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
retrieved_at: 2026-03-31T07:31:20.184Z
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
github_stars: 4218
github_forks: 211
github_is_organization: false
retrieved_at: 2026-03-31T07:30:27.737Z
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
github_stars: 4218
github_forks: 211
github_is_organization: false
retrieved_at: 2026-03-31T07:30:50.985Z
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
github_stars: 4218
github_forks: 211
github_is_organization: false
retrieved_at: 2026-03-31T07:30:28.333Z
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
github_stars: 4218
github_forks: 211
github_is_organization: false
retrieved_at: 2026-03-31T07:30:27.216Z
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
github_stars: 4218
github_forks: 211
github_is_organization: false
retrieved_at: 2026-03-31T07:30:50.300Z
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
github_stars: 4218
github_forks: 211
github_is_organization: false
retrieved_at: 2026-03-31T07:30:50.591Z
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
github_stars: 4218
github_forks: 211
github_is_organization: false
retrieved_at: 2026-03-31T07:30:28.962Z
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
retrieved_at: 2026-03-31T07:34:19.619Z
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
retrieved_at: 2026-03-31T07:34:18.357Z
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
github_stars: 98731
github_forks: 10714
github_is_organization: true
retrieved_at: 2026-03-31T07:30:25.397Z
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
retrieved_at: 2026-03-31T07:31:11.435Z
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
retrieved_at: 2026-03-31T07:31:10.837Z
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
retrieved_at: 2026-03-31T07:30:54.385Z
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
retrieved_at: 2026-03-31T07:31:14.508Z
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
retrieved_at: 2026-03-31T07:34:18.869Z
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
retrieved_at: 2026-03-31T07:31:10.216Z
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
retrieved_at: 2026-03-31T07:31:14.572Z
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
retrieved_at: 2026-03-31T07:31:13.117Z
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
retrieved_at: 2026-03-31T07:31:12.661Z
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
retrieved_at: 2026-03-31T07:34:21.007Z
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
retrieved_at: 2026-03-31T07:31:08.644Z
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
retrieved_at: 2026-03-31T07:31:22.408Z
content_sha256: 96130f7b81a525f16824b0fc319d9e7ad3e913e8dcd75cc03e85d3ae83947df4
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
retrieved_at: 2026-03-31T07:31:13.177Z
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
retrieved_at: 2026-03-31T07:34:18.820Z
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
retrieved_at: 2026-03-31T07:31:12.308Z
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
retrieved_at: 2026-03-31T07:34:20.743Z
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
retrieved_at: 2026-03-31T07:31:14.439Z
content_sha256: 0b78293c5672ed62901e902a51b1898b948f9f3d88e7c11569b3d796401cfdc8
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
retrieved_at: 2026-03-31T07:34:19.443Z
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
retrieved_at: 2026-03-31T07:34:17.696Z
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
retrieved_at: 2026-03-31T07:34:18.615Z
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
retrieved_at: 2026-03-31T07:34:17.620Z
content_sha256: 789dd22d5bb29ecbc8f2bbc1f81af4f50c6d762fd58f622cdcb4bcb5c5237d8f
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
github_stars: 81478
github_forks: 9619
github_is_organization: true
retrieved_at: 2026-03-31T07:30:17.809Z
content_sha256: bfebc11ea8b73ef4d165bcfbf1e7af7eb1b75aa10a1cbd09331bc811b8bb5183
---
|/data/skills-sh-browser-use-browser-use-browser-use|

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
retrieved_at: 2026-03-31T07:31:22.793Z
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
github_stars: 1047
github_forks: 61
github_is_organization: true
retrieved_at: 2026-03-31T07:30:34.858Z
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
retrieved_at: 2026-03-31T07:31:14.693Z
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
retrieved_at: 2026-03-31T07:31:07.861Z
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
retrieved_at: 2026-03-31T07:31:13.058Z
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
retrieved_at: 2026-03-31T07:31:14.339Z
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
  analyzes real-time content from 28 sources including Hacker News, GitHub,
  Hugging Face Papers, AI Newsletters, WallStreetCN, Weibo, and Podcasts. Use
  when user requests 'daily scans', 'tech news', 'finance updates', 'AI
  briefings', 'deep analysis', or says '如意如意' to open the interactive menu."

  ---

  # News Aggregator Skill

  Fetch real-time hot news from 28 sources, generate deep analysis reports in
  Chinese.

  ---

  ## 🔄 Universal Workflow (3 Steps)

  **Every** news request follows the same workflow, regardless of source or
  combination:

  ### Step 1: Fetch Data
tags:
  - skills-sh
  - skills-sh-probed
source_url: https://raw.githubusercontent.com/cclank/news-aggregator-skill/main/SKILL.md
license: ""
upstream_ref: https://skills.sh/cclank/news-aggregator-skill/news-aggregator-skill
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:30:55.160Z
content_sha256: 62decab2ad9fbd5966958f01a0de25d2f25d8ccadc0bbf83762a28fc739bbe8d
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
  - Search the [GitHub repository issues and
  discussions](https://github.com/ChromeDevTools/chrome-devtools-mcp) for help
  or existing similar problems.

  ## Debugging
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/ChromeDevTools/chrome-devtools-mcp/main/docs/troubleshooting.md
license: ""
upstream_ref: https://skills.sh/chromedevtools/chrome-devtools-mcp/chrome-devtools
github_stars: 26831
github_forks: 1565
github_is_organization: true
retrieved_at: 2026-03-31T07:31:23.278Z
content_sha256: 40aebb349234290f1a9db2d853ab49ee8c221f41e182e97b3f8539c44f03912d
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
retrieved_at: 2026-03-31T07:31:13.795Z
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
retrieved_at: 2026-03-31T07:30:59.718Z
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
retrieved_at: 2026-03-31T07:34:18.565Z
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
retrieved_at: 2026-03-31T07:34:18.985Z
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
retrieved_at: 2026-03-31T07:31:12.741Z
content_sha256: c8a2bd3eca1afee7c9182b7dc7a3dceb9fdd13266c2a5e0730fd52b263b1aea3
---
|/data/skills-sh-cloudflare-skills-sandbox-sdk|

---
stable_id: skills/skills-sh-cloudflare-vinext-migrate-to-vinext
type: skills
title: skills-sh-cloudflare-vinext-migrate-to-vinext
summary: >-
  # Compatibility Reference

  ## Supported next/\* Imports

  All of these resolve automatically to vinext shims. Do not rewrite imports in
  application code.

  | Import              | Status  |
  Notes                                                            |

  | ------------------- | ------- |
  ---------------------------------------------------------------- |

  | `next/link`         |
  Full    |                                                                  |

  | `next/image`        | Partial | Remote images via @unpic; no build-time
  optimization             |

  | `next/head`         |
  Full    |                                                                  |

  | `next/router`       | Full    | Pages
  Router                                                     |

  | `next/navigation`   | Full    | App
  Router                                                       |
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/cloudflare/vinext/HEAD/.agents/skills/migrate-to-vinext/references/compatibility.md
license: ""
upstream_ref: https://skills.sh/cloudflare/vinext/migrate-to-vinext
github_stars: 4002
github_forks: 99
github_is_organization: true
retrieved_at: 2026-03-31T07:31:23.194Z
content_sha256: 1c146a17bd070d9ea7aa6f6e032b8b597939faef78f011ac520aed49511e5ffc
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
retrieved_at: 2026-03-31T07:31:13.532Z
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
github_stars: 15070
github_forks: 2250
github_is_organization: false
retrieved_at: 2026-03-31T07:30:26.266Z
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
github_stars: 15070
github_forks: 2250
github_is_organization: false
retrieved_at: 2026-03-31T07:30:26.049Z
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
github_stars: 15070
github_forks: 2250
github_is_organization: false
retrieved_at: 2026-03-31T07:30:25.562Z
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
retrieved_at: 2026-03-31T07:31:22.211Z
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
retrieved_at: 2026-03-31T07:31:20.769Z
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
retrieved_at: 2026-03-31T07:31:13.471Z
content_sha256: 8f367433afe78d532f81e0da757514cdbeaa3ea39689ce158c1c963079a93046
---
|/data/skills-sh-coreyhaines31-marketingskills-competitor-alternatives|

---
stable_id: skills/skills-sh-coreyhaines31-marketingskills-content-strategy
type: skills
title: skills-sh-coreyhaines31-marketingskills-content-strategy
summary: >-
  # Headless CMS Guide

  Reference for choosing, modeling, and implementing a headless CMS for
  marketing content.

  ## When to Use This Reference

  Use this when selecting a CMS for a new project, designing content models for
  marketing sites, setting up editorial workflows, or connecting CMS content to
  programmatic pages.

  ---

  ## Headless vs Traditional CMS

  A headless CMS separates content management from presentation. Content is
  stored in a structured backend and delivered via API to any frontend.

  ### When Headless Makes Sense

  - Multiple frontends consume the same content (web, mobile, email)

  - Developers want full control over the frontend stack
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/coreyhaines31/marketingskills/HEAD/skills/content-strategy/references/headless-cms.md
license: ""
upstream_ref: https://skills.sh/coreyhaines31/marketingskills/content-strategy
github_stars: 15070
github_forks: 2250
github_is_organization: false
retrieved_at: 2026-03-31T07:30:25.100Z
content_sha256: 5434e226fd593a2e1174264c37b7cba589e60a82739deec0c29107b48f1ffae5
---
|/data/skills-sh-coreyhaines31-marketingskills-content-strategy|

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
github_stars: 15070
github_forks: 2250
github_is_organization: false
retrieved_at: 2026-03-31T07:30:25.449Z
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
github_stars: 15070
github_forks: 2250
github_is_organization: false
retrieved_at: 2026-03-31T07:30:18.028Z
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
retrieved_at: 2026-03-31T07:31:11.617Z
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
github_stars: 15070
github_forks: 2250
github_is_organization: false
retrieved_at: 2026-03-31T07:30:25.835Z
content_sha256: 3869418a784ec94e95528dbe3f39cd2571cff6f7649e5e0be28d675be61d5a3f
---
|/data/skills-sh-coreyhaines31-marketingskills-free-tool-strategy|

---
stable_id: skills/skills-sh-coreyhaines31-marketingskills-lead-magnets
type: skills
title: skills-sh-coreyhaines31-marketingskills-lead-magnets
summary: |-
  # Lead Magnet Format Guide
  Detailed creation guidance for each lead magnet format.
  ## Contents
  - Ebooks & Guides
  - Checklists
  - Cheat Sheets
  - Templates & Spreadsheets
  - Swipe Files
  - Mini-Courses
  - Quizzes & Assessments
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/coreyhaines31/marketingskills/HEAD/skills/lead-magnets/references/format-guide.md
license: ""
upstream_ref: https://skills.sh/coreyhaines31/marketingskills/lead-magnets
github_stars: 15070
github_forks: 2250
github_is_organization: false
retrieved_at: 2026-03-31T07:30:51.663Z
content_sha256: 160b34c4c0d19e67fcc032181fdfbf1d5cae6dac94937f2333e8e21815ce9732
---
|/data/skills-sh-coreyhaines31-marketingskills-lead-magnets|

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
github_stars: 15070
github_forks: 2250
github_is_organization: false
retrieved_at: 2026-03-31T07:30:25.258Z
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
retrieved_at: 2026-03-31T07:31:11.557Z
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
github_stars: 15070
github_forks: 2250
github_is_organization: false
retrieved_at: 2026-03-31T07:30:25.507Z
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
github_stars: 15070
github_forks: 2250
github_is_organization: false
retrieved_at: 2026-03-31T07:30:25.718Z
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
retrieved_at: 2026-03-31T07:31:20.057Z
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
github_stars: 15070
github_forks: 2250
github_is_organization: false
retrieved_at: 2026-03-31T07:30:25.335Z
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
github_stars: 15070
github_forks: 2250
github_is_organization: false
retrieved_at: 2026-03-31T07:30:25.163Z
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
github_stars: 15070
github_forks: 2250
github_is_organization: false
retrieved_at: 2026-03-31T07:30:25.768Z
content_sha256: 2baad60cdb251414ea559bd4dcf23d6c394ff66e593ae9392453f2e24f585c8a
---
|/data/skills-sh-coreyhaines31-marketingskills-referral-program|

---
stable_id: skills/skills-sh-coreyhaines31-marketingskills-revops
type: skills
title: skills-sh-coreyhaines31-marketingskills-revops
summary: >-
  # Lifecycle Stage Definitions

  Complete templates for lead lifecycle stages, MQL criteria by business type,
  SLAs, and rejection/recycling workflows.

  ## Stage Templates

  ### Subscriber

  **Entry criteria:**

  - Opted in to blog, newsletter, or content updates

  - No company information required

  **Exit criteria:**

  - Provides company information via form or enrichment

  - Visits 3+ pages in a session
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/coreyhaines31/marketingskills/HEAD/skills/revops/references/lifecycle-definitions.md
license: ""
upstream_ref: https://skills.sh/coreyhaines31/marketingskills/revops
github_stars: 15070
github_forks: 2250
github_is_organization: false
retrieved_at: 2026-03-31T07:30:28.220Z
content_sha256: 210c730e815b82f6c06d67482e667c40f9ae2179886e318ccb25f1e31e09ca1f
---
|/data/skills-sh-coreyhaines31-marketingskills-revops|

---
stable_id: skills/skills-sh-coreyhaines31-marketingskills-sales-enablement
type: skills
title: skills-sh-coreyhaines31-marketingskills-sales-enablement
summary: >-
  # Sales Deck Frameworks

  Detailed slide-by-slide guidance for building sales decks that tell a story
  and close deals.

  ## The Storytelling Arc

  Every great deck follows a narrative structure: **Situation → Complication →
  Resolution.**

  - **Situation** (Slides 1-3): The world your buyer lives in. Establish shared
  understanding.

  - **Complication** (Slides 2-3): Why the status quo is no longer sustainable.
  Create urgency.

  - **Resolution** (Slides 4-11): Your approach, proof, and path forward.

  The goal is not to present features. The goal is to make the buyer feel
  understood, then show them a better way.

  ---

  ## Slide-by-Slide Template
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/coreyhaines31/marketingskills/HEAD/skills/sales-enablement/references/deck-frameworks.md
license: ""
upstream_ref: https://skills.sh/coreyhaines31/marketingskills/sales-enablement
github_stars: 15070
github_forks: 2250
github_is_organization: false
retrieved_at: 2026-03-31T07:30:27.958Z
content_sha256: 265eea6c1b358d10f2dd22fd987789a9d115c14d30bf77a9086734ac60659336
---
|/data/skills-sh-coreyhaines31-marketingskills-sales-enablement|

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
github_stars: 15070
github_forks: 2250
github_is_organization: false
retrieved_at: 2026-03-31T07:30:25.630Z
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
github_stars: 15070
github_forks: 2250
github_is_organization: false
retrieved_at: 2026-03-31T07:30:17.869Z
content_sha256: f1e273f56ce7e2215ff218bf903680ddcec0fd026ab90c3ebfb3439ed0edfaa4
---
|/data/skills-sh-coreyhaines31-marketingskills-seo-audit|

---
stable_id: skills/skills-sh-coreyhaines31-marketingskills-site-architecture
type: skills
title: skills-sh-coreyhaines31-marketingskills-site-architecture
summary: >-
  # Site Type Templates

  Full page hierarchy templates with ASCII trees, URL maps, and navigation
  recommendations for common site types.

  ---

  ## SaaS Marketing Site

  ### Page Hierarchy

  ```

  Homepage (/)

  ├── Features (/features)

  │   ├── Feature A (/features/feature-a)

  │   ├── Feature B (/features/feature-b)
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/coreyhaines31/marketingskills/HEAD/skills/site-architecture/references/site-type-templates.md
license: ""
upstream_ref: https://skills.sh/coreyhaines31/marketingskills/site-architecture
github_stars: 15070
github_forks: 2250
github_is_organization: false
retrieved_at: 2026-03-31T07:30:27.623Z
content_sha256: 3c3cd7ce5e31c502dc071baf82bb58cb30f5edf4a2fd8ca052fbc8f3777db140
---
|/data/skills-sh-coreyhaines31-marketingskills-site-architecture|

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
retrieved_at: 2026-03-31T07:31:19.992Z
content_sha256: 3c4e1b15717a3bcd4ed0cf29dc167dac28aa88bbf01723fde53815122396090f
---
|/data/skills-sh-coreyhaines31-marketingskills-social-content|

---
stable_id: skills/skills-sh-currents-dev-playwright-best-practices-skill-playwright-best-practices
type: skills
title: skills-sh-currents-dev-playwright-best-practices-skill-playwright-best-practices
summary: |-
  # Test Suite Structure
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
source_url: https://raw.githubusercontent.com/currents-dev/playwright-best-practices-skill/HEAD/core/test-suite-structure.md
license: ""
upstream_ref: https://skills.sh/currents-dev/playwright-best-practices-skill/playwright-best-practices
github_stars: 155
github_forks: 34
github_is_organization: true
retrieved_at: 2026-03-31T07:30:26.150Z
content_sha256: 638a72c8d01826a842096ca2a90bd6108d27a31a0d28d209833d14379abac9ee
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
retrieved_at: 2026-03-31T07:31:22.582Z
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
retrieved_at: 2026-03-31T07:31:00.103Z
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
retrieved_at: 2026-03-31T07:34:20.433Z
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
retrieved_at: 2026-03-31T07:34:18.422Z
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
retrieved_at: 2026-03-31T07:31:22.925Z
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
retrieved_at: 2026-03-31T07:31:12.530Z
content_sha256: 394064d56b98f0a30e797808fc2545094c0829b3ef4fda52b62b71c7a73108ef
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
github_stars: 3640
github_forks: 635
github_is_organization: false
retrieved_at: 2026-03-31T07:30:53.426Z
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
retrieved_at: 2026-03-31T07:31:13.007Z
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
retrieved_at: 2026-03-31T07:31:11.188Z
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
retrieved_at: 2026-03-31T07:31:00.248Z
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
retrieved_at: 2026-03-31T07:30:57.909Z
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
retrieved_at: 2026-03-31T07:30:57.835Z
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
retrieved_at: 2026-03-31T07:31:08.237Z
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
retrieved_at: 2026-03-31T07:31:00.043Z
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
retrieved_at: 2026-03-31T07:31:10.464Z
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
retrieved_at: 2026-03-31T07:31:00.365Z
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
retrieved_at: 2026-03-31T07:30:59.939Z
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
retrieved_at: 2026-03-31T07:31:07.614Z
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
retrieved_at: 2026-03-31T07:34:19.382Z
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
retrieved_at: 2026-03-31T07:30:52.089Z
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
retrieved_at: 2026-03-31T07:31:12.116Z
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
retrieved_at: 2026-03-31T07:34:18.692Z
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
retrieved_at: 2026-03-31T07:34:19.194Z
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
retrieved_at: 2026-03-31T07:31:23.057Z
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
retrieved_at: 2026-03-31T07:31:13.860Z
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
retrieved_at: 2026-03-31T07:31:13.669Z
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
retrieved_at: 2026-03-31T07:30:55.045Z
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
retrieved_at: 2026-03-31T07:30:55.004Z
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
retrieved_at: 2026-03-31T07:31:22.147Z
content_sha256: 14ef890e72b0f7c063d399525ef72509973232b2de1651085ab33ec5d384d08c
---
|/data/skills-sh-eraserlabs-eraser-io-eraser-diagrams|

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
retrieved_at: 2026-03-31T07:31:10.912Z
content_sha256: 081fe68f4bc2ece4d63dfb9a77253eab8306a753ce470ac8c03102e69ff5e032
---
|/data/skills-sh-existential-birds-beagle-tailwind-v4|

---
stable_id: skills/skills-sh-firebase-agent-skills-firebase-basics
type: skills
title: skills-sh-firebase-agent-skills-firebase-basics
summary: >-
  # Creating a Project

  To create a new Firebase project from the CLI:

  ```bash

  npx -y firebase-tools@latest projects:create

  ```

  You will be prompted to:

  1. Enter a **Project ID** (must be 6-30 chars, lowercase, digits, and hyphens;
  must be unique globally).

  2. Enter a **display name**.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/firebase/agent-skills/HEAD/skills/firebase-basics/references/firebase-project-create.md
license: ""
upstream_ref: https://skills.sh/firebase/agent-skills/firebase-basics
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:30:54.548Z
content_sha256: 458b37d31c47e024a0310948dca61ec956c530efbab9b77af571e368c103ecba
---
|/data/skills-sh-firebase-agent-skills-firebase-basics|

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
github_stars: 197
github_forks: 28
github_is_organization: true
retrieved_at: 2026-03-31T07:30:25.889Z
content_sha256: acf9e2e26929b5ccebd111f5777517ced42bf83e86766c1a01370f0e9f811681
---
|/data/skills-sh-firecrawl-cli-firecrawl|

---
stable_id: skills/skills-sh-firecrawl-cli-firecrawl-browser
type: skills
title: skills-sh-firecrawl-cli-firecrawl-browser
summary: >-
  ---

  name: firecrawl-scrape

  description: |
    Extract clean markdown from any URL, including JavaScript-rendered SPAs. Use this skill whenever the user provides a URL and wants its content, says "scrape", "grab", "fetch", "pull", "get the page", "extract from this URL", or "read this webpage". Handles JS-rendered pages, multiple concurrent URLs, and returns LLM-optimized markdown. Use this instead of WebFetch for any webpage content extraction.
  allowed-tools:
    - Bash(firecrawl *)
    - Bash(npx firecrawl *)
  ---

  # firecrawl scrape

  Scrape one or more URLs. Returns clean, LLM-optimized markdown. Multiple URLs
  are scraped concurrently.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/firecrawl/cli/HEAD/skills/firecrawl-scrape/SKILL.md
license: ""
upstream_ref: https://skills.sh/firecrawl/cli/firecrawl-browser
github_stars: 197
github_forks: 28
github_is_organization: true
retrieved_at: 2026-03-31T07:30:51.177Z
content_sha256: 0c1b2882d341ba7df3d100b08fe5bc31708dc90965924db4bc130167280e6221
---
|/data/skills-sh-firecrawl-cli-firecrawl-browser|

---
stable_id: skills/skills-sh-firecrawl-cli-firecrawl-download
type: skills
title: skills-sh-firecrawl-cli-firecrawl-download
summary: >-
  ---

  name: firecrawl-map

  description: |
    Discover and list all URLs on a website, with optional search filtering. Use this skill when the user wants to find a specific page on a large site, list all URLs, see the site structure, find where something is on a domain, or says "map the site", "find the URL for", "what pages are on", or "list all pages". Essential when the user knows which site but not which exact page.
  allowed-tools:
    - Bash(firecrawl *)
    - Bash(npx firecrawl *)
  ---

  # firecrawl map

  Discover URLs on a site. Use `--search` to find a specific page within a large
  site.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/firecrawl/cli/HEAD/skills/firecrawl-map/SKILL.md
license: ""
upstream_ref: https://skills.sh/firecrawl/cli/firecrawl-download
github_stars: 197
github_forks: 28
github_is_organization: true
retrieved_at: 2026-03-31T07:30:51.287Z
content_sha256: 55e6ea4076bdda1aec82efb76115d5124f5ab8e6dc4efb403267219c9e693a8d
---
|/data/skills-sh-firecrawl-cli-firecrawl-download|

---
stable_id: skills/skills-sh-firecrawl-cli-firecrawl-scrape
type: skills
title: skills-sh-firecrawl-cli-firecrawl-scrape
summary: >-
  ---

  name: firecrawl-search

  description: |
    Web search with full page content extraction. Use this skill whenever the user asks to search the web, find articles, research a topic, look something up, find recent news, discover sources, or says "search for", "find me", "look up", "what are people saying about", or "find articles about". Returns real search results with optional full-page markdown — not just snippets. Provides capabilities beyond Claude's built-in WebSearch.
  allowed-tools:
    - Bash(firecrawl *)
    - Bash(npx firecrawl *)
  ---

  # firecrawl search

  Web search with optional content scraping. Returns search results as JSON,
  optionally with full page content.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/firecrawl/cli/HEAD/skills/firecrawl-search/SKILL.md
license: ""
upstream_ref: https://skills.sh/firecrawl/cli/firecrawl-scrape
github_stars: 197
github_forks: 28
github_is_organization: true
retrieved_at: 2026-03-31T07:30:51.119Z
content_sha256: 113957c4c04e6e633eb83500838ac0068eb2cb093fe88d0d28f43b6bfd0cd2e4
---
|/data/skills-sh-firecrawl-cli-firecrawl-scrape|

---
stable_id: skills/skills-sh-github-awesome-copilot-aspire
type: skills
title: skills-sh-github-awesome-copilot-aspire
summary: >-
  # CLI Reference — Complete Command Reference

  The Aspire CLI (`aspire`) is the primary interface for creating, running, and
  publishing distributed applications. It is cross-platform and installed
  standalone (not coupled to the .NET CLI, though `dotnet` commands also work).

  **Tested against:** Aspire CLI 13.1.0

  ---

  ## Installation

  ```bash

  # Linux / macOS

  curl -sSL https://aspire.dev/install.sh | bash

  # Windows PowerShell

  irm https://aspire.dev/install.ps1 | iex
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/github/awesome-copilot/HEAD/skills/aspire/references/cli-reference.md
license: ""
upstream_ref: https://skills.sh/github/awesome-copilot/aspire
github_stars: 26261
github_forks: 3023
github_is_organization: true
retrieved_at: 2026-03-31T07:30:48.789Z
content_sha256: 224e09146fa0a8af3f661c8538e1fee660f9288d4eccf80985c47e2f732136c9
---
|/data/skills-sh-github-awesome-copilot-aspire|

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
github_stars: 26261
github_forks: 3023
github_is_organization: true
retrieved_at: 2026-03-31T07:30:35.158Z
content_sha256: 685de9d8d43bfe58cfd9f20d8fa35b04e9da983f8122754400dc4b7457420197
---
|/data/skills-sh-github-awesome-copilot-azure-deployment-preflight|

---
stable_id: skills/skills-sh-github-awesome-copilot-azure-pricing
type: skills
title: skills-sh-github-awesome-copilot-azure-pricing
summary: >-
  # Azure Region Names Reference

  The Azure Retail Prices API requires `armRegionName` values in lowercase with
  no spaces. Use this table to map common region names to their API values.

  ## Region Mapping

  | Display Name | armRegionName |

  |-------------|---------------|

  | East US | `eastus` |

  | East US 2 | `eastus2` |

  | Central US | `centralus` |

  | North Central US | `northcentralus` |

  | South Central US | `southcentralus` |
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/github/awesome-copilot/HEAD/skills/azure-pricing/references/REGIONS.md
license: ""
upstream_ref: https://skills.sh/github/awesome-copilot/azure-pricing
github_stars: 26261
github_forks: 3023
github_is_organization: true
retrieved_at: 2026-03-31T07:30:52.812Z
content_sha256: c0125df101ab525177a7c84fc49f11ae78cde538599c10b07df1de894946dfff
---
|/data/skills-sh-github-awesome-copilot-azure-pricing|

---
stable_id: skills/skills-sh-github-awesome-copilot-containerize-aspnet-framework
type: skills
title: skills-sh-github-awesome-copilot-containerize-aspnet-framework
summary: >-
  # ASP.NET Web Forms and MVC

  ## Featured tags

  * `4.8.1`
    * `docker pull mcr.microsoft.com/dotnet/framework/aspnet:4.8.1`
  * `4.8`
    * `docker pull mcr.microsoft.com/dotnet/framework/aspnet:4.8`
  ## About

  ASP.NET is a high productivity framework for building Web Applications using
  Web Forms, MVC, Web API and SignalR.

  This image contains:

  * Windows Server Core as the base OS
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/microsoft/dotnet-framework-docker/main/README.aspnet.md
license: ""
upstream_ref: https://skills.sh/github/awesome-copilot/containerize-aspnet-framework
github_stars: 761
github_forks: 351
github_is_organization: true
retrieved_at: 2026-03-31T07:30:49.880Z
content_sha256: 6f9f44262077bcae79e8c5753b49855a959db675f3d6e65c84b0ebc4ebeaee64
---
|/data/skills-sh-github-awesome-copilot-containerize-aspnet-framework|

---
stable_id: skills/skills-sh-github-awesome-copilot-containerize-aspnetcore
type: skills
title: skills-sh-github-awesome-copilot-containerize-aspnetcore
summary: |-
  # .NET SDK
  ## Featured Tags
  * `10.0` (Long-Term Support)
    * `docker pull mcr.microsoft.com/dotnet/sdk:10.0`
  * `9.0` (Standard Support)
    * `docker pull mcr.microsoft.com/dotnet/sdk:9.0`
  * `8.0` (Long-Term Support)
    * `docker pull mcr.microsoft.com/dotnet/sdk:8.0`
  ## About
  This image contains the .NET SDK which is comprised of three parts:
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/dotnet/dotnet-docker/main/README.sdk.md
license: ""
upstream_ref: https://skills.sh/github/awesome-copilot/containerize-aspnetcore
github_stars: 4838
github_forks: 1954
github_is_organization: true
retrieved_at: 2026-03-31T07:30:49.601Z
content_sha256: 238ead2fc45bca98cb9482c501f8c7895782a15041b6d90b21a52da2d723d02b
---
|/data/skills-sh-github-awesome-copilot-containerize-aspnetcore|

---
stable_id: skills/skills-sh-github-awesome-copilot-create-readme
type: skills
title: skills-sh-github-awesome-copilot-create-readme
summary: |-
  <!-- prettier-ignore -->
  <div align="center">
  <img src="./packages/webapp/public/favicon.png" alt="" align="center" height="64" />
  # Serverless AI Chat with RAG using LangChain.js
  [![Open project in GitHub Codespaces](https://img.shields.io/badge/Codespaces-Open-blue?style=flat-square&logo=github)](https://codespaces.new/Azure-Samples/serverless-chat-langchainjs?hide_repo_select=true&ref=main&quickstart=true)
  [![Join Azure AI Foundry Discord](https://img.shields.io/badge/Discord-Azure_AI_Community-blue?style=flat-square&logo=discord&color=5865f2&logoColor=fff)](https://aka.ms/foundry/discord)
  [![Official Learn documentation](https://img.shields.io/badge/Documentation-00a3ee?style=flat-square)](https://learn.microsoft.com/azure/developer/javascript/ai/get-started-app-chat-template-langchainjs)
  [![Watch to learn about RAG and this sample on YouTube](https://img.shields.io/badge/YouTube-d95652.svg?style=flat-square&logo=youtube)](https://www.youtube.com/watch?v=xkFOmx5yxIA&list=PLlrxD0HtieHi5ZpsHULPLxm839IrhmeDk&index=4)
  [![dev.to blog post walkthrough](https://img.shields.io/badge/Blog%20post-black?style=flat-square&logo=dev.to)](https://dev.to/azure/build-a-serverless-chatgpt-with-rag-using-langchainjs-3487)
  <br>
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/Azure-Samples/serverless-chat-langchainjs/refs/heads/main/README.md
license: ""
upstream_ref: https://skills.sh/github/awesome-copilot/create-readme
github_stars: 857
github_forks: 486
github_is_organization: true
retrieved_at: 2026-03-31T07:30:34.719Z
content_sha256: c94501dd4e1635ecbd1e59401803b27ccfec287683fa855eb19841fe24e959f8
---
|/data/skills-sh-github-awesome-copilot-create-readme|

---
stable_id: skills/skills-sh-github-awesome-copilot-create-tldr-page
type: skills
title: skills-sh-github-awesome-copilot-create-tldr-page
summary: >-
  # git

  > Distributed version control system.

  > Some subcommands such as `commit`, `add`, `branch`, `switch`, `push`, etc.
  have their own usage documentation.

  > More information: <https://git-scm.com/docs/git>.

  - Create an empty Git repository:

  `git init`

  - Clone a remote Git repository from the internet:

  `git clone {{https://example.com/repo.git}}`

  - View the status of the local repository:

  `git status`
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/jhauga/tldr/refs/heads/main/pages/common/git.md
license: ""
upstream_ref: https://skills.sh/github/awesome-copilot/create-tldr-page
github_stars: 0
github_forks: 0
github_is_organization: false
retrieved_at: 2026-03-31T07:30:49.752Z
content_sha256: 5cc833305da2df33386f2085fa907385d5d29d82d8f7f2dc87476d760c9e5b25
---
|/data/skills-sh-github-awesome-copilot-create-tldr-page|

---
stable_id: skills/skills-sh-github-awesome-copilot-fabric-lakehouse
type: skills
title: skills-sh-github-awesome-copilot-fabric-lakehouse
summary: |-
  ### Spark Configuration (Best Practices)
  ```python
  # Enable Fabric optimizations
  spark.conf.set("spark.sql.parquet.vorder.enabled", "true")
  spark.conf.set("spark.microsoft.delta.optimizeWrite.enabled", "true")
  ```
  ### Reading Data
  ```python
  # Read CSV file
  df = spark.read.format("csv") \
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/github/awesome-copilot/HEAD/skills/fabric-lakehouse/references/pyspark.md
license: ""
upstream_ref: https://skills.sh/github/awesome-copilot/fabric-lakehouse
github_stars: 26261
github_forks: 3023
github_is_organization: true
retrieved_at: 2026-03-31T07:30:49.394Z
content_sha256: 417e001196a12281c910bcd113ab55ffe47ad0e31ad53e18914bbd103ace0296
---
|/data/skills-sh-github-awesome-copilot-fabric-lakehouse|

---
stable_id: skills/skills-sh-github-awesome-copilot-finnish-humanizer
type: skills
title: skills-sh-github-awesome-copilot-finnish-humanizer
summary: >-
  # Finnish Humanizer — Täysi patternilista

  Kaikki 26 AI-patternia esimerkkeineen. SKILL.md sisältää 7 kanonista
  esimerkkiä; tämä tiedosto sisältää loput.

  ## Sisällysluettelo

  - [Suomenkieliset AI-patternit (1–12)](#suomenkieliset-ai-patternit)
    - [1. Passiivin ylikäyttö](#1-passiivin-ylikäyttö)
    - [2. Nominaalirakenteet](#2-nominaalirakenteet)
    - [3. Pronominien ylikäyttö](#3-pronominien-ylikäyttö)
    - [4. Puuttuvat partikkelit](#4-puuttuvat-partikkelit)
    - [5. Käännösrakenteet](#5-käännösrakenteet)
    - [6. Genetiiviketjut](#6-genetiiviketjut)
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/github/awesome-copilot/HEAD/skills/finnish-humanizer/references/patterns.md
license: ""
upstream_ref: https://skills.sh/github/awesome-copilot/finnish-humanizer
github_stars: 26261
github_forks: 3023
github_is_organization: true
retrieved_at: 2026-03-31T07:30:48.879Z
content_sha256: 048028753dff8810aff9266586244157cbc952b06ffe87510683e2aad49a40f9
---
|/data/skills-sh-github-awesome-copilot-finnish-humanizer|

---
stable_id: skills/skills-sh-github-awesome-copilot-flowstudio-power-automate-mcp
type: skills
title: skills-sh-github-awesome-copilot-flowstudio-power-automate-mcp
summary: |-
  # MCP Bootstrap — Quick Reference
  Everything an agent needs to start calling the FlowStudio MCP server.
  ```
  Endpoint:  https://mcp.flowstudio.app/mcp
  Protocol:  JSON-RPC 2.0 over HTTP POST
  Transport: Streamable HTTP — single POST per request, no SSE, no WebSocket
  Auth:      x-api-key header with JWT token (NOT Bearer)
  ```
  ## Required Headers
  ```
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/github/awesome-copilot/HEAD/skills/flowstudio-power-automate-mcp/references/MCP-BOOTSTRAP.md
license: ""
upstream_ref: https://skills.sh/github/awesome-copilot/flowstudio-power-automate-mcp
github_stars: 26261
github_forks: 3023
github_is_organization: true
retrieved_at: 2026-03-31T07:30:53.844Z
content_sha256: 1c069fb0b4532e8e81ab4e89348f5650ef77ece3d99cbf9bda32522cb93938eb
---
|/data/skills-sh-github-awesome-copilot-flowstudio-power-automate-mcp|

---
stable_id: skills/skills-sh-github-awesome-copilot-fluentui-blazor
type: skills
title: skills-sh-github-awesome-copilot-fluentui-blazor
summary: >-
  # Setup and Configuration

  ## NuGet Packages

  | Package | Purpose |

  |---|---|

  | `Microsoft.FluentUI.AspNetCore.Components` | Core component library
  (required) |

  | `Microsoft.FluentUI.AspNetCore.Components.Icons` | Icon package (optional,
  recommended) |

  | `Microsoft.FluentUI.AspNetCore.Components.Emojis` | Emoji package (optional)
  |

  | `Microsoft.FluentUI.AspNetCore.Components.DataGrid.EntityFrameworkAdapter` |
  EF Core adapter for DataGrid (optional) |

  | `Microsoft.FluentUI.AspNetCore.Components.DataGrid.ODataAdapter` | OData
  adapter for DataGrid (optional) |

  ## Program.cs Registration
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/github/awesome-copilot/HEAD/skills/fluentui-blazor/references/SETUP.md
license: ""
upstream_ref: https://skills.sh/github/awesome-copilot/fluentui-blazor
github_stars: 26261
github_forks: 3023
github_is_organization: true
retrieved_at: 2026-03-31T07:30:48.962Z
content_sha256: 297ae2f3ceade5e6c79d03b9739150cd2ee687714e78e0b0ffbe94ff6f20e062
---
|/data/skills-sh-github-awesome-copilot-fluentui-blazor|

---
stable_id: skills/skills-sh-github-awesome-copilot-github-copilot-starter
type: skills
title: skills-sh-github-awesome-copilot-github-copilot-starter
summary: >-
  # 📋 Custom Instructions

  Team and project-specific instructions to enhance GitHub Copilot's behavior
  for specific technologies and coding practices.

  ### How to Contribute

  See [CONTRIBUTING.md](../CONTRIBUTING.md#adding-instructions) for guidelines
  on how to contribute new instructions, improve existing ones, and share your
  use cases.

  ### How to Use Custom Instructions

  **To Install:**

  - Click the **VS Code** or **VS Code Insiders** install button for the
  instruction you want to use

  - Download the `*.instructions.md` file and manually add it to your project's
  instruction collection

  **To Use/Apply:**

  - Copy these instructions to your `.github/copilot-instructions.md` file in
  your workspace
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/github/awesome-copilot/main/docs/README.instructions.md
license: ""
upstream_ref: https://skills.sh/github/awesome-copilot/github-copilot-starter
github_stars: 26261
github_forks: 3023
github_is_organization: true
retrieved_at: 2026-03-31T07:30:49.138Z
content_sha256: 510340c3c759d456fcbbd59ce97f96865a05155cfd94799436b9e58fea093316
---
|/data/skills-sh-github-awesome-copilot-github-copilot-starter|

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
retrieved_at: 2026-03-31T07:31:08.317Z
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
github_stars: 26261
github_forks: 3023
github_is_organization: true
retrieved_at: 2026-03-31T07:30:48.370Z
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
github_stars: 26261
github_forks: 3023
github_is_organization: true
retrieved_at: 2026-03-31T07:30:48.504Z
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
github_stars: 26261
github_forks: 3023
github_is_organization: true
retrieved_at: 2026-03-31T07:30:38.894Z
content_sha256: fe2c21cc2979a7ef382ea891f1ddd5138d1254c37336c9df33ba594c001a8743
---
|/data/skills-sh-github-awesome-copilot-markdown-to-html|

---
stable_id: skills/skills-sh-github-awesome-copilot-microsoft-skill-creator
type: skills
title: skills-sh-github-awesome-copilot-microsoft-skill-creator
summary: >-
  # Skill Templates

  Ready-to-use templates for different types of Microsoft technologies.

  ## CLI Alternative for MCP Tools

  All templates below use MCP tool calls (e.g., `microsoft_docs_search`,
  `microsoft_docs_fetch`, `microsoft_code_sample_search`). If the Learn MCP
  server is not available, replace them with CLI equivalents:

  | MCP Tool | CLI Command |

  |----------|-------------|

  | `microsoft_docs_search(query: "...")` | `mslearn search "..."` |

  | `microsoft_code_sample_search(query: "...", language: "...")` | `mslearn
  code-search "..." --language ...` |

  | `microsoft_docs_fetch(url: "...")` | `mslearn fetch "..."` |

  Run directly with `npx @microsoft/learn-cli <command>` or install globally
  with `npm install -g @microsoft/learn-cli`.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/github/awesome-copilot/HEAD/skills/microsoft-skill-creator/references/skill-templates.md
license: ""
upstream_ref: https://skills.sh/github/awesome-copilot/microsoft-skill-creator
github_stars: 26261
github_forks: 3023
github_is_organization: true
retrieved_at: 2026-03-31T07:30:48.433Z
content_sha256: ff30f0b66e3d4ce70fa97fb764491fd33728a2b47baf9c37f892bc2b64fe73f6
---
|/data/skills-sh-github-awesome-copilot-microsoft-skill-creator|

---
stable_id: skills/skills-sh-github-awesome-copilot-pdftk-server
type: skills
title: skills-sh-github-awesome-copilot-pdftk-server
summary: >-
  # PDFtk Server Manual Reference

  - **`pdftk` version 2.02**

  - Check [version history](https://www.pdflabs.com/docs/pdftk-version-history/)
  for changes

  - See [server manual](https://www.pdflabs.com/docs/pdftk-man-page/) for the
  latest documentation

  ## Overview

  PDFtk is a command-line utility for manipulating PDF documents. It enables
  operations including merging, splitting, rotating, encrypting, decrypting,
  watermarking, form-filling, and metadata extraction of PDF files.

  ## Synopsis

  ```

  pdftk [input PDF files | - | PROMPT]
        [input_pw <passwords>]
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/github/awesome-copilot/HEAD/skills/pdftk-server/references/pdftk-man-page.md
license: ""
upstream_ref: https://skills.sh/github/awesome-copilot/pdftk-server
github_stars: 26261
github_forks: 3023
github_is_organization: true
retrieved_at: 2026-03-31T07:30:44.713Z
content_sha256: 2af43f0330b9e1e1b33c239261c7f5c092c7331f4e50013f1d42d6d41b3bd2a5
---
|/data/skills-sh-github-awesome-copilot-pdftk-server|

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
github_stars: 26261
github_forks: 3023
github_is_organization: true
retrieved_at: 2026-03-31T07:30:35.025Z
content_sha256: 5eceba271320c73a4ed22db14b4c02331b5768f98121eab74cd3e6440bb4f521
---
|/data/skills-sh-github-awesome-copilot-penpot-uiux-design|

---
stable_id: skills/skills-sh-github-awesome-copilot-polyglot-test-agent
type: skills
title: skills-sh-github-awesome-copilot-polyglot-test-agent
summary: >-
  ---

  description: 'Best practices and guidelines for generating comprehensive,
  parameterized unit tests with 80% code coverage across any programming
  language'

  ---

  # Unit Test Generation Prompt

  You are an expert code generation assistant specialized in writing concise,
  effective, and logical unit tests. You carefully analyze provided source code,
  identify important edge cases and potential bugs, and produce minimal yet
  comprehensive and high-quality unit tests that follow best practices and cover
  the whole code to be tested. Aim for 80% code coverage.

  ## Discover and Follow Conventions

  Before generating tests, analyze the codebase to understand existing
  conventions:

  - **Location**: Where test projects and test files are placed

  - **Naming**: Namespace, class, and method naming patterns

  - **Frameworks**: Testing, mocking, and assertion frameworks used
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/github/awesome-copilot/HEAD/skills/polyglot-test-agent/unit-test-generation.prompt.md
license: ""
upstream_ref: https://skills.sh/github/awesome-copilot/polyglot-test-agent
github_stars: 26261
github_forks: 3023
github_is_organization: true
retrieved_at: 2026-03-31T07:30:49.039Z
content_sha256: 51fb84668d78fcc1ef305b83fa24aa4382bd2ceda8f251bd1f377f355d90a24a
---
|/data/skills-sh-github-awesome-copilot-polyglot-test-agent|

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
github_stars: 26261
github_forks: 3023
github_is_organization: true
retrieved_at: 2026-03-31T07:30:44.558Z
content_sha256: af288e11a243a090f9a2d540103d49d3b6d0d20e39a85e9b45c51175eb0028b2
---
|/data/skills-sh-github-awesome-copilot-powerbi-modeling|

---
stable_id: skills/skills-sh-github-awesome-copilot-suggest-awesome-github-copilot-agents
type: skills
title: skills-sh-github-awesome-copilot-suggest-awesome-github-copilot-agents
summary: >-
  # 🤖 Custom Agents

  Custom agents for GitHub Copilot, making it easy for users and organizations
  to "specialize" their Copilot coding agent (CCA) through simple file-based
  configuration.

  ### How to Contribute

  See [CONTRIBUTING.md](../CONTRIBUTING.md#adding-agents) for guidelines on how
  to contribute new agents, improve existing ones, and share your use cases.

  ### How to Use Custom Agents

  **To Install:**

  - Click the **VS Code** or **VS Code Insiders** install button for the agent
  you want to use

  - Download the `*.agent.md` file and add it to your repository

  **MCP Server Setup:**

  - Each agent may require one or more MCP servers to function
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/github/awesome-copilot/main/docs/README.agents.md
license: ""
upstream_ref: https://skills.sh/github/awesome-copilot/suggest-awesome-github-copilot-agents
github_stars: 26261
github_forks: 3023
github_is_organization: true
retrieved_at: 2026-03-31T07:30:49.520Z
content_sha256: 8fc80468b54e72502450a86a0ec9c09f870637cc0f0cffc087c2434bfa75d457
---
|/data/skills-sh-github-awesome-copilot-suggest-awesome-github-copilot-agents|

---
stable_id: skills/skills-sh-github-awesome-copilot-suggest-awesome-github-copilot-skills
type: skills
title: skills-sh-github-awesome-copilot-suggest-awesome-github-copilot-skills
summary: >-
  # 🎯 Agent Skills

  Agent Skills are self-contained folders with instructions and bundled
  resources that enhance AI capabilities for specialized tasks. Based on the
  [Agent Skills specification](https://agentskills.io/specification), each skill
  contains a `SKILL.md` file with detailed instructions that agents load
  on-demand.

  Skills differ from other primitives by supporting bundled assets (scripts,
  code samples, reference data) that agents can utilize when performing
  specialized tasks.

  ### How to Contribute

  See [CONTRIBUTING.md](../CONTRIBUTING.md#adding-skills) for guidelines on how
  to contribute new agent skills, improve existing ones, and share your use
  cases.

  ### How to Use Agent Skills

  **What's Included:**

  - Each skill is a folder containing a `SKILL.md` instruction file

  - Skills may include helper scripts, code templates, or reference data

  - Skills follow the Agent Skills specification for maximum compatibility
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/github/awesome-copilot/main/docs/README.skills.md
license: ""
upstream_ref: https://skills.sh/github/awesome-copilot/suggest-awesome-github-copilot-skills
github_stars: 26261
github_forks: 3023
github_is_organization: true
retrieved_at: 2026-03-31T07:30:49.257Z
content_sha256: bcf892e128ac9a44316b5e59cf65368c95572ff905afa90e71f1d6773e1ff487
---
|/data/skills-sh-github-awesome-copilot-suggest-awesome-github-copilot-skills|

---
stable_id: skills/skills-sh-github-awesome-copilot-terraform-azurerm-set-diff-analyzer
type: skills
title: skills-sh-github-awesome-copilot-terraform-azurerm-set-diff-analyzer
summary: >-
  # Terraform AzureRM Set Diff Analyzer Script

  A Python script that analyzes Terraform plan JSON and identifies
  "false-positive diffs" in AzureRM Set-type attributes.

  ## Overview

  AzureRM Provider's Set-type attributes (such as `backend_address_pool`,
  `security_rule`, etc.) don't guarantee order, so when adding or removing
  elements, all elements appear as "changed". This script distinguishes such
  "false-positive diffs" from actual changes.

  ### Use Cases

  - As an **Agent Skill** (recommended)

  - As a **CLI tool** for manual execution

  - For automated analysis in **CI/CD pipelines**

  ## Prerequisites

  - Python 3.8 or higher
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/github/awesome-copilot/HEAD/skills/terraform-azurerm-set-diff-analyzer/scripts/README.md
license: ""
upstream_ref: https://skills.sh/github/awesome-copilot/terraform-azurerm-set-diff-analyzer
github_stars: 26261
github_forks: 3023
github_is_organization: true
retrieved_at: 2026-03-31T07:30:48.574Z
content_sha256: fcabc67e277dbbc3d46b81edce7aae50e71da4f93dc0b1358e4c45737570e82c
---
|/data/skills-sh-github-awesome-copilot-terraform-azurerm-set-diff-analyzer|

---
stable_id: skills/skills-sh-github-awesome-copilot-web-coder
type: skills
title: skills-sh-github-awesome-copilot-web-coder
summary: >-
  # HTML & Markup Reference

  Comprehensive reference for HTML5, markup languages, and document structure.

  ## Core Concepts

  ### HTML (HyperText Markup Language)

  The standard markup language for creating web pages and web applications.

  **Related Terms**: HTML5, XHTML, Markup, Semantic HTML

  ### Elements

  Building blocks of HTML documents. Each element has opening/closing tags
  (except void elements).

  **Common Elements**:

  - `<div>` - Generic container
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/github/awesome-copilot/HEAD/skills/web-coder/references/html-markup.md
license: ""
upstream_ref: https://skills.sh/github/awesome-copilot/web-coder
github_stars: 26261
github_forks: 3023
github_is_organization: true
retrieved_at: 2026-03-31T07:30:52.161Z
content_sha256: e3b9ff6b24c0de4a7b48169ff4f69ed827cd74c4a7c13620825eaf62d04d1801
---
|/data/skills-sh-github-awesome-copilot-web-coder|

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
github_stars: 26261
github_forks: 3023
github_is_organization: true
retrieved_at: 2026-03-31T07:30:34.636Z
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
github_stars: 932
github_forks: 38
github_is_organization: true
retrieved_at: 2026-03-31T07:30:48.720Z
content_sha256: 7d36d5c341e7db26cdff6fb99a82bcd2703a28bfe303a162bfb0dc4e4d3b9570
---
|/data/skills-sh-github-awesome-copilot-winapp-cli|

---
stable_id: skills/skills-sh-github-awesome-copilot-write-coding-standards-from-file
type: skills
title: skills-sh-github-awesome-copilot-write-coding-standards-from-file
summary: >-
  # lowRISC Verilog Coding Style Guide

  ## Basics

  ### Summary

  Verilog is the main logic design language for lowRISC Comportable IP.

  Verilog and SystemVerilog (often generically referred to as just "Verilog" in

  this document) can be written in vastly different styles, which can lead to
  code

  conflicts and code review latency.  This style guide aims to promote Verilog

  readability across groups.  To quote the

  [Google C++ style guide](https://google.github.io/styleguide/cppguide.html):

  "Creating common, required idioms and patterns makes code much easier to
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/lowRISC/style-guides/master/VerilogCodingStyle.md
license: ""
upstream_ref: https://skills.sh/github/awesome-copilot/write-coding-standards-from-file
github_stars: 487
github_forks: 128
github_is_organization: true
retrieved_at: 2026-03-31T07:30:38.962Z
content_sha256: 57869e2f133aa0db840c9562134cbbfaef457137c4a72f5bbf9ec44b6e672170
---
|/data/skills-sh-github-awesome-copilot-write-coding-standards-from-file|

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
retrieved_at: 2026-03-31T07:34:17.932Z
content_sha256: a9aca976f35f235f3cad5fba2e23a44214ac273965368d45a1cce5b129edefbc
---
|/data/skills-sh-giulioco-skills-postbridge-social-growth|

---
stable_id: skills/skills-sh-google-labs-code-stitch-skills-stitch-design
type: skills
title: skills-sh-google-labs-code-stitch-skills-stitch-design
summary: >-
  ---

  description: Generate new screens from a text prompt using Stitch MCP.

  ---

  # Workflow: Text-to-Design

  Transform a text description into a high-fidelity design screen.

  ## Steps

  ### 1. Enhance the User Prompt

  Before calling the Stitch MCP tool, apply the [Prompt Enhancement
  Pipeline](../SKILL.md#prompt-enhancement-pipeline).

  - Identify the platform (Web/Mobile) and page type.

  - Incorporate any existing project design system from `.stitch/DESIGN.md`.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/google-labs-code/stitch-skills/HEAD/skills/stitch-design/workflows/text-to-design.md
license: ""
upstream_ref: https://skills.sh/google-labs-code/stitch-skills/stitch-design
github_stars: 2823
github_forks: 315
github_is_organization: true
retrieved_at: 2026-03-31T07:30:53.694Z
content_sha256: 86d50627174a1e907fecc58565e68273b9ca8117406f9c0195567fa5d1b81d96
---
|/data/skills-sh-google-labs-code-stitch-skills-stitch-design|

---
stable_id: skills/skills-sh-googleworkspace-cli-gws-calendar
type: skills
title: skills-sh-googleworkspace-cli-gws-calendar
summary: |-
  ---
  name: gws-calendar-insert
  description: "Google Calendar: Create a new event."
  metadata:
    version: 0.22.3
    openclaw:
      category: "productivity"
      requires:
        bins:
          - gws
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/googleworkspace/cli/HEAD/skills/gws-calendar-insert/SKILL.md
license: ""
upstream_ref: https://skills.sh/googleworkspace/cli/gws-calendar
github_stars: 21821
github_forks: 1033
github_is_organization: true
retrieved_at: 2026-03-31T07:30:28.719Z
content_sha256: ace8e4b3b5b53bba67f0bfb4f044d13ffe51b82110cd3222b9a21e3ff2ed3703
---
|/data/skills-sh-googleworkspace-cli-gws-calendar|

---
stable_id: skills/skills-sh-googleworkspace-cli-gws-chat
type: skills
title: skills-sh-googleworkspace-cli-gws-chat
summary: |-
  ---
  name: gws-chat-send
  description: "Google Chat: Send a message to a space."
  metadata:
    version: 0.22.3
    openclaw:
      category: "productivity"
      requires:
        bins:
          - gws
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/googleworkspace/cli/HEAD/skills/gws-chat-send/SKILL.md
license: ""
upstream_ref: https://skills.sh/googleworkspace/cli/gws-chat
github_stars: 21821
github_forks: 1033
github_is_organization: true
retrieved_at: 2026-03-31T07:30:50.931Z
content_sha256: 6968183c32d077d39d1ac6e356bae8ad65869840b46145d8ca34cc327410e43d
---
|/data/skills-sh-googleworkspace-cli-gws-chat|

---
stable_id: skills/skills-sh-googleworkspace-cli-gws-docs
type: skills
title: skills-sh-googleworkspace-cli-gws-docs
summary: |-
  ---
  name: gws-docs-write
  description: "Google Docs: Append text to a document."
  metadata:
    version: 0.22.3
    openclaw:
      category: "productivity"
      requires:
        bins:
          - gws
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/googleworkspace/cli/HEAD/skills/gws-docs-write/SKILL.md
license: ""
upstream_ref: https://skills.sh/googleworkspace/cli/gws-docs
github_stars: 21821
github_forks: 1033
github_is_organization: true
retrieved_at: 2026-03-31T07:30:28.803Z
content_sha256: 8b8f2945987bba7620d37a462210347e691317869de46279e7b6e6c7b54775e6
---
|/data/skills-sh-googleworkspace-cli-gws-docs|

---
stable_id: skills/skills-sh-googleworkspace-cli-gws-docs-write
type: skills
title: skills-sh-googleworkspace-cli-gws-docs-write
summary: >-
  ---

  name: gws-shared

  description: "gws CLI: Shared patterns for authentication, global flags, and
  output formatting."

  metadata:
    version: 0.22.3
    openclaw:
      category: "productivity"
      requires:
        bins:
          - gws
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/googleworkspace/cli/HEAD/skills/gws-shared/SKILL.md
license: ""
upstream_ref: https://skills.sh/googleworkspace/cli/gws-docs-write
github_stars: 21821
github_forks: 1033
github_is_organization: true
retrieved_at: 2026-03-31T07:30:44.621Z
content_sha256: cae719261c7a1d6abafaff4d7e0ac663af31ff7f583801aabb63ae9544b7bc4c
---
|/data/skills-sh-googleworkspace-cli-gws-docs-write|

---
stable_id: skills/skills-sh-googleworkspace-cli-gws-drive
type: skills
title: skills-sh-googleworkspace-cli-gws-drive
summary: |-
  ---
  name: gws-drive-upload
  description: "Google Drive: Upload a file with automatic metadata."
  metadata:
    version: 0.22.3
    openclaw:
      category: "productivity"
      requires:
        bins:
          - gws
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/googleworkspace/cli/HEAD/skills/gws-drive-upload/SKILL.md
license: ""
upstream_ref: https://skills.sh/googleworkspace/cli/gws-drive
github_stars: 21821
github_forks: 1033
github_is_organization: true
retrieved_at: 2026-03-31T07:30:28.511Z
content_sha256: 2b2a23df31ed76889cfd997ebbcf514dc212d567a00dc8c38ef232d553043c25
---
|/data/skills-sh-googleworkspace-cli-gws-drive|

---
stable_id: skills/skills-sh-googleworkspace-cli-gws-events
type: skills
title: skills-sh-googleworkspace-cli-gws-events
summary: >-
  ---

  name: gws-events-subscribe

  description: "Google Workspace Events: Subscribe to Workspace events and
  stream them as NDJSON."

  metadata:
    version: 0.22.3
    openclaw:
      category: "productivity"
      requires:
        bins:
          - gws
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/googleworkspace/cli/HEAD/skills/gws-events-subscribe/SKILL.md
license: ""
upstream_ref: https://skills.sh/googleworkspace/cli/gws-events
github_stars: 21821
github_forks: 1033
github_is_organization: true
retrieved_at: 2026-03-31T07:30:51.041Z
content_sha256: 5da8dbb52cb00df992191989572d84ae2ca90025b33834cb4f61ece43829feee
---
|/data/skills-sh-googleworkspace-cli-gws-events|

---
stable_id: skills/skills-sh-googleworkspace-cli-gws-gmail
type: skills
title: skills-sh-googleworkspace-cli-gws-gmail
summary: |-
  ---
  name: gws-gmail-send
  description: "Gmail: Send an email."
  metadata:
    version: 0.22.3
    openclaw:
      category: "productivity"
      requires:
        bins:
          - gws
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/googleworkspace/cli/HEAD/skills/gws-gmail-send/SKILL.md
license: ""
upstream_ref: https://skills.sh/googleworkspace/cli/gws-gmail
github_stars: 21821
github_forks: 1033
github_is_organization: true
retrieved_at: 2026-03-31T07:30:28.403Z
content_sha256: 0b4d566561b44ebbb4306b3b1591f9f4872b9a66a543c21eb83384d09c085b5e
---
|/data/skills-sh-googleworkspace-cli-gws-gmail|

---
stable_id: skills/skills-sh-googleworkspace-cli-gws-modelarmor
type: skills
title: skills-sh-googleworkspace-cli-gws-modelarmor
summary: >-
  ---

  name: gws-modelarmor-sanitize-prompt

  description: "Google Model Armor: Sanitize a user prompt through a Model Armor
  template."

  metadata:
    version: 0.22.3
    openclaw:
      category: "security"
      requires:
        bins:
          - gws
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/googleworkspace/cli/HEAD/skills/gws-modelarmor-sanitize-prompt/SKILL.md
license: ""
upstream_ref: https://skills.sh/googleworkspace/cli/gws-modelarmor
github_stars: 21821
github_forks: 1033
github_is_organization: true
retrieved_at: 2026-03-31T07:30:51.358Z
content_sha256: 80bb944739d69518ae94c34b5781c7d05103fab54161367abf94b201a43092d5
---
|/data/skills-sh-googleworkspace-cli-gws-modelarmor|

---
stable_id: skills/skills-sh-googleworkspace-cli-gws-sheets
type: skills
title: skills-sh-googleworkspace-cli-gws-sheets
summary: |-
  ---
  name: gws-sheets-append
  description: "Google Sheets: Append a row to a spreadsheet."
  metadata:
    version: 0.22.3
    openclaw:
      category: "productivity"
      requires:
        bins:
          - gws
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/googleworkspace/cli/HEAD/skills/gws-sheets-append/SKILL.md
license: ""
upstream_ref: https://skills.sh/googleworkspace/cli/gws-sheets
github_stars: 21821
github_forks: 1033
github_is_organization: true
retrieved_at: 2026-03-31T07:30:29.121Z
content_sha256: a7487ffd5b9fee6a3a5221850fec0e156a4ff4b4cba59d28f39d52daaa37bea0
---
|/data/skills-sh-googleworkspace-cli-gws-sheets|

---
stable_id: skills/skills-sh-googleworkspace-cli-gws-workflow
type: skills
title: skills-sh-googleworkspace-cli-gws-workflow
summary: >-
  ---

  name: gws-workflow-standup-report

  description: "Google Workflow: Today's meetings + open tasks as a standup
  summary."

  metadata:
    version: 0.22.3
    openclaw:
      category: "productivity"
      requires:
        bins:
          - gws
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/googleworkspace/cli/HEAD/skills/gws-workflow-standup-report/SKILL.md
license: ""
upstream_ref: https://skills.sh/googleworkspace/cli/gws-workflow
github_stars: 21821
github_forks: 1033
github_is_organization: true
retrieved_at: 2026-03-31T07:30:50.852Z
content_sha256: b8d958487f0f5a20caaf6b9f63af98842e62935ec091c16c8632dba7cee335c8
---
|/data/skills-sh-googleworkspace-cli-gws-workflow|

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
retrieved_at: 2026-03-31T07:31:09.225Z
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
retrieved_at: 2026-03-31T07:31:09.564Z
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
retrieved_at: 2026-03-31T07:31:09.489Z
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
retrieved_at: 2026-03-31T07:34:21.508Z
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
retrieved_at: 2026-03-31T07:31:09.288Z
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
retrieved_at: 2026-03-31T07:31:09.154Z
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
retrieved_at: 2026-03-31T07:31:09.926Z
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
retrieved_at: 2026-03-31T07:31:12.846Z
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
retrieved_at: 2026-03-31T07:31:08.773Z
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
retrieved_at: 2026-03-31T07:34:21.075Z
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
retrieved_at: 2026-03-31T07:30:53.127Z
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

  - **Anonymous**: omit the header entirely. Sites expire in 24 hours with lower
  limits.

  ### Optional client attribution header

  You can include an optional header on site API calls:

  - `X-HereNow-Client: <agent>/<tool>`

  Examples:
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/heredotnow/skill/HEAD/here-now/references/REFERENCE.md
license: ""
upstream_ref: https://skills.sh/heredotnow/skill/here-now
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:30:53.780Z
content_sha256: 821cf6c7a4fbb60b76b03e2849a62322fac785339a024c46d7968569ff6c1020
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
retrieved_at: 2026-03-31T07:31:10.644Z
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
github_stars: 1988
github_forks: 104
github_is_organization: true
retrieved_at: 2026-03-31T07:30:26.512Z
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
retrieved_at: 2026-03-31T07:31:11.685Z
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
retrieved_at: 2026-03-31T07:34:19.883Z
content_sha256: 79514ada712884f201f50cddced0a059697a0b82cee7b9a80cf744b9bc369739
---
|/data/skills-sh-imxv-pretty-mermaid-skills-pretty-mermaid|

---
stable_id: skills/skills-sh-inferen-sh-skills-agent-tools
type: skills
title: skills-sh-inferen-sh-skills-agent-tools
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
source_url: https://raw.githubusercontent.com/inferen-sh/skills/HEAD/tools/agent-tools/references/authentication.md
license: ""
upstream_ref: https://skills.sh/inferen-sh/skills/agent-tools
github_stars: 169
github_forks: 24
github_is_organization: true
retrieved_at: 2026-03-31T07:30:17.493Z
content_sha256: 65924807bfa86c677ecc8b3f1714adbec266cecab1864e46cb9f0a7492d9de2e
---
|/data/skills-sh-inferen-sh-skills-agent-tools|

---
stable_id: skills/skills-sh-inferen-sh-skills-ai-image-generation
type: skills
title: skills-sh-inferen-sh-skills-ai-image-generation
summary: >-
  # Install CLI

  ```sh

  curl -fsSL https://cli.inference.sh | sh

  infsh login

  ```

  ## What does the installer do?

  The install script detects your OS and architecture, downloads the correct
  binary from dist.inference.sh, verifies its SHA-256 checksum, and places it in
  your PATH. That's it — no elevated permissions, no background processes, no
  telemetry. If you have cosign installed, the installer also verifies the
  Sigstore signature automatically.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/inference-sh/skills/refs/heads/main/cli-install.md
license: ""
upstream_ref: https://skills.sh/inferen-sh/skills/ai-image-generation
github_stars: 169
github_forks: 24
github_is_organization: true
retrieved_at: 2026-03-31T07:30:17.410Z
content_sha256: 1db16252b21ac0a43f2736edc572f290a5d251795706972a0cced0f8615c0e17
---
|/data/skills-sh-inferen-sh-skills-ai-image-generation|

---
stable_id: skills/skills-sh-inferen-sh-skills-infsh-cli
type: skills
title: skills-sh-inferen-sh-skills-infsh-cli
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
source_url: https://raw.githubusercontent.com/inferen-sh/skills/HEAD/tools/infsh-cli/references/authentication.md
license: ""
upstream_ref: https://skills.sh/inferen-sh/skills/infsh-cli
github_stars: 169
github_forks: 24
github_is_organization: true
retrieved_at: 2026-03-31T07:30:17.553Z
content_sha256: 65924807bfa86c677ecc8b3f1714adbec266cecab1864e46cb9f0a7492d9de2e
---
|/data/skills-sh-inferen-sh-skills-infsh-cli|

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
retrieved_at: 2026-03-31T07:30:27.426Z
content_sha256: 81d7e3e42f5803e8e820edf19ca4b5e54c54ad18afa3c0be98b7d3949b8adbd8
---
|/data/skills-sh-inferen-sh-skills-javascript-sdk|

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
retrieved_at: 2026-03-31T07:30:27.366Z
content_sha256: da24fe3d637d13163a570db4f0a25d840b7e61076662500826a10f80b4d4db4e
---
|/data/skills-sh-inferen-sh-skills-python-sdk|

---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.2.88

  - Added `includeSystemMessages` option to `getSessionMessages()` to optionally
  include system messages in session history

  - Added `includeHookEvents` option to enable hook lifecycle messages
  (`hook_started`, `hook_progress`, `hook_response`) for all hook event types

  - Fixed error result messages (`error_during_execution`, `error_max_turns`,
  `error_max_budget_usd`) to correctly set `is_error: true` with descriptive
  messages

  - Fixed `side_question` returning null on resume before the first turn
  completes

  - Fixed MCP servers getting permanently stuck in a failed state after a
  connection race — they now retry on the next message

  - Fixed `StructuredOutput` schema cache bug causing ~50% failure rate in
  workflows with multiple schemas

  - Fixed `ERR_STREAM_WRITE_AFTER_END` errors when single-turn queries with MCP
  servers or hooks have control responses arriving after the result message

  - Fixed Zod v4 field `.describe()` metadata being dropped from
  `createSdkMcpServer` tool schemas
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:31:14.795Z
content_sha256: ccdf086e199677b3bb554b6c671c9dc21f2823cf96dca835b5a7ac83e5be4af7
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
retrieved_at: 2026-03-31T07:31:14.092Z
content_sha256: 3246b413c28f643b21bb72f2b20bda5133ab11bac124b1c6ab3427be96ec997b
---
|/data/skills-sh-jezweb-claude-skills-react-native-expo|

---
stable_id: skills/skills-sh-jimliu-baoyu-skills-baoyu-article-illustrator
type: skills
title: skills-sh-jimliu-baoyu-skills-baoyu-article-illustrator
summary: >-
  # Style Presets

  `--preset X` expands to a type + style combination. Users can override either
  dimension.

  ## By Category

  ### Technical & Engineering

  | --preset | Type | Style | Best For |

  |----------|------|-------|----------|

  | `tech-explainer` | `infographic` | `blueprint` | API docs, system metrics,
  technical deep-dives |

  | `system-design` | `framework` | `blueprint` | Architecture diagrams, system
  design |

  | `architecture` | `framework` | `vector-illustration` | Component
  relationships, module structure |

  | `science-paper` | `infographic` | `scientific` | Research findings, lab
  results, academic |
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/jimliu/baoyu-skills/HEAD/skills/baoyu-article-illustrator/references/style-presets.md
license: ""
upstream_ref: https://skills.sh/jimliu/baoyu-skills/baoyu-article-illustrator
github_stars: 9795
github_forks: 1111
github_is_organization: false
retrieved_at: 2026-03-31T07:30:26.904Z
content_sha256: 83728770a2047532a38adb28c1457ea6dbcd93dbb472089bea23f561ca5da3f6
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
retrieved_at: 2026-03-31T07:30:58.541Z
content_sha256: 16295c68e71159f275e989e60003d1ba49f84d078bf2db8b3591ac119122db8f
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
retrieved_at: 2026-03-31T07:31:11.885Z
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
retrieved_at: 2026-03-31T07:30:59.470Z
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
github_stars: 9795
github_forks: 1111
github_is_organization: false
retrieved_at: 2026-03-31T07:30:26.819Z
content_sha256: 333cf3775fce8a24daeeb5a5a910a6d68202603fbf4e20d574dc50d1bbff0cdd
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
retrieved_at: 2026-03-31T07:30:58.598Z
content_sha256: 333cf3775fce8a24daeeb5a5a910a6d68202603fbf4e20d574dc50d1bbff0cdd
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
retrieved_at: 2026-03-31T07:31:20.116Z
content_sha256: 61db3aa0512d452163903d0b40c7d4062372e10df2053570a1a89ed656718800
---
|/data/skills-sh-jimliu-baoyu-skills-baoyu-danger-x-to-markdown|

---
stable_id: skills/skills-sh-jimliu-baoyu-skills-baoyu-image-gen
type: skills
title: skills-sh-jimliu-baoyu-skills-baoyu-image-gen
summary: >-
  ---

  name: first-time-setup

  description: First-time setup and default model selection flow for
  baoyu-image-gen

  ---

  # First-Time Setup

  ## Overview

  Triggered when:

  1. No EXTEND.md found → full setup (provider + model + preferences)

  2. EXTEND.md found but `default_model.[provider]` is null → model selection
  only

  ## Setup Flow
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/jimliu/baoyu-skills/HEAD/skills/baoyu-image-gen/references/config/first-time-setup.md
license: ""
upstream_ref: https://skills.sh/jimliu/baoyu-skills/baoyu-image-gen
github_stars: 9795
github_forks: 1111
github_is_organization: false
retrieved_at: 2026-03-31T07:30:26.328Z
content_sha256: c54a63c3616867d96eb2131bc0a0832fa7fc462b6a23de054aa5f5b5d09992bd
---
|/data/skills-sh-jimliu-baoyu-skills-baoyu-image-gen|

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
github_stars: 9795
github_forks: 1111
github_is_organization: false
retrieved_at: 2026-03-31T07:30:26.205Z
content_sha256: 55a58fc07db8425e45f9943f8b05045c2168ad44acc4206b64a218507b74532a
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

  ${BUN_X} ./scripts/wechat-browser.ts --markdown source.md --images ./images/

  # Post with explicit title and content

  ${BUN_X} ./scripts/wechat-browser.ts --title "标题" --content "内容" --image
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
retrieved_at: 2026-03-31T07:30:59.594Z
content_sha256: 790000e305128340e64f6b4c17c1a146a2fee6c3e130400242cd61628388f751
---
|/data/skills-sh-jimliu-baoyu-skills-baoyu-post-to-wechat-f876f2bd|

---
stable_id: skills/skills-sh-jimliu-baoyu-skills-baoyu-translate
type: skills
title: skills-sh-jimliu-baoyu-skills-baoyu-translate
summary: >-
  # EXTEND.md Schema for baoyu-translate

  ## Format

  EXTEND.md uses YAML format:

  ```yaml

  # Default target language (ISO code or common name)

  target_language: zh-CN

  # Default translation mode

  default_mode: normal  # quick | normal | refined

  # Target audience (affects annotation depth and register)

  audience: general  # general | technical | academic | business | or custom
  string
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/jimliu/baoyu-skills/HEAD/skills/baoyu-translate/references/config/extend-schema.md
license: ""
upstream_ref: https://skills.sh/jimliu/baoyu-skills/baoyu-translate
github_stars: 9795
github_forks: 1111
github_is_organization: false
retrieved_at: 2026-03-31T07:30:50.802Z
content_sha256: ba3677cf40bb5063f450927b4fcde2f361a832e6a8632604a270df8372884593
---
|/data/skills-sh-jimliu-baoyu-skills-baoyu-translate|

---
stable_id: skills/skills-sh-jimliu-baoyu-skills-baoyu-url-to-markdown
type: skills
title: skills-sh-jimliu-baoyu-skills-baoyu-url-to-markdown
summary: >-
  ---

  name: first-time-setup

  description: First-time setup flow for baoyu-url-to-markdown preferences

  ---

  # First-Time Setup

  ## Overview

  When no EXTEND.md is found, guide user through preference setup.

  **BLOCKING OPERATION**: This setup MUST complete before ANY other workflow
  steps. Do NOT:

  - Start converting URLs

  - Ask about URLs or output paths
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/jimliu/baoyu-skills/HEAD/skills/baoyu-url-to-markdown/references/config/first-time-setup.md
license: ""
upstream_ref: https://skills.sh/jimliu/baoyu-skills/baoyu-url-to-markdown
github_stars: 9795
github_forks: 1111
github_is_organization: false
retrieved_at: 2026-03-31T07:30:27.682Z
content_sha256: 571620de72538e8b4f247a63e6db27ce5a27495d1283015ec16c1076d91811cc
---
|/data/skills-sh-jimliu-baoyu-skills-baoyu-url-to-markdown|

---
stable_id: skills/skills-sh-jimliu-baoyu-skills-baoyu-xhs-images
type: skills
title: skills-sh-jimliu-baoyu-skills-baoyu-xhs-images
summary: >-
  # Style Presets

  `--preset X` expands to a style + layout combination. Users can override
  either dimension.

  | --preset | Style | Layout |

  |----------|-------|--------|

  | `knowledge-card` | `notion` | `dense` |

  | `checklist` | `notion` | `list` |

  | `concept-map` | `notion` | `mindmap` |

  | `swot` | `notion` | `quadrant` |

  | `tutorial` | `chalkboard` | `flow` |

  | `classroom` | `chalkboard` | `balanced` |
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/jimliu/baoyu-skills/HEAD/skills/baoyu-xhs-images/references/style-presets.md
license: ""
upstream_ref: https://skills.sh/jimliu/baoyu-skills/baoyu-xhs-images
github_stars: 9795
github_forks: 1111
github_is_organization: false
retrieved_at: 2026-03-31T07:30:26.959Z
content_sha256: 0620ce34347d83247c0502f5386437f1ef8229710a6e46690ac35ccaed65e255
---
|/data/skills-sh-jimliu-baoyu-skills-baoyu-xhs-images|

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
retrieved_at: 2026-03-31T07:30:54.899Z
content_sha256: b699d2245ddc6b6cdd08d86db0a89903556dc33138acb2d34645b5c2fb319219
---
|/data/skills-sh-kadajett-agent-nestjs-skills-nestjs-best-practices|

---
stable_id: skills/skills-sh-kepano-obsidian-skills-json-canvas
type: skills
title: skills-sh-kepano-obsidian-skills-json-canvas
summary: |-
  # JSON Canvas Complete Examples
  ## Simple Canvas with Text and Connections
  ```json
  {
    "nodes": [
      {
        "id": "8a9b0c1d2e3f4a5b",
        "type": "text",
        "x": 0,
        "y": 0,
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/kepano/obsidian-skills/HEAD/skills/json-canvas/references/EXAMPLES.md
license: ""
upstream_ref: https://skills.sh/kepano/obsidian-skills/json-canvas
github_stars: 15199
github_forks: 846
github_is_organization: false
retrieved_at: 2026-03-31T07:30:50.710Z
content_sha256: f5ce15a4b74643122396265e8c37c828874a4005794de2aee7030662968768eb
---
|/data/skills-sh-kepano-obsidian-skills-json-canvas|

---
stable_id: skills/skills-sh-kepano-obsidian-skills-obsidian-bases
type: skills
title: skills-sh-kepano-obsidian-skills-obsidian-bases
summary: >-
  # Functions Reference

  ## Global Functions

  | Function | Signature | Description |

  |----------|-----------|-------------|

  | `date()` | `date(string): date` | Parse string to date. Format: `YYYY-MM-DD
  HH:mm:ss` |

  | `duration()` | `duration(string): duration` | Parse duration string |

  | `now()` | `now(): date` | Current date and time |

  | `today()` | `today(): date` | Current date (time = 00:00:00) |

  | `if()` | `if(condition, trueResult, falseResult?)` | Conditional |

  | `min()` | `min(n1, n2, ...): number` | Smallest number |
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/kepano/obsidian-skills/HEAD/skills/obsidian-bases/references/FUNCTIONS_REFERENCE.md
license: ""
upstream_ref: https://skills.sh/kepano/obsidian-skills/obsidian-bases
github_stars: 15199
github_forks: 846
github_is_organization: false
retrieved_at: 2026-03-31T07:30:28.862Z
content_sha256: 208fd63aead9bca1975626fea52605e6ab9434dc0529d923feb36b18b8877d3b
---
|/data/skills-sh-kepano-obsidian-skills-obsidian-bases|

---
stable_id: skills/skills-sh-kepano-obsidian-skills-obsidian-markdown
type: skills
title: skills-sh-kepano-obsidian-skills-obsidian-markdown
summary: |-
  # Properties (Frontmatter) Reference
  Properties use YAML frontmatter at the start of a note:
  ```yaml
  ---
  title: My Note Title
  date: 2024-01-15
  tags:
    - project
    - important
  aliases:
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/kepano/obsidian-skills/HEAD/skills/obsidian-markdown/references/PROPERTIES.md
license: ""
upstream_ref: https://skills.sh/kepano/obsidian-skills/obsidian-markdown
github_stars: 15199
github_forks: 846
github_is_organization: false
retrieved_at: 2026-03-31T07:30:29.175Z
content_sha256: 392953b5838c3ab3df135b5a914f100ae7b95e4501b6a2e5c8dc63da3ac7558b
---
|/data/skills-sh-kepano-obsidian-skills-obsidian-markdown|

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
retrieved_at: 2026-03-31T07:31:00.173Z
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
github_stars: 133762
github_forks: 20840
github_is_organization: true
retrieved_at: 2026-03-31T07:30:51.817Z
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
retrieved_at: 2026-03-31T07:31:13.733Z
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
retrieved_at: 2026-03-31T07:31:14.851Z
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
retrieved_at: 2026-03-31T07:30:55.268Z
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
retrieved_at: 2026-03-31T07:34:19.550Z
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
retrieved_at: 2026-03-31T07:34:19.819Z
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
retrieved_at: 2026-03-31T07:31:10.289Z
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

  ## Get started

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
github_stars: 35
github_forks: 3
github_is_organization: true
retrieved_at: 2026-03-31T07:30:35.083Z
content_sha256: 0dbb4fb695f461405e6cc83c3a78fe1d14786761a87e3048f4c6fed8317a7fc0
---
|/data/skills-sh-mastra-ai-skills-mastra|

---
stable_id: skills/skills-sh-mattpocock-skills-improve-codebase-architecture
type: skills
title: skills-sh-mattpocock-skills-improve-codebase-architecture
summary: >-
  # Reference

  ## Dependency Categories

  When assessing a candidate for deepening, classify its dependencies:

  ### 1. In-process

  Pure computation, in-memory state, no I/O. Always deepenable — just merge the
  modules and test directly.

  ### 2. Local-substitutable

  Dependencies that have local test stand-ins (e.g., PGLite for Postgres,
  in-memory filesystem). Deepenable if the test substitute exists. The deepened
  module is tested with the local stand-in running in the test suite.

  ### 3. Remote but owned (Ports & Adapters)

  Your own services across a network boundary (microservices, internal APIs).
  Define a port (interface) at the module boundary. The deep module owns the
  logic; the transport is injected. Tests use an in-memory adapter. Production
  uses the real HTTP/gRPC/queue adapter.

  Recommendation shape: "Define a shared interface (port), implement an HTTP
  adapter for production and an in-memory adapter for testing, so the logic can
  be tested as one deep module even though it's deployed across a network
  boundary."
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/mattpocock/skills/HEAD/improve-codebase-architecture/REFERENCE.md
license: ""
upstream_ref: https://skills.sh/mattpocock/skills/improve-codebase-architecture
github_stars: 8203
github_forks: 659
github_is_organization: false
retrieved_at: 2026-03-31T07:30:54.067Z
content_sha256: dd47bb0359f8e09db95d393c6b9f8c77430af37826d939557edc2abef59cddbb
---
|/data/skills-sh-mattpocock-skills-improve-codebase-architecture|

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
github_stars: 8203
github_forks: 659
github_is_organization: false
retrieved_at: 2026-03-31T07:30:50.528Z
content_sha256: e12182f5c4c6a844b7c6ab4b8d2623b642aaaae5460fe58ed087efd4f3d5fb8a
---
|/data/skills-sh-mattpocock-skills-tdd|

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
github_stars: 9471
github_forks: 1165
github_is_organization: true
retrieved_at: 2026-03-31T07:30:50.463Z
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
retrieved_at: 2026-03-31T07:31:20.486Z
content_sha256: 80675d7718f7f2586eb9074e1411ed53b59b27d3559da95114c149cd3fb7f524
---
|/data/skills-sh-mcp-use-mcp-use-mcp-apps-builder|

---
stable_id: skills/skills-sh-microsoft-azure-skills-azure-cloud-migrate
type: skills
title: skills-sh-microsoft-azure-skills-azure-cloud-migrate
summary: >-
  # Global Rules

  These rules apply to ALL phases of the migration skill.

  ## Destructive Action Policy

  ⛔ **NEVER** perform destructive actions without explicit user confirmation via
  `ask_user`:

  - Deleting files or directories

  - Overwriting existing code

  - Deploying to production environments

  - Modifying existing Azure resources

  - Removing AWS resources

  ## User Confirmation Required
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/microsoft/azure-skills/HEAD/.github/plugins/azure-skills/skills/azure-cloud-migrate/references/services/functions/global-rules.md
license: ""
upstream_ref: https://skills.sh/microsoft/azure-skills/azure-cloud-migrate
github_stars: 461
github_forks: 57
github_is_organization: true
retrieved_at: 2026-03-31T07:30:17.717Z
content_sha256: 2811f9a08ce21f2cbc24c0da2abaa142bda66de5d17ce75dd706c5ecc6a763d8
---
|/data/skills-sh-microsoft-azure-skills-azure-cloud-migrate|

---
stable_id: skills/skills-sh-microsoft-azure-skills-azure-quotas
type: skills
title: skills-sh-microsoft-azure-skills-azure-quotas
summary: >-
  # Azure Quota CLI Commands Reference

  Comprehensive reference for Azure CLI quota commands.

  ## Prerequisites

  **Install quota extension** (required):

  ```bash

  az extension add --name quota

  ```

  > **⚠️ CRITICAL: ALWAYS USE CLI FIRST**

  >

  > Azure CLI is the **ONLY reliable method** for quota checks. **Use `az quota`
  commands FIRST, always.**
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/microsoft/azure-skills/HEAD/.github/plugins/azure-skills/skills/azure-quotas/references/commands.md
license: ""
upstream_ref: https://skills.sh/microsoft/azure-skills/azure-quotas
github_stars: 461
github_forks: 57
github_is_organization: true
retrieved_at: 2026-03-31T07:30:17.942Z
content_sha256: 8c5d3df832a20322ed8e94be757ef2fe49fdd39a781aaddd69fe5b6867a3a627
---
|/data/skills-sh-microsoft-azure-skills-azure-quotas|

---
stable_id: skills/skills-sh-microsoft-azure-skills-azure-upgrade
type: skills
title: skills-sh-microsoft-azure-skills-azure-upgrade
summary: >-
  # Global Rules

  These rules apply to ALL phases of the azure-upgrade skill.

  ## Destructive Action Policy

  ⛔ **NEVER** perform destructive actions without explicit user confirmation via
  `ask_user`:

  - Deleting apps, services, or resource groups

  - Stopping or disabling the original app/service

  - Overwriting app settings or configuration in the new app

  - Removing the original hosting plan or service tier

  - Modifying DNS or custom domain bindings

  ## User Confirmation Required
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/microsoft/azure-skills/HEAD/.github/plugins/azure-skills/skills/azure-upgrade/references/global-rules.md
license: ""
upstream_ref: https://skills.sh/microsoft/azure-skills/azure-upgrade
github_stars: 461
github_forks: 57
github_is_organization: true
retrieved_at: 2026-03-31T07:30:18.265Z
content_sha256: 42e0a4b593b20cf4cba43509f19d781053e31c690e47f8dfef70e3748f7f0fb8
---
|/data/skills-sh-microsoft-azure-skills-azure-upgrade|

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
github_stars: 160
github_forks: 103
github_is_organization: true
retrieved_at: 2026-03-31T07:30:16.638Z
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
github_stars: 160
github_forks: 103
github_is_organization: true
retrieved_at: 2026-03-31T07:30:16.261Z
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
github_stars: 160
github_forks: 103
github_is_organization: true
retrieved_at: 2026-03-31T07:30:16.837Z
content_sha256: 176a5bf61186a45e338dcc9ab6e9320a7b4ae3d8bb356f8613506533348b3b69
---
|/data/skills-sh-microsoft-github-copilot-for-azure-azure-aigateway|

---
stable_id: skills/skills-sh-microsoft-github-copilot-for-azure-azure-cloud-migrate
type: skills
title: skills-sh-microsoft-github-copilot-for-azure-azure-cloud-migrate
summary: >-
  # Global Rules

  These rules apply to ALL phases of the migration skill.

  ## Destructive Action Policy

  ⛔ **NEVER** perform destructive actions without explicit user confirmation via
  `ask_user`:

  - Deleting files or directories

  - Overwriting existing code

  - Deploying to production environments

  - Modifying existing Azure resources

  - Removing AWS resources

  ## User Confirmation Required
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/microsoft/github-copilot-for-azure/HEAD/plugin/skills/azure-cloud-migrate/references/services/functions/global-rules.md
license: ""
upstream_ref: https://skills.sh/microsoft/github-copilot-for-azure/azure-cloud-migrate
github_stars: 155
github_forks: 101
github_is_organization: true
retrieved_at: 2026-03-31T07:36:00.759Z
content_sha256: 2811f9a08ce21f2cbc24c0da2abaa142bda66de5d17ce75dd706c5ecc6a763d8
---
|/data/skills-sh-microsoft-github-copilot-for-azure-azure-cloud-migrate|

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
github_stars: 160
github_forks: 103
github_is_organization: true
retrieved_at: 2026-03-31T07:30:16.709Z
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
github_stars: 160
github_forks: 103
github_is_organization: true
retrieved_at: 2026-03-31T07:30:17.649Z
content_sha256: dc71cfc7809c72f95ef36a37d086ed8f55d59d977a23eaba41423ae473da7c1a
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
github_stars: 160
github_forks: 103
github_is_organization: true
retrieved_at: 2026-03-31T07:30:16.427Z
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
retrieved_at: 2026-03-31T07:31:22.732Z
content_sha256: d63351e8f5a317d84acb28ec64f724ce50efee752043b81b3b380ee7a0db1211
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
github_stars: 160
github_forks: 103
github_is_organization: true
retrieved_at: 2026-03-31T07:30:16.491Z
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
github_stars: 160
github_forks: 103
github_is_organization: true
retrieved_at: 2026-03-31T07:30:17.349Z
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
retrieved_at: 2026-03-31T07:31:12.906Z
content_sha256: 206d243b21e22a129b68a4ba36729e18b740bffaf2dfa1aecc9fd36dc7d4df02
---
|/data/skills-sh-microsoft-github-copilot-for-azure-azure-messaging|

---
stable_id: skills/skills-sh-microsoft-github-copilot-for-azure-azure-prepare
type: skills
title: skills-sh-microsoft-github-copilot-for-azure-azure-prepare
summary: >-
  # Azure Context (Subscription & Location)

  Detect and confirm Azure subscription and location before generating
  artifacts. Run region capacity check for customer selected location

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
github_stars: 160
github_forks: 103
github_is_organization: true
retrieved_at: 2026-03-31T07:30:16.929Z
content_sha256: 80dce2a24b8956959be4e50e90b69c109fb1b25fc1f2029ad9fc2c35e591731d
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
github_stars: 160
github_forks: 103
github_is_organization: true
retrieved_at: 2026-03-31T07:30:17.072Z
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
github_stars: 160
github_forks: 103
github_is_organization: true
retrieved_at: 2026-03-31T07:30:16.769Z
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
github_stars: 160
github_forks: 103
github_is_organization: true
retrieved_at: 2026-03-31T07:30:16.334Z
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
github_stars: 160
github_forks: 103
github_is_organization: true
retrieved_at: 2026-03-31T07:30:16.994Z
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
github_stars: 160
github_forks: 103
github_is_organization: true
retrieved_at: 2026-03-31T07:30:16.567Z
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

  | MCP server | `azure` |

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
github_stars: 160
github_forks: 103
github_is_organization: true
retrieved_at: 2026-03-31T07:30:17.172Z
content_sha256: 89b621da066c7816345edfd21c77fdc8de3d897be85ef3f6e1f4d7694b57c6ed
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
retrieved_at: 2026-03-31T07:31:20.818Z
content_sha256: 54e801c9663fc2b6d68ceb058cb1c360724c2499f42acc7852a68e83e5b5f37c
---
|/data/skills-sh-microsoft-playwright-cli-playwright-cli|

---
stable_id: skills/skills-sh-molezzz-openclaw-stock-skill-akshare-stock
type: skills
title: skills-sh-molezzz-openclaw-stock-skill-akshare-stock
summary: |-
  ---
  name: akshare-stock
  description: A股分析全能 Skill（实时行情、技术面、基本面、板块、衍生品与跨市场），基于 akshare + 自然语言路由
  metadata:
    openclaw:
      emoji: "📈"
      requires:
        python_modules: ["akshare", "pandas", "numpy"]
  ---
  # A股分析全能 Skill（AKShare）
tags:
  - skills-sh
  - skills-sh-probed
source_url: https://raw.githubusercontent.com/molezzz/openclaw-stock-skill/main/SKILL.md
license: ""
upstream_ref: https://skills.sh/molezzz/openclaw-stock-skill/akshare-stock
github_stars: 3
github_forks: 0
github_is_organization: false
retrieved_at: 2026-03-31T07:34:21.681Z
content_sha256: 235be18f969784adbbeb19470e245ad55469c5abb909a7948213dc8c1073cbeb
---
|/data/skills-sh-molezzz-openclaw-stock-skill-akshare-stock|

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
retrieved_at: 2026-03-31T07:31:10.588Z
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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:30:54.149Z
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
retrieved_at: 2026-03-31T07:31:12.008Z
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
retrieved_at: 2026-03-31T07:34:19.247Z
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
retrieved_at: 2026-03-31T07:31:10.405Z
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
retrieved_at: 2026-03-31T07:34:20.195Z
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
retrieved_at: 2026-03-31T07:34:19.942Z
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
retrieved_at: 2026-03-31T07:34:19.754Z
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
retrieved_at: 2026-03-31T07:34:20.627Z
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
retrieved_at: 2026-03-31T07:31:11.022Z
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
retrieved_at: 2026-03-31T07:34:20.800Z
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
github_stars: 599
github_forks: 27
github_is_organization: false
retrieved_at: 2026-03-31T07:30:52.027Z
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
retrieved_at: 2026-03-31T07:31:22.991Z
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
source_url: https://raw.githubusercontent.com/onmax/nuxt-skills/HEAD/skills/vueuse/references/composables.md
license: ""
upstream_ref: https://skills.sh/onmax/nuxt-skills/vueuse
github_stars: 560
github_forks: 27
github_is_organization: false
retrieved_at: 2026-03-31T07:31:22.516Z
content_sha256: 114c0d66be66904926227b5187c0b7e843704fcdf1c752122e198c41ae8c0bc6
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
retrieved_at: 2026-03-31T07:30:55.321Z
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
retrieved_at: 2026-03-31T07:30:54.859Z
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
retrieved_at: 2026-03-31T07:34:17.549Z
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
retrieved_at: 2026-03-31T07:30:59.656Z
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
github_stars: 16661
github_forks: 1525
github_is_organization: false
retrieved_at: 2026-03-31T07:30:53.998Z
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
github_stars: 16661
github_forks: 1525
github_is_organization: false
retrieved_at: 2026-03-31T07:30:28.571Z
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
retrieved_at: 2026-03-31T07:31:13.938Z
content_sha256: 990172ff51d8958c9711a23e0857029ef2c92dfeb75112e304aa96af1704825d
---
|/data/skills-sh-payloadcms-skills-payload|

---
stable_id: skills/skills-sh-pexoai-pexo-skills-videoagent-video-studio
type: skills
title: skills-sh-pexoai-pexo-skills-videoagent-video-studio
summary: >-
  # Video Generation Models

  All models supported by the video-studio proxy. Pass `model` in the request
  body or use `--model` in the CLI.

  For per-model endpoint details and input parameters, see
  [calling_guide.md](calling_guide.md).

  ## Generation Modes

  | Mode | Description | Supported Models |

  |------|-------------|-----------------|

  | **text-to-video** | Text prompt only → video | minimax, kling, veo, hunyuan,
  grok, seedance |

  | **image-to-video** | Single image + prompt → animated clip | minimax, kling,
  veo, pixverse, grok, seedance |

  | **reference-based** | Reference images or video → consistent output |
  minimax, kling, veo, hunyuan, grok, seedance |

  Reference-based generation uses a separate endpoint per model. Supported
  models return `ref: true` and `referenceToVideoEndpoint` in `GET
  /api/generate`.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/pexoai/pexo-skills/HEAD/skills/videoagent-video-studio/references/models.md
license: ""
upstream_ref: https://skills.sh/pexoai/pexo-skills/videoagent-video-studio
github_stars: 299
github_forks: 14
github_is_organization: false
retrieved_at: 2026-03-31T07:30:28.652Z
content_sha256: c18c3b7a89765b6c1292e074c22ed56a6334b71e91ef192fb86de60dcd754f74
---
|/data/skills-sh-pexoai-pexo-skills-videoagent-video-studio|

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
retrieved_at: 2026-03-31T07:34:19.039Z
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
retrieved_at: 2026-03-31T07:30:55.110Z
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
retrieved_at: 2026-03-31T07:31:10.702Z
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
retrieved_at: 2026-03-31T07:31:11.250Z
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
retrieved_at: 2026-03-31T07:31:12.452Z
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
retrieved_at: 2026-03-31T07:34:21.135Z
content_sha256: f9518bb5e0e5dff531041fd82962a307495f034ec0259217ab4a47a1090236c2
---
|/data/skills-sh-pproenca-dot-skills-zod|

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
retrieved_at: 2026-03-31T07:34:21.575Z
content_sha256: a34d1c3407dbaa9a23fdf20f43f4f65c88f07f396cfbf8034c98bf518b8a2d69
---
|/data/skills-sh-pskoett-self-improving-agent-self-improvement|

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
retrieved_at: 2026-03-31T07:31:22.353Z
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
retrieved_at: 2026-03-31T07:31:12.585Z
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
github_stars: 2283
github_forks: 273
github_is_organization: true
retrieved_at: 2026-03-31T07:30:16.206Z
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
retrieved_at: 2026-03-31T07:31:08.700Z
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
retrieved_at: 2026-03-31T07:30:59.877Z
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
retrieved_at: 2026-03-31T07:31:09.634Z
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
retrieved_at: 2026-03-31T07:30:59.801Z
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
retrieved_at: 2026-03-31T07:34:20.081Z
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
retrieved_at: 2026-03-31T07:34:20.281Z
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
github_stars: 606
github_forks: 62
github_is_organization: true
retrieved_at: 2026-03-31T07:30:25.974Z
content_sha256: 76f781cd26f929b87d943775db223523a444ef4c66e8ee143c4d9ccdb8850457
---
|/data/skills-sh-resciencelab-opc-skills-seo-geo|

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
retrieved_at: 2026-03-31T07:31:20.593Z
content_sha256: cb169f1ec7b73363d6fdc609de53c1a42e6743839830d6d81dd4bf44db53ea0b
---
|/data/skills-sh-resend-react-email-react-email|

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
retrieved_at: 2026-03-31T07:34:17.857Z
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
retrieved_at: 2026-03-31T07:31:22.271Z
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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:36:01.019Z
content_sha256: 8d12d8d26d288f383e36dabea1cda9f1a9bbd96b6d8d23b7e364403dd2cb5c8f
---
|/data/skills-sh-samhvw8-dot-claude-ui-design-system|

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
  Description:
    Manage Linear authentication
  Options:
    -h, --help               - Show this help.
    -w, --workspace  <slug>  - Target workspace (uses credentials)
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/schpet/linear-cli/HEAD/skills/linear-cli/references/auth.md
license: ""
upstream_ref: https://skills.sh/schpet/linear-cli/linear-cli
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:36:01.096Z
content_sha256: 2106078af9182b688dadbe49784f45c77e60247cf9cd37f47122a27f8c37e71c
---
|/data/skills-sh-schpet-linear-cli-linear-cli|

---
stable_id: skills/skills-sh-shadcn-ui-shadcn
type: skills
title: skills-sh-shadcn-ui-shadcn
summary: >-
  # Styling & Customization

  See [customization.md](../customization.md) for theming, CSS variables, and
  adding custom colors.

  ## Contents

  - Semantic colors

  - Built-in variants first

  - className for layout only

  - No space-x-* / space-y-*

  - Prefer size-* over w-* h-* when equal

  - Prefer truncate shorthand

  - No manual dark: color overrides
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/shadcn/ui/HEAD/skills/shadcn/rules/styling.md
license: ""
upstream_ref: https://skills.sh/shadcn/ui/shadcn
github_stars: 110214
github_forks: 8267
github_is_organization: true
retrieved_at: 2026-03-31T07:30:25.013Z
content_sha256: 4a71da3fc53d8efbedac26946e5b13b53d1edf71583d62088ccc2b8cc7b5fef7
---
|/data/skills-sh-shadcn-ui-shadcn|

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
retrieved_at: 2026-03-31T07:34:19.094Z
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
retrieved_at: 2026-03-31T07:31:01.805Z
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
retrieved_at: 2026-03-31T07:31:10.763Z
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
retrieved_at: 2026-03-31T07:31:07.803Z
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
retrieved_at: 2026-03-31T07:31:07.677Z
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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:30:54.229Z
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
retrieved_at: 2026-03-31T07:31:09.432Z
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
retrieved_at: 2026-03-31T07:31:09.354Z
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
github_stars: 1144
github_forks: 86
github_is_organization: true
retrieved_at: 2026-03-31T07:30:52.359Z
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
github_stars: 1144
github_forks: 86
github_is_organization: true
retrieved_at: 2026-03-31T07:30:52.450Z
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
retrieved_at: 2026-03-31T07:34:18.495Z
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
retrieved_at: 2026-03-31T07:31:20.315Z
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
github_stars: 1144
github_forks: 86
github_is_organization: true
retrieved_at: 2026-03-31T07:30:51.954Z
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
retrieved_at: 2026-03-31T07:31:20.246Z
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
github_stars: 1144
github_forks: 86
github_is_organization: true
retrieved_at: 2026-03-31T07:30:52.658Z
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
retrieved_at: 2026-03-31T07:31:20.398Z
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
github_stars: 1144
github_forks: 86
github_is_organization: true
retrieved_at: 2026-03-31T07:30:52.248Z
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
github_stars: 65
github_forks: 7
github_is_organization: true
retrieved_at: 2026-03-31T07:30:18.170Z
content_sha256: 4e508b7a055d04ab588207eb9c69567f88a5002f3e402a2e08c3c19b41a2dc5a
---
|/data/skills-sh-squirrelscan-skills-audit-website|

---
stable_id: skills/skills-sh-stripe-ai-stripe-best-practices
type: skills
title: skills-sh-stripe-ai-stripe-best-practices
summary: |-
  # Payments
  ## Table of contents
  - API hierarchy
  - Integration surfaces
  - Payment Element guidance
  - Saving payment methods
  - Dynamic payment methods
  - Deprecated APIs and migration paths
  - PCI compliance
  ## API hierarchy
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/stripe/ai/HEAD/skills/stripe-best-practices/references/payments.md
license: ""
upstream_ref: https://skills.sh/stripe/ai/stripe-best-practices
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:30:54.304Z
content_sha256: 87881816f8c3cb9e90c47f8e9c1a79848f29ae70af7ddb09c45da6f3345c64e7
---
|/data/skills-sh-stripe-ai-stripe-best-practices|

---
stable_id: skills/skills-sh-supercent-io-skills-template-codebase-search
type: skills
title: skills-sh-supercent-io-skills-template-codebase-search
summary: |-
  ## User Guide
  This guide is intended to give an elementary description of ripgrep and an
  overview of its capabilities. This guide assumes that ripgrep is
  [installed](README.md#installation)
  and that readers have passing familiarity with using command line tools. This
  also assumes a Unix-like system, although most commands are probably easily
  translatable to any command line shell environment.
  ### Table of Contents
  * [Basics](#basics)
  * [Recursive search](#recursive-search)
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/BurntSushi/ripgrep/master/GUIDE.md
license: ""
upstream_ref: https://skills.sh/supercent-io/skills-template/codebase-search
github_stars: 61172
github_forks: 2438
github_is_organization: false
retrieved_at: 2026-03-31T07:30:27.556Z
content_sha256: f79e4aa0bc39fb5b88e612b459ef2bf57455cbb87a7c600a244f08bef323ba32
---
|/data/skills-sh-supercent-io-skills-template-codebase-search|

---
stable_id: skills/skills-sh-supercent-io-skills-template-llm-monitoring-dashboard
type: skills
title: skills-sh-supercent-io-skills-template-llm-monitoring-dashboard
summary: >-
  # Guide: Adding Support for New Models

  This guide will help you add support for a new LLM model/provider to
  prompt-tokens.

  > **Important**: Before starting, please review the [Rust Best
  Practices](../OPEN_SOURCE_PLAN.md#-rust-best-practices) section to ensure your
  code follows project standards.

  ## Overview

  Adding a new model involves:

  1. Understanding the model's tokenizer

  2. Implementing the `Tokenizer` trait

  3. Registering the model in the registry

  4. Adding pricing information

  5. Writing tests
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/nooscraft/tokuin/main/ADDING_MODELS_GUIDE.md
license: ""
upstream_ref: https://skills.sh/supercent-io/skills-template/llm-monitoring-dashboard
github_stars: 129
github_forks: 3
github_is_organization: false
retrieved_at: 2026-03-31T07:30:50.078Z
content_sha256: 1975b4cb7f02dafe3cbd299b52918bcf4cfb37e5823d59ea7f8720a52d001922
---
|/data/skills-sh-supercent-io-skills-template-llm-monitoring-dashboard|

---
stable_id: skills/skills-sh-supercent-io-skills-template-plannotator
type: skills
title: skills-sh-supercent-io-skills-template-plannotator
summary: |-
  # Plannotator Claude Code Plugin
  This directory contains the Claude Code plugin configuration for Plannotator.
  ## Prerequisites
  Install the `plannotator` command so Claude Code can use it:
  **macOS / Linux / WSL:**
  ```bash
  curl -fsSL https://plannotator.ai/install.sh | bash
  ```
  **Windows PowerShell:**
  ```powershell
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/backnotprop/plannotator/main/apps/hook/README.md
license: ""
upstream_ref: https://skills.sh/supercent-io/skills-template/plannotator
github_stars: 3402
github_forks: 204
github_is_organization: false
retrieved_at: 2026-03-31T07:30:28.169Z
content_sha256: 916fc75d8dafe304abbc0dfd0093020c3c1e53ca65fb7118e728bc74a6a45c03
---
|/data/skills-sh-supercent-io-skills-template-plannotator|

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
source_url: https://raw.githubusercontent.com/tavily-ai/skills/HEAD/skills/tavily-best-practices/references/sdk.md
license: ""
upstream_ref: https://skills.sh/tavily-ai/skills/tavily-best-practices
github_stars: 118
github_forks: 11
github_is_organization: true
retrieved_at: 2026-03-31T07:30:51.581Z
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
retrieved_at: 2026-03-31T07:34:21.340Z
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
retrieved_at: 2026-03-31T07:31:23.716Z
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
retrieved_at: 2026-03-31T07:31:23.619Z
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
retrieved_at: 2026-03-31T07:34:20.364Z
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
retrieved_at: 2026-03-31T07:34:20.887Z
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
retrieved_at: 2026-03-31T07:31:22.652Z
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
retrieved_at: 2026-03-31T07:34:21.211Z
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
retrieved_at: 2026-03-31T07:31:14.153Z
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
retrieved_at: 2026-03-31T07:31:23.351Z
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
retrieved_at: 2026-03-31T07:34:20.553Z
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
retrieved_at: 2026-03-31T07:34:21.286Z
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
retrieved_at: 2026-03-31T07:31:13.275Z
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
retrieved_at: 2026-03-31T07:34:20.940Z
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
retrieved_at: 2026-03-31T07:31:23.415Z
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
retrieved_at: 2026-03-31T07:34:20.000Z
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
retrieved_at: 2026-03-31T07:34:19.299Z
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
retrieved_at: 2026-03-31T07:31:23.127Z
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
retrieved_at: 2026-03-31T07:34:20.680Z
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
retrieved_at: 2026-03-31T07:31:14.249Z
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
retrieved_at: 2026-03-31T07:31:23.570Z
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
retrieved_at: 2026-03-31T07:34:21.413Z
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
retrieved_at: 2026-03-31T07:34:20.492Z
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
retrieved_at: 2026-03-31T07:31:23.788Z
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
retrieved_at: 2026-03-31T07:34:20.146Z
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
retrieved_at: 2026-03-31T07:31:14.635Z
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
retrieved_at: 2026-03-31T07:31:10.015Z
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
retrieved_at: 2026-03-31T07:31:10.139Z
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
github_stars: 22851
github_forks: 4028
github_is_organization: true
retrieved_at: 2026-03-31T07:30:26.399Z
content_sha256: 64949f0614a629733d1c47d6e5d5b953d90a696e71922695f69248a21290dcad
---
|/data/skills-sh-vercel-ai-ai-sdk|

---
stable_id: skills/skills-sh-vercel-labs-agent-browser-agent-browser
type: skills
title: skills-sh-vercel-labs-agent-browser-agent-browser
summary: >-
  # Authentication Patterns

  Login flows, session persistence, OAuth, 2FA, and authenticated browsing.

  **Related**: [session-management.md](session-management.md) for state
  persistence details, [SKILL.md](../SKILL.md) for quick start.

  ## Contents

  - [Import Auth from Your Browser](#import-auth-from-your-browser)

  - [Persistent Profiles](#persistent-profiles)

  - [Session Persistence](#session-persistence)

  - [Basic Login Flow](#basic-login-flow)

  - [Saving Authentication State](#saving-authentication-state)

  - [Restoring Authentication](#restoring-authentication)
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/vercel-labs/agent-browser/HEAD/skills/agent-browser/references/authentication.md
license: ""
upstream_ref: https://skills.sh/vercel-labs/agent-browser/agent-browser
github_stars: 23871
github_forks: 1407
github_is_organization: true
retrieved_at: 2026-03-31T07:30:17.239Z
content_sha256: 8ccc30f2613523630cf3771a07d71339676d93c63623631a4206521c6d78d2e5
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
github_stars: 23871
github_forks: 1407
github_is_organization: true
retrieved_at: 2026-03-31T07:30:26.750Z
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
github_stars: 745
github_forks: 47
github_is_organization: true
retrieved_at: 2026-03-31T07:30:18.084Z
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
github_stars: 30048
github_forks: 2301
github_is_organization: true
retrieved_at: 2026-03-31T07:30:26.596Z
content_sha256: 913f6aba1026d710bce1701825e368bb2843791a5716f1df15e5041501a7940f
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
retrieved_at: 2026-03-31T07:31:09.768Z
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
github_stars: 1988
github_forks: 104
github_is_organization: true
retrieved_at: 2026-03-31T07:30:53.217Z
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
retrieved_at: 2026-03-31T07:31:12.059Z
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
github_stars: 1988
github_forks: 104
github_is_organization: true
retrieved_at: 2026-03-31T07:30:51.494Z
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
retrieved_at: 2026-03-31T07:31:08.419Z
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
retrieved_at: 2026-03-31T07:31:08.900Z
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
retrieved_at: 2026-03-31T07:34:18.155Z
content_sha256: 20e2298b8ebeca51e189394ec924756dfaef5fa70170ff7fd2fbdb5177718fcd
---
|/data/skills-sh-waynesutton-convexskills-convex-functions|

---
stable_id: skills/skills-sh-whatevertogo-feishuskill-lark-mcp
type: skills
title: skills-sh-whatevertogo-feishuskill-lark-mcp
summary: >-
  # 安装配置

  ## 快速配置

  ```json

  {
    "mcpServers": {
      "lark-mcp": {
        "command": "npx",
        "args": ["-y", "@larksuiteoapi/lark-mcp", "mcp", "-a", "<app_id>", "-s", "<app_secret>"]
      }
    }
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/whatevertogo/feishuskill/HEAD/lark-mcp/reference/installation.md
license: ""
upstream_ref: https://skills.sh/whatevertogo/feishuskill/lark-mcp
github_stars: 30
github_forks: 4
github_is_organization: false
retrieved_at: 2026-03-31T07:30:53.618Z
content_sha256: eab1c2aaacb473c9019f6de85c0a230afb265d5554a3e4edad122c11c64a6cd8
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
retrieved_at: 2026-03-31T07:31:20.655Z
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
retrieved_at: 2026-03-31T07:34:17.442Z
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
retrieved_at: 2026-03-31T07:30:55.216Z
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
retrieved_at: 2026-03-31T07:30:55.389Z
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
    Optimized for Nano Banana Pro (Gemini), but prompts also work with Nano Banana 2, Seedream 5.0,
    GPT Image 1.5, Midjourney, DALL-E, Flux, Stable Diffusion, and any text-to-image AI model.
    Use this skill when users want to:
    - Generate images with AI (any model — Nano Banana Pro, Gemini, GPT Image, Seedream, etc.)
    - Find proven AI image generation prompts and prompt templates
    - Get prompt recommendations for specific use cases (portraits, products, social media, posters, etc.)
tags:
  - skills-sh
  - skills-sh-probed
source_url: https://raw.githubusercontent.com/youmind-openlab/nano-banana-pro-prompts-recommend-skill/main/SKILL.md
license: ""
upstream_ref: https://skills.sh/youmind-openlab/nano-banana-pro-prompts-recommend-skill/nano-banana-pro-prompts-recommend-skill
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:30:55.442Z
content_sha256: 668abbedcda5f863c80cd60fe89f388d72bde09ee6ec2f8b68797f1b63557884
---
|/data/skills-sh-youmind-openlab-nano-banana-pro-prompts-recommend-skill-nano-banana-pro-prompts-recommend-skill|

---
stable_id: skills/skills-sh-zaddy6-agent-email-skill-agent-email-cli
type: skills
title: skills-sh-zaddy6-agent-email-skill-agent-email-cli
summary: >-
  # Command Reference

  ## Core commands

  ```bash

  agent-email create

  agent-email read <email|default> [--limit <n>] [--full] [--wait <s>]
  [--interval <s>]

  agent-email show <email|default> <messageId>

  agent-email delete <email|default> <messageId>

  ```

  ## Profile commands

  ```bash
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/zaddy6/agent-email-skill/HEAD/skills/agent-email-cli/references/commands.md
license: ""
upstream_ref: https://skills.sh/zaddy6/agent-email-skill/agent-email-cli
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-31T07:36:00.932Z
content_sha256: 31cb0325dc81ca6522fe0b64c3ddae01c1d1a1a31d80b79ff9c4207e9c5d7c2b
---
|/data/skills-sh-zaddy6-agent-email-skill-agent-email-cli|

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
retrieved_at: 2026-03-31T07:30:55.495Z
content_sha256: dc010b204b24e8ba93afdaebf5e3093c377918cf7b0250afb928383e48b2ac0d
---
|/data/skills-sh-zaferayan-skills-zafer-skills|

---
stable_id: skills/skills-sh-zhjiang22-openclaw-xhs-xiaohongshu
type: skills
title: skills-sh-zhjiang22-openclaw-xhs-xiaohongshu
summary: |-
  ---
  name: xiaohongshu
  description: |
    小红书（RedNote）内容工具。使用场景：
    - 搜索小红书笔记并获取详情
    - 获取首页推荐列表
    - 获取帖子详情（正文、图片、互动数据、评论）
    - 发表评论 / 回复评论
    - 获取用户主页和笔记列表
    - 点赞、收藏帖子
tags:
  - skills-sh
  - skills-sh-probed
source_url: https://raw.githubusercontent.com/zhjiang22/openclaw-xhs/main/SKILL.md
license: ""
upstream_ref: https://skills.sh/zhjiang22/openclaw-xhs/xiaohongshu
github_stars: 66
github_forks: 10
github_is_organization: false
retrieved_at: 2026-03-31T07:34:21.614Z
content_sha256: 54e65dc79c7cf4e4285ee563ff3a96cbab427bf2f257c7e20f18b922046b6f01
---
|/data/skills-sh-zhjiang22-openclaw-xhs-xiaohongshu|
