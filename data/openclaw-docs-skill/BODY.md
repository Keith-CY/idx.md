---
name: Clawdbot
description: Use when setting up, configuring, or troubleshooting a self-hosted AI agent gateway that connects messaging apps (WhatsApp, Telegram, Discord, iMessage) to LLM models. Reach for this skill when agents need to manage channels, configure models, create skills, handle sessions, or debug gateway issues.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw Skill

OpenClaw is a self-hosted gateway that connects messaging apps (WhatsApp, Telegram, Discord, iMessage, and more) to AI agents. It runs a single embedded agent runtime with multi-channel support, session management, and extensible tools.

## Product summary

OpenClaw is a multi-channel AI agent gateway for any OS. It bridges chat apps to LLM models with built-in session management, tool execution, and multi-agent routing. The primary config file is `~/.openclaw/openclaw.json` (JSON5 format). Key CLI commands: `openclaw onboard` (setup), `openclaw gateway` (service control), `openclaw config` (config management), `openclaw agent` (run a turn), `openclaw channels` (manage messaging accounts), `openclaw models` (model/auth setup). The agent workspace lives at `~/.openclaw/workspace` by default and contains bootstrap files (`AGENTS.md`, `SOUL.md`, `TOOLS.md`, `USER.md`, `IDENTITY.md`, `BOOTSTRAP.md`) that are injected into every session. See the full docs at https://docs.openclaw.ai.

## When to use

Reach for this skill when:
- **Setting up OpenClaw**: installing, running onboarding, initializing the gateway service
- **Configuring channels**: connecting WhatsApp, Telegram, Discord, Slack, Signal, iMessage, or other messaging platforms
- **Managing models and auth**: setting up model providers (Anthropic, OpenAI, Google, etc.), handling API keys, OAuth flows, and fallback models
- **Creating or updating skills**: building custom capabilities via `SKILL.md` files in the workspace
- **Managing sessions and memory**: understanding session routing, transcript persistence, context limits, and compaction
- **Troubleshooting**: diagnosing channel issues, config validation errors, auth failures, or gateway health problems
- **Multi-agent routing**: setting up isolated agents with separate workspaces and channel bindings
- **Automation**: configuring cron jobs, heartbeat, webhooks, or hooks for event-driven workflows

## Quick reference

### Essential CLI commands

| Task | Command |
|------|---------|
| Initial setup | `openclaw onboard --install-daemon` |
| Check gateway status | `openclaw gateway status` |
| Open dashboard | `openclaw dashboard` |
| View/edit config | `openclaw config get <path>` / `openclaw config set <path> <value>` |
| Run one agent turn | `openclaw agent --message "text"` |
| List channels | `openclaw channels list` |
| Add a channel | `openclaw channels add --channel telegram --token <token>` |
| List models | `openclaw models list` |
| Set default model | `openclaw models set anthropic/claude-opus-4-6` |
| List skills | `openclaw skills list` |
| Validate config | `openclaw config validate` |
| Diagnose issues | `openclaw doctor` |
| View logs | `openclaw logs --follow` |

### Config file structure

```json5
{
  // Agent workspace and defaults
  agents: {
    defaults: {
      workspace: "~/.openclaw/workspace",
      model: { primary: "anthropic/claude-opus-4-6" },
      sandbox: { mode: "off" }
    },
    list: [
      { id: "main", default: true, workspace: "~/.openclaw/workspace" }
    ]
  },
  
  // Messaging channels
  channels: {
    whatsapp: {
      enabled: true,
      allowFrom: ["+15555550123"],
      dmPolicy: "pairing"
    },
    telegram: {
      enabled: true,
      botToken: "123:abc",
      dmPolicy: "pairing"
    }
  },
  
  // Gateway server
  gateway: {
    port: 18789,
    bind: "loopback",
    auth: { token: "secret" }
  }
}
```

### Bootstrap files (injected into every session)

| File | Purpose |
|------|---------|
| `AGENTS.md` | Operating instructions and memory |
| `SOUL.md` | Persona, boundaries, tone |
| `TOOLS.md` | User-maintained tool notes and conventions |
| `USER.md` | User profile and preferred address |
| `IDENTITY.md` | Agent name, vibe, emoji |
| `BOOTSTRAP.md` | One-time first-run ritual (deleted after completion) |

### Skill structure

Create a skill at `~/.openclaw/workspace/skills/<skill-name>/SKILL.md`:

```markdown
---
name: my_skill
description: What this skill does
---

# My Skill

Instructions for the agent on how to use this skill.
When the user asks for X, use the Y tool to do Z.
```

## Decision guidance

### When to use pairing vs allowlist vs open DM policy

| Policy | Use when | Behavior |
|--------|----------|----------|
| `pairing` | You want to approve new senders one-time | Unknown senders get a pairing code to approve |
| `allowlist` | You have a fixed set of approved senders | Only senders in `allowFrom` can message |
| `open` | You want to accept all DMs (risky) | All inbound DMs are accepted; requires `allowFrom: ["*"]` |
| `disabled` | You want to block all DMs | Ignore all DMs |

### When to use per-agent vs single-agent setup

| Approach | Use when |
|----------|----------|
| Single agent (default) | One workspace, one set of sessions, one routing rule |
| Multi-agent | Different workspaces for different purposes (e.g., home vs work), or channel-specific agents |

### When to use hot-reload vs restart

| Mode | Use when |
|------|----------|
| `hybrid` (default) | Most changes auto-apply; critical ones auto-restart |
| `hot` | You want to see warnings and manually restart |
| `restart` | You want every change to trigger a restart |
| `off` | You manage restarts manually |

### When to use model failover

| Approach | Use when |
|----------|----------|
| Single model | One provider is reliable and sufficient |
| Primary + fallbacks | You want automatic failover if primary is down/rate-limited |
| Per-agent models | Different agents need different models |

## Workflow

### 1. Initial setup and onboarding

1. Install OpenClaw: `npm install -g openclaw@latest` or use the install script
2. Run onboarding: `openclaw onboard --install-daemon`
   - Choose a model provider (Anthropic, OpenAI, Google, etc.)
   - Provide API key or set up OAuth
   - Configure gateway port and auth
   - Optionally add channels
3. Verify the gateway: `openclaw gateway status`
4. Open the dashboard: `openclaw dashboard` (browser at http://127.0.0.1:18789)
5. Send a test message in the Control UI

### 2. Adding a messaging channel

1. Choose a channel (Telegram is fastest to set up)
2. Get the required credential (bot token, API key, etc.)
3. Add the channel: `openclaw channels add --channel telegram --token <token>`
4. Set DM policy: edit config or use `openclaw config set channels.telegram.dmPolicy pairing`
5. Test: send a message from your phone or the channel's app
6. If pairing is enabled, approve the sender: `openclaw pairing approve telegram <code>`

### 3. Creating a custom skill

1. Create the skill directory: `mkdir -p ~/.openclaw/workspace/skills/my-skill`
2. Create `SKILL.md` with YAML frontmatter and instructions
3. Optionally add helper scripts or resources in the same directory
4. Refresh skills: ask the agent to "refresh skills" or restart the gateway
5. Test: ask the agent to use your skill

### 4. Configuring models and auth

1. List available models: `openclaw models list`
2. Set the default model: `openclaw models set anthropic/claude-opus-4-6`
3. Add fallback models: `openclaw models fallbacks add openai/gpt-5.2`
4. Set up auth for a new provider: `openclaw models auth add --provider <provider>`
5. Verify auth: `openclaw models status --probe`

### 5. Troubleshooting a broken setup

1. Check gateway health: `openclaw gateway status`
2. Run diagnostics: `openclaw doctor`
3. View logs: `openclaw logs --follow`
4. Validate config: `openclaw config validate`
5. Apply auto-fixes: `openclaw doctor --fix`
6. Check channel status: `openclaw channels status --probe`
7. If config is invalid, edit `~/.openclaw/openclaw.json` directly and validate

### 6. Setting up multi-agent routing

1. Create a second workspace: `mkdir -p ~/.openclaw/workspace-work`
2. Add a new agent: `openclaw agents add work --workspace ~/.openclaw/workspace-work`
3. Create bindings to route channels to agents:
   ```json5
   {
     bindings: [
       { agentId: "main", match: { channel: "whatsapp", accountId: "personal" } },
       { agentId: "work", match: { channel: "whatsapp", accountId: "business" } }
     ]
   }
   ```
4. Verify bindings: `openclaw agents bindings --json`

## Common gotchas

- **Config validation is strict**: Unknown keys or malformed types cause the gateway to refuse to start. Run `openclaw doctor --fix` to repair.
- **Bootstrap files are injected once per session**: Changes to `AGENTS.md`, `SOUL.md`, etc. only take effect on new sessions. Use `/new` to start a fresh session.
- **Workspace is not a hard sandbox**: Relative paths resolve inside the workspace, but absolute paths can reach elsewhere on the host unless sandboxing is enabled. Set `agents.defaults.sandbox.mode: "non-main"` to isolate non-main sessions.
- **Model refs require provider prefix**: Use `provider/model` format (e.g., `anthropic/claude-opus-4-6`). Omitting the provider only works for aliases.
- **DM pairing codes are one-time**: Once approved, a sender is stored in the allow list. Pairing codes expire; don't reuse them.
- **Channel health monitoring can restart channels**: If a channel looks stale, the gateway may auto-restart it. Tune `gateway.channelHealthCheckMinutes` and `gateway.channelStaleEventThresholdMinutes` if this is disruptive.
- **Sessions are per-channel-peer by default**: DMs from the same sender across different channels create separate sessions. Use `session.dmScope: "per-peer"` to merge them.
- **Skills are loaded from three locations**: Bundled (shipped), managed (`~/.openclaw/skills`), and workspace (`<workspace>/skills`). Workspace wins on name conflict.
- **Config hot-reload has limits**: Gateway server changes (port, bind, TLS) require a restart. Most other changes hot-apply.
- **Secrets and env vars**: Use `${VAR_NAME}` syntax in config to reference env vars. SecretRef objects support `env`, `file`, and `exec` providers.
- **Group chat mention gating is on by default**: Groups require a mention to activate the agent. Set `channels.<provider>.groups."*".requireMention: false` to disable.

## Verification checklist

Before submitting work with OpenClaw:

- [ ] Gateway is running: `openclaw gateway status` shows "listening"
- [ ] Config is valid: `openclaw config validate` passes
- [ ] Channels are connected: `openclaw channels status` shows all expected channels
- [ ] Models are configured: `openclaw models status` shows the primary model and auth is valid
- [ ] Workspace files exist: `ls ~/.openclaw/workspace/{AGENTS,SOUL,TOOLS,USER,IDENTITY}.md`
- [ ] Skills are discoverable: `openclaw skills list` shows custom skills
- [ ] Test message works: send a message via the dashboard or a connected channel and get a reply
- [ ] Logs are clean: `openclaw logs --follow` shows no errors during the test
- [ ] Multi-agent bindings are correct (if applicable): `openclaw agents bindings --json` matches your routing rules
- [ ] DM policy is set: `openclaw config get channels.<channel>.dmPolicy` returns the intended policy

## Resources

- **Comprehensive page-by-page navigation**: https://docs.openclaw.ai/llms.txt
- **Getting Started guide**: https://docs.openclaw.ai/start/getting-started
- **Configuration reference**: https://docs.openclaw.ai/gateway/configuration
- **CLI reference**: https://docs.openclaw.ai/cli/index

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt