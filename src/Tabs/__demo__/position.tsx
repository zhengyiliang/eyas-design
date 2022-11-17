import React, { useState } from 'react';
import { Tabs, Radio, Typography } from 'eyas-ui';
const TabPane = Tabs.TabPane;
const style = {
  textAlign: 'center',
  marginTop: 20,
};

function App() {
  const [position, setPosition] = useState('top');
  return (
    <div>
      <Radio.Group
        type="button"
        name="position"
        value={position}
        onChange={setPosition}
        style={{ marginBottom: 40 }}
        options={['left', 'top', 'bottom', 'right']}
      ></Radio.Group>

      <Tabs key="card" tabPosition={position}>
        <TabPane key="1" title="Tab 1">
          <Typography.Paragraph style={style}>Content of Tab Panel 1</Typography.Paragraph>
        </TabPane>
        <TabPane key="2" title="Tab 2">
          <Typography.Paragraph style={style}>Content of Tab Panel 2</Typography.Paragraph>
        </TabPane>
        <TabPane key="3" title="Tab 3">
          <Typography.Paragraph style={style}>Content of Tab Panel 3</Typography.Paragraph>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default App;
