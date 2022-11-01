import { ReactNode } from "react";
import { ButtonProps } from "../button/interface";


// 主题配置
export type ThemeConfig = Record<string, any>;

// 组件配置
export type ComponentConfig = {
  Button?: ButtonProps;
};

// 配置提供-属性
export interface ConfigProviderProps {
  /**
   * 当按钮中是两个汉字时，自动在两个汉字中添加一个空格。
   */
  autoInsertSpaceInButton?: boolean;
  /**
   * 用于全局配置所有组件的默认参数
   */
  componentConfig?: ComponentConfig;
  /**
   * 主题配置
   */
  theme?: ThemeConfig;
  /**
   * 配置组件的默认尺寸，只会对支持`size`属性的组件生效。
   * @defaultValue default
   */
  size?: 'mini' | 'small' | 'default' | 'large';
  /**
   * 全局组件类名前缀
   * @defaultValue eyas
   */
  prefixCls?: string;
  getPrefixCls?: (componentName: string, customPrefix?: string) => string;
  children?: ReactNode;
  /**
   * 视图的表现形式是从右开始向左结束。
   */
  rtl?: boolean;
  zIndex?: number;
};
