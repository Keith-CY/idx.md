---
name: Clawdbot
description: Use when deploying a self-hosted multi-channel AI agent gateway, configuring messaging channels (WhatsApp, Telegram, Discord, etc.), managing agent sessions and memory, setting up tools and skills, or controlling who can access the agent.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw Skill Reference

## Product summary

OpenClaw is a self-hosted gateway that connects AI agents to multiple messaging channels (Discord, WhatsApp, Telegram, Slack, Microsoft Teams, Signal, iMessage, Matrix, and more) simultaneously. Agents run on your hardware with full control over data, configuration, and routing. The gateway manages sessions, memory, tool access, and multi-agent isolation. Key files: `~/.openclaw/openclaw.json` (config), `~/.openclaw/workspace/` (agent files), `~/.openclaw/agents/` (sessions). Primary CLI: `openclaw`. Full docs: https://docs.openclaw.ai

## When to use

Reach for this skill when:
- **Deploying or configuring a gateway**: setting up the service, choosing ports, enabling TLS, or managing authentication
- **Connecting messaging channels**: adding WhatsApp, Telegram, Discord, Slack, or other channels; controlling DM/group access policies
- **Managing agent behavior**: configuring system prompts, memory, sessions, sandboxing, or multi-agent routing
- **Setting up tools and skills**: allowing/denying tools, installing skills, configuring tool policies per agent
- **Troubleshooting**: diagnosing channel health, session issues, config validation, or service startup failures
- **Automating workflows**: setting up cron jobs, hooks, webhooks, or task flows
- **Securing access**: managing pairing codes, allowlists, group mention gating, or role-based permissions

## Quick reference

### Essential CLI commands

| Task | Command |
|------|---------|
| Initial setup | `openclaw onboard --install-daemon` |
| Check status | `openclaw status` or `openclaw health` |
| Open dashboard | `openclaw dashboard` |
| View config | `openclaw config get <path>` |
| Update config | `openclaw config set <path> <value>` |
| Validate config | `openclaw config validate` |
| Diagnose issues | `openclaw doctor` |
| Manage gateway service | `openclaw gateway status\|start\|stop\|restart` |
| List channels | `openclaw channels list` |
| Add a channel | `openclaw channels add --channel telegram --token <token>` |
| View logs | `openclaw logs --follow` |
| Manage agents | `openclaw agents list\|add\|delete` |
| Send a message | `openclaw message send --target +15555550123 --message "Hi"` |

### Config file structure

```json5
{
  // Agent workspace and defaults
  agents: {
    defaults: {
      workspace: "~/.openclaw/workspace",
      model: { primary: "anthropic/claude-sonnet-4-6" },
      skills: ["github", "web-search"],
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
    }
  },

  // Gateway server
  gateway: {
    port: 18789,
    bind: "loopback",
    auth: { token: "..." },
    reload: { mode: "hybrid" }
  },

  // Tool access control
  tools: {
    profile: "coding",
    allow: ["group:fs", "browser"],
    deny: ["exec"]
  },

  // Sessions and routing
  session: {
    dmScope: "per-channel-peer",
    reset: { mode: "daily", atHour: 4 }
  },

  // Automation
  cron: { enabled: true },
  hooks: { enabled: true, token: "..." }
}
```

### Key config paths

| Path | Purpose |
|------|---------|
| `agents.defaults.workspace` | Agent's working directory (required) |
| `agents.defaults.model.primary` | Default LLM model |
| `agents.defaults.skills` | Allowed skills for all agents |
| `channels.<provider>.enabled` | Enable/disable a channel |
| `channels.<provider>.allowFrom` | DM allowlist (WhatsApp: phone numbers, Telegram: user IDs) |
| `channels.<provider>.dmPolicy` | `pairing` \| `allowlist` \| `open` \| `disabled` |
| `channels.<provider>.groups` | Group chat rules (mention gating, allowlists) |
| `gateway.port` | Gateway listen port (default 18789) |
| `gateway.auth.token` | Gateway authentication token |
| `tools.profile` | Base tool allowlist: `full` \| `coding` \| `messaging` \| `minimal` |
| `tools.allow` / `tools.deny` | Tool access control lists |
| `session.dmScope` | Session isolation: `main` \| `per-peer` \| `per-channel-peer` |

## Decision guidance

### When to use which DM policy

| Policy | Use when | Behavior |
|--------|----------|----------|
| `pairing` | First-time users, public bot | Unknown senders get a one-time pairing code to approve |
| `allowlist` | Private/trusted users | Only senders in `allowFrom` can message |
| `open` | Public/unrestricted | All DMs allowed (requires `allowFrom: ["*"]`) |
| `disabled` | No DM support needed | Ignore all DMs |

### When to use which tool profile

| Profile | Use when | Includes |
|---------|----------|----------|
| `full` | Unrestricted agent | All tools |
| `coding` | Development/automation | File I/O, exec, browser, web, sessions, media |
| `messaging` | Chat-only agent | Message sending, session status only |
| `minimal` | Locked-down agent | Session status only |

### When to use which session scope

| Scope | Use when | Behavior |
|-------|----------|----------|
| `main` | Single shared conversation | All users share one session |
| `per-peer` | Multi-user, isolated chats | Each user gets their own session |
| `per-channel-peer` | Multi-channel, isolated chats | Each user per channel gets their own session |
| `per-account-channel-peer` | Multi-account channels | Each user per account per channel gets their own session |

### When to use sandboxing

| Mode | Use when | Behavior |
|------|----------|----------|
| `off` | Trusted agents, local use | No isolation |
| `non-main` | Mixed trust | Main agent unrestricted; other agents isolated |
| `all` | Untrusted agents, production | All agents isolated |

## Workflow

### 1. Initial setup and onboarding
1. Install: `npm install -g openclaw@latest` or use the install script
2. Run onboarding: `openclaw onboard --install-daemon`
3. Choose a model provider (Anthropic, OpenAI, etc.) and enter API key
4. Verify: `openclaw gateway status` and `openclaw dashboard`
5. Send a test message in the Control UI

### 2. Connect a messaging channel
1. Choose a channel (Telegram is fastest to set up)
2. Get credentials (bot token, service account, etc.)
3. Add the channel: `openclaw channels add --channel telegram --token <token>`
4. Set access policy: `openclaw config set channels.telegram.dmPolicy allowlist`
5. Set allowlist: `openclaw config set channels.telegram.allowFrom '["tg:123"]'`
6. Verify: `openclaw channels status --probe`

### 3. Configure agent behavior
1. Read the workspace files: `AGENTS.md`, `SOUL.md`, `TOOLS.md`, `USER.md`
2. Edit `AGENTS.md` to set operating instructions
3. Edit `SOUL.md` to define persona and boundaries
4. Edit `TOOLS.md` to document tool usage conventions
5. Restart the gateway: `openclaw gateway restart`

### 4. Set up tools and skills
1. List available skills: `openclaw skills list`
2. Install a skill: `openclaw skills install github`
3. Configure tool access: `openclaw config set tools.profile coding`
4. Restrict specific tools: `openclaw config set tools.deny '["exec"]'`
5. Verify: `openclaw skills check`

### 5. Set up multi-agent routing
1. Add a new agent: `openclaw agents add work --workspace ~/.openclaw/workspace-work`
2. Bind the agent to a channel: `openclaw agents bind --agent work --bind telegram:work`
3. Verify bindings: `openclaw agents bindings`
4. Test: send a message to the work channel and verify it routes to the work agent

### 6. Troubleshoot issues
1. Check gateway health: `openclaw health --verbose`
2. View logs: `openclaw logs --follow`
3. Run diagnostics: `openclaw doctor`
4. Validate config: `openclaw config validate`
5. Check channel status: `openclaw channels status --probe`
6. Inspect a session: `openclaw sessions list --verbose`

## Common gotchas

- **Config validation fails on startup**: Run `openclaw doctor --fix` to auto-repair common issues. Check `~/.openclaw/openclaw.json` for syntax errors (JSON5 is strict about trailing commas in some contexts).
- **Channel not receiving messages**: Verify `dmPolicy` is not `disabled`, check `allowFrom` includes the sender, and run `openclaw channels status --probe` to test connectivity.
- **Agent doesn't respond in groups**: Ensure `requireMention: true` is set and the mention pattern matches (e.g., `@openclaw` or `openclaw`). Check `mentionPatterns` in config.
- **Tool calls fail silently**: Verify the tool is in the allow list (`openclaw config get tools.allow`). Check `tools.profile` is not `minimal`. Run `openclaw skills check` to confirm skill requirements are met.
- **Session isolation not working**: Verify `session.dmScope` is set correctly (not `main`). Check that agents are bound to the right channels via `openclaw agents bindings`.
- **Config hot reload not applying changes**: Some changes (gateway port, TLS, plugins) require a manual restart. Check logs for "restart needed" warnings. Use `openclaw gateway restart` to force a restart.
- **Pairing code not working**: Pairing codes are one-time use. If rejected, request a new code. Verify the sender's ID matches the format expected by the channel (phone number for WhatsApp, user ID for Telegram).
- **Memory/sessions not persisting**: Sessions are stored in `~/.openclaw/agents/<agentId>/sessions/`. Verify the workspace directory exists and is writable. Check `session.reset` config to ensure sessions aren't being auto-cleared.
- **Multi-agent routing not working**: Verify bindings with `openclaw agents bindings`. Check that the agent workspace exists. Ensure the channel account ID matches the binding (e.g., `telegram:work`).
- **Secrets/API keys not loading**: Use `openclaw secrets audit` to check for unresolved SecretRefs. Verify env vars are set or files exist. Use `openclaw config set --dry-run` to validate before writing.

## Verification checklist

Before deploying or submitting changes:

- [ ] Config validates: `openclaw config validate` returns no errors
- [ ] Gateway starts: `openclaw gateway status` shows "running"
- [ ] Dashboard loads: `openclaw dashboard` opens in browser
- [ ] Channels are healthy: `openclaw channels status --probe` shows all channels connected
- [ ] Test message works: Send a message in the Control UI and receive a response
- [ ] Agent workspace exists: `ls ~/.openclaw/workspace/` shows `AGENTS.md`, `SOUL.md`, etc.
- [ ] Tools are accessible: `openclaw skills check` shows no missing requirements
- [ ] Sessions persist: `openclaw sessions list` shows active sessions
- [ ] Logs are clean: `openclaw logs --limit 50` shows no ERROR or FATAL entries
- [ ] Multi-agent bindings correct: `openclaw agents bindings` matches intended routing
- [ ] Access policies enforced: Test that blocked senders cannot message the bot
- [ ] Secrets are not exposed: `openclaw config get` does not print plaintext API keys (should show `***` or SecretRef objects)

## Resources

- **Full documentation**: https://docs.openclaw.ai/llms.txt (comprehensive page-by-page navigation)
- **Configuration reference**: https://docs.openclaw.ai/gateway/configuration-reference
- **Channel setup guides**: https://docs.openclaw.ai/channels (WhatsApp, Telegram, Discord, Slack, Teams, Signal, iMessage, Matrix, and more)
- **CLI reference**: https://docs.openclaw.ai/cli/index
- **Troubleshooting**: https://docs.openclaw.ai/gateway/troubleshooting

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt