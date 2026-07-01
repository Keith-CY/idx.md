---
name: Agent
description: Use when creating, optimizing, or evaluating Agent Skills — reusable instruction packages that extend AI agent capabilities. Reach for this skill when building new skills, improving skill descriptions for better triggering, testing skill quality, or implementing skills support in an agent client.
metadata:
    mintlify-proj: agent
    version: "1.0"
---

# Agent Skills

## Product summary

Agent Skills is an open format for packaging specialized knowledge and workflows into reusable instruction sets that AI agents can load on demand. A skill is a folder containing a `SKILL.md` file (required metadata and instructions) plus optional supporting files: scripts, references, and assets. Skills use **progressive disclosure** — agents load only the name and description at startup, then load full instructions when a task matches the skill's scope, keeping context overhead minimal while providing access to many specialized capabilities.

Key files and conventions:
- **`SKILL.md`** — Required file with YAML frontmatter (name, description, optional license/compatibility/metadata) and markdown instructions
- **`scripts/`** — Optional directory for executable code (Python, Bash, JavaScript, etc.)
- **`references/`** — Optional directory for detailed documentation loaded on demand
- **`assets/`** — Optional directory for templates, images, data files
- **`.agents/skills/`** — Cross-client convention for skill discovery (project-level and user-level)

Primary documentation: https://agentskills.io

## When to use

Reach for this skill when:

- **Creating a new skill** — You have domain expertise or project-specific knowledge to package into reusable instructions
- **Optimizing skill descriptions** — A skill exists but doesn't trigger reliably on relevant tasks; you need to test and improve the description field
- **Evaluating skill quality** — You want to systematically test whether a skill produces good outputs, identify failures, and iterate
- **Implementing skills support** — You're building an agent client and need to integrate skill discovery, activation, and context management
- **Bundling scripts or resources** — You want to include executable code or reference materials alongside skill instructions
- **Troubleshooting skill behavior** — A skill isn't triggering, isn't producing expected outputs, or has scope/precision issues

## Quick reference

### SKILL.md frontmatter fields

| Field | Required | Constraints | Purpose |
|-------|----------|-------------|---------|
| `name` | Yes | 1-64 chars, lowercase + hyphens, no leading/trailing/consecutive hyphens, must match parent directory | Unique identifier |
| `description` | Yes | 1-1024 chars, non-empty | Tells agents when to use the skill; primary trigger mechanism |
| `license` | No | Short string or reference | License terms |
| `compatibility` | No | 1-500 chars | Environment requirements (Python version, system packages, network access, etc.) |
| `metadata` | No | Key-value map | Custom properties for clients |
| `allowed-tools` | No | Space-separated string | Pre-approved tools (experimental) |

### Skill directory structure

```
my-skill/
├── SKILL.md                    # Required
├── scripts/                    # Optional: executable code
│   ├── process.py
│   └── validate.sh
├── references/                 # Optional: detailed docs
│   ├── REFERENCE.md
│   └── api-errors.md
└── assets/                     # Optional: templates, images, data
    └── template.md
```

### Common script languages and invocation

| Language | Command | Notes |
|----------|---------|-------|
| Python | `uv run scripts/script.py` | Supports PEP 723 inline dependencies |
| Bash | `bash scripts/script.sh` | No special setup needed |
| JavaScript | `npx package@version` or `bunx package@version` | Pin versions for reproducibility |
| Go | `go run golang.org/x/tools/cmd/tool@version` | Built into Go toolchain |
| Ruby | `ruby scripts/script.rb` | Supports bundler/inline for gems |

### Description field best practices

- **Use imperative phrasing**: "Use this skill when..." not "This skill does..."
- **Focus on user intent**: Describe what the user is trying to achieve, not implementation details
- **List trigger contexts explicitly**: Include cases where the user doesn't name the domain directly
- **Keep it concise**: A few sentences to a paragraph; hard limit 1024 characters
- **Include keywords**: CSV, PDF, database, API, deployment, code review, etc.

Example:
```yaml
description: >
  Analyze CSV and tabular data files — compute summary statistics,
  add derived columns, generate charts, and clean messy data. Use this
  skill when the user has a CSV, TSV, or Excel file and wants to
  explore, transform, or visualize the data, even if they don't
  explicitly mention "CSV" or "analysis."
```

## Decision guidance

### When to create a new skill vs. improve an existing one

| Situation | Action |
|-----------|--------|
| You have domain expertise or project-specific knowledge not yet captured | Create a new skill |
| A skill exists but doesn't trigger on relevant prompts | Optimize the description field |
| A skill triggers but produces poor outputs | Evaluate and iterate on the instructions |
| Multiple skills overlap in scope | Consider merging or clarifying boundaries |
| A skill is too broad (covers too many unrelated tasks) | Split into focused skills |
| A skill is too narrow (only useful for one specific case) | Broaden the scope or merge with related skills |

### When to use scripts vs. inline instructions

| Approach | When to use |
|----------|------------|
| Inline instructions in `SKILL.md` | Simple, one-off commands; agent can handle with basic tools |
| Reference to existing tool (uvx, npx, etc.) | Tool already exists and is well-maintained; no custom logic needed |
| Bundled script in `scripts/` | Logic is reusable across multiple runs; needs testing; complex enough to warrant isolation |
| One-off command in instructions | Quick reference to a standard tool with a few flags |

### When to use references/ vs. inline content

| Approach | When to use |
|----------|------------|
| Inline in `SKILL.md` | Core instructions the agent needs on every activation; < 500 lines total |
| `references/` files | Detailed reference material, edge cases, API specs; loaded only when needed |
| Gotchas section in `SKILL.md` | Non-obvious environment facts that defy reasonable assumptions; keep in main file |

## Workflow

### Creating a new skill

1. **Identify the domain** — What specialized knowledge or workflow are you capturing? Is it grounded in real expertise (hands-on tasks, project artifacts, runbooks) or generic LLM knowledge?

2. **Create the directory structure**:
   ```bash
   mkdir -p my-skill/scripts my-skill/references
   touch my-skill/SKILL.md
   ```

3. **Write the frontmatter** — Start with `name`, `description`, and optional `license`/`compatibility`. The description is critical: it determines when agents activate the skill.

4. **Write the instructions** — Markdown body after frontmatter. Include:
   - Step-by-step procedures
   - Working examples
   - Gotchas (non-obvious facts that defy assumptions)
   - When to use scripts or reference files
   - Output format templates if needed

5. **Add supporting files** — Move complex logic to `scripts/`, detailed reference material to `references/`, templates to `assets/`.

6. **Validate** — Run `skills-ref validate ./my-skill` to check frontmatter compliance.

7. **Test the description** — Create 20 eval queries (10 should-trigger, 10 should-not-trigger) and run them through your agent to measure trigger rate. Iterate on the description until it triggers reliably.

8. **Evaluate output quality** — Create 2-3 test cases with expected outputs. Run with and without the skill. Grade assertions. Iterate on instructions based on failures.

### Optimizing a skill's description

1. **Create eval queries** — Write 20 realistic prompts: 10 that should trigger the skill, 10 that shouldn't. Include casual language, typos, varied detail levels, and near-misses (queries that share keywords but need something different).

2. **Split into train/validation** — 60% train (queries you use to guide improvements), 40% validation (queries you set aside to check generalization).

3. **Measure trigger rate** — Run each query 3 times through your agent. Compute the fraction of runs where the skill was invoked.

4. **Identify failures** — Which should-trigger queries didn't trigger? Which should-not-trigger queries false-triggered?

5. **Revise the description** — Focus on generalizing:
   - If should-trigger queries fail: broaden scope or add context about when the skill is useful
   - If should-not-trigger queries false-trigger: add specificity about what the skill does *not* do
   - Avoid adding specific keywords from failed queries (overfitting)

6. **Repeat** — Evaluate on both train and validation sets. Stop when train set passes or improvements plateau.

7. **Select the best iteration** — Choose based on validation pass rate, not train results.

8. **Verify with fresh queries** — Write 5-10 new queries (never seen during optimization) and test them as a final sanity check.

### Evaluating and iterating on skill quality

1. **Design test cases** — 2-3 realistic prompts with expected outputs. Include edge cases.

2. **Run with and without the skill** — Execute each test case twice: once with the skill, once without (or with a previous version). Record outputs, timing, and token counts.

3. **Write assertions** — After seeing outputs, define verifiable statements about what success looks like (e.g., "output includes a bar chart," "report has at least 3 recommendations").

4. **Grade outputs** — Evaluate each assertion against actual outputs. Record PASS/FAIL with specific evidence.

5. **Aggregate results** — Compute pass rates, token usage, and timing deltas. Compare with/without skill.

6. **Review with a human** — Read actual outputs. Note specific feedback (not just "looks good" or "looks bad").

7. **Iterate** — Give failed assertions, human feedback, and execution transcripts to an LLM. Ask it to propose improvements to the `SKILL.md`. Apply changes and repeat.

8. **Stop when** — All test cases pass, feedback is consistently empty, or improvements plateau.

## Common gotchas

- **Description too narrow** — Skill doesn't trigger on relevant prompts. Broaden the scope, add context about when it applies, include keywords the user might not explicitly mention.

- **Description too broad** — Skill triggers on unrelated tasks. Add specificity about what the skill does *not* do, clarify boundaries with adjacent capabilities, or split into focused skills.

- **Instructions too vague** — Agent tries multiple approaches before finding one that works, wastes turns. Be prescriptive about fragile operations, provide working examples, include gotchas.

- **Instructions too long** — Agent struggles to extract what's relevant. Keep `SKILL.md` under 500 lines. Move detailed reference material to `references/` and tell the agent *when* to load each file.

- **Overfitting to test cases** — Description works for your eval queries but fails on new ones. Use train/validation splits. Generalize from patterns, not specific keywords.

- **Scripts with interactive prompts** — Agent hangs waiting for input. Accept all input via command-line flags, environment variables, or stdin. Provide `--help` output.

- **Scripts with unclear error messages** — Agent can't self-correct. Say what went wrong, what was expected, and what to try. Use structured output (JSON, CSV) for data.

- **Skill content lost during context compaction** — Agent continues without the skill's instructions, silently degrading performance. Protect skill content from pruning in your agent client.

- **Name doesn't match parent directory** — Validation fails. Ensure `name` field exactly matches the skill folder name.

- **Frontmatter YAML syntax errors** — Unquoted colons in values break parsing. Quote values containing colons or use YAML block scalars.

- **Relative paths in scripts** — Scripts reference files using relative paths but run from wrong directory. Paths in code blocks are relative to the skill directory root; ensure scripts run from there.

- **Bundled scripts with undeclared dependencies** — Agent can't run the script. Use inline dependency declarations (PEP 723 for Python, npm specifiers for JavaScript) or document prerequisites in `compatibility` field.

## Verification checklist

Before submitting a skill:

- [ ] **Frontmatter is valid** — Run `skills-ref validate ./my-skill`. Name matches parent directory. Description is 1-1024 characters.
- [ ] **Description triggers reliably** — Tested on 20 eval queries (10 should-trigger, 10 should-not-trigger). Train set passes. Validation set pass rate is acceptable.
- [ ] **Instructions are clear** — Includes step-by-step procedures, working examples, and gotchas. No vague directives like "handle errors appropriately."
- [ ] **Scripts are self-contained** — Dependencies are declared inline (PEP 723, npm specifiers, etc.) or documented in `compatibility`. Scripts accept input via flags/stdin, not interactive prompts. `--help` output is clear.
- [ ] **Output quality is acceptable** — Tested on 2-3 representative test cases. Pass rate with skill is significantly higher than without. Human review found no major issues.
- [ ] **Context is spent wisely** — `SKILL.md` is under 500 lines. Detailed reference material is in `references/`. Agent knows when to load each file.
- [ ] **Relative paths work** — Scripts and references use paths relative to skill directory root. Tested that agent can find and load them.
- [ ] **No sensitive data** — Skill doesn't include API keys, credentials, or personal information.

## Resources

**Comprehensive page listing**: https://agentskills.io/llms.txt

**Critical documentation**:
- [Specification](https://agentskills.io/specification) — Complete format reference for SKILL.md files, directory structure, and progressive disclosure
- [Best practices for skill creators](https://agentskills.io/skill-creation/best-practices) — How to write well-scoped skills, spend context wisely, and structure instructions effectively
- [Optimizing skill descriptions](https://agentskills.io/skill-creation/optimizing-descriptions) — Systematic approach to testing and improving skill triggering accuracy

---

> For additional documentation and navigation, see: https://agentskills.io/llms.txt