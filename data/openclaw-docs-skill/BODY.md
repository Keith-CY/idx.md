---
name: Clawdbot
description: Use when deploying a self-hosted AI agent gateway, configuring multi-channel messaging (Discord, Telegram, WhatsApp, Slack, etc.), managing agent sessions and memory, setting up automation (cron jobs, webhooks), or controlling tool access and sandboxing. Agents should reach for this skill when working with OpenClaw configuration, CLI commands, channel setup, agent routing, or troubleshooting gateway issues.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw Skill

## Product summary

OpenClaw is a self-hosted, multi-channel gateway for AI agents that runs on any OS (macOS, Linux, Windows, Docker, Kubernetes). It bridges messaging apps (Discord, Telegram, WhatsApp, Slack, Signal, iMessage, Matrix, Microsoft Teams, Google Chat, Feishu, and more) to a single embedded agent runtime. The Gateway is the core process (`openclaw gateway run` or as a service) that manages sessions, routing, channels, and tool execution. Configuration lives in `~/.openclaw/openclaw.json` (JSON5 format). Key CLI commands: `openclaw onboard` (setup), `openclaw configure` (config wizard), `openclaw config get/set` (one-liners), `openclaw gateway status/restart` (service control), `openclaw channels add` (channel setup), `openclaw agent` (run a turn), `openclaw dashboard` (open Control UI). Primary docs: https://docs.openclaw.ai

## When to use

Reach for this skill when:
- **Setting up OpenClaw**: initial install, onboarding, workspace initialization
- **Configuring channels**: adding WhatsApp, Telegram, Discord, Slack, or other messaging platforms
- **Managing agents**: creating isolated agents, setting workspaces, configuring routing bindings
- **Controlling access**: setting DM policies (pairing, allowlist, open), group mention gating, allowlists
- **Configuring tools**: restricting tool access via allow/deny lists, tool profiles, per-agent tool sets
- **Automation**: setting up cron jobs, webhooks, heartbeat, standing orders
- **Troubleshooting**: checking gateway health, reading logs, running diagnostics with `openclaw doctor`
- **Session management**: understanding session scoping, resets, thread bindings
- **Sandboxing**: enabling Docker-based isolation for agent execution
- **Multi-agent routing**: binding agents to channels, managing per-agent workspaces

## Quick reference

### Essential CLI commands

| Task | Command |
|------|---------|
| Initial setup | `openclaw onboard --install-daemon` |
| Config wizard | `openclaw configure` |
| Get config value | `openclaw config get agents.defaults.workspace` |
| Set config value | `openclaw config set channels.telegram.botToken "123:abc"` |
| Gateway status | `openclaw gateway status` |
| Start/stop gateway | `openclaw gateway start` / `openclaw gateway stop` |
| Restart gateway | `openclaw gateway restart` |
| Open dashboard | `openclaw dashboard` |
| Add channel | `openclaw channels add --channel telegram --token $BOT_TOKEN` |
| Run agent turn | `openclaw agent --to +15555550123 --message "Hello"` |
| Check health | `openclaw health` |
| Run diagnostics | `openclaw doctor` |
| View logs | `openclaw logs --follow` |
| List agents | `openclaw agents list` |
| Add agent | `openclaw agents add --workspace ~/.openclaw/workspace-work` |

### Config file locations

- **Main config**: `~/.openclaw/openclaw.json` (JSON5 format)
- **Workspace**: `~/.openclaw/workspace` (default; contains AGENTS.md, SOUL.md, TOOLS.md, BOOTSTRAP.md, IDENTITY.md, USER.md)
- **Sessions**: `~/.openclaw/agents/<agentId>/sessions/<sessionId>.jsonl`
- **State directory**: `~/.openclaw` (override with `OPENCLAW_STATE_DIR`)
- **Dev mode**: `~/.openclaw-dev` (use `--dev` flag)

### Config structure (minimal)

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

### Channel setup patterns

| Channel | Key config | Example |
|---------|-----------|---------|
| WhatsApp | `allowFrom`, `groups` | `channels.whatsapp: { allowFrom: ["+15555550123"], groups: { "*": { requireMention: true } } }` |
| Telegram | `botToken`, `dmPolicy` | `channels.telegram: { botToken: "123:abc", dmPolicy: "pairing" }` |
| Discord | `botToken`, `guildId` | `channels.discord: { botToken: "abc", guildId: "123" }` |
| Slack | `botToken`, `appToken` | `channels.slack: { botToken: "xoxb-...", appToken: "xapp-..." }` |
| Signal | `phoneNumber`, `password` | `channels.signal: { phoneNumber: "+15555550123", password: "..." }` |

### Tool configuration

```json5
{
  tools: {
    profile: "coding",  // full | coding | messaging | minimal
    allow: ["group:fs", "browser", "web_search"],
    deny: ["exec"],
    byProvider: {
      "google-antigravity": { profile: "minimal" }
    }
  }
}
```

### Tool groups

| Group | Includes |
|-------|----------|
| `group:runtime` | exec, process, code_execution |
| `group:fs` | read, write, edit, apply_patch |
| `group:web` | web_search, x_search, web_fetch |
| `group:ui` | browser, canvas |
| `group:sessions` | sessions_list, sessions_history, subagents |
| `group:messaging` | message |
| `group:media` | image, image_generate, music_generate, video_generate, tts |

## Decision guidance

### When to use X vs Y

| Decision | Option A | Option B | Use A when | Use B when |
|----------|----------|----------|-----------|-----------|
| **DM access** | `dmPolicy: "pairing"` | `dmPolicy: "allowlist"` | First-time users should approve access | You have a fixed list of allowed senders |
| **Group mentions** | `requireMention: true` | `requireMention: false` | Avoid spam in busy groups | Bot should respond to all group messages |
| **Session scope** | `dmScope: "per-peer"` | `dmScope: "main"` | Multi-user setup; isolate conversations | Single user; shared context across channels |
| **Tool access** | `profile: "coding"` | `profile: "messaging"` | Agent needs file/exec/web access | Agent only sends messages |
| **Sandboxing** | `sandbox.mode: "non-main"` | `sandbox.mode: "off"` | Untrusted agents or high-risk tools | Trusted agent; performance critical |
| **Config reload** | `reload.mode: "hybrid"` | `reload.mode: "hot"` | Auto-restart on critical changes | Manual control; log warnings only |
| **Multi-agent** | Multiple agents + bindings | Single agent | Different workspaces/personas per channel | One agent handles all channels |

## Workflow

### Typical task: Set up a new channel

1. **Check current channels**: `openclaw channels list`
2. **Gather credentials**: Get bot token, API key, or auth from the platform (Telegram BotFather, Discord Developer Portal, etc.)
3. **Add the channel**: `openclaw channels add --channel telegram --token $BOT_TOKEN` (interactive) or edit config directly
4. **Set access policy**: Add `dmPolicy: "pairing"` or `allowFrom: [...]` to `channels.<provider>` in config
5. **Verify**: `openclaw channels status --probe` to test connectivity
6. **Test**: Send a message from the channel and confirm the agent responds

### Typical task: Configure tool access

1. **Read current config**: `openclaw config get tools`
2. **Choose a profile**: `full` (unrestricted), `coding` (file/exec/web), `messaging` (send only), or `minimal` (status only)
3. **Set profile**: `openclaw config set tools.profile coding`
4. **Add exceptions**: `openclaw config set tools.deny '["exec"]'` to block specific tools
5. **Verify**: `openclaw health` or check agent behavior in chat

### Typical task: Create a multi-agent setup

1. **Add new agent**: `openclaw agents add --workspace ~/.openclaw/workspace-work --name work`
2. **Set up workspace**: Create `AGENTS.md`, `SOUL.md`, etc. in the new workspace
3. **Bind to channels**: `openclaw agents bind --agent work --bind "slack:work-account"`
4. **Test routing**: Send a message from the bound channel; verify it routes to the work agent
5. **Verify isolation**: Check that sessions are separate: `openclaw sessions list --agent work`

### Typical task: Troubleshoot gateway issues

1. **Check status**: `openclaw gateway status` (service running?)
2. **Run diagnostics**: `openclaw doctor` (config valid? channels healthy?)
3. **View logs**: `openclaw logs --follow` (real-time errors)
4. **Check health**: `openclaw health --verbose` (live probe of channels)
5. **Restart if needed**: `openclaw gateway restart` (apply pending config changes)

## Common gotchas

- **Config validation is strict**: Unknown keys or malformed types cause the Gateway to refuse to start. Run `openclaw doctor` to see exact errors.
- **JSON5 syntax**: Config uses JSON5 (comments, trailing commas allowed), not plain JSON. Quote keys only if they contain special characters.
- **Model refs use `provider/model` format**: `anthropic/claude-sonnet-4-6`, not just `claude-sonnet-4-6`. Omitting the provider falls back to the default.
- **Workspace must exist**: `agents.defaults.workspace` must point to a valid directory. Run `openclaw setup` to initialize it.
- **Channel tokens are secrets**: Store bot tokens in env vars or SecretRef objects, not plaintext in config. Use `${BOT_TOKEN}` substitution or `{ source: "env", id: "BOT_TOKEN" }`.
- **Hot reload doesn't restart for all changes**: Gateway server config (`gateway.port`, `gateway.auth`, etc.) requires a manual restart. Use `reload.mode: "hybrid"` for auto-restart on critical changes.
- **Session scoping affects isolation**: `dmScope: "main"` shares context across all DMs; `dmScope: "per-peer"` isolates per sender. Choose based on your use case.
- **Tool allow/deny is case-sensitive**: Use exact tool names (`exec`, not `bash`; `web_search`, not `search`).
- **Group mention patterns are regex**: `mentionPatterns: ["@openclaw", "openclaw"]` uses regex matching. Escape special chars if needed.
- **Pairing codes are one-time**: Once a sender approves pairing, they're added to the allow store. Pairing codes don't expire; they're consumed on first use.
- **Cron jobs need `cron.enabled: true`**: Scheduled jobs won't run unless cron is explicitly enabled in config.
- **Sandboxing requires Docker**: `sandbox.mode: "non-main"` needs Docker running. Check with `docker ps` or disable sandboxing if Docker isn't available.

## Verification checklist

Before submitting work with OpenClaw:

- [ ] **Config is valid**: Run `openclaw doctor` with no errors
- [ ] **Gateway is running**: `openclaw gateway status` shows "running"
- [ ] **Channels are healthy**: `openclaw channels status --probe` shows all channels connected
- [ ] **Agent responds**: Send a test message and verify the agent replies
- [ ] **Sessions are isolated** (if multi-agent): `openclaw sessions list --agent <id>` shows correct agent's sessions
- [ ] **Tools are accessible**: Test a tool the agent should have access to (e.g., `/status` for session_status)
- [ ] **Config changes applied**: If you edited config, verify with `openclaw config get <path>` or check Control UI
- [ ] **Logs are clean**: `openclaw logs --limit 50` shows no ERROR or WARN entries (INFO is normal)
- [ ] **Workspace files exist**: Check `~/.openclaw/workspace/AGENTS.md`, `SOUL.md`, etc. are present
- [ ] **Credentials are set**: Verify model provider API keys are configured (check `openclaw models status`)

## Resources

- **Full page-by-page navigation**: https://docs.openclaw.ai/llms.txt
- **Configuration reference**: https://docs.openclaw.ai/gateway/configuration-reference
- **CLI reference**: https://docs.openclaw.ai/cli/index
- **Channel setup guides**: https://docs.openclaw.ai/channels (Discord, Telegram, WhatsApp, Slack, etc.)
- **Multi-agent routing**: https://docs.openclaw.ai/concepts/multi-agent
- **Troubleshooting**: https://docs.openclaw.ai/gateway/troubleshooting

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt