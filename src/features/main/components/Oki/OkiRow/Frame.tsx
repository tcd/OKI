import range from "lodash/range"
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

    const {
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
            const relativeFrame = frame - startFrame
            const startup = rowData.frameData.startup
            const activeLimit = (startup + rowData.frameData.active)
            const recoveryLimit = (activeLimit + rowData.frameData.recovery)
            const plusRange = range(activeLimit, activeLimit + rowData.frameData.hitAdvantage)

            if (relativeFrame <= recoveryLimit) {
                if (relativeFrame <= startup) {
                    $content = "s"
                    sx.color = "#AAA"
                    sx.backgroundColor = "#002222"
                }
                if (relativeFrame >= startup && relativeFrame < activeLimit) {
                    $content = "A"
                    sx.color = "#fcc !important"
                    sx.backgroundColor = "#002222"
                }
                if (relativeFrame >= activeLimit && relativeFrame <= recoveryLimit) {
                    $content = "r"
                    sx.color = "#AAA"
                    sx.backgroundColor = "#002222"
                }
                if (plusRange.includes(relativeFrame)) {
                    $content = "r"
                    sx.color = "green"
                }
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
