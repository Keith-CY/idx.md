---
name: Agent
description: Documentation and capabilities reference for Agent
metadata:
    mintlify-proj: agent
    version: "1.0"
---

## Capabilities

Agent Skills enable AI agents to extend their capabilities with specialized knowledge and workflows. Agents can discover and load skills on demand to perform complex tasks more accurately and efficiently. Skills provide domain expertise, new capabilities (like creating presentations or analyzing datasets), repeatable workflows, and interoperability across different agent products. The progressive disclosure model keeps agents fast by loading only metadata at startup and full instructions when needed.

## Skills

### Skill Structure and Format
- **SKILL.md File**: Every skill is a folder containing a required SKILL.md file with YAML frontmatter and Markdown instructions
- **Folder Structure**: Skills can include optional subdirectories for scripts, references, and assets
  - `SKILL.md` - Required metadata and instructions
  - `scripts/` - Optional executable code (Python, Bash, JavaScript)
  - `references/` - Optional documentation files (REFERENCE.md, FORMS.md, domain-specific files)
  - `assets/` - Optional static resources (templates, images, data files)

### Frontmatter Metadata
- **Required Fields**:
  - `name`: Short identifier (max 64 characters, lowercase letters/numbers/hyphens only)
  - `description`: When to use the skill (max 1024 characters)
- **Optional Fields**:
  - `license`: License name or reference to bundled license file
  - `compatibility`: Environment requirements (max 500 characters) - indicates intended product, required system packages, network access needs
  - `metadata`: Arbitrary key-value mapping for additional metadata (e.g., author, version)
  - `allowed-tools`: Space-delimited list of pre-approved tools the skill may use (experimental)

### Skill Discovery and Loading
- **Filesystem-based agents**: Scan configured directories for skill folders, activate skills via shell commands like `cat /path/to/my-skill/SKILL.md`
- **Tool-based agents**: Implement custom tools to trigger skills and access bundled assets without filesystem access
- **Metadata parsing**: Extract only frontmatter at startup to minimize context usage (~50-100 tokens per skill)
- **Progressive disclosure**: Load full instructions only when skill is activated, reference files on demand

### Skill Content and Instructions
- **Body content**: Markdown instructions with no format restrictions
- **Recommended sections**: Step-by-step instructions, examples of inputs/outputs, common edge cases
- **Size optimization**: Keep main SKILL.md under 500 lines, move detailed reference material to separate files
- **Context efficiency**: Full instructions should be under 5000 tokens recommended

### Scripts and Executable Code
- **Self-contained**: Scripts should be self-contained or clearly document dependencies
- **Error handling**: Include helpful error messages and handle edge cases gracefully
- **Language support**: Common options include Python, Bash, and JavaScript (depends on agent implementation)
- **Tool restrictions**: Use `allowed-tools` field to pre-approve specific tools agents can execute

### Reference Materials and Assets
- **References directory**: Additional documentation loaded on demand
  - REFERENCE.md for detailed technical reference
  - FORMS.md for form templates or structured data formats
  - Domain-specific files (finance.md, legal.md, etc.)
- **Assets directory**: Static resources including templates, images, diagrams, and data files
- **On-demand loading**: Agents load reference files only when needed to conserve context

## Workflows

### Integrating Skills into an Agent
1. **Discover skills**: Scan configured directories for folders containing SKILL.md files
2. **Parse metadata**: Extract YAML frontmatter from each SKILL.md to get name, description, and other metadata
3. **Inject into context**: Include skill metadata in system prompt using XML format:
   ```xml
   <available_skills>
     <skill>
       <name>pdf-processing</name>
       <description>Extracts text and tables from PDF files, fills forms, merges documents.</description>
       <location>/path/to/skills/pdf-processing/SKILL.md</location>
     </skill>
   </available_skills>
   ```
4. **Match tasks to skills**: When user provides a task, match it to relevant skills based on descriptions
5. **Activate skill**: Load full SKILL.md content when skill is selected
6. **Execute instructions**: Follow skill instructions, loading referenced files or executing scripts as needed

### Creating and Validating Skills
1. **Create skill folder**: Set up directory structure with SKILL.md and optional subdirectories
2. **Write frontmatter**: Add required name and description fields, plus optional license, compatibility, and metadata
3. **Write instructions**: Create Markdown body with clear step-by-step instructions
4. **Add resources**: Include scripts, references, and assets as needed
5. **Validate skill**: Use skills-ref library to validate the skill directory structure and format
6. **Generate prompt XML**: Use `skills-ref to-prompt <path>` to generate XML for system prompts

### Using the Reference Implementation
- **Validate skill**: `skills-ref validate <path>` - Check skill directory structure and SKILL.md format
- **Generate prompt XML**: `skills-ref to-prompt <path>...` - Create `<available_skills>` XML for agent system prompts
- **Library utilities**: Use Python utilities from skills-ref for programmatic skill handling

## Integration

### Agent Integration Approaches
- **Filesystem-based agents**: Operate in bash/unix environments with full filesystem access. Skills are activated when agents issue shell commands to read SKILL.md files. Bundled resources accessed through shell commands. Most capable option.
- **Tool-based agents**: Function without dedicated computer environment. Implement custom tools allowing models to trigger skills and access bundled assets. Specific tool implementation is up to the developer.

### Context Management
- **Metadata injection**: Include skill name, description, and location in system prompt (50-100 tokens per skill)
- **Progressive loading**: Load only metadata at startup, full instructions on activation, reference files on demand
- **Token efficiency**: Keep metadata concise to minimize context overhead while maintaining agent awareness of available skills

### Compatibility and Requirements
- **Environment specification**: Use compatibility field to indicate intended product, required system packages, or network access needs
- **Tool approval**: Use allowed-tools field to specify pre-approved tools agents can execute (experimental feature)
- **Cross-product reuse**: Skills are portable and can be reused across different skills-compatible agent products

## Context

### Why Agent Skills Matter
Agents are increasingly capable but often lack the context needed for reliable real-world work. Skills solve this by providing procedural knowledge and company-, team-, and user-specific context that agents can load on demand. This enables:
- **Domain expertise**: Package specialized knowledge from legal review processes to data analysis pipelines
- **New capabilities**: Give agents abilities like creating presentations, building MCP servers, or analyzing datasets
- **Repeatable workflows**: Turn multi-step tasks into consistent and auditable workflows
- **Organizational knowledge**: Capture and version-control company-specific processes in portable packages

### Skill Design Principles
- **Self-documenting**: Skill authors and users can read SKILL.md and understand what it does, making skills easy to audit and improve
- **Extensible**: Skills can range from simple text instructions to complex packages with executable code, assets, and templates
- **Portable**: Skills are just files, making them easy to edit, version, and share across teams and products
- **Efficient context usage**: Progressive disclosure keeps agents fast while providing access to detailed instructions on demand

### Supported Platforms
Agent Skills are supported by leading AI development tools and are designed for interoperability across different agent products. The open format enables skill authors to build once and deploy across multiple compatible platforms.

---

> For additional documentation and navigation, see: https://agentskills.io/llms.txt