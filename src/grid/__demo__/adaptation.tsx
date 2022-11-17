import React from 'react';
import { Grid } from 'eyas-ui';
import './index.less';

const Row = Grid.Row;
const Col = Grid.Col;

const App = () => {
  return (
    <Row className="grid-demo">
      <Col xs={2} sm={4} md={6} lg={8} xl={10} xxl={8}>
        Col
      </Col>
      <Col xs={20} sm={16} md={12} lg={8} xl={4} xxl={8}>
        Col
      </Col>
      <Col xs={2} sm={4} md={6} lg={8} xl={10} xxl={8}>
        Col
      </Col>
    </Row>
  );
};

export default App;
