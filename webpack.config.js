const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './index.web.js', // 指向您的 index.web.js 文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html', // 指向您的 HTML 模板文件
        }),
    ],
    // ...其他配置（如 loaders, devServer 配置等）...
};
