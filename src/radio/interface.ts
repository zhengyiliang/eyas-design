import { CSSProperties, ChangeEvent, ReactNode } from 'react';

/**
 * @title Radio
 */
export interface RadioProps<T = any>
  extends Omit<React.HTMLAttributes<HTMLLabelElement>, 'children' | 'className' | 'onChange'> {
  style?: CSSProperties;
  className?: string | string[];
  /**
   * @description 是否禁用
   */
  disabled?: boolean;
  /**
   * @description 控件的 `value`
   */
  value?: T;
  /**
   * @description 是否选中（受控模式）
   */
  checked?: boolean;
  /**
   * @description 初始是否选中
   */
  defaultChecked?: boolean;
  /**
   * @description 值变化的回调
   */
  onChange?: (checked: boolean, event: ChangeEvent) => void;
  children?: ReactNode | ((value: { checked: boolean }) => ReactNode);
}

/**
 * @title Radio.Group
 */
export interface RadioGroupProps {
  style?: CSSProperties;
  className?: string | string[];
  disabled?: boolean;
  /**
   * @description `Radio` 的 name
   */
  name?: string;
  /**
   * @description 单选的类型，是单选还是按钮
   * @default radio
   */
  type?: 'radio' | 'button';
  /**
   * @description 方向
   * @default horizontal
   */
  direction?: 'vertical' | 'horizontal';
  /**
   * @description 按钮类型的单选框尺寸（只在按钮类型下生效）
   */
  size?: 'small' | 'default' | 'large' | 'mini';
  mode?: 'outline' | 'fill';
  /**
   * @description 点击单选的回调
   */
  onChange?: (value: any, event: ChangeEvent) => void;
  /**
   * @description 默认选中的值
   */
  defaultValue?: any;
  /**
   * @description 选中的值（受控模式）
   */
  value?: any;
  /**
   * @description 以数组配置的形式来设置单选组
   */
  options?: (string | number | { label: ReactNode; value: any; disabled?: boolean })[];
}

export interface RadioGroupContextProps {
  type: 'radio' | 'button';
  value?: any;
  disabled?: boolean;
  group?: boolean;
  name?: RadioGroupProps['name'];
  onChangeValue?: (value: any, event: ChangeEvent) => void;
}
