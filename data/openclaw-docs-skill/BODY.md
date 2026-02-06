---
name: Clawdbot
description: Documentation and capabilities reference for Clawdbot
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

## Capabilities

OpenClaw enables AI agents to operate autonomously across messaging platforms (WhatsApp, Telegram, Discord, Slack, iMessage, Signal, and 10+ others) with full tool access, session management, and workflow automation. Agents can execute shell commands, control browsers, capture media from devices, search the web, manage long-term memory, and coordinate with other agents—all within configurable security boundaries.

## Skills

### Messaging & Channel Integration
- **Multi-channel messaging**: Send/receive messages across WhatsApp, Telegram, Discord, Slack, Google Chat, Mattermost, Signal, iMessage, MS Teams, Feishu, Line, Matrix, Zalo, and more
- **Message actions**: React with emojis, edit, delete, pin/unpin messages, create threads, search message history
- **Media support**: Send and receive images, audio, documents, and video across channels
- **Polls**: Create and manage polls (WhatsApp, Discord, MS Teams)
- **Channel routing**: Route inbound messages to specific agents based on channel, account, peer, or guild
- **Group chat handling**: Mention-gating, group context injection, and per-group session isolation
- **Location sharing**: Send and receive location data (geo URI format)

### Agent Execution & Control
- **Agent loop**: Full agentic loop with intake → context assembly → model inference → tool execution → streaming replies → persistence
- **System prompt**: Custom system prompt built per agent run with dynamic context assembly
- **Session management**: Per-sender/peer/group sessions with automatic routing and isolation
- **Multi-agent routing**: Run multiple isolated agents in one Gateway with separate workspaces and sessions
- **Sub-agents**: Spawn child agents from parent agents for task delegation
- **Agent coordination**: Send messages between agents, coordinate multi-agent workflows

### Tool Execution
- **Shell execution**: Run bash/shell commands via `exec` tool with foreground/background support
- **Process management**: Manage long-running background processes with `process` tool
- **Browser automation**: Full browser control with snapshot (UI tree), screenshot, navigate, click, type, drag, select
- **Web tools**: Web search (Brave Search or Perplexity Sonar) and HTTP fetch with readable extraction
- **File operations**: Read, write, edit files and apply patches in workspace
- **Elevated mode**: Run commands on host when sandboxed (with approval gates)

### Media & Device Control
- **Camera**: Capture photos (JPG) and video clips (MP4) from paired iOS/Android nodes
- **Canvas**: Render UI on mobile devices, present content, evaluate A2UI components
- **Audio**: Record and play audio on nodes
- **Voice wake**: Trigger agents via voice on macOS/iOS
- **Location commands**: Get device location data

### Workflow Automation
- **Lobster workflows**: Deterministic multi-step pipelines with typed execution and resumable approvals
- **Cron jobs**: Schedule agent runs at fixed intervals
- **Heartbeat**: Periodic lightweight checks (every 30 min) for inbox scanning, calendar checks, task reviews
- **Webhooks**: Trigger agent runs via HTTP webhooks
- **Gmail PubSub**: Trigger on incoming emails via Google Cloud Pub/Sub
- **Polling**: Periodic polling of external services
- **Auth monitoring**: Monitor OAuth token expiration and refresh

### Memory & Context
- **Long-term memory**: Persistent memory files (memory.md, daily logs) for facts, preferences, decisions
- **Session memory**: Automatic context saving on `/new` command
- **Memory search**: Index and search session transcripts (experimental)
- **Context assembly**: Dynamic context window management with compaction
- **Session compaction**: Automatic or manual transcript compaction to manage token usage
- **Session pruning**: Remove old sessions based on age/inactivity

### Model Integration
- **Multiple providers**: OpenAI, Anthropic, OpenRouter, Vercel AI Gateway, Cloudflare AI Gateway, Moonshot (Kimi), Synthetic, OpenCode, Z.AI, GLM, MiniMax, Venice, Amazon Bedrock, Ollama
- **Model failover**: Primary + fallback models with automatic switching
- **Custom providers**: Support for OpenAI-compatible proxies and LiteLLM
- **Prompt caching**: Anthropic prompt caching support for cost optimization
- **Model selection**: Per-agent model configuration with provider/model syntax

### Security & Sandboxing
- **Docker sandboxing**: Run agents in isolated Docker containers
- **Tool policies**: Global, per-agent, and per-sandbox tool allow/deny lists
- **Elevated mode**: Controlled escape hatch for host execution with approval gates
- **Sender allowlists**: Restrict elevated/exec access by channel provider
- **Sandbox tool groups**: Predefined groups (runtime, fs, sessions, memory, ui, automation, messaging, nodes)
- **Formal verification**: Security properties verified via formal methods

### Streaming & Delivery
- **Block streaming**: Emit completed text blocks as assistant writes (configurable boundaries)
- **Retry policy**: Exponential backoff with jitter for transient failures
- **Message queuing**: Steer/followup/collect modes for handling concurrent inbound messages
- **Delivery modes**: Direct or Gateway-routed message delivery
- **Chunk management**: Configurable text chunking with paragraph/newline/sentence break preferences

### Skills & Extensions
- **Skills system**: AgentSkills-compatible SKILL.md files with YAML frontmatter
- **ClawHub**: Public skill registry with versioning, search, downloads, and community feedback
- **Plugins**: Extensible plugin system for custom tools, channels, and Gateway RPC methods
- **Slash commands**: Custom agent commands with `/` prefix
- **Voice call plugin**: Twilio integration for voice calls
- **Custom channels**: Write new messaging channels as plugins

### Gateway & Operations
- **Gateway protocol**: WebSocket-based RPC for agent control and monitoring
- **OpenAI HTTP API**: Expose agents via OpenAI-compatible HTTP endpoint
- **Tools invoke API**: HTTP API for direct tool invocation
- **Health checks**: Gateway health monitoring and diagnostics
- **Heartbeat**: Periodic gateway health signals
- **Logging**: Structured logging with verbose mode for debugging
- **Multiple gateways**: Run multiple Gateway instances with shared or isolated state
- **Remote access**: Tailscale integration for secure remote Gateway access
- **Pairing**: Secure node pairing with token-based verification
- **Discovery**: Bonjour/mDNS discovery for local node pairing

### Web Interfaces
- **Control UI**: Browser-based dashboard for chat, config, sessions, nodes
- **WebChat**: Web-based chat interface
- **Terminal UI**: TUI for local interaction
- **Dashboard**: Session and agent monitoring

## Workflows

### Setting Up Multi-Channel Agent
1. Install OpenClaw and start Gateway
2. Configure channel accounts (WhatsApp, Telegram, etc.) via wizard or config
3. Set agent model via `agents.defaults.model.primary`
4. Configure channel routing via `bindings` to map inbound to agent
5. Test with `openclaw message send` to verify delivery

### Browser Automation Workflow
1. Agent receives user request requiring web interaction
2. Call `browser.start()` to launch browser
3. Use `browser.snapshot()` to get UI tree with stable ref IDs
4. Call `browser.act()` with ref IDs to click/type/navigate
5. Use `browser.screenshot()` for visual confirmation
6. Call `browser.stop()` to close browser

### Deterministic Workflow with Approvals
1. Define `.lobster` YAML file with steps, commands, and approval gates
2. Agent calls `lobster` tool with pipeline path
3. Workflow executes steps sequentially
4. At `approval: required` step, workflow pauses and returns token
5. User approves via Control UI or CLI
6. Workflow resumes from approval point without re-running earlier steps

### Multi-Agent Coordination
1. Configure `agents.list[]` with multiple agent entries (separate workspaces)
2. Set `bindings[]` to route channels to specific agents
3. Parent agent calls `agent_send` tool to spawn child agent
4. Child agent runs in isolated session with own model/tools
5. Results returned to parent for aggregation

### Scheduled Automation
1. Create HEARTBEAT.md with checklist items (runs every 30 min)
2. Or define cron job with schedule and command
3. Gateway executes at scheduled time
4. Agent processes checklist or runs command
5. Results persisted in session memory

### Long-Term Memory Pattern
1. Create `memory/` directory in workspace
2. On session start, agent reads `memory.md` (durable facts) + today's log
3. During conversation, agent writes decisions/preferences to memory
4. Use `memory_search` to find relevant past context
5. On `/new`, session context auto-saves to daily log

## Integration

OpenClaw integrates with:
- **Messaging platforms**: 15+ channels via native adapters or plugins
- **LLM providers**: OpenAI, Anthropic, OpenRouter, and 10+ others
- **External APIs**: Via web_fetch, web_search, and custom skills
- **Webhooks**: Trigger agents from external services
- **Gmail**: PubSub integration for email-triggered automation
- **OAuth**: Support for OAuth-based authentication flows
- **Docker**: Sandboxed execution in isolated containers
- **Tailscale**: Secure remote Gateway access
- **Mobile devices**: iOS/Android nodes for camera, canvas, voice
- **macOS**: Companion app with menu bar, voice overlay, webchat, canvas

## Context

**Agent Architecture**: OpenClaw agents run in a serialized loop per session, maintaining consistent state across tool calls. Each run captures system prompt, tool schemas, and context window usage for transparency.

**Session Isolation**: Sessions are keyed by sender/peer/group and routed deterministically. Multi-agent setups use separate workspaces and session stores per agent, with explicit bindings controlling message flow.

**Tool Safety**: Tools are gated by global policy, per-agent policy, and sandbox mode. Elevated mode provides controlled host access when sandboxed. Approvals can be required for sensitive operations.

**Context Management**: Agents track token usage and automatically compact transcripts when approaching context limits. Memory search allows retrieval of relevant past context without loading full history.

**Streaming**: Block streaming emits completed text chunks as the model writes, with configurable boundaries (text_end vs message_end). Telegram supports draft streaming for real-time UI updates.

**Retry & Delivery**: Outbound messages retry on transient failures with exponential backoff. Queue modes (steer/followup/collect) handle concurrent inbound messages deterministically.

**Plugins**: Extend OpenClaw with custom tools, channels, and Gateway RPC methods. Plugins are loaded from extensions directories and validated at startup.

**Skills**: SKILL.md files teach agents how to use tools. Skills are bundled, can be overridden locally, and are discoverable via ClawHub with versioning and community feedback.

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt