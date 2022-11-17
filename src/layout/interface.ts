import { CSSProperties, ReactNode } from 'react';
import { ResizeBoxProps } from '../resizeBox';
import { Omit } from '../_util/type';
import { GridResponsiveBreakpoint } from '../grid/interface';

/**
 * @title Layout
 */
export interface LayoutProps
  extends Omit<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    'className' | 'ref'
  > {
  style?: CSSProperties;
  className?: string | string[];
  /**
   * @description 表示子元素里有 Sider，一般不用指定。可用于服务端渲染时避免样式闪动
   */
  hasSider?: boolean;
}

/**
 * @title Layout.Header
 */
export interface HeaderProps
  extends Omit<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    'className' | 'ref'
  > {
  className?: string | string[];
}

/**
 * @title Layout.Footer
 */
export interface FooterProps
  extends Omit<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    'className' | 'ref'
  > {
  className?: string | string[];
}

/**
 * @title Layout.Content
 */
export interface ContentProps
  extends Omit<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    'className' | 'ref'
  > {
  className?: string | string[];
}

/**
 * @title Layout.Sider
 */
export interface SiderProps {
  children?: ReactNode;
  style?: CSSProperties;
  className?: string | string[];
  sign?: 'sider';
  /**
   * @description 主题颜色
   * @default light
   */
  theme?: 'dark' | 'light';
  /**
   * @description 当前收起状态
   */
  collapsed?: boolean;
  /**
   * @description 是否可收起
   */
  collapsible?: boolean;
  /**
   * @description 收缩宽度，设置为 0 会出现特殊 trigger
   * @default 48
   */
  collapsedWidth?: number;
  /**
   * @description 是否默认收起
   */
  defaultCollapsed?: boolean;
  /**
   * @description 翻转折叠提示箭头的方向，当 Sider 在右边时可以使用
   */
  reverseArrow?: boolean;
  /**
   * @description 自定义底部折叠触发器，设置为 null 时隐藏 trigger
   */
  trigger?: string | React.ReactNode;
  /**
   * @description 宽度
   * @default 200
   */
  width?: number | string;
  /**
   * @description 触发响应式布局的断点, 详见[响应式栅格](/react/components/Grid)
   */
  breakpoint?: GridResponsiveBreakpoint;
  /**
   * @description 触发响应式布局断点时的回调
   */
  onBreakpoint?: (broken: boolean) => void;
  /**
   * @description 展开-收起时的回调函数，有点击 trigger 以及响应式反馈两种方式可以触发
   */
  onCollapse?: (collapse: boolean, type: 'clickTrigger' | 'responsive') => void;
  /**
   * @description 可以用 ResizeBox 替换原生的 `aside` 标签，这个参数即 ResizeBox的 `directions` 参数。
   * 详情请看 [ResizeBox](/react/components/resize-box)。
   */
  resizeDirections?: string[];
  /**
   * @description 可以接受 `ResizeBox` 所有参数，在伸缩开启时，可以通过 `resizeBoxProps` 对菜单栏的 `width` 进行受控展示或者与 `collapsed` 联动
   */
  resizeBoxProps?: ResizeBoxProps;
  onSiderMount?: (id: string) => void;
  onSiderUnmount?: (id: string) => void;
}
