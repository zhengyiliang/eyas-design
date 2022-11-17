import { CSSProperties, ReactNode } from 'react';

/**
 * @title Tag
 */
export interface TagProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'className' | 'ref'> {
  style?: CSSProperties;
  className?: string | string[];
  /**
   * @description 设置标签背景颜色
   */
  color?: string;
  /**
   * @description 是否显示边框
   */
  bordered?: Boolean;
  /**
   * @description 标签尺寸
   * @default default
   */
  size?: 'small' | 'default' | 'medium' | 'large';
  /**
   * @description 设置标签显示隐藏
   */
  visible?: boolean;
  /**
   * @description 是否可关闭标签
   */
  closable?: boolean;
  /**
   * @description 是否支持选中
   */
  checkable?: boolean;
  /**
   * @description 是否默认选中
   */
  defaultChecked?: boolean;
  /**
   * @description 是否选中（受控模式）
   */
  checked?: boolean;
  /**
   * @description 设置图标
   */
  icon?: ReactNode;
  /**
   * @description 自定义关闭图标
   */
  closeIcon?: ReactNode;
  /**
   * @description 关闭标签回调函数
   */
  onClose?: (e) => Promise<any> | void;
  /**
   * @description 选中的回调
   */
  onCheck?: (checked: boolean) => void;
  fill?: boolean;
}
