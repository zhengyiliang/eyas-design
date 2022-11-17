import React from 'react';
import { Tag, Space } from 'eyas-ui';
import { IconCheckCircleFill } from '@eyas-design/icons';

const App = () => {
  return (
    <Space size="large">
      <Tag>Default</Tag>
      <Tag>Tag 1</Tag>
      <Tag>Tag 2</Tag>
      <Tag icon={<IconCheckCircleFill />}>Complete</Tag>
    </Space>
  );
};

export default App;
