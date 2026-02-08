---
name: odoo
description: Use when the user asks for Odoo accounting audits, VAT/cashflow analysis, or financial reporting that should be executed directly against Odoo via RPC with reproducible, evidence-backed numbers.
---

# Odoo Financial Intelligence (Production-Grade RPC)

Use this skill for **verifiable financial reporting from Odoo**, not estimate-based answers.

## Non-Negotiables

1. **Source of truth = Odoo RPC data**, not AI text.
2. **Read-only by default**. Do not create/update/delete in Odoo unless user explicitly asks.
3. **No proactive Odoo actions** unless explicitly requested in-session.
4. **Show method + scope + assumptions** for every material number.
5. Power mode mutating calls (`create`, `write`, `unlink`) require explicit `--allow-write`.

---

## Entry Points

- CLI wrapper: `./skills/odoo/scripts/cfo-cli`
- Engine root: `skills/odoo/assets/autonomous-cfo`
- Connector: `skills/odoo/assets/autonomous-cfo/src/connectors/odoo_client.py`

---

## API Backends (Odoo-Version Aware)

`cfo-cli` supports:
- `--rpc-backend auto` (default)
- `--rpc-backend json2`
- `--rpc-backend xmlrpc`

### Backend policy

- Prefer **JSON-2** for Odoo 19+.
- Use **XML-RPC** fallback for older deployments.
- Odoo docs indicate XML-RPC/JSON-RPC legacy endpoints are planned for removal in Odoo 20; prioritize JSON-2 readiness.

### Quick checks

- Auto health check: `./skills/odoo/scripts/cfo-cli doctor`
- Force JSON-2: `./skills/odoo/scripts/cfo-cli --rpc-backend json2 doctor`
- Force XML-RPC: `./skills/odoo/scripts/cfo-cli --rpc-backend xmlrpc doctor`

---

## Credentials + Auth

Required env (from `autonomous-cfo/.env`):
- `ODOO_URL`
- `ODOO_DB`
- `ODOO_USER`
- `ODOO_PASSWORD`

### Best practice

- For production integrations, use **Odoo API keys** as `ODOO_PASSWORD`.
- Keep least privilege on integration user.
- Prefer dedicated bot users for audit/reporting tasks.

### AI integration

- `ask` / `anomalies --ai` use **native OpenClaw runtime** (not separate Gemini key flow).
- AI output is advisory only and must be backed by deterministic Odoo evidence.

---

## Standard Workflows

- Summary: `./skills/odoo/scripts/cfo-cli summary --days 30`
- Cash flow: `./skills/odoo/scripts/cfo-cli cash_flow`
- VAT: `./skills/odoo/scripts/cfo-cli vat --date-from YYYY-MM-DD --date-to YYYY-MM-DD`
- Trends: `./skills/odoo/scripts/cfo-cli trends --months 12 --visualize`
- Rules anomalies: `./skills/odoo/scripts/cfo-cli anomalies`
- AI anomalies: `./skills/odoo/scripts/cfo-cli anomalies --ai`
- Natural query: `./skills/odoo/scripts/cfo-cli ask "..."`
- Power mode: `./skills/odoo/scripts/cfo-cli rpc-call --model <model> --method <method> --payload '<json>'`

Use context controls when needed:
- `--company-id <id>` for multi-company isolation
- `--lang`, `--tz` for consistent locale/time context
- `--timeout`, `--retries` for unstable networks

---

## Accuracy Protocol (Mandatory)

Before finalizing any report:

1. **Scope declaration**
   - exact date range
   - move states included (default: posted)
   - company scope (single vs multi-company)
2. **Method declaration**
   - models and domains used
   - key fields and transformations
3. **Cross-check**
   - reconcile totals through at least one alternate slice (e.g., summary vs trends overlap)
4. **Currency integrity**
   - state currency and prevent mixed-currency aggregation without explicit conversion logic
5. **Edge-case handling**
   - refunds/credit notes, reversals, partial payments, tax-free lines
6. **Assumptions log**
   - document exclusions, inferred logic, and unresolved ambiguity

If any cross-check fails, mark output **provisional** and run drill-down before conclusions.

---

## VAT Protocol (Important)

Minimum VAT output:
- `output_vat`
- `input_vat`
- `net_vat_liability = output_vat - input_vat`

Rules:
- Use posted tax lines within period.
- Separate sales vs purchase tax by move type.
- Explicitly mention treatment of refunds.
- If localization/custom tax setup exists, run a validation pass on tax tags/accounts before final claims.

---

## Edge Cases Checklist

Always check these before “final”:

- **Multi-company leakage**: enforce `--company-id` if user asks for one entity.
- **Timezone boundary drift**: month-end/day-end queries must use declared timezone.
- **Draft contamination**: exclude non-posted unless requested.
- **Large datasets**: use pagination (`search_read_all` pattern), avoid partial reads.
- **Concurrent updates**: Odoo data can change between calls; avoid fragile multi-call logic where possible.
- **Transaction semantics (JSON-2)**: each API call is its own transaction; prefer single method paths for atomicity.
- **Field availability mismatch**: inspect with `fields_get` when custom modules/localization are likely.
- **Null/empty partner or ref values** in anomaly rules.
- **Negative values / reversals** in period summaries.

---

## AI Usage Guardrails

Allowed:
- anomaly narrative
- risk commentary
- executive wording

Not allowed:
- replacing deterministic totals
- claiming “audited” based on AI alone

When AI is used, include:
- source dataset scope
- deterministic numbers used
- confidence level and limitations

---

## Output Format (for user-facing reports)

1. **Executive Summary** (2-4 bullets)
2. **Key Numbers**
3. **Method** (models, domains, timeframe, company)
4. **Confidence** (high/medium/low + reason)
5. **Actionable Next Steps**

---

## Delivery Rules

When files are generated (charts/reports/exports):
1. Send the artifact directly (not just local paths).
2. Format by type:
   - Images (`png`, `jpg`) as image with summary caption.
   - Documents (`pdf`, `xlsx`, `csv`) as document attachment.
3. Caption must include date range, company scope, currency, and what the file proves.

---

## Failure Handling

If execution fails:
1. Return exact failure reason (auth/network/model/field mismatch).
2. Suggest one concrete fix step.
3. Re-run minimal `doctor` check.
4. Do not fabricate fallback numbers.

---

## Direct RPC Drill-Down Triggers

Switch from normal report commands to targeted RPC inspection when:
- user asks for source-record traceability
- numbers conflict between two outputs
- custom module/localization suspected
- large material variance appears with no obvious driver

Use connector methods with explicit domains and include record IDs in evidence where practical.
