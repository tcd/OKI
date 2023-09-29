import range from "lodash/range"
import { OkiConstants } from "@app/util"
import { type ISxProps as SxProps } from "@app/theme"
import { type RootState } from "@app/state"
import { type MainState } from "../state"
import { selectSlice } from "./select-slice"
import general from "./general"

export interface OkiRowDataBuilderArgs {
    rowNumber: SF6.OkiRowNumber
    rawFrame: number
    rowData: SF6.IOkiRow
    frameData: SF6.ICharacterFrameData
}

export interface IOkiFrameData {
    sx: SxProps
    content: React.ReactNode
}

export class OkiRowDataBuilder {

    private args: OkiRowDataBuilderArgs
    private result: IOkiFrameData

    constructor(args: OkiRowDataBuilderArgs) {
        this.args = args
        this.result = {
            sx: {
                "&:hover": {
                    cursor: "pointer",
                    backgroundColor: "#999900",
                },
                color: undefined,
                backgroundColor: undefined,
            },
            content: OkiConstants.DOT,
        }
    }

    public build(): IOkiFrameData {
        if (this.rawFrame < this.startFrame) {
            return this.result
        }
        if (!!!this.frameData) {
            return this.result
        }

        const startup = this.rowData.frameData.startup
        const activeLimit = (startup + this.rowData.frameData.active)
        const recoveryLimit = (activeLimit + this.rowData.frameData.recovery)
        const plusRange = range(activeLimit, this.rowData.frameData.hitAdvantage)

        if (this.relFrame <= startup) {
            this.result.content = "s"
            // @ts-ignore: next-line
            this.result.sx.color = "#AAA"
            // @ts-ignore: next-line
            this.result.sx.backgroundColor = "#002222"
        }
        if (this.relFrame >= startup && this.relFrame < activeLimit) {
            this.result.content = "A"
            // @ts-ignore: next-line
            this.result.sx.color = "#fcc"
            // @ts-ignore: next-line
            this.result.sx.backgroundColor = "#002222"
        }
        if (this.relFrame >= activeLimit && this.relFrame <= recoveryLimit) {
            this.result.content = "r"
            // @ts-ignore: next-line
            this.result.sx.color = "#AAA"
            // @ts-ignore: next-line
            this.result.sx.backgroundColor = "#002222"
        }

        return this.result
    }

    private get rowData(): SF6.IOkiRow { return this.args.rowData }
    private get rawFrame(): number { return this.args.rawFrame }
    private get frameData(): SF6.ICharacterFrameData { return this.args?.rowData?.frameData }

    private get relFrame() { return this.rawFrame - this.startFrame }
    private get startFrame() { return !!this.rowData?.startFrame ? this.rowData?.startFrame : 0}
}
