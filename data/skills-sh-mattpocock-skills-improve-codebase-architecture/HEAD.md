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
retrieved_at: 2026-03-25T07:27:32.911Z
content_sha256: dd47bb0359f8e09db95d393c6b9f8c77430af37826d939557edc2abef59cddbb
---
