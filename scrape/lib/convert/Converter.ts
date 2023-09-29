import {
    Processor,
    tryParseInt,
    type CharacterNameClean,
    type ICharacterTableRow,
    type ICharacterFrameData,
} from "../util"

// FIXME: replace `U+ff08 "（"`
// FIXME: replace `U+ff05 "％"`
export class Converter extends Processor {

    public results: ICharacterFrameData[]

    constructor(character: CharacterNameClean) {
        super(character)
        this.results = []
    }

    public async convert() {
        const rawData = await this.jsonFilePathV1.readJSON<ICharacterTableRow[]>()

        for (const move of rawData) {
            const result = new _Converter(move).convert()
            this.results.push(result)
        }

        await this.jsonFilePathV2.writeJSON(this.results)
    }
}

// =============================================================================

class _Converter {

    public result: ICharacterFrameData
    public rawData: ICharacterTableRow

    private haveStartup: boolean
    private haveActive: boolean
    private haveRecovery: boolean

    constructor(rawData: ICharacterTableRow) {
        this.rawData = rawData
        this.result = {}
        this.haveStartup = false
        this.haveActive = false
        this.haveRecovery = true
    }

    public convert() {

        this.result = {
            section: this.rawData["section"],
            name: this.rawData["Move Name"],
            input: this.rawData["input"],
            startup: null,
            active: null,
            recovery: null,
            total: null,
            hitAdvantage: this.rawData["Recovery.Hit"],
            blockAdvantage: this.rawData["Recovery.Block"],
            cancel: null,
            damage: null,
            // scaling?: any
            driveGain_hit: this.rawData["Drive Gauge Increase.Hit"],
            driveDrain_block: this.rawData["Drive Gauge Decrease.Block"],
            driveDrain_punishCounter: this.rawData["Drive Gauge Decrease.Punish Counter"],
            superGain: this.rawData["Super Art Gauge Increase"],
            // notes: this.rawData.Miscellaneous,
            // properties: undefined,
        }

        this.setCancel()
        this.setDamage()
        // this.setProperties()

        this.setStartupFrames()
        this.setActiveFrames()
        this.setRecoveryFrames()
        this.setTotalFrames()

        return this.result
    }

    private setActiveFrames() {
        const raw = this.rawData["Frame.Active"]
        if (!!!raw) {
            this.result.active = raw
            return
        }
        const pattern = /\d+-\d+/
        if (!pattern.test(raw)) {
            this.result.active = raw
            return
        }

        const [
            start,
            end,
        ] = raw.split("-")

        const startInt = parseInt(start) - 1
        const endInt   = parseInt(end)

        this.result.startup = startInt
        this.result.active = (endInt - startInt)
        this.haveActive = true
    }

    private setRecoveryFrames() {
        this.result.recovery = this.rawData["Frame.Recovery"]
    }

    private setStartupFrames() {
        this.result.startup = this.rawData["Frame.Start-up"]
        this.haveStartup = !!this.result.startup
    }

    private setTotalFrames() {
        if (!this.haveStartup || !this.haveActive || !this.haveRecovery) {
            return
        }
        this.result.total = (this.result.startup + this.result.active + this.result.recovery)
    }

    private setDamage() {
        this.result.damage = this.rawData["Damage"]
    }

    private setCancel() {
        if (this.rawData.Cancel == null || this.rawData.Cancel == "") {
            this.result.cancel = []
            return
        }

        this.result.cancel = this.rawData.Cancel
    }

    private setProperties() {
        if (this.rawData.Properties == null || this.rawData.Properties == "") {
            this.result.properties = []
            return
        }

        this.result.properties = this.rawData.Properties.split(" ")
    }
}
