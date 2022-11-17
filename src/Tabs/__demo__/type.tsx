import React, { useState } from 'react';
import { Tabs, Radio, Typography } from 'eyas-ui';
const TabPane = Tabs.TabPane;
const style = {
  textAlign: 'center',
  marginTop: 20,
};

function App() {
  const [type, setType] = useState('line');
  return (
    <div>
      <Radio.Group name="type" value={type} onChange={setType} style={{ marginBottom: 40 }}>
        <Radio value="line">line</Radio>
        <Radio value="card">card</Radio>
        <Radio value="card-gutter">card-gutter</Radio>
        <Radio value="text">text</Radio>
        <Radio value="rounded">rounded</Radio>
        <Radio value="capsule">capsule</Radio>
      </Radio.Group>

      <Tabs type={type}>
        <TabPane key="1" title="Tab 1">
          <Typography.Paragraph style={style}>Content of Tab Panel 1</Typography.Paragraph>
        </TabPane>
        <TabPane key="2" title="Tab 2" disabled>
          <Typography.Paragraph style={style}>Content of Tab Panel 2</Typography.Paragraph>
        </TabPane>
        <TabPane key="3" title="Tab 3">
          <Typography.Paragraph style={style}>Content of Tab Panel 3</Typography.Paragraph>
        </TabPane>
        <TabPane key="4" title="Tab 4">
          <Typography.Paragraph style={style}>Content of Tab Panel 4</Typography.Paragraph>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default App;
