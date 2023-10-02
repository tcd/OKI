import type { RootState } from "@app/state"
import { selectSlice } from "./select-slice"
import general from "./general"

const rowData = (s: RootState) => selectSlice(s).kd

const rowDataPlus = (s: RootState): SF6.IOkiRow => {
    const okiData = rowData(s)
    if (!!!okiData?.name) {
        return okiData
    }
    const frameData = general.util.character1MoveData(s, okiData.name)
    return {
        ...okiData,
        frameData,
    }
}

const knockdownMoves = (s: RootState) => {
    const frameData = general.frameData.character1(s)
    const knockdowns = frameData.filter((move) => move?.hitAdvantage == "D")
    return knockdowns
}

const safeFrames = (s: RootState): number[] => {
    let result: number[] = []

    const move = rowDataPlus(s)
    if (!!!move?.frameData?.hitAdvantage) {
        return result
    }

    return result
}

// =============================================================================

export default {
    rowData,
    rowDataPlus,
    knockdownMoves,
}
