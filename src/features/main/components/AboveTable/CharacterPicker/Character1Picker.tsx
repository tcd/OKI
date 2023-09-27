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
import { CHARACTER_OPTIONS, prettyCharacterName } from "./options"

export const Character1Picker = (): JSX.Element => {

    const dispatch = useDispatch()

    const character = useSelector(Selectors.Main.character1)

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
        <FormControl sx={{ p: 1, width: "120px" }}>
            <InputLabel id="character1-select-label">Player 1</InputLabel>
            <Select
                labelId="character1-select-label"
                id="character1-select"
                size="small"
                variant="outlined"
                label="Player 1"
                value={character}
                onChange={handleChange}
                renderValue={renderValue}
            >
                {$options}
            </Select>
        </FormControl>
    )
}

const renderValue = (value: SF6.CharacterNameClean) => {
    return (
        <Box sx={{ color: "black" }}>{prettyCharacterName(value)}</Box>
    )
}
