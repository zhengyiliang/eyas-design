import React, { useContext } from 'react';
import cs from '../_util/classNames';
import { ConfigContext } from '../config-provider';
import type { ButtonGroupProps } from './interface';

function Group(props: ButtonGroupProps, ref: any) {
  const { className, style, children, ...rest } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls && getPrefixCls('btn-group');
  const classNames = cs(prefixCls, className);

  return (
    <div ref={ref} className={classNames} style={style} {...rest}>
      {children}
    </div>
  );
}

const GroupComponent = React.forwardRef<unknown, ButtonGroupProps>(Group);

GroupComponent.displayName = 'ButtonGroup';

export default GroupComponent;

export { ButtonGroupProps };
