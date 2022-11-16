import React, { useState } from 'react';
import { Typography, Divider } from 'eyas-ui';

function App() {
  const [str, setStr] = useState('Click the icon to edit this text.');
  return (
    <Typography>
      <Typography.Paragraph copyable>Click the icon to copy this text.</Typography.Paragraph>
      <Typography.Paragraph
        editable={{
          onChange: setStr,
        }}
      >
        {str}
      </Typography.Paragraph>
    </Typography>
  );
}

export default App;
