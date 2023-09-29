import { forwardRef } from "react"
import {
    Dialog,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Slide,
} from "@mui/material"
import { type TransitionProps } from "@mui/material/transitions"
import CloseIcon from "@mui/icons-material/Close"

export type FullScreenDialogProps = {
    open: boolean
    onClose: Function
    title: React.ReactNode
    children: React.ReactNode
}

export const FullScreenDialog = (props: FullScreenDialogProps): JSX.Element => {

    const {
        title,
        children,
        open,
        onClose,
    } = props

    const handleClose = () => {
        onClose()
    }

    return (
        <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
        >
            <AppBar sx={{ position: "relative" }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
            <>{children && children}</>
        </Dialog>
    )
}

// =============================================================================

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
    children: React.ReactElement;
  },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />
})
