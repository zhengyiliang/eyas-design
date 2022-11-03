import { ReactNode } from "react";
import { ButtonProps } from "../button/interface";
import { SpaceProps } from "../space/interface";

// 主题配置
export type ThemeConfig = Record<string, any>;

// 组件配置
export type ComponentConfig = {
  Button?: ButtonProps;
  Space?: SpaceProps;
};

// 配置提供-属性
export interface ConfigProviderProps {
  /**
   * @description 当按钮中是两个汉字时，自动在两个汉字中添加一个空格。
   */
  autoInsertSpaceInButton?: boolean;
  /**
   * @description 用于全局配置所有组件的默认参数
   */
  componentConfig?: ComponentConfig;
  /**
   * @description 主题配置
   */
  theme?: ThemeConfig;
  /**
   * @description 配置组件的默认尺寸，只会对支持`size`属性的组件生效。
   * @default default
   */
  size?: 'mini' | 'small' | 'default' | 'large';
  /**
   * @description 全局组件类名前缀
   * @default eyas
   */
  prefixCls?: string;
  getPrefixCls?: (componentName: string, customPrefix?: string) => string;
  children?: ReactNode;
  /**
   * @description 视图的表现形式是从右开始向左结束。
   */
  rtl?: boolean;
  zIndex?: number;
};
