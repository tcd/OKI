import { Box } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"
import { SecondMenu } from "./SecondMenu"

export const AboveTable = (): JSX.Element => {
    return (
        <Box sx={rootSx}>
            <SecondMenu />
        </Box>
    )
}

// =============================================================================

const rootSx: SxProps = {
    display: "flex",
    flexDirection: "row",
}
