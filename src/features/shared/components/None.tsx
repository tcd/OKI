import Color from "color"
import { Typography, TypographyProps } from "@mui/material"

export interface NoneProps {
    message?: string
}

/**
 * Used to display missing or absent values.
 */
export const None = (props: NoneProps): JSX.Element => {
    const {
        message = "none",
    } = props
    return (
        <Typography component="small" {...typographyProps}>
            {message}
        </Typography>
    )
}

// =============================================================================

const typographyProps: TypographyProps = {
    variant: "caption",
    sx: {
        color: Color("#6c757d").darken(0.1).string(),
        fontStyle: "italic",
        ml: 0.25,
    },
}
