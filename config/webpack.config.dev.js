/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path")
const webpack = require("webpack")
const baseConfig = require("./webpack.config.base")
const { PROJECT_ROOT, VERSION } = require("./helpers")
const ENVIRONMENT_VARIABLES = require("./.env.json")

const OUT_DIR = path.resolve(PROJECT_ROOT, "dist")

const ENV = {
    NODE_ENV: "development",
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
    mode: "development",
    devtool: "source-map",
    /** @type {import("webpack").Configuration} */
    devServer: {
        static: [
            {
                directory: OUT_DIR,
            },
            {
                directory: OUT_DIR,
                publicPath: "/public",
            },
        ],
        historyApiFallback: true,
        port: 3000,
        allowedHosts: "all",
        hot: true,
    },
    plugins: [
        ...baseConfig.plugins,
        new webpack.DefinePlugin({
            ENV: JSON.stringify(ENV),
        }),
    ],
    module: {
        rules: [
            ...baseConfig.module.rules,
            {
                enforce: "pre",
                test: /\.tsx?$/,
                use: "source-map-loader",
            },
        ],
    },
}

module.exports = webpackConfig
