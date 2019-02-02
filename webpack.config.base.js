const path = require("path");

module.exports = {
    entry: {
        bubble: './webpackEntry/bubbleEntry.js',
        column: './webpackEntry/columnEntry.js',
        line: './webpackEntry/lineEntry.js',
        pie: './webpackEntry/pieEntry.js',
        radar: './webpackEntry/radarEntry.js',
        scatter: './webpackEntry/scatterEntry.js',
        sunburs: './webpackEntry/sunbursEntry.js',
        sunbursByValue: './webpackEntry/sunbursByValueEntry.js'
    },
    output: {
        publicPath: "/js/",
        filename: '[name].js',
        library: ["T",'[name]'],
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                       'style-loader',
                       'css-loader'
                     ]
            }
        ]
    }
};