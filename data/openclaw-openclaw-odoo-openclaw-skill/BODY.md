---
name: odoo
description: Use when the user asks for Odoo accounting audits, VAT/cashflow analysis, inventory valuation, or financial reporting that must come directly from Odoo via RPC with reproducible, evidence-backed numbers.
---

# Odoo Financial Intelligence (Read-Only, Evidence-First)

Use this skill for **deterministic Odoo financial reporting**.

## Hard Rules

1. Odoo RPC output is the source of truth; AI text is advisory.
2. Skill is **strict read-only**. Mutating methods are blocked (`create`, `write`, `unlink`, and similar actions).
3. No proactive Odoo actions unless explicitly requested in-session.
4. Every material number must include method/scope assumptions.

## Entrypoint

```bash
python3 ./skills/odoo/assets/autonomous-cfo/src/tools/cfo_cli.py
```

## Runtime/Backend Policy

- `--rpc-backend auto` (default): prefers JSON-2 for Odoo 19+, falls back to XML-RPC.
- `--rpc-backend json2`
- `--rpc-backend xmlrpc`

Quick health check:

```bash
python3 ./skills/odoo/assets/autonomous-cfo/src/tools/cfo_cli.py doctor
```

## Required Environment

From `assets/autonomous-cfo/.env`:
- `ODOO_URL`
- `ODOO_DB`
- `ODOO_USER`
- `ODOO_PASSWORD`

Recommended: use Odoo API key as `ODOO_PASSWORD` and least-privilege bot user.

## Primary Workflows

```bash
python3 ./skills/odoo/assets/autonomous-cfo/src/tools/cfo_cli.py summary --days 30
python3 ./skills/odoo/assets/autonomous-cfo/src/tools/cfo_cli.py cash_flow
python3 ./skills/odoo/assets/autonomous-cfo/src/tools/cfo_cli.py vat --date-from YYYY-MM-DD --date-to YYYY-MM-DD
python3 ./skills/odoo/assets/autonomous-cfo/src/tools/cfo_cli.py trends --months 12 --visualize
python3 ./skills/odoo/assets/autonomous-cfo/src/tools/cfo_cli.py anomalies
python3 ./skills/odoo/assets/autonomous-cfo/src/tools/cfo_cli.py anomalies --ai
python3 ./skills/odoo/assets/autonomous-cfo/src/tools/cfo_cli.py ask "..."
python3 ./skills/odoo/assets/autonomous-cfo/src/tools/cfo_cli.py rpc-call --model <model> --method <read_method> --payload '<json>'
```

Useful controls:
- `--company-id` for single-entity scope
- `--lang`, `--tz` for consistent localization
- `--timeout`, `--retries` for network stability

## Accuracy Protocol (Mandatory)

Before final output, always:

1. Declare scope (date range, states, company).
2. Declare method (models/domains/fields used).
3. Cross-check key totals through one alternate view.
4. State currency handling explicitly.
5. Note assumptions and unresolved ambiguities.

If checks disagree, report as **provisional** and drill down.

## VAT Protocol

Minimum output:
- `output_vat`
- `input_vat`
- `net_vat_liability = output_vat - input_vat`

Rules:
- posted tax lines only (unless user requests otherwise)
- explicit handling for refunds/credit notes
- mention localization caveats if custom tax setup exists

## Edge-Case Checklist

- Multi-company leakage (must isolate when requested)
- Timezone boundary drift (month/day close)
- Draft contamination
- Large dataset partial reads (use pagination)
- Concurrent updates between calls
- JSON-2 per-call transaction semantics
- Custom fields/localization mismatches (`fields_get`)
- Negative/reversal lines and null refs in anomaly logic

## AI Guardrails

Allowed: narrative, prioritization, risk commentary.

Not allowed: replacing deterministic numbers or claiming audited certainty without evidence.

For AI-assisted output, include source scope + deterministic basis + confidence.

## Output Contract

Use this structure in user-facing reports:
1. Executive summary
2. Key numbers
3. Method and scope
4. Confidence level
5. Actionable next steps

## Failure Handling

On failure:
1. Return exact error class and context.
2. Suggest one concrete remediation step.
3. Re-run `doctor` if connection/auth/model access is suspect.
4. Never fabricate fallback financial values.
