import {
    Box,
    Paper,
    Stack,
} from "@mui/material"

import { Img } from "@app/features/shared/components/Img"
import { INPUT_URLS } from "./InputUrls"

export type InputProps = {
    input: SF6.TInput
}

export const Input = (props: InputProps): JSX.Element => {

    const { input } = props

    const inputSrc = INPUT_URLS[input]

    return (
        <Box
            component="span"
            sx={{}}
        >
            <Img
                src={inputSrc}
                sx={{}}
            />
        </Box>
    )
}
