import React from 'react';
import { Select, Space } from 'eyas-ui';
const Option = Select.Option;

const App = () => {
  return (
    <Space size="large">
      <Select
        placeholder="Please select"
        style={{ width: 154 }}
        triggerProps={{
          autoAlignPopupWidth: false,
          position: 'bl',
        }}
      >
        <Option value="1">Beijing</Option>
        <Option disabled value="2">
          Shanghai
        </Option>
        <Option value="3">Guangzhou</Option>
        <Option value="4">Shenzhen</Option>
      </Select>
      <Select
        placeholder="Please select"
        style={{ width: 154 }}
        triggerProps={{
          autoAlignPopupWidth: false,
          autoAlignPopupMinWidth: true,
          position: 'bl',
        }}
      >
        <Option value="1">Beijing Beijing Beijing Beijing Beijing</Option>
        <Option disabled value="2">
          Shanghai
        </Option>
        <Option value="3">Guangzhou</Option>
        <Option value="4">Shenzhen</Option>
      </Select>
    </Space>
  );
};

export default App;
