---
name: Clawdbot
description: Use when setting up a self-hosted AI agent gateway, configuring multi-channel messaging (Discord, Telegram, WhatsApp, Slack, etc.), managing agent sessions and memory, deploying tools and skills, or troubleshooting gateway operations and channel connectivity.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw Skill Reference

## Product summary

OpenClaw is a self-hosted multi-channel gateway that connects AI agents to messaging platforms (Discord, Telegram, WhatsApp, Slack, Signal, iMessage, Microsoft Teams, Matrix, and more). Run a single Gateway process on your machine or server; it bridges your chat apps to an always-available AI assistant with tool use, sessions, memory, and multi-agent routing. Key files: `~/.openclaw/openclaw.json` (config), `~/.openclaw/workspace/` (agent workspace with AGENTS.md, SOUL.md, TOOLS.md, BOOTSTRAP.md, IDENTITY.md, USER.md). Primary CLI: `openclaw` with subcommands for setup, configuration, messaging, agent management, and gateway control. Docs: https://docs.openclaw.ai

## When to use

Reach for this skill when:
- **Setting up OpenClaw**: initial install, onboarding, workspace initialization
- **Configuring channels**: connecting WhatsApp, Telegram, Discord, Slack, or other messaging platforms
- **Managing agents**: creating isolated agents, routing messages, configuring per-agent workspaces
- **Controlling access**: setting up pairing, allowlists, group mention gating, DM policies
- **Deploying tools and skills**: enabling/disabling tools, installing skills from ClawHub, restricting tool access per agent
- **Troubleshooting**: diagnosing channel health, session issues, model provider auth, gateway connectivity
- **Automating workflows**: setting up cron jobs, hooks, webhooks, heartbeat check-ins
- **Securing the gateway**: configuring auth tokens, secrets management, sandbox isolation

## Quick reference

### Essential CLI commands

| Task | Command |
|------|---------|
| Initial setup | `openclaw onboard --install-daemon` |
| Open dashboard | `openclaw dashboard` |
| Check gateway status | `openclaw gateway status` |
| View logs | `openclaw logs --follow` |
| Configure interactively | `openclaw configure` |
| Get/set config values | `openclaw config get <path>` / `openclaw config set <path> <value>` |
| List channels | `openclaw channels list` |
| Add a channel | `openclaw channels add --channel telegram --token <token>` |
| Send a message | `openclaw message send --target +15555550123 --message "Hi"` |
| List agents | `openclaw agents list` |
| Add an agent | `openclaw agents add <name> --workspace <dir>` |
| List skills | `openclaw skills list` |
| Install a skill | `openclaw skills install <slug>` |
| Restart gateway | `openclaw gateway restart` |

### Config file structure

```json5
{
  // Agent workspace and defaults
  agents: {
    defaults: {
      workspace: "~/.openclaw/workspace",
      model: { primary: "anthropic/claude-sonnet-4-6" },
      skills: ["github", "weather"],
      sandbox: { mode: "non-main" }
    },
    list: [
      { id: "main", default: true },
      { id: "work", workspace: "~/.openclaw/workspace-work" }
    ]
  },

  // Channel configuration
  channels: {
    whatsapp: {
      enabled: true,
      allowFrom: ["+15555550123"],
      dmPolicy: "pairing",
      groups: { "*": { requireMention: true } }
    },
    telegram: {
      enabled: true,
      botToken: "123:abc",
      dmPolicy: "allowlist"
    },
    discord: {
      enabled: true,
      botToken: "token",
      dmPolicy: "pairing"
    }
  },

  // Gateway server
  gateway: {
    port: 18789,
    auth: { token: "your-token" },
    reload: { mode: "hybrid" }
  },

  // Tools and security
  tools: {
    profile: "coding",
    allow: ["group:fs", "browser", "web_search"],
    deny: ["exec"]
  },

  // Sessions and automation
  session: {
    dmScope: "per-channel-peer",
    reset: { mode: "daily", atHour: 4 }
  },
  cron: { enabled: true }
}
```

### Bootstrap files (injected into agent context)

| File | Purpose |
|------|---------|
| `AGENTS.md` | Operating instructions and memory |
| `SOUL.md` | Persona, boundaries, tone |
| `TOOLS.md` | User-maintained tool notes and conventions |
| `BOOTSTRAP.md` | One-time first-run ritual (deleted after completion) |
| `IDENTITY.md` | Agent name, theme, emoji, avatar |
| `USER.md` | User profile and preferred address |

## Decision guidance

### When to use X vs Y

| Decision | Option A | Option B | Use A when | Use B when |
|----------|----------|----------|-----------|-----------|
| **DM access control** | `dmPolicy: "pairing"` | `dmPolicy: "allowlist"` | You want one-time approval codes for new senders | You have a fixed list of approved numbers/IDs |
| **Tool restriction** | `tools.profile: "coding"` | `tools.profile: "messaging"` | Agent needs file I/O, exec, browser, web search | Agent only sends messages and reads session history |
| **Session scope** | `dmScope: "per-peer"` | `dmScope: "per-channel-peer"` | Single user, shared context across channels | Multiple users, isolated per-channel conversations |
| **Sandbox mode** | `sandbox.mode: "non-main"` | `sandbox.mode: "all"` | Main agent runs locally, secondary agents isolated | All agents run in Docker containers |
| **Config reload** | `reload.mode: "hybrid"` | `reload.mode: "hot"` | Auto-restart on critical changes | Manual restart control; log warnings only |
| **Group mention** | `requireMention: true` | `requireMention: false` | Agent only responds to @-mentions in groups | Agent responds to all group messages |

## Workflow

### Typical setup task

1. **Install and onboard**
   - Run `openclaw onboard --install-daemon`
   - Choose a model provider (Anthropic, OpenAI, etc.) and enter API key
   - Select gateway port and auth method
   - Confirm workspace location

2. **Verify gateway is running**
   - Run `openclaw gateway status`
   - Check that the Gateway is listening on port 18789
   - Run `openclaw health` for a live probe

3. **Open the dashboard**
   - Run `openclaw dashboard`
   - Verify the Control UI loads in your browser
   - Send a test message in the chat tab

4. **Connect a channel**
   - Run `openclaw channels add --channel telegram --token <bot-token>`
   - Or use `openclaw configure` for an interactive wizard
   - Test by sending a message from the channel

5. **Configure access control**
   - Edit `~/.openclaw/openclaw.json` or use `openclaw config set`
   - Set `channels.whatsapp.allowFrom: ["+15555550123"]` for allowlist
   - Or use `dmPolicy: "pairing"` for one-time approval codes
   - Restart with `openclaw gateway restart` if needed (or wait for hot reload)

6. **Restrict tools (optional)**
   - Set `tools.profile: "messaging"` to disable exec/browser
   - Or use `tools.allow: ["group:fs", "web_search"]` for fine-grained control
   - Changes hot-apply without restart

7. **Test and monitor**
   - Send messages from multiple channels
   - Check `openclaw logs --follow` for errors
   - Use `openclaw status --deep` for full diagnostics

### Adding a new agent

1. Run `openclaw agents add work --workspace ~/.openclaw/workspace-work`
2. Create bootstrap files in the new workspace (or copy from main)
3. Bind the agent to channels: `openclaw agents bind --agent work --bind telegram:work-bot`
4. Test by sending a message to the bound channel

## Common gotchas

- **Config validation is strict**: Unknown keys or malformed types cause the Gateway to refuse to start. Run `openclaw doctor` to see exact issues.
- **Hot reload doesn't apply to gateway server settings**: Changes to `gateway.port`, `gateway.auth`, or `gateway.bind` require a manual restart (`openclaw gateway restart`).
- **Bootstrap files are only created once**: `BOOTSTRAP.md` is deleted after the first run. If you delete it manually, it won't be recreated on restart (unless `agent.skipBootstrap: false`).
- **Model refs must use `provider/model` format**: `anthropic/claude-sonnet-4-6` is correct; `claude-sonnet-4-6` alone will fail to resolve.
- **Pairing codes are one-time**: Once a sender approves a pairing code, they're added to the allow store. Deleting the pairing file doesn't revoke approval.
- **Group mention patterns are regex**: `mentionPatterns: ["@openclaw"]` is a regex pattern, not a literal string. Escape special chars: `["@openclaw\\b"]` for word boundary.
- **Sandbox mode requires Docker**: `sandbox.mode: "all"` or `"non-main"` requires Docker to be installed and running. Without it, the Gateway logs warnings and falls back to local execution.
- **Skills must be installed before use**: Skills from ClawHub are installed into the workspace with `openclaw skills install <slug>`. Workspace skills live in `<workspace>/skills/`.
- **Tool deny always wins**: If a tool is in both `allow` and `deny`, it's denied. Use `deny: []` to clear denials.
- **Session reset is destructive**: `session.reset.mode: "daily"` clears conversation history at the specified hour. Set `mode: "off"` to disable.

## Verification checklist

Before submitting work with OpenClaw:

- [ ] Gateway is running: `openclaw gateway status` shows "running"
- [ ] Config is valid: `openclaw doctor` shows no errors
- [ ] Channels are connected: `openclaw channels list` shows enabled channels
- [ ] Test message works: Send a message from a connected channel and receive a reply
- [ ] Logs are clean: `openclaw logs --limit 50` shows no ERROR or WARN entries
- [ ] Auth is set: `gateway.auth.token` or `gateway.auth.password` is configured
- [ ] Workspace exists: `~/.openclaw/workspace/` contains bootstrap files (AGENTS.md, SOUL.md, etc.)
- [ ] Model is available: `openclaw models status` shows the configured model as "ok"
- [ ] Tools are accessible: `openclaw config get tools.allow` matches your intended allowlist
- [ ] Multi-agent bindings (if used): `openclaw agents bindings` shows correct channel mappings

## Resources

- **Full documentation**: https://docs.openclaw.ai/llms.txt (comprehensive page-by-page navigation)
- **Configuration reference**: https://docs.openclaw.ai/gateway/configuration-reference
- **CLI reference**: https://docs.openclaw.ai/cli/index
- **Channels setup**: https://docs.openclaw.ai/channels (platform-specific guides)

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt