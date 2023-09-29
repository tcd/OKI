import { Box } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"

import { AboveTable } from "./AboveTable"
import { Oki } from "./Oki"
import { MoveForms } from "./forms"
import { MovesTable } from "./MovesTable"

export const MainPage = (): JSX.Element => {
    return (
        <Box sx={rootSx}>
            <AboveTable />
            <Oki />
            <MoveForms />
            <MovesTable player="1" />
        </Box>
    )
}


// =============================================================================

const rootSx: SxProps = {
    display: "flex",
    flexFlow: "column nowrap",
}
