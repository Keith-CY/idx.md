---
stable_id: skills/skills-sh-firecrawl-cli-firecrawl-scrape
type: skills
title: skills-sh-firecrawl-cli-firecrawl-scrape
summary: >-
  ---

  name: firecrawl-search

  description: Find web sources with query-relevant page excerpts and optional
  full-page content, and discover workflows, data APIs, and indexes. Use for web
  research or finding structured records, listings, transcripts, and datasets.
  Supports semantic tool discovery, domain matching, and progressive catalogue
  browsing.

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
retrieved_at: 2026-09-26T11:58:13.713Z
content_sha256: 1d37a3e7512b132f209d3115f93d41e678d2e2d3d6df82110255fb4f378a4c6b
---
