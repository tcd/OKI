import { useSelector } from "react-redux"
import { Box } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"
import { OkiConstants } from "@app/util"
import { Selectors, useAppSelector } from "@app/state"
import { Frame } from "./Frame"

export type OkiRowProps = {
    number: SF6.OkiRowNumber
}

export const OkiRow = (props: OkiRowProps): JSX.Element => {

    const {
        number,
    } = props

    const activeRowNumber = useSelector(Selectors.Main.activeRowNumber)
    const okiRowData = useAppSelector((state) => Selectors.Main.okiRowPlus(state, number))
    const startFrame = !!okiRowData?.startFrame ? okiRowData?.startFrame : 0

    const sx: SxProps = {
        "&:hover": {
            cursor: "pointer",
        },
        backgroundColor: (activeRowNumber == number) ? "#002200 !important" : "#000",
    }

    const $frames = OkiConstants.FRAMES_RANGE.map((i) => (
        <Frame
            key={i}
            number={number}
            frame={i}
            rowData={okiRowData}
            startFrame={startFrame}
        />
    ))

    return (
        <Box sx={sx}>
            {$frames}
        </Box>
    )
}

