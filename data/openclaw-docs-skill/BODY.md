---
name: Clawdbot
description: Use when deploying, configuring, or troubleshooting OpenClaw — a self-hosted multi-channel AI agent gateway. Reach for this skill when agents need to understand how to set up channels, manage sessions, configure models, use tools, create skills, or debug gateway issues.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw Skill

## Product summary

OpenClaw is a self-hosted gateway that connects messaging apps (WhatsApp, Telegram, Discord, Slack, Signal, iMessage, and more) to an embedded AI agent (Pi). It runs on any OS (macOS, Linux, Windows, iOS, Android) and manages sessions, routing, tools, and multi-agent isolation in a single process. The primary config file is `~/.openclaw/openclaw.json` (JSON5 format). Key CLI commands: `openclaw onboard` (setup wizard), `openclaw gateway` (run the service), `openclaw configure` (config wizard), `openclaw message send` (send messages), `openclaw agent` (run a single turn). The main documentation site is https://docs.openclaw.ai.

## When to use

Reach for this skill when:

- **Setting up OpenClaw**: initial install, onboarding, workspace initialization
- **Configuring channels**: connecting WhatsApp, Telegram, Discord, Slack, Signal, iMessage, Google Chat, Mattermost, MS Teams
- **Managing models and auth**: setting primary/fallback models, rotating API keys, configuring providers (Anthropic, OpenAI, OpenRouter, Ollama, etc.)
- **Creating or modifying skills**: writing SKILL.md files, gating skills by environment/config, installing from ClawHub
- **Debugging agent behavior**: session management, context limits, tool policies, sandbox issues
- **Multi-agent setups**: routing messages to different agents, isolating workspaces, per-agent bindings
- **Automation workflows**: cron jobs, heartbeats, webhooks, hooks
- **Tool and browser control**: browser automation, canvas rendering, node pairing, media capture
- **Troubleshooting**: config validation, channel health, auth failures, session compaction

## Quick reference

### Essential files and paths

| Path | Purpose |
|------|---------|
| `~/.openclaw/openclaw.json` | Main config file (JSON5) |
| `~/.openclaw/workspace` | Default agent workspace (AGENTS.md, SOUL.md, TOOLS.md, etc.) |
| `~/.openclaw/agents/<agentId>/sessions/` | Session transcripts (JSONL files) |
| `~/.openclaw/skills` | Managed/local skills (override bundled) |
| `<workspace>/skills` | Workspace-specific skills (highest precedence) |
| `~/.openclaw/.env` | Global env var fallback |

### Core CLI commands

| Command | Purpose |
|---------|---------|
| `openclaw onboard --install-daemon` | Interactive setup wizard + daemon install |
| `openclaw configure` | Config wizard (models, channels, skills) |
| `openclaw gateway` | Run the Gateway (foreground) |
| `openclaw gateway status` | Check Gateway health |
| `openclaw dashboard` | Open Control UI in browser |
| `openclaw config get <path>` | Read a config value |
| `openclaw config set <path> <value>` | Set a config value |
| `openclaw doctor` | Diagnose config/state issues |
| `openclaw message send --target <id> --message <text>` | Send a message |
| `openclaw channels list` | Show configured channels |
| `openclaw channels add --channel <name>` | Add a channel |
| `openclaw skills list` | List available skills |
| `openclaw models status` | Show model auth status |
| `openclaw sessions` | List stored sessions |

### Config structure (minimal)

```json5
{
  agents: {
    defaults: {
      workspace: "~/.openclaw/workspace",
      model: { primary: "anthropic/claude-opus-4-6" },
    },
  },
  channels: {
    whatsapp: {
      enabled: true,
      allowFrom: ["+15555550123"],  // DM allowlist
      groups: { "*": { requireMention: true } },
    },
  },
}
```

### Model refs format

Use `provider/model` format:
- `anthropic/claude-opus-4-6`
- `openai/gpt-5.2`
- `openrouter/moonshotai/kimi-k2` (OpenRouter-style with `/`)

### Tool groups (shortcuts)

| Group | Includes |
|-------|----------|
| `group:fs` | read, write, edit, apply_patch |
| `group:runtime` | exec, bash, process |
| `group:sessions` | sessions_list, sessions_history, sessions_send, sessions_spawn, session_status |
| `group:web` | web_search, web_fetch |
| `group:ui` | browser, canvas |
| `group:messaging` | message |
| `group:automation` | cron, gateway |

### Skill metadata (SKILL.md frontmatter)

```markdown
---
name: my-skill
description: What this skill does
metadata:
  {
    "openclaw": {
      "requires": {
        "bins": ["tool-name"],
        "env": ["API_KEY"],
        "config": ["browser.enabled"]
      },
      "primaryEnv": "API_KEY"
    }
  }
---
```

## Decision guidance

### When to use X vs Y

| Decision | Use X when | Use Y when |
|----------|-----------|-----------|
| **Config hot-reload mode** | You want safe changes applied instantly | You need manual control over restarts |
| **DM policy** | `pairing` (default) | Unknown senders need approval | `allowlist` | Only known senders allowed |
| **Session scope** | `per-channel-peer` | Multi-user, isolate by channel | `main` | Single shared session |
| **Sandbox mode** | `non-main` | Isolate untrusted inputs | `off` | Trust all inputs |
| **Tool profile** | `minimal` | Messaging-only agents | `coding` | Full file/runtime access |
| **Skill location** | `<workspace>/skills` | Agent-specific skills | `~/.openclaw/skills` | Shared across agents |
| **Multi-agent** | Use bindings | Route by channel/account | Single agent | Simpler setup |

## Workflow

### 1. Initial setup

1. **Install**: `npm install -g openclaw@latest` or use the install script
2. **Run wizard**: `openclaw onboard --install-daemon`
   - Choose auth provider (Anthropic, OpenAI, etc.)
   - Set gateway port (default 18789)
   - Optionally pair channels (WhatsApp, Telegram, etc.)
   - Install as daemon service
3. **Verify**: `openclaw gateway status` and `openclaw dashboard`
4. **Check config**: `openclaw config file` to see where `openclaw.json` lives

### 2. Configure a channel

1. **Add channel**: `openclaw channels add --channel telegram --token <BOT_TOKEN>`
   - Or use `openclaw configure` for interactive setup
2. **Set DM policy**: Edit `~/.openclaw/openclaw.json`:
   ```json5
   { channels: { telegram: { dmPolicy: "pairing" } } }
   ```
3. **Verify**: `openclaw channels status --probe`
4. **Test**: Send a message to the bot; if pairing is enabled, approve the pairing code

### 3. Set up a model

1. **Check available models**: `openclaw models list`
2. **Add auth**: `openclaw models auth add --provider anthropic` (or use `openclaw configure`)
3. **Set primary model**: `openclaw config set agents.defaults.model.primary anthropic/claude-opus-4-6`
4. **Verify**: `openclaw models status`

### 4. Create or install a skill

**Install from ClawHub**:
```bash
clawhub install my-skill-pack
```

**Create a local skill**:
1. Create `~/.openclaw/workspace/skills/my-skill/SKILL.md`
2. Add frontmatter with name, description, and metadata
3. Write instructions in markdown
4. Verify: `openclaw skills list --eligible`

### 5. Debug a session

1. **List sessions**: `openclaw sessions`
2. **Check session file**: `~/.openclaw/agents/main/sessions/<sessionId>.jsonl`
3. **Run doctor**: `openclaw doctor` to check config/state
4. **Check logs**: `openclaw logs --follow` or `openclaw logs --limit 100`
5. **Inspect transcript**: Use `openclaw sessions` or read the JSONL directly

### 6. Multi-agent setup

1. **Create second workspace**: `mkdir -p ~/.openclaw/workspace-work`
2. **Edit config**:
   ```json5
   {
     agents: {
       list: [
         { id: "home", default: true, workspace: "~/.openclaw/workspace-home" },
         { id: "work", workspace: "~/.openclaw/workspace-work" },
       ],
     },
     bindings: [
       { agentId: "home", match: { channel: "whatsapp", accountId: "personal" } },
       { agentId: "work", match: { channel: "whatsapp", accountId: "work" } },
     ],
   }
   ```
3. **Restart gateway**: `openclaw gateway restart` or let hot-reload apply it

## Common gotchas

- **Config validation is strict**: Unknown keys or malformed types cause the Gateway to refuse to start. Run `openclaw doctor --fix` to auto-repair common issues.
- **Model refs must use `provider/model` format**: `anthropic/claude-opus-4-6` works; `claude-opus-4-6` alone defaults to the default provider and may fail if no default is set.
- **Skills are snapshotted at session start**: Changes to skill files or config take effect on the next new session, not mid-conversation. Restart the session to pick up changes.
- **DM pairing codes are one-time**: Once approved, the sender is added to the allow store. Pairing codes rotate; don't reuse old codes.
- **Session files are JSONL, not JSON**: Each line is a turn; do not edit them directly. Use `openclaw sessions` or the Control UI to inspect.
- **Sandbox requires Docker**: If `agents.defaults.sandbox.mode` is set to anything other than `off`, Docker must be running and the sandbox image must be built (`scripts/sandbox-setup.sh`).
- **Tool policies are cumulative**: `tools.profile` sets a base allowlist, then `tools.allow` adds, then `tools.deny` removes. Deny wins.
- **Env var substitution in config**: Use `${VAR_NAME}` (uppercase only). Missing vars throw an error at load time. Escape with `$${VAR}` for literal output.
- **Hot-reload does not restart the Gateway for most changes**: Only `gateway.*` (port, bind, auth, TLS) and infrastructure changes require a restart. Use `hybrid` mode (default) to auto-restart when needed.
- **Multi-agent bindings are order-independent**: The first matching binding wins. If two bindings match the same message, the first in the list is used.
- **Skills require binaries on PATH at load time**: If a skill declares `requires.bins: ["tool"]`, that tool must exist on the host PATH when the skill is loaded. For sandboxed runs, the binary must also exist in the container.
- **Skill precedence is workspace > managed > bundled**: If a skill name conflicts, the workspace version wins. Use this to override bundled skills.
- **Context window limits are per-model**: OpenClaw tracks tokens and may auto-compact sessions when context overflows. Configure `agents.defaults.contextPruning` to tune this.
- **Group mentions are required by default**: Set `channels.<provider>.groups.*.requireMention: false` to allow all group messages without mention.
- **Browser profiles are isolated**: Each profile has its own user data, cookies, and port. Use `profile="user"` to access the real host browser (host-only, no sandbox).
- **Cron jobs run in isolated sessions**: They do not share session state with DM/group chats. Use `sessions_send` to communicate between cron and main sessions.

## Verification checklist

Before submitting work with OpenClaw:

- [ ] Config validates: `openclaw config validate` (or `openclaw doctor`)
- [ ] Gateway is running: `openclaw gateway status` shows `ok`
- [ ] Channels are healthy: `openclaw channels status --probe` shows no errors
- [ ] Model auth is set: `openclaw models status` shows primary model with valid auth
- [ ] Workspace exists: `ls ~/.openclaw/workspace` shows AGENTS.md, SOUL.md, etc.
- [ ] Skills are eligible: `openclaw skills list --eligible` shows expected skills
- [ ] Test message sent: `openclaw message send --target <id> --message "test"` succeeds
- [ ] Session created: `openclaw sessions` shows a new session after the test message
- [ ] No config errors in logs: `openclaw logs --limit 50 | grep -i error` is empty
- [ ] Multi-agent bindings correct (if applicable): `openclaw agents bindings --json` matches your routing intent
- [ ] Tool policies are intentional: `openclaw config get tools` matches your security model

## Resources

- **Comprehensive navigation**: https://docs.openclaw.ai/llms.txt — page-by-page listing of all documentation
- **Configuration reference**: https://docs.openclaw.ai/gateway/configuration-reference — every config field with defaults and examples
- **CLI reference**: https://docs.openclaw.ai/cli/index — all commands and options
- **Troubleshooting**: https://docs.openclaw.ai/help/troubleshooting — common errors and fixes

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt