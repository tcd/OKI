import { useDispatch } from "react-redux"
import { Box } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"
import { OkiConstants } from "@app/util"
import { Actions } from "@app/state"

export type BasicFrameProps = {
    frame: number
}

export const BasicFrame = ({ frame }: BasicFrameProps): JSX.Element => {

    const dispatch = useDispatch()

    return (
        <Box
            component="span"
            onClick={() => dispatch(Actions.Main.setKdFrame(frame))}
            sx={{
                ...baseSx,
                color: undefined,
                backgroundColor: undefined,
            }}
            title={frame.toString()}
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
