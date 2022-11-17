import React from 'react';
import { Radio, Space } from 'eyas-ui';

const App = () => {
  return (
    <Space size={40}>
      <Radio>Radio</Radio>
      <Radio checked disabled>
        Disabled Radio
      </Radio>
    </Space>
  );
};

export default App;
