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
retrieved_at: 2026-04-30T07:45:06.067Z
content_sha256: ea39de8e596c580b86a0d0e4878bd3a29acf19b65549d641c50bff203bdb24b5
---
