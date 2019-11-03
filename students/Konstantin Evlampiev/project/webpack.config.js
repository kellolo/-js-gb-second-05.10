const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const minCss = require('mini-css-extract-plugin');


module.exports = {
    entry: {
        main: path.resolve(__dirname, "src", "public", "index.js")
    },
    output: {
        path: path.join(__dirname, "dist/public"),
        publicPath: "",
        filename: "js/[name].js"
    },
    target: 'web',
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [minCss.loader, 'css-loader']
            },
            {
                test: /\.(jpg|png))$/,
                use: {
                    loader: 'file-loader'
                }
            }
        ]
    },
    plugins: [
        new htmlPlugin({
            template: 'src/public/index.html',
            filename: 'index.html',
            excludeChunks: ['server']
        }),
        new minCss({
            filename: 'css/[name].css',
            chunkFilename: '[id].css'
        })
    ]
}