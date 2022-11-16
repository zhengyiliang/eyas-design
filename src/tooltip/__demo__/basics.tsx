import React from 'react';
import { Tooltip, Typography } from 'eyas-ui';
const { Text } = Typography;

const App = () => {
  return (
    <div>
      <Tooltip content="This is tooltip content">
        <Text style={{ marginRight: 20 }}>Mouse over to display tooltip</Text>
      </Tooltip>
      <Tooltip content="This is a two-line tooltip content.This is a two-line tooltip content.">
        <Text>Mouse over to display multiple lines tooltip</Text>
      </Tooltip>
    </div>
  );
};

export default App;
