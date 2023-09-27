import { useSelector } from "react-redux"
import {
    Box,
} from "@mui/material"

import { Selectors } from "@app/state"

export const Table1 = (): JSX.Element => {

    const character1 = useSelector(Selectors.Main.character1)

    return (
        <Box>
            <span>{character1}</span>
        </Box>
    )
}
