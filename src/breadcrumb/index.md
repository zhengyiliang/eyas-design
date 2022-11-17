---
group:
  title: 导航
nav:
  path: /components
---

# 面包屑 Breadcrumb

面包屑是辅助导航模式，用于识别页面在层次结构内的位置，并根据需要向上返回。

## 基础用法

适用于广泛基本用法。分隔方式分为图标分隔及斜线分隔两种方式，可根据不同场景使用。

<code src="./__demo__/basic">

## 自定义分隔符

自定义分隔符

<code src="./__demo__/separator">

## 自定义尺寸

通过指定样式来自定义各种面包屑的尺寸。

<code src="./__demo__/size">

## 自定义图标

可以在内容中使用自定义图标

<code src="./__demo__/icon">

## 带有下拉菜单

通过 `droplist` 或者 `routes` 来指定下拉菜单。

<code src="./__demo__/with-dropdown">

## 显示省略

通过 `maxCount` 来指定最多渲染的面包屑数量，超出的部分将显示为省略号。

## API

### Breadcrumb

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| maxCount | 最多渲染的面包屑数量 | `number` | `-` |
| separator | 指定分割符 | `string \| ReactNode` | `<IconObliqueLine />` |
| className | 节点类名 | `string \| string[]` | `-` |
| routes | 直接设置下拉菜单 | `RouteProps` | `-` |
| style | 节点样式 | `CSSProperties` | `-` |
| itemRender | routes 时生效，自定义渲染面包屑 | `(route: RouteProps, routes: RouteProps, paths: string[]) => ReactNode` | `-` |

### Breadcrumb.Item

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| href | 超链接地址 | `string` | `-` |
| droplist | 下拉菜单的内容，等同于下拉菜单组件的 droplist 属性 | `DropdownProps` | `-` |
| className | 节点类名 | `string \| string[]` | `-` |
| dropdownProps | 下拉菜单的属性 [DropdownProps](/components/breadcrumb/#routeprops) | `DropdownProps` | `-` |
| style | 节点样式 | `CSSProperties` | `-` |
| tagName | 标签名，可以是 html 标签或是组件 | `string \| React.FC&lt;any&gt; \| React.ComponentClass&lt;any&gt;` | `div` |
| onClick | 点击回调 | `(e: any) => void` | `-` |

### RouteProps

```js
export interface RouteProps {
  path: string;
  breadcrumbName: string;
  children?: Array<{
    path: string,
    breadcrumbName: string,
  }>;
}
```
