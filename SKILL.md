---
name: idx-md
description: AgentSkill onboarding for https://idx.md. Learn how to read the index and fetch BODY markdown.
---

# idx.md

## Purpose
idx.md hosts markdown-only skills and documents for AI agents. This file is the entrypoint for how to browse the index and fetch content.

## Index locations
- https://idx.md/index.md
- https://idx.md/data/index.md

Both URLs return the same listing.

## Index entry format
Each entry is a HEAD frontmatter block followed by a topic directory line:

---
...frontmatter...
---
|/data/mintlify|

The topic name is the directory (example: `mintlify`).

## How to fetch a document
1) Read https://idx.md/index.md.
2) Pick a topic from the `|/data/{topic}|` line.
3) Fetch HEAD metadata:
   - https://idx.md/{topic}
   - or https://idx.md/data/{topic}/HEAD.md
4) Fetch the BODY content:
   - https://idx.md/{topic}/BODY.md

## URL map
- `/` and `/skill.md` and `/SKILL.md` -> this document (SKILL.md)
- `/index.md` and `/data/index.md` -> listing
- `/{topic}` -> `/data/{topic}/HEAD.md`
- `/{topic}/HEAD.md` -> HEAD metadata
- `/{topic}/BODY.md` -> BODY content

## Constraints
- Markdown only: `.md` files are accepted.
- `.mdx` is rejected by filename.
