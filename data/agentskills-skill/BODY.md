---
name: Agent
description: Use when creating, testing, optimizing, or implementing Agent Skills — the open format for extending AI agents with specialized instructions, scripts, and workflows. Reach for this skill when building skills for agents, evaluating skill quality, improving skill descriptions, or adding skills support to an agent product.
metadata:
    mintlify-proj: agent
    version: "1.0"
---

# Agent Skills

Agent Skills is an open format for packaging specialized instructions, scripts, and resources that agents can discover and use to perform tasks more accurately. A skill is a folder containing a `SKILL.md` file (metadata + instructions), optional `scripts/`, `references/`, and `assets/` directories, and supporting files.

## Product summary

Agent Skills are portable, version-controlled packages of procedural knowledge. Each skill is a directory with a required `SKILL.md` file (YAML frontmatter + Markdown instructions) and optional supporting files. The format enables skill authors to build capabilities once and deploy them across multiple agent products (Claude Code, VS Code with Copilot, OpenAI agents, and others). Key files: `SKILL.md` (required), `scripts/` (optional executables), `references/` (optional documentation), `assets/` (optional templates). Primary docs: https://agentskills.io

## When to use

Use this skill when:
- **Creating a new skill**: You're building a reusable package of instructions and scripts for agents to discover and use.
- **Evaluating skill quality**: You need to test whether a skill produces good outputs across varied prompts and edge cases.
- **Optimizing skill descriptions**: You're improving the `description` field so the skill triggers on the right prompts.
- **Implementing skills support**: You're adding skills discovery and activation to an agent product.
- **Debugging skill behavior**: A skill isn't triggering, activating, or executing as expected.
- **Bundling scripts and resources**: You're organizing executable code and reference materials for agents to load on demand.

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
| `metadata` | Key-value pairs for custom properties |
| `allowed-tools` | Space-separated list of pre-approved tools (experimental) |

### Directory structure

```
skill-name/
├── SKILL.md              # Required: metadata + instructions
├── scripts/              # Optional: executable code (Python, Bash, etc.)
├── references/           # Optional: detailed documentation
├── assets/               # Optional: templates, images, data files
└── evals/                # Optional: test cases for evaluation
    └── evals.json
```

### Running scripts in skills

| Tool | Command | When to use |
|------|---------|------------|
| `uvx` | `uvx ruff@0.8.0 check .` | Python packages; fast caching; requires separate install |
| `npx` | `npx eslint@9 --fix .` | npm packages; bundled with Node.js; pin versions |
| `pipx` | `pipx run 'black==24.10.0' .` | Python packages; mature alternative to uvx |
| `deno run` | `deno run npm:eslint@9 -- --fix .` | Scripts from URLs; requires permission flags |
| `go run` | `go run golang.org/x/tools/cmd/goimports@v0.28.0 .` | Go packages; built into go command |

### File references in SKILL.md

Use relative paths from the skill directory root:
```markdown
See [the reference guide](references/REFERENCE.md) for details.
Run: bash scripts/validate.sh "$INPUT_FILE"
```

## Decision guidance

### When to use scripts vs. one-off commands

| Scenario | Use scripts/ | Use one-off commands |
|----------|-------------|----------------------|
| Simple tool invocation with a few flags | ❌ | ✅ (e.g., `npx eslint@9 --fix .`) |
| Complex logic, error handling, or multiple steps | ✅ | ❌ |
| Reusable across multiple test cases | ✅ | ❌ |
| Dependency management needed | ✅ (PEP 723, Deno imports) | ✅ (uvx, npx, pipx) |

### When to keep instructions in SKILL.md vs. move to references/

| Content | Keep in SKILL.md | Move to references/ |
|---------|------------------|---------------------|
| Core workflow steps | ✅ | ❌ |
| Gotchas and edge cases | ✅ | ❌ |
| API error codes (reference only) | ❌ | ✅ |
| Detailed schema documentation | ❌ | ✅ |
| When to load: "Read references/api-errors.md if the API returns a non-200 status" | ✅ (instruction) | ✅ (file) |

### Skill scope: too narrow vs. too broad

| Scope | Problem | Example |
|-------|---------|---------|
| Too narrow | Multiple skills needed for one task; overhead | Separate skills for "extract PDF text" and "merge PDFs" |
| Too broad | Hard to activate precisely; conflicting instructions | One skill covering PDF work + database administration |
| Just right | Coherent unit of work; composes well | One skill for all PDF operations (extract, fill, merge) |

## Workflow

### Creating a skill

1. **Create the directory structure**: Make `skill-name/` with `SKILL.md` inside.
2. **Write frontmatter**: Add `name` (lowercase, hyphens, 1-64 chars) and `description` (1-1024 chars, include when to use).
3. **Write instructions**: Add Markdown body with step-by-step guidance, examples, and gotchas. Keep under 500 lines and 5,000 tokens.
4. **Add scripts** (optional): Create `scripts/` with executable code. Use PEP 723 (Python), Deno imports, or Bun auto-install for self-contained scripts.
5. **Add references** (optional): Create `references/` for detailed documentation. Tell the agent when to load each file.
6. **Validate**: Run `skills-ref validate ./skill-name` to check frontmatter and naming.

### Testing and optimizing a skill

1. **Write test cases**: Create `evals/evals.json` with 2-3 realistic prompts and expected outputs.
2. **Run with and without the skill**: Execute each test case twice — once with the skill, once without — to establish a baseline.
3. **Grade outputs**: For each test case, write assertions (verifiable statements about what success looks like) and grade them as PASS/FAIL with evidence.
4. **Analyze patterns**: Identify which assertions pass/fail consistently. Failed assertions point to gaps in instructions.
5. **Improve the skill**: Use failed assertions and execution transcripts to revise instructions. Focus on generalizing, not patching specific examples.
6. **Iterate**: Rerun all test cases in a new `iteration-N/` directory. Repeat until results plateau or you're satisfied.

### Optimizing skill descriptions

1. **Write trigger eval queries**: Create ~20 realistic prompts (8-10 should-trigger, 8-10 should-not-trigger). Include near-misses (queries that share keywords but need something different).
2. **Split into train/validation**: Use ~60% for training, ~40% for validation. Keep the split fixed across iterations.
3. **Test trigger rates**: Run each query 3 times through your agent. Compute trigger rate (fraction of runs where the skill was invoked).
4. **Identify failures**: Which should-trigger queries didn't trigger? Which should-not-trigger queries false-triggered?
5. **Revise the description**: Broaden if should-trigger queries are failing; narrow if should-not-trigger queries are false-triggering. Avoid overfitting to specific keywords.
6. **Validate generalization**: Check the validation set pass rate. Select the best iteration by validation performance, not the last one.
7. **Apply the result**: Update `description` in `SKILL.md`. Verify it's under 1024 characters. Test with 5-10 fresh queries as a sanity check.

### Adding skills support to an agent

1. **Discover skills**: Scan `.agents/skills/` and `.<client>/skills/` at project and user levels. Look for subdirectories containing `SKILL.md`.
2. **Parse metadata**: Extract `name` and `description` from YAML frontmatter. Store in a map keyed by name.
3. **Build catalog**: Create a structured list (XML, JSON, or text) of available skills with name, description, and location.
4. **Disclose to model**: Include the catalog in the system prompt or a dedicated skill-activation tool description. Add brief instructions on how to use skills.
5. **Activate on demand**: When the model or user selects a skill, deliver the full `SKILL.md` body (with or without frontmatter) into context.
6. **Protect from pruning**: If your agent truncates old messages, exempt skill content from compaction — losing instructions mid-conversation silently degrades performance.
7. **Deduplicate**: Track which skills are already in context. Skip re-injection if the model attempts to load a skill twice.

## Common gotchas

- **Description too vague**: "Helps with PDFs" won't trigger reliably. Be specific: "Extract PDF text, fill forms, merge files. Use when handling PDFs."
- **Name doesn't match directory**: The `name` field must match the parent directory name exactly. `name: pdf-processing` requires the directory to be `pdf-processing/`.
- **Frontmatter parsing fails**: Unquoted colons in YAML values break parsing. Quote values with colons: `description: "Use this skill when: the user asks about PDFs"`.
- **Scripts hang on interactive input**: Agents run in non-interactive shells. Never use `input()`, password prompts, or confirmation menus. Accept all input via flags, env vars, or stdin.
- **Script output too large**: Agent harnesses truncate output beyond ~10-30K characters. Default to summaries or support pagination flags (`--offset`, `--limit`).
- **Relative paths fail**: Use paths relative to the skill directory root (where `SKILL.md` lives). The agent resolves these automatically. Don't use absolute paths.
- **Skill activates on wrong prompts**: The description is doing too much work. Narrow it or add specificity about what the skill does *not* do.
- **Skill never activates**: The description may be too narrow, or the agent doesn't think it needs the skill for simple tasks. Test with varied prompts and check trigger rates.
- **Instructions too long**: Keep `SKILL.md` under 500 lines and 5,000 tokens. Move detailed reference material to `references/` and tell the agent when to load it.
- **Gotchas buried in references**: Keep non-obvious edge cases in `SKILL.md` where the agent reads them before encountering the situation. References are for details the agent can look up on demand.
- **Scripts with undeclared dependencies**: Use PEP 723 (Python), Deno imports, or Bun auto-install so scripts are self-contained. Don't assume tools are pre-installed.
- **Overfitting descriptions to test queries**: Use a train/validation split. Optimize against the train set; select the best iteration by validation performance.

## Verification checklist

Before submitting a skill:

- [ ] `SKILL.md` exists in the skill directory
- [ ] `name` field: 1-64 chars, lowercase + hyphens only, no leading/trailing hyphens, matches directory name
- [ ] `description` field: 1-1024 chars, describes what the skill does and when to use it
- [ ] Frontmatter is valid YAML (quote values with colons)
- [ ] Markdown body is clear and concise (under 500 lines, under 5,000 tokens)
- [ ] All scripts in `scripts/` have `--help` output and handle errors gracefully
- [ ] Scripts avoid interactive prompts (no `input()`, password dialogs, confirmation menus)
- [ ] Scripts use relative paths from the skill directory root
- [ ] All file references use relative paths (e.g., `references/REFERENCE.md`, `scripts/validate.sh`)
- [ ] Gotchas and non-obvious edge cases are in `SKILL.md`, not buried in references
- [ ] If using PEP 723 (Python), dependencies are declared in `# /// script` blocks
- [ ] Skill has been tested with at least 2-3 realistic prompts
- [ ] Trigger eval queries pass (should-trigger queries trigger, should-not-trigger queries don't)
- [ ] Assertions are specific and verifiable (not vague like "output is good")
- [ ] Skill adds value compared to baseline (agent without the skill)
- [ ] Run `skills-ref validate ./skill-name` and fix any errors

## Resources

**Comprehensive navigation**: https://agentskills.io/llms.txt — page-by-page listing of all documentation.

**Critical pages**:
- [Specification](https://agentskills.io/specification) — Complete format reference for `SKILL.md` files, frontmatter fields, directory structure, and validation.
- [Best practices for skill creators](https://agentskills.io/skill-creation/best-practices) — How to write well-scoped skills, spend context wisely, calibrate control, and use patterns like gotchas sections and validation loops.
- [Evaluating skill output quality](https://agentskills.io/skill-creation/evaluating-skills) — How to design test cases, run evals, grade outputs, and iterate systematically.

---

> For additional documentation and navigation, see: https://agentskills.io/llms.txt