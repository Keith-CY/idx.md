---
stable_id: skills/skills-sh-trailofbits-skills-audit-context-building
type: skills
title: skills-sh-trailofbits-skills-audit-context-building
summary: >-
  # Function Micro-Analysis Example

  This example demonstrates a complete micro-analysis following the Per-Function
  Microstructure Checklist.

  ---

  ## Target: `swap(address tokenIn, address tokenOut, uint256 amountIn, uint256
  minAmountOut, uint256 deadline)` in Router.sol

  **Purpose:**

  Enables users to swap one token for another through a liquidity pool. Core
  trading operation in a DEX that:

  - Calculates output amount using constant product formula (x * y = k)

  - Deducts 0.3% protocol fee from input amount

  - Enforces user-specified slippage protection

  - Updates pool reserves to maintain AMM invariant
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/trailofbits/skills/main/plugins/audit-context-building/skills/audit-context-building/resources/FUNCTION_MICRO_ANALYSIS_EXAMPLE.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/audit-context-building
retrieved_at: 2026-02-05T19:13:52.887Z
content_sha256: 49024fff7893c383618ae71e969a6ac1b9d96f672348e1810383b04f8b265d7c
---
