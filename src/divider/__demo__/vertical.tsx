import React from 'react';
import { Divider, Typography } from 'eyas-ui';
const { Text } = Typography;

const App = () => {
  return (
    <div
      style={{
        boxSizing: 'border-box',
        width: 560,
        padding: 24,
        border: '30px solid #eee',
      }}
    >
      <Text>Item 1</Text>
      <Divider type="vertical" />
      <Text>Item 2</Text>
      <Divider type="vertical" />
      <Text>Item 3</Text>
    </div>
  );
};

export default App;
