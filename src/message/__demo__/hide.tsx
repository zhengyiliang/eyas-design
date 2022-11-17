import React from 'react';
import { Message, Button } from 'eyas-ui';

function updateMessage() {
  const close = Message.info({
    content: 'Close after 2 seconds...',
    duration: 0,
  });
  setTimeout(() => {
    close();
  }, 2000);
}

const App = () => {
  return (
    <Button onClick={updateMessage} type="primary">
      Close after 2 seconds
    </Button>
  );
};

export default App;
