import isString from "lodash/isString"
import { Box } from "@mui/material"

import { type ISxProps as SxProps } from "@app/theme"
import { type CellProps } from "./types"
import { OkiConstants } from "@app/util"

export const CancelCell = (props: CellProps): JSX.Element => {

    const value = normalizeCancelValue(props?.row?.cancel)

    const sx: SxProps = {
        m: 2,
        color: "#fff",
        backgroundColor: CANCEL_COLORS[value] ?? undefined,
        userSelect: "none",
    }

    return (
        <Box
            sx={sx}
            title={OkiConstants.CANCEL_TRANSLATIONS[value]}
        >
            {props?.row?.cancel}
        </Box>
    )
}

// =============================================================================

const normalizeCancelValue = (value: SF6.TMoveCancel): SF6.TMoveCancel => {
    if (!!value && isString(value) && value.startsWith(OkiConstants.ASTERISK_I_GUESS)) {
        return OkiConstants.ASTERISK_I_GUESS
    }
    return value
}

// @ts-ignore: next-line
const CANCEL_COLORS: Record<SF6.TMoveCancel, string> = {
    "C":   "#11954f",
    "SA":  "#962ed1",
    "SA2": "#d12ebc",
    "SA3": "#dc3787",
    "*":   "#8c8c8c",
    [`${OkiConstants.ASTERISK_I_GUESS}`]: "#8c8c8c",
}
