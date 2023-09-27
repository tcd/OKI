import type { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit"

import type { MainState } from "./state"
import { INITIAL_GAME_STATE as INITIAL_STATE } from "./state"

export const reducers = {
    resetState: () => INITIAL_STATE,
    setPlayer1: (state: MainState, { payload }: PayloadAction<SF6.CharacterNameClean>) => {
        state.character1 = payload
    },
    setPlayer2: (state: MainState, { payload }: PayloadAction<SF6.CharacterNameClean>) => {
        state.character2 = payload
    },
    setActiveRow: (state: MainState, { payload }: PayloadAction<SF6.OkiRowNumber>) => {
        state.activeRow = payload
    },
    handleExtra2Click: (state: MainState, { payload }: PayloadAction<number>) => {
        // FIXME: implement
        // state.activeRow = payload
    },
}

export const extraReducers = (builder: ActionReducerMapBuilder<MainState>) => {}
