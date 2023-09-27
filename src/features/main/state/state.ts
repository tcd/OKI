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
    oki1: null,
    oki2: null,
    oki3: null,
    oki4: null,
    oki5: null,
    oki6: null,
    oki7: null,
}

// =============================================================================

export const MainSlice = createSlice({
    name: FeatureKeys.Main,
    initialState: INITIAL_GAME_STATE,
    reducers,
    extraReducers,
})
