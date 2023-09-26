import { Box } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"

export type LinkProps = {
    title: string
    url: string
}

export const Link = (props: LinkProps): JSX.Element => {
    return (
        <Box
            component="a"
            href={props.url}
            sx={sx}
        >
            {props.title}
        </Box>
    )
}

// =============================================================================

const color  = "#0000ee"
const color2 = "#4c4ce9"

const sx: SxProps = {
    // color,
    // textDecoration: "none",
    // "&:hover, &:active, &:focused, &:visited": {
    //     color,
    //     cursor: "pointer",
    //     textDecoration: "underline",
    // },
    "&:hover": {
        color: color2,
        cursor: "pointer",
        textDecoration: "underline",
    },
    "&:active": {
        color: color2,
        cursor: "pointer",
        textDecoration: "underline",
    },
    "&:focused": {
        color: color2,
        cursor: "pointer",
        textDecoration: "underline",
    },
    "&:visited": {
        color: color,
    },
    "&:visited:hover": {
        color: color2,
    },
}
