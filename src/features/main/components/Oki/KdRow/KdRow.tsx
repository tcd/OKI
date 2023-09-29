import { useSelector } from "react-redux"
import { Box } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"
import { OkiConstants } from "@app/util"
import { Selectors } from "@app/state"
import { Frame } from "./Frame"

export const KdRow = (): JSX.Element => {

    const kd = useSelector(Selectors.Main.kd.rowDataPlus)

    const $frames = OkiConstants.FRAMES_RANGE.map((frame) => (
        <Frame
            key={frame}
            frame={frame}
            kd={kd}
        />
    ))

    return (
        <Box sx={sx}>
            {$frames}
        </Box>
    )
}

// =============================================================================

const sx: SxProps = {
    "&:hover": {
        cursor: "pointer",
    },
}
