import React, {
  forwardRef,
  useContext,
  useImperativeHandle,
  useState,
  useRef,
  useEffect,
} from 'react';
import cs from '../_util/classNames';
import ResizeTrigger from './resize-trigger';
import { ConfigContext } from '../config-provider';
import { on, off } from '../_util/dom';
import type { SplitProps } from './interface';
import useIsomorphicLayoutEffect from '../_util/hooks/useIsomorphicLayoutEffect';

const DIRECTION_HORIZONTAL = 'horizontal';
const DIRECTION_VERTICAL = 'vertical';

function Split(props: SplitProps, ref) {
  const {
    style,
    className,
    component = 'div',
    direction = 'horizontal',
    icon,
    size = 0.5,
    min,
    max,
    panes,
    disabled,
    trigger,
  } = props;
  const { getPrefixCls, rtl } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('resizebox-split');
  const isHorizontal = direction.includes(DIRECTION_HORIZONTAL);
  const isReverse = direction.includes('reverse');
  const rtlReverse = isHorizontal && rtl;
  const isTriggerHorizontal = !isHorizontal;
  const classNames = cs(
    prefixCls,
    `${prefixCls}-${isHorizontal ? DIRECTION_HORIZONTAL : DIRECTION_VERTICAL}`,
    { [`${prefixCls}-rtl`]: rtl },
    className,
  );
  const [firstPane, secondPane] = panes;
  const isPxSize = typeof size === 'string';
  const [offset, setOffset] = useState<number>(parseFloat(size as string));
  const [triggerSize, setTriggerSize] = useState<number>(0);
  const recordRef = useRef<{
    startX: number;
    startY: number;
    startWidth: number;
    startHeight: number;
    startOffset: number;
    moving: boolean;
  }>({
    startX: 0,
    startY: 0,
    startWidth: 0,
    startHeight: 0,
    startOffset: 0,
    moving: false,
  });
  const wrapperRef = useRef<HTMLElement>();
  const paneContainers = useRef<HTMLElement[]>([]);

  useImperativeHandle(ref, () => wrapperRef.current, []);

  function px2percent(numerator, denominator) {
    return parseFloat(numerator) / parseFloat(denominator);
  }

  function getOffset(startSize, startOffset, startPosition, currentPosition) {
    const minOffset = min ? parseFloat(min as string) : 0;
    const maxOffset = max ? parseFloat(max as string) : isPxSize ? startSize : 1;
    let ratio = isReverse ? -1 : 1;
    const rtlRatio = rtlReverse ? -1 : 1;
    ratio *= rtlRatio;
    let moveOffset = isPxSize
      ? startOffset + (currentPosition - startPosition) * ratio
      : px2percent(startSize * startOffset + (currentPosition - startPosition) * ratio, startSize);
    moveOffset = Math.max(moveOffset, minOffset);
    moveOffset = Math.min(moveOffset, maxOffset);
    return moveOffset;
  }

  // ???????????????????????????????????????????????????
  function onTriggerMouseDown(e) {
    props.onMovingStart && props.onMovingStart();

    recordRef.current.moving = true;
    recordRef.current.startX = e.pageX;
    recordRef.current.startY = e.pageY;
    recordRef.current.startWidth = wrapperRef.current?.offsetWidth;
    recordRef.current.startHeight = wrapperRef.current?.offsetHeight;
    recordRef.current.startOffset = offset;

    on(window, 'mousemove', moving);
    on(window, 'touchmove', moving);
    on(window, 'mouseup', moveEnd);
    on(window, 'touchend', moveEnd);
    on(window, 'contextmenu', moveEnd);

    document.body.style.cursor = isTriggerHorizontal ? 'row-resize' : 'col-resize';
  }

  // ?????????????????? firstPane ???????????????
  function moving(e) {
    if (recordRef.current.moving) {
      /* eslint-disable */
      const newOffset = isHorizontal
        ? getOffset(
            recordRef.current.startWidth,
            recordRef.current.startOffset,
            recordRef.current.startX,
            e.pageX,
          )
        : getOffset(
            recordRef.current.startHeight,
            recordRef.current.startOffset,
            recordRef.current.startY,
            e.pageY,
          );

      setOffset(newOffset);
      props.onMoving && props.onMoving(e, isPxSize ? `${newOffset}px` : newOffset);
    }
  }

  // ?????????????????????????????????
  function moveEnd() {
    recordRef.current.moving = false;
    off(window, 'mousemove', moving);
    off(window, 'touchmove', moving);
    off(window, 'mouseup', moveEnd);
    off(window, 'touchend', moveEnd);
    off(window, 'contextmenu', moveEnd);
    document.body.style.cursor = 'default';
    props.onMovingEnd && props.onMovingEnd();
  }

  // ?????? trigger ??????
  function onTriggerResize(e) {
    const { contentRect } = e[0];
    const newTriggerSize = contentRect[isTriggerHorizontal ? 'height' : 'width'];
    setTriggerSize(newTriggerSize);
  }

  // ?????? offset ??? triggerSize ?????? firstPane ?????????
  function getFirstPaneSize() {
    const unit = isPxSize ? 'px' : '%';
    if (!offset) return `0${unit}`;

    const baseVal = isPxSize ? offset : offset * 100;

    return `calc(${baseVal}${unit} - ${triggerSize / 2}px)`;
  }

  useEffect(() => {
    props.onPaneResize && props.onPaneResize(paneContainers.current);
  }, [offset, triggerSize]);

  useIsomorphicLayoutEffect(() => {
    const newOffset = parseFloat(size as string);
    if (offset !== newOffset) {
      setOffset(newOffset);
    }
  }, [size]);

  const Tag = component as any;

  const firstPaneNode = (
    <div
      className={cs(`${prefixCls}-pane`, 'first-pane')}
      style={{ flexBasis: getFirstPaneSize() }}
      ref={(el) => {
        paneContainers.current[0] = el;
      }}
    >
      {firstPane}
    </div>
  );

  const secondPaneNode = (
    <div
      className={cs(`${prefixCls}-pane`, 'second-pane')}
      ref={(el) => {
        paneContainers.current[1] = el;
      }}
    >
      {secondPane}
    </div>
  );
  const paneNodeArr = isReverse ? [secondPaneNode, firstPaneNode] : [firstPaneNode, secondPaneNode];

  return (
    <Tag style={style} className={classNames} ref={wrapperRef}>
      {paneNodeArr[0]}
      {!disabled && (
        <ResizeTrigger
          className={`${prefixCls}-trigger`}
          direction={isTriggerHorizontal ? DIRECTION_HORIZONTAL : DIRECTION_VERTICAL}
          icon={icon}
          onMouseDown={onTriggerMouseDown}
          onResize={onTriggerResize}
        >
          {trigger}
        </ResizeTrigger>
      )}
      {paneNodeArr[1]}
    </Tag>
  );
}

const SplitComponent = forwardRef<unknown, SplitProps>(Split);

SplitComponent.displayName = 'ResizeBoxSplit';

export default SplitComponent;

export { SplitProps };
