const path = require('path');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: "./src/js/index.js",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpg)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new htmlPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ],

    mode: "development",

    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 5911,
        open: true, // open in def browser
        hot: true, // auto load
        compress: true, // it says compress
        historyApiFallback: true,
    },
    watch: true,
}