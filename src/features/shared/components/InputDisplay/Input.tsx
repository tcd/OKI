import { Box } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"
import { Img } from "@app/features/shared/components/Img"
import { INPUT_URLS } from "./InputUrls"

export type InputProps = {
    input: SF6.TInput
}

export const Input = (props: InputProps): JSX.Element => {

    const { input } = props

    if (input == "+") {
        return null
    }

    const inputSrc = INPUT_URLS[input]

    return (
        <Box
            component="span"
            sx={rootSx}
        >
            <Img
                src={inputSrc}
                sx={imgSx}
            />
        </Box>
    )
}

// =============================================================================

const rootSx: SxProps = {
    width: "20px",
    height: "20px",
}

const imgSx: SxProps = {
    width: "20px",
    height: "20px",
}
