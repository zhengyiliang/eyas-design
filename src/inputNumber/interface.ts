import { CSSProperties, InputHTMLAttributes, ReactNode } from 'react';

/**
 * @title InputNumber
 */
export interface InputNumberProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'prefix' | 'className' | 'size' | 'onChange' | 'onKeyDown'
  > {
  style?: CSSProperties;
  className?: string | string[];
  /**
   * @description 数字变化步长
   * @default 1
   */
  step?: number;
  /**
   * @description 数字精度。设置精度小于`step`的小数位时，取`step`的小数个数。
   */
  precision?: number;
  /**
   * @description 最小值
   * @default -Infinity
   */
  min?: number;
  /**
   * @description 最大值
   * @default Infinity
   */
  max?: number;
  /**
   * @description 是否禁用
   */
  disabled?: boolean;
  /**
   * @description 错误状态
   */
  error?: boolean;
  /**
   * @description 是否只读
   */
  readOnly?: boolean;
  /**
   * @description 初始值
   */
  defaultValue?: number;
  /**
   * @description 当前值
   */
  value?: undefined | number | string;
  /**
   * @description 默认显示文案
   */
  placeholder?: string;
  /**
   * @description `embed` - 按钮内嵌模式，`button` - 左右按钮模式
   * @default embed
   */
  mode?: 'embed' | 'button';
  /**
   * @description 不同尺寸的数字输入框。分别对应 `24px`, `28px`, `32px`, `36px`
   */
  size?: 'mini' | 'small' | 'default' | 'large';
  /**
   * @description 显示前缀
   */
  prefix?: ReactNode;
  /**
   * @description 显示后缀
   */
  suffix?: ReactNode;
  /**
   * @description 定义输入框展示值
   */
  formatter?: (value: number | string, info: { userTyping: boolean; input: string }) => string;
  /**
   * @description 从 formatter 转换为数字，和 formatter 搭配使用。
   * @default (input) => input.replace(/[^\w\.-]+/g, '')
   */
  parser?: (value: string) => number | string;
  /**
   * @description 变化回调
   */
  onChange?: (value: number) => void;
  /**
   * @description 输入框聚焦事件的回调
   */
  onFocus?: (e) => void;
  /**
   * @description 输入框失去聚焦事件的回调
   */
  onBlur?: (e) => void;
  /**
   * @description 键盘事件回调
   */
  onKeyDown?: (e: Event) => void;
  /**
   * @description 隐藏右侧按钮
   */
  hideControl?: boolean;
  /**
   * @description 配置图标
   */
  icons?: {
    up?: ReactNode;
    down?: ReactNode;
    plus?: ReactNode;
    minus?: ReactNode;
  };
}
