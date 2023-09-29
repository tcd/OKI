import range from "lodash/range"
import { useDispatch } from "react-redux"
import { Box } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"
import { OkiConstants } from "@app/util"
import { Actions } from "@app/state"

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

type BasicFrameProps = {
    frame: number
}

const BasicFrame = ({ frame }: BasicFrameProps): JSX.Element => {

    const dispatch = useDispatch()

    return (
        <Box
            component="span"
            onClick={dispatch(Actions.Main.setKdFrame(frame))}
            sx={{
                ...baseSx,
                color: undefined,
                backgroundColor: undefined,
            }}
        >
            {OkiConstants.DOT}
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
