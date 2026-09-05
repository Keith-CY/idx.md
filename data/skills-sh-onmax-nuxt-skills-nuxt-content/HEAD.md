---
stable_id: skills/skills-sh-onmax-nuxt-skills-nuxt-content
type: skills
title: skills-sh-onmax-nuxt-skills-nuxt-content
summary: >-
  # Collections

  Use collections as the schema and routing boundary for content. Once
  `content.config.ts` exists, Nuxt Content imports only files matched by a
  collection source.

  ## Choose the collection type

  - `page` adds `path`, `title`, `description`, `seo`, `body`, and `navigation`;
  use it when one content file maps to one route.

  - `data` adds the common file fields but leaves the domain schema to you; use
  it for authors, products, configuration, and other structured records.

  - Every collection includes `id`, `stem`, `extension`, and `meta`.

  Keep each source file in one collection. Overlapping collection globs can
  break live reload, so use `exclude` to make ownership explicit.

  ## Validators and editor metadata

  Import validators from their packages. The `z` re-export from `@nuxt/content`
  is deprecated.

  ```ts
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/onmax/nuxt-skills/HEAD/skills/nuxt-content/references/collections.md
license: ""
upstream_ref: https://skills.sh/onmax/nuxt-skills/nuxt-content
github_stars: 564
github_forks: 27
github_is_organization: false
retrieved_at: 2026-09-05T11:07:26.089Z
content_sha256: 4fd01d8b51793c18b6235f625c2bf54b92161180fbf544109623ece5f449c7b0
---
