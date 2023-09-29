import { useDispatch } from "react-redux"
import {
    Autocomplete,
    TextField,
} from "@mui/material"

import { Actions, Selectors, useAppSelector } from "@app/state"
import { OkiConstants } from "@app/util"

export type FramePickerProps = {
    character: SF6.TPlayerNumber
    row: SF6.OkiRowNumber
}

export const FramePicker = (props: FramePickerProps): JSX.Element => {

    const {
        character = "1",
        row,
    } = props

    const dispatch = useDispatch()

    const okiData = useAppSelector((s) => Selectors.Main.okiRow(s, row))

    return (
        <Autocomplete
            options={OkiConstants.FRAMES_RANGE}
            value={okiData.startFrame}
            onChange={(_event: any, newValue: number) => {
                dispatch(Actions.Main.frameClick({
                    frame: newValue,
                    rowNumber: row,
                }))
            }}
            // disablePortal
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Start Frame" />}
        />
    )
}
