---
stable_id: skills/skills-sh-cazala-webgpu-skill-webgpu
type: skills
title: skills-sh-cazala-webgpu-skill-webgpu
summary: |-
  # WebGPU Quick Reference
  ## Device + context
  ```ts
  const adapter = await navigator.gpu?.requestAdapter();
  if (!adapter) throw new Error("WebGPU not supported");
  const device = await adapter.requestDevice();
  const context = canvas.getContext("webgpu");
  const format = navigator.gpu.getPreferredCanvasFormat();
  context.configure({ device, format, alphaMode: "premultiplied" });
  ```
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/cazala/webgpu-skill/main/REFERENCE.md
license: ""
upstream_ref: https://skills.sh/cazala/webgpu-skill/webgpu
retrieved_at: 2026-02-05T09:48:56.086Z
content_sha256: 44cd05656c416b86a9c9b023e9955feaf4eebb35e45cb99bb8a5715422cc3872
---
