/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")
// const Dotenv = require("dotenv-webpack")

const { PROJECT_ROOT } = require("./helpers")
const OUT_DIR = path.resolve(PROJECT_ROOT, "dist")
const APP_DIR = path.resolve(PROJECT_ROOT, "src")

/**
 * See [Webpack Configuration docs](https://webpack.js.org/configuration/) for more information.
 *
 * @type {import("webpack").Configuration}
 */
const webpackConfig = {
    entry: path.resolve(PROJECT_ROOT, "src", "index.tsx"),
    // output: {
    //     path: OUT_DIR,
    //     publicPath: "/",
    //     filename: "bundle.js",
    // },
    output: {
        path: OUT_DIR,
        publicPath: "/",
        // filename: isDev ? "[name].dist.js" : "[name].[chunkhash:8].dist.js",
        filename: "[name].js",
        assetModuleFilename: "assets/[hash][ext][query]",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(APP_DIR, "index.html"),
            hash: true,
            inject: true,
        }),
        // new Dotenv(),
        new webpack.ProvidePlugin({
            process: "process/browser",
        }),
    ],
    resolve: {
        extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
        modules: [__dirname, "src", "node_modules"],
        plugins: [
            new TsconfigPathsPlugin.TsconfigPathsPlugin(),
        ],
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/i,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            // {
            //     test: /\.s?css$/,
            //     use: [
            //         "style-loader",
            //         "css-loader",
            //     ],
            // },
        ],
    },
}

module.exports = webpackConfig
