import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Box } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"
import { ThemeVars } from "@app/theme/variables"
import { Actions, Selectors } from "@app/state"
import { OverlaySpinner } from "@app/features/shared/components/OverlaySpinner"
import { Heading } from "./Heading"

export interface AppPageProps {
    children: React.ReactNode
    action?: React.ReactNode
    title?: string
    loading?: boolean
    hideOnLoad?: boolean
}

export const AppPage = (props: AppPageProps): JSX.Element => {

    const {
        title = null,
        children = null,
        loading = false,
        hideOnLoad = false,
        action = undefined,
    } = props

    const dispatch = useDispatch()

    const [showContent, setShowContent] = useState<boolean>(false)

    useEffect(() => {
        if (!!title) { dispatch(Actions.Core.setPageTitle(title)) }
    }, [dispatch, title])

    useEffect(() => {
        return () => { dispatch(Actions.Core.clearPageTitle()) }
    }, [dispatch, title])

    useEffect(() => {
        if (hideOnLoad) {
            /* If `hideOnLoad` is true, don't render children while `loading` is also true. */
            setShowContent(!loading)
            return
        }
        setShowContent(true)
    }, [
        hideOnLoad,
        loading,
    ])

    return (
        <Box
            id="Page"
            sx={rootSx}
        >
            <OverlaySpinner open={loading} />
            <Heading title={title} action={action} />
            {showContent && <>{children && children}</>}
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
