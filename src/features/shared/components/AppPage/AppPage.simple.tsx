import { Box } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"
import { ThemeVars } from "@app/theme/variables"

export interface AppPageProps {
    children: React.ReactNode
    action?: React.ReactNode
    title?: string
    loading?: boolean
    hideOnLoad?: boolean
}

export const AppPage = (props: AppPageProps): JSX.Element => {

    const {
        children = null,
    } = props


    return (
        <Box
            id="page"
            sx={rootSx}
        >
            <>{children && children}</>
        </Box>
    )
}

// =============================================================================

// const rootSx: SxProps = (theme) => ({
const rootSx: SxProps = {
    p: 4,
    flexGrow: 1,
    // overflowX: "scroll",
    // display: "flex",
    // flexFlow: "column nowrap",
    // alignItems: "stretch",
    boxSizing: "border-box",
    maxWidth: `calc(100vw - ${ThemeVars.scrollBarWidth})`,
    // width: `calc(100vw - 17px) !important`,

    // [theme.breakpoints.up("mobile")]: {
    // },
}
