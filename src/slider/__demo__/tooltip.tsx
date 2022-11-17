import React from 'react';
import { Slider, Space } from 'eyas-ui';

function App() {
  return (
    <Space size={60}>
      <Slider
        defaultValue={20}
        tooltipVisible={true}
        style={{ marginBottom: 80 }}
        onAfterChange={(value) => {
          console.log(value);
        }}
        style={{ width: 200, marginRight: 100 }}
      />
      <Slider
        range
        defaultValue={[0, 50]}
        tooltipVisible={true}
        onAfterChange={(value) => {
          console.log(value);
        }}
        style={{ width: 200 }}
      />
    </Space>
  );
}

export default App;
