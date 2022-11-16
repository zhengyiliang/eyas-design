import React from 'react';
import { Tooltip, Button, Switch, Typography } from 'eyas-ui';

const { Text } = Typography;

function App() {
  const [visible, setVisible] = React.useState(false);
  return (
    <div>
      <Text style={{ marginRight: 10 }}>{visible ? 'Hide' : 'Show'} Tooltip</Text>
      <Switch
        onChange={() => {
          setVisible(!visible);
        }}
      ></Switch>
      <br />
      <br />
      <Tooltip position="bottom" content="Mouse over to display tooltip" popupVisible={visible}>
        <Button>Be Controled</Button>
      </Tooltip>
    </div>
  );
}

export default App;
