import React, { PureComponent, ReactElement, PropsWithChildren, CSSProperties } from 'react';
import { findDOMNode } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import ResizeObserverPolyfill from 'resize-observer-polyfill';
import { on, off, contains, getScrollElements } from '../_util/dom';
import { isFunction } from '../_util/is';
import { pickDataAttributes } from '../_util/pick';
import { Esc } from '../_util/keycode';
import Portal from './portal';
import ResizeObserver from '../_util/resizeObserver';
import cs from '../_util/classNames';
import { ConfigContext } from '../config-provider';
import getStyle from './getPopupStyle';
import throttleByRaf from '../_util/throttleByRaf';
import type { TriggerProps, MouseLocationType } from './interface';
import { raf, caf } from '../_util/raf';

export { TriggerProps };

function mergeProps<PropsType>(
  componentProps: PropsType,
  defaultProps: Partial<PropsType>,
  globalComponentConfig?: PropsType,
): PropsType {
  const _defaultProps = { ...defaultProps, ...(globalComponentConfig ?? {}) };
  const props = { ...componentProps };

  for (const propName in _defaultProps) {
    if (props[propName] === undefined) {
      props[propName] = _defaultProps[propName];
    }
  }

  return props;
}

function getDOMPos(dom: HTMLElement) {
  if (!dom) {
    return {};
  }
  const { width, height, left, right } = dom.getBoundingClientRect();
  return {
    width,
    height,
    left,
    right,
  };
}
export interface TriggerState {
  popupVisible: boolean;
  popupStyle: object;
}

export const EventsByTriggerNeed = [
  'onClick',
  'onMouseEnter',
  'onMouseLeave',
  'onMouseMove',
  'onFocus',
  'onBlur',
  'onContextMenu',
  'onKeyDown',
];

export type EventsByTriggerNeedType =
  | 'onClick'
  | 'onMouseEnter'
  | 'onMouseLeave'
  | 'onMouseMove'
  | 'onFocus'
  | 'onBlur'
  | 'onContextMenu'
  | 'onKeyDown';

function splitChildrenStyle(
  obj: CSSProperties,
  keys: string[],
): { picked: CSSProperties; omitted: CSSProperties } {
  const picked: CSSProperties = {};
  const omitted: CSSProperties = { ...obj };
  keys.forEach((key: string) => {
    if (obj && key in obj) {
      picked[key] = obj[key];
      delete omitted[key];
    }
  });
  return { picked, omitted };
}

const defaultProps = {
  blurToHide: true,
  clickToClose: true,
  classNames: 'fadeIn',
  trigger: 'hover' as const,
  position: 'bottom' as const,
  duration: 200,
  unmountOnExit: true,
  popupAlign: {},
  popupHoverStay: true,
  clickOutsideToClose: true,
  escToClose: false,
  mouseLeaveToClose: true,
  containerScrollToClose: false,
  getDocument: () => window.document as any,
  autoFixPosition: true,
  mouseEnterDelay: 100,
  mouseLeaveDelay: 100,
  autoFitPosition: true,
};

class Trigger extends PureComponent<TriggerProps, TriggerState> {
  static displayName = 'Trigger';

  static contextType = ConfigContext;

  context: React.ContextType<typeof ConfigContext>;

  static getDerivedStateFromProps(nextProps, state) {
    if ('popupVisible' in nextProps && nextProps.popupVisible !== state.popupVisible) {
      return {
        popupVisible: nextProps.popupVisible,
      };
    }
    return null;
  }

  popupContainer;

  triggerRef: HTMLSpanElement | null;

  delayTimer: any = null;

  updatePositionTimer: any = null;

  // popup ?????????????????????
  realPosition: string;

  // arrow ???????????????
  arrowStyle: CSSProperties;

  // is popup open?
  popupOpen = false;

  // if mousedown to hide popup, ignore onFocus
  mousedownToHide = false;

  mouseDownTimeout: any;

  hasPopupMouseDown = false;

  // handle click outside document
  handleClickOutside: boolean;

  // ???????????????window ???resize
  handleWindowResize: boolean;

  unmount = false;

  isDidMount = false;

  // ?????????????????????
  mouseLocation: MouseLocationType = {
    clientX: 0,
    clientY: 0,
  };

  // ???????????????mount container dom??????
  observerContainer = null;

  // ????????????????????? popupContainer ????????????????????????
  scrollElements: HTMLElement[] = null;

  // container ?????? resize?????????
  resizeObserver = new ResizeObserverPolyfill(() => {
    this.handleUpdatePosition();
  });

  childrenDom = null;

  // ??????children?????????????????? ?????????????????????????????????????????????????????????????????????????????????
  childrenDomSize: ReturnType<typeof getDOMPos> = {};

  getMergedProps = (baseProps?): PropsWithChildren<TriggerProps> => {
    const props = mergeProps<PropsWithChildren<TriggerProps>>(
      baseProps || this.props,
      defaultProps,
    );
    return props;
  };

  constructor(props, context) {
    super(props, context);

    const mergedProps = this.getMergedProps(props);

    const popupVisible =
      'popupVisible' in mergedProps ? mergedProps.popupVisible : mergedProps.defaultPopupVisible;
    this.popupOpen = !!popupVisible;

    this.state = {
      popupVisible: !!popupVisible,
      popupStyle: {},
    };
  }

  getRootElement = (): HTMLElement => {
    this.childrenDom = findDOMNode(this) as HTMLElement;
    return this.childrenDom;
  };

  componentDidMount() {
    this.componentDidUpdate(this.getMergedProps());
    this.isDidMount = true;
    this.unmount = false;

    this.childrenDom = this.getRootElement();
    if (this.state.popupVisible) {
      this.childrenDomSize = getDOMPos(this.childrenDom);
    }
  }

  componentDidUpdate(_prevProps) {
    const prevProps = this.getMergedProps(_prevProps);
    const currentProps = this.getMergedProps();
    if (!prevProps.popupVisible && currentProps.popupVisible) {
      this.update();
    }
    const { popupVisible } = this.state;
    this.popupOpen = popupVisible;
    const { getDocument } = currentProps;
    if (!popupVisible) {
      this.offClickOutside();
      this.offContainerResize();
      this.offWindowResize();
      this.offScrollListeners();
      return;
    }

    const rect = getDOMPos(this.childrenDom);
    // children???????????????????????????????????????children ??????scale????????????????????????????????????????????????popup ??????????????????
    if (JSON.stringify(rect) !== JSON.stringify(this.childrenDomSize)) {
      this.updatePopupPosition();
      this.childrenDomSize = rect;
    }
    // popupVisible???true
    this.onContainerResize();
    if (currentProps.updateOnScroll || currentProps.containerScrollToClose) {
      this.onContainersScroll();
    }
    if (!this.handleWindowResize) {
      on(window, 'resize', this.handleUpdatePosition);
      this.handleWindowResize = true;
    }

    if (!this.handleClickOutside) {
      const root = isFunction(getDocument) && (getDocument as Function)();
      if (root) {
        // clickOutside ????????????mousedown???
        // 1. ???????????????????????????click???????????????document.onclick???????????????????????????????????????????????????clickOutside???????????????popup???
        // 2. ??????label????????????????????????input????????????????????????????????????clickOutside?????????popup???
        on(root, 'mousedown', this.onClickOutside);
        this.handleClickOutside = true;
      }
    }
  }

  componentWillUnmount() {
    this.unmount = true;
    this.offClickOutside();
    this.clearTimer();
    this.offWindowResize();
    this.offScrollListeners();
    this.offContainerResize();
    caf(this.rafId);
  }

  offScrollListeners = () => {
    (this.scrollElements || []).forEach((item) => {
      off(item, 'scroll', this.handleScroll);
    });
    this.scrollElements = null;
  };

  offWindowResize = () => {
    this.handleWindowResize = false;
    off(window, 'resize', this.handleUpdatePosition);
  };

  offContainerResize = () => {
    if (this.resizeObserver && this.observerContainer) {
      this.resizeObserver.unobserve(this.observerContainer);
      this.observerContainer = null;
    }
  };

  handleScroll = () => {
    const currentProps = this.getMergedProps();

    if (currentProps.containerScrollToClose) {
      this.setPopupVisible(false);
    } else if (currentProps.updateOnScroll) {
      this.handleUpdatePosition();
    }
  };

  onContainersScroll = () => {
    if (this.scrollElements) {
      return;
    }
    this.scrollElements = getScrollElements(this.childrenDom, this.popupContainer?.parentNode);

    this.scrollElements.forEach((item) => {
      on(item, 'scroll', this.handleScroll);
    });
  };

  onContainerResize = () => {
    // containerParent ??????????????????getPopupContainer???????????????
    // ?????? this.popupContainer ???????????????getPopupContainer??????????????????
    const containerParent = this.popupContainer?.parentNode;
    if (this.resizeObserver && this.observerContainer !== containerParent) {
      // ??????containerParent?????????????????????????????????????????????container
      this.offContainerResize();
      containerParent && this.resizeObserver.observe(containerParent);
      this.observerContainer = containerParent;
    }
  };

  // getPopupContainer ??????????????????
  handleUpdatePosition = throttleByRaf(() => {
    this.updatePopupPosition();
  });

  isClickTrigger = () => {
    const { trigger } = this.getMergedProps();
    return [].concat(trigger).indexOf('click') > -1;
  };

  isFocusTrigger = () => {
    const { trigger } = this.getMergedProps();
    return [].concat(trigger).indexOf('focus') > -1;
  };

  isHoverTrigger = () => {
    const { trigger } = this.getMergedProps();
    return [].concat(trigger).indexOf('hover') > -1;
  };

  isContextMenuTrigger = () => {
    const { trigger } = this.getMergedProps();
    return [].concat(trigger).indexOf('contextMenu') > -1;
  };

  // ????????????????????????????????????popup????????????????????????
  isMouseLeaveToClose = () => {
    return this.isHoverTrigger() && this.getMergedProps().mouseLeaveToClose;
  };

  // ??????????????????popup????????????????????????
  isPopupHoverHide = () => {
    return this.isHoverTrigger() && !this.getMergedProps().popupHoverStay;
  };

  isClickToHide = () => {
    return (
      (this.isClickTrigger() || this.isContextMenuTrigger()) && this.getMergedProps().clickToClose
    );
  };

  isBlurToHide = () => {
    return this.isFocusTrigger() && this.getMergedProps().blurToHide;
  };

  clearTimer = () => {
    if (this.updatePositionTimer) {
      if (this.updatePositionTimer.cancel) {
        this.updatePositionTimer.cancel();
      } else {
        clearTimeout(this.updatePositionTimer);
        this.updatePositionTimer = null;
      }
    }
    if (this.delayTimer) {
      clearTimeout(this.delayTimer);
      this.delayTimer = null;
    }
    if (this.mouseDownTimeout) {
      clearTimeout(this.mouseDownTimeout);
      this.mouseDownTimeout = null;
    }
  };

  offClickOutside = () => {
    if (this.handleClickOutside) {
      const { getDocument } = this.getMergedProps();
      const root = isFunction(getDocument) && (getDocument as Function)();

      off(root, 'mousedown', this.onClickOutside);
      this.handleClickOutside = false;
    }
  };

  getTransformOrigin = (position) => {
    const content = this.triggerRef as HTMLElement;
    if (!content) return {};

    const { showArrow, classNames } = this.getMergedProps();
    let top = (showArrow && this.arrowStyle?.top) || 0;
    let left = (showArrow && this.arrowStyle?.left) || 0;
    top = top ? `${top}px` : '';
    left = left ? `${left}px` : '';

    const transformOrigin = {
      top: `${left || '50%'} 100% 0`,
      tl: `${left || '15px'} 100% 0`,
      tr: `${left || `${content.clientWidth - 15}px`} 100% 0`,
      bottom: `${left || '50%'} 0 0`,
      bl: `${left || '15px'} 0 0`,
      br: `${left || `${content.clientWidth - 15}px`} 0 0`,
      left: `100% ${top || '50%'} 0`,
      lt: `100% ${top || '15px'} 0`,
      lb: `100% ${top || `${content.clientHeight - 15}px`} 0`,
      right: `0 ${top || '50%'} 0`,
      rt: `0 ${top || '15px'} 0`,
      rb: `0 ${top || `${content.clientHeight - 15}px`} 0`,
    };

    // tooltip popover popconfirm
    if (classNames && classNames.indexOf('zoom') > -1) {
      return {
        transformOrigin: transformOrigin[position],
      };
    }
    if (classNames === 'slideDynamicOrigin') {
      let origin = '0% 0%';
      if (['top', 'tl', 'tr'].indexOf(position) > -1) {
        origin = '100% 100%';
      }
      return {
        transformOrigin: origin,
      };
    }
    return {};
  };

  // ?????????????????????translateY/translateX??????????????????????????????????????????
  getTransformTranslate = () => {
    if (this.getMergedProps().classNames !== 'slideDynamicOrigin') {
      return '';
    }
    switch (this.realPosition) {
      case 'bottom':
      case 'bl':
      case 'br':
        return 'scaleY(0.9) translateY(-4px)';
      case 'top':
      case 'tl':
      case 'tr':
        return 'scaleY(0.9) translateY(4px)';
      default:
        return '';
    }
  };

  getPopupStyle = (): any => {
    if (this.unmount || !this.popupContainer) {
      return;
    }
    const mountContainer = this.popupContainer as Element;
    const content = this.triggerRef;
    const child: HTMLElement = this.getRootElement();
    const { style, arrowStyle, realPosition } = getStyle(
      this.getMergedProps(),
      content,
      child,
      mountContainer,
      this.mouseLocation,
    );
    this.realPosition = realPosition || (this.getMergedProps().position as string);
    this.arrowStyle = arrowStyle || {};

    return {
      ...style,
      ...this.getTransformOrigin(this.realPosition),
    };
  };

  showPopup = (callback: () => void = () => {}) => {
    const popupStyle = this.getPopupStyle();

    this.setState(
      {
        popupStyle,
      },
      callback,
    );
  };

  update = throttleByRaf((callback) => {
    if (this.unmount || !this.state.popupVisible) {
      return;
    }
    const popupStyle = this.getPopupStyle();

    this.setState(
      {
        popupStyle,
      },
      () => {
        callback && callback();
      },
    );
  });

  updatePopupPosition = (delay = 0, callback?: () => void) => {
    const currentVisible = this.state.popupVisible;
    if (!currentVisible) {
      return;
    }
    if (delay < 4) {
      this.updatePositionTimer = this.update(callback);
      return;
    }
    this.updatePositionTimer = setTimeout(() => {
      const popupStyle = this.getPopupStyle();

      this.setState(
        {
          popupStyle,
        },
        () => {
          callback && callback();
        },
      );
    }, delay);
  };

  setPopupVisible = (visible: boolean, delay = 0, callback?: () => void) => {
    const mergedProps = this.getMergedProps();
    const { onVisibleChange } = mergedProps;
    const currentVisible = this.state.popupVisible;

    if (visible !== currentVisible) {
      this.delayToDo(delay, () => {
        onVisibleChange && onVisibleChange(visible);
        if (!('popupVisible' in mergedProps)) {
          if (visible) {
            this.setState(
              {
                popupVisible: true,
              },
              () => {
                this.showPopup(callback);
              },
            );
          } else {
            this.setState(
              {
                popupVisible: false,
              },
              () => {
                callback && callback();
              },
            );
          }
        } else {
          callback && callback();
        }
      });
    } else {
      callback && callback();
    }
  };

  delayToDo = (delay: number, callback: () => void) => {
    if (delay) {
      this.clearDelayTimer();
      this.delayTimer = setTimeout(() => {
        callback();
        this.clearDelayTimer();
      }, delay);
    } else {
      callback();
    }
  };

  clearDelayTimer() {
    if (this.delayTimer) {
      clearTimeout(this.delayTimer);
      this.delayTimer = null;
    }
  }

  // ?????????popup????????????children????????????????????????clickoutside ??????
  onClickOutside = (e) => {
    const { onClickOutside, clickOutsideToClose } = this.getMergedProps();
    const triggerNode = this.triggerRef;
    const childrenDom = this.getRootElement();

    if (
      !contains(triggerNode, e.target) &&
      !contains(childrenDom, e.target) &&
      !this.hasPopupMouseDown
    ) {
      onClickOutside && onClickOutside();
      if (clickOutsideToClose) {
        // ????????????????????????onVisibleChange????????????
        // blurToHide ???true???????????????????????????onBlur????????????setPopupVisible
        // hover ?????????????????????????????????????????????mouseLeave????????????setPopupVisible
        if (!this.isBlurToHide() && !this.isHoverTrigger()) {
          this.setPopupVisible(false);
        }
      }
    }
  };

  onKeyDown = (e) => {
    const keyCode = e.keyCode || e.which;
    this.triggerPropsEvent('onKeyDown', e);
    if (keyCode === Esc.code) {
      this.onPressEsc(e);
    }
  };

  onPressEsc = (e) => {
    const { escToClose } = this.getMergedProps();
    if (escToClose && e && e.key === Esc.key && this.state.popupVisible) {
      this.setPopupVisible(false);
    }
  };

  onMouseEnter = (e) => {
    const { mouseEnterDelay } = this.getMergedProps();
    this.triggerPropsEvent('onMouseEnter', e);
    this.clearDelayTimer();
    this.setPopupVisible(true, mouseEnterDelay || 0);
  };

  onMouseMove = (e) => {
    this.triggerPropsEvent('onMouseMove', e);
    this.setMouseLocation(e);
    if (this.state.popupVisible) {
      this.update();
    }
  };

  onMouseLeave = (e) => {
    const { mouseLeaveDelay } = this.getMergedProps();
    this.clearDelayTimer();
    this.triggerPropsEvent('onMouseLeave', e);

    if (this.isMouseLeaveToClose()) {
      if (this.state.popupVisible) {
        this.setPopupVisible(false, mouseLeaveDelay || 0);
      }
    }
  };

  onPopupMouseEnter = () => {
    this.clearDelayTimer();
  };

  onPopupMouseLeave = (e) => {
    this.onMouseLeave(e);
  };

  setMouseLocation = (e) => {
    if (this.getMergedProps().alignPoint) {
      this.mouseLocation = {
        clientX: e.clientX,
        clientY: e.clientY,
      };
    }
  };

  onContextMenu = (e) => {
    e.preventDefault();
    this.triggerPropsEvent('onContextMenu', e);
    this.setMouseLocation(e);

    if (!this.state.popupVisible) {
      this.setPopupVisible(true, 0);
    } else {
      // ????????????
      this.getMergedProps().alignPoint && this.update();
    }
  };

  hideContextMenu = (e) => {
    const { popupVisible } = this.state;
    if (popupVisible) {
      this.mousedownToHide = true;
    }
    this.triggerPropsEvent('onClick', e);

    if (this.isClickToHide() && popupVisible) {
      this.setPopupVisible(!popupVisible, 0);
    }
  };

  onClick = (e) => {
    const { popupVisible } = this.state;
    if (popupVisible) {
      this.mousedownToHide = true;
    }
    this.triggerPropsEvent('onClick', e);
    this.setMouseLocation(e);

    if (!this.isClickToHide() && popupVisible) {
      return;
    }

    this.setPopupVisible(!popupVisible, 0);
  };

  onFocus = (e) => {
    const { focusDelay } = this.getMergedProps();
    const onFocus = () => {
      this.triggerPropsEvent('onFocus', e);
    };

    this.clearDelayTimer();
    if (!this.mousedownToHide) {
      if (this.state.popupVisible) {
        onFocus && onFocus();
      } else {
        this.setPopupVisible(true, focusDelay || 0, onFocus);
      }
    }
    this.mousedownToHide = false;
  };

  onBlur = (e) => {
    this.setPopupVisible(false, 200, () => this.triggerPropsEvent('onBlur', e));
  };

  onResize = () => {
    if (this.getMergedProps().autoFixPosition && this.state.popupVisible) {
      this.updatePopupPosition();
    }
  };

  onPopupMouseDown = () => {
    this.hasPopupMouseDown = true;

    clearTimeout(this.mouseDownTimeout);
    this.mouseDownTimeout = setTimeout(() => {
      this.hasPopupMouseDown = false;
    }, 0);
  };

  // ??? children ???????????? disabled ???????????????????????? hover ????????????????????????????????????
  // ????????? disabled ???????????????????????? span??????????????????????????????
  getChild = () => {
    const { children } = this.props;

    const element = children as ReactElement;
    const elementType = (element && typeof element !== 'string' && element.type) as any;
    let child = children;

    if (['string', 'number'].indexOf(typeof children) > -1 || React.Children.count(children) > 1) {
      child = <span>{children}</span>;
    } else if (
      element &&
      elementType &&
      (elementType.__BYTE_BUTTON === true ||
        elementType.__BYTE_CHECKBOX === true ||
        elementType.__BYTE_SWITCH === true ||
        elementType.__BYTE_RADIO === true ||
        elementType === 'button') &&
      element.props.disabled
    ) {
      // ???????????????????????????????????????????????? span ????????????
      const { picked, omitted } = splitChildrenStyle(element.props.style, [
        'position',
        'left',
        'right',
        'top',
        'bottom',
        'float',
        'display',
        'zIndex',
      ]);
      child = (
        <span
          className={element.props.className}
          style={{ display: 'inline-block', ...picked, cursor: 'not-allowed' }}
        >
          {React.cloneElement(element, {
            style: {
              ...omitted,
              pointerEvents: 'none',
            },
            className: undefined,
          })}
        </span>
      );
    }

    // ??????????????????
    return child || <span />;
  };

  rafId: number;

  // ?????????dom????????????getPopupContainer???
  appendToContainer = (node: HTMLDivElement) => {
    caf(this.rafId);
    if (this.isDidMount) {
      const { getPopupContainer: getGlobalPopupContainer } = this.context;
      const { getPopupContainer } = this.getMergedProps();
      const gpc = getPopupContainer || getGlobalPopupContainer;

      const rootElement = this.getRootElement();

      const parent = gpc(rootElement);
      if (parent) {
        parent.appendChild(node);

        return;
      }
    }
    this.rafId = raf(() => {
      this.appendToContainer(node);
    });
  };

  getContainer = () => {
    const popupContainer = document.createElement('div');

    popupContainer.style.width = '100%';
    popupContainer.style.position = 'absolute';
    popupContainer.style.top = '0';
    popupContainer.style.left = '0';

    this.popupContainer = popupContainer;
    this.appendToContainer(popupContainer);

    return popupContainer;
  };

  // 1. ????????????????????? Trigger ????????????????????????Trigger????????????Trigger?????????
  // 2. ??????children???????????????????????????
  triggerPropsEvent = (eventName: EventsByTriggerNeedType, e) => {
    const child: any = this.getChild();
    const childHandler = child && child.props && child.props[eventName];

    const props = this.getMergedProps();

    if (isFunction(childHandler)) {
      childHandler(e);
    }
    if (isFunction(props[eventName])) {
      props[eventName](e);
    }
  };

  // ?????? children/ trigger ???????????????????????????
  triggerOriginEvent = (eventName: EventsByTriggerNeedType) => {
    const child: any = this.getChild();

    const childHandler = child && child.props && child.props[eventName];
    const propsHandler = this.getMergedProps()[eventName];

    if (isFunction(propsHandler) && isFunction(childHandler)) {
      return (e) => {
        childHandler(e);
        propsHandler(e);
      };
    }
    return childHandler || propsHandler;
  };

  render() {
    const {
      children,
      style,
      className,
      arrowProps,
      disabled,
      popup,
      classNames,
      duration,
      unmountOnExit,
      alignPoint,
      autoAlignPopupWidth,
      position,
      childrenPrefix,
      showArrow,
      popupStyle: dropdownPopupStyle,
    } = this.getMergedProps();
    const isExistChildren = children || children === 0;
    const { getPrefixCls, zIndex, rtl } = this.context;
    const { popupVisible, popupStyle } = this.state;

    if (!popup) {
      return null;
    }

    const mergeProps: any = {};
    const popupEventProps: any = {
      onMouseDown: this.onPopupMouseDown,
    };

    if (this.isHoverTrigger() && !disabled) {
      mergeProps.onMouseEnter = this.onMouseEnter;
      mergeProps.onMouseLeave = this.onMouseLeave;

      if (alignPoint) {
        mergeProps.onMouseMove = this.onMouseMove;
      }
      if (!this.isPopupHoverHide()) {
        popupEventProps.onMouseEnter = this.onPopupMouseEnter;
        popupEventProps.onMouseLeave = this.onPopupMouseLeave;
      }
    } else {
      mergeProps.onMouseEnter = this.triggerOriginEvent('onMouseEnter');
      mergeProps.onMouseLeave = this.triggerOriginEvent('onMouseLeave');
    }

    if (this.isContextMenuTrigger() && !disabled) {
      mergeProps.onContextMenu = this.onContextMenu;
      mergeProps.onClick = this.hideContextMenu;
    } else {
      mergeProps.onContextMenu = this.triggerOriginEvent('onContextMenu');
    }
    if (this.isClickTrigger() && !disabled) {
      mergeProps.onClick = this.onClick;
    } else {
      mergeProps.onClick = mergeProps.onClick || this.triggerOriginEvent('onClick');
    }
    if (this.isFocusTrigger() && !disabled) {
      mergeProps.onFocus = this.onFocus;
      if (this.isBlurToHide()) {
        mergeProps.onBlur = this.onBlur;
      }
    } else {
      mergeProps.onFocus = this.triggerOriginEvent('onFocus');
      mergeProps.onBlur = this.triggerOriginEvent('onBlur');
    }

    if (!disabled) {
      mergeProps.onKeyDown = this.onKeyDown;
    } else {
      mergeProps.onKeyDown = this.triggerOriginEvent('onKeyDown');
    }

    const child: any = this.getChild();
    const popupChildren: any = React.Children.only(popup());

    if (child.props.className) {
      mergeProps.className = child.props.className;
    }
    if (childrenPrefix && popupVisible) {
      mergeProps.className = mergeProps.className
        ? `${mergeProps.className} ${childrenPrefix}-open`
        : `${childrenPrefix}-open`;
    }
    // ?????????focus??????????????????tabIndex?????????tab???????????????focus????????????????????????
    if (this.isFocusTrigger()) {
      mergeProps.tabIndex = disabled ? -1 : 0;
    }

    const prefixCls = getPrefixCls('trigger');

    const popupClassName = cs(
      prefixCls,
      childrenPrefix,
      `${prefixCls}-position-${position}`,
      { [`${prefixCls}-rtl`]: rtl },
      className,
    );

    const childrenComponent = isExistChildren && (
      <ResizeObserver onResize={this.onResize}>
        {React.cloneElement(child, {
          ...mergeProps,
        })}
      </ResizeObserver>
    );

    const portalContent = (
      <CSSTransition
        in={!!popupVisible}
        timeout={duration}
        classNames={classNames}
        unmountOnExit={unmountOnExit}
        appear
        mountOnEnter
        onEnter={(e) => {
          e.style.display = 'initial';
          e.style.pointerEvents = 'none';
          if (classNames === 'slideDynamicOrigin') {
            // ????????????
            e.style.transform = this.getTransformTranslate();
          }
        }}
        onEntering={(e) => {
          if (classNames === 'slideDynamicOrigin') {
            // ????????????
            e.style.transform = '';
          }
        }}
        onEntered={(e) => {
          e.style.pointerEvents = 'auto';
          this.forceUpdate();
        }}
        onExit={(e) => {
          // ??????????????????????????????????????????????????????????????????
          e.style.pointerEvents = 'none';
        }}
        onExited={(e) => {
          e.style.display = 'none';
          // ?????????????????????null????????????setState popupStyle????????????????????????????????? Portal????????????????????????????????????
          // ?????????????????????????????? triggerRef ????????????null???????????????forceUpdate???????????????Portal???unmount???
          if (unmountOnExit) {
            this.triggerRef = null;
          }
          this.setState({ popupStyle: {} });
        }}
      >
        <ResizeObserver onResize={this.onResize}>
          <span
            ref={(node) => (this.triggerRef = node)}
            trigger-placement={this.realPosition}
            style={
              {
                width:
                  autoAlignPopupWidth && style?.width === undefined
                    ? this.childrenDomSize?.width
                    : '',
                ...popupStyle,
                position: 'absolute',
                zIndex: zIndex || '',
                ...style,
                // display
              } as CSSProperties
            }
            {...popupEventProps}
            className={popupClassName}
            {...pickDataAttributes(this.props)}
          >
            <popupChildren.type
              ref={popupChildren.ref}
              {...popupChildren.props}
              style={{ ...popupChildren.props.style, ...dropdownPopupStyle }}
            />
            {(showArrow || arrowProps) && (
              <div
                className={cs(`${prefixCls}-arrow-container`, {
                  [`${childrenPrefix}-arrow-container`]: childrenPrefix,
                })}
              >
                <div
                  {...arrowProps}
                  className={cs(
                    `${prefixCls}-arrow`,
                    {
                      [`${childrenPrefix}-arrow`]: childrenPrefix,
                    },
                    arrowProps?.className,
                  )}
                  style={{ ...this.arrowStyle, ...arrowProps?.style }}
                />
              </div>
            )}
          </span>
        </ResizeObserver>
      </CSSTransition>
    );

    // ?????? triggerRef ?????????????????????????????????????????????????????????portal???
    const portal =
      popupVisible || this.triggerRef ? (
        <Portal getContainer={this.getContainer}>{portalContent}</Portal>
      ) : null;

    return isExistChildren ? (
      <React.Fragment>
        {childrenComponent}
        {portal}
      </React.Fragment>
    ) : (
      portal
    );
  }
}

export default Trigger;
