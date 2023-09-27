import { Box } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"

export const Center = (): JSX.Element => {
    return (
        <Box sx={sx}>
            <span>0........1.........2.........3.........4.........5.........6.........7.........8.........9.........10........11........</span>
            <span>12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789</span>
            <span> ······1234567890·······································································································</span>
            <span> ······1234567890·······································································································</span>
            <span> ·······················································1234567890······················································</span>
            <span> ·······················································································································</span>
            <span> ·······················································································································</span>
            <span> ·······················································································································</span>
            <span> ·······················································································································</span>
            <span> ·······················································································································</span>
            <span> ·······················································································································</span>
            <span> ·······················································································································</span>
            <span>12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789</span>
            <span>0........1.........2.........3.........4.........5.........6.........7.........8.........9.........10........11........</span>
        </Box>
    )
}

// =============================================================================

const sx: SxProps = {
    display: "flex",
    flexFlow: "column nowrap",
}
