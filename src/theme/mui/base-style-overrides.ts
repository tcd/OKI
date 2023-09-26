import type { CSSObject, SxProps } from "@mui/material"

import type {
    ITheme as Theme,
} from "../helpers"

/**
 * - `<ul></ul>`
 * - `<ol></ol>`
 * - `<li></li>`
 */
const lists: SxProps = {
    display: "unset",
    // listStyle: "unset",
    listStylePosition: "unset",
    paddingLeft: "unset",
    marginLeft: "unset",
    marginBottom: "unset",
    marginBlockStart: "unset",
    marginBlockEnd: "unset",
    listStyle: "none",
    // listStylePosition: "inside",
    // paddingLeft: "0px",
    // marginLeft: "0px",
    // marginBottom: "default",
    // marginBlockStart: "0px",
    // marginBlockEnd: "0px",
}

/**
 * - `<a></a>`
 */
const anchors = (_theme: Theme): SxProps => {
    // const color =  theme.palette.mode === "dark" ? theme.palette.primary.main : theme.palette.primary.main
    // const color =  theme.palette.mode === "dark" ? theme.palette.primary.light : theme.palette.primary.dark
    // const color =  theme.palette.primary.main
    // const color =  theme.palette.mode === "dark" ? "red" : "lime"
    const color  = "#0000ee"
    const color2 = "#4c4ce9"
    return {
        // color,
        // textDecoration: "none",
        // "&:hover, &:active, &:focused, &:visited": {
        //     color,
        //     cursor: "pointer",
        //     textDecoration: "underline",
        // },
        "&:hover": {
            color: color2,
            cursor: "pointer",
            textDecoration: "underline",
        },
        "&:active": {
            color: color2,
            cursor: "pointer",
            textDecoration: "underline",
        },
        "&:focused": {
            color: color2,
            cursor: "pointer",
            textDecoration: "underline",
        },
        "&:visited": {
            color: color,
        },
        "&:visited:hover": {
            color: color2,
        },
    }
}

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

    backgroundColor: "#200205",

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

const body = (theme: Theme): CSSObject => ({
    ..._htmlAndBody,
    // "& ol, & ul, & li": lists,
    "& a.link, & .snv__link": anchors(theme),
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
