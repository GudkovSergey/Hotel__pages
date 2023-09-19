const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.[contenthash].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
            },
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.svg$/,
                type: 'asset/resource',
                generator: {
                    filename: path.join('icons', '[name].[contenthash][ext]'),
                },
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: 'asset/resource'
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'colorsType.pug'),
            filename: 'colorsType.html',
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'formElements.pug'),
            filename: 'formElements.html',
        }),


        new FileManagerPlugin({
            events: {
                onStart: {
                    delete: ['dist'],
                },
                onEnd: {
                    copy: [
                        {
                            source: path.join('src', 'static'),
                            destination: 'dist',
                        },
                    ],
                },
            },


        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),

    ],
    devServer: {
        watchFiles: path.join(__dirname, 'src'),
        port: 9000,
    },

};