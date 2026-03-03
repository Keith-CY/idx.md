---
name: Agent
description: Use when creating reusable skill packages for AI agents, integrating skills into agent platforms, or authoring SKILL.md files that extend agent capabilities with specialized workflows, scripts, and domain expertise.
metadata:
    mintlify-proj: agent
    version: "1.0"
---

# Agent Skills

## Product summary

Agent Skills is a lightweight, open format for packaging specialized knowledge, workflows, and executable code into reusable skill directories that AI agents can discover and activate. A skill is a folder containing a required `SKILL.md` file (with YAML frontmatter and Markdown instructions) plus optional `scripts/`, `references/`, and `assets/` directories. Agents load only skill metadata (name and description) at startup, then read full instructions when a task matches the skill's purpose. This progressive disclosure keeps agents fast while giving them access to detailed context on demand. Use skills to package domain expertise, repeatable workflows, and new capabilities that agents can reuse across different compatible platforms. Primary documentation: https://agentskills.io

## When to use

Reach for this skill when:

- **Creating a new skill**: You need to package instructions, scripts, and resources into a reusable SKILL.md file that agents can discover and execute.
- **Authoring skill instructions**: You're writing the Markdown body of a SKILL.md file with step-by-step workflows, examples, and edge cases.
- **Bundling executable code**: You're creating scripts (Python, Bash, JavaScript, etc.) that agents will run as part of a skill workflow.
- **Integrating skills into an agent platform**: You're adding skills support to an AI agent, including skill discovery, metadata loading, and execution.
- **Validating skill format**: You need to check that a SKILL.md file meets the specification (valid frontmatter, naming conventions, structure).
- **Generating prompt XML**: You're preparing skill metadata for injection into an agent's system prompt.

## Quick reference

### SKILL.md frontmatter (required)

```yaml
---
name: skill-identifier
description: What this skill does and when to use it (max 1024 chars)
license: MIT  # optional
compatibility: Requires Node.js 18+  # optional; max 500 chars
metadata:  # optional; arbitrary key-value pairs
  category: data-processing
  version: 1.0.0
allowed-tools: Bash(git:*) Bash(jq:*)  # optional; experimental
---
```

**Constraints:**
- `name`: Max 64 chars, lowercase letters/numbers/hyphens only, no leading/trailing hyphens
- `description`: Max 1024 chars, non-empty, describes what and when
- `license`: Optional; license name or path to bundled license file
- `compatibility`: Optional; environment requirements (system packages, Node.js version, network access)

### Directory structure

```
my-skill/
├── SKILL.md          # Required: frontmatter + instructions
├── scripts/          # Optional: executable code (Python, Bash, JS, etc.)
├── references/       # Optional: supporting documentation
└── assets/           # Optional: templates, resources, data files
```

### Script execution commands (one-off)

| Tool | Command | When to use |
|------|---------|------------|
| `uvx` | `uvx ruff@0.8.0 check .` | Python packages; fast caching; requires uv install |
| `pipx` | `pipx run 'black==24.10.0' .` | Python packages; broader OS availability |
| `npx` | `npx eslint@9 --fix .` | npm packages; ships with Node.js |
| `bunx` | `bunx create-vite@6 my-app` | npm packages in Bun environments only |
| `deno run` | `deno run --allow-read npm:eslint@9 -- --fix .` | Deno scripts; requires permission flags |
| `go run` | `go run golang.org/x/tools/cmd/goimports@v0.28.0 .` | Go packages; built into Go |

**Key rule:** Pin versions (e.g., `npx eslint@9.0.0`) for reproducibility. State prerequisites in SKILL.md (e.g., "Requires Node.js 18+") rather than assuming the agent's environment.

### Self-contained script patterns

**Python (PEP 723):**
```python
#!/usr/bin/env python3
# /// script
# requires-python = ">=3.10"
# dependencies = [
#   "beautifulsoup4>=4.12,<5",
#   "requests>=2.31",
# ]
# ///

import requests
from bs4 import BeautifulSoup
# ... script code
```
Run with: `uv run scripts/extract.py` or `pipx run scripts/extract.py`

**Deno:**
```typescript
#!/usr/bin/env -S deno run

import * as cheerio from "npm:cheerio@1.0.0";

const html = `<html><body><h1>Welcome</h1></body></html>`;
const $ = cheerio.load(html);
console.log($("h1").text());
```
Run with: `deno run scripts/extract.ts`

**Bun:**
```typescript
import { parse } from "npm:csv-parse@5.5.0";

const data = await Bun.file("data.csv").text();
// ... script code
```
Run with: `bun scripts/extract.ts` (auto-installs dependencies)

### Skill discovery and activation (for agent implementors)

1. **Discovery**: Scan configured directories for folders containing `SKILL.md`
2. **Load metadata**: Parse YAML frontmatter only (name, description, location)
3. **Inject into prompt**: Include skill metadata in system prompt as XML
4. **Activation**: When task matches skill description, read full SKILL.md into context
5. **Execution**: Agent runs scripts via shell commands or tool calls

## Decision guidance

### When to use scripts/ vs one-off commands

| Scenario | Use scripts/ | Use one-off command |
|----------|-------------|-------------------|
| Simple tool invocation with few flags | ❌ | ✅ `npx eslint@9 --fix .` |
| Complex logic, error handling, or multiple steps | ✅ | ❌ |
| Reusable logic across multiple skills | ✅ | ❌ |
| Tool already exists and does exactly what you need | ❌ | ✅ |
| Needs custom argument parsing or validation | ✅ | ❌ |

### When to use filesystem-based vs tool-based integration

| Aspect | Filesystem-based | Tool-based |
|--------|------------------|-----------|
| **Environment** | Bash/Unix shell | No shell; agent platform provides tools |
| **Skill activation** | `cat /path/to/skill/SKILL.md` | Tool call (platform-specific) |
| **Script execution** | Shell commands (`bash scripts/...`) | Tool call with output capture |
| **Capability** | Most capable; full filesystem access | Limited by tool implementation |
| **Use case** | Local development, CLI agents | Cloud agents, sandboxed environments |

## Workflow

### Creating a new skill

1. **Create the directory structure:**
   ```bash
   mkdir my-skill
   cd my-skill
   ```

2. **Write SKILL.md with frontmatter and instructions:**
   ```markdown
   ---
   name: my-skill
   description: Validates and processes CSV files, generates summary reports
   compatibility: Requires Python 3.10+
   ---

   ## Workflow

   1. Validate the CSV file:
      ```bash
      python3 scripts/validate.py "$INPUT_FILE"
      ```

   2. Generate a report:
      ```bash
      python3 scripts/report.py --input "$INPUT_FILE" --format json
      ```

   ## Examples

   Input: `data.csv` with columns: name, age, email
   Output: JSON report with validation errors and summary statistics
   ```

3. **Create scripts/ directory and add executable code:**
   ```bash
   mkdir scripts
   # Add validate.py, report.py, etc.
   ```

4. **Add optional supporting files:**
   ```bash
   mkdir references assets
   # Add documentation, templates, sample data
   ```

5. **Validate the skill:**
   ```bash
   skills-ref validate ./my-skill
   ```

6. **Generate prompt XML for agent injection:**
   ```bash
   skills-ref to-prompt ./my-skill
   ```

### Integrating skills into an agent

1. **Configure skill directories** in your agent's config (e.g., `~/.agent/skills/`)

2. **At startup, scan and load metadata:**
   - Read all `SKILL.md` files in configured directories
   - Extract only frontmatter (name, description, location)
   - Keep in memory for quick matching

3. **Inject into system prompt:**
   ```xml
   <available_skills>
     <skill>
       <name>csv-processor</name>
       <description>Validates and processes CSV files, generates summary reports</description>
       <location>/home/user/.agent/skills/csv-processor/SKILL.md</location>
     </skill>
   </available_skills>
   ```

4. **When agent activates a skill:**
   - Read full SKILL.md into context
   - Agent follows instructions and runs referenced scripts
   - Scripts execute via shell commands (filesystem) or tool calls (tool-based)

## Common gotchas

- **Interactive prompts hang indefinitely.** Agents run in non-interactive shells and cannot respond to TTY prompts, password dialogs, or confirmation menus. Always accept input via command-line flags, environment variables, or stdin. Bad: `python scripts/deploy.py` (waits for "Target environment: "). Good: `python scripts/deploy.py --env staging --tag v1.2.3` with clear error messages.

- **Unpinned versions cause inconsistency.** Use exact versions in one-off commands: `npx eslint@9.0.0` not `npx eslint`. Without pinning, the agent may get different behavior on different runs.

- **Large output gets truncated.** Agent harnesses often truncate output beyond 10-30K characters. If your script produces large output, default to a summary and support pagination flags like `--offset` or `--output` to let agents request more.

- **Ambiguous input causes wasted turns.** Reject invalid input with clear, actionable error messages. Bad: "Error: invalid input". Good: "Error: --format must be one of: json, csv, table. Received: 'xml'."

- **Missing exit code documentation.** Use distinct exit codes for different failure types (not found, invalid arguments, auth failure) and document them in `--help` output so agents know what each code means.

- **Idempotency not guaranteed.** Agents may retry commands. Use "create if not exists" patterns instead of "create and fail on duplicate." For destructive operations, support `--dry-run` flags so agents can preview changes.

- **Frontmatter constraints ignored.** Skill names must be lowercase letters, numbers, and hyphens only; max 64 chars; no leading/trailing hyphens. Descriptions must be non-empty and max 1024 chars. Validation catches these, but they're easy to miss.

- **Scripts assume dependencies are installed.** If a script requires external packages, declare them inline (PEP 723 for Python, npm: for Deno, bundler/inline for Ruby) or use one-off commands. Don't assume the agent's environment has them pre-installed.

- **Relative paths from wrong directory.** Reference bundled files with paths relative to the skill directory root (e.g., `scripts/validate.sh`). Agents run commands from the skill directory, so paths are resolved automatically.

- **Skill metadata not injected into prompt.** If agents don't know a skill exists, they won't use it. Always inject skill metadata (name, description, location) into the system prompt using the XML format.

## Verification checklist

Before submitting a skill:

- [ ] **Frontmatter is valid:** `name` (max 64 chars, lowercase/hyphens only), `description` (max 1024 chars, non-empty)
- [ ] **Directory structure is correct:** `SKILL.md` at root; optional `scripts/`, `references/`, `assets/` subdirectories
- [ ] **Scripts are non-interactive:** No TTY prompts, password dialogs, or confirmation menus; all input via flags/env vars
- [ ] **Scripts have clear error messages:** Errors explain what went wrong, what was expected, and what to try
- [ ] **Versions are pinned:** One-off commands use exact versions (e.g., `npx eslint@9.0.0`)
- [ ] **Prerequisites are documented:** SKILL.md states environment requirements (Node.js version, system packages, etc.)
- [ ] **Scripts are self-contained or dependencies are declared:** Use PEP 723, npm:, bundler/inline, or one-off commands
- [ ] **Relative paths are correct:** Scripts and assets referenced relative to skill directory root
- [ ] **Skill validates:** Run `skills-ref validate ./my-skill` with no errors
- [ ] **Prompt XML generates:** Run `skills-ref to-prompt ./my-skill` and review output
- [ ] **Instructions are clear:** Step-by-step workflow, examples, and edge cases are documented
- [ ] **Output size is predictable:** Large outputs support pagination or `--output` flags

## Resources

- **Comprehensive page navigation:** https://agentskills.io/llms.txt
- **Specification (full format details):** https://agentskills.io/specification
- **Integration guide (for agent platforms):** https://agentskills.io/integrate-skills
- **Script authoring best practices:** https://agentskills.io/skill-creation/using-scripts

---

> For additional documentation and navigation, see: https://agentskills.io/llms.txt