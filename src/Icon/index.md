---
group:
  title: 通用
nav:
  path: /components
---

# 图标 Icon

基于 Arco Design 内置的大量图标。

## 基础用法

通过 `<IconXXX />` 的形式即可使用 Icon。 **注意**：使用驼峰命名法，例如 icon 的名字叫`arrow-back`，那么对应的 Icon 名称为`IconArrowBack`。

<code src="./__demo__/basics">

## 加载中

通过指定 `spin` 字段，可以将图标设置为旋转状态。

<code src="./__demo__/loading">

## 添加 iconbox 项目

也可以把 `iconbox` 或者 `iconfont.cn` 中的项目添加到 `Icon` 组件的 `type` 中。 调用组件库暴露的工具方法 `Icon.addFromIconfontCn`，把网站中导出 `symbol` 的代码传入 `src` 属性中加载项目图标库。

<code src="./__demo__/iconbox">

## 自定义 Icon

在使用 webpack 构建的时候，如果你想要使用自定义 Icon，需要配合引入@svgr/webpack。

```javascript
{
  test: /\.svg$/,
  use: ['@svgr/webpack'],
}
```

然后，直接引用 svg 文件即可：

```javascript
// import IconIronMan from './Iron Man.svg';

// <IconIronMan className="eyas-icon" style={{ fontSize: '50px' }} />
```

## API

### `<IconXXX />`

| 参数名    | 描述     | 类型                  | 默认值  |
| --------- | -------- | --------------------- | ------- |
| className | 按钮类名 | `string \| string[] ` | `--`    |
| style     | 按钮样式 | `CSSProperties `      | `--`    |
| spin      | 是否旋转 | `boolean`             | `false` |
