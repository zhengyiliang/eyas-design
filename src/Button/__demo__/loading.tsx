import React, { useState } from 'react';
import { Button, Divider } from 'eyas-ui';
import { IconPlus } from '@eyas-design/icons';

function App() {
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);

  function onClickBtn1() {
    setLoading1(true);
    setTimeout(() => {
      setLoading1(false);
    }, 4000);
  }

  function onClickBtn2() {
    setLoading2(true);
    setTimeout(() => {
      setLoading2(false);
    }, 4000);
  }

  function onClickBtn3() {
    setLoading3(true);
    setTimeout(() => {
      setLoading3(false);
    }, 4000);
  }

  return (
    <>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 100px)',
          rowGap: 24,
          columnGap: 24,
          marginLeft: 24,
        }}
      >
        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="secondary" loading>
          Loading
        </Button>
        <Button type="dashed" loading>
          Loading
        </Button>
        <Button type="primary" shape="circle" loading />
        <Button type="secondary" shape="circle" loading />
        <Button type="dashed" shape="circle" loading />
      </div>
      <Button type="primary" loading={loading1} onClick={onClickBtn1} style={{ margin: 24 }}>
        Click Me
      </Button>
      <Button type="primary" loading={loading2} onClick={onClickBtn2} style={{ margin: 24 }}>
        {!loading2 && <IconPlus />}Click Me
      </Button>
      <Divider>loading fixed width</Divider>
      <Button
        type="primary"
        loadingFixedWidth
        loading={loading3}
        onClick={onClickBtn3}
        style={{ margin: 24 }}
      >
        Search
      </Button>
    </>
  );
}

export default App;
