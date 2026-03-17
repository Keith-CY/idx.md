---
name: Agent
description: Use when creating, authoring, or improving Agent Skills — reusable instruction packages that extend AI agent capabilities. Reach for this skill when building SKILL.md files, bundling scripts, testing skill triggering, evaluating skill quality, or integrating skills into agent platforms.
metadata:
    mintlify-proj: agent
    version: "1.0"
---

# Agent Skills

## Product summary

Agent Skills is an open format for packaging reusable instructions, scripts, and resources that extend AI agent capabilities. A skill is a directory containing a `SKILL.md` file with YAML frontmatter (name and description) and Markdown instructions, optionally bundled with scripts, references, and assets. Skills use **progressive disclosure**: agents load only the name and description at startup, read full instructions when a task matches the skill's description, and load supporting files on demand. This keeps agents fast while giving them access to specialized knowledge when needed.

**Key files and paths:**
- `SKILL.md` — Required. Contains frontmatter (name, description, optional license/compatibility/metadata) and Markdown instructions.
- `scripts/` — Optional. Executable code (Python, Bash, JavaScript, etc.) that agents can run.
- `references/` — Optional. Detailed documentation loaded on demand.
- `assets/` — Optional. Templates, images, data files.

**Primary docs:** https://agentskills.io

## When to use

Use this skill when:
- **Creating a new skill** — You have domain expertise or project knowledge to package into reusable instructions.
- **Improving an existing skill** — You're iterating on descriptions, instructions, or bundled scripts based on test results.
- **Testing skill triggering** — You need to verify that a skill's description activates on the right prompts.
- **Evaluating skill quality** — You're running test cases, grading outputs, and iterating based on results.
- **Integrating skills into an agent** — You're adding skills support to an AI agent or development tool.
- **Bundling scripts** — You're writing self-contained scripts with inline dependencies for agents to run.

## Quick reference

### Frontmatter fields

| Field | Required | Constraints | Purpose |
|-------|----------|-------------|---------|
| `name` | Yes | 1-64 chars, lowercase + hyphens, no leading/trailing/consecutive hyphens, must match parent directory | Skill identifier |
| `description` | Yes | 1-1024 chars, non-empty | When to use this skill (primary trigger mechanism) |
| `license` | No | Short name or reference | License applied to the skill |
| `compatibility` | No | 1-500 chars | Environment requirements (e.g., "Requires Node.js 18+") |
| `metadata` | No | Key-value map | Custom metadata (author, version, etc.) |
| `allowed-tools` | No | Space-delimited list | Pre-approved tools (experimental) |

### Minimal SKILL.md structure

```markdown
---
name: skill-name
description: What this skill does and when to use it.
---

# Skill Title

## When to use this skill
[Describe the task and context]

## How to [task]
[Step-by-step instructions]

## Gotchas
[Non-obvious issues agents will encounter]
```

### Directory structure

```
my-skill/
├── SKILL.md                    # Required
├── scripts/                    # Optional: executable code
│   ├── validate.sh
│   └── process.py
├── references/                 # Optional: detailed docs
│   └── REFERENCE.md
└── assets/                     # Optional: templates, data
    └── template.json
```

### One-off commands (no scripts/ needed)

| Tool | Command | When to use |
|------|---------|------------|
| `uvx` | `uvx ruff@0.8.0 check .` | Python packages, fast caching, requires uv install |
| `pipx` | `pipx run 'black==24.10.0' .` | Python packages, broader OS availability |
| `npx` | `npx eslint@9 --fix .` | npm packages, ships with Node.js |
| `bunx` | `bunx eslint@9 --fix .` | Bun environments only |
| `deno run` | `deno run npm:eslint@9 -- --fix .` | Deno scripts, requires permission flags |
| `go run` | `go run golang.org/x/tools/cmd/goimports@v0.28.0 .` | Go packages, built into go command |

### Script design checklist

- [ ] No interactive prompts (agents can't respond to TTY input)
- [ ] Accept all input via flags, env vars, or stdin
- [ ] Include `--help` with usage examples
- [ ] Write helpful error messages (not just "Error: invalid input")
- [ ] Use structured output (JSON, CSV) to stdout; diagnostics to stderr
- [ ] Support `--dry-run` for destructive operations
- [ ] Use meaningful exit codes (document in `--help`)
- [ ] Idempotent where possible ("create if not exists")
- [ ] Limit output size or support pagination with `--offset`

## Decision guidance

### When to use X vs Y

| Scenario | Use | Why |
|----------|-----|-----|
| Simple tool invocation (few flags) | One-off command in SKILL.md | No script overhead, easier to maintain |
| Complex logic, reused across runs | Bundled script in `scripts/` | Tested once, reliable, composable |
| Detailed reference material | Separate file in `references/` | Loaded on demand, keeps SKILL.md lean |
| Inline dependencies needed | PEP 723 (Python), Deno, Bun | Self-contained, no separate manifest |
| Prescriptive vs flexible instructions | Prescriptive for fragile ops, flexible for tolerant tasks | Match specificity to risk level |
| Narrow skill scope vs broad | Narrow (coherent unit of work) | Easier to activate precisely, composes well |
| Skill description too broad | Add specificity about what skill does NOT do | Reduces false triggers |
| Skill description too narrow | Broaden scope, add context about when useful | Increases true triggers |

### Triggering: should-trigger vs should-not-trigger queries

**Should-trigger queries** test whether the description captures the skill's scope:
- Vary phrasing (formal, casual, typos, abbreviations)
- Vary explicitness (explicit domain mention vs implicit need)
- Vary detail (terse vs context-heavy)
- Vary complexity (single-step vs multi-step workflows)

**Should-not-trigger queries** test precision (near-misses are most valuable):
- Queries that share keywords but need something different
- Queries that involve adjacent capabilities
- Avoid obvious negatives (too easy to pass)

## Workflow

### Creating a skill

1. **Start from real expertise.** Complete a real task with an agent, noting steps that worked, corrections you made, and context you provided. Extract the reusable pattern.
2. **Create the directory structure.** Make `skill-name/SKILL.md` with required frontmatter (name, description) and Markdown instructions.
3. **Write the description.** Use imperative phrasing ("Use this skill when..."). Include specific keywords and contexts where the skill applies. Keep under 1024 characters.
4. **Write instructions.** Focus on what the agent wouldn't know without the skill. Include gotchas, templates, checklists, and validation loops. Keep SKILL.md under 500 lines / 5000 tokens.
5. **Bundle scripts if needed.** Move complex logic into `scripts/` with inline dependencies (PEP 723, Deno, Bun, etc.). Document usage in SKILL.md.
6. **Test triggering.** Create 20 eval queries (10 should-trigger, 10 should-not-trigger). Run each 3 times. Compute trigger rates. Iterate on description until train set passes.
7. **Test output quality.** Create 2-3 test cases with prompts, expected outputs, and assertions. Run with and without skill. Grade results. Iterate on instructions.

### Optimizing a skill description

1. **Design eval queries.** Create 20 realistic queries: 8-10 should-trigger, 8-10 should-not-trigger. Include near-misses for negatives.
2. **Split train/validation.** Allocate ~60% to train set, ~40% to validation. Keep split fixed across iterations.
3. **Run baseline.** Test current description on both sets. Compute trigger rates (3 runs per query, threshold 0.5).
4. **Identify failures.** Which should-trigger queries didn't trigger? Which should-not-trigger queries false-triggered?
5. **Revise description.** Broaden if should-trigger queries fail. Add specificity if should-not-trigger queries false-trigger. Avoid overfitting to specific keywords.
6. **Repeat.** Re-evaluate on train set. Stop after 5 iterations or when improvement plateaus.
7. **Select best iteration.** Choose the version with highest validation pass rate (not necessarily the last one).
8. **Verify generalization.** Test 5-10 fresh queries (never seen before) as a final sanity check.

### Evaluating skill output quality

1. **Design test cases.** Create 2-3 realistic prompts with expected outputs and input files. Store in `evals/evals.json`.
2. **Run with-skill and without-skill.** Each run starts fresh. Provide skill path, prompt, input files, output directory.
3. **Capture timing.** Record `total_tokens` and `duration_ms` for each run.
4. **Write assertions.** After seeing first outputs, add verifiable statements (e.g., "output includes a bar chart", "both axes are labeled").
5. **Grade outputs.** Evaluate each assertion against actual outputs. Record PASS/FAIL with specific evidence.
6. **Aggregate results.** Compute pass rates, token usage, duration for with-skill vs without-skill. Calculate delta.
7. **Analyze patterns.** Remove assertions that always pass. Investigate assertions that always fail. Study assertions that pass with skill but fail without.
8. **Review with human.** Check actual outputs. Record specific feedback (not vague opinions).
9. **Iterate.** Give eval signals, execution transcripts, and current SKILL.md to an LLM. Ask for improvement proposals. Apply changes. Rerun in new `iteration-N/` directory.
10. **Stop when.** Results satisfy you, feedback is consistently empty, or improvement plateaus.

### Integrating skills into an agent

1. **Discover skills.** Scan `.agents/skills/` and client-specific directories at project and user levels. Look for subdirectories containing `SKILL.md`.
2. **Parse SKILL.md.** Extract YAML frontmatter (name, description, optional fields). Store body separately. Handle malformed YAML leniently.
3. **Build catalog.** List all discovered skills with name, description, and location. Include ~50-100 tokens per skill.
4. **Disclose to model.** Add catalog to system prompt or skill activation tool description. Include brief instructions on how to use skills.
5. **Activate on demand.** When model selects a skill, deliver full instructions (with or without frontmatter). Optionally wrap in identifying tags.
6. **List resources.** Enumerate bundled scripts and references without eagerly loading them.
7. **Protect from pruning.** Exempt skill content from context compaction. Flag as protected or use identifying tags.
8. **Deduplicate.** Track activated skills. Skip re-injection if already in context.

## Common gotchas

- **Description too vague.** "Helps with PDFs" won't trigger. Be specific: "Extract text, fill forms, merge files. Use when handling PDFs."
- **Description too broad.** "Analyze data" triggers on everything. Add specificity: "Analyze CSV and tabular data files — compute stats, add columns, generate charts."
- **Overfitting to eval queries.** Optimizing against all queries creates descriptions that work for those specific phrasings but fail on new ones. Use train/validation split.
- **Skill instructions too long.** Keep SKILL.md under 500 lines / 5000 tokens. Move detailed reference material to `references/` and tell the agent when to load it.
- **Gotchas buried in references.** Non-obvious issues should be in SKILL.md where the agent reads them before encountering the problem. Use `references/` for optional deep dives.
- **Scripts with interactive prompts.** Agents can't respond to TTY input. Accept all input via flags, env vars, or stdin. Provide clear error messages.
- **Unstructured script output.** Agents can't parse free-form text reliably. Use JSON, CSV, or TSV. Send diagnostics to stderr, data to stdout.
- **Skill name doesn't match directory.** The `name` field must match the parent directory name exactly.
- **Relative paths in scripts.** Use paths relative to the skill directory root. Agents resolve these automatically.
- **Skill triggered when it shouldn't.** False positives waste agent turns. Test should-not-trigger queries, especially near-misses.
- **Skill not triggered when it should.** False negatives mean the skill never helps. Test should-trigger queries with varied phrasing and explicitness.
- **Assertions too brittle.** "Output uses exactly the phrase 'Total Revenue: $X'" fails on correct output with different wording. Make assertions about substance, not exact phrasing.
- **Assertions too vague.** "Output is good" can't be graded. Use countable, observable criteria: "includes at least 3 recommendations", "chart has labeled axes".
- **Skill collisions.** When two skills share the same name, project-level overrides user-level. Log a warning.
- **Untrusted project-level skills.** Freshly cloned repos may contain malicious skills. Gate project-level loading on a trust check.

## Verification checklist

Before finalizing a skill:

- [ ] **Frontmatter valid.** Name matches directory, 1-64 chars, lowercase + hyphens only. Description is 1-1024 chars, non-empty.
- [ ] **Description triggers correctly.** Tested on 20 eval queries (10 should-trigger, 10 should-not-trigger). Train set pass rate ≥ 0.5. Validation set pass rate ≥ 0.5.
- [ ] **Instructions are lean.** SKILL.md under 500 lines / 5000 tokens. Detailed reference material in separate files.
- [ ] **Gotchas are prominent.** Non-obvious issues listed in SKILL.md, not buried in references.
- [ ] **Scripts are self-contained.** No interactive prompts. Accept input via flags/env/stdin. Include `--help`. Use structured output.
- [ ] **Relative paths work.** All file references use paths relative to skill directory root.
- [ ] **Output quality tested.** Ran 2-3 test cases with and without skill. Graded assertions. Reviewed outputs with human.
- [ ] **Improvement loop complete.** Iterated based on failed assertions and human feedback. Stopped when results satisfied or improvement plateaued.
- [ ] **No name collisions.** Skill name is unique in the project and user scopes (or collision is intentional and documented).
- [ ] **License specified (if needed).** Added `license` field if the skill has specific licensing requirements.
- [ ] **Compatibility documented (if needed).** Added `compatibility` field if the skill requires specific environments or system packages.

## Resources

**Comprehensive navigation:** https://agentskills.io/llms.txt

**Critical documentation:**
1. [Specification](https://agentskills.io/specification) — Complete format reference for SKILL.md files, frontmatter fields, directory structure, and validation.
2. [Best practices for skill creators](https://agentskills.io/skill-creation/best-practices) — How to write well-scoped skills, spend context wisely, calibrate control, and use effective patterns (gotchas, templates, checklists, validation loops).
3. [Optimizing skill descriptions](https://agentskills.io/skill-creation/optimizing-descriptions) — How to test and improve descriptions for reliable triggering using eval queries, train/validation splits, and iterative refinement.

---

> For additional documentation and navigation, see: https://agentskills.io/llms.txt