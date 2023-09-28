import type { RootState } from "@app/state"
import { FRAME_DATA } from "@app/data"
import { selectSlice } from "./select-slice"

const character1 = (s: RootState) => selectSlice(s).character1
const character2 = (s: RootState) => selectSlice(s).character2

const character1FrameData = (s: RootState) => FRAME_DATA[character1(s)]
const character2FrameData = (s: RootState) => FRAME_DATA[character2(s)]

const character1MoveData = (s: RootState, moveName: string) => character1FrameData(s).find((move) => move.name == moveName)
// const character2MoveData = (s: RootState, moveName: string) => character1FrameData(s).find((move) => move.name == moveName)

const activeRowNumber = (s: RootState) => selectSlice(s).activeRow
const okiRow = (s: RootState, row: SF6.OkiRowNumber) => selectSlice(s)[`oki${row}`]

const activeRow = (s: RootState) => okiRow(s, activeRowNumber(s))
const activeMove = (s: RootState) => character1MoveData(s, activeRow(s).name)

const okiRowPlus = (s: RootState, row: SF6.OkiRowNumber): SF6.IOkiRow => {
    const okiData = okiRow(s, row)
    if (!!!okiData?.name) {
        return okiData
    }
    const frameData = character1MoveData(s, okiData.name)
    return {
        ...okiData,
        frameData,
    }
}

// =============================================================================

export default {
    character1,
    character2,
    frameData: {
        character1: character1FrameData,
        character2: character2FrameData,
    },
    okiRow,
    activeRowNumber,
    activeRow,
    activeMove,
    okiRowPlus,
}
