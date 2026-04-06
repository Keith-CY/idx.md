---
name: Clawdbot
description: Use when setting up a self-hosted AI agent gateway, configuring multi-channel messaging (Discord, Telegram, WhatsApp, Slack, etc.), managing agent sessions and routing, deploying tools and skills, or troubleshooting gateway operations. Reach for this skill when working with the CLI, configuration files, channel setup, or agent workspace management.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw Skill Reference

## Product Summary

OpenClaw is a self-hosted, multi-channel gateway for AI agents that runs on any OS. It connects messaging apps (Discord, Telegram, WhatsApp, Slack, Signal, iMessage, Matrix, and 15+ others) to an embedded agent runtime with tool use, sessions, memory, and multi-agent routing. The Gateway is the single source of truth for sessions, routing, and channel connections. Key files: `~/.openclaw/openclaw.json` (config), `~/.openclaw/workspace/` (agent workspace), `~/.openclaw/agents/` (sessions). Primary CLI: `openclaw`. Docs: https://docs.openclaw.ai

## When to Use

Use this skill when:
- Setting up OpenClaw for the first time or troubleshooting installation
- Configuring channels (WhatsApp, Telegram, Discord, etc.) and DM/group policies
- Managing agent workspaces, sessions, and multi-agent routing
- Creating or configuring skills, tools, and plugins
- Editing `openclaw.json` or using `openclaw config` commands
- Debugging gateway health, logs, or channel connectivity
- Deploying agents to production or managing remote access
- Working with the Control UI, CLI, or mobile nodes

## Quick Reference

### Essential Commands

| Task | Command |
|------|---------|
| Initial setup | `openclaw onboard --install-daemon` |
| Open dashboard | `openclaw dashboard` |
| Check gateway status | `openclaw gateway status` |
| View logs | `openclaw logs --follow` |
| Edit config interactively | `openclaw configure` |
| Get a config value | `openclaw config get agents.defaults.workspace` |
| Set a config value | `openclaw config set channels.telegram.botToken "123:abc"` |
| List agents | `openclaw agents list` |
| Send a test message | `openclaw message send --target +15555550123 --message "Hi"` |
| Validate config | `openclaw config validate` |
| Run health check | `openclaw health` |

### Config File Locations

- **Main config**: `~/.openclaw/openclaw.json` (JSON5 format)
- **Agent workspace**: `~/.openclaw/workspace/` (contains AGENTS.md, SOUL.md, TOOLS.md, etc.)
- **Sessions**: `~/.openclaw/agents/<agentId>/sessions/<sessionId>.jsonl`
- **Skills**: `~/.openclaw/skills/` (local), `<workspace>/skills/` (workspace-scoped)
- **State directory**: `~/.openclaw/` (override with `OPENCLAW_STATE_DIR`)

### Config Structure (Minimal)

```json5
{
  agents: {
    defaults: {
      workspace: "~/.openclaw/workspace",
      model: { primary: "anthropic/claude-sonnet-4-6" }
    }
  },
  channels: {
    whatsapp: { allowFrom: ["+15555550123"] },
    telegram: { botToken: "123:abc" }
  }
}
```

### Channel Setup Quick Reference

| Channel | Key Config | Setup |
|---------|-----------|-------|
| WhatsApp | `channels.whatsapp.allowFrom` | Scan QR code with WhatsApp Web |
| Telegram | `channels.telegram.botToken` | Get token from BotFather |
| Discord | `channels.discord.botToken` | Create app in Discord Developer Portal |
| Slack | `channels.slack.botToken` | Create app in Slack API dashboard |
| Signal | `channels.signal.phoneNumber` | Pair with Signal Desktop |
| iMessage | `channels.imessage` | Requires macOS with BlueBubbles plugin |

### Tool Groups (for allow/deny lists)

```json5
{
  tools: {
    profile: "coding",  // full | coding | messaging | minimal
    allow: ["group:fs", "browser", "web_search"],
    deny: ["exec"]
  }
}
```

| Group | Tools |
|-------|-------|
| `group:runtime` | exec, process, code_execution |
| `group:fs` | read, write, edit, apply_patch |
| `group:web` | web_search, x_search, web_fetch |
| `group:ui` | browser, canvas |
| `group:sessions` | sessions_list, sessions_history, subagents |
| `group:media` | image, image_generate, music_generate, video_generate, tts |

## Decision Guidance

### When to Use X vs Y

| Decision | Use This | When | Use That | When |
|----------|----------|------|----------|------|
| **Config editing** | `openclaw configure` | Interactive setup | Direct edit `openclaw.json` | Scripting or bulk changes |
| **Session scope** | `per-channel-peer` | Multi-user setup | `main` | Single user, shared history |
| **DM policy** | `pairing` | Unknown senders | `allowlist` | Known senders only |
| **Sandboxing** | `non-main` | Isolate untrusted agents | `off` | Trust all agents |
| **Tool profile** | `coding` | General use | `messaging` | Chat-only agents |
| **Config reload** | `hybrid` (default) | Auto-restart when needed | `hot` | Manual restart control |
| **Multi-agent** | Separate workspaces + bindings | Different agents per channel | Single agent | One agent for all |

## Workflow

### Typical Setup Task

1. **Install and onboard**
   ```bash
   npm install -g openclaw@latest
   openclaw onboard --install-daemon
   ```

2. **Verify gateway is running**
   ```bash
   openclaw gateway status
   ```

3. **Open the dashboard**
   ```bash
   openclaw dashboard
   ```

4. **Add a channel** (example: Telegram)
   ```bash
   openclaw channels add --channel telegram --account default --token "123:abc"
   ```

5. **Test a message**
   - Send a message in the Control UI or via Telegram
   - Check logs if no response: `openclaw logs --follow`

6. **Configure safety** (optional)
   ```bash
   openclaw config set channels.telegram.dmPolicy "allowlist"
   openclaw config set channels.telegram.allowFrom '["tg:123"]'
   ```

7. **Verify config**
   ```bash
   openclaw config validate
   ```

### Adding a Skill

1. **Search ClawHub**
   ```bash
   openclaw skills search github
   ```

2. **Install the skill**
   ```bash
   openclaw skills install github
   ```

3. **Enable for an agent** (optional)
   ```bash
   openclaw config set agents.defaults.skills '["github"]'
   ```

4. **Verify readiness**
   ```bash
   openclaw skills check
   ```

### Multi-Agent Setup

1. **Create a new agent**
   ```bash
   openclaw agents add work --workspace ~/.openclaw/workspace-work
   ```

2. **Bind to a channel**
   ```bash
   openclaw agents bind --agent work --bind "telegram:work"
   ```

3. **Verify bindings**
   ```bash
   openclaw agents bindings
   ```

## Common Gotchas

- **Config validation fails on startup**: Run `openclaw doctor --fix` to auto-repair common issues. Check `openclaw logs` for the exact error.
- **Channel not receiving messages**: Verify `dmPolicy` and `allowFrom` are set correctly. Use `openclaw channels status --probe` to test connectivity.
- **Sessions not persisting**: Check that `agents.defaults.workspace` exists and is writable. Sessions are stored in `~/.openclaw/agents/<agentId>/sessions/`.
- **Model not responding**: Verify the model provider auth is set (e.g., `ANTHROPIC_API_KEY` or `OPENAI_API_KEY`). Use `openclaw models status --probe` to test.
- **Skills not loading**: Run `openclaw skills check` to see missing requirements. Skills must be in `~/.openclaw/skills/` or `<workspace>/skills/`.
- **Config hot-reload not working**: Restart the gateway with `openclaw gateway restart`. Some changes (like `gateway.port`) require a restart.
- **Pairing code not working**: Ensure the channel is enabled and the sender is not already in the allowlist. Pairing codes expire after one use.
- **Sandbox mode failing**: Run `scripts/sandbox-setup.sh` to build the Docker image. Ensure Docker is running.
- **Remote access not working**: Check `gateway.remote.url` and `gateway.auth.token`. Use `openclaw qr --remote` to generate a pairing QR for mobile nodes.
- **Tool execution blocked**: Check `tools.allow` / `tools.deny` and `tools.profile`. Use `openclaw config get tools` to inspect current policy.

## Verification Checklist

Before submitting work with OpenClaw:

- [ ] Gateway is running: `openclaw gateway status` shows "running"
- [ ] Config is valid: `openclaw config validate` passes
- [ ] Channels are connected: `openclaw channels status --probe` shows all channels healthy
- [ ] Agent can respond: Send a test message and verify a reply
- [ ] Sessions are persisting: Check `~/.openclaw/agents/main/sessions/` has recent `.jsonl` files
- [ ] Skills are loaded: `openclaw skills check` shows all required skills ready
- [ ] Logs are clean: `openclaw logs --limit 50` shows no ERROR or WARN entries
- [ ] Config changes applied: Use `openclaw config get <path>` to verify the value was set
- [ ] Multi-agent bindings correct: `openclaw agents bindings` shows expected routing
- [ ] Tool policy is correct: `openclaw config get tools` matches intended allow/deny list

## Resources

**Comprehensive navigation**: https://docs.openclaw.ai/llms.txt

**Critical documentation pages**:
- [Getting Started](/start/getting-started) — Installation and first chat
- [Configuration Reference](/gateway/configuration-reference) — All config fields
- [Channels](/channels) — Setup for Discord, Telegram, WhatsApp, Slack, and more

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt