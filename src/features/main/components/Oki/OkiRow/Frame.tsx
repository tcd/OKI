import { useDispatch } from "react-redux"
import { Box } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"
import { OkiConstants } from "@app/util"
import { Actions } from "@app/state"

export type FrameProps = {
    number: SF6.OkiRowNumber
    frame: number
    rowData: SF6.IOkiRow
}

export const Frame = (props: FrameProps): JSX.Element => {

    const dispatch = useDispatch()

    const {
        number,
        frame,
        rowData,
    } = props

    const handleClick = () => {
        dispatch(Actions.Main.frameClick({
            frame,
            number,
        }))
    }

    let $content: React.ReactNode = OkiConstants.DOT

    const sx: SxProps = {}

    if (!!rowData?.name) {

    }

    return (
        <Box
            component="span"
            onClick={handleClick}
        >
            {$content}
        </Box>
    )
}
