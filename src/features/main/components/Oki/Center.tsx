import { Box } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"
import { ExtraRow1 } from "./ExtraRow1"
import { ExtraRow2 } from "./ExtraRow2"
import { OkiRow } from "./OkiRow"

export const Center = (): JSX.Element => {
    return (
        <Box sx={sx}>
            <ExtraRow1 />
            <ExtraRow2 />
            <OkiRow number="1" />
            <OkiRow number="2" />
            <OkiRow number="3" />
            <OkiRow number="4" />
            <OkiRow number="5" />
            <OkiRow number="6" />
            <OkiRow number="7" />
            <ExtraRow2 />
            <ExtraRow1 />
        </Box>
    )
}

// =============================================================================

const sx: SxProps = {
    display: "flex",
    flexFlow: "column nowrap",
}
