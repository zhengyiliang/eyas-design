---
group:
  title: 数据输入
nav:
  path: /components
---

# 输入框 Input

基本表单组件，并在原生控件基础上进行了功能扩展，可以组合使用。

## 基本用法

通过鼠标或键盘输入内容。

```tsx
import React from 'react';
import { Input } from 'eyas-ui';

const App = () => {
  return <Input style={{ width: 350 }} allowClear placeholder="Please Enter something" />;
};

export default App;
```

## 输入框状态

不同的输入框状态

```tsx
import React from 'react';
import { Input, Space } from 'eyas-ui';

const App = () => {
  return (
    <Space wrap>
      <Input style={{ width: 350 }} error placeholder="error status" />
      <Input style={{ width: 350 }} disabled placeholder="disabled input" />
    </Space>
  );
};

export default App;
```
