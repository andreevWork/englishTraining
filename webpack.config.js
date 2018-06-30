const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const entryFile = path.resolve(__dirname, 'src', 'index.jsx');
const outputDir = path.resolve(__dirname);

module.exports = {
  mode: 'development',
  entry: entryFile,
  module: {
      rules: [
          {
              test: /\.jsx?$/,
              loader: 'babel-loader',
              exclude: /node_modules/
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
                        path.resolve(__dirname, 'src', 'styles', 'imported'),
                        path.resolve(__dirname, 'src', 'styles', 'common')
                      ]
                  }
              }]
          }

      ]
  },
  resolve: {
      extensions: [ '.jsx', '.js' ],
      alias: {
          DiContainer: path.resolve(__dirname, 'src', 'services', 'DI.js'),
          utils: path.resolve(__dirname, 'src', 'utils'),
          constants: path.resolve(__dirname, 'src', 'constants'),
          common: path.resolve(__dirname, 'src', 'components/common'),
          games: path.resolve(__dirname, 'src', 'components/modules/Player/components/Games'),
          player: path.resolve(__dirname, 'src', 'components/modules/Player/components'),
          services: path.resolve(__dirname, 'src', 'services'),
          reactions: path.resolve(__dirname, 'src', 'reactions'),
      }
  },
  output: {
      filename: 'bundle.js',
      path: outputDir,
      publicPath: '/'
  },
  devtool: 'inline-source-map',
  plugins: [
      new HtmlWebpackPlugin({
        title: 'English training video player',
        favicon: path.resolve(outputDir, 'favicon.ico')
      })
  ],
  
  devServer: {
    contentBase: outputDir,
    historyApiFallback: true,
    open: true,
    port: 3000,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};
