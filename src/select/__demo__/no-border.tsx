import React from 'react';
import { Select, Message, Space } from 'eyas-ui';
const Option = Select.Option;
const options = ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', 'Chengdu', 'Wuhan'];

const App = () => {
  return (
    <Space size="large">
      <Select
        placeholder="Please select"
        bordered={false}
        style={{ width: 154 }}
        onChange={(value) =>
          Message.info({
            content: `You select ${value}.`,
            showIcon: true,
          })
        }
      >
        {options.map((option, index) => (
          <Option key={option} disabled={index === 3} value={option}>
            {option}
          </Option>
        ))}
      </Select>
      <Select
        placeholder="Please select"
        bordered={false}
        style={{ width: 154 }}
        defaultValue="Beijing"
        disabled
      >
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
