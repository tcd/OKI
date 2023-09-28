import type { RootState } from "@app/state"
import { FRAME_DATA } from "@app/data"
import { selectSlice } from "./select-slice"

const character1 = (s: RootState) => selectSlice(s).character1
const character2 = (s: RootState) => selectSlice(s).character2

const character1FrameData = (s: RootState) => FRAME_DATA[character1(s)]
const character2FrameData = (s: RootState) => FRAME_DATA[character2(s)]

const okiRow = (s: RootState, row: SF6.OkiRowNumber) => selectSlice(s)[`oki${row}`]

// =============================================================================

export default {
    character1,
    character2,
    frameData: {
        character1: character1FrameData,
        character2: character2FrameData,
    },
    okiRow,
}
