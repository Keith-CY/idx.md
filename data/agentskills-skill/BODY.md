---
name: Agent
description: Use when creating, testing, optimizing, or implementing Agent Skills — the open format for packaging specialized knowledge and workflows into reusable skill directories that agents load on demand. Reach for this skill when building skills for agents, evaluating skill quality, optimizing skill descriptions for triggering, or integrating skills support into an agent product.
metadata:
    mintlify-proj: agent
    version: "1.0"
---

# Agent Skills

## Product summary

Agent Skills is an open format for packaging specialized knowledge, workflows, and code into portable, version-controlled skill directories that AI agents load on demand. A skill is a folder containing a required `SKILL.md` file (metadata + instructions in YAML frontmatter + markdown body), plus optional supporting files in `scripts/`, `references/`, and `assets/` directories.

Agents load skills through **progressive disclosure**: at startup they load only the name and description of each skill (~50-100 tokens per skill); when a task matches a skill's description, they load the full `SKILL.md` body into context; if the instructions reference supporting files, those load individually as needed.

**Key files and paths:**
- `SKILL.md` — Required. Contains YAML frontmatter (`name`, `description`, optional `license`, `compatibility`, `metadata`, `allowed-tools`) followed by markdown instructions.
- `scripts/` — Optional. Executable code (Python, Bash, JavaScript, etc.) that agents can run.
- `references/` — Optional. Additional documentation files agents load on demand.
- `assets/` — Optional. Templates, images, data files.
- Discovery paths: `.agents/skills/` (cross-client standard), `.<client>/skills/` (client-specific).

**Primary docs:** https://agentskills.io

## When to use

Reach for this skill when:

- **Creating a new skill** — You need to package domain-specific knowledge, a workflow, or a set of tools into a reusable skill directory that agents can discover and activate.
- **Evaluating skill quality** — You've written a skill and need to test whether it produces good outputs, triggers on the right prompts, and improves agent performance relative to a baseline.
- **Optimizing skill descriptions** — Your skill isn't triggering when it should, or it's triggering on irrelevant tasks. You need to test and refine the `description` field.
- **Implementing skills support in an agent** — You're building an agent product and need to add skill discovery, activation, and context management.
- **Bundling scripts or reference materials** — You need to decide whether to include supporting files, how to structure them, and how to design script interfaces for agentic use.
- **Troubleshooting skill behavior** — A skill isn't working as expected, or the agent is ignoring instructions. You need to diagnose and fix the issue.

## Quick reference

### SKILL.md frontmatter fields

| Field | Required | Constraints | Purpose |
|-------|----------|-------------|---------|
| `name` | Yes | 1-64 chars, lowercase + numbers + hyphens, no leading/trailing/consecutive hyphens, must match parent directory | Unique skill identifier |
| `description` | Yes | 1-1024 chars, non-empty | Tells agents when to use the skill. Carries the entire burden of triggering. |
| `license` | No | Short string or reference to bundled file | License applied to the skill |
| `compatibility` | No | 1-500 chars if provided | Environment requirements (intended product, system packages, network access) |
| `metadata` | No | Map of string keys to string values | Custom metadata for clients |
| `allowed-tools` | No | Space-separated tool names | Pre-approved tools the skill may use (experimental) |

### Directory structure

```
skill-name/
├── SKILL.md                    # Required
├── scripts/                    # Optional: executable code
│   ├── script.py
│   └── script.sh
├── references/                 # Optional: documentation
│   ├── REFERENCE.md
│   └── api-errors.md
└── assets/                     # Optional: templates, images, data
    ├── template.md
    └── lookup-table.json
```

### Common script patterns

| Use case | Command | Notes |
|----------|---------|-------|
| Python with inline deps | `uv run scripts/extract.py` | Requires uv; uses PEP 723 syntax |
| Python with pipx | `pipx run 'package==version'` | Requires pipx install |
| Node.js packages | `npx eslint@9 --fix .` | Bundled with Node.js; pin versions |
| Deno scripts | `deno run scripts/extract.ts` | Self-contained; use `npm:` for npm packages |
| Bash scripts | `bash scripts/validate.sh` | No dependencies; keep self-contained |

### Skill activation paths (discovery)

| Scope | Path | Priority |
|-------|------|----------|
| Project-level | `.agents/skills/` | Highest (overrides user-level) |
| Project-level | `.<client>/skills/` | Client-specific |
| User-level | `~/.agents/skills/` | Cross-client standard |
| User-level | `~/.<client>/skills/` | Client-specific |

## Decision guidance

### When to include a script vs. inline command

| Scenario | Use script | Use inline command |
|----------|-----------|-------------------|
| Simple one-off tool invocation | No | Yes — `npx eslint@9 --fix .` |
| Complex logic, multiple steps | Yes | No |
| Reusable across test cases | Yes | No |
| Needs error handling, validation | Yes | No |
| Tested, stable code | Yes | No |
| Quick reference, no dependencies | No | Yes |

### When to move content to references/ vs. keep in SKILL.md

| Content | Keep in SKILL.md | Move to references/ |
|---------|-----------------|-------------------|
| Core workflow steps | Yes | No |
| Gotchas and edge cases | Yes | No |
| Detailed API reference | No | Yes — reference on demand |
| Output format template | Yes (short) | Yes (long) — reference when needed |
| Troubleshooting guide | No | Yes — reference when agent hits error |
| Step-by-step instructions | Yes | No |

### When to use prescriptive vs. flexible instructions

| Situation | Approach | Example |
|-----------|----------|---------|
| Multiple valid approaches, task tolerates variation | Flexible + explain why | "Check for SQL injection using parameterized queries (prevents attacker-controlled input)" |
| Fragile operation, specific sequence required | Prescriptive | "Run exactly: `python scripts/migrate.py --verify --backup`. Do not modify." |
| Tool choice matters but alternatives exist | Default + escape hatch | "Use pdfplumber for text extraction. For scanned PDFs, use pdf2image + pytesseract." |

## Workflow

### Creating a skill

1. **Identify the domain** — What specialized knowledge or workflow does this skill capture? Is it narrow enough to be coherent (one skill = one unit of work) but broad enough to be reusable?

2. **Gather source material** — Don't ask an LLM to generate a skill from scratch. Collect real expertise: internal runbooks, API specs, code review comments, version control history, failure cases and resolutions. Feed this into the skill creation process.

3. **Create the directory and SKILL.md** — Create `skill-name/SKILL.md` with:
   - `name` field (lowercase, hyphens, matches directory name)
   - `description` field (1-1024 chars, describe what the skill does AND when to use it)
   - Markdown body with step-by-step instructions

4. **Write for the agent's context** — Focus on what the agent *wouldn't* know without your skill: project-specific conventions, non-obvious edge cases, which tools to use. Omit general knowledge (what a PDF is, how HTTP works).

5. **Add gotchas section** — Include environment-specific facts that defy reasonable assumptions. These are the highest-value content in many skills.

6. **Bundle scripts if needed** — If the agent will run the same logic repeatedly across test cases, write a tested script and place it in `scripts/`. Reference it from `SKILL.md` with relative paths.

7. **Test triggering** — Create 20 eval queries (8-10 should-trigger, 8-10 should-not-trigger) with varied phrasing, explicitness, and complexity. Run each query 3 times and compute trigger rates. If the skill doesn't trigger when it should, revise the `description` field.

8. **Test output quality** — Run 2-3 test cases with the skill and without it (baseline). Grade outputs against assertions. Compare pass rates and token usage. Iterate based on failures.

### Optimizing a skill description

1. **Design eval queries** — Create 20 realistic user prompts labeled with whether they should trigger the skill. Include near-misses (queries that share keywords but need something different).

2. **Split train/validation** — Divide queries into ~60% train, ~40% validation. Use train set to guide improvements; use validation set to check generalization.

3. **Evaluate current description** — Run each query 3 times, compute trigger rates. A query passes if trigger rate > 0.5 for should-trigger, < 0.5 for should-not-trigger.

4. **Identify failures** — Which should-trigger queries didn't trigger? Which should-not-trigger queries false-triggered?

5. **Revise description** — If should-trigger queries fail, broaden scope or add context. If should-not-trigger queries false-trigger, add specificity or clarify boundaries. Avoid overfitting to specific keywords.

6. **Repeat** — Evaluate on train set, revise, repeat until all train queries pass or improvement plateaus (usually 5 iterations).

7. **Select best iteration** — Choose the description with the highest validation pass rate, not necessarily the last one produced.

8. **Verify** — Update `SKILL.md`, test with 5-10 fresh queries as a sanity check.

### Evaluating skill output quality

1. **Write test cases** — Create 2-3 realistic prompts with expected outputs and input files. Store in `evals/evals.json`.

2. **Run with-skill baseline** — Execute each test case with the skill, save outputs to `iteration-1/eval-<name>/with_skill/outputs/`.

3. **Run without-skill baseline** — Execute the same prompts without the skill, save to `iteration-1/eval-<name>/without_skill/outputs/`.

4. **Write assertions** — After seeing outputs, define verifiable statements (e.g., "output includes a bar chart", "chart has labeled axes"). Add to `evals/evals.json`.

5. **Grade outputs** — Evaluate each assertion against actual outputs. Record PASS/FAIL with evidence. Compute pass rates.

6. **Review with human** — Read actual outputs. Note specific feedback (not just "looks good").

7. **Iterate** — Give failed assertions, human feedback, and execution transcripts to an LLM. Ask it to propose skill improvements. Rerun all tests in `iteration-2/`. Repeat until satisfied.

## Common gotchas

- **Description doesn't convey when to use the skill** — The description carries the entire burden of triggering. If it doesn't say when the skill is useful, the agent won't know to reach for it. Use imperative phrasing ("Use when..."), list specific contexts, include keywords the user might not explicitly mention.

- **Overfitting description to specific queries** — When optimizing descriptions, avoid adding exact keywords from failed queries. Instead, generalize to the concept those queries represent. Use train/validation splits to catch overfitting.

- **Skill instructions are too vague** — "Handle errors appropriately" doesn't help. Be specific: "If the API returns a 429 status, wait 60 seconds and retry up to 3 times." Vague instructions cause agents to waste turns trying multiple approaches.

- **Skill instructions are too comprehensive** — Exhaustive documentation hurts more than it helps. Agents struggle to extract what's relevant and may pursue unproductive paths. Concise, stepwise guidance with working examples outperforms exhaustive rules.

- **Scripts with interactive prompts** — Agents operate in non-interactive shells. Scripts that block on TTY prompts, password dialogs, or confirmation menus will hang indefinitely. Accept all input via command-line flags, environment variables, or stdin.

- **Scripts with poor error messages** — When a script fails, the error message directly shapes the agent's next attempt. "Error: invalid input" wastes a turn. Instead: "Error: --format must be one of: json, csv, table. Received: 'xml'."

- **Skill content lost during context compaction** — If the agent truncates old messages when the context window fills, skill instructions may be pruned, silently degrading performance. Flag skill content as protected from pruning.

- **Relative paths in scripts don't resolve correctly** — Scripts should run from the skill directory root. Reference bundled files with relative paths: `scripts/extract.py`, `references/api-errors.md`. The agent resolves these automatically.

- **Skill triggers on simple tasks it shouldn't handle** — Agents only consult skills for tasks requiring specialized knowledge beyond what they can handle alone. A skill that triggers on "read this PDF" even though the agent can do it natively is wasting context. Write descriptions that emphasize when specialized knowledge is needed.

- **Name field doesn't match directory name** — The `name` field must exactly match the parent directory name. `name: pdf-processing` requires the directory to be `pdf-processing/`, not `PDF-Processing/` or `pdf_processing/`.

- **Consecutive hyphens or leading/trailing hyphens in name** — Invalid: `pdf--processing`, `-pdf-processing`, `pdf-processing-`. Valid: `pdf-processing`, `data-analysis`, `code-review`.

- **Description exceeds 1024 characters** — Descriptions tend to grow during optimization. Check the character count before finalizing.

- **Bundled scripts don't declare dependencies** — If a script needs external packages, declare them inline (PEP 723 for Python, `npm:` for Deno, etc.) or document prerequisites in `SKILL.md` and the `compatibility` field.

## Verification checklist

Before finalizing a skill:

- [ ] `SKILL.md` exists in the skill directory root
- [ ] `name` field is 1-64 chars, lowercase + numbers + hyphens only, matches parent directory name
- [ ] `description` field is 1-1024 chars, non-empty, describes both what the skill does and when to use it
- [ ] Description uses imperative phrasing ("Use when...") and lists specific contexts
- [ ] Skill instructions focus on what the agent wouldn't know without the skill
- [ ] Gotchas section includes environment-specific facts that defy reasonable assumptions
- [ ] Scripts are self-contained or clearly document dependencies
- [ ] Scripts avoid interactive prompts and include helpful error messages
- [ ] Relative paths in scripts are correct (relative to skill directory root)
- [ ] Bundled scripts have `--help` output documenting usage
- [ ] `SKILL.md` body is under 500 lines; detailed reference material is in `references/`
- [ ] Skill has been tested on 2-3 realistic test cases
- [ ] Skill triggers on should-trigger queries and doesn't trigger on should-not-trigger queries
- [ ] Output quality is better with the skill than without it (higher pass rate, acceptable token cost)
- [ ] No consecutive hyphens or leading/trailing hyphens in `name`
- [ ] License field (if provided) is short and clear
- [ ] Compatibility field (if provided) documents environment requirements

## Resources

**Comprehensive page-by-page navigation:** https://agentskills.io/llms.txt

**Critical documentation:**
- [Specification](https://agentskills.io/specification) — Complete format reference for `SKILL.md` files, directory structure, and validation
- [Best practices for skill creators](https://agentskills.io/skill-creation/best-practices) — How to write well-scoped, effective skills grounded in real expertise
- [Evaluating skill output quality](https://agentskills.io/skill-creation/evaluating-skills) — How to test skills systematically using evals, assertions, and iteration

---

> For additional documentation and navigation, see: https://agentskills.io/llms.txt