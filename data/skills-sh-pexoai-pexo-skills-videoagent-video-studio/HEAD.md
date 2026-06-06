---
stable_id: skills/skills-sh-pexoai-pexo-skills-videoagent-video-studio
type: skills
title: skills-sh-pexoai-pexo-skills-videoagent-video-studio
summary: >-
  # Video Generation Models

  All models supported by the video-studio proxy. Pass `model` in the request
  body or use `--model` in the CLI.

  For per-model endpoint details and input parameters, see
  [calling_guide.md](calling_guide.md).

  ## Generation Modes

  | Mode | Description | Supported Models |

  |------|-------------|-----------------|

  | **text-to-video** | Text prompt only → video | minimax, kling, veo, hunyuan,
  grok, seedance |

  | **image-to-video** | Single image + prompt → animated clip | minimax, kling,
  veo, pixverse, grok, seedance |

  | **reference-based** | Reference images or video → consistent output |
  minimax, kling, veo, hunyuan, grok, seedance |

  Reference-based generation uses a separate endpoint per model. Supported
  models return `ref: true` and `referenceToVideoEndpoint` in `GET
  /api/generate`.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/pexoai/pexo-skills/HEAD/skills/videoagent-video-studio/references/models.md
license: ""
upstream_ref: https://skills.sh/pexoai/pexo-skills/videoagent-video-studio
github_stars: 299
github_forks: 14
github_is_organization: false
retrieved_at: 2026-06-06T07:58:45.001Z
content_sha256: c18c3b7a89765b6c1292e074c22ed56a6334b71e91ef192fb86de60dcd754f74
---
