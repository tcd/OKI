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

    public result: ICharacterFrameData
    public rawData: ICharacterTableRow

    constructor(character: CharacterNameClean) {
        super(character)
        this.result = {}
    }

    public async convert() {
        this.rawData = await this.jsonFilePathV1.readJSON<ICharacterTableRow>()

        this.result = {
            section: this.rawData["section"],
            name: this.rawData["Move Name"],
            startup: this.rawData["Frame.Start-up"],
            // "Recovery.Hit"?: any
            // "Recovery.Block"?: any
            cancel: this.rawData["Cancel"],
            // scaling?: any
            driveGain_hit: this.rawData["Drive Gauge Increase.Hit"],
            driveDrain_block: this.rawData["Drive Gauge Decrease.Block"],
            driveDrain_punishCounter: this.rawData["Drive Gauge Decrease.Punish Counter"],
            superGain: this.rawData["Super Art Gauge Increase"],
            notes: this.rawData.Miscellaneous,
        }

        if (this.rawData.Properties != null) {
            this.result.properties = this.rawData.Properties.split(" ")
        }

        this.setActiveFrames()
        this.setRecoveryFrames()
        this.setDamage()

        this.jsonFilePathV2.writeJSON(this.result)
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
}
