---
name: kubernetes
description: >
  Kubernetes & OpenShift Platform Agent Swarm — A coordinated multi-agent system for
  cluster operations. Includes Orchestrator (Jarvis), Cluster Ops (Atlas), GitOps (Flow),
  Security (Shield), Observability (Pulse), Artifacts (Cache), and Developer Experience (Desk).
  Pure instruction-based skill — no executable scripts.
metadata:
  author: kcns008
  version: 2.1.0
  agent_name: Swarm
  agent_role: Platform Agent Swarm (All Agents)
  session_key: "agent:platform:swarm"
  heartbeat: "*/5 * * * *"
  platforms:
    - openshift
    - kubernetes
    - eks
    - aks
    - gke
    - rosa
    - aro
  install_type: "instruction-only"
  always: false
  model_invocation: false
  requires:
    env:
      - KUBECONFIG
    binaries:
      - kubectl
  optional_binaries:
    - oc
    - helm
    - jq
  optional_env:
    - AWS_ACCESS_KEY_ID
    - AWS_SECRET_ACCESS_KEY
    - AZURE_CLIENT_ID
    - AZURE_CLIENT_SECRET
    - AZURE_TENANT_ID
    - GOOGLE_APPLICATION_CREDENTIALS
  credentials:
    - kubeconfig: "KUBECONFIG path or ~/.kube/config for cluster access"
    - cloud: "Optional cloud provider credentials for managed clusters (AWS/Azure/GCP)"
    - registry: "Optional container registry credentials for image operations"
---

# Kubernetes Agent Swarm — Platform Operations

A multi-agent system for Kubernetes and OpenShift platform operations. Seven specialized agents work together as a coordinated swarm.

## Runtime Requirements

| Requirement | Required | Description |
|-------------|----------|-------------|
| `kubectl` | ✅ Yes | Kubernetes CLI — must be in PATH |
| `oc` | Optional | OpenShift CLI — needed for OCP/ROSA/ARO |
| `helm` | Optional | For GitOps agent Helm operations |
| `jq` | Optional | For JSON output parsing |
| `KUBECONFIG` | ✅ Yes | Cluster access via env var or `~/.kube/config` |

Optional cloud CLIs (`aws`, `az`, `gcloud`, `rosa`) — only needed for managed cluster operations.

## Installation

```bash
clawhub install kubernetes
```

Or install individual agents:
```bash
clawhub install orchestrator
clawhub install cluster-ops
clawhub install gitops
clawhub install security
clawhub install observability
clawhub install artifacts
clawhub install developer-experience
```

## The Swarm — Agent Roster

| Agent | Code Name | Domain |
|-------|-----------|--------|
| Orchestrator | Jarvis | Task routing, coordination, standups |
| Cluster Ops | Atlas | Cluster lifecycle, nodes, upgrades |
| GitOps | Flow | ArgoCD, Helm, Kustomize, deploys |
| Security | Shield | RBAC, policies, secrets, scanning |
| Observability | Pulse | Metrics, logs, alerts, incidents |
| Artifacts | Cache | Registries, SBOM, promotion, CVEs |
| Developer Experience | Desk | Namespaces, onboarding, support |

## How It Works

This is an **instruction-only** skill. Agents receive markdown instructions describing what commands to run and how to interpret output. No executable scripts are included — the agent translates instructions into actions using the host's installed CLI tools.

### Session Setup

Before using the swarm, establish cluster context:

```bash
# Verify access
kubectl cluster-info
kubectl get nodes

# For OpenShift
oc status
```

### Agent Communication

Agents communicate via @mentions in shared task comments:
```
@Shield Please review the RBAC for payment-service v3.2 before I sync.
@Pulse Is the CPU spike related to the deployment or external traffic?
@Atlas The staging cluster needs 2 more worker nodes.
```

### Escalation Path
1. Agent detects issue
2. Agent attempts resolution within guardrails
3. If blocked → @mention another agent or escalate to human
4. P1 incidents → all relevant agents auto-notified

## Heartbeat Schedule

```
*/5  * * * *  Atlas, Pulse, Shield     (fast response: incidents, alerts, CVEs)
*/10 * * * *  Flow, Cache              (scheduled: deploys, promotions)
*/15 * * * *  Desk, Orchestrator       (batch: onboarding, standups)
```

## Agent Capabilities

### What Agents CAN Do
- Read cluster state (`kubectl get`, `kubectl describe`, `oc get`)
- Deploy via GitOps (`argocd app sync`, Flux reconciliation)
- Create documentation and reports
- Investigate and triage incidents
- Provision standard resources (namespaces, quotas, RBAC)
- Run health checks and audits
- Query metrics and logs

### What Agents CANNOT Do (Human-in-the-Loop Required)
- Delete production resources
- Modify cluster-wide policies
- Make direct changes to secrets without rotation workflow
- Perform irreversible cluster upgrades
- Approve production deployments (can prepare, human approves)

## Key Principles

- **Roles over genericism** — Each agent has a defined domain
- **Files over mental notes** — Only files persist between sessions
- **Human-in-the-loop** — Critical actions require approval
- **Guardrails over freedom** — Define what agents can and cannot do
- **Audit everything** — Every action logged

## File Structure

```
kubernetes/
├── SKILL.md                    # This file — combined swarm
├── AGENTS.md                   # Swarm configuration and protocols
├── skills/
│   ├── orchestrator/SKILL.md   # Jarvis — task routing
│   ├── cluster-ops/SKILL.md    # Atlas — cluster operations
│   ├── gitops/SKILL.md         # Flow — GitOps
│   ├── security/SKILL.md       # Shield — security
│   ├── observability/SKILL.md  # Pulse — monitoring
│   ├── artifacts/SKILL.md      # Cache — artifacts
│   └── developer-experience/SKILL.md  # Desk — DevEx
├── memory/MEMORY.md            # Long-term agent memory
├── working/WORKING.md          # Session progress
└── logs/LOGS.md                # Action audit trail
```

## Detailed Agent Documentation

See individual SKILL.md files for each agent's full capabilities, personality, and workflow instructions.
