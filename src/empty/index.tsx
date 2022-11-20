import React, { memo, useContext, forwardRef } from 'react';
import { IconEmpty } from '@eyas-design/icons';
import cs from '../_util/classNames';
import { ConfigContext } from '../config-provider';
import type { EmptyProps } from './interface';
import useMergeProps from '../_util/hooks/useMergeProps';

function Empty(baseProps: EmptyProps, ref) {
  const { getPrefixCls } = useContext(ConfigContext);
  const props = useMergeProps<EmptyProps>(baseProps, {}, {});
  const { style, className, description, icon, imgSrc, ...rest } = props;

  const prefixCls = getPrefixCls('empty');
  const classNames = cs(prefixCls, className);
  const noData = '暂无数据';
  const alt = typeof description === 'string' ? description : 'empty';

  return (
    <div ref={ref} className={classNames} style={style} {...rest}>
      <div className={`${prefixCls}-wrapper`}>
        <div className={`${prefixCls}-image`}>
          {imgSrc ? <img alt={alt} src={imgSrc} /> : icon || <IconEmpty />}
        </div>
        <div className={`${prefixCls}-description`}>{description || noData}</div>
      </div>
    </div>
  );
}

const EmptyComponent = forwardRef<unknown, EmptyProps>(Empty);

EmptyComponent.displayName = 'Empty';

export default memo(EmptyComponent);

export { EmptyProps };
