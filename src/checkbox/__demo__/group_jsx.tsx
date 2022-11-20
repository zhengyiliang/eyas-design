import React, { useState } from 'react';
import { Checkbox, Grid } from 'eyas-ui';
const { Col, Row } = Grid;

function App() {
  const [value, setValue] = useState(['Option 1', 'Option 2']);
  return (
    <Checkbox.Group value={value} onChange={setValue}>
      <Row>
        <Col span={8} style={{ marginBottom: 12 }}>
          <Checkbox value="Option 1">Option 1</Checkbox>
        </Col>
        <Col span={8} style={{ marginBottom: 12 }}>
          <Checkbox disabled value="Option 2">
            Option 2
          </Checkbox>
        </Col>
        <Col span={8} style={{ marginBottom: 12 }}>
          <Checkbox value="Option 3">Option 3</Checkbox>
        </Col>
        <Col span={8}>
          <Checkbox value="Option 4">Option 4</Checkbox>
        </Col>
        <Col span={8}>
          <Checkbox value="Option 5">Option 5</Checkbox>
        </Col>
      </Row>
    </Checkbox.Group>
  );
}

export default App;
