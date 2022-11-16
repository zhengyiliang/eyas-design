import React from 'react';
import { Switch, Space } from 'eyas-ui';
const App = () => {
  return (
    <Space size="large">
      <Switch />
      <Switch type="round" />
      <Switch type="line" />
    </Space>
  );
};

export default App;
