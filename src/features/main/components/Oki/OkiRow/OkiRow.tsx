import { useSelector } from "react-redux"
import { Box } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"
import { OkiConstants } from "@app/util"
import { Selectors } from "@app/state"
import { Frame } from "./Frame"

export type OkiRowProps = {
    number: SF6.OkiRowNumber
}

export const OkiRow = (props: OkiRowProps): JSX.Element => {

    const {
        number,
    } = props

    const activeRowNumber = useSelector(Selectors.Main.activeRowNumber)

    const sx: SxProps = {
        "&:hover": {
            cursor: "pointer",
        },
        backgroundColor: (activeRowNumber == number) ? "#002200" : "#000",
    }

    const $frames = OkiConstants.RANGE.map((i) => (
        <Frame
            key={i}
            number={number}
            frame={i}
        />
    ))

    return (
        <Box sx={sx}>
            {$frames}
        </Box>
    )
}

