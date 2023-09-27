import { Box } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"

/**
 * FIXME: implement
 */
export const Oki = (): JSX.Element => {
    return (
        <Box sx={sx}>
            <span>    0........1.........2.........3.........4.........5.........6.........7.........8.........9.........10........11........</span>
            <span>    12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789</span>
            <span>KDBR ······1234567890······································································································· +6   U HIT 7   · MOVE</span>
            <span>KDR  ······1234567890······································································································· +6   U HIT 7   ·  CMD</span>
            <span>KD   ·······················································1234567890······················································ +55  U HIT 56  ·   1F OKI1-OKI2</span>
            <span>OKI1 ······················································································································· +0   U HIT 1   ·   0F</span>
            <span>OKI2 ······················································································································· +0   U HIT 1   ·   0F</span>
            <span>OKI3 ······················································································································· +0   U HIT 1   ·   0F</span>
            <span>OKI4 ······················································································································· +0   U HIT 1   ·   0F</span>
            <span>OKI5 ······················································································································· +0   U HIT 1   ·   0F</span>
            <span>OKI6 ······················································································································· +0   U HIT 1   ·   0F</span>
            <span>OKI7 ······················································································································· +0   U HIT 1   ·   0F</span>
            <span>    12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789</span>
            <span>    0........1.........2.........3.........4.........5.........6.........7.........8.........9.........10........11........</span>
        </Box>
    )
}

// =============================================================================

const sx: SxProps = {
    display: "flex",
    flexFlow: "column nowrap",
    fontFamily: "monospace",
    whiteSpace: "pre-line",
    // "& > span::after": {
    //     content: "\n",
    //     // whiteSpace: "pre",
    // },
}