import { Box } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"

export const Col2 = (): JSX.Element => {
    return (
        <Box sx={sx}>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            {/* <span>U HIT 7</span> */}
            {/* <span>U HIT 7</span> */}
            {/* <span>U HIT 56</span> */}
            <span>U HIT 1</span>
            <span>U HIT 1</span>
            <span>U HIT 1</span>
            <span>U HIT 1</span>
            <span>U HIT 1</span>
            <span>U HIT 1</span>
            <span>U HIT 1</span>
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
