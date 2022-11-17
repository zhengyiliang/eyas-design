import React from 'react';
import { Affix, Button, Message } from 'eyas-ui';

const App = () => {
  return (
    <Affix
      offsetBottom={80}
      onChange={(fixed) => {
        Message.info({
          content: `${fixed}`,
          showIcon: true,
        });
      }}
    >
      <Button type="primary">80px to affix bottom</Button>
    </Affix>
  );
};

export default App;
