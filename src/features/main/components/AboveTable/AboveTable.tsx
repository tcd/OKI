import { Box } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"
import { SecondMenu } from "./SecondMenu"
import { RedditLink } from "./RedditLink"
import { Character1Picker, Character2Picker } from "./CharacterPicker"

export const AboveTable = (): JSX.Element => {
    return (
        <Box sx={rootSx}>
            <RedditLink />
            <Box sx={buttonsSx}>
                <Character1Picker />
                <Character2Picker />
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
