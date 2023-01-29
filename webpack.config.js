const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: './src/index',
    output: {
        filename: 'main.js',
        path: path.resolve('./docs'),
    },
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        static: path.resolve(__dirname, './docs'),
        open: true,
        compress: true,
        hot: true,
        port: 8000,
    },
    plugins: [
        /* ... */
        // Only update what has changed on hot reload
        new webpack.HotModuleReplacementPlugin(),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            // JavaScript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'webpack Boilerplate',
          template: path.resolve(__dirname, './index.html'), 
          filename: 'index.html', // output file
        }),
    ],
};