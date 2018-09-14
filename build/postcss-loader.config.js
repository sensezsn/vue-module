'use strict';

const nested = require('postcss-nested');
const cssnext = require('postcss-cssnext');
const atImport = require('postcss-import');

module.exports = {
  loader: 'postcss-loader',
  options: {
    plugins() {
      return [
        atImport({
          path: ['src']
        }),
        nested(),
        cssnext({
          features: {
            autoprefixer: {
              browsers: [
                'last 3 versions',
                '> 1% in CN',
                'Firefox ESR',
                'opera 12.1',
                'ie >= 9',
                'edge >= 12',
                'safari >= 7'
              ]
            }
          }
        })
      ];
    }
  }
};
