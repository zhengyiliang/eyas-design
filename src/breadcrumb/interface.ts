import { CSSProperties, ReactNode } from 'react';
import { DropdownProps } from '../Dropdown';

export interface RouteProps {
  path: string;
  breadcrumbName: string;
  children?: Array<{ path: string; breadcrumbName: string }>;
}

/**
 * @title Breadcrumb
 */
export interface BreadcrumbProps {
  style?: CSSProperties;
  children?: ReactNode;
  className?: string | string[];
  /**
   * @description 指定分割符
   * @default
   *  <IconObliqueLine />
   */
  separator?: string | ReactNode;
  /**
   * @description 直接设置下拉菜单
   */
  routes?: RouteProps[];
  /**
   * @description 最多渲染的面包屑数量
   */
  maxCount?: number;
  /**
   * @description routes 时生效，自定义渲染面包屑
   */
  itemRender?: (route: RouteProps, routes: RouteProps[], paths: string[]) => ReactNode;
}

type CustomHTMLElement = Omit<React.HTMLAttributes<HTMLDivElement>, 'className'>;

/**
 * @title Breadcrumb.Item
 */
export interface BreadCrumbItemProps extends CustomHTMLElement {
  style?: CSSProperties;
  className?: string | string[];
  prefixCls?: string;
  /**
   * @description 下拉菜单的内容，等同于下拉菜单组件的 droplist 属性
   */
  droplist?: DropdownProps['droplist'];
  /**
   * @description 下拉菜单的属性 [DropdownProps](/react/components/dropdown)
   */
  dropdownProps?: DropdownProps;
  /**
   * @description 超链接地址
   */
  href?: string;
  /**
   * @description 点击回调
   */
  onClick?: (e: any) => void;
  /**
   * @description 标签名，可以是 html 标签或是组件
   * @default div
   */
  tagName?: string | React.FC<any> | React.ComponentClass<any>;
}
