---
name: idx-md
description: AgentSkill onboarding for https://idx.md. Learn how to browse the index and fetch markdown bodies.
---

# IDX.md

## Purpose
idx.md hosts markdown-only skills and documents for AI agents. Use this document as the entrypoint for how to navigate the index and fetch content.

## Index locations
- https://idx.md/index.md
- https://idx.md/data/index.md

Both URLs return the same listing.

## Index format
Each entry is a HEAD frontmatter block followed by a line containing the topic directory:

---
...frontmatter...
---
|/data/mintlify|

Use the topic name (e.g. `mintlify`) to locate the document files.

## How to fetch a document
1) Read https://idx.md/index.md.
2) Pick a topic from the `|/data/{topic}|` line.
3) Fetch the HEAD metadata at:
   - https://idx.md/{topic}
   - or https://idx.md/data/{topic}
4) Fetch the BODY at:
   - https://idx.md/{topic}/BODY.md

## URL map
- `/` and `/skill.md` -> this document (IDX.md)
- `/index.md` and `/data/index.md` -> listing
- `/{topic}` -> `/data/{topic}/HEAD.md`
- `/{topic}/HEAD.md` -> HEAD metadata
- `/{topic}/BODY.md` -> BODY content

## Constraints
- Markdown only: `.md` files are accepted.
- `.mdx` is rejected by filename.
