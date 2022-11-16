import { CSSProperties, ReactNode } from 'react';

export interface TabsProps {
  style?: CSSProperties;
  className?: string | string[];
  children?: ReactNode;
  /**
   * @description 默认选中的标签选项卡，如不指定默认选择第一个
   */
  defaultActiveTab?: string;
  /**
   * @description 当前选中的 tab 的key
   */
  activeTab?: string;
  /**
   * @description 是否开启过渡效果
   */
  animation?: boolean | { tabPane?: boolean; inkBar?: boolean };
}
