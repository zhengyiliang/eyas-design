import React from 'react';
import { ResizeBox, Typography } from 'eyas-ui';

const rightPane = (
  <div>
    <ResizeBox.Split
      direction="vertical"
      style={{ height: 200 }}
      panes={[
        <Typography.Paragraph>Top</Typography.Paragraph>,
        <Typography.Paragraph>Bottom</Typography.Paragraph>,
      ]}
    ></ResizeBox.Split>
  </div>
);

const App = () => {
  return (
    <div>
      <ResizeBox.Split
        style={{
          height: 200,
          width: 500,
          border: '1px solid var(--color-border)',
        }}
        panes={[<Typography.Paragraph>Right</Typography.Paragraph>, rightPane]}
      ></ResizeBox.Split>
    </div>
  );
};

export default App;
