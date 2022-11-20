import React from 'react';
import { Select, Message, Space } from 'eyas-ui';
const Option = Select.Option;
const options = ['Beijing', 'Shanghai', 'Guangzhou', 'Tianjin'];

const App = () => {
  return (
    <Space size="large">
      <Select
        addBefore="Select city"
        placeholder="Please select"
        style={{ width: 300 }}
        onChange={(value) =>
          Message.info({
            content: `You select ${value}.`,
            showIcon: true,
          })
        }
      >
        {options.map((option, index) => (
          <Option key={option} value={option}>
            {option}
          </Option>
        ))}
      </Select>
      <Select addBefore="Select city" style={{ width: 300 }} mode="multiple">
        {options.map((option, index) => (
          <Option key={option} disabled={index === 4} value={option}>
            {option}
          </Option>
        ))}
      </Select>
    </Space>
  );
};

export default App;
