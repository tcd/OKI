import range from "lodash/range"
import { useDispatch } from "react-redux"
import { Box } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"
import { OkiConstants } from "@app/util"
import { Actions } from "@app/state"

export type RealFrameProps = {
    frame: number
    kd: SF6.IOkiRow
}

export const RealFrame = (props: RealFrameProps): JSX.Element => {

    const dispatch = useDispatch()

    const {
        frame,
        kd,
    } = props

    const startFrame = kd?.startFrame ?? 1

    const handleClick = () => {
        dispatch(Actions.Main.setKdFrame(frame))
    }

    let $content: React.ReactNode = OkiConstants.DOT

    const sx = {
        ...baseSx,
        color: undefined,
        backgroundColor: undefined,
    }

    if (frame >= startFrame) {
        if (kd?.frameData?.total != null) {
            const relativeFrame = (frame - startFrame)
            const activeLimit = (kd.frameData.startup + kd.frameData.active)
            const plusRange = range(activeLimit, activeLimit + kd.frameData.hitAdvantage)


            if (plusRange.includes(relativeFrame)) {
                if (relativeFrame == 1) {
                    debugger
                }
                // const numbers = (plusRange[0] + relativeFrame).toString().split("")
                // $content = numbers[numbers.length - 1]
                $content = relativeFrame
                sx.color = "#CCFFCC"
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

// =============================================================================

const baseSx: SxProps = {
    "&:hover": {
        cursor: "pointer",
        backgroundColor: "#999900",
    },
}
