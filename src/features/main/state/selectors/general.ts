import type { RootState } from "@app/state"
// import { selectSlice } from "./select-slice"

const mainWon = (_s: RootState): boolean => {
    return false
}

const mainLost = (_s: RootState): boolean => {
    return false
}

const mainTied = (_s: RootState): boolean => {
    return false
}

// =============================================================================

export default {
    mainWon,
    mainLost,
    mainTied,
}
