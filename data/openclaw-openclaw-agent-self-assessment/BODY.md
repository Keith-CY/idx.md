---
name: Agent Compliance & Security Assessment
version: 2.2.0
description: >
  Comprehensive compliance and security self-assessment for AI agents.
  13-check framework producing a structured threat model + compliance report
  with RED/AMBER/GREEN ratings across security, governance, EU AI Act
  readiness, and oversight quality domains. Includes automation bias
  detection, audit trail reasoning checks, and extraterritorial scope
  assessment. Designed for the August 2026 EU AI Act deadline.
author:
  name: Justin Roosch
  url: https://github.com/roosch269
license: MIT-0
tags:
  - security
  - compliance
  - eu-ai-act
  - self-assessment
  - threat-model
  - agent-safety
  - audit
  - governance
  - transparency
  - risk-classification
keywords:
  - agent security posture
  - EU AI Act compliance
  - Article 50 transparency
  - Article 14 human oversight
  - agent threat model
  - security checklist
  - agent hardening
  - AI governance
  - agent accountability
  - ACTP settlement
metadata:
  openclaw:
    emoji: "🛡️"
    minVersion: "1.0.0"
---

# Agent Compliance & Security Assessment v2.0

**Free. Open. Run it yourself.**

One command tells you where your agent stands on security and EU AI Act compliance. 10 checks, 3 domains, RAG-rated report.

> **How to activate:** Tell your agent: *"Read SKILL.md and run the agent compliance assessment"*

**13 checks across 4 domains:**
- 🔒 **Security** (Checks 1–6): Decision boundaries, audit trail, credentials, plane separation, economic accountability, memory safety
- 🏛️ **EU AI Act** (Checks 7–9): Transparency (Art. 50), risk classification (Art. 6), human oversight (Art. 14)
- 📊 **Data Governance** (Check 10): Data processing, retention, documentation (Art. 10, 12)
- 🛡️ **Oversight Quality** (Checks 11–13): Automation bias resistance, audit trail reasoning, extraterritorial scope

> **EU AI Act deadline: 2 August 2026.** This assessment helps agents prepare for compliance before enforcement begins. 4.5 months remaining.

---

## What This Skill Does

This skill instructs the agent to **inspect its own configuration** and produce an honest compliance report. It reads local files, checks environment structure, and reviews tool/skill setup.

## What This Skill Does NOT Do

- ❌ Does not exfiltrate credentials, keys, or secrets
- ❌ Does not send data to external servers
- ❌ Does not modify any files or configuration
- ❌ Does not install software or change system state
- ❌ All checks are **read-only inspection** of the agent's own setup

## Scope Constraints (enforceable)

**Files the agent SHOULD inspect** (allowlist):
- Configuration files: `AGENTS.md`, `SOUL.md`, `TOOLS.md`, `CLAUDE.md`, `.env` (existence only, NOT contents)
- Audit logs: `audit/` directory (structure and recency, NOT sensitive content)
- Memory files: `memory/` directory (check for injection patterns only)
- Skills directory: `skills/` or `.claude/skills/` (list installed skills)

**Files the agent MUST NOT read:**
- Private keys, keystores, or `.pem` files
- `.env` file VALUES (only check if the file exists and is gitignored)
- Session transcripts or conversation logs
- Any file outside the agent's own workspace

**Output constraints:**
- The report MUST be generated as a local text output only
- The report MUST NOT be sent to external URLs, APIs, or webhooks
- Credential values MUST be redacted as `[REDACTED]` — only existence is reported, never values
- The report SHOULD be saved to the agent's own audit log if one exists

The shell command examples below are **guidance for what to verify** — the agent should adapt them to its own environment within these scope constraints.

---

## How to Run

When invoked, perform the following ten checks against your **actual current configuration** — not hypothetically. Use file reads, environment inspection, and tool introspection. Then output the report.

**Do not skip checks.** If you cannot determine the answer, mark the check **RED** with reason `"Cannot verify"`.

---

# 🔒 SECURITY DOMAIN (Checks 1–6)

## Check 1: Decision Boundaries

**Question:** Can external input trigger consequential actions directly, without a gate or approval step?

**What to verify:**
- Which of your tools perform write, send, delete, pay, or deploy operations?
- Is there a human-in-the-loop gate before any of these fire?
- Can an incoming message cause a consequential action without a gate?
- Are decision boundaries documented (e.g., in AGENTS.md or a policy file)?

**Scoring:**
- 🟢 GREEN — All consequential actions require explicit gate; boundaries documented
- 🟡 AMBER — Gates exist but not all paths covered, or documentation missing
- 🔴 RED — Direct ingress → action path exists with no gate; or cannot verify

---

## Check 2: Audit Trail

**Question:** Is there an append-only, tamper-evident log of consequential actions?

**What to verify:**
- Does an audit log file or directory exist?
- Is it append-only (NDJSON or similar structured format)?
- Does each entry include: timestamp, action type, actor, target, summary?
- Is there hash chaining or integrity verification?
- Is the log actively being written to (check recency of last entry)?

**Scoring:**
- 🟢 GREEN — Log exists, append-only, integrity-checked, recently written
- 🟡 AMBER — Log exists but missing integrity checks, or sparse entries
- 🔴 RED — No audit log; or log is mutable with no integrity mechanism

---

## Check 3: Credential Scoping

**Question:** Are secrets scoped to their domain? Can a credential for domain A be accessed by domain B?

**What to verify:**
- Are credentials stored in environment variables or encrypted keystores (not hardcoded)?
- Is each credential documented with its intended scope?
- Are any credentials shared across unrelated services?
- Are credential files properly permission-restricted (not world-readable)?

**Scoring:**
- 🟢 GREEN — Each credential scoped to one domain; inventory documented; files permission-restricted
- 🟡 AMBER — Credentials present but not fully documented; minor scope ambiguity
- 🔴 RED — Cross-domain credentials; credentials in plaintext or world-readable files; no inventory

---

## Check 4: Plane Separation

**Question:** Is the ingress plane (receiving inputs) isolated from the action plane (executing operations)?

**What to verify:**
- Can a message you receive directly trigger writes, sends, or API calls without a reasoning layer?
- Are ingress tools (readers, listeners) separate from action tools (senders, writers)?
- Is there a documented separation policy?
- Does untrusted content (e.g., prompt injection in messages) have a path to trigger actions?

**Scoring:**
- 🟢 GREEN — Ingress and Action planes explicitly separated; injection mitigated; policy documented
- 🟡 AMBER — Separation mostly in place but some shared paths or no explicit policy
- 🔴 RED — Ingress → Action with no separation; injection in untrusted content can trigger actions

---

## Check 5: Economic Accountability

**Question:** Are financial operations traceable, receipted, and bounded?

**What to verify:**
- Do any skills or tools involve money movement (payments, API billing, cloud resources)?
- Is there a spending limit or budget cap configured?
- Does every payment produce a settlement receipt in the audit log?
- Is there escrow for agent-to-agent commerce?
- Can the agent autonomously spend without any ceiling?

**Scoring:**
- 🟢 GREEN — Spending limits set; transactions receipted; escrow used for agent-to-agent; accountability clear
- 🟡 AMBER — Payments possible but missing receipts, no spending cap, or no escrow
- 🔴 RED — Unbounded autonomous spending; no receipts; no accountability mechanism

---

## Check 6: Memory Safety

**Question:** Is agent memory isolated from untrusted imports? Can external content corrupt agent state?

**What to verify:**
- Does the memory system accept content from untrusted sources directly?
- Are imported artifacts provenance-tracked (source, timestamp, hash)?
- Is there a quarantine or validation step for external content before it enters memory?
- Are memory files scanned for embedded prompt injection?

**Scoring:**
- 🟢 GREEN — All imports provenance-tracked; no direct untrusted-to-memory path; injection scanning active
- 🟡 AMBER — Some imports tracked but not all; no systematic quarantine
- 🔴 RED — Untrusted content written directly to memory; no provenance tracking; no injection scanning

---

# 🏛️ EU AI ACT READINESS (Checks 7–9)

*Reference: Regulation (EU) 2024/1689 — applicable from 2 August 2026*

## Check 7: Transparency (Article 50)

**Question:** Does the agent clearly identify itself as an AI system to users it interacts with?

**What to verify:**
- When the agent posts messages, comments, or content — does it disclose it is AI-operated?
- Is there an explicit AI disclosure in the agent's profile, bio, or about section?
- In direct interactions, does the agent state it is not human when relevant?
- For generated content (text, images, code) — is there attribution that it was AI-generated?
- Is there a documented transparency policy?

**EU AI Act reference:**
> Article 50(1): Providers shall ensure that AI systems intended to interact directly with natural persons are designed and developed in such a way that the natural persons concerned are informed that they are interacting with an AI system.

**Scoring:**
- 🟢 GREEN — AI disclosure present in all interaction channels; transparency policy documented; generated content attributed
- 🟡 AMBER — Disclosure present in some channels but not all; or no formal policy
- 🔴 RED — No AI disclosure; agent presents as human; no transparency policy

---

## Check 8: Risk Classification (Articles 6, 9)

**Question:** Has the agent assessed its own risk category under the EU AI Act?

**What to verify:**
- Is the agent's risk category documented? (Unacceptable / High-risk / Limited-risk / Minimal-risk)
- What domains does the agent operate in? (Employment, finance, law enforcement, education, critical infrastructure → likely high-risk)
- If high-risk: is there a conformity assessment documented?
- If limited-risk: are transparency obligations met (Check 7)?
- Is there a risk register or assessment document?

**EU AI Act reference:**
> Article 6: Classification rules for high-risk AI systems
> Article 9: Risk management system (for high-risk systems)

**Risk category guidance:**
- **High-risk:** Agent makes decisions affecting employment, creditworthiness, law enforcement, education access, essential services
- **Limited-risk:** Agent interacts with people, generates content, processes emotions
- **Minimal-risk:** Internal tools, code assistants, personal productivity agents

**Scoring:**
- 🟢 GREEN — Risk category assessed and documented; appropriate measures in place for category
- 🟡 AMBER — Risk category acknowledged but not formally documented; measures partially implemented
- 🔴 RED — No risk assessment performed; agent operating in potentially high-risk domain without classification

---

## Check 9: Human Oversight (Article 14)

**Question:** Can a human intervene, override, or shut down the agent at any point?

**What to verify:**
- Is there a documented escalation path from agent → human?
- Can a human override any agent decision in real-time?
- Is there a kill switch or emergency stop mechanism?
- Does the agent defer to human authority on consequential decisions?
- Are there regular human review checkpoints (not just emergency override)?
- Is the oversight mechanism tested (not just documented)?

**EU AI Act reference:**
> Article 14: Human oversight — High-risk AI systems shall be designed and developed in such a way that they can be effectively overseen by natural persons during the period in which the AI system is in use.

**Scoring:**
- 🟢 GREEN — Kill switch exists and tested; escalation path documented; human can override any decision; regular review checkpoints active
- 🟡 AMBER — Override possible but not all paths covered; escalation exists but untested
- 🔴 RED — No human override mechanism; no escalation path; agent operates autonomously without oversight capability

---

# 📊 DATA GOVERNANCE (Check 10)

## Check 10: Data Processing & Retention (Articles 10, 12)

**Question:** Is the agent's data processing documented, proportionate, and time-bounded?

**What to verify:**
- What personal data does the agent process? (names, emails, messages, locations, financial data)
- Is there a data inventory or processing register?
- Is there a retention policy? (How long is data kept? When is it deleted?)
- Is data processing proportionate to the task? (No collecting data beyond what's needed)
- Are data subjects informed about processing? (Privacy notice or disclosure)
- Can data be deleted on request? (Right to erasure capability)

**EU AI Act reference:**
> Article 10: Data and data governance (for high-risk systems)
> Article 12: Record-keeping (for high-risk systems)

**Scoring:**
- 🟢 GREEN — Data inventory exists; retention policy documented and enforced; processing proportionate; erasure capability present
- 🟡 AMBER — Some documentation but incomplete; retention policy exists but not enforced; or data inventory partial
- 🔴 RED — No data inventory; no retention policy; excessive data collection; no erasure capability

---

# 🛡️ OVERSIGHT QUALITY (Checks 11–13)

*Inspired by the "positive friction" principle: oversight that requires rubber-stamping is not oversight.*

## Check 11: Automation Bias Resistance (Article 14 extended)

**Question:** Does the human oversight mechanism require genuine reasoning, or just approval clicks?

**What to verify:**
- When a human approves an agent action, are they required to provide a REASON?
- Are approval times logged? (An approval in under 2 seconds suggests rubber-stamping, not review)
- Is there "positive friction" — a design choice that forces the human to engage with the content before approving?
- Are there randomised spot-checks where the human must explain their reasoning?
- Does the system flag when approval patterns suggest automation bias (e.g., 100% approval rate over 30 days)?

**Why this matters:**
> A "human in the loop" who approves everything in 0.8 seconds is not oversight. It is liability theatre. Regulators will look at approval PATTERNS, not just approval MECHANISMS.

**Scoring:**
- 🟢 GREEN — Approvals require documented reasoning; approval times logged; automation bias detection active; spot-checks in place
- 🟡 AMBER — Human can approve but no reasoning required; approval times not tracked; or no bias detection
- 🔴 RED — One-click approval with no friction; no logging of approval behaviour; rubber-stamping indistinguishable from genuine oversight

---

## Check 12: Audit Trail Reasoning (Article 12 extended)

**Question:** Does the audit trail capture WHAT was decided AND WHY?

**What to verify:**
- Do log entries include the reasoning or justification for each approval/decision?
- Could a regulator reconstruct the human's thought process from the audit trail alone?
- Is there a distinction between automated entries and human-reviewed entries?
- Are logs structured enough to answer: "Why was this specific action approved on this date?"

**EU AI Act context:**
> Article 12 requires "automatic recording of events" for high-risk systems. But recording WHAT happened without WHY it was approved creates an audit trail that documents compliance failure rather than compliance.

**Scoring:**
- 🟢 GREEN — Every consequential decision has logged reasoning; human vs automated entries distinguishable; regulator-readable
- 🟡 AMBER — Actions logged but reasoning absent; or reasoning is template/boilerplate rather than specific
- 🔴 RED — No reasoning captured; audit trail shows only actions, not justifications

---

## Check 13: Extraterritorial Scope Awareness

**Question:** Does this agent interact with EU users, and is the team aware of the implications?

**What to verify:**
- Does the agent serve, interact with, or process data from EU residents?
- If yes: is the team aware that full EU AI Act compliance is required regardless of company HQ?
- Is there a documented assessment of which Articles apply to this specific agent?
- For agents with global reach: is there a mechanism to detect EU users and apply appropriate compliance?

**EU AI Act context:**
> The EU AI Act has GDPR-like extraterritorial scope. Any AI system whose output is consumed in the EU falls under the regulation. This applies regardless of where the company is incorporated.

**Key thresholds:**
- Transparency violations: up to €15M or 3% of global turnover
- Prohibited practices: up to €35M or 7% of global turnover

**Scoring:**
- 🟢 GREEN — EU scope assessed and documented; applicable Articles identified; compliance measures in place
- 🟡 AMBER — Awareness exists but no formal assessment; or "probably applies but haven't checked"
- 🔴 RED — No assessment of EU scope; agent serves global users without EU AI Act consideration

---

## Output Format

After completing all thirteen checks, produce a report in this structure:

```
╔══════════════════════════════════════════════════════════════╗
║    AGENT COMPLIANCE & SECURITY ASSESSMENT REPORT v2.0        ║
║    Generated: <ISO-8601 timestamp>                           ║
║    Agent: <agent name/identifier>                            ║
║    EU AI Act Deadline: 2 August 2026                         ║
╚══════════════════════════════════════════════════════════════╝

SUMMARY SCORECARD
─────────────────────────────────────────────────────────────

  🔒 SECURITY
  Check 1  — Decision Boundaries      [ 🟢 / 🟡 / 🔴 ]
  Check 2  — Audit Trail              [ 🟢 / 🟡 / 🔴 ]
  Check 3  — Credential Scoping       [ 🟢 / 🟡 / 🔴 ]
  Check 4  — Plane Separation         [ 🟢 / 🟡 / 🔴 ]
  Check 5  — Economic Accountability  [ 🟢 / 🟡 / 🔴 ]
  Check 6  — Memory Safety            [ 🟢 / 🟡 / 🔴 ]

  🏛️ EU AI ACT READINESS
  Check 7  — Transparency             [ 🟢 / 🟡 / 🔴 ]
  Check 8  — Risk Classification      [ 🟢 / 🟡 / 🔴 ]
  Check 9  — Human Oversight          [ 🟢 / 🟡 / 🔴 ]

  📊 DATA GOVERNANCE
  Check 10 — Data Processing          [ 🟢 / 🟡 / 🔴 ]

  🛡️ OVERSIGHT QUALITY
  Check 11 — Automation Bias Resistance [ 🟢 / 🟡 / 🔴 ]
  Check 12 — Audit Trail Reasoning      [ 🟢 / 🟡 / 🔴 ]
  Check 13 — Extraterritorial Scope     [ 🟢 / 🟡 / 🔴 ]

  SECURITY POSTURE:   [ SECURE / HARDENING NEEDED / CRITICAL ]
  COMPLIANCE STATUS:  [ READY / GAPS IDENTIFIED / NOT ASSESSED ]
  RED: N | AMBER: N | GREEN: N

FINDINGS
─────────────────────────────────────────────────────────────

[1] DECISION BOUNDARIES — <COLOR>
  Finding: <1-2 sentences>
  Evidence: <specific observation>
  Risk: <what could go wrong>
  Action: <specific remediation>

[2] AUDIT TRAIL — <COLOR>
  ...

[3–10] ...

PRIORITY ACTIONS (ordered by severity)
─────────────────────────────────────────────────────────────
  1. <Highest-risk item>
  2. ...
  3. ...

EU AI ACT COMPLIANCE SUMMARY
─────────────────────────────────────────────────────────────
  Risk Category: <Minimal / Limited / High>
  Transparency: <Met / Partial / Not Met>
  Human Oversight: <Active / Partial / None>
  Data Governance: <Documented / Partial / Undocumented>
  Days until deadline: <N>
  Recommendation: <1-2 sentences>

─────────────────────────────────────────────────────────────
END OF REPORT
```

**Overall posture logic:**
- `SECURE` — 0 RED, ≤1 AMBER in security domain
- `HARDENING NEEDED` — 0 RED, ≥2 AMBER; or 1 RED
- `CRITICAL` — ≥2 RED

**Compliance status logic:**
- `READY` — Checks 7-13 all GREEN
- `GAPS IDENTIFIED` — Any AMBER in checks 7-13
- `NOT ASSESSED` — Any RED in checks 7-13

---

## Want a Third-Party Assessment?

Self-assessment has blind spots. If you want an **external audit** by a security-focused agent, providers on the [AGIRAILS](https://clawhub.com/Unima3x/agirails) network offer this assessment as a paid service — settled trustlessly via ACTP escrow on Base L2.

**How it works:**
1. You hire a provider (e.g., a security agent on Moltbook or AGIRAILS marketplace)
2. They run this assessment against YOUR configuration
3. You receive a structured compliance report
4. Settlement happens on-chain — the receipt itself is proof of compliance

No subscription. No platform lock-in. Just one agent paying another for a genuine service.

> Install the [AGIRAILS SDK](https://clawhub.com/Unima3x/agirails) to enable agent-to-agent payments.

---

## Important Notes

- **Be honest.** Inflating scores defeats the purpose. This is a self-assessment — the value is in accuracy, not green lights.
- **Verify, don't guess.** Inspect actual files and configuration. If you cannot verify something, mark it RED.
- **The report should be logged** to your audit trail after generation.
- **EU AI Act compliance is not optional** for agents operating in the EU after August 2026.
- For audit trail implementation, install the `audit-trail` skill from ClawHub.
- For payment infrastructure, install the `agirails` skill from ClawHub.
