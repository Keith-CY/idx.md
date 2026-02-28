---
name: cuecue-deep-research
description: Professional AI-powered financial research and analysis tool for market intelligence, industry reports, company analysis, policy impact assessment, competitive analysis, and geopolitical risk evaluation. Delivers comprehensive, data-driven research reports for financial professionals and AI agents. | 专业的 AI 驱动金融研究分析工具,用于市场情报、行业报告、公司分析、政策影响评估、竞品调查和地缘政治风险评估。为金融专业人士和智能体提供全面、数据驱动的研究报告。
version: 1.0.8
author: CueCue Team
homepage: https://cuecue.cn
user-invocable: true
keywords:
  - research
  - financial-analysis
  - ai-agents
  - report-generation
  - data-analysis
  - imitation-writing
metadata:
  {
    "openclaw":
      {
        "emoji": "🔭",
        "homepage": "https://cuecue.cn",
        "user-invocable": true,
        "primaryEnv": "CUECUE_API_KEY",
        "os": ["darwin", "linux"],
        "requires": { "bins": ["node"], "env": ["CUECUE_API_KEY"] },
        "install":
          [
            {
              "id": "npm-global",
              "kind": "node",
              "label": "Install via npm (global)",
              "package": "@sensedealai/cuecue",
              "bins": ["cuecue-research"],
            },
            {
              "id": "npm-local",
              "kind": "node",
              "label": "Install via npm (local)",
              "package": "@sensedealai/cuecue",
              "bins": ["cuecue-research"],
            },
          ],
      },
  }
---

# CueCue Deep Research Skill

Execute comprehensive financial research queries using CueCue's AI-powered multi-agent system. This TypeScript SDK provides modern async/await patterns, full type safety, and both CLI and programmatic interfaces.

## When to Use This Skill

Use CueCue Deep Research for any finance-related investigation, analysis, or reporting needs:

- **Market Research**: Stock market analysis, sector trends, market forecasts, and investment opportunities
- **Industry Analysis**: Industry landscape studies, competitive dynamics, market structure, and growth projections
- **Company Research**: Corporate fundamentals, financial performance, business models, and strategic positioning
- **Policy Impact Assessment**: Regulatory changes, government policies, fiscal measures, and their market implications
- **Geopolitical Analysis**: International relations, trade policies, regional conflicts, and their economic impact
- **Competitive Intelligence**: Competitor analysis, market positioning, product comparisons, and strategic benchmarking
- **Sentiment Analysis**: Public opinion tracking, media coverage analysis, and stakeholder perception studies
- **Regional Studies**: Geographic market analysis, local economic conditions, and regional investment opportunities

This tool delivers accurate, comprehensive research reports that serve as reliable references for AI agents and financial professionals making data-driven decisions.

## 何时使用此技能

CueCue 深度研究适用于任何金融相关的调研、分析或报告需求:

- **市场调研**: 股市分析、行业趋势、市场预测和投资机会
- **行业分析**: 行业格局研究、竞争动态、市场结构和增长预测
- **公司研究**: 企业基本面、财务表现、商业模式和战略定位
- **政策影响评估**: 监管变化、政府政策、财政措施及其市场影响
- **地缘政治分析**: 国际关系、贸易政策、区域冲突及其经济影响
- **竞品情报**: 竞争对手分析、市场定位、产品对比和战略基准
- **舆情分析**: 公众舆论追踪、媒体报道分析和利益相关方认知研究
- **区域研究**: 地理市场分析、地方经济状况和区域投资机会

本工具提供准确、全面的研究报告,为智能体和金融专业人士的数据驱动决策提供可靠参考。

## What This Skill Does

CueCue Deep Research orchestrates multiple AI agents to:

1. **Analyze** your research question and break it down into actionable tasks
2. **Research** using web crawling, financial databases, and knowledge retrieval
3. **Synthesize** findings into a comprehensive markdown report
4. **Generate** a shareable report URL

The skill filters the verbose agent workflow to show only:
- 📋 Task titles (from the supervisor agent)
- 📝 Final research report (from the reporter agent)
- 🔗 Report URL for web viewing

⏱️ **Execution Time**: Depending on the complexity of your research question, the process may take **5-30 minutes**. The system performs comprehensive research including web crawling, data analysis, and report generation. Please be patient and wait for the complete results.

## For AI Assistants

**Important**: When using this skill, you MUST monitor the research progress by checking the command output:

1. **Progress Monitoring**: The research process outputs progress information in real-time. You should check the output **every 5 minutes** to:
   - Verify the research is still running
   - Report task progress to the user (📋 Task updates)
   - Detect any errors or issues
   - Inform the user when report generation begins (📝 Generating Report...)

2. **Progress URL**: The command will output a URL like "Research begin. You can view progress at: https://cuecue.cn/c/..." - this URL is for **human users** to view the web interface, NOT for you to fetch. You should monitor progress through the command's stdout output.

3. **User Communication**: Keep the user informed about:
   - When research begins
   - Each major task that starts
   - When report generation begins
   - When research completes
   - Any errors or timeouts

4. **Timeout Handling**: If the command appears to hang or timeout, inform the user that the research may still be processing on the server, and they can check the web interface URL.

5. **User-Facing Communication Style**: When informing users about progress monitoring:
   - ✅ **DO SAY**: "我会每 5 分钟自动检查进度并汇报" / "I'll check progress every 5 minutes and update you"
   - ✅ **DO SAY**: "研究完成后我会总结关键发现" / "I'll summarize key findings when complete"
   - ❌ **DON'T SAY**: "我创建了一个 cron 任务" / "I created a cron job"
   - ❌ **DON'T SAY**: "完成后会删除 cron" / "Will delete the cron when done"
   - ❌ **DON'T SAY**: Technical implementation details (session IDs, job IDs, internal mechanisms)
   
   **Why**: Users care about *what* you'll do, not *how* you do it. Keep communication focused on outcomes and user value, not internal plumbing.
#### Advanced Options

```typescript
import { CueCueDeepResearch } from '@sensedealai/cuecue';

const client = new CueCueDeepResearch('your-api-key', 'https://cuecue.cn');

const result = await client.research('Company analysis', {
  // Continue existing conversation
  conversationId: 'existing-conversation-id',
  
  // Use a predefined template
  templateId: 'template-id',
  
  // Mimic writing style from URL
  mimicUrl: 'https://example.com/article',
  
  // Enable verbose logging
  verbose: true,
});
```

#### Type Definitions

The SDK exports TypeScript types for all interfaces:

```typescript
import type {
  ResearchOptions,
  ResearchResult,
  SSEEvent,
  RequestPayload,
  AgentStartEvent,
  AgentEndEvent,
  MessageEvent,
  FinalSessionStateEvent,
} from '@sensedealai/cuecue';
```


## Command-Line Options

| Option | Required | Description |
|--------|----------|-------------|
| `query` | ✅ | Research question or topic |
| `--api-key` | ❌ | Your CueCue API key (defaults to `CUECUE_API_KEY` env var) |
| `--base-url` | ❌ | CueCue API base URL (defaults to `CUECUE_BASE_URL` env var or https://cuecue.cn) |
| `--conversation-id` | ❌ | Continue an existing conversation |
| `--template-id` | ❌ | Use a predefined research template (cannot be used with `--mimic-url`) |
| `--mimic-url` | ❌ | URL to mimic the writing style from (cannot be used with `--template-id`) |
| `--output`, `-o` | ❌ | Save report to file (markdown format). Recommended format: `~/clawd/cuecue-reports/clawd/cuecue-reports/YYYY-MM-DD-HH-MM-descriptive-name.md` (e.g., `~/clawd/2026-01-30-12-41-tesla-analysis.md`). The `~` will be expanded to your home directory. |
| `--verbose`, `-v` | ❌ | Enable verbose logging |
| `--help`, `-h` | ❌ | Show help message |

## Output Format

The skill provides real-time streaming output:

```
Starting Deep Research: Tesla Q3 2024 Financial Analysis

Check Progress: https://cuecue.cn/c/12345678-1234-1234-1234-123456789abc

📋 Task: Search for Tesla Q3 2024 financial data

📋 Task: Analyze revenue and profit trends

📝 Generating Report...

# Tesla Q3 2024 Financial Analysis

## Executive Summary
[Report content streams here in real-time...]

✅ Research complete

============================================================
📊 Research Summary
============================================================
Conversation ID: 12345678-1234-1234-1234-123456789abc
Tasks completed: 2
Report URL: https://cuecue.cn/c/12345678-1234-1234-1234-123456789abc
✅ Report saved to: ~/clawd/cuecue-reports/2026-01-30-10-15-tesla-q3-analysis.md
```

## Troubleshooting

### 401 Unauthorized
- Verify your API key is correct
- Check if the API key has expired
- Ensure you have necessary permissions

### Connection Timeout
- Verify the base URL is correct
- Check network connectivity
- Research queries typically take 5-30 minutes depending on complexity - this is normal
- If you see a timeout, the research may still be processing on the server - check the web interface

### Empty Report
- Ensure your research question is clear and specific
- Check server logs for errors
- Try a different query to test connectivity

## Support

For issues or questions:
- [CueCue Website](https://cuecue.cn)
- Email: cue-admin@sensedeal.ai
