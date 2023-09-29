import { Stack } from "@mui/material"

import { Input } from "./Input"

export type InputDisplayProps = {
    inputs: SF6.TInput[]
}

export const InputDisplay = (props: InputDisplayProps): JSX.Element => {

    const { inputs } = props

    const $inputs = inputs.map((input, i) => <Input key={i} input={input} />)

    return (
        <Stack
            component="span"
            direction="row"
            flexWrap="nowrap"
            spacing={0.5}
            sx={{ mx: 1, my: 0.25 }}
        >
            <>{$inputs}</>
        </Stack>
    )
}
