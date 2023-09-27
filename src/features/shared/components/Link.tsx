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

const color1  = "#0079d3"
const color2 = color1
// const color2 = "#4c4ce9"

const sx: SxProps = {
    flexShrink: 1,
    flexGrow: 0,
    color: color1,
    textDecoration: "underline",
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
        color: color1,
    },
    "&:visited:hover": {
        color: color2,
    },
}
