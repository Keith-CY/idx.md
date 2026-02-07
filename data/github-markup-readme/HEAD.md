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
retrieved_at: 2026-02-07T06:48:35.818Z
content_sha256: 72cc179fe566e62aa18114513eb38e7b6188a7c76806289cdec97138f75b5b11
---
