const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const srcDir = path.resolve(__dirname, '..', 'src');
const entryFile = path.resolve(srcDir, 'index.jsx');
const entryHTML = path.resolve(srcDir, 'index.html');

module.exports = {
  entry: entryFile,
  
  module: {
      rules: [
          {
              test: /\.jsx?$/,
              loader: 'babel-loader',
              exclude: /node_modules/
          },
          {
            test: /\.css/,
            use: [{
              loader: "style-loader"
            }, {
              loader: "css-loader",
            }]
          },
          {
              test: /\.sass$/,
              use: [{
                  loader: "style-loader"
              }, {
                  loader: "css-loader",
                  options: {
                      modules: true,
                      camelCase: true,
                      localIdentName: '[path][name]__[local]--[hash:base64:5]'
                  }
              }, {
                  loader: "sass-loader",
                  options: {
                      includePaths: [
                        path.resolve(srcDir, 'styles', 'imported'),
                        path.resolve(srcDir, 'styles', 'common')
                      ]
                  }
              }]
          }

      ]
  },
  
  resolve: {
      extensions: [ '.jsx', '.js' ],
      alias: {
          DiContainer: path.resolve(srcDir, 'services', 'DI.js'),
          utils: path.resolve(srcDir, 'utils'),
          constants: path.resolve(srcDir, 'constants'),
          common: path.resolve(srcDir, 'components/common'),
          games: path.resolve(srcDir, 'components/modules/Player/components/Games'),
          player: path.resolve(srcDir, 'components/modules/Player/components'),
          services: path.resolve(srcDir, 'services'),
          reactions: path.resolve(srcDir, 'reactions'),
      }
  },
  
  plugins: [
      new HtmlWebpackPlugin({
        template: entryHTML
      }),
    
      new Dotenv()
  ]
};
