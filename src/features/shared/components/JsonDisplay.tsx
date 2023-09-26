// import merge from "lodash/merge"
import { useEffect, useState } from "react"
import { isBlank } from "@mlxb/coolkit"
import { Box, Paper, type PaperProps } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"

export type JsonDisplayProps = {
    data: any
    paperProps?: PaperProps
}

export const JsonDisplay = (props: JsonDisplayProps): JSX.Element => {

    const {
        data = null,
        paperProps = {
            sx: paperSx,
        },
    } = props

    // paperProps = merge({}, { sx: paperSx }, paperProps)

    const [displayValue, setDisplayValue] = useState("")
    const [error, setError] = useState(null)

    useEffect(() => {
        try {
            if (isBlank(data)) {
                setError("no data")
                return
            }
            setDisplayValue(JSON.stringify(data, null, 4))
            setError(null)
        } catch (error) {
            setError("stringify error")
            return
        }
    }, [data])

    return (
        <Paper {...paperProps}>
            <Box component="pre" sx={preSx}>
                <Box component="code">
                    {!error && (<>{displayValue}</>)}
                    {!!error && (<>{error}</>)}
                </Box>
            </Box>
        </Paper>
    )
}

// =============================================================================

const paperSx: SxProps = {
    px: 2,
    py: 0.5,
}

const preSx: SxProps = {
    overflowX: "auto",
}
