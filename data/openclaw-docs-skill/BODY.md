---
name: Clawdbot
description: Use when deploying a self-hosted AI agent gateway, configuring multi-channel messaging (WhatsApp, Telegram, Discord, iMessage), managing agent workspaces and sessions, setting up skills and tools, or troubleshooting gateway/channel connectivity issues.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw Skill Reference

## Product summary

OpenClaw is a self-hosted gateway that connects messaging apps (WhatsApp, Telegram, Discord, iMessage, Signal, Slack, Mattermost, and more) to AI agents. It runs on any OS (macOS, Linux, Windows via WSL2) and manages sessions, routing, media, and tool execution. Agents use a workspace directory (`~/.openclaw/workspace`) containing bootstrap files (AGENTS.md, SOUL.md, TOOLS.md, IDENTITY.md, USER.md) that inject context on every turn. Configuration lives in `~/.openclaw/openclaw.json` (JSON5 format). Key CLI: `openclaw onboard`, `openclaw gateway`, `openclaw config`, `openclaw channels`, `openclaw agent`, `openclaw message`. Primary docs: https://docs.openclaw.ai

## When to use

Reach for this skill when:
- **Setting up OpenClaw**: installing, onboarding, configuring the Gateway, or initializing workspaces
- **Managing channels**: connecting WhatsApp, Telegram, Discord, or other messaging platforms; troubleshooting channel auth or delivery
- **Configuring agents**: setting workspace files (AGENTS.md, SOUL.md), managing multi-agent routing, or adjusting session behavior
- **Creating or installing skills**: building custom tools, searching ClawHub, or managing skill dependencies
- **Debugging Gateway issues**: checking health, logs, config validation, or channel connectivity
- **Automating workflows**: setting up cron jobs, webhooks, heartbeats, or hooks
- **Managing sessions and memory**: resetting sessions, compacting transcripts, or enabling memory hooks

## Quick reference

### Essential CLI commands

| Task | Command |
|------|---------|
| First-time setup | `openclaw onboard --install-daemon` |
| Run Gateway | `openclaw gateway --port 18789` |
| Check status | `openclaw gateway status` |
| Open dashboard | `openclaw dashboard` |
| Edit config | `openclaw configure` or `openclaw config set <path> <value>` |
| Add channel | `openclaw channels add --channel <name>` |
| Send message | `openclaw message send --target <dest> --message "text"` |
| Run agent turn | `openclaw agent --message "text"` |
| List skills | `openclaw skills list` |
| Install skill | `clawhub install <slug>` |
| Validate config | `openclaw doctor` or `openclaw config validate` |

### Config file locations

| Item | Path |
|------|------|
| Main config | `~/.openclaw/openclaw.json` |
| Workspace | `~/.openclaw/workspace/` (default) |
| Sessions | `~/.openclaw/agents/<agentId>/sessions/` |
| Skills (shared) | `~/.openclaw/skills/` |
| Skills (workspace) | `<workspace>/skills/` |
| Logs | `~/.openclaw/logs/` |

### Bootstrap files (workspace root)

| File | Purpose |
|------|---------|
| `AGENTS.md` | Operating instructions + memory; injected every turn |
| `SOUL.md` | Persona, boundaries, tone |
| `TOOLS.md` | Local tool notes (camera names, SSH details, conventions) |
| `IDENTITY.md` | Agent name, vibe, emoji |
| `USER.md` | User profile + preferred address |
| `BOOTSTRAP.md` | One-time first-run ritual (auto-deleted after completion) |
| `MEMORY.md` | Long-term memory (keep concise; injected every turn) |

### Common config patterns

**Minimal config** (WhatsApp with allowlist):
```json5
{
  agents: { defaults: { workspace: "~/.openclaw/workspace" } },
  channels: { whatsapp: { allowFrom: ["+15555550123"] } },
}
```

**Multi-channel with models**:
```json5
{
  agents: {
    defaults: {
      workspace: "~/.openclaw/workspace",
      model: { primary: "anthropic/claude-sonnet-4-5" },
    },
  },
  channels: {
    whatsapp: { allowFrom: ["+15555550123"] },
    telegram: { botToken: "123:abc", enabled: true },
    discord: { botToken: "xyz", enabled: true },
  },
}
```

**Group chat mention gating**:
```json5
{
  channels: {
    whatsapp: { groups: { "*": { requireMention: true } } },
  },
  agents: {
    list: [{
      id: "main",
      groupChat: { mentionPatterns: ["@openclaw", "openclaw"] },
    }],
  },
}
```

## Decision guidance

### When to use X vs Y

| Scenario | Use | Why |
|----------|-----|-----|
| First-time setup | `openclaw onboard` | Interactive, guided, sets up daemon + channels |
| Quick config edit | `openclaw config set <path> <value>` | Non-interactive, single key |
| Complex config | Edit `~/.openclaw/openclaw.json` directly | Full control, hot-reloads automatically |
| Test agent turn | `openclaw agent --message "text"` | Embedded, no Gateway needed |
| Production agent | Gateway + channels | Persistent, multi-channel, session continuity |
| DM safety | `dmPolicy: "pairing"` | Unknown senders get one-time code |
| DM allowlist | `dmPolicy: "allowlist"` + `allowFrom: [...]` | Only approved senders |
| Group activation | `requireMention: true` | Avoid spam; require @mention or pattern |
| Shared skills | `~/.openclaw/skills/` | Reusable across agents |
| Workspace skills | `<workspace>/skills/` | Agent-specific, workspace wins on conflict |
| Session reset | `/new` command in chat | Clears transcript, saves to memory if enabled |
| Manual compaction | `/compact` command | Trim old turns before context limit |

## Workflow

### 1. Initial setup
1. Install: `npm install -g openclaw@latest` or use install script
2. Run onboarding: `openclaw onboard --install-daemon`
3. Choose auth provider (Anthropic, OpenAI, etc.) and set API key
4. Configure Gateway port (default 18789)
5. Optionally add channels (WhatsApp, Telegram, Discord)
6. Verify: `openclaw gateway status`

### 2. Configure a channel
1. Run `openclaw channels add --channel <name>` (e.g., `whatsapp`, `telegram`)
2. Follow auth flow (scan QR, paste token, etc.)
3. Set `dmPolicy` (pairing, allowlist, open, disabled)
4. For groups: set `requireMention: true` and `mentionPatterns`
5. Verify: `openclaw channels status`

### 3. Customize agent workspace
1. Edit `~/.openclaw/workspace/AGENTS.md` — add instructions, memory, rules
2. Edit `~/.openclaw/workspace/SOUL.md` — set persona and tone
3. Edit `~/.openclaw/workspace/TOOLS.md` — document tool setup (camera names, SSH keys, etc.)
4. Edit `~/.openclaw/workspace/IDENTITY.md` — set agent name and emoji
5. Edit `~/.openclaw/workspace/USER.md` — add user profile
6. Restart Gateway or wait for hot-reload (files auto-inject on next turn)

### 4. Create a custom skill
1. Create directory: `mkdir -p ~/.openclaw/workspace/skills/my-skill`
2. Write `SKILL.md` with YAML frontmatter + Markdown instructions
3. Add optional scripts or resources in the skill folder
4. Refresh: ask agent to "refresh skills" or restart Gateway
5. Test: `openclaw agent --message "use my new skill"`

### 5. Debug and troubleshoot
1. Check config: `openclaw doctor` (auto-fixes safe issues with `--fix`)
2. Validate syntax: `openclaw config validate`
3. View logs: `openclaw logs --follow` or `openclaw logs --limit 200`
4. Check channel health: `openclaw channels status --probe`
5. Probe Gateway: `openclaw gateway status --deep`
6. Check specific channel logs: `openclaw channels logs --channel whatsapp`

### 6. Manage sessions
1. List sessions: `openclaw sessions` or `/sessions` in chat
2. Reset current session: `/new` (saves to memory if enabled)
3. Compact transcript: `/compact` (trim old turns)
4. Enable session-memory hook: `openclaw hooks enable session-memory`
5. Search memory: `openclaw memory search "query"`

## Common gotchas

- **Config validation fails silently**: Run `openclaw doctor --fix` to auto-repair common issues. The Gateway refuses to start if config is invalid.
- **Bootstrap files consume tokens**: AGENTS.md, SOUL.md, TOOLS.md, IDENTITY.md, USER.md, and MEMORY.md are injected on every turn. Keep them concise (default max 20KB per file, 150KB total). Large files trigger truncation warnings.
- **Missing workspace files**: OpenClaw injects a "missing file" marker if a bootstrap file doesn't exist. Use `openclaw setup` to create safe defaults.
- **Channel auth expires**: OAuth tokens (Anthropic, OpenAI, GitHub Copilot) expire. Monitor with `openclaw models status --probe` and refresh via `openclaw models auth add`.
- **DM pairing codes are one-time**: Unknown senders get a code to approve. Once approved, they're stored in the allow list. Codes don't repeat.
- **Group messages require mention**: By default, groups require `@mention` or a text pattern match. Set `requireMention: false` only if you trust all group members.
- **Sessions are per-scope**: Default is `per-channel-peer` (separate session per sender per channel). Change `session.dmScope` to `main` for shared sessions across all DMs.
- **Skills conflict by name**: Workspace skills win over shared skills. If two skills have the same name, the workspace version is used.
- **Hot-reload doesn't restart Gateway**: Most config changes hot-apply (channels, models, tools, sessions). Gateway server changes (port, bind, TLS) require manual restart.
- **Sandboxing requires Docker**: If `agents.defaults.sandbox.mode` is enabled, Docker must be running. Build the sandbox image first: `scripts/sandbox-setup.sh`.
- **Relative paths resolve to workspace**: Tools use the workspace as `cwd`. Absolute paths can reach elsewhere unless sandboxing is enabled.
- **ClawHub CLI is separate**: Install with `npm install -g clawhub` or `pnpm add -g clawhub`. Use `clawhub search`, `clawhub install`, `clawhub publish`.
- **Config includes are relative**: `$include` paths in config are relative to the including file, not the current directory.
- **Env var substitution is uppercase-only**: Use `${UPPERCASE_VAR}` in config strings. Lowercase names are ignored. Missing vars throw an error at load time.

## Verification checklist

Before submitting work with OpenClaw:

- [ ] Config validates: `openclaw config validate` returns no errors
- [ ] Gateway is running: `openclaw gateway status` shows "running"
- [ ] Channels are healthy: `openclaw channels status` shows all enabled channels connected
- [ ] Bootstrap files exist: `ls ~/.openclaw/workspace/{AGENTS,SOUL,TOOLS,IDENTITY,USER}.md`
- [ ] Agent responds: `openclaw agent --message "test"` returns a reply
- [ ] Sessions persist: `/sessions` in chat shows expected session keys
- [ ] Skills load: `openclaw skills list` shows custom skills in workspace
- [ ] No config warnings: `openclaw doctor` reports no issues (or only informational hints)
- [ ] Logs are clean: `openclaw logs --limit 50` shows no ERROR or WARN lines (unless expected)
- [ ] Multi-agent routing works (if configured): `openclaw agents list` shows all agents, bindings are correct
- [ ] Memory is enabled (if needed): `openclaw hooks list` shows `session-memory` enabled, memory files exist in `~/.openclaw/workspace/memory/`

## Resources

**Comprehensive navigation**: https://docs.openclaw.ai/llms.txt — page-by-page index of all documentation

**Critical docs**:
- [Configuration Reference](https://docs.openclaw.ai/gateway/configuration-reference) — every config field with defaults and examples
- [Channels Overview](https://docs.openclaw.ai/channels/index) — setup guides for WhatsApp, Telegram, Discord, iMessage, Signal, Slack, Mattermost, and more
- [Agent Workspace](https://docs.openclaw.ai/concepts/agent-workspace) — workspace layout, bootstrap files, and context injection
- [CLI Reference](https://docs.openclaw.ai/cli/index) — complete command tree and options
- [Troubleshooting](https://docs.openclaw.ai/gateway/troubleshooting) — common errors and fixes
- [Creating Skills](https://docs.openclaw.ai/tools/creating-skills) — how to build custom tools
- [ClawHub](https://docs.openclaw.ai/tools/clawhub) — public skill registry and CLI

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt