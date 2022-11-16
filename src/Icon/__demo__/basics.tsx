import React from 'react';
import { Tooltip } from 'eyas-ui';
import { IconStar } from '@eyas-design/icons';

const App = () => {
  return (
    <div>
      <Tooltip content="This is IconStar">
        <IconStar style={{ fontSize: 24, marginRight: 20 }} />
      </Tooltip>
      <IconStar style={{ fontSize: 24, color: '#ffcd00' }} />
    </div>
  );
};

export default App;
