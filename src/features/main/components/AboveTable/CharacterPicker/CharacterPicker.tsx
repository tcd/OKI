import { useDispatch, useSelector } from "react-redux"
import {
    Box,
    Select,
    MenuItem,
    SelectChangeEvent,
    InputLabel,
    FormControl,
} from "@mui/material"

import { Actions, Selectors } from "@app/state"
import { CHARACTER_OPTIONS } from "./options"

export const CharacterPicker = (): JSX.Element => {

    const dispatch = useDispatch()

    const character1 = useSelector(Selectors.Main.character1)
    // const character2 = useSelector(Selectors.Main.character2)

    const handleChange = (event: SelectChangeEvent<SF6.CharacterNameClean>, _child: React.ReactNode) => {
        dispatch(Actions.Main.setPlayer1(event.target.value as SF6.CharacterNameClean))

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
        <FormControl>
            <InputLabel id="demo-simple-select-label">Player 1</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                size="small"
                variant="outlined"
                label="Player 1"
                value={character1}
                onChange={handleChange}
            >
                {$options}
            </Select>
        </FormControl>
    )
}
