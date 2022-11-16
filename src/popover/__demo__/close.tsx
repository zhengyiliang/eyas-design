import React from 'react';
import { Popover, Button, Space } from 'eyas-ui';

const style = {
  margin: 0,
};

function App() {
  const [visible, setVisible] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  return (
    <Space size={40}>
      <Popover
        title="Title"
        popupVisible={visible}
        onVisibleChange={setVisible}
        content={
          <span>
            <p style={style}>Here is the text content</p>
            <p style={style}>Here is the text content</p>
            <p style={{ ...style, textAlign: 'right', marginTop: 4 }}>
              <Button type="text" onClick={() => setVisible(false)}>
                Close
              </Button>
            </p>
          </span>
        }
      >
        <Button type="primary">Hover</Button>
      </Popover>
      <Popover
        title="Title"
        popupVisible={visible2} // button 触发 mouseenter的时候会调用该方法。更多的用法可以查看Trigger组件。
        onVisibleChange={(visible) => {
          if (visible) {
            setVisible2(true);
          }
        }}
        content={
          <span>
            <p style={style}>Here is the text content</p>
            <p style={style}>Here is the text content</p>
            <p style={{ ...style, textAlign: 'right', marginTop: 4 }}>
              <Button type="text" onClick={() => setVisible2(false)}>
                Close
              </Button>
            </p>
          </span>
        }
      >
        <Button type="primary">Will not close when moved out</Button>
      </Popover>
    </Space>
  );
}

export default App;
