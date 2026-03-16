---
name: Agent
description: Use when creating, evaluating, or implementing Agent Skills — a lightweight format for extending AI agent capabilities with specialized knowledge, workflows, and scripts. Reach for this skill when building new skills, optimizing skill descriptions for triggering, testing skill quality, or adding skills support to an agent product.
metadata:
    mintlify-proj: agent
    version: "1.0"
---

# Agent Skills

Agent Skills is an open format for packaging specialized knowledge, workflows, and scripts that agents can discover and use on demand. A skill is a directory containing a `SKILL.md` file (metadata + instructions), optional `scripts/` for executable code, and optional `references/` and `assets/` for supporting materials.

## Product summary

Agent Skills are folders containing a required `SKILL.md` file with YAML frontmatter and Markdown instructions. The format uses **progressive disclosure**: agents load only skill names and descriptions at startup (~50-100 tokens per skill), then load full instructions when a skill becomes relevant, then load supporting files on demand. This keeps context efficient while giving agents access to specialized knowledge.

Key files and concepts:
- **`SKILL.md`**: Required. Contains `name` and `description` frontmatter, plus Markdown instructions.
- **`scripts/`**: Optional. Executable code (Python, Bash, JavaScript, etc.) that agents can run.
- **`references/`** and **`assets/`**: Optional. Supporting documentation and templates.
- **Skill directory**: Parent folder containing `SKILL.md`. Must match the skill's `name` field.

Primary documentation: https://agentskills.io

## When to use

Reach for this skill when:

- **Creating a new skill**: You have domain expertise or project-specific knowledge to package into reusable instructions for agents.
- **Optimizing a skill's description**: Your skill isn't triggering on relevant prompts, or it's triggering on irrelevant ones. You need to test and refine the `description` field.
- **Evaluating skill quality**: You want to systematically test whether a skill produces good outputs, compare it against a baseline, and iterate based on results.
- **Implementing skills support**: You're building an agent or tool and need to add skills discovery, loading, and activation.
- **Bundling scripts or references**: You have reusable code or documentation that should travel with your skill.
- **Troubleshooting skill behavior**: An agent isn't using your skill when it should, or is using it when it shouldn't.

## Quick reference

### Skill directory structure

```
my-skill/
├── SKILL.md              # Required: metadata + instructions
├── scripts/              # Optional: executable code
│   ├── validate.sh
│   └── process.py
├── references/           # Optional: detailed documentation
│   └── REFERENCE.md
└── assets/               # Optional: templates, images, data
    └── template.md
```

### SKILL.md frontmatter (required fields)

| Field | Constraints | Example |
|-------|-------------|---------|
| `name` | 1-64 chars, lowercase + hyphens only, no leading/trailing hyphens | `name: pdf-processing` |
| `description` | 1-1024 chars, describes what the skill does and when to use it | `description: Extract PDF text, fill forms, merge files. Use when handling PDFs.` |

### Optional frontmatter fields

| Field | Purpose | Max length |
|-------|---------|-----------|
| `license` | License name or reference | — |
| `compatibility` | Environment requirements (Node.js 18+, requires git, etc.) | 500 chars |
| `metadata` | Custom key-value pairs for client-specific data | — |
| `allowed-tools` | Space-delimited list of pre-approved tools (experimental) | — |

### Skill activation workflow (for agents)

1. **Discovery**: Agent scans `~/.agents/skills/`, `<project>/.agents/skills/`, and client-specific directories for `SKILL.md` files.
2. **Catalog**: Agent loads skill names and descriptions (tier 1 — ~50-100 tokens per skill).
3. **Activation**: When a task matches a skill's description, agent loads the full `SKILL.md` body (tier 2 — <5000 tokens recommended).
4. **Execution**: Agent follows instructions, loading referenced files (scripts, references) on demand (tier 3).

### Common script patterns

| Tool | Use case | Command |
|------|----------|---------|
| `uvx` | Python packages, isolated environments | `uvx ruff@0.8.0 check .` |
| `npx` | npm packages | `npx eslint@9 --fix .` |
| `pipx` | Python packages (alternative to uvx) | `pipx run black==24.10.0 .` |
| `uv run` | Python scripts with inline dependencies (PEP 723) | `uv run scripts/extract.py` |
| `deno run` | TypeScript/JavaScript from URLs | `deno run --allow-read npm:eslint@9 -- .` |

## Decision guidance

### When to bundle a script vs. reference a one-off command

| Scenario | Approach | Reason |
|----------|----------|--------|
| Simple tool invocation (1-2 flags) | One-off command in SKILL.md | Minimal overhead, no extra files |
| Complex logic, multiple steps, error handling | Bundle in `scripts/` | Tested, reusable, easier for agents to invoke |
| Tool already exists with good defaults | One-off command with pinned version | `npx eslint@9.0.0 .` is simpler than a wrapper script |
| Logic repeated across test cases | Bundle in `scripts/` | Agents reinventing the same logic signals it should be a script |

### When to use references/ vs. keeping content in SKILL.md

| Scenario | Approach | Reason |
|----------|----------|--------|
| Core instructions <500 lines | Keep in SKILL.md | Agents load it anyway; no extra file reads |
| Detailed reference material, API specs, schemas | Move to `references/` | Agents load on demand; keeps main instructions lean |
| Conditional content (only needed in certain cases) | Move to `references/` | Tell agent when to load it: "Read references/api-errors.md if the API returns a non-200 status" |
| Gotchas, edge cases, common mistakes | Keep in SKILL.md | Agents read before encountering the issue; separate file risks them missing it |

### When to use prescriptive vs. flexible instructions

| Scenario | Approach | Reason |
|----------|----------|--------|
| Fragile operation, specific sequence required | Prescriptive: "Run exactly this command" | Consistency matters; wrong order breaks things |
| Multiple valid approaches, task tolerates variation | Flexible: explain the why, let agent choose | Agent makes better context-dependent decisions when it understands purpose |
| Database migration, destructive operation | Prescriptive with validation: plan → validate → execute | Prevents mistakes; agent can self-correct before committing |
| Code review, analysis, creative task | Flexible: describe what to look for, not how | Agent adapts to context; rigid steps waste time |

## Workflow

### Creating a new skill

1. **Extract from real expertise**: Complete a real task with an agent, noting steps that worked, corrections you made, input/output formats, and project-specific context. Don't generate a skill from generic knowledge alone.

2. **Create the directory and SKILL.md**:
   ```bash
   mkdir my-skill
   cat > my-skill/SKILL.md << 'EOF'
   ---
   name: my-skill
   description: What this skill does and when to use it (1-1024 chars).
   ---
   
   # My Skill
   
   ## When to use this skill
   [Describe when agents should reach for this skill]
   
   ## How to [task]
   [Step-by-step instructions]
   EOF
   ```

3. **Write the description carefully**: It's the only thing agents see at startup. Be specific about what the skill does and when it applies. Include keywords agents might use without naming the domain directly.

4. **Add instructions**: Focus on what agents *wouldn't* know without your skill — project conventions, non-obvious edge cases, specific tools to use. Omit what they already know (what a PDF is, how HTTP works).

5. **Bundle scripts if needed**: If agents would reinvent the same logic repeatedly, move it to `scripts/`. Use inline dependencies (PEP 723 for Python, npm: for Deno) so agents can run scripts with a single command.

6. **Add gotchas section**: List environment-specific facts that defy reasonable assumptions. This is high-value content.

7. **Test the skill**: Run it against real prompts. Read execution traces, not just final outputs. Iterate based on what you see.

### Optimizing a skill's description

1. **Create eval queries** (~20 total): Mix of should-trigger (8-10) and should-not-trigger (8-10) realistic prompts. Vary phrasing, explicitness, detail, and complexity.

2. **Split into train/validation sets** (60/40): Use train set to guide improvements; validation set to check whether changes generalize.

3. **Test triggering**: Run each query through your agent 3 times. Compute trigger rate (fraction of runs where skill was invoked). Should-trigger queries pass if trigger rate > 0.5; should-not-trigger pass if < 0.5.

4. **Identify failures**: Which should-trigger queries didn't trigger? Which should-not-trigger did? Focus on near-misses (queries that share keywords but need something different).

5. **Revise the description**: Broaden if should-trigger queries fail. Add specificity if should-not-trigger queries false-trigger. Avoid overfitting to specific keywords; address the general concept.

6. **Repeat** until train set passes or improvement plateaus (usually 3-5 iterations).

7. **Validate**: Test the final description on fresh queries (5-10) that weren't part of optimization.

### Evaluating skill quality

1. **Design test cases** (start with 2-3): Each has a prompt, expected output description, optional input files, and assertions (verifiable statements about what success looks like).

2. **Run with and without skill**: For each test case, run the agent twice — once with the skill, once without (or with a previous version). Save outputs to separate directories.

3. **Capture timing**: Record token count and duration for each run.

4. **Write assertions**: After seeing outputs, add specific, verifiable checks. "The output includes a bar chart image" is good; "the output is good" is not.

5. **Grade outputs**: For each assertion, evaluate against actual outputs. Record PASS/FAIL with concrete evidence.

6. **Aggregate results**: Compute pass rates, token usage, and timing deltas. Compare with-skill vs. without-skill.

7. **Analyze patterns**: Which assertions pass with the skill but fail without? (Skill is adding value.) Which always fail in both? (Assertion or test case is broken.)

8. **Review with a human**: Read actual outputs. Catch issues assertions miss.

9. **Iterate**: Give failed assertions, human feedback, and execution transcripts to an LLM. Ask it to propose improvements to the skill. Rerun all tests in a new `iteration-N/` directory.

10. **Stop when**: Results satisfy you, feedback is consistently empty, or improvement plateaus.

## Common gotchas

- **Over-broad descriptions trigger on irrelevant tasks.** A description that says "helps with data" will trigger on "write a Python script to fetch data from an API" even though the skill is for CSV analysis. Use near-miss test cases to catch this.

- **Vague instructions waste agent turns.** "Handle errors appropriately" doesn't tell the agent what to do. Be specific: "If the API returns a 429 status, wait 60 seconds and retry."

- **Gotchas belong in SKILL.md, not references/.** Agents read SKILL.md before encountering the issue. A separate reference file risks them missing the gotcha entirely.

- **Scripts with interactive prompts hang indefinitely.** Agents can't respond to TTY prompts. Accept all input via flags, environment variables, or stdin. Always provide `--help` output.

- **Relative paths in scripts are relative to the skill directory root.** When an agent runs `bash scripts/validate.sh`, it's running from the skill directory. Reference files as `../references/schema.yaml` or use absolute paths.

- **Skill names must match the parent directory name.** If the directory is `my-skill/`, the `name` field must be `my-skill`. Mismatches cause discovery failures.

- **Descriptions are limited to 1024 characters.** Optimize ruthlessly. Every character counts toward the agent's context window at startup.

- **Skills load their full SKILL.md when activated.** Keep the body under 500 lines and 5000 tokens. Move detailed reference material to separate files and tell agents when to load them.

- **Skill names can only contain lowercase letters, numbers, and hyphens.** No underscores, no uppercase. `my-skill` is valid; `my_skill` and `MySkill` are not.

- **Assertions that always pass are useless.** If an assertion passes in both with-skill and without-skill runs, it's not measuring the skill's value. Remove it or make it more specific.

- **Overfitting descriptions to specific test queries.** If you optimize against all 20 queries, the description works for those phrasings but fails on new ones. Use a train/validation split.

- **Forgetting to pin script versions.** `npx eslint` might run v8 today and v9 tomorrow. Use `npx eslint@9.0.0` for reproducibility.

## Verification checklist

Before submitting a skill:

- [ ] **Frontmatter is valid**: `name` and `description` fields present. Name matches parent directory. Name is lowercase + hyphens only. Description is 1-1024 characters.
- [ ] **Description is specific**: Describes what the skill does and when to use it. Includes keywords agents might search for. Doesn't just say "helps with X."
- [ ] **Instructions are concrete**: Focus on what agents wouldn't know without the skill. Include examples, gotchas, and specific tools to use.
- [ ] **Scripts are non-interactive**: No TTY prompts, password dialogs, or confirmation menus. All input via flags or stdin.
- [ ] **Scripts have `--help`**: Output is concise and includes usage examples.
- [ ] **Relative paths work**: Scripts and references use paths relative to the skill directory root.
- [ ] **SKILL.md is under 500 lines**: Detailed material moved to `references/`.
- [ ] **Skill has been tested**: Run against real prompts. Read execution traces. Iterate based on results.
- [ ] **Description has been optimized**: Test triggering on should-trigger and should-not-trigger queries. Validate on fresh queries.
- [ ] **Skill quality has been evaluated**: Test cases written, run with and without skill, assertions graded, results aggregated.

## Resources

**Comprehensive navigation**: https://agentskills.io/llms.txt — Full page-by-page listing for agent reference.

**Critical documentation**:
- [Specification](https://agentskills.io/specification) — Complete format reference for SKILL.md, directory structure, and file conventions.
- [Best practices for skill creators](https://agentskills.io/skill-creation/best-practices) — How to write skills grounded in real expertise, spend context wisely, and calibrate control.
- [Optimizing skill descriptions](https://agentskills.io/skill-creation/optimizing-descriptions) — Systematic approach to testing and improving triggering accuracy.

---

> For additional documentation and navigation, see: https://agentskills.io/llms.txt