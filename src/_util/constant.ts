import pick from './pick';

export const NOOP = () => {};

export function newArray(length: number) {
  return Array.apply(null, Array(length));
}

export function pickTriggerPropsFromRest(rest) {
  return pick(rest, [
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onContextMenu',
    'onClick',
    'onFocus',
    'onBlur',
    'tabIndex',
  ]);
}

export const locale = {
  Typography: {
    copy: '复制',
    copied: '已复制',
    edit: '编辑',
    fold: '折叠',
    unfold: '展开',
  },
};
