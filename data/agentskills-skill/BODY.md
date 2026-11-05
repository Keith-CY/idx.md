---
name: agent
description: Use when creating, optimizing, or implementing Agent Skills — a
  lightweight format for extending AI agent capabilities. Reach for this skill
  when building skills for agents, testing skill descriptions, evaluating skill
  quality, integrating skills into agent clients, or troubleshooting skill
  activation and execution.
metadata:
  mintlify-proj: agent
  version: "1.0"
---

# Agent Skills Playbook

## Product summary

Agent Skills is an open format for packaging specialized knowledge and workflows into reusable instructions that AI agents load on demand. A skill is a folder containing a `SKILL.md` file (metadata + instructions) plus optional supporting files (scripts, references, assets). Agents use **progressive disclosure** to load only the skill name and description at startup, then load full instructions when a task matches the description, keeping context overhead minimal.

Key files and paths:
- **`SKILL.md`** — Required file containing YAML frontmatter (name, description, optional fields) and markdown instructions
- **`.agents/skills/`** — Cross-client convention for project-level skills (scanned by compatible agents)
- **`scripts/`** — Optional directory for executable code (Python, Bash, JavaScript, etc.)
- **`references/`** — Optional directory for detailed documentation loaded on demand
- **`assets/`** — Optional directory for templates, images, data files

Primary docs: https://agentskills.io

## When to use

Reach for this skill when:

- **Creating a new skill** — You have a workflow, domain expertise, or set of procedures you want to package for agents to reuse
- **Optimizing skill descriptions** — A skill isn't triggering on the right prompts; you need to test and refine the description field
- **Evaluating skill quality** — You need to systematically test whether a skill produces good outputs across varied prompts
- **Implementing skills in an agent client** — You're building an agent and need to add skills support (discovery, activation, context management)
- **Troubleshooting skill activation** — A skill isn't being invoked when it should be, or is triggering incorrectly
- **Bundling scripts or resources** — You want to include executable code or reference materials in a skill

## Quick reference

### SKILL.md frontmatter fields

| Field | Required | Constraints | Purpose |
|-------|----------|-------------|---------|
| `name` | Yes | 1-64 chars, lowercase + hyphens, no leading/trailing/consecutive hyphens, must match parent directory | Skill identifier |
| `description` | Yes | 1-1024 chars, non-empty | Tells agents when to use the skill; carries entire burden of triggering |
| `license` | No | Short string or reference to LICENSE file | License terms |
| `compatibility` | No | 1-500 chars | Environment requirements (e.g., "Requires Python 3.10+", "Designed for Claude Code") |
| `metadata` | No | Key-value map (strings only) | Custom properties for clients |
| `allowed-tools` | No | Space-separated tool names | Pre-approved tools (experimental) |

### Skill directory structure

```
skill-name/
├── SKILL.md              # Required
├── scripts/              # Optional: executable code
├── references/           # Optional: detailed docs
├── assets/               # Optional: templates, images
└── evals/                # Optional: test cases
    └── evals.json
```

### Common script languages

| Language | Command | Auto-install | Notes |
|----------|---------|---------------|-------|
| Python | `uv run scripts/file.py` | Yes (uv) | PEP 723 inline dependencies |
| Bash | `bash scripts/file.sh` | No | Use `#!/bin/bash` shebang |
| JavaScript | `npx package@version` or `bunx package@version` | Yes | Pin versions for reproducibility |
| TypeScript | `deno run scripts/file.ts` or `bun run scripts/file.ts` | Yes | Deno or Bun required |

### Validation

```bash
skills-ref validate ./my-skill
```

Checks frontmatter validity and naming conventions.

## Decision guidance

### When to write a skill vs. rely on agent capabilities

| Scenario | Use a skill | Rely on agent |
|----------|------------|---------------|
| Task requires specialized domain knowledge (APIs, workflows, edge cases) | ✓ | |
| Task is simple and agent can handle it alone (read a file, answer a question) | | ✓ |
| Task involves project-specific conventions or constraints | ✓ | |
| Task needs reproducible, auditable procedures | ✓ | |
| Task is one-off and unlikely to repeat | | ✓ |

### When to use scripts vs. inline commands

| Scenario | Use scripts | Use inline commands |
|----------|------------|-------------------|
| Logic is reusable across multiple skill invocations | ✓ | |
| Command is simple (one-liner with a tool like `npx eslint@9`) | | ✓ |
| Script has complex error handling or multiple steps | ✓ | |
| Script needs its own dependencies declared | ✓ | |
| You're invoking an existing tool with a few flags | | ✓ |

### When to move content to reference files

| Scenario | Keep in SKILL.md | Move to references/ |
|----------|-----------------|-------------------|
| Core instructions agent needs every run | ✓ | |
| Detailed API reference or schema | | ✓ |
| Gotchas and edge cases (non-obvious) | ✓ | |
| Comprehensive documentation | | ✓ |
| Skill body exceeds 500 lines or 5000 tokens | | ✓ |

## Workflow

### Creating a skill

1. **Identify the domain** — What specialized knowledge or workflow are you capturing? Start from real expertise: a completed task, project runbooks, API specs, or code review patterns.

2. **Create the directory structure** — Make `skill-name/` with `SKILL.md` inside. Use lowercase, hyphens only, no leading/trailing hyphens.

3. **Write frontmatter** — Add YAML with `name` (matching directory), `description` (1-1024 chars, imperative phrasing: "Use this skill when..."), and optional fields.

4. **Write instructions** — Markdown body after frontmatter. Focus on what the agent *wouldn't* know without the skill. Include:
   - Step-by-step procedures
   - Gotchas (non-obvious facts that defy assumptions)
   - Working examples
   - Templates for output format if needed
   - Checklists for multi-step workflows

5. **Bundle supporting files** — Add scripts to `scripts/`, detailed references to `references/`, templates to `assets/`.

6. **Validate** — Run `skills-ref validate ./skill-name` to check frontmatter and naming.

7. **Test the description** — Write 20 eval queries (10 should-trigger, 10 should-not-trigger) and run them 3 times each. Compute trigger rate. Refine description if needed.

8. **Evaluate output quality** — Create `evals/evals.json` with 2-3 test cases. Run with and without skill. Grade assertions. Iterate based on failures and human review.

### Optimizing a skill description

1. **Write eval queries** — Create a JSON file with realistic prompts labeled `should_trigger: true/false`. Vary phrasing, explicitness, detail, and complexity.

2. **Split into train/validation** — 60% train (for optimization), 40% validation (for generalization testing).

3. **Run baseline** — Test current description against train set. Compute trigger rate (fraction of runs where skill was invoked).

4. **Identify failures** — Which should-trigger queries didn't trigger? Which should-not-trigger queries false-triggered?

5. **Revise description** — Broaden if should-trigger queries are failing. Add specificity if should-not-trigger queries are false-triggering. Avoid overfitting to specific keywords.

6. **Repeat** — Re-evaluate on train set. Stop when all train queries pass or improvement plateaus (usually 3-5 iterations).

7. **Validate generalization** — Test best iteration on validation set. If validation pass rate is lower than train, you overfit — try an earlier iteration.

8. **Apply and verify** — Update `SKILL.md`, verify under 1024 chars, test manually with 5-10 fresh queries.

### Evaluating skill quality

1. **Design test cases** — Write 2-3 realistic prompts with expected outputs. Include edge cases. Store in `evals/evals.json`.

2. **Run with skill** — Execute each test case with the skill available. Save outputs to `iteration-1/eval-<name>/with_skill/outputs/`.

3. **Run without skill** — Execute same prompts without the skill (or with previous version). Save to `iteration-1/eval-<name>/without_skill/outputs/`.

4. **Capture timing** — Record `total_tokens` and `duration_ms` for each run.

5. **Write assertions** — After seeing outputs, add verifiable statements (e.g., "Output includes a chart", "All required fields are present").

6. **Grade outputs** — Evaluate each assertion against actual outputs. Record PASS/FAIL with evidence.

7. **Aggregate results** — Compute pass rates, token usage, timing for both configurations. Calculate delta (what the skill costs vs. what it buys).

8. **Review with human** — Check actual outputs. Record specific feedback for failed test cases.

9. **Iterate** — Give eval signals (failed assertions, feedback, execution transcripts) + current `SKILL.md` to an LLM. Ask for improvements. Rerun in `iteration-2/`.

10. **Stop when** — All assertions pass, feedback is empty, or improvement plateaus.

## Common gotchas

- **Description is too vague** — "Helps with data" won't trigger. Be specific: "Analyze CSV and tabular data files — compute summary statistics, add derived columns, generate charts, and clean messy data."

- **Description is too broad** — "Use when working with files" will false-trigger on unrelated tasks. Add specificity about what the skill does *not* do.

- **Overfitting to test queries** — Optimizing description against all queries risks failing on new phrasings. Use train/validation split to catch this.

- **Skill instructions are too verbose** — Agents struggle to extract what's relevant from exhaustive documentation. Keep `SKILL.md` under 500 lines. Move detailed reference material to separate files.

- **Gotchas section missing** — The highest-value content in many skills is a list of non-obvious facts (soft deletes, ID field naming conventions, API quirks). Add these explicitly.

- **Scripts with interactive prompts** — Agents run in non-interactive shells. Scripts that block on TTY input will hang. Accept all input via flags, env vars, or stdin.

- **Scripts with poor error messages** — When a script fails, the error message shapes the agent's next attempt. Say what went wrong, what was expected, and what to try.

- **Relative paths in scripts** — Use paths relative to the skill directory root. The agent runs commands from there.

- **Bundled resources not listed** — If a skill references `scripts/validate.py` or `references/schema.md`, list them in `SKILL.md` so the agent knows they exist.

- **Skill body loads every time** — Once activated, full `SKILL.md` stays in context for the session. Protect it from context compaction or it silently degrades performance.

- **Name doesn't match directory** — The `name` field must match the parent directory name exactly. `skill-name/SKILL.md` with `name: skill-name`.

- **Consecutive hyphens in name** — `my--skill` is invalid. Use single hyphens only.

- **Description exceeds 1024 characters** — Hard limit. Trim or move content to references.

## Verification checklist

Before submitting a skill:

- [ ] `SKILL.md` exists in skill directory
- [ ] `name` field matches parent directory name (lowercase, hyphens only, no leading/trailing/consecutive hyphens)
- [ ] `description` is 1-1024 chars, uses imperative phrasing ("Use this skill when..."), and includes specific keywords
- [ ] `description` is under 1024 characters
- [ ] Frontmatter YAML is valid (use `skills-ref validate`)
- [ ] Instructions focus on what agent wouldn't know without the skill (omit generic advice)
- [ ] Gotchas section included for non-obvious facts
- [ ] Scripts are non-interactive (no TTY prompts)
- [ ] Scripts include `--help` output
- [ ] Scripts write structured output (JSON, CSV) to stdout, diagnostics to stderr
- [ ] Relative paths in scripts are relative to skill directory root
- [ ] Bundled resources (scripts, references) are listed in `SKILL.md`
- [ ] `SKILL.md` body is under 500 lines; detailed content moved to `references/`
- [ ] Description tested on 20 eval queries (3 runs each) with trigger rate > 0.5 for should-trigger, < 0.5 for should-not-trigger
- [ ] Skill evaluated on 2-3 test cases with assertions graded
- [ ] Pass rate with skill is meaningfully higher than without skill
- [ ] Human review completed; feedback addressed

## Resources

**Comprehensive page listing:** https://agentskills.io/llms.txt

**Critical documentation:**
- [Specification](https://agentskills.io/specification) — Complete format reference for SKILL.md, frontmatter fields, directory structure
- [Best practices for skill creators](https://agentskills.io/skill-creation/best-practices) — How to write well-scoped skills, spend context wisely, calibrate control, use gotchas and templates
- [Optimizing skill descriptions](https://agentskills.io/skill-creation/optimizing-descriptions) — Test and improve descriptions for reliable triggering using eval queries and train/validation splits

---

> For additional documentation and navigation, see: https://agentskills.io/llms.txt