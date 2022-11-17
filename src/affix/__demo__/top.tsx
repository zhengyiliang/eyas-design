import React from 'react';
import { Affix, Button } from 'eyas-ui';

const App = () => {
  return (
    <Affix offsetTop={80}>
      <Button type="primary">80px to affix top</Button>
    </Affix>
  );
};

export default App;
