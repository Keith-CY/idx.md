---
name: Clawdbot
description: Use when building, configuring, or troubleshooting a local-first AI assistant that runs on your own hardware, integrates with messaging platforms (WhatsApp, Telegram, Slack, Discord, Signal, iMessage), and manages multi-agent workflows with stateful sessions and memory.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw (clawdbot) Skill

## Product summary

OpenClaw is a local-first control plane for running a capable AI assistant on your own hardware, reachable from messaging apps you already use (WhatsApp, Telegram, Slack, Discord, Signal, iMessage, etc.). The Gateway is the always-on service that manages agents, sessions, memory, and tool execution. Key files: `~/.openclaw/openclaw.json` (main config), `~/.openclaw/workspace/` (agent memory and bootstrap files like AGENTS.md, SOUL.md, MEMORY.md), `~/.openclaw/agents/<agentId>/sessions/` (conversation history). Primary CLI: `openclaw` with subcommands for gateway, agents, channels, models, and skills. Docs: https://docs.openclaw.ai

## When to use

Reach for this skill when:
- **Setting up or configuring OpenClaw**: initial install, model auth, channel pairing, workspace setup
- **Troubleshooting runtime issues**: Gateway not responding, channels not delivering, auth failures, context errors
- **Managing agents and sessions**: creating multi-agent setups, routing messages, switching models, resetting sessions
- **Working with memory and context**: writing durable notes, compacting sessions, managing AGENTS.md/SOUL.md/MEMORY.md files
- **Automating tasks**: setting up cron jobs, heartbeats, webhooks, or sub-agents
- **Extending functionality**: creating skills, installing from ClawHub, configuring tools and sandboxing
- **Debugging**: reading logs, running health checks, understanding agent loops and tool execution

## Quick reference

### Essential CLI commands

| Task | Command |
|------|---------|
| Start Gateway (foreground) | `openclaw gateway run` |
| Start/stop Gateway service | `openclaw gateway start` / `openclaw gateway stop` |
| Quick health check | `openclaw health` |
| Full diagnosis | `openclaw doctor` |
| View logs | `openclaw logs --follow` or `tail -f ~/.openclaw/logs/gateway.log` |
| Configure models/auth | `openclaw configure` |
| Check model status | `openclaw models status` |
| List agents | `openclaw agents list` |
| Add new agent | `openclaw agents add <id>` |
| View sessions | `openclaw sessions list` |
| Install skill | `clawhub install <skill-slug>` |
| Update all skills | `clawhub update --all` |

### Key file locations

| Path | Purpose |
|------|---------|
| `~/.openclaw/openclaw.json` | Main config (JSON5 format) |
| `~/.openclaw/agents/<agentId>/agent/auth-profiles.json` | Auth credentials per agent |
| `~/.openclaw/agents/<agentId>/sessions/` | Conversation history and state |
| `~/.openclaw/workspace/` | Default agent workspace (memory, AGENTS.md, SOUL.md, MEMORY.md) |
| `~/.openclaw/workspace/memory/YYYY-MM-DD.md` | Daily memory notes |
| `~/.openclaw/workspace/MEMORY.md` | Long-term curated notes |
| `~/.openclaw/skills/` | Shared skills across agents |
| `~/.openclaw/logs/gateway.log` | Gateway logs |

### Core config structure (openclaw.json)

```json
{
  "agents": {
    "defaults": {
      "workspace": "~/.openclaw/workspace",
      "model": { "primary": "anthropic/claude-sonnet-4-5" },
      "contextPruning": { "enabled": true },
      "sandbox": { "enabled": false }
    }
  },
  "channels": {
    "whatsapp": { "allowFrom": ["+15551234567"] },
    "telegram": { "allowFrom": [123456789] },
    "slack": { "allowFrom": ["@username"] }
  },
  "models": {
    "providers": {
      "anthropic": { "apiKey": "${ANTHROPIC_API_KEY}" },
      "openai": { "apiKey": "${OPENAI_API_KEY}" }
    }
  },
  "gateway": { "bind": "127.0.0.1", "port": 18789 },
  "cron": { "enabled": true },
  "logging": { "level": "info", "file": "~/.openclaw/logs/gateway.log" }
}
```

### Slash commands (in chat)

| Command | Purpose |
|---------|---------|
| `/status` | Show current session and agent state |
| `/model <name>` | Switch model for current session |
| `/agent <id>` | Switch to different agent |
| `/new` | Start fresh session (same chat key) |
| `/reset` | Full reset (new session ID) |
| `/compact [instructions]` | Summarize and compact session context |
| `/deliver on\|off` | Enable/disable message delivery |
| `/help` | List available commands |

## Decision guidance

### When to use X vs Y

| Scenario | Use | Why |
|----------|-----|-----|
| **Single bot, multiple roles** | Multi-agent routing (separate agents per channel/account) | Each agent has own workspace, model defaults, and session store |
| **Long-running task** | Sub-agents or separate session | Keeps main chat smaller; prevents context truncation |
| **Scheduled work** | Cron jobs | Persists across restarts; runs on schedule inside Gateway |
| **Periodic checks** | Heartbeat | Runs every 30m by default; good for briefings/reminders |
| **Untrusted input** | Read-only agent or sandbox | Reduces prompt injection risk; prevents tool abuse |
| **Fast chat vs complex coding** | Separate agents with different models | Route by channel; use `/model` to switch per session |
| **Local data only** | Local models (Ollama, LM Studio) | Keeps prompts on your machine; slower but private |
| **API-based integration** | Custom skill or plugin | More reliable than browser automation |
| **Context too large** | Compact session or use memory files | Compaction summarizes; memory files persist across sessions |

## Workflow

### Typical setup task

1. **Install and initialize**: Run `openclaw onboard` (recommended) or `openclaw gateway run` to start the Gateway.
2. **Configure model auth**: Run `openclaw configure` and select Model/auth. Paste API key or use OAuth (Anthropic setup-token, OpenAI Codex).
3. **Set workspace**: Confirm `agents.defaults.workspace` in `~/.openclaw/openclaw.json` (default: `~/.openclaw/workspace`).
4. **Add channels**: Run `openclaw configure` and select Providers (WhatsApp, Telegram, Discord, etc.). Follow pairing flow.
5. **Verify health**: Run `openclaw health` to confirm Gateway, models, and channels are reachable.
6. **Install skills** (optional): Run `clawhub install <skill-slug>` or drop SKILL.md files into `~/.openclaw/skills/<name>/`.
7. **Test**: Send a message to the bot via your configured channel and confirm it replies.

### Typical troubleshooting task

1. **Quick status**: Run `openclaw health` to see Gateway, agents, sessions, and provider status.
2. **Check logs**: Run `openclaw logs --follow` or `tail -f ~/.openclaw/logs/gateway.log` to see real-time errors.
3. **Verify Gateway is running**: Run `openclaw gateway status` (service) or check if `openclaw gateway run` is still in foreground.
4. **Confirm model auth**: Run `openclaw models status` to see which providers are authenticated.
5. **Check channel config**: Run `openclaw channels list` and verify allowlists and pairing status.
6. **Run doctor**: Run `openclaw doctor` to auto-repair config, migrate state, and run health checks.
7. **Restart if needed**: Stop with `openclaw gateway stop` and start with `openclaw gateway start` (or `openclaw gateway run` for foreground).

### Typical memory/context task

1. **Write durable notes**: Ask the agent to write important facts to `MEMORY.md` (long-term) or `memory/YYYY-MM-DD.md` (daily).
2. **Check memory files**: Read `~/.openclaw/workspace/MEMORY.md` and `memory/` directory to see what the agent has stored.
3. **Compact if context is full**: Send `/compact` to summarize older turns and free up context window.
4. **Enable session pruning**: Set `agents.defaults.contextPruning.enabled: true` in config to auto-trim old tool output.
5. **Use larger model**: Switch to a model with bigger context window (e.g., Claude Opus instead of Sonnet) if compaction isn't enough.

## Common gotchas

- **Gateway not starting**: Check if another instance is already listening on the port (default 18789). Use `openclaw gateway --port <port>` to use a different port, or kill the existing process.
- **Auth profiles not found**: Auth lives per-agent in `~/.openclaw/agents/<agentId>/agent/auth-profiles.json`, not globally. Multi-agent setups need separate auth for each agent.
- **Memory keeps forgetting**: The agent must explicitly write to `MEMORY.md` or `memory/YYYY-MM-DD.md`. Chat history alone doesn't persist. Verify the Gateway is using the same workspace on every restart.
- **Workspace confusion**: Agent workspace (`~/.openclaw/workspace/`) is separate from state dir (`~/.openclaw/`). Don't put credentials or sessions in the workspace; back up the workspace to git, not the state dir.
- **Context truncation mid-task**: Long chats or large tool outputs trigger auto-compaction. Use `/compact` proactively, keep important context in files, or use sub-agents for parallel work.
- **Channels not delivering**: Check mention gating (default requires @mention), allowlists, and pairing status. Run `openclaw logs --follow` to see delivery errors.
- **Model auth errors**: Credentials are separate from model selection. Setting `ANTHROPIC_API_KEY` enables auth but doesn't set the default model—use `agents.defaults.model.primary` for that.
- **Cron jobs not firing**: Cron runs inside the Gateway process. If the Gateway is not running 24/7, jobs won't run. Check `cron.enabled` and verify the Gateway is supervised (launchd/systemd).
- **Sandbox binds bypass isolation**: Docker binds (`:ro` or `:rw`) bypass sandbox filesystem walls. Use `:ro` for sensitive paths and understand that absolute paths can escape the sandbox unless sandboxing is enabled.
- **Remote mode confusion**: In remote mode, the gateway host owns the workspace and session store, not your laptop. Copy both `~/.openclaw/` and the workspace when migrating.

## Verification checklist

Before submitting work or declaring a setup complete:

- [ ] Gateway is running and reachable: `openclaw health` shows green status
- [ ] Model auth is loaded: `openclaw models status` shows at least one provider authenticated
- [ ] Default model is set: `agents.defaults.model.primary` is configured in `openclaw.json`
- [ ] Workspace exists and is writable: `ls -la ~/.openclaw/workspace/` shows AGENTS.md or similar files
- [ ] At least one channel is configured and paired: `openclaw channels list` shows status
- [ ] Test message sent and received: Send a message via the configured channel and confirm the bot replies
- [ ] Logs are clean: `openclaw logs --follow` shows no ERROR or WARN lines during a test message
- [ ] Memory files are in place: `ls ~/.openclaw/workspace/MEMORY.md` and `memory/` directory exist
- [ ] Skills are discoverable: `clawhub list` or `ls ~/.openclaw/skills/` shows installed skills
- [ ] Service is supervised (if running as daemon): `openclaw gateway status` shows the service is active

## Resources

- **Comprehensive page listing**: https://docs.openclaw.ai/llms.txt — use this for full navigation of all documentation
- **Getting started**: https://docs.openclaw.ai/start/getting-started — initial setup and onboarding
- **Gateway and configuration**: https://docs.openclaw.ai/gateway/index — detailed Gateway setup, security, and networking
- **Troubleshooting**: https://docs.openclaw.ai/help/troubleshooting — runtime diagnostics and common fixes

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt