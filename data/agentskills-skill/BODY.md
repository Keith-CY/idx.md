---
name: Agent
description: Documentation and capabilities reference for Agent
metadata:
    mintlify-proj: agent
    version: "1.0"
---

## Capabilities

Agent Skills enable AI agents to extend their capabilities with specialized knowledge and workflows. Agents can discover, load, and execute skills to perform domain-specific tasks more accurately and efficiently. Skills provide procedural knowledge, company-specific context, and reusable workflows that agents can activate on demand, allowing them to handle complex tasks across multiple domains without requiring constant retraining or context expansion.

## Skills

### Skill Discovery and Loading
- **Progressive Disclosure**: Agents load only skill metadata (name and description) at startup, keeping initial context usage minimal (~100 tokens per skill)
- **Metadata Parsing**: Extract YAML frontmatter from SKILL.md files to identify available skills
- **Skill Activation**: Load full SKILL.md instructions when a task matches a skill's description
- **Resource Access**: Load bundled scripts, templates, and reference materials as needed during execution

### Skill Structure and Format
- **SKILL.md File**: Every skill requires a SKILL.md file with YAML frontmatter and Markdown instructions
- **Required Frontmatter Fields**:
  - `name`: Short identifier (max 64 characters, lowercase letters, numbers, hyphens only)
  - `description`: When to use the skill (max 1024 characters)
- **Optional Frontmatter Fields**:
  - `license`: License name or reference to bundled license file
  - `compatibility`: Environment requirements (intended product, system packages, network access)
  - `metadata`: Arbitrary key-value mapping for additional metadata
  - `allowed-tools`: Space-delimited list of pre-approved tools (experimental)

### Bundled Resources
- **Scripts Directory**: Executable code (Python, Bash, JavaScript) that agents can run
  - Should be self-contained or clearly document dependencies
  - Include helpful error messages and edge case handling
- **References Directory**: Documentation and reference materials
- **Assets Directory**: Static resources including templates, images, and data files
- **Skill Folder Structure**:
  ```
  my-skill/
  ├── SKILL.md          # Required: instructions + metadata
  ├── scripts/          # Optional: executable code
  ├── references/       # Optional: documentation
  └── assets/           # Optional: templates, resources
  ```

### Instruction Content
- **Body Content**: Markdown instructions with no format restrictions
- **Recommended Sections**:
  - Step-by-step instructions for performing the task
  - Examples of inputs and outputs
  - Common edge cases and how to handle them
- **Context Efficiency**: Keep main SKILL.md under 500 lines (recommended < 5000 tokens); move detailed reference material to separate files

### Integration Approaches

**Filesystem-based Agents**:
- Operate within a computer environment (bash/unix)
- Skills are activated when models issue shell commands like `cat /path/to/my-skill/SKILL.md`
- Bundled resources are accessed through shell commands
- Most capable option with full access to filesystem

**Tool-based Agents**:
- Function without a dedicated computer environment
- Implement tools allowing models to trigger skills and access bundled assets
- Specific tool implementation is up to the developer
- Location field can be omitted from metadata

### Context Injection
- **System Prompt Integration**: Include skill metadata in the system prompt using XML format
- **XML Format Example**:
  ```xml
  <available_skills>
    <skill>
      <name>pdf-processing</name>
      <description>Extracts text and tables from PDF files, fills forms, merges documents.</description>
      <location>/path/to/skills/pdf-processing/SKILL.md</location>
    </skill>
  </available_skills>
  ```
- **Context Budget**: Each skill adds roughly 50-100 tokens to context; keep metadata concise
- **Filesystem Agents**: Include absolute path to SKILL.md in location field
- **Tool-based Agents**: Location field can be omitted

### Skill Validation and Tools
- **skills-ref Library**: Python utilities and CLI for working with skills
- **Validation**: `skills-ref validate <path>` - Validate a skill directory structure and format
- **Prompt Generation**: `skills-ref to-prompt <path>...` - Generate `<available_skills>` XML for agent prompts
- **Reference Implementation**: Use library source code as implementation reference

## Workflows

### Creating and Deploying a Skill
1. Create a skill folder with a SKILL.md file
2. Define required frontmatter fields (name and description)
3. Write clear Markdown instructions with step-by-step guidance
4. Add optional bundled resources (scripts, templates, references)
5. Validate the skill using `skills-ref validate <path>`
6. Generate prompt XML using `skills-ref to-prompt <path>`
7. Deploy to a location accessible by agents (filesystem or tool-based)

### Agent Skill Activation Workflow
1. **Discovery Phase**: Agent loads metadata from all available skills at startup
2. **Matching Phase**: Agent evaluates user task against skill descriptions
3. **Activation Phase**: When task matches, agent loads full SKILL.md instructions into context
4. **Execution Phase**: Agent follows instructions, loading referenced files or executing scripts as needed
5. **Completion**: Agent completes task using skill knowledge and bundled resources

### Integrating Skills into an Agent
1. Configure skill directories where agent will discover skills
2. Implement metadata parsing to extract SKILL.md frontmatter
3. Implement skill matching logic based on task descriptions
4. Load full SKILL.md content when skill is activated
5. Execute bundled scripts and access resources as needed
6. Inject skill metadata into system prompt using XML format
7. Manage context efficiently using progressive disclosure

## Integration

### Multi-Product Compatibility
- **Interoperability**: Reuse the same skill across different skills-compatible agent products
- **Portable Format**: Skills are just files, making them easy to edit, version, and share
- **Self-Documenting**: SKILL.md files are human-readable, making skills easy to audit and improve

### Organizational Knowledge Capture
- **Domain Expertise**: Package specialized knowledge into reusable instructions (legal review, data analysis, etc.)
- **Company-Specific Context**: Embed organizational processes and best practices in skills
- **Version Control**: Skills can be tracked in version control systems for change management
- **Repeatable Workflows**: Turn multi-step tasks into consistent and auditable workflows

### Agent Platform Support
- Skills are supported by leading AI development tools and agent platforms
- Compatible with both filesystem-based and tool-based agent architectures
- Works with major LLM platforms (e.g., Claude) through system prompt injection

## Context

### Progressive Disclosure Pattern
Agent Skills use a three-tier context loading strategy to manage token efficiency:
- **Tier 1 - Metadata** (~100 tokens): Name and description loaded at startup for all skills
- **Tier 2 - Instructions** (< 5000 tokens recommended): Full SKILL.md loaded when skill is activated
- **Tier 3 - Resources** (as needed): Scripts, references, and assets loaded only when required

This approach keeps agents fast while providing access to detailed context on demand.

### Skill Naming Conventions
- Use lowercase letters, numbers, and hyphens only
- Must not start or end with a hyphen
- Maximum 64 characters
- Examples: `pdf-processing`, `data-analysis`, `legal-review`

### When to Use Skills
- **Domain Expertise**: Provide specialized knowledge for specific domains or industries
- **New Capabilities**: Give agents abilities they don't have natively (presentations, MCP servers, datasets)
- **Repeatable Processes**: Standardize multi-step workflows across teams
- **Context Management**: Provide company-, team-, or user-specific context on demand

### Skill Design Principles
- **Self-contained**: Scripts should include dependencies or document them clearly
- **Efficient**: Keep SKILL.md focused; reference external files for detailed content
- **Auditable**: Write clear instructions that humans can understand and verify
- **Extensible**: Support multiple languages and execution environments
- **Portable**: Avoid hardcoded paths; use relative references where possible

---

> For additional documentation and navigation, see: https://agentskills.io/llms.txt