---
name: Clawdbot
description: Documentation and capabilities reference for Clawdbot
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

## Capabilities

OpenClaw enables agents to operate as personal AI assistants across multiple messaging platforms simultaneously. Agents can execute shell commands, automate browser interactions, manage files, schedule tasks, capture media, and coordinate with other agents—all while maintaining isolated sessions and persistent memory per user or group. The system provides a self-hosted control plane (Gateway) that routes messages from various channels to configured agents with full tool access and security controls.

## Skills

### Messaging & Channel Integration
- **Multi-channel support**: WhatsApp, Telegram, Discord, iMessage, Slack, Mattermost (plugin), Signal, Google Chat, Feishu, MS Teams, Matrix, Zalo, LINE, and custom channels via plugins
- **Message operations**: Send text/media, react to messages, edit/delete messages, create polls, pin/unpin messages, read message history
- **Group handling**: Direct messages, group chats, threads, mentions, broadcast groups (route single message to multiple agents)
- **Media support**: Send/receive images, audio, documents, video clips, and location data
- **Streaming replies**: Real-time message updates as agent generates responses (channel-dependent)

### Agent Execution & Control
- **Agent loop**: Full agentic cycle from message intake → context assembly → model inference → tool execution → streaming replies → persistence
- **Session management**: Isolated sessions per user/group/agent with transcript persistence and automatic compaction
- **Multi-agent routing**: Route messages to different agents based on peer ID, guild, team, account, or channel with deterministic binding rules
- **Sub-agents**: Spawn worker agents from coordinator agents for parallel task execution
- **Session commands**: `/new` (reset), `/abort` (stop run), `/settings` (view config), `/model` (switch model), `/think` (reasoning level), `/verbose` (output detail)

### Tool Execution
- **Shell commands**: `exec` tool for foreground/background command execution with process management
- **File operations**: Read, write, edit files; apply patches; workspace-scoped file access
- **Browser automation**: Snapshot UI trees, take screenshots, navigate, click, type, drag, select, upload files; supports isolated OpenClaw profile or system Chrome
- **Web tools**: `web_search` (Brave Search or Perplexity), `web_fetch` (HTTP + readable extraction)
- **Media capture**: Camera snapshots (front/back), video clips, screen recordings from paired iOS/Android/macOS nodes
- **Canvas/UI**: Render HTML/CSS/JS, A2UI interactive surfaces on macOS app or iOS/Android nodes
- **Location**: Get GPS coordinates from paired mobile nodes with accuracy control
- **Voice**: Text-to-speech via ElevenLabs, voice wake detection, voice call plugin support

### Automation & Scheduling
- **Cron jobs**: Schedule tasks with cron expressions, one-shot delays, or intervals; persist across restarts
- **Webhooks**: Receive events from external services (Telegram, Zalo, Gmail Pub/Sub)
- **Polling**: Long-polling for channels without webhook support
- **Heartbeat**: Periodic agent wake-ups for background monitoring/reminders
- **Gmail integration**: Pub/Sub hooks for email-triggered automation

### Model & Provider Configuration
- **Multiple providers**: Anthropic (API/Claude Code), OpenAI (API/Codex), OpenRouter, Vercel AI Gateway, Moonshot (Kimi), MiniMax, OpenCode, GLM, Z.AI, Bedrock, Venice, Ollama, and custom OpenAI-compatible proxies
- **Model switching**: Change models per-session via `/model` directive or config
- **Model failover**: Automatic fallback to secondary models on provider errors
- **Prompt caching**: Anthropic prompt caching support for cost optimization
- **Reasoning modes**: Extended thinking, verbose output, streaming reasoning (provider-dependent)

### Security & Sandboxing
- **Docker sandboxing**: Run agents in isolated containers with configurable workspace access
- **Tool policies**: Allow/deny specific tools globally, per-agent, or per-sandbox
- **Elevated mode**: Escape hatch to run shell commands on host when sandboxed (with approval gates)
- **Sender allowlists**: Restrict commands/elevated access by channel + sender ID
- **Access groups**: Fine-grained authorization for multi-agent setups (personal/family/public agents)

### Memory & Context
- **Session transcripts**: JSONL-based message history with automatic hygiene/fixups
- **Memory search**: Query past sessions and extract relevant context
- **Compaction**: Automatic or manual transcript summarization to manage context windows
- **Context injection**: Bootstrap files (AGENTS.md, SOUL.md, TOOLS.md, IDENTITY.md, USER.md) injected into system prompt
- **System prompt**: OpenClaw-built custom prompts per run with skills, tools, workspace, and group context

### Extensions & Customization
- **Plugins**: Register custom tools, channels, commands, and Gateway RPC methods
- **Skills**: Versioned tool bundles with SKILL.md documentation; ClawHub registry for discovery
- **Slash commands**: Built-in (`/help`, `/status`, `/reset`, `/model`) and custom plugin commands
- **Directives**: Per-message hints (`/think`, `/verbose`, `/reasoning`, `/elevated`, `/exec`, `/model`, `/queue`)
- **Hooks**: Plugin lifecycle hooks (before_agent_start, agent_end, before_tool_call, message_received, session_start, etc.)

### Gateway & Operations
- **WebSocket protocol**: Single control plane for CLI, web UI, macOS app, and mobile nodes
- **RPC methods**: Gateway methods for wizard flow, node pairing, cron management, health checks
- **Health diagnostics**: `openclaw status` for channel/session/node diagnostics with deep probes
- **Logging**: WebSocket protocol logs, gateway logs, per-agent logs
- **Multiple gateways**: Run multiple Gateway instances with shared or isolated configs
- **Remote access**: Tailscale integration for secure remote Gateway access

### Web Interfaces
- **Control UI**: Browser dashboard for chat, config, sessions, nodes, and cron jobs
- **Terminal UI (TUI)**: Interactive chat interface with local shell command support
- **WebChat**: Web-based chat interface for messaging
- **macOS app**: Native companion app with menu bar, voice overlay, Canvas panel, health monitoring

## Workflows

### Setting Up a Multi-Channel Agent
1. Install OpenClaw (Node 22+, Docker optional)
2. Run `openclaw setup` or `openclaw wizard` to configure model provider (Anthropic/OpenAI recommended)
3. Configure channels in `~/.openclaw/config.json` (e.g., `channels.whatsapp`, `channels.telegram`)
4. Pair each channel (scan QR code for WhatsApp, get token for Telegram, etc.)
5. Start Gateway: `openclaw gateway`
6. Messages from any channel automatically route to the default agent

### Automating a Daily Task
1. Create a cron job: `openclaw cron add --name "Morning brief" --cron "0 7 * * *" --message "Summarize my inbox"`
2. Gateway wakes agent at 7 AM, sends message, agent processes and replies
3. View runs: `openclaw cron runs --id <id>`
4. Edit/disable as needed: `openclaw cron edit <id>` or `openclaw cron disable <id>`

### Building a Custom Tool via Plugin
1. Create plugin module with `api.registerTool()` or `api.registerChannel()`
2. Place in `~/.openclaw/extensions/` or configure path in `plugins.load.paths`
3. Restart Gateway to load
4. Plugin tools appear in agent's tool list and system prompt automatically

### Routing Messages to Different Agents
1. Configure multiple agents: `agents.list = [{id: "main", ...}, {id: "work", ...}]`
2. Add bindings to route by peer/guild/team/account: `bindings = [{match: {channel: "slack", peer.id: "C123"}, agent: "work"}]`
3. Messages to that peer route to "work" agent with isolated workspace/sessions
4. Each agent can have different models, tool policies, and sandbox settings

### Capturing Media from Mobile Node
1. Pair iOS/Android node: `openclaw nodes pending` → `openclaw nodes approve <requestId>`
2. In agent, call `nodes camera snap --node <id>` to capture photo
3. Agent receives MEDIA:<path> reference and can process image
4. For video: `nodes camera clip --node <id> --duration 10s`
5. For screen: `nodes screen record --node <id> --duration 5s`

### Sandboxing an Untrusted Agent
1. Set `agents.list[].sandbox.enabled = true` for agent
2. Configure `agents.list[].tools.deny = ["exec"]` to block shell access
3. Set `agents.list[].sandbox.workspaceAccess = "ro"` for read-only files
4. Agent runs in Docker with restricted filesystem; browser/web tools still work
5. Use `/elevated on` to temporarily escape sandbox (requires allowlist + approval)

## Integration

OpenClaw integrates with:
- **LLM providers**: Anthropic, OpenAI, OpenRouter, Vercel, Moonshot, and 10+ others via unified model interface
- **Messaging platforms**: Native support for 15+ channels; custom channels via plugin API
- **External services**: Webhooks from Telegram, Gmail, Zalo; polling for others
- **Automation**: Cron scheduler, webhook receivers, heartbeat triggers
- **Mobile platforms**: iOS/Android nodes for camera, canvas, location, screen recording
- **Desktop**: macOS companion app with native integrations (menu bar, voice overlay, Canvas)
- **Browsers**: Chrome/Brave/Edge/Chromium via OpenClaw-managed profile or system default
- **File systems**: Workspace-scoped file access; sandbox isolation available
- **Shell**: Full shell command execution (exec tool) with approval gates and elevated mode

## Context

**Architecture**: OpenClaw runs a single Gateway process that manages agents, channels, sessions, and tools. Each agent has an isolated workspace and session store. Messages route deterministically to agents via bindings. The embedded pi-agent-core runtime executes the agent loop per session.

**Session model**: Each unique (agent, channel, peer) tuple gets a session key. Sessions persist transcripts as JSONL, auto-compact when context grows, and support memory extraction. Broadcast groups allow one message to trigger multiple agents.

**Tool execution**: Tools run in the agent's workspace (or sandbox if enabled). File paths are relative to workspace; absolute paths require sandbox disabled. Elevated mode allows host execution when sandboxed. Tool policies (allow/deny) apply before sandbox rules.

**Security model**: Sender allowlists gate commands and elevated access. Sandbox isolates execution; tool policy restricts available tools. Multi-agent setups can have per-agent sandbox + tool policies. Formal verification available for critical deployments.

**Streaming**: Agents stream assistant deltas and tool events in real-time. Block streaming chunks output by text_end or message_end. Channels support streaming replies (Discord, Feishu, etc.) or wait for full response.

**Model context**: System prompt includes workspace files (AGENTS.md, SOUL.md, TOOLS.md, IDENTITY.md, USER.md), skills list, tool schemas, and injected context. Compaction summarizes old transcripts to fit context windows. Prompt caching (Anthropic) reduces token costs.

**Plugins**: Extend OpenClaw with custom tools, channels, commands, and hooks. Plugins load from extensions directory or configured paths. Hooks run at agent/gateway lifecycle events and tool execution boundaries.

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt