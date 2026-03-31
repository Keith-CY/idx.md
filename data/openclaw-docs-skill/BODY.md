---
name: Clawdbot
description: Use when deploying a self-hosted AI agent gateway, configuring multi-channel messaging (WhatsApp, Telegram, Discord, iMessage), managing agent workspaces and sessions, building plugins or skills, setting up automation (hooks, cron, webhooks), or troubleshooting gateway operations.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw Skill Reference

## Product Summary

OpenClaw is a self-hosted gateway that connects messaging apps (WhatsApp, Telegram, Discord, iMessage, and more) to AI agents. The Gateway runs on any OS and manages sessions, routing, tool execution, and channel delivery. Key files: `~/.openclaw/openclaw.json` (config), `~/.openclaw/workspace/` (agent workspace), `~/.openclaw/skills/` (local skills). Primary CLI: `openclaw` with subcommands for setup, config, channels, agents, sessions, and gateway management. See https://docs.openclaw.ai for full documentation.

## When to Use

Reach for this skill when:
- **Deploying or configuring OpenClaw**: setting up the Gateway, choosing models, connecting channels, managing auth
- **Building agent workspaces**: creating or editing bootstrap files (AGENTS.md, SOUL.md, TOOLS.md, IDENTITY.md, USER.md), managing sessions, configuring multi-agent routing
- **Extending functionality**: installing/building plugins, creating skills, writing hooks for automation
- **Troubleshooting**: diagnosing channel issues, session problems, config validation, health checks
- **Automating workflows**: setting up cron jobs, webhooks, event-driven hooks, message routing
- **Managing access**: configuring DM policies, pairing, allowlists, group chat mention gating

## Quick Reference

### Essential Commands

| Task | Command |
|------|---------|
| Initial setup | `openclaw setup` or `openclaw onboard --install-daemon` |
| Edit config | `openclaw configure` or `openclaw config set <path> <value>` |
| Check status | `openclaw gateway status` or `openclaw status --deep` |
| View logs | `openclaw logs --follow` |
| List channels | `openclaw channels list` |
| Add channel | `openclaw channels add --channel <name>` |
| List agents | `openclaw agents list` |
| Add agent | `openclaw agents add <name> --workspace <dir>` |
| List sessions | `openclaw sessions` |
| Manage skills | `openclaw skills list` / `install` / `update` |
| Manage plugins | `openclaw plugins list` / `install` / `enable` |
| Manage hooks | `openclaw hooks list` / `enable` / `disable` |
| Send message | `openclaw message send --target <id> --message "text"` |
| Run agent turn | `openclaw agent -m "message" --deliver` |

### Config File Locations

| Path | Purpose |
|------|---------|
| `~/.openclaw/openclaw.json` | Main config (JSON5 format) |
| `~/.openclaw/workspace/` | Default agent workspace |
| `~/.openclaw/workspace/AGENTS.md` | Agent instructions + memory |
| `~/.openclaw/workspace/SOUL.md` | Agent persona and boundaries |
| `~/.openclaw/workspace/TOOLS.md` | Tool usage notes (user-maintained) |
| `~/.openclaw/workspace/IDENTITY.md` | Agent name/emoji/vibe |
| `~/.openclaw/workspace/USER.md` | User profile |
| `~/.openclaw/workspace/BOOTSTRAP.md` | One-time first-run ritual (auto-deleted) |
| `~/.openclaw/skills/` | Local/managed skills (override bundled) |
| `~/.openclaw/hooks/` | Managed hooks (shared across workspaces) |
| `~/.openclaw/logs/` | Log files |

### Config Structure (Minimal Example)

```json5
{
  agents: {
    defaults: {
      workspace: "~/.openclaw/workspace",
      model: { primary: "anthropic/claude-sonnet-4-6" },
    },
  },
  channels: {
    whatsapp: {
      enabled: true,
      allowFrom: ["+15555550123"],
      dmPolicy: "pairing",
    },
  },
  gateway: { port: 18789 },
}
```

### Key Config Sections

| Section | Controls |
|---------|----------|
| `agents.defaults` | Primary agent workspace, model, tools, sandbox, heartbeat |
| `agents.list` | Multiple isolated agents with separate workspaces |
| `channels.*` | Channel-specific auth, DM policy, group rules |
| `session` | Session scope, reset behavior, thread bindings |
| `tools` | Tool allow/deny lists, profiles, per-provider restrictions |
| `skills.entries` | Skill enablement, env vars, API keys |
| `plugins.entries` | Plugin enablement and config |
| `hooks.internal` | Hook enablement and config |
| `cron` | Scheduled job settings |
| `gateway` | Port, auth, TLS, health checks, reload mode |

## Decision Guidance

### When to Use X vs Y

| Decision | Use X When | Use Y When |
|----------|-----------|-----------|
| **Single vs multi-agent** | One agent per user/workspace | Multiple isolated agents with separate workspaces/routing |
| **DM policy** | `pairing` (default) | `allowlist` (known senders only) | `open` (allow all) | `disabled` (no DMs) |
| **Session scope** | `main` (shared DMs) | `per-peer` (per sender) | `per-channel-peer` (per channel + sender) |
| **Tool profile** | `full` (all tools) | `coding` (file I/O + runtime) | `messaging` (messaging only) | `minimal` (status only) |
| **Sandbox mode** | `off` (no sandbox) | `non-main` (sandbox non-main sessions) | `all` (sandbox everything) |
| **Config reload** | `hybrid` (auto-restart when needed) | `hot` (warn, you restart) | `restart` (always restart) | `off` (manual only) |
| **Skill location** | Bundled (shipped) | `~/.openclaw/skills/` (managed) | `<workspace>/skills/` (per-agent) |
| **Hook location** | Bundled (shipped) | `~/.openclaw/hooks/` (managed) | `<workspace>/hooks/` (per-agent, disabled by default) |

## Workflow

### 1. Initial Setup
1. Install: `npm install -g openclaw@latest` or use install script
2. Run onboarding: `openclaw onboard --install-daemon`
3. Choose model provider (Anthropic, OpenAI, etc.) and enter API key
4. Verify: `openclaw gateway status` and `openclaw dashboard`
5. Test: send a message in the Control UI or connect a channel

### 2. Connect a Channel
1. Choose channel (Telegram is fastest to set up)
2. Run: `openclaw channels add --channel telegram --token <bot-token>`
3. Configure DM policy: `dmPolicy: "pairing"` (default) or `"allowlist"`
4. Restart gateway: `openclaw gateway restart`
5. Test: send a message from the channel

### 3. Configure Agent Workspace
1. Edit `~/.openclaw/workspace/AGENTS.md` — agent instructions and memory
2. Edit `~/.openclaw/workspace/SOUL.md` — persona, tone, boundaries
3. Edit `~/.openclaw/workspace/TOOLS.md` — tool usage notes (user-maintained)
4. Edit `~/.openclaw/workspace/IDENTITY.md` — name, emoji, vibe
5. Edit `~/.openclaw/workspace/USER.md` — user profile
6. Changes take effect on next session (or `/new` to reset)

### 4. Manage Skills
1. List available: `openclaw skills list`
2. Install from ClawHub: `openclaw skills install <skill-slug>`
3. Enable/disable in config: `skills.entries.<name>.enabled: true|false`
4. Provide API keys: `skills.entries.<name>.apiKey: "key"` or env ref
5. Restart gateway for changes to take effect

### 5. Set Up Automation (Hooks)
1. List bundled hooks: `openclaw hooks list`
2. Enable a hook: `openclaw hooks enable session-memory`
3. Create custom hook: `mkdir -p ~/.openclaw/hooks/my-hook` with `HOOK.md` + `handler.ts`
4. Enable custom hook: `openclaw hooks enable my-hook`
5. Restart gateway

### 6. Configure Multi-Agent Routing
1. Add agents: `openclaw agents add work --workspace ~/.openclaw/workspace-work`
2. Set up bindings: `openclaw agents bind --agent work --bind whatsapp:business`
3. Or configure in config:
   ```json5
   {
     agents: { list: [
       { id: "home", workspace: "~/.openclaw/workspace-home" },
       { id: "work", workspace: "~/.openclaw/workspace-work" },
     ]},
     bindings: [
       { agentId: "home", match: { channel: "whatsapp", accountId: "personal" }},
       { agentId: "work", match: { channel: "whatsapp", accountId: "business" }},
     ],
   }
   ```
4. Restart gateway

### 7. Troubleshoot Issues
1. Check config: `openclaw doctor` (auto-fixes safe issues)
2. Validate config: `openclaw config validate`
3. Check channel health: `openclaw channels status --probe`
4. View logs: `openclaw logs --follow`
5. Deep diagnostics: `openclaw status --deep`
6. Check plugin/hook status: `openclaw plugins doctor` / `openclaw hooks check`

## Common Gotchas

- **Config validation is strict**: Unknown keys or malformed types cause the Gateway to refuse to start. Run `openclaw doctor --fix` to repair.
- **Workspace bootstrap files are injected once per session**: Changes to AGENTS.md, SOUL.md, etc. take effect on the next `/new` or new session, not mid-conversation.
- **Workspace hooks are disabled by default**: Hooks in `<workspace>/hooks/` must be explicitly enabled via `openclaw hooks enable <name>`.
- **Plugin/hook changes require restart**: Most plugin and hook config changes need `openclaw gateway restart` (or the service restarts automatically in hybrid reload mode).
- **Skills are snapshotted at session start**: Skill eligibility is checked when a session begins; mid-session skill changes don't apply until the next session.
- **DM pairing codes are one-time**: Once a sender is paired, they don't need to re-pair unless you reset the pairing store.
- **Group chat requires mention by default**: Groups need `requireMention: true` in channel config or `mentionPatterns` in agent config to activate the agent.
- **Tool allow/deny lists are global**: `tools.allow` / `tools.deny` apply to all agents unless overridden per-agent.
- **Secrets in config are not encrypted**: Use SecretRef objects (`{ source: "env", provider: "default", id: "VAR_NAME" }`) to reference env vars instead of plaintext keys.
- **Session reset clears history**: `/new` and `/reset` clear the session transcript; use `session-memory` hook to save context before resetting.
- **Model refs use provider/model format**: `anthropic/claude-sonnet-4-6`, not just `claude-sonnet-4-6`.
- **Sandbox requires Docker**: Sandboxing needs Docker installed and the sandbox image built via `scripts/sandbox-setup.sh`.
- **Channels have different capabilities**: Not all channels support threads, reactions, or media; check the channel-specific docs.
- **Hot reload is not instant**: Config changes are debounced (default 300ms) and applied asynchronously; check logs to confirm.

## Verification Checklist

Before submitting work with OpenClaw:

- [ ] Config is valid: `openclaw config validate` passes
- [ ] Gateway is running: `openclaw gateway status` shows healthy
- [ ] Channels are connected: `openclaw channels status` shows all expected channels
- [ ] Agent workspace exists: `ls ~/.openclaw/workspace/` shows bootstrap files
- [ ] Skills are eligible: `openclaw skills check` shows required skills as ready
- [ ] Plugins are loaded: `openclaw plugins list` shows expected plugins enabled
- [ ] Hooks are enabled: `openclaw hooks list` shows expected hooks with ✓
- [ ] Sessions are clean: `openclaw sessions` shows expected sessions (or cleanup if needed)
- [ ] No config errors: `openclaw doctor` reports no critical issues
- [ ] Logs are clean: `openclaw logs --limit 50` shows no ERROR or CRITICAL lines
- [ ] Test message works: send a test message via a channel and verify agent responds
- [ ] Multi-agent routing works (if configured): verify correct agent handles each channel/account
- [ ] Automation fires (if configured): verify hooks/cron jobs execute as expected

## Resources

**Comprehensive navigation**: See https://docs.openclaw.ai/llms.txt for a complete page-by-page listing of all documentation.

**Critical pages**:
1. [Configuration Reference](https://docs.openclaw.ai/gateway/configuration-reference) — full config schema with all fields
2. [CLI Reference](https://docs.openclaw.ai/cli/index) — all commands and options
3. [Channels Overview](https://docs.openclaw.ai/channels) — setup guides for WhatsApp, Telegram, Discord, iMessage, and more

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt