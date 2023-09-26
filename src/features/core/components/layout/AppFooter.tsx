import { memo } from "react"
import capitalize from "lodash/capitalize"
import {
    AppBar,
    Box,
    Toolbar,
} from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"
import { CONFIG } from "@app/util"

const _AppFooter = (): JSX.Element => {
    return (
        <Box sx={{ justifySelf: "flex-end" }}>
            <AppBar position="static">
                <Toolbar sx={toolbarSx}>
                    {CONFIG.appName}
                    <VR />
                    <div>{capitalize(CONFIG?.env)}</div>
                    <VR />
                    <div>v{CONFIG?.version}</div>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export const AppFooter = memo(_AppFooter)

// =============================================================================

/** Vertical Rule */
const VR = (): JSX.Element => <Box sx={{ mx: 1 }}>&#65372;</Box>

// =============================================================================

const toolbarSx: SxProps = {
    minHeight: "40px",
    backgroundColor: "#f8f9fa",
    color: "black",
}
