'use strict';

const config = {
  title: 'vue-module',
  output: './dist',
  vendor: {
    path: './node_modules/__dll-vendor-bundle__',
    modules: [
      '@babel/polyfill',
      'axios',
      'vue',
      'vue-router',
      'vuex-router-sync',
      'vuex',
      'nprogress'
    ]
  },
  port: 8688,
  mock: {
    contentBase: './mock',
    port: 8689
  }
};

/**
 * http proxy options
 * @see https://github.com/chimurai/http-proxy-middleware#options
 */
config.proxy = {
  // 以/api开头的请求代理到数据模拟服务
  '/api/*': {
    target: `http://localhost:${config.mock.port}/`,
    secure: false
  }
};

module.exports = config;
