import React from 'react';
import { Icon } from 'eyas-ui';

const IconFont = Icon.addFromIconFontCn({
  src: '//sf1-cdn-tos.toutiaostatic.com/obj/iconfont/index_8132353a46ca4ac1314b8903202269af.js',
});

const App = () => {
  return (
    <div>
      <IconFont type="icon-person" style={{ fontSize: 40, marginRight: 40 }} />
      <IconFont type="icon-earth" style={{ fontSize: 40, marginRight: 40 }} />
      <IconFont type="icon-flag" style={{ fontSize: 40 }} />
    </div>
  );
};

export default App;
