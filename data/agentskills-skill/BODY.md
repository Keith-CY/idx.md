---
name: Agent
description: Use when creating, optimizing, or evaluating Agent Skills — reusable instruction packages that extend AI agent capabilities. Reach for this skill when building new skills, improving skill descriptions for better triggering, testing skill quality with evals, bundling scripts, or integrating skills into agent products.
metadata:
    mintlify-proj: agent
    version: "1.0"
---

# Agent Skills Playbook

## Product summary

Agent Skills is an open format for packaging specialized knowledge and workflows into reusable instruction sets that agents load on demand. A skill is a folder containing a `SKILL.md` file (required metadata + instructions) plus optional `scripts/`, `references/`, and `assets/` directories. Skills use progressive disclosure: agents load only the name and description at startup, read the full instructions when a task matches, and load supporting files as needed. This keeps agents fast while giving them access to specialized knowledge on demand.

**Key files and paths:**
- `SKILL.md` — Required. Contains YAML frontmatter (name, description, optional license/compatibility/metadata) and markdown instructions.
- `scripts/` — Optional. Executable code agents can run (Python, Bash, JavaScript, etc.).
- `references/` — Optional. Detailed documentation agents load on demand.
- `assets/` — Optional. Templates, data files, images.

**Primary docs:** https://agentskills.io

## When to use

Reach for this skill when:
- **Creating a new skill** — You have domain expertise or project-specific knowledge to package into reusable instructions.
- **Optimizing skill descriptions** — A skill exists but doesn't trigger reliably on relevant prompts; you need to test and refine the `description` field.
- **Evaluating skill quality** — You need to test whether a skill produces good outputs, measure improvement over baseline, and iterate systematically.
- **Bundling scripts** — You're adding executable code to a skill and need to design it for agent use (error handling, structured output, `--help` documentation).
- **Integrating skills into an agent** — You're building or extending an agent product to discover, load, and activate skills.
- **Troubleshooting skill behavior** — A skill isn't triggering, produces inconsistent outputs, or needs refinement based on real execution.

## Quick reference

### SKILL.md frontmatter (required fields)

| Field | Constraints | Example |
|-------|-------------|---------|
| `name` | 1-64 chars, lowercase + hyphens only, matches parent directory | `name: pdf-processing` |
| `description` | 1-1024 chars, describes what + when to use | `description: Extract PDF text, fill forms, merge files. Use when handling PDFs.` |

### Optional frontmatter fields

| Field | Purpose | Example |
|-------|---------|---------|
| `license` | License name or reference | `license: Apache-2.0` |
| `compatibility` | Environment requirements | `compatibility: Requires Python 3.14+ and uv` |
| `metadata` | Custom key-value pairs | `metadata:\n  author: org-name\n  version: "1.0"` |
| `allowed-tools` | Pre-approved tools (experimental) | `allowed-tools: Bash(git:*) Read` |

### Directory structure

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

### One-off commands (no scripts/ needed)

| Tool | Command | When to use |
|------|---------|------------|
| `uvx` | `uvx ruff@0.8.0 check .` | Python packages; fast caching |
| `npx` | `npx eslint@9 --fix .` | npm packages; bundled with Node.js |
| `pipx` | `pipx run black==24.10.0 .` | Python; broader OS package manager support |
| `deno run` | `deno run npm:eslint@9 -- --fix .` | Deno environments; permission flags required |
| `go run` | `go run golang.org/x/tools/cmd/goimports@v0.28.0 .` | Go packages; built-in |

**Always pin versions** (e.g., `eslint@9.0.0`) for reproducibility.

### Script design checklist

- [ ] No interactive prompts (agents run in non-interactive shells)
- [ ] Includes `--help` output with usage examples
- [ ] Clear error messages that guide the agent's next step
- [ ] Structured output (JSON, CSV) to stdout; diagnostics to stderr
- [ ] Idempotent (safe to retry; "create if not exists" pattern)
- [ ] Meaningful exit codes for different failure types
- [ ] Dry-run support (`--dry-run` flag) for destructive operations
- [ ] Reasonable output size (pagination or `--output` flag for large results)

## Decision guidance

### When to use X vs Y

| Scenario | Use this | Why |
|----------|----------|-----|
| Simple tool invocation (few flags) | One-off command (`npx`, `uvx`) | No script overhead; tool auto-resolves dependencies |
| Complex logic, reused across runs | Bundled script in `scripts/` | Tested once; reliable; agent doesn't reinvent it each run |
| Skill needs detailed reference material | Separate file in `references/` | Agents load on demand; keeps `SKILL.md` lean |
| Skill is too long (>500 lines, >5000 tokens) | Move details to `references/` | Progressive disclosure; agents load context on demand |
| Multiple tools or approaches work | Pick a default, mention alternatives briefly | Reduces decision paralysis; agent follows clear guidance |
| Skill should work across many prompts | Teach the *method*, not the specific answer | Reusable approach; generalizes to new tasks |
| Skill should work in only one way | Be prescriptive; include exact steps | Consistency matters; fragile operations need specificity |

### Triggering vs not triggering

| Problem | Solution |
|---------|----------|
| Skill doesn't trigger on relevant prompts | Broaden description; add context about when it applies; include keywords for indirect references |
| Skill triggers on irrelevant prompts | Add specificity; clarify what the skill does *not* do; distinguish from adjacent capabilities |
| Skill triggers inconsistently | Run multiple times (3+ per query); compute trigger rate; optimize against train set, validate on held-out queries |

## Workflow

### Creating a new skill

1. **Identify the expertise.** Start from real knowledge — a completed task, project artifacts, runbooks, or domain-specific context. Avoid generic LLM-generated procedures.

2. **Create the directory structure:**
   ```bash
   mkdir -p my-skill/scripts
   touch my-skill/SKILL.md
   ```

3. **Write the frontmatter:**
   ```yaml
   ---
   name: my-skill
   description: What this skill does and when to use it (1-1024 chars).
   ---
   ```

4. **Write the instructions.** Focus on what the agent *wouldn't* know without the skill: project conventions, non-obvious edge cases, specific tools/APIs, gotchas. Omit what the agent already knows (how HTTP works, what a CSV is).

5. **Add a gotchas section.** List environment-specific facts that defy reasonable assumptions. This is high-value content.

6. **Bundle scripts if needed.** Move complex logic into `scripts/` with inline dependency declarations (PEP 723 for Python, `npm:` for Deno, etc.).

7. **Test manually.** Run the skill with a real agent and observe whether it triggers and produces good outputs.

### Optimizing a skill's description

1. **Design trigger eval queries.** Create ~20 test queries: 8-10 that should trigger, 8-10 that shouldn't. Include near-misses (queries that share keywords but need something different).

2. **Split into train/validation sets.** Use ~60% for training (guiding improvements), ~40% for validation (checking generalization).

3. **Run evals.** For each query, run it through the agent 3+ times and compute trigger rate (fraction of runs where the skill was invoked).

4. **Identify failures in the train set.** Which should-trigger queries didn't? Which should-not-trigger queries did?

5. **Revise the description.** Broaden if should-trigger queries are failing; add specificity if should-not-trigger queries are false-triggering. Avoid overfitting to specific keywords.

6. **Repeat 3-5 until train set passes.** Then check validation set performance — select the iteration with the highest validation pass rate.

7. **Apply the result.** Update `SKILL.md`, verify it's under 1024 characters, and test with fresh queries.

### Evaluating skill output quality

1. **Design test cases.** Create 2-3 initial test cases in `evals/evals.json`: prompt, expected output, optional input files.

2. **Run with and without the skill.** For each test case, run it twice: once with the skill, once without (or with a previous version). Save outputs to separate directories.

3. **Capture timing data.** Record token count and duration for each run.

4. **Write assertions.** After seeing outputs, add verifiable statements (e.g., "output includes a bar chart", "report has at least 3 recommendations").

5. **Grade outputs.** Evaluate each assertion against actual outputs. Record PASS/FAIL with specific evidence.

6. **Aggregate results.** Compute pass rates, token usage, and timing deltas. Compare with-skill vs without-skill.

7. **Review with a human.** Check actual outputs for quality issues assertions didn't catch. Record specific feedback.

8. **Iterate.** Give eval signals (failed assertions, human feedback, execution transcripts) + current `SKILL.md` to an LLM. Ask it to propose improvements. Rerun all tests in a new `iteration-<N+1>/` directory.

9. **Stop when satisfied.** Feedback is consistently empty, results plateau, or you've reached your quality target.

## Common gotchas

- **Overfitting descriptions to specific queries.** Optimize against a train set; validate on held-out queries. Avoid adding keywords from failed queries — generalize instead.

- **Skills that are too broad.** A skill covering both database querying and administration is trying to do too much. Scope skills to coherent units of work.

- **Vague instructions.** "Handle errors appropriately" doesn't help. Be specific: "If the API returns a 429, retry with exponential backoff up to 3 times."

- **Ignoring edge cases in evals.** Include at least one test case that exercises a boundary condition or unusual request.

- **Assertions that always pass.** Remove assertions the model handles fine without the skill — they inflate pass rates without reflecting actual skill value.

- **Interactive prompts in scripts.** Agents run in non-interactive shells. Scripts that block on TTY input will hang indefinitely. Use command-line flags and environment variables instead.

- **Unstructured script output.** Free-form text is hard for agents to parse. Use JSON, CSV, or delimited formats.

- **Scripts without `--help`.** The agent learns your script's interface from `--help` output. Include usage examples.

- **Skill content lost during context compaction.** If your agent truncates old messages, protect skill instructions from pruning — losing them mid-conversation silently degrades performance.

- **Skill name doesn't match directory name.** The `name` field must match the parent directory name exactly.

- **Description over 1024 characters.** Descriptions are truncated at 1024 chars. Keep them concise.

- **Relative paths in scripts.** Use paths relative to the skill directory root. The agent resolves them automatically.

- **Bundling large reference files.** Keep individual reference files focused. Agents load them on demand, so smaller files mean less context overhead.

## Verification checklist

Before submitting a skill:

- [ ] `SKILL.md` exists and is valid YAML
- [ ] `name` field: 1-64 chars, lowercase + hyphens, matches parent directory
- [ ] `description` field: 1-1024 chars, describes what + when to use
- [ ] Skill triggers on relevant prompts (test with 3+ runs per query)
- [ ] Skill doesn't trigger on irrelevant prompts (test near-misses)
- [ ] Instructions focus on what the agent wouldn't know without the skill
- [ ] Gotchas section covers non-obvious environment-specific facts
- [ ] Scripts have `--help` output and clear error messages
- [ ] Scripts are idempotent (safe to retry)
- [ ] Scripts don't use interactive prompts
- [ ] Relative paths in scripts are relative to skill directory root
- [ ] Output is structured (JSON, CSV) not free-form text
- [ ] `SKILL.md` is under 500 lines; detailed content moved to `references/`
- [ ] All referenced files exist and are readable
- [ ] Skill produces good outputs on test cases (run evals if complex)
- [ ] Skill improves over baseline (with-skill vs without-skill comparison)

## Resources

**Comprehensive page-by-page navigation:** https://agentskills.io/llms.txt

**Critical documentation:**
- [Specification](https://agentskills.io/specification) — Complete format reference for `SKILL.md` files, directory structure, and frontmatter fields.
- [Best practices for skill creators](https://agentskills.io/skill-creation/best-practices) — How to write well-scoped skills, spend context wisely, calibrate control, and use effective instruction patterns.
- [Evaluating skill output quality](https://agentskills.io/skill-creation/evaluating-skills) — How to design test cases, run evals, grade outputs, and iterate systematically.

---

> For additional documentation and navigation, see: https://agentskills.io/llms.txt