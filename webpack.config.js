const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HandlebarsPlugin = require('handlebars-webpack-plugin') ;
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        clean: true,
    },
    devServer: {
        static: path.join(__dirname, 'dist'),
        hot:true,
        port: 5000,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                ],
            },
            {
                test: /\.(png|jpg|jpeg|svg)$/i,
                type: "asset/resource", 
                generator: {
                    filename: "assets/images/[name][ext]",
                },
              },
              {
                test: /\.(ttf|woff|woff2|eot)$/,
                type: "asset/resource",
                generator: {
                  filename: "assets/fonts/[name][ext]",
                },
              },
            {
                test: /\.hbs$/i,
                loader: "handlebars-loader",
            },
        ]
    },
    plugins: [
       new CopyWebpackPlugin({
        patterns: [
            {
                context: "./src/",
                from: "./assets/images/**/*",
                to:"./",
                force: true
            },
            // {
            //     context: "./src/",
            //     from: "./assets/fonts/**/*",
            //     to:"./",
            //     force: true
            // }
        ]
       }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HandlebarsPlugin({
            entry: path.join(process.cwd(), 'src', '*.hbs'),
            output: path.join(process.cwd(), 'dist', '[name].html'),
            data: path.join(process.cwd(), "src/data.json"),
            partials: [
                path.join(process.cwd(), 'src', 'partials' ,'*.hbs'),
                path.join(process.cwd(), 'src', 'partials', "*" ,'*.hbs'),
            ],
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 5000,
            server: { baseDir: ['dist'] },
          }),
          new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
          }),
    ],

}