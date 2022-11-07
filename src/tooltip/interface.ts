import { CSSProperties, ReactNode } from 'react';
import { TriggerProps } from '../Trigger';

/**
 * @title Tooltip
 */
export interface TooltipProps {
  style?: CSSProperties;
  className?: string | string[];
  /**
   * @description 触发方式
   * @default hover
   */
  trigger?: TriggerProps['trigger'];
  escToClose?: TriggerProps['escToClose'];
  /**
   * @description 弹出的内容
   */
  content?: ReactNode;
  /**
   * @description 弹出层背景色
   */
  color?: string;
  /**
   * @description 弹出框挂载的节点
   */
  getPopupContainer?: (node: HTMLElement) => Element;
  /**
   * @description 弹出框的方位，有 12 个方位可供选择
   * @default top
   */
  position?:
  | 'top'
  | 'tl'
  | 'tr'
  | 'bottom'
  | 'bl'
  | 'br'
  | 'left'
  | 'lt'
  | 'lb'
  | 'right'
  | 'rt'
  | 'rb';
  /**
   * @description 迷你尺寸
   */
  mini?: boolean;
  prefixCls?: string;
  /**
   * @description 是否在隐藏的时候销毁 DOM 结构
   * @default true
   */
  unmountOnExit?: boolean;
  /**
   * @description 默认的弹出框状态
   */
  defaultPopupVisible?: boolean;
  /**
   * @description 弹出框是打开还是关闭状态
   */
  popupVisible?: boolean;
  /**
   * @description 显示或隐藏时触发的回调
   */
  onVisibleChange?: (visible: boolean) => void;
  /**
   * @description 鼠标移入弹出框的话，弹出框会保留而不销毁
   * @default true
   */
  popupHoverStay?: boolean;
  /**
   * @description 是否在失去焦点的时候关闭弹出框
   * @default true
   */
  blurToHide?: boolean;
  /**
   * @description 是否禁用弹出
   */
  disabled?: boolean;
  /**
   * @description 可以接受所有 `Trigger` 组件的参数
   */
  triggerProps?: Partial<TriggerProps>;
  /**
   * @description 会在打开状态给元素加上一个类，格式为 `${childrenPrefix}-open`。
   */
  childrenPrefix?: string;
}
