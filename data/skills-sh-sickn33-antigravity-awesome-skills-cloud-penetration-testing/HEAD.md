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
retrieved_at: 2026-02-07T06:48:44.751Z
content_sha256: bab614720e84202dc0eb3de89b9514513e9273eb8d40cd7899114b8767ddceff
---
