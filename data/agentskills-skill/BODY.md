---
name: Agent
description: Use when creating, optimizing, or evaluating Agent Skills — the open format for extending AI agent capabilities. Reach for this skill when building SKILL.md files, testing skill descriptions, bundling scripts, or implementing skills support in an agent client.
metadata:
    mintlify-proj: agent
    version: "1.0"
---

# Agent Skills

## Product summary

Agent Skills is an open format for packaging specialized knowledge and workflows into portable, version-controlled folders that AI agents load on demand. A skill is a directory containing a `SKILL.md` file (metadata + instructions) plus optional scripts, references, and assets. Agents discover skills at startup, load only the name and description initially, and pull full instructions when a task matches the skill's scope. This progressive disclosure keeps context efficient while giving agents access to domain expertise, repeatable workflows, and cross-product reuse.

Key files and paths:
- **`SKILL.md`** — Required file with YAML frontmatter (`name`, `description`) and markdown instructions
- **`scripts/`** — Optional executable code (Python, Bash, JavaScript, etc.)
- **`references/`** — Optional detailed documentation loaded on demand
- **`assets/`** — Optional templates, images, data files
- **Discovery paths** — `.agents/skills/` (cross-client convention), `~/.agents/skills/` (user-level), `<project>/.agents/skills/` (project-level)

Primary docs: https://agentskills.io

## When to use

Use this skill when:
- **Creating a new skill** — You have a repeatable task, workflow, or domain expertise to package into a SKILL.md file
- **Optimizing a skill's description** — The skill exists but doesn't trigger reliably; you need to test and refine the `description` field
- **Evaluating skill quality** — You want to test whether a skill produces good outputs across varied prompts using structured evals
- **Bundling scripts** — You need to include executable code (Python, Bash, JavaScript) that agents can run
- **Implementing skills support** — You're building an agent client and need to add skills discovery, activation, and context management
- **Troubleshooting skill behavior** — A skill isn't triggering, isn't producing expected output, or conflicts with other skills

## Quick reference

### SKILL.md frontmatter (required fields)

| Field | Constraints | Example |
|-------|-------------|---------|
| `name` | 1-64 chars, lowercase + hyphens only, no leading/trailing hyphens | `name: pdf-processing` |
| `description` | 1-1024 chars, imperative phrasing, focus on user intent | `description: Extract PDF text, fill forms, merge files. Use when handling PDFs.` |

### Optional frontmatter fields

| Field | Purpose |
|-------|---------|
| `license` | License name or reference (e.g., `Apache-2.0`) |
| `compatibility` | Environment requirements (e.g., `Requires Python 3.14+ and uv`) |
| `metadata` | Custom key-value pairs for client-specific data |
| `allowed-tools` | Space-separated list of pre-approved tools (experimental) |

### Directory structure

```
my-skill/
├── SKILL.md              # Required
├── scripts/              # Optional: executable code
│   ├── validate.sh
│   └── process.py
├── references/           # Optional: detailed docs
│   └── REFERENCE.md
└── assets/               # Optional: templates, images
    └── template.txt
```

### One-off commands (no scripts/ directory needed)

| Tool | Command | When to use |
|------|---------|------------|
| `uvx` | `uvx ruff@0.8.0 check .` | Python packages, fast caching |
| `npx` | `npx eslint@9 --fix .` | npm packages, bundled with Node.js |
| `pipx` | `pipx run black==24.10.0 .` | Python, broader OS package manager support |
| `bunx` | `bunx eslint@9 --fix .` | Bun environments only |
| `deno run` | `deno run npm:eslint@9 -- --fix .` | Deno environments |

### Script design checklist

- [ ] No interactive prompts (agents run in non-interactive shells)
- [ ] Accepts all input via flags, env vars, or stdin
- [ ] Includes `--help` with usage examples
- [ ] Helpful error messages (not just "Error: invalid input")
- [ ] Structured output (JSON, CSV) to stdout; diagnostics to stderr
- [ ] Idempotent (safe to retry)
- [ ] Meaningful exit codes

## Decision guidance

### When to create a skill vs. rely on agent's built-in knowledge

| Situation | Create a skill | Rely on agent |
|-----------|---|---|
| Task requires project-specific conventions, APIs, or schemas | ✓ | |
| Task involves non-obvious edge cases or gotchas | ✓ | |
| Task is a general capability (reading files, basic math) | | ✓ |
| Task requires repeatable, auditable procedures | ✓ | |
| Task is a one-off request with no reuse | | ✓ |

### When to use scripts vs. inline instructions

| Approach | Use when |
|----------|----------|
| **Inline instructions** | Simple, single-step tasks; no dependencies; logic is short |
| **Bundled scripts** | Logic is complex; needs testing; reused across multiple test runs; has dependencies |
| **One-off commands** | Existing tool already does what you need; no custom logic required |

### When to use file-read activation vs. dedicated tool activation

| Approach | Pros | Cons |
|----------|------|------|
| **File-read** (model reads SKILL.md directly) | Simplest; no special infrastructure | Requires model file-read capability |
| **Dedicated tool** (activate_skill tool) | Control over content; structured wrapping; permission gating | More infrastructure; requires tool registration |

## Workflow

### Creating a skill

1. **Identify the task** — What repeatable workflow or domain expertise are you packaging? Is it specific enough to warrant a skill?
2. **Create the directory** — Make `my-skill/` and add `SKILL.md` with required frontmatter (`name`, `description`)
3. **Write the description** — Use imperative phrasing ("Use when..."), focus on user intent, list contexts where it applies, keep under 1024 chars
4. **Write instructions** — Markdown body with step-by-step guidance, examples, gotchas, templates, checklists as needed
5. **Add scripts if needed** — Create `scripts/` directory with executable code; reference with relative paths from skill root
6. **Test triggering** — Run 20 test queries (10 should-trigger, 10 should-not) through your agent; compute trigger rate; iterate on description if needed
7. **Test output quality** — Create 2-3 test cases with expected outputs; run with and without skill; grade assertions; iterate on instructions
8. **Validate** — Run `skills-ref validate ./my-skill` to check frontmatter and naming

### Optimizing a skill's description

1. **Create eval queries** — Write 20 realistic prompts: 10 that should trigger, 10 that shouldn't (include near-misses)
2. **Split train/validation** — 60% train (for iteration), 40% validation (for final check)
3. **Run baseline** — Test each query 3 times; compute trigger rate (fraction of runs where skill was invoked)
4. **Identify failures** — Which should-trigger queries didn't trigger? Which should-not-trigger queries false-triggered?
5. **Revise description** — Broaden if should-trigger queries fail; narrow if should-not-trigger queries false-trigger; avoid overfitting to specific keywords
6. **Repeat** — Rerun train set, check validation set; stop after 5 iterations or when improvement plateaus
7. **Select best** — Pick the iteration with highest validation pass rate, not necessarily the last one

### Evaluating skill output quality

1. **Design test cases** — 2-3 realistic prompts with expected outputs and optional input files
2. **Run with and without skill** — Execute each test case twice (with skill, without); capture outputs, timing, tokens
3. **Write assertions** — Add verifiable statements (e.g., "output includes a chart", "report has 3+ recommendations")
4. **Grade outputs** — Evaluate each assertion against actual outputs; record PASS/FAIL with evidence
5. **Aggregate results** — Compute pass rates, token usage, timing; compare with/without skill
6. **Review with human** — Check actual outputs for quality issues assertions missed
7. **Iterate** — Feed failed assertions, human feedback, and execution transcripts to an LLM; ask for skill improvements; rerun in new iteration directory

### Implementing skills support in an agent client

1. **Discover skills** — Scan `.agents/skills/`, `~/.agents/skills/`, and client-specific directories for `SKILL.md` files
2. **Parse frontmatter** — Extract `name`, `description`, optional fields; handle malformed YAML leniently
3. **Build catalog** — Create a list of available skills (name + description) for the model; include ~50-100 tokens per skill
4. **Disclose to model** — Add catalog to system prompt or skill activation tool description
5. **Activate on demand** — When model selects a skill, deliver full `SKILL.md` body (with or without frontmatter) into context
6. **Protect from pruning** — Exempt skill content from context compaction; preserve instructions for session duration
7. **Handle collisions** — Project-level skills override user-level; log warnings when shadowing occurs

## Common gotchas

- **Description too narrow** — Skill doesn't trigger when it should. Use imperative phrasing ("Use when..."), list contexts explicitly, include near-synonyms.
- **Description too broad** — Skill triggers on unrelated tasks. Add specificity about what the skill does *not* do; clarify boundaries with adjacent capabilities.
- **Overfitting to test queries** — Description works for your 20 test cases but fails on new prompts. Use train/validation split; avoid adding specific keywords from failed queries.
- **Scripts with interactive prompts** — Agent hangs indefinitely. Accept all input via flags, env vars, or stdin; never prompt for user input.
- **Unclear error messages in scripts** — Agent wastes turns guessing what went wrong. Say what failed, what was expected, and what to try next.
- **Skill instructions too long** — Agent struggles to extract relevant guidance. Keep `SKILL.md` under 500 lines; move detailed reference material to `references/` with clear triggers ("Read this if...").
- **Bundled scripts with unspecified dependencies** — Agent can't run the script. Use inline dependency declarations (PEP 723 for Python, npm: for Deno) or one-off commands (uvx, npx).
- **Relative paths in scripts** — Agent runs from wrong directory. Use paths relative to skill root; document in `SKILL.md` that agent runs from skill directory.
- **Skill name doesn't match directory name** — Validation fails. Ensure `name` field in frontmatter exactly matches parent directory name.
- **Consecutive hyphens in skill name** — Invalid per spec. Use single hyphens only (e.g., `code-review`, not `code--review`).
- **Missing description field** — Skill won't be discovered. `description` is required; max 1024 chars; must describe both what the skill does and when to use it.
- **Skill content lost during context compaction** — Agent silently stops following skill instructions. Exempt skill content from pruning; use structured tags to identify it.

## Verification checklist

Before submitting a skill:

- [ ] `SKILL.md` exists in skill root directory
- [ ] `name` field: 1-64 chars, lowercase + hyphens, no leading/trailing hyphens, matches directory name
- [ ] `description` field: 1-1024 chars, imperative phrasing, focuses on user intent, lists contexts
- [ ] Markdown body: clear instructions, examples, gotchas, templates as needed
- [ ] Scripts (if any): no interactive prompts, accept input via flags/env/stdin, include `--help`, helpful errors
- [ ] Scripts use inline dependencies (PEP 723, npm:, etc.) or one-off commands (uvx, npx)
- [ ] Relative paths in scripts are relative to skill root
- [ ] `references/` files are focused and referenced with clear triggers
- [ ] `assets/` files are used and documented
- [ ] Ran `skills-ref validate ./my-skill` — no errors
- [ ] Tested description triggering: 20 queries, 3 runs each, trigger rate ≥ 0.5 for should-trigger, ≤ 0.5 for should-not-trigger
- [ ] Tested output quality: 2-3 test cases, graded assertions, human review
- [ ] No consecutive hyphens in name
- [ ] No uppercase letters in name
- [ ] No interactive prompts in scripts
- [ ] All bundled scripts have clear usage documentation

## Resources

**Comprehensive page listing:** https://agentskills.io/llms.txt

**Critical documentation:**
- [Specification](https://agentskills.io/specification) — Complete format reference for SKILL.md, frontmatter fields, directory structure
- [Best practices for skill creators](https://agentskills.io/skill-creation/best-practices) — How to write well-scoped skills, spend context wisely, calibrate control, use patterns like gotchas and templates
- [Optimizing skill descriptions](https://agentskills.io/skill-creation/optimizing-descriptions) — How to test and improve triggering accuracy with eval queries and train/validation splits

---

> For additional documentation and navigation, see: https://agentskills.io/llms.txt