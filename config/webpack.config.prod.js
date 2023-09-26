/* eslint-disable @typescript-eslint/no-var-requires */

// const path = require("path")
const webpack = require("webpack")
// const CopyPlugin = require("copy-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")

const baseConfig = require("./webpack.config.base")
const { VERSION } = require("./helpers")
const ENVIRONMENT_VARIABLES = require("./.env.prod.json")

const ENV = {
    NODE_ENV: "testing",
    APP_VERSION: VERSION,
    ...ENVIRONMENT_VARIABLES,
}

/**
 * See [Webpack Configuration docs](https://webpack.js.org/configuration/) for more information.
 *
 * @type {import("webpack").Configuration}
 */
const webpackConfig = {
    ...baseConfig,
    mode: "production",
    devtool: false,
    // output: {
    //     ...baseConfig.output,
    // },
    plugins: [
        ...baseConfig.plugins,
        new webpack.DefinePlugin({
            ENV: JSON.stringify(ENV),
        }),
        new CleanWebpackPlugin(),
        // new BundleAnalyzerPlugin(),
        // new webpack.ProgressPlugin({
        //     // activeModules: false,
        //     // entries: true,
        //     // handler(percentage, message, ...args) {
        //     //     // custom logic
        //     // },
        //     // modules: true,
        //     // modulesCount: 5000,
        //     // profile: false,
        //     // dependencies: true,
        //     // dependenciesCount: 10000,
        //     percentBy: "entries",
        // }),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    enforce: true,
                    chunks: "all",
                },
                data: {
                    test: /[\\/]data[\\/]/,
                    name: "data",
                    enforce: true,
                    chunks: "all",
                },
            },
        },
    },
}

module.exports = webpackConfig
