# 多维表格 (Bitable) 操作指南

## ⚠️ 关键注意事项

**⭐ 0. 使用用户身份创建（最重要！）**
```yaml
# ⭐ 关键经验：始终使用 useUAT: true 创建用户可访问的资源
useUAT: true   # ✅ 用户身份 - 创建者=当前用户，您可以直接访问
useUAT: false  # ❌ 租户身份 - 创建者=飞书助手，您无法直接访问

# 实际测试发现：
# - useUAT: false 创建的 Base，创建者是"飞书助手"
# - 当前用户无法直接访问，权限受限
# - 通过 API 添加外部邮箱权限会失败（错误码 1063001）
# - 解决方案：使用 useUAT: true
```

**1. 字段类型使用 ui_type，不使用 type**
```yaml
✅ ui_type: "Text"
❌ type: 1
```

**2. 过滤条件 value 必须是数组**
```yaml
✅ value: ["已完成"]
❌ value: "已完成"
```

**3. ID 不能混淆**
```
app_token  - Base 应用 ID（从 URL 获取）
table_id   - 表格 ID（从 URL 或字段列表获取）
record_id  - 记录 ID（从查询结果获取）
```

**4. 日期字段不支持 isNot 操作符**

**5. 更新记录需要 record_id，不是通过 filter 查找**

## 创建表格和字段

### 创建 Base 应用

```yaml
工具: mcp__lark-mcp__bitable_v1_app_create
data:
  name: "项目管理"  # 可以修改为您需要的名称
  folder_token: ""      # 留空=根目录，或填写实际的文件夹 token
  time_zone: "Asia/Shanghai"
useUAT: true  # ⭐ 优先使用用户身份，创建者=您，可直接访问
             #      useUAT: false 时创建者=飞书助手，需要额外设置权限
```

### 创建表格

**⭐ 重要说明：字段类型优先使用 ui_type**

- `ui_type` - 字符串类型，更直观（推荐）✅
- `type` - 数字类型，系统内部使用

下面的示例同时列出两者供参考，**实际使用时只需提供 ui_type 即可**。

**完整示例：**

```yaml
工具: mcp__lark-mcp__bitable_v1_appTable_create
path:
  app_token: "bascnxxxxxx"  # 需要替换为实际的 app_token
data:
  table:
    name: "任务表"
    default_view_name: "所有任务"
    fields:
      # 文本字段
      - field_name: "任务名称"
        type: 1
        ui_type: "Text"
        description: "任务的简短描述"

      # 数字字段
      - field_name: "优先级"
        type: 2
        ui_type: "Number"
        property:
          formatter: "0"
          min: 1
          max: 5

      # 单选字段
      - field_name: "状态"
        type: 3
        ui_type: "SingleSelect"
        property:
          options:
            - name: "待处理"
              color: 1  # 红色
            - name: "进行中"
              color: 2  # 橙色
            - name: "已完成"
              color: 5  # 绿色

      # 多选字段
      - field_name: "标签"
        type: 4
        ui_type: "MultiSelect"
        property:
          options:
            - name: "紧急"
            - name: "重要"

      # 日期字段
      - field_name: "截止日期"
        type: 5
        ui_type: "DateTime"
        property:
          date_formatter: "yyyy-MM-dd"
          auto_fill: false

      # 复选框
      - field_name: "已归档"
        type: 7
        ui_type: "Checkbox"

      # 人员字段
      - field_name: "负责人"
        type: 11
        ui_type: "User"
        property:
          multiple: false

      # 电话号码
      - field_name: "联系电话"
        type: 13
        ui_type: "Phone"

      # 超链接
      - field_name: "相关链接"
        type: 15
        ui_type: "Url"

      # 附件
      - field_name: "文件"
        type: 17
        ui_type: "Attachment"

      # 创建时间
      - field_name: "创建时间"
        type: 1001
        ui_type: "CreatedTime"

      # 修改时间
      - field_name: "修改时间"
        type: 1002
        ui_type: "ModifiedTime"

      # 创建人
      - field_name: "创建人"
        type: 1003
        ui_type: "CreatedUser"

      # 修改人
      - field_name: "修改人"
        type: 1004
        ui_type: "ModifiedUser"
```

### 常用字段类型映射

| ui_type | type | 说明 | 示例值 |
|---------|------|------|--------|
| Text | 1 | 多行文本 | "任务描述" |
| Number | 2 | 数字 | 100 |
| SingleSelect | 3 | 单选 | "进行中" |
| MultiSelect | 4 | 多选 | ["紧急", "重要"] |
| DateTime | 5 | 日期时间 | 1234567890000 (毫秒时间戳) |
| Checkbox | 7 | 复选框 | true/false |
| User | 11 | 人员 | "ou_xxxxx" |
| Phone | 13 | 电话 | "13800138000" |
| Url | 15 | 超链接 | "https://example.com" |
| Attachment | 17 | 附件 | ["token1", "token2"] |

## 查询记录

### 基础查询

```yaml
工具: mcp__lark-mcp__bitable_v1_appTableRecord_search
path:
  app_token: "bascnxxxxxx"  # 需要替换为实际的 Base 应用 ID
  table_id: "tblxxxxxx"     # 需要替换为实际的表格 ID
params:
  page_size: 20
  user_id_type: "open_id"
```

### 过滤查询

**精确匹配（is）**
```yaml
data:
  filter:
    conjunction: "and"
    conditions:
      - field_name: "状态"
        operator: "is"
        value: ["进行中"]
```

**包含文本（contains）**
```yaml
data:
  filter:
    conjunction: "and"
    conditions:
      - field_name: "任务名称"
        operator: "contains"
        value: ["紧急"]
```

**数值范围**
```yaml
data:
  filter:
    conjunction: "and"
    conditions:
      - field_name: "优先级"
        operator: "isGreater"
        value: ["3"]
```

**日期范围**
```yaml
data:
  filter:
    conjunction: "and"
    conditions:
      - field_name: "截止日期"
        operator: "isGreater"
        value: ["1704067200000"]  # 2024-01-01 的时间戳
```

**空值检查**
```yaml
data:
  filter:
    conjunction: "and"
    conditions:
      - field_name: "负责人"
        operator: "isEmpty"
        value: []
```

**多条件组合（OR）**
```yaml
data:
  filter:
    conjunction: "or"  # 注意这里是 or
    conditions:
      - field_name: "状态"
        operator: "is"
        value: ["待处理"]
      - field_name: "优先级"
        operator: "isGreater"
        value: ["3"]
```

**复杂嵌套（AND + OR）**
```yaml
# 注意：当前 API 不支持嵌套逻辑，只能单层 conjunction
# 解决方案：多次查询后合并结果，或使用更复杂的条件
```

### 操作符完整列表

| operator | 说明 | 支持字段类型 | 示例 |
|----------|------|-------------|------|
| is | 等于 | 所有 | 状态 = "已完成" |
| isNot | 不等于 | 除日期外 | 状态 ≠ "已完成" |
| contains | 包含 | 文本 | 名称包含 "项目" |
| doesNotContain | 不包含 | 文本 | 名称不包含 "测试" |
| isEmpty | 为空 | 所有 | 负责人为空 |
| isNotEmpty | 不为空 | 所有 | 负责人非空 |
| isGreater | 大于 | 数字、日期 | 优先级 > 3 |
| isGreaterEqual | 大于等于 | 数字、日期 | 优先级 >= 3 |
| isLess | 小于 | 数字、日期 | 优先级 < 3 |
| isLessEqual | 小于等于 | 数字、日期 | 优先级 <= 3 |
| like | 模糊匹配 | 文本 | 名称 LIKE "%项目%" |
| in | 在列表中 | 单选、多选 | 状态 IN ["进行中", "已完成"] |

**重要：** 日期字段不支持 `isNot` 操作符

### 排序

```yaml
params:
  sort:
    - field_name: "截止日期"
      desc: true    # true=降序，false=升序
    - field_name: "优先级"
      desc: false
```

### 分页

```yaml
params:
  page_size: 20     # 每页数量（最大 500）
  page_token: ""    # 首次为空，后续使用返回的 page_token
```

**处理分页：**
```
1. 首次请求：page_token = ""
2. 获取结果中的 has_more 和 page_token
3. 如果 has_more = true，使用新的 page_token 继续请求
4. 重复直到 has_more = false
```

### 查询指定字段

```yaml
params:
  field_names: ["任务名称", "状态", "截止日期"]  # 只返回这些字段
```

### 自动返回系统字段

```yaml
params:
  automatic_fields: true  # 返回创建时间、修改时间、创建人、修改人
```

## 创建记录

### 基础创建

```yaml
工具: mcp__lark-mcp__bitable_v1_appTableRecord_create
path:
  app_token: "bascnxxxxxx"  # 需要替换为实际的 app_token
  table_id: "tblxxxxxx"     # 需要替换为实际的 table_id
data:
  fields:
    任务名称: "完成项目文档"
    优先级: 5
    状态: "进行中"
    截止日期: 1704067200000  # 毫秒时间戳
    已归档: false
    负责人: "ou_xxxxx"
    标签: ["紧急", "重要"]
```

### 字段值格式说明

**文本类型：**
```yaml
字段名: "文本内容"
```

**数字类型：**
```yaml
字段名: 123
```

**单选/多选：**
```yaml
# 单选：直接写值
字段名: "进行中"

# 多选：数组
字段名: ["选项1", "选项2"]
```

**日期时间：**
```yaml
字段名: 1704067200000  # 毫秒时间戳（13位数字）
```

**复选框：**
```yaml
字段名: true   # 选中
字段名: false  # 未选中
```

**人员字段：**
```yaml
# 单人
字段名: "ou_xxxxx"

# 多人
字段名: ["ou_xxxxx", "ou_yyyyy"]
```

**超链接：**
```yaml
字段名:
  link: "https://example.com"
  text: "链接文字"
```

**附件：**
```yaml
字段名: ["file_token_1", "file_token_2"]
```

### 创建时指定 ID（幂等性）

```yaml
data:
  fields:
    任务名称: "xxx"
params:
  client_token: "unique-uuid-v4"  # 相同的 client_token 不会重复创建
```

## 更新记录

### 基础更新

```yaml
工具: mcp__lark-mcp__bitable_v1_appTableRecord_update
path:
  app_token: "bascnxxxxxx"  # 需要替换为实际的 app_token
  table_id: "tblxxxxxx"     # 需要替换为实际的 table_id
  record_id: "recxxxxxx"    # 需要替换为从查询结果获取的实际 record_id
data:
  fields:
    状态: "已完成"
    优先级: 5
```

**重要：** 更新需要 record_id，不能通过条件筛选。

### 忽略一致性检查（提升性能）

```yaml
params:
  ignore_consistency_check: true
```

**注意：** 可能导致数据短暂不一致，仅在高并发场景使用。

## 获取字段列表

```yaml
工具: mcp__lark-mcp__bitable_v1_appTableField_list
path:
  app_token: "bascnxxxxxx"  # 需要替换为实际的 app_token
  table_id: "tblxxxxxx"     # 需要替换为实际的 table_id
params:
  page_size: 100
```

**返回信息包括：**
- field_name: 字段名称
- type: 数字类型
- ui_type: 字符串类型
- description: 字段描述
- property: 字段属性（选项、格式等）

## 常见错误与解决方案

### 错误1: "field not found"

**原因：**
1. 字段名拼写错误
2. 字段名包含多余空格
3. 使用了错误的 ID 类型

**解决：**
```yaml
# 先获取字段列表，确认准确的字段名
工具: mcp__lark-mcp__bitable_v1_appTableField_list
path:
  app_token: "xxx"
  table_id: "xxx"
```

### 错误2: "invalid filter condition"

**原因：**
1. value 不是数组
2. operator 与字段类型不匹配
3. 日期字段使用了 isNot

**错误示例：**
```yaml
❌ value: "已完成"  # 应该是数组
❌ operator: "isNot" with 日期字段  # 不支持
❌ operator: "contains" with 数字  # 无意义
```

**正确示例：**
```yaml
✅ value: ["已完成"]
✅ operator: "is" with 日期字段
✅ operator: "isGreater" with 数字字段
```

### 错误3: "record_id required"

**原因：** 更新记录时没有提供 record_id

**解决：**
1. 先通过 search 查询获取 record_id
2. 使用返回的 record_id 进行更新

```yaml
# 步骤1: 查询
工具: mcp__lark-mcp__bitable_v1_appTableRecord_search
data:
  filter:
    conditions:
      - field_name: "任务名称"
        operator: "is"
        value: ["xxx"]

# 步骤2: 从结果获取 record_id
# 步骤3: 使用 record_id 更新
工具: mcp__lark-mcp__bitable_v1_appTableRecord_update
path:
  record_id: "从步骤2获取"
```

### 错误4: "invalid option value"

**原因：** 单选/多选字段的值不在预定义选项中

**解决：**
```yaml
# 如果选项不存在，会自动创建新选项
# 但建议先获取字段列表，查看所有可用选项
工具: mcp__lark-mcp__bitable_v1_appTableField_list
```

### 错误5: 分页处理错误

**错误做法：**
```yaml
❌ 固定 page_size，假设总有结果
❌ 忽略 has_more 标志
❌ 不更新 page_token
```

**正确做法：**
```
1. 设置合理的 page_size（建议 50-100）
2. 检查 has_more 字段
3. 使用返回的 page_token 继续请求
4. 当 has_more = false 时停止
```

## 高级技巧

### 批量操作

虽然 API 不支持批量创建/更新，但可以通过循环实现：

```
批量创建流程：
1. 准备数据列表
2. 循环调用 create 接口
3. 收集失败的记录
4. 重试失败的记录
```

### 性能优化

```yaml
# 1. 只查询需要的字段
params:
  field_names: ["字段1", "字段2"]

# 2. 合理设置分页大小
params:
  page_size: 100  # 平衡点

# 3. 忽略一致性检查（高并发场景）
params:
  ignore_consistency_check: true

# 4. 使用自动字段（如果需要）
params:
  automatic_fields: false  # 不需要时设为 false
```

### 数据验证

创建/更新前先获取字段列表，验证：

```
1. 字段是否存在
2. 字段类型是否匹配
3. 单选/多选值是否在选项列表中
4. 日期格式是否正确（毫秒时间戳）
```

## 查询示例

更多查询示例请参考：[examples/bitable-queries.md](../examples/bitable-queries.md)
