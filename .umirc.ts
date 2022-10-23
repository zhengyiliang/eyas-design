import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'eyas-design',
  hash: true,
  base: '/eyas-design',
  publicPath: '/eyas-design/',
  favicon: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
  logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
  outputPath: 'docs-dist',
  mode: 'site',
  mfsu: {},
  dynamicImport: {},
  navs: [
    // null,
    {
      title: '文档',
      path: '/docs',
    },
    {
      title: '组件',
      path: '/components',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/yingliyu/fish-ui',
    },
  ],
  // resolve: {
  //   includes: ['docs', 'components'],
  // },
  // exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  // locales: [
  //   ['zh-CN', '中文'],
  //   ['en-US', 'English'],
  // ],
  // more config: https://d.umijs.org/config
  lessLoader: { javascriptEnabled: true },
  //  按需加载 antd
  // extraBabelPlugins: [
  //   [
  //     'babel-plugin-import',
  //     {
  //       libraryName: 'antd',
  //       libraryDirectory: 'es',
  //       style: true,
  //     },
  //   ],
  // ],
});
