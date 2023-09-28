import { useDispatch } from "react-redux"
import { Box } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"
import { OkiConstants } from "@app/util"
import { Actions } from "@app/state"

export type FrameProps = {
    number: SF6.OkiRowNumber
    frame: number
    rowData: SF6.IOkiRow
    startFrame: number
}

export const Frame = (props: FrameProps): JSX.Element => {

    const dispatch = useDispatch()

    let {
        number,
        frame,
        rowData,
        startFrame,
    } = props

    const handleClick = () => {
        dispatch(Actions.Main.frameClick({
            frame,
            number,
        }))
    }

    let $content: React.ReactNode = OkiConstants.DOT

    const sx = {
        ...baseSx,
        color: undefined,
        backgroundColor: undefined,
    }

    if (frame >= startFrame) {
        if (rowData?.frameData?.total != null) {
            frame = frame - startFrame
            const startup = rowData.frameData.startup
            const activeLimit = (startup + rowData.frameData.active)
            const recoveryLimit = (activeLimit + rowData.frameData.recovery)

            if (frame <= startup) {
                $content = "s"
                sx.color = "#AAA"
                sx.backgroundColor = "#002222 !important"
            }
            if (frame >= startup && frame < activeLimit) {
                $content = "A"
                sx.color = "#fcc !important"
                sx.backgroundColor = "#002222 !important"
            }
            if (frame >= activeLimit && frame <= recoveryLimit) {
                $content = "r"
                sx.color = "#AAA"
                sx.backgroundColor = "#002222 !important"
            }
        }
    }

    return (
        <Box
            component="span"
            onClick={handleClick}
            sx={sx}
        >
            {$content}
        </Box>
    )
}

const baseSx: SxProps = {
    "&:hover": {
        cursor: "pointer",
        backgroundColor: "#999900",
    },
}
