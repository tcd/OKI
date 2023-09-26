import type { ThemeOptions } from "@mui/material"

import { componentOverrides } from "./components"
import { breakpointsOptions } from "./breakpoints"
import { basePalette } from "./palette"

// =============================================================================
// Theme
// =============================================================================

export const themeOptions: ThemeOptions = {
    breakpoints: breakpointsOptions,
    components: componentOverrides,
    palette: basePalette,
}
