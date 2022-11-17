import { CSSProperties } from 'react';

/**
 * @title Affix
 */
export interface AffixProps {
  className?: string | string[];
  style?: CSSProperties;
  /**
   * @description 给 `fixed` 的元素设置 className。
   */
  affixClassName?: string | string[];
  /**
   * @description 给 `fixed` 的元素设置 style，注意不要设置 `position` `top` `width` `height`， 因为这几个属性是在元素 fixed 时候用于定位的。
   */
  affixStyle?: CSSProperties;
  /**
   * @description 距离窗口顶部达到指定偏移量后触发
   * @default 0
   */
  offsetTop?: number;
  /**
   * @description 距离窗口底部达到指定偏移量后触发
   */
  offsetBottom?: number;
  /**
   * @description 滚动容器
   * @default () => window
   */
  target?: () => HTMLElement | null | Window;
  /**
   * @description `target` 的外层滚动元素。`Affix` 将会监听该元素的滚动事件，并实时更新固钉的位置。
   * 主要是为了解决 `target` 属性指定为非 `window` 元素时，如果外层元素滚动，可能会导致固钉跑出容器问题。
   */
  targetContainer?: () => HTMLElement | null | Window;
  /**
   * @description 固定状态发生改变时触发
   */
  onChange?: (affixed: boolean) => void;
}
