const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'source-map',
  devServer: {
    noInfo: true,
    contentBase: './dist',
    port: 9000,
    open: true
  },
});
