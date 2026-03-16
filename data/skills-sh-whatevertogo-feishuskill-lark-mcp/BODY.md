# 安装配置

## 快速配置

```json
{
  "mcpServers": {
    "lark-mcp": {
      "command": "npx",
      "args": ["-y", "@larksuiteoapi/lark-mcp", "mcp", "-a", "<app_id>", "-s", "<app_secret>"]
    }
  }
}
```

**注意**: 不要使用 `-t` 限制工具，否则只会加载指定工具。

## 参数

| 参数 | 必需 | 说明 |
|------|:----:|------|
| `-a` | ✅ | App ID |
| `-s` | ✅ | App Secret |
| `--oauth` | ❌ | 启用用户身份认证 |
| `--token-mode` | ❌ | `user_access_token` |
| `--domain` | ❌ | 国际版用 `https://open.larksuite.com` |

## OAuth 配置

以下工具需要用户令牌：
- `docx_builtin_search`（搜索文档）
- `wiki_v1_node_search`（搜索知识库）

### ⚠️ 常见坑

**只加 `--oauth` 不够，必须同时加 `--token-mode user_access_token`**：

```json
// ❌ 错误：只加 --oauth，仍返回 99991663
{"args": ["-y", "@larksuiteoapi/lark-mcp", "mcp", "-a", "cli_xxx", "-s", "xxx", "--oauth"]}

// ✅ 正确：必须同时添加
{"args": ["-y", "@larksuiteoapi/lark-mcp", "mcp", "-a", "cli_xxx", "-s", "xxx", "--oauth", "--token-mode", "user_access_token"]}
```

**弄好之后需要重启agent工具**

### 配置步骤

**1. 终端登录**
```bash
npx -y @larksuiteoapi/lark-mcp login -a cli_xxx -s xxx
```

**2. 更新配置**
```json
{
  "mcpServers": {
    "lark-mcp": {
      "args": [
        "-y", "@larksuiteoapi/lark-mcp", "mcp",
        "-a", "cli_xxx", "-s", "xxx",
        "--oauth",
        "--token-mode", "user_access_token"
      ]
    }
  }
}
```

**3. 配置重定向 URL**

飞书开放平台 → 应用 → 安全设置 → 添加：
```
http://localhost:3000/callback
```

**4. 重启 Claude Code**

## OAuth 效果

| 场景 | 无 OAuth | 有 OAuth |
|------|---------|---------|
| 创建资源 | 创建者=飞书助手 | 创建者=当前用户 |
| 搜索文档/知识库 | ❌ | ✅ |
| 访问私有资源 | ❌ | ✅ |

## 常见问题

| 问题 | 原因 | 解决 |
|------|------|------|
| 只有 3 个工具 | 使用了 `-t` | 移除 `-t` 参数 |
| 99991663 错误 | OAuth 不完整 | 同时添加 `--oauth` 和 `--token-mode user_access_token` |
| redirect_uri_mismatch | 未配置重定向 | 添加 `http://localhost:3000/callback` |

## 预设工具集

| 预设 | 用途 |
|------|------|
| `preset.default` | 默认，常用功能 |
| `preset.im.default` | 即时消息 |
| `preset.base.default` | 多维表格 |
| `preset.doc.default` | 文档操作 |

## 获取凭证

1. 访问 [飞书开放平台](https://open.feishu.cn/app)
2. 创建企业自建应用
3. 获取 App ID 和 App Secret
4. 添加所需权限

## 相关链接

- [飞书开放平台](https://open.feishu.cn/)
- [MCP 集成文档](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/mcp_integration/mcp_installation)
