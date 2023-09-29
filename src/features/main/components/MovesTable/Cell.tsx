import { Box } from "@mui/material"

import { type ISxProps as SxProps } from "@app/theme"

export type CellProps = {
    player: SF6.TPlayerNumber
    row: SF6.ICharacterFrameData
    column: keyof SF6.ICharacterFrameData
    active: boolean
}

export const Cell = (props: CellProps): JSX.Element => {

    const {
        player,
        row,
        column,
        active = false,
    } = props

    return (
        <Box
            component="td"
            sx={rootSx}
        >
            {row[column] ?? ""}
        </Box>
    )
}

// =============================================================================

const rootSx: SxProps = {
}
