import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { SplitGroupProps, CollapsedConfig } from './interface';
import { ConfigContext } from '../config-provider';
import cs from '../_util/classNames';
import { isFunction, isNumber, isUndefined, isObject, isString } from '../_util/is';
import ResizeTrigger from './resize-trigger';
import { on, off } from '../_util/dom';
import omit from '../_util/omit';

const DIRECTION_HORIZONTAL = 'horizontal';
const DIRECTION_VERTICAL = 'vertical';

function SplitGroup(props: SplitGroupProps, ref) {
  const {
    panes,
    style,
    className,
    component = 'div',
    direction = 'horizontal',
    icon,
    ...rest
  } = props;
  const { getPrefixCls, rtl } = useContext(ConfigContext);
  const defaultOffset = 1 / panes.length;
  const wrapperRef = useRef<HTMLElement>();
  const recordRef = useRef<Array<{ moving: boolean; startOffset: number; startPosition: number }>>(
    new Array(panes.length).fill({
      moving: false,
      startOffset: 0,
      startPosition: 0,
    }),
  );
  const paneContainers = useRef<HTMLElement[]>([]);
  const movingIndex = useRef<number>(0);
  const prevOffsets = useRef<number[]>([]);

  const [offsets, setOffsets] = useState<number[]>(new Array(panes.length).fill(defaultOffset));
  const [isMoving, setIsMoving] = useState(false);
  const [triggerSize, setTriggerSize] = useState<number[]>(new Array(panes.length).fill(0));
  const [collapsedStatus, setCollapsedStatus] = useState<{ prev: boolean; next: boolean }[]>(
    new Array(Math.max(panes.length - 1, 0)).fill({ prev: false, next: false }),
  );

  const prefixCls = getPrefixCls('resizebox-split-group');
  const isHorizontal = direction === DIRECTION_HORIZONTAL;
  const rtlReverse = isHorizontal && rtl;
  const isTriggerHorizontal = !isHorizontal;

  const classNames = cs(
    prefixCls,
    `${prefixCls}-${isHorizontal ? DIRECTION_HORIZONTAL : DIRECTION_VERTICAL}`,
    { [`${prefixCls}-moving`]: isMoving },
    { [`${prefixCls}-rtl`]: rtl },
    className,
  );
  const Tag = component as any;

  // ??????????????? offset, ????????????size ?????????????????????
  const getInitialOffsets = () => {
    let newOffsets = [];
    panes.forEach((pane) => {
      const { size } = pane;
      if (!isUndefined(size)) {
        newOffsets.push(formatSize(size));
      } else {
        newOffsets.push(undefined);
      }
    });
    // ???????????????????????????????????? size ?????????
    const noSizeArr = newOffsets.filter((size) => !size);
    const remainPercent =
      1 -
      newOffsets.reduce((a, b) => {
        const formatA = a || 0;
        const formatB = b || 0;
        return formatA + formatB;
      }, 0);

    const averagePercent = remainPercent / noSizeArr.length;
    newOffsets = newOffsets.map((size) => {
      if (!isUndefined(size)) {
        return size;
      }
      return averagePercent;
    });
    return newOffsets;
  };

  // ????????????????????????????????????????????????????????????????????????????????????
  const getPaneSize = (index) => {
    const prevTriggerSize = triggerSize[index - 1] || 0;
    const currentTriggerSize = triggerSize[index];
    const baseVal = offsets[index] * 100;
    const unit = '%';
    return `calc(${baseVal}${unit} - ${(prevTriggerSize + currentTriggerSize) / 2}px)`;
  };

  // ?????? ?????????/????????? => ????????????????????????(?????????)
  function formatSize(size?: number | string) {
    const totalPX = isHorizontal ? wrapperRef.current.offsetWidth : wrapperRef.current.offsetHeight;
    if (!size || (isNumber(size) && size < 0)) {
      return 0;
    }

    const percent = isString(size) ? parseFloat(size) / totalPX : size;
    return Math.min(percent, 1);
  }

  // ?????????????????????????????????????????????????????? ??? ???????????????????????????????????????????????????
  const getMinAndMax = (index: number) => {
    const next = Math.min(index + 1, panes.length - 1);
    const totalOffset = offsets[index] + offsets[next];

    const currentMin = formatSize(panes[index].min) || 0;
    let currentMax = formatSize(panes[index].max) || totalOffset;
    const nextMin = formatSize(panes[next].min) || 0;
    let nextMax = formatSize(panes[next].max) || totalOffset;

    //  min ?????????????????? max
    currentMax = Math.min(totalOffset - nextMin, currentMax);
    nextMax = Math.min(totalOffset - currentMin, nextMax);
    return {
      currentMin,
      currentMax,
      nextMin,
      nextMax,
    };
  };

  // ??????????????????????????????????????????????????????????????????????????????????????????
  const getNewOffsets = (startOffset: number, startPosition: number, currentPosition: number) => {
    const current = movingIndex.current;
    const next = current + 1;
    const newOffsets = [...offsets];
    const ratio = rtlReverse ? -1 : 1;
    const currentPercent = offsets[current];
    const nextPercent = offsets[next];
    const totalPercent = currentPercent + nextPercent;
    const { currentMin: minOffset, currentMax: maxOffset } = getMinAndMax(current);
    let moveOffset = startOffset + formatSize(`${(currentPosition - startPosition) * ratio}px`);
    moveOffset = Math.max(minOffset, moveOffset);
    moveOffset = Math.min(maxOffset, moveOffset);
    newOffsets[current] = moveOffset;
    // ?????? totalOffset = nextOffset + currentOffset  ?????????
    newOffsets[next] = totalPercent - moveOffset;
    return newOffsets;
  };

  function onTriggerResize(e, index) {
    const { contentRect } = e[0];
    const currentSize = contentRect[isTriggerHorizontal ? 'height' : 'width'];
    const newTriggerSize = [...triggerSize];
    newTriggerSize[index] = currentSize;
    setTriggerSize(newTriggerSize);
  }

  // ????????????????????????????????????
  const getCollapsedConfig = (index: number) => {
    let collapsible = panes[index].collapsible;

    if (!isObject(collapsible)) {
      collapsible = !collapsible ? {} : { prev: true, next: true };
    }

    const { prev, next } = collapsible;

    if (!prev && !next) {
      return {};
    }
    if (!collapsedStatus[index]) {
      return {};
    }
    // ?????????prev?????????????????? ???????????? prev ??????????????????????????????????????????????????????
    const hasPrev = !!prev || (!prev && collapsedStatus[index].next);

    // ?????????next?????????????????? ???????????? next ??????????????????????????????????????????????????????
    const hasNext = !!next || (!next && collapsedStatus[index].prev);
    return { hasPrev, hasNext };
  };

  // ???????????????????????????????????????????????????
  function onTriggerMouseDown(e, index) {
    props.onMovingStart && props.onMovingStart(index);
    movingIndex.current = index;
    const currentRecord = recordRef.current[index];
    currentRecord.moving = true;
    currentRecord.startOffset = offsets[index];
    currentRecord.startPosition = isHorizontal ? e.pageX : e.pageY;
    setIsMoving(true);
    on(window, 'mousemove', moving);
    on(window, 'touchmove', moving);
    on(window, 'mouseup', moveEnd);
    on(window, 'touchend', moveEnd);
    on(window, 'contextmenu', moveEnd);

    document.body.style.cursor = isTriggerHorizontal ? 'row-resize' : 'col-resize';
  }

  // ?????????????????? ?????????????????????????????? ????????????
  function moving(e) {
    const index = movingIndex.current;
    const currentRecord = recordRef.current[index];
    const totalPX = isHorizontal ? wrapperRef.current.offsetWidth : wrapperRef.current.offsetHeight;
    if (currentRecord.moving) {
      const newOffsets = getNewOffsets(
        currentRecord.startOffset,
        currentRecord.startPosition,
        isHorizontal ? e.pageX : e.pageY,
      );

      setOffsets(newOffsets);
      prevOffsets.current = newOffsets;
      props.onMoving &&
        props.onMoving(
          e,
          newOffsets.map((value) => `${value * totalPX}px`),
          index,
        );
    }
  }

  // ?????????????????????????????????
  function moveEnd() {
    const index = movingIndex.current;
    recordRef.current[index].moving = false;
    setIsMoving(false);
    off(window, 'mousemove', moving);
    off(window, 'touchmove', moving);
    off(window, 'mouseup', moveEnd);
    off(window, 'touchend', moveEnd);
    off(window, 'contextmenu', moveEnd);
    document.body.style.cursor = 'default';
    props.onMovingEnd && props.onMovingEnd(index);
  }

  // ????????????????????????????????????
  function handleCollapsed(e, index, status: 'prev' | 'next', callback) {
    const next = index + 1;
    const newOffset = [...offsets];
    const currentOffset = offsets[index];
    const nextOffset = offsets[next];
    const totalOffset = currentOffset + nextOffset;
    const totalPX = isHorizontal ? wrapperRef.current.offsetWidth : wrapperRef.current.offsetHeight;

    const { currentMin, nextMin } = getMinAndMax(index);

    // ????????????????????????????????????????????????????????????preOffsets?????????
    let newCurrentOffset = prevOffsets.current[index];
    let newNextOffset = prevOffsets.current[next];

    // ??????????????????????????????
    let collapsed = collapsedStatus[index][status];

    // ??????????????????????????????????????????currentPane = currentMin;
    if (status === 'prev') {
      // ?????????????????????????????????????????? ?????? ?????????????????????????????????????????????
      if (nextOffset !== nextMin || newNextOffset === nextMin) {
        // ?????????????????????
        newCurrentOffset = currentMin;
        newNextOffset = totalOffset - currentMin;
        collapsed = true;
      }

      // ????????????????????????
    } else if (currentOffset !== currentMin || newCurrentOffset === currentMin) {
      newCurrentOffset = totalOffset - nextMin;
      newNextOffset = nextMin;
      collapsed = true;
    }
    newOffset[index] = newCurrentOffset;
    newOffset[next] = newNextOffset;

    props.onMoving &&
      props.onMoving(
        e,
        newOffset.map((value) => `${value * totalPX}px`),
        index,
      );
    props.onMovingEnd && props.onMovingEnd(index);
    setOffsets(newOffset);

    if (isFunction(callback)) {
      callback(e, index, status, collapsed);
    }
  }

  useEffect(() => {
    const offsets = getInitialOffsets();
    setOffsets(offsets);
    prevOffsets.current = offsets;
  }, [JSON.stringify(panes.map((item) => item.size))]);

  useImperativeHandle(ref, () => wrapperRef.current, []);

  useEffect(() => {
    const newCollapsedStatus = [];
    offsets.forEach((offset, index) => {
      const currentCollapsedStatus = { prev: false, next: false };
      const next = index + 1;
      const { currentMin, nextMin } = getMinAndMax(index);
      // ??? offsets ????????????????????????????????? collapsed ??????
      if (offset === currentMin) {
        currentCollapsedStatus.prev = true;
      } else if (offsets[next] === nextMin) {
        currentCollapsedStatus.next = true;
      }
      newCollapsedStatus.push(currentCollapsedStatus);
    });
    setCollapsedStatus(newCollapsedStatus);
  }, [offsets]);

  return (
    <Tag
      {...omit(rest, ['onMovingStart', 'onPaneResize', 'onMoving', 'onMovingEnd'])}
      style={style}
      className={classNames}
      ref={wrapperRef}
    >
      {panes.map((pane, index) => {
        const { content, disabled, trigger, resizable = true, collapsible = {} } = pane;
        const { hasPrev, hasNext } = getCollapsedConfig(index);
        const prevConfig: CollapsedConfig =
          isObject(collapsible) && isObject(collapsible.prev) ? collapsible.prev : {};
        const nextConfig: CollapsedConfig =
          isObject(collapsible) && isObject(collapsible.next) ? collapsible.next : {};
        return (
          <React.Fragment key={index}>
            <div
              className={`${prefixCls}-pane`}
              style={{ flexBasis: getPaneSize(index) }}
              ref={(el) => (paneContainers.current[index] = el)}
            >
              {content}
            </div>

            {!disabled && index !== panes.length - 1 && (
              <ResizeTrigger
                className={`${prefixCls}-trigger`}
                direction={isTriggerHorizontal ? DIRECTION_HORIZONTAL : DIRECTION_VERTICAL}
                icon={icon}
                onResize={(e) => onTriggerResize(e, index)}
                onMouseDown={(e) => onTriggerMouseDown(e, index)}
                collapsible={{
                  prev: hasPrev
                    ? {
                        onClick: (e) => handleCollapsed(e, index, 'prev', prevConfig.onClick),
                        icon: prevConfig.icon,
                        collapsed: collapsedStatus[index].prev,
                      }
                    : undefined,
                  next: hasNext
                    ? {
                        onClick: (e) => handleCollapsed(e, index, 'next', nextConfig.onClick),
                        icon: nextConfig.icon,
                        collapsed: collapsedStatus[index].next,
                      }
                    : undefined,
                }}
                resizable={resizable}
                renderChildren={trigger}
              />
            )}
          </React.Fragment>
        );
      })}
    </Tag>
  );
}

const SplitGroupComponent = forwardRef<unknown, SplitGroupProps>(SplitGroup);

SplitGroupComponent.displayName = 'ResizeBoxSplitGroup';

export default SplitGroupComponent;
