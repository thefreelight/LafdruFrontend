const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // 或 'production'
    entry: './index.web.js', // 项目的入口文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
                        plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-object-rest-spread']
                    },
                },
            },
            // 其他 loader 配置（如样式、图片处理等）
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            'react-native$': 'react-native-web',
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html', // 指向您的 HTML 模板文件
        }),
    ],
    devServer: {
        historyApiFallback: true,
    },
};
