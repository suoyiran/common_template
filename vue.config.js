/* eslint-disable no-undef */
const UglifyJsPlugin = require ('uglifyjs-webpack-plugin');
module.exports = {
  configureWebpack: {
    //注释console
    optimization: {
      minimizer: [
        new UglifyJsPlugin ({
          uglifyOptions: {
            compress: {
              // warnings: false,
              drop_console: false, //注释console
              drop_debugger: false,
              pure_funcs: ['console.log'], //移除console
            },
          },
        }),
      ],
    },
  },
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://api.li.xmartjoy.com',
  //       changeOrigin: true,
  //     },
  //   },
  //   hot: true,
  //   disableHostCheck: true,
  // },
};
