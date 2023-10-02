import { createSlice } from "@reduxjs/toolkit"

import { FeatureKeys } from "@app/util"
import { reducers, extraReducers } from "./reducers"

// =============================================================================

export interface MainState {
    character1: SF6.CharacterNameClean
    character2: SF6.CharacterNameClean
    activeRow: SF6.OkiRowNumber
    kd:   SF6.IOkiRow
    oki1: SF6.IOkiRow
    oki2: SF6.IOkiRow
    oki3: SF6.IOkiRow
    oki4: SF6.IOkiRow
    oki5: SF6.IOkiRow
    oki6: SF6.IOkiRow
    oki7: SF6.IOkiRow
}

// =============================================================================

export const INITIAL_GAME_STATE: MainState = {
    character1: "ryu",
    character2: "ryu",
    activeRow: "1",
    kd:   { startFrame: 1 },
    oki1: { startFrame: 1 },
    oki2: { startFrame: 1 },
    oki3: { startFrame: 1 },
    oki4: { startFrame: 1 },
    oki5: { startFrame: 1 },
    oki6: { startFrame: 1 },
    oki7: { startFrame: 1 },
}

// =============================================================================

export const MainSlice = createSlice({
    name: FeatureKeys.Main,
    initialState: INITIAL_GAME_STATE,
    reducers,
    extraReducers,
})
