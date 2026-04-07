---
name: Clawdbot
description: Use when deploying, configuring, or managing a self-hosted AI agent gateway that connects to multiple messaging channels (Discord, Slack, Telegram, WhatsApp, etc.), setting up agents with tools and skills, managing sessions and routing, or troubleshooting gateway operations.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw Skill Reference

## Product summary

OpenClaw is a self-hosted, multi-channel gateway for AI agents that runs on any OS (macOS, Linux, Windows). It connects messaging platforms (Discord, Slack, Telegram, WhatsApp, iMessage, Signal, Matrix, and 15+ others) to an embedded agent runtime with tool support, session management, and multi-agent routing. Agents access tools like browser automation, code execution, web search, file I/O, and media generation. The Gateway runs as a single process on port 18789 (default) and exposes WebSocket RPC, HTTP APIs (OpenAI-compatible), and a web Control UI. Key files: `~/.openclaw/openclaw.json` (config), `~/.openclaw/workspace/` (agent workspace), `~/.openclaw/agents/` (sessions). Primary CLI: `openclaw` with subcommands for setup, channels, agents, models, cron, and gateway management. See [https://docs.openclaw.ai](https://docs.openclaw.ai) for full documentation.

## When to use

Reach for this skill when:
- **Deploying OpenClaw**: installing, onboarding, or setting up the gateway service on a new machine
- **Configuring channels**: connecting WhatsApp, Telegram, Discord, Slack, or other messaging platforms
- **Managing agents**: creating isolated agents, setting workspaces, configuring routing, or managing sessions
- **Troubleshooting**: diagnosing gateway health, channel connectivity, auth issues, or config validation errors
- **Tuning performance**: adjusting models, tool policies, sandboxing, cron jobs, or session behavior
- **Extending capabilities**: installing plugins, skills, or custom tools; managing model providers
- **Operating the gateway**: restarting, updating, checking logs, or managing the service lifecycle

## Quick reference

### Essential CLI commands

| Task | Command |
|------|---------|
| **Setup & onboarding** | `openclaw onboard --install-daemon` |
| **Check gateway status** | `openclaw gateway status` |
| **Open Control UI** | `openclaw dashboard` |
| **View config** | `openclaw config get <path>` |
| **Edit config** | `openclaw config set <path> <value>` |
| **Validate config** | `openclaw config validate` |
| **View logs** | `openclaw logs --follow` |
| **List channels** | `openclaw channels list` |
| **Add channel** | `openclaw channels add --channel telegram --token <token>` |
| **List agents** | `openclaw agents list` |
| **Add agent** | `openclaw agents add <name> --workspace <dir>` |
| **List models** | `openclaw models list` |
| **Set model** | `openclaw models set anthropic/claude-sonnet-4-6` |
| **Run diagnostics** | `openclaw doctor` |
| **Repair config** | `openclaw doctor --fix` |

### Config file locations

- **Main config**: `~/.openclaw/openclaw.json` (JSON5 format)
- **Agent workspace**: `~/.openclaw/workspace/` (default; contains AGENTS.md, SOUL.md, TOOLS.md, BOOTSTRAP.md, IDENTITY.md, USER.md)
- **Sessions**: `~/.openclaw/agents/<agentId>/sessions/<sessionId>.jsonl`
- **State directory**: `~/.openclaw/` (logs, cache, plugins, skills)
- **Dev profile**: `~/.openclaw-dev/` (when using `--dev` flag)

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

### Gateway startup

```bash
# Start gateway (foreground)
openclaw gateway --port 18789

# Start as service
openclaw gateway install
openclaw gateway start

# Check service status
openclaw gateway status
openclaw logs --follow
```

### Channel setup pattern

All channels follow the same DM policy pattern:

```json5
{
  channels: {
    <provider>: {
      enabled: true,
      // auth fields vary by provider (token, botToken, serviceAccount, etc.)
      dmPolicy: "pairing",  // pairing | allowlist | open | disabled
      allowFrom: ["id1", "id2"],
      groups: { "*": { requireMention: true } }
    }
  }
}
```

## Decision guidance

| Scenario | Choice | Why |
|----------|--------|-----|
| **First-time setup** | `openclaw onboard` | Interactive wizard handles all config, auth, and service installation |
| **Editing one config field** | `openclaw config set <path> <value>` | Faster than editing JSON directly; validates immediately |
| **Editing multiple fields** | Direct edit `~/.openclaw/openclaw.json` | Batch changes; watch file auto-reloads (hybrid mode) |
| **Validating config** | `openclaw config validate` | Catches schema errors before gateway restart |
| **Debugging config issues** | `openclaw doctor` | Scans config, state, and service for common problems |
| **Repairing config** | `openclaw doctor --fix` | Auto-fixes safe issues (permissions, migrations, defaults) |
| **Single agent** | Use default `main` agent | Simplest; no routing needed |
| **Multiple agents** | `agents.list[]` + `bindings[]` | Isolate workspaces, sessions, and routing per agent |
| **DM safety** | `dmPolicy: "pairing"` | Default; unknown senders get one-time approval code |
| **Open DMs** | `dmPolicy: "open"` + `allowFrom: ["*"]` | Risky; only for public bots |
| **Group mention gating** | `requireMention: true` + `mentionPatterns` | Prevent spam; require @-mention or text pattern |
| **Sandboxing** | `sandbox.mode: "non-main"` | Isolate non-main sessions in Docker containers |
| **Hot reload** | `gateway.reload.mode: "hybrid"` (default) | Auto-applies safe changes; restarts when needed |
| **Manual restart** | `gateway.reload.mode: "off"` | For strict control; you handle restarts |

## Workflow

### Typical deployment task

1. **Install OpenClaw**
   ```bash
   curl -fsSL https://openclaw.ai/install.sh | bash
   ```

2. **Run onboarding**
   ```bash
   openclaw onboard --install-daemon
   ```
   - Choose model provider (Anthropic, OpenAI, etc.)
   - Enter API key
   - Configure gateway port and auth
   - Set up first channel (optional)
   - Install as service

3. **Verify gateway is running**
   ```bash
   openclaw gateway status
   openclaw health
   ```

4. **Open Control UI**
   ```bash
   openclaw dashboard
   ```
   - Send test message in WebChat
   - Verify agent responds

5. **Add channels** (if not done in onboarding)
   ```bash
   openclaw channels add --channel telegram --token <bot-token>
   openclaw channels status --probe
   ```

6. **Configure DM safety**
   ```bash
   openclaw config set channels.whatsapp.allowFrom '["<your-number>"]'
   openclaw config set channels.whatsapp.dmPolicy pairing
   ```

7. **Test end-to-end**
   - Send message from phone/desktop client
   - Verify response in Control UI logs
   - Check `openclaw logs --follow` for errors

8. **Adjust config as needed**
   - Edit `~/.openclaw/openclaw.json` directly
   - Or use `openclaw config set`
   - Gateway auto-reloads (hybrid mode)

### Troubleshooting workflow

1. **Check gateway health**
   ```bash
   openclaw status --deep
   openclaw health --verbose
   ```

2. **Validate config**
   ```bash
   openclaw config validate
   openclaw doctor
   ```

3. **Review logs**
   ```bash
   openclaw logs --follow
   openclaw logs --limit 500 | grep -i error
   ```

4. **Probe channels**
   ```bash
   openclaw channels status --probe
   ```

5. **Check service status**
   ```bash
   openclaw gateway status --deep
   ```

6. **Repair if needed**
   ```bash
   openclaw doctor --fix
   openclaw gateway restart
   ```

## Common gotchas

- **Config validation is strict**: Unknown keys or malformed types cause the gateway to refuse startup. Run `openclaw doctor` to see exact issues.
- **Workspace must exist**: `agents.defaults.workspace` must point to a valid directory. Use `openclaw setup` to initialize it.
- **DM policy defaults to pairing**: Unknown senders get a one-time code to approve. Set `dmPolicy: "allowlist"` + `allowFrom` to restrict to known numbers.
- **Group messages require mention by default**: Set `requireMention: false` in `channels.<provider>.groups` to allow all group messages.
- **Model refs use provider/model format**: `anthropic/claude-sonnet-4-6`, not just `claude-sonnet-4-6`. Omitting the provider falls back to defaults.
- **Sessions are per-scope**: Default `dmScope: "main"` shares one session across all DMs. Use `per-peer` or `per-channel-peer` for multi-user isolation.
- **Hot reload doesn't restart for all changes**: Gateway server config (port, bind, auth) requires manual restart. Use `gateway.reload.mode: "hybrid"` (default) for auto-restart on critical changes.
- **Plugins require gateway restart**: Installing or enabling plugins needs `openclaw gateway restart`.
- **Skills are loaded at startup**: Adding skills to `~/.openclaw/skills/` requires gateway restart.
- **SecretRef fields don't support inline env vars**: Use `source: "env"` in SecretRef objects, not `${VAR}` substitution, for sensitive fields.
- **Cron jobs run in isolated sessions**: They don't share the main agent session; use `sessionRetention` to control cleanup.
- **Browser tool needs Chromium**: Install via `openclaw browser start` or configure a custom CDP URL.
- **Sandboxing requires Docker**: `sandbox.mode: "non-main"` needs Docker running and the sandbox image built.

## Verification checklist

Before considering a deployment or config change complete:

- [ ] Gateway is running: `openclaw gateway status` shows `Runtime: running`
- [ ] Config is valid: `openclaw config validate` passes with no errors
- [ ] Channels are healthy: `openclaw channels status --probe` shows all accounts reachable
- [ ] Agent responds: Send test message via Control UI or channel; verify response in logs
- [ ] Logs are clean: `openclaw logs --limit 100` shows no `ERROR` or `FATAL` entries
- [ ] Service is installed (if needed): `openclaw gateway status` shows service is enabled/running
- [ ] Workspace exists: `ls ~/.openclaw/workspace/` shows AGENTS.md, SOUL.md, etc.
- [ ] Models are configured: `openclaw models status` shows primary model and auth status
- [ ] DM policy is set: `openclaw config get channels.<provider>.dmPolicy` returns expected value
- [ ] No pending restarts: `openclaw gateway status` shows no "restart pending" message

## Resources

- **Full documentation**: [https://docs.openclaw.ai/llms.txt](https://docs.openclaw.ai/llms.txt) — comprehensive page-by-page navigation for agents
- **Getting Started**: [https://docs.openclaw.ai/start/getting-started](https://docs.openclaw.ai/start/getting-started) — installation and first-run walkthrough
- **Configuration Reference**: [https://docs.openclaw.ai/gateway/configuration-reference](https://docs.openclaw.ai/gateway/configuration-reference) — complete field-by-field config guide
- **Gateway Runbook**: [https://docs.openclaw.ai/gateway/index](https://docs.openclaw.ai/gateway/index) — operations, lifecycle, and troubleshooting

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt