import type { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit"

import type { MainState } from "./state"
import { INITIAL_GAME_STATE as INITIAL_STATE } from "./state"

// -----------------------------------------------------------------------------

export interface IFramePayload {
    frame: number
}

// -----------------------------------------------------------------------------

export type ISetCharacterPayload = {
    player: SF6.TPlayerNumber
    character: SF6.CharacterNameClean
}

export interface IFrameClickPayload extends IFramePayload {
    rowNumber: SF6.OkiRowNumber
}

export interface IExtra2ClickPayload extends IFramePayload {
    // side: "top" | "bottom"
}

export type ISetMovePayload = {
    player: SF6.TPlayerNumber
    rowNumber: SF6.OkiRowNumber
    move: string
}

export const reducers = {
    resetState: () => INITIAL_STATE,
    setCharacter: (state: MainState, { payload }: PayloadAction<ISetCharacterPayload>) => {
        state[`character${payload.player}`] = payload.character
    },
    setActiveRow: (state: MainState, { payload }: PayloadAction<SF6.OkiRowNumber>) => {
        state.activeRow = payload
    },
    handleExtra2Click: (state: MainState, { payload }: PayloadAction<IExtra2ClickPayload>) => {
        const activeRow = state.activeRow
        state[`oki${activeRow}`].startFrame = payload.frame
    },
    frameClick: (state: MainState, { payload }: PayloadAction<IFrameClickPayload>) => {
        state.activeRow = payload.rowNumber
        state[`oki${payload.rowNumber}`].startFrame = payload.frame
    },
    kDFrameClick: (state: MainState, { payload }: PayloadAction<IFrameClickPayload>) => {
        state.activeRow = payload.rowNumber
        state[`oki${payload.rowNumber}`].startFrame = payload.frame
    },
    clickMove: (state: MainState, { payload }: PayloadAction<string>) => {
        const activeRow = state.activeRow
        state[`oki${activeRow}`].name = payload
    },
    setMove: (state: MainState, { payload }: PayloadAction<ISetMovePayload>) => {
        state.activeRow = payload.rowNumber
        state[`oki${payload.rowNumber}`].name = payload.move
    },
    // =========================================================================
    // KD
    // =========================================================================
    setKdMove: (state: MainState, { payload }: PayloadAction<string>) => {
        state.kd.name = payload
    },
    setKdFrame: (state: MainState, { payload }: PayloadAction<number>) => {
        state.kd.startFrame = payload
    },
}

export const extraReducers = (builder: ActionReducerMapBuilder<MainState>) => {}
