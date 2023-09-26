class Config {

    public version: string
    public env: Configuration.NodeEnv
    public appName: string

    constructor() {
        this.setNodeEnv()
        if (this.ENV != null) {
            this.version = this.ENV?.APP_VERSION ?? "??"
        }
        this.appName = this.ENV?.appName
    }

    public toJSON() {
        return {
            version: this.version,
            env: this.env,
            appName: this.appName,
        }
    }

    // =========================================================================
    // Private
    // =========================================================================

    // -------------------------------------------------------------------------
    // Setters
    // -------------------------------------------------------------------------

    private setNodeEnv() {
        if (!!this.process?.env?.NODE_ENV) {
            this.env = this.process.env.NODE_ENV as Configuration.NodeEnv
            console.log(`running in ${this.env}`)
        } else if (this.ENV != null && !!this.ENV?.NODE_ENV) {
            this.env = this.ENV.NODE_ENV
            console.log(`running in ${this.env}`)
        } else {
            throw new Error("unable to determine env")
        }
    }

    // -------------------------------------------------------------------------
    // Other
    // -------------------------------------------------------------------------

    private get ENV(): Configuration.IEnv | null {
        try {
            if (ENV) {
                return ENV
            }
        } catch (error) {
            // console.warn("ENV not provided")
            return null
        }
    }

    private get process(): NodeJS.Process | null {
        try {
            if (process) {
                return process
            }
        } catch (error) {
            // console.warn("process not provided")
            return null
        }
    }
}

const _CONFIG = new Config()

export const CONFIG = _CONFIG
