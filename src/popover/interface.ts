import { CSSProperties, ReactNode } from 'react';
import { TooltipProps } from '../Tooltip';

export interface PopoverProps extends Omit<TooltipProps, 'mini'> {
  style?: CSSProperties;
  className?: string | string[];
  /**
   * @description 标题
   */
  title?: ReactNode;
  /**
   * @description 是否禁用
   */
  disabled?: boolean;
}
