import { useMemo } from 'react';
import omit from '../omit';

export type MergePropsOptions = {
  _ignorePropsFromGlobal?: boolean;
};

export default function useMergeProps<PropsType>(
  componentProps: PropsType & MergePropsOptions,
  defaultProps: Partial<PropsType>,
  globalComponentConfig: Partial<PropsType>
): PropsType {
  const { _ignorePropsFromGlobal } = componentProps;
  const _defaultProps = useMemo(() => {
    return { ...defaultProps, ...(_ignorePropsFromGlobal ? {} : globalComponentConfig) };
  }, [defaultProps, globalComponentConfig, _ignorePropsFromGlobal]);

  const props = useMemo(() => {
    // Must remove property of MergePropsOptions before passing it to component
    const mProps = omit(componentProps, ['_ignorePropsFromGlobal']) as PropsType;
    console.log('mProps', mProps)
    for (const propName in _defaultProps) {
      if (mProps[propName] === undefined) {
        mProps[propName] = _defaultProps[propName];
      }
    }

    return mProps;
  }, [componentProps, _defaultProps]);

  return props;
}
