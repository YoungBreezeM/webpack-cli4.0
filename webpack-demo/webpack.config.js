const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');//主页脚本自动添加插件
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    entry:{
        "app":'./src/index.js',
        // "print":'./src/print.js'
    },
    devtool: 'source-map',//可用于开发环境调试,找出源码的出错地方
    // devServer: {//配置一个服务自动刷新浏览器内容,应用于开发环境，不可用于生长产环境，其存在的意义在于便于开发
    //     contentBase: './dist',
    //     // hot:true
    // },
    plugins:[
         new CleanWebpackPlugin(),//自动清除html没引用脚步本
         new HtmlWebpackPlugin({
             title: 'Output Management'
         }),
        // new webpack.NamedModulesPlugin(),
        // new webpack.HotModuleReplacementPlugin()
   ],
    optimization: {//提取两个公共模块
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "commons",
                    chunks: "initial",
                    minChunks: 2
                }
            }
        }
    },
    output: {
        filename: '[name].bundel.js',
        path: path.resolve(__dirname, 'dist'),
        // publicPath: '/',
    },
    mode: "production",//压缩代码，删除为被引用的代码,4.39新版本默认自动压缩
    module: {
        rules: [
           {
           test: /\.css$/,
             use: [
               'style-loader',
               'css-loader'
             ]
           },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};
