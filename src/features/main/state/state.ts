import { createSlice } from "@reduxjs/toolkit"

import { FeatureKeys } from "@app/util"
import { reducers, extraReducers } from "./reducers"

// =============================================================================

export interface MainState {
    character1: SF6.CharacterNameClean
    character2: SF6.CharacterNameClean
}

// =============================================================================

export const INITIAL_GAME_STATE: MainState = {
    character1: "ryu",
    character2: "ryu",
}

// =============================================================================

export const MainSlice = createSlice({
    name: FeatureKeys.Main,
    initialState: INITIAL_GAME_STATE,
    reducers,
    extraReducers,
})
