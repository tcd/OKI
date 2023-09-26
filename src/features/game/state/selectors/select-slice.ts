import type { RootState } from "@app/state"
import type { GameState } from "../state"

export const selectSlice = (rootState: RootState): GameState => rootState?.Game
