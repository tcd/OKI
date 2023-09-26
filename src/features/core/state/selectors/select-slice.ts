import type { RootState } from "@app/state"
import type { CoreState } from "../state"

export const _selectSlice = (rootState: RootState): CoreState => rootState?.Core
