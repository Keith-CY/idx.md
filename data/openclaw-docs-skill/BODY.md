---
name: Clawdbot
description: Documentation and capabilities reference for Clawdbot
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

## Capabilities

OpenClaw enables AI agents to operate across multiple messaging channels with sophisticated automation, tool integration, and multi-agent coordination. Agents can handle direct messages and group chats, execute shell commands, control browsers, manage scheduled tasks, and coordinate with other agents—all through a unified Gateway architecture.

## Skills

### Messaging & Channels
- **Multi-channel support**: WhatsApp, Telegram, Discord, iMessage, Slack, Mattermost, Signal, MS Teams, Google Chat, Feishu, Matrix, Line, Zalo
- **Message actions**: Send text/media, react with emoji, edit/delete messages, create/reply to threads, pin/unpin messages
- **Group chat handling**: Mention patterns, group activation rules, broadcast groups (multiple agents responding to same message)
- **Media support**: Send and receive images, audio, documents, location data
- **Channel routing**: Bind inbound messages to specific agents via configurable routing rules

### Browser Automation
- **Browser tool**: Full browser control with snapshot (UI tree), screenshot (pixels), navigation, click/type/drag actions
- **Profile support**: Named browser profiles (openclaw, chrome, remote CDP)
- **Target selection**: Run in sandbox, host, or connected mobile node
- **Web tools**: Web search (Brave Search or Perplexity), HTTP fetch with readable extraction

### Agent Execution & Control
- **Agent loop**: Full agentic cycle—intake, context assembly, model inference, tool execution, streaming replies, persistence
- **Session management**: Per-session isolation, session reset/compaction, context window management
- **Memory system**: Automatic memory flush before compaction, durable notes storage
- **Thinking modes**: Off/minimal/low/medium/high reasoning levels with streaming support
- **Verbose output**: Debug mode for tool calls and internal reasoning

### Automation & Scheduling
- **Cron jobs**: Persistent scheduled tasks with precise timing (cron expressions)
- **Heartbeat**: Periodic agent checks (every 30 min) for reactive tasks
- **Webhooks**: Inbound HTTP endpoints to trigger agent runs
- **Gmail PubSub**: React to incoming emails
- **Polling**: Periodic checks for external data
- **Auth monitoring**: Track authentication state changes

### Tool Execution
- **Exec tool**: Run shell commands with foreground/background execution, TTY support, timeout control
- **Elevated mode**: Host execution for sandboxed agents with approval gating
- **Process management**: Background process tracking and output streaming
- **LLM task**: Structured JSON-only LLM steps with optional schema validation
- **Lobster**: Typed workflow runtime with resumable approvals

### Multi-Agent Coordination
- **Sub-agents**: Spawn background agent runs that announce results back to requester
- **Agent-to-agent messaging**: Send messages between agents with ping-pong conversation support
- **Workspace isolation**: Separate workspaces, agent directories, and sessions per agent
- **Agent routing**: Deterministic message routing via bindings (channel, account, peer, guild/team)
- **Presence tracking**: Monitor which agents are active

### Media & Devices
- **Camera**: Capture images from connected nodes
- **Audio**: Record and process audio from devices
- **Location**: Get device location data
- **Voice wake**: Wake agent on voice trigger
- **Talk mode**: Voice interaction with agents
- **Canvas**: HTML/CSS/JS UI rendering on iOS/Android nodes with live reload

### Advanced Features
- **Slash commands**: Built-in commands (/help, /status, /model, /think, /verbose, /reasoning, /elevated, /new, /reset, /compact)
- **Custom commands**: Plugin-registered auto-reply commands without LLM invocation
- **Reactions**: Send/read emoji reactions across channels
- **Streaming**: Real-time message streaming with typing indicators
- **Retry & queue**: Message delivery retry logic and queue management
- **Prompt caching**: Anthropic API prompt caching support

## Workflows

### Setting Up Multi-Agent Routing
1. Define agents in `agents.list[]` with unique IDs, workspaces, and optional model overrides
2. Create bindings to route inbound messages: `bindings[].match.channel`, `match.accountId`, `match.peer`
3. Specify target `agentId` for each binding
4. Restart Gateway to apply routing configuration
5. Verify routing with `openclaw agents list` and test with messages

### Automating Daily Tasks with Cron
1. Create a cron job: `openclaw cron add --name "Morning brief" --cron "0 7 * * *" --session isolated --message "..."`
2. Optionally add `--announce` to deliver output to a chat channel
3. Use `--model` to override the default model for this job
4. List jobs: `openclaw cron list`
5. Remove jobs: `openclaw cron remove <id>`

### Browser Automation Workflow
1. Agent calls `browser snapshot` to get stable UI tree with ref IDs
2. Agent calls `browser act` with ref IDs to click/type/drag/select
3. Agent calls `browser screenshot` to capture pixels for verification
4. Agent calls `browser navigate` to change URLs
5. Use `target: "sandbox"` for sandboxed execution or `target: "host"` for host execution

### Spawning Sub-Agents for Parallel Work
1. Agent calls `sessions_spawn` with task description and optional label
2. Sub-agent runs in isolated session (`agent:<agentId>:subagent:<uuid>`)
3. Sub-agent completes and announces result back to requester chat
4. Use `/subagents list` to monitor running sub-agents
5. Use `/subagents stop <id>` to cancel a sub-agent run

### Handling Group Messages with Broadcast Groups
1. Configure broadcast groups in WhatsApp channel config
2. Specify multiple agents to respond to same message
3. Each agent processes independently with isolated sessions
4. Responses are delivered in parallel
5. Useful for specialized agent teams working together

## Integration

### Model Providers
OpenClaw integrates with multiple LLM providers:
- **Anthropic**: Claude models with prompt caching support
- **OpenAI**: GPT-4, GPT-3.5 with fallback chains
- **OpenRouter**: Unified API for 200+ models
- **Local models**: Ollama (OpenAI-compatible API)
- **Other providers**: Moonshot, MiniMax, GLM, Qianfan, Synthetic, ZAI

### OpenAI-Compatible HTTP API
- Enable with `gateway.openai.enabled: true`
- Endpoint: `POST /v1/chat/completions`
- Same port as Gateway (WS + HTTP multiplex)
- Requests execute as normal agent runs with full routing/permissions

### Plugins & Extensions
- **Voice Call**: Twilio, Telnyx, Plivo providers for outbound/inbound calls
- **Custom channels**: Register new messaging platforms via plugin API
- **Custom tools**: Extend agent capabilities with plugin-registered tools
- **Custom commands**: Auto-reply commands without LLM invocation
- **Gateway RPC methods**: Register custom RPC endpoints for external clients

### Web Interfaces
- **Control UI**: Browser dashboard for chat, config, sessions, nodes
- **Terminal UI (TUI)**: Full-featured terminal interface
- **WebChat**: Web-based chat interface
- **Canvas host**: HTTP server for HTML/CSS/JS UI on mobile nodes

### Remote Access
- **Tailscale**: Secure remote access via Tailscale network
- **Remote gateway**: SSH-based remote gateway access
- **Bonjour discovery**: Local network device discovery

## Context

### Architecture
OpenClaw uses a Gateway architecture where all clients (CLI, web UI, macOS app, iOS/Android nodes) connect via WebSocket. The Gateway manages agent execution, session state, message routing, and tool invocation. Agents run in isolated workspaces with per-session context windows.

### Session & Memory Management
Sessions persist in `~/.openclaw/agents/<agentId>/sessions/` as JSONL transcripts. Auto-compaction triggers when context nears the model's window limit, creating a summary and retaining recent messages. Memory flush runs before compaction to allow agents to write durable notes. Manual compaction via `/compact` is available.

### Security Model
- **Sandbox mode**: Agents run in isolated Docker containers with restricted filesystem/network access
- **Tool policy**: Per-agent allow/deny lists for tools
- **Elevated mode**: Host execution with approval gating for sensitive operations
- **Sender allowlists**: Channel-specific access control
- **Pairing**: Device-based approval for iOS/Android nodes

### Configuration
Core config lives in `~/.openclaw/config.json` with sections for:
- `agents.list[]`: Agent definitions with workspace, model, sandbox settings
- `bindings[]`: Message routing rules
- `channels.<id>`: Channel-specific config (API keys, account IDs, policies)
- `tools.*`: Tool enablement and per-tool config
- `gateway.*`: Gateway behavior (ports, logging, health checks)

### Token Usage & Cost
- Token usage tracked per run and session
- Sub-agents have separate token budgets
- Reasoning tokens count toward usage
- Prompt caching (Anthropic) reduces token consumption
- Configure cheaper models for sub-agents via `agents.defaults.subagents.model`

### Typing Indicators
Configurable typing indicator modes:
- `never`: No typing indicator
- `instant`: Start typing immediately
- `thinking`: Start on first reasoning delta
- `message`: Start on first text delta

### Error Handling
- **Retry logic**: Automatic message delivery retries with exponential backoff
- **Queue management**: Messages queued during agent unavailability
- **Timeout handling**: Configurable per-run timeouts with graceful abort
- **Health checks**: Gateway health endpoint for monitoring
- **Diagnostics**: `openclaw gateway doctor` for troubleshooting

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt