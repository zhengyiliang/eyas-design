import { CSSProperties, ReactNode } from 'react';

/**
 * @title Spin
 */
export interface SpinProps {
  style?: CSSProperties;
  className?: string | string[];
  children?: ReactNode;
  /**
   * @description 是否为加载状态（仅在 `Spin` 有子节点时生效）
   */
  loading?: boolean;
  /**
   * @description 加载动画的尺寸
   */
  size?: number;
  /**
   * @description 自定义图标，会自动旋转。
   */
  icon?: ReactNode;
  /**
   * @description 自定义元素，非图标，不附带旋转效果。可用于设置为 gif 图片等。
   */
  element?: ReactNode;
  /**
   * @description 加载的文案
   */
  tip?: string | ReactNode;
  /**
   * @description 延迟显示加载的时间 (ms)
   */
  delay?: number;
  /**
   * @description 是否使用点类型的动画
   */
  dot?: boolean;

  /**
   * @description 是否为块级元素
   */
  block?: boolean;
}
