import { createSlice } from "@reduxjs/toolkit"

import { FeatureKeys } from "@app/util"
import { reducers, extraReducers } from "./reducers"

// =============================================================================

export interface MainState {
}

// =============================================================================

export const INITIAL_GAME_STATE: MainState = {
}

// =============================================================================

export const MainSlice = createSlice({
    name: FeatureKeys.Main,
    initialState: INITIAL_GAME_STATE,
    reducers,
    extraReducers,
})
