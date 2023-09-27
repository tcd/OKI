import { Box } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"

import { Help } from "./Help"
import { AboveTable } from "./AboveTable"
import { Oki } from "./Oki"
import { Table1 } from "./Table1"

export const MainPage = (): JSX.Element => {
    return (
        <Box sx={rootSx}>
            <AboveTable />
            <Table1 />
            <Oki />
            <Help />
        </Box>
    )
}


// =============================================================================

const rootSx: SxProps = {
    display: "flex",
    flexFlow: "column nowrap",
}
