---
group:
  title: 通用
nav:
  path: /components
---

# 排版 Typography

用于展示标题、段落、文本内容。

## 组合使用

排版组件用于展示标题、段落、文本内容，这里展示了排版的组合使用。

<code src="./__demo__/group">

## 标题

展示不同级别的标题。

<code src="./__demo__/title">

## 文本

不同样式的文本以及超链接组件。

<code src="./__demo__/text">

## 段落

文本段落样式。

<code src="./__demo__/paragraph">

## 可交互

提供复制、编辑文本等功能

<code src="./__demo__/operate">

## 省略

在空间不足时省略多行文本内容。

注意：父元素 `flex` 模式下， 省略的 `Typography` 的 `ellipsis` 场景会收到影响，可以添加`width: 100%` 使 `Typography` 充满整个父元素。

<code src="./__demo__/ellipsis">

## API

**Typography**

| 参数名    | 描述     | 类型                 | 默认值 |
| --------- | -------- | -------------------- | ------ |
| className | 节点类名 | `string \| string[]` | `--`   |
| style     | 节点样式 | `CSSProperties`      | `--`   |

**Typography.Title**

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| bold | 粗体 | `boolean` | `--` |
| code | 代码块样式 | `boolean` | `--` |
| delete | 删除线样式 | `boolean` | `--` |
| className | 节点类名 | `string \| string[]` | `--` |
| style | 节点样式 | `CSSProperties` | `--` |
| disabled | 禁用状态 | `boolean` | `--` |
| underline | 下划线样式 | `boolean` | `--` |
| type | 文本类型 | `primary \| secondary \| success \| error \| warning\|` | `--` |
| ellipsis | 自动溢出省略（只支持字符串），具体参数配置看 | `boolean \| EllipsisConfig ` | `--` |
| heading | 标题级别，相当于 h1 h2 h3 h4 h5 h6 | `1 \| 2 \| 3 \| 4 \| 5\| 6\|` | `1` |
| mark | 标记样式 | `boolean \| { color: string }` | `--` |
| copyable | 开启复制功能 | `boolean \| {text?: string; onCopy?: (text: string, e) => void; icon?: ReactNode; tooltips?: [ReactNode, ReactNode];}` | `--` |
| editable | 开启可编辑功能 | `boolean \| {editing?: boolean; onStart?: (text, e) => void; onChange?: (text) => void; onEnd?: (text) => void}` | `--` |

**Typography.Paragraph**

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| blockquote | 长引用 | `boolean` | `--` |
| bold | 粗体 | `boolean` | `--` |
| code | 代码块样式 | `boolean` | `--` |
| delete | 删除线样式 | `boolean` | `--` |
| disabled | 禁用状态 | `boolean` | `--` |
| underline | 下划线样式 | `boolean` | `--` |
| spacing | 段落的的行高，长文本(大于 5 行)的时候推荐使用默认行高，短文本(小于等于 3 行)推荐使用 close 紧密的行高。 | `default \| close` | `default` |
| type | 文本类型 | `primary \| secondary \| success \| error \| warning\|` | `--` |
| className | 节点类名 | `string \| string[]` | `--` |
| style | 节点样式 | `CSSProperties` | `--` |
| mark | 标记样式 | `boolean \| { color: string }` | `--` |
| copyable | 开启复制功能 | `boolean \| {text?: string; onCopy?: (text: string, e) => void; icon?: ReactNode; tooltips?: [ReactNode, ReactNode];}` | `--` |
| editable | 开启可编辑功能 | `boolean \| {editing?: boolean; onStart?: (text, e) => void; onChange?: (text) => void; onEnd?: (text) => void}` | `--` |

**EllipsisConfig**

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| cssEllipsis | 自动溢出省略（只支持字符串），在大量使用情况下建议开启提高性能。 | `boolean` | `false` |
| defaultExpanded | 默认展开 | `boolean` | `false` |
| expandable | 显示展开/折叠按钮 | `boolean` | `--` |
| expanded | 是否展开 | `boolean` | `--` |
| rows | 显示省略的行数 | `number` | `1` |
| ellipsisStr | 省略号 | `string` | `...` |
| suffix | 后缀 | `string` | `--` |
| showTooltip | 配置省略时的弹出框 | `boolean \| { type?: 'tooltip' \| 'popover'; props?: Record<string, any> }` | `--` |
| expandNodes | 配置 折叠 / 展开 的元素 | `ReactNode[]` | `--` |
| onEllipsis | 在省略发生改变的时候触发，通常是窗口 resize 情况会触发。 | `(isEllipsis: boolean) => void` | `--` |
| onExpand | 在折叠/展开状态发生改变的时候触发，通常是点击折叠/展开按钮触发。 | `(isExpand: boolean, e) => void` | `--` |
