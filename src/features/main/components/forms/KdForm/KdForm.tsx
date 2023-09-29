import {
    Paper,
    Stack,
    Typography,
} from "@mui/material"

import { MovePicker } from "./MovePicker"
import { FramePicker } from "./FramePicker"

export const KdForm = (): JSX.Element => {
    return (
        <Paper
            elevation={2}
            sx={{ p: 2, m: 2 }}
        >
            <Stack direction="column" spacing={3}>

                <Typography
                    variant="h5"
                    sx={{ color: "#ccc" }}
                >
                    KD
                </Typography>

                <MovePicker  />
                <FramePicker />

            </Stack>
        </Paper>
    )
}
