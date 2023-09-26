import { useSelector } from "react-redux"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { ConfirmProvider } from "material-ui-confirm"

import { Selectors } from "@app/state"
import { AppThemeDark, AppThemeLight } from "@app/theme"
import { AppNotifications } from "@app/features/notifications"

export type AppThemeProviderProps = {
    children: React.ReactNode
}

export const AppThemeProvider = ({ children }: AppThemeProviderProps): JSX.Element => {
    const darkModeEnabled = useSelector(Selectors.Core.preferences.darkModeEnabled)
    const theme = darkModeEnabled ? AppThemeDark : AppThemeLight
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppNotifications />
            <ConfirmProvider>
                {children && children}
            </ConfirmProvider>
        </ThemeProvider>
    )
}
