---
name: Agent
description: Use when creating, optimizing, or evaluating Agent Skills — reusable instruction packages that extend AI agent capabilities. Reach for this skill when you need to package domain expertise into a SKILL.md file, test skill triggering, grade skill outputs, or integrate skills into an agent product.
metadata:
    mintlify-proj: agent
    version: "1.0"
---

# Agent Skills Skill

## Product summary

Agent Skills is an open format for packaging specialized knowledge and workflows into reusable instruction sets that agents load on demand. A skill is a folder containing a `SKILL.md` file (required metadata + instructions) plus optional supporting files: scripts, references, and assets. Agents use **progressive disclosure** to load only the metadata at startup, then read full instructions when a task matches the skill's description, keeping context efficient while providing access to specialized knowledge.

**Key files and paths:**
- `SKILL.md` — Required file containing YAML frontmatter (name, description, optional fields) and markdown instructions
- `scripts/` — Optional executable code (Python, Bash, JavaScript, etc.)
- `references/` — Optional detailed documentation loaded on demand
- `assets/` — Optional templates, data files, images

**Primary documentation:** https://agentskills.io

## When to use

Reach for this skill when:

- **Creating a new skill** — You have domain expertise or a repeatable workflow to package into a SKILL.md file
- **Optimizing skill descriptions** — A skill exists but doesn't trigger reliably; you need to test and improve its `description` field
- **Evaluating skill quality** — You need to test whether a skill produces good outputs, grade results, and iterate
- **Bundling scripts** — You're adding executable code to a skill and need to design it for agent use
- **Integrating skills into an agent** — You're building or extending an agent product to support the Agent Skills format
- **Troubleshooting skill behavior** — A skill isn't triggering, activating, or executing as expected

## Quick reference

### SKILL.md frontmatter (required fields)

| Field | Constraints | Example |
|-------|-------------|---------|
| `name` | 1-64 chars, lowercase + hyphens only, match parent directory | `name: pdf-processing` |
| `description` | 1-1024 chars, describe what + when to use | `description: Extract PDF text, fill forms, merge files. Use when handling PDFs.` |

### SKILL.md frontmatter (optional fields)

| Field | Purpose |
|-------|---------|
| `license` | License name or reference (e.g., `Apache-2.0`) |
| `compatibility` | Environment requirements (e.g., `Requires Python 3.14+ and uv`) |
| `metadata` | Key-value pairs for custom properties (e.g., `author`, `version`) |
| `allowed-tools` | Space-separated pre-approved tools (experimental) |

### Directory structure

```
my-skill/
├── SKILL.md              # Required: metadata + instructions
├── scripts/              # Optional: executable code
│   ├── validate.sh
│   └── process.py
├── references/           # Optional: detailed documentation
│   ├── REFERENCE.md
│   └── api-errors.md
└── assets/               # Optional: templates, data files
    └── template.json
```

### Common script patterns

| Language | Command | Use case |
|----------|---------|----------|
| Python | `uv run scripts/extract.py` | Self-contained with inline dependencies (PEP 723) |
| Bash | `bash scripts/validate.sh "$INPUT"` | Simple shell operations |
| Node.js | `npx eslint@9 --fix .` | One-off tools with pinned versions |
| Deno | `deno run scripts/extract.ts` | TypeScript with npm imports |

## Decision guidance

### When to create a new skill vs. enhance an existing one

| Situation | Decision |
|-----------|----------|
| You have a repeatable workflow or domain expertise not yet packaged | Create a new skill |
| A skill exists but doesn't trigger on relevant prompts | Optimize the `description` field (don't create a new skill) |
| A skill triggers but produces poor outputs | Evaluate and iterate on the skill's instructions |
| Multiple skills cover overlapping domains | Merge them into one coherent unit or clarify boundaries |

### When to use scripts vs. inline commands

| Situation | Approach |
|-----------|----------|
| Invoking an existing tool with a few flags | Inline command (e.g., `npx eslint@9 --fix .`) |
| Complex logic, multiple steps, or error handling | Bundle a script in `scripts/` |
| Logic reused across multiple test cases | Definitely bundle a script |
| One-off validation or transformation | Inline command is fine |

### When to move content to references/ vs. keep in SKILL.md

| Content | Location |
|---------|----------|
| Core instructions the agent needs every run | `SKILL.md` body |
| Detailed reference material (API docs, schemas) | `references/` with conditional loading |
| Edge cases and gotchas | `SKILL.md` (keep in main file) |
| Long templates or examples | `assets/` if > 50 lines, inline if < 20 lines |

## Workflow

### Creating a skill

1. **Identify the domain** — What repeatable task or expertise are you packaging? Write a one-sentence summary.

2. **Create the directory structure** — Make a folder named `skill-name` (lowercase, hyphens only) with a `SKILL.md` file.

3. **Write frontmatter** — Add required `name` and `description` fields. The description should tell agents when to use the skill (not just what it does). Aim for 1-3 sentences, under 1024 characters.

4. **Write instructions** — Add the markdown body with step-by-step guidance. Focus on what the agent wouldn't know without your skill: project-specific conventions, non-obvious edge cases, which tools to use. Omit general knowledge (how HTTP works, what a database is).

5. **Add gotchas section** — List environment-specific facts that defy reasonable assumptions. This is high-value content.

6. **Bundle scripts if needed** — If instructions reference complex logic, create `scripts/` with self-contained, tested code. Include `--help` output and meaningful error messages.

7. **Test triggering** — Run 10-20 realistic prompts through your agent with the skill installed. Does it activate on should-trigger queries? Does it skip should-not-trigger queries? Adjust the description if needed.

8. **Test output quality** — Run 2-3 test cases with and without the skill. Grade outputs against assertions. Iterate on instructions based on failures.

### Optimizing a skill's description

1. **Create eval queries** — Write 20 realistic prompts (10 should-trigger, 10 should-not-trigger). Include casual language, typos, and context.

2. **Split into train/validation** — Use 60% for iteration, 40% for final validation.

3. **Test current description** — Run each query 3 times through your agent. Compute trigger rates.

4. **Identify failures** — Which should-trigger queries didn't trigger? Which should-not-trigger queries did?

5. **Revise description** — Broaden if should-trigger queries fail. Add specificity if should-not-trigger queries false-trigger. Avoid overfitting to specific keywords.

6. **Repeat** — Re-test on train set. Stop after 5 iterations or when improvement plateaus.

7. **Validate** — Test the final description on the validation set (queries never used during optimization). This is your honest measure of generalization.

### Evaluating skill output quality

1. **Write test cases** — Create `evals/evals.json` with 2-3 realistic prompts, expected outputs, and input files.

2. **Run with and without skill** — Execute each test case twice: once with the skill, once without (or with a previous version). Save outputs to separate directories.

3. **Write assertions** — After seeing outputs, add verifiable statements (e.g., "output includes a bar chart", "report has at least 3 recommendations").

4. **Grade outputs** — Evaluate each assertion against actual outputs. Record PASS/FAIL with evidence.

5. **Aggregate results** — Compute pass rates, token usage, and timing for both configurations. Calculate the delta (what the skill costs vs. what it buys).

6. **Review with a human** — Read actual outputs. Note specific feedback (not just "looks good" or "looks bad").

7. **Iterate** — Give failed assertions, human feedback, and execution transcripts to an LLM. Ask it to propose improvements to the skill. Apply changes and repeat.

## Common gotchas

- **Description is too vague** — "Helps with PDFs" won't trigger. Be specific: "Extract PDF text, fill forms, merge files. Use when handling PDFs."

- **Overfitting to test queries** — If you optimize the description against all your queries, it may fail on new phrasings. Use a train/validation split.

- **Skill instructions are too long** — Keep `SKILL.md` under 500 lines and 5,000 tokens. Move detailed reference material to `references/` with conditional loading ("Read `references/api-errors.md` if the API returns a non-200 status").

- **Scripts with interactive prompts** — Agents run in non-interactive shells. Never use `input()`, password dialogs, or confirmation menus. Accept all input via flags, environment variables, or stdin.

- **Scripts with poor error messages** — "Error: invalid input" wastes a turn. Say what went wrong, what was expected, and what to try: "Error: --format must be one of: json, csv, table. Received: 'xml'".

- **Unstructured script output** — Prefer JSON, CSV, or TSV over free-form text. Agents and tools can parse structured formats. Send diagnostics to stderr, data to stdout.

- **Skill name doesn't match directory name** — The `name` field must match the parent directory exactly. `name: pdf-processing` requires the directory to be `pdf-processing/`.

- **Consecutive hyphens in skill name** — `name: pdf--processing` is invalid. Use single hyphens only.

- **Skill instructions reference absolute paths** — Use relative paths from the skill directory root (e.g., `scripts/validate.sh`, `references/schema.md`). Agents resolve these automatically.

- **Skill content gets pruned from context** — If your agent truncates old messages, protect skill content from pruning. Losing skill instructions mid-conversation silently degrades performance.

- **Assertions that always pass or always fail** — Remove assertions that pass regardless of skill quality (too easy) or fail even when output is good (too hard). These don't tell you anything useful.

## Verification checklist

Before submitting a skill:

- [ ] `SKILL.md` exists in the skill directory
- [ ] `name` field is 1-64 chars, lowercase + hyphens, matches parent directory
- [ ] `description` field is 1-1024 chars and describes both what + when to use
- [ ] Skill triggers on at least 80% of should-trigger test queries
- [ ] Skill skips at least 80% of should-not-trigger test queries
- [ ] Instructions are under 500 lines; detailed content moved to `references/`
- [ ] Scripts have `--help` output and meaningful error messages
- [ ] Scripts avoid interactive prompts (no `input()`, dialogs, confirmation menus)
- [ ] Scripts send structured data to stdout, diagnostics to stderr
- [ ] Relative paths in instructions are correct (e.g., `scripts/validate.sh`)
- [ ] Test cases pass with the skill at a higher rate than without
- [ ] Human review found no major issues with output quality
- [ ] Skill is not trying to do too much (coherent unit of work)

## Resources

**Comprehensive page listing:** https://agentskills.io/llms.txt

**Critical documentation:**
- [Specification](https://agentskills.io/specification) — Complete format reference for SKILL.md files, frontmatter fields, directory structure
- [Best practices for skill creators](https://agentskills.io/skill-creation/best-practices) — How to write effective skills, calibrate control, structure large skills, avoid common pitfalls
- [Evaluating skill output quality](https://agentskills.io/skill-creation/evaluating-skills) — Test cases, assertions, grading, iteration loop for improving skill outputs

---

> For additional documentation and navigation, see: https://agentskills.io/llms.txt