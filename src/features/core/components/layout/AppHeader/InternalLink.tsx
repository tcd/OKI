import { Box } from "@mui/material"

import { type ISxProps as SxProps } from "@app/theme"

export type InternalLinkProps = {
    text: string
    onClick: Function
}

export const InternalLink = (props: InternalLinkProps): JSX.Element => {
    return (
        <Box
            component="li"
            onClick={() => props.onClick()}
            sx={sx}
        >
            <span>
                {props.text}
            </span>
        </Box>
    )
}

// =============================================================================

const sx: SxProps = {
    // flexGrow: 0,
    // backgroundColor: "cyan",
    // width: "auto",
    // display: "block",
    "&:hover": {
        cursor: "pointer",
        textDecoration: "underline",
    },
}
