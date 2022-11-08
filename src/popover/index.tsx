import React, { forwardRef, PropsWithChildren, useContext } from 'react';
import Tooltip from '../tooltip';
import { ConfigContext } from '../config-provider';
import type { PopoverProps } from './interface';
import cs from '../_util/classNames';

function Popover(props: PropsWithChildren<PopoverProps>, ref) {
  const { getPrefixCls, rtl } = useContext(ConfigContext);
  const {
    position = 'top',
    trigger = 'hover',
    unmountOnExit = true,
    style,
    className,
    children,
    getPopupContainer,
    defaultPopupVisible,
    popupVisible,
    triggerProps,
    onVisibleChange,
    content,
    title,
    ...rest
  } = props;
  const prefixCls = getPrefixCls('popover');

  return (
    <Tooltip
      {...rest}
      ref={ref}
      style={{
        maxWidth: 350,
        ...style,
      }}
      className={className}
      prefixCls={prefixCls}
      getPopupContainer={getPopupContainer}
      position={position}
      trigger={trigger}
      content={
        <div className={cs(`${prefixCls}-inner`, { [`${prefixCls}-inner-rtl`]: rtl })}>
          {title ? <div className={`${prefixCls}-title`}>{title}</div> : null}
          <div className={`${prefixCls}-inner-content`}>{content}</div>
        </div>
      }
      popupHoverStay
      unmountOnExit={unmountOnExit}
      triggerProps={triggerProps}
      defaultPopupVisible={defaultPopupVisible}
      onVisibleChange={onVisibleChange || (triggerProps ? triggerProps.onVisibleChange : undefined)}
      childrenPrefix={prefixCls}
      {...('popupVisible' in props ? { popupVisible } : {})}
    >
      {typeof children === 'string' ? <span>{children}</span> : children}
    </Tooltip>
  );
}
const PopoverComponent = forwardRef<unknown, PropsWithChildren<PopoverProps>>(Popover);

PopoverComponent.displayName = 'Popover';

export default PopoverComponent;

export { PopoverProps };
