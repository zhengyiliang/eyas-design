import React from 'react';
import { Input, Space } from 'eyas-ui';
const TextArea = Input.TextArea;

const App = () => {
  return (
    <Space wrap>
      <TextArea placeholder="Please enter ..." style={{ minHeight: 64, width: 350 }} />
      <TextArea defaultValue="Disabled" style={{ minHeight: 64, width: 350 }} disabled />
    </Space>
  );
};

export default App;
