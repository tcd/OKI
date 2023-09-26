import { useSelector } from "react-redux"
import { SxProps, Box } from "@mui/material"
import {
    CSSTransition,
    TransitionGroup,
} from "react-transition-group"

import { Selectors } from "@app/state"
import { Notification } from "."

const boxSx: SxProps = {
    position: "absolute",
    zIndex: 1_000_000,
    left: 0,
    bottom: 0,
    paddingLeft: "24px",
    paddingBottom: "12px",
    overflow: "hidden",
}

/**
 * Container element that displays all app notifications.
 */
export const AppNotifications = (): JSX.Element => {

    const notifications = useSelector(Selectors.Notifications.notifications)

    let elements
    if ((notifications?.length ?? 0) > 0) {
        elements = notifications.map((x) => {
            return (
                <CSSTransition
                    key={x.id}
                    timeout={500}
                >
                    <Notification {...x} />
                </CSSTransition>
            )
        })
    }

    return (
        <Box sx={boxSx}>
            <TransitionGroup>
                {elements}
            </TransitionGroup>
        </Box>
    )
}
