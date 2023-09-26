/* eslint-disable @typescript-eslint/ban-types */

export declare global {
    /**
     * Provided using `webpack.DefinePlugin`
     */
    declare const ENV: Configuration.IEnv

    export declare namespace Configuration {

        export type NodeEnv =
            | "test"
            | "development"
            | "production"


        /**
         * Injected by Webpack
         */
        export interface IEnv {
            NODE_ENV: NodeEnv
            APP_VERSION: string
            appName: string
        }
    }
}
