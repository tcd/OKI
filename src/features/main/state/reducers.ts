import type { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit"

import type { MainState } from "./state"
import { INITIAL_GAME_STATE as INITIAL_STATE } from "./state"

export type Extra2ClickPayload = {
    frame: number
    // side: "top" | "bottom"
}

export type FrameClickPayload = {
    number: SF6.OkiRowNumber
    frame: number
}

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
    handleExtra2Click: (state: MainState, { payload }: PayloadAction<Extra2ClickPayload>) => {
        const activeRow = state.activeRow
        state[`oki${activeRow}`].startFrame = payload.frame
    },
    frameClick: (state: MainState, { payload }: PayloadAction<FrameClickPayload>) => {
        // FIXME: implement
    },
}

export const extraReducers = (builder: ActionReducerMapBuilder<MainState>) => {}
