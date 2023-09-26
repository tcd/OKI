import type { RootState } from "@app/state"
import type { MainState } from "../state"

export const selectSlice = (rootState: RootState): MainState => rootState?.Main
