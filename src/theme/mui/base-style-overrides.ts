import type { CSSObject } from "@mui/material"

import type {
    ITheme as Theme,
} from "../helpers"

// =============================================================================

const _htmlAndBody: CSSObject = {
    // width: "100%",
    // height: "100%",
    // width:  "100vw",
    height: "100vh",

    margin:  "0px !important",
    padding: "0px !important",

    // overflowY: "hidden",
    // overflowX: "hidden",
    // overflow: "hidden",

    backgroundColor: "#000000",

    // "& *": {
    //     boxSizing: "border-box",
    // },

    // "& *::before, & *::after": {
    //     boxSizing: "border-box",
    // },
}

const html: CSSObject = {
    ..._htmlAndBody,
}

const body = (_theme: Theme): CSSObject => ({
    ..._htmlAndBody,
})

// =============================================================================

const root: CSSObject = {
    // width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "stretch",
    // margin: "0px !important",
    // padding: "0px !important",
    // overflow: "auto !important",
    // overflowY: "scroll",
    // overflowX: "hidden",
    // [ThemeBreakpoints.up("sm")]: {
    //     // scrollSnapType: "y mandatory",
    // },
}

export const baseStyleOverrides = (theme: Theme): CSSObject => ({
    html: html,
    "body": body(theme),
    "#root": root,
})
