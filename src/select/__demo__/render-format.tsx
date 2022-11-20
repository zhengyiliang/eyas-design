import React from 'react';
import { Select, Space } from 'eyas-ui';
import { IconStar, IconDelete } from '@eyas-design/icons';
const Option = Select.Option;

function App() {
  const data = ['Beijing', 'Guangzhou', 'Shanghai', 'Shenzhen'];
  return (
    <Space size="large">
      <Select
        placeholder="Select city"
        style={{ width: 345 }}
        renderFormat={(option, value) => {
          return option ? (
            <span>
              <IconStar style={{ color: '#f7ba1e' }} />
              {` ${option.value} `}
            </span>
          ) : (
            value
          );
        }}
      >
        {data.map((item, index) => (
          <Option value={item} key={index}>
            {item}
          </Option>
        ))}
      </Select>

      <Select
        placeholder="Select city"
        style={{ width: 345 }}
        mode="multiple"
        removeIcon={<IconDelete />}
        defaultValue={['Beijing', 'Shenzhen']}
        renderFormat={(option, value) => {
          // When labelInValue is true, the value is an object
          return option ? (
            <span>
              <IconStar
                style={{
                  color: '#f7ba1e',
                }}
              />
              {` ${option.value} City `}
            </span>
          ) : (
            value
          );
        }}
      >
        {data.map((item, index) => (
          <Option value={item} key={index}>
            {item}
          </Option>
        ))}
      </Select>
    </Space>
  );
}

export default App;
