import {
    Paper,
    Stack,
    Typography,
} from "@mui/material"

import { FramePicker } from "./FramePicker"

export type MoveFormProps = {
    character: SF6.TPlayerNumber
    row: SF6.OkiRowNumber
}

export const MoveForm = (props: MoveFormProps): JSX.Element => {
    return (
        <Paper
            elevation={2}
            sx={{ p: 2, m: 2 }}
        >
            <Stack direction="column" spacing={3}>

                <Typography variant="h5">
                    OKI{props.row}
                </Typography>

                <FramePicker {...props} />

            </Stack>
        </Paper>
    )
}
