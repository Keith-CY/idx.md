---
name: Agent
description: Use when creating, optimizing, or implementing Agent Skills — a lightweight format for packaging specialized knowledge and workflows into reusable instructions for AI agents. Reach for this skill when authoring SKILL.md files, evaluating skill quality, designing skill descriptions, bundling scripts, or integrating skills into agent products.
metadata:
    mintlify-proj: agent
    version: "1.0"
---

# Agent Skills Playbook

## Product summary

Agent Skills is an open format for extending AI agent capabilities with specialized knowledge and workflows. A skill is a folder containing a `SKILL.md` file (required metadata + instructions) plus optional supporting files: `scripts/` (executable code), `references/` (documentation), and `assets/` (templates, data). Skills use **progressive disclosure** — agents load only the name and description at startup, read full instructions when a task matches, and load supporting files on demand. This keeps agents fast while giving them access to specialized knowledge when needed.

**Key files and conventions:**
- `SKILL.md` — Required. YAML frontmatter (name, description, optional fields) + markdown instructions.
- `scripts/` — Optional. Executable code agents can run (Python, Bash, JavaScript, etc.).
- `references/` — Optional. Detailed documentation loaded on demand.
- `.agents/skills/` — Cross-client convention for skill directories (project-level and user-level).

**Primary docs:** https://agentskills.io

## When to use

Reach for this skill when:
- **Creating a new skill** — You have domain expertise or project knowledge to package into reusable instructions.
- **Optimizing a skill's description** — The skill isn't triggering on the right prompts; you need to test and refine the `description` field.
- **Evaluating skill quality** — You need to test whether a skill produces better outputs than no skill, using test cases, assertions, and grading.
- **Bundling scripts** — You want to include executable code (Python, Bash, etc.) that agents can run as part of the skill.
- **Implementing skills in an agent** — You're building or extending an agent product to discover, load, and activate skills.
- **Improving a skill iteratively** — You have execution transcripts, failed assertions, or human feedback and need to refine the skill.

## Quick reference

### SKILL.md frontmatter (required fields)

| Field | Constraints | Example |
|-------|-------------|---------|
| `name` | 1-64 chars, lowercase + hyphens only, must match parent directory | `name: pdf-processing` |
| `description` | 1-1024 chars, imperative phrasing, describe when to use | `description: Extract PDF text, fill forms, merge files. Use when handling PDFs.` |

### Optional frontmatter fields

| Field | Purpose |
|-------|---------|
| `license` | License name or reference (e.g., `Apache-2.0`) |
| `compatibility` | Environment requirements (e.g., `Requires Python 3.14+`) |
| `metadata` | Key-value pairs for custom properties |
| `allowed-tools` | Space-separated list of pre-approved tools (experimental) |

### Skill directory structure

```
my-skill/
├── SKILL.md              # Required
├── scripts/              # Optional: executable code
│   ├── validate.sh
│   └── process.py
├── references/           # Optional: detailed docs
│   ├── REFERENCE.md
│   └── api-errors.md
└── assets/               # Optional: templates, data
    └── template.json
```

### Script languages and dependency patterns

| Language | One-off command | Self-contained script |
|----------|-----------------|----------------------|
| Python | `uvx ruff@0.8.0 check .` | `uv run scripts/extract.py` (PEP 723 inline deps) |
| Bash | `bash scripts/validate.sh` | Declare deps in comments or use system packages |
| JavaScript | `npx eslint@9 --fix .` | `bun run scripts/extract.ts` (auto-install) |
| Go | `go run golang.org/x/tools/cmd/goimports@v0.28.0 .` | Built-in dependency resolution |

### Description writing checklist

- [ ] Use imperative phrasing: "Use this skill when..." not "This skill does..."
- [ ] Focus on user intent, not implementation details
- [ ] List contexts where the skill applies, including indirect matches
- [ ] Keep under 1024 characters
- [ ] Include specific keywords (domain names, file types, task types)

## Decision guidance

### When to create a skill vs. rely on agent's base knowledge

| Scenario | Create a skill | Rely on agent |
|----------|---|---|
| Task requires project-specific conventions, APIs, or edge cases | ✓ | |
| Task is a standard operation the agent handles well (read file, write JSON) | | ✓ |
| You have domain expertise or internal documentation to package | ✓ | |
| The agent needs to know "never do X" or "always check for Y" | ✓ | |
| Multiple agents need the same workflow | ✓ | |

### When to use scripts vs. inline instructions

| Scenario | Bundle a script | Inline instructions |
|----------|---|---|
| Logic is reusable across multiple test cases | ✓ | |
| Command is a one-off invocation of an existing tool | | ✓ |
| Agent needs to validate output or check preconditions | ✓ | |
| Instruction is a simple template or example | | ✓ |
| Script has complex error handling or dependencies | ✓ | |

### When to optimize description vs. refine instructions

| Signal | Optimize description | Refine instructions |
|--------|---|---|
| Skill doesn't trigger on relevant prompts | ✓ | |
| Skill triggers but produces poor outputs | | ✓ |
| Skill triggers on irrelevant prompts (false positives) | ✓ | |
| Agent follows instructions but misses edge cases | | ✓ |
| Skill is too narrow or too broad in scope | ✓ | |

## Workflow

### Creating a new skill

1. **Identify the domain.** What specialized knowledge or workflow are you packaging? What would the agent get wrong without this skill?

2. **Write the frontmatter.** Choose a `name` (lowercase, hyphens, matches directory). Write a `description` using imperative phrasing: "Use this skill when the user [specific task]."

3. **Draft the instructions.** Write the markdown body with step-by-step guidance. Focus on what the agent wouldn't know on its own: project conventions, non-obvious edge cases, specific tools to use.

4. **Add a gotchas section.** List environment-specific facts that defy reasonable assumptions (soft deletes, field name mismatches, health check quirks).

5. **Bundle scripts if needed.** If the agent needs to run code, create `scripts/` with self-contained scripts. Use inline dependency declarations (PEP 723 for Python, `npm:` for JavaScript, etc.).

6. **Test the description.** Create 20 eval queries (10 should-trigger, 10 should-not). Run them through your agent and measure trigger rate. Iterate on the description until trigger rate is >0.5 for should-trigger queries.

7. **Test the instructions.** Create 2-3 test cases with realistic prompts and expected outputs. Run with and without the skill. Grade outputs against assertions. Iterate on instructions based on failures.

### Optimizing a skill's description

1. **Create eval queries.** Write 20 realistic prompts: 10 that should trigger the skill, 10 that shouldn't. Include near-misses (queries that share keywords but need something different).

2. **Measure trigger rate.** Run each query 3 times through your agent. Record whether the skill was invoked. Compute trigger rate (fraction of runs where skill was invoked).

3. **Split train/validation.** Allocate ~60% of queries to train set, ~40% to validation. Use train set to guide improvements; validation set to check generalization.

4. **Identify failures.** Which should-trigger queries didn't trigger? Which should-not-trigger queries did? Focus on the train set.

5. **Revise the description.** Broaden if should-trigger queries are failing. Add specificity if should-not-trigger queries are false-triggering. Avoid overfitting to specific keywords.

6. **Repeat.** Evaluate on both sets. Revise. Repeat until train set passes or improvement plateaus (usually 3-5 iterations).

7. **Select best iteration.** Pick the description with the highest validation pass rate, not necessarily the last one.

### Evaluating skill quality

1. **Write test cases.** Create 2-3 realistic prompts with expected outputs. Store in `evals/evals.json` with optional input files.

2. **Run with and without skill.** Execute each test case twice: once with the skill, once without (or with a previous version). Save outputs to separate directories.

3. **Capture timing.** Record token count and duration for each run.

4. **Write assertions.** After seeing outputs, add verifiable statements (e.g., "output includes a bar chart", "report has at least 3 recommendations"). Store in `evals/evals.json`.

5. **Grade outputs.** Evaluate each assertion against actual outputs. Record PASS/FAIL with evidence (quotes, file names, counts).

6. **Aggregate results.** Compute pass rate, token usage, and duration for with-skill vs. without-skill. Calculate delta.

7. **Review with human.** Check actual outputs. Record specific feedback (not "looks bad" but "chart is missing axis labels").

8. **Iterate.** Give failed assertions, human feedback, and execution transcripts to an LLM. Ask it to propose improvements. Apply changes. Rerun in a new `iteration-N/` directory. Repeat until satisfied.

## Common gotchas

- **Overfitting the description to specific keywords.** If you optimize against all your test queries, the description works for those phrasings but fails on new ones. Use a train/validation split to catch this.

- **Skill instructions that are too vague.** "Handle errors appropriately" doesn't help. Be specific: "If the API returns a 429 status, retry with exponential backoff (1s, 2s, 4s)."

- **Bundling too much in SKILL.md.** Keep the main file under 500 lines and 5,000 tokens. Move detailed reference material to `references/` and tell the agent when to load it ("Read `references/api-errors.md` if the API returns a non-200 status").

- **Scripts that hang on interactive input.** Agents run in non-interactive shells. Accept all input via flags, environment variables, or stdin. Never prompt for user input.

- **Unclear script interfaces.** Always include `--help` output. Document flags, examples, and error codes. Agents learn your script's interface from `--help`.

- **Skill name doesn't match directory name.** The `name` field must match the parent directory exactly. `name: pdf-processing` requires directory `pdf-processing/`.

- **Description field exceeds 1024 characters.** Hard limit. Trim ruthlessly. Focus on when to use, not exhaustive feature lists.

- **Relative paths in scripts.** Use paths relative to the skill directory root. The agent resolves these automatically. Don't use absolute paths.

- **Forgetting to list available scripts.** Tell the agent which scripts exist in your `SKILL.md` so it knows they're available to run.

- **Assertions that are too brittle.** "Output uses exactly the phrase 'Total Revenue: $X'" fails on correct output with different wording. Use flexible assertions: "Output includes total revenue value."

- **Not capturing execution transcripts.** When a skill fails, the transcript (full log of what the agent did) reveals why. Save these for analysis during iteration.

- **Skill triggers but produces poor outputs.** This is an instruction problem, not a description problem. Refine the skill body, add examples, clarify edge cases. Don't keep tweaking the description.

## Verification checklist

Before submitting a skill:

- [ ] `SKILL.md` exists in the skill directory
- [ ] `name` field matches parent directory name (lowercase, hyphens, no leading/trailing hyphens)
- [ ] `description` field is under 1024 characters and uses imperative phrasing
- [ ] Markdown body includes step-by-step instructions and at least one example
- [ ] All relative paths (to scripts, references) are relative to skill directory root
- [ ] Scripts have `--help` output documenting flags and usage
- [ ] Scripts don't prompt for interactive input
- [ ] Scripts use structured output (JSON, CSV) where possible
- [ ] Gotchas section lists non-obvious environment-specific facts
- [ ] Description triggers on should-trigger test queries (>0.5 trigger rate)
- [ ] Description doesn't trigger on should-not-trigger queries (<0.5 trigger rate)
- [ ] Test cases pass with skill (higher pass rate than without)
- [ ] No hardcoded absolute paths or environment-specific assumptions
- [ ] License field is set if the skill has specific licensing requirements

## Resources

**Comprehensive navigation:** https://agentskills.io/llms.txt — Full page-by-page listing for agent navigation.

**Critical documentation:**
- [Specification](https://agentskills.io/specification) — Complete format reference for SKILL.md, frontmatter fields, directory structure, and validation rules.
- [Best practices for skill creators](https://agentskills.io/skill-creation/best-practices) — How to write well-scoped skills, spend context wisely, calibrate control, and use patterns like gotchas sections and validation loops.
- [Evaluating skill output quality](https://agentskills.io/skill-creation/evaluating-skills) — Test case design, assertion writing, grading, aggregating results, and the iteration loop for improving skills.

---

> For additional documentation and navigation, see: https://agentskills.io/llms.txt