import noop from "lodash/noop"
import { forwardRef, SyntheticEvent } from "react"
import {
    Alert,
    AlertProps,
    AlertTitle,
    IconButton,
} from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"

export interface NotificationContentProps extends INotification {
    onCloseClick: () => void
    onClose?: (event?: SyntheticEvent) => void
    [key: string]: any
}

export const NotificationContent = forwardRef<HTMLDivElement, NotificationContentProps>(function NotificationContent(props: NotificationContentProps, ref) {

    const {
        variant: severity,
        onClose = noop,
        onCloseClick,
        message,
        timestamp = undefined,
        // discards:
        dismissed,
        autoHideDuration,
        devOnly,
        // other
        ...otherProps
    } = props

    const action = (
        <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={onCloseClick}
        >
            <CloseIcon fontSize="inherit" />
        </IconButton>
    )

    const alertProps: AlertProps = {
        ref: ref,
        severity,
        action,
        onClose: onClose,
        variant: "filled",
        sx: {
            zIndex: 1_000_001,
            width: 350,
            mt: 1,
        },
        ...otherProps,
    }

    return (
        <Alert {...alertProps}>
            {!!timestamp && <AlertTitle>{timestamp}</AlertTitle>}
            {message}
        </Alert>
    )
})
