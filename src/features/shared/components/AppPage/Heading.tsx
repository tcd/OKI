import { memo } from "react"
import { Box, Divider } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"

export interface HeadingProps {
    title: string
    action?: React.ReactNode
}

const _Heading = (props: HeadingProps): JSX.Element => {
    const {
        title = null,
        action = undefined,
    } = props

    if (!title) {
        return null
    }

    const titleWithActionSx: SxProps = {
        ...titleSx,
        mb: {
            mobile: action ? 3 : 0,
            tablet: 0,
        },
    }

    return (
        <Box sx={rootSx}>
            <Box sx={sx}>
                <Box component="h1" sx={titleWithActionSx}>
                    {props.title}
                </Box>
                {action && (
                    <Box sx={actionSx}>
                        {action && action}
                    </Box>
                )}
            </Box>
            <Divider sx={{ width: "100%" }} />
        </Box>
    )
}

const arePropsEqual = (previous: HeadingProps, next: HeadingProps): boolean => {
    if (previous?.title != next?.title) {
        return false
    }
    // // @ts-ignore: next-line
    // if (previous?.action?.$$typeof != next?.action?.$$typeof) {
    //     console.log("$$type")
    //     // debugger
    //     return false
    // }
    // if (previous?.action != next?.action) {
    //     console.log("action")
    //     // debugger
    //     return false
    // }
    return true
}

export const Heading = _Heading
// export const Heading = memo(_Heading, arePropsEqual)

// =============================================================================

const sx: SxProps = (theme) => ({
    // width: "100%",
    pb: 1,
    [theme.breakpoints.only("mobile")]: {
        display: "flex",
        flexFlow: "column nowrap",
        // alignItems: "center",
    },
    [theme.breakpoints.up("tablet")]: {
        display: "flex",
        flexFlow: "row nowrap",
        alignItems: "center",
    },
})

const rootSx: SxProps = {
    // backgroundColor: "papayawhip",
    display: "flex",
    flexFlow: "column nowrap",
    width: "100%",
    pb: 4,
}

const titleSx: SxProps = {
    display: "inline-block",
    width: "100%",
    // margin: "5px 0",
    fontSize: "2rem",
    // fontSize: {
    //     mobile: "1.5rem",
    //     tablet: "2rem",
    // },
    fontWeight: 200,
    marginBlockEnd: 0,
    marginBlockStart: 0,
    mt: 0,
    mb: {
        mobile: 0,
        tablet: 0,
    },
    // mb: "0.5rem",
}

const actionSx: SxProps = {
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "end",
    mb: {
        mobile: 3,
        tablet: 0,
    },
}
