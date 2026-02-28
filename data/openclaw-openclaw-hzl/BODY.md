---
name: hzl
description: Persistent task ledger for agent coordination. Plan multi-step work, checkpoint progress across session boundaries, and coordinate across multiple agents with project pool routing.
metadata:
  { "openclaw": { "emoji": "🧾", "homepage": "https://github.com/tmchow/hzl", "requires": { "bins": ["hzl"] }, "install": [ { "id": "brew", "kind": "brew", "package": "hzl", "bins": ["hzl"], "label": "Install HZL (Homebrew)" }, { "id": "node", "kind": "node", "package": "hzl-cli", "bins": ["hzl"], "label": "Install HZL (npm)" } ] } }
---

# HZL: Persistent task ledger for agents

HZL (https://hzl-tasks.com) is a local-first task ledger that agents use to:

- Plan multi-step work into projects + tasks
- Checkpoint progress so work survives session boundaries
- Route work to the right agent via project pools
- Coordinate across multiple agents with leases and dependencies

This skill teaches an agent how to use the `hzl` CLI.

## When to use HZL

**OpenClaw has no native task tracking.** Unlike Claude Code (which has TodoWrite) or Codex (which has update_plan), OpenClaw relies on memory and markdown files for tracking work. HZL fills this gap.

**Use HZL for:**
- Multi-step projects with real sequencing or handoffs
- Work that may outlive this session or involve multiple agents
- Anything where "resume exactly where we left off" matters
- Delegating work to another agent and needing recovery if they fail

**Skip HZL for:**
- Truly trivial one-step tasks you will complete immediately
- Time-based reminders (use OpenClaw Cron instead)
- Longform notes or knowledge capture (use memory files)

**Rule of thumb:** If you feel tempted to make a multi-step plan, or there is any chance you will not finish in this session, use HZL.

---

## ⚠️ DESTRUCTIVE COMMANDS — READ FIRST

| Command | Effect |
|---------|--------|
| `hzl init --force` | **DELETES ALL DATA.** Prompts for confirmation. |
| `hzl init --force --yes` | **DELETES ALL DATA WITHOUT CONFIRMATION.** |
| `hzl task prune ... --yes` | **PERMANENTLY DELETES** old done/archived tasks and history. |

**Never run these unless the user explicitly asks you to delete data. There is no undo.**

---

## Core concepts

- **Project**: container for tasks. In single-agent setups, use one shared project. In multi-agent setups, use one project per agent role (pool routing).
- **Task**: top-level work item. Use parent tasks for multi-step initiatives.
- **Subtask**: breakdown of a task (`--parent <id>`). Max 1 level of nesting. Parent tasks are never returned by `hzl task claim --next`.
- **Checkpoint**: short progress snapshot for session recovery.
- **Lease**: time-limited claim that enables stuck detection in multi-agent flows.

---

## Project setup

### Single-agent setup

Use one shared project. Requests and initiatives become parent tasks, not new projects.

```bash
hzl project list                    # Check first — only create if missing
hzl project create openclaw
```

Everything goes into `openclaw`. `hzl task claim --next -P openclaw` always works.

### Multi-agent setup (pool routing)

Use one project per agent role. Tasks assigned to a project (not a specific agent) can be claimed by any agent monitoring that pool. This is the correct pattern when a role may scale to multiple agents.

```bash
hzl project create research
hzl project create writing
hzl project create coding
hzl project create marketing
hzl project create coordination    # for cross-agent work
```

**Pool routing rule:** assign tasks to a project without `--agent`. Any eligible agent claims with `--next`.

```bash
# Assigning work to the research pool (no --agent)
hzl task add "Research competitor pricing" -P research -s ready

# Kenji (or any researcher) claims it
hzl task claim --next -P research --agent kenji
```

Only use `--agent` when you specifically want one person. Use `--project` when any eligible agent should pick it up.

---

## Session start (primary workflow)

### With workflow commands (HZL v2+)

```bash
hzl workflow run start --agent <agent-id> --project <project> --json
```

This handles expired-lease recovery and new-task claiming in one command. If a task is returned, work on it. If nothing is returned, the queue is empty.

### Without workflow commands (fallback)

```bash
hzl task list -P <project> --available     # What's ready?
hzl task stuck                             # Any expired leases?

# If stuck tasks exist, read their state before claiming
hzl task show <stuck-id> --json
hzl task steal <stuck-id> --if-expired --agent <agent-id>
hzl task show <stuck-id> --json | jq '.checkpoints[-1]'

# Otherwise claim next available
hzl task claim --next -P <project> --agent <agent-id>
```

---

## Core workflows

### Adding work

```bash
hzl task add "Feature X" -P openclaw -s ready              # Single-agent
hzl task add "Research topic Y" -P research -s ready        # Pool-routed (multi-agent)
hzl task add "Subtask A" --parent <id>                      # Subtask
hzl task add "Subtask B" --parent <id> --depends-on <a-id>  # With dependency
```

### Working a task

```bash
hzl task claim <id>                          # Claim specific task
hzl task claim --next -P <project>           # Claim next available
hzl task checkpoint <id> "milestone X"       # Checkpoint progress
hzl task complete <id>                       # Finish
```

### Status transitions

```bash
hzl task set-status <id> ready               # Make claimable
hzl task set-status <id> backlog             # Move back to planning
hzl task block <id> --comment "reason"       # Block with reason
hzl task unblock <id>                        # Unblock
```

Statuses: `backlog` → `ready` → `in_progress` → `done` (or `blocked`)

### Finishing subtasks

```bash
hzl task complete <subtask-id>
hzl task show <parent-id> --json             # Any subtasks remaining?
hzl task complete <parent-id>               # Complete parent if all done
```

---

## Delegating and handing off work

### Workflow commands (HZL v2+)

```bash
# Hand off to another agent or pool — complete current, create follow-on atomically
hzl workflow run handoff \
  --from <task-id> \
  --title "<new task title>" \
  --project <pool>              # --agent if specific person; --project for pool

# Delegate a subtask — creates dependency edge by default
hzl workflow run delegate \
  --from <task-id> \
  --title "<delegated task>" \
  --project <pool> \
  --pause-parent                # Block parent until delegated task is done
```

`--agent` and `--project` guardrail: at least one is required on handoff. Omitting `--agent` creates a pool-routed task; `--project` is then required to define which pool.

### Manual delegation (fallback)

```bash
hzl task add "<delegated title>" -P <pool> -s ready --depends-on <parent-id>
hzl task checkpoint <parent-id> "Delegated X to <pool> pool. Waiting on <task-id>."
hzl task block <parent-id> --comment "Waiting for <delegated-task-id>"
```

---

## Dependencies

```bash
# Add dependency at creation
hzl task add "<title>" -P <project> --depends-on <other-id>

# Add dependency after creation
hzl task add-dep <task-id> <depends-on-id>

# Query dependencies
hzl dep list --agent <id> --blocking-only          # What's blocking me?
hzl dep list --from-agent <id> --blocking-only     # What's blocking work I created?
hzl dep list --project <p> --blocking-only         # What's blocking in a pool?
hzl dep list --cross-project-only                  # Cross-agent blockers

# Validate no cycles
hzl validate
```

Cross-project dependencies are supported by default. Use `hzl dep list --cross-project-only` to inspect cross-project edges.

---

## Checkpointing

Checkpoint at notable milestones or before pausing. A good checkpoint answers: "if this session died right now, could another agent resume from here?"

**When to checkpoint:**
- Before any tool call that might fail
- Before spawning a sub-agent
- After completing a meaningful unit of work
- Before handing off or pausing

```bash
hzl task checkpoint <id> "Implemented login flow. Next: add token refresh." --progress 50
hzl task checkpoint <id> "Token refresh done. Testing complete." --progress 100
hzl task progress <id> 75          # Set progress without a checkpoint
```

---

## Hook delivery

When a task transitions to `done`, HZL enqueues a callback to your configured endpoint. The drain command delivers queued callbacks.

```bash
hzl hook drain                     # Deliver all queued callbacks (run on a schedule)
hzl hook drain --dry-run           # Preview what would be delivered
```

Configure in `~/.config/hzl/config.json` (create if missing):

```json
{
  "hooks": {
    "on_done": {
      "url": "<OPENCLAW_GATEWAY_URL>/events/inject",
      "headers": {
        "Authorization": "Bearer <YOUR_GATEWAY_TOKEN>"
      }
    }
  }
}
```

HZL uses a host-process model — no built-in daemon. In OpenClaw, run `hzl hook drain` as a recurring cron job every 2 minutes. Without a scheduler, callbacks queue but never fire.

---

## Multi-agent coordination with leases

```bash
# Claim with lease (prevents orphaned work)
hzl task claim <id> --agent <agent-id> --lease 30       # 30-minute lease

# Monitor for stuck tasks
hzl task stuck

# Recover an abandoned task
hzl task show <stuck-id> --json                          # Read last checkpoint first
hzl task steal <stuck-id> --if-expired --agent <agent-id>
```

Use distinct `--agent` IDs per agent (e.g. `henry`, `clara`, `kenji`) so authorship is traceable.

---

## Sizing tasks and projects

**The completability test:** "I finished [task]" should describe a real outcome.
- ✓ "Finished installing garage motion sensors"
- ✗ "Finished home automation" (open-ended domain, never done)

**Split into multiple tasks when:** parts deliver independent value or solve distinct problems.

**Adding context:**
```bash
hzl task add "Install sensors" -P openclaw \
  -d "Mount at 7ft height per spec." \
  -l docs/sensor-spec.md,https://example.com/wiring-guide
```

Don't duplicate specs into descriptions — reference docs instead to avoid drift.

---

## Extended reference

```bash
# Setup
hzl init                                      # Initialize (safe, won't overwrite)
hzl status                                    # Database mode, paths, sync state
hzl doctor                                    # Health check

# List and find
hzl task list -P <project> --available        # Ready tasks with met dependencies
hzl task list --parent <id>                   # Subtasks of a parent
hzl task list --root                          # Top-level tasks only
hzl task list -P <project> --tags <csv>       # Filter by tags

# Create with options
hzl task add "<title>" -P <project> --priority 2 --tags backend,auth
hzl task add "<title>" -P <project> -s in_progress --agent <name>

# Web dashboard
hzl serve                                     # Start on port 3456
hzl serve --host 127.0.0.1                    # Restrict to localhost
hzl serve --background                        # Fork to background
hzl serve --status / --stop

# Authorship
hzl task claim <id> --agent alice
hzl task checkpoint <id> "note" --author bob  # Records who did the action
hzl task claim <id> --agent "Claude" --agent-id "session-abc123"

# Cloud sync (optional)
hzl init --sync-url libsql://<db>.turso.io --auth-token <token>
hzl sync
```

---

## Web dashboard (always-on, Linux)

```bash
hzl serve --print-systemd > ~/.config/systemd/user/hzl-web.service
systemctl --user daemon-reload
systemctl --user enable --now hzl-web
loginctl enable-linger $USER
```

Available at `http://<your-box>:3456` (accessible over Tailscale). macOS: use `hzl serve --background` instead.

---

## What HZL does not do

- **No orchestration** — does not spawn agents or assign work automatically
- **No task decomposition** — does not break down tasks automatically
- **No smart scheduling** — uses simple priority + FIFO ordering

These belong in your orchestration layer, not the task ledger.

---

## Notes

- Run `hzl` via the `exec` tool.
- Check `TOOLS.md` for your identity string, which projects to monitor, and the commands relevant to your role.
- Use distinct `--agent` IDs per agent and rely on leases to avoid collisions in shared databases.
- `hzl workflow run` commands require HZL v2+. If unavailable, use the manual fallback patterns documented above.
