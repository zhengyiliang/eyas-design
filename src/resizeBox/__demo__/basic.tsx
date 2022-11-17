import React from 'react';
import { ResizeBox, Divider, Typography } from 'eyas-ui';

const { Paragraph } = Typography;

const App = () => {
  return (
    <div>
      <ResizeBox
        directions={['right', 'bottom']}
        style={{
          width: 500,
          minWidth: 100,
          maxWidth: '100%',
          height: 200,
          textAlign: 'center',
        }}
      >
        <Paragraph>We are building the future of content discovery and creation.</Paragraph>
        <Divider />
        <Paragraph>
          ByteDance's content platforms enable people to enjoy content powered by AI technology. We
          inform, entertain, and inspire people across language, culture and geography.
        </Paragraph>
        <Divider>ByteDance</Divider>
        <Paragraph>Yiming Zhang is the founder and CEO of ByteDance.</Paragraph>
      </ResizeBox>
    </div>
  );
};

export default App;
