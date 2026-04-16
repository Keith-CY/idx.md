---
name: Clawdbot
description: Use when setting up, configuring, or managing OpenClaw — a self-hosted multi-channel AI agent gateway. Reach for this skill when working with channels (Discord, Telegram, WhatsApp, etc.), configuring agents, managing sessions, deploying the gateway, or troubleshooting channel/agent issues.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw Skill Reference

## Product summary

OpenClaw is a self-hosted multi-channel gateway that connects messaging apps (Discord, Telegram, WhatsApp, Signal, Slack, Microsoft Teams, iMessage, Matrix, and more) to AI agents. The Gateway runs on any OS (macOS, Linux, Windows) and routes messages from multiple channels to a single embedded agent runtime with support for multi-agent routing, sessions, memory, and tool execution. Key files: `~/.openclaw/openclaw.json` (config), `~/.openclaw/workspace/` (agent workspace), `~/.openclaw/agents/` (session storage). Primary CLI: `openclaw`. Full docs: https://docs.openclaw.ai

## When to use

Reach for this skill when:
- **Setting up OpenClaw**: installing, onboarding, configuring the gateway
- **Managing channels**: adding/removing Discord, Telegram, WhatsApp, Slack, Teams, Signal, iMessage, Matrix, or other messaging platforms
- **Configuring agents**: setting workspace, models, tools, skills, memory, sandboxing, or multi-agent routing
- **Managing sessions**: controlling session scope, resets, thread bindings, or isolation
- **Deploying/operating**: running the gateway as a service, managing remote access, configuring TLS/Tailscale, or troubleshooting
- **Automating workflows**: setting up cron jobs, hooks, webhooks, or standing orders
- **Debugging**: checking gateway health, logs, channel status, or session state

## Quick reference

### Essential CLI commands

| Task | Command |
|------|---------|
| **Initial setup** | `openclaw onboard --install-daemon` |
| **Check gateway status** | `openclaw gateway status` |
| **Open dashboard** | `openclaw dashboard` |
| **View config** | `openclaw config get <path>` |
| **Set config value** | `openclaw config set <path> <value>` |
| **Add a channel** | `openclaw channels add --channel <name>` |
| **List channels** | `openclaw channels list` |
| **Send a message** | `openclaw message send --target <dest> --message "text"` |
| **View logs** | `openclaw logs --follow` |
| **Validate config** | `openclaw config validate` |
| **Run health check** | `openclaw health` |

### Config file locations

- **Main config**: `~/.openclaw/openclaw.json` (JSON5 format)
- **Agent workspace**: `~/.openclaw/workspace/` (default; configurable)
- **Sessions**: `~/.openclaw/agents/<agentId>/sessions/`
- **Skills**: `~/.openclaw/skills/` (managed), `<workspace>/skills/` (workspace-specific)
- **State directory**: `~/.openclaw/` (override with `OPENCLAW_STATE_DIR`)

### Key config sections

```json5
{
  // Agent runtime
  agents: {
    defaults: {
      workspace: "~/.openclaw/workspace",
      model: { primary: "anthropic/claude-sonnet-4-6" },
      skills: ["github", "weather"],
      sandbox: { mode: "off" }
    }
  },
  
  // Channels
  channels: {
    whatsapp: { allowFrom: ["+15555550123"] },
    telegram: { botToken: "123:abc" },
    discord: { botToken: "token" }
  },
  
  // Gateway
  gateway: {
    port: 18789,
    auth: { token: "secret" }
  },
  
  // Sessions
  session: {
    dmScope: "per-channel-peer",
    reset: { mode: "daily", atHour: 4 }
  }
}
```

## Decision guidance

### When to use X vs Y

| Decision | Option A | Option B | Use A when | Use B when |
|----------|----------|----------|-----------|-----------|
| **DM access control** | `dmPolicy: "pairing"` | `dmPolicy: "allowlist"` | First-time setup, want user approval flow | Known senders, strict allowlist |
| **Session scope** | `dmScope: "per-peer"` | `dmScope: "per-channel-peer"` | Single-user setup | Multi-user, isolate by channel |
| **Sandboxing** | `sandbox.mode: "off"` | `sandbox.mode: "non-main"` | Development, trust the agent | Production, untrusted inputs |
| **Config reload** | `reload.mode: "hybrid"` | `reload.mode: "hot"` | Auto-restart on critical changes | Manual restart control |
| **Group mentions** | `requireMention: true` | `requireMention: false` | Avoid spam in groups | Always respond in groups |
| **Multi-agent** | Single agent (main) | Multiple agents with bindings | Simple setup | Separate workspaces per use case |

## Workflow

### Typical setup task

1. **Install and onboard**
   - Run `openclaw onboard --install-daemon`
   - Choose a model provider (Anthropic, OpenAI, etc.) and enter API key
   - Set gateway port and auth token
   - Optionally add a channel (Telegram is fastest)

2. **Verify the gateway is running**
   - `openclaw gateway status` — should show "running"
   - `openclaw health` — should show gateway reachable

3. **Open the dashboard**
   - `openclaw dashboard` — opens Control UI in browser
   - Send a test message in the chat tab

4. **Add a channel**
   - `openclaw channels add --channel telegram --botToken "YOUR_BOT_TOKEN"`
   - Or use the Control UI Config tab to add channels interactively

5. **Configure access control**
   - Edit `~/.openclaw/openclaw.json` or use `openclaw config set`
   - Set `channels.whatsapp.allowFrom` or `channels.telegram.dmPolicy`
   - Gateway hot-reloads config automatically

6. **Test end-to-end**
   - Send a message from your phone via the channel
   - Verify the agent responds in the Control UI and back to the channel

### Typical configuration task

1. **Read current config**
   - `openclaw config get agents.defaults.model.primary`
   - Or open Control UI → Config tab

2. **Validate before changing**
   - `openclaw config validate` — check for errors

3. **Make the change**
   - CLI: `openclaw config set agents.defaults.model.primary "openai/gpt-5.4"`
   - Or edit `~/.openclaw/openclaw.json` directly (auto-reloads)

4. **Verify the change took effect**
   - `openclaw config get agents.defaults.model.primary`
   - Check logs: `openclaw logs --follow`

## Common gotchas

- **Config won't load**: Run `openclaw doctor` to see validation errors. OpenClaw uses strict JSON5 schema validation — unknown keys or wrong types cause startup failure.
- **Channel not receiving messages**: Check `channels.<provider>.enabled: true`, verify auth token/credentials, and run `openclaw channels status --probe` to test connectivity.
- **Agent not responding**: Check `agents.defaults.model.primary` is set, verify API key is valid (`openclaw models status --probe`), and check logs for errors.
- **DM access denied**: Verify `channels.<provider>.dmPolicy` is not `"disabled"` and sender is in `allowFrom` or has passed pairing. Use `openclaw channels status` to see pairing requests.
- **Config changes not taking effect**: Ensure `gateway.reload.mode` is not `"off"`. Hot-reload applies safe changes instantly; critical changes (port, auth) trigger auto-restart in `hybrid` mode.
- **Workspace files missing**: Run `openclaw setup` to create default bootstrap files (`AGENTS.md`, `SOUL.md`, `TOOLS.md`, `IDENTITY.md`, `USER.md`).
- **Sessions not persisting**: Check `session.dmScope` is not `"main"` (shared session) if you want per-user isolation. Sessions are stored in `~/.openclaw/agents/<agentId>/sessions/`.
- **Skills not loading**: Run `openclaw skills check` to see missing requirements (bins, env vars, config). Check `agents.defaults.skills` allowlist and `skills.entries.<name>.enabled`.
- **Multi-agent routing not working**: Verify `bindings` array matches channel/account, and each agent has a valid `workspace` path. Use `openclaw agents list` to see configured agents.
- **Sandbox fails to start**: Ensure Docker is running and the sandbox image is built (`scripts/sandbox-setup.sh`). Check `agents.defaults.sandbox.mode` and `agents.defaults.sandbox.docker.image`.

## Verification checklist

Before submitting work with OpenClaw:

- [ ] **Gateway is running**: `openclaw gateway status` shows "running"
- [ ] **Config is valid**: `openclaw config validate` passes with no errors
- [ ] **Channels are connected**: `openclaw channels status` shows all expected channels
- [ ] **Agent can respond**: Send a test message and verify agent replies
- [ ] **Access control is correct**: Test DM pairing/allowlist rules work as intended
- [ ] **Sessions persist**: Verify conversation history is retained across messages
- [ ] **Skills are available**: `openclaw skills check` shows required skills as ready
- [ ] **Logs are clean**: `openclaw logs --limit 50` shows no critical errors
- [ ] **Config changes applied**: Verify hot-reload worked (no manual restart needed for safe changes)
- [ ] **Multi-agent routing works** (if applicable): Test message routing to correct agent by channel/account

## Resources

- **Comprehensive navigation**: https://docs.openclaw.ai/llms.txt
- **Getting Started**: https://docs.openclaw.ai/start/getting-started
- **Configuration Reference**: https://docs.openclaw.ai/gateway/configuration
- **CLI Reference**: https://docs.openclaw.ai/cli/index
- **Channels Setup**: https://docs.openclaw.ai/channels

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt