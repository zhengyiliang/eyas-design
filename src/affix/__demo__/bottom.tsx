import React from 'react';
import { Affix, Button } from 'eyas-ui';

const App = () => {
  return (
    <Affix offsetBottom={120}>
      <Button type="primary">120px to affix bottom</Button>
    </Affix>
  );
};

export default App;
