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
retrieved_at: 2026-03-04T07:15:37.838Z
content_sha256: 4759684eb4ee5bdce4982ec472d46a42287186bbc5b34512b4ecbea69e53e421
---
