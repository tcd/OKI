import { Box, Paper } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"
import { Center } from "./Center"
import { ColLeft } from "./ColLeft"
import { ColRight } from "./ColRight"

export const Oki = (): JSX.Element => {
    return (
        <Box
            sx={sx}
        >
            <ColLeft />
            <Center />
            <ColRight />
        </Box>
    )
}

// =============================================================================

const sx: SxProps = {
    flexShrink: 1,
    flexGrow: 0,
    p: 1,
    my: 3,
    display: "flex",
    flexFlow: "row nowrap",
    fontSize: "13px",
    fontFamily: "monospace",
    // whiteSpace: "pre-line",
    color: "#ccc",
}
