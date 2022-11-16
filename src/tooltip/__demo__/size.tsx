import React from 'react';
import { Tooltip, Typography } from 'eyas-ui';
const { Text } = Typography;

const App = () => {
  return (
    <Tooltip mini content="123456789">
      <Text>Mouse over to display tooltip</Text>
    </Tooltip>
  );
};

export default App;
