import React, { createContext } from 'react';
import useMergeProps from '../_util/hooks/useMergeProps';
import omit from '../_util/omit';
import Empty from '../empty';
import type { ConfigProviderProps } from './interface';

function renderEmpty(componentName?: string) {
  switch (componentName) {
    default:
      return <Empty />;
  }
}

const defaultProps: ConfigProviderProps = {
  prefixCls: 'eyas',
  size: 'default',
  renderEmpty,
  getPopupContainer: () => document.body,
};

// 全局 context
export const ConfigContext = createContext<ConfigProviderProps>({
  getPrefixCls: (componentName: string, customPrefix?: string) =>
    `${customPrefix || 'eyas'}-${componentName}`,
  ...defaultProps,
});

const componentConfig = {};

function ConfigProvider(baseProps: ConfigProviderProps) {
  const props = useMergeProps<ConfigProviderProps>(baseProps, defaultProps, componentConfig);
  const { prefixCls, children } = props;

  function getPrefixCls(componentName: string, customPrefix?: string) {
    return `${customPrefix || prefixCls}-${componentName}`;
  }

  const config: ConfigProviderProps = {
    ...omit(props, ['children']),
    getPrefixCls,
  };

  let child = children;

  return <ConfigContext.Provider value={config}>{child}</ConfigContext.Provider>;
}

ConfigProvider.ConfigContext = ConfigContext;

ConfigProvider.displayName = 'ConfigProvider';

export default ConfigProvider;

export const ConfigConsumer = ConfigContext.Consumer;

export { ConfigProviderProps };
