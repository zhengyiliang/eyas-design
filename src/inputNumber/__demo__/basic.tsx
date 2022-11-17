import React from 'react';

import { InputNumber } from 'eyas-ui';

const App = () => {
  return (
    <div>
      <InputNumber
        placeholder="Please enter"
        min={0}
        max={15}
        style={{ width: 160, margin: '10px 24px 10px 0' }}
      />
      <InputNumber disabled defaultValue={500} style={{ width: 160, margin: '10px 24px 10px 0' }} />
    </div>
  );
};

export default App;
