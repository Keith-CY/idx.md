---
name: core-format-and-structure
description: OpenAPI/Swagger 2.0 document format, file structure, and data types
---

# Format and Structure (Swagger 2.0)

Swagger 2.0 specs are JSON or YAML. Field names are **case sensitive**. The spec uses fixed fields (declared names) and patterned fields (regex for names, e.g. path keys, `^x-` extensions).

## File structure

- Single file by default; convention is `swagger.json`.
- Parts can be split via `$ref` (JSON Schema style). Only canonical dereferencing is supported for `$ref`.

## Data types

Based on **JSON Schema Draft 4**. Extra primitive: `"file"` for file upload/download (Parameter/Response).

### Primitives and format

| Common name | type     | format     |
|------------|----------|------------|
| integer    | integer  | int32      |
| long       | integer  | int64      |
| float      | number   | float      |
| double     | number   | double     |
| string     | string   | —          |
| byte       | string   | byte       |
| binary     | string   | binary     |
| boolean    | boolean  | —          |
| date       | string   | date       |
| dateTime   | string   | date-time  |
| password   | string   | password   |

`format` is an open string; values like `"email"`, `"uuid"` are allowed for documentation.

## Path templating and conventions

- **Path templating:** `{}` in paths marks replaceable path parameters (e.g. `/pets/{petId}`).
- **MIME types:** Must follow RFC 6838 (e.g. `application/json`, `application/vnd.github+json`).
- **HTTP status codes:** Per RFC 7231 / IANA registry.

## Key points

- Spec is JSON object(s); YAML is allowed as superset.
- All field names are case sensitive.
- Use `$ref` for reuse; only canonical dereferencing.

<!--
Source references:
- https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md
-->
