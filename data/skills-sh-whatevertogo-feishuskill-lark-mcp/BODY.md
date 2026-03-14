# 多维表格 (Bitable)

## 核心规则

```yaml
# 创建资源用用户身份
useUAT: true

# 过滤条件 value 必须是数组
✅ value: ["已完成"]
❌ value: "已完成"

# 使用 field_name 而非 field_id
field_name: "状态"
```

## URL 解析

```
https://xxx.feishu.cn/base/bascnxxxxxx?table=tblxxxxxx
                         ↑app_token         ↑table_id
```

## 工作流

### 1. 创建 Base

```yaml
工具: mcp__lark-mcp__bitable_v1_app_create
data:
  name: "Base名称"
useUAT: true
```

返回 `app_token` 和 `default_table_id`。

### 2. 创建数据表

```yaml
工具: mcp__lark-mcp__bitable_v1_appTable_create
path:
  app_token: "bascnxxxxxx"
data:
  table:
    name: "表名"
    fields:
      - field_name: "文本"
        ui_type: "Text"
      - field_name: "单选"
        ui_type: "SingleSelect"
        property:
          options:
            - name: "选项1"
      - field_name: "日期"
        ui_type: "DateTime"
useUAT: true
```

### 3. 查询记录

```yaml
工具: mcp__lark-mcp__bitable_v1_appTableRecord_search
path:
  app_token: "bascnxxxxxx"
  table_id: "tblxxxxxx"
data:
  filter:
    conjunction: "and"
    conditions:
      - field_name: "状态"
        operator: "is"
        value: ["已完成"]
```

### 4. 创建记录

```yaml
工具: mcp__lark-mcp__bitable_v1_appTableRecord_create
path:
  app_token: "bascnxxxxxx"
  table_id: "tblxxxxxx"
data:
  fields:
    文本字段: "值"
    单选字段: "选项名"
    日期字段: 1705276800000
useUAT: true
```

### 5. 更新记录

```yaml
工具: mcp__lark-mcp__bitable_v1_appTableRecord_update
path:
  app_token: "bascnxxxxxx"
  table_id: "tblxxxxxx"
  record_id: "recxxxxxx"
data:
  fields:
    状态: "已完成"
useUAT: true
```

## 字段类型

| ui_type | 说明 | 示例值 |
|---------|------|--------|
| Text | 文本 | `"内容"` |
| Number | 数字 | `123` |
| SingleSelect | 单选 | `"选项名"` |
| MultiSelect | 多选 | `["选项1", "选项2"]` |
| DateTime | 日期 | `1705276800000` (毫秒) |
| User | 人员 | `"ou_xxxxx"` |
| Checkbox | 复选框 | `true`/`false` |

## 操作符

| operator | 说明 |
|----------|------|
| `is` | 等于 |
| `isNot` | 不等于 |
| `contains` | 包含 |
| `isEmpty` | 为空 |
| `isGreater` | 大于 |
| `isLess` | 小于 |

## 辅助工具

```yaml
# 获取数据表列表
工具: mcp__lark-mcp__bitable_v1_appTable_list
path:
  app_token: "bascnxxxxxx"

# 获取字段列表
工具: mcp__lark-mcp__bitable_v1_appTableField_list
path:
  app_token: "bascnxxxxxx"
  table_id: "tblxxxxxx"
```

## 常见错误

| 错误 | 解决 |
|------|------|
| field not found | 用 `appTableField_list` 确认字段名 |
| invalid filter | value 使用数组格式 `["值"]` |
| 创建后无法访问 | 使用 `useUAT: true` |
