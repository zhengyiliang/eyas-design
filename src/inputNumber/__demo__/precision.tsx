import React from 'react';
import { InputNumber } from 'eyas-ui';

const App = () => {
  return (
    <div>
      <InputNumber
        min={0}
        max={40}
        defaultValue={3.5}
        step={0.1}
        precision={1}
        style={{ width: 160, margin: '10px 24px 10px 0' }}
      />
      <InputNumber
        min={0}
        max={40}
        defaultValue={1.11}
        step={0.01}
        precision={1}
        style={{ width: 160, margin: '10px 24px 10px 0' }}
      />
    </div>
  );
};

export default App;
