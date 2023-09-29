import { useDispatch, useSelector } from "react-redux"
import {
    Select,
    MenuItem,
    SelectChangeEvent,
    InputLabel,
    FormControl,
} from "@mui/material"

import { Actions, Selectors } from "@app/state"
import { CHARACTER_OPTIONS, prettyCharacterName } from "./options"

export type CharacterPickerProps = {
    player: "1" | "2"
}

export const CharacterPicker = (props: CharacterPickerProps): JSX.Element => {

    const {
        player,
    } = props

    const dispatch = useDispatch()

    const character: SF6.CharacterNameClean = useSelector(Selectors.Main[`character${player}`])

    const handleChange = (event: SelectChangeEvent<SF6.CharacterNameClean>, _child: React.ReactNode) => {
        dispatch(Actions.Main.setCharacter({
            player,
            character: event.target.value as SF6.CharacterNameClean,
        }))
    }

    const $options = CHARACTER_OPTIONS.map((c, i) => (
        <MenuItem
            key={i}
            value={c.value}
        >
            {c.title}
        </MenuItem>
    ))

    return (
        <FormControl sx={{ p: 1, width: "120px" }}>
            <InputLabel id={`character${player}-select-label`}>Player 1</InputLabel>
            <Select
                id={`character${player}-select`}
                labelId={`character${player}-select-label`}
                size="small"
                variant="outlined"
                label={`Player ${player}`}
                value={character}
                onChange={handleChange}
                renderValue={(v) => prettyCharacterName(v)}
            >
                {$options}
            </Select>
        </FormControl>
    )
}

