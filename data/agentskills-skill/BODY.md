---
name: Agent
description: Use when creating, authoring, or integrating Agent Skills — reusable instruction packages that extend agent capabilities. Reach for this skill when building skill directories, writing SKILL.md files, bundling scripts, validating skills, or adding skills support to an agent platform.
metadata:
    mintlify-proj: agent
    version: "1.0"
---

# Agent Skills

## Product summary

Agent Skills is an open standard for packaging reusable instructions, scripts, and resources that agents can discover and execute. A skill is a folder containing a required `SKILL.md` file (with YAML frontmatter and Markdown instructions) plus optional `scripts/`, `references/`, and `assets/` directories. Skills enable agents to extend capabilities on demand using progressive disclosure: metadata loads at startup, full instructions load when activated, and bundled resources load only when needed. The primary documentation is at https://agentskills.io. Key files: `SKILL.md` (required frontmatter + instructions), `scripts/` (executable code), `references/` (supporting docs), `assets/` (templates). Key tools: `skills-ref validate` (validate skill format), `skills-ref to-prompt` (generate XML for agent prompts).

## When to use

Use this skill when:
- **Creating a new skill**: You need to structure instructions, scripts, and metadata for agent use
- **Authoring SKILL.md files**: Writing frontmatter (name, description, optional fields) and Markdown instructions
- **Bundling scripts**: Adding executable code (Python, Bash, JavaScript, etc.) to a skill's `scripts/` directory
- **Integrating skills into an agent**: Adding skill discovery, metadata loading, and activation to an agent platform
- **Validating skills**: Checking that SKILL.md frontmatter and naming conventions are correct
- **Generating agent prompts**: Creating XML metadata blocks for agent system prompts
- **Designing script interfaces**: Making scripts idempotent, handling errors gracefully, and supporting agent execution patterns

## Quick reference

### SKILL.md frontmatter (required)

```yaml
---
name: skill-identifier
description: When to use this skill and what it does (max 1024 chars)
license: MIT  # optional
compatibility: Requires Node.js 18+  # optional
metadata:    # optional key-value pairs
  category: data-processing
---
```

**Naming rules for `name`**: max 64 characters, lowercase letters/numbers/hyphens only, no leading/trailing hyphens.

### Directory structure

```
my-skill/
├── SKILL.md              # Required: frontmatter + instructions
├── scripts/              # Optional: executable code
│   ├── process.py
│   └── validate.sh
├── references/           # Optional: supporting documentation
│   └── advanced-usage.md
└── assets/               # Optional: templates, resources
    └── template.json
```

### Common script runners

| Runner | Command | Best for | Notes |
|--------|---------|----------|-------|
| `uv run` | `uv run scripts/extract.py` | Python | Recommended; uses PEP 723 inline dependencies |
| `pipx run` | `pipx run scripts/extract.py` | Python | Alternative; broader OS package manager support |
| `npx` | `npx eslint@9 --fix .` | Node.js | Bundled with npm; pin versions for reproducibility |
| `deno run` | `deno run --allow-read npm:cheerio@1.0.0` | Deno | Self-contained; use `npm:` and `jsr:` specifiers |
| `bash` | `bash scripts/validate.sh` | Shell | Direct execution; no dependency management |

### Validation and prompt generation

```bash
# Validate a skill directory
skills-ref validate ./my-skill

# Generate <available_skills> XML for agent prompts
skills-ref to-prompt ./my-skill ./another-skill
```

## Decision guidance

| Scenario | Use bundled script | Use one-off command |
|----------|-------------------|-------------------|
| Simple tool invocation (1-2 flags) | No | Yes: `npx eslint@9 --fix .` |
| Complex logic, error handling, retries | Yes | No: move to `scripts/` |
| Reusable across multiple skills | Yes | No: bundle once, reference many times |
| Requires environment setup or dependencies | Yes: declare in script | Maybe: if tool auto-resolves (uv, pipx, npx) |
| Output needs pagination or filtering | Yes: add `--offset` flag | No: one-off commands are simple |

| Scenario | Filesystem-based agent | Tool-based agent |
|----------|------------------------|------------------|
| Agent has shell/bash access | Yes | No |
| Skills accessed via shell commands | Yes | No |
| Skills accessed via tool interface | No | Yes |
| Bundled resources via file paths | Yes | No |
| Bundled resources via tool methods | No | Yes |

## Workflow

### Creating a new skill

1. **Create the directory structure**:
   ```bash
   mkdir my-skill
   cd my-skill
   ```

2. **Write SKILL.md with required frontmatter**:
   - Set `name` (lowercase, hyphens, max 64 chars)
   - Set `description` (what the skill does, when to use it, max 1024 chars)
   - Add optional fields: `license`, `compatibility`, `metadata`
   - Write Markdown instructions below frontmatter

3. **Add instructions to SKILL.md body**:
   - Include step-by-step instructions
   - Provide examples of inputs and outputs
   - Document common edge cases
   - Keep under 500 lines; move detailed content to `references/`

4. **Bundle scripts (if needed)**:
   - Create `scripts/` directory
   - Write self-contained scripts with clear `--help` output
   - Declare dependencies inline (PEP 723 for Python, npm specifiers for Node.js)
   - Avoid interactive prompts; use command-line flags instead

5. **Validate the skill**:
   ```bash
   skills-ref validate ./my-skill
   ```

6. **Generate prompt XML for agent integration**:
   ```bash
   skills-ref to-prompt ./my-skill
   ```

### Integrating skills into an agent

1. **Discover skills**: Scan configured directories for folders containing `SKILL.md`

2. **Load metadata at startup**: Parse only frontmatter (`name`, `description`) from each skill to keep context usage low (~50-100 tokens per skill)

3. **Match tasks to skills**: When a user task matches a skill's description, activate the skill

4. **Load full instructions**: Read the complete SKILL.md body into context when the skill is activated

5. **Execute scripts and resources**: Run bundled scripts or load referenced files as needed during execution

6. **Inject into agent prompt**: Include skill metadata in system prompt using XML format:
   ```xml
   <available_skills>
     <skill>
       <name>pdf-processing</name>
       <description>Extracts text and tables from PDF files, fills forms, merges documents.</description>
       <location>/path/to/skills/pdf-processing/SKILL.md</location>
     </skill>
   </available_skills>
   ```

## Common gotchas

- **Interactive prompts hang agents**: Scripts cannot use TTY prompts, password dialogs, or confirmation menus. Accept all input via command-line flags, environment variables, or stdin. If a flag is required, fail with a clear error message listing valid options.

- **Large output gets truncated**: Agent harnesses often truncate output beyond 10-30K characters. Default to summaries or reasonable limits; support `--offset` for pagination or require `--output FILE` to opt in to full output.

- **Scripts must be idempotent**: Agents may retry commands. Use "create if not exists" patterns instead of "create and fail on duplicate." This prevents spurious failures on retries.

- **Ambiguous input causes silent failures**: Reject ambiguous input with clear errors rather than guessing. Use enums and closed sets where possible (e.g., `--format json|csv|table`).

- **Missing exit codes confuse agents**: Use distinct exit codes for different failure types (not found = 1, invalid args = 2, auth failure = 3). Document them in `--help` output so agents know what each code means.

- **Unstructured output is hard to parse**: Prefer JSON, CSV, or TSV over free-form text. Send structured data to stdout and diagnostics (progress, warnings) to stderr so agents can capture clean output.

- **Frontmatter validation fails silently**: Ensure `name` follows naming rules (lowercase, hyphens, no leading/trailing hyphens, max 64 chars). Run `skills-ref validate` before deploying.

- **Scripts without `--help` are opaque**: Document every script's interface with a concise `--help` output including description, flags, and usage examples. This is how agents learn your script's API.

- **Destructive operations lack safeguards**: For operations that modify state (delete, deploy, overwrite), require explicit confirmation flags (`--confirm`, `--force`) or support `--dry-run` to preview changes.

- **Relative paths break in scripts**: Use relative paths from the skill directory root (e.g., `scripts/validate.sh`, `references/guide.md`). Agents run commands from the skill root, so paths resolve automatically.

## Verification checklist

Before submitting a skill:

- [ ] **Frontmatter is valid**: `name` is lowercase with hyphens only (max 64 chars), `description` is non-empty (max 1024 chars)
- [ ] **SKILL.md exists and is readable**: File is at skill root with proper YAML frontmatter
- [ ] **Instructions are clear**: Body includes step-by-step instructions, examples, and edge cases
- [ ] **Scripts have `--help`**: Every bundled script documents its interface with flags and usage examples
- [ ] **Scripts are non-interactive**: No TTY prompts, password dialogs, or confirmation menus
- [ ] **Scripts use structured output**: JSON, CSV, or TSV to stdout; diagnostics to stderr
- [ ] **Scripts are idempotent**: "Create if not exists" patterns; safe to retry
- [ ] **Dependencies are declared**: Python scripts use PEP 723; Node.js scripts pin versions with `@version`
- [ ] **Relative paths are used**: Scripts reference bundled files relative to skill root
- [ ] **Validation passes**: `skills-ref validate ./my-skill` succeeds
- [ ] **Prompt XML generates**: `skills-ref to-prompt ./my-skill` produces valid XML
- [ ] **Size is reasonable**: SKILL.md is under 500 lines; detailed content is in `references/`

## Resources

- **Comprehensive navigation**: https://agentskills.io/llms.txt — page-by-page listing of all documentation
- **Specification**: https://agentskills.io/specification — complete SKILL.md format, directory structure, validation rules
- **Integration guide**: https://agentskills.io/integrate-skills — how to add skills support to an agent platform
- **Script authoring**: https://agentskills.io/skill-creation/using-scripts — best practices for bundled scripts, one-off commands, error handling

---

> For additional documentation and navigation, see: https://agentskills.io/llms.txt