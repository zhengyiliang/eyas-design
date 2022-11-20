import { ReactNode, CSSProperties } from 'react';

/**
 * @title Empty
 */
export interface EmptyProps {
  style?: CSSProperties;
  className?: string | string[];
  /**
   * @description 显示文案
   */
  description?: ReactNode;
  /**
   * @description 自定义显示图案
   */
  icon?: ReactNode;
  /**
   * @description 将图标替换为图片
   */
  imgSrc?: string;
}
