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

class _Converter {

    public result: ICharacterFrameData
    public rawData: ICharacterTableRow

    constructor(rawData: ICharacterTableRow) {
        this.rawData = rawData
        this.result = {}
    }

    public convert() {

        this.result = {
            section: this.rawData["section"],
            name: this.rawData["Move Name"],
            startup: this.rawData["Frame.Start-up"],
            // "Recovery.Hit"?: any
            // "Recovery.Block"?: any
            // scaling?: any
            driveGain_hit: this.rawData["Drive Gauge Increase.Hit"],
            driveDrain_block: this.rawData["Drive Gauge Decrease.Block"],
            driveDrain_punishCounter: this.rawData["Drive Gauge Decrease.Punish Counter"],
            superGain: this.rawData["Super Art Gauge Increase"],
            // notes: this.rawData.Miscellaneous,
        }

        this.setCancel()
        this.setActiveFrames()
        this.setRecoveryFrames()
        this.setDamage()
        // this.setProperties()

        return this.result
    }

    private setCancel() {
        if (this.rawData.Cancel == null || this.rawData.Cancel == "") {
            this.result.cancel = []
            return
        }

        this.result.cancel = this.rawData.Cancel
    }

    private setActiveFrames() {
        this.result.active = this.rawData["Frame.Active"]
    }

    private setRecoveryFrames() {
        this.result.recovery = this.rawData["Frame.Recovery"]
    }

    private setDamage() {
        this.result.damage = this.rawData["Damage"]
    }

    private setProperties() {
        if (this.rawData.Properties == null || this.rawData.Properties == "") {
            this.result.properties = []
            return
        }

        this.result.properties = this.rawData.Properties.split(" ")
    }
}
