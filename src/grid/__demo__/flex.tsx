import React from 'react';
import { Grid } from 'eyas-ui';
import './index.less';

const Row = Grid.Row;
const Col = Grid.Col;

const App = () => {
  return (
    <div style={{ width: '100%' }}>
      <Row className="grid-demo" style={{ marginBottom: 16 }}>
        <Col flex="100px">
          <div>100px</div>
        </Col>
        <Col flex="auto">
          <div>auto</div>
        </Col>
      </Row>
      <Row className="grid-demo" style={{ marginBottom: 16 }}>
        <Col flex="100px">
          <div>100px</div>
        </Col>
        <Col flex="auto">
          <div>auto</div>
        </Col>
        <Col flex="100px">
          <div>100px</div>
        </Col>
      </Row>
      <Row className="grid-demo" style={{ marginBottom: 16 }}>
        <Col flex={3}>
          <div>3 / 12</div>
        </Col>
        <Col flex={4}>
          <div>4 / 12</div>
        </Col>
        <Col flex={5}>
          <div>5 / 12</div>
        </Col>
      </Row>
    </div>
  );
};

export default App;
