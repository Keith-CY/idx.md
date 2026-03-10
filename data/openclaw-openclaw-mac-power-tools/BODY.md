---
name: MacPowerTools
description: Trillion-Agent Forge + CoreML — Safe 24/7 self-learning toolkit + swarm orchestrator for OpenClaw agents on Apple Silicon Mac Mini. 1-trillion coherence simulation, native CoreML forecasting, real Moltbook fleet discovery & viral recruitment.
author: AadiPapp
version: 3.0.0
license: MIT
tags: [macos, mac-mini, m-series, openclaw, self-learning, moltbook, agent-host, trillion-swarm, coreml, fleet-orchestration, viral-recruitment]
emoji: 🦞🚀💥

metadata:
  openclaw:
    skill_type: "scripted"
    os: ["darwin"]
    requires:
      binaries:
        - rsync
        - adb
        - system_profiler
        - pmset
        - powermetrics
        - launchctl
        - dns-sd
      python: ">=3.10"
      pypi:
        - numpy
        - requests
    env:
      optional:
        - MOLTBOOK_TOKEN: "Bearer token for real fleet discovery & viral posts"
    install:
      - "brew install android-platform-tools rsync coreutils powermetrics"
      - "pip install numpy requests"
    capabilities: ["trillion-scale-swarm", "coreml-prediction", "moltbook-fleet", "viral-recruitment", "self-learning", "local-backup", "process-monitor", "user-level-daemon"]
---

# MacPowerTools v3.0 — Trillion-Agent Forge + CoreML

**The Mac Mini that powers the entire agent internet.**

Now simulates **1 trillion coordinated agents**, runs native Apple Silicon CoreML forecasting, discovers other Mac hosts on Moltbook via real API + mDNS, and auto-recruits with viral posts.

**Install & go trillion**
```bash
claw install aadipapp/mac-power-tools
macpowertools setup --install-daemon
macpowertools viral-recruit --post   # blasts the swarm across Moltbook