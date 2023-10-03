import { Box } from "@mui/material"

import { type ISxProps as SxProps } from "@app/theme"
import { type CellProps } from "./types"

export const CancelCell = (props: CellProps): JSX.Element => {

    const value = props?.row?.cancel

    const sx: SxProps = {
        m: 2,
        color: "#fff",
        backgroundColor: cancelBg(value),
    }

    return (
        <Box sx={sx}>
            {props?.row?.cancel}
        </Box>
    )
}

const cancelBg = (value: SF6.TMoveCancel) => {
    return CANCEL_COLORS[value] ?? undefined
}

const CANCEL_COLORS: Record<SF6.TMoveCancel, string> = {
    "C":   "#11954f",
    "SA":  "#962ed1",
    "SA2": "#d12ebc",
    "SA3": "#dc3787",
    "*":   "#8c8c8c"
}
