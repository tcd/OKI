import { useSelector } from "react-redux"
import { Box } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"
import { Selectors } from "@app/state"

export const Col4 = (): JSX.Element => {

    const moveData = useSelector(Selectors.Main.activeMove)

    return (
        <Box sx={sx}>
            {/* <span>&nbsp;</span> */}
            {/* <span>&nbsp;</span> */}
            <span>MOVE: {moveData?.name}</span>
            <span>CMD: {moveData?.input}</span>
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
