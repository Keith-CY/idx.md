<!-- Contribute: open a PR to add new markdown sources to sources/general.yml -->
---
stable_id: skills/agentskills-skill
type: skills
title: agentskills-skill
summary: >-
  ---

  name: Agent

  description: Use when creating, optimizing, or evaluating Agent Skills — the
  open format for extending AI agent capabilities. Reach for this skill when
  building SKILL.md files, testing skill descriptions, bundling scripts, or
  implementing skills support in an agent client.

  metadata:
      mintlify-proj: agent
      version: "1.0"
  ---

  # Agent Skills

  ## Product summary

  Agent Skills is an open format for packaging specialized knowledge and
  workflows into portable, version-controlled folders that AI agents load on
  demand. A skill is a directory containing a `SKILL.md` file (metadata +
  instructions) plus optional scripts, references, and assets. Agents discover
  skills at startup, load only the name and description initially, and pull full
  instructions when a task matches the skill's scope. This progressive
  disclosure keeps context efficient while giving agents access to domain
  expertise, repeatable workflows, and cross-product reuse.
tags: []
source_url: https://agentskills.io/skill.md
license: ""
upstream_ref: ""
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:21:21.903Z
content_sha256: 415bae7d5099fe082b159ba6651607456a37c2f9a99e82f730033846f27cff48
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
retrieved_at: 2026-06-10T08:22:33.561Z
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
retrieved_at: 2026-06-10T08:21:20.659Z
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
retrieved_at: 2026-06-10T08:23:13.142Z
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
retrieved_at: 2026-06-10T08:23:13.266Z
content_sha256: f7c93d25f3d18d937331eac825ad08147416c22992db98afe1bab170f399d732
---
|/data/github-skill-agno-agi-agno-git-workflow-cdbf56f5|

---
stable_id: skills/github-skill-anthropics-knowledge-work-plugins-call-prep
type: skills
title: call-prep
summary: Prepare for a customer or prospect call using Common Room signals.
  Triggers on 'prep me for my call with [company]', 'prepare for a meeting with
  [company]', 'what should I know before talking to [company]', or any call
  preparation request.
tags:
  - github-skill-search
  - source-github-code-search
  - category-communication
  - github-owner-anthropics
  - github-repo-knowledge-work-plugins
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/partner-built/common-room/skills/call-prep/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/partner-built/common-room/skills/call-prep/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:23:13.338Z
content_sha256: 652c42776860edfa9b81c77aac0b545bb7748a708e01c001f356acc11d7e9f58
---
|/data/github-skill-anthropics-knowledge-work-plugins-call-prep|

---
stable_id: skills/github-skill-composiohq-awesome-claude-skills-forcemanager-automation-185f86fa
type: skills
title: forcemanager-automation
summary: Automate Forcemanager tasks via Rube MCP (Composio). Always search
  tools first for current schemas.
tags:
  - github-skill-search
  - source-github-code-search
  - category-productivity-tasks
  - github-owner-composiohq
  - github-repo-awesome-claude-skills
source_url: https://raw.githubusercontent.com/ComposioHQ/awesome-claude-skills/master/composio-skills/forcemanager-automation/SKILL.md
license: ""
upstream_ref: https://github.com/ComposioHQ/awesome-claude-skills/blob/master/composio-skills/forcemanager-automation/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:23:13.594Z
content_sha256: 2df436e1a15073c3a2dba36d4b2caa85dffb362413ee35fa0cb61fe561258849
---
|/data/github-skill-composiohq-awesome-claude-skills-forcemanager-automation-185f86fa|

---
stable_id: skills/github-skill-composiohq-awesome-claude-skills-ip2location-io-automation-e171a20b
type: skills
title: ip2location-io-automation
summary: Automate Ip2location IO tasks via Rube MCP (Composio). Always search
  tools first for current schemas.
tags:
  - github-skill-search
  - source-github-code-search
  - category-productivity-tasks
  - github-owner-composiohq
  - github-repo-awesome-claude-skills
source_url: https://raw.githubusercontent.com/ComposioHQ/awesome-claude-skills/master/composio-skills/ip2location-io-automation/SKILL.md
license: ""
upstream_ref: https://github.com/ComposioHQ/awesome-claude-skills/blob/master/composio-skills/ip2location-io-automation/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:23:13.777Z
content_sha256: 9d97fd2f3e0b46186b51284313f1c7123df6ec79c1d45c9d57c6eb323ba81122
---
|/data/github-skill-composiohq-awesome-claude-skills-ip2location-io-automation-e171a20b|

---
stable_id: skills/github-skill-composiohq-awesome-claude-skills-kickbox-automation-3347ff5a
type: skills
title: kickbox-automation
summary: Automate Kickbox tasks via Rube MCP (Composio). Always search tools
  first for current schemas.
tags:
  - github-skill-search
  - source-github-code-search
  - category-productivity-tasks
  - github-owner-composiohq
  - github-repo-awesome-claude-skills
source_url: https://raw.githubusercontent.com/ComposioHQ/awesome-claude-skills/master/composio-skills/kickbox-automation/SKILL.md
license: ""
upstream_ref: https://github.com/ComposioHQ/awesome-claude-skills/blob/master/composio-skills/kickbox-automation/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:23:13.874Z
content_sha256: af9fe0d1f5271243ae5584a05649b47db516845e350fa6609ea7289a012f76da
---
|/data/github-skill-composiohq-awesome-claude-skills-kickbox-automation-3347ff5a|

---
stable_id: skills/github-skill-coreyhaines31-marketingskills-programmatic-seo
type: skills
title: programmatic-seo
summary: When the user wants to create SEO-driven pages at scale using templates
  and data. Also use when the user mentions "programmatic SEO," "template
  pages," "pages at scale," "directory pages," "location pages," "[keyword] +
  [city] pages," "comparison pages," "integration pages," or "building many
  pages for SEO." For auditing existing SEO issues, see seo-audit.
tags:
  - github-skill-search
  - source-github-code-search
  - category-productivity-tasks
  - github-owner-coreyhaines31
  - github-repo-marketingskills
source_url: https://raw.githubusercontent.com/coreyhaines31/marketingskills/main/skills/programmatic-seo/SKILL.md
license: ""
upstream_ref: https://github.com/coreyhaines31/marketingskills/blob/main/skills/programmatic-seo/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:23:13.963Z
content_sha256: 15cb5979cab5263ede902a830e03342869256ece17905bff240eef498e27cde1
---
|/data/github-skill-coreyhaines31-marketingskills-programmatic-seo|

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
retrieved_at: 2026-06-10T08:23:14.051Z
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
retrieved_at: 2026-06-10T08:23:14.116Z
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
retrieved_at: 2026-06-10T08:23:14.181Z
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
retrieved_at: 2026-06-10T08:23:14.237Z
content_sha256: 14b3597b4b5db371a3aa684276125701440d6910d1e17003fcda006227f24de5
---
|/data/github-skill-danielmiessler-personal-ai-infrastructure-prompting-22ec27f8|

---
stable_id: skills/github-skill-darrenhinde-openagentscontrol-task-breakdown
type: skills
title: task-breakdown
summary: Break down complex features into atomic, verifiable subtasks with
  dependency tracking. Use when implementing multi-step workflows, complex
  features requiring multiple files, or when the user requests task planning.
tags:
  - github-skill-search
  - source-github-code-search
  - category-productivity-tasks
  - github-owner-darrenhinde
  - github-repo-openagentscontrol
source_url: https://raw.githubusercontent.com/darrenhinde/OpenAgentsControl/main/plugins/claude-code/skills/task-breakdown/SKILL.md
license: ""
upstream_ref: https://github.com/darrenhinde/OpenAgentsControl/blob/main/plugins/claude-code/skills/task-breakdown/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:23:14.295Z
content_sha256: 1787142d7a588474118d5fde5927779cd56d0da476acc0454fccc9af4671a39b
---
|/data/github-skill-darrenhinde-openagentscontrol-task-breakdown|

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
retrieved_at: 2026-06-10T08:23:14.356Z
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
retrieved_at: 2026-06-10T08:23:14.414Z
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
retrieved_at: 2026-06-10T08:23:14.474Z
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
retrieved_at: 2026-06-10T08:23:14.512Z
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
retrieved_at: 2026-06-10T08:23:14.568Z
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
retrieved_at: 2026-06-10T08:23:14.656Z
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
retrieved_at: 2026-06-10T08:23:14.708Z
content_sha256: 3554dc2f0ca6550c01f71a3ea7c5a72899fc18bb3f3534e2593966a16be5f46a
---
|/data/github-skill-dicklesworthstone-pi-agent-rust-windsurf-common-errors|

---
stable_id: skills/github-skill-dlt-hub-dlt-review-pr
type: skills
title: review-pr
summary: Analyze a GitHub pull request including diff, comments, related issues,
  and local code context
tags:
  - github-skill-search
  - source-github-code-search
  - category-git-github
  - github-owner-dlt-hub
  - github-repo-dlt
source_url: https://raw.githubusercontent.com/dlt-hub/dlt/devel/.claude/skills/review-pr/SKILL.md
license: ""
upstream_ref: https://github.com/dlt-hub/dlt/blob/devel/.claude/skills/review-pr/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:23:14.768Z
content_sha256: 9eb2198eded473c8a2b9be4ea034ab10066e2509847c22ee18709ccc4dec0827
---
|/data/github-skill-dlt-hub-dlt-review-pr|

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
retrieved_at: 2026-06-10T08:23:14.832Z
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
retrieved_at: 2026-06-10T08:23:14.913Z
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
retrieved_at: 2026-06-10T08:23:14.963Z
content_sha256: 7a821397c656f51a20d601dc3c17fa258bc40561c48fa585675e7ae94c484ace
---
|/data/github-skill-florianbruniaux-claude-code-ultimate-guide-rtk-optimizer|

---
stable_id: skills/github-skill-github-awesome-copilot-copilot-instructions-blueprint-generator
type: skills
title: copilot-instructions-blueprint-generator
summary: Technology-agnostic blueprint generator for creating comprehensive
  copilot-instructions.md files that guide GitHub Copilot to produce code
  consistent with project standards, architecture patterns, and exact technology
  versions by analyzing existing codebase patterns and avoiding assumptions.
tags:
  - github-skill-search
  - source-github-code-search
  - category-git-github
  - github-owner-github
  - github-repo-awesome-copilot
source_url: https://raw.githubusercontent.com/github/awesome-copilot/main/skills/copilot-instructions-blueprint-generator/SKILL.md
license: ""
upstream_ref: https://github.com/github/awesome-copilot/blob/main/skills/copilot-instructions-blueprint-generator/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:23:15.009Z
content_sha256: e53409119442128e2afbc2b48ad1b286fb23b884934de26dd088b3a375fcfb2b
---
|/data/github-skill-github-awesome-copilot-copilot-instructions-blueprint-generator|

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
retrieved_at: 2026-06-10T08:23:15.029Z
content_sha256: 3557582d3169663c5561950fc390a6e1998b38d9722169ae09548624eb6c1f02
---
|/data/github-skill-jeffallan-claude-skills-websocket-engineer|

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
retrieved_at: 2026-06-10T08:23:15.101Z
content_sha256: 64081bfcde082200caf650637d6d177a9385913467a80db293fd8f90e59e3106
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
retrieved_at: 2026-06-10T08:23:15.162Z
content_sha256: cfdd4e07e4384cb6332abe346f621ed54d3789b3df08ab417fa2d870ae02643f
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
retrieved_at: 2026-06-10T08:23:15.217Z
content_sha256: 224d525e09ab4b23d3893ed200392291220547e6d4d87d505673cfc58f4dffeb
---
|/data/github-skill-jeremylongshore-claude-code-plugins-plus-skills-klingai-pricing-basics|

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
retrieved_at: 2026-06-10T08:23:15.312Z
content_sha256: 5cc346f94f0223d3a5c23319d56ace215afb524fbf3dcc8e3873cbc9533a2abd
---
|/data/github-skill-jeremylongshore-claude-code-plugins-plus-skills-prisma-schema-helper|

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
retrieved_at: 2026-06-10T08:23:15.396Z
content_sha256: c3a655c61f64acad0f03767ed89340c1a2b701df6f6c5ad5d529699a90c90058
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
retrieved_at: 2026-06-10T08:23:15.465Z
content_sha256: 18f37c169e08c2420624a57b6ef44a7b983a888b31d6e0a543e036eab26a911f
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
retrieved_at: 2026-06-10T08:23:15.512Z
content_sha256: ff8c3839906dbabc1ead2e3f57f09d3c8f6f5f60c3e054813ca4444edc212425
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
retrieved_at: 2026-06-10T08:23:15.577Z
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
retrieved_at: 2026-06-10T08:23:15.662Z
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
retrieved_at: 2026-06-10T08:23:15.707Z
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
retrieved_at: 2026-06-10T08:23:15.769Z
content_sha256: e166d6d628cb342ad09d3cec892f07ab29a3f3d26f8931251b3b5abf30f0260b
---
|/data/github-skill-kyegomez-swarms-financial-analysis|

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
retrieved_at: 2026-06-10T08:23:15.977Z
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
retrieved_at: 2026-06-10T08:23:16.020Z
content_sha256: 2f1695d5bb921105dedb33eacbf6979e265a830c0fd7915ef334b838cbc56910
---
|/data/github-skill-mukul975-anthropic-cybersecurity-skills-analyzing-ransomware-leak-site-intelligence|

---
stable_id: skills/github-skill-neolabhq-context-engineering-kit-sadd-multi-agent-patterns
type: skills
title: sadd:multi-agent-patterns
summary: Design multi-agent architectures for complex tasks. Use when
  single-agent context limits are exceeded, when tasks decompose naturally into
  subtasks, or when specializing agents improves quality.
tags:
  - github-skill-search
  - source-github-code-search
  - category-productivity-tasks
  - github-owner-neolabhq
  - github-repo-context-engineering-kit
source_url: https://raw.githubusercontent.com/NeoLabHQ/context-engineering-kit/master/plugins/sadd/skills/multi-agent-patterns/SKILL.md
license: ""
upstream_ref: https://github.com/NeoLabHQ/context-engineering-kit/blob/master/plugins/sadd/skills/multi-agent-patterns/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:23:16.103Z
content_sha256: 2d223dd152ae8dfda1bda6b3e604220373d377708d93409061eb2d5739e2f19b
---
|/data/github-skill-neolabhq-context-engineering-kit-sadd-multi-agent-patterns|

---
stable_id: skills/github-skill-novuhq-novu-react-email
type: skills
title: react-email
summary: Use when creating HTML email templates with React components - welcome
  emails, password resets, notifications, order confirmations, newsletters, or
  transactional emails.
tags:
  - github-skill-search
  - source-github-code-search
  - category-communication
  - github-owner-novuhq
  - github-repo-novu
source_url: https://raw.githubusercontent.com/novuhq/novu/next/.agents/skills/react-email/SKILL.md
license: ""
upstream_ref: https://github.com/novuhq/novu/blob/next/.agents/skills/react-email/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:23:16.176Z
content_sha256: 188d1556f5601bd3dbd9f0e57f9cbba9cbd7fad1ff75a1597fa7cbe7f15a73c6
---
|/data/github-skill-novuhq-novu-react-email|

---
stable_id: skills/github-skill-onmax-nuxt-skills-nuxt-seo
type: skills
title: nuxt-seo
summary: Nuxt SEO meta-module with robots, sitemap, og-image, schema-org. Use
  when configuring SEO, generating sitemaps, creating OG images, or adding
  structured data.
tags:
  - github-skill-search
  - source-github-code-search
  - category-transportation
  - github-owner-onmax
  - github-repo-nuxt-skills
source_url: https://raw.githubusercontent.com/onmax/nuxt-skills/main/skills/nuxt-seo/SKILL.md
license: ""
upstream_ref: https://github.com/onmax/nuxt-skills/blob/main/skills/nuxt-seo/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:23:16.228Z
content_sha256: 254b902fbdd467b08ff7c2556f02dec2afc99fcd47583e02d1f31f9c30e8fbb3
---
|/data/github-skill-onmax-nuxt-skills-nuxt-seo|

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
retrieved_at: 2026-06-10T08:23:16.320Z
content_sha256: 182bfd1e8a12acb301446c264e84188990247e2dd5395568219454c670498266
---
|/data/github-skill-openai-openai-agents-python-pr-draft-summary|

---
stable_id: skills/github-skill-openclaw-openclaw-gh-issues
type: skills
title: gh-issues
summary: "Fetch GitHub issues, spawn sub-agents to implement fixes and open PRs,
  then monitor and address PR review comments. Usage: /gh-issues [owner/repo]
  [--label bug] [--limit 5] [--milestone v1.0] [--assignee @me] [--fork
  user/repo] [--watch] [--interval 5] [--reviews-only] [--cron] [--dry-run]
  [--model glm-5] [--notify-channel -1002381931352]"
tags:
  - github-skill-search
  - source-github-code-search
  - category-git-github
  - github-owner-openclaw
  - github-repo-openclaw
source_url: https://raw.githubusercontent.com/openclaw/openclaw/main/skills/gh-issues/SKILL.md
license: ""
upstream_ref: https://github.com/openclaw/openclaw/blob/main/skills/gh-issues/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:23:16.368Z
content_sha256: 952a14ac4b441fc4dfbfd50d27aa26e12d0d4977fcca70bb315a68b8ff450f71
---
|/data/github-skill-openclaw-openclaw-gh-issues|

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
retrieved_at: 2026-06-10T08:23:17.536Z
content_sha256: 7cd27992a3d1ced1218836573b99d5c119f009c4f7a50bb2f0c803c63003e4a3
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
retrieved_at: 2026-06-10T08:23:17.637Z
content_sha256: 465ec53738d70b2103e5c3bcc53837884b914d7a517b217f8fa856179e0eda13
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
retrieved_at: 2026-06-10T08:23:17.686Z
content_sha256: 1cfa210ff5fcefe144f4968411f8656b9874aad4e79180e54847356cefe2f390
---
|/data/github-skill-quickwit-oss-tantivy-simple-pr|

---
stable_id: skills/github-skill-resend-react-email-react-email
type: skills
title: react-email
summary: Use when creating HTML email templates with React components - welcome
  emails, password resets, notifications, order confirmations, newsletters, or
  transactional emails.
tags:
  - github-skill-search
  - source-github-code-search
  - category-communication
  - github-owner-resend
  - github-repo-react-email
source_url: https://raw.githubusercontent.com/resend/react-email/canary/skills/react-email/SKILL.md
license: ""
upstream_ref: https://github.com/resend/react-email/blob/canary/skills/react-email/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:23:17.760Z
content_sha256: 6316bdbe822e49f93a709e81bc011569d1a1ea20f7de78cd33ea8a0501ad79b7
---
|/data/github-skill-resend-react-email-react-email|

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
retrieved_at: 2026-06-10T08:23:17.824Z
content_sha256: 846a7edd9709e38cc410e704fef70571624403f1ba6e48c301ce23d548716f15
---
|/data/github-skill-sickn33-antigravity-awesome-skills-hubspot-integration|

---
stable_id: skills/github-skill-sickn33-antigravity-awesome-skills-outlook-calendar-automation
type: skills
title: outlook-calendar-automation
summary: "Automate Outlook Calendar tasks via Rube MCP (Composio): create
  events, manage attendees, find meeting times, and handle invitations. Always
  search tools first for current schemas."
tags:
  - github-skill-search
  - source-github-code-search
  - category-communication
  - github-owner-sickn33
  - github-repo-antigravity-awesome-skills
source_url: https://raw.githubusercontent.com/sickn33/antigravity-awesome-skills/main/skills/outlook-calendar-automation/SKILL.md
license: ""
upstream_ref: https://github.com/sickn33/antigravity-awesome-skills/blob/main/skills/outlook-calendar-automation/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:23:17.882Z
content_sha256: c9df5ad16247b62fc0671c39b85405f4d0c5767ff7ecf7631ac1d63e1f9d03fc
---
|/data/github-skill-sickn33-antigravity-awesome-skills-outlook-calendar-automation|

---
stable_id: skills/github-skill-sickn33-antigravity-awesome-skills-upstash-qstash
type: skills
title: upstash-qstash
summary: "Upstash QStash expert for serverless message queues, scheduled jobs,
  and reliable HTTP-based task delivery without managing infrastructure. Use
  when: qstash, upstash queue, serverless cron, schedul..."
tags:
  - github-skill-search
  - source-github-code-search
  - category-calendar-scheduling
  - github-owner-sickn33
  - github-repo-antigravity-awesome-skills
source_url: https://raw.githubusercontent.com/sickn33/antigravity-awesome-skills/main/skills/upstash-qstash/SKILL.md
license: ""
upstream_ref: https://github.com/sickn33/antigravity-awesome-skills/blob/main/skills/upstash-qstash/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:23:17.920Z
content_sha256: 1455b4c257f8477787eb7064c2b6e5258dd44f4de9fc99bd78272922804ae5b3
---
|/data/github-skill-sickn33-antigravity-awesome-skills-upstash-qstash|

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
retrieved_at: 2026-06-10T08:23:17.972Z
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
retrieved_at: 2026-06-10T08:23:18.039Z
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
retrieved_at: 2026-06-10T08:23:18.137Z
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
retrieved_at: 2026-06-10T08:23:18.211Z
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
retrieved_at: 2026-06-10T08:23:18.290Z
content_sha256: 772795925d7f6ad5444f0eccb82153ce0fee44b84da157de5c48c2afaa7f5a30
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
retrieved_at: 2026-06-10T08:23:18.346Z
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
retrieved_at: 2026-06-10T08:23:18.464Z
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
retrieved_at: 2026-06-10T08:23:18.512Z
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
retrieved_at: 2026-06-10T08:23:18.560Z
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
retrieved_at: 2026-06-10T08:23:18.606Z
content_sha256: 0a2d654902bc04263ce68c8c02967ef03f17b482e855360a5463211d99d7baa9
---
|/data/ibelick-fixing-motion-performance|

---
stable_id: skills/knowledge-work-plugins-bio-research-skills-instrument-data-to-allotrope-skill
type: skills
title: instrument-data-to-allotrope
summary: Convert laboratory instrument output files (PDF, CSV, Excel, TXT) to
  Allotrope Simple Model (ASM) JSON format or flattened 2D CSV. Use this skill
  when scientists need to standardize instrument data for LIMS systems, data
  lakes, or downstream analysis. Supports auto-detection of instrument types.
  Outputs include full ASM JSON, flattened CSV for easy import, and exportable
  Python code for data engineers. Common triggers include converting instrument
  files, standardizing lab data, preparing data for upload to LIMS/ELN systems,
  or generating parser code for production pipelines.
tags:
  - source-knowledge-work-plugins
  - plugin-bio-research
  - plugin-component-skills
  - plugin-skill
  - category-search-research
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/bio-research/skills/instrument-data-to-allotrope/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/bio-research/skills/instrument-data-to-allotrope/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:21:28.805Z
content_sha256: 6167bf1731e568b63110a8f27e987cfe386f44e64cd2d78d9080d5d7628a79c5
---
|/data/knowledge-work-plugins-bio-research-skills-instrument-data-to-allotrope-skill|

---
stable_id: skills/knowledge-work-plugins-bio-research-skills-nextflow-development-skill
type: skills
title: nextflow-development
summary: Run nf-core bioinformatics pipelines (rnaseq, sarek, atacseq) on
  sequencing data. Use when analyzing RNA-seq, WGS/WES, or ATAC-seq data—either
  local FASTQs or public datasets from GEO/SRA. Triggers on nf-core, Nextflow,
  FASTQ analysis, variant calling, gene expression, differential expression, GEO
  reanalysis, GSE/GSM/SRR accessions, or samplesheet creation.
tags:
  - source-knowledge-work-plugins
  - plugin-bio-research
  - plugin-component-skills
  - plugin-skill
  - category-search-research
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/bio-research/skills/nextflow-development/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/bio-research/skills/nextflow-development/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:21:28.973Z
content_sha256: f30017df5d499427a701ec6cedfc5c9948ca3bd04ee1a2b6a585a29cd93ad0d7
---
|/data/knowledge-work-plugins-bio-research-skills-nextflow-development-skill|

---
stable_id: skills/knowledge-work-plugins-bio-research-skills-scientific-problem-selection-skill
type: skills
title: scientific-problem-selection
summary: This skill should be used when scientists need help with research
  problem selection, project ideation, troubleshooting stuck projects, or
  strategic scientific decisions. Use this skill when users ask to pitch a new
  research idea, work through a project problem, evaluate project risks, plan
  research strategy, navigate decision trees, or get help choosing what
  scientific problem to work on. Typical requests include "I have an idea for a
  project", "I'm stuck on my research", "help me evaluate this project", "what
  should I work on", or "I need strategic advice about my research".
tags:
  - source-knowledge-work-plugins
  - plugin-bio-research
  - plugin-component-skills
  - plugin-skill
  - category-search-research
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/bio-research/skills/scientific-problem-selection/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/bio-research/skills/scientific-problem-selection/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:21:29.146Z
content_sha256: 9ec99e3e5b2f4cd7474ef2bb8a1b10ee1f97dbe688c7723c7ec0b18deb8ff0f4
---
|/data/knowledge-work-plugins-bio-research-skills-scientific-problem-selection-skill|

---
stable_id: skills/knowledge-work-plugins-bio-research-skills-scvi-tools-skill
type: skills
title: scvi-tools
summary: Deep learning for single-cell analysis using scvi-tools. This skill
  should be used when users need (1) data integration and batch correction with
  scVI/scANVI, (2) ATAC-seq analysis with PeakVI, (3) CITE-seq multi-modal
  analysis with totalVI, (4) multiome RNA+ATAC analysis with MultiVI, (5)
  spatial transcriptomics deconvolution with DestVI, (6) label transfer and
  reference mapping with scANVI/scArches, (7) RNA velocity with veloVI, or (8)
  any deep learning-based single-cell method. Triggers include mentions of scVI,
  scANVI, totalVI, PeakVI, MultiVI, DestVI, veloVI, sysVI, scArches, variational
  autoencoder, VAE, batch correction, data integration, multi-modal, CITE-seq,
  multiome, reference mapping, latent space.
tags:
  - source-knowledge-work-plugins
  - plugin-bio-research
  - plugin-component-skills
  - plugin-skill
  - category-search-research
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/bio-research/skills/scvi-tools/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/bio-research/skills/scvi-tools/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:21:29.013Z
content_sha256: 03a69b32b77db86afe5f87b75db2ae4c92b03b6e9e16e2c5e66cde2d4ad9c5bc
---
|/data/knowledge-work-plugins-bio-research-skills-scvi-tools-skill|

---
stable_id: skills/knowledge-work-plugins-bio-research-skills-single-cell-rna-qc-skill
type: skills
title: single-cell-rna-qc
summary: Performs quality control on single-cell RNA-seq data (.h5ad or .h5
  files) using scverse best practices with MAD-based filtering and comprehensive
  visualizations. Use when users request QC analysis, filtering low-quality
  cells, assessing data quality, or following scverse/scanpy best practices for
  single-cell analysis.
tags:
  - source-knowledge-work-plugins
  - plugin-bio-research
  - plugin-component-skills
  - plugin-skill
  - category-search-research
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/bio-research/skills/single-cell-rna-qc/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/bio-research/skills/single-cell-rna-qc/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:21:29.056Z
content_sha256: 49cb573916deec6fcf6cc2cb1b573469cbc8c34b84326597ce2db22d0202393f
---
|/data/knowledge-work-plugins-bio-research-skills-single-cell-rna-qc-skill|

---
stable_id: skills/knowledge-work-plugins-bio-research-skills-start-skill
type: skills
title: start
summary: Set up your bio-research environment and explore available tools. Use
  when first getting oriented with the plugin, checking which literature,
  drug-discovery, or visualization MCP servers are connected, or surveying
  available analysis skills before starting a new project.
tags:
  - source-knowledge-work-plugins
  - plugin-bio-research
  - plugin-component-skills
  - plugin-skill
  - category-search-research
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/bio-research/skills/start/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/bio-research/skills/start/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:22:25.973Z
content_sha256: 6016fe5c28952feef14ac851134b35b56a1c86614d9163d21fb82205d7e7694b
---
|/data/knowledge-work-plugins-bio-research-skills-start-skill|

---
stable_id: skills/knowledge-work-plugins-cowork-plugin-management-skills-cowork-plugin-customizer-skill
type: skills
title: cowork-plugin-customizer
summary: Customize or personalize a Claude Code plugin for a specific
  organization's tools and workflows. Use when users want to customize a plugin,
  replace tool placeholders, or configure MCP servers for a plugin. This skill
  requires Cowork mode with mounted plugin directories and will not work in
  remote or standard CLI sessions.
tags:
  - source-knowledge-work-plugins
  - plugin-cowork-plugin-management
  - plugin-component-skills
  - plugin-skill
  - category-coding-agents-ides
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/cowork-plugin-management/skills/cowork-plugin-customizer/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/cowork-plugin-management/skills/cowork-plugin-customizer/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:21:29.869Z
content_sha256: d7a9455692f26479806b837aef09d4711b74f82b6e32ef304a5c33ae8feb441f
---
|/data/knowledge-work-plugins-cowork-plugin-management-skills-cowork-plugin-customizer-skill|

---
stable_id: skills/knowledge-work-plugins-cowork-plugin-management-skills-create-cowork-plugin-skill
type: skills
title: create-cowork-plugin
summary: Guide users through creating a new plugin from scratch in a cowork
  session. Use when users want to create a plugin, build a plugin, make a new
  plugin, develop a plugin, scaffold a plugin, start a plugin from scratch, or
  design a plugin. This skill requires Cowork mode with access to the outputs
  directory for delivering the final .plugin file.
tags:
  - source-knowledge-work-plugins
  - plugin-cowork-plugin-management
  - plugin-component-skills
  - plugin-skill
  - category-coding-agents-ides
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/cowork-plugin-management/skills/create-cowork-plugin/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/cowork-plugin-management/skills/create-cowork-plugin/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:21:32.223Z
content_sha256: 4769717426502a5517ae9d512095b49c223cccb0223e20268dfa6a44ef18ab94
---
|/data/knowledge-work-plugins-cowork-plugin-management-skills-create-cowork-plugin-skill|

---
stable_id: skills/knowledge-work-plugins-customer-support-skills-customer-escalation-skill
type: skills
title: customer-escalation
summary: Package an escalation for engineering, product, or leadership with full
  context. Use when a bug needs engineering attention beyond normal support,
  multiple customers report the same issue, a customer is threatening to churn,
  or an issue has sat unresolved past its SLA.
tags:
  - source-knowledge-work-plugins
  - plugin-customer-support
  - plugin-component-skills
  - plugin-skill
  - category-communication
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/customer-support/skills/customer-escalation/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/customer-support/skills/customer-escalation/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:22:26.060Z
content_sha256: 90c33574a41371e8e116aaf40237141adcd6075ef8bcb9de993de2b543867b3e
---
|/data/knowledge-work-plugins-customer-support-skills-customer-escalation-skill|

---
stable_id: skills/knowledge-work-plugins-customer-support-skills-customer-research-skill
type: skills
title: customer-research
summary: Research customer questions by searching across documentation,
  knowledge bases, and connected sources, then synthesize a confidence-scored
  answer. Use when a customer asks a question you need to investigate, when
  building background on a customer situation, or when you need account context.
tags:
  - source-knowledge-work-plugins
  - plugin-customer-support
  - plugin-component-skills
  - plugin-skill
  - category-communication
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/customer-support/skills/customer-research/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/customer-support/skills/customer-research/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:21:30.452Z
content_sha256: 9c504672d26dbb01ad4bb527a5352399760503aea0edf83bd3695e6bc346a128
---
|/data/knowledge-work-plugins-customer-support-skills-customer-research-skill|

---
stable_id: skills/knowledge-work-plugins-customer-support-skills-draft-response-skill
type: skills
title: draft-response
summary: Draft a professional customer-facing response tailored to the situation
  and relationship. Use when answering a product question, responding to an
  escalation or outage, delivering bad news like a delay or won't-fix, declining
  a feature request, or replying to a billing issue.
tags:
  - source-knowledge-work-plugins
  - plugin-customer-support
  - plugin-component-skills
  - plugin-skill
  - category-communication
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/customer-support/skills/draft-response/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/customer-support/skills/draft-response/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:22:26.100Z
content_sha256: 1a201228b75a98fc3b5d45090cb7443d50df204b2ee748bfc8970790a64f0026
---
|/data/knowledge-work-plugins-customer-support-skills-draft-response-skill|

---
stable_id: skills/knowledge-work-plugins-customer-support-skills-kb-article-skill
type: skills
title: kb-article
summary: Draft a knowledge base article from a resolved issue or common
  question. Use when a ticket resolution is worth documenting for self-service,
  the same question keeps coming up, a workaround needs to be published, or a
  known issue should be communicated to customers.
tags:
  - source-knowledge-work-plugins
  - plugin-customer-support
  - plugin-component-skills
  - plugin-skill
  - category-communication
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/customer-support/skills/kb-article/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/customer-support/skills/kb-article/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:22:25.992Z
content_sha256: cfc300f5ecc5128910a8ff04514d565a45ca9178bf1dc2a40cc40e2ce4db9292
---
|/data/knowledge-work-plugins-customer-support-skills-kb-article-skill|

---
stable_id: skills/knowledge-work-plugins-customer-support-skills-ticket-triage-skill
type: skills
title: ticket-triage
summary: Triage incoming support tickets by categorizing issues, assigning
  priority (P1-P4), and recommending routing. Use when a new ticket or customer
  issue comes in, when assessing severity, or when deciding which team should
  handle an issue.
tags:
  - source-knowledge-work-plugins
  - plugin-customer-support
  - plugin-component-skills
  - plugin-skill
  - category-communication
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/customer-support/skills/ticket-triage/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/customer-support/skills/ticket-triage/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:21:30.215Z
content_sha256: d0e5e95443e358ad2a74811b196071d10807ca95aa20351ab5760feeecee1294
---
|/data/knowledge-work-plugins-customer-support-skills-ticket-triage-skill|

---
stable_id: skills/knowledge-work-plugins-data-skills-analyze-skill
type: skills
title: analyze
summary: Answer data questions -- from quick lookups to full analyses. Use when
  looking up a single metric, investigating what's driving a trend or drop,
  comparing segments over time, or preparing a formal data report for
  stakeholders.
tags:
  - source-knowledge-work-plugins
  - plugin-data
  - plugin-component-skills
  - plugin-skill
  - category-data-analytics
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/data/skills/analyze/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/data/skills/analyze/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:22:26.557Z
content_sha256: 4ee816363d944c7a959e43384576d979a414f37fff7071c0bfb8935aae10143e
---
|/data/knowledge-work-plugins-data-skills-analyze-skill|

---
stable_id: skills/knowledge-work-plugins-data-skills-build-dashboard-skill
type: skills
title: build-dashboard
summary: Build an interactive HTML dashboard with charts, filters, and tables.
  Use when creating an executive overview with KPI cards, turning query results
  into a shareable self-contained report, building a team monitoring snapshot,
  or needing multiple charts with filters in one browser-openable file.
tags:
  - source-knowledge-work-plugins
  - plugin-data
  - plugin-component-skills
  - plugin-skill
  - category-data-analytics
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/data/skills/build-dashboard/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/data/skills/build-dashboard/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:22:26.704Z
content_sha256: 6f23faa0b266820a23096f76df9d83e6b67597af4fc8c3306b4eba7e9f409f99
---
|/data/knowledge-work-plugins-data-skills-build-dashboard-skill|

---
stable_id: skills/knowledge-work-plugins-data-skills-create-viz-skill
type: skills
title: create-viz
summary: Create publication-quality visualizations with Python. Use when turning
  query results or a DataFrame into a chart, selecting the right chart type for
  a trend or comparison, generating a plot for a report or presentation, or
  needing an interactive chart with hover and zoom.
tags:
  - source-knowledge-work-plugins
  - plugin-data
  - plugin-component-skills
  - plugin-skill
  - category-data-analytics
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/data/skills/create-viz/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/data/skills/create-viz/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:22:26.755Z
content_sha256: 3b13a9c2c9d2b1d36f9c323d952d93f578216f2094bc80d4be6fd4ccbfe9b77d
---
|/data/knowledge-work-plugins-data-skills-create-viz-skill|

---
stable_id: skills/knowledge-work-plugins-data-skills-data-context-extractor-skill
type: skills
title: data-context-extractor
summary: >-
  Generate or improve a company-specific data analysis skill by extracting
  tribal knowledge from analysts.

  BOOTSTRAP MODE - Triggers: "Create a data context skill", "Set up data
  analysis for our warehouse", "Help me create a skill for our database",
  "Generate a data skill for [company]" → Discovers schemas, asks key questions,
  generates initial skill with reference files

  ITERATION MODE - Triggers: "Add context about [domain]", "The skill needs more
  info about [topic]", "Update the data skill with
  [metrics/tables/terminology]", "Improve the [domain] reference" → Loads
  existing skill, asks targeted questions, appends/updates reference files

  Use when data analysts want Claude to understand their company's specific data
  warehouse, terminology, metrics definitions, and common query patterns.
tags:
  - source-knowledge-work-plugins
  - plugin-data
  - plugin-component-skills
  - plugin-skill
  - category-data-analytics
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/data/skills/data-context-extractor/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/data/skills/data-context-extractor/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:21:26.199Z
content_sha256: 6d05dec52ac3667b551898b9eb943f5ee08141bc8d2fabb69a8e39bb9ce7c754
---
|/data/knowledge-work-plugins-data-skills-data-context-extractor-skill|

---
stable_id: skills/knowledge-work-plugins-data-skills-data-visualization-skill
type: skills
title: data-visualization
summary: Create effective data visualizations with Python (matplotlib, seaborn,
  plotly). Use when building charts, choosing the right chart type for a
  dataset, creating publication-quality figures, or applying design principles
  like accessibility and color theory.
tags:
  - source-knowledge-work-plugins
  - plugin-data
  - plugin-component-skills
  - plugin-skill
  - category-data-analytics
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/data/skills/data-visualization/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/data/skills/data-visualization/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:21:25.965Z
content_sha256: 5811e8b3547cda6bc8af118aaf0d7589e8861cdc9facce6372dc78aea99ab87d
---
|/data/knowledge-work-plugins-data-skills-data-visualization-skill|

---
stable_id: skills/knowledge-work-plugins-data-skills-explore-data-skill
type: skills
title: explore-data
summary: Profile and explore a dataset to understand its shape, quality, and
  patterns. Use when encountering a new table or file, checking null rates and
  column distributions, spotting data quality issues like duplicates or
  suspicious values, or deciding which dimensions and metrics to analyze.
tags:
  - source-knowledge-work-plugins
  - plugin-data
  - plugin-component-skills
  - plugin-skill
  - category-data-analytics
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/data/skills/explore-data/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/data/skills/explore-data/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:22:26.826Z
content_sha256: af7590fa616360259da712b5ede5f79b817beb854c47a465f95774354988e8a2
---
|/data/knowledge-work-plugins-data-skills-explore-data-skill|

---
stable_id: skills/knowledge-work-plugins-data-skills-sql-queries-skill
type: skills
title: sql-queries
summary: Write correct, performant SQL across all major data warehouse dialects
  (Snowflake, BigQuery, Databricks, PostgreSQL, etc.). Use when writing queries,
  optimizing slow SQL, translating between dialects, or building complex
  analytical queries with CTEs, window functions, or aggregations.
tags:
  - source-knowledge-work-plugins
  - plugin-data
  - plugin-component-skills
  - plugin-skill
  - category-data-analytics
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/data/skills/sql-queries/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/data/skills/sql-queries/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:21:26.143Z
content_sha256: dbd5a5e2d563d83ca6d4d033206f285f503296eabff4a35545cdb4cb5302bd9a
---
|/data/knowledge-work-plugins-data-skills-sql-queries-skill|

---
stable_id: skills/knowledge-work-plugins-data-skills-statistical-analysis-skill
type: skills
title: statistical-analysis
summary: Apply statistical methods including descriptive stats, trend analysis,
  outlier detection, and hypothesis testing. Use when analyzing distributions,
  testing for significance, detecting anomalies, computing correlations, or
  interpreting statistical results.
tags:
  - source-knowledge-work-plugins
  - plugin-data
  - plugin-component-skills
  - plugin-skill
  - category-data-analytics
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/data/skills/statistical-analysis/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/data/skills/statistical-analysis/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:21:25.871Z
content_sha256: 91a15cfc144efffcd622b09827362a73993a3ff30e3a78114801832477c9f8a0
---
|/data/knowledge-work-plugins-data-skills-statistical-analysis-skill|

---
stable_id: skills/knowledge-work-plugins-data-skills-validate-data-skill
type: skills
title: validate-data
summary: QA an analysis before sharing -- methodology, accuracy, and bias
  checks. Use when reviewing an analysis before a stakeholder presentation,
  spot-checking calculations and aggregation logic, verifying a SQL query's
  results look right, or assessing whether conclusions are actually supported by
  the data.
tags:
  - source-knowledge-work-plugins
  - plugin-data
  - plugin-component-skills
  - plugin-skill
  - category-data-analytics
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/data/skills/validate-data/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/data/skills/validate-data/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:22:26.648Z
content_sha256: 1e424822043480375b80aef9416227b1c8083af749ca536568716265f79ca54b
---
|/data/knowledge-work-plugins-data-skills-validate-data-skill|

---
stable_id: skills/knowledge-work-plugins-data-skills-write-query-skill
type: skills
title: write-query
summary: Write optimized SQL for your dialect with best practices. Use when
  translating a natural-language data need into SQL, building a multi-CTE query
  with joins and aggregations, optimizing a query against a large partitioned
  table, or getting dialect-specific syntax for Snowflake, BigQuery, Postgres,
  etc.
tags:
  - source-knowledge-work-plugins
  - plugin-data
  - plugin-component-skills
  - plugin-skill
  - category-data-analytics
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/data/skills/write-query/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/data/skills/write-query/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:22:26.486Z
content_sha256: 4c7ef791db1f23504c457cc52de0d8855d26f176d5acf037260deb1b98e5e34e
---
|/data/knowledge-work-plugins-data-skills-write-query-skill|

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
retrieved_at: 2026-06-10T08:21:36.542Z
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
retrieved_at: 2026-06-10T08:21:36.252Z
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
retrieved_at: 2026-06-10T08:21:36.135Z
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
retrieved_at: 2026-06-10T08:22:28.942Z
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
retrieved_at: 2026-06-10T08:22:28.888Z
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
retrieved_at: 2026-06-10T08:21:36.373Z
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
retrieved_at: 2026-06-10T08:22:28.846Z
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
retrieved_at: 2026-06-10T08:22:26.907Z
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
retrieved_at: 2026-06-10T08:21:38.110Z
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
retrieved_at: 2026-06-10T08:22:26.950Z
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
retrieved_at: 2026-06-10T08:22:26.871Z
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
retrieved_at: 2026-06-10T08:21:38.328Z
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
retrieved_at: 2026-06-10T08:21:38.428Z
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
retrieved_at: 2026-06-10T08:22:27.118Z
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
retrieved_at: 2026-06-10T08:21:38.382Z
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
retrieved_at: 2026-06-10T08:21:38.154Z
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
retrieved_at: 2026-06-10T08:21:38.086Z
content_sha256: 5c5e95830754bbdd838213fa05fc8f07523f591fd558fd3c86031ffd479f7a9e
---
|/data/knowledge-work-plugins-engineering-skills-testing-strategy-skill|

---
stable_id: skills/knowledge-work-plugins-enterprise-search-skills-digest-skill
type: skills
title: digest
summary: Generate a daily or weekly digest of activity across all connected
  sources. Use when catching up after time away, starting the day and wanting a
  summary of mentions and action items, or reviewing a week's decisions and
  document updates grouped by project.
tags:
  - source-knowledge-work-plugins
  - plugin-enterprise-search
  - plugin-component-skills
  - plugin-skill
  - category-search-research
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/enterprise-search/skills/digest/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/enterprise-search/skills/digest/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:22:29.141Z
content_sha256: d711d49b898eb303b74488dce75308e8737786d87210f1dca13ec325bc7f5737
---
|/data/knowledge-work-plugins-enterprise-search-skills-digest-skill|

---
stable_id: skills/knowledge-work-plugins-enterprise-search-skills-knowledge-synthesis-skill
type: skills
title: knowledge-synthesis
summary: Combines search results from multiple sources into coherent,
  deduplicated answers with source attribution. Handles confidence scoring based
  on freshness and authority, and summarizes large result sets effectively.
tags:
  - source-knowledge-work-plugins
  - plugin-enterprise-search
  - plugin-component-skills
  - plugin-skill
  - category-search-research
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/enterprise-search/skills/knowledge-synthesis/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/enterprise-search/skills/knowledge-synthesis/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:21:30.003Z
content_sha256: 8dc66c66ef0004010bbf2d569251163e90a6675b982e0cb99ef26b4dd1c5a0f6
---
|/data/knowledge-work-plugins-enterprise-search-skills-knowledge-synthesis-skill|

---
stable_id: skills/knowledge-work-plugins-enterprise-search-skills-search-skill
type: skills
title: search
summary: Search across all connected sources in one query. Trigger with "find
  that doc about...", "what did we decide on...", "where was the conversation
  about...", or when looking for a decision, document, or discussion that could
  live in chat, email, cloud storage, or a project tracker.
tags:
  - source-knowledge-work-plugins
  - plugin-enterprise-search
  - plugin-component-skills
  - plugin-skill
  - category-search-research
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/enterprise-search/skills/search/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/enterprise-search/skills/search/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:22:28.981Z
content_sha256: 5330512ac1f71c4526a7cb8a072902053220a924db052fbace20d584d7cf1d52
---
|/data/knowledge-work-plugins-enterprise-search-skills-search-skill|

---
stable_id: skills/knowledge-work-plugins-enterprise-search-skills-search-strategy-skill
type: skills
title: search-strategy
summary: Query decomposition and multi-source search orchestration. Breaks
  natural language questions into targeted searches per source, translates
  queries into source-specific syntax, ranks results by relevance, and handles
  ambiguity and fallback strategies.
tags:
  - source-knowledge-work-plugins
  - plugin-enterprise-search
  - plugin-component-skills
  - plugin-skill
  - category-search-research
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/enterprise-search/skills/search-strategy/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/enterprise-search/skills/search-strategy/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:21:30.066Z
content_sha256: 71d5ba2d219a72d696e079885cba2fb5455ba5da6b1404491f8b945bdd8694c6
---
|/data/knowledge-work-plugins-enterprise-search-skills-search-strategy-skill|

---
stable_id: skills/knowledge-work-plugins-enterprise-search-skills-source-management-skill
type: skills
title: source-management
summary: Manages connected MCP sources for enterprise search. Detects available
  sources, guides users to connect new ones, handles source priority ordering,
  and manages rate limiting awareness.
tags:
  - source-knowledge-work-plugins
  - plugin-enterprise-search
  - plugin-component-skills
  - plugin-skill
  - category-search-research
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/enterprise-search/skills/source-management/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/enterprise-search/skills/source-management/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:21:29.941Z
content_sha256: 221d8acdc5c686033bb073d2bba83841892f6b8be0888c0267247fd1dd34461d
---
|/data/knowledge-work-plugins-enterprise-search-skills-source-management-skill|

---
stable_id: skills/knowledge-work-plugins-finance-skills-audit-support-skill
type: skills
title: audit-support
summary: Support SOX 404 compliance with control testing methodology, sample
  selection, and documentation standards. Use when generating testing
  workpapers, selecting audit samples, classifying control deficiencies, or
  preparing for internal or external audits.
tags:
  - source-knowledge-work-plugins
  - plugin-finance
  - plugin-component-skills
  - plugin-skill
  - category-finance
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/finance/skills/audit-support/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/finance/skills/audit-support/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:21:27.252Z
content_sha256: 6e53c9529c42bb92c11d00a58af5119f7383903d9cb3b911625089fec2ff4784
---
|/data/knowledge-work-plugins-finance-skills-audit-support-skill|

---
stable_id: skills/knowledge-work-plugins-finance-skills-close-management-skill
type: skills
title: close-management
summary: Manage the month-end close process with task sequencing, dependencies,
  and status tracking. Use when planning the close calendar, tracking close
  progress, identifying blockers, or sequencing close activities by day.
tags:
  - source-knowledge-work-plugins
  - plugin-finance
  - plugin-component-skills
  - plugin-skill
  - category-finance
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/finance/skills/close-management/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/finance/skills/close-management/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:21:27.345Z
content_sha256: 6c2df93bcd15eddf65017445fa44f3eb0b16a755711a5e0602d73ca595e73732
---
|/data/knowledge-work-plugins-finance-skills-close-management-skill|

---
stable_id: skills/knowledge-work-plugins-finance-skills-financial-statements-skill
type: skills
title: financial-statements
summary: Generate income statements, balance sheets, and cash flow statements
  with GAAP presentation and period-over-period comparison. Use when preparing
  financial statements, running flux analysis, or creating P&L reports with
  variance commentary.
tags:
  - source-knowledge-work-plugins
  - plugin-finance
  - plugin-component-skills
  - plugin-skill
  - category-finance
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/finance/skills/financial-statements/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/finance/skills/financial-statements/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:21:27.299Z
content_sha256: 1a9ba1cc85495eef32fa250b8a4c05e4854430af574a290b855f919dbb557dfc
---
|/data/knowledge-work-plugins-finance-skills-financial-statements-skill|

---
stable_id: skills/knowledge-work-plugins-finance-skills-journal-entry-prep-skill
type: skills
title: journal-entry-prep
summary: Prepare journal entries with proper debits, credits, and supporting
  documentation for month-end close. Use when booking accruals, prepaid
  amortization, fixed asset depreciation, payroll entries, revenue recognition,
  or any manual journal entry.
tags:
  - source-knowledge-work-plugins
  - plugin-finance
  - plugin-component-skills
  - plugin-skill
  - category-finance
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/finance/skills/journal-entry-prep/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/finance/skills/journal-entry-prep/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:21:27.387Z
content_sha256: 122715fb18246c2f04d31a5f7c07584ecbfc5c0b46ee09b4c0f4557767d7351e
---
|/data/knowledge-work-plugins-finance-skills-journal-entry-prep-skill|

---
stable_id: skills/knowledge-work-plugins-finance-skills-journal-entry-skill
type: skills
title: journal-entry
summary: Prepare journal entries with proper debits, credits, and supporting
  detail. Use when booking month-end accruals (AP, payroll, prepaid), recording
  depreciation or amortization, posting revenue recognition or deferred revenue
  adjustments, or documenting an entry for audit review.
tags:
  - source-knowledge-work-plugins
  - plugin-finance
  - plugin-component-skills
  - plugin-skill
  - category-finance
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/finance/skills/journal-entry/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/finance/skills/journal-entry/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:22:27.167Z
content_sha256: c085de41feb0b8c74771cdd631fff1f668ec253938c69fee47b6a953fc03a266
---
|/data/knowledge-work-plugins-finance-skills-journal-entry-skill|

---
stable_id: skills/knowledge-work-plugins-finance-skills-reconciliation-skill
type: skills
title: reconciliation
summary: Reconcile accounts by comparing GL balances to subledgers, bank
  statements, or third-party data. Use when performing bank reconciliations,
  GL-to-subledger recs, intercompany reconciliations, or identifying and
  categorizing reconciling items.
tags:
  - source-knowledge-work-plugins
  - plugin-finance
  - plugin-component-skills
  - plugin-skill
  - category-finance
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/finance/skills/reconciliation/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/finance/skills/reconciliation/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:21:27.438Z
content_sha256: aa17e90539f4d4d84130c910c7f527236bfaa71977c4c03493c8e8e515ddeea6
---
|/data/knowledge-work-plugins-finance-skills-reconciliation-skill|

---
stable_id: skills/knowledge-work-plugins-finance-skills-sox-testing-skill
type: skills
title: sox-testing
summary: Generate SOX sample selections, testing workpapers, and control
  assessments. Use when planning quarterly or annual SOX 404 testing, pulling a
  sample for a control (revenue, P2P, ITGC, close), building a testing workpaper
  template, or evaluating and classifying a control deficiency.
tags:
  - source-knowledge-work-plugins
  - plugin-finance
  - plugin-component-skills
  - plugin-skill
  - category-finance
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/finance/skills/sox-testing/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/finance/skills/sox-testing/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:22:27.219Z
content_sha256: 5e5939a070a25d9696b27aaec6c20e64084e6f58637994b2f7ec92744074ea23
---
|/data/knowledge-work-plugins-finance-skills-sox-testing-skill|

---
stable_id: skills/knowledge-work-plugins-finance-skills-variance-analysis-skill
type: skills
title: variance-analysis
summary: Decompose financial variances into drivers with narrative explanations
  and waterfall analysis. Use when analyzing budget vs. actual,
  period-over-period changes, revenue or expense variances, or preparing
  variance commentary for leadership.
tags:
  - source-knowledge-work-plugins
  - plugin-finance
  - plugin-component-skills
  - plugin-skill
  - category-finance
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/finance/skills/variance-analysis/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/finance/skills/variance-analysis/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:21:27.183Z
content_sha256: 467db7de3fb118550d013409254e2d4a9f87385a661e154655bf3431919b0ba1
---
|/data/knowledge-work-plugins-finance-skills-variance-analysis-skill|

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
retrieved_at: 2026-06-10T08:22:26.161Z
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
retrieved_at: 2026-06-10T08:22:26.337Z
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
retrieved_at: 2026-06-10T08:21:37.528Z
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
retrieved_at: 2026-06-10T08:22:26.210Z
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
retrieved_at: 2026-06-10T08:21:37.714Z
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
retrieved_at: 2026-06-10T08:22:26.377Z
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
retrieved_at: 2026-06-10T08:22:26.265Z
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
retrieved_at: 2026-06-10T08:22:26.417Z
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
retrieved_at: 2026-06-10T08:21:37.782Z
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
retrieved_at: 2026-06-10T08:22:28.712Z
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
retrieved_at: 2026-06-10T08:22:28.671Z
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
retrieved_at: 2026-06-10T08:22:28.481Z
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
retrieved_at: 2026-06-10T08:21:26.727Z
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
retrieved_at: 2026-06-10T08:21:26.670Z
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
retrieved_at: 2026-06-10T08:22:28.572Z
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
retrieved_at: 2026-06-10T08:22:28.419Z
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
retrieved_at: 2026-06-10T08:22:28.628Z
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
retrieved_at: 2026-06-10T08:22:28.360Z
content_sha256: 38be57a5e9e959874d2cb78e8493211664bc452e6225cb5bdbb8b12e6f444d2e
---
|/data/knowledge-work-plugins-legal-skills-vendor-check-skill|

---
stable_id: skills/knowledge-work-plugins-marketing-skills-brand-review-skill
type: skills
title: brand-review
summary: Review content against your brand voice, style guide, and messaging
  pillars, flagging deviations by severity with specific before/after fixes. Use
  when checking a draft before it ships, when auditing copy for voice
  consistency and terminology, or when screening for unsubstantiated claims,
  missing disclaimers, and other legal flags.
tags:
  - source-knowledge-work-plugins
  - plugin-marketing
  - plugin-component-skills
  - plugin-skill
  - category-marketing-sales
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/marketing/skills/brand-review/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/marketing/skills/brand-review/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:22:27.276Z
content_sha256: 759f29397a908c32521080247292a4e1c52ac01643bea70ccd6e807e86c1fa4b
---
|/data/knowledge-work-plugins-marketing-skills-brand-review-skill|

---
stable_id: skills/knowledge-work-plugins-marketing-skills-campaign-plan-skill
type: skills
title: campaign-plan
summary: Generate a full campaign brief with objectives, audience, messaging,
  channel strategy, content calendar, and success metrics. Use when planning a
  product launch, lead-gen push, or awareness campaign, when you need a
  week-by-week content calendar with dependencies, or when translating a
  marketing goal into a structured, executable plan.
tags:
  - source-knowledge-work-plugins
  - plugin-marketing
  - plugin-component-skills
  - plugin-skill
  - category-marketing-sales
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/marketing/skills/campaign-plan/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/marketing/skills/campaign-plan/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:22:27.716Z
content_sha256: f0b146074b64ee0fd52f7864e30191eab83878c8c1e3e7cf24754e13c7dbfad3
---
|/data/knowledge-work-plugins-marketing-skills-campaign-plan-skill|

---
stable_id: skills/knowledge-work-plugins-marketing-skills-competitive-brief-skill
type: skills
title: competitive-brief
summary: Research competitors and generate a positioning and messaging
  comparison with content gaps, opportunities, and threats. Use when building
  sales battlecards, when finding positioning gaps and messaging angles
  competitors haven't claimed, or when a competitor makes a move and you need to
  assess the impact.
tags:
  - source-knowledge-work-plugins
  - plugin-marketing
  - plugin-component-skills
  - plugin-skill
  - category-marketing-sales
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/marketing/skills/competitive-brief/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/marketing/skills/competitive-brief/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:22:27.633Z
content_sha256: c1e5442facbc3206ac6a77392bef009fe9aff4ba7c2678e2f4118be2f6be82b3
---
|/data/knowledge-work-plugins-marketing-skills-competitive-brief-skill|

---
stable_id: skills/knowledge-work-plugins-marketing-skills-content-creation-skill
type: skills
title: content-creation
summary: Draft marketing content across channels — blog posts, social media,
  email newsletters, landing pages, press releases, and case studies. Use when
  writing any marketing content, when you need channel-specific formatting,
  SEO-optimized copy, headline options, or calls to action.
tags:
  - source-knowledge-work-plugins
  - plugin-marketing
  - plugin-component-skills
  - plugin-skill
  - category-marketing-sales
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/marketing/skills/content-creation/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/marketing/skills/content-creation/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:21:27.883Z
content_sha256: 17f0bfd536502a91c760accaa1ae6c0c76c3812973571729664133e282c5dded
---
|/data/knowledge-work-plugins-marketing-skills-content-creation-skill|

---
stable_id: skills/knowledge-work-plugins-marketing-skills-draft-content-skill
type: skills
title: draft-content
summary: Draft blog posts, social media, email newsletters, landing pages, press
  releases, and case studies with channel-specific formatting and SEO
  recommendations. Use when writing any marketing content, when you need
  headline or subject line options, or when adapting a message for a specific
  platform, audience, and brand voice.
tags:
  - source-knowledge-work-plugins
  - plugin-marketing
  - plugin-component-skills
  - plugin-skill
  - category-marketing-sales
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/marketing/skills/draft-content/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/marketing/skills/draft-content/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:22:27.457Z
content_sha256: 0bfe029dcc039ff71a76b0fec3c5d900fba0e447eb9dcd505ab25b14be3577fd
---
|/data/knowledge-work-plugins-marketing-skills-draft-content-skill|

---
stable_id: skills/knowledge-work-plugins-marketing-skills-email-sequence-skill
type: skills
title: email-sequence
summary: Design and draft multi-email sequences with full copy, timing,
  branching logic, exit conditions, and performance benchmarks. Use when
  building onboarding, lead nurture, re-engagement, win-back, or product launch
  flows, when you need a complete drip campaign with A/B test suggestions, or
  when mapping a sequence end-to-end with a flow diagram.
tags:
  - source-knowledge-work-plugins
  - plugin-marketing
  - plugin-component-skills
  - plugin-skill
  - category-marketing-sales
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/marketing/skills/email-sequence/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/marketing/skills/email-sequence/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:22:27.349Z
content_sha256: 4303252cbe340b19945b3e58d46430fdf42ea47b3e26d985e3ef1d6da5e36021
---
|/data/knowledge-work-plugins-marketing-skills-email-sequence-skill|

---
stable_id: skills/knowledge-work-plugins-marketing-skills-performance-report-skill
type: skills
title: performance-report
summary: Build a marketing performance report with key metrics, trend analysis,
  wins and misses, and prioritized optimization recommendations. Use when
  wrapping a campaign, when preparing weekly, monthly, or quarterly channel
  summaries for stakeholders, or when you need data translated into an executive
  summary with next-period priorities.
tags:
  - source-knowledge-work-plugins
  - plugin-marketing
  - plugin-component-skills
  - plugin-skill
  - category-marketing-sales
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/marketing/skills/performance-report/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/marketing/skills/performance-report/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:22:27.319Z
content_sha256: 997397e23ba5124cdcbbf17e4be9f5cb36f2a2145b5648e02b2852c91c3cc140
---
|/data/knowledge-work-plugins-marketing-skills-performance-report-skill|

---
stable_id: skills/knowledge-work-plugins-marketing-skills-seo-audit-skill
type: skills
title: seo-audit
summary: Run a comprehensive SEO audit — keyword research, on-page analysis,
  content gaps, technical checks, and competitor comparison. Use when assessing
  a site's SEO health, when finding keyword opportunities and content gaps
  competitors own, or when you need a prioritized action plan split into quick
  wins and strategic investments.
tags:
  - source-knowledge-work-plugins
  - plugin-marketing
  - plugin-component-skills
  - plugin-skill
  - category-marketing-sales
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/marketing/skills/seo-audit/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/marketing/skills/seo-audit/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:22:27.674Z
content_sha256: 25008ccdda6f4d9b7ba05f11120d0b9cc976c2d0b04f3d86605e63b1a54a8c40
---
|/data/knowledge-work-plugins-marketing-skills-seo-audit-skill|

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
retrieved_at: 2026-06-10T08:22:27.867Z
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
retrieved_at: 2026-06-10T08:22:28.112Z
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
retrieved_at: 2026-06-10T08:21:37.201Z
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
retrieved_at: 2026-06-10T08:22:28.060Z
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
retrieved_at: 2026-06-10T08:21:37.158Z
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
retrieved_at: 2026-06-10T08:21:37.058Z
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
retrieved_at: 2026-06-10T08:22:27.825Z
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
retrieved_at: 2026-06-10T08:22:27.778Z
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
retrieved_at: 2026-06-10T08:22:27.919Z
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
retrieved_at: 2026-06-10T08:21:39.407Z
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
retrieved_at: 2026-06-10T08:21:39.489Z
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
retrieved_at: 2026-06-10T08:21:39.444Z
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
retrieved_at: 2026-06-10T08:21:40.082Z
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
retrieved_at: 2026-06-10T08:21:40.194Z
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
retrieved_at: 2026-06-10T08:21:40.145Z
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
retrieved_at: 2026-06-10T08:21:39.876Z
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
retrieved_at: 2026-06-10T08:21:39.808Z
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
retrieved_at: 2026-06-10T08:21:40.294Z
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
retrieved_at: 2026-06-10T08:21:40.245Z
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
retrieved_at: 2026-06-10T08:21:40.347Z
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
retrieved_at: 2026-06-10T08:21:39.639Z
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
retrieved_at: 2026-06-10T08:21:39.745Z
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
retrieved_at: 2026-06-10T08:21:39.693Z
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
retrieved_at: 2026-06-10T08:21:39.187Z
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
retrieved_at: 2026-06-10T08:21:39.245Z
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
retrieved_at: 2026-06-10T08:21:38.963Z
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
retrieved_at: 2026-06-10T08:21:38.853Z
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
retrieved_at: 2026-06-10T08:21:39.018Z
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
retrieved_at: 2026-06-10T08:21:39.072Z
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
retrieved_at: 2026-06-10T08:21:38.912Z
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
retrieved_at: 2026-06-10T08:21:39.126Z
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
retrieved_at: 2026-06-10T08:21:40.743Z
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
retrieved_at: 2026-06-10T08:21:40.814Z
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
retrieved_at: 2026-06-10T08:21:40.677Z
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
retrieved_at: 2026-06-10T08:21:40.610Z
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
retrieved_at: 2026-06-10T08:21:40.547Z
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
retrieved_at: 2026-06-10T08:21:40.496Z
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
retrieved_at: 2026-06-10T08:21:40.389Z
content_sha256: 934d1c12a69d013890810a25da9f6c6a89c6b2dbd16f18a8862419e9f41e6879
---
|/data/knowledge-work-plugins-partner-built-slack-skills-slack-search-skill|

---
stable_id: skills/knowledge-work-plugins-product-management-commands-brainstorm
type: skills
title: brainstorm
summary: Brainstorm a product idea, problem space, or strategic question with a
  sharp thinking partner
tags:
  - source-knowledge-work-plugins
  - plugin-product-management
  - plugin-component-commands
  - plugin-command
  - category-productivity-tasks
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/product-management/commands/brainstorm.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/product-management/commands/brainstorm.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:23:00.793Z
content_sha256: fb0ce47a71ac9b7d952cfaafaf40ad361b53d5e9627e93f409bd1ccc80cc0522
---
|/data/knowledge-work-plugins-product-management-commands-brainstorm|

---
stable_id: skills/knowledge-work-plugins-product-management-skills-competitive-brief-skill
type: skills
title: competitive-brief
summary: Create a competitive analysis brief for one or more competitors or a
  feature area. Use when informing product strategy or feature prioritization,
  building sales battle cards, prepping board or investor materials, or deciding
  where to differentiate vs. achieve parity.
tags:
  - source-knowledge-work-plugins
  - plugin-product-management
  - plugin-component-skills
  - plugin-skill
  - category-productivity-tasks
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/product-management/skills/competitive-brief/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/product-management/skills/competitive-brief/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:22:25.718Z
content_sha256: 720916695f99a70e723be02d0123908c9c968ce56e1ffdeeb423014587017cd2
---
|/data/knowledge-work-plugins-product-management-skills-competitive-brief-skill|

---
stable_id: skills/knowledge-work-plugins-product-management-skills-metrics-review-skill
type: skills
title: metrics-review
summary: Review and analyze product metrics with trend analysis and actionable
  insights. Use when running a weekly, monthly, or quarterly metrics review,
  investigating a sudden spike or drop, comparing performance against targets,
  or turning raw numbers into a scorecard with recommended actions.
tags:
  - source-knowledge-work-plugins
  - plugin-product-management
  - plugin-component-skills
  - plugin-skill
  - category-productivity-tasks
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/product-management/skills/metrics-review/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/product-management/skills/metrics-review/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:22:25.391Z
content_sha256: e92f364b668074c72b36fd0f69a6adef2ead66640b2c17dc824c043fb613d278
---
|/data/knowledge-work-plugins-product-management-skills-metrics-review-skill|

---
stable_id: skills/knowledge-work-plugins-product-management-skills-product-brainstorming-skill
type: skills
title: product-brainstorming
summary: Brainstorm product ideas, explore problem spaces, and challenge
  assumptions as a thinking partner. Use when exploring a new opportunity,
  generating solutions to a product problem, stress-testing an idea, or when a
  PM needs to think out loud with a sharp sparring partner before converging on
  a direction.
tags:
  - source-knowledge-work-plugins
  - plugin-product-management
  - plugin-component-skills
  - plugin-skill
  - category-productivity-tasks
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/product-management/skills/product-brainstorming/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/product-management/skills/product-brainstorming/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:23:00.578Z
content_sha256: 53ee71b6863b277aba87002d8a5bb58bd2a4172d7cfeb2e282a0161958edc8e7
---
|/data/knowledge-work-plugins-product-management-skills-product-brainstorming-skill|

---
stable_id: skills/knowledge-work-plugins-product-management-skills-roadmap-update-skill
type: skills
title: roadmap-update
summary: Update, create, or reprioritize your product roadmap. Use when adding a
  new initiative and deciding what moves to make room, shifting priorities after
  new information comes in, moving timelines due to a dependency slip, or
  building a Now/Next/Later view from scratch.
tags:
  - source-knowledge-work-plugins
  - plugin-product-management
  - plugin-component-skills
  - plugin-skill
  - category-productivity-tasks
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/product-management/skills/roadmap-update/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/product-management/skills/roadmap-update/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:22:25.463Z
content_sha256: bdb121e290b590d60b94bca84d1700a8803c78db9f68f2a28fd04ccfe8aceb9e
---
|/data/knowledge-work-plugins-product-management-skills-roadmap-update-skill|

---
stable_id: skills/knowledge-work-plugins-product-management-skills-sprint-planning-skill
type: skills
title: sprint-planning
summary: Plan a sprint — scope work, estimate capacity, set goals, and draft a
  sprint plan. Use when kicking off a new sprint, sizing a backlog against team
  availability (accounting for PTO and meetings), deciding what's P0 vs.
  stretch, or handling carryover from the last sprint.
tags:
  - source-knowledge-work-plugins
  - plugin-product-management
  - plugin-component-skills
  - plugin-skill
  - category-productivity-tasks
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/product-management/skills/sprint-planning/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/product-management/skills/sprint-planning/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:22:25.778Z
content_sha256: c078d3f838c783e9ab53ca1a4b4c04dcd7930a55a995731b8c020cd656cb1edd
---
|/data/knowledge-work-plugins-product-management-skills-sprint-planning-skill|

---
stable_id: skills/knowledge-work-plugins-product-management-skills-stakeholder-update-skill
type: skills
title: stakeholder-update
summary: Generate a stakeholder update tailored to audience and cadence. Use
  when writing a weekly or monthly status for leadership, announcing a launch,
  escalating a risk or blocker, or translating the same progress into
  exec-brief, engineering-detail, or customer-facing versions.
tags:
  - source-knowledge-work-plugins
  - plugin-product-management
  - plugin-component-skills
  - plugin-skill
  - category-productivity-tasks
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/product-management/skills/stakeholder-update/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/product-management/skills/stakeholder-update/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:22:25.659Z
content_sha256: bcdb8ee95dc34d025dcc3d98e7435c4dca45930581b3b7a8707f8770dd364e79
---
|/data/knowledge-work-plugins-product-management-skills-stakeholder-update-skill|

---
stable_id: skills/knowledge-work-plugins-product-management-skills-synthesize-research-skill
type: skills
title: synthesize-research
summary: Synthesize user research from interviews, surveys, and feedback into
  structured insights. Use when you have a pile of interview notes, survey
  responses, or support tickets to make sense of, need to extract themes and
  rank findings by frequency and impact, or want to turn raw feedback into
  roadmap recommendations.
tags:
  - source-knowledge-work-plugins
  - plugin-product-management
  - plugin-component-skills
  - plugin-skill
  - category-productivity-tasks
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/product-management/skills/synthesize-research/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/product-management/skills/synthesize-research/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:22:25.484Z
content_sha256: ae98c11102545c911a1ea5d8527be0e08a3db8e53327f2865f0db19bbb2d7e9c
---
|/data/knowledge-work-plugins-product-management-skills-synthesize-research-skill|

---
stable_id: skills/knowledge-work-plugins-product-management-skills-write-spec-skill
type: skills
title: write-spec
summary: Write a feature spec or PRD from a problem statement or feature idea.
  Use when turning a vague idea or user request into a structured document,
  scoping a feature with goals and non-goals, defining success metrics and
  acceptance criteria, or breaking a big ask into a phased spec.
tags:
  - source-knowledge-work-plugins
  - plugin-product-management
  - plugin-component-skills
  - plugin-skill
  - category-productivity-tasks
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/product-management/skills/write-spec/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/product-management/skills/write-spec/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:22:25.640Z
content_sha256: ca6670913878b4ac4582727562bfced5271492a5a800d934f68c9e7bc1cd4dcc
---
|/data/knowledge-work-plugins-product-management-skills-write-spec-skill|

---
stable_id: skills/knowledge-work-plugins-productivity-skills-memory-management-skill
type: skills
title: memory-management
summary: Two-tier memory system that makes Claude a true workplace collaborator.
  Decodes shorthand, acronyms, nicknames, and internal language so Claude
  understands requests like a colleague would. CLAUDE.md for working memory,
  memory/ directory for the full knowledge base.
tags:
  - source-knowledge-work-plugins
  - plugin-productivity
  - plugin-component-skills
  - plugin-skill
  - category-productivity-tasks
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/productivity/skills/memory-management/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/productivity/skills/memory-management/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:21:25.630Z
content_sha256: ad42fd09cbab585b8ae8fcce54e711d37105d5d5b7d9ceaf9b29bf6441f7a88d
---
|/data/knowledge-work-plugins-productivity-skills-memory-management-skill|

---
stable_id: skills/knowledge-work-plugins-productivity-skills-start-skill
type: skills
title: start
summary: Initialize the productivity system and open the dashboard. Use when
  setting up the plugin for the first time, bootstrapping working memory from
  your existing task list, or decoding the shorthand (nicknames, acronyms,
  project codenames) you use in your todos.
tags:
  - source-knowledge-work-plugins
  - plugin-productivity
  - plugin-component-skills
  - plugin-skill
  - category-productivity-tasks
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/productivity/skills/start/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/productivity/skills/start/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:22:28.807Z
content_sha256: def467be29ec60f1567c9fa92dc4b1ca9a6d3ed85f964f338a02502a44779208
---
|/data/knowledge-work-plugins-productivity-skills-start-skill|

---
stable_id: skills/knowledge-work-plugins-productivity-skills-task-management-skill
type: skills
title: task-management
summary: Simple task management using a shared TASKS.md file. Reference this
  when the user asks about their tasks, wants to add/complete tasks, or needs
  help tracking commitments.
tags:
  - source-knowledge-work-plugins
  - plugin-productivity
  - plugin-component-skills
  - plugin-skill
  - category-productivity-tasks
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/productivity/skills/task-management/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/productivity/skills/task-management/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:21:25.683Z
content_sha256: db1320873d68caab09cdbc1788e78d81e3b9b7cc6b499e2c4b975f25e873049f
---
|/data/knowledge-work-plugins-productivity-skills-task-management-skill|

---
stable_id: skills/knowledge-work-plugins-productivity-skills-update-skill
type: skills
title: update
summary: Sync tasks and refresh memory from your current activity. Use when
  pulling new assignments from your project tracker into TASKS.md, triaging
  stale or overdue tasks, filling memory gaps for unknown people or projects, or
  running a comprehensive scan to catch todos buried in chat and email.
tags:
  - source-knowledge-work-plugins
  - plugin-productivity
  - plugin-component-skills
  - plugin-skill
  - category-productivity-tasks
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/productivity/skills/update/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/productivity/skills/update/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:22:28.759Z
content_sha256: 27dbb2c732a9140ea3f01da6cdf7e533df5e75e9614c80e7e356c8f39c959799
---
|/data/knowledge-work-plugins-productivity-skills-update-skill|

---
stable_id: skills/knowledge-work-plugins-sales-skills-account-research-skill
type: skills
title: account-research
summary: Research a company or person and get actionable sales intel. Works
  standalone with web search, supercharged when you connect enrichment tools or
  your CRM. Trigger with "research [company]", "look up [person]", "intel on
  [prospect]", "who is [name] at [company]", or "tell me about [company]".
tags:
  - source-knowledge-work-plugins
  - plugin-sales
  - plugin-component-skills
  - plugin-skill
  - category-marketing-sales
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/sales/skills/account-research/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/sales/skills/account-research/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:21:29.463Z
content_sha256: 9b73bf462b1e96516ed7de68c628c34c5416b233ddda249d5186fdd4bbdabc17
---
|/data/knowledge-work-plugins-sales-skills-account-research-skill|

---
stable_id: skills/knowledge-work-plugins-sales-skills-call-prep-skill
type: skills
title: call-prep
summary: Prepare for a sales call with account context, attendee research, and
  suggested agenda. Works standalone with user input and web research,
  supercharged when you connect your CRM, email, chat, or transcripts. Trigger
  with "prep me for my call with [company]", "I'm meeting with [company] prep
  me", "call prep [company]", or "get me ready for [meeting]".
tags:
  - source-knowledge-work-plugins
  - plugin-sales
  - plugin-component-skills
  - plugin-skill
  - category-marketing-sales
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/sales/skills/call-prep/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/sales/skills/call-prep/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:21:29.245Z
content_sha256: 51b075cf1a1cecdd1022034de5a552971917a1fea2304f564bb550bdc6dbbf72
---
|/data/knowledge-work-plugins-sales-skills-call-prep-skill|

---
stable_id: skills/knowledge-work-plugins-sales-skills-call-summary-skill
type: skills
title: call-summary
summary: Process call notes or a transcript — extract action items, draft
  follow-up email, generate internal summary. Use when pasting rough notes or a
  transcript after a discovery, demo, or negotiation call, drafting a customer
  follow-up, logging the activity for your CRM, or capturing objections and next
  steps for your team.
tags:
  - source-knowledge-work-plugins
  - plugin-sales
  - plugin-component-skills
  - plugin-skill
  - category-marketing-sales
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/sales/skills/call-summary/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/sales/skills/call-summary/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:22:28.232Z
content_sha256: 8aefb4bc513e403fdcb072ff42ccd560344353c4410780c2220a7dc64b9f946a
---
|/data/knowledge-work-plugins-sales-skills-call-summary-skill|

---
stable_id: skills/knowledge-work-plugins-sales-skills-competitive-intelligence-skill
type: skills
title: competitive-intelligence
summary: Research your competitors and build an interactive battlecard. Outputs
  an HTML artifact with clickable competitor cards and a comparison matrix.
  Trigger with "competitive intel", "research competitors", "how do we compare
  to [competitor]", "battlecard for [competitor]", or "what's new with
  [competitor]".
tags:
  - source-knowledge-work-plugins
  - plugin-sales
  - plugin-component-skills
  - plugin-skill
  - category-marketing-sales
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/sales/skills/competitive-intelligence/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/sales/skills/competitive-intelligence/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:21:29.415Z
content_sha256: 1153f80c8fcadc862fbebd23caaf237eb6c81132360ac603b99640fce6c1a052
---
|/data/knowledge-work-plugins-sales-skills-competitive-intelligence-skill|

---
stable_id: skills/knowledge-work-plugins-sales-skills-create-an-asset-skill
type: skills
title: create-an-asset
summary: Generate tailored sales assets (landing pages, decks, one-pagers,
  workflow demos) from your deal context. Describe your prospect, audience, and
  goal — get a polished, branded asset ready to share with customers.
tags:
  - source-knowledge-work-plugins
  - plugin-sales
  - plugin-component-skills
  - plugin-skill
  - category-marketing-sales
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/sales/skills/create-an-asset/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/sales/skills/create-an-asset/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:21:29.595Z
content_sha256: 02857091cc9927090a7fd128c9bc906f67b29533f095a08493c320174c0f8678
---
|/data/knowledge-work-plugins-sales-skills-create-an-asset-skill|

---
stable_id: skills/knowledge-work-plugins-sales-skills-daily-briefing-skill
type: skills
title: daily-briefing
summary: Start your day with a prioritized sales briefing. Works standalone when
  you tell me your meetings and priorities, supercharged when you connect your
  calendar, CRM, and email. Trigger with "morning briefing", "daily brief",
  "what's on my plate today", "prep my day", or "start my day".
tags:
  - source-knowledge-work-plugins
  - plugin-sales
  - plugin-component-skills
  - plugin-skill
  - category-marketing-sales
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/sales/skills/daily-briefing/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/sales/skills/daily-briefing/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:21:29.535Z
content_sha256: 9f2c4976aed1326edbf6d7d9d499df63f3c178d2c14c6254c8a9c0a15eb0d04a
---
|/data/knowledge-work-plugins-sales-skills-daily-briefing-skill|

---
stable_id: skills/knowledge-work-plugins-sales-skills-draft-outreach-skill
type: skills
title: draft-outreach
summary: Research a prospect then draft personalized outreach. Uses web research
  by default, supercharged with enrichment and CRM. Trigger with "draft outreach
  to [person/company]", "write cold email to [prospect]", "reach out to [name]".
tags:
  - source-knowledge-work-plugins
  - plugin-sales
  - plugin-component-skills
  - plugin-skill
  - category-marketing-sales
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/sales/skills/draft-outreach/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/sales/skills/draft-outreach/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:21:29.663Z
content_sha256: eeca7158539ae7e6f41025a099a34441e9b9bfaa130af4297e09b8c2253c8828
---
|/data/knowledge-work-plugins-sales-skills-draft-outreach-skill|

---
stable_id: skills/knowledge-work-plugins-sales-skills-forecast-skill
type: skills
title: forecast
summary: Generate a weighted sales forecast with best/likely/worst scenarios,
  commit vs. upside breakdown, and gap analysis. Use when preparing a quarterly
  forecast call, assessing gap-to-quota from a pipeline CSV, deciding which
  deals to commit vs. call upside, or checking pipeline coverage against your
  number.
tags:
  - source-knowledge-work-plugins
  - plugin-sales
  - plugin-component-skills
  - plugin-skill
  - category-marketing-sales
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/sales/skills/forecast/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/sales/skills/forecast/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:22:28.294Z
content_sha256: e1829c82fa2457ba83c63a506e85e87608068f3c8d1b3f427fe49fba8a19f056
---
|/data/knowledge-work-plugins-sales-skills-forecast-skill|

---
stable_id: skills/knowledge-work-plugins-sales-skills-pipeline-review-skill
type: skills
title: pipeline-review
summary: Analyze pipeline health — prioritize deals, flag risks, get a weekly
  action plan. Use when running a weekly pipeline review, deciding which deals
  to focus on this week, spotting stale or stuck opportunities, auditing for
  hygiene issues like bad close dates, or identifying single-threaded deals.
tags:
  - source-knowledge-work-plugins
  - plugin-sales
  - plugin-component-skills
  - plugin-skill
  - category-marketing-sales
source_url: https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/sales/skills/pipeline-review/SKILL.md
license: ""
upstream_ref: https://github.com/anthropics/knowledge-work-plugins/blob/main/sales/skills/pipeline-review/SKILL.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:22:28.251Z
content_sha256: 43b396b8292b5e11d1797fd3a549d7ebadf09b79c1a4d20a5e1cbea31032f4ab
---
|/data/knowledge-work-plugins-sales-skills-pipeline-review-skill|

---
stable_id: skills/mintlify-skill
type: skills
title: mintlify-skill
summary: '{"skills":[{"name":"mintlify","description":"Build and maintain
  documentation sites with Mintlify. Use when creating docs pages, configuring
  navigation, adding components, or setting up API
  references.","files":["SKILL.md"]},{"name":"mintlify-api","description":"Interact
  with the Mintlify REST API to manage deployments, trigger builds, and query
  documentation site metadata
  programmatically.","files":["SKILL.md"]},{"name":"mintlify-docs","description":"Build
  and maintain documentation sites with Mintlify. Use when creating docs pages,
  configuring navigation, adding components, or setting up API
  references.","files":["SKILL.md"]}]}'
tags: []
source_url: https://www.mintlify.com/docs/skill.md
license: ""
upstream_ref: ""
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:21:22.500Z
content_sha256: 7a5d280114468972047bcd313c4fd4c021c5df20aaa0ab57f44c355740dd65af
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
retrieved_at: 2026-06-10T08:21:21.763Z
content_sha256: f69da369ae9fe097eb1e3d89b56985aeda5370bc6e8912729e01da9275982aa8
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
retrieved_at: 2026-06-10T08:23:12.370Z
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
retrieved_at: 2026-06-10T08:23:12.401Z
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
retrieved_at: 2026-06-10T08:23:12.436Z
content_sha256: e2102f11631433939f162d383d769f8257d859d6639e0e14969cda3ef0a95eca
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

  **Core principle:** Verify tests → Detect environment → Present options →
  Execute choice → Clean up.

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
retrieved_at: 2026-06-10T08:23:12.450Z
content_sha256: 5c8d4b59aedb14c94e2f5d787a3265e858e8f53d4ceffe7ff1c15878a52b0e91
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
retrieved_at: 2026-06-10T08:23:12.498Z
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

  Dispatch a code reviewer subagent to catch issues before they cascade. The
  reviewer gets precisely crafted context for evaluation — never your session's
  history. This keeps the reviewer focused on the work product, not your thought
  process, and preserves your own context for continued work.

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
retrieved_at: 2026-06-10T08:23:12.529Z
content_sha256: 5a3a44a3667800e2dc836829c6b92fada51e6dc58ac144ec05fe59f47d6bcd84
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

  **Continuous execution:** Do not pause to check in with your human partner
  between tasks. Execute all tasks from the plan without stopping. The only
  reasons to stop are: BLOCKED status you cannot resolve, ambiguity that
  genuinely prevents progress, or all tasks complete. "Should I continue?"
  prompts and progress summaries waste their time — they asked you to execute
  the plan, so execute it.

  ## When to Use
tags:
  - obra
  - source-obra-superpowers
source_url: https://raw.githubusercontent.com/obra/superpowers/main/skills/subagent-driven-development/SKILL.md
license: ""
upstream_ref: https://github.com/obra/superpowers/blob/main/skills/subagent-driven-development/SKILL.md
github_stars: 101712
github_forks: 8129
github_is_organization: false
retrieved_at: 2026-06-10T08:23:12.569Z
content_sha256: 905a2b9be59b734dbe166525ad31dcaaf712a75926135adee1f554557aba5744
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
retrieved_at: 2026-06-10T08:23:12.601Z
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
retrieved_at: 2026-06-10T08:23:12.642Z
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
  workspace or before executing implementation plans - ensures an isolated
  workspace exists via native tools or git worktree fallback

  ---

  # Using Git Worktrees

  ## Overview

  Ensure work happens in an isolated workspace. Prefer your platform's native
  worktree tools. Fall back to manual git worktrees only when no native tool is
  available.

  **Core principle:** Detect existing isolation first. Then use native tools.
  Then fall back to git. Never fight the harness.

  **Announce at start:** "I'm using the using-git-worktrees skill to set up an
  isolated workspace."

  ## Step 0: Detect Existing Isolation
tags:
  - obra
  - source-obra-superpowers
source_url: https://raw.githubusercontent.com/obra/superpowers/main/skills/using-git-worktrees/SKILL.md
license: ""
upstream_ref: https://github.com/obra/superpowers/blob/main/skills/using-git-worktrees/SKILL.md
github_stars: 101712
github_forks: 8129
github_is_organization: false
retrieved_at: 2026-06-10T08:23:12.895Z
content_sha256: 085a45ee3de432bdb2768011591d9a882cb6c759e2317f379226451c5618fe8e
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
retrieved_at: 2026-06-10T08:23:12.972Z
content_sha256: 316e29381219adf0cac62190c67aeabf427d6e6e5f2735541d502b3d339be7aa
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
retrieved_at: 2026-06-10T08:23:13.002Z
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

  **Context:** If working in an isolated worktree, it should have been created
  via the `superpowers:using-git-worktrees` skill at execution time.
tags:
  - obra
  - source-obra-superpowers
source_url: https://raw.githubusercontent.com/obra/superpowers/main/skills/writing-plans/SKILL.md
license: ""
upstream_ref: https://github.com/obra/superpowers/blob/main/skills/writing-plans/SKILL.md
github_stars: 101712
github_forks: 8129
github_is_organization: false
retrieved_at: 2026-06-10T08:23:13.035Z
content_sha256: 4fd4627d2c02367879c0307d7249270bed633317ff9be82e926a6d57bf5d331b
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
retrieved_at: 2026-06-10T08:23:13.074Z
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
retrieved_at: 2026-06-10T08:23:11.006Z
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
retrieved_at: 2026-06-10T08:23:11.031Z
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
retrieved_at: 2026-06-10T08:23:11.123Z
content_sha256: d7632537cf19be17cf33d2c696b9d9c2ea3ee51026030e9b203d5b9255e75b15
---
|/data/openai-curated-cloudflare-deploy|

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
retrieved_at: 2026-06-10T08:23:11.229Z
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
retrieved_at: 2026-06-10T08:23:11.210Z
content_sha256: 63f3d12d444547bbf68c10a12982b1f42e0f6e26fc074324564a13184d4b15ad
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
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-06-10T08:23:11.291Z
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
retrieved_at: 2026-06-10T08:23:11.303Z
content_sha256: 7b326b4a2f0f5f85122144628ec02077e48841e0e0e82efce88b3415bcfb7c26
---
|/data/openai-curated-gh-fix-ci|

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
retrieved_at: 2026-06-10T08:23:11.358Z
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
retrieved_at: 2026-06-10T08:23:11.377Z
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
retrieved_at: 2026-06-10T08:23:11.393Z
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
retrieved_at: 2026-06-10T08:23:11.406Z
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
retrieved_at: 2026-06-10T08:23:11.462Z
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
retrieved_at: 2026-06-10T08:23:11.505Z
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
retrieved_at: 2026-06-10T08:23:11.554Z
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

  description: "Use when the user asks how to build with OpenAI products or
  APIs, asks about Codex itself or choosing Codex surfaces, needs up-to-date
  official documentation with citations, help choosing the latest model for a
  use case, or model upgrade and prompt-upgrade guidance; use OpenAI docs MCP
  tools for non-Codex docs questions, use the Codex manual helper first for
  broad Codex self-knowledge, and restrict fallback browsing to official OpenAI
  domains."

  ---

  # OpenAI Docs

  Provide authoritative, current guidance from OpenAI developer docs using the
  developers.openai.com MCP server. "Docs MCP" means
  `mcp__openaiDeveloperDocs__search_openai_docs` and
  `mcp__openaiDeveloperDocs__fetch_openai_doc`; for API reference, schema,
  parameter, or required-field questions, also use
  `mcp__openaiDeveloperDocs__get_openapi_spec` when available. Official-domain
  web search is fallback after those tools are unavailable or unhelpful. Broad
  Codex questions use the manual helper before Docs MCP. This skill also owns
  model selection, API model migration, and prompt-upgrade guidance.

  ## Workflow Configuration

  ### Source Priority

  - For Codex self-knowledge, use the Codex source route below; it owns when to
  use the manual helper, Docs MCP, or bounded uncertainty.

  - For non-Codex OpenAI docs questions, use
  `mcp__openaiDeveloperDocs__search_openai_docs` to find the most relevant doc
  pages.
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/openai-docs/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/openai-docs/SKILL.md
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-06-10T08:23:11.574Z
content_sha256: d2b48f7b356a0880ced6fba52a29af24565e2818437694052b96f84bc2f69e92
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
retrieved_at: 2026-06-10T08:23:11.609Z
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
retrieved_at: 2026-06-10T08:23:11.649Z
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
retrieved_at: 2026-06-10T08:23:11.630Z
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
retrieved_at: 2026-06-10T08:23:11.736Z
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
retrieved_at: 2026-06-10T08:23:11.775Z
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
retrieved_at: 2026-06-10T08:23:11.809Z
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
retrieved_at: 2026-06-10T08:23:11.828Z
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
retrieved_at: 2026-06-10T08:23:11.866Z
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
  Sentry CLI; perform read-only queries using the `sentry` command."

  ---

  # Sentry (Read-only Observability)

  ## Quick start

  - If not already authenticated, ask the user to run `sentry auth login` or set
  `SENTRY_AUTH_TOKEN` as an env var.

  - The CLI auto-detects org/project from DSNs in `.env` files, source code,
  config defaults, and directory names. Only specify `<org>/<project>` if
  auto-detection fails or picks the wrong target.

  - Defaults: time range `24h`, environment `production`, limit 20.

  - Always use `--json` when processing output programmatically. Use `--json
  --fields` to select specific fields and reduce output size.
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/sentry/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/sentry/SKILL.md
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-06-10T08:23:11.908Z
content_sha256: 508c6f5c100586c81a34397d30f00f4b8771b66d698a7ac1836998df925dd007
---
|/data/openai-curated-sentry|

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
retrieved_at: 2026-06-10T08:23:12.083Z
content_sha256: d6120efc03ea0e80204f687801cfaec8efc4519a3430b68e13e4ebd8e1c69b52
---
|/data/openai-curated-speech|

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
retrieved_at: 2026-06-10T08:23:12.150Z
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
retrieved_at: 2026-06-10T08:23:12.168Z
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
retrieved_at: 2026-06-10T08:23:12.197Z
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

  - Branch: `{description}` when starting from main/master/default.

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
retrieved_at: 2026-06-10T08:23:12.215Z
content_sha256: 4829d4909081e1abf91507fb581e6f566ce7064001892414f32191895b08a595
---
|/data/openai-curated-yeet|

---
stable_id: skills/openai-system-openai-docs
type: skills
title: openai-system-openai-docs
summary: >-
  ---

  name: "openai-docs"

  description: "Use when the user asks how to build with OpenAI products or
  APIs, asks about Codex itself or choosing Codex surfaces, needs up-to-date
  official documentation with citations, help choosing the latest model for a
  use case, or model upgrade and prompt-upgrade guidance; use OpenAI docs MCP
  tools for non-Codex docs questions, use the Codex manual helper first for
  broad Codex self-knowledge, and restrict fallback browsing to official OpenAI
  domains."

  ---

  # OpenAI Docs

  Provide authoritative, current guidance from OpenAI developer docs using the
  developers.openai.com MCP server. "Docs MCP" means
  `mcp__openaiDeveloperDocs__search_openai_docs` and
  `mcp__openaiDeveloperDocs__fetch_openai_doc`; for API reference, schema,
  parameter, or required-field questions, also use
  `mcp__openaiDeveloperDocs__get_openapi_spec` when available. Official-domain
  web search is fallback after those tools are unavailable or unhelpful. Broad
  Codex questions use the manual helper before Docs MCP. This skill also owns
  model selection, API model migration, and prompt-upgrade guidance.

  ## API Key Setup

  For requests to build, run, configure, debug, or implement an API-backed app,
  script, CLI, generator, or tool, use `openai-platform-api-key` first when
  available. After that credential gate is resolved, return here for current
  docs as needed.

  Use this skill directly for docs-only questions, citations, model/API
  guidance, conceptual explanations, and examples that do not require building
  or running an API-backed artifact.

  ## Workflow Configuration
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.system/openai-docs/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.system/openai-docs/SKILL.md
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-06-10T08:23:12.263Z
content_sha256: 5cae604fb26d9ca3db47af72e16e9c1bffa47f9e6508b77566d2374dac75e610
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
retrieved_at: 2026-06-10T08:23:12.285Z
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
retrieved_at: 2026-06-10T08:23:12.311Z
content_sha256: df58efeb75a6001d733701e7d73e24dd71b94a2a0016971f0bcfe097217888a5
---
|/data/openai-system-skill-installer|

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
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:21:23.554Z
content_sha256: 485db7c6fe19be083bde01ced7027103de7df5fac74a8c2c486a94685569005e
---
|/data/pinchboard-skill|

---
stable_id: playbooks/playbook-industry-finance
type: playbooks
title: "Playbook: Industry - Finance"
summary: A practical reading path for finance workflows (payments, reporting,
  reconciliation).
tags:
  - playbooks
  - industry-finance
  - category-finance
source_url: ""
license: ""
upstream_ref: ""
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:23:18.610Z
content_sha256: c12a553ca38e48f4325c92a94ca58b01e2399550b2c91c4b4000e8d9b6922098
---
|/data/playbook-industry-finance|

---
stable_id: playbooks/playbook-scenario-content-marketing
type: playbooks
title: "Playbook: Scenario - Content Marketing"
summary: A practical reading path for creating, repurposing, and distributing content.
tags:
  - playbooks
  - scenario-content-marketing
  - category-marketing-sales
source_url: ""
license: ""
upstream_ref: ""
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:23:18.610Z
content_sha256: d71ccd45f40f23342c317548510b1eb8bbc39f4ed6d1a889b141aa8b5a036349
---
|/data/playbook-scenario-content-marketing|

---
stable_id: playbooks/playbook-scenario-customer-support
type: playbooks
title: "Playbook: Scenario - Customer Support"
summary: A practical reading path for triage, ticketing, and support ops workflows.
tags:
  - playbooks
  - scenario-customer-support
  - category-communication
source_url: ""
license: ""
upstream_ref: ""
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:23:18.610Z
content_sha256: 8a7e47ed81e19552b8d5e08b8ee37c9aab87a82ca8b7120ac287e53134b293f9
---
|/data/playbook-scenario-customer-support|

---
stable_id: skills/shield-md-shield-md-skill
type: skills
title: shield.md
summary: Context-based runtime threat feed policy. Uses structured threat
  entries to decide log, require_approval, or block. Use when evaluating user
  input, API calls, or other runtime data for potential threats. This skill is
  particularly useful for securing AI agents and LLM-powered applications
  against prompt injection, data exfiltration, and other adversarial attacks.
tags:
  - shield-md
  - security-policy
  - category-security-passwords
  - category-ai-llms
source_url: https://raw.githubusercontent.com/shield-md/shield.md/main/skill.md
license: ""
upstream_ref: https://github.com/shield-md/shield.md/blob/main/skill.md
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:21:31.049Z
content_sha256: d1a2f699123a487c205234f36c725034a6dc4250d9f3340d09aa174eb7d22458
---
|/data/shield-md-shield-md-skill|

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
retrieved_at: 2026-06-10T08:23:10.638Z
content_sha256: d17cab6a258c2b5fe8514b0eda88395fe0d3dac3711c21480f2229e182666ec5
---
|/data/skills-sh-199-biotechnologies-claude-deep-research-skill-deep-research|

---
stable_id: skills/skills-sh-aaron-he-zhu-seo-geo-claude-skills-backlink-analyzer
type: skills
title: skills-sh-aaron-he-zhu-seo-geo-claude-skills-backlink-analyzer
summary: >-
  # Connectors

  > Skills use `~~category` placeholders instead of specific tool names. **Every
  skill runs at Tier 1 with zero external dependencies** — paste data manually,
  or pull it yourself from the free/public sources below. MCP servers (further
  down) are an optional Tier 2/3 convenience, never required.

  All endpoints below were verified against primary vendor/source docs
  (2026-05). If a call 404s, re-check the linked doc — vendors move endpoints.

  ## Bundled helpers — run the data fetch locally (zero-dependency)

  For the bundle-able categories the repo ships small **Python-3-stdlib**
  helpers under [`scripts/connectors/`](scripts/connectors/README.md) — no
  `pip`, no key (except where noted). They turn the recipes below into one
  command, so a skill can pull real data itself instead of asking you to paste
  it. Run from the repo root:

  | Capability | Helper | Needs |

  |---|---|---|

  | Crawl a site (→ page records) | `crawl.py <url>` | — |

  | On-page audit (title/meta/headings/canonical/JSON-LD) | `onpage.py <url>` |
  — |

  | robots.txt eval + AI-bot check | `robots.py <url> --check-ai-bots` | — |
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/aaron-he-zhu/seo-geo-claude-skills/HEAD/CONNECTORS.md
license: ""
upstream_ref: https://skills.sh/aaron-he-zhu/seo-geo-claude-skills/backlink-analyzer
github_stars: 457
github_forks: 61
github_is_organization: false
retrieved_at: 2026-06-10T08:23:04.514Z
content_sha256: 568f3d605dccb774aef01c6fdf7798efcd0dbd8ffddd54235ee40d74a3cbf863
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
retrieved_at: 2026-06-10T08:22:29.705Z
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

  Every browser command requires `--session <SID>`. Most also require `--tab
  <TID>`.

  Session-level commands (start, close, restart, status, list-sessions) need
  only `--session` or nothing.

  Session IDs accept lowercase letters, digits, hyphens, and underscores (e.g.,
  `s1`, `my-session`, `task_01`).

  Selectors accept CSS, XPath, or snapshot refs (`@eN` from `snapshot` output).

  ## Global Flags

  ```

  --json            Output as JSON envelope

  --timeout <ms>    Command timeout in milliseconds
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/actionbook/actionbook/HEAD/skills/actionbook/references/command-reference.md
license: ""
upstream_ref: https://skills.sh/actionbook/actionbook/actionbook
github_stars: 1186
github_forks: 88
github_is_organization: true
retrieved_at: 2026-06-10T08:21:34.860Z
content_sha256: a8d4fdda69c882068209f7e77875bd61359dcf03261f5aa1a3269c9fd224ec93
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
retrieved_at: 2026-06-10T08:21:34.986Z
content_sha256: b39c62f24e6eea1ffb517924b738f052f3888f32a8a5ca3cf348c1b33aeea291
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
retrieved_at: 2026-06-10T08:23:09.872Z
content_sha256: f2e2a354e2ccb0b1b177872b7683e429ca6b79642e4aaac374859a9aefa40f25
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
retrieved_at: 2026-06-10T08:23:08.289Z
content_sha256: 6129e8dfdb38965242c0d11e4af6a7670c50484ddfe335d07ce3f4ec636d8ffb
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
retrieved_at: 2026-06-10T08:22:31.249Z
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
retrieved_at: 2026-06-10T08:22:30.407Z
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
retrieved_at: 2026-06-10T08:21:34.081Z
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
retrieved_at: 2026-06-10T08:23:08.457Z
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
retrieved_at: 2026-06-10T08:23:10.146Z
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
retrieved_at: 2026-06-10T08:21:33.980Z
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
retrieved_at: 2026-06-10T08:23:09.815Z
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
retrieved_at: 2026-06-10T08:23:09.974Z
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
retrieved_at: 2026-06-10T08:21:33.921Z
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
retrieved_at: 2026-06-10T08:23:09.304Z
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
retrieved_at: 2026-06-10T08:22:29.829Z
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
retrieved_at: 2026-06-10T08:23:10.317Z
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
retrieved_at: 2026-06-10T08:23:10.435Z
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
retrieved_at: 2026-06-10T08:21:33.628Z
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
retrieved_at: 2026-06-10T08:23:06.262Z
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
retrieved_at: 2026-06-10T08:23:08.025Z
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
retrieved_at: 2026-06-10T08:21:33.590Z
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
retrieved_at: 2026-06-10T08:23:09.008Z
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
retrieved_at: 2026-06-10T08:21:33.747Z
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
retrieved_at: 2026-06-10T08:21:41.103Z
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
retrieved_at: 2026-06-10T08:23:05.112Z
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
retrieved_at: 2026-06-10T08:23:08.724Z
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
retrieved_at: 2026-06-10T08:23:05.571Z
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
retrieved_at: 2026-06-10T08:23:04.593Z
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
retrieved_at: 2026-06-10T08:23:08.244Z
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
retrieved_at: 2026-06-10T08:23:08.399Z
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
retrieved_at: 2026-06-10T08:23:05.947Z
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
retrieved_at: 2026-06-10T08:22:31.203Z
content_sha256: 0f62bf84869d7e982e5dc15ebc789bb4734175b7d7b824051548c615ba79aa97
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
retrieved_at: 2026-06-10T08:22:29.880Z
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
retrieved_at: 2026-06-10T08:23:03.168Z
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
retrieved_at: 2026-06-10T08:21:33.378Z
content_sha256: 6cb47c3ab17e60b7de37e83131c409ef5a90a01bfb54e999905a9c9f7dd88e68
---
|/data/skills-sh-anthropics-skills-pptx|

---
stable_id: skills/skills-sh-apify-agent-skills-apify-actor-development
type: skills
title: skills-sh-apify-agent-skills-apify-actor-development
summary: >-
  # Actor configuration (actor.json)

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
retrieved_at: 2026-06-10T08:23:10.920Z
content_sha256: bd02b1f94f4f2486f5a582cc0ab654f5f5fd6b595175786150146df78987266b
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
  ## Wrap main code with Actor lifecycle
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
retrieved_at: 2026-06-10T08:21:35.693Z
content_sha256: 683336ab365ade9a8e3cc9654a8e5d9bf7c2ce43a0b7594c5ee0c895f7e7b4d6
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
retrieved_at: 2026-06-10T08:22:30.331Z
content_sha256: a7de0b5949ce0fef044942ac4d7409bbd6f7738a453deb99a04acc12b219bedd
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
retrieved_at: 2026-06-10T08:21:32.596Z
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
retrieved_at: 2026-06-10T08:21:35.731Z
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
retrieved_at: 2026-06-10T08:21:34.701Z
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
retrieved_at: 2026-06-10T08:21:34.287Z
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
retrieved_at: 2026-06-10T08:22:32.645Z
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
retrieved_at: 2026-06-10T08:21:31.460Z
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
retrieved_at: 2026-06-10T08:21:42.080Z
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
retrieved_at: 2026-06-10T08:21:34.755Z
content_sha256: 4f878825755030b24727f1b66e432c6502db0dfec211f000621e5357ed32adb7
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
retrieved_at: 2026-06-10T08:22:30.264Z
content_sha256: e1ac098f16f723aaf0b1fc6e511c6981cfb7cfa57a646da8eaa623f047287d5b
---
|/data/skills-sh-axtonliu-axton-obsidian-visual-skills-excalidraw-diagram|

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
retrieved_at: 2026-06-10T08:22:32.412Z
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
retrieved_at: 2026-06-10T08:21:35.617Z
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
retrieved_at: 2026-06-10T08:22:31.062Z
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
retrieved_at: 2026-06-10T08:22:29.490Z
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
retrieved_at: 2026-06-10T08:22:30.134Z
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
retrieved_at: 2026-06-10T08:22:29.418Z
content_sha256: 8d33b5a824272ce4e008c38334ea9b333d63c096c469fc9233701b34b4b16aea
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
retrieved_at: 2026-06-10T08:23:02.194Z
content_sha256: 8e3582aa18e7d1d2f5e92c0e01ade642af8c50844b7489573f0b55e7aa88a3f8
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
retrieved_at: 2026-06-10T08:21:42.366Z
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
retrieved_at: 2026-06-10T08:23:06.306Z
content_sha256: a4137a0d895bd2c3662aef624d72d7ef2dda09f17f6f7ecd64e4648a8c89c1bd
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
retrieved_at: 2026-06-10T08:21:35.832Z
content_sha256: 286e9284da759e1243cd71e6b2612a439fe609b0ca0ee9173b36e06df6855c34
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
retrieved_at: 2026-06-10T08:21:31.005Z
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
retrieved_at: 2026-06-10T08:21:34.646Z
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
  > Primary:
  > - [The Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) — Robert C. Martin
  > - [Onion Architecture](https://jeffreypalermo.com/2008/07/the-onion-architecture-part-1/) — Jeffrey Palermo
  > Implementation guide:
  > - [Designing a DDD-oriented Microservice](https://learn.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/ddd-oriented-microservice) — Microsoft
  > Supplemental synthesis:
  > - [Clean Architecture: Standing on the Shoulders of Giants](https://herbertograca.com/2017/09/28/clean-architecture-standing-on-the-shoulders-of-giants/) — Herberto Graça
  ## The Four Layers
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/ccheney/robust-skills/HEAD/skills/clean-ddd-hexagonal/references/LAYERS.md
license: ""
upstream_ref: https://skills.sh/ccheney/robust-skills/clean-ddd-hexagonal
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:21:35.545Z
content_sha256: 2fd1ee569b25ead0d5683e16da82451a46659f4fe271fa50a960a4aad7680a28
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
  analyzes real-time content from 44+ sources including Hacker News, Lobsters,
  Dev.to, GitHub, arXiv, Hugging Face Papers, AIHOT, TLDR AI, Import AI, BBC,
  The Guardian, Al Jazeera, France 24, Reuters fallback, AI Newsletters,
  WallStreetCN, Weibo, 少数派, InfoQ 中文, Podcasts, and user-defined OPML feeds. Use
  when user requests 'daily scans', 'tech news', 'finance updates', 'AI
  briefings', 'international news', 'deep analysis', or says '如意如意' to open the
  interactive menu."

  ---

  # News Aggregator Skill

  Fetch real-time hot news from 44+ sources (including international news + AI
  curated aggregators + user-defined OPML feeds), generate deep analysis reports
  in Chinese.

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
retrieved_at: 2026-06-10T08:21:21.143Z
content_sha256: 96863a053cec63e07e3ae0aa73154fa69dc7d78a09dfbd93a87816a8bb69d232
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
retrieved_at: 2026-06-10T08:21:42.703Z
content_sha256: ec9359f4321dfc2d669226c2a8b6d13808645b682aa75c3f6f24b38a3a145909
---
|/data/skills-sh-chromedevtools-chrome-devtools-mcp-chrome-devtools|

---
stable_id: skills/skills-sh-cloudflare-skills-agents-sdk
type: skills
title: skills-sh-cloudflare-skills-agents-sdk
summary: >-
  # Workflows Integration

  Fetch https://developers.cloudflare.com/agents/api-reference/run-workflows/
  for complete documentation.

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
retrieved_at: 2026-06-10T08:21:35.154Z
content_sha256: 1778b2dee2788d0238c1d4b61e3ee42538a24166770cf33c38d78c22c1ac6dbe
---
|/data/skills-sh-cloudflare-skills-agents-sdk|

---
stable_id: skills/skills-sh-cloudflare-skills-agents-sdk-6c89c221
type: skills
title: skills-sh-cloudflare-skills-agents-sdk-6c89c221
summary: >-
  # Workflows Integration

  Fetch https://developers.cloudflare.com/agents/api-reference/run-workflows/
  for complete documentation.

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
retrieved_at: 2026-06-10T08:21:24.469Z
content_sha256: 1778b2dee2788d0238c1d4b61e3ee42538a24166770cf33c38d78c22c1ac6dbe
---
|/data/skills-sh-cloudflare-skills-agents-sdk-6c89c221|

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
retrieved_at: 2026-06-10T08:21:34.332Z
content_sha256: a4e33b6a4543aff84a4cee75fb6b3b26bf96340c7026266a5fc4df3aa699f08c
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
retrieved_at: 2026-06-10T08:21:42.684Z
content_sha256: 1c146a17bd070d9ea7aa6f6e032b8b597939faef78f011ac520aed49511e5ffc
---
|/data/skills-sh-cloudflare-vinext-migrate-to-vinext|

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
retrieved_at: 2026-06-10T08:23:03.856Z
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
retrieved_at: 2026-06-10T08:23:03.571Z
content_sha256: 4004b3d9d562f98273a0048c48af6a46040ed800b1a1ccb958b299217860a623
---
|/data/skills-sh-coreyhaines31-marketingskills-ai-seo|

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
retrieved_at: 2026-06-10T08:21:41.924Z
content_sha256: d64b9282b956da6831ec97a1fffda5841c5c43a71721b512b66b04bde104c139
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
retrieved_at: 2026-06-10T08:21:41.736Z
content_sha256: 08f18652938e14143402786fbdb8e1a6269650bb5eef9106898f1cdf31e47e36
---
|/data/skills-sh-coreyhaines31-marketingskills-cold-email|

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
retrieved_at: 2026-06-10T08:23:02.895Z
content_sha256: c0a7b87f47c8f7af907ce73facf1ed4721ade811e53f86ddf22f4bc0d7ca324e
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
retrieved_at: 2026-06-10T08:23:03.218Z
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
retrieved_at: 2026-06-10T08:23:02.484Z
content_sha256: f387b6ed4b510efa9f0d3c459f4898971c8b0176e8c34185040cb264eca50186
---
|/data/skills-sh-coreyhaines31-marketingskills-copywriting|

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
retrieved_at: 2026-06-10T08:23:09.248Z
content_sha256: 401f65d709cefbd7ee2df11273e0b616ec50e37e71d914556c800067fdcdef8e
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
retrieved_at: 2026-06-10T08:23:03.082Z
content_sha256: fac44ef0ea24a3035d85bd11096adef408497ea073ad156933f2d356d482dde2
---
|/data/skills-sh-coreyhaines31-marketingskills-marketing-ideas|

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
retrieved_at: 2026-06-10T08:23:03.032Z
content_sha256: b2b3fd7c58c686f0670b94cf7192ff79436ccf0d602650b33a83a9d01102f11d
---
|/data/skills-sh-coreyhaines31-marketingskills-programmatic-seo|

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
retrieved_at: 2026-06-10T08:23:05.476Z
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
retrieved_at: 2026-06-10T08:23:05.213Z
content_sha256: 265eea6c1b358d10f2dd22fd987789a9d115c14d30bf77a9086734ac60659336
---
|/data/skills-sh-coreyhaines31-marketingskills-sales-enablement|

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
retrieved_at: 2026-06-10T08:23:02.386Z
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
retrieved_at: 2026-06-10T08:23:05.024Z
content_sha256: 3c3cd7ce5e31c502dc071baf82bb58cb30f5edf4a2fd8ca052fbc8f3777db140
---
|/data/skills-sh-coreyhaines31-marketingskills-site-architecture|

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
retrieved_at: 2026-06-10T08:23:03.667Z
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
retrieved_at: 2026-06-10T08:21:42.194Z
content_sha256: dabc7d5cc70d5647f1352e75686b4b41f33c123de97dccb8d3305e69de46682c
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
retrieved_at: 2026-06-10T08:21:24.791Z
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
retrieved_at: 2026-06-10T08:22:32.117Z
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
retrieved_at: 2026-06-10T08:22:29.929Z
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
retrieved_at: 2026-06-10T08:21:42.435Z
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
retrieved_at: 2026-06-10T08:21:34.181Z
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
retrieved_at: 2026-06-10T08:23:10.368Z
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
retrieved_at: 2026-06-10T08:21:34.565Z
content_sha256: ec1a439cc6678cc337aee5eabc7f2155aaa5d9a85b1f1add58e0ed48ee0b5c21
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
retrieved_at: 2026-06-10T08:21:33.270Z
content_sha256: 41c33bda9e64c062b0b5e7e6bee27d74eaf0002b0273d856e7f4b5a3ab03f48a
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
retrieved_at: 2026-06-10T08:21:24.869Z
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
retrieved_at: 2026-06-10T08:21:24.131Z
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
retrieved_at: 2026-06-10T08:21:24.081Z
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
retrieved_at: 2026-06-10T08:21:31.143Z
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
retrieved_at: 2026-06-10T08:21:24.747Z
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
retrieved_at: 2026-06-10T08:21:32.757Z
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
retrieved_at: 2026-06-10T08:21:24.971Z
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
retrieved_at: 2026-06-10T08:21:24.653Z
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
retrieved_at: 2026-06-10T08:21:30.786Z
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
retrieved_at: 2026-06-10T08:22:30.982Z
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
retrieved_at: 2026-06-10T08:23:09.574Z
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
retrieved_at: 2026-06-10T08:21:33.870Z
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
retrieved_at: 2026-06-10T08:22:30.196Z
content_sha256: e384a2fc9dd473f3d564a9e107cbf25e5739a0870adbe3a35f6f24279389cc9f
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
retrieved_at: 2026-06-10T08:22:30.665Z
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
retrieved_at: 2026-06-10T08:21:42.550Z
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

  npm install @elevenlabs/elevenlabs-js@latest

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
retrieved_at: 2026-06-10T08:21:35.214Z
content_sha256: 4ab0635663a2065ade4b0e35ac53d21223bcc2ab257c019bd775866a81c7742f
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
retrieved_at: 2026-06-10T08:21:35.052Z
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
retrieved_at: 2026-06-10T08:21:21.019Z
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
retrieved_at: 2026-06-10T08:21:20.866Z
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
retrieved_at: 2026-06-10T08:21:41.873Z
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
retrieved_at: 2026-06-10T08:21:33.041Z
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
github_stars: 197
github_forks: 28
github_is_organization: true
retrieved_at: 2026-06-10T08:23:03.471Z
content_sha256: 8b6127462311ae25de487a639066ad810365d411ab5ed524487f4d9214b55d9c
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
retrieved_at: 2026-06-10T08:23:08.872Z
content_sha256: 4fd52e6478dc8964aaf738c067a54dcf9441bf5e001e6dc3023e608bd68009b2
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
retrieved_at: 2026-06-10T08:23:08.924Z
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
retrieved_at: 2026-06-10T08:23:08.826Z
content_sha256: e946e2b4062da5df881f26b4de05a9c9e54d133b996de67ff488a464bac9bf77
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
retrieved_at: 2026-06-10T08:23:07.343Z
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
retrieved_at: 2026-06-10T08:23:06.530Z
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
retrieved_at: 2026-06-10T08:23:10.048Z
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
retrieved_at: 2026-06-10T08:23:07.945Z
content_sha256: 8bca7e655b1cd7965e8b4f03965f56079b09caf866951de9c0f62769f08fc160
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
retrieved_at: 2026-06-10T08:23:07.765Z
content_sha256: a77512d229b4fc22987f634df14b2b4aacfcac76375a3a7b3bfaaaebf26fd30b
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
retrieved_at: 2026-06-10T08:23:06.221Z
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
retrieved_at: 2026-06-10T08:23:07.861Z
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
retrieved_at: 2026-06-10T08:23:07.664Z
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
retrieved_at: 2026-06-10T08:23:07.395Z
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
retrieved_at: 2026-06-10T08:23:10.597Z
content_sha256: a0f100df8c50311819350c33b5880402332185ac7a480689236b5cf1231b64cf
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
retrieved_at: 2026-06-10T08:23:07.452Z
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
retrieved_at: 2026-06-10T08:23:07.565Z
content_sha256: 92b40774a7cbcb355435d5d091520dad7de3130eba66e83434aaafa6f8b9b9e4
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
retrieved_at: 2026-06-10T08:21:31.210Z
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
retrieved_at: 2026-06-10T08:23:06.998Z
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
retrieved_at: 2026-06-10T08:23:07.124Z
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
retrieved_at: 2026-06-10T08:23:06.672Z
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
retrieved_at: 2026-06-10T08:23:07.069Z
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
retrieved_at: 2026-06-10T08:23:06.906Z
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
retrieved_at: 2026-06-10T08:23:06.396Z
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
github_stars: 26261
github_forks: 3023
github_is_organization: true
retrieved_at: 2026-06-10T08:23:06.799Z
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
retrieved_at: 2026-06-10T08:23:07.714Z
content_sha256: 5d859d78dbc9a0d87dcf713911c0df5bd443bfa1f3834db13d573325dfaa37df
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
retrieved_at: 2026-06-10T08:23:07.614Z
content_sha256: 0ffc854e3857286966e7866914148d4ee98a141c8393bd50e5733ea3fa981907
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
retrieved_at: 2026-06-10T08:23:07.187Z
content_sha256: fcabc67e277dbbc3d46b81edce7aae50e71da4f93dc0b1358e4c45737570e82c
---
|/data/skills-sh-github-awesome-copilot-terraform-azurerm-set-diff-analyzer|

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
retrieved_at: 2026-06-10T08:23:06.156Z
content_sha256: e678c549dd5f69094d53eb5785f0c34ae4cd150a92ac1f79785065fc835276f6
---
|/data/skills-sh-github-awesome-copilot-web-design-reviewer|

---
stable_id: skills/skills-sh-github-awesome-copilot-winapp-cli
type: skills
title: skills-sh-github-awesome-copilot-winapp-cli
summary: >-
  <!-- mslearn: true -->

  <!-- ms.topic: reference -->

  <!-- description: Complete command reference for the Windows App Development
  CLI (winapp CLI) including setup, packaging, identity, certificates, signing,
  and utility commands. -->

  # CLI Documentation and Usage

  ## Shell Completion

  Enable tab completion for commands, options, and values. See the [Shell
  Completion guide](guides/shell-completion.md) for setup instructions.

  ```powershell

  # Quick setup for PowerShell (permanent — add to profile)

  winapp complete --setup powershell >> $PROFILE

  # Or try it in the current session only
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/microsoft/WinAppCli/main/docs/usage.md
license: ""
upstream_ref: https://skills.sh/github/awesome-copilot/winapp-cli
github_stars: 932
github_forks: 38
github_is_organization: true
retrieved_at: 2026-06-10T08:23:07.282Z
content_sha256: 2b93443833edf3c2c3611cfec129bcff2ea38001e120c7ead84aba9772154653
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
retrieved_at: 2026-06-10T08:23:06.735Z
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
retrieved_at: 2026-06-10T08:22:29.644Z
content_sha256: a9aca976f35f235f3cad5fba2e23a44214ac273965368d45a1cce5b129edefbc
---
|/data/skills-sh-giulioco-skills-postbridge-social-growth|

---
stable_id: skills/skills-sh-googleworkspace-cli-gws-calendar
type: skills
title: skills-sh-googleworkspace-cli-gws-calendar
summary: |-
  ---
  name: gws-calendar-insert
  description: "Google Calendar: Create a new event."
  metadata:
    version: 0.22.5
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
retrieved_at: 2026-06-10T08:23:05.798Z
content_sha256: 5c54f18a615b9706a364815f9e3c0ef8c83bba8a67adf217e25dd7c829e2119e
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
    version: 0.22.5
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
retrieved_at: 2026-06-10T08:23:08.671Z
content_sha256: ec61a071b258c9ce87ec0b00d87b4e839a54c915a925e3cab9ecedcf2560b32e
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
    version: 0.22.5
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
retrieved_at: 2026-06-10T08:23:05.856Z
content_sha256: 219028230078e0d14df314f2ae18b5918721fb5e298bba7d0a010937b2965045
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
    version: 0.22.5
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
retrieved_at: 2026-06-10T08:23:06.839Z
content_sha256: 87abfb41cdcc300b7f2f733d1558a8af8d3c2a7cca1512f9eba244965fad98b2
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
    version: 0.22.5
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
retrieved_at: 2026-06-10T08:23:05.656Z
content_sha256: 7ffd4bdffab870e3aab8b9081b60d485dc5d0bb7f6e6524ee84100a630f84595
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
    version: 0.22.5
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
retrieved_at: 2026-06-10T08:23:08.781Z
content_sha256: 98dc0ba1aac5d8e1b0368d897593352892ab02797e600ccd8f39971361a6884b
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
    version: 0.22.5
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
retrieved_at: 2026-06-10T08:23:05.610Z
content_sha256: 5002f29ed58e3f14b826d4eadd917dd5f3e7f3ec8c6cbad7c61e4f340be519aa
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
    version: 0.22.5
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
retrieved_at: 2026-06-10T08:23:08.966Z
content_sha256: 95734efb0c7f193dafd13881fe7d6699cd8a60fbf851a714d1f1260f226d5e25
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
    version: 0.22.5
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
retrieved_at: 2026-06-10T08:23:06.002Z
content_sha256: ef337f5249f50ef0209f95baf906b2d8a93fcc042797197423575518d96fbe6a
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
    version: 0.22.5
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
retrieved_at: 2026-06-10T08:23:08.628Z
content_sha256: 678cacadf6459205b2459ef79cca9a96ef1c68be1130c03f32ee26f6b9d4da66
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
retrieved_at: 2026-06-10T08:21:31.878Z
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
retrieved_at: 2026-06-10T08:21:32.121Z
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
retrieved_at: 2026-06-10T08:21:32.077Z
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
retrieved_at: 2026-06-10T08:22:33.052Z
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
retrieved_at: 2026-06-10T08:21:31.921Z
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
retrieved_at: 2026-06-10T08:21:31.807Z
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
retrieved_at: 2026-06-10T08:21:32.365Z
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
retrieved_at: 2026-06-10T08:21:34.406Z
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
retrieved_at: 2026-06-10T08:21:31.575Z
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
retrieved_at: 2026-06-10T08:22:32.706Z
content_sha256: fea8a0eadf68f1ac45cae3b1d6dc4c66b489fb6e40a3d41762120059c49540c2
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
retrieved_at: 2026-06-10T08:23:10.224Z
content_sha256: 4b03b93077cbb4320a8611a3d141c9047a88bd5efae5844cbe4630bfcdf17b36
---
|/data/skills-sh-hau823823-gen-paylink-govilo-gen-paylink-govilo|

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
retrieved_at: 2026-06-10T08:23:04.153Z
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
retrieved_at: 2026-06-10T08:21:33.516Z
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
retrieved_at: 2026-06-10T08:22:31.415Z
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

  belt login

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
retrieved_at: 2026-06-10T08:23:01.954Z
content_sha256: a1458f503127f62288f776577d276171d4f3803493f4886e937379b7a5f4ff7b
---
|/data/skills-sh-inferen-sh-skills-agent-tools|

---
stable_id: skills/skills-sh-inferen-sh-skills-ai-image-generation
type: skills
title: skills-sh-inferen-sh-skills-ai-image-generation
summary: >-
  # Install CLI

  ```sh

  curl -fsSL cli.inference.sh | sh

  ```

  Or via package managers:

  ```sh

  brew install inference-sh/tap/belt       # macOS / Linux

  npx @inferencesh/belt                    # Node.js

  scoop bucket add inference https://github.com/inference-sh/scoop-bucket &&
  scoop install belt  # Windows

  ```
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/inference-sh/skills/refs/heads/main/cli-install.md
license: ""
upstream_ref: https://skills.sh/inferen-sh/skills/ai-image-generation
github_stars: 169
github_forks: 24
github_is_organization: true
retrieved_at: 2026-06-10T08:23:01.907Z
content_sha256: 0f050f2e2feb82e205786863bbb5239d98792bbc41545cfc87d5ff8693ce4c0c
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

  belt login

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
retrieved_at: 2026-06-10T08:23:02.005Z
content_sha256: a1458f503127f62288f776577d276171d4f3803493f4886e937379b7a5f4ff7b
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
retrieved_at: 2026-06-10T08:23:04.768Z
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
retrieved_at: 2026-06-10T08:23:04.703Z
content_sha256: da24fe3d637d13163a570db4f0a25d840b7e61076662500826a10f80b4d4db4e
---
|/data/skills-sh-inferen-sh-skills-python-sdk|

---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.170

  - Added claude-fable-5 model and the fable alias to SDK model types.
  https://www.anthropic.com/news/claude-fable-5-mythos-5

  - Updated to parity with Claude Code v2.1.170

  ## 0.3.169

  - Added an experimental
  `usage_EXPERIMENTAL_MAY_CHANGE_DO_NOT_RELY_ON_THIS_API_YET()` method on
  `Query` returning structured session cost, plan rate-limit, and local
  usage-behaviors data

  - Added an `sse` option (`SSEOptions`) to `BrowserQueryOptions` as an
  alternative to `websocket`, for browser SDK consumers who prefer Server-Sent
  Events

  ## 0.3.168

  - Updated to parity with Claude Code v2.1.168

  ## 0.3.167
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:21:35.910Z
content_sha256: 3015d0fb76e5f5045876afb5d50e5377d2e172d4336c382e4fec73956cfa6e64
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
retrieved_at: 2026-06-10T08:21:35.398Z
content_sha256: 3246b413c28f643b21bb72f2b20bda5133ab11bac124b1c6ab3427be96ec997b
---
|/data/skills-sh-jezweb-claude-skills-react-native-expo|

---
stable_id: skills/skills-sh-jimliu-baoyu-skills-baoyu-article-illustrator
type: skills
title: skills-sh-jimliu-baoyu-skills-baoyu-article-illustrator
summary: >-
  # Style Presets

  `--preset X` expands to a type + style + optional palette combination. Users
  can override any dimension.

  ## Default Preset

  When content analysis surfaces no strong signal (generic knowledge article,
  mixed-topic post, no clear data/comparison/narrative cue), recommend
  **`hand-drawn-edu`** as the primary option in Step 3 Q1. It is the warm,
  friendly educational-infographic default — safe for most articles and
  universally readable.

  ## By Category

  ### Technical & Engineering

  | --preset | Type | Style | Palette | Best For |

  |----------|------|-------|---------|----------|

  | `tech-explainer` | `infographic` | `blueprint` | — | API docs, system
  metrics, technical deep-dives |

  | `system-design` | `framework` | `blueprint` | — | Architecture diagrams,
  system design |
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/jimliu/baoyu-skills/HEAD/skills/baoyu-article-illustrator/references/style-presets.md
license: ""
upstream_ref: https://skills.sh/jimliu/baoyu-skills/baoyu-article-illustrator
github_stars: 9795
github_forks: 1111
github_is_organization: false
retrieved_at: 2026-06-10T08:23:04.350Z
content_sha256: 4dd2b3b6fc176b9fbb862245cc9f73bbcf4c317c9faed7be061954a752214cc9
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

  | `hand-drawn` | sketch-notes | **Default.** Warm cream paper, black
  hand-drawn lines, pastel blocks — educational infographics, concept
  explainers, onboarding, general knowledge articles |

  | `vector` | vector-illustration | Knowledge articles, tutorials, tech content
  |

  | `minimal-flat` | notion | General, knowledge sharing, SaaS |

  | `sci-fi` | blueprint | AI, frontier tech, system design |

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
retrieved_at: 2026-06-10T08:21:24.233Z
content_sha256: f11809de146dd728d7878e5992f11b46d925c7bd659538022a302d2282931f9a
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
retrieved_at: 2026-06-10T08:21:33.678Z
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
retrieved_at: 2026-06-10T08:21:24.333Z
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
retrieved_at: 2026-06-10T08:23:04.299Z
content_sha256: fc9a3d0ec17017ccacd459a1a99730d7127a66fe52dc544f8bdf3840fde29c72
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
retrieved_at: 2026-06-10T08:21:24.272Z
content_sha256: fc9a3d0ec17017ccacd459a1a99730d7127a66fe52dc544f8bdf3840fde29c72
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
retrieved_at: 2026-06-10T08:21:41.063Z
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
retrieved_at: 2026-06-10T08:23:03.906Z
content_sha256: f39f0d5881a427abba1816b36637e8260f2443abfd9136fab3feee89aed2ad20
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
retrieved_at: 2026-06-10T08:23:03.714Z
content_sha256: 2dc9a4b9b294d6683ca2079fedbc5426955d94a05d4ff97b2a079182df97f986
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
retrieved_at: 2026-06-10T08:21:24.375Z
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
retrieved_at: 2026-06-10T08:23:08.571Z
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
retrieved_at: 2026-06-10T08:23:05.073Z
content_sha256: 571620de72538e8b4f247a63e6db27ce5a27495d1283015ec16c1076d91811cc
---
|/data/skills-sh-jimliu-baoyu-skills-baoyu-url-to-markdown|

---
stable_id: skills/skills-sh-jimliu-baoyu-skills-baoyu-xhs-images
type: skills
title: skills-sh-jimliu-baoyu-skills-baoyu-xhs-images
summary: >-
  # Style Presets

  `--preset X` expands to a style + layout + optional palette combination. Users
  can override any dimension.

  | --preset | Style | Layout | Palette |

  |----------|-------|--------|---------|

  | `knowledge-card` | `notion` | `dense` | |

  | `checklist` | `notion` | `list` | |

  | `concept-map` | `notion` | `mindmap` | |

  | `swot` | `notion` | `quadrant` | |

  | `tutorial` | `chalkboard` | `flow` | |

  | `classroom` | `chalkboard` | `balanced` | |
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/jimliu/baoyu-skills/HEAD/skills/baoyu-xhs-images/references/style-presets.md
license: ""
upstream_ref: https://skills.sh/jimliu/baoyu-skills/baoyu-xhs-images
github_stars: 9795
github_forks: 1111
github_is_organization: false
retrieved_at: 2026-06-10T08:23:04.385Z
content_sha256: edd8d0592fbbc4418af09796fbdf7d1b5f4fb38d60eb42af1c063f5ccc594ecb
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
retrieved_at: 2026-06-10T08:21:20.766Z
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
retrieved_at: 2026-06-10T08:23:08.511Z
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
retrieved_at: 2026-06-10T08:23:05.909Z
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
retrieved_at: 2026-06-10T08:23:06.072Z
content_sha256: 392953b5838c3ab3df135b5a914f100ae7b95e4501b6a2e5c8dc63da3ac7558b
---
|/data/skills-sh-kepano-obsidian-skills-obsidian-markdown|

---
stable_id: skills/skills-sh-langgenius-dify-frontend-code-review
type: skills
title: skills-sh-langgenius-dify-frontend-code-review
summary: >-
  # Code Quality Rules

  ## Scope Control

  Flag changes that expand beyond the requested feature or review scope:

  - Repo-wide cleanup mixed into a targeted fix.

  - Compatibility exports, aliases, shims, or wrapper layers added without an
  explicit migration requirement.

  - Shared abstractions created before there is stable cross-feature reuse.

  - Business components moved into generic shared locations without a clear
  ownership boundary.

  ## TypeScript

  Flag:

  - `any` or broad `Record<string, any>` where generated/API types or local
  domain types exist.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/langgenius/dify/HEAD/.agents/skills/frontend-code-review/references/code-quality.md
license: ""
upstream_ref: https://skills.sh/langgenius/dify/frontend-code-review
github_stars: 133762
github_forks: 20840
github_is_organization: true
retrieved_at: 2026-06-10T08:23:09.366Z
content_sha256: 13ae507c5f4b28bb6fbbc1259643afe7e49710f7fdb6eb87a3b368d87a2d027d
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
retrieved_at: 2026-06-10T08:21:35.104Z
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
retrieved_at: 2026-06-10T08:21:35.966Z
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
retrieved_at: 2026-06-10T08:21:21.244Z
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
retrieved_at: 2026-06-10T08:22:31.124Z
content_sha256: afe9bfb38b076a97af0e96e5f7dd1427e0ac2ddd72c52812ae74448397f05174
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
retrieved_at: 2026-06-10T08:22:31.349Z
content_sha256: 15bb275986b3916c819fdc99e0f80075b4f6d0e0ca2cc39c6c44e6f39ab08d92
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
retrieved_at: 2026-06-10T08:21:32.659Z
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
retrieved_at: 2026-06-10T08:23:06.455Z
content_sha256: 0dbb4fb695f461405e6cc83c3a78fe1d14786761a87e3048f4c6fed8317a7fc0
---
|/data/skills-sh-mastra-ai-skills-mastra|

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
retrieved_at: 2026-06-10T08:21:41.363Z
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
retrieved_at: 2026-06-10T08:23:02.120Z
content_sha256: 259bd1d6751a62b70c883ee6454ab47aaef6c0ddcb1d61e44f6617ea27bc890d
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
retrieved_at: 2026-06-10T08:23:02.426Z
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
retrieved_at: 2026-06-10T08:23:02.790Z
content_sha256: 759f12ea3fb1b747173342dbb08a14435a2e22010ab27b3e377cbc28c446332b
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
retrieved_at: 2026-06-10T08:23:01.187Z
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
retrieved_at: 2026-06-10T08:23:00.889Z
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
retrieved_at: 2026-06-10T08:23:01.461Z
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
retrieved_at: 2026-06-10T08:23:00.156Z
content_sha256: 259bd1d6751a62b70c883ee6454ab47aaef6c0ddcb1d61e44f6617ea27bc890d
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
retrieved_at: 2026-06-10T08:23:01.311Z
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
retrieved_at: 2026-06-10T08:23:02.058Z
content_sha256: dc71cfc7809c72f95ef36a37d086ed8f55d59d977a23eaba41423ae473da7c1a
---
|/data/skills-sh-microsoft-github-copilot-for-azure-azure-compute|

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
retrieved_at: 2026-06-10T08:21:42.303Z
content_sha256: b70ad5778684dfdf4a8f3b3b48bc4f3491769c0324579aac0f8a281c9f89497e
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
retrieved_at: 2026-06-10T08:23:01.072Z
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
retrieved_at: 2026-06-10T08:23:01.867Z
content_sha256: 5c4a998420beec153f624d2b970350a0373324a410d9f70a664e41046b0c7e10
---
|/data/skills-sh-microsoft-github-copilot-for-azure-azure-hosted-copilot-sdk|

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
retrieved_at: 2026-06-10T08:23:01.517Z
content_sha256: b54cbc8a0d806748790454738c1f3a65b6f84e7279cbe6b158738229eba0e296
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
retrieved_at: 2026-06-10T08:23:01.635Z
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
retrieved_at: 2026-06-10T08:23:01.400Z
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
retrieved_at: 2026-06-10T08:23:00.945Z
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
retrieved_at: 2026-06-10T08:23:01.586Z
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
retrieved_at: 2026-06-10T08:23:01.138Z
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
  this includes the full workflow from containerizing the project to verifying
  the deployed agent.

  ## Quick Reference

  | Property | Value |

  |----------|-------|

  | Agent types | Prompt (LLM-based), Hosted |

  | MCP server | `azure` |

  | Key Foundry MCP tools | `agent_definition_schema_get`, `agent_update`,
  `agent_get` |

  | CLI tools | `docker`, `az acr` (hosted agents only) |

  | Container protocols | `a2a`, `responses`, `invocations`, `invocations_ws`,
  `mcp` |
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/microsoft/github-copilot-for-azure/HEAD/plugin/skills/microsoft-foundry/foundry-agent/deploy/deploy.md
license: ""
upstream_ref: https://skills.sh/microsoft/github-copilot-for-azure/microsoft-foundry
github_stars: 160
github_forks: 103
github_is_organization: true
retrieved_at: 2026-06-10T08:23:01.692Z
content_sha256: 903340b03720697c331dd213e779eef03332c74d11b805981ff73b0b102e3c3b
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
retrieved_at: 2026-06-10T08:21:41.810Z
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
retrieved_at: 2026-06-10T08:22:33.225Z
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
retrieved_at: 2026-06-10T08:21:32.834Z
content_sha256: fa81fa0fda1ae94ff2c25c924cfcb16f5a6e967b6d8412ddd372dc8a1b26f601
---
|/data/skills-sh-mrgoonie-claudekit-skills-chrome-devtools|

---
stable_id: skills/skills-sh-nodnarbnitram-claude-code-extensions-tauri-v2
type: skills
title: skills-sh-nodnarbnitram-claude-code-extensions-tauri-v2
summary: |-
  # Tauri v2+ Capabilities & Permissions Reference
  ## Contents
  - Security Model: v1 vs v2
  - Overview
  - Capability File Structure
  - Core Permissions
  - Plugin Permissions
  - Scopes
  - Permission Sets
  - Window and Webview Targeting
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/nodnarbnitram/claude-code-extensions/HEAD/.claude/skills/tauri-v2/references/capabilities-reference.md
license: ""
upstream_ref: https://skills.sh/nodnarbnitram/claude-code-extensions/tauri-v2
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:23:10.755Z
content_sha256: aff274cc3d8731f4faa4bafe892b281edaf9f3e2dc5a2509c6d610819062157e
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
source_url: https://raw.githubusercontent.com/onmax/nuxt-skills/HEAD/skills/document-writer/references/writing-style.md
license: ""
upstream_ref: https://skills.sh/onmax/nuxt-skills/document-writer
github_stars: 564
github_forks: 27
github_is_organization: false
retrieved_at: 2026-06-10T08:22:30.730Z
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
retrieved_at: 2026-06-10T08:21:32.712Z
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
retrieved_at: 2026-06-10T08:22:31.916Z
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
retrieved_at: 2026-06-10T08:22:31.561Z
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
retrieved_at: 2026-06-10T08:22:31.294Z
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
retrieved_at: 2026-06-10T08:22:32.308Z
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
retrieved_at: 2026-06-10T08:21:33.122Z
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
retrieved_at: 2026-06-10T08:22:32.472Z
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
retrieved_at: 2026-06-10T08:23:09.521Z
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
retrieved_at: 2026-06-10T08:21:42.477Z
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
retrieved_at: 2026-06-10T08:21:42.153Z
content_sha256: 4a2c03f8b310c107c17b06a8f1e3d6027746eaabc92518a78016d88c227090cb
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
retrieved_at: 2026-06-10T08:21:21.329Z
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
retrieved_at: 2026-06-10T08:21:20.708Z
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
retrieved_at: 2026-06-10T08:22:29.345Z
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
retrieved_at: 2026-06-10T08:21:24.414Z
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
retrieved_at: 2026-06-10T08:23:10.680Z
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
retrieved_at: 2026-06-10T08:23:05.702Z
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
retrieved_at: 2026-06-10T08:21:35.268Z
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
retrieved_at: 2026-06-10T08:23:05.748Z
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
retrieved_at: 2026-06-10T08:22:30.522Z
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
retrieved_at: 2026-06-10T08:21:21.071Z
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
retrieved_at: 2026-06-10T08:21:32.901Z
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
retrieved_at: 2026-06-10T08:21:33.312Z
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
retrieved_at: 2026-06-10T08:21:34.128Z
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
retrieved_at: 2026-06-10T08:22:32.770Z
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

  metadata:

  ---

  # Self-Improvement Skill

  Log learnings and errors to markdown files for continuous improvement. Coding
  agents can later process these into fixes, and important learnings get
  promoted to project memory.

  ## First-Use Initialisation

  Before logging anything, ensure the `.learnings/` directory and files exist in
  the project or workspace root. If any are missing, create them:

  ```bash
tags:
  - skills-sh
  - skills-sh-probed
source_url: https://raw.githubusercontent.com/pskoett/self-improving-agent/master/SKILL.md
license: ""
upstream_ref: https://skills.sh/pskoett/self-improving-agent/self-improvement
github_stars: 5
github_forks: 2
github_is_organization: false
retrieved_at: 2026-06-10T08:22:33.104Z
content_sha256: c698ee5c6a1428666cef5e1f51450e00aebc8d8a44f7e432fe8b0421c480d281
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
retrieved_at: 2026-06-10T08:21:42.029Z
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
retrieved_at: 2026-06-10T08:21:34.234Z
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
retrieved_at: 2026-06-10T08:23:00.838Z
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
retrieved_at: 2026-06-10T08:21:31.518Z
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
retrieved_at: 2026-06-10T08:21:24.601Z
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
retrieved_at: 2026-06-10T08:21:32.185Z
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
retrieved_at: 2026-06-10T08:21:24.527Z
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
retrieved_at: 2026-06-10T08:22:31.685Z
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
retrieved_at: 2026-06-10T08:22:31.988Z
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
retrieved_at: 2026-06-10T08:23:03.518Z
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

  All components are imported from `react-email`:

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
retrieved_at: 2026-06-10T08:21:41.477Z
content_sha256: c70a474382ec0a32711d9c56e28681adf8f1bad5bdb1d2f04b89c968a2c5fd21
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
retrieved_at: 2026-06-10T08:22:29.572Z
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
retrieved_at: 2026-06-10T08:21:41.989Z
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
retrieved_at: 2026-06-10T08:23:00.464Z
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
    -h, --help           - Show this help.
    --workspace  <slug>  - Target workspace (uses credentials)
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/schpet/linear-cli/HEAD/skills/linear-cli/references/auth.md
license: ""
upstream_ref: https://skills.sh/schpet/linear-cli/linear-cli
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-10T08:23:00.524Z
content_sha256: 554d464dcc12a0c88ec41bcec75e099db19425a12b77531a4dba45e326852bcc
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
retrieved_at: 2026-06-10T08:23:02.843Z
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
retrieved_at: 2026-06-10T08:22:30.584Z
content_sha256: 6bf00e7a350ba07baa0dc763f3442450ac2e780ccc10ced0d8827986994a812b
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
retrieved_at: 2026-06-10T08:21:25.469Z
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
retrieved_at: 2026-06-10T08:21:32.956Z
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
retrieved_at: 2026-06-10T08:21:30.963Z
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
retrieved_at: 2026-06-10T08:21:30.854Z
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
retrieved_at: 2026-06-10T08:23:10.792Z
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
retrieved_at: 2026-06-10T08:21:32.020Z
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
retrieved_at: 2026-06-10T08:21:31.969Z
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
retrieved_at: 2026-06-10T08:23:09.708Z
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
retrieved_at: 2026-06-10T08:23:09.757Z
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
retrieved_at: 2026-06-10T08:22:30.002Z
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
retrieved_at: 2026-06-10T08:21:41.212Z
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
retrieved_at: 2026-06-10T08:23:09.447Z
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
retrieved_at: 2026-06-10T08:21:41.152Z
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
retrieved_at: 2026-06-10T08:23:09.914Z
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
retrieved_at: 2026-06-10T08:21:41.272Z
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
retrieved_at: 2026-06-10T08:23:09.654Z
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
retrieved_at: 2026-06-10T08:23:02.704Z
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
retrieved_at: 2026-06-10T08:23:10.870Z
content_sha256: e766b6de3455f5d3dbc9a61add5b61fad87573c30fef3cc55c6102f422c58c4b
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
retrieved_at: 2026-06-10T08:23:04.863Z
content_sha256: 156337b59d9813beadc8f7489e9e86da9eec2c09e755e6baa31ec2c40c7e77eb
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
retrieved_at: 2026-06-10T08:23:08.100Z
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
retrieved_at: 2026-06-10T08:23:05.339Z
content_sha256: adb1de6102e4cb94ac6206689e4c694caffa6af44300571d3e9c4c77c855bfaa
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
retrieved_at: 2026-06-10T08:23:09.118Z
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
retrieved_at: 2026-06-10T08:22:32.945Z
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
retrieved_at: 2026-06-10T08:21:43.116Z
content_sha256: 5faddf23119d8f5147c97e3fc6e04cdb6f5c2a68ffb162b356608ed6e0c283e9
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
retrieved_at: 2026-06-10T08:21:43.041Z
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
retrieved_at: 2026-06-10T08:22:32.045Z
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
retrieved_at: 2026-06-10T08:22:32.535Z
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
retrieved_at: 2026-06-10T08:21:42.248Z
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
retrieved_at: 2026-06-10T08:22:32.836Z
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
retrieved_at: 2026-06-10T08:21:35.447Z
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
retrieved_at: 2026-06-10T08:21:42.756Z
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
retrieved_at: 2026-06-10T08:22:32.206Z
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
retrieved_at: 2026-06-10T08:22:32.892Z
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
retrieved_at: 2026-06-10T08:21:34.805Z
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
retrieved_at: 2026-06-10T08:22:32.593Z
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
retrieved_at: 2026-06-10T08:21:42.926Z
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
retrieved_at: 2026-06-10T08:22:31.613Z
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
retrieved_at: 2026-06-10T08:22:30.941Z
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
retrieved_at: 2026-06-10T08:21:42.610Z
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
retrieved_at: 2026-06-10T08:22:32.360Z
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
retrieved_at: 2026-06-10T08:21:35.503Z
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
retrieved_at: 2026-06-10T08:21:42.970Z
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
retrieved_at: 2026-06-10T08:22:32.987Z
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
retrieved_at: 2026-06-10T08:22:32.166Z
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
retrieved_at: 2026-06-10T08:21:43.185Z
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
retrieved_at: 2026-06-10T08:22:31.781Z
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
retrieved_at: 2026-06-10T08:21:35.780Z
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
retrieved_at: 2026-06-10T08:21:32.433Z
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
retrieved_at: 2026-06-10T08:21:32.524Z
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
retrieved_at: 2026-06-10T08:23:04.048Z
content_sha256: 7dc881a7db69c68cdf13069e689c474fbde8b291f65baa6d853175fa14d12f48
---
|/data/skills-sh-vercel-ai-ai-sdk|

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
retrieved_at: 2026-06-10T08:23:02.657Z
content_sha256: 0fed8bd429983c930c95eab3ab0254d4f2c128068fa290d758a057e3467252c3
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
retrieved_at: 2026-06-10T08:23:04.201Z
content_sha256: 448b6936a4a2df00c3db88499479b00e5192d3cbb845d399026ab9226d156195
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
retrieved_at: 2026-06-10T08:21:32.269Z
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
retrieved_at: 2026-06-10T08:23:10.276Z
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
retrieved_at: 2026-06-10T08:21:33.826Z
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
retrieved_at: 2026-06-10T08:23:09.052Z
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
retrieved_at: 2026-06-10T08:21:31.306Z
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
retrieved_at: 2026-06-10T08:21:31.654Z
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
retrieved_at: 2026-06-10T08:22:29.773Z
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
retrieved_at: 2026-06-10T08:23:10.479Z
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
retrieved_at: 2026-06-10T08:21:41.546Z
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
retrieved_at: 2026-06-10T08:22:29.233Z
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
retrieved_at: 2026-06-10T08:21:21.199Z
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
retrieved_at: 2026-06-10T08:21:21.402Z
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
retrieved_at: 2026-06-10T08:21:21.455Z
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
retrieved_at: 2026-06-10T08:23:00.387Z
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
retrieved_at: 2026-06-10T08:21:21.506Z
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
retrieved_at: 2026-06-10T08:22:33.169Z
content_sha256: 54e65dc79c7cf4e4285ee563ff3a96cbab427bf2f257c7e20f18b922046b6f01
---
|/data/skills-sh-zhjiang22-openclaw-xhs-xiaohongshu|
