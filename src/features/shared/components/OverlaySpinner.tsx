import { Backdrop, CircularProgress, SxProps } from "@mui/material"

export type OverlaySpinnerProps = {
    open: boolean
}

export const OverlaySpinner = ({ open = false }: OverlaySpinnerProps): JSX.Element => {
    return (
        <Backdrop sx={backdropSx} open={open}>
            <CircularProgress
                color="inherit"
            />
        </Backdrop>
    )
}

const backdropSx: SxProps = {
    color: "#fff",
    zIndex: 1_000_100,
}
