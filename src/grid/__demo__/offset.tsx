import React from 'react';
import { Grid } from 'eyas-ui';
import './index.less';

const Row = Grid.Row;
const Col = Grid.Col;

const App = () => {
  return (
    <div style={{ width: '100%' }}>
      <Row
        className="grid-demo"
        style={{ marginBottom: 16, backgroundColor: 'var(--color-fill-2)' }}
      >
        <Col span={8}>col - 8</Col>
        <Col span={8} offset={8}>
          col - 8 | offset - 8
        </Col>
      </Row>
      <Row
        className="grid-demo"
        style={{ marginBottom: 16, backgroundColor: 'var(--color-fill-2)' }}
      >
        <Col span={6} offset={8}>
          col - 6 | offset - 8
        </Col>
        <Col span={6} offset={4}>
          col - 6 | offset - 4
        </Col>
      </Row>
      <Row className="grid-demo" style={{ backgroundColor: 'var(--color-fill-2)' }}>
        <Col span={12} offset={8}>
          col - 12 | offset - 8
        </Col>
      </Row>
    </div>
  );
};

export default App;
