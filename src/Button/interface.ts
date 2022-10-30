import React, { CSSProperties, HTMLProps, ReactNode } from 'react';

export interface BaseButtonProps {
  style?: CSSProperties;
  className?: string | string[];
  children?: ReactNode;
  /**
   * 按钮主要分为六种按钮类型：主要按钮、次级按钮、虚框按钮、文字按钮、线性按钮，`default` 为次级按钮。
   * @defaultValue default
   */
  type?: 'default' | 'primary' | 'secondary' | 'dashed' | 'text' | 'outline';
  /**
   * 按钮状态
   * @defaultValue default
   */
  status?: 'warning' | 'danger' | 'success' | 'default';
  /**
   * 按钮的尺寸
   * @defaultValue default
   */
  size?: 'mini' | 'small' | 'default' | 'large';
  /**
   * 按钮形状，`circle` - 圆形， `round` - 全圆角， `square` - 长方形
   * @defaultValue square
   */
  shape?: 'circle' | 'round' | 'square';
  /**
   * 添加跳转链接，设置此属性，button表现跟a标签一致
   */
  href?: string;
  /**
   * a 链接的 target 属性，href 存在时生效
   */
  target?: string;
  /**
   * a 链接的原生属性，href 存在时生效
   */
  anchorProps?: HTMLProps<HTMLAnchorElement>;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 按钮是否是加载状态
   */
  loading?: boolean;
  /**
   * 当 loading 的时候，不改变按钮的宽度。
   */
  loadingFixedWidth?: boolean;
  /**
   * 设置按钮的图标
   */
  icon?: ReactNode;
  /**
   * 只有图标，按钮宽高相等。如果指定 `icon` 且没有 children，`iconOnly` 默认为 true
   */
  iconOnly?: boolean;
  /**
   * 按钮宽度随容器自适应。
   */
  long?: boolean;
  /**
   * 点击按钮的回调
   */
  onClick?: (e: Event) => void;
}

export type AnchorButtonProps = {
  href: string;
  target?: string;
  anchorProps?: HTMLProps<HTMLAnchorElement>;
} & BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<any>, 'type' | 'onClick' | 'className'>;

export type FinalButtonProps = {
  /**
   * 按钮原生的 html type 类型
   * @defaultValue button
   */
  htmlType?: 'button' | 'submit' | 'reset';
} & BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick' | 'className'>;

/**
 * @title Button
 */
export type ButtonProps = Partial<FinalButtonProps & AnchorButtonProps>;

export interface ButtonGroupProps {
  style?: CSSProperties;
  className?: string | string[];
  children?: ReactNode;
}
