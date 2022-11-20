import React from 'react';
import { Empty } from 'eyas-ui';
import { IconExclamation } from '@eyas-design/icons';

const App = () => {
  return (
    <Empty
      icon={
        <div
          style={{
            background: '#f2994b',
            display: 'inline-flex',
            borderRadius: '50%',
            width: 50,
            height: 50,
            fontSize: 30,
            alignItems: 'center',
            color: 'white',
            justifyContent: 'center',
          }}
        >
          <IconExclamation />
        </div>
      }
      description="No data, please reload!"
    />
  );
};

export default App;
