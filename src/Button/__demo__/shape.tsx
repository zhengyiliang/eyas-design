import React from 'react';
import { Button, Space } from 'eyas-ui';
import { IconPlus } from '@eyas-design/icons';

export default () => (
  <Space size="large">
    <Button type="primary" icon={<IconPlus />} />
    <Button shape="circle" type="primary" icon={<IconPlus />} />
    <Button shape="round" type="primary">
      Primary
    </Button>
    <Button type="primary">Primary</Button>
  </Space>
);
