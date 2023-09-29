import { OkiConstants } from "@app/util"
import { type ISxProps as SxProps } from "@app/theme"
import { type RootState } from "@app/state"
import { type MainState } from "../state"
import { selectSlice } from "./select-slice"
import general from "./general"

export interface IOkiRowProps {
    frame: {
        sx: SxProps
        content: React.ReactNode
    }
    rightCol: {
        plus: number
    }
}

export class OkiRowDataBuilder {

    public props: IOkiRowProps

    public rowNumber: SF6.OkiRowNumber

    public rootState: RootState
    public slice: MainState

    constructor(rootState: RootState, rowNumber: SF6.OkiRowNumber) {
        this.rowNumber = rowNumber
        this.rootState = rootState
        this.slice = selectSlice(rootState)
        this.props = {
            frame: {
                sx: {},
                content: OkiConstants.DOT,
            },
            rightCol: {
                plus: 0,
            },
        }
    }

    public build(): IOkiRowProps {
        if (!!!this?.row?.frameData) {
            return this.props
        }

        const startFrame = !!this.row?.startFrame ? this.row?.startFrame : 0

        return this.props
    }

    private get row(): SF6.IOkiRow { return general.okiRowPlus(this.rootState, this.rowNumber) }
    private get rowInt(): number { return parseInt(this.rowNumber) }
}
