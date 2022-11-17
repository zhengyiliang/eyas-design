import React, { useState } from 'react';
import { Slider, Space } from 'eyas-ui';
import { IconSound, IconMute } from '@eyas-design/icons';

function App() {
  const [value, setValue] = useState(10);
  return (
    <Space style={{ maxWidth: '60%', minWidth: '20%' }} size={100}>
      <div
        style={{
          width: 22,
          textAlign: 'center',
          display: 'inline-block',
        }}
      >
        <Slider value={value} onChange={setValue} vertical />
        {value ? <IconSound style={{ fontSize: 16, color: 'var(--color-text-1)' }} /> : null}
        {!value ? <IconMute style={{ fontSize: 16, color: 'var(--color-text-1)' }} /> : null}
      </div>
      <Slider
        range
        max={20}
        vertical
        defaultValue={[5, 10]}
        marks={{
          5: '5km',
          10: '10km',
        }}
        style={{ verticalAlign: 'top' }}
      />
    </Space>
  );
}

export default App;
