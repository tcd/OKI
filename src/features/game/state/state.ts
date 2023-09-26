import { createSlice } from "@reduxjs/toolkit"

import { FeatureKeys } from "@app/util"
import { reducers, extraReducers } from "./reducers"

// =============================================================================

export interface GameState {
}

// =============================================================================

export const INITIAL_GAME_STATE: GameState = {
}

// =============================================================================

export const GameSlice = createSlice({
    name: FeatureKeys.Game,
    initialState: INITIAL_GAME_STATE,
    reducers,
    extraReducers,
})
