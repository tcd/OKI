import { Box } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"
import { ErrorBoundary } from "@app/features/shared"
import { MainPage } from "@app/features/main"
import { AppHeader } from "./AppHeader"
import { AppFooter } from "./AppFooter"

export const AppLayout = (): JSX.Element => {
    return (
        <Box sx={rootSx}>
            <AppHeader />
            <Box sx={{ flexGrow: 1 }}>
                <ErrorBoundary name="AppLayout">
                    <MainPage />
                </ErrorBoundary>
            </Box>
            <AppFooter />
        </Box>
    )
}

// =============================================================================

const rootSx: SxProps = {
    flexGrow: 1,
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "stretch",
    justifyContent: "stretch",
    // height: "100vh",
}
