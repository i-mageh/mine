/* eslint-disable */
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path');
var appPath=path.resolve(__dirname, './src/Main.js');
var  buildPath= path.resolve(__dirname, './build');
module.exports = {
    devtool: "eval-source-map",//调试模式，生成环境要去掉
    entry: appPath,//整个页面的入口文件
    output: {
        path: buildPath,//打包输出的地址
        filename: "bundle.js",//输出的文件名称
    },
    mode:'development',//表示是生成环境
    module: {
        rules: [
            // {
            //     //将ES6的文件使用babel处理
            //     test: path.join(__dirname, './src'),
            //     //test: /\.js$/,
            //     loader: 'babel-loader',
            //     query: {
            //         presets: ['es2015']
            //     }
            // },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },

            {
                //url-loader的主要功能是：将源文件转换成DataUrl(声明文件mimetype的base64编码)
                // 8192，就交给file-loader处理了
                //file-loader的主要功能是：把源文件迁移到指定的目录（可以简单理解为从源文件目录迁移到build目录
                test: /\.(jpg|png|gif)$/,
                loader: 'url-loader?limit=8192&name=asset/[hash:8].[name].[ext]'
            }

        ]
    },

    plugins: [
         new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            chunksSortMode: 'none'
        }),
        new webpack.DefinePlugin({
            BLOCK: JSON.stringify(require('./src/asset/block.json')),
            PRODUCTION: JSON.stringify(true),
            VERSION: JSON.stringify("5fa3b9"),
            BROWSER_SUPPORTS_HTML5: true,
            TWO: "1+1",
            "typeof window": JSON.stringify("object")
        })
    ],
    //以下是服务环境配置
    devServer: {
        port: 8082,
        host: 'localhost',
        open: true,
        historyApiFallback: true,
        contentBase: path.resolve(__dirname),
        publicPath: '/build/',
        proxy: {
        },
        openPage:"build/index.html"
    }
}
