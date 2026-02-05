---
name: Clawdbot
description: Documentation and capabilities reference for Clawdbot
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

## Capabilities

OpenClaw enables AI agents to interact across multiple messaging channels with powerful automation capabilities. Agents can browse the web, execute commands, manage files, schedule tasks, coordinate with other agents, and integrate with external services. The system supports both local and cloud deployments with optional Docker sandboxing for security isolation.

## Skills

### Messaging & Channel Integration
- **Multi-channel support**: WhatsApp, Telegram, Discord, Slack, Google Chat, Mattermost, Signal, iMessage, MS Teams, Matrix, Zalo
- **Message operations**: send text/media, create polls, react to messages, edit/delete messages, manage threads, pin/unpin, search messages
- **Channel routing**: Deterministic message routing to agents via bindings (peer match, guild/team match, account match, channel match)
- **Broadcast groups**: Route single messages to multiple agents with isolated sessions and parallel processing
- **Media handling**: Images (resize/recompress to JPEG), audio/voice notes, video, documents up to 100 MB

### Browser Automation
- **Browser tool**: Control Chrome/Brave/Edge/Chromium profiles with snapshot (UI tree), screenshot, navigate, act (click/type/drag/select)
- **Profiles**: openclaw (isolated managed browser), chrome (system default), remote CDP
- **Targets**: sandbox, host, or node-based execution
- **Headless mode**: Optional headless execution for automation without visible window
- **Web tools**: web_search (Brave Search API or Perplexity Sonar), web_fetch (HTTP + readable extraction to markdown/text)

### File & Code Operations
- **File operations**: read, write, edit, delete files in workspace
- **apply_patch tool**: Multi-file edits with structured patch format (Add/Update/Delete operations)
- **Exec tool**: Run shell commands with foreground/background execution via process tool
- **Background processes**: Keep long-running tasks in memory with process management

### Agent Architecture & Sessions
- **Session management**: Isolated conversation history per agent-channel-peer combination
- **Context assembly**: System prompt (tools, skills, workspace, time), conversation history, tool results
- **Memory system**: Persistent memory files with optional session indexing and memory_search
- **Session compaction**: Compress context with /compact command to manage token budgets
- **Session reset**: /new or /reset for fresh sessions with optional memory archival

### Multi-Agent Coordination
- **Multi-agent routing**: Multiple isolated agents with separate workspaces, sessions, and models
- **Sub-agents**: Spawn background agent runs from existing runs with isolated sessions (agent:<agentId>:subagent:<uuid>)
- **Agent-to-agent messaging**: Optional inter-agent communication with allow/deny lists
- **Per-agent configuration**: Separate sandbox, tool restrictions, models, and skill sets per agent
- **Broadcast agents**: All listed agents process group messages with isolated context

### Automation & Scheduling
- **Cron jobs**: Gateway-owned scheduler with persistent jobs, exact timing, optional chat delivery
- **Cron scheduling**: One-shot (--at), repeating (--every), or cron expressions
- **Cron payloads**: System events or isolated agent turns with optional delivery to channels
- **Webhooks**: HTTP webhook endpoint for external triggers
- **Gmail Pub/Sub**: Real-time Gmail notifications via Google Cloud Pub/Sub
- **Polling**: Long-polling for channels (default) or webhook mode with HTTPS

### Workflow & Approval
- **Lobster workflows**: Deterministic multi-step tool pipelines with explicit approval checkpoints
- **Workflow files**: YAML/JSON .lobster files with steps, conditions, and approval gates
- **Resumable workflows**: Halt workflows for approval, resume with token without re-running
- **Approval gates**: Side effects (send email, post comment) require explicit approval

### Media & Devices
- **Image processing**: Vision understanding with configurable models (OpenAI, Gemini, etc.)
- **Audio transcription**: Speech-to-text with provider fallback (OpenAI, Groq, Deepgram, local CLI)
- **Camera/video**: Capture photos and video clips from connected nodes
- **Canvas**: HTML/CSS/JS visualization workspace on macOS app with A2UI support
- **Voice calls**: Twilio/Telnyx/Plivo integration with streaming speech and DTMF input

### Model Integration
- **Provider support**: OpenAI, Anthropic (Claude), OpenRouter, Vercel AI Gateway, Moonshot, Minimax, OpenCode, GLM, Z.AI, Bedrock, local models
- **Model failover**: Primary + fallback model configuration with automatic switching
- **OAuth authentication**: Subscription auth for OpenAI Codex, Anthropic setup-token, provider plugins
- **Multiple profiles**: Support multiple accounts per provider with profile-based selection
- **Reasoning/thinking**: Extended thinking with configurable visibility (/reasoning on|off|stream)

### Streaming & Real-time Output
- **Block streaming**: Coarse-grained message chunks as output becomes available
- **Streaming controls**: min/max chunk sizes, break preferences (text_end or message_end)
- **Channel chunking**: Automatic text splitting for channel limits (Discord line limits, WhatsApp text chunks)
- **Typing indicators**: Real-time typing status with configurable refresh intervals
- **Partial replies**: Stream reasoning separately or as block replies

### Security & Isolation
- **Docker sandboxing**: Optional isolated containers for tool execution (exec, read, write, edit)
- **Per-agent sandbox**: Different sandbox configs per agent (shared or isolated)
- **Tool policies**: Allow/deny lists for tools (read, write, exec, browser, gateway, etc.)
- **Elevated mode**: Restricted execution for sensitive operations with approval
- **Formal verification**: Optional formal security verification for critical deployments

### Gateway & Operations
- **Gateway RPC**: JSON-RPC over HTTP for agent runs, config, cron, health checks
- **OpenAI HTTP API**: Compatible endpoint for model inference
- **CLI backends**: Run agents via CLI with local or remote gateway
- **Health monitoring**: Gateway health probes, channel status checks, diagnostics
- **Logging**: Structured logging with raw stream capture for debugging
- **Multiple gateways**: Run multiple gateway instances with shared or isolated state

### Skills & Extensions
- **Skills system**: Bundled skills with metadata, requirements, and tool guidance
- **ClawHub**: Discover and install skills from community repository
- **Plugins**: Extend OpenClaw with custom tools, channels, RPC methods, and skills
- **Slash commands**: Custom commands with optional arguments and channel-specific behavior
- **Plugin architecture**: Register channels, tools, RPC methods, and skills via plugin API

## Workflows

### Setting Up a Multi-Channel Agent
1. Install OpenClaw and run `openclaw onboard` for guided setup
2. Configure channels: `openclaw channels add --channel telegram --token $TOKEN`
3. Set model provider: `openclaw models auth login --provider anthropic`
4. Launch gateway: `openclaw gateway` (or via Docker/systemd)
5. Access Control UI at http://localhost:18789/
6. Send a message to the agent on any configured channel

### Automating a Scheduled Task
1. Define the task (e.g., daily report generation)
2. Create cron job: `openclaw cron add --name daily-report --every "0 9 * * *" --message "Generate report"`
3. Configure delivery: Set delivery.channel and delivery.to for output routing
4. Monitor: `openclaw cron list` and `openclaw cron runs --id <jobId>`
5. Edit/disable as needed: `openclaw cron edit <id>` or `openclaw cron disable <id>`

### Building a Multi-Step Workflow with Approvals
1. Create a .lobster workflow file with steps, conditions, and approval gates
2. Define steps as JSON commands with stdin piping between steps
3. Mark critical steps with `approval: required`
4. Call from agent: Use lobster tool with pipeline path
5. Review approval: `openclaw approve --id <token>` with optional --preview-from-stdin
6. Resume: Workflow continues after approval or cancels if denied

### Deploying to Cloud
1. Choose platform (Fly.io, Render, GCP, Hetzner, Railway)
2. Set environment variables (API keys, channel tokens, workspace path)
3. Deploy Docker image: `fly deploy` or use platform blueprint
4. Verify: Check logs and test message routing
5. Configure Tailscale (optional) for secure remote access
6. Set up persistent storage for sessions and memory

### Implementing Browser Automation
1. Enable browser tool in config (default enabled)
2. Choose profile: openclaw (isolated) or chrome (system)
3. Agent calls browser tool: snapshot → act → screenshot workflow
4. Use snapshot ref IDs for stable selectors (avoids brittle XPath)
5. Handle logins: Use browser-login tool for credential management
6. Troubleshoot: Check browser logs and use headless mode if needed

### Setting Up Multi-Agent Routing
1. Define agents in config: `agents.list[].id`, workspace, model
2. Create bindings: Map channels/peers to agents via `bindings[].agentId`
3. Set routing rules: peer match (most specific) → guild/team → account → channel → default
4. Configure per-agent tools: `agents.list[].tools.allow/deny`
5. Test: Send messages to different channels and verify agent routing
6. Monitor: Use `openclaw agents list` and session logs to verify isolation

## Integration

OpenClaw integrates with:
- **Messaging platforms**: Native support for 15+ chat services via channel plugins
- **LLM providers**: OpenAI, Anthropic, OpenRouter, and 10+ others with failover
- **Cloud platforms**: Fly.io, Render, GCP, Hetzner, Railway, AWS Bedrock
- **Voice services**: Twilio, Telnyx, Plivo for voice calls and DTMF
- **Email**: Gmail Pub/Sub for real-time notifications
- **External APIs**: HTTP fetch, web search, webhook triggers
- **Custom tools**: Plugin system for extending with new tools and channels
- **Workflow engines**: Lobster for deterministic multi-step automation
- **Media services**: Vision APIs (OpenAI, Gemini), transcription (Whisper, Deepgram)

## Context

**Agent Loop**: Each message triggers a full agent run: intake → context assembly → model inference → tool execution → streaming replies → persistence. Runs are serialized per session to maintain consistency.

**Context Window**: System prompt (tools, skills, workspace, time) + conversation history + tool results must fit within model's token limit. Use /context to inspect current usage and /compact to reduce.

**Session Keys**: Format is `agent:<agentId>:<channel>:<peer>` (e.g., `agent:main:whatsapp:+15551234567`). Determines which workspace and session history are used.

**Tool Execution**: Tools run in workspace (host or sandbox). Exec tool supports background processes. Browser runs in isolated profile. All tool calls are logged and can be approved before execution.

**Streaming**: Model output streams as text_delta events. Block streaming chunks output for channel delivery. Reasoning can stream separately or inline depending on model and configuration.

**Security**: Sandbox isolation (Docker) is optional per agent. Tool policies restrict what agents can do. Elevated mode requires approval for sensitive operations. Formal verification available for critical deployments.

**Plugins**: Extend OpenClaw by registering channels, tools, RPC methods, and skills. Plugins load from ~/.openclaw/extensions or configured paths. Enable/disable per-plugin with configuration.

**Memory**: Persistent memory files stored in workspace/memory/. Optional session indexing for memory_search. Memory is separate from context (context is current window, memory is disk-based).

**Deployment**: Gateway is the central process (local or remote). Agents run within gateway. Sandbox containers are optional for tool isolation. Tailscale or SSH tunnel for secure remote access. Persistent state in ~/.openclaw/ or configured workspace.

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt