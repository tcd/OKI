import { createTheme } from "@mui/material"
import { merge } from "@app/util"

import { themeOptions } from "./theme-options"
import { lightPalette, darkPalette } from "./palette"

export const AppTheme = createTheme(themeOptions)

export const AppThemeLight = createTheme(merge(themeOptions, { palette: lightPalette }))
export const AppThemeDark  = createTheme(merge(themeOptions, { palette: darkPalette }))
