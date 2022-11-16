import React from 'react';
import { Button, Space } from 'eyas-ui';

export default () => (
  <Space size="large" wrap>
    <Button type="primary">Primary</Button>
    <Button type="secondary">Secondary</Button>
    <Button type="dashed" hoverable>
      Dashed
    </Button>
    <Button type="outline">Outline</Button>
    <Button type="text">Text</Button>
  </Space>
);
