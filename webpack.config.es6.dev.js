const path = require("path");
const merge = require('webpack-merge');
const base = require('./webpack.config.base.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const outPath = "dist/es6/dev" ;

module.exports = merge(base, {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(path.join(__dirname, outPath))
    ],
    output: {
        path: path.join(__dirname, outPath)
    }
});