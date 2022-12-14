import React from 'react';
import { Tabs, Typography } from 'eyas-ui';

const TabPane = Tabs.TabPane;
const style = {
  textAlign: 'center',
  marginTop: 20,
};

const App = () => {
  return (
    <Tabs defaultActiveTab="1">
      <TabPane key="1" title="Tab 1">
        <Typography.Paragraph style={style}>Content of Tab Panel 1</Typography.Paragraph>
      </TabPane>
      <TabPane key="2" title="Tab 2" disabled>
        <Typography.Paragraph style={style}>Content of Tab Panel 2</Typography.Paragraph>
      </TabPane>
      <TabPane key="3" title="Tab 3">
        <Typography.Paragraph style={style}>Content of Tab Panel 3</Typography.Paragraph>
      </TabPane>
    </Tabs>
  );
};

export default App;
