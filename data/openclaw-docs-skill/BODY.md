---
name: Clawdbot
description: Use when deploying AI agents, configuring messaging channels, setting up automation workflows, managing agent workspaces, or troubleshooting gateway operations. Agents should reach for this skill when users need to run AI assistants across Discord, Slack, Telegram, WhatsApp, and other platforms; configure multi-agent routing; set up scheduled tasks; or manage agent memory and tools.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw Agent Skill

## Product summary

OpenClaw is a self-hosted AI agent gateway that runs a single embedded agent runtime with its own workspace, sessions, and tool access. It connects agents to 30+ messaging channels (Discord, Slack, Telegram, WhatsApp, Signal, Matrix, Feishu, etc.), supports multi-agent routing with isolated workspaces, and provides browser automation, web search, code execution, and custom skills. The primary config file is `~/.openclaw/openclaw.json` (JSON5 format). Key CLI entry point: `openclaw` (gateway, agent, config, channels, skills, cron commands). Primary docs: https://docs.openclaw.ai

## When to use

Reach for this skill when:
- **Deploying agents**: User wants to run an AI assistant locally or on a server
- **Channel setup**: Connecting agents to Discord, Slack, Telegram, WhatsApp, or other messaging platforms
- **Configuration**: Setting models, tools, sandboxing, automation, or multi-agent routing
- **Workspace management**: Creating agent memory files (AGENTS.md, SOUL.md, USER.md), skills, or bootstrap rituals
- **Automation**: Scheduling cron jobs, heartbeats, webhooks, or standing orders
- **Troubleshooting**: Diagnosing gateway health, config validation, session issues, or channel connectivity
- **Multi-agent**: Running separate agents with isolated workspaces and routing rules

## Quick reference

### Essential commands

| Task | Command |
|------|---------|
| First-time setup | `openclaw onboard --install-daemon` |
| Check gateway status | `openclaw gateway status` |
| Open dashboard | `openclaw dashboard` |
| View/edit config | `openclaw config get <path>` / `openclaw config set <path> <value>` |
| List agents | `openclaw agents list` |
| List channels | `openclaw channels list` |
| List skills | `openclaw skills list` |
| Install a skill | `openclaw skills install <skill-slug>` |
| View logs | `openclaw logs` |
| Run diagnostics | `openclaw doctor` |
| Validate config | `openclaw config validate` |

### Key file paths

| Path | Purpose |
|------|---------|
| `~/.openclaw/openclaw.json` | Main config file (JSON5) |
| `~/.openclaw/workspace/` | Default agent workspace (AGENTS.md, SOUL.md, USER.md, TOOLS.md, etc.) |
| `~/.openclaw/agents/<agentId>/sessions/` | Session transcripts (JSONL) |
| `~/.openclaw/skills/` | Shared skills across agents |
| `<workspace>/skills/` | Workspace-specific skills |
| `~/.openclaw/.env` | Global environment variables |

### Config structure (minimal)

```json5
{
  agents: {
    defaults: {
      workspace: "~/.openclaw/workspace",
      model: "anthropic/claude-sonnet-4-6",
    },
  },
  channels: {
    whatsapp: { enabled: true, allowFrom: ["+15555550123"] },
    telegram: { enabled: true, botToken: "123:abc" },
  },
}
```

### Bootstrap files (workspace)

Create these in `~/.openclaw/workspace/`:
- **AGENTS.md** — Operating instructions and memory
- **SOUL.md** — Persona, boundaries, tone
- **USER.md** — User profile and preferred address
- **TOOLS.md** — User-maintained tool notes
- **IDENTITY.md** — Agent name, vibe, emoji
- **BOOTSTRAP.md** — One-time first-run ritual (auto-deleted after completion)

## Decision guidance

### When to use X vs Y

| Scenario | Use | Why |
|----------|-----|-----|
| Single agent, one workspace | `agents.defaults.workspace` | Simpler config, shared sessions |
| Multiple isolated agents | `agents.list[]` with separate workspaces | Each agent has own memory, sessions, auth |
| Shared skills across agents | `~/.openclaw/skills/` | All agents load from this folder |
| Agent-specific skills only | `agents.list[].skills` allowlist | Restrict visibility per agent |
| DM access control | `dmPolicy: "pairing"` | Unknown senders get one-time code |
| Open DMs (trusted users) | `dmPolicy: "allowlist"` + `allowFrom` | Pre-approved sender list |
| Group chat activation | `mentionPatterns` + `requireMention: true` | Mention-based gating (default) |
| Always-on group replies | `requireMention: false` | Respond to all group messages |
| Sandbox off (dev/testing) | `sandbox.mode: "off"` | Faster, full host access |
| Sandbox non-main sessions | `sandbox.mode: "non-main"` | Isolate user sessions, keep main fast |
| Sandbox all sessions | `sandbox.mode: "all"` | Maximum isolation (slower) |
| Hot-reload config changes | `gateway.reload.mode: "hybrid"` | Auto-restart for critical changes |
| Manual restart only | `gateway.reload.mode: "off"` | Full control, no auto-reload |

## Workflow

### Typical task: Deploy an agent with Telegram

1. **Install and onboard**
   ```bash
   curl -fsSL https://openclaw.ai/install.sh | bash
   openclaw onboard --install-daemon
   ```
   The wizard prompts for model provider (Anthropic, OpenAI, etc.) and API key.

2. **Verify gateway is running**
   ```bash
   openclaw gateway status
   ```
   Should show listening on port 18789.

3. **Create workspace files**
   ```bash
   mkdir -p ~/.openclaw/workspace
   # Create AGENTS.md, SOUL.md, USER.md with agent instructions
   ```

4. **Configure Telegram channel**
   ```bash
   openclaw config set channels.telegram.enabled true
   openclaw config set channels.telegram.botToken "YOUR_BOT_TOKEN"
   openclaw config set channels.telegram.dmPolicy "pairing"
   ```

5. **Open dashboard and test**
   ```bash
   openclaw dashboard
   ```
   Send a message to the bot in Telegram; it should reply.

6. **Check logs if issues**
   ```bash
   openclaw logs
   openclaw doctor
   ```

### Typical task: Set up multi-agent routing

1. **Create separate workspaces**
   ```bash
   mkdir -p ~/.openclaw/workspace-home ~/.openclaw/workspace-work
   ```

2. **Configure agents in openclaw.json**
   ```json5
   {
     agents: {
       list: [
         { id: "home", default: true, workspace: "~/.openclaw/workspace-home" },
         { id: "work", workspace: "~/.openclaw/workspace-work" },
       ],
     },
     bindings: [
       { agentId: "home", match: { channel: "whatsapp", accountId: "personal" } },
       { agentId: "work", match: { channel: "whatsapp", accountId: "biz" } },
     ],
   }
   ```

3. **Restart gateway**
   ```bash
   openclaw gateway restart
   ```

4. **Verify agents are loaded**
   ```bash
   openclaw agents list
   ```

### Typical task: Install and configure a skill

1. **Search for skill**
   ```bash
   openclaw skills list
   ```

2. **Install from ClawHub**
   ```bash
   openclaw skills install github
   ```
   Installs to `~/.openclaw/workspace/skills/github/SKILL.md`

3. **Configure auth if needed**
   ```bash
   openclaw config set skills.entries.github.apiKey "YOUR_GITHUB_TOKEN"
   ```

4. **Verify it's available**
   ```bash
   openclaw skills list
   ```

## Common gotchas

- **Config validation fails on startup**: Run `openclaw doctor --fix` to auto-repair. Check `~/.openclaw/openclaw.json.clobbered.*` for the rejected payload.
- **Agent doesn't respond**: Check `openclaw logs` for errors. Verify `agents.defaults.workspace` exists and contains bootstrap files. Ensure model provider API key is set.
- **Channel not receiving messages**: Verify `channels.<provider>.enabled: true` and auth credentials (botToken, API key). Check `dmPolicy` and `allowFrom` allowlist. Run `openclaw gateway status` to confirm channel is connected.
- **Workspace files not injected**: Files must be in `agents.defaults.workspace`. Blank files are skipped. Large files are truncated with a marker. Missing files get a "missing file" marker line.
- **Skills not loading**: Check `skills.load.extraDirs` and `agents.list[].skills` allowlist. Skills load from workspace first, then shared `~/.openclaw/skills/`, then bundled. Restart gateway after adding new skills.
- **Sandbox build missing**: Run `scripts/sandbox-setup.sh` before enabling `sandbox.mode: "non-main"` or `"all"`.
- **Config hot-reload not working**: Check `gateway.reload.mode` (default `"hybrid"`). Some changes (gateway port, TLS, plugins) require manual restart. See config reference for what hot-applies.
- **Session transcripts not found**: Sessions are stored as JSONL at `~/.openclaw/agents/<agentId>/sessions/<SessionId>.jsonl`. Session ID is stable and chosen by OpenClaw.
- **Multi-agent routing not working**: Verify `agents.list[]` has unique IDs and separate workspaces. Check `bindings[]` match rules (channel, accountId, etc.). Run `openclaw agents list` to confirm agents are loaded.
- **Pairing code not working**: Pairing is per-channel. Sender must use the exact code format. Check `dmPolicy: "pairing"` is set. Codes are one-time; resend if user loses it.

## Verification checklist

Before submitting work:

- [ ] Gateway is running: `openclaw gateway status` shows listening on port 18789
- [ ] Config is valid: `openclaw config validate` passes (or `openclaw doctor` shows no errors)
- [ ] Workspace exists: `ls -la ~/.openclaw/workspace/` shows AGENTS.md, SOUL.md, USER.md
- [ ] Model is configured: `openclaw config get agents.defaults.model` returns a valid provider/model
- [ ] Channels are enabled: `openclaw channels list` shows expected channels with `enabled: true`
- [ ] Skills are available: `openclaw skills list` shows expected skills
- [ ] Agent responds: Send a test message via dashboard or channel; agent replies within 10 seconds
- [ ] Logs are clean: `openclaw logs` shows no ERROR or WARN lines (INFO is normal)
- [ ] Multi-agent setup (if used): `openclaw agents list` shows all agents; bindings match expected routing
- [ ] Automation works (if configured): `openclaw cron list` shows jobs; `openclaw cron runs <jobId>` shows recent runs

## Resources

- **Full navigation**: https://docs.openclaw.ai/llms.txt — comprehensive page-by-page listing for agent navigation
- **Getting started**: https://docs.openclaw.ai/start/getting-started — 5-minute setup guide
- **Gateway configuration**: https://docs.openclaw.ai/gateway/configuration — task-oriented setup and common patterns
- **CLI reference**: https://docs.openclaw.ai/cli/index — all commands and flags

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt