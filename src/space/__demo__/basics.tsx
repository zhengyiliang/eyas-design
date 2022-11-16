import React from 'react';
import { Space, Button, Switch, Typography } from 'eyas-ui';

const App = () => {
  return (
    <Space>
      <Typography.Text>Space:</Typography.Text>
      <Button type="primary">Item1</Button>
      <Button type="primary">Item2</Button>
      <Switch defaultChecked />
    </Space>
  );
};

export default App;
