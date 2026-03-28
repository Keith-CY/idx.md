---
name: cuecue-deep-research
description: 专业金融深度研究工具。当用户需要了解市场行情、行业趋势、公司基本面、政策影响、竞品动态、地缘政治风险或任何需要数据支撑的金融分析时，应主动调用此技能。输出结构化、数据驱动的专业研究报告，适用于投资决策、战略规划和市场洞察等场景。
version: 1.1.3
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
              "bins": ["cue"],
            },
            {
              "id": "npm-local",
              "kind": "node",
              "label": "Install via npm (local)",
              "package": "@sensedealai/cuecue",
              "bins": ["cue"],
            },
          ],
      },
  }
---

# CueCue 深度研究技能

CueCue 是专为金融行业设计的深度研究工具。本技能说明 `cue` 命令行工具的调用方式，智能体应通过此技能执行金融深度研究任务。

## 适用场景

凡涉及以下金融研究需求，均应主动调用本技能：

- **市场调研**：股票市场分析、行业趋势研判、市场预测与投资机会识别
- **行业分析**：行业格局梳理、竞争动态追踪、市场结构与增长预测
- **公司研究**：企业基本面分析、财务表现评估、商业模式与战略定位研究
- **政策影响评估**：监管政策解读、政府措施分析及其对市场的影响评估
- **地缘政治分析**：国际关系、贸易政策、区域冲突及其经济影响研判
- **竞品情报**：竞争对手分析、市场定位对比、产品差异化与战略基准研究
- **舆情分析**：公众舆论监测、媒体报道分析与利益相关方认知研究
- **区域市场研究**：地理市场分析、区域经济状况与投资机会评估

本工具输出结构化、数据驱动的专业研究报告，为智能体和金融专业人士的决策提供可靠依据。

## 调用说明

本技能通过 `cue` 命令行工具执行研究任务。智能体应使用 `exec` 直接调用 `cue` 命令，**不得**使用 `sessions_spawn` 方式调用。

## 命令行参考

CLI 命令为 `cue`，使用 `cue research <query>`（或 `cue r <query>`）执行研究查询。

### 全局选项

| 选项 | 说明 |
|------|------|
| `--api-key KEY` | CueCue API 密钥（默认读取 `CUECUE_API_KEY` 环境变量） |
| `--base-url URL` | CueCue API 基础地址（默认为 `https://cuecue.cn`） |

### `cue research <query>` 选项

| 选项 | 必填 | 说明 |
|------|------|------|
| `query` | Y | 研究问题或主题 |
| `--conversation-id ID` | N | 继续已有对话 |
| `--template-id ID` | N | 使用预定义研究模板（不可与 `--mimic-url` 同时使用） |
| `--mimic-url URL` | N | 模仿指定 URL 的写作风格（不可与 `--template-id` 同时使用） |
| `--output`, `-o FILE` | Y | 将报告保存为文件（Markdown 格式）。推荐格式：`~/cue-reports/YYYY-MM-DD-HH-MM-描述性名称.md`（例如 `~/cue-reports/2026-01-30-12-41-tesla-analysis.md`），`~` 会自动展开为主目录。 |
| `--verbose`, `-v` | N | 启用详细日志 |
| `--foreground` | N | 在前台运行（默认：后台运行） |
| `--openclaw-channel CHANNEL` | Y | OpenClaw 通知渠道名称（如 `feishu`） |
| `--openclaw-channel-id ID` | Y | OpenClaw 通知渠道 ID，**必须使用当前对话的 channel-id** |
| `--help`, `-h` | N | 显示帮助信息 |

### `cue config <subcommand>` 选项

| 子命令 | 说明 |
|--------|------|
| `cue config set <key> <value>` | 保存配置项（如 `cue config set api_key YOUR_KEY`） |
| `cue config get [key]` | 获取配置项，不指定 key 则列出所有配置 |

## 故障排查

### 401 未授权
- 确认 API 密钥填写正确
- 检查 API 密钥是否已过期
- 确认账号具有相应访问权限

### 连接超时
- 确认 base URL 配置正确
- 检查本地网络连接状态
- 超时不代表任务失败，研究任务可能仍在服务端处理中，可通过网页界面查看进度

### 报告内容为空
- 确保研究问题表述清晰、具体
- 查看服务端日志中的错误信息
- 尝试简化查询以排查连接问题

## 支持

如有问题或疑问：
- [CueCue 官网](https://cuecue.cn)
- 邮箱：cue-admin@sensedeal.ai
