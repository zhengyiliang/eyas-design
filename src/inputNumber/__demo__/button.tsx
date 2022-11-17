import React from 'react';
import { InputNumber } from 'eyas-ui';

const App = () => {
  return (
    <div>
      <InputNumber
        mode="button"
        defaultValue={500}
        style={{ width: 160, margin: '10px 24px 10px 0' }}
      />
      <InputNumber
        mode="button"
        disabled
        defaultValue={500}
        style={{ width: 160, margin: '10px 24px 10px 0' }}
      />
    </div>
  );
};

export default App;
