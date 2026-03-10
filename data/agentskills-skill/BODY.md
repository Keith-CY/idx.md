---
name: Agent
description: Use when creating, evaluating, or integrating skills for AI agents. Reach for this skill when you need to author SKILL.md files, test skill descriptions for proper triggering, evaluate skill output quality, add skills support to an agent client, or optimize skill performance.
metadata:
    mintlify-proj: agent
    version: "1.0"
---

# Product summary

Agent Skills is a portable format for packaging procedural knowledge and task-specific instructions that AI agents can load on demand. A skill is a directory containing a SKILL.md file (required metadata and instructions in YAML frontmatter + Markdown) plus optional supporting files: scripts/ (executable code), references/ (documentation), and assets/ (templates and data). Skills use progressive disclosure — agents load only name and description at startup, then read full instructions when a task matches. This keeps context efficient while giving agents access to specialized knowledge. Primary docs: https://agentskills.io. Key files: SKILL.md (frontmatter + body), scripts/ (bundled code), evals/evals.json (test cases).

# When to use

Reach for this skill when:
- **Creating a skill**: You're writing a SKILL.md file with frontmatter, instructions, and optional scripts for an agent to use.
- **Optimizing skill descriptions**: A skill isn't triggering reliably, and you need to test and refine the description field to match user intent.
- **Evaluating skill quality**: You've written a skill and need to run structured tests (evals) to verify it works reliably across varied prompts and edge cases.
- **Adding skills to an agent**: You're integrating skills support into an AI agent or tool — discovering skills, building a catalog, activating them, and managing context.
- **Bundling scripts and references**: You need to include executable code or supporting documentation that agents can run or read on demand.
- **Testing skill triggering**: You want to verify that a skill's description causes agents to activate it when appropriate and avoid false positives.

# Quick reference

## SKILL.md frontmatter (required fields)

| Field | Constraints | Example |
|-------|-------------|---------|
| `name` | Max 64 chars, lowercase + hyphens only | `csv-analyzer` |
| `description` | Max 1024 chars, non-empty | `Use when analyzing CSV/TSV/Excel files, generating charts, cleaning data.` |

## Optional frontmatter fields

| Field | Max length | Purpose |
|-------|-----------|---------|
| `license` | — | License name or path to bundled license file |
| `compatibility` | 500 chars | Environment requirements (e.g., "Requires Node.js 18+, git, docker") |
| `metadata` | — | Arbitrary key-value pairs for custom metadata |
| `allowed-tools` | — | Space-delimited list of pre-approved tools (experimental) |

## Directory structure

```
my-skill/
├── SKILL.md              # Required: frontmatter + instructions
├── scripts/              # Optional: executable code (bash, python, js, etc.)
├── references/           # Optional: supporting docs (REFERENCE.md, FORMS.md, etc.)
├── assets/               # Optional: templates, images, data files
└── evals/
    └── evals.json        # Test cases for evaluation
```

## Script execution patterns

| Pattern | Language | Command | When to use |
|---------|----------|---------|------------|
| Self-contained (PEP 723) | Python | `uv run scripts/extract.py` | Pinned dependencies, reproducible |
| One-off command | Python | `pipx run 'black==24.10.0' .` | Existing package, no bundling needed |
| One-off command | JavaScript | `npx eslint@9.0.0 .` | npm packages with version pinning |
| Deno imports | TypeScript | `deno run scripts/extract.ts` | npm: and jsr: specifiers, auto-cached |
| Bun auto-install | TypeScript | `bun run scripts/extract.ts` | TypeScript native, auto-installs deps |

## Relative paths in skills

Reference bundled files from SKILL.md using paths relative to the skill directory root:
```bash
bash scripts/validate.sh "$INPUT_FILE"
python3 scripts/process.py --input results.json
```
Agents resolve these automatically — no absolute paths needed.

# Decision guidance

## When to use scripts vs. one-off commands

| Scenario | Use scripts/ | Use one-off commands |
|----------|-------------|----------------------|
| Complex logic, multiple steps, error handling | ✓ | — |
| Reusable, tested code | ✓ | — |
| Simple invocation of existing tool | — | ✓ |
| Tool already in ecosystem (npm, pip, etc.) | — | ✓ |
| Need reproducibility and pinned versions | ✓ (PEP 723) | ✓ (with version pins) |

## When to use file-read vs. dedicated activation tool

| Factor | File-read activation | Dedicated tool |
|--------|----------------------|----------------|
| Model has file-read capability | ✓ (simplest) | Optional but useful |
| Model cannot read files | — | ✓ (required) |
| Need to control returned content | — | ✓ |
| Need to list bundled resources | — | ✓ |
| Need permission/consent tracking | — | ✓ |
| Simplicity priority | ✓ | — |

## When to write assertions vs. human review

| Quality check | Use assertions | Use human review |
|---------------|----------------|-----------------|
| Programmatically verifiable (file exists, JSON valid) | ✓ | — |
| Countable (3+ recommendations, labeled axes) | ✓ | — |
| Specific and observable | ✓ | — |
| Writing style, visual design, "feels right" | — | ✓ |
| Subjective quality | — | ✓ |

# Workflow

## Creating a skill

1. **Create the directory structure**:
   ```bash
   mkdir my-skill
   cd my-skill
   ```

2. **Write SKILL.md with frontmatter and instructions**:
   - Start with required fields: `name` and `description`
   - Write the description as an imperative instruction: "Use this skill when..." not "This skill does..."
   - Focus on user intent, not implementation
   - Keep description under 1024 characters
   - Add Markdown body with step-by-step instructions, examples, edge cases

3. **Add optional supporting files**:
   - `scripts/` for executable code (bash, Python, JavaScript, etc.)
   - `references/` for documentation agents load on demand
   - `assets/` for templates, images, data files
   - `evals/evals.json` for test cases

4. **Test the skill manually** with a few prompts to verify basic functionality.

## Optimizing a skill's description

1. **Understand how triggering works**: Agents load only name + description at startup. The description carries the entire burden of triggering. If it doesn't convey when the skill is useful, agents won't activate it.

2. **Write test queries** (20 total, mix of should-trigger and should-not-trigger):
   - Vary phrasing (formal, casual, with typos)
   - Vary explicitness (name the domain directly vs. describe the need)
   - Vary detail (terse vs. context-heavy)
   - Vary complexity (single-step vs. multi-step)
   - Include edge cases where the skill helps but the connection isn't obvious

3. **Run each query through your agent** 3 times and compute trigger rate (fraction of runs where skill was invoked):
   - Should-trigger queries: pass if trigger rate > 0.5
   - Should-not-trigger queries: pass if trigger rate < 0.5

4. **Analyze failures** and refine the description:
   - Under-triggering: description too narrow, missing key contexts
   - Over-triggering: description too broad, matches unrelated tasks
   - Use imperative phrasing ("Use when..."), focus on user intent, list explicit contexts

5. **Verify the refined description** with fresh queries (5-10) that weren't part of optimization.

## Evaluating skill quality

1. **Design test cases** in `evals/evals.json`:
   - Start with 2-3 cases
   - Include prompt (realistic user message), expected output, optional input files
   - Vary phrasings, detail levels, and edge cases
   - Use realistic context (file paths, column names, backstory)

2. **Run the first iteration**:
   - Execute each test case with and without the skill
   - Capture outputs, timing, and token usage
   - Organize results in `iteration-1/` with `with_skill/` and `without_skill/` subdirectories

3. **Write assertions** (after seeing first outputs):
   - Programmatically verifiable statements ("output is valid JSON")
   - Specific and observable ("chart has labeled axes")
   - Countable ("at least 3 recommendations")
   - Add to each test case in `evals/evals.json`

4. **Grade and aggregate results**:
   - Check assertion pass/fail for each test case
   - Compute benchmark statistics (tokens, duration, success rate)
   - Save in `benchmark.json`

5. **Human review**:
   - Review actual outputs alongside grades
   - Record specific, actionable feedback (not "looks bad" but "missing axis labels")
   - Empty feedback = test case passed

6. **Iterate**:
   - Give eval signals and current SKILL.md to an LLM
   - Ask it to propose improvements
   - Rerun all test cases in `iteration-<N+1>/`
   - Repeat until satisfied or improvements plateau

## Adding skills support to an agent

1. **Discover skills** at startup:
   - Scan project-level: `<project>/.agents/skills/` and `<project>/.<client>/skills/`
   - Scan user-level: `~/.agents/skills/` and `~/.<client>/skills/`
   - Look for subdirectories containing a file named exactly `SKILL.md`
   - Handle name collisions: project-level overrides user-level (log warnings)

2. **Build the skill catalog**:
   - Extract `name`, `description`, and `location` (path to SKILL.md) from each skill
   - Format as XML, JSON, or bulleted list
   - Include roughly 50-100 tokens per skill (compact even with dozens)

3. **Tell the model about skills**:
   - Include the catalog in the system prompt or context
   - Add behavioral instructions: when to use skills, how to activate them

4. **Activate skills** when the model selects one:
   - **File-read activation**: Model calls file-read tool with SKILL.md path
   - **Dedicated tool activation**: Register an `activate_skill` tool that returns content
   - Constrain tool parameters to valid skill names (prevent hallucination)

5. **Load referenced files on demand**:
   - Don't eagerly read scripts/, references/, assets/
   - Model loads specific files when skill instructions reference them
   - Use file-read tools with paths relative to skill directory

6. **Maintain the catalog over time**:
   - Periodically rescan for new skills
   - Update the catalog when skills are added, removed, or modified
   - Log changes for debugging

# Common gotchas

- **Description too narrow**: Skill won't trigger when it should. Use imperative phrasing ("Use when..."), list explicit contexts, include cases where the user doesn't name the domain directly.

- **Description too broad**: Skill triggers on unrelated tasks. Focus on user intent, not implementation. Be specific about what the skill does.

- **Description over 1024 characters**: Specification enforces a hard limit. Trim ruthlessly — a few sentences to a short paragraph is usually right.

- **Skill name invalid**: Must be lowercase letters, numbers, and hyphens only; max 64 chars; must not start or end with a hyphen. Use `csv-analyzer`, not `CSV Analyzer` or `csv_analyzer`.

- **Relative paths in scripts**: Use paths relative to skill directory root (e.g., `scripts/validate.sh`). Agents resolve these automatically. Don't use absolute paths.

- **Scripts without pinned versions**: One-off commands like `npx eslint .` will download the latest version every time. Pin versions: `npx eslint@9.0.0 .` for reproducibility.

- **Missing dependencies in scripts**: Self-contained scripts (PEP 723, Deno, Bun) declare dependencies inline. Bash scripts should document external requirements in SKILL.md.

- **Eagerly loading bundled files**: Don't read scripts/, references/, assets/ when activating a skill. Let the model load specific files on demand via file-read tools.

- **Test cases too vague**: Prompts like "process this data" don't test anything useful. Include file paths, column names, and realistic context.

- **Assertions too brittle**: "Output uses exactly the phrase 'Total Revenue: $X'" will fail on correct output with different wording. Use observable, countable assertions instead.

- **Skipping human review**: Assertion grading catches what you thought to check for. Human reviewers catch issues you didn't anticipate and spot when output is technically correct but misses the point.

- **Not iterating on evals**: One pass through evals is rarely enough. Use feedback to improve the skill, rerun tests in a new iteration directory, and repeat until satisfied.

- **Skill name collisions**: When two skills share the same name, project-level overrides user-level. Log warnings so users know a skill was shadowed.

# Verification checklist

Before submitting a skill:

- [ ] **Frontmatter is valid**: `name` and `description` are present, name is lowercase + hyphens only, description is under 1024 characters
- [ ] **Description is imperative**: Frames the skill as an instruction ("Use when..."), focuses on user intent, lists explicit contexts
- [ ] **Directory structure is correct**: SKILL.md is at the root, optional scripts/, references/, assets/ are present if needed
- [ ] **Scripts are self-contained or documented**: PEP 723 scripts declare dependencies inline, one-off commands pin versions, bash scripts document requirements
- [ ] **Relative paths work**: Scripts and references use paths relative to skill directory root; agents resolve them automatically
- [ ] **Test cases are realistic**: evals/evals.json includes varied prompts with file paths, column names, and context
- [ ] **Assertions are verifiable**: Programmatically checkable, specific, observable, countable — not vague or brittle
- [ ] **Skill triggers correctly**: Run 3+ test queries; should-trigger queries pass if trigger rate > 0.5, should-not-trigger if < 0.5
- [ ] **Skill output is quality**: Run evals with and without skill; review outputs, grades, and human feedback; iterate if needed
- [ ] **No hardcoded paths or assumptions**: Skill works across different user environments and project structures
- [ ] **Documentation is clear**: SKILL.md body includes step-by-step instructions, examples, and edge cases

# Resources

- **Comprehensive navigation**: https://agentskills.io/llms.txt — page-by-page listing of all documentation
- **Specification**: https://agentskills.io/specification — complete format definition for SKILL.md, frontmatter fields, directory structure
- **Client implementation guide**: https://agentskills.io/client-implementation/adding-skills-support — how to integrate skills into an agent or tool
- **Skill creation best practices**: https://agentskills.io/skill-creation/optimizing-descriptions — how to write descriptions that trigger reliably

---

> For additional documentation and navigation, see: https://agentskills.io/llms.txt