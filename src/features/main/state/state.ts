import { createSlice } from "@reduxjs/toolkit"

import { FeatureKeys } from "@app/util"
import { reducers, extraReducers } from "./reducers"

// =============================================================================

export interface MainState {
    character1: SF6.CharacterNameClean
    character2: SF6.CharacterNameClean
    activeRow: SF6.OkiRowNumber
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
    oki1: {},
    oki2: {},
    oki3: {},
    oki4: {},
    oki5: {},
    oki6: {},
    oki7: {},
}

// =============================================================================

export const MainSlice = createSlice({
    name: FeatureKeys.Main,
    initialState: INITIAL_GAME_STATE,
    reducers,
    extraReducers,
})
