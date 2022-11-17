import React, { ReactNode, CSSProperties, HTMLAttributes } from 'react';
import { TriggerProps } from '../trigger';
import { TooltipProps } from '../tooltip';

/**
 * @title Menu
 */
export interface MenuProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  children?: ReactNode;
  style?: CSSProperties;
  prefixCls?: string;
  className?: string | string[];
  isMenu?: boolean;
  inDropdown?: boolean;

  /**
   * @description 菜单风格
   * @default light
   */
  theme?: 'light' | 'dark';
  /**
   * @description 菜单类型，目前支持垂直（vertical）、水平菜单（horizontal）、弹出（pop）
   * @default vertical
   */
  mode?: 'vertical' | 'horizontal' | 'pop' | 'popButton';
  /**
   * @description 层级之间的缩进量
   */
  levelIndent?: number;
  /**
   * @description 用于定制图标
   */
  icons?: {
    horizontalArrowDown?: ReactNode | null;
    popArrowRight?: ReactNode | null;
    collapseDefault?: ReactNode | null;
    collapseActive?: ReactNode | null;
  };
  /**
   * @description 默认展开所有多级菜单
   */
  autoOpen?: boolean;
  /**
   * @description 是否水平折叠收起菜单
   */
  collapse?: boolean;
  /**
   * @description 开启手风琴效果
   */
  accordion?: boolean;
  /**
   * @description 菜单选项是否可选
   * @default true
   */
  selectable?: boolean;
  /**
   * @description 水平菜单是否自动溢出省略
   * @default true
   */
  ellipsis?: boolean;
  /**
   * @description 是否自动滚动选中项目到可见区域
   */
  autoScrollIntoView?: boolean;
  /**
   * @description 是否内置折叠按钮
   */
  hasCollapseButton?: boolean;

  /**
   * @description 初始选中的菜单项 key 数组
   */
  defaultSelectedKeys?: string[];
  /**
   * @description 初始展开的子菜单 key 数组
   */
  defaultOpenKeys?: string[];
  /**
   * @description 选中的菜单项 key 数组（受控模式）
   */
  selectedKeys?: string[];
  /**
   * @description 展开的子菜单 key 数组（受控模式）
   */
  openKeys?: string[];
  /**
   * @description 点击菜单项的回调
   */
  // Do NOT change 'any' to 'void'. Allow to customize the behavior by the return value of `onClickMenuItem` in Dropdown
  onClickMenuItem?: (key: string, event, keyPath: string[]) => any;
  /**
   * @description 点击子菜单标题的回调
   */
  onClickSubMenu?: (key: string, openKeys: string[], keyPath: string[]) => void;
  /**
   * @description 折叠状态改变时的回调
   */
  onCollapseChange?: (collapse: boolean) => void;

  /**
   * @description
   * 滚动到可见区域的配置项，接收所有[scroll-into-view-if-needed](https://github.com/stipsan/scroll-into-view-if-needed)的参数
   * [scroll-into-view-if-needed](https://github.com/stipsan/scroll-into-view-if-needed)
   */
  scrollConfig?: { [key: string]: any };
  /**
   * @description 弹出模式下可接受所有 `Trigger` 的 `Props`
   */
  triggerProps?: Partial<TriggerProps>;
  /**
   * @description 弹出模式下可接受所有 `ToolTip` 的 `Props`
   */
  tooltipProps?: Partial<TooltipProps>;
}

/**
 * @title Menu.SubMenu
 */
export interface MenuSubMenuProps {
  children?: ReactNode;
  style?: CSSProperties;
  className?: string | string[];
  level?: number;
  // props key
  _key?: string;
  /**
   * @description 子菜单的标题
   */
  title?: string | ReactNode;
  /**
   * @description 唯一标志
   */
  key: string;
  /**
   * @description 是否将多级菜单头也作为一个菜单项，支持点击选中等状态。
   */
  selectable?: boolean;
  /**
   * @description 是否强制使用弹出模式，`level` 表示当前子菜单的层级
   */
  popup?: boolean | ((level: number) => boolean);
  /**
   * @description 弹出模式下可接受所有 `Trigger` 的 `Props`
   */
  triggerProps?: Partial<TriggerProps>;
}

/**
 * @title Menu.ItemGroup
 */
export interface MenuItemGroupProps {
  children?: ReactNode;
  style?: CSSProperties;
  className?: string | string[];
  level?: number;
  // props key
  _key?: string;
  /**
   * @description 菜单组的标题
   */
  title?: string | ReactNode;
}

/**
 * @title Menu.Item
 */
export interface MenuItemProps extends Omit<HTMLAttributes<HTMLElement>, 'className'> {
  children?: ReactNode;
  style?: CSSProperties;
  className?: string | string[];
  level?: number;
  // props key
  _key?: string;
  onClick?: (e) => void;
  /**
   * @description 唯一标志
   */
  key: string;
  /**
   * @description 菜单项禁止选中
   */
  disabled?: boolean;
  /**
   * @description 配置最外层标签，可以是 html 标签或是组件
   * @default div
   */
  wrapper?: string | React.FC<any> | React.ComponentClass<any>;
}
