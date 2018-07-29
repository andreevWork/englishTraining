const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config');

const distDir = path.resolve(__dirname, '..', 'dist');

module.exports = merge(common, {
  mode: 'production',
  
  output: {
    filename: 'main.js',
    publicPath: '/dist',
    path: distDir
  }
});
