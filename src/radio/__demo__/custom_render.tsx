import React from 'react';
import { Radio, Button, Space, Typography } from 'eyas-ui';
import './index.less';

const App = () => {
  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <Radio.Group defaultValue={'Beijing'} name="button-radio-group">
          {['Beijing', 'Shanghai', 'Guangzhou'].map((item) => {
            return (
              <Radio key={item} value={item}>
                {({ checked }) => {
                  return (
                    <Button
                      tabIndex={-1}
                      key={item}
                      shape="round"
                      type={checked ? 'primary' : 'default'}
                    >
                      {item}
                    </Button>
                  );
                }}
              </Radio>
            );
          })}
        </Radio.Group>
      </div>
      <Radio.Group name="card-radio-group">
        {[1, 2].map((item) => {
          return (
            <Radio key={item} value={item}>
              {({ checked }) => {
                return (
                  <Space
                    align="start"
                    className={`custom-radio-card ${checked ? 'custom-radio-card-checked' : ''}`}
                  >
                    <div className="custom-radio-card-mask">
                      <div className="custom-radio-card-mask-dot"></div>
                    </div>
                    <div>
                      <div className="custom-radio-card-title">Radio Card {item}</div>
                      <Typography.Text type="secondary">this is a text</Typography.Text>
                    </div>
                  </Space>
                );
              }}
            </Radio>
          );
        })}
      </Radio.Group>
    </div>
  );
};

export default App;
