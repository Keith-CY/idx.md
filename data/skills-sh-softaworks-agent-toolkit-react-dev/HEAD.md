---
stable_id: skills/skills-sh-softaworks-agent-toolkit-react-dev
type: skills
title: skills-sh-softaworks-agent-toolkit-react-dev
summary: >-
  # React 19 TypeScript Patterns

  React 19 introduces breaking changes and new APIs requiring updated TypeScript
  patterns.

  ## ref as Prop (No More forwardRef)

  React 19 allows ref as regular prop — forwardRef deprecated but still works.

  ```typescript

  // ✅ React 19 - ref as prop

  type InputProps = {
    ref?: React.Ref<HTMLInputElement>;
    label: string;
  } & React.ComponentPropsWithoutRef<'input'>;
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/softaworks/agent-toolkit/main/skills/react-dev/references/react-19-patterns.md
license: ""
upstream_ref: https://skills.sh/softaworks/agent-toolkit/react-dev
retrieved_at: 2026-02-06T11:59:56.454Z
content_sha256: 385551bdf34ca46da9241299cc3850b801e98087f8a192c872691d3209d90738
---
