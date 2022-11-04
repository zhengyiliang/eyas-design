import { CSSProperties, ReactNode } from "react";

export interface DividerProps {
  style?: CSSProperties;
  className?: string | string[];
  children?: ReactNode;
  /**
   * @description 分割线类型，是水平还是竖直，分别对应 horizontal 和 vertical
   * @default horizontal
   */
  type?: 'horizontal' | 'vertical';
  /**
   * @description 分割线文字的位置
   * @default center
   */
  orientation?: 'left' | 'right' | 'center';
}
