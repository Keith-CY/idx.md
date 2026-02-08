export type VerticalCuration = {
  fit: readonly string[];
  noFit: readonly string[];
  goldPathTopics: readonly string[];
  playbookTopic: string;
  nextHops: readonly string[];
};

const SCENARIO_CURATION = new Map<string, VerticalCuration>([
  [
    "customer-support",
    {
      fit: [
        "You need to answer, triage, or resolve customer requests across email/chat/tickets.",
        "You want repeatable workflows for support ops (handoffs, SLAs, macros, audits).",
      ],
      noFit: [
        "You are doing product discovery or long-form research (start from Search & Research).",
        "You need deep engineering incident response (start from DevOps & Cloud).",
      ],
      goldPathTopics: [
        "openclaw-mrgoodb-zendesk",
        "openclaw-mrgoodb-intercom",
        "openclaw-byungkyu-gmail",
        "openclaw-mrgoodb-twilio",
      ],
      playbookTopic: "playbook-scenario-customer-support",
      nextHops: [
        "/category/communication/index.md",
        "/category/productivity-tasks/index.md",
        "/category/search-research/index.md",
      ],
    },
  ],
  [
    "content-marketing",
    {
      fit: [
        "You need to create, repurpose, and distribute content with measurable outcomes.",
        "You want a tight loop from idea -> draft -> assets -> publish -> iterate.",
      ],
      noFit: [
        "You are primarily doing outbound sales sequences (start from Marketing & Sales or Browser Automation).",
        "You need deep video editing workflows (start from Image & Video Generation).",
      ],
      goldPathTopics: [
        "openclaw-openclaw-ab-test-setup",
        "openclaw-openclaw-abm-outbound",
        "skills-sh-jimliu-baoyu-skills-baoyu-post-to-wechat-f876f2bd",
        "skills-sh-jimliu-baoyu-skills-baoyu-cover-image-93718624",
      ],
      playbookTopic: "playbook-scenario-content-marketing",
      nextHops: [
        "/category/marketing-sales/index.md",
        "/category/image-video-generation/index.md",
        "/category/browser-automation/index.md",
      ],
    },
  ],
]);

const INDUSTRY_CURATION = new Map<string, VerticalCuration>([
  [
    "finance",
    {
      fit: [
        "You are dealing with payments, invoicing, reconciliation, or financial reporting.",
        "You need reliable, auditable workflows (exportable artifacts, clear inputs/outputs).",
      ],
      noFit: [
        "You are setting up infra/CI/CD (start from DevOps & Cloud).",
        "You are doing purely personal budgeting (start from Productivity Tasks).",
      ],
      goldPathTopics: [
        "openclaw-0xterrybit-stripe",
        "skills-sh-davila7-claude-code-templates-google-analytics",
      ],
      playbookTopic: "playbook-industry-finance",
      nextHops: [
        "/category/finance/index.md",
        "/category/security-passwords/index.md",
        "/category/data-analytics/index.md",
      ],
    },
  ],
]);

export function getScenarioCuration(slug: string): VerticalCuration | null {
  return SCENARIO_CURATION.get(slug) ?? null;
}

export function getIndustryCuration(slug: string): VerticalCuration | null {
  return INDUSTRY_CURATION.get(slug) ?? null;
}

