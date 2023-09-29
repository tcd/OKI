import type { RootState } from "@app/state"
import { _selectSlice } from "./select-slice"

const _modals = (s: RootState) => _selectSlice(s).openModals
const help = (s: RootState) => _modals(s).help

// =============================================================================

export default {
    help,
}
