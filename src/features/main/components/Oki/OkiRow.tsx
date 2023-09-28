import { useDispatch } from "react-redux"
import { Box } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"
import { OkiConstants } from "@app/util"
import { Actions } from "@app/state"

export type OkiRowProps = {
    number: SF6.OkiRowNumber
}

export const OkiRow = (props: OkiRowProps): JSX.Element => {

    const {
        number,
    } = props

    const $frames = OkiConstants.RANGE.map((i) => (
        <Frame
            key={i}
            number={number}
            frame={i}
        />
    ))

    return (
        <Box>
            {$frames}
        </Box>
    )
}

// =============================================================================

type FrameProps = {
    number: SF6.OkiRowNumber
    frame: number
}

const Frame = (props: FrameProps): JSX.Element => {

    const dispatch = useDispatch()

    const {
        number,
        frame,
    } = props

    const handleClick = () => {
        dispatch(Actions.Main.frameClick({
            frame,
            number,
        }))
    }

    const $content = OkiConstants.DOT

    return (
        <Box
            component="span"
            onClick={handleClick}
        >
            {$content}
        </Box>
    )
}


// =============================================================================

const sx: SxProps = {

}
