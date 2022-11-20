import { CSSProperties, ReactNode } from 'react';

export type ObjectValueType = {
  value?: any;
  label?: ReactNode;
  closable?: boolean;
};

export type ValueChangeReason = 'add' | 'remove' | 'clear' | 'sort';

/**
 * @title InputTag
 */
export interface InputTagProps<T = any> {
  className?: string | string[];
  style?: CSSProperties;
  /**
   * @description 不同尺寸
   */
  size?: 'mini' | 'small' | 'default' | 'large';
  /**
   * @description 预设文案
   */
  placeholder?: string;
  /**
   * @description 是否是错误状态
   */
  error?: boolean;
  /**
   * @description 是否禁用
   */
  disabled?: boolean;
  /**
   * @description 自动聚焦
   */
  autoFocus?: boolean;
  /**
   * @description 是否只读
   */
  readOnly?: boolean;
  /**
   * @description 是否允许清除
   */
  allowClear?: boolean;
  /**
   * @description 是否为内部标签变化添加动画。
   * @default true
   */
  animation?: boolean;
  /**
   * @description 是否在失焦时自动存储正在输入的文本
   */
  saveOnBlur?: boolean;
  /**
   * @description 默认值
   */
  defaultValue?: T[];
  /**
   * @description 控件值
   */
  value?: T[];
  /**
   * @description 控件的输入框内的值
   */
  inputValue?: string;
  /**
   * @description 设置传入和回调出的值均为 `{ label: '', value: ''}` 格式。
   */
  labelInValue?: boolean;
  /**
   * @description 是否可以通过拖拽为 Tag 排序
   */
  dragToSort?: boolean;
  /**
   * @description 后缀
   */
  suffix?: ReactNode;
  /**
   * @description 自定义图标
   */
  icon?: { removeIcon?: ReactNode; clearIcon?: ReactNode };
  /**
   * @description 校验函数，默认在 按下enter时候触发。
   * @default (inputValue, values) => inputValue && values.every((item) => item !== inputValue)
   */
  validate?: (inputValue: string, values: T[]) => boolean | Promise<boolean> | T | Promise<T>;
  /**
   * @description 自定义标签渲染，`props` 为当前标签属性，`index` 为当前标签的顺序，`values` 为所有标签的值.
   */
  renderTag?: (
    props: {
      value: any;
      label: ReactNode;
      closable: boolean;
      onClose: (event) => void;
    },
    index: number,
    values: ObjectValueType[],
  ) => ReactNode;
  /**
   * @description 移除某一个标签时改变时触发
   */
  onRemove?: (value: T, index: number, event) => void;
  /**
   * @description 控件值改变时触发
   */
  onChange?: (value: T[], reason: ValueChangeReason) => void;
  /**
   * @description 失去焦点时候触发
   */
  onBlur?: (e) => void;
  /**
   * @description 聚焦时触发
   */
  onFocus?: (e) => void;
  /**
   * @description 按 enter 键触发
   */
  onPressEnter?: (e) => void;
  /**
   * @description 输入框文本改变的回调。
   */
  onInputChange?: (inputValue: string, event?) => void;
  /**
   * @description 键盘事件回调
   */
  onKeyDown?: (e) => void;
  /**
   * @description 输入框文本粘贴的回调。
   */
  onPaste?: (e) => void;
  /**
   * @description 点击清除按钮的回调
   */
  onClear?: () => void;
  /**
   * @description 单击组件的回调。
   */
  onClick?: (e) => void;
  tagClassName?: string;
  disableInput?: boolean;
}
