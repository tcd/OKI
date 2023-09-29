import {
    Box,
    Paper,
    Stack,
} from "@mui/material"

import { OkiConstants } from "@app/util"
import { MoveForm } from "./MoveForm"

export const MoveForms = (): JSX.Element => {

    const $forms = OkiConstants.ROWS_RANGE.map((row) => (
        <MoveForm
            key={row}
            row={row}
            player="1"
        />
    ))

    return (
        <Stack direction="column" spacing={3}>
            {$forms}
        </Stack>
    )
}
