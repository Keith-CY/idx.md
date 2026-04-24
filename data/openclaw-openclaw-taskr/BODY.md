---
name: taskr
description: "Persistent cloud task planning and execution for OpenClaw. Create hierarchical task plans that survive session resets, span multiple agents, and let users review and approve work before execution. Notes attach to tasks as audit trails. Use task_sync to retroactively record completed work. Homepage: https://taskr.one"
homepage: https://taskr.one
metadata: {"openclaw":{"emoji":"📋","requires":{"env":["MCP_API_URL","MCP_USER_API_KEY","MCP_PROJECT_ID"]},"primaryEnv":"MCP_USER_API_KEY"}}
---

# Taskr — Persistent Task Planning & Execution

Taskr gives OpenClaw agents persistent, structured task management that lives outside the chat session. Plans survive context resets, can be resumed by any agent on any machine, and are always visible to the user via the Taskr web app, VS Code extension, or mobile.

**Six things Taskr does for OpenClaw:**
1. **Hierarchical planning** — break any work into a nested task hierarchy before touching a tool
2. **Persistent context** — tasks, notes, and status survive session resets and context compaction
3. **Cross-agent continuity** — any agent can pick up any task list from anywhere; `get_task` transfers ownership automatically
4. **Audit trail via notes** — notes attach directly to tasks; cause and effect stay together, not fragmented across chat history
5. **Retroactive sync** — `task_sync` records work done before Taskr was active, closing gaps in history
6. **Shared state** — statuses (`open`, `wip`, `done`, `skipped`) give both agent and user an unambiguous, real-time picture of progress

---

## When to Use Taskr

**Use Taskr when:**
- Work has 3+ steps or will take more than a few minutes
- Work spans multiple sessions or may be handed off to another agent
- User wants to monitor or approve progress remotely
- Resuming work from a previous session

**Skip Taskr for:**
- Single quick actions (<3 steps, <2 minutes)
- Pure information retrieval or simple questions
- User explicitly declines

**Proactive default:** For any substantial work, offer Taskr *before* starting:
> "I'll plan this in Taskr first — you can review the task breakdown before I start. Sound good?"

**Once Taskr is active, stay in Taskr.** Don't abandon tasks mid-workflow. Incomplete tasks in the dashboard are confusing and break the audit trail.

---

## The Core Loop

```
Plan → Create → Create CONTEXT note → Review with user → Execute → Document → Repeat
```

1. **Plan** — think through full scope; break into phases and subtasks before touching any tool
2. **Create** — `create_task` with `taskListTitle` to build the entire hierarchy in one call
3. **Create CONTEXT note** — always attach a CONTEXT note to the new task list (TL_) with background, goals, and any user preferences
4. **Review** — present the task plan to the user; get approval before executing anything
5. **Execute** — `get_task` → do the work → `update_task` status=done → repeat
6. **Document** — attach notes to tasks as you go; write PROGRESS notes at phase completions

**Single-task discipline:** Work on exactly one task at a time. `get_task` sets you as owner (wip). Complete or skip before moving on.

---

## Planning: Task Hierarchy Design

Use `create_task` with `taskListTitle` to create a new task list. Submit 1–100 tasks in a single call — always create the full hierarchy upfront so the user can review before execution begins.

**Hierarchy positions:**
- `"1"`, `"2"`, `"3"` — top-level phases (direct children of the task list)
- `"1.1"`, `"1.2"` — subtasks under phase 1
- `"1.1.1"` — deeper nesting (max 10 levels)
- Parents must be declared before their children in the same call

**Task types:** `setup`, `analysis`, `implementation`, `validation`, `testing`

**Keep tasks focused.** If a task feels too large to complete in one agent turn, break it into subtasks — at creation time or mid-execution via `create_task` + `parentId`. Subtasks prevent context overload and make progress visible at the right granularity.

**After creating a task list**, always immediately create a CONTEXT note on the task list:
```
create_note(type="CONTEXT", title="[Task List] — Context", body="...", taskId="TL_...")
```

---

## Executing: Working Through Tasks

### get_task
Call `get_task` to acquire your next task. It automatically sets status to `wip` and assigns ownership. Use `get_task` — do not manually set tasks to wip.

- Omit `task_list_id` to continue the current task list
- Pass `task_list_id=TL_...` to switch to a different task list
- Pass `include_context=true` for additional task context and notes
- Pass `bypass_task_id` only for emergency task-switching

### update_task — two modes

**Status mode** (one task):
```
update_task(taskId="TS_...", status="done", ruleContext="RU-PROC-001")
```

**Batch mode** (title/description updates only — status NOT allowed in batch):
```
update_task(tasks=[{taskId, title?, description?}, ...], ruleContext="RU-PROC-001")
```

### Task Statuses — Shared Checkpoints

Statuses are checkpoints visible to both agent and user in real time. Use them with discipline.

| Status | Meaning |
|--------|---------|
| `open` | Ready to be worked on |
| `wip` | Actively owned by an agent |
| `done` | Completed and verified |
| `skipped` | Deliberately not done — **must create a FINDING note explaining why** |

Completing the last child of a parent auto-marks the parent `done`. You don't need to mark parents manually.

### Handling Unexpected Work

When you discover work outside the current task's scope:

- **Blocks current task** → `create_task` (parentId=current task), complete subtask, resume
- **Unrelated** → finish current task first, then create a new task for the other work
- **Can wait** → document with a FINDING note, continue with current task

---

## Reviewing: get_task_hierarchy

Use `get_task_hierarchy` to browse and review tasks — not `get_task`. Never call `get_task` just to look at structure.

| Scope | What it returns |
|-------|----------------|
| `project` | All task lists. Use `depth=0` first for names only — avoids token bloat |
| `task_list` | Full nested hierarchy for one task list. Pass `taskId=TL_...` |
| `subtree` | A task and all its descendants. Pass `taskId=TS_...` |

Response path for `task_list` scope: `data.task_lists[0].tasks[0].children[]`

---

## Notes — Audit Trail Attached to Tasks

Notes attach to tasks. A finding discovered during task 2.3 lives on task 2.3 — not floating at the project level. Any agent resuming work later has full context exactly where they need it. This is what keeps information from becoming fragmented.

**Note types:**

| Type | When to use |
|------|-------------|
| `CONTEXT` | Background, goals, user preferences, decisions — create on TL_ immediately after task list creation |
| `FINDING` | Discoveries, issues, blockers, insights encountered during work |
| `PROGRESS` | Phase completions — **only for phase-level tasks** (tasks "1", "2", "3" — direct TL children). NOT for leaf tasks |
| `FILE_LIST` | Files created, modified, or deleted on the user's system |
| `OTHER` | Anything that doesn't fit the above |

**Note discipline:**
- Attach notes to the most specific relevant task (TS_ > TL_ > project-scoped)
- Update existing notes rather than creating duplicates — use `update_note`
- Search before creating: `search_notes` for prior context when resuming work
- `skipped` status always requires a FINDING note with the reason

**Two-step note discovery:**
1. `list_notes(taskId="TL_...", includeDescendants=true)` — get IDs and titles (`data.notes.notes[]`)
2. `get_note(noteId="NT_...")` — fetch full content when needed

---

## task_sync — Retroactive Record-Keeping

Use `task_sync` when work happened before Taskr was activated, or to retroactively close gaps in the task history. Three steps:

**Step 1 — Survey** (no args): lightweight summary of all task lists
```
task_sync(ruleContext="")
→ data.sync_check.task_lists[]: {id, name, status, task_count, done_count, open_count, wip_count}
```

**Step 2 — Drill in** (pass `task_list_id`): flat list of all tasks with title, description, status, level
```
task_sync(task_list_id="TL_...", ruleContext="")
→ data.sync_drill_down.tasks[]: {id, task_number, title, description, status, level, parent_id}
```

**Step 3 — Create done tasks** (pass `items[]`): creates tasks pre-marked as `done`
```
task_sync(items=[
  {
    "action": "create_done",
    "title": "...",
    "parentId": "TS_or_TL_...",
    "description": "...",
    "type": "implementation"
  }
], ruleContext="")
```

Each item requires `action: "create_done"` and `title`. `parentId` (TS_ or TL_) is required unless you provide `taskListTitle` to create a new task list — items without `parentId` default to that new list. Up to 50 items per call.

After syncing, attach CONTEXT or FINDING notes to the created tasks to capture the why behind the work.

---

## Cross-Session & Cross-Agent Continuity

Taskr state lives in the cloud — not in your context window. To resume work:

1. `search_notes` — find prior decisions, context, findings
2. `get_task_hierarchy(scope="project", depth=0)` — identify active task lists
3. `get_task(task_list_id="TL_...")` — pick up ownership where work stopped
4. Review CONTEXT and PROGRESS notes before executing

Any agent — different session, different machine, different model — can resume exactly where work stopped. The task list is the plan. Notes are the memory. Status is the state.

---

## Setup

When credentials are missing:

1. **Get credentials from user:**
   - Project ID: Projects page at https://taskr.one (format: `PR_00000000...`)
   - API Key: User avatar → API Keys menu (click eye icon or copy button)

2. **Configure via `gateway.config.patch`:**
   ```json
   {
     "skills": {
       "entries": {
         "taskr": {
           "env": {
             "MCP_API_URL": "https://taskr.one/api/mcp",
             "MCP_PROJECT_ID": "<project-id>",
             "MCP_USER_API_KEY": "<api-key>"
           }
         }
       }
     }
   }
   ```

3. **Verify:** Call `tools/list` and confirm `create_task` is present.

Users can create multiple projects for different work contexts.

**For mcporter/other MCP clients:**
```bash
mcporter config add taskr "$MCP_API_URL" \
  --header "x-project-id=$MCP_PROJECT_ID" \
  --header "x-user-api-key=$MCP_USER_API_KEY"
```

---

## Quick Reference

| Need | Tool |
|------|------|
| Create plan | `create_task` (taskListTitle + tasks[]) |
| Add context to new task list | `create_note` (type=CONTEXT, taskId=TL_) |
| Get next task | `get_task` |
| Mark done | `update_task` (taskId, status="done") |
| Mark skipped | `update_task` (status="skipped") + `create_note` (FINDING) |
| Browse task structure | `get_task_hierarchy` |
| Add subtask mid-execution | `create_task` (parentId=TS_or_TL_) |
| Document a finding | `create_note` (type=FINDING, taskId=TS_) |
| Phase milestone note | `create_note` (type=PROGRESS, taskId=TS_ phase task) |
| Retroactive history | `task_sync` (3-step) |
| Resume from prior session | `search_notes` → `get_task_hierarchy` → `get_task` |
| Find prior context | `search_notes` or `list_notes` |

**ruleContext values:** Pass the Rule ID from the schema (e.g. `RU-CTX-001`, `RU-PROC-001`, `RU-NOTE-001`). Pass `""` when the schema says "Leave this parameter blank."
