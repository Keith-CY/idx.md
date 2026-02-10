---
name: core-overview
description: knitwork-x purpose, installation, and when to use
---

# knitwork-x Overview

knitwork-x provides **utilities to generate JavaScript and TypeScript code** as strings. It is forked from [knitwork](https://github.com/unjs/knitwork) and adds comprehensive TypeScript helpers: ESM, strings, variables, classes, interfaces, functions, types, control flow, and serialization.

## When to Use

- **Code generators:** Build tools that emit JS/TS source (e.g. schema-to-types, API clients).
- **Dynamic modules:** Generate import/export and function/class bodies at runtime.
- **AST-to-code:** Turn structured data into code strings without a full AST library.

All exported helpers are **pure**: same inputs and options yield stable string output; no side effects or input mutation.

## Installation

```bash
pnpm add knitwork-x
# or npm / yarn / bun
```

## Usage

Import the helpers you need and call them to get code strings:

```ts
import { genImport, genClass, genConstructor } from 'knitwork-x'

// ESM import
const imp = genImport('vue', ['ref', 'computed'])
// => import { ref, computed } from "vue";

// Class with constructor
const cls = genClass('Counter', [
  genConstructor([], ['super();'])
], { export: true })
// => export class Counter { constructor() { super(); } }
```

## Key Points

- Every `gen*` function returns a **string** (code fragment).
- Use **options** (e.g. `export`, `singleQuotes`) to control style; default `options = {}`.
- Compose helpers: e.g. pass `genConstructor(...)` as a member to `genClass(...)`.
- For quoted/escaped strings, use `genString(input, options)` so quote style is consistent.

<!-- Source references: docs/1.guide/1.index.md, README.md -->
