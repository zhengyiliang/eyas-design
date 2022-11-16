import { CSSProperties, ReactNode } from 'react';

export type SpaceSize = 'mini' | 'small' | 'medium' | 'large' | number;

/**
 * @title Space
 */
export interface SpaceProps {
  style?: CSSProperties;
  className?: string | string[];
  /**
   * @description 对齐方式
   */
  align?: 'start' | 'end' | 'center' | 'baseline';
  /**
   * @description 间距方向
   * @default horizontal
   */
  direction?: 'vertical' | 'horizontal';
  /**
   * @description 尺寸。( `2.15.0` 开始支持数组形式 )
   * @default small
   */
  size?: SpaceSize | SpaceSize[];
  /**
   * @description 环绕类型的间距，用于折行的场景。
   */
  wrap?: boolean;
  /**
   * @description 设置分隔符
   */
  split?: ReactNode;
  children?: ReactNode;
}
