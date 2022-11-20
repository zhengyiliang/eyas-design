import React from 'react';
import { InputTag } from 'eyas-ui';

const App = () => {
  return (
    <InputTag style={{ maxWidth: 350 }} allowClear dragToSort defaultValue={['a', 'b', 'c', 'd']} />
  );
};

export default App;
