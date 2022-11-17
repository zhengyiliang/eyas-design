import { ReactNode, CSSProperties } from 'react';

/**
 * @title Message
 */
export interface MessageProps {
  style?: CSSProperties;
  className?: string | string[];
  /**
   * @description 消息弹出动画的类名，见 react-transition-group 的 `classNames`
   */
  transitionClassNames?: string;
  /**
   * @description 消息内容
   */
  content: ReactNode | string;
  /**
   * @description 是否显示图标
   * @default true
   */
  showIcon?: boolean;
  /**
   * @description 自定义图标
   */
  icon?: ReactNode;
  /**
   * @description 自动关闭的时间，单位为 `ms`
   * @default 3000
   */
  duration?: number;
  /**
   * @description 关闭时的回调
   */
  onClose?: () => void;
  /**
   * @description 当前消息的唯一标识，可以用来更新消息
   */
  id?: string;
  /**
   * @description 消息的位置，分为 `top` 上方和 `bottom` 下方
   */
  position?: 'top' | 'bottom';
  /**
   * @description 是否显示关闭按钮
   */
  closable?: boolean;
  type?: string;
}
