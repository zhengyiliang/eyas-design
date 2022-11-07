import { CSSProperties, ReactNode, HTMLAttributes } from 'react';


export interface SwitchProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, 'className' | 'onChange'> {
  style?: CSSProperties;
  className?: string | string[];
  /**
   * @description 是否禁用
   */
  disabled?: boolean;
  /**
   * @description 点击开关的回调
   */
  onChange?: (value: boolean, event) => void;
  /**
   * @description 开关的尺寸，有 `small` 和 `default` 可供选择。
   */
  size?: 'small' | 'default';
  /**
   * @description 三种样式类型
   * @default circle
   */
  type?: 'circle' | 'round' | 'line';
  /**
   * @description 开关打开时的文案，small 尺寸不生效。
   */
  checkedText?: ReactNode;
  /**
   * @description 开关关闭时的文案，small 尺寸不生效。
   */
  uncheckedText?: ReactNode;
  /**
   * @description 开关关闭时，按钮上显示的图标
   */
  uncheckedIcon?: ReactNode;
  /**
   * @description 开关打开时，按钮上显示的图标
   */
  checkedIcon?: ReactNode;
  /**
   * @description 默认是否选中
   */
  defaultChecked?: boolean;
  /**
   * @description 开关是否打开
   */
  checked?: boolean;
  /**
   * @description 加载中状态
   */
  loading?: boolean;
  children?: ReactNode;
}
