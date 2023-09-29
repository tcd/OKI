import { useDispatch, useSelector } from "react-redux"
import {
    Autocomplete,
    TextField,
} from "@mui/material"

import { Actions, Selectors } from "@app/state"

export const MovePicker = (): JSX.Element => {

    const dispatch = useDispatch()

    const kd = useSelector(Selectors.Main.kd.rowData)
    const moves = useSelector(Selectors.Main.kd.knockdownMoves)

    const options = moves.map((move) => {
        return move.name
    })

    const handleClick = (_event: any, newValue: string) => {
        dispatch(Actions.Main.setKdMove(newValue))
    }

    return (
        <Autocomplete
            options={options}
            value={kd?.name ?? ""}
            onChange={handleClick}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Move" />}
        />
    )
}
