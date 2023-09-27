import { Box } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"

export type ButtonProps = {
    title: string
    [key: string]: any
}

export const Button = (props: ButtonProps): JSX.Element => {
    const {
        title,
        ...otherProps
    } = props
    return (
        <Box
            component="button"
            sx={sx}
            {...otherProps}
        >
            {title}
        </Box>
    )
}

// =============================================================================

const sx: SxProps = {
    borderRadius: "0px",
    backgroundColor: "#999999",
    p: 0.5,
    px: 1,
    // fix chrome user agent styles
    height: "30px",
    paddingBlock: "unset",
    paddingInline: "5px",
}
