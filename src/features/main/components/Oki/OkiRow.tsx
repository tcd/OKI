import { Box } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"

export type OkiRowProps = {
    number: SF6.OkiRowNumber
}

const DOT = "·"

export const OkiRow = (props: OkiRowProps): JSX.Element => {

    const {
        number,
    } = props

    return (
        <Box>

        </Box>
    )
}

// =============================================================================

const sx: SxProps = {

}
