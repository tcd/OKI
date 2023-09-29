import { useDispatch, useSelector } from "react-redux"
import {
    Autocomplete,
    TextField,
} from "@mui/material"

import { Actions, Selectors } from "@app/state"
import { OkiConstants } from "@app/util"

export const FramePicker = (): JSX.Element => {

    const dispatch = useDispatch()

    const kd = useSelector(Selectors.Main.kd.rowData)

    return (
        <Autocomplete
            options={OkiConstants.FRAMES_RANGE}
            value={kd.startFrame}
            onChange={(_event: any, newValue: number) => {
                dispatch(Actions.Main.setKdFrame(newValue))
            }}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Start Frame" />}
        />
    )
}
