---
name: Agent
description: Use when creating, optimizing, or evaluating Agent Skills — the open format for extending AI agent capabilities. Reach for this skill when building SKILL.md files, designing skill descriptions, bundling scripts, testing skill quality, or implementing skills support in an agent product.
metadata:
    mintlify-proj: agent
    version: "1.0"
---

# Agent Skills Playbook

## Product summary

Agent Skills is an open format for packaging specialized knowledge and workflows into portable, reusable instructions for AI agents. A skill is a folder containing a `SKILL.md` file (metadata + instructions) plus optional supporting files (scripts, references, assets). Skills use **progressive disclosure** — agents load only the name and description at startup, then read full instructions when a task matches the skill's scope, keeping context overhead minimal.

**Key files and paths:**
- `SKILL.md` — Required file with YAML frontmatter (`name`, `description`) and markdown instructions
- `scripts/` — Optional executable code (Python, Bash, JavaScript, etc.)
- `references/` — Optional supporting documentation
- `assets/` — Optional templates, images, data files
- `.agents/skills/` — Cross-client convention for skill directories (project-level or user-level)

**Primary docs:** https://agentskills.io

## When to use

Reach for this skill when:

- **Creating a new skill** — You have domain expertise or project-specific knowledge to package into reusable instructions
- **Optimizing a skill's description** — A skill exists but doesn't trigger on the right prompts; you need to test and refine the `description` field
- **Evaluating skill quality** — You need to test whether a skill produces better outputs than baseline, using structured test cases and assertions
- **Bundling scripts** — You're writing executable code to support a skill's instructions
- **Implementing skills support** — You're adding Agent Skills to an agent product or development tool
- **Troubleshooting skill behavior** — A skill isn't activating, or the agent isn't following its instructions as expected

## Quick reference

### SKILL.md frontmatter fields

| Field | Required | Constraints | Example |
|-------|----------|-------------|---------|
| `name` | Yes | 1-64 chars, lowercase + hyphens only, match parent directory | `name: pdf-processing` |
| `description` | Yes | 1-1024 chars, describe what + when to use | `description: Extract text from PDFs. Use when handling PDF files.` |
| `license` | No | License name or file reference | `license: Apache-2.0` |
| `compatibility` | No | Max 500 chars, environment requirements | `compatibility: Requires Python 3.10+` |
| `metadata` | No | Arbitrary key-value pairs | `metadata: {author: org, version: "1.0"}` |
| `allowed-tools` | No | Space-separated tool names (experimental) | `allowed-tools: Bash(git:*) Read` |

### Skill directory structure

```
skill-name/
├── SKILL.md                    # Required
├── scripts/                    # Optional: executable code
│   ├── process.py
│   └── validate.sh
├── references/                 # Optional: supporting docs
│   ├── REFERENCE.md
│   └── api-errors.md
└── assets/                     # Optional: templates, images
    └── template.docx
```

### Validation

```bash
# Validate a skill's SKILL.md format
skills-ref validate ./my-skill
```

## Decision guidance

### When to use scripts vs. inline commands

| Scenario | Use inline command | Use bundled script |
|----------|-------------------|-------------------|
| Simple one-off tool invocation | `npx eslint@9 --fix .` | — |
| Complex logic with multiple steps | — | `scripts/process.py` |
| Reused across multiple test cases | — | `scripts/validate.sh` |
| Needs error handling and validation | — | `scripts/deploy.py` |
| Agent reinvents same logic each run | — | Bundle it once |

### When to use prescriptive vs. flexible instructions

| Situation | Approach | Example |
|-----------|----------|---------|
| Multiple valid approaches, task tolerates variation | Flexible; explain why | "Check for SQL injection in queries (use parameterized queries)" |
| Fragile operation, specific sequence required | Prescriptive; exact steps | "Run exactly: `python migrate.py --verify --backup`" |
| Destructive or stateful operation | Prescriptive + safeguards | Require `--confirm` flag |

### When to move content to separate files

| Content | Keep in SKILL.md | Move to references/ |
|---------|------------------|-------------------|
| Core instructions agent needs every run | ✓ | — |
| Detailed reference material | — | ✓ |
| API error codes and recovery steps | — | ✓ (reference in SKILL.md when to load) |
| Gotchas and non-obvious edge cases | ✓ | — |
| Long templates or examples | Inline if <10 lines, else move | ✓ |

## Workflow

### Creating a skill

1. **Extract from real expertise.** Complete a real task with an agent, noting steps that worked, corrections you made, and context you provided. Don't ask an LLM to generate a skill from generic knowledge.

2. **Create the directory structure:**
   ```bash
   mkdir -p my-skill/scripts my-skill/references
   ```

3. **Write SKILL.md with required frontmatter:**
   - `name`: lowercase, hyphens, 1-64 chars, match folder name
   - `description`: 1-1024 chars, describe what + when to use (be specific about trigger conditions)

4. **Write the body:** Step-by-step instructions, examples, gotchas. Keep under 500 lines; move detailed reference material to `references/`.

5. **Add scripts if needed:** Self-contained executables in `scripts/` with inline dependency declarations (PEP 723 for Python, `npm:` for Deno, etc.).

6. **Validate:** `skills-ref validate ./my-skill`

7. **Test with an agent:** Place in `.agents/skills/my-skill/` and test with your agent client.

### Optimizing a skill's description

1. **Create eval queries** (~20 total): Mix of should-trigger and should-not-trigger prompts. Include casual phrasing, explicit and implicit mentions, short and detailed contexts.

2. **Split into train/validation sets** (60/40 split) to avoid overfitting.

3. **Run trigger tests:** For each query, check whether the agent invoked the skill. Run 3 times per query to account for nondeterminism. Compute trigger rate (fraction of runs where skill was invoked).

4. **Identify failures:** Which should-trigger queries didn't trigger? Which should-not-trigger queries false-triggered?

5. **Revise description:** 
   - Too narrow (should-trigger failing) → broaden scope, add context about when skill applies
   - Too broad (should-not-trigger triggering) → add specificity, clarify boundaries
   - Avoid overfitting to specific keywords; generalize to the concept

6. **Repeat 3-5 iterations** until train set passes or improvement plateaus.

7. **Validate on fresh queries:** Write 5-10 new queries (never seen during optimization) and verify they pass.

8. **Update SKILL.md** and verify description is under 1024 characters.

### Evaluating skill quality

1. **Design test cases** (start with 2-3): Realistic prompts, expected outputs, optional input files. Store in `evals/evals.json`.

2. **Run baseline (without skill):** Execute each test case without the skill. Save outputs to `workspace/iteration-1/eval-<name>/without_skill/outputs/`.

3. **Run with skill:** Execute same test cases with skill. Save to `workspace/iteration-1/eval-<name>/with_skill/outputs/`.

4. **Write assertions:** Verifiable statements about output (e.g., "includes a bar chart", "all axes labeled"). Add to `evals/evals.json` after seeing first outputs.

5. **Grade outputs:** For each assertion, record PASS/FAIL with specific evidence. Save to `grading.json`.

6. **Aggregate results:** Compute pass rates, token counts, timing. Save to `benchmark.json`. Compare with-skill vs. without-skill.

7. **Review with human:** Check actual outputs for issues assertions missed. Record feedback.

8. **Iterate:** Give failed assertions, human feedback, and execution transcripts to an LLM. Ask for skill improvements. Rerun in `iteration-2/`, repeat until satisfied.

### Bundling scripts

1. **Choose inline or bundled:**
   - Inline: `npx eslint@9 --fix .` (simple, one-off)
   - Bundled: `scripts/validate.py` (reused, complex, tested)

2. **For bundled scripts, declare dependencies inline:**
   - Python: PEP 723 (`# /// script` block with `dependencies = [...]`)
   - Deno: `import * as lib from "npm:package@1.0.0"`
   - Bun: `import lib from "package@1.0.0"` (auto-installs)
   - Ruby: `bundler/inline` with `gemfile` block

3. **Design for agents:**
   - No interactive prompts (agents can't respond to TTY)
   - Document with `--help` (agent reads this to learn interface)
   - Reject ambiguous input with clear errors
   - Use structured output (JSON, CSV) not free-form text
   - Send diagnostics to stderr, data to stdout
   - Support `--dry-run` for destructive operations
   - Use distinct exit codes for different failure types

4. **Reference from SKILL.md:** Use relative paths from skill root: `scripts/process.py`

### Implementing skills in an agent

1. **Discover skills:** Scan `.agents/skills/` (and client-specific directories) at startup. Look for subdirectories containing `SKILL.md`.

2. **Parse SKILL.md:** Extract YAML frontmatter (`name`, `description`) and body. Handle lenient validation (warn on issues, load anyway if possible).

3. **Build catalog:** List all discovered skills (name + description) in system prompt or tool description. ~50-100 tokens per skill.

4. **Activate on demand:** When model or user selects a skill, deliver full `SKILL.md` body into context. Use file-read tool or dedicated activation tool.

5. **Protect from pruning:** If context compaction happens, exempt skill content from truncation.

6. **Deduplicate:** Track which skills are already in context; skip re-injection.

## Common gotchas

- **Overfitting descriptions to specific keywords.** Optimize for concepts, not exact phrasings. A description that works for "analyze this CSV" but fails on "I have a spreadsheet with data" is too narrow.

- **Skill instructions too long.** Keep `SKILL.md` under 500 lines and 5,000 tokens. Move detailed reference material to `references/` and tell the agent when to load it ("Read `references/api-errors.md` if the API returns a non-200 status").

- **Vague instructions that don't apply to current task.** Agents follow instructions anyway, wasting time. Be specific about scope and conditions. Use gotchas sections to capture non-obvious edge cases.

- **Scripts with interactive prompts.** Agents run in non-interactive shells and will hang indefinitely waiting for input. Accept all input via flags, env vars, or stdin.

- **Unstructured script output.** Agents can't parse free-form text reliably. Use JSON, CSV, or other structured formats. Send diagnostics to stderr, data to stdout.

- **Missing `--help` documentation.** Agents learn your script's interface from `--help`. Include brief description, available flags, and usage examples.

- **Skill name doesn't match directory name.** The `name` field must match the parent directory exactly. `name: pdf-processing` requires directory `pdf-processing/`.

- **Description field too broad.** If a skill triggers on unrelated tasks, the description is overgeneralized. Add specificity about what the skill does *not* do.

- **Forgetting to validate.** Run `skills-ref validate ./my-skill` before deploying. Catches frontmatter errors and naming issues.

- **Skill activates but agent ignores instructions.** Instructions may be ambiguous or conflicting with other context. Provide examples, explain the why, use checklists for multi-step workflows.

## Verification checklist

Before submitting a skill:

- [ ] `SKILL.md` exists in skill root directory
- [ ] Frontmatter has required fields: `name` and `description`
- [ ] `name` matches parent directory name (lowercase, hyphens, no leading/trailing hyphens)
- [ ] `description` is 1-1024 characters and describes both what + when to use
- [ ] `description` includes specific trigger keywords (not just "helps with X")
- [ ] Body content is clear, step-by-step, under 500 lines
- [ ] Gotchas section captures non-obvious edge cases
- [ ] Scripts have `--help` documentation and handle errors gracefully
- [ ] Scripts avoid interactive prompts (no TTY input)
- [ ] Scripts use structured output (JSON/CSV) not free-form text
- [ ] Relative paths in SKILL.md are correct (relative to skill root)
- [ ] `skills-ref validate ./my-skill` passes
- [ ] Tested with actual agent and confirmed it activates on relevant prompts
- [ ] If evaluating, test cases pass with higher pass rate than baseline

## Resources

**Comprehensive navigation:** https://agentskills.io/llms.txt — Full page-by-page listing for agent reference.

**Critical documentation:**
- [Specification](https://agentskills.io/specification) — Complete SKILL.md format reference, frontmatter constraints, directory structure
- [Best practices for skill creators](https://agentskills.io/skill-creation/best-practices) — How to write effective skills, spending context wisely, patterns for instructions
- [Optimizing skill descriptions](https://agentskills.io/skill-creation/optimizing-descriptions) — Testing and improving trigger accuracy with eval queries

---

> For additional documentation and navigation, see: https://agentskills.io/llms.txt