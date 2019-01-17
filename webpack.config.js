var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry:'./src/main.js', // 项目入口文件
    output:{
        path:path.resolve(__dirname,'./dist'),// 项目打包目录
        publicPath:'/dist/', // 通过devServer访问
        filename:'build.js' // 打包后文件名
    }
} ;