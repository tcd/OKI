import { Box } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"
import { OkiConstants } from "@app/util"

export type OkiRowProps = {
    number: SF6.OkiRowNumber
}

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
