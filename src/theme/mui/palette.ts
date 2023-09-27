import type { PaletteOptions } from "@mui/material"

import { merge } from "@app/util"
import { AppColors } from "../variables"

export const basePalette: PaletteOptions = {
    // primary: {
    //     main: "#082136",
    // },
    // secondary: {
    //     main: "#51ebff",
    // },
    // info: {
    //     light: "#fff4c4",
    //     main:  "#f7d98f",
    //     dark:  "#e9b859",
    // },
    // background: {
    //     default: "#000",
    //     paper: "#000",
    // },
}

export const lightPalette = merge(basePalette, {
    mode: "light",
})

export const darkPalette = merge(basePalette, {
    mode: "dark",
})
