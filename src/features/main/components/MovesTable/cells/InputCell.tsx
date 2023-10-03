// import { Box } from "@mui/material"

// import { type ISxProps as SxProps } from "@app/theme"
import { InputDisplay } from "@app/features/shared"
import { type CellProps } from "./types"

export const InputCell = (props: CellProps): JSX.Element => {
    return (
        <InputDisplay inputs={props.row.input} />
    )
}
