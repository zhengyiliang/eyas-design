import React from 'react';
import { Message, Button } from 'eyas-ui';

function updateMessage() {
  Message.loading({
    id: 'need_update',
    content: 'Will update after 2 seconds...',
    duration: 4000,
  });
  setTimeout(() => {
    Message.success({
      id: 'need_update',
      content: 'Will update after 3 seconds!',
      duration: 3000,
    });
  }, 2000);
}

const App = () => {
  return (
    <Button onClick={updateMessage} type="primary">
      Update message
    </Button>
  );
};

export default App;
