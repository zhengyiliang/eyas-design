import { CSSProperties, ReactNode } from 'react';
import TabHeader from './tab-header/index';

/**
 * @title Tabs
 */
export interface TabsProps {
  style?: CSSProperties;
  className?: string | string[];
  children?: ReactNode;
  /**
   * @description 默认选中的标签选项卡，如不指定默认选择第一个
   */
  defaultActiveTab?: string;
  /**
   * @description 当前选中的 tab 的 key
   */
  activeTab?: string;
  /**
   * @description 是否开启过渡效果
   */
  animation?: boolean | { tabPane?: boolean; inkBar?: boolean };
  /**
   * @description 选项卡位置
   * @default top
   */
  tabPosition?: 'left' | 'right' | 'top' | 'bottom';
  /**
   * @description 标签选项卡的方向是水平还是竖直，分别对应 `horizontal `和 `vertical`。** 注意： 已废弃，使用 tabPosition 替代。**
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * @description 有四个尺寸供选择，分别为`mini`, `small`, `default`, `large`
   */
  size?: 'mini' | 'small' | 'default' | 'large';
  /**
   * @description 标签选项卡的类型
   * @default line
   */
  type?: 'line' | 'card' | 'card-gutter' | 'text' | 'rounded' | 'capsule';
  /**
   * @description 选项卡头部是否存在水平边距。仅对 `type`等于 `line`、`text`类型的选项卡生效
   * @default true
   */
  headerPadding?: boolean;
  /**
   * @description 标签页较多时候，选择滚动/下拉菜单形式展示 tab
   * @default scroll
   */
  overflow?: 'scroll' | 'dropdown';
  /**
   * @description 是否允许增减标签。只在 `type` 为 `card` 或 `card-gutter` 时候生效。
   */
  editable?: boolean;
  /**
   * @description 是否显示新增按钮（仅在`editable`为`true`时生效）
   * @default true
   */
  showAddButton?: boolean;
  /**
   * @description 图标配置
   */
  icons?: {
    add?: ReactNode;
    delete?: ReactNode;
  };
  /**
   * @description 是否在标签增减后，自动进行滚动调整(`editable`为`true`时生效）
   * @default { add: true, delete: true }
   */
  scrollAfterEdit?: {
    delete?: boolean;
    add?: boolean;
  };
  /**
   * @description 显示在标签页右侧的附加
   */
  extra?: ReactNode;
  /**
   * @description 是否销毁隐藏标签页的节点, `TabPane` 的该属性优先级高于 `Tabs`。
   */
  destroyOnHide?: boolean;
  /**
   * @description 设置为 `true` 时，将不会在组件挂载的时候渲染被隐藏的标签页。
   * @default true
   */
  lazyload?: boolean;
  /**
   * @description 高度撑满容器，只在水平模式下生效。（默认的高度是又撑起的。）
   */
  justify?: boolean;
  /**
   * @description 自定义删除按钮
   */
  deleteButton?: ReactNode;
  /**
   * @description 自定义新增按钮
   */
  addButton?: ReactNode;
  /**
   * @description 被选中 tab 的滚动位置，默认 auto 即会将 activeTab 滚动到可见区域，但不会特意做位置调整
   * @default auto
   */
  scrollPosition?: 'start' | 'end' | 'center' | 'auto' | number;
  /**
   * @description `activeTab` 改变的回调
   */
  onChange?: (key: string) => void;
  /**
   * @description 点击选项卡的回调
   */
  onClickTab?: (key: string) => void;
  /**
   * @description 点击新增 tab 按钮的回调
   */
  onAddTab?: () => void;
  /**
   * @description 点击删除按钮的回调
   */
  onDeleteTab?: (key: string) => void;
  /**
   * @description 自定义选项卡头部
   */
  renderTabHeader?: (tabProps: TabsProps, DefaultTabHeader: typeof TabHeader) => React.ReactElement;
  /**
   * @description 自定义单个选项卡头部
   */
  renderTabTitle?: (
    tabTitle: ReactNode,
    info: {
      key: string | number;
      isActive: boolean;
      disabled: boolean;
      editable: boolean;
    },
  ) => ReactNode;
}

/**
 * @title Tabs.TabPane
 */
export interface TabPaneProps {
  style?: CSSProperties;
  className?: string | string[];
  /**
   * @description 选项卡的标题显示
   */
  title: string | ReactNode;
  /**
   * @description
   * 选项卡隐藏的时候是否销毁标签页内的DOM结构，优先级高于 `Tabs` 的 `destroyOnHide` 属性
   */
  destroyOnHide?: boolean;
  /**
   * @description 是否禁用
   */
  disabled?: boolean;
  /**
   * @description 动态增减标签页时是否允许关闭当前标签页
   */
  closable?: boolean;
  isActive?: boolean;
  lazyload?: boolean;
  children?: ReactNode;
}
