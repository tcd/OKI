import Grid from "@mui/material/Unstable_Grid2/Grid2"

import { OkiConstants } from "@app/util"
import { MoveForm } from "@app/features/main/components/forms/MoveForm"
import { KdForm } from "@app/features/main/components/forms/KdForm"

export const Content = (): JSX.Element => {

    const $forms = OkiConstants.ROWS_RANGE.map((row) => (
        <Grid
            key={row}
            mobile={12}
            tablet={4}
        >
            <MoveForm
                row={row}
                player="1"
            />
        </Grid>
    ))

    return (
        <Grid container>
            <Grid mobile={12}>
                <KdForm />
            </Grid>
            {$forms}
        </Grid>
    )
}
