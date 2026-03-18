---
name: Clawdbot
description: Use when setting up, configuring, or troubleshooting OpenClaw — a self-hosted multi-channel gateway for AI agents. Reach for this skill when agents need to understand agent configuration, channel setup, session management, tool usage, CLI commands, or deployment patterns.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw Skill

## Product summary

OpenClaw is a self-hosted multi-channel gateway that connects messaging apps (WhatsApp, Telegram, Discord, Slack, Signal, iMessage, and more) to an embedded AI agent runtime. It runs on any OS (macOS, Linux, Windows, Raspberry Pi) and manages sessions, tools, skills, and multi-agent routing from a single Gateway process. The primary entry point is the CLI (`openclaw` command) or the Control UI (browser dashboard at `http://127.0.0.1:18789`). Key files: `~/.openclaw/openclaw.json` (config), `~/.openclaw/workspace/` (agent workspace with AGENTS.md, SOUL.md, TOOLS.md, BOOTSTRAP.md, IDENTITY.md, USER.md), `~/.openclaw/agents/<agentId>/sessions/` (session transcripts). See the full docs at https://docs.openclaw.ai.

## When to use

Use this skill when:
- **Setting up OpenClaw**: installing, onboarding, configuring the Gateway, or initializing workspaces
- **Connecting channels**: adding WhatsApp, Telegram, Discord, Slack, or other messaging platforms
- **Configuring agents**: setting models, tools, skills, system prompts, or multi-agent routing
- **Managing sessions**: understanding session scoping, memory, compaction, or resetting conversations
- **Troubleshooting**: diagnosing channel issues, auth failures, config validation errors, or agent timeouts
- **Deploying**: running the Gateway as a service, on remote hosts, or in Docker/Kubernetes
- **Extending**: creating skills, plugins, hooks, or custom tools
- **Automating**: setting up cron jobs, webhooks, heartbeats, or event-driven workflows

## Quick reference

### Essential CLI commands

| Task | Command |
|------|---------|
| First-time setup | `openclaw onboard --install-daemon` |
| Open dashboard | `openclaw dashboard` |
| Check status | `openclaw status` or `openclaw health` |
| View logs | `openclaw logs --follow` |
| Edit config | `openclaw configure` or `openclaw config set <path> <value>` |
| Add channel | `openclaw channels add --channel <name>` |
| List skills | `openclaw skills list --eligible` |
| Run agent turn | `openclaw agent --message "text" --to <dest>` |
| Manage sessions | `openclaw sessions` |
| Run cron job | `openclaw cron add --name <name> --every <duration> --message <text>` |
| Validate config | `openclaw config validate` |
| Diagnose issues | `openclaw doctor` or `openclaw doctor --fix` |

### Config file locations

| Path | Purpose |
|------|---------|
| `~/.openclaw/openclaw.json` | Main config (JSON5 format) |
| `~/.openclaw/workspace/` | Default agent workspace |
| `~/.openclaw/agents/<agentId>/sessions/` | Session transcripts (JSONL) |
| `~/.openclaw/skills/` | Managed/local skills (override bundled) |
| `<workspace>/skills/` | Workspace-specific skills (highest precedence) |
| `~/.openclaw/.env` | Global environment variables |

### Config structure (minimal)

```json5
{
  agents: {
    defaults: {
      workspace: "~/.openclaw/workspace",
      model: { primary: "anthropic/claude-sonnet-4-5" },
    },
  },
  channels: {
    whatsapp: {
      enabled: true,
      allowFrom: ["+15555550123"],
    },
  },
  gateway: {
    port: 18789,
  },
}
```

### Bootstrap files (injected into agent context)

| File | Purpose |
|------|---------|
| `AGENTS.md` | Operating instructions + memory |
| `SOUL.md` | Persona, boundaries, tone |
| `TOOLS.md` | User-maintained tool notes |
| `BOOTSTRAP.md` | One-time first-run ritual (deleted after) |
| `IDENTITY.md` | Agent name/vibe/emoji |
| `USER.md` | User profile + preferred address |

### Key environment variables

| Variable | Purpose |
|----------|---------|
| `OPENCLAW_HOME` | Home directory for path resolution |
| `OPENCLAW_STATE_DIR` | Override state directory |
| `OPENCLAW_CONFIG_PATH` | Override config file path |
| `OPENCLAW_GATEWAY_TOKEN` | Gateway auth token |
| `OPENCLAW_GATEWAY_PASSWORD` | Gateway auth password |
| `OPENCLAW_LOAD_SHELL_ENV` | Import missing env vars from login shell |

## Decision guidance

### When to use X vs Y

| Decision | Use X when | Use Y when |
|----------|-----------|-----------|
| **DM policy** | `pairing` (default) | Unknown senders need approval | `allowlist` | Only trusted senders | `open` | Allow all (requires `allowFrom: ["*"]`) |
| **Session scope** | `per-peer` | Each sender gets isolated session | `per-channel-peer` | Sender + channel combo | `main` | Shared session across all senders |
| **Sandbox mode** | `off` | Trust the agent, no isolation | `non-main` | Sandbox only non-main sessions | `all` | Always sandbox |
| **Queue mode** | `steer` | Inject queued messages mid-turn | `followup` | Queue until turn ends | `collect` | Batch multiple messages |
| **Config reload** | `hybrid` (default) | Auto-restart on critical changes | `hot` | Manual restart when needed | `restart` | Always restart on any change |
| **Skill location** | Workspace `skills/` | Agent-specific skills | `~/.openclaw/skills/` | Shared across all agents | Bundled | Shipped with install |

## Workflow

### 1. Initial setup

1. **Install**: `npm install -g openclaw@latest` or use the install script
2. **Onboard**: `openclaw onboard --install-daemon` (interactive wizard)
3. **Verify**: `openclaw gateway status` (check service is running)
4. **Open UI**: `openclaw dashboard` (browser at `http://127.0.0.1:18789`)

### 2. Configure a channel

1. **Choose channel**: WhatsApp, Telegram, Discord, Slack, Signal, iMessage, Google Chat, Mattermost, MS Teams
2. **Get credentials**: API token, bot token, or QR code (channel-specific)
3. **Add channel**: `openclaw channels add --channel <name>` (interactive) or use Control UI
4. **Set DM policy**: `dmPolicy: "pairing"` (default) or `"allowlist"` or `"open"`
5. **Test**: Send a message to the bot; if pairing, approve the code

### 3. Customize agent behavior

1. **Edit workspace files**: `~/.openclaw/workspace/AGENTS.md`, `SOUL.md`, `TOOLS.md`, `USER.md`
2. **Set model**: `openclaw config set agents.defaults.model.primary anthropic/claude-sonnet-4-5`
3. **Add skills**: `clawhub install <skill-slug>` or place in `<workspace>/skills/`
4. **Configure tools**: Enable/disable in config under `tools.*`
5. **Test**: Send a message and check the response

### 4. Manage sessions

1. **View sessions**: `openclaw sessions` (list all)
2. **Reset session**: `/new` in chat (starts fresh conversation)
3. **Check memory**: `openclaw memory search "<query>"` (semantic search)
4. **Prune old sessions**: Configure `session.reset.mode` (daily/idle/manual)

### 5. Troubleshoot

1. **Check status**: `openclaw status --deep` (probes channels)
2. **View logs**: `openclaw logs --follow` (real-time)
3. **Validate config**: `openclaw config validate` (schema check)
4. **Run doctor**: `openclaw doctor --fix` (auto-repair common issues)
5. **Check channel health**: `openclaw channels status --probe`

### 6. Deploy to production

1. **Choose hosting**: VPS, Kubernetes, Docker, Fly.io, Railway, Render, Hetzner, GCP, DigitalOcean, Oracle, Raspberry Pi
2. **Set up remote access**: Tailscale (`gateway.tailscale: "serve"`) or SSH tunnel
3. **Enable auth**: `gateway.auth.token` or `gateway.auth.password` (SecretRef for production)
4. **Configure TLS**: `gateway.tls.*` for HTTPS
5. **Monitor**: Set up logging, health checks, and alerting

## Common gotchas

- **Config validation fails on startup**: Run `openclaw doctor --fix` to auto-repair. Unknown keys, malformed types, or invalid values cause the Gateway to refuse to start.
- **DMs ignored after setup**: Check `dmPolicy` (default `pairing` requires approval). Verify sender is in `allowFrom` if using `allowlist`. Run `openclaw pairing list` to see pending approvals.
- **Group messages not triggering**: Groups default to `requireMention: true`. Configure `mentionPatterns` per agent (e.g., `["@openclaw", "openclaw"]`). Check that the bot is in the group and the mention pattern matches.
- **Agent timeout or no reply**: Check `agents.defaults.timeoutSeconds` (default 600s). Verify model is configured and API key is valid. Run `openclaw models status --probe` to test auth.
- **Session file corruption**: Sessions are JSONL files. If a session fails to load, check file permissions and format. Use `openclaw sessions` to list and `openclaw reset --scope config+creds+sessions` to clear if needed.
- **Skills not appearing in agent prompt**: Verify skill is in one of three locations (bundled, `~/.openclaw/skills/`, or `<workspace>/skills/`). Check `metadata.openclaw.requires` (bins, env, config gates). Run `openclaw skills list --eligible` to see ready skills.
- **Channel keeps restarting**: Check `gateway.channelHealthCheckMinutes` and `channelStaleEventThresholdMinutes`. Disable auto-restart with `channels.<provider>.healthMonitor.enabled: false` if needed.
- **Config hot reload not working**: Ensure `gateway.reload.mode` is not `off`. Check file permissions on `~/.openclaw/openclaw.json`. Restart manually if needed: `openclaw gateway restart`.
- **Multi-agent routing not working**: Verify `bindings` array matches channel/account. Check `agents.list[].id` and `agents.list[].workspace` are set. Use `openclaw agents bindings --json` to debug.
- **Sandbox container fails to start**: Run `scripts/sandbox-setup.sh` to build the image. Check Docker is running. Verify `agents.defaults.sandbox.mode` is not `off`.
- **Memory search returns no results**: Ensure `workspace.dir` is configured. Run `openclaw memory index` to reindex. Check `MEMORY.md` and `memory/*.md` files exist in workspace.

## Verification checklist

Before submitting work with OpenClaw:

- [ ] Config validates: `openclaw config validate` (no errors)
- [ ] Gateway is running: `openclaw gateway status` shows "running"
- [ ] Channels are healthy: `openclaw channels status --probe` (all green)
- [ ] Agent responds: Send a test message and verify reply
- [ ] Sessions persist: Check `openclaw sessions` lists the conversation
- [ ] Skills are eligible: `openclaw skills list --eligible` shows expected skills
- [ ] Auth is valid: `openclaw models status --probe` succeeds
- [ ] No config warnings: `openclaw doctor` reports no issues
- [ ] Logs are clean: `openclaw logs --follow` shows no errors during a test run
- [ ] Workspace files exist: `ls ~/.openclaw/workspace/` shows AGENTS.md, SOUL.md, etc.

## Resources

- **Full docs navigation**: https://docs.openclaw.ai/llms.txt (comprehensive page-by-page listing for agents)
- **Configuration reference**: https://docs.openclaw.ai/gateway/configuration-reference (all config fields)
- **CLI reference**: https://docs.openclaw.ai/cli/index (all commands and options)
- **Agent loop**: https://docs.openclaw.ai/concepts/agent-loop (how messages become agent runs)
- **Channel setup**: https://docs.openclaw.ai/channels (WhatsApp, Telegram, Discord, etc.)
- **Skills and tools**: https://docs.openclaw.ai/tools/skills (how to add and gate skills)
- **Troubleshooting**: https://docs.openclaw.ai/help/troubleshooting (common fixes)

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt