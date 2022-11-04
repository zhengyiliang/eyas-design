import React, { forwardRef, useContext } from 'react';
import { ConfigContext } from '../config-provider';
import cs from '../_util/classNames'
import type { DividerProps } from './interface';
import './style'

function Divider(props: DividerProps, ref) {

  const { getPrefixCls } = useContext(ConfigContext);
  const {
    children,
    className,
    type = 'horizontal',
    orientation = 'center',
    ...rest
  } = props;

  const prefixCls = getPrefixCls('divider')

  const classNames = cs(
    prefixCls,
    `${prefixCls}-${type}`,
    {
      [`${prefixCls}-with-text`]: children,
      [`${prefixCls}-with-text-${orientation}`]: children && orientation,
    },
    className
  );

    console.log('children', children, type)

  return <div role="separator" ref={ref} className={classNames} {...rest}>
    {children && type === 'horizontal' && <span className={`${prefixCls}-text ${prefixCls}-text-${orientation}`}>{children}</span>}
  </div>
};

const ForwardRefDivider = forwardRef<unknown, DividerProps>(Divider);

ForwardRefDivider.displayName = 'Divider';

export default ForwardRefDivider;

export { DividerProps };
