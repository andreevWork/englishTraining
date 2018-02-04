const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const entryFile = path.resolve(__dirname, 'src', 'index.ts');
const outputFile = path.resolve(__dirname, 'dist');

module.exports = {
    entry: entryFile,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        filename: 'bundle.js',
        path: outputFile
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
};
