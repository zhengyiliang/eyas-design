import React from 'react';
import { Select, Message, Space } from 'eyas-ui';
const Option = Select.Option;
const options = ['Beijing', 'Shanghai', 'Guangzhou', 'Disabled'];

const App = () => {
  return (
    <Space size="large">
      <Select
        placeholder="Please select"
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
      <Select placeholder="Select city" style={{ width: 154 }} defaultValue="Beijing" disabled>
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
