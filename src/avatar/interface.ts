import { CSSProperties, ReactNode } from 'react';
import { TriggerProps } from '../Trigger';

/**
 * @title Avatar
 */
export interface AvatarProps {
  style?: CSSProperties;
  className?: string | string[];
  /**
   * @description 头像的形状，有圆形(circle)和正方形(square)两种
   * @default circle
   */
  shape?: 'circle' | 'square';
  /**
   * @description 头像的尺寸大小，单位是 `px`
   */
  size?: number;
  /**
   * @description 是否自动根据头像尺寸调整字体大小。
   * @default true
   */
  autoFixFontSize?: boolean;
  /**
   * @description 可点击的头像交互图标。
   */
  triggerIcon?: ReactNode;
  /**
   * @description 交互图标的样式
   */
  triggerIconStyle?: CSSProperties;
  /**
   * @description 可点击的头像交互类型。
   * @default button
   */
  triggerType?: 'mask' | 'button';
  /**
   * @description 点击回调
   */
  onClick?: (e) => void;
}

/**
 * @title Avatar.Group
 */
export interface AvatarGroupProps {
  style?: CSSProperties;
  className?: string | string[];
  /**
   * @description 头像的形状，(优先级低于 Avatar 组件本身)
   * @default circle
   */
  shape?: 'circle' | 'square';
  /**
   * @description 头像的尺寸大小，单位是 `px`，(优先级低于 Avatar 组件本身)
   */
  size?: number;
  /**
   * @description 是否自动根据头像尺寸调整字体大小，(优先级低于 Avatar 组件本身)
   * @default true
   */
  autoFixFontSize?: boolean;
  /**
   * @description 头像组内的头像 `z-index` 递增，默认是递减。
   */
  zIndexAscend?: boolean;
  /**
   * @description 头像组最多显示的头像数量，多余头像将以 `+x` 的形式展示。
   */
  maxCount?: number;
  /**
   * @description 多余头像样式。
   */
  maxStyle?: CSSProperties;
  /**
   * @description 多余头像气泡的 `TriggerProps`。
   */
  maxPopoverTriggerProps?: TriggerProps;
}
