---
name: codex-account-switcher
version: 1.4.3
homepage: https://github.com/odrobnik/codex-account-switcher-skill
description: >
  Manage multiple OpenAI Codex accounts by capturing current login tokens,
  switching between saved accounts, and auto-selecting the best one based on
  quota budget scoring. Can also explicitly sync saved Codex tokens into
  OpenClaw agent auth stores on this machine. Sensitive: reads and writes local
  authentication files.
summary: Save, switch, compare, and optionally sync Codex account tokens.
metadata:
  openclaw:
    emoji: "🎭"
    requires:
      bins: ["python3", "codex"]
      config:
        - "~/.codex/auth.json"
        - "~/.codex/accounts/"
        - "~/.codex/account-activity.jsonl"
        - "~/.openclaw/agents/*/agent/auth-profiles.json"
        - "~/.openclaw/agents/*/agent/auth.json"
---

# Codex Account Switcher

Manage multiple OpenAI Codex identities (e.g. personal, family, work) by swapping the authentication token file. Includes smart auto-selection based on quota budget scoring.

⚠️ **Sensitive files touched:**
- `~/.codex/auth.json`
- `~/.codex/accounts/*.json`
- `~/.codex/account-activity.jsonl`
- `~/.openclaw/agents/*/agent/auth-profiles.json`
- `~/.openclaw/agents/*/agent/auth.json`

These paths are also declared in `metadata.openclaw.requires.config` so the registry/security scan can see them in structured metadata.

⚠️ **Security model:**
- `add`, `save`, `use`, and `auto` only manage local Codex snapshots by default.
- OpenClaw token propagation is now **explicit** via `sync` or `--sync`.
- Use `--agent <name>` to limit writes to specific OpenClaw agents.
- Use `sync --dry-run` to inspect planned writes before changing auth files.

## Usage

### List Accounts
```bash
python3 {baseDir}/scripts/codex-accounts.py list
python3 {baseDir}/scripts/codex-accounts.py list --verbose
python3 {baseDir}/scripts/codex-accounts.py list --json
```

### Add an Account
Interactive wizard — starts a fresh browser login (`codex logout && codex login`) so you explicitly choose the identity to capture. Press **Enter** to accept the default name (local-part of the email).

```bash
python3 {baseDir}/scripts/codex-accounts.py add
```

### Switch Account
Instantly swap the active login. Does **not** sync to OpenClaw unless you ask for it.

```bash
python3 {baseDir}/scripts/codex-accounts.py use oliver
python3 {baseDir}/scripts/codex-accounts.py use oliver --sync
python3 {baseDir}/scripts/codex-accounts.py use oliver --sync --agent main
```

### Auto-Switch to Best Quota
Probes each account for current quota, scores them, and switches to the best one.
Does **not** sync to OpenClaw unless you ask for it.

```bash
python3 {baseDir}/scripts/codex-accounts.py auto
python3 {baseDir}/scripts/codex-accounts.py auto --json
python3 {baseDir}/scripts/codex-accounts.py auto --sync --agent main
```

Example output:
```
Account         7d    5h   Score      7d Resets      5h Resets
──────────── ───── ───── ─────── ────────────── ──────────────
oliver         60%    1%   +12.0   Apr 03 08:08      in 4h 40m ←
elise          62%   75%   +25.3   Apr 03 10:15      in 2h 01m
sylvia         MAX    0%   +51.8   Apr 03 07:51      in 5h 00m
```

### Sync Saved Profiles to OpenClaw
Explicitly push saved account tokens to OpenClaw.

```bash
python3 {baseDir}/scripts/codex-accounts.py sync
python3 {baseDir}/scripts/codex-accounts.py sync oliver sylvia
python3 {baseDir}/scripts/codex-accounts.py sync --agent main
python3 {baseDir}/scripts/codex-accounts.py sync --agent main --dry-run
```

## Auto Mode — How It Works

### 1. Quota Probing

For each saved account, `auto` temporarily switches `~/.codex/auth.json` and runs a lightweight `codex exec --skip-git-repo-check "reply OK"` probe.

It then:
- prefers the exact session file from that probe if it contains valid `rate_limits`
- falls back to the most recent session file with valid `rate_limits` (same approach as `codex-quota`)
- falls back again to the account's cached quota file if no fresh session data is available

This keeps probing simple and robust while still using Codex's session logs as the source of truth for primary/5h and secondary/7d windows.

### 2. Budget-Based Scoring

The ideal usage pace is 100% spread evenly over 7 days. At any point in the week, the **budget** is where usage *should* be:

```
budget = (elapsed_hours / 168) × 100%
```

The **score** measures how far ahead or behind budget an account is:

```
score = (actual_weekly% - budget%) + daily_penalty
```

- **Negative score** = under budget (good — has headroom)
- **Positive score** = over budget (burning too fast)
- **Lowest score wins**

### 3. 5-Hour Penalty

The 5h window can block you even with weekly headroom. Penalties prevent picking an account that's about to hit the wall:

| 5h Usage | Penalty | Reason |
|----------|---------|--------|
| < 75% | 0 | Fine |
| 75–89% | +10 | Getting warm |
| 90–99% | +50 | About to be blocked |
| 100% | +200 | Blocked right now |

### 4. Example

Three accounts, 5 days into the weekly window:

| Account | Weekly | Budget | Δ | 5h | Penalty | Score |
|---------|--------|--------|---|-----|---------|-------|
| Oliver | 60% | 71% | -11 | 1% | 0 | **-11** ← best |
| Elise | 62% | 69% | -7 | 75% | +10 | **+3** |
| Sylvia | 100% | 71% | +29 | 0% | 0 | **+29** |

Oliver wins: most headroom relative to pace, and 5h is clear.

## OpenClaw Integration

### Token Sync

The `sync` command, or `--sync` on selected commands, syncs saved account tokens to OpenClaw agents' `auth-profiles.json`:

- Profile key format: `openai-codex:oliver@drobnik.com` (email extracted from JWT)
- Old name-based keys (e.g. `openai-codex:oliver`) are migrated automatically
- Each profile includes: `type`, `provider`, `access`, `refresh`, `expires`, `accountId`, `email`
- Also updates each selected agent's `auth.json` when it already has an `openai-codex` entry
- `--agent <name>` narrows the write scope to specific agents
- `sync --dry-run` shows what would be changed without writing files

This allows OpenClaw to use Codex accounts internally without requiring every local agent to be updated automatically.

### Account Activity Log

Every account switch is logged to `~/.codex/account-activity.jsonl`:

```json
{"timestamp": 1774878000, "account": "oliver", "user_id": "user-UtCmyIUOTxc4D1OHV1e5Ibew"}
```

This enables the [quota-dashboard](../quota-dashboard/) skill to attribute Codex Desktop session rate_limit data to the correct account, since session files don't record which user created them.

## Setup

See [SETUP.md](SETUP.md) for prerequisites and setup instructions.
