import React from 'react';
import { InputNumber } from 'eyas-ui';

function App() {
  return (
    <div>
      <InputNumber
        min={0}
        defaultValue={50}
        suffix="%"
        step={1}
        style={{ width: 160, margin: '10px 24px 10px 0' }}
      />
      <InputNumber
        min={0}
        defaultValue={500}
        prefix="¥"
        step={100}
        style={{ width: 160, margin: '10px 24px 10px 0' }}
      />
      <InputNumber
        mode="button"
        min={0}
        defaultValue={500}
        prefix="¥"
        step={100}
        style={{ width: 160, margin: '10px 24px 10px 0' }}
      />
    </div>
  );
}

export default App;
