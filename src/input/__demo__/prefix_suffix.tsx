import React from 'react';
import { Input, Space } from 'eyas-ui';
import { IconUser, IconSearch, IconInfoCircle } from '@eyas-design/icons';

const App = () => {
  return (
    <Space direction="vertical">
      <Space wrap>
        <Input style={{ width: 350 }} prefix={<IconUser />} placeholder="Please enter" />
        <Input
          allowClear
          style={{ width: 350 }}
          suffix={<IconInfoCircle />}
          placeholder="Please enter"
        />
      </Space>
      <Space wrap>
        <Input
          style={{ width: 350 }}
          prefix={<IconUser />}
          suffix={<IconInfoCircle />}
          placeholder="Please enter"
        />
        <Input
          style={{ width: 350 }}
          addBefore="+86"
          addAfter={<IconSearch />}
          prefix={<IconUser />}
          suffix={<IconInfoCircle />}
          allowClear
          placeholder="Please enter"
        />
      </Space>
    </Space>
  );
};

export default App;
