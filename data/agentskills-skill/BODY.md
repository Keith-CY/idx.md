---
name: Agent
description: Use when creating, optimizing, or integrating skills for AI agents. Reach for this skill when you need to author a SKILL.md file, test whether a skill triggers correctly, optimize a skill's description, bundle scripts with a skill, or add skills support to an agent platform.
metadata:
    mintlify-proj: agent
    version: "1.0"
---

# Agent Skills

## Product summary

Agent Skills is a standard format for packaging reusable instructions, scripts, and resources that AI agents can discover and activate. Every skill is a folder containing a `SKILL.md` file with YAML frontmatter (name and description) and Markdown instructions, optionally bundled with executable scripts in `scripts/`, reference documentation in `references/`, and assets in `assets/`. Agents use progressive disclosure: they load only the name and description at startup to decide when a skill is relevant, then read the full SKILL.md into context when activated. The format is portable (just files), self-documenting (readable by humans and agents), and extensible (from text instructions to complex workflows with code). Primary documentation: https://agentskills.io

## When to use

Use this skill when:

- **Authoring a new skill**: You need to create a SKILL.md file with proper frontmatter, write a description that triggers reliably, bundle scripts, or structure supporting documentation.
- **Optimizing an existing skill**: A skill isn't triggering on relevant prompts, or it's triggering too broadly. You need to test and refine the description.
- **Evaluating skill quality**: You want to verify a skill works as intended, test edge cases, or audit whether it follows best practices.
- **Integrating skills into an agent**: You're building or extending an agent platform and need to implement skill discovery, activation, and context injection.
- **Bundling executable code**: You need to package scripts (Bash, Python, JavaScript, etc.) that agents can run, with proper error handling and non-interactive interfaces.

## Quick reference

### SKILL.md structure

```
skill-name/
├── SKILL.md              # Required: frontmatter + instructions
├── scripts/              # Optional: executable code
├── references/           # Optional: detailed documentation
├── assets/               # Optional: templates, resources
└── ...                   # Any additional files
```

### Frontmatter fields

| Field | Required | Constraints | Purpose |
|-------|----------|-------------|---------|
| `name` | Yes | Max 64 chars, lowercase + hyphens only, no leading/trailing hyphens | Unique identifier |
| `description` | Yes | Max 1024 chars, non-empty | When to use the skill (primary trigger mechanism) |
| `license` | No | License name or file reference | Licensing info |
| `compatibility` | No | Max 500 chars | Environment requirements (Node.js 18+, requires Docker, etc.) |
| `metadata` | No | Key-value mapping | Custom metadata |
| `allowed-tools` | No | Space-delimited list | Pre-approved tools (experimental) |

### Minimal SKILL.md

```yaml
---
name: my-skill
description: Use this skill when the user needs to [specific task]. Handles [what it does], including [key capabilities].
---

## Workflow

1. [Step 1]
2. [Step 2]
```

### Script execution patterns

| Pattern | Use case | Example |
|---------|----------|---------|
| One-off command | Existing tool, no bundling needed | `npx eslint@9.0.0 .` |
| Self-contained script | Reusable logic with inline dependencies | `uv run scripts/extract.py` |
| Bundled script | Complex logic, multiple invocations | `bash scripts/validate.sh "$INPUT"` |

## Decision guidance

### When to use description vs. instructions

| Scenario | Approach |
|----------|----------|
| Skill should trigger on many variations of a request | Broaden description with "even if they don't explicitly mention..." |
| Skill is triggering on unrelated tasks | Narrow description; add specificity about what it does NOT do |
| Skill is too narrow (missing obvious cases) | Add context about user intent, not just keywords |
| Skill is too broad (false positives) | Clarify boundaries with adjacent capabilities |

### When to bundle scripts vs. one-off commands

| Scenario | Approach |
|----------|----------|
| Simple tool invocation (1-2 flags) | One-off command in SKILL.md |
| Complex logic, multiple steps, error handling | Bundled script in `scripts/` |
| Reusable across multiple skills | One-off command (reference existing tool) |
| Needs to run multiple times in workflow | Bundled script with clear interface |

### When to use file-read vs. dedicated activation

| Scenario | Approach |
|----------|----------|
| Agent has file-read capability | File-read activation (simplest) |
| Agent can't read files directly | Dedicated activation tool |
| Need to control what content is returned | Dedicated activation tool |
| Need to track activation for analytics | Dedicated activation tool |

## Workflow

### Creating a skill

1. **Plan the scope**: Define what task the skill handles and when agents should use it. Write a draft description (1-2 sentences) focusing on user intent, not implementation.

2. **Create the directory structure**: Make a folder `skill-name/` and create `SKILL.md` with required frontmatter (name, description) and initial instructions.

3. **Write instructions**: Use imperative voice ("Run the script", "Check the file"). Structure with clear sections (Workflow, Quick reference, Common gotchas). Keep it concise — agents load this into context.

4. **Bundle scripts if needed**: Place executable code in `scripts/`. Use relative paths from the skill root. List available scripts in SKILL.md so agents know they exist.

5. **Test the description**: Create 20 eval queries (8-10 should-trigger, 8-10 should-not-trigger) with realistic phrasing, detail, and complexity. Run each query 3 times through your agent and compute trigger rates.

6. **Optimize the description**: If should-trigger queries fail, broaden the description. If should-not-trigger queries trigger, add specificity. Avoid overfitting — use a train/validation split (60/40).

7. **Verify and finalize**: Check description is under 1024 characters. Run 5-10 fresh test queries. Update SKILL.md and commit.

### Optimizing a skill's description

1. **Identify failures**: Run your eval set and note which queries didn't trigger (should-trigger) or triggered incorrectly (should-not-trigger).

2. **Analyze the gap**: For should-trigger failures, is the description too narrow? For should-not-trigger failures, is it too broad? Look for the general concept, not specific keywords.

3. **Revise**: Broaden or narrow the description. Add context about when the skill applies ("even if they don't explicitly mention..."). Keep it under 1024 characters.

4. **Re-test**: Run the eval set again. Track trigger rates. Use validation set results to pick the best iteration.

5. **Apply**: Update SKILL.md, verify with a few manual prompts, commit.

### Integrating skills into an agent

1. **Discover skills**: Scan the filesystem (local agents) or fetch from an API/registry (cloud agents) for skill directories. Parse SKILL.md frontmatter.

2. **Build the catalog**: Extract name, description, and location (path to SKILL.md) for each skill. Format as XML, JSON, or a bulleted list. Include in the agent's context at startup.

3. **Activate on demand**: When the agent decides a skill is relevant, either:
   - File-read activation: Agent calls its file-read tool with the SKILL.md path.
   - Dedicated tool: Register an `activate_skill` tool that returns the skill's content.

4. **Inject into context**: Provide the full SKILL.md body (with or without frontmatter, depending on your design) to the agent.

5. **Support user-explicit activation**: Allow users to activate skills directly (e.g., `/skill-name` or `$skill-name` syntax) without waiting for the agent to decide.

## Common gotchas

- **Description too narrow**: Skill won't trigger on valid use cases. Use "even if they don't explicitly mention..." to broaden scope without overfitting to keywords.

- **Description too broad**: Skill triggers on unrelated tasks, wasting context. Add specificity about what the skill does NOT do or clarify boundaries with adjacent capabilities.

- **Interactive prompts in scripts**: Agents run in non-interactive shells. Scripts that wait for TTY input (password dialogs, confirmation menus) will hang indefinitely. Always accept input via flags, environment variables, or stdin.

- **Opaque error messages**: When a script fails, say what went wrong, what was expected, and what to try. "Error: invalid input" wastes a turn; "Error: --format must be json, csv, or table. Received: xml" guides the agent's next attempt.

- **Overfitting descriptions to eval queries**: Crafting a description that works for specific phrasings but fails on new ones. Use a train/validation split (60/40) and only optimize against the train set.

- **Unpredictable output size**: Large script output may be truncated by the agent harness. Default to summaries or limits, and support flags like `--offset` for pagination.

- **Relative path confusion**: Reference bundled scripts using paths relative to the skill directory root (e.g., `scripts/validate.sh`). Agents resolve these automatically.

- **Missing script documentation**: List available scripts in SKILL.md so agents know they exist. Include what each script does and what flags it accepts.

- **Unquoted YAML values with colons**: Some parsers reject `description: Use this: do that` without quotes. Wrap values in quotes or use block scalars (`description: >\n  Use this: do that`).

- **Skill not discoverable**: Ensure the skill is registered with the agent (in a skills directory, config file, or API). Check your agent client's documentation for discovery mechanics.

## Verification checklist

Before submitting a skill:

- [ ] **Frontmatter is valid**: name (max 64 chars, lowercase + hyphens), description (max 1024 chars, non-empty).
- [ ] **Description is clear**: Uses imperative voice ("Use when..."), focuses on user intent, lists contexts where skill applies.
- [ ] **Description triggers correctly**: Tested with 20 eval queries (8-10 should-trigger, 8-10 should-not-trigger) at 3 runs each. Trigger rates meet threshold (0.5+).
- [ ] **Scripts are non-interactive**: No TTY prompts, password dialogs, or confirmation menus. All input via flags, env vars, or stdin.
- [ ] **Scripts have clear error messages**: Errors state what went wrong, what was expected, and what to try.
- [ ] **Scripts use structured output**: JSON, CSV, or TSV for data; stderr for diagnostics.
- [ ] **Relative paths are correct**: Scripts referenced as `scripts/name.sh` (relative to skill root), not absolute paths.
- [ ] **Scripts are listed in SKILL.md**: Agents know what scripts exist and what they do.
- [ ] **Instructions are concise**: Workflow, quick reference, gotchas — no unnecessary detail.
- [ ] **No hardcoded assumptions**: Don't assume specific file paths, environment variables, or tools are available. State prerequisites in compatibility field.

## Resources

- **Comprehensive navigation**: https://agentskills.io/llms.txt — Full page-by-page listing for agent reference.
- **Specification**: https://agentskills.io/specification — Complete SKILL.md format, frontmatter fields, directory structure, and constraints.
- **Optimizing descriptions**: https://agentskills.io/skill-creation/optimizing-descriptions — Systematic testing and refinement of skill descriptions for reliable triggering.
- **Using scripts**: https://agentskills.io/skill-creation/using-scripts — Bundling executable code, inline dependencies, error handling, and non-interactive design patterns.

---

> For additional documentation and navigation, see: https://agentskills.io/llms.txt