import React, { useContext, Fragment, forwardRef, ReactElement } from 'react';
import cs from '../_util/classNames';
import { ConfigContext } from '../config-provider';
import { isArray, isNumber, isNull, isUndefined } from '../_util/is';
import type { SpaceProps, SpaceSize } from './interface';
import './style/index'

// 间距
const MARGIN_SIZE = {
  'mini': 4,
  'small': 8,
  'medium': 16,
  'large': 24
}

function Space(props: SpaceProps, ref) {
  const { getPrefixCls, rtl } = useContext(ConfigContext);
  const {
    className,
    style,
    children,
    size = 'small',
    direction = 'horizontal',
    align,
    wrap,
    split,
    ...rest
  } = props;

  const prefixCls = getPrefixCls('space');

  const innerAlign = align || (direction === 'horizontal' ? 'center' : '');

  const classNames = cs(
    prefixCls,
    {
      [`${prefixCls}-${direction}`]: direction,
      [`${prefixCls}-align-${innerAlign}`]: innerAlign,
      [`${prefixCls}-wrap`]: wrap,
      [`${prefixCls}-rtl`]: rtl,
    },
    className
  );

  // 获取间距
  function getMargin(size: SpaceSize) {
    if (isNumber(size)) return size
    return MARGIN_SIZE[size] ?? 8
  }

  const childrenList = React.Children.toArray(children);

  function getMarginStyle(index) {

    const isLastOne = childrenList.length === index + 1;
    const marginDirection = rtl ? 'marginLeft' : 'marginRight';

    if (typeof size === 'string' || typeof size === 'number') {
      const margin = getMargin(size);
      if (wrap) {
        return isLastOne ? { marginBottom: margin }
          : {
            [`${marginDirection}`]: margin,
            marginBottom: margin,
          };
      }
      return !isLastOne ? {
        [direction === 'vertical' ? 'marginBottom' : marginDirection]: margin,
      } : {};
    }
    if (isArray(size)) {
      const marginHorizontal = getMargin(size[0]);
      const marginBottom = getMargin(size[1]);
      if (wrap) {
        return isLastOne ? { marginBottom }
          : {
            [`${marginDirection}`]: marginHorizontal,
            marginBottom,
          };
      }
      if (direction === 'vertical') {
        return { marginBottom };
      }
      return { [`${marginDirection}`]: marginHorizontal };
    }
  }

  return (
    <div ref={ref} className={classNames} style={style} {...rest}>
      {childrenList.map((child, index) => {
        const key = (child as ReactElement)?.key || index;
        const shouldRenderSplit = !isUndefined(split) && !isNull(split) && index > 0;
        return (
          <Fragment key={key}>
            {shouldRenderSplit && <div className={`${prefixCls}-item-split`}>{split}</div>}
            <div className={`${prefixCls}-item`} style={getMarginStyle(index)}>
              {child}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}

const SpaceComponent = forwardRef<unknown, SpaceProps>(Space);

SpaceComponent.displayName = 'Space';

export { SpaceSize, SpaceProps };

export default SpaceComponent;

