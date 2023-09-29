import { Box } from "@mui/material"

import { type ISxProps as SxProps } from "@app/theme"
import { tryParseInt } from "@app/util"
import { InputDisplay } from "@app/features/shared"

export type CellProps = {
    player: SF6.TPlayerNumber
    row: SF6.ICharacterFrameData
    column: keyof SF6.ICharacterFrameData
    active: boolean
}

export const Cell = (props: CellProps): JSX.Element => {

    const {
        player,
        row,
        column,
        active = false,
    } = props

    const value = row[column]

    let $content: React.ReactNode = <>{value ?? ""}</>

    if (column == "input") {
        $content = <InputDisplay inputs={value} />
    }

    return (
        <Box
            component="td"
            sx={buildSx(column, value)}
        >
            <>{$content}</>
        </Box>
    )
}

// =============================================================================

const buildSx = (column: keyof SF6.ICharacterFrameData, value): SxProps => {
    if (column == "hitAdvantage" || column == "blockAdvantage") {
        const intValue = tryParseInt(value)
        if (intValue == null || intValue > 0) {
            return {
                color: "green",
            }
        } else if (intValue < 0) {
            return {
                color: "indianred",
            }
        }
    }
    return {}
}
