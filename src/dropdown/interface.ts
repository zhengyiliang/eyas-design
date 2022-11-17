import { CSSProperties, ReactNode } from 'react';
import { TriggerProps } from '../Trigger';
import { ButtonProps } from '../Button';

/**
 * @title Dropdown
 */
export interface DropdownProps {
  children?: ReactNode;
  /**
   * @description 下拉框的内容
   */
  droplist?: ReactNode;
  /**
   * @description 下拉框的弹出位置
   * @default bl
   */
  position?: 'top' | 'tl' | 'tr' | 'bottom' | 'bl' | 'br';
  /**
   * @description 触发下拉框弹出的方式
   * @default hover
   */
  trigger?: TriggerProps['trigger'];
  /**
   * @description 是否禁用弹出
   */
  disabled?: boolean;
  /**
   * @description 隐藏后是否销毁 DOM 结构
   * @default true
   */
  unmountOnExit?: boolean;
  /**
   * @description 控制下拉框是否默认打开
   */
  defaultPopupVisible?: boolean;
  /**
   * @description 控制下拉框是否打开（受控模式）
   */
  popupVisible?: boolean;
  /**
   * @description 弹出框下可接受所有 `Trigger` 组件的 `Props`
   */
  triggerProps?: Partial<TriggerProps>;
  /**
   * @description 弹出框打开/关闭时会触发
   */
  onVisibleChange?: (visible: boolean) => void;
  /**
   * @description 弹出框挂在的父级节点
   */
  getPopupContainer?: (node: HTMLElement) => Element;
}

/**
 * @title Dropdown.Button
 */
export interface DropdownButtonProps {
  style?: CSSProperties;
  className?: string | string[];
  /**
   * @description 禁用。
   */
  disabled?: boolean;
  /**
   * @description 等同于 `Button` 的 size
   */
  size?: 'mini' | 'small' | 'default' | 'large';
  /**
   * @description 等同于 `Button` 的 type
   * @default default
   */
  type?: 'default' | 'primary' | 'secondary' | 'dashed' | 'outline' | 'text';
  /**
   * @description 接收 button 按钮的所有 Props，应用于左侧按钮
   */
  buttonProps?: ButtonProps;
  /**
   * @description 下拉框的内容
   */
  droplist?: ReactNode;
  /**
   * @description 下拉框的弹出位置
   * @default br
   */
  position?: 'top' | 'tl' | 'tr' | 'bottom' | 'bl' | 'br';
  /**
   * @description 触发下拉框弹出的方式
   * @default hover
   */
  trigger?: TriggerProps['trigger'];
  /**
   * @description 右侧显示内容，可以是 icon 或者任意 dom 元素
   * @default <IconMore />
   */
  icon?: ReactNode;
  /**
   * @description 隐藏后是否销毁 DOM 结构
   * @default true
   */
  unmountOnExit?: boolean;
  /**
   * @description 自定义两个按钮的渲染
   */
  buttonsRender?: (buttons: ReactNode[]) => ReactNode[];
  /**
   * @description 左侧按钮的点击事件
   */
  onClick?: (e: Event) => void;
  /**
   * @description 弹出框打开/关闭时会触发
   */
  onVisibleChange?: (visible: boolean) => void;
  children?: ReactNode;
}
