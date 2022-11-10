import { ReactNode, CSSProperties, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

import { Omit } from '../_util/type';

/**
 * @title Input
 * @description **Input 接受所有原生的属性值**
 */
export interface InputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'prefix' | 'className' | 'size' | 'height' | 'maxLength'
  > {
  style?: CSSProperties;
  className?: string | string[];
  /**
   * @description 允许清空输入框
   */
  allowClear?: boolean;
  /**
   * @description 是否禁用
   */
  disabled?: boolean;
  /**
   * @description 是否只读
   */
  readOnly?: boolean;
  /**
   * @description 默认值
   */
  default?: string;
  /**
   * @description 输入框提示文字
   */
  placeholder?: string;
  /**
   * @description 是否是错误状态
   */
  error?: boolean;
  /**
   * @description 输入时的回调
   */
  onChange?: (value: string, e) => void;
  /**
   * @description 点击清除按钮的回调
   */
  onClear?: () => void;
  /**
   * @description 按下回车键的回调
   */
  onPressEnter?: (e) => void;
  /**
   * @description 输入框前添加元素
   */
  addBefore?: ReactNode;
  /**
   * @description 输入框后添加元素
   */
  addAfter?: ReactNode;
  /**
   * @description 添加前缀文字或者图标
   */
  prefix?: ReactNode;
  /**
   * @description 添加后缀文字或者图标
   */
  suffix?: ReactNode;
  /**
   * @description 输入框的值，受控模式
   */
  value?: string;
  /**
   * @description 输入框前添加元素的样式
   */
  beforeStyle?: object;
  /**
   * @description 输入框后添加元素的样式
   */
  afterStyle?: object;
  /**
   * @description 输入框的尺寸
   * @default default
   */
  size?: 'mini' | 'small' | 'default' | 'large';
  /**
   * @description 自定义输入框高度
   * @en Custom input height
   */
  height?: number | string;
  /**
   * @description 输入框最大输入的长度；设置 `errorOnly`为 `true` 后，超过 `maxLength` 会展示 `error` 状态，并不限制用户输入。
   */
  maxLength?: number | { length: number; errorOnly?: boolean };
  /**
   * @description 配合 `maxLength`，显示字数统计
   */
  showWordLimit?: boolean;
}

/**
 * @title Input.TextArea
 */
export interface TextAreaProps
  extends Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    'onChange' | 'className' | 'maxLength'
  > {
  style?: CSSProperties;
  /**
   * @description 开启字数统计之后，会在 `textarea` 标签外包一层 `div`，`wrapperStyle` 用来配置这个 `div` 的样式。
   */
  wrapperStyle?: CSSProperties;
  className?: string | string[];
  /**
   * @description 是否禁用
   */
  disabled?: boolean;
  /**
   * @description 默认值
   */
  default?: string;
  /**
   * @description 值
   */
  value?: string;
  /**
   * @description 是否自动调整输入框的高度
   */
  autoSize?: boolean | { minRows?: number; maxRows?: number };
  /**
   * @description 是否是错误状态
   */
  error?: boolean;
  /**
   * @description 输入框提示文字
   */
  placeholder?: string;
  /**
   * @description 输入时的回调
   */
  onChange?: (value: string, e) => void;
  /**
   * @description 按下回车键的回调
   */
  onPressEnter?: (e) => void;
  /**
   * @description 输入框最大输入的长度；设置 `errorOnly`为 `true` 后，超过 `maxLength` 会展示 `error` 状态，并不限制用户输入。
   */
  maxLength?: number | { length: number; errorOnly?: boolean };
  showWordLimit?: boolean;
  /**
   * @description 允许清空输入框
   */
  allowClear?: boolean;
  /**
   * @description 点击清除按钮的回调
   */
  onClear?: () => void;
}

/**
 * @title Input.Group
 */
export interface InputGroupProps {
  style?: CSSProperties;
  className?: string | string[];
  /**
   * @description 是否使用紧凑模式
   */
  compact?: boolean;
}

/**
 * @title Input.Search
 * @description 包含 Input 组件所有参数
 * @notExtends
 */
export interface InputSearchProps extends InputProps {
  /**
   * @description 搜索时展示加载状态
   */
  loading?: boolean;
  /**
   * @description 点击搜索按钮的回调
   */
  onSearch?: (value: string) => void;
  /**
   * @description 搜索按钮
   */
  searchButton?: boolean | ReactNode;
}

/**
 * @title Input.Password
 * @notExtends
 */
export interface InputPasswordProps extends InputProps {
  /**
   * @description 是否显示切换密码可见状态的按钮
   */
  visibilityToggle?: boolean;
  /**
   * @description 初始是否显示
   */
  defaultVisibility?: boolean;
  /**
   * @description 是否显示
   */
  visibility?: boolean;
  /**
   * @description visibility 改变时触发
   */
  onVisibilityChange?: (visibility: boolean) => void;
}

export interface InputComponentProps extends InputProps {
  prefixCls?: string;
  hasParent?: boolean;
  // input 随输入文本的宽度变化
  autoFitWidth?: boolean | { delay: number | ((width: number, prevWidth: number) => number) };
}

export type RefInputType = {
  /** 使输入框失去焦点 */
  blur: () => void;
  /** 使输入框获取焦点 */
  focus: () => void;
  /** input dom元素 */
  dom: HTMLInputElement;
};
