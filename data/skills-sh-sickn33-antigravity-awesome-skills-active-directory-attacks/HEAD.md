---
stable_id: skills/skills-sh-sickn33-antigravity-awesome-skills-active-directory-attacks
type: skills
title: skills-sh-sickn33-antigravity-awesome-skills-active-directory-attacks
summary: >-
  # Advanced AD trust-boundary reference

  Use only within the root skill's explicit confirmation gate. This is a review
  checklist, not an instruction to extract credentials or deploy persistence.
  All active testing belongs in an owner-approved synthetic lab.

  ## Delegation

  - Unconstrained delegation: inspect effective configuration and whether a
  delegatable principal actually authenticates to the service. A TGT is not
  guaranteed for every authentication; account protections and protocol behavior
  matter. Do not coerce a real controller or collect other users' tickets.

  - Constrained delegation: inspect allowed service principals, protocol
  transition and the delegating identity's actual credentials/permissions. A
  listed target alone does not demonstrate arbitrary impersonation.

  - Resource-based constrained delegation: inspect who can write the target's
  delegation descriptor and which principals are allowed. Creating a machine or
  changing the descriptor is a persistent directory mutation, not
  reconnaissance. Preserve the original descriptor and use a synthetic account
  if a lab change is authorized.

  ## GPO control

  Trace effective edit/ownership rights, GPO links, filtering, target OU and
  policy application. A writable GPO can imply significant risk, but actual
  affected computers/users and resulting privileges must be established. Do not
  add admin users, immediate tasks or disguised update jobs as a routine proof.
  Use an inert lab policy marker and verify removal/application afterward.

  ## RODC

  Inspect password-replication policy, filtered attribute set, cached/revealed
  principals and effective rights for the actual configuration. Do not assume
  all sensitive attributes or all users are automatically excluded or that every
  RODC key enables unrestricted domain impersonation. RODC key/credential
  disclosure is incident material; avoid acquiring it for a checklist.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/sickn33/antigravity-awesome-skills/main/skills/active-directory-attacks/references/advanced-attacks.md
license: ""
upstream_ref: https://skills.sh/sickn33/antigravity-awesome-skills/active-directory-attacks
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-10-26T13:45:16.088Z
content_sha256: f5e12b3c982b1cef082787bb12528d3183161bbebf8f0e15fbca148bfa2a2d44
---
