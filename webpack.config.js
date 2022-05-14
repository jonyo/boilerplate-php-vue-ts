const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: {
        index: './src/ts/index.ts'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    "css-loader"
                ]
            },
        ],
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.esm-bundler.js',
            '@css': path.resolve(__dirname, 'src/css/'),
            '@ts': path.resolve(__dirname, 'src/ts/'),
            '@components': path.resolve(__dirname, 'src/components/'),
        },
        extensions: ['.js', '.ts', '.vue', '.scss'],
    },
    output: {
        path: path.join(__dirname, 'webroot/dist'),
        sourceMapFilename: '[file].map',
        libraryTarget: 'window',
    },
    plugins: [
        new VueLoaderPlugin(),
        // Set up TS checker as seperate process (speed up building)
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                vue: true,
            }
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ],
    watchOptions: {
        poll: true,
        ignored: /node_modules/
    },
};
