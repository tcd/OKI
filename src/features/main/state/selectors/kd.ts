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

// =============================================================================

export default {
    // rowData,
    rowDataPlus,
}
