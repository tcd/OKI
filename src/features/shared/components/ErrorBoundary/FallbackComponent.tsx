import {
    Alert,
    AlertTitle,
    Button,
    // Stack,
} from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"

export type FallbackComponentProps = {
    name: string
    message?: string
}

export const FallbackComponent = (props: FallbackComponentProps): JSX.Element => {

    const {
        name = null,
        message = null,
    } = props

    const handleClick = () => {
        window.location.reload()
    }

    return (
        <Alert
            severity="error"
            variant="filled"
            sx={rootSx}
        >
            <AlertTitle>
                Error
                {!!name && <span> — {name}</span>}
            </AlertTitle>

            {!!message && (
                <>
                    <span>error</span>
                    <br />
                </>
            )}

            <Button
                color="info"
                sx={buttonSx}
                onClick={handleClick}
            >
                click to refresh the page
            </Button>
        </Alert>
    )
}

// =============================================================================

const rootSx: SxProps = {
    m: 2,
    flexShrink: 1,
    flexGrow: 0,
    width: "325px",
}

const buttonSx: SxProps = {
    my: 2,
    cursor: "pointer",
    "&:hover": {
        textDecoration: "underline",
    },
}
