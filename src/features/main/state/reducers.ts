import type { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit"

import type { MainState } from "./state"
import { INITIAL_GAME_STATE as INITIAL_STATE } from "./state"

export type SetCharacterPayload = {
    player: SF6.TPlayerNumber
    character: SF6.CharacterNameClean
}

export type FrameClickPayload = {
    rowNumber: SF6.OkiRowNumber
    frame: number
}

export type Extra2ClickPayload = {
    frame: number
    // side: "top" | "bottom"
}

export type SetMovePayload = {
    player: SF6.TPlayerNumber
    rowNumber: SF6.OkiRowNumber
    move: string
}

export const reducers = {
    resetState: () => INITIAL_STATE,
    setCharacter: (state: MainState, { payload }: PayloadAction<SetCharacterPayload>) => {
        state[`character${payload.player}`] = payload.character
    },
    setActiveRow: (state: MainState, { payload }: PayloadAction<SF6.OkiRowNumber>) => {
        state.activeRow = payload
    },
    handleExtra2Click: (state: MainState, { payload }: PayloadAction<Extra2ClickPayload>) => {
        const activeRow = state.activeRow
        state[`oki${activeRow}`].startFrame = payload.frame
    },
    frameClick: (state: MainState, { payload }: PayloadAction<FrameClickPayload>) => {
        state.activeRow = payload.rowNumber
        state[`oki${payload.rowNumber}`].startFrame = payload.frame
    },
    clickMove: (state: MainState, { payload }: PayloadAction<string>) => {
        const activeRow = state.activeRow
        state[`oki${activeRow}`].name = payload
    },
    setMove: (state: MainState, { payload }: PayloadAction<SetMovePayload>) => {
        state.activeRow = payload.rowNumber
        state[`oki${payload.rowNumber}`].name = payload.move
    },
}

export const extraReducers = (builder: ActionReducerMapBuilder<MainState>) => {}
