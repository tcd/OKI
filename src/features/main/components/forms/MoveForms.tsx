import {
    Box,
    Paper,
    Stack,
} from "@mui/material"

import { OkiConstants } from "@app/util"
import { MoveForm } from "./MoveForm"
import { KdForm } from "./KdForm"

export const MoveForms = (): JSX.Element => {

    const $forms = OkiConstants.ROWS_RANGE.map((row) => (
        <MoveForm
            key={row}
            row={row}
            player="1"
        />
    ))

    return (
        <>
            <KdForm />
            <br />
            <Stack direction="row" spacing={3}>
                {$forms}
            </Stack>
        </>
    )
}
