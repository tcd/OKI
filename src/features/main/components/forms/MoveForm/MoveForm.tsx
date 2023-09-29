import {
    Box,
    Stack,
    Paper,
} from "@mui/material"

export type MoveFormProps = {
    character: "1" | "2"
    row: SF6.OkiRowNumber
}

export const MoveForm = (props: MoveFormProps): JSX.Element => {
    const {
        character = "1",
        row,
    } = props

    return (
        <Paper
            elevation={2}
            sx={{ p: 2 }}
        >
            <Stack direction="column" spacing={3}>

            </Stack>
        </Paper>
    )
}
