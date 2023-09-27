import { Box } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"
import { SecondMenu } from "./SecondMenu"
import { RedditLink } from "./RedditLink"

export const AboveTable = (): JSX.Element => {
    return (
        <Box sx={rootSx}>
            <RedditLink />
            <Box sx={buttonsSx}>
                <SecondMenu />
            </Box>
        </Box>
    )
}

// =============================================================================

const rootSx: SxProps = {
    display: "flex",
    flexDirection: "column",
}

const buttonsSx: SxProps = {
    display: "flex",
    flexDirection: "row",
}
