import React from 'react';
import { Divider, Typography } from 'eyas-ui';
import { IconFileImage, IconUser, IconPen } from '@eyas-design/icons';
const { Paragraph, Title } = Typography;

const contentStyle = {
  boxSizing: 'border-box',
  width: 560,
  padding: 24,
  border: '30px solid #eee',
};

const flexCenter = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const avatar = {
  width: 40,
  height: 40,
  marginRight: 16,
  borderRadius: '50%',
  fontSize: 16,
  backgroundColor: '#eee',
};

const App = () => {
  return (
    <>
      <div style={contentStyle}>
        <Paragraph>
          A design is a plan or specification for the construction of an object.
        </Paragraph>
        <Divider />
        <Paragraph>
          A design is a plan or specification for the construction of an object.
        </Paragraph>
        <Divider
          style={{
            borderBottomStyle: 'dashed',
          }}
        />
        <Paragraph>
          A design is a plan or specification for the construction of an object.
        </Paragraph>
        <Divider
          style={{
            borderBottomWidth: 2,
            borderBottomStyle: 'dotted',
          }}
        />
        <Paragraph>
          A design is a plan or specification for the construction of an object.
        </Paragraph>
      </div>
      <div style={contentStyle}>
        <div style={flexCenter}>
          <span style={{ ...flexCenter, ...avatar }}>
            <IconFileImage />
          </span>
          <div
            style={{
              flex: 1,
              fontSize: 12,
              lineHeight: '20px',
            }}
          >
            <Title heading={6}>Image</Title>May 4, 2010
          </div>
        </div>
        <Divider
          style={{
            marginBottom: 2,
            fontSize: 16,
            lineHeight: '24px',
          }}
        />
        <div style={flexCenter}>
          <span style={{ ...flexCenter, ...avatar }}>
            <IconUser />
          </span>
          <div
            style={{
              flex: 1,
              fontSize: 12,
              lineHeight: '20px',
            }}
          >
            <Title heading={6}>Avatar</Title>May 4, 2010
          </div>
        </div>
        <Divider
          style={{
            marginBottom: 2,
            fontSize: 16,
            lineHeight: '24px',
          }}
        />
        <div style={flexCenter}>
          <span style={{ ...flexCenter, ...avatar }}>
            <IconPen />
          </span>
          <div
            style={{
              flex: 1,
              fontSize: 12,
              lineHeight: '20px',
            }}
          >
            <Title heading={6}>Icon</Title>May 4, 2010
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
