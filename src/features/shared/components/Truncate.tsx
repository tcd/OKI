import truncate from "lodash/truncate"
import { Box } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"

export type TruncateProps = {
    text: string
    /** @default 25 */
    length?: number
}

export const Truncate = (props: TruncateProps): JSX.Element => {

    const {
        text = "",
        length = 25,
    } = props

    const truncated = truncate(text, { length })

    const sx: SxProps = {
        cursor: text.length > length ? "help" : undefined,
    }

    return (
        <Box
            component="span"
            title={text}
            sx={sx}
        >
            <>{truncated}</>
        </Box>
    )
}
