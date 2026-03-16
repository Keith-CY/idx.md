---
stable_id: skills/skills-sh-microsoft-github-copilot-for-azure-azure-messaging
type: skills
title: skills-sh-microsoft-github-copilot-for-azure-azure-messaging
summary: >-
  # Service-Level Troubleshooting

  Covers connectivity, firewall, and network issues that apply regardless of SDK
  language.

  ## Permanent Connectivity Issues

  If the client **cannot connect at all**:

  1. **Verify connection string** — Get from Azure portal. For **Event Hubs
  (Kafka endpoint)** clients, also check `producer.config` / `consumer.config`.

  2. **Check service outage** — [Azure status
  page](https://azure.status.microsoft/status)

  3. **Firewall / ports** — Open AMQP 5671 and 5672, HTTPS 443. For **Event Hubs
  (Kafka endpoint)** only, also open Kafka 9093. Use WebSockets (port 443) as
  fallback.

  4. **IP firewall** — If enabled on namespace, ensure client IP is allowed.

  5. **VNet / private endpoints** — Confirm app runs in correct subnet. Check
  service endpoint and NSG rules.

  6. **Proxy / SSL** — Intercepting proxies can cause SSL handshake failures.
  Test with proxy disabled.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/microsoft/github-copilot-for-azure/HEAD/plugin/skills/azure-messaging/references/service-troubleshooting.md
license: ""
upstream_ref: https://skills.sh/microsoft/github-copilot-for-azure/azure-messaging
github_stars: 114
github_forks: 72
github_is_organization: true
retrieved_at: 2026-03-16T17:27:28.855Z
content_sha256: 206d243b21e22a129b68a4ba36729e18b740bffaf2dfa1aecc9fd36dc7d4df02
---
