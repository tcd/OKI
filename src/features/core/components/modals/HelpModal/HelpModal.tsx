import { useDispatch, useSelector } from "react-redux"

import { Actions, Selectors } from "@app/state"
import { FullScreenDialog } from "@app/features/shared"
import { Help } from "./Help"

export const HelpModal = (): JSX.Element => {

    const dispatch = useDispatch()

    const open = useSelector(Selectors.Core.openModals.help)

    const handleClose = () => {
        dispatch(Actions.Core.closeModal())
    }

    return (
        <FullScreenDialog
            title="Help"
            open={open}
            onClose={handleClose}
        >
            <Help />
        </FullScreenDialog>
    )
}
