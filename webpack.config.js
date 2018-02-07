const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const entryFile = path.resolve(__dirname, 'src', 'index.jsx');
const outputDir = path.resolve(__dirname, 'dist');

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
                    loader: "sass-loader"
                }]
            }

        ]
    },
    resolve: {
        extensions: [ '.jsx', '.js' ],
        alias: {
            utils: path.resolve(__dirname, 'src', 'utils'),
            reactions: path.resolve(__dirname, 'src', 'reactions'),
        }
    },
    output: {
        filename: 'bundle.js',
        path: outputDir
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],

    devServer: {
        contentBase: outputDir,
        compress: true,
        port: 3000
    }
};
