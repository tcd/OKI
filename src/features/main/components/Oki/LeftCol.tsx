import { Box } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"

export const LeftCol = (): JSX.Element => {
    return (
        <Box sx={sx}>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>KDBR</span>
            <span>KDR </span>
            <span>KD  </span>
            <span>OKI1</span>
            <span>OKI2</span>
            <span>OKI3</span>
            <span>OKI4</span>
            <span>OKI5</span>
            <span>OKI6</span>
            <span>OKI7</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
        </Box>
    )
}

// =============================================================================

const sx: SxProps = {
    display: "flex",
    flexFlow: "column nowrap",
    mr: 1,
}
