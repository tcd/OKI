import {
    useTheme,
    useMediaQuery,
} from "@mui/material"

export const useOnMobile = (): boolean => {
    const theme = useTheme()
    const onMobile = useMediaQuery(theme.breakpoints.only("mobile"))
    return onMobile
}
