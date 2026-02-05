---
name: Clawdbot
description: Documentation and capabilities reference for Clawdbot
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

## Capabilities

OpenClaw is a comprehensive agent runtime platform that enables AI agents to operate across multiple messaging channels, execute complex workflows, and manage sophisticated multi-agent systems. Agents can send and receive messages on WhatsApp, Telegram, Discord, Slack, Signal, iMessage, MS Teams, and many other platforms. They can automate tasks through browser control, shell command execution, scheduled jobs, and deterministic workflows. The platform supports advanced features like sandboxed execution, multi-agent routing with workspace isolation, session management with memory persistence, and integration with multiple LLM providers.

## Skills

### Messaging & Channel Integration
- **Multi-channel messaging**: Send and receive messages across WhatsApp, Telegram, Discord, Slack, Google Chat, Mattermost, Signal, iMessage, MS Teams, Matrix, Zalo, Line, Feishu, and more
- **Message actions**: React to messages, edit, delete, pin/unpin, create threads, manage polls, search messages
- **Media support**: Send and receive images, audio, documents, and video across channels
- **Channel routing**: Route inbound messages to specific agents based on channel, account, peer, or guild/team
- **Group management**: Handle group messages, mentions, and broadcast groups
- **Native commands**: Support channel-native commands and features (e.g., Discord slash commands, Telegram inline buttons)

### Browser Automation & Web Access
- **Browser control**: Start/stop browser, manage tabs, navigate, take screenshots, interact with UI elements
- **UI automation**: Use stable UI tree snapshots (AI or ARIA) to click, type, drag, and select elements
- **Web search**: Search the web via Brave Search API (default) or Perplexity Sonar with real-time results
- **Web fetch**: HTTP fetch with readable extraction (HTML to markdown/text conversion)
- **Headless mode**: Run browser headless for lightweight automation
- **Profile management**: Use isolated OpenClaw browser profile or system Chrome profile
- **Node routing**: Auto-route to connected iOS/Android nodes or macOS app for browser control

### Workflow Automation & Scheduling
- **Cron jobs**: Schedule tasks at specific times or intervals with persistent job storage
- **Lobster workflows**: Run multi-step deterministic tool pipelines with explicit approval checkpoints
- **Webhooks**: Expose HTTP webhook endpoints for external system triggers
- **Polling**: Long-polling for message updates (alternative to webhooks)
- **Gmail Pub/Sub**: Trigger workflows on Gmail events via Google Cloud Pub/Sub
- **Auth monitoring**: Monitor authentication status and trigger actions on auth changes
- **Heartbeat**: Periodic agent wakeups for background tasks

### Command Execution & System Integration
- **Shell execution**: Run shell commands in the workspace with foreground/background support
- **Process management**: Manage long-running background processes with isolation per agent
- **Elevated mode**: Run commands on the host (when sandboxed) with optional approval gating
- **Sandbox execution**: Run commands in isolated Docker containers with configurable resource limits
- **File operations**: Read, write, and manipulate files in the workspace

### Multi-Agent Management
- **Agent isolation**: Run multiple isolated agents with separate workspaces, sessions, and configurations
- **Workspace isolation**: Each agent has its own workspace directory and session store
- **Per-agent routing**: Route messages to specific agents based on channel, account, peer, or guild
- **Per-agent models**: Configure different LLM models for different agents
- **Per-agent tools**: Restrict tool access per agent (allow/deny lists)
- **Sub-agents**: Spawn child agents from parent agents with configurable permissions
- **Agent-to-agent messaging**: Send messages between agents (optional, configurable)

### Session & Memory Management
- **Session persistence**: Store conversation history in JSONL format with automatic persistence
- **Session routing**: Route inbound messages to correct session based on sender/channel
- **Session pruning**: Automatically remove old sessions based on age or inactivity
- **Memory system**: Save session context to disk with LLM-generated summaries
- **Compaction**: Compress long conversations with automatic or manual triggers
- **Context management**: Track token usage and enforce context window limits
- **Session tools**: Query and manage sessions via CLI or RPC

### Media & Device Integration
- **Camera capture**: Capture photos (JPG) and video clips (MP4) from iOS/Android nodes or macOS app
- **Audio recording**: Record audio from device microphone
- **Location services**: Access device location data
- **Voice wake**: Trigger agent via voice commands
- **Talk mode**: Voice conversation with agents
- **Canvas**: Draw and interact with visual elements on mobile devices
- **Screen recording**: Record device screen (up to 60 seconds)

### Model Provider Integration
- **Multiple providers**: Support for OpenAI, Anthropic, OpenRouter, Vercel AI Gateway, Moonshot, MiniMax, GLM, Z.AI, Bedrock, and custom providers
- **Model failover**: Configure fallback models when primary model fails
- **Custom providers**: Add OpenAI-compatible or custom LLM providers with base URL configuration
- **Prompt caching**: Anthropic prompt caching support for API-based authentication
- **Model selection**: Per-agent or per-session model selection

### Skills & Extensions
- **ClawHub**: Public registry for discovering, installing, and publishing skills
- **Skill management**: Load skills from workspace, managed locations, or plugins
- **Plugin system**: Extend OpenClaw with custom tools, channels, and RPC methods
- **Skill versioning**: Semantic versioning with changelogs and tags
- **Skill search**: Vector search powered by embeddings
- **Skill publishing**: Back up and share custom skills publicly

### API & Integration
- **OpenAI HTTP API**: Serve OpenAI-compatible Chat Completions endpoint
- **Gateway RPC**: Call Gateway methods programmatically (wizard, config, cron, etc.)
- **Tools invoke API**: HTTP API for invoking tools directly
- **CLI backends**: Use OpenClaw as a backend for custom CLI tools
- **WebSocket protocol**: Real-time bidirectional communication with Gateway
- **Bridge protocol**: Connect remote gateways and nodes

### Security & Sandboxing
- **Docker sandboxing**: Run tools in isolated Docker containers
- **Tool policies**: Allow/deny specific tools per agent or globally
- **Sender allowlists**: Restrict elevated mode and sensitive operations to trusted senders
- **Token authentication**: Secure Gateway access with tokens
- **Workspace access control**: Configure read-only or read-write workspace access per agent
- **Formal verification**: Security proofs for critical operations

### Monitoring & Diagnostics
- **Health checks**: Monitor Gateway and agent health status
- **Logging**: Comprehensive logging with configurable levels
- **Doctor command**: Diagnose common issues and configuration problems
- **Session inspection**: Query session state and transcript history
- **Memory inspection**: View saved session memories
- **Usage tracking**: Track token usage and API costs
- **Event streaming**: Real-time event stream for lifecycle and tool execution

## Workflows

### Setting Up Multi-Agent System
1. Configure agents in gateway config with unique IDs and workspaces
2. Define bindings to route messages to specific agents by channel/account/peer
3. Set per-agent models, tools, and sandbox configurations
4. Enable agent-to-agent messaging if needed
5. Start Gateway and verify routing with test messages

### Automating a Scheduled Task
1. Create a cron job with `openclaw cron add --name "task-name" --every "0 9 * * *"` (9 AM daily)
2. Specify payload: `--system-event` for main session or `--message "text"` for isolated session
3. Optionally set `--deliver-to channel:target` to send output to a chat
4. Monitor with `openclaw cron list` and `openclaw cron runs --id <id>`
5. Edit or disable jobs with `openclaw cron edit <id>` or `openclaw cron disable <id>`

### Building a Browser Automation Workflow
1. Start browser with `browser.status()` or `browser.start()`
2. Navigate to URL with `browser.navigate(url)`
3. Take snapshot with `browser.snapshot()` to get stable UI tree
4. Interact with elements using snapshot ref IDs: `browser.act(ref: "123", action: "click")`
5. For text input: `browser.act(ref: "456", action: "type", text: "input")`
6. Capture results with `browser.screenshot()` for visual verification

### Creating a Deterministic Workflow with Approvals
1. Write a `.lobster` YAML file defining steps, commands, and approval gates
2. Call Lobster tool with pipeline path: `lobster(pipeline: "path/to/workflow.lobster")`
3. Lobster executes steps sequentially, passing output between steps via stdin
4. When approval is required, workflow pauses and waits for human decision
5. Resume with approval token: `lobster(resume: "token", approve: true/false)`
6. Workflow continues or cancels based on approval decision

### Integrating External Webhooks
1. Enable webhook in config: `gateway.http.webhooks.enabled: true`
2. Set webhook path: `gateway.http.webhooks.path: "/webhook"`
3. Configure channel webhook (e.g., Telegram): `channels.telegram.webhookUrl: "https://your-domain/webhook"`
4. External system POSTs to webhook endpoint
5. Gateway routes webhook payload to agent as a message
6. Agent processes and responds normally

### Managing Session Memory
1. Enable session-memory hook: `openclaw hooks enable session-memory`
2. When `/new` is called, hook extracts last 15 lines of conversation
3. LLM generates descriptive filename slug
4. Session metadata saved to `<workspace>/memory/YYYY-MM-DD-slug.md`
5. Query memories with `openclaw memory list` or `openclaw memory search "query"`
6. Memories are reloaded in future sessions for context

### Capturing Media from Mobile Devices
1. Pair iOS/Android node with Gateway via `openclaw nodes pair`
2. In agent workflow, call camera tool: `camera.snap(facing: "front")` for photo
3. Or `camera.clip(durationMs: 5000, includeAudio: true)` for video
4. Node returns base64-encoded media (JPG/MP4)
5. Agent can process, analyze, or forward media to channels
6. All access is gated behind user-controlled device permissions

## Integration

OpenClaw integrates with:
- **Messaging platforms**: WhatsApp, Telegram, Discord, Slack, Signal, iMessage, MS Teams, Google Chat, Mattermost, Matrix, Zalo, Line, Feishu, and more
- **LLM providers**: OpenAI, Anthropic, OpenRouter, Vercel AI Gateway, Moonshot, MiniMax, GLM, Z.AI, Bedrock, Ollama, and custom OpenAI-compatible servers
- **External systems**: Via webhooks, polling, Gmail Pub/Sub, and HTTP APIs
- **Mobile devices**: iOS and Android nodes for camera, audio, location, and canvas
- **macOS**: Native companion app with menu bar, voice wake, voice overlay, and webchat
- **Deployment platforms**: Fly.io, Hetzner, GCP, Railway, Render, Northflank
- **Reverse proxies**: Tailscale Serve/Funnel for secure remote access
- **Custom tools**: Plugin system for extending with new tools, channels, and RPC methods

## Context

**Agent Runtime**: OpenClaw runs a single embedded agent runtime derived from pi-mono. The agent loop is the authoritative execution path: intake → context assembly → model inference → tool execution → streaming replies → persistence.

**Context Window**: Everything sent to the model counts toward context limits: system prompt (rules, tools, skills, workspace files), conversation history, tool calls/results, and attachments. Use `/context list` to inspect context breakdown.

**Session Keys**: Sessions are identified by `agent:workspace:peer` tuples. Inbound messages are routed to the correct session based on sender and channel. Sessions persist in `sessions.json` with transcripts in JSONL format.

**Tool Execution**: Tools are exposed in two channels: system prompt text (human-readable guidance) and tool schema (structured function definitions). The model sees both "what tools exist" and "how to call them." Tools can be restricted per agent or globally via allow/deny policies.

**Sandbox vs Elevated**: Sandbox mode runs tools in Docker containers (isolated). Elevated mode allows running commands on the host when sandboxed (with optional approvals). Tool policy (allow/deny) is separate from sandbox mode and takes precedence.

**Model Failover**: Configure primary and fallback models. If the primary model fails, OpenClaw automatically retries with fallback models in order.

**Streaming**: Block streaming emits completed text blocks as the assistant writes (not token deltas). Telegram supports draft streaming (partial text updates in a bubble). Most channels receive final messages after generation completes.

**Retry Policy**: Outbound channel API calls retry on transient errors and rate limits with exponential backoff and jitter. Configure per-channel retry policies.

**Workspace**: Each agent has a workspace directory (default `~/.openclaw/workspace-<agentId>`) for storing files, sessions, memories, and logs. Sandbox mode can restrict workspace access (none/read-only/read-write).

**Plugins**: Plugins are loaded from `~/.openclaw/extensions`, `<workspace>/.openclaw/extensions`, and configured paths. They can register tools, channels, RPC methods, and ship their own skills. Enable/disable via config with per-plugin overrides.

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt