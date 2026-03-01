---
stable_id: skills/skills-sh-whatevertogo-feishuskill-lark-mcp
type: skills
title: skills-sh-whatevertogo-feishuskill-lark-mcp
summary: |-
  # 多维表格 (Bitable) 操作指南
  ## ⚠️ 关键注意事项
  **⭐ 0. 使用用户身份创建（最重要！）**
  ```yaml
  # ⭐ 关键经验：始终使用 useUAT: true 创建用户可访问的资源
  useUAT: true   # ✅ 用户身份 - 创建者=当前用户，您可以直接访问
  useUAT: false  # ❌ 租户身份 - 创建者=飞书助手，您无法直接访问
  # 实际测试发现：
  # - useUAT: false 创建的 Base，创建者是"飞书助手"
  # - 当前用户无法直接访问，权限受限
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/whatevertogo/feishuskill/HEAD/lark-mcp/reference/bitable.md
license: ""
upstream_ref: https://skills.sh/whatevertogo/feishuskill/lark-mcp
github_stars: 11
github_forks: 1
github_is_organization: false
retrieved_at: 2026-03-01T07:13:56.991Z
content_sha256: 84fd901c39af1a131eb5de82b10034a8a364aa580ef44ea2cec9b6ec4d19a27f
---
