# vue-module

The boilerplate based on [vue](https://github.com/vuejs/vue), [vue-router](https://github.com/vuejs/vue-router), [vuex](https://github.com/vuejs/vuex), [webpack](https://webpack.js.org/), [nprogress](http://ricostacruz.com/nprogress/), [axios](https://github.com/mzabriskie/axios) for rapid project development

## Getting Started

```shell
# dev (Startup the dev server and the mock server.)
$ npm run dev

# build
$ npm run build

# mock server
$ npm run mock

# lint
$ npm run lint
```

## Configuration

```shell
$ open build/config.js
```

### config.js

```js
'use strict';

const config = {
  title: 'vue boilerplate',
  output: './dist', // 构建输出目录
  port: 8688,
  mock: {
    contentBase: './mock', // mock数据目录
    port: 8689 // mock服务器端口
  }
}

/**
 * http proxy options
 * @see https://github.com/chimurai/http-proxy-middleware#options
 */
config.proxy = {
  // 以/api开头的请求代理到数据模拟服务
  '/api/*': {
    target: `http://localhost:${config.mock.port}/`,
    secure: false
  },
  '/github/api/*': {
    target: 'https://api.github.com',
    changeOrigin: true,
    pathRewrite: {
      '^/github/api': ''
    }
  }
};

module.exports = config;
```
