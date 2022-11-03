import React, { useState, useContext, useEffect, useRef, ReactNode, forwardRef } from 'react';
import { Loading3QuartersOutlined as IconLoading } from '@ant-design/icons'
import cs from '../_util/classNames';
import { ConfigContext } from '../config-provider';
import type { ButtonProps } from './interface';
import Group from './group';
import './style/index'

const regexTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;

// 重组孩子节点-如果连续两个节点都出现字符串或者数字，则把他们拼接在一起
function processChildren(children?: ReactNode) {
  const childrenList: React.ReactNode[] = [];
  let isPrevChildPure = false; // 上一个节点是否为string | number，默认不是
  React.Children.forEach(children, (child) => {
    const isCurrentChildPure = typeof child === 'number' || typeof child === 'string';
    if (isCurrentChildPure && isPrevChildPure) { // 如果连续两个节点都出现字符串或者数字，则把他们拼接在一起
      const lastIndex = childrenList.length - 1;
      const lastChild = childrenList[lastIndex];
      childrenList[lastIndex] = `${lastChild}${child}`;
    } else {
      childrenList.push(child);
    }
    isPrevChildPure = isCurrentChildPure;
  });

  return React.Children.map(childrenList, (child) => (typeof child === 'string' ? <span>{child}</span> : child));
}

function Button(props: ButtonProps, ref: any) {
  // 全局默认属性
  const {
    getPrefixCls,
    size: ctxSize,
    autoInsertSpaceInButton,
    rtl,
  } = useContext(ConfigContext);
  const {
    style,
    className,
    children,
    htmlType = 'button',
    type = 'default',
    status,
    size = ctxSize,
    shape = 'square',
    href,
    anchorProps,
    disabled,
    loading,
    loadingFixedWidth,
    icon,
    iconOnly,
    onClick,
    long,
    ...rest
  } = props;
  // 孩子节点是否只有两个汉字，如果只有两个汉字中间加间距
  const [isTwoCNChar, setIsTwoCNChar] = useState(false);
  const innerButtonRef = useRef();
  const buttonRef = ref || innerButtonRef;

  // 只有两个汉字的内容
  useEffect(() => {
    if (autoInsertSpaceInButton && buttonRef && buttonRef.current) {
      const textContent = buttonRef.current.textContent;
      if (regexTwoCNChar.test(textContent)) {
        if (!isTwoCNChar) {
          setIsTwoCNChar(true);
        }
      } else if (isTwoCNChar) {
        setIsTwoCNChar(false);
      }
    }
  }, [buttonRef.current, autoInsertSpaceInButton]);

  // 获取前缀
  const prefixCls = getPrefixCls('btn');

  const iconNode = loading ? <IconLoading spin className={`${prefixCls}-icon`} /> : React.cloneElement(icon ? <>{icon}</> : <></>, { className: `${prefixCls}-icon` });

  const _type = type === 'default' ? 'secondary' : type;

  const classNames = cs(
    prefixCls,
    `${prefixCls}-${_type}`,
    `${prefixCls}-size-${size || ctxSize}`,
    `${prefixCls}-shape-${shape}`,
    {
      [`${prefixCls}-long`]: long,
      [`${prefixCls}-status-${status}`]: status,
      [`${prefixCls}-loading-fixed-width`]: loadingFixedWidth,
      [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-link`]: href,
      [`${prefixCls}-icon-only`]: iconOnly || (!children && children !== 0 && iconNode),
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-two-chinese-chars`]: isTwoCNChar,
      [`${prefixCls}-rtl`]: rtl,
    },
    className
  );

  const handleClick: React.MouseEventHandler<HTMLElement> = (event: any): void => {
    if (loading) {
      typeof event?.preventDefault === 'function' && event.preventDefault();
      return;
    }
    onClick && onClick(event);
  };

  const InnerContent = (
    <>
      {iconNode}
      {processChildren(children)}
    </>
  );

  if (href) {
    const _anchorProps = { ...anchorProps };
    if (disabled) {
      delete _anchorProps.href;
    } else {
      _anchorProps.href = href;
    }
    return (
      <a
        ref={buttonRef}
        {...rest}
        {..._anchorProps}
        style={style}
        className={classNames}
        onClick={handleClick}
      >
        {InnerContent}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef}
      {...rest}
      style={style}
      className={classNames}
      type={htmlType}
      disabled={disabled}
      onClick={handleClick}
    >
      {InnerContent}
    </button>
  );
}

const ForwardRefButton = forwardRef<unknown, ButtonProps>(Button);


const ButtonComponent = ForwardRefButton as typeof ForwardRefButton & {
  __BYTE_BUTTON: boolean;
  Group: typeof Group;
};

ButtonComponent.__BYTE_BUTTON = true;

ButtonComponent.Group = Group;

ButtonComponent.displayName = 'Button';

export default ButtonComponent;

export { ButtonProps };


