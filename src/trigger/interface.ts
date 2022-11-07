import { CSSProperties, ReactNode, HTMLAttributes } from 'react';

export interface TriggerProps {
  className?: string | string[];
  /**
   * @description 弹出框（外部）的样式
   */
  style?: CSSProperties;
  /**
   * @description 弹出框（内部）的样式
   */
  popupStyle?: CSSProperties;
  /**
   * @description 弹出层跟随鼠标位置
   */
  alignPoint?: boolean;
  /**
   * @description 自动对齐子元素的宽度设置弹出框的宽度
   */
  autoAlignPopupWidth?: boolean;
  /**
   * @description 自动对齐子元素的宽度设置弹出框的最小宽度
   */
  autoAlignPopupMinWidth?: boolean;
  /**
   * @description 动画类名
   * @default fadeId
   */
  classNames?: string;
  /**
   * @description 动画过渡时间
   * @default 200
   */
  duration?: number | { exit?: number; enter?: number; appear?: number };
  /**
   * @description 设置这个参数后，打开弹出后，children 上会添加一个名为 `${childrenPrefix}-open` 的类。
   */
  childrenPrefix?: string;
  /**
   * @description 是否禁用
   */
  disabled?: boolean;
  /**
   * @description mouseenter 触发延时的毫秒数
   * @default 100
   */
  mouseEnterDelay?: number;
  /**
   * @description mouseleave 触发延时的毫秒数
   * @default 100
   */
  mouseLeaveDelay?: number;
  /**
   * @description focus 触发延时的毫秒数
   */
  focusDelay?: number;
  /**
   * @description 在该元素上执行 clickOutside，触发弹出框关闭
   * @default () => window.document
   */
  getDocument?: () => Element;
  /**
   * @description 设置弹出内容所插入的父元素
   */
  getPopupContainer?: (node: HTMLElement) => Element;
  /**
   * @description 隐藏后是否销毁 DOM 结构
   * @default true
   */
  unmountOnExit?: boolean;
  /**
   * @description 触发方式
   * @default hover
   */
  trigger?:
  | 'hover'
  | 'click'
  | 'focus'
  | 'contextMenu'
  | Array<'hover' | 'click' | 'focus' | 'contextMenu'>;
  /**
   * @description 弹出位置，一共有 12 个方位可供选择
   * @default bottom
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
   * @description 弹出框的内容
   */
  popup?: () => ReactNode;
  /**
   * @description 是否根据空间自动调整弹出框的位置
   * @default true
   */
  autoFitPosition?: boolean;
  /**
   * @description 是否在鼠标移出触发节点，移入弹出框时保留弹出框。
   * @default true
   */
  popupHoverStay?: boolean;
  /**
   * @description 是否在触发节点失去焦点的时候关闭弹出框，仅在 `trigger` 中含有 `focus` 时生效
   * @default true
   */
  blurToHide?: boolean;
  /**
   * @description 是否在鼠标移出触发节点和弹出层的时候关闭弹出层
   * @default true
   */
  mouseLeaveToClose?: boolean;
  /**
   * @description 是否能通过点击触发节点来关闭弹出框
   * @default true
   */
  clickToClose?: boolean;
  /**
   * @description 是否在点击空白处（触发节点和弹出框以外的区域）时关闭弹出层。 关闭时会触发 `onVisibleChange`。
   * @default true
   */
  clickOutsideToClose?: boolean;
  /**
   * @description 是否允许按 `ESC` 键关闭弹出框。
   * @default false
   */
  escToClose?: boolean;
  /**
   * @description 是否在容器滚动时关闭弹出框
   * @default false
   */
  containerScrollToClose?: boolean;
  /**
   * @description 按钮点击事件（`trigger` 包含 `click` 时生效）
   */
  onClick?: (popupVisible: boolean) => void;
  /**
   * @description 点击触发节点和弹出框以外的区域的回调。
   */
  onClickOutside?: Function;
  /**
   * @description
   * 调整弹出框的位置，有四个属性值，`left`, `right`, `top`, `bottom`，分别表示向该方向移动几个像素。
   * 具体可查看 [示例](/react/components/trigger#设置弹窗位置偏移量)
   * @default {}
   */
  popupAlign?: {
    left?: number | [number, number];
    right?: number | [number, number];
    top?: number | [number, number];
    bottom?: number | [number, number];
  };
  /**
   * @description 默认弹出框开启或关闭
   */
  defaultPopupVisible?: boolean;
  /**
   * @description 设置弹出框开启或关闭
   */
  popupVisible?: boolean;
  /**
   * @description 显示或隐藏时触发的回调
   */
  onVisibleChange?: (visible: boolean) => void;
  /**
   * @description 当内容发生变化导致内容区域尺寸发生变化，自动进行重新定位。
   * @default true
   */
  autoFixPosition?: boolean;
  /**
   * @description 是否展示箭头元素
   */
  showArrow?: boolean;
  /**
   * @description 箭头元素的所有 html 参数
   */
  arrowProps?: HTMLAttributes<HTMLDivElement>;
  /**
   * @description 是否在容器滚动时更新弹出框的位置
   */
  updateOnScroll?: boolean;
  children?: ReactNode;
}

export type MouseLocationType = { clientX: number; clientY: number };
