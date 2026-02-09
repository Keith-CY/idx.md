import { createHash } from "crypto";
import { stringify } from "yaml";
import { getIndustryCuration, getScenarioCuration } from "./vertical-curation";

const TEXT_ENCODER = new TextEncoder();

export type BuiltPlaybook = {
  topic: string;
  headContent: string;
  bodyMarkdown: string;
  bodyBytes: Uint8Array;
  tags: readonly string[];
};

function computeSha256(bytes: Uint8Array): string {
  return createHash("sha256").update(bytes).digest("hex");
}

function ensureTrailingNewline(text: string): string {
  return text.endsWith("\n") ? text : `${text}\n`;
}

function renderPlaybookBody(params: {
  title: string;
  indexPath: string;
  fit: readonly string[];
  noFit: readonly string[];
  goldPathTopics: readonly string[];
  nextHops: readonly string[];
}): string {
  const fit = params.fit.map((line) => `- ${line}`).join("\n");
  const noFit = params.noFit.map((line) => `- ${line}`).join("\n");
  const goldPath = params.goldPathTopics
    .map((topic, index) => `${index + 1}. |/data/${topic}|`)
    .join("\n");
  const nextHops = params.nextHops.map((path) => `- ${path}`).join("\n");

  return ensureTrailingNewline(
    [
      `# ${params.title}`,
      "",
      `Index: ${params.indexPath}`,
      "",
      "## Fit / No Fit",
      "",
      "**Fit**",
      fit,
      "",
      "**No fit**",
      noFit,
      "",
      "## Gold Path",
      goldPath,
      "",
      "## Next Hops",
      nextHops,
      "",
    ].join("\n"),
  );
}

function buildPlaybookEntry(params: {
  retrievedAt: string;
  topic: string;
  title: string;
  summary: string;
  tags: readonly string[];
  bodyMarkdown: string;
}): BuiltPlaybook {
  const normalizedBody = ensureTrailingNewline(params.bodyMarkdown);
  const bodyBytes = TEXT_ENCODER.encode(normalizedBody);
  const frontmatter = {
    stable_id: `playbooks/${params.topic}`,
    type: "playbooks",
    title: params.title,
    summary: params.summary,
    tags: [...params.tags],
    source_url: "",
    license: "",
    upstream_ref: "",
    retrieved_at: params.retrievedAt,
    content_sha256: computeSha256(bodyBytes),
  };
  const yaml = stringify(frontmatter).trimEnd();
  const headContent = `---\n${yaml}\n---\n`;

  return {
    topic: params.topic,
    headContent,
    bodyMarkdown: normalizedBody,
    bodyBytes,
    tags: [...params.tags],
  };
}

export function buildPilotPlaybooks(retrievedAt: string): BuiltPlaybook[] {
  const scenarioCustomerSupport = getScenarioCuration("customer-support");
  const scenarioContentMarketing = getScenarioCuration("content-marketing");
  const industryFinance = getIndustryCuration("finance");

  if (!scenarioCustomerSupport || !scenarioContentMarketing || !industryFinance) {
    throw new Error("Missing pilot curation for playbooks");
  }

  const entries: BuiltPlaybook[] = [
    buildPlaybookEntry({
      retrievedAt,
      topic: "playbook-industry-finance",
      title: "Playbook: Industry - Finance",
      summary: "A practical reading path for finance workflows (payments, reporting, reconciliation).",
      tags: ["playbooks", "industry-finance"],
      bodyMarkdown: renderPlaybookBody({
        title: "Playbook: Industry - Finance",
        indexPath: "/industry/finance/index.md",
        fit: industryFinance.fit,
        noFit: industryFinance.noFit,
        goldPathTopics: industryFinance.goldPathTopics,
        nextHops: industryFinance.nextHops,
      }),
    }),
    buildPlaybookEntry({
      retrievedAt,
      topic: "playbook-scenario-content-marketing",
      title: "Playbook: Scenario - Content Marketing",
      summary: "A practical reading path for creating, repurposing, and distributing content.",
      tags: ["playbooks", "scenario-content-marketing"],
      bodyMarkdown: renderPlaybookBody({
        title: "Playbook: Scenario - Content Marketing",
        indexPath: "/scenario/content-marketing/index.md",
        fit: scenarioContentMarketing.fit,
        noFit: scenarioContentMarketing.noFit,
        goldPathTopics: scenarioContentMarketing.goldPathTopics,
        nextHops: scenarioContentMarketing.nextHops,
      }),
    }),
    buildPlaybookEntry({
      retrievedAt,
      topic: "playbook-scenario-customer-support",
      title: "Playbook: Scenario - Customer Support",
      summary: "A practical reading path for triage, ticketing, and support ops workflows.",
      tags: ["playbooks", "scenario-customer-support"],
      bodyMarkdown: renderPlaybookBody({
        title: "Playbook: Scenario - Customer Support",
        indexPath: "/scenario/customer-support/index.md",
        fit: scenarioCustomerSupport.fit,
        noFit: scenarioCustomerSupport.noFit,
        goldPathTopics: scenarioCustomerSupport.goldPathTopics,
        nextHops: scenarioCustomerSupport.nextHops,
      }),
    }),
  ];

  return entries.sort((a, b) => a.topic.localeCompare(b.topic));
}
