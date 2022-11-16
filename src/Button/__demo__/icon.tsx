import React from 'react';
import { Button, Space } from 'eyas-ui';
import { IconPlus, IconDelete } from '@eyas-design/icons';

export default () => (
  <Space size="large">
    <Button type="primary" icon={<IconPlus />} />
    <Button type="primary" icon={<IconDelete />}>
      Delete
    </Button>
  </Space>
);
