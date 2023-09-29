import { Box } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"

import { Help } from "./Help"
import { AboveTable } from "./AboveTable"
import { Oki } from "./Oki"
import { Table1 } from "./Table1"
import { MoveForms } from "./forms"

export const MainPage = (): JSX.Element => {
    return (
        <Box sx={rootSx}>
            <AboveTable />
            <Oki />
            <MoveForms />
            <Table1 />
            <Help />
        </Box>
    )
}


// =============================================================================

const rootSx: SxProps = {
    display: "flex",
    flexFlow: "column nowrap",
}
