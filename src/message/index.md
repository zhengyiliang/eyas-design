---
group:
  title: 反馈
nav:
  path: /components
---

# 全局提示 Message

由用户的操作触发的轻量级全局反馈。

## 基础用法

最简单的例子。

<code src="./__demo__/basic">

## 不同类型

全局提示有 5 种不同的类型，分别为：`info`, `success`, `warning`, `error`, `normal`。

<code src="./__demo__/type">

## 自定义图标

设置 `icon` 来自定义图标。

<code src="./__demo__/icon">

## 更新全局提醒内容

通过指定 `id`，可以更新已经存在的全局提示。

<code src="./__demo__/update_message">

## 全局提示的位置

全局提示有 2 种不同的弹出位置，分别为顶部和底部。

<code src="./__demo__/position">

## 更新延时

通过指定 `id`，可以更新已经存在的全局提示的`duration` 属性。

<code src="./__demo__/update_duration">

## 手动控制关闭

`Message.xxx()` 会返回一个函数，调用此函数能手动关闭通知。

<code src="./__demo__/hide">

## 显示关闭按钮

设置 `closable` 来显示关闭按钮。

<code src="./__demo__/closeable">

## Hooks-用法

可以通过 `useMessage` 去创建可以读取 context 的对话框。

但是通过 `useMessage` 渲染的 `message` 挂载在 `contextHolder` 所在位置。无法通过 `getContainer()` 修改容器。

<code src="./__demo__/useMessage">

## API

### Message

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| closable | 是否显示关闭按钮 | `boolean` | `-` |
| showIcon | 是否显示图标 | `boolean` | `true` |
| duration | 自动关闭的时间，单位为 `ms` | `number` | `3000` |
| id | 当前消息的唯一标识，可以用来更新消息 | `string` | `-` |
| transitionClassNames | 消息弹出动画的类名，见 react-transition-group 的 `classNames` | `string` | `-` |
| position | 消息的位置，分为 `top` 上方和 `bottom` 下方 | `top \| bottom` | `-` |
| icon | 自定义图标 | `ReactNode` | `-` |
| className | 节点类名 | `string \| string[]` | `-` |
| content | 消息内容 | `ReactNode \| string` **(必填)** | `-` |
| style | 节点样式 | `CSSProperties` | `-` |
| onClose | 关闭时的回调 | `() => void` | `-` |

### 使用方法

- `Message.info(content: String)` / `Message.info(config: Object)`
- `Message.success(content: String)` / `Message.success(config: Object)`
- `Message.warning(content: String)` / `Message.warning(config: Object)`
- `Message.error(content: String)` / `Message.error(config: Object)`
- `Message.normal(content: String)` / `Message.normal(config: Object)`
- `Message.loading(content: String)` / `Message.loading(config: Object)`
- `Message.clear()`

### 全局设置

`Message.config(options)`

| 参数名       |        描述        |        类型         |                默认值 |
| ------------ | :----------------: | :-----------------: | --------------------: |
| maxCount     |    最大通知数量    |      `number`       |                   `-` |
| getContainer |   放置通知的容器   | `() => HTMLElement` | `() => document.body` |
| duration     | 通知自动关闭的时间 |      `number`       |                `3000` |
| prefixCls    |      类名前缀      |      `string`       |                `eyas` |
