---
name: Agent
description: Use when creating, authoring, or evaluating Agent Skills — reusable instruction packages that extend AI agent capabilities. Reach for this skill when building new skills, optimizing skill descriptions for reliable triggering, testing skill outputs, or integrating skills into agent clients.
metadata:
    mintlify-proj: agent
    version: "1.0"
---

# Agent Skills

## Product summary

Agent Skills is an open format for packaging specialized instructions, scripts, and resources that agents can discover and use on demand. A skill is a folder containing a `SKILL.md` file (with YAML frontmatter and Markdown instructions), plus optional `scripts/`, `references/`, and `assets/` directories. Skills use **progressive disclosure**: agents load only the name and description at startup, then read full instructions when a task matches the skill's scope, then load supporting files as needed. This keeps context efficient while giving agents access to domain expertise, repeatable workflows, and company-specific knowledge.

Key files and paths:
- **`SKILL.md`** — Required. Contains YAML frontmatter (`name`, `description`, optional `license`, `compatibility`, `metadata`) and Markdown instructions.
- **`scripts/`** — Optional. Executable code (Python, Bash, JavaScript, etc.) that agents can run.
- **`references/`** — Optional. Additional documentation loaded on demand.
- **`assets/`** — Optional. Templates, images, data files.

Skill discovery scans `.agents/skills/` (cross-client convention) and client-specific directories at project and user levels. The [specification](/specification) defines the complete format.

## When to use

Use this skill when:

- **Creating a new skill** — You have domain expertise (a workflow, API pattern, or company process) that should be reusable across multiple agent sessions or products.
- **Optimizing a skill's description** — Your skill exists but doesn't trigger reliably on relevant prompts. You need to test and refine the `description` field.
- **Evaluating skill quality** — You want to measure whether a skill produces better outputs than the agent alone, using structured test cases and assertions.
- **Integrating skills into an agent** — You're building an agent client and need to implement skill discovery, activation, and context management.
- **Debugging skill behavior** — A skill isn't working as expected; you need to understand why the agent isn't activating it or why its instructions aren't being followed.

Specific triggers:
- User says "I want to reuse this workflow across projects" → create a skill.
- Skill activates on wrong prompts or misses relevant ones → optimize the description.
- Need to compare skill output quality to baseline → run evaluations.
- Building an agent that should support skills → implement the integration steps.

## Quick reference

### Frontmatter fields

| Field | Required | Constraints | Purpose |
|-------|----------|-------------|---------|
| `name` | Yes | 1-64 chars, lowercase + hyphens, no leading/trailing hyphens, must match parent directory | Skill identifier |
| `description` | Yes | 1-1024 chars, non-empty | When to use this skill (agent uses this to decide activation) |
| `license` | No | Short string or reference to bundled file | License terms |
| `compatibility` | No | Max 500 chars | Environment requirements (Python 3.14+, requires git, etc.) |
| `metadata` | No | Key-value map | Custom fields (author, version, etc.) |
| `allowed-tools` | No | Space-delimited list | Pre-approved tools (experimental) |

### Minimal SKILL.md

```markdown
---
name: my-skill
description: What this skill does and when to use it.
---

# My Skill

## When to use
[Instructions on when the agent should activate this skill]

## How to [task]
[Step-by-step instructions]
```

### Directory structure

```
my-skill/
├── SKILL.md                    # Required
├── scripts/                    # Optional: executable code
│   ├── validate.sh
│   └── process.py
├── references/                 # Optional: detailed docs
│   ├── REFERENCE.md
│   └── api-errors.md
└── assets/                     # Optional: templates, data
    └── template.json
```

### Common script patterns

**One-off commands** (no bundled scripts needed):
```bash
uvx ruff@0.8.0 check .           # Python (requires uv)
npx eslint@9 --fix .             # JavaScript (requires Node.js)
deno run npm:eslint@9 -- --fix . # Deno
```

**Self-contained scripts** (declare dependencies inline):
```python
# /// script
# dependencies = ["beautifulsoup4>=4.12"]
# ///
from bs4 import BeautifulSoup
# ... script code
```

Run with: `uv run scripts/extract.py`

**Reference scripts from SKILL.md**:
```bash
bash scripts/validate.sh "$INPUT_FILE"
python3 scripts/process.py --input results.json
```

Use relative paths from skill root; agent resolves them automatically.

## Decision guidance

### When to create a skill vs. inline instructions

| Scenario | Use skill | Use inline |
|----------|-----------|-----------|
| Reusable across multiple projects/sessions | ✓ | |
| One-time task for this conversation | | ✓ |
| Needs bundled scripts or templates | ✓ | |
| Simple, stateless instructions | | ✓ |
| Company-specific process or API | ✓ | |
| Generic advice (e.g., "write good code") | | ✓ |

### When to use scripts vs. inline instructions

| Scenario | Use script | Use inline |
|----------|-----------|-----------|
| Complex logic that needs testing | ✓ | |
| Reusable across multiple skill invocations | ✓ | |
| Requires external dependencies | ✓ | |
| Simple command with a few flags | | ✓ |
| Validation or data transformation | ✓ | |
| Procedural guidance (step-by-step) | | ✓ |

### When to move content to references/ vs. keep in SKILL.md

| Scenario | Move to references/ | Keep in SKILL.md |
|----------|-------------------|------------------|
| Detailed reference material (>500 lines) | ✓ | |
| Loaded only in specific cases | ✓ | |
| Core instructions agent needs every run | | ✓ |
| Gotchas and non-obvious edge cases | | ✓ |
| API documentation or schemas | ✓ | |
| Examples and templates | ✓ (if large) | ✓ (if small) |

## Workflow

### Creating a new skill

1. **Identify the expertise.** What domain-specific knowledge, workflow, or process should be reusable? Start from real tasks you've completed with an agent, not generic LLM knowledge.

2. **Create the directory structure.**
   ```bash
   mkdir my-skill
   cd my-skill
   ```

3. **Write SKILL.md.**
   - Start with frontmatter: `name` (lowercase, hyphens, matches directory), `description` (what it does + when to use).
   - Write the body: step-by-step instructions, examples, gotchas, templates.
   - Keep under 500 lines and 5,000 tokens for the main instructions.
   - Focus on what the agent *wouldn't* know without the skill (project conventions, non-obvious edge cases, specific tools to use).

4. **Add scripts if needed.**
   - Move complex, reusable logic into `scripts/`.
   - Use inline dependency declarations (PEP 723 for Python, npm: for Deno, etc.).
   - Document `--help` output clearly.
   - Avoid interactive prompts; accept all input via flags or stdin.

5. **Test the skill.**
   - Run it against 2-3 realistic prompts.
   - Check that the agent activates it and follows the instructions.
   - Read execution traces to spot wasted steps or unclear instructions.

6. **Optimize the description** (if needed).
   - Create 20 test queries (8-10 should trigger, 8-10 shouldn't).
   - Run each query 3 times and compute trigger rate.
   - Refine the description to improve accuracy.
   - Use train/validation splits to avoid overfitting.

7. **Evaluate output quality** (optional but recommended).
   - Write 2-3 test cases with expected outputs.
   - Run each with and without the skill.
   - Grade using assertions (specific, verifiable statements).
   - Iterate based on failures and human review.

### Optimizing a skill's description

1. **Understand the problem.** Is the skill not triggering when it should (too narrow), or triggering when it shouldn't (too broad)?

2. **Create eval queries.** Write 20 realistic prompts: 8-10 that should trigger, 8-10 that shouldn't. Include near-misses (queries that share keywords but need something different).

3. **Test triggering.** Run each query through your agent 3 times. Compute trigger rate (fraction of runs where skill was invoked).

4. **Split train/validation.** Use ~60% of queries to guide improvements, ~40% to validate generalization.

5. **Refine the description.**
   - If should-trigger queries fail: broaden scope, add context about when it applies.
   - If should-not-trigger queries false-trigger: add specificity, clarify boundaries.
   - Avoid adding specific keywords from failed queries (overfitting).
   - Keep under 1024 characters.

6. **Iterate.** Repeat steps 3-5 until train set passes or improvement plateaus (usually 3-5 iterations).

7. **Validate.** Test the final description on fresh queries (not part of optimization).

### Evaluating skill output quality

1. **Design test cases.** Write 2-3 realistic prompts with expected outputs and optional input files. Store in `evals/evals.json`.

2. **Run baseline.** Execute each test case without the skill. Save outputs to `without_skill/outputs/`.

3. **Run with skill.** Execute each test case with the skill. Save outputs to `with_skill/outputs/`.

4. **Write assertions.** For each test case, list verifiable statements about what good output should contain (e.g., "includes a bar chart," "all axes labeled," "no PII in output").

5. **Grade outputs.** Evaluate each assertion against actual outputs. Record PASS/FAIL with specific evidence.

6. **Aggregate results.** Compute pass rates, token usage, and timing for both configurations. Calculate delta (what the skill costs vs. what it buys).

7. **Review with human.** Check actual outputs for quality issues assertions didn't catch.

8. **Iterate.** Give failed assertions, human feedback, and execution traces to an LLM. Ask it to propose improvements to SKILL.md. Rerun all tests in a new `iteration-N/` directory.

9. **Stop when** results plateau, feedback is consistently empty, or you're satisfied with the quality.

## Common gotchas

- **Description too vague.** "Helps with PDFs" won't trigger reliably. Be specific: "Extract text and tables from PDFs, fill forms, merge files. Use when working with PDF documents."

- **Skill too broad.** A skill covering both database queries and database administration tries to do too much. Split into coherent units.

- **Overfitting the description.** Adding specific keywords from failed test queries makes the description work for those exact phrasings but fail on new ones. Generalize instead.

- **Forgetting gotchas.** The highest-value content is often a "Gotchas" section listing environment-specific facts that defy reasonable assumptions (e.g., "The users table uses soft deletes; queries must include WHERE deleted_at IS NULL").

- **Scripts with interactive prompts.** Agents run in non-interactive shells. A script that blocks on TTY input will hang indefinitely. Accept all input via flags, environment variables, or stdin.

- **Scripts with unclear `--help`.** The agent learns your script's interface from `--help` output. Include brief description, available flags, and usage examples.

- **Bundling too much in SKILL.md.** If the main instructions exceed 500 lines, move detailed reference material to `references/` and tell the agent when to load it ("Read references/api-errors.md if the API returns a non-200 status").

- **Not testing before shipping.** Run the skill against real prompts and read execution traces. If the agent wastes time on unproductive steps, the instructions are probably too vague.

- **Ignoring execution traces.** When iterating, read what the agent actually did, not just the final output. Wasted steps reveal unclear instructions; skipped steps reveal missing context.

- **Assuming the agent knows domain details.** Don't explain what a PDF is or how HTTP works. Focus on what the agent *wouldn't* know: your API's quirks, your schema conventions, your team's preferences.

- **Name doesn't match directory.** The `name` field must match the parent directory name exactly (e.g., `name: pdf-processing` in `pdf-processing/SKILL.md`).

- **Consecutive hyphens in name.** `pdf--processing` is invalid. Use single hyphens only.

## Verification checklist

Before submitting a skill:

- [ ] **Frontmatter is valid.** `name` and `description` are present; `name` matches directory, uses only lowercase + hyphens, no leading/trailing hyphens.
- [ ] **Description is specific.** It says what the skill does and when to use it, not just "helps with X."
- [ ] **SKILL.md is under 500 lines.** Detailed reference material is in `references/`.
- [ ] **Instructions are imperative.** They tell the agent *how* to approach a class of problems, not what to produce for a specific instance.
- [ ] **Scripts have clear `--help`.** Include usage, available flags, and examples.
- [ ] **Scripts avoid interactive prompts.** All input comes via flags, environment variables, or stdin.
- [ ] **Relative paths are correct.** Scripts and references use paths relative to skill root (e.g., `scripts/validate.sh`, `references/api.md`).
- [ ] **Gotchas are documented.** Non-obvious environment facts, edge cases, and common mistakes are listed.
- [ ] **Skill is tested.** Run it against 2-3 realistic prompts and verify the agent activates it and follows instructions.
- [ ] **Description triggers reliably.** If uncertain, run 20 test queries (3 runs each) and verify trigger rates.
- [ ] **No hardcoded paths.** Avoid absolute paths; use relative paths or accept paths as input.
- [ ] **License is specified** (if applicable). Include `license` field in frontmatter.

## Resources

**Comprehensive navigation:** See [llms.txt](https://agentskills.io/llms.txt) for a complete page-by-page listing of the Agent Skills documentation.

**Critical pages:**
- [Specification](/specification) — Complete format reference for SKILL.md files, frontmatter fields, directory structure, and validation.
- [Best practices](/skill-creation/best-practices) — How to write skills grounded in real expertise, spend context wisely, calibrate control, and use effective instruction patterns (gotchas, templates, checklists, validation loops).
- [Optimizing skill descriptions](/skill-creation/optimizing-descriptions) — Systematic approach to testing and improving descriptions for reliable triggering, including eval query design, train/validation splits, and the optimization loop.

---

> For additional documentation and navigation, see: https://agentskills.io/llms.txt