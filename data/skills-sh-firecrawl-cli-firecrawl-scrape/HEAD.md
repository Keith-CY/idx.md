---
stable_id: skills/skills-sh-firecrawl-cli-firecrawl-scrape
type: skills
title: skills-sh-firecrawl-cli-firecrawl-scrape
summary: >-
  ---

  name: firecrawl-search

  description: Find web sources and discover workflows, data APIs, and indexes.
  Use for web research or finding structured records, listings, transcripts, and
  datasets. Supports semantic tool discovery, domain matching, and progressive
  catalogue browsing.

  allowed-tools:
    - Bash(firecrawl *)
    - Bash(npx firecrawl-cli *)
  ---

  # firecrawl search

  Search naturally using the user’s actual question. Default search returns web
  results plus relevant Alexandria tools, with optional web content scraping.

  For structured records, filterable listings, transcripts, or datasets, first
  check `firecrawl search alexandria '<data you need>'` for a suitable workflow
  or data provider. For a known website, use `firecrawl find-tools <url>`.
  Inspect a selected contract with `firecrawl list <provider> <capability>
  --pretty` before executing it through `scrape`; reuse a complete contract
  already returned by discovery. If no suitable tool exists, continue with web
  search or Agent. Use ordinary `search` for web research and URL `scrape` for a
  known page.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/firecrawl/cli/HEAD/skills/firecrawl-search/SKILL.md
license: ""
upstream_ref: https://skills.sh/firecrawl/cli/firecrawl-scrape
github_stars: 197
github_forks: 28
github_is_organization: true
retrieved_at: 2026-09-22T12:13:38.496Z
content_sha256: bb5c24292b1dd49bf33b17c777d31d4829ef26e8f3676eb8a4f2931401f97206
---
