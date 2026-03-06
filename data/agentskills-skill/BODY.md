---
name: Agent
description: Use when creating reusable skill packages for agents, implementing skills support in an agent or tool, evaluating and iterating on skill quality, or authoring SKILL.md files that bundle instructions, scripts, and resources for agent tasks.
metadata:
    mintlify-proj: agent
    version: "1.0"
---

# Agent Skills

## Product summary

Agent Skills is a portable format for packaging procedural knowledge, scripts, and context that agents can discover and load on demand. A skill is a folder containing a `SKILL.md` file (with YAML frontmatter and Markdown instructions) plus optional supporting files: `scripts/` for executable code, `references/` for documentation, and `assets/` for templates. Skills enable agents to extend their capabilities without bloating the base context — the agent sees a compact catalog at startup, loads full instructions only when a skill is relevant, and fetches supporting files as needed. Use skills to capture organizational knowledge, build capabilities once and deploy across multiple agent products, or give end users the ability to extend agents with custom instructions and tools.

**Key files and paths:**
- `SKILL.md` — Required; contains YAML frontmatter (name, description, optional fields) and Markdown body with instructions
- `scripts/` — Optional; executable code agents can run (bash, Python, JavaScript, etc.)
- `references/` — Optional; supporting documentation referenced from SKILL.md
- `assets/` — Optional; templates and resources
- Discovery paths: `~/.agents/skills/` (user-level), `./.agents/skills/` (project-level), or client-specific directories

**Primary docs:** https://agentskills.io

## When to use

Reach for this skill when:

- **Creating a skill package** — You're authoring a SKILL.md file to bundle instructions, scripts, and context for a specific task (e.g., PDF processing, data analysis, code review)
- **Implementing skills support** — You're building an agent or tool that needs to discover, load, and activate skills from the filesystem
- **Evaluating skill quality** — You're testing whether a skill produces good outputs and iterating to improve it using eval-driven feedback
- **Designing scripts for agents** — You're writing shell scripts or code that agents will execute, and need to ensure they're idempotent, handle errors gracefully, and work in non-interactive environments
- **Organizing team knowledge** — You're capturing repeatable workflows, checklists, or domain-specific procedures as portable, version-controlled packages
- **Sharing skills across tools** — You're publishing skills that work with multiple agent products (Claude Code, other compatible clients, etc.)

## Quick reference

### SKILL.md frontmatter (required fields)

| Field | Constraints | Example |
|-------|-------------|---------|
| `name` | Max 64 chars; lowercase, numbers, hyphens only; no leading/trailing hyphens | `pdf-processing` |
| `description` | Max 1024 chars; non-empty; describes what the skill does and when to use it | `Extract text and tables from PDF files, fill forms, merge documents.` |

### SKILL.md frontmatter (optional fields)

| Field | Purpose | Example |
|-------|---------|---------|
| `license` | License name or reference to bundled file | `MIT` or `LICENSE.md` |
| `compatibility` | Environment requirements (1-500 chars) | `Requires git, docker, jq, and internet access` |
| `metadata` | Arbitrary key-value pairs for additional context | `tags: [pdf, document-processing]` |
| `allowed-tools` | Space-delimited list of pre-approved tools (experimental) | `curl wget jq` |

### Skill directory structure

```
my-skill/
├── SKILL.md              # Required: frontmatter + instructions
├── scripts/              # Optional: executable code
│   ├── validate.sh
│   └── process.py
├── references/           # Optional: supporting docs
│   └── REFERENCE.md
└── assets/               # Optional: templates, resources
    └── template.json
```

### Discovery paths (standard convention)

| Scope | Path | Purpose |
|-------|------|---------|
| Project-level | `./.agents/skills/` | Skills specific to a repository |
| User-level | `~/.agents/skills/` | Skills available across all projects |
| Client-specific | `~/.<client>/skills/` | Client's native location |

### Script best practices checklist

- Use relative paths from skill root: `scripts/validate.sh`, not `/absolute/path`
- Pin versions: `npx eslint@9.0.0`, `python3 -m pip install black==24.10.0`
- Avoid interactive prompts (agents run in non-interactive shells)
- Use structured output (JSON, CSV) over free-form text
- Provide meaningful error messages with expected values and options
- Support `--help` flag with clear usage instructions
- Use distinct exit codes for different failure types (0 = success, 1 = generic error, 2 = invalid args, etc.)

## Decision guidance

### When to use scripts vs. one-off commands

| Scenario | Use scripts/ | Use one-off commands |
|----------|-------------|----------------------|
| Simple tool invocation with a few flags | ❌ | ✅ (e.g., `npx eslint@9 --fix .`) |
| Complex logic, multiple steps, error handling | ✅ | ❌ |
| Reusable across multiple skills | ✅ | ❌ |
| Tool already available in ecosystem (uvx, pipx, npx, deno) | ❌ | ✅ |
| Needs testing or iteration | ✅ | ❌ |

### When to use file-read activation vs. dedicated tool activation

| Condition | File-read activation | Dedicated tool activation |
|-----------|----------------------|--------------------------|
| Agent has file-read capability | ✅ Simplest | Optional but useful |
| Agent cannot read files directly | ❌ | ✅ Required |
| Need to control what content is returned | ❌ | ✅ (strip YAML, wrap in tags) |
| Need to track activation for analytics | ❌ | ✅ |
| Need to enforce permissions | ❌ | ✅ |

### When to bundle files vs. reference external resources

| Approach | Use when | Avoid when |
|----------|----------|-----------|
| Bundle in `scripts/` or `assets/` | File is small, reused across runs, part of the skill's core logic | File is large (>1MB), frequently updated, or shared across many skills |
| Reference external URL | Resource is maintained elsewhere, large, or frequently updated | Requires network access agents may not have, or introduces external dependency |

## Workflow

### Creating a skill

1. **Create the directory structure:**
   ```bash
   mkdir my-skill
   cd my-skill
   ```

2. **Write SKILL.md with frontmatter and instructions:**
   ```markdown
   ---
   name: my-skill
   description: What this skill does and when to use it.
   compatibility: Requires Node.js 18+
   ---

   ## When to use this skill
   Use this skill when...

   ## How to perform task X
   1. Step one
   2. Step two
   ```

3. **Add scripts if needed:**
   - Create `scripts/` directory
   - Write self-contained scripts with clear error messages
   - Test that they work in non-interactive shells
   - Document each script in SKILL.md with relative paths

4. **Add supporting files:**
   - `references/` for documentation
   - `assets/` for templates or resources
   - Keep references one level deep from SKILL.md

5. **Test the skill:**
   - Run a baseline agent task without the skill
   - Run the same task with the skill activated
   - Compare outputs and measure improvement (pass rate, token cost, execution time)

### Implementing skills support in an agent

1. **Discover skills at session startup:**
   - Scan project-level: `./.agents/skills/`
   - Scan user-level: `~/.agents/skills/`
   - Scan client-specific: `~/.<client>/skills/`
   - Parse SKILL.md frontmatter from each skill directory

2. **Build a skill catalog:**
   - Extract `name`, `description`, and `location` (path to SKILL.md)
   - Include roughly 50-100 tokens per skill in the catalog
   - Format as XML, JSON, or bulleted list

3. **Disclose available skills to the model:**
   - Include the catalog in the system prompt or context
   - Tell the model how to activate skills (file-read or dedicated tool)
   - Keep this tier 1 of progressive disclosure — don't load full instructions yet

4. **Activate skills on demand:**
   - When the model requests a skill, deliver the full SKILL.md body
   - Optionally strip YAML frontmatter or wrap in structured tags
   - Provide the skill directory path so relative references resolve correctly
   - Load supporting files (scripts, references) only when instructions reference them

### Evaluating and iterating on a skill

1. **Set up a workspace:**
   ```
   my-skill-workspace/
   ├── skill-snapshot/          # Original skill version
   ├── iteration-1/
   │   ├── without_skill/outputs/
   │   ├── with_skill/outputs/
   │   ├── benchmark.json
   │   └── feedback.json
   └── iteration-2/
       └── ...
   ```

2. **Run baseline and with-skill tests:**
   - For each test case, run the agent without the skill
   - Run the same task with the skill activated
   - Save outputs to separate directories

3. **Grade outputs and collect feedback:**
   - Write assertions to check for specific correctness criteria
   - Have a human reviewer examine outputs and record specific, actionable feedback
   - Aggregate results in `benchmark.json` (pass rate, token cost, execution time, stddev)

4. **Iterate:**
   - Give the eval results, feedback, and current SKILL.md to an LLM
   - Ask it to propose improvements (generalize from feedback, keep the skill lean, explain the why)
   - Apply changes to SKILL.md
   - Rerun all tests in a new `iteration-N/` directory
   - Stop when feedback is consistently empty or improvements plateau

## Common gotchas

- **Interactive prompts hang indefinitely.** Agents run in non-interactive shells. Never use `input()`, password dialogs, or TTY prompts. Accept all input via command-line flags, environment variables, or stdin. If a required flag is missing, print a clear error with usage instructions.

- **Scripts that aren't idempotent cause retries to fail.** If an agent retries a command, it should succeed or fail consistently. Use "create if not exists" patterns instead of "create and fail on duplicate." Document idempotency in your script's help text.

- **Relative paths break if the agent runs from the wrong directory.** Always use paths relative to the skill root (e.g., `scripts/validate.sh`). The agent resolves these automatically. Never use absolute paths or assume the current working directory.

- **Large output gets truncated silently.** Agent harnesses often truncate output beyond 10-30K characters. If your script produces large output, default to a summary and support pagination flags like `--offset` or `--limit`. Alternatively, require an `--output` flag to write to a file.

- **Ambiguous error messages waste agent turns.** When validation fails, say what went wrong, what was expected, and what to try. "Error: invalid input" is useless; "Error: --format must be one of: json, csv, table. Received: xml" is actionable.

- **Over-constrained skills plateau in quality.** If pass rates stop improving despite adding more rules, the skill may be over-specified. Try removing instructions and see if results hold or improve. Fewer, better instructions often outperform exhaustive rules.

- **Deeply nested file references are hard to maintain.** Keep file references one level deep from SKILL.md. Avoid chains like `references/guides/advanced/section.md`.

- **Frontmatter parsing fails on malformed YAML.** Ensure YAML is valid (proper indentation, quoted strings with special characters). Test with a YAML validator before deploying.

- **Skills from untrusted repositories can inject malicious instructions.** If loading project-level skills, gate them on a trust check. Only load skills from repositories the user has explicitly marked as trusted.

- **Skill names that don't match the directory name cause confusion.** While lenient implementations allow mismatches, keep the skill name and directory name in sync for clarity and portability.

## Verification checklist

Before publishing or deploying a skill:

- [ ] **Frontmatter is valid:** `name` and `description` are present, `name` matches the directory, `name` uses only lowercase letters, numbers, and hyphens
- [ ] **Description is clear:** It explains what the skill does and when to use it (not just a feature list)
- [ ] **Scripts are non-interactive:** No `input()`, password prompts, or TTY dialogs; all input via flags or stdin
- [ ] **Scripts have helpful error messages:** Errors include what went wrong, what was expected, and what to try
- [ ] **Scripts are idempotent:** Running the same command twice produces the same result (no "already exists" failures)
- [ ] **Relative paths are correct:** All file references use paths relative to the skill root (e.g., `scripts/validate.sh`)
- [ ] **Scripts are listed in SKILL.md:** The instructions document what scripts exist and how to use them
- [ ] **Output is structured:** Scripts produce JSON, CSV, or other parseable formats (not free-form text)
- [ ] **Dependencies are pinned:** Commands like `npx eslint@9.0.0` pin versions for reproducibility
- [ ] **Compatibility field is accurate:** If present, it correctly describes environment requirements
- [ ] **File references are shallow:** No deeply nested chains; keep references one level deep from SKILL.md
- [ ] **Skill has been tested:** Run baseline and with-skill evals; verify the skill improves outcomes
- [ ] **Instructions are lean:** No unnecessary rules; focus on the core workflow

## Resources

**Comprehensive navigation:** https://agentskills.io/llms.txt — Full page-by-page listing of all documentation

**Critical pages:**
- [Specification](https://agentskills.io/specification) — Complete format definition for SKILL.md, frontmatter fields, directory structure, and file references
- [Using scripts in skills](https://agentskills.io/skill-creation/using-scripts) — Detailed guide to writing agent-compatible scripts, handling dependencies, and designing script interfaces
- [Adding skills support to your agent](https://agentskills.io/client-implementation/adding-skills-support) — Step-by-step implementation guide for agents and tools that want to discover and activate skills

---

> For additional documentation and navigation, see: https://agentskills.io/llms.txt