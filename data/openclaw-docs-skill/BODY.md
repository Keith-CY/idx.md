---
name: Clawdbot
description: Documentation and capabilities reference for Clawdbot
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

## Capabilities

OpenClaw is a personal AI assistant platform that enables agents to interact across multiple messaging channels (WhatsApp, Telegram, Discord, Slack, Signal, iMessage, MS Teams, Google Chat, Mattermost, and more) while providing powerful automation, tool execution, and multi-agent coordination. Agents can execute shell commands, automate workflows, browse the web, control browsers, manage sessions with persistent memory, and coordinate with other agents—all with configurable security sandboxing and access controls.

## Skills

### Messaging & Channel Integration
- **Multi-channel messaging**: Send/receive messages across WhatsApp, Telegram, Discord, Slack, Signal, iMessage, MS Teams, Google Chat, Mattermost, Matrix, LINE, Zalo, and more
- **Message actions**: Send text + media, create polls, react to messages, edit/delete messages, manage threads, pin/unpin messages
- **Channel capabilities**: Direct messages, group chats, threads, media support, reactions, location sharing, native commands
- **Channel routing**: Route inbound messages to specific agents via bindings; support for multi-account setups per channel
- **Group management**: Configure group-specific routing, broadcast groups, and channel-level permissions

### Tool Execution & Automation
- **Exec tool**: Run shell commands with foreground/background execution, timeout control, and optional elevated (host) mode
- **Process management**: Background task execution with session tracking and output buffering
- **Web tools**: Web search (Brave Search API or Perplexity Sonar) and web_fetch (HTTP + readable content extraction)
- **Browser automation**: Full browser control including snapshot (UI tree), screenshot, navigation, form interaction, and login flows
- **File operations**: Read/write files in agent workspace with sandbox isolation options
- **Elevated mode**: Escape hatch to run commands on gateway host when sandboxed, with optional approval gating

### Agent Architecture & Sessions
- **Agent loop**: Full agentic cycle—intake → context assembly → model inference → tool execution → streaming replies → persistence
- **Session management**: Per-session state tracking, transcript persistence (JSONL), session routing via sessionKey/sessionId
- **Memory & compaction**: Automatic context window management, session compaction to summarize history, memory file generation
- **Session tools**: List/search/send to sessions, spawn sub-agents, manage session state
- **Streaming responses**: Real-time response streaming with block chunking, human-like pacing, and partial reply support

### Multi-Agent Coordination
- **Multi-agent routing**: Multiple isolated agents with separate workspaces, agentDir, and sessions in one Gateway
- **Sub-agents**: Background agent spawns that run in isolated sessions and report results back to requester
- **Agent send tool**: Send messages between agents or to external channels
- **Sandbox per-agent**: Different security profiles (sandbox vs host, tool restrictions) per agent
- **Presence & discovery**: Multi-agent presence tracking and service discovery

### Automation & Scheduling
- **Cron jobs**: Gateway-level scheduler for precise timing (daily reports, weekly reviews, one-shot reminders)
- **Heartbeat**: Periodic agent wake-up (default 30 min) for context-aware checks and batched operations
- **Webhooks**: HTTP endpoints for external integrations (Gmail, custom services) with token auth and template mapping
- **Gmail integration**: Gmail Pub/Sub watch for real-time email notifications
- **Polling**: Periodic polling of external services
- **Auth monitoring**: Monitor and react to authentication state changes

### Model & Provider Management
- **Multiple LLM providers**: OpenAI, Anthropic, OpenRouter, Vercel AI Gateway, Moonshot (Kimi), Synthetic, OpenCode, GLM, MiniMax, Z.AI, Bedrock, and custom OpenAI-compatible proxies
- **Model failover**: Automatic fallback to secondary models on auth/rate-limit/timeout
- **Prompt caching**: Anthropic prompt caching support for cost reduction
- **Reasoning modes**: Extended thinking with streaming reasoning output, verbose mode for debugging
- **Model aliases**: Define custom model shortcuts for easy switching

### Skills & Extensions
- **Skills system**: Versioned bundles (SKILL.md + supporting files) that teach agents new capabilities
- **ClawHub registry**: Public skill registry with search, versioning, downloads, stars, and community feedback
- **Plugin system**: Extend OpenClaw with custom tools, channels, RPC methods, and skills
- **Skill discovery**: Vector search powered discovery with metadata filtering and usage signals
- **Skill installation**: CLI-based skill management (search, install, update, publish)

### Security & Sandboxing
- **Docker sandboxing**: Optional container isolation for tool execution with per-agent configuration
- **Tool policy**: Allow/deny lists for tools at global and per-agent levels
- **Elevated mode**: Sender-based allowlist for host execution escape hatch
- **Exec approvals**: Optional approval gating for command execution
- **Prompt injection mitigation**: System prompt guardrails, tool policy enforcement, channel allowlists, and sandbox isolation

### Media & Devices
- **Images**: Send/receive images with optional OCR and vision processing
- **Audio**: Audio message support with text-to-speech (OpenAI, ElevenLabs, Edge TTS)
- **Camera**: Camera access for image capture on supported platforms
- **Voice wake**: Voice activation on macOS and supported devices
- **Location**: Location sharing and retrieval via geo URIs
- **Voice calls**: Plugin-based voice calling (Twilio, Telnyx, Plivo) with streaming audio and multi-turn conversations

### Context & System Prompt
- **Dynamic system prompt**: OpenClaw-built prompt including tools, skills, workspace, time, and runtime metadata
- **Context injection**: Inject workspace files and custom context into system prompt
- **Prompt modes**: Full (default), minimal (sub-agents), or none
- **Context reporting**: /context command shows system prompt size and contributors
- **Token tracking**: Usage tracking per run with cost calculation

### Web Interfaces & Control
- **Control UI**: Web-based dashboard for configuration, session management, and monitoring
- **Terminal UI (TUI)**: Real-time chat interface with streaming responses and tool event cards
- **WebChat**: Browser-based chat interface for agents
- **Dashboard**: Session overview, agent status, and system health monitoring

## Workflows

### Setting Up a Multi-Channel Agent
1. Install OpenClaw and run the wizard: `openclaw setup`
2. Configure channel accounts (WhatsApp, Telegram, etc.) via the wizard or config
3. Set agent defaults: model, workspace, sandbox settings
4. Enable desired tools and configure tool policies
5. Test with `/status` to verify channel connectivity
6. Deploy to production (local, Docker, cloud platform)

### Automating Daily Tasks with Cron
1. Create a cron job: `openclaw cron add --name "Morning brief" --cron "0 7 * * *" --message "Generate today's summary"`
2. Optionally deliver output to a channel: `--deliver --channel whatsapp --to <number>`
3. Use a specific model: `--model openrouter/meta-llama/llama-3.3-70b-instruct:free`
4. List jobs: `openclaw cron list`
5. Remove when done: `openclaw cron remove <job-id>`

### Integrating External Services via Webhooks
1. Enable webhooks in config: `hooks.enabled: true`
2. Set up a mapping: `hooks.mappings[0].match.path: "gmail"` → `hooks.mappings[0].transform: "path/to/handler.js"`
3. Configure Gmail Pub/Sub: `openclaw webhooks gmail setup`
4. Receive notifications: POST to `/hooks/gmail` with Gmail event payload
5. Agent processes and optionally delivers reply to chat

### Running Commands in a Sandbox
1. Enable sandbox: `agents.defaults.sandbox.enabled: true`
2. Configure Docker: `agents.defaults.sandbox.docker.image: "ubuntu:latest"`
3. Agent calls exec tool: `/exec npm install && npm test`
4. Command runs in isolated container with workspace mounted
5. Output returned to agent; host filesystem protected

### Spawning Sub-Agents for Parallel Work
1. Main agent calls: `agent_send { action: "spawn", prompt: "Analyze this dataset", model: "claude-opus" }`
2. Sub-agent runs in background session: `agent:<agentId>:subagent:<uuid>`
3. Sub-agent completes and announces result to requester channel
4. Main agent continues with sub-agent output
5. Control concurrency: `agents.defaults.subagents.maxConcurrent: 8`

### Building and Publishing a Skill
1. Create skill directory: `mkdir -p skills/my-skill`
2. Write SKILL.md with capabilities, skills, workflows, integration, and context sections
3. Add supporting files (scripts, configs, templates)
4. Publish to ClawHub: `openclaw clawhub publish ./skills/my-skill`
5. Users discover and install: `openclaw clawhub install my-skill`
6. Skill teaches agent new tool capabilities via prompt injection

## Integration

### Channel Integrations
OpenClaw integrates with 15+ messaging platforms via native channel adapters. Each channel supports:
- Account management (multi-account per channel)
- Capability probing (feature detection)
- Outbound delivery (text, media, polls, reactions)
- Inbound routing (DMs, groups, threads)
- Native commands and actions

### Model Provider Integration
Agents can switch between providers and models dynamically:
- Direct API integration (OpenAI, Anthropic, OpenRouter)
- Custom OpenAI-compatible proxies (LiteLLM, local servers)
- Model failover chains for reliability
- Per-run model override via hooks or CLI

### External Service Integration
- **Gmail**: Real-time email notifications via Pub/Sub
- **HTTP webhooks**: Generic webhook endpoint for any service
- **Custom plugins**: Extend with JavaScript/TypeScript modules
- **RPC methods**: Register custom Gateway RPC endpoints for programmatic control

### Browser & Web Integration
- **Browser automation**: Full Chromium control via CDP (Chrome DevTools Protocol)
- **Web search**: Brave Search API or Perplexity Sonar for real-time information
- **Web fetch**: Readability + Firecrawl for content extraction
- **Login flows**: Browser-based authentication for protected sites

## Context

### Agent Architecture
OpenClaw uses an embedded agent runtime (pi-agent-core) that runs a serialized agent loop per session. Each loop is atomic: intake → context assembly → model inference → tool execution → streaming replies → persistence. Sessions are routed via sessionKey (agent:agentId:channel:target) and persisted in JSONL transcripts.

### Session & Memory Model
Sessions track conversation history, tool results, and metadata. Context is bounded by the model's context window; when approaching limits, compaction summarizes history. Memory files can be saved to disk and reloaded in future sessions. Sessions are isolated per agent; multi-agent setups use separate workspaces and agentDir paths.

### Tool Execution Model
Tools run in the agent's workspace (default cwd). Sandboxing moves execution to Docker containers. Elevated mode allows host execution when sandboxed. Tool policy (allow/deny) is enforced before sandbox rules. Exec approvals can gate sensitive commands. Background processes are kept in memory and polled via the process tool.

### Security Model
Three independent controls:
1. **Sandbox**: Where tools run (Docker vs host)
2. **Tool policy**: Which tools are available (allow/deny lists)
3. **Elevated mode**: Escape hatch for host exec when sandboxed

Prompt injection is mitigated via system prompt guardrails, tool policy, exec approvals, sandboxing, and channel allowlists. Model choice matters; modern instruction-hardened models (e.g., Anthropic Opus 4.5) are more robust.

### Streaming & Real-Time Behavior
Responses stream in real-time as the model generates text. Block streaming sends partial replies at configurable chunk sizes. Reasoning can stream separately or as block replies. Human-like pacing adds randomized delays between blocks. Typing indicators show agent activity with configurable modes (instant, thinking, message, never).

### Skills & Extensibility
Skills are versioned bundles that teach agents new capabilities via prompt injection. ClawHub is the public registry. Plugins extend OpenClaw with tools, channels, and RPC methods. Both skills and plugins participate in the agent loop and can be gated via config.

### Multi-Agent Patterns
Multi-agent setups support:
- **Routing**: Inbound messages routed to agents via bindings
- **Sub-agents**: Background spawns that report results back
- **Coordination**: Agent-to-agent messaging via agent_send tool
- **Isolation**: Separate workspaces, agentDir, sessions, and tool policies per agent
- **Presence**: Discovery and presence tracking across agents

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt