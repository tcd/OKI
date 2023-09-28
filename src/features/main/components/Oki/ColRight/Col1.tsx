import { Box } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"

export const Col1 = (): JSX.Element => {
    return (
        <Box sx={sx}>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            {/* <span>+6</span> */}
            {/* <span>+6</span> */}
            {/* <span>+55</span> */}
            <span>+0</span>
            <span>+0</span>
            <span>+0</span>
            <span>+0</span>
            <span>+0</span>
            <span>+0</span>
            <span>+0</span>
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
}
