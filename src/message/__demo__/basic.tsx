import React from 'react';

import { Message, Button } from 'eyas-ui';

const App = () => {
  return (
    <Button
      onClick={() => {
        Message.info('This is an info message!');
      }}
      type="primary"
    >
      Open Message
    </Button>
  );
};

export default App;
