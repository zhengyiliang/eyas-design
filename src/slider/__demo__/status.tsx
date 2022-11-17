import React from 'react';
import { Slider, Space } from 'eyas-ui';

function App() {
  return (
    <Space size={60}>
      <Slider defaultValue={30} style={{ width: 200 }} />
      <Slider defaultValue={30} disabled={true} style={{ width: 200 }} />
    </Space>
  );
}

export default App;
