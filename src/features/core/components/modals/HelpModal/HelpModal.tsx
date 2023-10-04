import { useDispatch, useSelector } from "react-redux"

import { Actions, Selectors } from "@app/state"
import { FullScreenDialog } from "@app/features/shared"
import { Content } from "./Content"

export const HelpModal = (): JSX.Element => {

    const dispatch = useDispatch()

    const open = useSelector(Selectors.Core.openModals.help)

    const handleClose = () => {
        dispatch(Actions.Core.closeModal("help"))
    }

    return (
        <FullScreenDialog
            title="Help"
            open={open}
            onClose={handleClose}
        >
            <Content />
        </FullScreenDialog>
    )
}
