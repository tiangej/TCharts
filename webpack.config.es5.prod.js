const path = require("path");
const merge = require('webpack-merge');
const base = require('./webpack.config.base.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
//const outPath = "dist/es5/prod" ;
const outPath = "dist" ;

module.exports = merge(base, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(path.join(__dirname, outPath))
    ],
    output: {
        path: path.join(__dirname, outPath)
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    "useBuiltIns": "usage",
                                    "targets": "> 0.25%, not dead"
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    }

});