import React from 'react';
import { Switch, Space } from 'eyas-ui';

const App = () => {
  return (
    <Space size="large">
      <Switch />
      <Switch size="small" />
      <Switch type="round" />
      <Switch size="small" type="round" />
      <Switch type="line" />
      <Switch size="small" type="line" />
    </Space>
  );
};

export default App;
