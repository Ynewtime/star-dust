import { defineConfig, Request, Response } from 'umi';

/** 部署路径 */
const PROD_URL = '/';

export default defineConfig({
  base: `${PROD_URL}`,
  define: {
    BUILD_TIME: new Date(),
  },
  dynamicImport: {
    loading: '@/components/PageLoading',
  },
  esbuild: {},
  extraPostCSSPlugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-preset-env')({ stage: 3 }),
  ],
  favicon: `${PROD_URL}/favicon.jpg`,
  hash: true,
  nodeModulesTransform: {
    type: 'none',
  },
  publicPath: `${PROD_URL}/`,
  title: 'Star Dust',
});
