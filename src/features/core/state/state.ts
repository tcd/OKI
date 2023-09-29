import { createSlice } from "@reduxjs/toolkit"

import { FeatureKeys } from "@app/util"
import { reducers } from "./reducers"

// =============================================================================

export interface CoreState {
    pageTitle: string
    darkModeEnabled: boolean
    openModals: {
        help: boolean
    }
}

// =============================================================================

export const INITIAL_CORE_STATE: CoreState = {
    pageTitle: "",
    darkModeEnabled: true,
    openModals: {
        help: false,
    },
}

// =============================================================================

export const CoreSlice = createSlice({
    name: FeatureKeys.Core,
    initialState: INITIAL_CORE_STATE,
    reducers: reducers,
})
