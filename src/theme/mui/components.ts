import {
    Components,
    LinkProps,
} from "@mui/material"

import { ITheme } from "@app/theme/helpers/ITheme"
import { baseStyleOverrides } from "./base-style-overrides"
import { LinkBehavior } from "./LinkBehavior"

export const componentOverrides: Components<ITheme> = {
    MuiCssBaseline: {
        styleOverrides: (theme) => baseStyleOverrides(theme),
    },
    // -------------------------------------------------------------------------
    // Misc.
    // -------------------------------------------------------------------------
    MuiPaper: {
        defaultProps: {
            elevation: 3,
        },
    },
    MuiStack: {
        defaultProps: {
            spacing: 3,
        },
    },
    // // -------------------------------------------------------------------------
    // // Lists
    // // -------------------------------------------------------------------------
    // MuiList: {
    //     styleOverrides: {
    //         root: {
    //             paddingTop: 0,
    //             paddingBottom: 0,
    //         },
    //     },
    // },
    // -------------------------------------------------------------------------
    // Links
    // -------------------------------------------------------------------------
    MuiLink: {
        defaultProps: {
            component: LinkBehavior,
        } as LinkProps,
        styleOverrides: {
            root: ({ theme }) => ({
                textDecoration: "none",
                color: theme.palette.mode === "dark" ? theme.palette.primary.light : theme.palette.primary.main,
                "&:hover, &:focus, &:active, &.Mui-focusVisible": {
                    textDecoration: "underline",
                    // outline: "none",
                },
            }),
        },
    },
    // -------------------------------------------------------------------------
    // Buttons
    // -------------------------------------------------------------------------
    MuiButtonBase: {
        defaultProps: {
            LinkComponent: LinkBehavior,
        },
    },
    MuiButton: {
        defaultProps: {
            variant: "contained",
        },
    },
    // FIXME: this does nothing
    MuiListItemButton: {
        defaultProps: {
            LinkComponent: LinkBehavior,
        },
    },
    // -------------------------------------------------------------------------
    // Inputs
    // -------------------------------------------------------------------------
    MuiInputBase: {
        styleOverrides: {
            root: {
                backgroundColor: "white",
            },
        },
    },
    MuiTextField: {
        defaultProps: {
            // variant: "outlined",
            size: "small",
        },
        // styleOverrides: {
        //     root: ({ theme: _theme }) => ({
        //         // background: theme.palette.mode === "dark" ? "black" : "white",
        //         // backgroundColor: theme.palette.mode === "dark" ? "black" : "white",
        //     }),
        // },
    },
    // MuiFormGroup: {
    //     styleOverrides: {
    //         root: {
    //             backgroundColor: "transparent",
    //         },
    //     },
    // },
    MuiFormControl: {
        styleOverrides: {
            root: {
                backgroundColor: "transparent",
            },
        },
    },
    MuiFormHelperText: {
        defaultProps: {
            // @ts-ignore: next-line
            component: "div",
        },
        styleOverrides: {
            root: ({ theme }) => ({
                // marginRight: "0px",
                margin: "0px",
                paddingTop: "4px",
                paddingLeft: "14px",
                // backgroundColor: theme.palette.mode === "dark" ? "#121212" : "white",
                backgroundColor: "transparent",
            }),
        },
    },
    // -------------------------------------------------------------------------
    // Typography
    // -------------------------------------------------------------------------
    MuiTypography: {
        defaultProps: {
            variantMapping: {
                h1: "h1",
                h2: "h2",
                h3: "h3",
                h4: "h4",
                h5: "h5",
                h6: "h6",
                subtitle1: "span",
                subtitle2: "span",
                body1: "span",
                body2: "span",
                inherit: "span",
                caption: "span",
                overline: "span",
            },
        },
    },
}
