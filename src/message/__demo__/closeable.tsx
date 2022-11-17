import React from 'react';
import { Message, Button } from 'eyas-ui';

const App = () => {
  return (
    <Button
      onClick={() => {
        Message.info({
          content: 'This is a message!',
          closable: true,
          duration: 10000,
        });
      }}
      type="primary"
    >
      Open Message
    </Button>
  );
};

export default App;
