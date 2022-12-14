import React from 'react';
import { Typography } from 'eyas-ui';
const { Title, Paragraph, Text } = Typography;

const App = () => {
  return (
    <Typography style={{ marginTop: -40 }}>
      <Title>Design system</Title>
      <Paragraph>
        A design is a plan or specification for the construction of an object or system or for the
        implementation of an activity or process, or the result of that plan or specification in the
        form of a prototype, product or process. The verb to design expresses the process of
        developing a design.
      </Paragraph>
      <Paragraph>
        In some cases, the direct construction of an object without an explicit prior plan (such as
        in craftwork, some engineering, coding, and graphic design) may also be considered
        <Text bold>to be a design activity.</Text>
      </Paragraph>
      <Title heading={2}>EyasDesign</Title>
      <Paragraph>
        The EyasDesign component library defines a set of default particle variables, and a custom
        theme is to <Text mark>customize</Text> and <Text underline>overwrite</Text> this variable
        list.
      </Paragraph>
      <Paragraph blockquote>
        A design is a plan or specification for the construction of an object or system or for the
        implementation of an activity or process, or the result of that plan or specification in the
        form of a <Text code>prototype</Text>, <Text code>product</Text> or
        <Text code>process</Text>. The verb to design expresses the process of developing a design.
      </Paragraph>
      <Paragraph mark underline delete>
        A design is a plan or specification for the construction of an object or system or for the
        implementation of an activity or process.
      </Paragraph>
      <Paragraph>
        <ul>
          <li>
            Architectural blueprints
            <ul>
              <li>Architectural blueprints</li>
            </ul>
          </li>
          <li>Engineering drawings</li>
          <li>Business processes</li>
        </ul>
      </Paragraph>
      <Paragraph>
        <ol>
          <li>Architectural blueprints</li>
          <li>Engineering drawings</li>
          <li>Business processes</li>
        </ol>
      </Paragraph>
    </Typography>
  );
};

export default App;
