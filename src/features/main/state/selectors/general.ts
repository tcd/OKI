import type { RootState } from "@app/state"
import { selectSlice } from "./select-slice"

const character1 = (s: RootState) => selectSlice(s).character1
const character2 = (s: RootState) => selectSlice(s).character2

// =============================================================================

export default {
    character1,
    character2,
}
