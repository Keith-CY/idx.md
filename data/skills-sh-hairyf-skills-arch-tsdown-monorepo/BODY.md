---
name: core-overview
description: arch-tsdown-monorepo purpose, structure, and when to use it
---

# arch-tsdown-monorepo Overview

arch-tsdown-monorepo is a **pnpm monorepo** starter for TypeScript libraries, based on [hairyf/starter-monorepo](https://github.com/hairyf/starter-monorepo). Each package uses **tsdown** for building. Use this skill when scaffolding or maintaining a multi-package TypeScript/ESM library with shared tooling and workspace dependencies.

## What It Is

- A **monorepo starter** for publishing multiple TypeScript packages from one repo
- Build: **tsdown** per package (same pattern as arch-tsdown)
- Workspace: **pnpm** with `packages/*`, **catalogs** for shared devDependency versions
- Tooling: ESLint (@antfu/eslint-config), Vitest (root + per-package), TypeScript, npm Trusted Publisher for CI release

## Project Structure

```
.
├── packages/
│   ├── core/           # Example main package (depends on utils)
│   │   ├── src/index.ts
│   │   ├── test/
│   │   ├── tsdown.config.ts
│   │   └── package.json
│   └── utils/          # Example shared sub-package
│       ├── src/index.ts
│       ├── test/
│       ├── tsdown.config.ts
│       └── package.json
├── test/               # Root-level tests (e.g. cross-package imports)
├── pnpm-workspace.yaml # packages: packages/*, catalogs for versions
├── vitest.config.ts   # projects: root + packages/*
├── package.json       # private: true, scripts run across workspace
└── .github/workflows/  # CI + release (tag v* → publish)
```

## When to Use

- You need **multiple publishable packages** in one repo (e.g. `@scope/core`, `@scope/utils`)
- You want **workspace dependencies** (`workspace:*`) and shared **pnpm catalogs** for versions
- You prefer the same **tsdown + Vitest + ESLint** setup as arch-tsdown, applied per package

## Key Conventions

- **Root:** `package.json` is `private: true`; scripts like `build` and `typecheck` use `pnpm -r run ...`
- **Packages:** Each has its own `tsdown.config.ts`, `package.json` exports, and optional `vitest` tests
- **Exports:** Use tsdown’s `exports: { enabled: true, devExports: true }` so dev points to `src`, publish to `dist/`

<!--
Source references:
- https://github.com/hairyf/starter-monorepo
-->
