import type { RootState } from "@app/state"
import { _selectSlice } from "./select-slice"

const darkModeEnabled = (s: RootState): boolean => _selectSlice(s)?.darkModeEnabled

// =============================================================================

export default {
    darkModeEnabled,
}
