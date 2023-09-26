import type { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit"

import type { MainState } from "./state"
import { INITIAL_GAME_STATE as INITIAL_STATE } from "./state"

export const reducers = {
    resetState: () => INITIAL_STATE,
    // // -------------------------------------------------------------------------
    // // Spinning
    // // -------------------------------------------------------------------------
    // toggleWheelLock: (state: MainState, { payload }: PayloadAction<number>) => {
    //     if (state.player1.locked.includes(payload)) {
    //         state.player1.locked = state.player1.locked.filter(x => x != payload)
    //     } else {
    //         state.player1.locked = [...state.player1.locked, payload]
    //     }
    // },

}

export const extraReducers = (builder: ActionReducerMapBuilder<MainState>) => {}
