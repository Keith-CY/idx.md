---
stable_id: skills/skills-sh-microsoft-github-copilot-for-azure-azure-diagnostics
type: skills
title: skills-sh-microsoft-github-copilot-for-azure-azure-diagnostics
summary: >-
  # Container Apps Troubleshooting

  ### Common Issues Matrix

  | Symptom | Likely Cause | Quick Fix |

  |---------|--------------|-----------|

  | Image pull failure | ACR credentials missing | `az containerapp registry set
  --identity system` |

  | ACR build fails | ACR Tasks disabled (free sub) | Build locally with Docker
  |

  | Cold start timeout | min-replicas=0 | `az containerapp update --min-replicas
  1` |

  | Port mismatch | Wrong target port | Check Dockerfile EXPOSE matches ingress
  |

  | App keeps restarting | Health probe failing | Verify `/health` endpoint |

  ### Image Pull Failures
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/microsoft/github-copilot-for-azure/HEAD/plugin/skills/azure-diagnostics/references/container-apps/README.md
license: ""
upstream_ref: https://skills.sh/microsoft/github-copilot-for-azure/azure-diagnostics
github_stars: 160
github_forks: 103
github_is_organization: true
retrieved_at: 2026-07-28T09:30:18.964Z
content_sha256: 8d7772007db8635af33cce1dde78f82e22f8c9df143e10a960e841cb2e479dd4
---
