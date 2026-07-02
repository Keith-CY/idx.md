---
name: Agent
description: Use when creating, testing, optimizing, or implementing Agent Skills — a standardized format for extending AI agent capabilities. Reach for this skill when building skills for agents, evaluating skill quality, optimizing skill descriptions for triggering, or adding skills support to an agent product.
metadata:
    mintlify-proj: agent
    version: "1.0"
---

# Agent Skills Playbook

## Product summary

Agent Skills is an open format for packaging specialized knowledge and workflows into reusable instructions that AI agents can load on demand. A skill is a folder containing a `SKILL.md` file (metadata + instructions) plus optional supporting files (scripts, references, assets). Skills use **progressive disclosure**: agents load only the name and description at startup, then read full instructions when a task matches the skill's scope, and load supporting files on demand. This keeps context efficient while giving agents access to specialized knowledge.

Key files and conventions:
- **`SKILL.md`** — Required file with YAML frontmatter (`name`, `description`, optional `license`, `compatibility`, `metadata`, `allowed-tools`) and markdown instructions
- **`scripts/`** — Executable code (Python, Bash, JavaScript, etc.) that agents can run
- **`references/`** — Additional documentation (REFERENCE.md, FORMS.md, domain-specific files)
- **`assets/`** — Static resources (templates, images, data files)
- **`.agents/skills/`** — Cross-client convention for skill directories (project-level: `.agents/skills/`, user-level: `~/.agents/skills/`)

Primary docs: https://agentskills.io

## When to use

Reach for this skill when:

- **Creating a new skill** — You have domain expertise or project-specific knowledge to package into reusable instructions
- **Testing and evaluating skills** — You need to verify a skill produces good outputs across varied prompts and edge cases
- **Optimizing skill descriptions** — A skill exists but doesn't trigger reliably; you need to improve its `description` field
- **Implementing skills support** — You're adding Agent Skills to an agent product or development tool
- **Debugging skill behavior** — An agent isn't using a skill when it should, or is using it incorrectly
- **Bundling scripts and resources** — You need to include executable code or reference materials alongside skill instructions

## Quick reference

### Skill directory structure

```
my-skill/
├── SKILL.md                    # Required: metadata + instructions
├── scripts/                    # Optional: executable code
│   ├── process.py
│   └── validate.sh
├── references/                 # Optional: additional docs
│   ├── REFERENCE.md
│   └── api-errors.md
└── assets/                     # Optional: templates, images, data
    └── template.json
```

### SKILL.md frontmatter fields

| Field | Required | Constraints | Purpose |
|-------|----------|-------------|---------|
| `name` | Yes | 1-64 chars, lowercase + hyphens, no leading/trailing/consecutive hyphens, must match parent directory | Unique identifier |
| `description` | Yes | 1-1024 chars, non-empty | Tells agents when to use the skill |
| `license` | No | Short string or reference | License terms |
| `compatibility` | No | 1-500 chars | Environment requirements (Python 3.14+, requires git, etc.) |
| `metadata` | No | Key-value map | Custom properties (author, version, etc.) |
| `allowed-tools` | No | Space-separated string | Pre-approved tools (experimental) |

### Minimal SKILL.md example

```markdown
---
name: my-skill
description: What this skill does and when to use it.
---

## Instructions

Step-by-step guidance for agents.
```

### File references in skills

Use relative paths from skill root:
```markdown
See [details](references/REFERENCE.md) for more.
Run: `python scripts/process.py input.csv`
```

### Validation

```bash
skills-ref validate ./my-skill
```

## Decision guidance

| Scenario | Approach | When to use |
|----------|----------|------------|
| **Simple one-off command** | Reference existing tool directly (uvx, npx, pipx, go run) | Tool already exists, no custom logic needed |
| **Reusable logic** | Bundle script in `scripts/` with inline dependencies | Logic will be used repeatedly or needs testing |
| **Detailed reference material** | Move to `references/` and reference from SKILL.md | Content is >500 lines or only needed in specific cases |
| **Skill not triggering** | Optimize `description` field with eval queries | Skill exists but agent doesn't recognize when to use it |
| **Skill produces poor outputs** | Run structured evals with test cases and assertions | Need to verify quality across varied prompts |
| **Narrow vs. broad scope** | Design coherent units (one skill = one function) | Deciding what a skill should cover |
| **Prescriptive vs. flexible instructions** | Match specificity to fragility of task | Deciding how much control to give the agent |

## Workflow

### Creating a skill

1. **Identify the domain expertise.** Start from real work: complete a task with an agent, noting corrections and context you provide. Extract the reusable pattern.
2. **Create the directory structure.** Make `my-skill/SKILL.md` with required frontmatter (`name`, `description`) and initial instructions.
3. **Write clear instructions.** Focus on what the agent wouldn't know without the skill. Include gotchas, edge cases, and specific tool choices. Omit generic advice.
4. **Add supporting files if needed.** Bundle scripts in `scripts/`, reference material in `references/`, templates in `assets/`.
5. **Test with real prompts.** Run the skill against realistic tasks. Read execution traces, not just final outputs.
6. **Validate the format.** Run `skills-ref validate ./my-skill` to check frontmatter and naming.

### Optimizing a skill's description

1. **Create eval queries.** Write 20 realistic prompts (8-10 should trigger, 8-10 shouldn't). Include casual phrasing, typos, and context.
2. **Split into train/validation sets.** 60% train (for iteration), 40% validation (for generalization testing).
3. **Test current description.** Run each query through the agent 3 times. Compute trigger rate (fraction of runs where skill was invoked).
4. **Identify failures.** Which should-trigger queries didn't trigger? Which should-not-trigger queries false-triggered?
5. **Revise the description.** Broaden if should-trigger queries fail. Add specificity if should-not-trigger queries false-trigger. Avoid overfitting to specific keywords.
6. **Repeat 3-5 times.** Stop when train set passes or improvement plateaus.
7. **Validate on fresh queries.** Write 5-10 new queries (never seen before) and test the final description.

### Evaluating skill output quality

1. **Design test cases.** Write 2-3 realistic prompts with expected outputs. Include edge cases.
2. **Run with and without skill.** Execute each test case twice: once with the skill, once without (or with previous version).
3. **Capture timing.** Record token count and duration for each run.
4. **Write assertions.** After seeing outputs, define verifiable statements (e.g., "output includes a bar chart," "report has 3+ recommendations").
5. **Grade outputs.** Evaluate each assertion against actual outputs. Record PASS/FAIL with specific evidence.
6. **Aggregate results.** Compute pass rates, token usage, and timing deltas (with skill vs. without).
7. **Review with a human.** Check actual outputs for quality issues assertions didn't catch.
8. **Iterate.** Give failed assertions, human feedback, and execution traces to an LLM. Ask for skill improvements. Rerun tests in a new iteration directory.

### Implementing skills support in an agent

1. **Discover skills.** Scan `.agents/skills/` (project and user level) for directories containing `SKILL.md`.
2. **Parse metadata.** Extract `name` and `description` from YAML frontmatter of each skill.
3. **Build catalog.** Create a structured list of available skills (name + description) for the model.
4. **Disclose to model.** Include the catalog in system prompt or tool description. Tell the model how to activate skills.
5. **Implement activation.** Either let the model read `SKILL.md` files directly, or provide a dedicated tool that returns skill content.
6. **Protect skill content.** Exempt skill instructions from context pruning/compaction during the session.
7. **Support user activation.** Allow users to explicitly load skills via slash commands (e.g., `/skill-name`).

## Common gotchas

- **Overly generic instructions.** "Handle errors appropriately" and "follow best practices" don't help agents. Include specific edge cases, tool choices, and project conventions instead.
- **Skill description too narrow.** If the description only matches exact keywords, the agent won't trigger it on paraphrased requests. Use broader language and include "even if they don't explicitly mention X."
- **Skill description too broad.** If it matches unrelated tasks, the agent wastes time loading and following irrelevant instructions. Add specificity about what the skill does *not* do.
- **Overfitting descriptions to eval queries.** Optimizing against specific phrasings breaks generalization. Use train/validation splits and test on fresh queries.
- **Skill instructions too long.** Keep `SKILL.md` under 500 lines and 5,000 tokens. Move detailed reference material to separate files in `references/`.
- **Missing gotchas section.** The highest-value content is often a list of non-obvious facts (soft deletes, field name mismatches, health check endpoints). Add these explicitly.
- **Scripts with interactive prompts.** Agents run in non-interactive shells. Scripts that block on TTY input will hang. Accept all input via flags, environment variables, or stdin.
- **Unstructured script output.** Agents parse stdout to decide next steps. Use JSON, CSV, or other structured formats. Send diagnostics to stderr.
- **Skill name doesn't match directory.** The `name` field must exactly match the parent directory name. Mismatches cause discovery failures.
- **Relative paths in scripts.** Scripts run from the skill directory root. Use relative paths like `scripts/process.py`, not absolute paths.
- **Forgetting to validate.** Run `skills-ref validate ./my-skill` before publishing. Catches frontmatter errors and naming issues.
- **Not testing edge cases.** Skills that work on happy paths often fail on malformed input, missing fields, or unusual requests. Include edge case test prompts.
- **Skill activates but agent ignores it.** If the agent loads the skill but doesn't follow instructions, the instructions may be too vague or conflicting with the agent's own knowledge. Simplify and be explicit.

## Verification checklist

Before submitting a skill:

- [ ] **Frontmatter is valid.** `name` and `description` are present and non-empty. `name` matches parent directory and follows naming rules (lowercase, hyphens, no leading/trailing/consecutive hyphens).
- [ ] **Description is specific.** It describes both what the skill does and when to use it. Includes keywords agents will match against user requests.
- [ ] **Instructions are concrete.** Include specific tool choices, gotchas, edge cases, and examples. Omit generic advice.
- [ ] **Scripts are non-interactive.** No TTY prompts, password dialogs, or confirmation menus. All input via flags or stdin.
- [ ] **Scripts have `--help`.** Output includes usage, available flags, and examples.
- [ ] **Scripts use structured output.** JSON, CSV, or delimited formats. Diagnostics to stderr.
- [ ] **Relative paths are correct.** Scripts and references use paths relative to skill root (e.g., `scripts/process.py`, `references/REFERENCE.md`).
- [ ] **Validation passes.** Run `skills-ref validate ./my-skill` with no errors.
- [ ] **Tested on real prompts.** Skill has been run against realistic tasks. Execution traces reviewed.
- [ ] **Assertions pass.** If using evals, test cases pass with the skill and show improvement over baseline.
- [ ] **No overfitting.** Description tested on fresh queries not used during optimization.

## Resources

**Comprehensive navigation:** https://agentskills.io/llms.txt

**Critical documentation:**
- [Specification](https://agentskills.io/specification) — Complete format reference for SKILL.md, directory structure, and file conventions
- [Best practices for skill creators](https://agentskills.io/skill-creation/best-practices) — How to write effective skills grounded in real expertise, calibrate control, and structure instructions
- [Evaluating skill output quality](https://agentskills.io/skill-creation/evaluating-skills) — How to design test cases, run evals, grade assertions, and iterate systematically

---

> For additional documentation and navigation, see: https://agentskills.io/llms.txt