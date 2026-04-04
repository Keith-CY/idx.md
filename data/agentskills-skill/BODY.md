---
name: Agent
description: Use when creating, optimizing, or evaluating Agent Skills — reusable instruction packages that extend AI agent capabilities. Reach for this skill when building SKILL.md files, testing skill triggering, bundling scripts, or implementing skills support in an agent client.
metadata:
    mintlify-proj: agent
    version: "1.0"
---

# Agent Skills

## Product summary

Agent Skills is an open format for packaging specialized instructions, scripts, and resources that agents can discover and use on demand. A skill is a directory containing a `SKILL.md` file (metadata + instructions), optional `scripts/` for executable code, and optional `references/` and `assets/` directories for supporting materials. Skills use progressive disclosure: agents load only the name and description at startup, read full instructions when a task matches, and load supporting files on demand. This keeps context efficient while giving agents access to domain expertise, repeatable workflows, and organizational knowledge. See the [Agent Skills specification](https://agentskills.io/specification) for the complete format reference.

## When to use

Reach for this skill when:

- **Creating a new skill**: You're building a SKILL.md file to package specialized knowledge or a repeatable workflow for agents to use.
- **Optimizing skill descriptions**: Your skill isn't triggering on relevant prompts, or it's triggering too broadly. You need to test and refine the `description` field.
- **Evaluating skill quality**: You want to systematically test whether a skill produces good outputs, compare it against a baseline, and iterate based on results.
- **Bundling scripts**: You're adding executable code to a skill and need to design it for agent use (error handling, help text, structured output).
- **Implementing skills support**: You're building an agent or tool and need to add skills discovery, activation, and context management.
- **Troubleshooting skill behavior**: A skill isn't working as expected, or the agent isn't following its instructions correctly.

## Quick reference

### SKILL.md frontmatter (required fields)

| Field | Constraints | Example |
|-------|-------------|---------|
| `name` | 1-64 chars, lowercase + hyphens only, no leading/trailing hyphens | `name: pdf-processing` |
| `description` | 1-1024 chars, describes what the skill does and when to use it | `description: Extract PDF text, fill forms, merge files. Use when handling PDFs.` |

### Optional frontmatter fields

| Field | Purpose |
|-------|---------|
| `license` | License name or reference (e.g., `Apache-2.0`) |
| `compatibility` | Environment requirements (e.g., `Requires Python 3.14+ and uv`) |
| `metadata` | Custom key-value pairs for additional properties |
| `allowed-tools` | Space-delimited list of pre-approved tools (experimental) |

### Directory structure

```
skill-name/
├── SKILL.md              # Required: metadata + instructions
├── scripts/              # Optional: executable code
├── references/           # Optional: detailed documentation
├── assets/               # Optional: templates, resources
└── evals/                # Optional: test cases for evaluation
    └── evals.json
```

### File references in SKILL.md

Use relative paths from the skill directory root:
```markdown
See [the reference guide](references/REFERENCE.md) for details.
Run the validation script: bash scripts/validate.sh "$INPUT_FILE"
```

### One-off commands (no scripts/ directory needed)

| Tool | Command | When to use |
|------|---------|------------|
| `uvx` | `uvx ruff@0.8.0 check .` | Python packages, fast caching |
| `npx` | `npx eslint@9 --fix .` | npm packages, bundled with Node.js |
| `pipx` | `pipx run 'black==24.10.0' .` | Python packages, OS package manager install |
| `deno run` | `deno run npm:eslint@9 -- --fix .` | Deno scripts with npm packages |
| `go run` | `go run golang.org/x/tools/cmd/goimports@v0.28.0 .` | Go packages, built into go command |

### Script design checklist

- [ ] No interactive prompts (agents run in non-interactive shells)
- [ ] Includes `--help` output with usage examples
- [ ] Clear error messages that guide the agent's next step
- [ ] Structured output (JSON, CSV) to stdout; diagnostics to stderr
- [ ] Idempotent (safe to retry without side effects)
- [ ] Handles edge cases gracefully
- [ ] Meaningful exit codes for different failure types
- [ ] Reasonable output size (support `--offset` or `--output` for large results)

## Decision guidance

### When to use a script vs. one-off command

| Scenario | Use script | Use one-off command |
|----------|-----------|-------------------|
| Simple tool invocation with a few flags | ✗ | ✓ (e.g., `npx eslint@9 .`) |
| Complex logic, multiple steps, or error handling | ✓ | ✗ |
| Reusable across multiple test runs | ✓ | ✗ |
| Bundled dependencies needed | ✓ (PEP 723, Deno, Bun) | ✓ (uvx, npx) |
| Requires validation or intermediate checks | ✓ | ✗ |

### When to keep content in SKILL.md vs. move to references/

| Content | Keep in SKILL.md | Move to references/ |
|---------|-----------------|-------------------|
| Core instructions the agent needs every run | ✓ | ✗ |
| Gotchas and non-obvious edge cases | ✓ | ✗ |
| Step-by-step workflow | ✓ | ✗ |
| Detailed API reference | ✗ | ✓ (load on demand) |
| Exhaustive examples | ✗ | ✓ (load when needed) |
| Large templates | ✗ | ✓ (reference from SKILL.md) |

**Target**: Keep SKILL.md under 500 lines and 5,000 tokens.

### When to use prescriptive vs. flexible instructions

| Situation | Approach |
|-----------|----------|
| Multiple valid approaches, task tolerates variation | Flexible: explain the *why*, let agent decide |
| Fragile operation, specific sequence required | Prescriptive: exact steps, no deviation |
| Destructive or stateful operation | Prescriptive: include `--dry-run` flag, require `--confirm` |
| Domain-specific knowledge agent lacks | Prescriptive: specific tool/library, not alternatives |

## Workflow

### Creating a new skill

1. **Identify the domain**: What specialized knowledge or repeatable workflow does this skill capture? What would the agent get wrong without it?
2. **Write the frontmatter**: Create `SKILL.md` with `name` (lowercase, hyphens, matches directory) and `description` (what it does + when to use it).
3. **Write core instructions**: Add step-by-step guidance, examples, and gotchas. Focus on what the agent wouldn't know on its own.
4. **Add scripts if needed**: For complex logic, bundle tested scripts in `scripts/`. Use PEP 723 (Python), Deno, or Bun for self-contained dependencies.
5. **Test triggering**: Create 20 eval queries (10 should-trigger, 10 should-not-trigger) and run them through your agent 3 times each. Compute trigger rates.
6. **Refine the description**: If trigger rates are low, revise the description to be more explicit about when the skill applies. Use a train/validation split to avoid overfitting.
7. **Evaluate output quality**: Write 2-3 test cases with expected outputs and assertions. Run with-skill and without-skill baselines. Grade results and iterate.

### Optimizing a skill's description

1. **Write eval queries**: Create a JSON file with 20 realistic prompts, half should-trigger and half should-not. Include file paths, casual language, and edge cases.
2. **Split into train/validation**: 60% for training, 40% for validation. Keep the split fixed across iterations.
3. **Run baseline**: Execute each query 3 times with the current description. Compute trigger rate (fraction of runs where skill was invoked).
4. **Identify failures**: Which should-trigger queries didn't trigger? Which should-not-trigger queries did?
5. **Revise the description**: Broaden if should-trigger queries are failing; add specificity if should-not-trigger queries are false-triggering. Avoid adding keywords from failed queries (overfitting).
6. **Repeat**: Re-run train set, check validation set. Stop after 5 iterations or when improvements plateau.
7. **Select best**: Pick the iteration with the highest validation pass rate, not necessarily the last one.

### Evaluating skill output quality

1. **Design test cases**: Write 2-3 realistic prompts with expected outputs and input files. Store in `evals/evals.json`.
2. **Run with-skill baseline**: Execute each test case with the skill installed. Save outputs, timing, and token count.
3. **Run without-skill baseline**: Execute the same prompts without the skill (or with a previous version). Compare.
4. **Write assertions**: After seeing outputs, add verifiable statements (e.g., "output includes a bar chart", "report has at least 3 recommendations").
5. **Grade results**: For each assertion, record PASS/FAIL with specific evidence. Use an LLM or script for mechanical checks.
6. **Aggregate**: Compute pass rates, token usage, and timing deltas. Identify patterns (which assertions always fail, which show the skill's value).
7. **Iterate**: Give failed assertions, human feedback, and execution transcripts to an LLM. Ask it to propose improvements to the skill. Rerun in a new iteration directory.
8. **Stop when**: Results plateau, feedback is consistently empty, or you're satisfied with quality.

### Implementing skills support in an agent

1. **Discover skills**: Scan `.agents/skills/` and `.<client>/skills/` at project and user levels. Look for directories containing `SKILL.md`.
2. **Parse metadata**: Extract `name` and `description` from YAML frontmatter. Store in a map keyed by name.
3. **Build catalog**: Create a structured list (XML, JSON, or markdown) of available skills with name, description, and location.
4. **Disclose to model**: Include the catalog in the system prompt or tool description. Tell the model when to load skills.
5. **Activate on demand**: When the model or user selects a skill, read the full `SKILL.md` body and inject it into context.
6. **Protect from pruning**: If context compaction occurs, exempt skill content from truncation.
7. **Deduplicate**: Track which skills are already loaded; skip re-injection if the model tries to load the same skill twice.

## Common gotchas

- **Description too narrow**: Skill doesn't trigger on relevant prompts. Use imperative phrasing ("Use when..."), include keywords for indirect requests ("even if they don't mention 'CSV'"), and test with varied phrasings.
- **Description too broad**: Skill triggers on unrelated tasks. Add specificity about what the skill does *not* do. Use near-miss negative examples in eval queries.
- **Overfitting to eval queries**: Description works for your test set but fails on new prompts. Use train/validation splits and test on fresh queries before finalizing.
- **Scripts with interactive prompts**: Agent hangs indefinitely. Accept all input via flags, env vars, or stdin. Never block on TTY input.
- **Unclear error messages**: Agent wastes turns guessing what went wrong. Say what failed, what was expected, and what to try next.
- **Unstructured script output**: Agent can't parse results. Use JSON, CSV, or TSV. Send data to stdout, diagnostics to stderr.
- **SKILL.md too large**: Agent struggles to extract relevant instructions. Keep under 500 lines and 5,000 tokens. Move detailed reference material to `references/`.
- **Skill instructions conflict**: Multiple loaded skills give contradictory guidance. Test skill combinations and resolve conflicts in instructions.
- **Relative paths not resolved**: Agent can't find bundled scripts or references. Use paths relative to the skill directory root (e.g., `scripts/validate.sh`). The agent resolves these automatically.
- **Missing `--help` in scripts**: Agent doesn't know how to use the script. Include concise usage, available flags, and examples.
- **Skill name doesn't match directory**: Validation fails. Ensure `name` in frontmatter matches the parent directory name exactly.
- **Frontmatter YAML parsing fails**: Unquoted colons in values break parsing. Quote values containing colons or use YAML block scalars.

## Verification checklist

Before finalizing a skill:

- [ ] `name` field: 1-64 chars, lowercase + hyphens, matches directory name
- [ ] `description` field: 1-1024 chars, describes what the skill does and when to use it
- [ ] SKILL.md is valid YAML frontmatter + markdown body
- [ ] Core instructions are in SKILL.md; detailed references are in `references/`
- [ ] SKILL.md is under 500 lines and 5,000 tokens
- [ ] All relative paths use skill directory root (e.g., `scripts/validate.sh`)
- [ ] Scripts have `--help` output and clear error messages
- [ ] Scripts don't use interactive prompts
- [ ] Scripts output structured data (JSON/CSV) to stdout
- [ ] Eval queries cover varied phrasings, explicitness, and complexity
- [ ] Trigger rate is ≥0.5 for should-trigger queries, <0.5 for should-not-trigger
- [ ] Test cases have assertions that are verifiable and not too brittle
- [ ] With-skill pass rate is meaningfully higher than without-skill baseline
- [ ] Skill has been tested on at least 2-3 realistic prompts
- [ ] No hardcoded paths or environment-specific assumptions
- [ ] License field is set if the skill has specific licensing requirements

## Resources

- **[Agent Skills specification](https://agentskills.io/specification)** — Complete format reference for SKILL.md, frontmatter fields, directory structure, and validation.
- **[Comprehensive page navigation](https://agentskills.io/llms.txt)** — Full list of all documentation pages for agent reference.
- **[Best practices for skill creators](https://agentskills.io/skill-creation/best-practices)** — How to write well-scoped skills, spend context wisely, calibrate control, and use effective patterns (gotchas, templates, checklists, validation loops).
- **[Evaluating skill output quality](https://agentskills.io/skill-creation/evaluating-skills)** — Structured approach to testing skills with evals, assertions, grading, and iteration.
- **[Optimizing skill descriptions](https://agentskills.io/skill-creation/optimizing-descriptions)** — How to test and improve skill triggering with eval queries, train/validation splits, and the optimization loop.

---

> For additional documentation and navigation, see: https://agentskills.io/llms.txt