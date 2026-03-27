---
name: Clawdbot
description: Use when configuring, deploying, or troubleshooting OpenClaw — an agentic AI assistant platform that runs locally or remotely, connects to messaging channels (WhatsApp, Telegram, Discord, etc.), manages sessions and memory, and executes tools via a WebSocket Gateway. Reach for this skill when agents need to set up the Gateway, configure channels, manage skills/plugins, handle authentication, or debug agent behavior.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw (clawdbot) Skill

## Product summary

OpenClaw is an agentic AI assistant platform that runs a local or remote WebSocket Gateway, connects to messaging channels (WhatsApp, Telegram, Discord, Slack, Signal, iMessage, etc.), manages agent sessions with memory and compaction, and executes tools (browser, exec, web search, file I/O, messaging, and more). The core config file is `~/.openclaw/openclaw.json` (JSON5 format). Key CLI commands: `openclaw setup`, `openclaw onboard`, `openclaw gateway status`, `openclaw config get/set`, `openclaw agent`, `openclaw channels`, `openclaw skills`. The primary docs site is https://docs.openclaw.ai.

## When to use

- **Initial setup**: Agent is installing OpenClaw, running onboarding, or initializing the workspace
- **Configuration changes**: Adding channels, setting models, enabling tools, configuring automation (cron, hooks)
- **Channel integration**: Connecting WhatsApp, Telegram, Discord, Slack, or other messaging platforms
- **Session and memory management**: Understanding how sessions persist, when compaction happens, or resetting conversations
- **Tool and skill management**: Installing skills from ClawHub, enabling/disabling tools, configuring tool policies
- **Troubleshooting**: Gateway won't start, channels not receiving messages, auth failures, or agent behavior issues
- **Multi-agent setup**: Running isolated agents with separate workspaces and routing rules
- **Automation**: Setting up cron jobs, hooks, webhooks, or heartbeat check-ins

## Quick reference

### Essential CLI commands

| Command | Purpose |
|---------|---------|
| `openclaw setup` | Initialize config and workspace |
| `openclaw onboard` | Interactive setup wizard (models, channels, skills, gateway) |
| `openclaw gateway status` | Check if Gateway is running |
| `openclaw config get <path>` | Read a config value (e.g., `agents.defaults.model`) |
| `openclaw config set <path> <value>` | Write a config value |
| `openclaw doctor` | Health checks and auto-fixes |
| `openclaw channels list` | Show configured channels |
| `openclaw channels add` | Add a new channel (WhatsApp, Telegram, etc.) |
| `openclaw skills list` | Show available skills |
| `openclaw skills install <slug>` | Install a skill from ClawHub |
| `openclaw agent --message "text"` | Run a single agent turn |
| `openclaw dashboard` | Open the Control UI in browser |
| `openclaw logs --follow` | Tail Gateway logs |

### Key file paths

| Path | Purpose |
|------|---------|
| `~/.openclaw/openclaw.json` | Main config file (JSON5) |
| `~/.openclaw/workspace/` | Agent workspace (AGENTS.md, SOUL.md, TOOLS.md, etc.) |
| `~/.openclaw/skills/` | Managed/local skills (override bundled) |
| `~/.openclaw/agents/<agentId>/sessions/` | Session transcripts (JSONL) |
| `~/.openclaw/logs/` | Gateway and command logs |
| `~/.openclaw/hooks/` | Custom hooks (event-driven automation) |

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
    whatsapp: {
      enabled: true,
      allowFrom: ["+15555550123"],
      dmPolicy: "pairing",
    },
  },
}
```

### Model refs format

Use `provider/model` format:
- `anthropic/claude-opus-4-6`
- `openai/gpt-4o`
- `google/gemini-2.0-flash`
- `openrouter/moonshotai/kimi-k2` (OpenRouter-style with `/` in model ID)

## Decision guidance

### When to use X vs Y

| Scenario | Use | Why |
|----------|-----|-----|
| First-time setup | `openclaw onboard` | Interactive, guided, sets up models + channels + skills in one flow |
| Quick config change | `openclaw config set` | Fast, one-liner, no file editor needed |
| Complex config edits | Direct edit `~/.openclaw/openclaw.json` | Full control, can use JSON5 comments, hot-reloads automatically |
| Channel setup | `openclaw channels add` | Wizard-style, validates auth, tests connection |
| Manual channel config | Edit `channels.<id>` in config | When you have credentials ready and want to batch multiple channels |
| Skill discovery | `openclaw skills list` | Shows what's available locally |
| Skill installation | `openclaw skills install <slug>` | Installs from ClawHub into workspace |
| Session reset | `/new` or `/reset` in chat | Clears history, optionally saves to memory via hook |
| Manual compaction | `/compact [instructions]` | Summarize context when running low on tokens |
| Auto-compaction | (automatic) | Triggers when context window fills; can configure reserve tokens |
| DM access control | `dmPolicy: "pairing"` | Unknown senders get one-time approval code (default, safest) |
| DM access control | `dmPolicy: "allowlist"` | Only senders in `allowFrom` can message (restrictive) |
| DM access control | `dmPolicy: "open"` | Allow all DMs (requires `allowFrom: ["*"]`, least safe) |
| Group mention gating | `requireMention: true` | Bot only replies when mentioned (default, prevents spam) |
| Group always-on | `requireMention: false` | Bot replies to all group messages (verbose, use with caution) |

## Workflow

### Typical task: Set up OpenClaw from scratch

1. **Install**: `curl -fsSL https://openclaw.ai/install.sh | bash` (macOS/Linux) or PowerShell on Windows
2. **Run onboarding**: `openclaw onboard --install-daemon`
   - Choose a model provider (Anthropic, OpenAI, etc.)
   - Enter API key
   - Configure Gateway (port, auth)
   - Optionally add channels and skills
3. **Verify Gateway**: `openclaw gateway status` — should show listening on port 18789
4. **Open dashboard**: `openclaw dashboard` — opens Control UI in browser
5. **Send first message**: Type in Control UI chat; agent should reply
6. **Add a channel** (optional): `openclaw channels add --channel telegram --token <BOT_TOKEN>`
7. **Check logs**: `openclaw logs --follow` if anything fails

### Typical task: Add a messaging channel

1. **Get credentials**: Obtain bot token or API key from the platform (Telegram BotFather, WhatsApp Business API, etc.)
2. **Add channel**: `openclaw channels add --channel <name> --token <token>` or edit config directly
3. **Set DM policy**: Add `dmPolicy: "pairing"` (or `"allowlist"` / `"open"`)
4. **Set allowlist** (if needed): `allowFrom: ["+15555550123"]` for WhatsApp, `["tg:123456"]` for Telegram
5. **Test**: Send a message from the channel; agent should reply
6. **Check logs**: `openclaw channels logs --channel <name>` if no reply

### Typical task: Configure a model and fallback

1. **Get API key**: Obtain from provider (Anthropic, OpenAI, etc.)
2. **Set primary model**: `openclaw config set agents.defaults.model.primary anthropic/claude-opus-4-6`
3. **Add fallback** (optional): `openclaw config set agents.defaults.model.fallbacks '[\"openai/gpt-4o\"]'`
4. **Verify**: `openclaw models status` — shows current model and auth status
5. **Test**: Send a message; agent should use the model

### Typical task: Install and enable a skill

1. **Search ClawHub**: `openclaw skills search <query>` or browse https://clawhub.com
2. **Install**: `openclaw skills install <slug>` (installs into workspace `skills/` directory)
3. **Verify**: `openclaw skills list --eligible` — skill should appear
4. **Enable** (if gated): `openclaw config set skills.entries.<name>.enabled true`
5. **Restart**: Gateway auto-reloads; skill is available on next agent turn

### Typical task: Debug why agent isn't replying

1. **Check Gateway**: `openclaw gateway status` — must be running
2. **Check channel**: `openclaw channels status` — should show connected
3. **Check logs**: `openclaw logs --follow` — look for errors
4. **Run doctor**: `openclaw doctor` — auto-detects common issues
5. **Check DM policy**: Verify sender is in `allowFrom` or pairing is approved (`openclaw pairing list`)
6. **Check group mention**: If group chat, verify bot is mentioned (if `requireMention: true`)
7. **Check model**: `openclaw models status` — auth must be valid
8. **Test directly**: `openclaw agent --message "test"` — bypasses channels, tests agent core

## Common gotchas

- **Config validation is strict**: Unknown keys or malformed types cause Gateway to refuse startup. Run `openclaw doctor --fix` to repair.
- **Hot reload doesn't restart Gateway**: Most config changes apply instantly, but `gateway.*` (port, bind, auth) and `plugins` require manual restart.
- **Model refs must use `provider/model` format**: `claude-opus-4-6` alone won't work; use `anthropic/claude-opus-4-6`.
- **Workspace is required**: `agents.defaults.workspace` must be set and exist. Use `openclaw setup` to create it.
- **Skills load at session start**: Changes to skills take effect on the next new session, not mid-conversation.
- **Compaction is automatic**: When context fills, OpenClaw auto-compacts and may retry. Configure `agents.defaults.compaction.reserveTokensFloor` to tune when it triggers.
- **DM pairing codes expire**: Pairing codes are one-time and rotate. If a user gets a new code, the old one is invalid.
- **Group messages require mention by default**: Set `channels.<id>.groups."*".requireMention: false` to reply to all group messages (verbose).
- **Hooks run inside Gateway**: Treat bundled and managed hooks as trusted code. Workspace hooks are disabled by default until explicitly enabled.
- **Session transcripts are JSONL**: Each line is a message; don't edit by hand. Use `/reset` or `/new` to manage sessions.
- **Memory files are not auto-indexed**: Run `openclaw memory index` after adding memory files for search to work.
- **Sandboxing requires Docker**: If `agents.defaults.sandbox.mode` is enabled, Docker must be installed and the sandbox image built (`scripts/sandbox-setup.sh`).

## Verification checklist

Before submitting work with OpenClaw:

- [ ] Gateway is running: `openclaw gateway status` shows "listening"
- [ ] Config is valid: `openclaw doctor` shows no errors
- [ ] Model auth is set: `openclaw models status` shows valid credentials
- [ ] Channels are connected: `openclaw channels status` shows "connected"
- [ ] Workspace exists: `ls ~/.openclaw/workspace/` shows AGENTS.md, SOUL.md, etc.
- [ ] Skills are eligible: `openclaw skills list --eligible` shows expected skills
- [ ] Agent responds: `openclaw agent --message "test"` returns a reply
- [ ] Logs are clean: `openclaw logs --follow` shows no ERROR or WARN (unless expected)
- [ ] DM policy is correct: Verify `dmPolicy` and `allowFrom` match your use case
- [ ] Group mention gating is set: If using groups, check `requireMention` setting
- [ ] Hooks are enabled: `openclaw hooks list` shows enabled hooks if you added any
- [ ] Session is fresh: `/new` or `/reset` if testing a new conversation

## Resources

**Comprehensive navigation**: https://docs.openclaw.ai/llms.txt — complete page-by-page listing for agent reference.

**Critical docs**:
1. [Getting Started](https://docs.openclaw.ai/start/getting-started) — 5-minute setup walkthrough
2. [Configuration](https://docs.openclaw.ai/gateway/configuration) — config overview, common tasks, hot reload
3. [Channels](https://docs.openclaw.ai/channels) — messaging platform setup (WhatsApp, Telegram, Discord, etc.)

**Additional key pages**:
- [Agent Runtime](https://docs.openclaw.ai/concepts/agent) — workspace, bootstrap files, sessions
- [Tools & Plugins](https://docs.openclaw.ai/tools) — what the agent can do, tool policies, skills
- [Skills](https://docs.openclaw.ai/tools/skills) — skill locations, gating, ClawHub
- [Hooks](https://docs.openclaw.ai/automation/hooks) — event-driven automation (command events, message hooks)
- [CLI Reference](https://docs.openclaw.ai/cli) — all commands and options
- [Troubleshooting](https://docs.openclaw.ai/help/troubleshooting) — common issues and fixes

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt