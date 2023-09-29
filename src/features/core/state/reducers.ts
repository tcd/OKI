import type { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit"

import type { CoreState } from "./state"
import { INITIAL_CORE_STATE as INITIAL_STATE } from "./state"

export const reducers = {
    resetState: () => INITIAL_STATE,
    // -------------------------------------------------------------------------
    // Page Title
    // -------------------------------------------------------------------------
    setPageTitle: (state: CoreState, { payload }: PayloadAction<string>) => {
        state.pageTitle = payload
    },
    clearPageTitle: (state: CoreState) => {
        state.pageTitle = null
    },
    // -------------------------------------------------------------------------
    // Preferences
    // -------------------------------------------------------------------------
    toggleDarkMode: (state: CoreState) => {
        state.darkModeEnabled = !!!state?.darkModeEnabled
    },
    // -------------------------------------------------------------------------
    // Modals
    // -------------------------------------------------------------------------
    openModal: (state: CoreState, { payload }: PayloadAction<string>) => {
        state.openModals[payload] = true
    },
    closeModal: (state: CoreState, { payload }: PayloadAction<string>) => {
        state.openModals[payload] = false
    },
}

export const extraReducers = (_builder: ActionReducerMapBuilder<CoreState>) => {}
