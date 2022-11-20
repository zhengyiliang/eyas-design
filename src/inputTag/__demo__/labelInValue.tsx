import React from 'react';
import { InputTag } from 'eyas-ui';

const App = () => {
  return (
    <InputTag
      allowClear
      labelInValue
      defaultValue={[
        {
          label: 'a',
          value: '1',
        },
      ]}
      placeholder="Please input"
      style={{ maxWidth: 350 }}
      onChange={(v) => {
        console.log(v);
      }}
    />
  );
};

export default App;
