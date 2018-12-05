const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config');

const rootDir = path.resolve(__dirname, '..');

module.exports = merge(common, {
  mode: 'development',
  
  output: {
      filename: 'whatever.js',
      publicPath: '/',
      path: rootDir
  },
  
  devtool: 'inline-source-map',
  
  devServer: {
    hot: false,
    inline: false,
    contentBase: rootDir,
    historyApiFallback: true,
    open: true,
    port: 3000,
    host: '0.0.0.0',
    watchContentBase: false
  }
});
