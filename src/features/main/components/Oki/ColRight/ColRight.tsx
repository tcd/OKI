import { Box } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"
import { Col1 } from "./Col1"
import { Col2 } from "./Col2"
import { Col3 } from "./Col3"
import { Col4 } from "./Col4"

export const ColRight = (): JSX.Element => {
    return (
        <Box sx={sx}>
            <Col1 />
            <Col2 />
            <Col3 />
            <Col4 />
        </Box>
    )
    return (
        <Box sx={sx}>
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
    flexFlow: "row nowrap",
    ml: 1,
    color: "#eee",
    "& *": {
        whiteSpace: "nowrap",
    },
}
