---
name: Clawdbot
description: Use when building, configuring, or troubleshooting a self-hosted AI agent gateway that connects messaging platforms (WhatsApp, Telegram, Discord, Slack, iMessage, etc.) to AI models. Reach for this skill when setting up the Gateway, managing agent workspaces, configuring channels, creating or installing skills, managing sessions and memory, or debugging agent behavior.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw (clawdbot) Skill

## Product summary

OpenClaw is a self-hosted gateway that connects your favorite chat apps (WhatsApp, Telegram, Discord, iMessage, Slack, Signal, and more) to AI coding agents. You run a single Gateway process on your own machine or server, and it becomes the bridge between your messaging apps and an always-available AI assistant. The Gateway is the control plane; the agent is the product. Key files: `~/.openclaw/openclaw.json` (config), `~/.openclaw/workspace/` (agent workspace with AGENTS.md, SOUL.md, TOOLS.md, IDENTITY.md, USER.md, HEARTBEAT.md, MEMORY.md), `~/.openclaw/skills/` (local skills). Primary CLI: `openclaw` (gateway, channels, sessions, models, skills). See https://docs.openclaw.ai for full documentation.

## When to use

Reach for this skill when:
- **Setting up or configuring OpenClaw**: installing the Gateway, running `openclaw onboard`, configuring model providers (Anthropic, OpenAI, etc.), or managing authentication
- **Connecting messaging channels**: pairing WhatsApp, Telegram, Discord, Slack, or other platforms; troubleshooting channel delivery or pairing issues
- **Managing agent workspace**: editing AGENTS.md (agent instructions), SOUL.md (personality), TOOLS.md (local notes), IDENTITY.md (identity), USER.md (user context), MEMORY.md (persistent memory), or HEARTBEAT.md (scheduled tasks)
- **Working with skills**: searching/installing skills via ClawHub, creating custom SKILL.md files, managing skill versions, or configuring skill eligibility
- **Managing sessions and memory**: listing sessions, viewing conversation history, resetting sessions, or saving session context to memory
- **Troubleshooting**: running `openclaw doctor`, checking logs, diagnosing channel/model/session issues, or fixing configuration errors
- **Deploying or scaling**: running the Gateway on remote hosts, using Tailscale, managing multiple agents, or configuring sandboxing

## Quick reference

### Essential CLI commands

| Command | Purpose |
|---------|---------|
| `openclaw onboard` | Interactive wizard to set up Gateway, workspace, channels, skills |
| `openclaw doctor` | Diagnose config, state, channels, models, and permissions |
| `openclaw status` | Show Gateway + channel + session diagnostics |
| `openclaw models status` | List configured models and test connectivity |
| `openclaw gateway` | Start/stop Gateway, manage configuration |
| `openclaw channels` | List and manage messaging channels |
| `openclaw sessions` | List stored conversation sessions |
| `openclaw skills list` | Show available skills and readiness |
| `clawhub search "query"` | Search public skill registry |
| `clawhub install <slug>` | Install a skill from ClawHub |
| `clawhub publish <path>` | Publish a skill to ClawHub |

### Key file paths and directories

| Path | Purpose |
|------|---------|
| `~/.openclaw/openclaw.json` | Main config file (gateway, channels, models, agents) |
| `~/.openclaw/workspace/` | Agent workspace (default; configurable) |
| `~/.openclaw/workspace/AGENTS.md` | Agent operating instructions |
| `~/.openclaw/workspace/SOUL.md` | Agent personality and behavior |
| `~/.openclaw/workspace/TOOLS.md` | Local tool notes and environment-specific config |
| `~/.openclaw/workspace/IDENTITY.md` | Agent identity and context |
| `~/.openclaw/workspace/USER.md` | User context and preferences |
| `~/.openclaw/workspace/MEMORY.md` | Persistent memory (optional) |
| `~/.openclaw/workspace/memory/YYYY-MM-DD.md` | Daily memory snapshots |
| `~/.openclaw/workspace/HEARTBEAT.md` | Scheduled tasks and cron jobs |
| `~/.openclaw/skills/` | Local skills directory |
| `~/.openclaw/.env` | Environment variables for daemon (API keys, etc.) |
| `~/.openclaw/sessions/` | Stored conversation transcripts |
| `/tmp/openclaw/openclaw-YYYY-MM-DD.log` | Gateway logs |

### Configuration structure (openclaw.json)

```json
{
  "gateway": {
    "port": 8000,
    "bind": "loopback",
    "auth": "token"
  },
  "agents": {
    "defaults": {
      "workspace": "~/.openclaw/workspace",
      "models": ["claude-3-5-sonnet"],
      "sandbox": false
    }
  },
  "channels": {
    "whatsapp": { "enabled": true, "accounts": { "default": {} } },
    "telegram": { "enabled": true, "accounts": { "default": { "token": "..." } } },
    "discord": { "enabled": true, "accounts": { "default": { "token": "..." } } }
  },
  "models": {
    "providers": {
      "anthropic": { "apiKey": "..." },
      "openai": { "apiKey": "..." }
    }
  }
}
```

### Skill SKILL.md format

```markdown
---
name: my-skill
description: What this skill does
requirements:
  - binary: node
  - env: MY_API_KEY
---

# My Skill

Instructions for the agent on how to use this skill.
Include examples, tool names, and expected outputs.
```

## Decision guidance

| Scenario | Use | Why |
|----------|-----|-----|
| **First-time setup** | `openclaw onboard` | Guided wizard handles Gateway, workspace, channels, models, and skills in one flow |
| **Troubleshooting** | `openclaw doctor` | Comprehensive diagnostics for config, state, channels, models, permissions, and safety |
| **Finding a tool** | ClawHub (`clawhub search`) | Public registry with versioning, discovery, and one-command install |
| **Custom tool** | Local skill in `~/.openclaw/skills/` | Full control, no publish needed; use for private/internal tools |
| **Persistent memory** | MEMORY.md or `memory/YYYY-MM-DD.md` | MEMORY.md for stable facts; daily files for session snapshots |
| **Agent instructions** | AGENTS.md | Primary place for agent behavior, rules, and operating instructions |
| **Personality/tone** | SOUL.md | Separate from AGENTS.md; controls voice and style |
| **Local config notes** | TOOLS.md | Environment-specific settings, API endpoints, credentials not in config |
| **Isolated agent** | Separate workspace + sandbox | Each agent gets its own workspace, sessions, and (optionally) sandboxed file access |
| **Multi-channel delivery** | Broadcast groups | One agent message to multiple channels; use `channels.broadcast-groups` config |

## Workflow

### 1. Set up OpenClaw for the first time
1. Install Node 22+ and OpenClaw CLI
2. Run `openclaw onboard` and follow the wizard
3. Choose local or remote Gateway mode
4. Select a model provider (Anthropic recommended) and enter API key
5. Enable messaging channels (WhatsApp, Telegram, Discord, etc.)
6. Optionally install skills from ClawHub
7. Verify with `openclaw status` and `openclaw doctor`

### 2. Configure an agent workspace
1. Navigate to the workspace directory (default: `~/.openclaw/workspace/`)
2. Edit `AGENTS.md` with agent instructions and rules
3. Edit `SOUL.md` to define personality and tone
4. Edit `IDENTITY.md` to set agent name and context
5. Edit `USER.md` to add user preferences and context
6. Optionally create `MEMORY.md` for persistent facts
7. Optionally create `HEARTBEAT.md` for scheduled tasks
8. Save and start a new session to pick up changes

### 3. Add a skill to the agent
1. Search ClawHub: `clawhub search "calendar"` (or your need)
2. Install: `clawhub install <skill-slug>`
3. Verify: `openclaw skills list` and `openclaw skills check`
4. Start a new session so the agent loads the skill
5. (Optional) Override the skill locally in `~/.openclaw/skills/<skill-name>/SKILL.md`

### 4. Connect a messaging channel
1. Run `openclaw onboard` or edit `openclaw.json` directly
2. Add channel config under `channels.<id>` (e.g., `channels.telegram`)
3. Provide credentials (token, API key, account ID, etc.)
4. Run `openclaw doctor` to validate config
5. Run `openclaw channels` to list and test channels
6. Pair the channel if needed (e.g., WhatsApp Web pairing)
7. Verify with `openclaw status --deep`

### 5. Debug a problem
1. Run `openclaw doctor` to get a full diagnostic report
2. Check logs: `tail -f /tmp/openclaw/openclaw-$(date +%Y-%m-%d).log`
3. Test model connectivity: `openclaw models status`
4. Test channels: `openclaw status --deep`
5. List sessions: `openclaw sessions --verbose`
6. Check config: `openclaw config show` (or read `~/.openclaw/openclaw.json`)
7. Fix issues and run `openclaw doctor --fix` to auto-repair permissions/state

### 6. Manage sessions and memory
1. List sessions: `openclaw sessions` (shows all conversation sessions)
2. View history: `openclaw sessions --verbose` (includes last messages)
3. Reset a session: `/new` command in chat (saves context to memory first if configured)
4. Save session to memory: configure `automation.hooks.session-memory` event
5. View memory: read `~/.openclaw/workspace/memory/YYYY-MM-DD.md`

## Common gotchas

- **Config not reloading**: The Gateway caches config on startup. Restart the Gateway after editing `openclaw.json`: `openclaw gateway stop && openclaw gateway start`
- **Workspace files not injected**: Files must be in the workspace directory (default `~/.openclaw/workspace/`), not `~/.openclaw/`. Check `agents.defaults.workspace` in config.
- **Skills not appearing**: Run `openclaw skills check` to see missing requirements (binaries, env vars). Install missing dependencies or set `requirements` in SKILL.md.
- **Channel not receiving messages**: Verify the channel is enabled (`channels.<id>.enabled: true`), account is configured, and pairing is complete. Run `openclaw status --deep` to probe live.
- **Model errors**: Check API key in `~/.openclaw/.env` or config. Run `openclaw models status` to test connectivity. Verify model ID matches provider (e.g., `claude-3-5-sonnet` for Anthropic).
- **Session history lost**: Sessions are stored in `~/.openclaw/sessions/`. If the directory is deleted, history is gone. Back up regularly or use git in the workspace.
- **Sandbox blocking file access**: If `agents.defaults.sandbox: true`, tools operate in `~/.openclaw/sandboxes/`, not your workspace. Use `workspaceAccess: "rw"` to allow read-write access.
- **Pairing stuck**: For WhatsApp Web, the QR code expires. Restart pairing: `openclaw pairing reset whatsapp` and re-scan.
- **Memory not persisting**: MEMORY.md is optional and not auto-created. Create it manually or configure `automation.hooks.session-memory` to auto-save on `/new`.
- **Multiple state dirs**: If you have multiple `~/.openclaw` folders (e.g., on different machines), sessions and config will split. Use `OPENCLAW_STATE_DIR` env var to point to a single state directory.

## Verification checklist

Before submitting work with OpenClaw:

- [ ] Run `openclaw doctor` and fix any warnings or errors
- [ ] Run `openclaw status` to confirm Gateway is running and channels are connected
- [ ] Run `openclaw models status` to verify model provider is reachable
- [ ] Run `openclaw skills check` to confirm all required skills are installed and ready
- [ ] Test a message in a connected channel and verify the agent replies
- [ ] Check `openclaw sessions --verbose` to confirm conversation history is being saved
- [ ] Review `~/.openclaw/workspace/AGENTS.md` and `SOUL.md` to confirm agent instructions are correct
- [ ] If using custom skills, verify `SKILL.md` format and requirements are met
- [ ] If using memory, confirm `MEMORY.md` or daily memory files are being created
- [ ] If using automation (cron, hooks), test with `openclaw cron list` and check logs
- [ ] Back up workspace: `git status` in `~/.openclaw/workspace/` (should be a git repo)

## Resources

- **Comprehensive navigation**: https://docs.openclaw.ai/llms.txt (page-by-page index of all documentation)
- **Getting started**: https://docs.openclaw.ai/start/getting-started
- **Gateway configuration**: https://docs.openclaw.ai/gateway/configuration
- **Agent concepts**: https://docs.openclaw.ai/concepts/agent-loop
- **Skills and ClawHub**: https://docs.openclaw.ai/tools/clawhub
- **Troubleshooting**: https://docs.openclaw.ai/help/troubleshooting

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt