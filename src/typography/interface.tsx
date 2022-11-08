import { CSSProperties, ReactNode } from 'react';
/**
 * @title Typography
 */
export interface TypographyProps {
  style?: CSSProperties;
  className?: string | string[];
  children?: ReactNode;
}

export interface OperationsProps extends Omit<React.HTMLAttributes<HTMLElement>, 'className'> {
  /**
   * @description 开启复制功能
   */
  copyable?:
    | boolean
    | {
        text?: string;
        onCopy?: (text: string, e) => void;
        icon?: ReactNode;
        tooltips?: [ReactNode, ReactNode];
      };
  /**
   * @description 开启可编辑功能
   */
  editable?:
    | boolean
    | {
        editing?: boolean;
        onStart?: (text, e) => void;
        onChange?: (text) => void;
        onEnd?: (text) => void;
      };
  /**
   * @description 自动溢出省略（只支持字符串），具体参数配置看 [EllipsisConfig](#ellipsisconfig)
   */
  ellipsis?: boolean | EllipsisConfig;
  isEllipsis?: boolean;
  expanding?: boolean;
  onClickExpand?: (e) => void;
  setEditing?: (editing: boolean) => void;
  forceShowExpand?: boolean;
  currentContext: Record<string, any>;
}

export interface CommonProps extends Omit<OperationsProps, 'currentContext'> {
  style?: CSSProperties;
  className?: string | string[];
  children?: ReactNode;
  /**
   * @description 文本类型
   */
  type?: 'primary' | 'secondary' | 'success' | 'error' | 'warning';
  /**
   * @en Bold style
   */
  bold?: boolean;
  /**
   * @description 禁用状态
   */
  disabled?: boolean;
  /**
   * @description 标记样式
   */
  mark?: boolean | { color: string };
  /**
   * @description 下划线样式
   */
  underline?: boolean;
  /**
   * @description 删除线样式
   */
  delete?: boolean;
  /**
   * @description 代码块样式
   */
  code?: boolean;
}

/**
 * @title Typography.Title
 */
export interface TypographyTitleProps extends CommonProps {
  /**
   * @description 标题级别，相当于 `h1` `h2` `h3` `h4` `h5` `h6`
   * @default 1
   */
  heading?: 1 | 2 | 3 | 4 | 5 | 6;
}

/**
 * @title Typography.Paragraph
 */
export interface TypographyParagraphProps extends CommonProps {
  /**
   * @description 长引用
   */
  blockquote?: boolean;
  /**
   * @description
   * 段落的的行高，长文本(大于5行)的时候推荐使用默认行高，短文本(小于等于3行)推荐使用 `close` 紧密的行高。
   * @default default
   */
  spacing?: 'default' | 'close';
}

export interface EditContentProps {
  prefixCls?: string;
  children?: ReactNode;
  setEditing?: (editing: boolean) => void;
  editableConfig?: {
    editing?: boolean;
    onStart?: (text, e) => void;
    onChange?: (text) => void;
    onEnd?: (text) => void;
  };
}

/**
 * @title Typography.Text
 */
export type TypographyTextProps = CommonProps;

/**
 * @title EllipsisConfig
 */
export type EllipsisConfig = {
  /**
   * @description 自动溢出省略（只支持字符串），在大量使用情况下建议开启提高性能。
   * @default false
   */
  cssEllipsis?: boolean;
  /**
   * @description 显示省略的行数
   * @default 1
   */
  rows?: number;
  /**
   * @description 显示展开/折叠按钮
   */
  expandable?: boolean;
  /**
   * @description 省略号
   * @default ...
   */
  ellipsisStr?: string;
  /**
   * @description 后缀
   */
  suffix?: string;
  /**
   * @description 配置 折叠 / 展开 的元素
   */
  expandNodes?: ReactNode[];
  /**
   * @description 在省略发生改变的时候触发，通常是窗口resize情况会触发。
   */
  onEllipsis?: (isEllipsis: boolean) => void;
  /**
   * @description 在折叠/展开状态发生改变的时候触发，通常是点击折叠/展开按钮触发。
   */
  onExpand?: (isExpand: boolean, e) => void;
  /**
   * @description 配置省略时的弹出框
   */
  showTooltip?: boolean | { type?: 'tooltip' | 'popover'; props?: Record<string, any> };
  /**
   * @description 是否展开
   */
  expanded?: boolean;
  /**
   * @description 默认展开
   * @default false
   */
  defaultExpanded?: boolean;
  wrapper?: string | React.FC<any> | React.ComponentClass<any>;
};
