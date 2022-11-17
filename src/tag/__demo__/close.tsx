import React, { useState } from 'react';
import { Tag, Switch, Typography } from 'eyas-ui';
import { IconStar } from '@eyas-design/icons';

function App() {
  const [visible, setVisible] = useState(true);

  function onClose() {
    setVisible(!visible);
  }

  return (
    <div>
      <Tag closable visible={visible} onClose={onClose} style={{ margin: '0 24px' }}>
        Tag
      </Tag>
      <Tag icon={<IconStar />} closable visible={visible} onClose={onClose}>
        Tag
      </Tag>
      <div style={{ marginTop: 24 }}>
        <Switch style={{ margin: '0 8px' }} size="small" checked={visible} onChange={onClose} />
        <Typography.Text>Toggle</Typography.Text>
      </div>
    </div>
  );
}

export default App;
