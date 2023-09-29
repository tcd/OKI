import range from "lodash/range"
import { useDispatch } from "react-redux"
import { Box } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"
import { OkiConstants } from "@app/util"
import { Actions } from "@app/state"
import { BasicFrame } from "./BasicFrame"

export type FrameProps = {
    frame: number
    kd: SF6.IOkiRow
}

export const Frame = (props: FrameProps): JSX.Element => {

    const dispatch = useDispatch()

    const {
        frame,
        kd,
    } = props

    if (!!!kd?.frameData) {
        return <BasicFrame frame={frame} />
    }

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
                $content = "r"
                sx.color = "green"
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
