import React from 'react';
import { Tabs, Typography } from 'eyas-ui';
import { StickyContainer, Sticky } from 'react-sticky';
const TabPane = Tabs.TabPane;
const style = {
  textAlign: 'center',
  marginTop: 20,
};

const App = () => {
  return (
    <StickyContainer>
      <Tabs
        defaultActiveTab="3"
        renderTabHeader={(props, DefaultTabHeader) => {
          return (
            <Sticky topOffset={-52}>
              {({ style, isSticky }) => (
                <DefaultTabHeader
                  {...props}
                  style={{
                    ...style,
                    top: isSticky ? 52 : 0,
                    background: 'var(--color-bg-2)',
                  }}
                />
              )}
            </Sticky>
          );
        }}
      >
        <TabPane key="1" title="Tab 1" style={{ height: 300 }}>
          <Typography.Paragraph style={style}>Content of Tab Panel 1</Typography.Paragraph>
        </TabPane>
        <TabPane key="2" title="Tab 2">
          <Typography.Paragraph style={style}>Content of Tab Panel 2</Typography.Paragraph>
        </TabPane>
        <TabPane key="3" title="Tab 3">
          <Typography.Paragraph style={style}>Content of Tab Panel 3</Typography.Paragraph>
        </TabPane>
      </Tabs>
    </StickyContainer>
  );
};

export default App;
