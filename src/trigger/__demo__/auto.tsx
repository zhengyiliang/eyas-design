import React from 'react';
import { Button, Popconfirm, Message } from 'eyas-ui';
import './index.less';

const props = {
  getPopupContainer: () => document.querySelector('.popup-container'),
  title: '确认编辑该选项吗？',
  onOk: () => {
    Message.info({
      content: '你点击了确认',
    });
  },
  onCancel: () => {
    Message.error({
      content: '你点击了取消',
    });
  },
};

class App extends React.Component {
  render() {
    return (
      <div
        className="popup-container"
        style={{
          width: 300,
          height: 300,
          overflow: 'auto',
        }}
      >
        <div
          style={{
            width: 450,
            height: 300,
            position: 'relative',
          }}
        >
          <Popconfirm position="bottom" {...props} getPopupContainer={(node) => node.parentElement}>
            <Button style={{ margin: '0 200px' }}>popover</Button>
          </Popconfirm>
        </div>
      </div>
    );
  }
}

export default App;
