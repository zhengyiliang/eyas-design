import { CSSProperties } from 'react';

/**
 * @title Skeleton
 */
export interface SkeletonProps {
  style?: CSSProperties;
  className?: string;
  /**
   * @description 是否显示动画效果
   */
  animation?: boolean;
  /**
   * @description 是否显示子组件。为 `true` 时候显示占位符
   * @default true
   */
  loading?: boolean;
  /**
   * @description 是否显示图片占位
   */
  image?: SkeletonImageProps | boolean;
  /**
   * @description 是否显示文本占位
   * @default true
   */
  text?: SkeletonTextProps | boolean;
}

export interface SkeletonImageProps {
  style?: CSSProperties;
  className?: string;
  /** 图片形状 */
  shape?: 'circle' | 'square';
  /** 图片尺寸 */
  size?: 'small' | 'default' | 'large';
  /** 图片位置 */
  position?: 'left' | 'right';
  prefixCls?: string;
}

export interface SkeletonTextProps {
  style?: CSSProperties;
  className?: string;
  /** 文本行数 */
  rows?: number;
  /** 文本行宽度 */
  width?: number | string | (string | number)[];
  prefixCls?: string;
}
