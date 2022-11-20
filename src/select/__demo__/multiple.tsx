import React from 'react';
import { Select, Space, Tag } from 'eyas-ui';
const Option = Select.Option;
const options = ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', 'Chengdu', 'Wuhan'];

const App = () => {
  return (
    <Space size="large" direction="vertical">
      <Select
        mode="multiple"
        placeholder="Please select"
        style={{ width: 345 }}
        defaultValue={['Beijing', 'Shenzhen']}
        allowClear
      >
        {options.map((option) => (
          <Option key={option} value={option}>
            {option}
          </Option>
        ))}
      </Select>

      <Select
        mode="multiple"
        maxTagCount={2}
        placeholder="Please select"
        style={{ width: 345 }}
        defaultValue={['Beijing', 'Shenzhen', 'Wuhan']}
        allowClear
      >
        {options.map((option) => (
          <Option key={option} value={option}>
            {option}
          </Option>
        ))}
      </Select>

      <Select
        mode="multiple"
        maxTagCount={{ count: 2, render: (invisibleNumber) => `+${invisibleNumber} more` }}
        placeholder="Please select"
        style={{ width: 345 }}
        defaultValue={['Beijing', 'Shenzhen', 'Wuhan']}
        allowClear
      >
        {options.map((option) => (
          <Option key={option} value={option}>
            {option}
          </Option>
        ))}
      </Select>

      <Select
        mode="multiple"
        placeholder="Please select"
        style={{ width: 345 }}
        defaultValue={['Beijing', 'Shenzhen', 'Wuhan']}
        allowClear
        renderTag={({ label, value, closable, onClose }, index, valueList) => {
          const tagCount = valueList.length;

          if (tagCount > 2) {
            return index === 0 ? (
              <span style={{ marginLeft: 8 }}>{`${tagCount} cities selected`}</span>
            ) : null;
          }

          return (
            <Tag
              color="eyasblue"
              closable={closable}
              onClose={onClose}
              style={{ margin: '2px 6px 2px 0' }}
            >
              {label}
            </Tag>
          );
        }}
      >
        {options.map((option) => (
          <Option key={option} value={option}>
            {option}
          </Option>
        ))}
      </Select>
    </Space>
  );
};

export default App;
