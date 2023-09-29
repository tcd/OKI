import { useSelector } from "react-redux"
import {
    Paper,
    Stack,
    Typography,
} from "@mui/material"

import { Selectors } from "@app/state"
import { FramePicker } from "./FramePicker"
import { MovePicker } from "./MovePicker"

export type MoveFormProps = {
    player: SF6.TPlayerNumber
    row: SF6.OkiRowNumber
}

export const MoveForm = (props: MoveFormProps): JSX.Element => {

    const activeRowNumber = useSelector(Selectors.Main.activeRowNumber)

    const active = (activeRowNumber == props.row)

    return (
        <Paper
            elevation={2}
            sx={{ p: 2, m: 2 }}
        >
            <Stack direction="column" spacing={3}>

                <Typography
                    variant="h5"
                    sx={{
                        color: active ? "#fff" : "#ccc",
                        textDecoration: active ? "underline" : undefined,
                    }}
                >
                    OKI{props.row}
                </Typography>

                <MovePicker {...props} />
                <FramePicker {...props} />

            </Stack>
        </Paper>
    )
}
