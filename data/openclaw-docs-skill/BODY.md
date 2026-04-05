---
name: Clawdbot
description: Use when deploying, configuring, or troubleshooting OpenClaw — a self-hosted multi-channel AI agent gateway. Reach for this skill when setting up channels (WhatsApp, Telegram, Discord, etc.), configuring models and authentication, managing sessions and routing, creating or modifying skills, or debugging gateway/agent behavior.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw Skill

## Product summary

OpenClaw is a self-hosted gateway that connects messaging apps (WhatsApp, Telegram, Discord, Slack, iMessage, Signal, Matrix, Microsoft Teams, and more) to AI agents. The agent runs in an embedded runtime with access to tools (browser, exec, web search, file I/O, image generation, etc.) and skills (markdown-based instruction sets). The gateway manages sessions, routing, authentication, and channel delivery. Key files: `~/.openclaw/openclaw.json` (config), `~/.openclaw/workspace/` (agent workspace with `AGENTS.md`, `SOUL.md`, `TOOLS.md`, `IDENTITY.md`, `USER.md`), `~/.openclaw/agents/<agentId>/sessions/` (session transcripts). Primary CLI: `openclaw` with subcommands like `onboard`, `config`, `gateway`, `agent`, `channels`, `skills`. See [https://docs.openclaw.ai](https://docs.openclaw.ai) for full documentation.

## When to use

Use this skill when:

- **Setting up OpenClaw**: installing, running `openclaw onboard`, configuring the gateway service
- **Connecting channels**: adding WhatsApp, Telegram, Discord, Slack, or other messaging platforms; managing DM/group access policies
- **Configuring models**: setting primary/fallback models, managing API keys, switching between providers (Anthropic, OpenAI, Google, etc.)
- **Managing agents**: creating multi-agent setups, configuring workspaces, routing messages to specific agents
- **Creating or modifying skills**: writing `SKILL.md` files, installing skills from ClawHub, gating skills by config/environment
- **Debugging**: running `openclaw doctor`, checking logs, verifying channel health, troubleshooting session/routing issues
- **Securing the gateway**: setting DM pairing policies, allowlists, tool restrictions, sandboxing, running security audits
- **Automating workflows**: setting up cron jobs, hooks, webhooks, or background tasks

## Quick reference

### Essential commands

| Task | Command |
|------|---------|
| Initial setup | `openclaw onboard --install-daemon` |
| Check gateway status | `openclaw gateway status` |
| Open dashboard | `openclaw dashboard` |
| View/edit config | `openclaw config get <path>` / `openclaw config set <path> <value>` |
| Add a channel | `openclaw channels add --channel <name>` |
| List skills | `openclaw skills list` |
| Install a skill | `openclaw skills install <slug>` |
| Run one agent turn | `openclaw agent -m "message" --to <dest>` |
| Diagnose issues | `openclaw doctor` |
| View logs | `openclaw logs --follow` |
| Reset config | `openclaw reset --scope config` |

### Config file structure

```json5
{
  // Agent workspace and defaults
  agents: {
    defaults: {
      workspace: "~/.openclaw/workspace",
      model: { primary: "anthropic/claude-sonnet-4-6" },
      skills: ["github", "weather"],  // allowlist
      sandbox: { mode: "non-main" },
    },
    list: [
      { id: "main", default: true },
      { id: "work", workspace: "~/.openclaw/workspace-work" },
    ],
  },

  // Channel setup
  channels: {
    whatsapp: {
      enabled: true,
      dmPolicy: "pairing",  // pairing | allowlist | open | disabled
      allowFrom: ["+15555550123"],
      groups: { "*": { requireMention: true } },
    },
    telegram: {
      enabled: true,
      botToken: "123:abc",
    },
  },

  // Session management
  session: {
    dmScope: "per-channel-peer",  // main | per-peer | per-channel-peer
    reset: { mode: "daily", atHour: 4 },
  },

  // Tool access control
  tools: {
    profile: "coding",  // full | coding | messaging | minimal
    allow: ["browser", "web_search"],
    deny: ["exec"],
  },

  // Gateway server
  gateway: {
    port: 18789,
    bind: "loopback",  // loopback | lan | tailnet | auto
    auth: { token: "..." },
  },
}
```

### Workspace files (injected into agent context)

| File | Purpose |
|------|---------|
| `AGENTS.md` | Operating instructions, memory, constraints |
| `SOUL.md` | Persona, tone, boundaries |
| `TOOLS.md` | User-maintained notes on tool usage conventions |
| `IDENTITY.md` | Agent name, emoji, theme |
| `USER.md` | User profile, preferred address |
| `BOOTSTRAP.md` | One-time first-run ritual (auto-deleted after completion) |

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
      "primaryEnv": "API_KEY",
      "emoji": "🔧"
    }
  }
---
```

### DM/group access policies

| Policy | Behavior |
|--------|----------|
| `pairing` | Unknown senders get a one-time code; messages ignored until approved |
| `allowlist` | Only senders in `allowFrom` can message |
| `open` | Allow all (requires `allowFrom: ["*"]`) |
| `disabled` | Ignore all DMs |

## Decision guidance

### When to use X vs Y

| Decision | Use X when | Use Y when |
|----------|-----------|-----------|
| **DM scope** | Single user or shared context | Multiple users need isolation |
| `dmScope: "main"` | Single-user setup | Multi-user setup |
| `dmScope: "per-channel-peer"` | — | Multiple users, multiple channels (recommended) |
| **Tool profile** | Restrict agent capabilities | Full access needed |
| `profile: "minimal"` | Untrusted inputs, high-risk | Trusted environment |
| `profile: "messaging"` | Message-only bot | Coding/file access needed |
| `profile: "coding"` | — | Full agent with browser/exec |
| **Sandbox mode** | Isolation required | Performance critical |
| `mode: "non-main"` | Untrusted skills/inputs | Trusted workspace only |
| `mode: "all"` | Maximum isolation | Overhead acceptable |
| `mode: "off"` | — | Speed/simplicity priority |
| **Session reset** | Conversation continuity | Privacy/memory bounds |
| `mode: "daily"` | Shared context across days | Fresh start each day |
| `mode: "idle"` | Long-running sessions | Automatic cleanup |
| **Config reload** | Live updates | Stability priority |
| `reload.mode: "hybrid"` | Safe changes auto-apply | Manual control preferred |
| `reload.mode: "hot"` | — | Restart on any change |

## Workflow

### Typical task: Set up OpenClaw with a channel

1. **Install and initialize**
   - Run `npm install -g openclaw@latest` or use the install script
   - Run `openclaw onboard --install-daemon` to walk through setup
   - Choose a model provider and enter your API key

2. **Verify the gateway is running**
   - Run `openclaw gateway status`
   - Open `openclaw dashboard` to see the Control UI

3. **Add a messaging channel**
   - Run `openclaw channels add --channel telegram` (or whatsapp, discord, etc.)
   - Follow prompts to enter the channel token/credentials
   - Test by sending a message from the channel

4. **Configure access control**
   - Edit `~/.openclaw/openclaw.json` or use `openclaw config set`
   - Set `channels.<name>.dmPolicy` to `pairing` (default) or `allowlist`
   - Set `channels.<name>.allowFrom` to restrict who can message
   - For groups, set `channels.<name>.groupPolicy` and mention patterns

5. **Customize the agent**
   - Edit workspace files (`AGENTS.md`, `SOUL.md`, `IDENTITY.md`)
   - Run `openclaw setup` to create default templates if missing
   - Restart the gateway or wait for hot reload

6. **Test and verify**
   - Send a message from the channel
   - Check `openclaw logs --follow` for errors
   - Run `openclaw doctor` to diagnose issues
   - Run `openclaw security audit` to check access policies

### Typical task: Create a custom skill

1. **Create the skill directory**
   - Create `~/.openclaw/workspace/skills/my-skill/`
   - Create `SKILL.md` with frontmatter and instructions

2. **Define metadata**
   - Add `name`, `description`, and `metadata.openclaw` fields
   - List required binaries, env vars, or config keys
   - Set `primaryEnv` if the skill needs an API key

3. **Write instructions**
   - Explain what the skill does and when to use it
   - Provide step-by-step guidance for the agent
   - Use `{baseDir}` to reference the skill folder

4. **Gate the skill (optional)**
   - Add `requires.bins`, `requires.env`, or `requires.config` to metadata
   - The skill is only eligible if all requirements are met

5. **Enable in config**
   - Add to `agents.defaults.skills` allowlist or per-agent `agents.list[].skills`
   - Optionally set env vars or API keys in `skills.entries.<name>`

6. **Test**
   - Run `openclaw skills list` to verify the skill is eligible
   - Send a message to the agent and ask it to use the skill
   - Check logs for errors

### Typical task: Debug a routing or session issue

1. **Check gateway health**
   - Run `openclaw gateway status` to confirm the gateway is running
   - Run `openclaw health --verbose` for a live probe

2. **Inspect the session**
   - Run `openclaw sessions --json` to list all sessions
   - Check the session ID and agent ID for the conversation
   - Look at `~/.openclaw/agents/<agentId>/sessions/<sessionId>.jsonl` for the transcript

3. **Check routing bindings**
   - Run `openclaw agents bindings` to see which agents are bound to which channels
   - Verify the message came from the expected channel/account

4. **Review config**
   - Run `openclaw config get session.dmScope` to check DM isolation
   - Run `openclaw config get channels.<name>.dmPolicy` to check access policy
   - Run `openclaw config get agents.list[].id` to list agents

5. **Run diagnostics**
   - Run `openclaw doctor` to check for common issues
   - Run `openclaw security audit` to verify access control
   - Check `openclaw logs --follow` for error messages

6. **Fix and verify**
   - Edit config with `openclaw config set` or direct file edit
   - Restart the gateway if needed: `openclaw gateway restart`
   - Send a test message and confirm the fix

## Common gotchas

- **DM isolation missing**: By default, all DMs share one session. In multi-user setups, set `session.dmScope: "per-channel-peer"` to isolate conversations.
- **Pairing codes not working**: Pairing is per-channel. A user approved on WhatsApp must re-pair on Telegram. Use `openclaw pairing list` to see pending requests.
- **Skills not showing up**: Check `openclaw skills list --verbose` to see missing requirements (bins, env vars, config). Verify the skill is in the allowlist: `agents.defaults.skills` or `agents.list[].skills`.
- **Config changes not taking effect**: By default, config hot-reloads. If a change requires a restart, the gateway logs a warning. Run `openclaw gateway restart` manually or set `gateway.reload.mode: "restart"`.
- **Model auth failing**: Verify the API key is set: `openclaw models status --probe`. Check env vars with `echo $ANTHROPIC_API_KEY`. Use `openclaw models auth add` to add/update credentials.
- **Browser tool not working**: Browser requires a Chromium-based browser (Chrome, Brave, Edge). Run `openclaw browser status` to check. On Linux, you may need to install dependencies; see `/tools/browser-linux-troubleshooting`.
- **Sandbox Docker errors**: Sandboxing requires Docker. Run `scripts/sandbox-setup.sh` to build the image. Check `openclaw sandbox list` to see existing sandboxes.
- **Workspace files not injected**: Blank files are skipped. Large files are truncated. Check `openclaw logs` for truncation markers. Use `openclaw setup` to create default templates.
- **Multi-agent routing not working**: Verify bindings with `openclaw agents bindings`. Bindings match on `channel[:accountId]`. If no binding matches, the message routes to the default agent.
- **Permissions errors on config/state**: Run `openclaw security audit --fix` to repair file permissions. State should be `700` (user only), config `600`.

## Verification checklist

Before submitting work with OpenClaw:

- [ ] Gateway is running: `openclaw gateway status` shows "running"
- [ ] Config is valid: `openclaw config validate` passes (or `openclaw doctor` shows no critical issues)
- [ ] Channels are connected: `openclaw channels status` shows all expected channels as "enabled"
- [ ] Agent can receive messages: Send a test message and confirm a reply
- [ ] Access control is correct: Run `openclaw security audit` and address any findings
- [ ] Skills are eligible: Run `openclaw skills list` and verify required skills show "ready"
- [ ] Sessions are isolated (if multi-user): Check `session.dmScope` is set correctly
- [ ] Logs are clean: Run `openclaw logs --limit 50` and check for errors
- [ ] Workspace files exist: Verify `AGENTS.md`, `SOUL.md`, `IDENTITY.md` are present
- [ ] Model is configured: Run `openclaw models status` and confirm the primary model is available

## Resources

- **Comprehensive navigation**: [https://docs.openclaw.ai/llms.txt](https://docs.openclaw.ai/llms.txt) — complete page-by-page index for all documentation
- **Getting started**: [https://docs.openclaw.ai/start/getting-started](https://docs.openclaw.ai/start/getting-started) — installation, onboarding, and first chat
- **Configuration reference**: [https://docs.openclaw.ai/gateway/configuration](https://docs.openclaw.ai/gateway/configuration) — all config options, common tasks, and examples
- **CLI reference**: [https://docs.openclaw.ai/cli/index](https://docs.openclaw.ai/cli/index) — all commands and options

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt