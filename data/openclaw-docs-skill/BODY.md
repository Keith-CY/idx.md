---
name: Clawdbot
description: Self-hosted gateway that connects WhatsApp, Telegram, Discord, iMessage, and more to AI coding agents. Run a single Gateway process on your own machine and message your AI assistant from anywhere.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

## Capabilities

OpenClaw empowers AI agents to operate across messaging platforms (WhatsApp, Telegram, Discord, Slack, Signal, iMessage, MS Teams, and more) with a unified gateway. Agents can execute shell commands, automate browsers, manage files, coordinate with sub-agents, schedule tasks, and maintain persistent sessions with memory management. The platform provides multi-agent routing, sandboxed execution, and comprehensive security controls for safe, isolated agent operations.

## Skills

### Messaging & Channels
- **Multi-channel gateway**: Send and receive messages across WhatsApp, Telegram, Discord, Slack, Mattermost, Signal, iMessage, MS Teams, Google Chat, Feishu, Matrix, Zalo, and LINE with a single Gateway process
- **Message operations**: Send text + media, create/reply to threads, manage reactions, edit/delete messages, pin/unpin, create polls, handle mentions and group routing
- **Channel routing**: Route inbound messages to specific agents based on channel, account, peer, guild, or team with deterministic matching
- **Media support**: Send and receive images, audio, documents, and location data across channels
- **Native commands**: Support platform-specific commands and features (Discord threads, Slack reactions, WhatsApp polls, etc.)

### Agent Execution & Tools
- **Browser automation**: Control browsers via snapshot (UI tree), screenshot (pixels), navigate, click, type, drag, and select operations with ref-based actions
- **Web tools**: Search the web via Brave Search API or Perplexity Sonar; fetch and extract HTML to markdown/text
- **Shell execution**: Run shell commands with `exec` tool supporting foreground and background execution via `process` tool
- **File operations**: Read, write, edit files; apply structured multi-file patches with `apply_patch` tool
- **LLM task delegation**: Use `llm_task` tool to delegate sub-tasks to the model within the same session
- **Thinking & reasoning**: Enable extended thinking for complex problem-solving with verbose output
- **Reactions**: Send and read message reactions across supported channels

### Sessions & Memory
- **Session management**: Create isolated sessions per chat, user, or workspace with persistent JSONL-based storage
- **Memory system**: Store and retrieve session context, compaction, and memory search across agent runs
- **Session pruning**: Automatically prune old sessions based on age or token count
- **Session tools**: List sessions, retrieve history, spawn new sessions, send messages to other sessions, check session status
- **Context assembly**: Automatic context building from workspace files (SOUL.md, IDENTITY.md, TOOLS.md, AGENTS.md, USER.md, HEARTBEAT.md, BOOTSTRAP.md)
- **Compaction**: Compress session history while preserving key context and token budget awareness

### Multi-Agent Coordination
- **Multi-agent routing**: Run multiple isolated agents with separate workspaces, agentDir, and sessions in one Gateway
- **Sub-agents**: Spawn background sub-agents for parallel tasks (research, analysis, file processing) without blocking main conversation
- **Agent send**: Send messages between agents and coordinate workflows
- **Agent presence**: Track agent availability and status across the system
- **Workspace isolation**: Per-agent or per-session sandbox workspaces with configurable access (none, read-only, read-write)

### Automation & Scheduling
- **Cron jobs**: Schedule recurring or one-shot tasks with precise timing (daily, weekly, custom cron expressions)
- **Heartbeat**: Periodic agent wake-ups (every 30 minutes) for background checks and notifications
- **Webhooks**: Trigger agent runs from external HTTP requests with optional authentication
- **Gmail Pub/Sub**: Monitor Gmail inbox and trigger agent runs on new messages
- **Polling**: Periodically check external systems and trigger agent actions
- **Auth monitoring**: Watch for authentication changes and trigger workflows

### Security & Sandboxing
- **Docker sandboxing**: Run agent tools in isolated Docker containers with configurable resource limits
- **Tool policies**: Global, per-agent, and per-sandbox tool allow/deny lists with group shortcuts (group:runtime, group:fs, group:ui, group:automation, etc.)
- **Elevated mode**: Escape hatch for sandboxed agents to run commands on the host with optional approval gating
- **Sender allowlists**: Restrict elevated access by sender (channel + account + peer)
- **Sandbox vs Tool Policy vs Elevated**: Three-layer security model for granular control over execution context and tool availability
- **Formal verification**: Security properties formally verified for critical paths

### Models & Providers
- **Multi-provider support**: OpenAI, Anthropic, OpenRouter, Vercel AI Gateway, Bedrock, Moonshot, MiniMax, GLM, Qianfan, Synthetic, and custom OpenAI-compatible providers
- **Model failover**: Configure primary and fallback models per agent with automatic switching
- **Prompt caching**: Anthropic prompt caching support for reduced latency and cost
- **Custom providers**: Add LiteLLM, local OpenAI-compatible servers, or Anthropic proxies via models.json or config
- **Model selection**: Per-agent model overrides with string or object configuration

### Platforms & Nodes
- **iOS/Android nodes**: Pair mobile devices as remote execution nodes with Canvas support
- **Canvas rendering**: Render HTML/CSS/JS on mobile nodes with live reload and A2UI framework
- **Voice wake**: Voice activation on macOS and mobile nodes
- **Camera & audio**: Capture images, audio, and video from mobile nodes
- **Location**: Send and receive location data from mobile devices
- **macOS companion app**: Menu bar integration, voice overlay, webchat, and bundled gateway

### APIs & Protocols
- **WebSocket RPC**: Full-duplex communication with Gateway via WebSocket protocol
- **OpenAI HTTP API**: Serve OpenAI-compatible Chat Completions endpoint from the Gateway
- **Bridge protocol**: Custom protocol for node-to-gateway communication
- **CLI backends**: Use Gateway as backend for CLI tools
- **Local models**: Run local LLMs (Ollama) with OpenAI-compatible API

### Advanced Features
- **Streaming**: Block streaming with configurable chunking and coalescing for real-time responses
- **Queue modes**: Steer (inject into current run), followup (next turn), collect (coalesce messages), or interrupt
- **Retry policy**: Exponential backoff with ordering preservation and idempotency
- **Message delivery**: Guaranteed delivery with retry, acknowledgment reactions, and response prefixes
- **Typing indicators**: Show typing status while agent is processing
- **Slash commands**: Built-in commands like /new, /reset, /compact, /context, /queue, /elevated, /subagents
- **Skills system**: AgentSkills-compatible skill folders with YAML frontmatter and filtering by environment/config
- **Plugins**: Extend with custom channels, model providers, tools, and gateway RPC methods

## Workflows

### Setting Up a Multi-Channel Agent
1. Start the Gateway: `openclaw gateway`
2. Configure channels in config (WhatsApp, Telegram, Discord, etc.) with account credentials
3. Set up channel routing via bindings to route messages to specific agents
4. Define agent identity (name, emoji, theme) in IDENTITY.md
5. Configure system prompt context in SOUL.md and TOOLS.md
6. Access Control UI at http://127.0.0.1:18789/ to chat and manage sessions

### Automating a Daily Task
1. Create a cron job: `openclaw cron add --name "Daily report" --cron "0 9 * * *" --session isolated --message "Generate daily report"`
2. Agent runs at 9 AM daily in an isolated session
3. Output is announced to a configured channel (--announce flag)
4. Use --deliver to send to specific channel/peer, or --no-deliver to keep internal

### Running a Browser Automation Task
1. Agent calls `browser navigate https://example.com`
2. Agent calls `browser snapshot` to get UI tree with ref IDs
3. Agent calls `browser act` with ref IDs to click/type/drag
4. Agent calls `browser screenshot` to capture pixels for verification
5. Results are streamed back to the chat in real-time

### Spawning Sub-Agents for Parallel Work
1. Main agent calls `sessions_spawn` with task and agent ID
2. Sub-agent runs in isolated session with reduced system prompt
3. Main agent continues processing while sub-agent works
4. Use `/subagents list` to monitor active runs
5. Use `/subagents send <id> "message"` to communicate with running sub-agent
6. Sub-agent announces completion back to main session

### Implementing Sandbox Execution
1. Enable sandbox globally: `agents.defaults.sandbox.mode: "non-main"`
2. Configure Docker image and resource limits
3. Set tool policy to allow only safe tools: `tools.allow: ["read", "exec", "process"]`
4. Deny dangerous tools: `tools.deny: ["write", "edit", "browser"]`
5. For host access, use elevated mode with sender allowlist: `tools.elevated.allowFrom.telegram: ["user123"]`

### Integrating with External Systems
1. Set up webhook: `openclaw webhooks setup --hook-url https://myapp.com/webhook`
2. External system POSTs to webhook with message payload
3. Gateway routes to agent and executes agent run
4. Configure delivery target to send results back to external system
5. Use Gmail Pub/Sub for email-triggered workflows or polling for periodic checks

## Integration

OpenClaw integrates with:
- **Messaging platforms**: WhatsApp (via Twilio), Telegram, Discord, Slack, Signal, iMessage, MS Teams, Google Chat, Mattermost, Feishu, Matrix, Zalo, LINE
- **Model providers**: OpenAI, Anthropic, OpenRouter, Bedrock, Vercel AI Gateway, Moonshot, MiniMax, GLM, Qianfan, Synthetic, custom OpenAI-compatible APIs
- **Voice**: Twilio, Telnyx, Plivo for voice calls and notifications
- **Email**: Gmail Pub/Sub for inbox monitoring
- **Mobile**: iOS and Android nodes for remote execution and canvas rendering
- **Execution**: Docker for sandboxing, local shell for direct execution
- **Storage**: File-based sessions and memory (JSONL, markdown)
- **Webhooks**: HTTP POST from external systems to trigger agent runs
- **OpenAI-compatible clients**: Any client using OpenAI SDK can connect to Gateway's HTTP API endpoint

## Context

**Agent Loop**: Each message triggers a full agentic loop: intake → context assembly → model inference → tool execution → streaming replies → persistence. Loops are serialized per session to maintain consistency.

**System Prompt**: OpenClaw builds custom system prompts per run, injected with workspace context (SOUL.md, IDENTITY.md, TOOLS.md, AGENTS.md, USER.md, HEARTBEAT.md, BOOTSTRAP.md), skills list, tool schemas, and runtime information. Sub-agents receive minimal prompts focused on task completion.

**Sessions**: Persistent JSONL files store conversation history per session. Sessions are scoped to agent, channel, peer, or workspace. Token usage is tracked and context can be compacted to stay within budget.

**Sandbox Model**: Docker containers isolate tool execution. Tool policies control which tools are available. Elevated mode allows host access for sandboxed agents with approval gating. Three-layer model (Sandbox + Tool Policy + Elevated) provides granular security.

**Queue Modes**: Inbound messages can steer (inject into current run), followup (next turn), collect (coalesce), or interrupt. Streaming surfaces support block streaming with configurable chunking.

**Multi-Agent**: Multiple agents run in one Gateway with isolated workspaces and sessions. Bindings route inbound messages deterministically. Sub-agents run in background with reduced prompts and task focus.

**Delivery**: Messages are delivered with retry, acknowledgment reactions, and optional response prefixes. Heartbeats wake agents periodically. Cron jobs run at precise times. Webhooks trigger on external events.

**Security**: Sender-based allowlists, tool policies, sandbox isolation, and formal verification protect against unauthorized access and malicious execution. Tokens and API keys are managed securely.

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt