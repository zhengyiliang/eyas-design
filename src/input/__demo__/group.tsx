import React from 'react';
import { Input, Grid, Select } from 'eyas-ui';
import { IconMinus } from '@eyas-design/icons';
const InputSearch = Input.Search;

const App = () => {
  return (
    <div>
      <Grid.Row>
        <div
          style={{
            marginRight: 24,
            width: 360,
            display: 'inline-block',
            marginBottom: 24,
          }}
        >
          <Input.Group compact>
            <Select defaultValue="Beijing" showSearch style={{ width: '25%' }}>
              <Select.Option value="Beijing">Beijing</Select.Option>
              <Select.Option value="Tianjin">Tianjin</Select.Option>
              <Select.Option value="Shanghai">Shanghai</Select.Option>
            </Select>
            <Input style={{ width: '75%' }} placeholder="Please enter an address" />
          </Input.Group>
        </div>
        <div
          style={{
            marginRight: 24,
            width: 360,
            display: 'inline-block',
            marginBottom: 24,
          }}
        >
          <Input.Group compact>
            <Select defaultValue="Beijing" showSearch style={{ width: '25%' }}>
              <Select.Option value="Beijing">Beijing</Select.Option>
              <Select.Option value="Tianjin">Tianjin</Select.Option>
              <Select.Option value="Shanghai">Shanghai</Select.Option>
            </Select>
          </Input.Group>
        </div>
        <div
          style={{
            marginRight: 24,
            width: 360,
            display: 'inline-block',
            marginBottom: 24,
          }}
        >
          <Input.Group compact>
            <Select defaultValue="Beijing" showSearch style={{ width: '25%' }}>
              <Select.Option value="Beijing">Beijing</Select.Option>
              <Select.Option value="Tianjin">Tianjin</Select.Option>
              <Select.Option value="Shanghai">Shanghai</Select.Option>
            </Select>
            <InputSearch placeholder="Search" style={{ width: '75%' }} />
          </Input.Group>
        </div>
      </Grid.Row>
      <Grid.Row>
        <div
          style={{
            marginRight: 24,
            width: 360,
            display: 'inline-block',
            marginBottom: 24,
          }}
        >
          <Input.Group>
            <Input style={{ width: '24%', marginRight: 8 }} value="010" readOnly />
            <Input style={{ width: '60%' }} placeholder="Phone number" />
          </Input.Group>
        </div>
        <div
          style={{
            marginRight: 24,
            width: 360,
            display: 'inline-block',
            marginBottom: 24,
          }}
        >
          <Input.Group>
            <Input style={{ width: '24%', marginRight: 8 }} value="010" readOnly />
            <IconMinus style={{ color: 'var(--color-text-1)' }} />
            <Input
              style={{ width: '60%', marginLeft: 8 }}
              defaultValue="8899887"
              placeholder="Phone number"
            />
          </Input.Group>
        </div>
      </Grid.Row>
    </div>
  );
};

export default App;
