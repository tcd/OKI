import { useDispatch } from "react-redux"
import {
    Autocomplete,
    TextField,
} from "@mui/material"

import { Actions, Selectors, useAppSelector } from "@app/state"

export type MovePickerProps = {
    // value: string
    player: SF6.TPlayerNumber
    row: SF6.OkiRowNumber
    // moves: SF6.ICharacterFrameData[]
}

export const MovePicker = (props: MovePickerProps): JSX.Element => {

    const {
        player = "1",
        // value,
        row,
        // moves,
    } = props

    const dispatch = useDispatch()

    const moves = useAppSelector((s) => Selectors.Main.frameData.character1(s))
    const okiData = useAppSelector((s) => Selectors.Main.okiRow(s, row))

    const options = moves.map((move) => {
        return move.name
    })

    const handleClick = (_event: any, newValue: string) => {
        dispatch(Actions.Main.setMove({
            player,
            rowNumber: row,
            move: newValue,
        }))
    }

    return (
        <Autocomplete
            options={options}
            value={okiData?.name ?? ""}
            onChange={handleClick}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Move" />}
        />
    )
}
