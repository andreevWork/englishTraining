const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config');
const CopyWebpackPlugin = require('copy-webpack-plugin')

const distDir = path.resolve(__dirname, '..', 'dist');
const assetsDir = path.resolve(__dirname, '..', 'assets');

module.exports = merge(common, {
  mode: 'production',
  
  output: {
    filename: 'main.js',
    publicPath: '/',
    path: distDir
  },
  
  plugins: [
    new CopyWebpackPlugin([
      { from: assetsDir, to: path.join(distDir, 'assets') }
    ])
  ]
});
