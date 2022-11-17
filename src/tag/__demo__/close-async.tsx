import React from 'react';
import { Tag, Message } from 'eyas-ui';

const App = () => {
  return (
    <Tag
      closable
      onClose={() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (Math.random() >= 0.5) {
              resolve();
            } else {
              Message.error('Close failed');
              reject();
            }
          }, 3000);
        });
      }}
    >
      Tag 1
    </Tag>
  );
};

export default App;
