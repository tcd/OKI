import { Box } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"
import { Center } from "./Center"
import { LeftCol } from "./LeftCol"
import { RightCol } from "./RightCol"

export const Oki = (): JSX.Element => {
    return (
        <Box sx={sx}>
            <LeftCol />
            <Center />
            <RightCol />
        </Box>
    )
}

// =============================================================================

const sx: SxProps = {
    mx: 1,
    display: "flex",
    flexFlow: "row nowrap",
    fontSize: "13px",
    fontFamily: "monospace",
    whiteSpace: "pre-line",
    color: "#ccc",
}
