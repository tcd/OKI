import { Box } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"

export const RightCol = (): JSX.Element => {
    return (
        <Box sx={sx}>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>+6   U HIT 7   · MOVE YZ M Bushin Sho</span>
            <span>+6   U HIT 7   · CMD 236+MP</span>
            <span>+55  U HIT 56  · 1F OKI1-OKI2</span>
            <span>+0   U HIT 1   · 0F</span>
            <span>+0   U HIT 1   · 0F</span>
            <span>+0   U HIT 1   · 0F</span>
            <span>+0   U HIT 1   · 0F</span>
            <span>+0   U HIT 1   · 0F</span>
            <span>+0   U HIT 1   · 0F</span>
            <span>+0   U HIT 1   · 0F</span>
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
