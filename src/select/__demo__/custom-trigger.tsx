import React, { useState, useRef } from 'react';
import { Select, Typography, Button } from 'eyas-ui';
import './index.less';

const Option = Select.Option;

const DemoSelect = () => {
  const refSelect = useRef(null);
  const [text, setText] = useState('None');
  return (
    <div>
      <Select
        ref={refSelect}
        mode="multiple"
        onChange={(_, option) => {
          const array = option.map((item) => item.children);
          setText(array.join('，') || 'None');
        }}
        triggerElement={
          <Typography.Paragraph
            style={{
              width: 300,
            }}
            className="trigger-element"
            tabIndex={0}
            onKeyDown={(e) => {
              refSelect.current && refSelect.current.hotkeyHandler(e);
            }}
          >
            Favorite Cities：<Button type="text">{text}</Button>
          </Typography.Paragraph>
        }
      >
        <Option value="1">Beijing</Option>
        <Option disabled value="2">
          Shanghai
        </Option>
        <Option value="3">Shenzhen</Option>
        <Option value="4">Wuhan</Option>
      </Select>
    </div>
  );
};

const App = () => {
  return <DemoSelect />;
};

export default App;
