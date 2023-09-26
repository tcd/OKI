import type { RootState } from "@app/state"
// import { selectSlice } from "./select-slice"

const gameWon = (_s: RootState): boolean => {
    return false
}

const gameLost = (_s: RootState): boolean => {
    return false
}

const gameTied = (_s: RootState): boolean => {
    return false
}

// =============================================================================

export default {
    gameWon,
    gameLost,
    gameTied,
}
