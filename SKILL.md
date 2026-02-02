---
name: idx-md
description: AgentSkill for https://idx.md. Use the index to locate AI agent library topics and fetch HEAD/BODY markdown.
---

# idx.md

## Purpose
- Markdown registry for AI agent libraries and resources.
- Agents can browse to learn everything they could use, then fetch the exact markdown.

## Index locations
- https://idx.md/index.md
- https://idx.md/data/index.md

## Index entry format
- Each entry is a HEAD frontmatter block followed by a topic line.
- Topic line format: `|/data/{topic}|`

---
...frontmatter...
---
|/data/openclaw|

## How to fetch
- Read `https://idx.md/index.md`.
- Choose `{topic}` from the `|/data/{topic}|` line.
- HEAD metadata: `https://idx.md/{topic}` (or `/data/{topic}/HEAD.md`)
- BODY content: `https://idx.md/{topic}/BODY.md`

## URL map
- `/`, `/skill.md`, `/SKILL.md` -> this document
- `/index.md`, `/data/index.md` -> index listing
- `/{topic}` -> `/data/{topic}/HEAD.md`
- `/{topic}/HEAD.md` -> HEAD metadata
- `/{topic}/BODY.md` -> BODY content

## Constraints
- `.md` only; `.mdx` rejected by filename.

## Example flow
- Read `/index.md` -> pick `openclaw` -> fetch `/openclaw/HEAD.md` -> fetch `/openclaw/BODY.md`.
