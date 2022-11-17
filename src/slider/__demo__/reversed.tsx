import React, { useState } from 'react';
import { Slider, Switch, Typography, Space } from 'eyas-ui';

function App() {
  const [reverse, setReverse] = useState(true);
  return (
    <>
      <Space style={{ marginBottom: 24 }} size={4}>
        <Switch checked={reverse} onChange={setReverse} />
        <Typography.Text>Reversed</Typography.Text>
      </Space>
      <div>
        <Slider
          reverse={reverse}
          showTicks
          max={15}
          defaultValue={10}
          marks={{
            0: '0km',
            5: '5km',
            10: '10km',
            15: '15km',
          }}
          style={{ width: 200 }}
        />
      </div>
    </>
  );
}

export default App;
