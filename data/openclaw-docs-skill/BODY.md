---
name: Clawdbot
description: Use when building, configuring, or troubleshooting a self-hosted AI agent gateway that connects messaging apps (WhatsApp, Telegram, Discord, iMessage, etc.) to coding agents. Reach for this skill when agents need to set up channels, manage sessions, configure models, create custom skills, or debug agent behavior.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw Skill

## Product summary

OpenClaw is a self-hosted gateway that connects messaging apps (WhatsApp, Telegram, Discord, iMessage, Slack, Signal, and more) to an embedded AI coding agent. It runs as a single daemon process on your machine or server, manages multi-channel routing, handles sessions and memory, and provides a web Control UI for chat and configuration.

**Key files and commands:**
- Config: `~/.openclaw/openclaw.json` (JSON5 format)
- Workspace: `~/.openclaw/workspace/` (agent home directory with AGENTS.md, SOUL.md, TOOLS.md, IDENTITY.md, USER.md, BOOTSTRAP.md)
- CLI: `openclaw` (primary command; `openclaw onboard` for setup, `openclaw gateway` to run, `openclaw dashboard` to open UI)
- Gateway: WebSocket control plane on port 18789 (default)
- Sessions: stored at `~/.openclaw/agents/<agentId>/sessions/<sessionId>.jsonl`

**Primary docs:** https://docs.openclaw.ai

## When to use

Reach for this skill when:
- **Setting up OpenClaw**: installing, running `openclaw onboard`, configuring channels (WhatsApp, Telegram, Discord, etc.)
- **Configuring the agent**: setting models, tools, system prompts, workspace files (AGENTS.md, SOUL.md, TOOLS.md)
- **Managing channels**: connecting messaging platforms, setting DM policies, group mention gating, allowlists
- **Creating custom skills**: writing SKILL.md files with tool definitions and instructions
- **Debugging agent behavior**: checking sessions, logs, model failover, tool execution, sandbox issues
- **Multi-agent routing**: setting up isolated agents with separate workspaces and bindings
- **Automation**: configuring cron jobs, webhooks, heartbeats, hooks
- **Troubleshooting**: diagnosing gateway errors, channel connectivity, auth failures, context overflow

## Quick reference

### Essential CLI commands

| Command | Purpose |
|---------|---------|
| `openclaw onboard --install-daemon` | Interactive setup wizard; installs systemd/launchd service |
| `openclaw gateway --port 18789` | Run gateway in foreground (debug mode) |
| `openclaw gateway status` | Check if daemon is running |
| `openclaw dashboard` | Open Control UI in browser |
| `openclaw configure` | Edit config interactively |
| `openclaw config get <key>` | Read a config value |
| `openclaw config set <key> <value>` | Set a config value |
| `openclaw doctor` | Diagnose config/auth issues |
| `openclaw doctor --fix` | Auto-repair common issues |
| `openclaw channels login` | Authenticate messaging channels |
| `openclaw message send --target <id> --message "text"` | Send test message |
| `openclaw agent --message "prompt"` | Test agent directly |
| `openclaw logs` | View gateway logs |
| `openclaw models status` | Check model auth and availability |

### Config structure (minimal)

```json5
{
  agents: {
    defaults: {
      workspace: "~/.openclaw/workspace",
      model: {
        primary: "anthropic/claude-opus-4-6",
        fallbacks: ["openai/gpt-4o"],
      },
    },
  },
  channels: {
    whatsapp: {
      enabled: true,
      allowFrom: ["+15555550123"],
      dmPolicy: "pairing",
    },
  },
  gateway: {
    port: 18789,
    bind: "127.0.0.1",
  },
}
```

### Workspace files (in `~/.openclaw/workspace/`)

| File | Purpose |
|------|---------|
| `AGENTS.md` | Operating instructions, memory, and context for the agent |
| `SOUL.md` | Persona, boundaries, tone, and character definition |
| `TOOLS.md` | User-maintained notes on tool setup (e.g., camera names, SSH details) |
| `IDENTITY.md` | Agent name, emoji, avatar, theme |
| `USER.md` | User profile and preferred address |
| `BOOTSTRAP.md` | One-time first-run ritual (deleted after completion) |
| `skills/` | Custom skill directories with SKILL.md files |
| `memory/` | Auto-saved session summaries (when hooks enabled) |

### Channel config patterns

```json5
{
  channels: {
    whatsapp: {
      enabled: true,
      allowFrom: ["+15555550123"],
      dmPolicy: "pairing",  // pairing | allowlist | open | disabled
      groups: { "*": { requireMention: true } },
    },
    telegram: {
      enabled: true,
      botToken: "123:abc...",
      dmPolicy: "allowlist",
      allowFrom: ["tg:123456"],
    },
    discord: {
      enabled: true,
      botToken: "...",
      dmPolicy: "pairing",
    },
  },
}
```

### Model configuration

```json5
{
  agents: {
    defaults: {
      models: {
        "anthropic/claude-opus-4-6": { alias: "opus" },
        "openai/gpt-4o": { alias: "gpt4" },
      },
      model: {
        primary: "anthropic/claude-opus-4-6",
        fallbacks: ["openai/gpt-4o"],
      },
      imageModel: {
        primary: "openrouter/qwen/qwen-2.5-vl-72b-instruct:free",
      },
      timeoutSeconds: 600,
      contextTokens: 200000,
    },
  },
}
```

## Decision guidance

### When to use X vs Y

| Decision | Option A | Option B | Use A when | Use B when |
|----------|----------|----------|-----------|-----------|
| **DM access** | `dmPolicy: "pairing"` | `dmPolicy: "allowlist"` | You want one-time approval codes for new senders | You have a fixed list of allowed numbers/IDs |
| **Session scope** | `dmScope: "main"` | `dmScope: "per-channel-peer"` | All DMs share one conversation | Each channel/sender gets isolated sessions |
| **Sandbox mode** | `mode: "off"` | `mode: "non-main"` | You trust the agent fully | You want isolation for non-main sessions only |
| **Config reload** | `reload: "hybrid"` | `reload: "hot"` | You want auto-restart on critical changes | You prefer manual control over restarts |
| **Tool policy** | `tools.allow: [...]` | `tools.deny: [...]` | You want a whitelist (safer) | You want to block specific tools |
| **Group mention** | `requireMention: true` | `requireMention: false` | You want the bot to respond only when mentioned | You want the bot to respond to all group messages |
| **Compaction mode** | `mode: "safeguard"` | `mode: "default"` | You want extra guardrails on context pruning | You want standard compaction behavior |

## Workflow

### 1. Initial setup

1. **Install**: `npm install -g openclaw@latest` or use install script
2. **Run wizard**: `openclaw onboard --install-daemon`
   - Choose gateway mode (local/remote)
   - Set up model auth (API key or OAuth)
   - Configure optional channels
   - Install daemon service
3. **Verify**: `openclaw gateway status` and `openclaw dashboard`
4. **Check workspace**: `ls -la ~/.openclaw/workspace/` — should have AGENTS.md, SOUL.md, etc.

### 2. Configure a channel

1. **Choose channel**: WhatsApp, Telegram, Discord, Slack, Signal, iMessage, etc.
2. **Get credentials**: Follow channel-specific docs (e.g., WhatsApp Web pairing, Telegram bot token)
3. **Add to config**: Edit `~/.openclaw/openclaw.json` under `channels.<provider>`
4. **Set DM policy**: `dmPolicy: "pairing"` (default) or `"allowlist"`
5. **Test**: `openclaw message send --target <id> --message "test"`
6. **Monitor**: Check `openclaw logs` for errors

### 3. Customize the agent

1. **Edit workspace files**:
   - `AGENTS.md` — add operating instructions and memory
   - `SOUL.md` — define persona and boundaries
   - `TOOLS.md` — document tool setup (camera names, SSH hosts, etc.)
   - `IDENTITY.md` — set name, emoji, avatar
2. **Reload**: Gateway watches files; changes apply automatically
3. **Test**: Send a message to the agent and verify behavior

### 4. Create a custom skill

1. **Create directory**: `mkdir -p ~/.openclaw/workspace/skills/my-skill`
2. **Write SKILL.md**:
   ```markdown
   ---
   name: my_skill
   description: What this skill does
   ---
   
   # My Skill
   
   Instructions for the agent on how to use this skill.
   ```
3. **Add tools** (optional): Define tool calls in the skill or instruct the agent to use existing tools
4. **Test**: Ask the agent to use the skill; check logs for errors
5. **Publish** (optional): Use `clawhub publish` to share on ClawHub

### 5. Debug agent behavior

1. **Check logs**: `openclaw logs --follow` (tail in real-time)
2. **Run doctor**: `openclaw doctor` to diagnose config issues
3. **Test directly**: `openclaw agent --message "test prompt"` to run agent without channels
4. **Check session**: `openclaw sessions list` and inspect transcript files
5. **Verify model**: `openclaw models status` to confirm auth and availability
6. **Check tool policy**: Review `agents.defaults.tools` in config

### 6. Set up multi-agent routing

1. **Define agents** in config:
   ```json5
   {
     agents: {
       list: [
         { id: "home", default: true, workspace: "~/.openclaw/workspace-home" },
         { id: "work", workspace: "~/.openclaw/workspace-work" },
       ],
     },
   }
   ```
2. **Add bindings** to route channels to agents:
   ```json5
   {
     bindings: [
       { agentId: "home", match: { channel: "whatsapp", accountId: "personal" } },
       { agentId: "work", match: { channel: "whatsapp", accountId: "biz" } },
     ],
   }
   ```
3. **Test**: Send messages from different accounts and verify routing

## Common gotchas

- **Config validation is strict**: Unknown keys or malformed types cause the gateway to refuse startup. Run `openclaw doctor --fix` to auto-repair.
- **Workspace is required**: `agents.defaults.workspace` must be set and exist. Use `openclaw setup` to initialize it.
- **Model refs use `provider/model` format**: `anthropic/claude-opus-4-6`, not just `claude-opus-4-6`. Omitting the provider only works if there's no `/` in the model ID.
- **DM policies are per-channel**: Setting `allowFrom` in one channel doesn't affect others. Configure each channel separately.
- **Session files are JSONL**: Don't edit them directly. Use `openclaw sessions` CLI commands or the Control UI.
- **Sandbox requires Docker**: If `sandbox.mode` is not `"off"`, Docker must be installed and the sandbox image built (`scripts/sandbox-setup.sh`).
- **Tool policy filtering happens at runtime**: Denying a tool in config doesn't remove it from the system prompt; it just prevents execution. Use `tools.allow` for a whitelist if you need strict control.
- **Group messages require mention by default**: Set `requireMention: false` in group config if you want the bot to respond to all messages.
- **Context overflow triggers auto-compaction**: If sessions grow too large, the agent automatically compacts history. Monitor `contextTokens` in config.
- **Auth profile rotation on failure**: If a model provider fails, OpenClaw rotates to the next profile in `agents.defaults.model.fallbacks`. Check logs for failover events.
- **Hot reload doesn't restart the gateway**: Most config changes apply instantly, but some (gateway port, TLS, plugins) require a manual restart. Use `reload: "hybrid"` (default) for auto-restart on critical changes.

## Verification checklist

Before submitting work with OpenClaw:

- [ ] Config is valid: `openclaw doctor` shows no errors
- [ ] Gateway is running: `openclaw gateway status` returns `running`
- [ ] Model auth works: `openclaw models status` shows available models
- [ ] Workspace exists: `ls ~/.openclaw/workspace/AGENTS.md` succeeds
- [ ] Channels are configured: `openclaw channels list` shows enabled channels
- [ ] Test message sent: `openclaw message send --target <id> --message "test"` succeeds
- [ ] Agent responds: Check Control UI or channel for reply
- [ ] Logs are clean: `openclaw logs` shows no ERROR or WARN entries
- [ ] Session created: `openclaw sessions list` shows the session
- [ ] Custom skills load: Check logs for "skill loaded" messages
- [ ] Tool policy applied: Verify denied tools don't appear in agent output

## Resources

**Comprehensive navigation**: https://docs.openclaw.ai/llms.txt

**Critical docs**:
1. [Configuration Reference](https://docs.openclaw.ai/gateway/configuration-reference) — all config fields and options
2. [Creating Skills](https://docs.openclaw.ai/tools/creating-skills) — how to write SKILL.md files
3. [Channels Overview](https://docs.openclaw.ai/channels) — setup guides for WhatsApp, Telegram, Discord, etc.

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt