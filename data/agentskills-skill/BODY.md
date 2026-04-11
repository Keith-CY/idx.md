---
name: Agent
description: Use when creating, optimizing, or evaluating Agent Skills — reusable instruction packages that extend AI agent capabilities. Reach for this skill when building SKILL.md files, testing skill triggering, bundling scripts, or integrating skills into agent platforms.
metadata:
    mintlify-proj: agent
    version: "1.0"
---

# Agent Skills

## Product summary

Agent Skills is an open format for packaging specialized instructions, scripts, and resources that agents can discover and use on demand. A skill is a directory containing a `SKILL.md` file with YAML frontmatter (name and description) and markdown instructions, plus optional `scripts/`, `references/`, and `assets/` directories.

**Key files and structure:**
- `SKILL.md` — Required. Contains frontmatter (`name`, `description`, optional `license`, `compatibility`, `metadata`) and markdown instructions.
- `scripts/` — Optional. Executable code (Python, Bash, JavaScript, etc.) that agents can run.
- `references/` — Optional. Supporting documentation loaded on demand.
- `assets/` — Optional. Templates, images, data files.

**Primary docs:** https://agentskills.io

## When to use

Use this skill when:
- **Creating a new skill** — You need to structure instructions, metadata, and supporting files in the Agent Skills format.
- **Optimizing skill descriptions** — The skill's description isn't triggering on the right prompts; you need to test and refine it.
- **Evaluating skill quality** — You're running test cases, grading outputs, and iterating to improve a skill's reliability.
- **Bundling scripts** — You're adding executable code to a skill and need to design it for agent use (no interactive prompts, clear `--help`, structured output).
- **Integrating skills into an agent** — You're adding skills support to an agent platform (discovery, activation, context management).

## Quick reference

### SKILL.md frontmatter

| Field | Required | Constraints |
|-------|----------|-------------|
| `name` | Yes | 1-64 chars, lowercase + hyphens only, no leading/trailing hyphens, must match parent directory |
| `description` | Yes | 1-1024 chars, describes what the skill does and when to use it |
| `license` | No | License name or reference (e.g., "Apache-2.0") |
| `compatibility` | No | Max 500 chars, environment requirements (e.g., "Requires Python 3.14+ and uv") |
| `metadata` | No | Arbitrary key-value pairs for custom properties |
| `allowed-tools` | No | Space-separated list of pre-approved tools (experimental) |

### Minimal SKILL.md template

```markdown
---
name: skill-name
description: What this skill does and when to use it.
---

## When to use this skill
[Describe the task and context where agents should activate this skill]

## How to [primary task]
[Step-by-step instructions]

## Common gotchas
- [Mistake to avoid]
- [Non-obvious edge case]
```

### Directory structure

```
my-skill/
├── SKILL.md                    # Required
├── scripts/                    # Optional: executable code
│   ├── process.py
│   └── validate.sh
├── references/                 # Optional: supporting docs
│   ├── REFERENCE.md
│   └── api-errors.md
└── assets/                     # Optional: templates, images
    └── template.json
```

### Script invocation patterns

| Tool | Command | When to use |
|------|---------|------------|
| `uvx` | `uvx ruff@0.8.0 check .` | Python packages, fast caching, no pre-install needed |
| `npx` | `npx eslint@9 --fix .` | npm packages, bundled with Node.js |
| `pipx` | `pipx run 'black==24.10.0' .` | Python packages, broader OS availability than uvx |
| `deno run` | `deno run --allow-read npm:eslint@9 -- --fix .` | Deno environment, permission flags required |
| `go run` | `go run golang.org/x/tools/cmd/goimports@v0.28.0 .` | Go packages, built into go command |

## Decision guidance

### When to use one-off commands vs. bundled scripts

| Use one-off commands | Use bundled scripts |
|---|---|
| Simple tool invocation with a few flags | Complex logic or multiple steps |
| Tool already exists and is well-known | Custom logic specific to your skill |
| No special dependencies or setup | Needs error handling, validation, or structured output |
| Example: `npx eslint@9 --fix .` | Example: `python scripts/validate.py --input data.json` |

### When to use prescriptive vs. flexible instructions

| Be prescriptive | Give the agent freedom |
|---|---|
| Fragile operations (database migrations, destructive actions) | Multiple valid approaches exist |
| Specific sequence must be followed | Task tolerates variation |
| Consistency is critical | Agent can make context-dependent decisions |
| Example: "Run exactly this command, do not modify" | Example: "Check for SQL injection; use parameterized queries" |

### When to keep instructions in SKILL.md vs. move to references/

| Keep in SKILL.md | Move to references/ |
|---|---|
| Core workflow steps | Detailed technical reference |
| Gotchas and non-obvious edge cases | API documentation |
| Default tool choices | Comprehensive examples |
| Validation procedures | Troubleshooting guides |
| Recommended under 500 lines, <5000 tokens | Load on demand when needed |

## Workflow

### Creating a new skill

1. **Understand the task.** Complete the task manually with an agent, noting steps, corrections, and context you provide. Extract the reusable pattern.

2. **Create the directory structure.** Make `skill-name/` with `SKILL.md` at the root. Match the directory name to the `name` field in frontmatter.

3. **Write frontmatter.** Add `name` (lowercase, hyphens, 1-64 chars) and `description` (1-1024 chars, describe what it does and when to use it).

4. **Write core instructions.** Include:
   - When to use this skill (trigger conditions)
   - Step-by-step procedures
   - Gotchas and non-obvious edge cases
   - Examples of inputs and outputs
   - Keep under 500 lines; move detailed reference material to `references/`

5. **Add scripts if needed.** For reusable logic, create `scripts/` with self-contained scripts. Include `--help` output, clear error messages, and structured output (JSON/CSV preferred).

6. **Test triggering.** Create 20 eval queries (10 should-trigger, 10 should-not-trigger) with varied phrasing, explicitness, and complexity. Run each 3 times and compute trigger rate. Refine description until should-trigger queries pass >50% of the time.

7. **Test output quality.** Create 2-3 test cases with realistic prompts, expected outputs, and input files. Run with and without the skill. Grade outputs against assertions. Iterate based on failures.

8. **Validate the skill.** Run `skills-ref validate ./skill-name` to check frontmatter and naming conventions.

### Optimizing a skill's description

1. **Design eval queries.** Create ~20 test queries: 8-10 should-trigger (varied phrasing, explicitness, detail, complexity), 8-10 should-not-trigger (near-misses that share keywords but need something different).

2. **Split train/validation.** Allocate 60% to train set, 40% to validation set. Keep both sets proportionally balanced (don't put all positives in one set).

3. **Evaluate baseline.** Run each train query 3 times through the agent with the skill installed. Compute trigger rate for each query (fraction of runs where skill was invoked).

4. **Identify failures.** Which should-trigger queries didn't trigger? Which should-not-trigger queries false-triggered?

5. **Revise description.** Focus on generalizing, not overfitting:
   - If should-trigger queries fail, broaden scope or add context about when the skill is useful.
   - If should-not-trigger queries false-trigger, add specificity about what the skill does *not* do.
   - Avoid adding specific keywords from failed queries — address the general category instead.
   - Keep under 1024 characters.

6. **Repeat.** Re-evaluate on train set, revise, repeat 3-5 times until train queries pass or improvement plateaus.

7. **Select best iteration.** Choose the description with the highest validation pass rate (not necessarily the last one).

8. **Verify generalization.** Write 5-10 fresh queries (never seen during optimization) and test them as a sanity check.

### Evaluating and iterating on skill quality

1. **Design test cases.** Create 2-3 realistic prompts with expected outputs and input files. Store in `evals/evals.json`.

2. **Run with and without skill.** Execute each test case twice: once with the skill, once without (or with a previous version). Capture outputs, timing, and token counts.

3. **Write assertions.** After seeing outputs, add verifiable statements (e.g., "output includes a bar chart", "report has at least 3 recommendations"). Keep assertions objective and specific.

4. **Grade outputs.** Evaluate each assertion against actual outputs. Record PASS/FAIL with concrete evidence (quote or reference the output).

5. **Aggregate results.** Compute pass rates, token usage, and timing for both configurations. Calculate delta (what the skill costs vs. what it buys).

6. **Review with a human.** Read actual outputs. Note specific feedback for test cases where results were wrong or unclear.

7. **Iterate.** Give failed assertions, human feedback, and execution transcripts to an LLM. Ask it to propose improvements to the skill. Apply changes, rerun all test cases in a new `iteration-N/` directory, and repeat.

8. **Stop when.** Results are satisfactory, feedback is consistently empty, or improvement plateaus between iterations.

## Common gotchas

- **Description too narrow.** Skill doesn't trigger on valid use cases. Broaden the description; include contexts where the user doesn't explicitly name the domain (e.g., "even if they don't mention 'CSV'").

- **Description too broad.** Skill triggers on irrelevant tasks. Add specificity about what the skill does *not* do, or clarify boundaries with adjacent capabilities.

- **Overfitting to eval queries.** Description works for test queries but fails on new ones. Use train/validation split; optimize only on train set; select based on validation pass rate.

- **Scripts with interactive prompts.** Agents run in non-interactive shells and will hang indefinitely waiting for input. Accept all input via flags, environment variables, or stdin. Always provide `--help` output.

- **Vague error messages in scripts.** "Error: invalid input" wastes a turn. Say what went wrong, what was expected, and what to try: "Error: --format must be one of: json, csv, table. Received: 'xml'".

- **Unstructured script output.** Free-form text is hard for agents to parse. Use JSON, CSV, or TSV. Send data to stdout, diagnostics to stderr.

- **Skill instructions too long.** Bloated SKILL.md competes for context with conversation history and other skills. Keep under 500 lines; move detailed reference material to `references/` and tell the agent when to load it.

- **Gotchas buried in references.** Agents may not recognize when to load a reference file. Keep non-obvious edge cases and environment-specific facts in SKILL.md where the agent reads them before encountering the situation.

- **Name doesn't match directory.** The `name` field must match the parent directory name exactly. `name: pdf-processing` requires directory `pdf-processing/`.

- **Relative paths in scripts.** Use paths relative to the skill directory root (e.g., `scripts/validate.py`). The agent resolves these automatically from the skill's base directory.

- **Skill triggers but produces poor output.** Run structured evals with test cases, assertions, and grading. Iterate based on failed assertions and human feedback, not just gut feel.

## Verification checklist

Before submitting a skill:

- [ ] **Frontmatter valid.** `name` matches directory, is lowercase + hyphens only, 1-64 chars. `description` is 1-1024 chars and describes both what and when.
- [ ] **Directory structure correct.** `SKILL.md` at root. Optional `scripts/`, `references/`, `assets/` subdirectories present if needed.
- [ ] **Scripts are non-interactive.** No prompts, password dialogs, or confirmation menus. All input via flags or stdin. `--help` output is clear and concise.
- [ ] **Script output is structured.** JSON, CSV, or TSV preferred. Data to stdout, diagnostics to stderr.
- [ ] **Relative paths correct.** Scripts and references use paths relative to skill directory root (e.g., `scripts/validate.py`, `references/api.md`).
- [ ] **Instructions are concise.** SKILL.md under 500 lines, <5000 tokens. Detailed reference material in `references/`.
- [ ] **Gotchas are explicit.** Non-obvious edge cases and environment-specific facts are in SKILL.md, not buried in references.
- [ ] **Description triggers correctly.** Tested on 20 eval queries (10 should-trigger, 10 should-not-trigger) with >50% trigger rate on should-trigger queries.
- [ ] **Output quality tested.** Ran 2-3 test cases with assertions, graded results, iterated based on failures.
- [ ] **Validation passes.** Ran `skills-ref validate ./skill-name` with no errors.

## Resources

**Comprehensive page listing:** https://agentskills.io/llms.txt

**Critical documentation:**
- [Specification](https://agentskills.io/specification) — Complete format reference for SKILL.md files, frontmatter fields, directory structure, and validation.
- [Best practices for skill creators](https://agentskills.io/skill-creation/best-practices) — How to write well-scoped skills, spend context wisely, calibrate control, and use effective instruction patterns.
- [Optimizing skill descriptions](https://agentskills.io/skill-creation/optimizing-descriptions) — How to test and improve skill descriptions so they trigger reliably on relevant prompts.

---

> For additional documentation and navigation, see: https://agentskills.io/llms.txt