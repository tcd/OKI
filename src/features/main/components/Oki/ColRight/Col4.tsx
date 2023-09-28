import { Box } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"

export const Col4 = (): JSX.Element => {
    return (
        <Box sx={sx}>
            {/* <span>&nbsp;</span> */}
            {/* <span>&nbsp;</span> */}
            <span>MOVE: YZ M Bushin Sho</span>
            <span>CMD: 236+MP</span>
            {/* <span>1F OKI1-OKI2</span> */}
            <span>0F</span>
            <span>0F</span>
            <span>0F</span>
            <span>0F</span>
            <span>0F</span>
            <span>0F</span>
            <span>0F</span>
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
