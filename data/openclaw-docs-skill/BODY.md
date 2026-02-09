---
name: Clawdbot
description: Documentation and capabilities reference for Clawdbot
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

## Capabilities

OpenClaw enables agents to operate as always-on personal AI assistants across multiple messaging platforms. Agents can execute complex workflows including browser automation, file operations, system commands, scheduled tasks, and multi-agent coordination. The system provides deterministic tool execution, session persistence, memory management, and security controls through sandboxing and tool policies.

## Skills

### Messaging & Channels
- **Multi-channel support**: WhatsApp, Telegram, Discord, Slack, Google Chat, Mattermost, Signal, iMessage, MS Teams, Matrix, Zalo, LINE, Feishu
- **Message operations**: send (text + media), edit, delete, read, search
- **Reactions**: send/read emoji reactions (Discord, Slack, Telegram, WhatsApp, Signal)
- **Polls**: create and manage polls (WhatsApp, Discord, MS Teams)
- **Threads**: create, list, and reply to message threads
- **Media**: send/receive images, audio, documents, videos
- **Channel actions**: pin/unpin messages, manage permissions, member info, role management
- **Broadcast groups**: send to multiple recipients simultaneously

### Browser Automation
- **Browser control**: start/stop/focus/close tabs, navigate to URLs
- **UI snapshots**: get stable AI or ARIA tree representation of page
- **Actions**: click, type, drag, select using snapshot references
- **Screenshots**: capture full page or element screenshots, generate PDFs
- **Browser profiles**: manage multiple isolated browser profiles (openclaw, work, remote)
- **Login automation**: handle authentication flows with browser-based login
- **Multi-target**: run on sandbox, host, or paired nodes

### File Operations
- **Read**: read file contents with encoding support
- **Write**: create/overwrite files
- **Edit**: modify specific lines or ranges
- **Apply patch**: multi-file changes with structured patch format (add/update/delete)
- **Workspace isolation**: operations scoped to agent workspace

### System Execution
- **Exec tool**: run shell commands with timeout, background execution, TTY support
- **Process management**: poll, log, write to, kill, or clear background processes
- **Elevated mode**: run commands on host when sandboxed (with approval gates)
- **Environment control**: set working directory, environment variables
- **Bash shortcuts**: use `!` prefix for quick bash commands

### Web Tools
- **Web search**: Brave Search API (default) or Perplexity Sonar for AI-synthesized answers
- **Web fetch**: HTTP requests with HTML-to-markdown extraction
- **Provider flexibility**: configure custom search providers

### Scheduling & Automation
- **Cron jobs**: persistent scheduled tasks with cron expressions (e.g., "0 7 * * *" for 7am daily)
- **Heartbeat**: periodic checks on main session (configurable intervals)
- **Webhooks**: HTTP endpoints for external triggers
- **Hooks**: event-driven automation (session-memory, auth-monitoring, etc.)
- **Lobster workflows**: deterministic multi-step pipelines with approval gates
- **Background execution**: long-running tasks with status polling

### Agent Coordination
- **Sub-agents**: spawn background agent runs from existing sessions
- **Multi-agent routing**: isolate agents by workspace, sessions, and sender
- **Agent send**: trigger direct agent runs via CLI or RPC
- **Session isolation**: per-agent, per-workspace, or per-sender sessions
- **Tool policies**: per-agent tool restrictions and sandbox configurations

### Media & Devices
- **Canvas**: render UI on paired nodes (present, navigate, snapshot, A2UI)
- **Camera**: capture photos (jpg) and video clips (mp4) from nodes
- **Audio**: transcription support with configurable providers
- **Location**: get GPS coordinates from paired devices
- **Screen recording**: capture screen from macOS/iOS/Android nodes
- **Voice wake**: trigger agent from voice on macOS companion app

### Session & Memory Management
- **Sessions**: persistent conversation state per sender/workspace/agent
- **Memory search**: vector search over saved session context
- **Memory persistence**: disk-based memory files with unlimited storage
- **Session compaction**: automatic context window management
- **Session pruning**: clean up old sessions
- **Context assembly**: intelligent context building from history and memory

### Model Configuration
- **Provider support**: Anthropic, OpenAI, OpenRouter, Bedrock, Vercel AI Gateway, Moonshot, MiniMax, OpenCode, GLM, Z.AI, Qianfan, Venice, Synthetic
- **Model failover**: automatic fallback between models
- **Custom providers**: OpenAI-compatible proxies, LiteLLM, local models
- **Prompt caching**: Anthropic API prompt caching support
- **Model selection**: per-session model override via `/model` directive

### Thinking & Reasoning
- **Streaming reasoning**: `/reasoning stream` for real-time model thinking
- **Verbose mode**: `/verbose on|full|off` for detailed tool/system output
- **Thinking tool**: explicit reasoning before tool execution
- **Token tracking**: `/usage` to monitor token consumption

### Security & Sandboxing
- **Docker sandboxing**: optional container isolation for tool execution
- **Tool policies**: allow/deny lists at global, agent, and provider levels
- **Tool groups**: shortcuts like `group:fs`, `group:runtime`, `group:ui`
- **Elevated mode**: host execution with approval gates when sandboxed
- **Pairing**: secure device pairing for nodes
- **Allowlists**: sender-based access control per channel
- **OAuth**: secure authentication flows for channels and providers

### Slash Commands & Directives
- **Commands**: `/help`, `/status`, `/agent`, `/session`, `/model`, `/reset`, `/new`
- **Directives**: `/think`, `/verbose`, `/reasoning`, `/elevated`, `/exec`, `/model`, `/queue`
- **Custom commands**: plugins can register auto-reply commands
- **Inline shortcuts**: quick actions within messages (authorized senders only)

### Skills & Plugins
- **Skill system**: AgentSkills-compatible skill folders with SKILL.md
- **ClawHub**: public skill registry with versioning, search, and downloads
- **Plugin API**: register custom channels, commands, RPC methods, tools
- **Plugin loading**: from extensions directory or configured paths
- **Skill filtering**: environment and config-based skill availability

### Gateway & Operations
- **RPC protocol**: low-level method calls for automation
- **OpenAI HTTP API**: compatible endpoint for model inference
- **CLI backends**: local model support via CLI
- **Health checks**: gateway diagnostics and status
- **Logging**: structured logging with debug modes
- **Multiple gateways**: run multiple gateway instances
- **Remote access**: Tailscale integration for secure remote connections

## Workflows

### Browser-Based Automation
1. Start browser with `browser start`
2. Navigate to target URL with `browser navigate --url <url>`
3. Get UI snapshot with `browser snapshot` (returns AI or ARIA tree)
4. Perform actions using snapshot references: `browser act --action click --ref <id>`
5. Capture verification with `browser screenshot`
6. Close browser with `browser stop`

### Scheduled Task Execution
1. Create cron job: `openclaw cron add --name "Daily task" --cron "0 9 * * *" --message "Run analysis"`
2. Agent receives message at scheduled time
3. Agent executes task (file operations, API calls, etc.)
4. Results optionally delivered back to chat
5. View history: `openclaw cron list --json`

### Multi-Step Workflow with Approvals
1. Define Lobster workflow file (.lobster) with steps, conditions, and approval gates
2. Trigger via `lobster run --pipeline <file>`
3. Each step executes sequentially with output piped to next step
4. Approval steps pause execution until human approves
5. Conditional steps execute based on previous results
6. Final results delivered to specified channel

### Sub-Agent Delegation
1. Main agent spawns sub-agent: `agent_send --agent <id> --message "Analyze data"`
2. Sub-agent runs in isolated session with restricted tools
3. Sub-agent completes task and announces result
4. Result posted back to original chat channel
5. Main agent continues with sub-agent output

### Session Memory Workflow
1. Agent maintains conversation in session
2. On `/new` command, session context saved to memory via hook
3. Memory file created with timestamp and slug
4. Future sessions can search memory: `memory_search --query "previous topic"`
5. Relevant context pulled back into current session

### Multi-Channel Message Distribution
1. Compose message with `message send --target <id> --message "text"`
2. Specify channel: `--channel discord|slack|telegram|whatsapp`
3. Include media: `--media <path>`
4. For polls: `message poll --poll-question "Q?" --poll-option "A" --poll-option "B"`
5. Message delivered across specified channel(s)

## Integration

### Messaging Platform Integration
OpenClaw acts as a bridge between messaging platforms and AI agents. Each channel (WhatsApp, Telegram, Discord, etc.) connects via:
- **Direct polling**: long-polling for platforms without webhooks
- **Webhooks**: HTTPS endpoints for real-time delivery (LINE, Slack, Zalo)
- **OAuth**: secure authentication for platforms requiring user consent
- **Multi-account**: handle multiple accounts per channel simultaneously

### Model Provider Integration
Agents connect to LLM providers through:
- **API keys**: Anthropic, OpenAI, OpenRouter, etc.
- **OAuth**: OpenAI Code (Codex) subscription
- **Custom proxies**: OpenAI-compatible endpoints, LiteLLM
- **Local models**: Ollama and other local inference servers
- **Failover chains**: automatic fallback between configured models

### External Service Integration
- **HTTP webhooks**: trigger agent runs from external systems
- **RPC methods**: programmatic gateway control
- **CLI automation**: shell scripts calling OpenClaw commands
- **Browser automation**: interact with web services without APIs
- **File-based workflows**: Lobster pipelines for deterministic execution

### Node/Device Integration
- **Pairing**: secure connection to iOS/Android/macOS nodes
- **Canvas rendering**: UI presentation on mobile devices
- **Camera access**: photo/video capture from paired devices
- **Location services**: GPS coordinates from nodes
- **Voice control**: voice wake and voice calls on macOS

## Context

### Session Model
OpenClaw maintains persistent sessions per sender/workspace/agent combination. Each session tracks:
- **Transcript**: full conversation history in JSONL format
- **Context window**: model-specific token limits with compaction
- **Memory**: searchable long-term storage separate from context
- **State**: current model, reasoning level, verbose mode, etc.

### Security Model
Three complementary controls:
- **Sandbox**: Docker containers isolate tool execution (optional)
- **Tool policy**: allow/deny lists control which tools are available
- **Elevated mode**: escape hatch for host execution when sandboxed

Sender authorization via channel pairing/allowlists prevents unauthorized access.

### Tool Execution Model
Tools run through a deterministic loop:
1. Model generates tool call with parameters
2. Tool policy checks if tool is allowed
3. Sandbox check determines execution location (host vs container)
4. Approval gates may pause execution (if configured)
5. Tool executes and returns result
6. Result fed back to model for next iteration

### Message Delivery Model
Inbound messages route to agents via bindings (channel + account → agent). Outbound messages can:
- Route back to originating channel (default)
- Broadcast to multiple channels
- Deliver to specific targets (DM, channel, thread)
- Include media, reactions, polls, threads

### Reasoning & Transparency
- **Streaming reasoning**: model thinking visible in real-time (Telegram draft bubble)
- **Verbose output**: tool parameters, URLs, and intermediate results shown
- **Token tracking**: monitor input/output/cache token usage
- **Typing indicators**: show agent is thinking (configurable timing)

### Extensibility
OpenClaw supports plugins for:
- Custom messaging channels (register channel adapters)
- Custom tools (register RPC methods)
- Custom commands (register slash commands)
- Custom model providers (register via models.json)
- Event hooks (automation on session/message events)

Plugins load from extensions directory or configured paths and can be enabled/disabled without restart (most changes require restart).

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt