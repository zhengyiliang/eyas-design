import React, { CSSProperties, ReactNode } from 'react';

/**
 * @title Checkbox
 * @description `T = string | number`
 */
export interface CheckboxProps<T extends React.ReactText = any>
  extends Omit<React.HTMLAttributes<HTMLLabelElement>, 'children' | 'className' | 'onChange'> {
  style?: CSSProperties;
  className?: string | string[];
  /**
   * @description 是否禁用
   */
  disabled?: boolean;
  /**
   * @description 错误样式
   */
  error?: boolean;
  /**
   * @description 是否选中
   */
  checked?: boolean;
  /**
   * @description 默认是否选中
   */
  defaultChecked?: boolean;
  /**
   * @description 半选状态
   */
  indeterminate?: boolean;
  /**
   * @description 点击复选框的回调
   */
  onChange?: (checked: boolean, e: Event) => void;
  /**
   * @description 复选框的 value 属性
   */
  value?: T;
  checkboxGroupValue?: T[];
  onGroupChange?: (value: T, checked: boolean) => void;
  isCheckboxGroup?: boolean;
  children?: ReactNode | ((value: { checked: boolean; indeterminate: boolean }) => ReactNode);
}

/**
 * @title Checkbox.Group
 */
export interface CheckboxGroupProps<T extends React.ReactText> {
  style?: CSSProperties;
  className?: string | string[];
  /**
   * @description 整组失效
   */
  disabled?: boolean;
  /**
   * @description 方向
   * @default horizontal
   */
  direction?: 'horizontal' | 'vertical';
  error?: boolean;
  /**
   * @description 默认选中的选项
   */
  defaultValue?: T[];
  /**
   * @description 可选项
   */
  options?: (T | { label: ReactNode; value: T; disabled?: boolean })[];
  /**
   * @description 选中的选项（受控模式）
   */
  value?: T[];
  /**
   * @description 变化时的回调函数
   */
  onChange?: (value: T[], e: Event) => void;
}
