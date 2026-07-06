---
stable_id: skills/skills-sh-microsoft-github-copilot-for-azure-appinsights-instrumentation
type: skills
title: skills-sh-microsoft-github-copilot-for-azure-appinsights-instrumentation
summary: |-
  # Auto-instrument app
  Use Azure Portal to auto-instrument a webapp hosted in Azure App Service for App Insights without making any code changes. Only the following types of app can be auto-instrumented. See [supported environments and resource providers](https://learn.microsoft.com/azure/azure-monitor/app/codeless-overview#supported-environments-languages-and-resource-providers).
  - ASP.NET Core app hosted in Azure App Service
  - Node.js app hosted in Azure App Service
  Construct a url to bring the user to the Application Insights blade in Azure Portal for the App Service App.
  ```
  https://portal.azure.com/#resource/subscriptions/{subscription_id}/resourceGroups/{resource_group_name}/providers/Microsoft.Web/sites/{app_service_name}/monitoringSettings
  ```
  Use the context or ask the user to get the subscription_id, resource_group_name, and the app_service_name hosting the webapp.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/microsoft/github-copilot-for-azure/HEAD/plugin/skills/appinsights-instrumentation/references/auto.md
license: ""
upstream_ref: https://skills.sh/microsoft/github-copilot-for-azure/appinsights-instrumentation
github_stars: 160
github_forks: 103
github_is_organization: true
retrieved_at: 2026-07-06T11:23:47.572Z
content_sha256: 8a0a447289e232dc54909017b4a490b46ca5fc1eb90099645eeb99b1b9a8a732
---
