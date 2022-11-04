---
group: 
  title: 通用
nav:
  path: /components
---

# Button 按钮
按钮是一种命令组件，可发起一个及时操作

## 基本用法
按钮分为 主要按钮、次要按钮、虚线按钮、线行按钮和文本按钮五种

```tsx
import React from 'react';
import { Button, Space } from 'eyas-ui';

export default () => <Space size="large" wrap>
      <Button type="primary">Primary</Button>
      <Button type="secondary">Secondary</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="outline">Outline</Button>
      <Button type="text">Text</Button>
    </Space>;
```

## 图标按钮
Button 可以嵌入图表，在只设置图标而没有 children 时，按钮得高宽相等。
```tsx
import React from 'react';
import {Button, Space} from  'eyas-ui';
import {PlusOutlined,DeleteOutlined } from '@ant-design/icons';
export default () => <Space size="large">
   <Button type='primary' icon={<PlusOutlined />} />
   <Button type='primary' icon={<DeleteOutlined />}>
        Delete
   </Button>
</Space>
```

<API />

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
