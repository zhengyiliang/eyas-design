import { CSSProperties, HTMLAttributes } from 'react';

export type GridResponsiveBreakpoint = 'xxxl' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';

export type GridRowGutter = number | Partial<Record<GridResponsiveBreakpoint, number>>;

/**
 * @title Row
 */
export interface RowProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  style?: CSSProperties;
  className?: string | string[];
  /**
   * @description
   * 栅格间隔，单位是`px` 栅格间隔。可传入响应式对象写法 { xs: 4, sm: 6, md: 12}，传入数组 [ 水平间距， 垂直间距 ] 来设置两个方向。
   * @default 0
   */
  gutter?: GridRowGutter | Array<GridRowGutter>;
  /**
   * @description 开启这个选项 `<Row>` 和 `<Col>` 都会被当作 div 而不会附带任何 Grid 相关的类和样式
   */
  div?: boolean;
  /**
   * @description 竖直对齐方式 ( `align-items` )
   * @default start
   */
  align?: 'start' | 'center' | 'end' | 'stretch';
  /**
   * @description 水平对齐方式 (`justify-content`)
   * @default start
   */
  justify?: 'start' | 'center' | 'end' | 'space-around' | 'space-between';
}

/**
 * @title Col
 */
export interface ColProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref'> {
  style?: CSSProperties;
  className?: string | string[];
  /**
   * @description 栅格占位格数
   * @default 24
   */
  span?: number;
  /**
   * @description 栅格左侧的间隔格数，间隔内不可以有栅格
   */
  offset?: number;
  /**
   * @description 对元素进行排序
   */
  order?: number;
  /**
   * @description 对元素进行排序
   */
  push?: number;
  /**
   * @description 对元素进行排序
   */
  pull?: number;
  /**
   * @description < 576px 响应式栅格
   */
  xs?: number | { [key: string]: any };
  /**
   * @description >= 576px 响应式栅格
   */
  sm?: number | { [key: string]: any };
  /**
   * @description >= 768px 响应式栅格
   */
  md?: number | { [key: string]: any };
  /**
   * @description >= 992px 响应式栅格
   */
  lg?: number | { [key: string]: any };
  /**
   * @description >= 1200px 响应式栅格
   */
  xl?: number | { [key: string]: any };
  /**
   * @description >= 1600px 响应式栅格
   */
  xxl?: number | { [key: string]: any };
  /**
   * @description >= 2000px 响应式栅格
   */
  xxxl?: number | { [key: string]: any };
  /**
   * @description 设置 flex 布局属性
   */
  flex?: FlexType;
}

export type FlexType = string | number | 'auto' | 'none';
