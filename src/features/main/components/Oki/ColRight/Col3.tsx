import { Box } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"
import { OkiConstants } from "@app/util"

export const Col3 = (): JSX.Element => {
    return (
        <Box sx={sx}>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            {/* <span>{OkiConstants.DOT}</span> */}
            {/* <span>{OkiConstants.DOT}</span> */}
            {/* <span>{OkiConstants.DOT}</span> */}
            <span>{OkiConstants.DOT}</span>
            <span>{OkiConstants.DOT}</span>
            <span>{OkiConstants.DOT}</span>
            <span>{OkiConstants.DOT}</span>
            <span>{OkiConstants.DOT}</span>
            <span>{OkiConstants.DOT}</span>
            <span>{OkiConstants.DOT}</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
        </Box>
    )
}

// =============================================================================

const sx: SxProps = {
    display: "flex",
    flexFlow: "column nowrap",
    ml: 1,
    mr: 2,
}
