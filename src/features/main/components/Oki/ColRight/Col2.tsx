import { Box } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"
import { Selectors, useAppSelector } from "@app/state"

export const Col2 = (): JSX.Element => {
    return (
        <Box sx={sx}>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            {/* <span>U HIT 7</span> */}
            {/* <span>U HIT 7</span> */}
            {/* <span>U HIT 56</span> */}
            <Cell row="1" />
            <Cell row="2" />
            <Cell row="3" />
            <Cell row="4" />
            <Cell row="5" />
            <Cell row="6" />
            <Cell row="7" />
            <span>&nbsp;</span>
            <span>&nbsp;</span>
        </Box>
    )
}

const Cell = (props: { row: SF6.OkiRowNumber }): JSX.Element => {
    const data = useAppSelector((s) => Selectors.Main.okiRowPlus(s, props.row))
    const frame = data?.frameData?.startup ?? 1
    return (
        <span>U HIT {frame}</span>
    )
}

// =============================================================================

const sx: SxProps = {
    display: "flex",
    flexFlow: "column nowrap",
    ml: 1,
}
