---
name: audit-code
description: Security-focused code review for hardcoded secrets, dangerous calls, and common vulnerabilities
disable-model-invocation: true
allowed-tools: Read, Glob, Grep, Bash
context: fork
---

# audit-code -- Project Code Security Review

Security-focused code review of project source code. Covers OWASP-style vulnerabilities, hardcoded secrets, dangerous function calls, and patterns relevant to AI-assisted development.

## What to do

Run the auditor against the target path:

```bash
python3 "$SKILL_DIR/scripts/audit_code.py" "$ARGUMENTS"
```

If `$ARGUMENTS` is empty, default to `$PROJECT_ROOT`.

## What it checks

- **Hardcoded secrets** -- API keys (AWS, GitHub, Stripe, OpenAI, Slack), tokens, private keys, connection strings, passwords
- **Dangerous function calls** -- eval, exec, subprocess with shell=True, child_process.exec, pickle deserialization, system(), gets(), etc.
- **SQL injection** -- String concatenation/interpolation in SQL queries
- **Dependency risks** -- Known hallucinated package names, unverified installations
- **Sensitive files** -- .env files committed to git, credential files in repo
- **File permissions** -- Overly permissive chmod patterns
- **Exfiltration patterns** -- Base64 encode + network send, DNS exfiltration, credential file reads

## Output

Structured report with severity-ranked findings, file locations, and actionable remediation steps.

## When to use

- Before committing or pushing code
- When reviewing third-party contributions or PRs
- As part of a periodic security audit of the codebase
- After AI-assisted code generation to verify no secrets or vulnerabilities were introduced

## Advisory hooks

The repository's `.claude/settings.json` includes PreToolUse hooks that warn on
dangerous Bash and Write operations. These hooks are **advisory only** -- they
produce warnings but do not block execution.

- audit-code is the detection layer for source code security issues
- The hooks provide supplementary runtime warnings during agent operation
- To enforce blocking, hooks must return `{"decision": "block"}`
  instead of warning messages
