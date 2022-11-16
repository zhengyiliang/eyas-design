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
