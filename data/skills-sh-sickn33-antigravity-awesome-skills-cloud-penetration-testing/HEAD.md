---
stable_id: skills/skills-sh-sickn33-antigravity-awesome-skills-cloud-penetration-testing
type: skills
title: skills-sh-sickn33-antigravity-awesome-skills-cloud-penetration-testing
summary: >-
  # Advanced Cloud Pentesting Scripts

  Reference: [Cloud Pentesting Cheatsheet by Beau
  Bullock](https://github.com/dafthack/CloudPentestCheatsheets)

  ## Scope and handling

  The all-subscription loops below are templates, not permission to broaden the
  engagement. Replace discovery with an explicit authorized
  subscription/resource allowlist and private output directory. Runbooks, job
  output, function settings and ScoutSuite exports may contain secrets; redact
  before reporting. Service-principal resets, new users and role assignments can
  break access or create persistence: document a path without executing it
  unless a separate lab mutation plan and cleanup are approved. Old
  module/API/JSON schemas must be checked before use.

  ## Azure Automation Runbooks

  ### Export All Runbooks from All Subscriptions

  ```powershell

  $subs = Get-AzSubscription

  Foreach($s in $subs){
      $subscriptionid = $s.SubscriptionId
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/sickn33/antigravity-awesome-skills/main/skills/cloud-penetration-testing/references/advanced-cloud-scripts.md
license: ""
upstream_ref: https://skills.sh/sickn33/antigravity-awesome-skills/cloud-penetration-testing
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-10-27T12:52:53.540Z
content_sha256: 87fd4cd420c6e9c49be150b9cc28fa36e980e6c2626da67bbf6b1ee40067e5e9
---
