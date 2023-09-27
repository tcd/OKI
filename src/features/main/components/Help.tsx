import { Box } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"

export const Help = (): JSX.Element => {
    return (
        <Box
            id="help"
            sx={rootSx}
        >
            <span>SF6 OKI LOL</span>

            <Box sx={pSx}>
                <span>KNOCKDOWN</span>
                <br />
                <span>KD   = NO RECOVERY</span>
                <span>KDR  = NORMAL RECOVERY</span>
                <span>KDBR = BACK RECOVERY</span>
                <br />
                <span>I&apos;m trying to figure it out but I don&apos;t really understand how to use this. Can you explain?</span>
                <br />
                <span>https://twitter.com/TOOLASSlSTED/status/731544334781300736</span>
                <br />
                <span>SFV DONATE 2 STRONG LOL</span>
            </Box>

            <span>U KEY U SHORTCUT LOL</span>

            <Box sx={pSx}>
                <br />
                <span>1 = SELECT OKI1</span>
                <span>2 = SELECT OKI2</span>
                <span>3 = SELECT OKI3</span>
                <span>4 = SELECT OKI4</span>
                <span>5 = SELECT OKI5</span>
                <span>6 = SELECT OKI6</span>
                <span>7 = SELECT OKI7</span>
                <br />
                <span>+ = OKI FRAME + 1</span>
                <span>- = OKI FRAME - 1</span>
                <br />
                <span>DELETE = OKI DELETE</span>
                <br />
                <span>D = DASH</span>
            </Box>

        </Box>
    )
}

// =============================================================================

const rootSx: SxProps = {
    ml: 1,
    my: 3,
    backgroundColor: "grey",
}

const pSx: SxProps = {
    display: "flex",
    flexFlow: "column nowrap",
    ml: 4,
    mb: 4,
    "& > span": {
        whiteSpace: "pre",
    },
}
