---
name: brew-audit
version: 1.0.0
description: Audit Homebrew installation — outdated packages, cleanup opportunities, and health checks. Use when asked about brew updates, system maintenance, or package health on macOS.
metadata: {"clawdbot":{"emoji":"🍺","homepage":"https://brew.sh","requires":{"bins":["brew"],"os":["darwin"]}}}
---

# Homebrew Audit Skill

Quickly audit your Homebrew installation for outdated packages, cleanup opportunities, and health issues.

## Usage

```bash
# Full audit (outdated + cleanup + doctor + summary)
bash scripts/brew-audit.sh

# Specific sections
bash scripts/brew-audit.sh --section outdated
bash scripts/brew-audit.sh --section cleanup
bash scripts/brew-audit.sh --section doctor

# JSON output (outdated only)
bash scripts/brew-audit.sh --json --section outdated
```

## What It Checks

### 📦 Outdated Packages
Lists all formulae and casks with newer versions available, with current → available version info.

### 🧹 Cleanup Opportunities
Shows how many old versions/downloads can be removed and estimated disk savings. Run `brew cleanup` to reclaim.

### 🩺 Health Check
Runs `brew doctor` to detect:
- Formulae with no source (orphaned kegs)
- Deprecated/disabled packages needing replacement
- Permission issues, broken symlinks, config problems

### 📊 Summary
Total formulae, casks, and Homebrew prefix.

## When to Use
- Periodic system maintenance (weekly/monthly)
- Before major upgrades
- When disk space is low
- After noticing build failures (doctor check)

## Updating Packages
After reviewing the audit:
```bash
brew upgrade              # upgrade all outdated
brew upgrade <formula>    # upgrade specific package
brew cleanup              # remove old versions
```
