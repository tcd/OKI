import { Box } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"
import { SecondMenu } from "./SecondMenu"
import { RedditLink } from "./RedditLink"
import { CharacterPicker } from "../forms"

export const AboveTable = (): JSX.Element => {
    return (
        <Box sx={rootSx}>
            {/* <RedditLink /> */}
            <br />
            <Box sx={buttonsSx}>
                <CharacterPicker player="1" />
                <CharacterPicker player="2" />
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
    alignItems: "center",
}
