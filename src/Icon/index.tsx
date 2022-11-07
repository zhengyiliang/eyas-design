import React, { CSSProperties, forwardRef } from 'react';
import antdIcon, { createFromIconfontCN } from '@ant-design/icons'
import * as IconComponent from '@ant-design/icons';

export type IconProps = {
  /**
   * @description 图标样式名
   */
  className?: string;

  type?: string;
  /**
   * @description 图标旋转角度（IE9 无效）
   */
  rotate?: number;
  /**
 * @description 是否有旋转动画
 * @default false
 */
  spin?: boolean;
  /**
   * @description 设置图标的样式
   */
  style?: CSSProperties;
  /**
   * @description 仅适用双色图标。设置双色图标的主要颜色
   *
   */
  twoToneColor?: string;
  iconFont?: string[];
  component?: React.ComponentType<CustomIconComponentProps | React.SVGProps<SVGSVGElement>> | React.ForwardRefExoticComponent<CustomIconComponentProps>;
}

export interface CustomIconComponentProps {
  width: string | number;
  height: string | number;
  fill: string;
  viewBox?: string;
  className?: string;
  style?: React.CSSProperties;
}


function Icon(props: IconProps, ref) {

  const {
    type,
    rotate,
    spin,
    style,
    iconFont,
    ...rest } = props

  // 自定义图标
  if (iconFont?.length) {
    const CustomIcon = createFromIconfontCN({
      scriptUrl: iconFont
    });
    return <CustomIcon type={type} rotate={rotate} spin={spin} style={style} />
  }

  const EyasIcon = IconComponent[type] ?? antdIcon
  return <EyasIcon rotate={rotate} spin={spin} style={style}  {...rest} ref={ref} />
};

const ForwardRefIcon = forwardRef<unknown, IconProps>(Icon);

ForwardRefIcon.displayName = 'Icon';

export default ForwardRefIcon;

