import React from 'react';
import { Skeleton } from 'eyas-ui';

const App = () => {
  return (
    <Skeleton
      text={{
        rows: 3,
        width: ['100%', 600, 400],
      }}
      image
    ></Skeleton>
  );
};

export default App;
